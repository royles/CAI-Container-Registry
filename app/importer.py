"""Copy container images from remote registries into project-local storage."""

from __future__ import annotations

import json
import uuid
from dataclasses import dataclass, field
from datetime import datetime, timezone
from pathlib import Path
from typing import Any

from app.config import Settings
from app.local_storage import LocalRegistryStorage
from app.remote_client import (
    ImageReference,
    RemoteRegistryAuth,
    RemoteRegistryClient,
    manifest_blob_digests,
    parse_image_reference,
)

_MANIFEST_LIST_TYPES = {
    "application/vnd.docker.distribution.manifest.list.v2+json",
    "application/vnd.oci.image.index.v1+json",
}


@dataclass
class ImportJob:
    id: str
    source: str
    target_repo: str
    target_tag: str
    status: str = "pending"
    message: str = ""
    created_at: str = field(default_factory=lambda: datetime.now(timezone.utc).isoformat())
    finished_at: str | None = None

    def to_dict(self) -> dict[str, Any]:
        return {
            "id": self.id,
            "source": self.source,
            "target_repo": self.target_repo,
            "target_tag": self.target_tag,
            "status": self.status,
            "message": self.message,
            "created_at": self.created_at,
            "finished_at": self.finished_at,
        }


class ImportJobStore:
    def __init__(self, directory: Path) -> None:
        self.directory = directory
        self.directory.mkdir(parents=True, exist_ok=True)

    def _path(self, job_id: str) -> Path:
        return self.directory / f"{job_id}.json"

    def save(self, job: ImportJob) -> None:
        self._path(job.id).write_text(json.dumps(job.to_dict(), indent=2), encoding="utf-8")

    def load(self, job_id: str) -> ImportJob | None:
        path = self._path(job_id)
        if not path.is_file():
            return None
        data = json.loads(path.read_text(encoding="utf-8"))
        return ImportJob(**data)

    def list_jobs(self) -> list[ImportJob]:
        jobs: list[ImportJob] = []
        for path in sorted(self.directory.glob("*.json")):
            data = json.loads(path.read_text(encoding="utf-8"))
            jobs.append(ImportJob(**data))
        return sorted(jobs, key=lambda j: j.created_at, reverse=True)


class ImageImporter:
    def __init__(self, settings: Settings) -> None:
        self.settings = settings
        self.storage = LocalRegistryStorage(settings.registry_data_dir)
        self.jobs = ImportJobStore(settings.import_jobs_dir)

    def replicate(
        self,
        source: str,
        target_repo: str,
        *,
        target_tag: str | None = None,
        replicate_all_tags: bool = False,
        remote_auth: RemoteRegistryAuth | None = None,
        job_id: str | None = None,
    ) -> ImportJob:
        src_ref = parse_image_reference(source)
        effective_target = (target_repo or "").strip() or src_ref.repository
        if replicate_all_tags:
            job = ImportJob(
                id=job_id or str(uuid.uuid4()),
                source=source,
                target_repo=effective_target,
                target_tag="*",
                status="running",
            )
            self.jobs.save(job)
            client = RemoteRegistryClient(self.settings, remote_auth)
            try:
                tags = client.list_tags(src_ref)
                if not tags:
                    raise RuntimeError(f"No tags found for {src_ref.registry}/{src_ref.repository}")
                copied_tags: list[str] = []
                errors: list[str] = []
                for tag in tags:
                    image = f"{src_ref.registry}/{src_ref.repository}:{tag}"
                    try:
                        sub = self.import_image(
                            image,
                            effective_target,
                            tag,
                            remote_auth=remote_auth,
                        )
                        if sub.status == "succeeded":
                            copied_tags.append(tag)
                        else:
                            errors.append(f"{tag}: {sub.message}")
                    except Exception as exc:  # noqa: BLE001
                        errors.append(f"{tag}: {exc}")
                if errors and not copied_tags:
                    job.status = "failed"
                    job.message = "; ".join(errors)
                elif errors:
                    job.status = "succeeded"
                    job.message = f"Replicated {len(copied_tags)} tags; warnings: {'; '.join(errors)}"
                else:
                    job.status = "succeeded"
                    job.message = f"Replicated {len(copied_tags)} tags to {effective_target}"
            except Exception as exc:  # noqa: BLE001
                job.status = "failed"
                job.message = str(exc)
            finally:
                client.close()
            job.finished_at = datetime.now(timezone.utc).isoformat()
            self.jobs.save(job)
            return job

        tag = target_tag or src_ref.tag
        return self.import_image(
            source,
            effective_target,
            tag,
            remote_auth=remote_auth,
            job_id=job_id,
        )

    def import_image(
        self,
        source: str,
        target_repo: str,
        target_tag: str,
        *,
        remote_auth: RemoteRegistryAuth | None = None,
        job_id: str | None = None,
    ) -> ImportJob:
        job = ImportJob(
            id=job_id or str(uuid.uuid4()),
            source=source,
            target_repo=target_repo,
            target_tag=target_tag,
            status="running",
        )
        self.jobs.save(job)
        try:
            self._import_http(source, target_repo, target_tag, remote_auth, job)
            job.status = "succeeded"
            if not job.message:
                job.message = f"Imported to {target_repo}:{target_tag}"
        except Exception as exc:  # noqa: BLE001 - persist failure on job record
            job.status = "failed"
            job.message = str(exc)
        job.finished_at = datetime.now(timezone.utc).isoformat()
        self.jobs.save(job)
        return job

    def _import_http(
        self,
        source: str,
        target_repo: str,
        target_tag: str,
        remote_auth: RemoteRegistryAuth | None,
        job: ImportJob,
    ) -> None:
        self.storage.validate_repo_name(target_repo)
        src_ref = parse_image_reference(source)
        client = RemoteRegistryClient(self.settings, remote_auth)
        try:
            copied: set[str] = set()
            digest, manifest_bytes = self._copy_manifest_tree(client, src_ref, copied)
            self.storage.link_manifest(target_repo, target_tag, digest, manifest_bytes)
            job.message = f"Copied {len(copied)} blobs; manifest {digest}"
        finally:
            client.close()

    def _copy_manifest_tree(
        self,
        client: RemoteRegistryClient,
        ref: ImageReference,
        copied: set[str],
    ) -> tuple[str, bytes]:
        digest, content_type, manifest_bytes = client.get_manifest(ref)
        self._store_blob(digest, manifest_bytes, copied)

        media = content_type.split(";")[0].strip()
        if media in _MANIFEST_LIST_TYPES:
            doc = json.loads(manifest_bytes)
            for desc in doc.get("manifests", []):
                child_digest = desc.get("digest")
                if not child_digest:
                    continue
                child_bytes = client.get_blob(ref, child_digest)
                self._store_blob(child_digest, child_bytes, copied)
                self._copy_manifest_blobs(client, ref, child_bytes, copied)
        else:
            self._copy_manifest_blobs(client, ref, manifest_bytes, copied, content_type)

        return digest, manifest_bytes

    def _copy_manifest_blobs(
        self,
        client: RemoteRegistryClient,
        ref: ImageReference,
        manifest_bytes: bytes,
        copied: set[str],
        content_type: str = "application/vnd.docker.distribution.manifest.v2+json",
    ) -> None:
        for blob_digest in manifest_blob_digests(manifest_bytes, content_type):
            if blob_digest in copied or self.storage.has_blob(blob_digest):
                copied.add(blob_digest)
                continue
            data = client.get_blob(ref, blob_digest)
            self._store_blob(blob_digest, data, copied)

    def _store_blob(self, digest: str, data: bytes, copied: set[str]) -> None:
        if digest in copied and self.storage.has_blob(digest):
            return
        self.storage.write_blob(digest, data)
        copied.add(digest)

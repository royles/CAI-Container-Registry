"""Rename a repository and update in-app metadata that references the old name."""

from __future__ import annotations

import json
import re
from pathlib import Path
from typing import Any

from app.config import Settings
from app.importer import ImportJobStore
from app.local_storage import LocalRegistryStorage
from app.upload_store import BlobUploadStore

_MANIFEST_LIST_TYPES = frozenset(
    {
        "application/vnd.docker.distribution.manifest.list.v2+json",
        "application/vnd.oci.image.index.v1+json",
    }
)

_REF_LABEL_KEYS = frozenset(
    {
        "org.opencontainers.image.ref.name",
        "org.opencontainers.image.source",
        "org.opencontainers.image.url",
    }
)


def registry_host_candidates(
    settings: Settings,
    request_netloc: str | None = None,
) -> tuple[str, ...]:
    """Hosts used when rewriting image ref strings inside stored metadata."""
    hosts: list[str] = []
    if settings.public_registry_host:
        hosts.append(settings.public_registry_host.strip())
    if request_netloc:
        hosts.append(request_netloc.strip())
    return tuple(dict.fromkeys(h for h in hosts if h))


def replace_repo_in_image_string(
    text: str,
    old_repo: str,
    new_repo: str,
    registry_hosts: tuple[str, ...],
) -> str:
    """Replace old repository path in common image reference strings."""
    if old_repo not in text:
        return text
    result = text
    for host in registry_hosts:
        old_prefix = f"{host}/{old_repo}"
        new_prefix = f"{host}/{new_repo}"
        result = result.replace(f"{old_prefix}:", f"{new_prefix}:")
        result = result.replace(f"{old_prefix}@", f"{new_prefix}@")
    result = result.replace(f"/v2/{old_repo}/", f"/v2/{new_repo}/")
    if result == old_repo:
        return new_repo
    if result.startswith(f"{old_repo}:"):
        return f"{new_repo}{result[len(old_repo):]}"
    if result.startswith(f"{old_repo}@"):
        return f"{new_repo}{result[len(old_repo):]}"
    # Match host/.../old_repo:tag when old_repo contains slashes
    for host in registry_hosts:
        needle = f"{host}/"
        if needle in result and f"/{old_repo}:" in result:
            result = result.replace(f"/{old_repo}:", f"/{new_repo}:")
            result = result.replace(f"/{old_repo}@", f"/{new_repo}@")
    return result


def _patch_string_map(
    container: dict[str, Any],
    old_repo: str,
    new_repo: str,
    registry_hosts: tuple[str, ...],
    *,
    keys: frozenset[str] | None = None,
) -> bool:
    changed = False
    for key, value in list(container.items()):
        if keys is not None and key not in keys:
            continue
        if not isinstance(value, str):
            continue
        updated = replace_repo_in_image_string(value, old_repo, new_repo, registry_hosts)
        if updated != value:
            container[key] = updated
            changed = True
    return changed


def _rewrite_config_bytes(
    config_bytes: bytes,
    old_repo: str,
    new_repo: str,
    registry_hosts: tuple[str, ...],
) -> tuple[bytes, bool]:
    try:
        config = json.loads(config_bytes.decode("utf-8"))
    except (json.JSONDecodeError, UnicodeDecodeError):
        return config_bytes, False
    if not isinstance(config, dict):
        return config_bytes, False

    changed = False
    for key in ("Labels", "labels", "Annotations", "annotations"):
        block = config.get(key)
        if not isinstance(block, dict):
            continue
        if key.lower() == "labels":
            if _patch_string_map(
                block, old_repo, new_repo, registry_hosts, keys=_REF_LABEL_KEYS
            ):
                changed = True
            for label_key, value in list(block.items()):
                if label_key in _REF_LABEL_KEYS or not isinstance(value, str):
                    continue
                if old_repo not in value:
                    continue
                updated = replace_repo_in_image_string(
                    value, old_repo, new_repo, registry_hosts
                )
                if updated != value:
                    block[label_key] = updated
                    changed = True
        elif _patch_string_map(block, old_repo, new_repo, registry_hosts):
            changed = True

    if not changed:
        return config_bytes, False
    return json.dumps(config, separators=(",", ":"), sort_keys=True).encode("utf-8"), True


def _manifest_media_type(manifest_bytes: bytes) -> str:
    try:
        doc = json.loads(manifest_bytes.decode("utf-8"))
        if isinstance(doc, dict) and doc.get("mediaType"):
            return str(doc["mediaType"]).split(";")[0].strip()
    except (json.JSONDecodeError, UnicodeDecodeError):
        pass
    return "application/vnd.docker.distribution.manifest.v2+json"


def _rewrite_manifest_bytes(
    storage: LocalRegistryStorage,
    manifest_bytes: bytes,
    content_type: str,
    old_repo: str,
    new_repo: str,
    registry_hosts: tuple[str, ...],
) -> tuple[bytes, bool]:
    media = content_type.split(";")[0].strip()
    if media in _MANIFEST_LIST_TYPES:
        try:
            doc = json.loads(manifest_bytes.decode("utf-8"))
        except (json.JSONDecodeError, UnicodeDecodeError):
            return manifest_bytes, False
        if not isinstance(doc, dict):
            return manifest_bytes, False

        tree_changed = False
        new_descriptors: list[Any] = []
        for desc in doc.get("manifests") or []:
            if not isinstance(desc, dict):
                new_descriptors.append(desc)
                continue
            child_digest = desc.get("digest")
            if not isinstance(child_digest, str):
                new_descriptors.append(desc)
                continue
            try:
                child_bytes = storage.read_blob(child_digest)
            except FileNotFoundError:
                new_descriptors.append(desc)
                continue
            child_type = str(desc.get("mediaType") or _manifest_media_type(child_bytes))
            new_child_bytes, child_changed = _rewrite_manifest_bytes(
                storage,
                child_bytes,
                child_type,
                old_repo,
                new_repo,
                registry_hosts,
            )
            if not child_changed:
                new_descriptors.append(desc)
                continue
            tree_changed = True
            new_digest = storage.digest_bytes(new_child_bytes)
            storage.write_blob(new_digest, new_child_bytes)
            updated = dict(desc)
            updated["digest"] = new_digest
            updated["size"] = len(new_child_bytes)
            new_descriptors.append(updated)

        if not tree_changed:
            return manifest_bytes, False
        doc["manifests"] = new_descriptors
        return json.dumps(doc, separators=(",", ":"), sort_keys=True).encode("utf-8"), True

    try:
        doc = json.loads(manifest_bytes.decode("utf-8"))
    except (json.JSONDecodeError, UnicodeDecodeError):
        return manifest_bytes, False
    if not isinstance(doc, dict):
        return manifest_bytes, False

    changed = False
    annotations = doc.get("annotations")
    if isinstance(annotations, dict) and _patch_string_map(
        annotations, old_repo, new_repo, registry_hosts
    ):
        changed = True

    config_desc = doc.get("config")
    if isinstance(config_desc, dict) and isinstance(config_desc.get("digest"), str):
        try:
            config_bytes = storage.read_blob(config_desc["digest"])
        except FileNotFoundError:
            config_bytes = b""
        if config_bytes:
            new_config_bytes, config_changed = _rewrite_config_bytes(
                config_bytes, old_repo, new_repo, registry_hosts
            )
            if config_changed:
                new_config_digest = storage.digest_bytes(new_config_bytes)
                storage.write_blob(new_config_digest, new_config_bytes)
                config_desc["digest"] = new_config_digest
                config_desc["size"] = len(new_config_bytes)
                changed = True

    if not changed:
        return manifest_bytes, False
    return json.dumps(doc, separators=(",", ":"), sort_keys=True).encode("utf-8"), True


def _rewrite_repository_image_metadata(
    storage: LocalRegistryStorage,
    repo: str,
    old_repo: str,
    new_repo: str,
    registry_hosts: tuple[str, ...],
) -> int:
    """Update OCI config/manifest blobs for every tag in repo. Returns count of tags relinked."""
    updated_tags = 0
    for tag in storage.list_tags(repo):
        _digest, manifest_bytes = storage.resolve_tag(repo, tag)
        media_type = _manifest_media_type(manifest_bytes)
        new_bytes, changed = _rewrite_manifest_bytes(
            storage,
            manifest_bytes,
            media_type,
            old_repo,
            new_repo,
            registry_hosts,
        )
        if changed:
            storage.put_manifest(repo, tag, new_bytes)
            updated_tags += 1
    return updated_tags


def _rewrite_import_job_messages(text: str, old_repo: str, new_repo: str) -> str:
    if old_repo not in text:
        return text
    # Target-style phrases from importer
    patterns = [
        (rf"\bto {re.escape(old_repo)}:", f"to {new_repo}:"),
        (rf"\bto {re.escape(old_repo)}\b", f"to {new_repo}"),
        (rf"\bImported to {re.escape(old_repo)}:", f"Imported to {new_repo}:"),
        (rf"\bReplicated \d+ tags to {re.escape(old_repo)}\b", lambda m: m.group(0).replace(old_repo, new_repo)),
    ]
    result = text
    for pattern, repl in patterns[:3]:
        result = re.sub(pattern, repl, result)
    result = result.replace(f"{old_repo}:", f"{new_repo}:")
    return result


def rename_repository_with_dependent_metadata(
    storage: LocalRegistryStorage,
    old_name: str,
    new_name: str,
    *,
    registry_hosts: tuple[str, ...] = (),
    import_jobs_dir: Path | None = None,
    upload_store: BlobUploadStore | None = None,
) -> dict[str, int]:
    """
    Rename repository metadata on disk and update dependent records:
    OCI labels/annotations, import job history, in-progress blob uploads.
    """
    hosts = tuple(h.strip() for h in registry_hosts if h and h.strip())
    tags_relinked = _rewrite_repository_image_metadata(
        storage, old_name, old_name, new_name, hosts
    )
    storage.rename_repository(old_name, new_name)

    jobs_updated = 0
    if import_jobs_dir is not None:
        store = ImportJobStore(import_jobs_dir)
        for job in store.list_jobs():
            touched = False
            if job.target_repo == old_name:
                job.target_repo = new_name
                touched = True
            new_message = _rewrite_import_job_messages(job.message, old_name, new_name)
            if new_message != job.message:
                job.message = new_message
                touched = True
            if touched:
                store.save(job)
                jobs_updated += 1

    uploads_updated = 0
    if upload_store is not None:
        uploads_updated = upload_store.rename_repository(old_name, new_name)

    return {
        "tags_metadata_updated": tags_relinked,
        "import_jobs_updated": jobs_updated,
        "upload_sessions_updated": uploads_updated,
    }

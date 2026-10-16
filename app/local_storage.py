"""Filesystem layout compatible with Docker Registry V2 (distribution)."""

from __future__ import annotations

import hashlib
import json
import os
import re
from pathlib import Path

_REPO_NAME = re.compile(r"^[a-z0-9]+([._-][a-z0-9]+)*(/[a-z0-9]+([._-][a-z0-9]+)*)*$")


class LocalRegistryStorage:
    def __init__(self, root: Path) -> None:
        self.root = root
        self._blobs = root / "docker/registry/v2/blobs/sha256"
        self._repos = root / "docker/registry/v2/repositories"

    def validate_repo_name(self, name: str) -> None:
        if name == "_catalog" or not _REPO_NAME.match(name):
            raise ValueError(f"Invalid repository name: {name}")

    def blob_path(self, digest: str) -> Path:
        if not digest.startswith("sha256:"):
            raise ValueError("Only sha256 digests are supported")
        hex_digest = digest.removeprefix("sha256:")
        return self._blobs / hex_digest[:2] / hex_digest[2:] / "data"

    def has_blob(self, digest: str) -> bool:
        return self.blob_path(digest).is_file()

    def write_blob(self, digest: str, data: bytes) -> None:
        expected = f"sha256:{hashlib.sha256(data).hexdigest()}"
        if digest != expected:
            raise ValueError(f"Digest mismatch: expected {expected}, got {digest}")
        path = self.blob_path(digest)
        path.parent.mkdir(parents=True, exist_ok=True)
        if path.is_file():
            return
        tmp = path.with_suffix(".tmp")
        tmp.write_bytes(data)
        os.replace(tmp, path)

    def _repo_dir(self, repo: str) -> Path:
        return self._repos.joinpath(*repo.split("/"))

    def _manifest_revision_path(self, repo: str, digest: str) -> Path:
        hex_digest = digest.removeprefix("sha256:")
        return (
            self._repo_dir(repo)
            / "_manifests"
            / "revisions"
            / "sha256"
            / hex_digest
        )

    def _tag_current_path(self, repo: str, tag: str) -> Path:
        return self._repo_dir(repo) / "_manifests" / "tags" / tag / "current"

    def link_manifest(self, repo: str, tag: str, manifest_digest: str, manifest_bytes: bytes) -> None:
        self.validate_repo_name(repo)
        self.write_blob(manifest_digest, manifest_bytes)
        rev = self._manifest_revision_path(repo, manifest_digest)
        link_file = rev / "link"
        link_file.parent.mkdir(parents=True, exist_ok=True)
        link_file.write_text(manifest_digest, encoding="utf-8")
        tag_path = self._tag_current_path(repo, tag)
        tag_path.parent.mkdir(parents=True, exist_ok=True)
        tag_path.write_text(manifest_digest, encoding="utf-8")
        index_path = (
            self._repo_dir(repo)
            / "_manifests"
            / "tags"
            / "index"
            / "sha256"
            / manifest_digest.removeprefix("sha256:")
        )
        index_path.parent.mkdir(parents=True, exist_ok=True)
        index_path.write_text(tag, encoding="utf-8")

    def read_blob(self, digest: str) -> bytes:
        path = self.blob_path(digest)
        if not path.is_file():
            raise FileNotFoundError(digest)
        return path.read_bytes()

    def list_repositories(self) -> list[str]:
        if not self._repos.is_dir():
            return []
        found: set[str] = set()

        def walk(base: Path, prefix: str) -> None:
            if not base.is_dir():
                return
            if (base / "_manifests").is_dir() and prefix:
                found.add(prefix)
            for entry in base.iterdir():
                if entry.name == "_manifests" or not entry.is_dir():
                    continue
                name = f"{prefix}/{entry.name}" if prefix else entry.name
                walk(entry, name)

        walk(self._repos, "")
        return sorted(found)

    def list_tags(self, repo: str) -> list[str]:
        self.validate_repo_name(repo)
        tags_dir = self._repo_dir(repo) / "_manifests" / "tags"
        if not tags_dir.is_dir():
            return []
        tags: list[str] = []
        for entry in tags_dir.iterdir():
            if entry.is_dir() and entry.name not in ("index",) and (entry / "current").is_file():
                tags.append(entry.name)
        return sorted(tags)

    def resolve_tag(self, repo: str, reference: str) -> tuple[str, bytes]:
        self.validate_repo_name(repo)
        if reference.startswith("sha256:"):
            digest = reference
            data = self.read_blob(digest)
            return digest, data
        tag_path = self._tag_current_path(repo, reference)
        if not tag_path.is_file():
            raise FileNotFoundError(reference)
        digest = tag_path.read_text(encoding="utf-8").strip()
        return digest, self.read_blob(digest)

    def delete_tag(self, repo: str, tag: str) -> None:
        self.validate_repo_name(repo)
        tag_path = self._tag_current_path(repo, tag)
        if tag_path.is_file():
            tag_path.unlink()

    def describe_image(self, repo: str, tag: str) -> dict:
        """Human-readable summary of where an image's metadata and blobs are stored."""
        from app.remote_client import manifest_blob_digests

        digest, manifest_bytes = self.resolve_tag(repo, tag)
        manifest_path = self.blob_path(digest)
        try:
            manifest_json = json.loads(manifest_bytes.decode("utf-8"))
            media_type = manifest_json.get(
                "mediaType", "application/vnd.docker.distribution.manifest.v2+json"
            )
        except (json.JSONDecodeError, UnicodeDecodeError):
            media_type = "application/vnd.docker.distribution.manifest.v2+json"

        blobs: list[dict] = []
        for blob_digest in manifest_blob_digests(manifest_bytes, media_type):
            blob_file = self.blob_path(blob_digest)
            entry: dict = {
                "digest": blob_digest,
                "relative_path": str(blob_file.relative_to(self.root)),
            }
            if blob_file.is_file():
                entry["size_bytes"] = blob_file.stat().st_size
            blobs.append(entry)

        tag_link = self._tag_current_path(repo, tag)
        return {
            "repository": repo,
            "tag": tag,
            "manifest_digest": digest,
            "manifest_relative_path": str(manifest_path.relative_to(self.root)),
            "tag_link_relative_path": str(tag_link.relative_to(self.root)),
            "repo_metadata_relative_path": str(self._repo_dir(repo).relative_to(self.root)),
            "blobs": blobs,
        }

    def stats(self) -> dict:
        blob_count = sum(1 for _ in self._blobs.rglob("data")) if self._blobs.is_dir() else 0
        total_bytes = sum(p.stat().st_size for p in self._blobs.rglob("data")) if self._blobs.is_dir() else 0
        return {
            "repositories": len(self.list_repositories()),
            "blobs": blob_count,
            "storage_bytes": total_bytes,
            "data_dir": str(self.root),
        }

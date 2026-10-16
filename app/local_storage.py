"""Filesystem layout compatible with Docker Registry V2 (distribution)."""

from __future__ import annotations

import hashlib
import json
import os
import re
import shutil
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

    @staticmethod
    def digest_bytes(data: bytes) -> str:
        return f"sha256:{hashlib.sha256(data).hexdigest()}"

    def put_manifest(self, repo: str, reference: str, manifest_bytes: bytes) -> str:
        """Store manifest blob and link to tag or digest reference (docker push)."""
        self.validate_repo_name(repo)
        manifest_digest = self.digest_bytes(manifest_bytes)
        self.write_blob(manifest_digest, manifest_bytes)
        rev = self._manifest_revision_path(repo, manifest_digest)
        (rev / "link").parent.mkdir(parents=True, exist_ok=True)
        (rev / "link").write_text(manifest_digest, encoding="utf-8")
        if reference.startswith("sha256:"):
            return manifest_digest
        tag_path = self._tag_current_path(repo, reference)
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
        index_path.write_text(reference, encoding="utf-8")
        return manifest_digest

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
        """Tag names from per-tag current links and the tags/index reverse map."""
        self.validate_repo_name(repo)
        tags_dir = self._repo_dir(repo) / "_manifests" / "tags"
        if not tags_dir.is_dir():
            return []
        found: set[str] = set()
        for entry in tags_dir.iterdir():
            if not entry.is_dir() or entry.name == "index":
                continue
            if (entry / "current").is_file():
                found.add(entry.name)
                continue
            # Some layouts store the digest in a "link" file instead of "current"
            if (entry / "link").is_file():
                found.add(entry.name)
        index_dir = tags_dir / "index" / "sha256"
        if index_dir.is_dir():
            for index_file in index_dir.iterdir():
                if not index_file.is_file():
                    continue
                try:
                    tag_name = index_file.read_text(encoding="utf-8").strip()
                except OSError:
                    continue
                if tag_name:
                    found.add(tag_name)
        return sorted(found)

    def list_manifest_revision_digests(self, repo: str) -> list[str]:
        """Manifest digests linked under _manifests/revisions/sha256/."""
        self.validate_repo_name(repo)
        rev_root = self._repo_dir(repo) / "_manifests" / "revisions" / "sha256"
        if not rev_root.is_dir():
            return []
        digests: list[str] = []
        for entry in sorted(rev_root.iterdir()):
            if not entry.is_dir():
                continue
            link = entry / "link"
            if link.is_file():
                digests.append(link.read_text(encoding="utf-8").strip())
            else:
                digests.append(f"sha256:{entry.name}")
        return digests

    def resolve_tag(self, repo: str, reference: str) -> tuple[str, bytes]:
        self.validate_repo_name(repo)
        if reference.startswith("sha256:"):
            digest = reference
            data = self.read_blob(digest)
            return digest, data
        tag_path = self._tag_current_path(repo, reference)
        if tag_path.is_file():
            digest = tag_path.read_text(encoding="utf-8").strip()
            return digest, self.read_blob(digest)
        link_path = tag_path.parent / "link"
        if link_path.is_file():
            digest = link_path.read_text(encoding="utf-8").strip()
            return digest, self.read_blob(digest)
        index_dir = self._repo_dir(repo) / "_manifests" / "tags" / "index" / "sha256"
        if index_dir.is_dir():
            for index_file in index_dir.iterdir():
                if not index_file.is_file():
                    continue
                try:
                    if index_file.read_text(encoding="utf-8").strip() == reference:
                        digest = f"sha256:{index_file.name}"
                        return digest, self.read_blob(digest)
                except OSError:
                    continue
        raise FileNotFoundError(reference)

    def tags_for_manifest_digest(self, repo: str, digest: str) -> list[str]:
        """Tag names currently resolving to this manifest digest."""
        self.validate_repo_name(repo)
        found: list[str] = []
        for tag in self.list_tags(repo):
            try:
                resolved, _ = self.resolve_tag(repo, tag)
            except FileNotFoundError:
                continue
            if resolved == digest:
                found.append(tag)
        return sorted(found)

    def _remove_tag_index_entry(self, repo: str, digest: str, tag: str) -> None:
        hex_digest = digest.removeprefix("sha256:")
        index_path = (
            self._repo_dir(repo)
            / "_manifests"
            / "tags"
            / "index"
            / "sha256"
            / hex_digest
        )
        if not index_path.is_file():
            return
        try:
            indexed_tag = index_path.read_text(encoding="utf-8").strip()
        except OSError:
            return
        if indexed_tag == tag:
            index_path.unlink()

    def _remove_manifest_revision_link(self, repo: str, digest: str) -> bool:
        rev = self._manifest_revision_path(repo, digest)
        if not rev.is_dir():
            return False
        shutil.rmtree(rev)
        return True

    def remove_tag(self, repo: str, tag: str) -> dict:
        """
        Delete a tag (OCI Distribution tag delete / manifest delete by tag).
        Manifest blobs and revision links remain until no tag references the digest.
        """
        self.validate_repo_name(repo)
        digest, _ = self.resolve_tag(repo, tag)
        tag_dir = self._tag_current_path(repo, tag).parent
        if tag_dir.is_dir():
            shutil.rmtree(tag_dir)
        self._remove_tag_index_entry(repo, digest, tag)
        remaining = self.tags_for_manifest_digest(repo, digest)
        removed_revision = False
        if not remaining:
            removed_revision = self._remove_manifest_revision_link(repo, digest)
        return {
            "repository": repo,
            "tag": tag,
            "manifest_digest": digest,
            "tags_remaining_for_digest": remaining,
            "manifest_revision_removed": removed_revision,
        }

    def remove_manifest_digest(self, repo: str, digest: str) -> dict:
        """Remove all tags and the revision link for a manifest digest in this repository."""
        self.validate_repo_name(repo)
        if not digest.startswith("sha256:"):
            raise ValueError("digest must be sha256:…")
        removed_tags: list[str] = []
        for tag in self.tags_for_manifest_digest(repo, digest):
            tag_dir = self._tag_current_path(repo, tag).parent
            if tag_dir.is_dir():
                shutil.rmtree(tag_dir)
            self._remove_tag_index_entry(repo, digest, tag)
            removed_tags.append(tag)
        removed_revision = self._remove_manifest_revision_link(repo, digest)
        return {
            "repository": repo,
            "manifest_digest": digest,
            "removed_tags": removed_tags,
            "manifest_revision_removed": removed_revision,
        }

    def delete_tag(self, repo: str, tag: str) -> None:
        """Deprecated: use remove_tag()."""
        self.remove_tag(repo, tag)

    def create_repository(self, name: str) -> None:
        """Create an empty repository (ready for docker push or replicate)."""
        self.validate_repo_name(name)
        repo_path = self._repo_dir(name)
        if repo_path.is_dir() and (repo_path / "_manifests").is_dir():
            raise ValueError(f"Repository already exists: {name}")
        tags_root = repo_path / "_manifests" / "tags"
        tags_root.mkdir(parents=True, exist_ok=True)

    def delete_repository(self, name: str) -> None:
        """Remove repository metadata (tags/manifest links). Shared blobs are not deleted."""
        self.validate_repo_name(name)
        path = self._repo_dir(name)
        if not path.is_dir():
            raise FileNotFoundError(name)
        shutil.rmtree(path)
        self._prune_empty_repo_parents(path.parent)

    def rename_repository(self, old_name: str, new_name: str) -> None:
        """
        Move repository metadata on disk (tags/manifest links). Blob content is
        shared under docker/registry/v2/blobs/ and is not copied or moved.
        """
        self.validate_repo_name(old_name)
        self.validate_repo_name(new_name)
        if old_name == new_name:
            return
        old_path = self._repo_dir(old_name)
        new_path = self._repo_dir(new_name)
        if not old_path.is_dir():
            raise FileNotFoundError(old_name)
        if new_path.exists():
            raise ValueError(f"Repository already exists: {new_name}")
        new_path.parent.mkdir(parents=True, exist_ok=True)
        shutil.move(str(old_path), str(new_path))
        self._prune_empty_repo_parents(old_path.parent)

    def _prune_empty_repo_parents(self, start: Path) -> None:
        """Remove empty directories left under repositories/ after a rename."""
        current = start
        while current != self._repos and self._repos in current.parents:
            if any(current.iterdir()):
                break
            current.rmdir()
            current = current.parent

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

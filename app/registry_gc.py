"""Blob reachability and garbage collection for local Distribution storage."""

from __future__ import annotations

import json
from typing import Any

from app.local_storage import LocalRegistryStorage
from app.remote_client import manifest_blob_digests

_MANIFEST_LIST_TYPES = {
    "application/vnd.docker.distribution.manifest.list.v2+json",
    "application/vnd.oci.image.index.v1+json",
}


def _manifest_media_type(manifest_bytes: bytes) -> str:
    try:
        doc = json.loads(manifest_bytes.decode("utf-8"))
        if isinstance(doc, dict) and doc.get("mediaType"):
            return str(doc["mediaType"]).split(";")[0].strip()
    except (json.JSONDecodeError, UnicodeDecodeError):
        pass
    return "application/vnd.docker.distribution.manifest.v2+json"


def collect_reachable_blob_digests(storage: LocalRegistryStorage) -> set[str]:
    """All blob digests referenced by repository manifest revision links."""
    reachable: set[str] = set()

    def walk_manifest(digest: str, seen_manifests: set[str]) -> None:
        if digest in seen_manifests:
            return
        seen_manifests.add(digest)
        reachable.add(digest)
        try:
            manifest_bytes = storage.read_blob(digest)
        except FileNotFoundError:
            return
        media = _manifest_media_type(manifest_bytes)
        for child in manifest_blob_digests(manifest_bytes, media):
            if child.startswith("sha256:"):
                if media in _MANIFEST_LIST_TYPES:
                    walk_manifest(child, seen_manifests)
                else:
                    reachable.add(child)

    for repo in storage.list_repositories():
        for digest in storage.list_manifest_revision_digests(repo):
            walk_manifest(digest, set())
    return reachable


def list_orphan_blob_digests(storage: LocalRegistryStorage) -> list[str]:
    reachable = collect_reachable_blob_digests(storage)
    orphans: list[str] = []
    blobs_root = storage.root / "docker/registry/v2/blobs/sha256"
    if not blobs_root.is_dir():
        return []
    for path in blobs_root.rglob("data"):
        if not path.is_file():
            continue
        rel = path.relative_to(blobs_root)
        if len(rel.parts) != 3:
            continue
        digest = f"sha256:{rel.parts[0]}{rel.parts[1]}"
        if digest not in reachable:
            orphans.append(digest)
    return sorted(orphans)


def run_garbage_collection(
    storage: LocalRegistryStorage,
    *,
    dry_run: bool = True,
) -> dict[str, Any]:
    """
    Remove blob files not reachable from any repository manifest revision.
    Repository metadata (tags) is not modified — run after tag/manifest deletes.
    """
    orphans = list_orphan_blob_digests(storage)
    freed_bytes = 0
    deleted: list[str] = []
    for digest in orphans:
        try:
            path = storage.blob_path(digest)
        except ValueError:
            continue
        if path.is_file():
            freed_bytes += path.stat().st_size
            if not dry_run:
                path.unlink()
                deleted.append(digest)
                parent = path.parent
                if parent.is_dir() and not any(parent.iterdir()):
                    parent.rmdir()
                    grand = parent.parent
                    if grand.is_dir() and not any(grand.iterdir()):
                        grand.rmdir()
    return {
        "dry_run": dry_run,
        "orphan_blobs": len(orphans),
        "orphan_digests": orphans[:50],
        "orphan_digests_truncated": len(orphans) > 50,
        "deleted_blobs": len(deleted) if not dry_run else 0,
        "freed_bytes": freed_bytes if not dry_run else sum(
            storage.blob_path(d).stat().st_size
            for d in orphans
            if storage.has_blob(d)
        ),
        "would_free_bytes": sum(
            storage.blob_path(d).stat().st_size
            for d in orphans
            if storage.has_blob(d)
        ),
    }

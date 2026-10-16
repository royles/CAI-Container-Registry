"""Client-facing image references (registry tag vs runtime full_version)."""

from __future__ import annotations

import re
from typing import Any

from app.cloudera_metadata import inspect_cloudera_runtime_metadata, runtime_label_summary
from app.local_storage import LocalRegistryStorage

_DOCKER_TAG_RE = re.compile(r"^[a-zA-Z0-9_][a-zA-Z0-9._-]{0,127}$")


def docker_tag_safe(value: str) -> str | None:
    """Return value if valid Docker tag, else None."""
    v = value.strip()
    if not v or not _DOCKER_TAG_RE.match(v):
        return None
    return v


def probe_registry_tag(storage: LocalRegistryStorage, repository: str, tag: str) -> dict[str, Any]:
    """Whether /v2/.../manifests/{tag} would resolve locally."""
    try:
        digest, _ = storage.resolve_tag(repository, tag)
        return {"ok": True, "manifest_digest": digest}
    except FileNotFoundError:
        return {"ok": False, "error": f"Tag not found: {repository}:{tag}"}
    except ValueError as exc:
        return {"ok": False, "error": str(exc)}


def build_client_pull_refs(
    registry_host: str,
    repository: str,
    registry_tag: str,
    runtime_summary: dict[str, str | None] | None = None,
    storage: LocalRegistryStorage | None = None,
) -> dict[str, str | bool | None]:
    """
    Pull references for docker pull and Runtime Catalog (no https://).

    Primary URL is always the registry tag (host/repo:tag) — what you push, replicate,
    or pull. Runtime full_version is metadata only unless you also created a matching alias tag.
    """
    host = registry_host.strip().rstrip("/")
    registry_ref = f"{host}/{repository}:{registry_tag}"
    full = (runtime_summary or {}).get("full_version") if runtime_summary else None
    version_tag = docker_tag_safe(full) if full else None
    version_tag_exists = False
    registry_tag_exists = False
    if storage is not None:
        tags = storage.list_tags(repository)
        registry_tag_exists = registry_tag in tags
        if version_tag:
            version_tag_exists = version_tag in tags

    if version_tag and version_tag != registry_tag:
        version_alias_ref = f"{host}/{repository}:{version_tag}"
    else:
        version_alias_ref = None

    client_pull_ref = registry_ref
    catalog_ready = registry_tag_exists
    catalog_warning = None
    if not registry_tag_exists:
        catalog_warning = f"Registry tag '{registry_tag}' not found in storage."

    return {
        "registry_ref": registry_ref,
        "client_pull_ref": client_pull_ref,
        "version_alias_ref": version_alias_ref,
        "runtime_full_version": full,
        "version_tag": version_tag,
        "registry_tag": registry_tag,
        "version_tag_exists": version_tag_exists,
        "registry_tag_exists": registry_tag_exists,
        "catalog_ready": catalog_ready,
        "catalog_warning": catalog_warning,
    }


def ensure_version_tag_alias_for_tag(
    storage: LocalRegistryStorage,
    repo: str,
    source_tag: str,
) -> dict[str, Any]:
    """Create missing full_version alias tag pointing at source_tag's manifest."""
    from app.cloudera_metadata import inspect_cloudera_runtime_metadata

    meta = inspect_cloudera_runtime_metadata(storage, repo, source_tag)
    full = (meta.get("runtime_summary") or {}).get("full_version")
    digest, manifest_bytes = storage.resolve_tag(repo, source_tag)
    alias = sync_version_tag_alias(storage, repo, source_tag, manifest_bytes, full)
    probe_version = probe_registry_tag(storage, repo, alias) if alias else None
    return {
        "repository": repo,
        "source_tag": source_tag,
        "full_version": full,
        "version_tag_alias": alias,
        "manifest_digest": digest,
        "version_tag_probe": probe_version,
    }


def tag_detail_with_refs(
    storage: LocalRegistryStorage,
    registry_host: str,
    repo: str,
    tag: str,
) -> dict:
    """Tag metadata plus client pull refs for UI."""
    detail: dict = {
        "name": tag,
        "runtime_display": None,
        "runtime_summary": {},
        "cloudera_labels_found": {},
    }
    try:
        meta = inspect_cloudera_runtime_metadata(storage, repo, tag)
    except (FileNotFoundError, ValueError):
        detail["runtime_missing"] = True
        detail["pull_refs"] = build_client_pull_refs(
            registry_host, repo, tag, None, storage=storage
        )
        return detail
    summary = meta.get("runtime_summary") or runtime_label_summary(meta.get("all_config_labels") or {})
    detail["runtime_summary"] = summary
    detail["runtime_display"] = summary.get("display")
    detail["cloudera_labels_found"] = meta.get("cloudera_labels_found") or {}
    detail["runtime_missing"] = meta.get("cloudera_labels_missing", True)
    detail["runtime_error"] = meta.get("error")
    detail["version_check"] = meta.get("version_check")
    detail["pull_refs"] = build_client_pull_refs(
        registry_host, repo, tag, summary, storage=storage
    )
    return detail


def find_images_by_version_tag(
    storage: LocalRegistryStorage,
    version_token: str,
) -> list[tuple[str, str]]:
    """Match registry tag name or config full_version (exact)."""
    token = version_token.strip()
    if not token:
        return []
    matches: list[tuple[str, str]] = []
    seen: set[tuple[str, str]] = set()
    for repo in storage.list_repositories():
        tags = storage.list_tags(repo)
        if token in tags:
            key = (repo, token)
            if key not in seen:
                seen.add(key)
                matches.append(key)
        for tag in tags:
            try:
                meta = inspect_cloudera_runtime_metadata(storage, repo, tag)
            except (FileNotFoundError, ValueError):
                continue
            full = (meta.get("runtime_summary") or {}).get("full_version") or ""
            if full != token:
                continue
            pull_tag = token if token in tags else tag
            key = (repo, pull_tag)
            if key not in seen:
                seen.add(key)
                matches.append(key)
    return matches


def sync_version_tag_alias(
    storage: LocalRegistryStorage,
    repo: str,
    source_tag: str,
    manifest_bytes: bytes,
    full_version: str | None,
) -> str | None:
    """Point an additional tag at the same manifest (full_version string) for client pull."""
    alias = docker_tag_safe(full_version) if full_version else None
    if not alias or alias == source_tag:
        return None
    storage.put_manifest(repo, alias, manifest_bytes)
    return alias

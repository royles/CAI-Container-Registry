"""Client-facing image references (registry tag vs runtime full_version)."""

from __future__ import annotations

import re

from app.cloudera_metadata import inspect_cloudera_runtime_metadata, runtime_label_summary
from app.local_storage import LocalRegistryStorage

_DOCKER_TAG_RE = re.compile(r"^[a-zA-Z0-9_][a-zA-Z0-9._-]{0,127}$")


def docker_tag_safe(value: str) -> str | None:
    """Return value if valid Docker tag, else None."""
    v = value.strip()
    if not v or not _DOCKER_TAG_RE.match(v):
        return None
    return v


def build_client_pull_refs(
    registry_host: str,
    repository: str,
    registry_tag: str,
    runtime_summary: dict[str, str | None] | None = None,
) -> dict[str, str]:
    """
    Pull references for docker / Runtime Catalog (no https://).

    When full_version is set, prefer host/repo:full_version as the catalog/client ref.
    registry_tag remains the on-disk tag name (e.g. v5).
    """
    host = registry_host.strip().rstrip("/")
    registry_ref = f"{host}/{repository}:{registry_tag}"
    full = (runtime_summary or {}).get("full_version") if runtime_summary else None
    version_tag = docker_tag_safe(full) if full else None
    if version_tag and version_tag != registry_tag:
        version_ref = f"{host}/{repository}:{version_tag}"
    else:
        version_ref = registry_ref
    return {
        "registry_ref": registry_ref,
        "version_ref": version_ref,
        "client_pull_ref": version_ref,
        "version_tag": version_tag or registry_tag,
        "registry_tag": registry_tag,
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
        detail["pull_refs"] = build_client_pull_refs(registry_host, repo, tag, None)
        return detail
    summary = meta.get("runtime_summary") or runtime_label_summary(meta.get("all_config_labels") or {})
    detail["runtime_summary"] = summary
    detail["runtime_display"] = summary.get("display")
    detail["cloudera_labels_found"] = meta.get("cloudera_labels_found") or {}
    detail["runtime_missing"] = meta.get("cloudera_labels_missing", True)
    detail["runtime_error"] = meta.get("error")
    detail["version_check"] = meta.get("version_check")
    detail["pull_refs"] = build_client_pull_refs(registry_host, repo, tag, summary)
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

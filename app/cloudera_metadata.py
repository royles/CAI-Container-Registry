"""Inspect OCI config blobs for Cloudera ML Runtime metadata."""

from __future__ import annotations

import json
from typing import Any

from app.local_storage import LocalRegistryStorage
from app.remote_client import manifest_blob_digests

# Labels Cloudera Runtime Catalog typically expects on the image config.
CLOUDERA_RUNTIME_LABEL_HINTS = (
    "com.cloudera.ml.runtime.full-version",
    "com.cloudera.ml.runtime.edition",
    "com.cloudera.ml.runtime.maintenance-version",
    "com.cloudera.ml.runtime.short-version",
    "ML_RUNTIME_FULL_VERSION",
    "ML_RUNTIME_EDITION",
    "ML_RUNTIME_SHORT_VERSION",
    "ML_RUNTIME_MAINTENANCE_VERSION",
)

_MANIFEST_LIST_TYPES = {
    "application/vnd.docker.distribution.manifest.list.v2+json",
    "application/vnd.oci.image.index.v1+json",
}

# Logical form fields → (legacy Docker label, com.cloudera.ml.runtime.* label)
RUNTIME_LABEL_FIELDS: dict[str, tuple[str, str]] = {
    "edition": ("ML_RUNTIME_EDITION", "com.cloudera.ml.runtime.edition"),
    "full_version": ("ML_RUNTIME_FULL_VERSION", "com.cloudera.ml.runtime.full-version"),
    "short_version": ("ML_RUNTIME_SHORT_VERSION", "com.cloudera.ml.runtime.short-version"),
    "maintenance_version": (
        "ML_RUNTIME_MAINTENANCE_VERSION",
        "com.cloudera.ml.runtime.maintenance-version",
    ),
}


def runtime_label_summary(labels: dict[str, str]) -> dict[str, str | None]:
    """Human-facing runtime identity strings from config labels."""
    edition = labels.get("ML_RUNTIME_EDITION") or labels.get("com.cloudera.ml.runtime.edition")
    full = labels.get("ML_RUNTIME_FULL_VERSION") or labels.get("com.cloudera.ml.runtime.full-version")
    short = labels.get("ML_RUNTIME_SHORT_VERSION") or labels.get("com.cloudera.ml.runtime.short-version")
    maintenance = labels.get("ML_RUNTIME_MAINTENANCE_VERSION") or labels.get(
        "com.cloudera.ml.runtime.maintenance-version"
    )
    display = edition or full or short or maintenance
    return {
        "display": display,
        "edition": edition,
        "full_version": full,
        "short_version": short,
        "maintenance_version": maintenance,
    }


def _labels_from_config(config: dict[str, Any]) -> dict[str, str]:
    labels: dict[str, str] = config.get("config", {}).get("Labels") or {}
    if not labels:
        raw = config.get("Labels") or {}
        labels = raw if isinstance(raw, dict) else {}
    return {k: str(v) for k, v in labels.items()}


def _config_from_manifest_tree(
    storage: LocalRegistryStorage,
    manifest_bytes: bytes,
    media_type: str,
) -> tuple[dict[str, Any], str | None, str | None]:
    """Load image config JSON and digest from a manifest or index (first child image)."""
    try:
        manifest = json.loads(manifest_bytes.decode("utf-8"))
    except (json.JSONDecodeError, UnicodeDecodeError):
        return {}, None, None
    if not isinstance(manifest, dict):
        return {}, None, None

    media = media_type.split(";")[0].strip()
    if media in _MANIFEST_LIST_TYPES:
        for desc in manifest.get("manifests") or []:
            if not isinstance(desc, dict):
                continue
            child_digest = desc.get("digest")
            if not isinstance(child_digest, str):
                continue
            try:
                child_bytes = storage.read_blob(child_digest)
            except FileNotFoundError:
                continue
            child_type = str(
                desc.get("mediaType") or "application/vnd.docker.distribution.manifest.v2+json"
            )
            config, config_digest, manifest_digest = _config_from_manifest_tree(
                storage, child_bytes, child_type
            )
            if config_digest:
                return config, config_digest, manifest_digest
        return {}, None, None

    config_digest = manifest.get("config", {}).get("digest")
    if not isinstance(config_digest, str):
        return {}, None, None
    try:
        config_bytes = storage.read_blob(config_digest)
        config = json.loads(config_bytes.decode("utf-8"))
    except (FileNotFoundError, json.JSONDecodeError, UnicodeDecodeError):
        return {}, config_digest, None
    if not isinstance(config, dict):
        return {}, config_digest, None
    return config, config_digest, storage.digest_bytes(manifest_bytes)


def inspect_cloudera_runtime_metadata(storage: LocalRegistryStorage, repo: str, tag: str) -> dict[str, Any]:
    digest, manifest_bytes = storage.resolve_tag(repo, tag)
    try:
        manifest = json.loads(manifest_bytes.decode("utf-8"))
    except (json.JSONDecodeError, UnicodeDecodeError) as exc:
        return {
            "ok": False,
            "manifest_digest": digest,
            "error": f"Manifest is not valid JSON: {exc}",
        }

    media_type = manifest.get("mediaType", "application/vnd.docker.distribution.manifest.v2+json")
    config, config_digest, _resolved_manifest_digest = _config_from_manifest_tree(
        storage, manifest_bytes, media_type
    )
    if not config_digest:
        return {
            "ok": False,
            "manifest_digest": digest,
            "error": "Manifest has no config digest (not a container image manifest?)",
        }
    if not config:
        return {
            "ok": False,
            "manifest_digest": digest,
            "config_digest": config_digest,
            "error": "Config blob missing from local storage; replication may be incomplete",
        }

    labels = _labels_from_config(config)
    found = {k: labels[k] for k in CLOUDERA_RUNTIME_LABEL_HINTS if k in labels}
    layer_digests = manifest_blob_digests(manifest_bytes, media_type)
    summary = runtime_label_summary(labels)

    return {
        "ok": bool(found),
        "manifest_digest": digest,
        "config_digest": config_digest,
        "cloudera_labels_found": found,
        "cloudera_labels_missing": not bool(found),
        "all_config_labels": labels,
        "runtime_summary": summary,
        "layer_count": len(layer_digests),
        "hint": (
            "Replicate from an official Cloudera ML runtime image so config labels are preserved."
            if not found
            else "Config contains Cloudera runtime labels; if Validate still fails, check runtime-manager reachability/TLS/credentials."
        ),
        "version_catalog_rule": (
            "full_version must start with short_version + '.' + maintenance_version; maintenance_version must be an integer."
        ),
        "version_check": _version_triple_check(summary),
    }


def _version_triple_check(summary: dict[str, str | None]) -> dict[str, Any]:
    short = summary.get("short_version") or ""
    maint = summary.get("maintenance_version") or ""
    full = summary.get("full_version") or ""
    if not short or not maint:
        return {"ok": None, "message": "short_version and maintenance_version not both set"}
    if not maint.isdigit():
        return {
            "ok": False,
            "message": "maintenance_version must be an integer",
            "expected_full_prefix": f"{short}.{maint}",
        }
    expected = f"{short}.{maint}"
    ok = full.startswith(expected) if full else False
    return {
        "ok": ok,
        "expected_full_prefix": expected,
        "message": "OK" if ok else f"full_version should start with '{expected}'",
    }

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
)


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
    config_digest = manifest.get("config", {}).get("digest")
    if not config_digest:
        return {
            "ok": False,
            "manifest_digest": digest,
            "error": "Manifest has no config digest (not a container image manifest?)",
        }

    try:
        config_bytes = storage.read_blob(config_digest)
        config = json.loads(config_bytes.decode("utf-8"))
    except FileNotFoundError:
        return {
            "ok": False,
            "manifest_digest": digest,
            "config_digest": config_digest,
            "error": "Config blob missing from local storage; replication may be incomplete",
        }
    except (json.JSONDecodeError, UnicodeDecodeError) as exc:
        return {
            "ok": False,
            "manifest_digest": digest,
            "config_digest": config_digest,
            "error": f"Config blob is not valid JSON: {exc}",
        }

    labels: dict[str, str] = config.get("config", {}).get("Labels") or {}
    if not labels:
        labels = config.get("Labels") or {}

    found = {k: labels[k] for k in CLOUDERA_RUNTIME_LABEL_HINTS if k in labels}
    layer_digests = manifest_blob_digests(manifest_bytes, media_type)

    return {
        "ok": bool(found),
        "manifest_digest": digest,
        "config_digest": config_digest,
        "cloudera_labels_found": found,
        "cloudera_labels_missing": not bool(found),
        "all_config_labels": labels,
        "layer_count": len(layer_digests),
        "hint": (
            "Replicate from an official Cloudera ML runtime image so config labels are preserved."
            if not found
            else "Config contains Cloudera runtime labels; if Validate still fails, check runtime-manager reachability/TLS/credentials."
        ),
    }

"""Update Cloudera runtime labels on a tagged image and relink manifests."""

from __future__ import annotations

import json
from typing import Any

from app.cloudera_metadata import RUNTIME_LABEL_FIELDS
from app.image_refs import sync_version_tag_alias
from app.local_storage import LocalRegistryStorage

_MANIFEST_LIST_TYPES = {
    "application/vnd.docker.distribution.manifest.list.v2+json",
    "application/vnd.oci.image.index.v1+json",
}

ALLOWED_RUNTIME_FIELDS = frozenset(RUNTIME_LABEL_FIELDS.keys())

_FIELD_TO_ENV: dict[str, str] = {
    "edition": "ML_RUNTIME_EDITION",
    "full_version": "ML_RUNTIME_FULL_VERSION",
    "short_version": "ML_RUNTIME_SHORT_VERSION",
    "maintenance_version": "ML_RUNTIME_MAINTENANCE_VERSION",
}


def canonical_full_version(short_version: str, maintenance_version: str) -> str:
    """Cloudera pattern: ML_RUNTIME_FULL_VERSION = short + '.' + maintenance (see ML runtimes docs)."""
    return f"{short_version}.{maintenance_version}"


def normalize_runtime_version_fields(fields: dict[str, str]) -> dict[str, str]:
    """
    Enforce Runtime Catalog version rules on merged edition/version fields.
    Mutates and returns fields.
    """
    short = (fields.get("short_version") or "").strip()
    maint = (fields.get("maintenance_version") or "").strip()
    if maint and not maint.isdigit():
        raise ValueError(
            "maintenance_version must be an integer (e.g. 1, 2). "
            "Values like 'b8' belong in short_version, not maintenance_version."
        )
    if short and maint:
        expected_full = canonical_full_version(short, maint)
        full = (fields.get("full_version") or "").strip()
        if full and not full.startswith(expected_full):
            raise ValueError(
                f"full_version must start with '{expected_full}' "
                f"(short_version + '.' + maintenance_version). Current full_version is '{full}'."
            )
        fields["full_version"] = expected_full
    return fields


def prepare_runtime_label_updates(
    storage: LocalRegistryStorage,
    repo: str,
    tag: str,
    updates: dict[str, str],
) -> dict[str, str]:
    """Merge with existing config labels, normalize versions, return full field set to write."""
    from app.cloudera_metadata import inspect_cloudera_runtime_metadata

    meta = inspect_cloudera_runtime_metadata(storage, repo, tag)
    if meta.get("error") and not meta.get("all_config_labels"):
        raise ValueError(str(meta.get("error") or "Could not read image config"))
    current = runtime_fields_from_labels(meta.get("all_config_labels") or {})
    merged = dict(current)
    merged.update(updates)
    merged = {k: v.strip() for k, v in merged.items() if v and str(v).strip()}
    if not merged:
        raise ValueError("No runtime label updates provided")
    return normalize_runtime_version_fields(merged)


def runtime_fields_from_labels(labels: dict[str, str]) -> dict[str, str]:
    """Unified edition/version fields for forms (prefer com.cloudera keys when both set)."""
    out: dict[str, str] = {}
    for field, (legacy_key, cloudera_key) in RUNTIME_LABEL_FIELDS.items():
        value = labels.get(cloudera_key) or labels.get(legacy_key) or ""
        if value:
            out[field] = value
    return out


def _manifest_media_type(manifest_bytes: bytes) -> str:
    try:
        doc = json.loads(manifest_bytes.decode("utf-8"))
        if isinstance(doc, dict) and doc.get("mediaType"):
            return str(doc["mediaType"]).split(";")[0].strip()
    except (json.JSONDecodeError, UnicodeDecodeError):
        pass
    return "application/vnd.docker.distribution.manifest.v2+json"


def _config_labels_block(config: dict[str, Any]) -> dict[str, str]:
    if not isinstance(config.get("config"), dict):
        config["config"] = {}
    block = config["config"].get("Labels")
    if not isinstance(block, dict):
        block = {}
        config["config"]["Labels"] = block
    return block


def _apply_runtime_updates_to_labels(
    labels: dict[str, str],
    updates: dict[str, str],
) -> bool:
    changed = False
    for field, new_value in updates.items():
        legacy_key, cloudera_key = RUNTIME_LABEL_FIELDS[field]
        had = legacy_key in labels or cloudera_key in labels
        if not had and not new_value:
            continue
        if labels.get(legacy_key) == new_value and labels.get(cloudera_key) == new_value:
            continue
        labels[legacy_key] = new_value
        labels[cloudera_key] = new_value
        changed = True
    return changed


def _apply_runtime_updates_to_env(config: dict[str, Any], updates: dict[str, str]) -> bool:
    cfg = config.get("config")
    if not isinstance(cfg, dict):
        return False
    env = cfg.get("Env")
    if not isinstance(env, list):
        return False
    changed = False
    for field, env_key in _FIELD_TO_ENV.items():
        if field not in updates:
            continue
        value = updates[field]
        prefix = f"{env_key}="
        for i, entry in enumerate(env):
            if isinstance(entry, str) and entry.startswith(prefix):
                new_entry = f"{env_key}={value}"
                if entry != new_entry:
                    env[i] = new_entry
                    changed = True
                break
    return changed


def _patch_config_bytes(config_bytes: bytes, updates: dict[str, str]) -> tuple[bytes, bool]:
    try:
        config = json.loads(config_bytes.decode("utf-8"))
    except (json.JSONDecodeError, UnicodeDecodeError):
        return config_bytes, False
    if not isinstance(config, dict):
        return config_bytes, False

    labels = _config_labels_block(config)
    labels_changed = _apply_runtime_updates_to_labels(labels, updates)
    if isinstance(config.get("Labels"), dict):
        labels_changed = _apply_runtime_updates_to_labels(config["Labels"], updates) or labels_changed
    env_changed = _apply_runtime_updates_to_env(config, updates)

    if not labels_changed and not env_changed:
        return config_bytes, False

    return json.dumps(config, separators=(",", ":"), sort_keys=True).encode("utf-8"), True


def _patch_manifest_bytes(
    storage: LocalRegistryStorage,
    manifest_bytes: bytes,
    content_type: str,
    updates: dict[str, str],
    stats: dict[str, int],
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
            new_child_bytes, child_changed = _patch_manifest_bytes(
                storage, child_bytes, child_type, updates, stats
            )
            if not child_changed:
                new_descriptors.append(desc)
                continue
            tree_changed = True
            stats["manifests_updated"] = stats.get("manifests_updated", 0) + 1
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
    config_desc = doc.get("config")
    if isinstance(config_desc, dict) and isinstance(config_desc.get("digest"), str):
        try:
            config_bytes = storage.read_blob(config_desc["digest"])
        except FileNotFoundError:
            config_bytes = b""
        if config_bytes:
            new_config_bytes, config_changed = _patch_config_bytes(config_bytes, updates)
            if config_changed:
                stats["configs_updated"] = stats.get("configs_updated", 0) + 1
                new_config_digest = storage.digest_bytes(new_config_bytes)
                storage.write_blob(new_config_digest, new_config_bytes)
                config_desc["digest"] = new_config_digest
                config_desc["size"] = len(new_config_bytes)
                changed = True

    if not changed:
        return manifest_bytes, False
    stats["manifests_updated"] = stats.get("manifests_updated", 0) + 1
    return json.dumps(doc, separators=(",", ":"), sort_keys=True).encode("utf-8"), True


def patch_image_tag_runtime_labels(
    storage: LocalRegistryStorage,
    repo: str,
    tag: str,
    updates: dict[str, str],
) -> dict[str, Any]:
    """
    Apply runtime label field updates to every config in the tag's manifest tree,
    write new blobs, and relink the tag to the new top-level manifest.
    """
    partial: dict[str, str] = {}
    for key, value in updates.items():
        if key not in ALLOWED_RUNTIME_FIELDS:
            raise ValueError(f"Unknown runtime field: {key}")
        if value is None:
            continue
        stripped = str(value).strip()
        if stripped:
            partial[key] = stripped
    if not partial:
        raise ValueError("No runtime label updates provided")

    normalized = prepare_runtime_label_updates(storage, repo, tag, partial)

    old_digest, manifest_bytes = storage.resolve_tag(repo, tag)
    media_type = _manifest_media_type(manifest_bytes)
    stats: dict[str, int] = {"configs_updated": 0, "manifests_updated": 0}
    new_bytes, changed = _patch_manifest_bytes(
        storage, manifest_bytes, media_type, normalized, stats
    )
    if not changed:
        return {
            "changed": False,
            "repository": repo,
            "tag": tag,
            "manifest_digest": old_digest,
            **stats,
        }

    new_digest = storage.put_manifest(repo, tag, new_bytes)
    alias_tag = sync_version_tag_alias(
        storage, repo, tag, new_bytes, normalized.get("full_version")
    )
    return {
        "changed": True,
        "repository": repo,
        "tag": tag,
        "old_manifest_digest": old_digest,
        "new_manifest_digest": new_digest,
        "version_tag_alias": alias_tag,
        **stats,
    }

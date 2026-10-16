"""Docker Registry V2 manifest/tag delete (Distribution spec)."""

from __future__ import annotations

from fastapi import HTTPException

from app.local_storage import LocalRegistryStorage


def _normalize_if_match(value: str | None) -> str | None:
    if not value:
        return None
    cleaned = value.strip()
    if cleaned.startswith("sha256:"):
        return cleaned
    # Accept quoted digest form from some clients
    if cleaned.startswith('"') and cleaned.endswith('"'):
        return cleaned[1:-1]
    return cleaned


def delete_manifest_v2(
    storage: LocalRegistryStorage,
    repository: str,
    reference: str,
    *,
    if_match: str | None,
) -> dict:
    """
    DELETE /v2/{name}/manifests/{reference}
    Tag references require If-Match with the current manifest digest (Distribution spec).
    Digest references delete all tags and the revision link for that manifest in the repo.
    """
    storage.validate_repo_name(repository)
    digest_header = _normalize_if_match(if_match)

    if reference.startswith("sha256:"):
        if digest_header and digest_header != reference:
            raise HTTPException(status_code=412, detail="If-Match digest does not match reference")
        try:
            storage.read_blob(reference)
        except FileNotFoundError as exc:
            raise HTTPException(status_code=404, detail="manifest unknown") from exc
        return storage.remove_manifest_digest(repository, reference)

    try:
        current_digest, _ = storage.resolve_tag(repository, reference)
    except FileNotFoundError as exc:
        raise HTTPException(status_code=404, detail="manifest unknown") from exc
    except ValueError as exc:
        raise HTTPException(status_code=400, detail=str(exc)) from exc

    if not digest_header:
        raise HTTPException(
            status_code=412,
            detail="If-Match header required when deleting manifest by tag (use digest from HEAD/GET)",
        )
    if digest_header != current_digest:
        raise HTTPException(status_code=412, detail="If-Match does not match current manifest digest")

    return storage.remove_tag(repository, reference)

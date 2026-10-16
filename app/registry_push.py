"""Docker Registry HTTP API V2 — blob upload and manifest push."""

from __future__ import annotations

import hashlib
import re
from typing import Annotated
from urllib.parse import parse_qs

from fastapi import APIRouter, Depends, HTTPException, Request, Response

from app.audit_log import RegistryAuditStore
from app.auth import require_local_registry_auth
from app.config import Settings, get_settings
from app.local_storage import LocalRegistryStorage
from app.request_urls import external_base_url
from app.upload_store import BlobUploadStore

router = APIRouter(prefix="/v2", tags=["registry-push"])

_UPLOAD_START = re.compile(r"^(?P<repo>.+?)/blobs/uploads/?$")
_UPLOAD_SESSION = re.compile(r"^(?P<repo>.+?)/blobs/uploads/(?P<upload_id>[^/]+)$")
_MANIFEST_PUT = re.compile(r"^(?P<repo>.+?)/manifests/(?P<reference>.+)$")


def get_storage(settings: Annotated[Settings, Depends(get_settings)]) -> LocalRegistryStorage:
    return LocalRegistryStorage(settings.registry_data_dir)


def get_uploads(settings: Annotated[Settings, Depends(get_settings)]) -> BlobUploadStore:
    return BlobUploadStore(settings.registry_data_dir)


def get_audit(settings: Annotated[Settings, Depends(get_settings)]) -> RegistryAuditStore:
    return RegistryAuditStore(settings.audit_log_dir)


def _registry_headers() -> dict[str, str]:
    return {"Docker-Distribution-Api-Version": "registry/2.0"}


def _upload_location(request: Request, repository: str, upload_id: str) -> str:
    base = external_base_url(request)
    return f"{base}/v2/{repository}/blobs/uploads/{upload_id}"


def _blob_location(request: Request, repository: str, digest: str) -> str:
    base = external_base_url(request)
    return f"{base}/v2/{repository}/blobs/{digest}"


async def _commit_blob(
    storage: LocalRegistryStorage,
    uploads: BlobUploadStore,
    upload_id: str | None,
    digest: str,
    body: bytes,
) -> None:
    if upload_id:
        try:
            data = uploads.complete(upload_id, digest)
        except FileNotFoundError as exc:
            raise HTTPException(status_code=404, detail="upload session not found") from exc
        except ValueError as exc:
            raise HTTPException(status_code=400, detail=str(exc)) from exc
        finally:
            uploads.delete(upload_id)
        if not storage.has_blob(digest):
            storage.write_blob(digest, data)
        return

    expected = f"sha256:{hashlib.sha256(body).hexdigest()}"
    if digest != expected:
        raise HTTPException(status_code=400, detail=f"Digest mismatch: expected {expected}")
    if not storage.has_blob(digest):
        storage.write_blob(digest, body)


async def _initiate_upload(
    name: str,
    request: Request,
    uploads: BlobUploadStore,
    storage: LocalRegistryStorage,
    digest: str | None,
) -> Response:
    try:
        storage.validate_repo_name(name)
    except ValueError as exc:
        raise HTTPException(status_code=400, detail=str(exc)) from exc

    if digest:
        body = await request.body()
        await _commit_blob(storage, uploads, None, digest, body)
        headers = {
            **_registry_headers(),
            "Location": _blob_location(request, name, digest),
            "Docker-Content-Digest": digest,
        }
        return Response(status_code=201, headers=headers)

    upload_id = uploads.create(name)
    location = _upload_location(request, name, upload_id)
    headers = {
        **_registry_headers(),
        "Location": location,
        "Range": "0-0",
        "Docker-Upload-UUID": upload_id,
    }
    return Response(status_code=202, headers=headers)


@router.api_route("/{filepath:path}", methods=["POST", "PATCH", "PUT"], include_in_schema=True)
async def registry_write_dispatch(
    filepath: str,
    request: Request,
    uploads: Annotated[BlobUploadStore, Depends(get_uploads)],
    storage: Annotated[LocalRegistryStorage, Depends(get_storage)],
    audit: Annotated[RegistryAuditStore, Depends(get_audit)],
    _: None = Depends(require_local_registry_auth),
) -> Response:
    """Parse docker push paths (e.g. local-repo/blobs/uploads/) explicitly."""
    path = filepath.strip("/")
    method = request.method
    query = parse_qs(str(request.url.query))
    digest = query.get("digest", [None])[0]

    if method == "POST":
        match = _UPLOAD_START.match(path)
        if match:
            return await _initiate_upload(match.group("repo"), request, uploads, storage, digest)
        raise HTTPException(status_code=404, detail="registry upload path not found")

    if method == "PATCH":
        match = _UPLOAD_SESSION.match(path)
        if not match:
            raise HTTPException(status_code=404, detail="upload session path not found")
        repo = match.group("repo")
        upload_id = match.group("upload_id")
        try:
            storage.validate_repo_name(repo)
        except ValueError as exc:
            raise HTTPException(status_code=400, detail=str(exc)) from exc
        if not uploads.exists(upload_id):
            raise HTTPException(status_code=404, detail="upload session not found")
        chunk = await request.body()
        size = uploads.append(upload_id, chunk)
        headers = {
            **_registry_headers(),
            "Location": _upload_location(request, repo, upload_id),
            "Range": f"0-{max(size - 1, 0)}",
            "Docker-Upload-UUID": upload_id,
        }
        return Response(status_code=202, headers=headers)

    if method == "PUT":
        session = _UPLOAD_SESSION.match(path)
        if session and digest:
            repo = session.group("repo")
            upload_id = session.group("upload_id")
            try:
                storage.validate_repo_name(repo)
            except ValueError as exc:
                raise HTTPException(status_code=400, detail=str(exc)) from exc
            extra = await request.body()
            if extra:
                if not uploads.exists(upload_id):
                    raise HTTPException(status_code=404, detail="upload session not found")
                uploads.append(upload_id, extra)
            await _commit_blob(storage, uploads, upload_id, digest, b"")
            headers = {
                **_registry_headers(),
                "Location": _blob_location(request, repo, digest),
                "Docker-Content-Digest": digest,
            }
            return Response(status_code=201, headers=headers)

        start = _UPLOAD_START.match(path)
        if start and digest:
            repo = start.group("repo")
            body = await request.body()
            await _commit_blob(storage, uploads, None, digest, body)
            headers = {
                **_registry_headers(),
                "Location": _blob_location(request, repo, digest),
                "Docker-Content-Digest": digest,
            }
            return Response(status_code=201, headers=headers)

        manifest = _MANIFEST_PUT.match(path)
        if manifest:
            repo = manifest.group("repo")
            reference = manifest.group("reference")
            manifest_bytes = await request.body()
            if not manifest_bytes:
                raise HTTPException(status_code=400, detail="empty manifest")
            content_type = request.headers.get(
                "Content-Type", "application/vnd.docker.distribution.manifest.v2+json"
            ).split(";")[0].strip()
            try:
                manifest_digest = storage.put_manifest(repo, reference, manifest_bytes)
            except ValueError as exc:
                raise HTTPException(status_code=400, detail=str(exc)) from exc
            audit.record_push(repo, reference, manifest_digest)
            headers = {
                **_registry_headers(),
                "Location": f"{external_base_url(request)}/v2/{repo}/manifests/{manifest_digest}",
                "Docker-Content-Digest": manifest_digest,
                "Content-Type": content_type,
            }
            return Response(status_code=201, headers=headers)

        raise HTTPException(status_code=404, detail="registry PUT path not found")

    raise HTTPException(status_code=405, detail="method not allowed")

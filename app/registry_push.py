"""Docker Registry HTTP API V2 — blob upload and manifest push."""

from __future__ import annotations

import hashlib
from typing import Annotated

from fastapi import APIRouter, Depends, HTTPException, Request, Response

from app.auth import require_local_registry_auth
from app.config import Settings, get_settings
from app.local_storage import LocalRegistryStorage
from app.request_urls import external_base_url
from app.upload_store import BlobUploadStore

router = APIRouter(prefix="/v2", tags=["registry-push"])


def get_storage(settings: Annotated[Settings, Depends(get_settings)]) -> LocalRegistryStorage:
    return LocalRegistryStorage(settings.registry_data_dir)


def get_uploads(settings: Annotated[Settings, Depends(get_settings)]) -> BlobUploadStore:
    return BlobUploadStore(settings.registry_data_dir)


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
    else:
        data = body
        expected = f"sha256:{hashlib.sha256(data).hexdigest()}"
        if digest != expected:
            raise HTTPException(status_code=400, detail=f"Digest mismatch: expected {expected}")

    if storage.has_blob(digest):
        return
    storage.write_blob(digest, data)


@router.post("/{name:path}/blobs/uploads")
@router.post("/{name:path}/blobs/uploads/")
async def initiate_upload(
    name: str,
    request: Request,
    uploads: Annotated[BlobUploadStore, Depends(get_uploads)],
    storage: Annotated[LocalRegistryStorage, Depends(get_storage)],
    _: None = Depends(require_local_registry_auth),
    digest: str | None = None,
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


@router.patch("/{name:path}/blobs/uploads/{upload_id}")
async def patch_upload(
    name: str,
    upload_id: str,
    request: Request,
    uploads: Annotated[BlobUploadStore, Depends(get_uploads)],
    storage: Annotated[LocalRegistryStorage, Depends(get_storage)],
    _: None = Depends(require_local_registry_auth),
) -> Response:
    _ = name
    try:
        storage.validate_repo_name(name)
    except ValueError as exc:
        raise HTTPException(status_code=400, detail=str(exc)) from exc

    if not uploads.exists(upload_id):
        raise HTTPException(status_code=404, detail="upload session not found")

    chunk = await request.body()
    try:
        size = uploads.append(upload_id, chunk)
    except FileNotFoundError as exc:
        raise HTTPException(status_code=404, detail="upload session not found") from exc

    location = _upload_location(request, name, upload_id)
    headers = {
        **_registry_headers(),
        "Location": location,
        "Range": f"0-{max(size - 1, 0)}",
        "Docker-Upload-UUID": upload_id,
    }
    return Response(status_code=202, headers=headers)


@router.put("/{name:path}/blobs/uploads/{upload_id}")
async def complete_upload(
    name: str,
    upload_id: str,
    request: Request,
    storage: Annotated[LocalRegistryStorage, Depends(get_storage)],
    uploads: Annotated[BlobUploadStore, Depends(get_uploads)],
    _: None = Depends(require_local_registry_auth),
    digest: str | None = None,
) -> Response:
    if not digest:
        raise HTTPException(status_code=400, detail="digest query parameter required")

    extra = await request.body()
    if extra:
        if not uploads.exists(upload_id):
            raise HTTPException(status_code=404, detail="upload session not found")
        uploads.append(upload_id, extra)

    try:
        await _commit_blob(storage, uploads, upload_id, digest, b"")
    except HTTPException:
        raise
    except Exception as exc:  # noqa: BLE001
        raise HTTPException(status_code=400, detail=str(exc)) from exc

    headers = {
        **_registry_headers(),
        "Location": _blob_location(request, name, digest),
        "Docker-Content-Digest": digest,
    }
    return Response(status_code=201, headers=headers)


@router.put("/{name:path}/blobs/uploads")
@router.put("/{name:path}/blobs/uploads/")
async def monolithic_upload(
    name: str,
    request: Request,
    storage: Annotated[LocalRegistryStorage, Depends(get_storage)],
    uploads: Annotated[BlobUploadStore, Depends(get_uploads)],
    _: None = Depends(require_local_registry_auth),
    digest: str | None = None,
) -> Response:
    if not digest:
        raise HTTPException(status_code=400, detail="digest query parameter required")
    body = await request.body()
    await _commit_blob(storage, uploads, None, digest, body)
    headers = {
        **_registry_headers(),
        "Location": _blob_location(request, name, digest),
        "Docker-Content-Digest": digest,
    }
    return Response(status_code=201, headers=headers)


@router.put("/{name:path}/manifests/{reference}")
async def put_manifest(
    name: str,
    reference: str,
    request: Request,
    storage: Annotated[LocalRegistryStorage, Depends(get_storage)],
    _: None = Depends(require_local_registry_auth),
) -> Response:
    manifest_bytes = await request.body()
    if not manifest_bytes:
        raise HTTPException(status_code=400, detail="empty manifest")

    content_type = request.headers.get(
        "Content-Type", "application/vnd.docker.distribution.manifest.v2+json"
    ).split(";")[0].strip()

    try:
        digest = storage.put_manifest(name, reference, manifest_bytes)
    except ValueError as exc:
        raise HTTPException(status_code=400, detail=str(exc)) from exc

    location = f"{external_base_url(request)}/v2/{name}/manifests/{digest}"
    headers = {
        **_registry_headers(),
        "Location": location,
        "Docker-Content-Digest": digest,
        "Content-Type": content_type,
    }
    return Response(status_code=201, headers=headers)

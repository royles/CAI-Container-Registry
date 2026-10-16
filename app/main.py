from __future__ import annotations

import uuid
from typing import Annotated

from fastapi import BackgroundTasks, Depends, FastAPI, HTTPException, Request
from fastapi.exception_handlers import http_exception_handler
from fastapi.responses import HTMLResponse, JSONResponse
from pydantic import BaseModel, Field

from app.audit_http import record_http_failure_audit
from app.audit_log import RegistryAuditStore, query_registry_activity
from app.auth import require_admin_api_key, require_local_registry_auth
from app.cloudera_metadata import inspect_cloudera_runtime_metadata
from app.config import Settings, get_settings
from app.importer import ImageImporter, ImportJob
from app.local_storage import LocalRegistryStorage
from app.repo_rename import registry_host_candidates, rename_repository_with_dependent_metadata
from app.runtime_label_patch import patch_image_tag_runtime_labels
from app.upload_store import BlobUploadStore
from app.registry_push import router as registry_push_router
from app.registry_v2 import router as registry_v2_router
from app.remote_client import RemoteRegistryAuth
from app.ui_routes import router as ui_router

app = FastAPI(
    title="Private OCI Registry",
    description="Project-local OCI registry on CDSW_APP_PORT with remote import.",
    version="0.1.0",
    redirect_slashes=False,
)
app.include_router(registry_v2_router)
app.include_router(registry_push_router)
app.include_router(ui_router)


@app.exception_handler(HTTPException)
async def audit_logged_http_exception(request: Request, exc: HTTPException) -> JSONResponse:
    try:
        record_http_failure_audit(request, exc)
    except Exception:
        pass
    return await http_exception_handler(request, exc)


class ImportRequest(BaseModel):
    source: str = Field(
        ...,
        description="Remote image reference (e.g. docker.repository.cloudera.com/cloudera/cdsw/ml-runtime-jupyterlab-python3.10-standard:2023.08.2-b8)",
    )
    target_repo: str = Field(..., description="Repository name in the private CAI registry")
    target_tag: str = Field(..., description="Tag in the private CAI registry")
    remote_username: str | None = None
    remote_password: str | None = None
    remote_token: str | None = None


def get_storage(settings: Annotated[Settings, Depends(get_settings)]) -> LocalRegistryStorage:
    return LocalRegistryStorage(settings.registry_data_dir)


def get_importer(settings: Annotated[Settings, Depends(get_settings)]) -> ImageImporter:
    return ImageImporter(settings)


def get_audit(settings: Annotated[Settings, Depends(get_settings)]) -> RegistryAuditStore:
    return RegistryAuditStore(settings.audit_log_dir)


@app.get("/health/registry-upload")
def health_registry_upload() -> dict:
    """Quick probe: if this returns JSON but POST /v2/.../blobs/uploads/ is 404, the ingress is not forwarding POST to the app."""
    return {
        "status": "ok",
        "upload_post_path": "/v2/{repository}/blobs/uploads/",
        "note": "404 on POST with no auth error means routing/proxy, not credentials",
    }


@app.get("/health")
def health(
    storage: Annotated[LocalRegistryStorage, Depends(get_storage)],
    settings: Annotated[Settings, Depends(get_settings)],
) -> dict:
    return {
        "status": "ok",
        "registry_api": "/v2/",
        "storage": storage.stats(),
        "local_auth_enabled": settings.local_auth_enabled,
        "public_registry_host": settings.public_registry_host,
    }


@app.get("/api/v1/diagnostics/runtime-catalog/{repository:path}/{tag}")
def runtime_catalog_diagnostics(
    repository: str,
    tag: str,
    request: Request,
    storage: Annotated[LocalRegistryStorage, Depends(get_storage)],
    settings: Annotated[Settings, Depends(get_settings)],
) -> dict:
    """
    Checks local image + Cloudera runtime labels. Runtime Catalog Validate is executed
    by the cluster runtime-manager pod (TLS, Site Admin docker credentials, /v2/ reachability).
    """
    host = settings.public_registry_host or request.url.netloc
    image_ref = f"{host}/{repository}:{tag}"
    try:
        metadata = inspect_cloudera_runtime_metadata(storage, repository, tag)
    except FileNotFoundError:
        metadata = {"ok": False, "error": "Image not found in local registry storage"}
    return {
        "image_reference_for_runtime_catalog": image_ref,
        "registry_ping_url": f"https://{host}/v2/",
        "manifest_url": f"https://{host}/v2/{repository}/manifests/{tag}",
        "local_auth_enabled": settings.local_auth_enabled,
        "local_registry_public_read": settings.local_registry_public_read,
        "runtime_catalog_checks": {
            "1_local_image_and_labels": metadata,
            "2_site_administration": (
                "Add Docker credentials for server "
                f"'{host}' matching LOCAL_REGISTRY_* when auth is enabled."
            ),
            "3_runtime_manager": (
                "Validate runs from the runtime-manager pod, not your browser. "
                "It must reach https://<host>/v2/ and trust the TLS certificate. "
                "Check runtime-manager logs if ping/manifest fetch fails (x509, 401, connection refused)."
            ),
            "4_application_running": (
                "The CAI Application must be Running so /v2/ is served on the subdomain."
            ),
        },
    }


@app.get("/api/v1/repositories")
def list_repositories(
    storage: Annotated[LocalRegistryStorage, Depends(get_storage)],
    _: None = Depends(require_local_registry_auth),
) -> dict:
    return {"repositories": storage.list_repositories()}


@app.get("/api/v1/repositories/{name}/tags")
def list_tags(
    name: str,
    storage: Annotated[LocalRegistryStorage, Depends(get_storage)],
    _: None = Depends(require_local_registry_auth),
) -> dict:
    try:
        return {"name": name, "tags": storage.list_tags(name)}
    except ValueError as exc:
        raise HTTPException(status_code=400, detail=str(exc)) from exc


class CreateRepositoryRequest(BaseModel):
    name: str = Field(..., description="New repository path, e.g. runtimes or models/custom")


@app.post("/api/v1/repositories")
def create_repository(
    body: CreateRepositoryRequest,
    storage: Annotated[LocalRegistryStorage, Depends(get_storage)],
    audit: Annotated[RegistryAuditStore, Depends(get_audit)],
    _: None = Depends(require_admin_api_key),
) -> dict:
    name = body.name.strip()
    try:
        storage.create_repository(name)
    except ValueError as exc:
        raise HTTPException(status_code=409, detail=str(exc)) from exc
    audit.record_repo_create(name)
    return {"name": name, "tags": storage.list_tags(name)}


class RenameRepositoryRequest(BaseModel):
    new_name: str = Field(..., description="New repository path, e.g. runtimes or models/custom")


class RuntimeLabelsPatchRequest(BaseModel):
    edition: str | None = Field(default=None, description="ML_RUNTIME_EDITION / com.cloudera.ml.runtime.edition")
    full_version: str | None = Field(default=None, description="ML_RUNTIME_FULL_VERSION")
    short_version: str | None = Field(default=None, description="ML_RUNTIME_SHORT_VERSION")
    maintenance_version: str | None = Field(default=None, description="ML_RUNTIME_MAINTENANCE_VERSION")


@app.post("/api/v1/repositories/{name:path}/rename")
def rename_repository(
    name: str,
    body: RenameRepositoryRequest,
    request: Request,
    storage: Annotated[LocalRegistryStorage, Depends(get_storage)],
    settings: Annotated[Settings, Depends(get_settings)],
    audit: Annotated[RegistryAuditStore, Depends(get_audit)],
    _: None = Depends(require_admin_api_key),
) -> dict:
    new_name = body.new_name.strip()
    try:
        rename_stats = rename_repository_with_dependent_metadata(
            storage,
            name,
            new_name,
            registry_hosts=registry_host_candidates(settings, request.url.netloc),
            import_jobs_dir=settings.import_jobs_dir,
            upload_store=BlobUploadStore(settings.registry_data_dir),
        )
    except FileNotFoundError as exc:
        raise HTTPException(status_code=404, detail=f"Repository not found: {name}") from exc
    except ValueError as exc:
        raise HTTPException(status_code=400, detail=str(exc)) from exc
    audit.record_rename(name, new_name)
    return {
        "old_name": name,
        "new_name": new_name,
        "tags": storage.list_tags(new_name),
        **rename_stats,
    }


@app.patch("/api/v1/repositories/{name:path}/tags/{tag}/runtime-labels")
def patch_runtime_labels(
    name: str,
    tag: str,
    body: RuntimeLabelsPatchRequest,
    storage: Annotated[LocalRegistryStorage, Depends(get_storage)],
    audit: Annotated[RegistryAuditStore, Depends(get_audit)],
    _: None = Depends(require_admin_api_key),
) -> dict:
    updates = body.model_dump(exclude_none=True)
    try:
        result = patch_image_tag_runtime_labels(storage, name, tag, updates)
    except FileNotFoundError as exc:
        raise HTTPException(status_code=404, detail=f"Image not found: {name}:{tag}") from exc
    except ValueError as exc:
        raise HTTPException(status_code=400, detail=str(exc)) from exc
    if result.get("changed"):
        audit.record_runtime_labels(
            name,
            tag,
            message=f"Updated runtime labels via API ({result.get('configs_updated', 0)} config(s))",
        )
    return result


@app.delete("/api/v1/repositories/{name:path}")
def delete_repository(
    name: str,
    storage: Annotated[LocalRegistryStorage, Depends(get_storage)],
    audit: Annotated[RegistryAuditStore, Depends(get_audit)],
    _: None = Depends(require_admin_api_key),
) -> dict:
    try:
        storage.delete_repository(name)
    except FileNotFoundError as exc:
        raise HTTPException(status_code=404, detail=f"Repository not found: {name}") from exc
    except ValueError as exc:
        raise HTTPException(status_code=400, detail=str(exc)) from exc
    audit.record_repo_delete(name)
    return {"deleted": name}


def _run_import(importer: ImageImporter, job_id: str, body: ImportRequest) -> None:
    importer.replicate(
        body.source,
        body.target_repo,
        target_tag=body.target_tag,
        replicate_all_tags=False,
        remote_auth=RemoteRegistryAuth(
            username=body.remote_username,
            password=body.remote_password,
            token=body.remote_token,
        ),
        job_id=job_id,
    )


@app.post("/api/v1/import")
def start_import(
    body: ImportRequest,
    background: BackgroundTasks,
    importer: Annotated[ImageImporter, Depends(get_importer)],
    _: None = Depends(require_admin_api_key),
) -> dict:
    job_id = str(uuid.uuid4())
    placeholder = ImportJob(
        id=job_id,
        source=body.source,
        target_repo=body.target_repo,
        target_tag=body.target_tag,
        status="queued",
    )
    importer._save_job(placeholder)
    background.add_task(_run_import, importer, job_id, body)
    return {"job_id": job_id, "status": "queued"}


@app.post("/api/v1/import/sync")
def import_sync(
    body: ImportRequest,
    importer: Annotated[ImageImporter, Depends(get_importer)],
    _: None = Depends(require_admin_api_key),
) -> dict:
    job = importer.import_image(
        body.source,
        body.target_repo,
        body.target_tag,
        remote_auth=RemoteRegistryAuth(
            username=body.remote_username,
            password=body.remote_password,
            token=body.remote_token,
        ),
    )
    return {"job": job.to_dict()}


@app.get("/api/v1/audit/events")
def list_audit_events(
    settings: Annotated[Settings, Depends(get_settings)],
    audit: Annotated[RegistryAuditStore, Depends(get_audit)],
    _: None = Depends(require_admin_api_key),
    action: str | None = None,
    status: str | None = None,
    q: str | None = None,
    offset: int = 0,
    limit: int = 40,
) -> dict:
    page, total, has_more = query_registry_activity(
        audit,
        settings.import_jobs_dir,
        action=action or None,
        status=status or None,
        q=(q or "").strip() or None,
        offset=offset,
        limit=min(limit, 200),
    )
    return {
        "events": [e.to_dict() for e in page],
        "total": total,
        "offset": offset,
        "limit": limit,
        "has_more": has_more,
    }


@app.get("/api/v1/import/jobs")
def list_import_jobs(
    importer: Annotated[ImageImporter, Depends(get_importer)],
    _: None = Depends(require_admin_api_key),
) -> dict:
    return {"jobs": [j.to_dict() for j in importer.jobs.list_jobs()]}


@app.get("/api/v1/import/jobs/{job_id}")
def get_import_job(
    job_id: str,
    importer: Annotated[ImageImporter, Depends(get_importer)],
    _: None = Depends(require_admin_api_key),
) -> dict:
    job = importer.jobs.load(job_id)
    if not job:
        raise HTTPException(status_code=404, detail="job not found")
    return {"job": job.to_dict()}


@app.middleware("http")
async def attach_registry_version_header(request: Request, call_next):
    response = await call_next(request)
    if request.url.path.startswith("/v2"):
        response.headers.setdefault("Docker-Distribution-Api-Version", "registry/2.0")
    return response

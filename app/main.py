from __future__ import annotations

import uuid
from typing import Annotated

from fastapi import BackgroundTasks, Depends, FastAPI, HTTPException, Request
from fastapi.responses import HTMLResponse
from pydantic import BaseModel, Field

from app.auth import require_admin_api_key, require_local_registry_auth
from app.config import Settings, get_settings
from app.importer import ImageImporter, ImportJob
from app.local_storage import LocalRegistryStorage
from app.registry_v2 import router as registry_v2_router
from app.remote_client import RemoteRegistryAuth
from app.ui_routes import router as ui_router

app = FastAPI(
    title="CAI Private Container Registry",
    description="Project-local OCI registry on CDSW_APP_PORT with remote import.",
    version="0.1.0",
)
app.include_router(registry_v2_router)
app.include_router(ui_router)


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


@app.get("/")
def root() -> dict:
    return {"ui": "/ui", "health": "/health", "registry_api": "/v2/"}


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
    importer.jobs.save(placeholder)
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

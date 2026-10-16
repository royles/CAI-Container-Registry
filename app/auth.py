import secrets
from typing import Annotated

from fastapi import Depends, HTTPException, Request, status
from fastapi.security import HTTPBasic, HTTPBasicCredentials, HTTPBearer

from app.config import Settings, get_settings

basic_security = HTTPBasic(auto_error=False)
bearer_security = HTTPBearer(auto_error=False)


def _check_basic(
    credentials: HTTPBasicCredentials | None, settings: Settings
) -> bool:
    if not settings.local_auth_enabled:
        return True
    if credentials is None:
        return False
    user_ok = secrets.compare_digest(
        credentials.username, settings.local_registry_username or ""
    )
    pass_ok = secrets.compare_digest(
        credentials.password, settings.local_registry_password or ""
    )
    return user_ok and pass_ok


def require_local_registry_auth(
    credentials: Annotated[HTTPBasicCredentials | None, Depends(basic_security)],
    settings: Annotated[Settings, Depends(get_settings)],
) -> None:
    if _check_basic(credentials, settings):
        return
    raise HTTPException(
        status_code=status.HTTP_401_UNAUTHORIZED,
        detail="Registry authentication required",
        headers={"WWW-Authenticate": "Basic"},
    )


def require_admin_api_key(
    request: Request,
    settings: Annotated[Settings, Depends(get_settings)],
) -> None:
    if not settings.app_api_key:
        return
    provided = request.headers.get("X-API-Key")
    if provided and secrets.compare_digest(provided, settings.app_api_key):
        return
    raise HTTPException(
        status_code=status.HTTP_401_UNAUTHORIZED,
        detail="Valid X-API-Key header required",
    )

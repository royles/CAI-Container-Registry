from functools import lru_cache
from pathlib import Path

from pydantic import Field
from pydantic_settings import BaseSettings, SettingsConfigDict


class Settings(BaseSettings):
    model_config = SettingsConfigDict(env_file=".env", extra="ignore")

    registry_data_dir: Path = Field(
        default=Path("data/registry"),
        validation_alias="REGISTRY_DATA_DIR",
    )
    local_registry_username: str | None = Field(
        default=None, validation_alias="LOCAL_REGISTRY_USERNAME"
    )
    local_registry_password: str | None = Field(
        default=None, validation_alias="LOCAL_REGISTRY_PASSWORD"
    )
    local_registry_public_read: bool = Field(
        default=False,
        validation_alias="LOCAL_REGISTRY_PUBLIC_READ",
        description="Allow unauthenticated GET/HEAD on /v2/ (useful for Runtime Catalog validate when debugging auth).",
    )
    app_api_key: str | None = Field(default=None, validation_alias="APP_API_KEY")
    verify_tls: bool = Field(default=True, validation_alias="REGISTRY_VERIFY_TLS")
    ca_bundle: Path | None = Field(default=None, validation_alias="REGISTRY_CA_BUNDLE")
    public_registry_host: str | None = Field(
        default=None,
        validation_alias="PUBLIC_REGISTRY_HOST",
        description="Host clients use for docker pull (CAI app subdomain); optional metadata only.",
    )
    skopeo_bin: str | None = Field(default=None, validation_alias="SKOPEO_BIN")
    import_jobs_dir: Path = Field(
        default=Path("data/import_jobs"),
        validation_alias="IMPORT_JOBS_DIR",
    )
    audit_log_dir: Path = Field(
        default=Path("data/audit_log"),
        validation_alias="AUDIT_LOG_DIR",
    )
    repository_locks_file: Path = Field(
        default=Path("data/repository_locks.json"),
        validation_alias="REPOSITORY_LOCKS_FILE",
    )

    @property
    def local_auth_enabled(self) -> bool:
        return bool(self.local_registry_username and self.local_registry_password)


@lru_cache
def get_settings() -> Settings:
    settings = Settings()
    settings.registry_data_dir.mkdir(parents=True, exist_ok=True)
    settings.import_jobs_dir.mkdir(parents=True, exist_ok=True)
    settings.audit_log_dir.mkdir(parents=True, exist_ok=True)
    settings.repository_locks_file.parent.mkdir(parents=True, exist_ok=True)
    return settings

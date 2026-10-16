"""HTTP client for remote OCI/Docker registries (Cloudera, Docker Hub, etc.)."""

from __future__ import annotations

import base64
import hashlib
from dataclasses import dataclass
from typing import Any
from urllib.parse import urlparse

import httpx

from app.config import Settings


@dataclass
class ImageReference:
    registry: str
    repository: str
    tag: str
    insecure: bool = False

    @property
    def host(self) -> str:
        return self.registry

    @property
    def name(self) -> str:
        return self.repository

    @property
    def reference(self) -> str:
        return self.tag

    def base_url(self) -> str:
        scheme = "http" if self.insecure else "https"
        return f"{scheme}://{self.registry}"


def parse_image_reference(image: str, default_tag: str = "latest") -> ImageReference:
    """
    Parse references like:
      docker.repository.cloudera.com/cloudera/cdsw/ml-runtime-jupyterlab-python3.10-standard:2023.08.2-b8
      registry-1.docker.io/library/alpine:3.19
    """
    remainder = image.strip()
    insecure = remainder.startswith("http://")
    if remainder.startswith("http://") or remainder.startswith("https://"):
        parsed = urlparse(remainder)
        registry = parsed.netloc
        path = parsed.path.lstrip("/")
    else:
        first, _, path = remainder.partition("/")
        if "." in first or ":" in first or first == "localhost":
            registry = first
        else:
            registry = "registry-1.docker.io"
            path = remainder
        if not path:
            raise ValueError("Image reference must include repository path")

    if "@" in path:
        repo, tag = path.rsplit("@", 1)
    elif ":" in path.rsplit("/", 1)[-1]:
        repo, tag = path.rsplit(":", 1)
    else:
        repo, tag = path, default_tag

    if registry == "docker.io":
        registry = "registry-1.docker.io"
        if not repo.startswith("library/") and "/" not in repo:
            repo = f"library/{repo}"

    return ImageReference(registry=registry, repository=repo, tag=tag, insecure=insecure)


@dataclass
class RemoteRegistryAuth:
    username: str | None = None
    password: str | None = None
    token: str | None = None

    def auth_header(self) -> dict[str, str]:
        if self.token:
            return {"Authorization": f"Bearer {self.token}"}
        if self.username and self.password:
            raw = f"{self.username}:{self.password}".encode()
            return {"Authorization": "Basic " + base64.b64encode(raw).decode()}
        return {}


class RemoteRegistryClient:
    ACCEPT_MANIFEST = (
        "application/vnd.docker.distribution.manifest.v2+json, "
        "application/vnd.docker.distribution.manifest.list.v2+json, "
        "application/vnd.oci.image.index.v1+json, "
        "application/vnd.oci.image.manifest.v1+json"
    )

    def __init__(self, settings: Settings, auth: RemoteRegistryAuth | None = None) -> None:
        self.settings = settings
        self.auth = auth or RemoteRegistryAuth()
        verify: bool | str = True
        if not settings.verify_tls:
            verify = False
        elif settings.ca_bundle:
            verify = str(settings.ca_bundle)
        self._client = httpx.Client(timeout=httpx.Timeout(600.0), verify=verify, follow_redirects=True)

    def close(self) -> None:
        self._client.close()

    def _request(
        self,
        method: str,
        url: str,
        headers: dict[str, str] | None = None,
        *,
        ref: ImageReference | None = None,
    ) -> httpx.Response:
        hdrs = dict(headers or {})
        hdrs.update(self.auth.auth_header())
        resp = self._client.request(method, url, headers=hdrs)
        if resp.status_code == 401 and ref:
            challenge = self._parse_bearer_challenge(resp)
            if challenge:
                token = self._fetch_bearer_token(challenge, ref)
                hdrs["Authorization"] = f"Bearer {token}"
                resp = self._client.request(method, url, headers=hdrs)
        resp.raise_for_status()
        return resp

    @staticmethod
    def _parse_bearer_challenge(resp: httpx.Response) -> dict[str, str] | None:
        www = resp.headers.get("WWW-Authenticate", "")
        if not www.lower().startswith("bearer "):
            return None
        parts = www[len("Bearer ") :].split(",")
        out: dict[str, str] = {}
        for part in parts:
            if "=" in part:
                k, v = part.strip().split("=", 1)
                out[k.lower()] = v.strip('"')
        return out

    def _fetch_bearer_token(self, challenge: dict[str, str], ref: ImageReference) -> str:
        realm = challenge.get("realm")
        if not realm:
            raise httpx.HTTPError("Bearer auth without realm")
        params: dict[str, str] = {}
        if challenge.get("service"):
            params["service"] = challenge["service"]
        scope = challenge.get("scope") or f"repository:{ref.name}:pull"
        params["scope"] = scope
        resp = self._client.get(realm, params=params, headers=self.auth.auth_header())
        resp.raise_for_status()
        return resp.json()["token"]

    def get_manifest(self, ref: ImageReference) -> tuple[str, str, bytes]:
        url = f"{ref.base_url()}/v2/{ref.name}/manifests/{ref.reference}"
        resp = self._request(
            "GET",
            url,
            headers={"Accept": self.ACCEPT_MANIFEST},
            ref=ref,
        )
        digest = resp.headers.get("Docker-Content-Digest")
        if not digest:
            digest = f"sha256:{hashlib.sha256(resp.content).hexdigest()}"
        content_type = resp.headers.get("Content-Type", "application/vnd.docker.distribution.manifest.v2+json")
        return digest, content_type, resp.content

    def get_blob(self, ref: ImageReference, digest: str) -> bytes:
        url = f"{ref.base_url()}/v2/{ref.name}/blobs/{digest}"
        resp = self._request("GET", url, ref=ref)
        return resp.content

    def list_tags(self, ref: ImageReference) -> list[str]:
        url = f"{ref.base_url()}/v2/{ref.name}/tags/list"
        resp = self._request("GET", url, ref=ref)
        return resp.json().get("tags") or []


def manifest_blob_digests(manifest_bytes: bytes, content_type: str) -> list[str]:
    import json

    doc: dict[str, Any] = json.loads(manifest_bytes)
    digests: list[str] = []
    media = content_type.split(";")[0].strip()
    if media in (
        "application/vnd.docker.distribution.manifest.list.v2+json",
        "application/vnd.oci.image.index.v1+json",
    ):
        for desc in doc.get("manifests", []):
            if "digest" in desc:
                digests.append(desc["digest"])
        return digests
    if "config" in doc and "digest" in doc["config"]:
        digests.append(doc["config"]["digest"])
    for layer in doc.get("layers", []):
        if "digest" in layer:
            digests.append(layer["digest"])
    return digests

# CAI Private Container Registry

Cloudera AI Workbench project that runs as an **Analytical Application** on `CDSW_APP_PORT`. It hosts a **project-local OCI registry** (Docker Registry HTTP API V2) and provides a **web UI** to replicate images from remote registries (including Cloudera) into private storage on the project filesystem.

## Features

- Local registry at `/v2/` backed by `REGISTRY_DATA_DIR` (persist on project NFS in CAI)
- Management UI at `/ui` — remote source, credentials, single-tag or all-tags replication
- JSON API for automation (`/api/v1/import`, `/api/v1/repositories`, …)

## Quick start (CAI engine / container)

Use the Python interpreter already provided by the CAI session or application engine (no virtualenv). Dependencies from `requirements.txt` are installed by [`cdsw-build.sh`](cdsw-build.sh) during the CAI build step; `entry.py` also installs them on first start if they are not yet present.

```bash
python3 entry.py
```

`CDSW_APP_PORT` is set by the CAI session or application engine; do not override it. Open the application subdomain URL (the root path serves the management UI).

## Cloudera AI Application setup

1. Add this project to CAI (Git or template). Ensure [`cdsw-build.sh`](cdsw-build.sh) is present so dependencies install when the project engine is built.
2. Set project or application environment variables (see [.env.example](.env.example)):
   - `REGISTRY_DATA_DIR=data/registry` — keep under the project tree for persistence
   - `LOCAL_REGISTRY_USERNAME` / `LOCAL_REGISTRY_PASSWORD` — optional Basic auth for `/v2/`
   - `APP_API_KEY` — required for replication from the UI/API when set
3. **Applications → New Application**
   - Script: `entry.py` (run as the application script — do not paste `main()` into a notebook cell)
   - Subdomain: e.g. `registry-app`
   - Bind: listens on **`127.0.0.1`** and **`CDSW_APP_PORT`** (Cloudera proxies the application subdomain to this port)
4. Test in a session with `!python3 entry.py` or **Run** on `entry.py`, not by calling `main()` inside Jupyter (that causes “asyncio.run() cannot be called from a running event loop”).

## Replicate from Cloudera (UI)

1. Open `https://<subdomain>.<your-cai-domain>/`
2. Enter the remote image, e.g.  
   `docker.repository.cloudera.com/cloudera/cdsw/ml-runtime-jupyterlab-python3.10-standard:2023.08.2-b8`
3. Provide remote username/password or token if the registry is private.
4. Choose a local repository name (or leave blank to mirror the remote path).
5. Use **Replicate all tags** to copy every tag from the remote repository.

Imported blobs are deduplicated in local storage; tags are listed on the UI home page.

## HTTP API (optional)

```bash
curl -X POST "https://<host>/api/v1/import/sync" \
  -H "Content-Type: application/json" \
  -H "X-API-Key: $APP_API_KEY" \
  -d '{
    "source": "docker.repository.cloudera.com/cloudera/cdsw/ml-runtime-jupyterlab-python3.10-standard:2023.08.2-b8",
    "target_repo": "cloudera/ml-runtime-jupyterlab-python3.10-standard",
    "target_tag": "2023.08.2-b8",
    "remote_username": "user",
    "remote_password": "token"
  }'
```

## Using replicated images in CAI

### Runtime Catalog image field (common mistake)

In **Registry of Docker Image to Upload**, use a **Docker image reference** only:

```text
r78blo2186uifm7m.ml-dbfc64d1-783.go01-dem.ylcu-atmi.cloudera.site/local-repo:v3
```

Do **not** use:

- `https://` at the start
- A browser-style path such as `https://…/local-repo:v3` (that is not the OCI registry protocol)

Cloudera’s validator calls `https://<host>/v2/` and `https://<host>/v2/local-repo/manifests/v3` on the registry host. Add **Site Administration → Runtimes → Docker Credentials** for that host when `LOCAL_REGISTRY_*` auth is enabled. Custom runtimes must be images that still contain Cloudera ML runtime metadata in the image config (replicate from an official Cloudera runtime tag).

### Still “Could not fetch the image metadata”?

Validate runs from the **runtime-manager** pod (cluster), not your browser. Work through:

1. **Application running** — subdomain must serve `/v2/` (open `https://<host>/v2/` in a CAI session; expect `{}` or 401 with Basic challenge).
2. **Docker credentials** — Site Administration → Runtimes → server name exactly `r78blo2186uifm7m….cloudera.site` (no `https://`), username/password matching `LOCAL_REGISTRY_*` if set.
3. **TLS trust** — runtime-manager must trust the app certificate (Root CA Configuration; known issue if custom CA — see Cloudera ML runtimes release notes for runtime-manager cert mount).
4. **Cloudera labels** — `GET /api/v1/diagnostics/runtime-catalog/local-repo/v3` on the app (or the repo detail page) checks config labels locally.

Temporary debug: set `LOCAL_REGISTRY_PUBLIC_READ=true` on the application to allow unauthenticated GET/HEAD on `/v2/` (turn off after fixing credentials).

Point runtime/engine pulls at your application subdomain as registry host and path `/v2/`, with the same Basic credentials as `LOCAL_REGISTRY_*` if enabled. For cluster-wide runtime catalog pulls, also register Docker credentials in **Site Administration → Runtimes** and/or create a `regcred` secret in the compute namespace per Cloudera documentation.

### Push from your laptop (`docker push`)

The registry supports Docker Registry HTTP API v2 **uploads** (POST/PATCH/PUT on `/v2/.../blobs/uploads/` and PUT manifests).

```bash
docker login r78blo2186uifm7m....cloudera.site
# username/password = LOCAL_REGISTRY_* when set

docker build -t r78blo2186uifm7m....cloudera.site/local-repo:v4 .
docker push r78blo2186uifm7m....cloudera.site/local-repo:v4
```

Use the **application subdomain hostname only** (no `https://` in the image name). The CAI application must be **Running**. For insecure local testing only, Docker may require `"insecure-registries"` — production CAI endpoints should use valid TLS.

## Layout

- `entry.py` — CAI application entrypoint
- `app/main.py` — API routes
- `app/ui_routes.py` — `/ui` management interface
- `app/local_storage.py` — on-disk registry layout
- `app/importer.py` — remote replication logic

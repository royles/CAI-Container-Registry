"""Tag delete must never remove the repository or sibling tags."""

from __future__ import annotations

import tempfile
import unittest
from pathlib import Path

from fastapi.testclient import TestClient

from app.local_storage import LocalRegistryStorage
from app.main import app
from app.repository_safety import reject_misrouted_repository_path


class TagDeleteSafetyTests(unittest.TestCase):
    def setUp(self) -> None:
        self._tmp = tempfile.TemporaryDirectory()
        self.root = Path(self._tmp.name)
        self.storage = LocalRegistryStorage(self.root)

    def tearDown(self) -> None:
        self._tmp.cleanup()

    def test_remove_tag_keeps_repository_and_other_tags(self) -> None:
        repo = "royles-local"
        manifest = b'{"schemaVersion":2,"mediaType":"application/vnd.docker.distribution.manifest.v2+json","config":{},"layers":[]}'
        self.storage.put_manifest(repo, "v1", manifest)
        self.storage.put_manifest(repo, "v2", manifest)
        self.assertEqual(sorted(self.storage.list_tags(repo)), ["v1", "v2"])
        self.assertTrue((self.storage._repo_dir(repo) / "_manifests").is_dir())

        self.storage.remove_tag(repo, "v1")

        self.assertTrue((self.storage._repo_dir(repo) / "_manifests").is_dir())
        self.assertEqual(self.storage.list_tags(repo), ["v2"])

    def test_misrouted_repository_path_rejected(self) -> None:
        with self.assertRaises(ValueError):
            reject_misrouted_repository_path("royles-local/tags/v1")
        self.storage.create_repository("royles-local")
        with self.assertRaises(ValueError):
            self.storage.delete_repository("royles-local/tags/v1")

    def test_ui_tag_delete_route_not_repo_delete(self) -> None:
        import os

        os.environ["REGISTRY_DATA_DIR"] = str(self.root)
        client = TestClient(app)
        repo = "royles-local"
        manifest = b'{"schemaVersion":2,"mediaType":"application/vnd.docker.distribution.manifest.v2+json","config":{},"layers":[]}'
        self.storage.put_manifest(repo, "v1", manifest)
        r = client.post(
            f"/ui/repositories/{repo}/tags/v1/delete",
            json={"confirm_ref": f"{repo}:v1"},
        )
        self.assertEqual(r.status_code, 200, r.text)
        self.assertTrue(r.json().get("repository_preserved"))
        self.assertTrue((self.storage._repo_dir(repo) / "_manifests").is_dir())
        self.assertEqual(self.storage.list_tags(repo), [])

    def test_ui_repo_delete_rejects_tag_like_path(self) -> None:
        import os

        os.environ["REGISTRY_DATA_DIR"] = str(self.root)
        client = TestClient(app)
        r = client.post(
            "/ui/repositories/royles-local/tags/v1/delete/wrong",
            json={"confirm_name": "royles-local/tags/v1"},
        )
        self.assertIn(r.status_code, (404, 405, 422))


if __name__ == "__main__":
    unittest.main()

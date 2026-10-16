import { useCallback, useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { apiErrorDetail } from "./apiError";

export type ModalKind = "delete" | "unlock" | "deleteTag" | "gc" | "rename";

export type ModalPayload = {
  repository: string;
  tag?: string;
  confirmRef?: string;
};

function overlayStyle(): React.CSSProperties {
  return {
    position: "fixed",
    inset: 0,
    background: "rgba(15, 23, 42, 0.45)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    zIndex: 10000,
    padding: 16,
  };
}

function dialogStyle(): React.CSSProperties {
  return {
    background: "#fff",
    borderRadius: 12,
    border: "1px solid #e3e6ea",
    boxShadow: "0 12px 40px rgba(0,0,0,0.12)",
    maxWidth: 480,
    width: "100%",
    padding: "22px 24px",
    fontFamily: "system-ui, -apple-system, Segoe UI, Roboto, sans-serif",
    color: "#3c3c3c",
  };
}

function ModalShell({
  title,
  children,
  onClose,
}: {
  title: string;
  children: React.ReactNode;
  onClose: () => void;
}) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose]);

  return createPortal(
    <div style={overlayStyle()} role="presentation" onMouseDown={(e) => e.target === e.currentTarget && onClose()}>
      <div style={dialogStyle()} role="dialog" aria-modal="true" aria-labelledby="registry-modal-title">
        <h2 id="registry-modal-title" style={{ margin: "0 0 12px", fontSize: "1.15rem" }}>
          {title}
        </h2>
        {children}
      </div>
    </div>,
    document.body,
  );
}

const inputStyle: React.CSSProperties = {
  width: "100%",
  padding: "10px 12px",
  border: "1px solid #cfd5df",
  borderRadius: 8,
  fontSize: 14,
  boxSizing: "border-box",
};

function DeleteRepositoryModal({ repository, onClose }: { repository: string; onClose: () => void }) {
  const [typed, setTyped] = useState("");
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const match = typed.trim() === repository;

  const submit = async () => {
    if (!match || busy) return;
    setBusy(true);
    setError(null);
    try {
      const pathUrl = window.registryRepoPathUrl?.("/ui/repositories", repository);
      if (!pathUrl) throw new Error("UI not initialized");
      const res = await fetch(`${pathUrl}/delete`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          confirm_name: repository,
          app_api_key: window.registryRepoApiKey?.() ?? null,
        }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(apiErrorDetail(data));
      window.registryRepoReload?.();
    } catch (e) {
      setError(e instanceof Error ? e.message : String(e));
      setBusy(false);
    }
  };

  return (
    <ModalShell title="Delete repository" onClose={onClose}>
      <p style={{ margin: "0 0 12px", fontSize: 13, lineHeight: 1.45, color: "#5c6570" }}>
        This removes all tags and manifest metadata for <strong>{repository}</strong>. Clients will no longer pull
        images from this path. Blob files remain on disk until you run garbage collection.
      </p>
      <label style={{ display: "block", fontWeight: 600, fontSize: 13, marginBottom: 6 }}>
        Type the repository name to confirm
      </label>
      <input type="text" value={typed} autoFocus onChange={(e) => setTyped(e.target.value)} placeholder={repository} style={inputStyle} />
      {error ? (
        <p style={{ color: "#b42318", fontSize: 13, margin: "10px 0 0" }} role="alert">
          {error}
        </p>
      ) : null}
      <div style={{ display: "flex", gap: 8, justifyContent: "flex-end", marginTop: 18 }}>
        <button type="button" onClick={onClose} disabled={busy} className="registry-modal-btn secondary">
          Cancel
        </button>
        <button type="button" onClick={submit} disabled={!match || busy} className="registry-modal-btn danger">
          {busy ? "Deleting…" : "Delete repository"}
        </button>
      </div>
    </ModalShell>
  );
}

function UnlockRepositoryModal({ repository, onClose }: { repository: string; onClose: () => void }) {
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const submit = async () => {
    if (busy) return;
    setBusy(true);
    setError(null);
    try {
      const pathUrl = window.registryRepoPathUrl?.("/ui/repositories", repository);
      if (!pathUrl) throw new Error("UI not initialized");
      const res = await fetch(`${pathUrl}/unlock`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ app_api_key: window.registryRepoApiKey?.() ?? null }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(apiErrorDetail(data));
      window.registryRepoReload?.();
    } catch (e) {
      setError(e instanceof Error ? e.message : String(e));
      setBusy(false);
    }
  };

  return (
    <ModalShell title="Unlock repository?" onClose={onClose}>
      <p style={{ margin: "0 0 10px", fontSize: 13, lineHeight: 1.45, color: "#5c6570" }}>
        <strong>{repository}</strong> is protected. Unlocking allows administrators to:
      </p>
      <ul style={{ margin: "0 0 10px", paddingLeft: 18, fontSize: 13, color: "#5c6570", lineHeight: 1.45 }}>
        <li>Delete the repository and all of its tags</li>
        <li>Rename the repository (updates metadata and image references)</li>
        <li>Delete individual tags inside the repository</li>
      </ul>
      <p style={{ margin: 0, fontSize: 13, color: "#8b95a5" }}>
        Push, pull, and replicate are not blocked by the lock. Re-lock anytime from the Repositories page.
      </p>
      {error ? (
        <p style={{ color: "#b42318", fontSize: 13, margin: "10px 0 0" }} role="alert">
          {error}
        </p>
      ) : null}
      <div style={{ display: "flex", gap: 8, justifyContent: "flex-end", marginTop: 18 }}>
        <button type="button" onClick={onClose} disabled={busy} className="registry-modal-btn secondary">
          Keep locked
        </button>
        <button type="button" onClick={submit} disabled={busy} className="registry-modal-btn primary">
          {busy ? "Unlocking…" : "Unlock repository"}
        </button>
      </div>
    </ModalShell>
  );
}

function DeleteTagModal({
  repository,
  tag,
  confirmRef,
  onClose,
}: {
  repository: string;
  tag: string;
  confirmRef: string;
  onClose: () => void;
}) {
  const [typed, setTyped] = useState("");
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const match = typed.trim() === confirmRef;

  const submit = async () => {
    if (!match || busy) return;
    setBusy(true);
    setError(null);
    try {
      const pathUrl = window.registryRepoPathUrl?.("/ui/repositories", repository);
      if (!pathUrl) throw new Error("UI not initialized");
      const res = await fetch(`${pathUrl}/tags/${encodeURIComponent(tag)}/delete`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          confirm_ref: typed.trim(),
          app_api_key: window.registryRepoApiKey?.() ?? null,
        }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(apiErrorDetail(data));
      window.registryRepoReload?.();
    } catch (e) {
      setError(e instanceof Error ? e.message : String(e));
      setBusy(false);
    }
  };

  return (
    <ModalShell title="Delete tag" onClose={onClose}>
      <p style={{ margin: "0 0 12px", fontSize: 13, lineHeight: 1.45, color: "#5c6570" }}>
        Stop serving <strong>{confirmRef}</strong> only. The repository <strong>{repository}</strong> and any other
        tags are kept. Pull and Runtime Catalog references to this tag will fail until you push or replicate again.
      </p>
      <label style={{ display: "block", fontWeight: 600, fontSize: 13, marginBottom: 6 }}>
        Type <code>{confirmRef}</code> to confirm
      </label>
      <input type="text" value={typed} autoFocus onChange={(e) => setTyped(e.target.value)} placeholder={confirmRef} style={inputStyle} />
      {error ? (
        <p style={{ color: "#b42318", fontSize: 13, margin: "10px 0 0" }} role="alert">
          {error}
        </p>
      ) : null}
      <div style={{ display: "flex", gap: 8, justifyContent: "flex-end", marginTop: 18 }}>
        <button type="button" onClick={onClose} disabled={busy} className="registry-modal-btn secondary">
          Cancel
        </button>
        <button type="button" onClick={submit} disabled={!match || busy} className="registry-modal-btn danger">
          {busy ? "Deleting…" : "Delete tag"}
        </button>
      </div>
    </ModalShell>
  );
}

function RenameRepositoryModal({ repository, onClose }: { repository: string; onClose: () => void }) {
  const [newName, setNewName] = useState(repository);
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const valid = newName.trim() && newName.trim() !== repository;

  const submit = async () => {
    if (!valid || busy) return;
    setBusy(true);
    setError(null);
    try {
      const pathUrl = window.registryRepoPathUrl?.("/ui/repositories", repository);
      if (!pathUrl) throw new Error("UI not initialized");
      const res = await fetch(`${pathUrl}/rename`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          new_name: newName.trim(),
          app_api_key: window.registryRepoApiKey?.() ?? null,
        }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(apiErrorDetail(data));
      window.registryRepoReload?.();
    } catch (e) {
      setError(e instanceof Error ? e.message : String(e));
      setBusy(false);
    }
  };

  return (
    <ModalShell title="Rename repository" onClose={onClose}>
      <p style={{ margin: "0 0 12px", fontSize: 13, lineHeight: 1.45, color: "#5c6570" }}>
        Updates on-disk metadata and image references that mention <strong>{repository}</strong>.
      </p>
      <label style={{ display: "block", fontWeight: 600, fontSize: 13, marginBottom: 6 }}>
        New repository name
      </label>
      <input type="text" value={newName} autoFocus onChange={(e) => setNewName(e.target.value)} style={inputStyle} />
      {error ? (
        <p style={{ color: "#b42318", fontSize: 13, margin: "10px 0 0" }} role="alert">
          {error}
        </p>
      ) : null}
      <div style={{ display: "flex", gap: 8, justifyContent: "flex-end", marginTop: 18 }}>
        <button type="button" onClick={onClose} disabled={busy} className="registry-modal-btn secondary">
          Cancel
        </button>
        <button type="button" onClick={submit} disabled={!valid || busy} className="registry-modal-btn primary">
          {busy ? "Renaming…" : "Rename"}
        </button>
      </div>
    </ModalShell>
  );
}

function GarbageCollectionModal({ onClose }: { onClose: () => void }) {
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const submit = async () => {
    if (busy) return;
    setBusy(true);
    setError(null);
    try {
      const res = await fetch("/ui/gc", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ dry_run: false, app_api_key: window.registryRepoApiKey?.() ?? null }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(apiErrorDetail(data));
      window.registryRepoOnGcComplete?.(data);
      onClose();
    } catch (e) {
      setError(e instanceof Error ? e.message : String(e));
      setBusy(false);
    }
  };

  return (
    <ModalShell title="Run garbage collection?" onClose={onClose}>
      <p style={{ margin: "0 0 12px", fontSize: 13, lineHeight: 1.45, color: "#5c6570" }}>
        Permanently delete blob files that are no longer referenced by any repository manifest. This cannot be undone.
      </p>
      <p style={{ margin: 0, fontSize: 13, color: "#8b95a5" }}>
        Use <strong>Preview garbage collection</strong> first to see how much space would be reclaimed.
      </p>
      {error ? (
        <p style={{ color: "#b42318", fontSize: 13, margin: "10px 0 0" }} role="alert">
          {error}
        </p>
      ) : null}
      <div style={{ display: "flex", gap: 8, justifyContent: "flex-end", marginTop: 18 }}>
        <button type="button" onClick={onClose} disabled={busy} className="registry-modal-btn secondary">
          Cancel
        </button>
        <button type="button" onClick={submit} disabled={busy} className="registry-modal-btn danger">
          {busy ? "Running…" : "Delete orphan blobs"}
        </button>
      </div>
    </ModalShell>
  );
}

export function RepositoriesModalsHost() {
  const [kind, setKind] = useState<ModalKind | null>(null);
  const [payload, setPayload] = useState<ModalPayload | null>(null);

  const close = useCallback(() => {
    setKind(null);
    setPayload(null);
  }, []);

  const open = useCallback((nextKind: ModalKind, next: ModalPayload) => {
    setKind(nextKind);
    setPayload(next);
  }, []);

  useEffect(() => {
    const api = {
      openDeleteRepository: (name: string) => open("delete", { repository: name }),
      openUnlockRepository: (name: string) => open("unlock", { repository: name }),
      openDeleteTag: (repository: string, tag: string) =>
        open("deleteTag", { repository, tag, confirmRef: `${repository}:${tag}` }),
      openRenameRepository: (name: string) => open("rename", { repository: name }),
      openGarbageCollection: () => open("gc", { repository: "" }),
    };
    window.RegistryRepositoriesUi = api;

    const queue = window.__registryModalQueue;
    if (queue?.length) {
      for (const item of queue) {
        if (item.kind === "delete") api.openDeleteRepository(item.repository);
        else if (item.kind === "unlock") api.openUnlockRepository(item.repository);
        else if (item.kind === "deleteTag" && item.tag) api.openDeleteTag(item.repository, item.tag);
        else if (item.kind === "rename") api.openRenameRepository(item.repository);
        else if (item.kind === "gc") api.openGarbageCollection();
      }
      window.__registryModalQueue = [];
    }

    window.dispatchEvent(new Event("registry-repositories-ui-ready"));
  }, [open]);

  if (!kind || !payload) return null;
  if (kind === "delete") return <DeleteRepositoryModal repository={payload.repository} onClose={close} />;
  if (kind === "unlock") return <UnlockRepositoryModal repository={payload.repository} onClose={close} />;
  if (kind === "deleteTag" && payload.tag && payload.confirmRef) {
    return (
      <DeleteTagModal
        repository={payload.repository}
        tag={payload.tag}
        confirmRef={payload.confirmRef}
        onClose={close}
      />
    );
  }
  if (kind === "rename") return <RenameRepositoryModal repository={payload.repository} onClose={close} />;
  if (kind === "gc") return <GarbageCollectionModal onClose={close} />;
  return null;
}

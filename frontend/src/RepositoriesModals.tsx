import { useCallback, useEffect, useState } from "react";
import { createPortal } from "react-dom";

type ModalKind = "delete" | "unlock" | null;

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

function DeleteRepositoryModal({
  repository,
  onClose,
}: {
  repository: string;
  onClose: () => void;
}) {
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
      if (!res.ok) throw new Error(data.detail || "Delete failed");
      window.registryRepoReload?.();
    } catch (e) {
      setError(e instanceof Error ? e.message : String(e));
      setBusy(false);
    }
  };

  return (
    <ModalShell title="Delete repository" onClose={onClose}>
      <p style={{ margin: "0 0 12px", fontSize: 14, lineHeight: 1.5, color: "#5c6570" }}>
        This removes all tags and manifest metadata for <strong>{repository}</strong>. Clients will no longer pull
        images from this path. Blob files remain on disk until you run garbage collection.
      </p>
      <label style={{ display: "block", fontWeight: 600, fontSize: 13, marginBottom: 6 }}>
        Type the repository name to confirm
      </label>
      <input
        type="text"
        value={typed}
        autoFocus
        onChange={(e) => setTyped(e.target.value)}
        placeholder={repository}
        style={{
          width: "100%",
          padding: "10px 12px",
          border: "1px solid #cfd5df",
          borderRadius: 8,
          fontSize: 14,
          boxSizing: "border-box",
        }}
      />
      {error ? (
        <p style={{ color: "#b42318", fontSize: 13, margin: "10px 0 0" }} role="alert">
          {error}
        </p>
      ) : null}
      <div style={{ display: "flex", gap: 8, justifyContent: "flex-end", marginTop: 18 }}>
        <button type="button" onClick={onClose} disabled={busy} className="registry-modal-btn secondary">
          Cancel
        </button>
        <button
          type="button"
          onClick={submit}
          disabled={!match || busy}
          className="registry-modal-btn danger"
        >
          {busy ? "Deleting…" : "Delete repository"}
        </button>
      </div>
    </ModalShell>
  );
}

function UnlockRepositoryModal({
  repository,
  onClose,
}: {
  repository: string;
  onClose: () => void;
}) {
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
      if (!res.ok) throw new Error(data.detail || "Unlock failed");
      window.registryRepoReload?.();
    } catch (e) {
      setError(e instanceof Error ? e.message : String(e));
      setBusy(false);
    }
  };

  return (
    <ModalShell title="Unlock repository?" onClose={onClose}>
      <p style={{ margin: "0 0 10px", fontSize: 14, lineHeight: 1.5, color: "#5c6570" }}>
        <strong>{repository}</strong> is protected. Unlocking allows administrators to:
      </p>
      <ul style={{ margin: "0 0 14px", paddingLeft: 20, fontSize: 14, color: "#5c6570", lineHeight: 1.5 }}>
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

export function RepositoriesModalsHost() {
  const [kind, setKind] = useState<ModalKind>(null);
  const [repo, setRepo] = useState("");

  const close = useCallback(() => {
    setKind(null);
    setRepo("");
  }, []);

  useEffect(() => {
    window.RegistryRepositoriesUi = {
      openDeleteRepository: (name: string) => {
        setRepo(name);
        setKind("delete");
      },
      openUnlockRepository: (name: string) => {
        setRepo(name);
        setKind("unlock");
      },
    };
    return () => {
      delete window.RegistryRepositoriesUi;
    };
  }, []);

  if (!kind || !repo) return null;
  if (kind === "delete") return <DeleteRepositoryModal repository={repo} onClose={close} />;
  return <UnlockRepositoryModal repository={repo} onClose={close} />;
}

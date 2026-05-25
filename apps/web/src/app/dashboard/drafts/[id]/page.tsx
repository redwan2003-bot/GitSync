"use client";

import { useEffect, useState, useCallback } from "react";
import Link from "next/link";
import { useRouter, useParams } from "next/navigation";
import { ArrowLeft, Send, Save, Linkedin } from "lucide-react";

type Draft = {
  id: string;
  status: string;
  template: string;
  generatedText: string | null;
  payloadJson: { repoName?: string; events?: unknown[] };
};

export default function DraftEditorPage() {
  const router = useRouter();
  const params = useParams();
  const draftId = params.id as string;
  const [draft, setDraft] = useState<Draft | null>(null);
  const [content, setContent] = useState("");
  const [loading, setLoading] = useState(true);
  const [publishing, setPublishing] = useState(false);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const loadDraft = useCallback(async () => {
    const res = await fetch(`/api/reposignal/drafts/${draftId}`);
    if (!res.ok) throw new Error(await res.text());
    const data = (await res.json()) as Draft;
    setDraft(data);
    setContent(data.generatedText ?? "");
  }, [draftId]);

  useEffect(() => {
    loadDraft()
      .catch((e) => setError(e.message))
      .finally(() => setLoading(false));
  }, [loadDraft]);

  const handleSave = async () => {
    setSaving(true);
    setError(null);
    try {
      const res = await fetch(`/api/reposignal/drafts/${draftId}`, {
        method: "PUT",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ generatedText: content }),
      });
      if (!res.ok) throw new Error(await res.text());
      await loadDraft();
    } catch (e: unknown) {
      setError(e instanceof Error ? e.message : "Save failed");
    } finally {
      setSaving(false);
    }
  };

  const handleApprove = async () => {
    setError(null);
    const res = await fetch(`/api/reposignal/drafts/${draftId}/approve`, {
      method: "POST",
    });
    if (!res.ok) {
      setError(await res.text());
      return;
    }
    await loadDraft();
  };

  const handlePublish = async () => {
    setPublishing(true);
    setError(null);
    try {
      const res = await fetch(`/api/reposignal/drafts/${draftId}/publish`, {
        method: "POST",
      });
      if (!res.ok) throw new Error(await res.text());
      router.push("/dashboard/drafts");
    } catch (e: unknown) {
      setError(e instanceof Error ? e.message : "Publish failed");
    } finally {
      setPublishing(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-slate-950 flex items-center justify-center text-slate-500">
        <p className="font-mono text-sm">Loading draft…</p>
      </div>
    );
  }

  if (!draft) {
    return (
      <div className="min-h-screen bg-slate-950 flex items-center justify-center text-red-400">
        {error ?? "Draft not found"}
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-950 text-slate-200">
      <header className="sticky top-0 z-50 bg-slate-950/80 backdrop-blur border-b border-slate-800 px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Link
            href="/dashboard/drafts"
            className="p-2 hover:bg-slate-800 rounded-lg text-slate-400 hover:text-white"
          >
            <ArrowLeft className="w-5 h-5" />
          </Link>
          <div>
            <h1 className="text-sm font-bold text-white">
              {draft.payloadJson?.repoName ?? "Draft review"}
            </h1>
            <span className="text-xs font-mono text-slate-500">
              {draft.status}
            </span>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <button
            onClick={handleSave}
            disabled={saving || publishing}
            className="flex items-center gap-2 px-4 py-2 rounded-md bg-slate-800 hover:bg-slate-700 text-sm disabled:opacity-50"
          >
            <Save className="w-4 h-4" />
            Save
          </button>
          {draft.status !== "APPROVED" && draft.status !== "PUBLISHED" && (
            <button
              onClick={handleApprove}
              className="px-4 py-2 rounded-md bg-slate-700 hover:bg-slate-600 text-sm"
            >
              Approve
            </button>
          )}
          <button
            onClick={handlePublish}
            disabled={publishing || saving || draft.status === "PUBLISHED"}
            className="flex items-center gap-2 px-4 py-2 rounded-md bg-blue-600 hover:bg-blue-500 text-sm text-white disabled:opacity-50"
          >
            <Send className="w-4 h-4" />
            Publish
          </button>
        </div>
      </header>

      {error && (
        <div className="mx-6 mt-4 text-sm text-red-400 border border-red-900 bg-red-950/40 rounded-lg p-3 font-mono">
          {error}
        </div>
      )}

      <div className="grid lg:grid-cols-2 gap-6 p-6 max-w-7xl mx-auto">
        <section>
          <label className="text-xs font-mono text-slate-500 uppercase tracking-wider">
            Post text
          </label>
          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            className="mt-2 w-full h-80 rounded-lg border border-slate-800 bg-slate-900 p-4 text-sm font-mono leading-relaxed resize-y focus:outline-none focus:ring-1 focus:ring-blue-500"
            disabled={draft.status === "PUBLISHED"}
          />
        </section>
        <section>
          <div className="flex items-center gap-2 mb-2 text-xs font-mono text-slate-500 uppercase">
            <Linkedin className="w-4 h-4" />
            LinkedIn preview
          </div>
          <div className="rounded-lg border border-slate-800 bg-white text-slate-900 p-4 text-sm whitespace-pre-wrap min-h-[200px]">
            {content || (
              <span className="text-slate-400">Preview will appear here…</span>
            )}
          </div>
        </section>
      </div>
    </div>
  );
}

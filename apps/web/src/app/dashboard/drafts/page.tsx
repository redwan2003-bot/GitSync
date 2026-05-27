"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { format } from "date-fns";
import { UserMenu } from "@/components/user-menu";
import { useSession } from "next-auth/react";
import { FileText, Loader2 } from "lucide-react";

type Draft = {
  id: string;
  status: string;
  template: string;
  createdAt: string;
  payloadJson: { repoName?: string; title?: string };
};

export default function DraftsQueuePage() {
  const { data: session } = useSession();
  const [drafts, setDrafts] = useState<Draft[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch("/api/GitSync/drafts")
      .then(async (res) => {
        if (!res.ok) throw new Error(await res.text());
        return res.json();
      })
      .then((data) => setDrafts(data))
      .catch((e) => setError(e.message))
      .finally(() => setLoading(false));
  }, []);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-200 font-sans">
      <header className="sticky top-0 z-50 bg-slate-950/80 backdrop-blur-md border-b border-slate-800 px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-8">
          <Link href="/dashboard" className="text-xl font-bold tracking-tight text-white">
            GitSync
          </Link>
          <span className="text-sm text-slate-400 flex items-center gap-2">
            <FileText className="w-4 h-4" />
            Review queue
          </span>
        </div>
        <UserMenu email={session?.user?.email} />
      </header>

      <main className="max-w-5xl mx-auto p-6 mt-6">
        {loading && (
          <div className="flex items-center justify-center py-20 text-slate-500">
            <Loader2 className="w-6 h-6 animate-spin mr-2" />
            Loading drafts…
          </div>
        )}
        {error && (
          <p className="text-red-400 text-sm font-mono border border-red-900 bg-red-950/50 rounded-lg p-4">
            {error}
          </p>
        )}
        {!loading && !error && drafts.length === 0 && (
          <p className="text-slate-500 text-center py-20">
            No drafts yet. Connect GitHub and enable repositories to start.
          </p>
        )}
        <ul className="space-y-3">
          {drafts.map((draft) => (
            <li key={draft.id}>
              <Link
                href={`/dashboard/drafts/${draft.id}`}
                className="block rounded-lg border border-slate-800 bg-slate-900/50 p-4 hover:border-slate-600 transition-colors"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium text-white">
                      {(draft.payloadJson as { repoName?: string })?.repoName ??
                        "Repository update"}
                    </p>
                    <p className="text-xs text-slate-500 mt-1 font-mono">
                      {draft.template} · {draft.status}
                    </p>
                  </div>
                  <span className="text-xs text-slate-500">
                    {format(new Date(draft.createdAt), "MMM d, yyyy")}
                  </span>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </main>
    </div>
  );
}

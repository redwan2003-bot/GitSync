'use client';

import { H2, Code } from '../../../../components/typography';
import { PixelStatusBadge } from '../../../../components/typography';
import { ArrowLeft, Copy, CheckCircle, RefreshCw } from 'lucide-react';
import Link from 'next/link';
import { useState, useEffect, use } from 'react';
import { useRouter } from 'next/navigation';

interface DraftDetailPageProps {
  params: Promise<{ id: string }>;
}

interface Commit {
  id?: string;
  message: string;
}

interface Draft {
  id: string;
  generatedText: string | null;
  status: string;
  repository?: {
    name: string;
  } | null;
  payloadJson?: {
    commits?: Commit[];
  } | null;
}

export default function DraftDetailPage({ params }: DraftDetailPageProps) {
  const [copied, setCopied] = useState(false);
  const [draft, setDraft] = useState<Draft | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [publishing, setPublishing] = useState(false);
  const router = useRouter();

  const unwrappedParams = use(params);
  const draftId = unwrappedParams.id;

  useEffect(() => {
    async function fetchDraft() {
      try {
        const res = await fetch(`/api/GitSync/drafts/${draftId}`);
        const data = await res.json();
        if (!res.ok) throw new Error(data.message || 'Failed to fetch draft');
        setDraft(data.data?.draft);
      } catch (e) {
        setError(e instanceof Error ? e.message : 'Failed to fetch draft');
      } finally {
        setLoading(false);
      }
    }
    fetchDraft();
  }, [draftId]);

  const handleCopy = () => {
    if (!draft?.generatedText) return;
    navigator.clipboard.writeText(draft.generatedText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handlePublish = async () => {
    setPublishing(true);
    try {
      const res = await fetch(`/api/GitSync/drafts/${draftId}`, { method: 'POST' });
      if (!res.ok) throw new Error('Failed to publish');
      router.push('/dashboard/drafts');
    } catch (e) {
      alert(e instanceof Error ? e.message : 'Failed to publish');
      setPublishing(false);
    }
  };

  return (
    <div className="space-y-6">
      {/* Back Button */}
      <Link href="/dashboard/drafts" className="flex items-center gap-2 text-signal hover:text-signal/80 transition-colors">
        <ArrowLeft aria-hidden="true" size={18} />
        <span className="text-sm font-medium">Back to Drafts</span>
      </Link>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {loading ? (
          <div className="lg:col-span-3 text-center py-12">
            <RefreshCw className="animate-spin mx-auto text-signal mb-4" />
            <p>Loading draft...</p>
          </div>
        ) : error ? (
          <div className="lg:col-span-3 p-4 bg-danger/10 text-danger rounded-lg">{error}</div>
        ) : draft && (
          <>
            <div className="lg:col-span-2 space-y-4">
              <div className="bg-surface border border-border rounded-lg p-6">
                <div className="flex items-start justify-between mb-4">
                  <H2>LinkedIn Draft</H2>
                  <PixelStatusBadge status={
                    draft.status === 'PUBLISHED' ? 'PUBLISHED' :
                    draft.status === 'DRAFT_PENDING' ? 'READY' :
                    draft.status === 'FAILED' ? 'FAILED' : 'REVIEW'
                  } />
                </div>

                {/* Draft Content */}
                <textarea
                  aria-label="LinkedIn draft content"
                  value={draft.generatedText || ''}
                  readOnly
                  className="w-full h-48 bg-surface-soft border border-border rounded-lg p-4 text-sm text-text font-mono placeholder-muted/50 focus:outline-none focus:border-signal resize-none opacity-75 cursor-not-allowed"
                  placeholder="Draft content will appear here"
                  title="Edit is coming soon - copy to edit elsewhere for now"
                />

            {/* Actions */}
            <div className="flex gap-3 mt-4">
              <button
                type="button"
                onClick={handleCopy}
                className="flex-1 flex items-center justify-center gap-2 px-4 py-2 rounded-lg bg-signal text-bg font-medium text-sm hover:bg-signal/90 transition-colors"
              >
                {copied ? (
                  <>
                    <CheckCircle aria-hidden="true" size={16} />
                    Copied
                  </>
                ) : (
                  <>
                    <Copy aria-hidden="true" size={16} />
                    Copy
                  </>
                )}
              </button>
              <button 
                type="button" 
                onClick={handlePublish}
                disabled={publishing || draft.status === 'PUBLISHED'} 
                className="flex-1 px-4 py-2 rounded-lg bg-linkedin text-white font-medium text-sm hover:bg-linkedin/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {publishing ? 'Publishing...' : draft.status === 'PUBLISHED' ? 'Published' : 'Publish to LinkedIn'}
              </button>
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <div className="bg-surface border border-border rounded-lg p-6">
            <H2 className="text-lg mb-4">Evidence</H2>

            {/* Repo & Branch */}
            <div className="space-y-3 pb-4 border-b border-border">
              <div>
                <div className="text-xs text-muted uppercase">Repository</div>
                <div className="text-sm font-medium text-text">{draft.repository?.name || 'Unknown'}</div>
              </div>
              <div>
                <div className="text-xs text-muted uppercase">Payload</div>
                <Code>{draft.payloadJson ? Object.keys(draft.payloadJson).join(', ') : 'N/A'}</Code>
              </div>
            </div>

            {/* Commits */}
            <div className="pt-4">
              <div className="text-xs text-muted uppercase font-medium mb-2">Commits</div>
              <ul className="space-y-1">
                {(draft.payloadJson?.commits || []).map((commit) => (
                  <li key={commit.id || commit.message} className="text-xs text-text font-mono bg-surface-soft px-2 py-1 rounded">
                    {commit.message}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        </>
        )}
      </div>
    </div>
  );
}

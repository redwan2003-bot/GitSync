'use client';

import { H2, Code } from '@/components/typography';
import { PixelStatusBadge } from '@/components/typography';
import { ArrowLeft, Copy, CheckCircle } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';

interface DraftDetailPageProps {
  params: { id: string };
}

export default function DraftDetailPage({ params }: DraftDetailPageProps) {
  const [copied, setCopied] = useState(false);

  const draftId = params.id;

  // Mock draft detail
  const draft = {
    id: draftId,
    repo: 'gitflow',
    title: 'Released v2.0.0 with major performance improvements',
    content: 'Released v2.0.0 with major performance improvements. Includes new dark mode support and redesigned dashboard interface. Breaking changes: API v1 deprecated. Migration guide available.',
    status: 'READY' as const,
    evidence: {
      commits: ['feat: dark mode theme system', 'perf: optimize bundle size', 'chore: update dependencies'],
      files: ['src/app/globals.css', 'src/components/dashboard-shell.tsx', 'package.json'],
      branch: 'main',
    },
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(draft.content);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="space-y-6">
      {/* Back Button */}
      <Link href="/dashboard/drafts" className="flex items-center gap-2 text-signal hover:text-signal/80 transition-colors">
        <ArrowLeft size={18} />
        <span className="text-sm font-medium">Back to Drafts</span>
      </Link>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left Panel: Draft Editor/Preview */}
        <div className="lg:col-span-2 space-y-4">
          <div className="bg-surface border border-border rounded-lg p-6">
            <div className="flex items-start justify-between mb-4">
              <H2>LinkedIn Draft</H2>
              <PixelStatusBadge status="READY" />
            </div>

            {/* Draft Content */}
            <textarea
              value={draft.content}
              readOnly
              className="w-full h-48 bg-surface-soft border border-border rounded-lg p-4 text-sm text-text font-mono placeholder-muted/50 focus:outline-none focus:border-signal resize-none opacity-75 cursor-not-allowed"
              placeholder="Draft content will appear here"
              title="Edit is coming soon - copy to edit elsewhere for now"
            />

            {/* Actions */}
            <div className="flex gap-3 mt-4">
              <button
                onClick={handleCopy}
                className="flex-1 flex items-center justify-center gap-2 px-4 py-2 rounded-lg bg-signal text-bg font-medium text-sm hover:bg-signal/90 transition-colors"
              >
                {copied ? (
                  <>
                    <CheckCircle size={16} />
                    Copied
                  </>
                ) : (
                  <>
                    <Copy size={16} />
                    Copy
                  </>
                )}
              </button>
              <button disabled className="flex-1 px-4 py-2 rounded-lg border border-signal/30 text-signal/50 font-medium text-sm opacity-50 cursor-not-allowed" title="Publishing is coming soon">
                Publish (Soon)
              </button>
            </div>
          </div>
        </div>

        {/* Right Panel: Evidence */}
        <div className="space-y-4">
          <div className="bg-surface border border-border rounded-lg p-6">
            <H2 className="text-lg mb-4">Evidence</H2>

            {/* Repo & Branch */}
            <div className="space-y-3 pb-4 border-b border-border">
              <div>
                <div className="text-xs text-muted uppercase">Repository</div>
                <div className="text-sm font-medium text-text">{draft.repo}</div>
              </div>
              <div>
                <div className="text-xs text-muted uppercase">Branch</div>
                <Code>{draft.evidence.branch}</Code>
              </div>
            </div>

            {/* Commits */}
            <div className="pt-4">
              <div className="text-xs text-muted uppercase font-medium mb-2">Commits</div>
              <ul className="space-y-1">
                {draft.evidence.commits.map((commit, idx) => (
                  <li key={idx} className="text-xs text-text font-mono bg-surface-soft px-2 py-1 rounded">
                    {commit}
                  </li>
                ))}
              </ul>
            </div>

            {/* Files */}
            <div className="pt-4">
              <div className="text-xs text-muted uppercase font-medium mb-2">Files Changed</div>
              <ul className="space-y-1">
                {draft.evidence.files.map((file, idx) => (
                  <li key={idx} className="text-xs text-cyan font-mono">
                    {file}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

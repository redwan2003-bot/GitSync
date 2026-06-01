'use client';

import { BentoCard } from '@/components/bento-card';
import { PixelStatusBadge } from '@/components/typography';
import { H1, H2 } from '@/components/typography';
import { GitBranch, FileText, Calendar } from 'lucide-react';
import Link from 'next/link';
import { useState, useEffect } from 'react';

const STATUS_TABS = ['All', 'READY', 'SYNCING', 'REVIEW', 'FAILED'] as const;

interface Draft {
  id: string;
  repo?: string;
  preview?: string;
  title?: string;
  generatedText?: string;
  status: 'READY' | 'SYNCING' | 'REVIEW' | 'FAILED' | 'PUBLISHED';
  timestamp?: string;
  createdAt?: string;
}

// Demo mode mock data (only shown if NEXT_PUBLIC_DEMO_MODE=true)
const DEMO_DRAFTS = [
  {
    id: '1',
    repo: 'gitflow',
    preview: 'Released v2.0.0 with major performance improvements. Includes new dark mode support and redesigned dashboard interface.',
    status: 'READY' as const,
    timestamp: '2 hours ago',
  },
  {
    id: '2',
    repo: 'ui-kit',
    preview: 'New feature: Dark mode theme system. Implements comprehensive color tokens and responsive design patterns.',
    status: 'REVIEW' as const,
    timestamp: '4 hours ago',
  },
  {
    id: '3',
    repo: 'api-core',
    preview: 'Fixed critical bug in auth middleware. Updated dependencies to latest secure versions.',
    status: 'SYNCING' as const,
    timestamp: '6 hours ago',
  },
  {
    id: '4',
    repo: 'mobile-app',
    preview: 'Deploy failed due to certificate issue. Will retry after fixing iOS signing configuration.',
    status: 'FAILED' as const,
    timestamp: '1 day ago',
  },
];

function DraftCard({ draft }: { draft: Draft }) {
  const statusMap: Record<Draft['status'], Draft['status']> = {
    READY: 'READY',
    SYNCING: 'SYNCING',
    REVIEW: 'REVIEW',
    FAILED: 'FAILED',
    PUBLISHED: 'PUBLISHED',
  };

  const preview = draft.preview || draft.generatedText?.substring(0, 150) || 'No preview available';
  const timestamp = draft.timestamp || new Date(draft.createdAt || '').toLocaleString();

  return (
    <BentoCard className="flex flex-col gap-4">
      {/* Header: Repo + Status */}
      <div className="flex items-start justify-between">
        <div className="flex items-center gap-2">
          <GitBranch size={16} className="text-muted" />
          <div className="text-sm font-medium text-text">{draft.repo || 'Unknown'}</div>
        </div>
        <PixelStatusBadge status={statusMap[draft.status]} />
      </div>

      {/* Draft Preview */}
      <p className="text-sm text-text line-clamp-3">{preview}</p>

      {/* Footer: Timestamp + CTA */}
      <div className="flex items-center justify-between pt-2 border-t border-border">
        <div className="flex items-center gap-1 text-xs text-muted">
          <Calendar size={14} />
          {timestamp}
        </div>
        <Link
          href={`/dashboard/drafts/${draft.id}`}
          className="text-xs text-signal hover:text-signal/80 transition-colors font-medium"
        >
          Review →
        </Link>
      </div>
    </BentoCard>
  );
}

export default function DraftsPage() {
  const [drafts, setDrafts] = useState<Draft[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState<typeof STATUS_TABS[number]>('All');

  useEffect(() => {
    async function loadDrafts() {
      try {
        // Check if demo mode is enabled
        if (process.env.NEXT_PUBLIC_DEMO_MODE === 'true') {
          setDrafts(DEMO_DRAFTS);
          setLoading(false);
          return;
        }

        // Fetch real drafts from API
        const res = await fetch('/api/GitSync/dashboard/pending-drafts');
        
        if (!res.ok) throw new Error('Failed to fetch drafts');
        
        const data = await res.json();
        const fetchedDrafts = Array.isArray(data.data) ? data.data : [];
        
        // Map API response to draft card format
        interface DraftResponse {
          id: string;
          title?: string;
          createdAt: string;
        }
        
        const formattedDrafts: Draft[] = fetchedDrafts.map((d: DraftResponse) => ({
          id: d.id,
          title: d.title || 'Untitled',
          generatedText: d.title,
          status: 'READY' as const,
          createdAt: d.createdAt,
        }));
        
        setDrafts(formattedDrafts);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to load drafts');
        setDrafts([]);
      } finally {
        setLoading(false);
      }
    }

    loadDrafts();
  }, []);

  // Filter drafts by status
  const filteredDrafts = activeTab === 'All'
    ? drafts
    : drafts.filter(d => d.status === activeTab);

  const getTabLabel = (tab: typeof STATUS_TABS[number]) => {
    const labels: Record<typeof STATUS_TABS[number], string> = {
      'All': 'All',
      'READY': 'Ready',
      'SYNCING': 'Syncing',
      'REVIEW': 'Review',
      'FAILED': 'Failed',
    };
    return labels[tab];
  };

  if (loading) {
    return (
      <div className="space-y-6">
        <H1>Drafts</H1>
        <div className="animate-pulse space-y-4">
          {[...Array(3)].map((_, i) => (
            <div key={i} className="h-32 bg-surface-soft rounded-lg" />
          ))}
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="space-y-6">
        <H1>Drafts</H1>
        <div className="p-4 bg-danger/10 text-danger rounded-lg">{error}</div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <H1>Drafts</H1>
        <p className="text-sm text-muted mt-2">
          Review and manage AI-generated LinkedIn drafts before publishing.
        </p>
      </div>

      {/* Tabs */}
      <div className="flex gap-2 overflow-x-auto pb-2">
        {STATUS_TABS.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors whitespace-nowrap ${
              activeTab === tab
                ? 'bg-signal text-bg'
                : 'bg-surface border border-border text-muted hover:text-text'
            }`}
          >
            {getTabLabel(tab)}
          </button>
        ))}
      </div>

      {/* Drafts Grid */}
      {filteredDrafts.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredDrafts.map((draft) => (
            <DraftCard key={draft.id} draft={draft} />
          ))}
        </div>
      ) : (
        <div className="text-center py-12">
          <FileText size={48} className="mx-auto text-muted/30 mb-4" />
          <H2 className="text-lg mb-2">
            {drafts.length === 0 ? 'No drafts yet' : 'No drafts in this status'}
          </H2>
          <p className="text-sm text-muted max-w-md mx-auto">
            {drafts.length === 0
              ? 'Drafts appear after GitHub activity is detected. Check back later or start syncing repositories.'
              : 'Drafts are automatically created when GitSync detects meaningful GitHub activity. Check other tabs or wait for new signals.'}
          </p>
        </div>
      )}
    </div>
  );
}

'use client';

import { BentoCard } from '@/components/bento-card';
import { H1, H2, PixelStatusBadge } from '@/components/typography';
import { Globe, Lock, GitBranch, ToggleRight } from 'lucide-react';
import Link from 'next/link';

// Mock repo data - replace with API call if available
const MOCK_REPOS = [
  {
    id: '1',
    name: 'gitflow',
    visibility: 'public',
    status: 'READY' as const,
    score: 87,
    lastActivity: '2 hours ago',
    pendingDrafts: 1,
  },
  {
    id: '2',
    name: 'ui-kit',
    visibility: 'private',
    status: 'SYNCING' as const,
    score: 64,
    lastActivity: '30 mins ago',
    pendingDrafts: 0,
  },
  {
    id: '3',
    name: 'api-core',
    visibility: 'public',
    status: 'READY' as const,
    score: 92,
    lastActivity: '5 mins ago',
    pendingDrafts: 2,
  },
  {
    id: '4',
    name: 'mobile-app',
    visibility: 'private',
    status: 'FAILED' as const,
    score: 45,
    lastActivity: '1 day ago',
    pendingDrafts: 0,
  },
];

function RepoCard({ repo }: { repo: (typeof MOCK_REPOS)[0] }) {
  const statusMap: Record<string, 'READY' | 'SYNCING' | 'FAILED'> = {
    READY: 'READY',
    SYNCING: 'SYNCING',
    FAILED: 'FAILED',
  };

  return (
    <BentoCard className="flex flex-col gap-4">
      {/* Header with name and visibility */}
      <div className="flex items-start justify-between">
        <div className="flex-1">
          <div className="flex items-center gap-2">
            <h3 className="text-lg font-semibold text-text">{repo.name}</h3>
            {repo.visibility === 'public' ? (
              <Globe size={16} className="text-signal" />
            ) : (
              <Lock size={16} className="text-muted" />
            )}
          </div>
          <div className="text-xs text-muted mt-1">{repo.visibility} repository</div>
        </div>
        <button className="p-1 hover:bg-surface-soft rounded">
          <ToggleRight size={20} className="text-signal" />
        </button>
      </div>

      {/* Status and Score Row */}
      <div className="flex items-center justify-between py-3 border-t border-b border-border">
        <div className="flex items-center gap-2">
          <PixelStatusBadge status={statusMap[repo.status]} />
        </div>
        <div className="text-center">
          <div className="text-2xl font-bold text-signal">{repo.score}</div>
          <div className="text-xs text-muted">Signal Score</div>
        </div>
      </div>

      {/* Activity and Drafts */}
      <div className="space-y-2">
        <div className="flex items-center justify-between text-xs">
          <span className="text-muted">Last Activity</span>
          <span className="text-text">{repo.lastActivity}</span>
        </div>
        <div className="flex items-center justify-between text-xs">
          <span className="text-muted">Draft Status</span>
          <span className={repo.pendingDrafts > 0 ? 'text-commit' : 'text-muted'}>
            {repo.pendingDrafts > 0 ? `${repo.pendingDrafts} pending` : 'No drafts'}
          </span>
        </div>
      </div>

      {/* View Drafts Link */}
      {repo.pendingDrafts > 0 && (
        <Link
          href={`/dashboard/drafts?repo=${repo.name}`}
          className="text-xs text-signal hover:text-signal/80 transition-colors inline-block mt-2"
        >
          View drafts →
        </Link>
      )}
    </BentoCard>
  );
}

export default function RepositoriesPage() {
  const repos = MOCK_REPOS; // Replace with API call

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <H1>Repositories</H1>
          <p className="text-sm text-muted mt-2">
            Manage your connected repositories and monitor signal scores.
          </p>
        </div>
      </div>

      {/* Search/Filter Stub (can be enhanced later) */}
      <div className="flex gap-3">
        <input
          type="text"
          placeholder="Search repositories..."
          className="flex-1 px-3 py-2 rounded-lg bg-surface border border-border text-sm text-text placeholder-muted/50 focus:outline-none focus:border-signal"
        />
      </div>

      {/* Repos Grid */}
      {repos.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {repos.map((repo) => (
            <RepoCard key={repo.id} repo={repo} />
          ))}
        </div>
      ) : (
        <div className="text-center py-12">
          <GitBranch size={48} className="mx-auto text-muted/30 mb-4" />
          <H2 className="text-lg mb-2">No repositories connected</H2>
          <p className="text-sm text-muted max-w-md mx-auto">
            Connect GitHub repositories to start tracking signals and generating LinkedIn content.
          </p>
        </div>
      )}
    </div>
  );
}

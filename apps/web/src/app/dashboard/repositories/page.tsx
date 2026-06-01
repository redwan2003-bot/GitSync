'use client';

import { useEffect, useState } from 'react';
import { BentoCard } from '@/components/bento-card';
import { H1, H2, PixelStatusBadge } from '@/components/typography';
import { Globe, Lock, GitBranch, ToggleRight } from 'lucide-react';
import Link from 'next/link';

interface Repo {
  id: string;
  name: string;
  visibility: 'public' | 'private';
  status: 'READY' | 'SYNCING' | 'FAILED';
  score: number;
  lastActivity: string;
  pendingDrafts: number;
}

function RepoCard({ repo }: { repo: Repo }) {
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
          <PixelStatusBadge status={repo.status} />
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
  const [repos, setRepos] = useState<Repo[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function loadRepos() {
      try {
        const res = await fetch('/api/GitSync/github-repos');
        
        if (!res.ok) throw new Error('Failed to fetch repos');
        
        const data = await res.json();
        // Backend returns hasGitHub flag; show empty state if no repos
        setRepos(data.repos || []);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to load repositories');
      } finally {
        setLoading(false);
      }
    }

    loadRepos();
  }, []);

  if (loading) {
    return (
      <div className="space-y-6">
        <H1>Repositories</H1>
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
        <H1>Repositories</H1>
        <div className="p-4 bg-danger/10 text-danger rounded-lg">{error}</div>
      </div>
    );
  }

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

      {/* Search/Filter Stub */}
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
          <p className="text-sm text-muted max-w-md mx-auto mb-6">
            Connect GitHub repositories to start tracking signals and generating LinkedIn content.
          </p>
          <a
            href={process.env.NEXT_PUBLIC_GITHUB_APP_INSTALL_URL ?? "https://github.com/apps/gitsync-engine/installations/new"}
            target="_blank"
            rel="noreferrer"
            className="inline-block px-4 py-2 bg-signal text-white rounded-lg hover:bg-signal/90 transition-colors"
          >
            Install GitHub App
          </a>
        </div>
      )}
    </div>
  );
}

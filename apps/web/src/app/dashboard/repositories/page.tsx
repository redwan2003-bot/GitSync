'use client';

import { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import { BentoCard } from '@/components/bento-card';
import { H1, H2 } from '@/components/typography';
import { Globe, GitBranch, RefreshCw, AlertCircle, ExternalLink } from 'lucide-react';

interface Repo {
  id: string;
  githubRepoId: string;
  name: string;
  fullName: string;
  owner: string;
  description: string | null;
  language: string | null;
  visibility: 'public' | 'private';
  htmlUrl: string;
  syncStatus: 'SUCCESS' | 'PENDING' | 'FAILED' | 'STALE';
  pushedAt: string | null;
  disabled: boolean;
}

function RepoCard({ repo }: { repo: Repo }) {
  return (
    <BentoCard className={`flex flex-col gap-4 ${repo.disabled ? 'opacity-50 grayscale' : ''}`}>
      {/* Header with name and visibility */}
      <div className="flex items-start justify-between">
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2">
            <h3 className="text-lg font-semibold text-text truncate">{repo.name}</h3>
            {repo.visibility === 'public' && (
              <span className="flex items-center gap-1 text-[10px] uppercase tracking-wider font-medium text-signal bg-signal/10 px-2 py-0.5 rounded-full">
                <Globe size={12} /> Public
              </span>
            )}
          </div>
          <div className="text-sm text-muted mt-1 truncate">{repo.owner}</div>
        </div>
        <a 
          href={repo.htmlUrl} 
          target="_blank" 
          rel="noreferrer"
          className="p-1 hover:bg-surface-soft rounded text-muted hover:text-text transition-colors"
          title="View on GitHub"
        >
          <ExternalLink size={20} />
        </a>
      </div>

      <p className="text-sm text-muted line-clamp-2 min-h-[40px]">
        {repo.description || <span className="italic opacity-50">No description provided.</span>}
      </p>

      {/* Footer Info */}
      <div className="flex items-center justify-between text-xs pt-3 border-t border-border">
        <div className="flex items-center gap-3">
          {repo.language && (
            <span className="flex items-center gap-1.5 text-text">
              <span className="w-2 h-2 rounded-full bg-signal"></span>
              {repo.language}
            </span>
          )}
          {repo.syncStatus === 'FAILED' && (
            <span className="text-danger flex items-center gap-1">
              <AlertCircle size={14} /> Sync Failed
            </span>
          )}
        </div>
        
        {repo.pushedAt && (
          <span className="text-muted">
            Updated {new Date(repo.pushedAt).toLocaleDateString()}
          </span>
        )}
      </div>
    </BentoCard>
  );
}

interface IntegrationStatus {
  github: {
    connected: boolean;
    configured: boolean;
    installationId: string | null;
    accountLogin: string | null;
    accountType: string | null;
  };
}

export default function RepositoriesPage() {
  const [repos, setRepos] = useState<Repo[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [workspaceId, setWorkspaceId] = useState<string | null>(null);
  const [integrationStatus, setIntegrationStatus] = useState<IntegrationStatus | null>(null);
  
  const [syncStatus, setSyncStatus] = useState<'success' | 'pending' | 'failed' | 'not_connected'>('not_connected');
  const [searchQuery, setSearchQuery] = useState('');
  
  const searchParams = useSearchParams();

  const loadIntegrations = async () => {
    try {
      const res = await fetch('/api/GitSync/integration-status');
      if (!res.ok) throw new Error('Failed to fetch integration status');
      const response = await res.json();
      setIntegrationStatus(response.data || response);
    } catch (err) {
      console.error('Integration status error:', err);
      setIntegrationStatus(null);
    }
  };

  const loadRepos = async () => {
    try {
      const res = await fetch('/api/GitSync/github-repos');
      if (!res.ok) throw new Error('Failed to fetch repos');
      
      const data = await res.json();
      setRepos(data.repositories || []);
      setSyncStatus(data.syncStatus || 'not_connected');
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to load repositories');
    } finally {
      setLoading(false);
    }
  };

  const handleRetrySync = async () => {
    if (!integrationStatus?.github.installationId) return;
    try {
      setSyncStatus('pending');
      await fetch('/api/GitSync/github/repositories/sync', { method: 'POST' });
      await loadRepos();
    } catch (err) {
      console.error('Failed to retry sync:', err);
      setSyncStatus('failed');
    }
  };

  useEffect(() => {
    async function initializePageData() {
      await Promise.all([loadRepos(), loadIntegrations()]);
    }
    initializePageData();
  }, []);

  useEffect(() => {
    async function loadWorkspaceId() {
      try {
        const res = await fetch('/api/GitSync/workspace-id');
        if (!res.ok) throw new Error('Failed to fetch workspace ID');
        const data = await res.json();
        setWorkspaceId(data.workspaceId || null);
      } catch (err) {
        console.error('Workspace ID error:', err);
        setWorkspaceId(null);
      }
    }
    loadWorkspaceId();
  }, []);

  useEffect(() => {
    const githubParam = searchParams.get('github');
    const installationIdParam = searchParams.get('installation_id');
    
    if (githubParam === 'connected' || installationIdParam) {
      // Give backend a moment to process the webhook/callback before reloading
      const timer = setTimeout(() => {
        loadRepos();
        loadIntegrations();
      }, 1500);
      return () => clearTimeout(timer);
    }
  }, [searchParams]);

  const filteredRepos = repos.filter(r => 
    r.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
    r.owner.toLowerCase().includes(searchQuery.toLowerCase())
  );

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
            Manage your connected public repositories.
          </p>
        </div>
      </div>

      {integrationStatus?.github?.connected && (
        <div className="p-3 bg-surface border border-border rounded-lg text-sm text-muted flex items-center justify-between">
          <span>Private repositories are not synced in v1. Private repo support is planned for v2.</span>
        </div>
      )}

      {/* Main Content Area based on Sync Status */}
      {syncStatus === 'pending' ? (
        <div className="text-center py-16">
          <RefreshCw size={32} className="mx-auto text-signal animate-spin mb-4" />
          <H2 className="text-lg mb-2">Syncing public repositories...</H2>
          <p className="text-sm text-muted">This usually takes just a few seconds.</p>
        </div>
      ) : syncStatus === 'failed' ? (
        <div className="text-center py-16">
          <AlertCircle size={48} className="mx-auto text-danger/70 mb-4" />
          <H2 className="text-lg mb-2">Repository sync failed</H2>
          <p className="text-sm text-muted mb-6">We could not sync your public repositories.</p>
          <button 
            onClick={handleRetrySync}
            className="px-4 py-2 bg-surface-soft hover:bg-surface-soft/80 text-text rounded-lg transition-colors flex items-center gap-2 mx-auto"
          >
            <RefreshCw size={16} /> Retry sync
          </button>
        </div>
      ) : repos.length > 0 ? (
        <>
          <div className="flex gap-3">
            <input
              type="text"
              placeholder="Search repositories..."
              value={searchQuery}
              onChange={e => setSearchQuery(e.target.value)}
              className="flex-1 px-3 py-2 rounded-lg bg-surface border border-border text-sm text-text placeholder-muted/50 focus:outline-none focus:border-signal"
            />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {filteredRepos.map((repo) => (
              <RepoCard key={repo.id} repo={repo} />
            ))}
            {filteredRepos.length === 0 && (
              <div className="col-span-1 md:col-span-2 py-8 text-center text-muted text-sm">
                No repositories match your search.
              </div>
            )}
          </div>
        </>
      ) : integrationStatus?.github?.connected ? (
        <div className="text-center py-16">
          <GitBranch size={48} className="mx-auto text-signal/30 mb-4" />
          <H2 className="text-lg mb-2">GitHub connected</H2>
          <h3 className="text-text font-medium mb-2">No public repositories found</h3>
          <p className="text-sm text-muted max-w-md mx-auto mb-6">
            GitSync only syncs public repositories in v1. Private repository support is planned for v2.
          </p>
        </div>
      ) : (
        <div className="text-center py-16">
          <GitBranch size={48} className="mx-auto text-muted/30 mb-4" />
          <H2 className="text-lg mb-2">No GitHub App connected</H2>
          <p className="text-sm text-muted max-w-md mx-auto mb-6">
            Connect your GitHub account to sync and manage your public repositories.
          </p>
          <a
            href={workspaceId ? `${process.env.NEXT_PUBLIC_GITHUB_APP_INSTALL_URL ?? "https://github.com/apps/gitsync-engine/installations/new"}?state=${encodeURIComponent(workspaceId)}` : "#"}
            onClick={(e) => !workspaceId && e.preventDefault()}
            target="_blank"
            rel="noreferrer"
            className={`inline-block px-4 py-2 rounded-lg transition-colors ${
              workspaceId
                ? 'bg-signal text-white hover:bg-signal/90 cursor-pointer'
                : 'bg-slate-700 text-slate-300 opacity-50 cursor-not-allowed'
            }`}
            title={!workspaceId ? 'Workspace not ready. Refresh or sign in again.' : ''}
          >
            Install GitHub App
          </a>
        </div>
      )}
    </div>
  );
}

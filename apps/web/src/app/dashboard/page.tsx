'use client';

import { Suspense, useState, useEffect } from 'react';
import { BentoCard } from '@/components/bento-card';
import { SignalOrbitPanel } from '@/components/signal-orbit-panel';
import { AnimatedMetricCard } from '@/components/animated-metric-card';
import { PipelineStatusTracker } from '@/components/pipeline-status-tracker';
import { RepoSignalCard } from '@/components/repo-signal-card';
import { IntegrationStatusCard } from '@/components/integration-status-card';
import { H2 } from '@/components/typography';
import Link from 'next/link';
import { fetchFromAPI } from '@/lib/api-client';

interface DashboardMetrics {
  repositoriesCount: number;
  draftsAwaitingReview: number;
  publishedPostsCount: number;
  failedSyncsCount: number;
}

interface Signal {
  id: string;
  action: string;
  description: string;
  resource?: string;
  timestamp: string | Date;
}

interface Draft {
  id: string;
  title: string;
  createdAt: string | Date;
}

function MetricsLoader() {
  const [metrics, setMetrics] = useState<DashboardMetrics | null>(null);
  const [signals, setSignals] = useState<Signal[]>([]);
  const [drafts, setDrafts] = useState<Draft[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function loadData() {
      try {
        setLoading(true);
        
        // Use allSettled so one failing endpoint doesn't break the dashboard
        const [metricsResult, signalsResult, draftsResult] = await Promise.allSettled([
          fetch('/api/GitSync/dashboard/metrics'),
          fetch('/api/GitSync/audit-logs?limit=3'),
          fetch('/api/GitSync/dashboard/pending-drafts'),
        ]);

        // Handle metrics
        if (metricsResult.status === 'fulfilled' && metricsResult.value.ok) {
          const metricsData = await metricsResult.value.json();
          setMetrics(metricsData);
        } else {
          console.warn('Metrics fetch failed', metricsResult);
        }

        // Handle signals
        if (signalsResult.status === 'fulfilled' && signalsResult.value.ok) {
          const signalsData = await signalsResult.value.json();
          setSignals(signalsData.logs || []);
        } else {
          console.warn('Signals fetch failed', signalsResult);
        }

        // Handle drafts
        if (draftsResult.status === 'fulfilled' && draftsResult.value.ok) {
          const draftsData = await draftsResult.value.json();
          setDrafts(draftsData.data || []);
        } else {
          console.warn('Drafts fetch failed', draftsResult);
        }
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to load dashboard');
        console.error('Dashboard load error:', err);
      } finally {
        setLoading(false);
      }
    }

    loadData();
  }, []);

  if (loading) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 auto-rows-max">
        {[...Array(6)].map((_, i) => (
          <BentoCard key={i}>
            <div className="h-20 bg-surface-soft animate-pulse rounded" />
          </BentoCard>
        ))}
      </div>
    );
  }

  if (error) {
    return (
      <div className="p-4 bg-danger/10 text-danger rounded-lg">
        <p>Error loading dashboard: {error}</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 auto-rows-max">
      {/* Signal Orbit Panel (2x2) */}
      <BentoCard span="2">
        <SignalOrbitPanel />
      </BentoCard>

      {/* Metrics Row (4 cards) */}
      <BentoCard>
        <AnimatedMetricCard
          icon="GitBranch"
          value={metrics?.repositoriesCount || 0}
          label="Active Repositories"
          secondary={metrics?.repositoriesCount === 0 ? 'No repos connected' : 'Connected'}
          color="signal"
        />
      </BentoCard>
      <BentoCard>
        <AnimatedMetricCard
          icon="FileText"
          value={metrics?.draftsAwaitingReview || 0}
          label="Drafts Awaiting Review"
          secondary="Ready to publish"
          color="commit"
        />
      </BentoCard>
      <BentoCard>
        <AnimatedMetricCard
          icon="CheckCircle"
          value={metrics?.publishedPostsCount || 0}
          label="Published Posts"
          secondary="Total published"
          color="signal"
        />
      </BentoCard>
      <BentoCard>
        <AnimatedMetricCard
          icon="AlertCircle"
          value={metrics?.failedSyncsCount || 0}
          label="Failed Syncs"
          secondary="Last 24 hours"
          color="danger"
        />
      </BentoCard>

      {/* Pipeline Status (2x1) */}
      <BentoCard span="2">
        <H2 className="text-lg mb-6">Pipeline Status</H2>
        <PipelineStatusTracker />
      </BentoCard>

      {/* Recent Signals (1x1) */}
      <BentoCard>
        <div className="space-y-4">
          <H2 className="text-lg">Recent Signals</H2>
          {signals.length === 0 ? (
            <p className="text-xs text-muted">No recent signals</p>
          ) : (
            <div className="space-y-3">
              {signals.slice(0, 3).map((signal) => {
                // Map audit log actions to RepoSignalCard event types
                const eventMap: Record<string, 'COMMIT' | 'PR_OPENED' | 'RELEASE' | 'WEBHOOK_FAILED'> = {
                  'PUBLISHED': 'RELEASE',
                  'SYNCED': 'COMMIT',
                  'CREATED': 'COMMIT',
                  'FAILED': 'WEBHOOK_FAILED',
                  'UPDATED': 'COMMIT',
                };
                const event = eventMap[signal.action] || 'COMMIT';
                return (
                  <RepoSignalCard
                    key={signal.id}
                    repo={signal.resource || 'Unknown'}
                    event={event}
                    timestamp={new Date(signal.timestamp).toLocaleTimeString()}
                  />
                );
              })}
            </div>
          )}
        </div>
      </BentoCard>

      {/* Pending Drafts (1x1) */}
      <BentoCard>
        <div className="space-y-4">
          <H2 className="text-lg">Pending Drafts</H2>
          {drafts.length === 0 ? (
            <p className="text-xs text-muted">No pending drafts</p>
          ) : (
            <div className="space-y-3">
              {drafts.slice(0, 2).map((draft) => (
                <div key={draft.id} className="pb-3 border-b border-border">
                  <div className="text-sm font-medium text-text">{draft.title}</div>
                  <div className="text-xs text-muted">{new Date(draft.createdAt).toLocaleDateString()}</div>
                </div>
              ))}
            </div>
          )}
          <Link href="/dashboard/drafts" className="text-xs text-signal hover:text-signal/80 transition-colors inline-block mt-2">
            View all drafts →
          </Link>
        </div>
      </BentoCard>

      {/* Integration Health (Full width or span-2) */}
      <BentoCard span="full">
        <H2 className="text-lg mb-6">Integration Health</H2>
        <IntegrationStatusCard />
      </BentoCard>
    </div>
  );
}

export default function DashboardPage() {
  return (
    <Suspense fallback={<div>Loading dashboard...</div>}>
      <MetricsLoader />
    </Suspense>
  );
}

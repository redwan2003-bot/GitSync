'use client';

import { BentoCard } from '@/components/bento-card';
import { SignalOrbitPanel } from '@/components/signal-orbit-panel';
import { AnimatedMetricCard } from '@/components/animated-metric-card';
import { PipelineStatusTracker } from '@/components/pipeline-status-tracker';
import { RepoSignalCard } from '@/components/repo-signal-card';
import { IntegrationStatusCard } from '@/components/integration-status-card';
import { H2 } from '@/components/typography';
import Link from 'next/link';

export default function DashboardPage() {
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
          value={12}
          label="Active Repositories"
          secondary="Up 2 from last week"
          color="signal"
        />
      </BentoCard>
      <BentoCard>
        <AnimatedMetricCard
          icon="FileText"
          value={3}
          label="Drafts Awaiting Review"
          secondary="Ready to publish"
          color="commit"
        />
      </BentoCard>
      <BentoCard>
        <AnimatedMetricCard
          icon="CheckCircle"
          value={47}
          label="Published Posts"
          secondary="This month"
          color="signal"
        />
      </BentoCard>
      <BentoCard>
        <AnimatedMetricCard
          icon="AlertCircle"
          value={1}
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
          <div className="space-y-3">
            <RepoSignalCard repo="gitflow" event="COMMIT" timestamp="2 mins ago" />
            <RepoSignalCard repo="ui-kit" event="PR_OPENED" timestamp="1 hour ago" />
            <RepoSignalCard repo="api-core" event="RELEASE" timestamp="3 hours ago" />
          </div>
        </div>
      </BentoCard>

      {/* Pending Drafts (1x1) */}
      <BentoCard>
        <div className="space-y-4">
          <H2 className="text-lg">Pending Drafts</H2>
          <div className="space-y-3">
            <div className="pb-3 border-b border-border">
              <div className="text-sm font-medium text-text">Released v2.0.0 update</div>
              <div className="text-xs text-muted">gitflow • 2 hours ago</div>
            </div>
            <div className="pb-3 border-b border-border">
              <div className="text-sm font-medium text-text">New feature: Dark mode</div>
              <div className="text-xs text-muted">ui-kit • 4 hours ago</div>
            </div>
          </div>
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

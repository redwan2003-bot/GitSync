'use client';

import { GitCommit, GitPullRequest, Tag, AlertCircle } from 'lucide-react';
import { PixelStatusBadge } from './typography';

interface RepoSignalCardProps {
  repo: string;
  event: 'COMMIT' | 'PR_OPENED' | 'RELEASE' | 'WEBHOOK_FAILED';
  timestamp: string;
}

const eventIcons = {
  COMMIT: GitCommit,
  PR_OPENED: GitPullRequest,
  RELEASE: Tag,
  WEBHOOK_FAILED: AlertCircle,
};

const eventLabels: Record<string, 'READY' | 'SYNCING' | 'REVIEW' | 'FAILED' | 'PUBLISHED'> = {
  COMMIT: 'READY',
  PR_OPENED: 'REVIEW',
  RELEASE: 'PUBLISHED',
  WEBHOOK_FAILED: 'FAILED',
};

export function RepoSignalCard({ repo, event, timestamp }: RepoSignalCardProps) {
  const Icon = eventIcons[event];

  return (
    <div className="flex items-center gap-3 pb-3 border-b border-border last:border-0 last:pb-0">
      <div className="p-2 rounded-lg bg-surface-soft">
        <Icon size={16} className="text-muted" />
      </div>
      <div className="flex-1 min-w-0">
        <div className="text-sm font-medium text-text truncate">{repo}</div>
        <div className="text-xs text-muted">{timestamp}</div>
      </div>
      <PixelStatusBadge status={eventLabels[event]} />
    </div>
  );
}

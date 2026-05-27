import { PushEventPayload, PullRequestEventPayload, ReleaseEventPayload } from './types';

export const mockPushEventLowImpact: PushEventPayload = {
  ref: 'refs/heads/main',
  before: 'a1b2c3d4',
  after: 'e5f6g7h8',
  commits: [
    {
      id: 'c1',
      message: 'docs: update readme typo',
      timestamp: '2026-05-24T18:00:00Z',
      author: { name: 'Dev', email: 'dev@GitSync.com' },
      added: [],
      removed: [],
      modified: ['README.md'],
    },
  ],
};

export const mockPushEventHighImpact: PushEventPayload = {
  ref: 'refs/heads/main',
  before: 'a1b2c3d4',
  after: 'e5f6g7h8',
  commits: [
    {
      id: 'c1',
      message: 'feat: implement OAuth account linking for LinkedIn integration',
      timestamp: '2026-05-24T18:00:00Z',
      author: { name: 'Lead Dev', email: 'lead@GitSync.com' },
      added: ['src/oauth/linkedin.ts', 'src/oauth/linkedin.spec.ts'],
      removed: [],
      modified: ['package.json'],
    },
    {
      id: 'c2',
      message: 'feat: introduce AES encryption for secure credentials storage',
      timestamp: '2026-05-24T18:10:00Z',
      author: { name: 'Lead Dev', email: 'lead@GitSync.com' },
      added: ['src/crypto/encryption.ts'],
      removed: [],
      modified: ['src/config.ts'],
    },
  ],
};

export const mockPullRequestOpened: PullRequestEventPayload = {
  action: 'opened',
  number: 42,
  pull_request: {
    id: 123456,
    title: 'Feat: Add BullMQ background worker for reliable post queuing',
    body: 'This PR adds `@nestjs/bullmq` and registers a custom event processing pipeline for incoming webhook events.\n\nChanges:\n1. Created a dedicated consumer queue.\n2. Implemented backoff-retry policy for LinkedIn publishing errors.\n3. Added full schema models.',
    state: 'open',
    merged: false,
    merged_at: null,
    additions: 340,
    deletions: 12,
    changed_files: 8,
    comments: 2,
    review_comments: 1,
    commits: 3,
    user: { login: 'octocat' },
  },
};

export const mockPullRequestMerged: PullRequestEventPayload = {
  action: 'closed',
  number: 42,
  pull_request: {
    id: 123456,
    title: 'Feat: Add BullMQ background worker for reliable post queuing',
    body: 'This PR adds `@nestjs/bullmq` and registers a custom event processing pipeline for incoming webhook events.\n\nChanges:\n1. Created a dedicated consumer queue.\n2. Implemented backoff-retry policy for LinkedIn publishing errors.\n3. Added full schema models.',
    state: 'closed',
    merged: true,
    merged_at: '2026-05-24T19:00:00Z',
    additions: 340,
    deletions: 12,
    changed_files: 8,
    comments: 5,
    review_comments: 3,
    commits: 3,
    user: { login: 'octocat' },
  },
};

export const mockReleaseMajor: ReleaseEventPayload = {
  action: 'published',
  release: {
    id: 987654,
    tag_name: 'v1.0.0',
    target_commitish: 'main',
    name: 'Official v1.0.0 Stable Launch',
    body: '### GitSync is officially live!\n\nWe are excited to launch our first stable release, featuring fully integrated and compliant OAuth linking with LinkedIn, webhook ingest verification, and an active autopilot dashboard!',
    draft: false,
    prerelease: false,
    created_at: '2026-05-24T18:00:00Z',
    published_at: '2026-05-24T19:30:00Z',
  },
};

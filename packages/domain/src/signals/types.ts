export interface PushEventPayload {
  ref: string;
  before: string;
  after: string;
  commits: {
    id: string;
    message: string;
    timestamp: string;
    author: {
      name: string;
      email: string;
    };
    added: string[];
    removed: string[];
    modified: string[];
  }[];
}

export interface PullRequestEventPayload {
  action: 'opened' | 'closed' | 'reopened' | 'synchronize';
  number: number;
  pull_request: {
    id: number;
    title: string;
    body: string | null;
    state: 'open' | 'closed';
    merged: boolean;
    merged_at: string | null;
    additions: number;
    deletions: number;
    changed_files: number;
    comments: number;
    review_comments: number;
    commits: number;
    user: {
      login: string;
    };
  };
}

export interface ReleaseEventPayload {
  action: 'published' | 'unpublished' | 'created' | 'edited' | 'deleted' | 'prereleased';
  release: {
    id: number;
    tag_name: string;
    target_commitish: string;
    name: string | null;
    body: string | null;
    draft: boolean;
    prerelease: boolean;
    created_at: string;
    published_at: string | null;
  };
}

export interface SignalScoreResult {
  score: number; // 0 to 100
  reasons: string[];
  isSignificant: boolean;
}

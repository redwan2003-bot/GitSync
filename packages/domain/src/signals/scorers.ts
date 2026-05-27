import { PushEventPayload, PullRequestEventPayload, ReleaseEventPayload, SignalScoreResult } from './types';

const SIGNIFICANCE_THRESHOLD = 50;

export function scorePush(payload: PushEventPayload): SignalScoreResult {
  let score = 10;
  const reasons: string[] = ['Base push score'];

  // Commit count points
  const commitCount = payload.commits.length;
  if (commitCount > 0) {
    const commitPoints = Math.min(commitCount * 5, 20);
    score += commitPoints;
    reasons.push(`Contains ${commitCount} commit(s) (+${commitPoints} pts)`);
  }

  // Key updates in commit messages
  let featureCommits = 0;
  let fixCommits = 0;
  const featRegex = /\b(feat|feature|introduce|implement|add|create)\b/i;
  const fixRegex = /\b(fix|bug|patch|resolve)\b/i;

  payload.commits.forEach(commit => {
    if (featRegex.test(commit.message)) {
      featureCommits++;
    } else if (fixRegex.test(commit.message)) {
      fixCommits++;
    }
  });

  if (featureCommits > 0) {
    const featPoints = Math.min(featureCommits * 15, 40);
    score += featPoints;
    reasons.push(`Contains ${featureCommits} feature commit(s) (+${featPoints} pts)`);
  }
  if (fixCommits > 0) {
    const fixPoints = Math.min(fixCommits * 5, 15);
    score += fixPoints;
    reasons.push(`Contains ${fixCommits} bug fix commit(s) (+${fixPoints} pts)`);
  }

  // File change impact points
  let totalFilesChanged = 0;
  payload.commits.forEach(commit => {
    totalFilesChanged += (commit.added?.length || 0) + (commit.modified?.length || 0);
  });

  if (totalFilesChanged > 0) {
    const filePoints = Math.min(totalFilesChanged * 2, 15);
    score += filePoints;
    reasons.push(`Modified/added ${totalFilesChanged} file(s) (+${filePoints} pts)`);
  }

  score = Math.min(score, 100);
  return {
    score,
    reasons,
    isSignificant: score >= SIGNIFICANCE_THRESHOLD,
  };
}

export function scorePullRequest(payload: PullRequestEventPayload): SignalScoreResult {
  let score = 20;
  const reasons: string[] = [];

  const { action, pull_request } = payload;

  if (action === 'closed' && pull_request.merged) {
    score = 50;
    reasons.push('Pull request merged successfully (+50 pts)');
  } else if (action === 'opened') {
    score = 25;
    reasons.push('New pull request proposed (+25 pts)');
  } else {
    reasons.push(`Pull request ${action} (+${score} pts)`);
  }

  // PR Size additions/deletions points
  const additions = pull_request.additions || 0;
  const deletions = pull_request.deletions || 0;
  const totalChanges = additions + deletions;

  if (totalChanges > 0) {
    const sizePoints = Math.min(Math.floor(totalChanges / 50) * 3, 20);
    if (sizePoints > 0) {
      score += sizePoints;
      reasons.push(`Substantial changes: ${totalChanges} lines changed (+${sizePoints} pts)`);
    }
  }

  // Description quality points
  const bodyLength = pull_request.body?.length || 0;
  if (bodyLength > 300) {
    score += 15;
    reasons.push('High-quality detailed description provided (+15 pts)');
  } else if (bodyLength > 100) {
    score += 5;
    reasons.push('Brief description provided (+5 pts)');
  }

  // Interactivity (reviews/comments)
  const commentCount = (pull_request.comments || 0) + (pull_request.review_comments || 0);
  if (commentCount > 0) {
    const interactionPoints = Math.min(commentCount * 3, 10);
    score += interactionPoints;
    reasons.push(`Interactive review: ${commentCount} comments/reviews (+${interactionPoints} pts)`);
  }

  score = Math.min(score, 100);
  return {
    score,
    reasons,
    isSignificant: score >= SIGNIFICANCE_THRESHOLD,
  };
}

export function scoreRelease(payload: ReleaseEventPayload): SignalScoreResult {
  let score = 60;
  const reasons: string[] = [];

  const { action, release } = payload;

  if (action === 'published') {
    score = 75;
    reasons.push('New release published (+75 pts)');
  } else {
    reasons.push(`Release ${action} (+60 pts)`);
  }

  // Check version scale (e.g. major, minor, patch)
  const tag = release.tag_name || '';
  const isMajor = /^[vV]?\d+\.0\.0$/.test(tag);
  const isMinor = /^[vV]?\d+\.\d+\.0$/.test(tag) && !isMajor;

  if (isMajor) {
    score += 20;
    reasons.push(`Major milestone release: ${tag} (+20 pts)`);
  } else if (isMinor) {
    score += 10;
    reasons.push(`Feature release: ${tag} (+10 pts)`);
  }

  // Release notes details
  const bodyLength = release.body?.length || 0;
  if (bodyLength > 200) {
    score += 10;
    reasons.push('Release notes contains descriptive changes (+10 pts)');
  }

  // Prerelease penalty
  if (release.prerelease) {
    score -= 15;
    reasons.push('Pre-release/beta deployment (-15 pts)');
  }

  score = Math.max(0, Math.min(score, 100));
  return {
    score,
    reasons,
    isSignificant: score >= SIGNIFICANCE_THRESHOLD,
  };
}

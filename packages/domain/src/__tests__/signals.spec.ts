import { describe, it, expect } from 'vitest';
import { scorePush, scorePullRequest, scoreRelease } from '../signals/scorers';
import {
  mockPushEventLowImpact,
  mockPushEventHighImpact,
  mockPullRequestOpened,
  mockPullRequestMerged,
  mockReleaseMajor,
} from '../signals/fixtures';

describe('Signal Scoring Logic', () => {
  describe('Push Event Scoring', () => {
    it('should score a low impact push below the significance threshold', () => {
      const result = scorePush(mockPushEventLowImpact);
      expect(result.score).toBeLessThan(50);
      expect(result.isSignificant).toBe(false);
      expect(result.reasons).toContain('Base push score');
    });

    it('should score a high impact push above the significance threshold', () => {
      const result = scorePush(mockPushEventHighImpact);
      expect(result.score).toBeGreaterThanOrEqual(50);
      expect(result.isSignificant).toBe(true);
      expect(result.reasons.some(r => r.includes('feature commit'))).toBe(true);
    });
  });

  describe('Pull Request Event Scoring', () => {
    it('should score a newly opened PR', () => {
      const result = scorePullRequest(mockPullRequestOpened);
      expect(result.score).toBeGreaterThanOrEqual(25);
      expect(result.reasons).toContain('New pull request proposed (+25 pts)');
    });

    it('should score a merged PR as highly significant', () => {
      const result = scorePullRequest(mockPullRequestMerged);
      expect(result.score).toBeGreaterThanOrEqual(50);
      expect(result.isSignificant).toBe(true);
      expect(result.reasons).toContain('Pull request merged successfully (+50 pts)');
    });
  });

  describe('Release Event Scoring', () => {
    it('should score a major release as highly significant', () => {
      const result = scoreRelease(mockReleaseMajor);
      expect(result.score).toBeGreaterThanOrEqual(75);
      expect(result.isSignificant).toBe(true);
      expect(result.reasons).toContain('New release published (+75 pts)');
      expect(result.reasons.some(r => r.includes('Major milestone'))).toBe(true);
    });
  });
});

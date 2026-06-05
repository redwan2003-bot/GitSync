/**
 * Dashboard Data-Fetching Functions
 * Server-safe functions for fetching real data from Prisma
 * Supports NEXT_PUBLIC_DEMO_MODE for local testing with mock data
 */

import { auth } from '../auth';
import { prisma } from '@GitSync/db';

const DEMO_MODE = process.env.NEXT_PUBLIC_DEMO_MODE === 'true';

// Mock data for demo mode
export const MOCK_DASHBOARD_METRICS = {
  repositoriesCount: 12,
  draftsAwaitingReview: 3,
  publishedPostsCount: 47,
  failedSyncsCount: 1,
};

export const MOCK_PENDING_DRAFTS = [
  {
    id: '1',
    title: 'React Performance Tips',
    status: 'DRAFT_PENDING',
    createdAt: new Date(),
  },
  {
    id: '2',
    title: 'Web Accessibility Guide',
    status: 'DRAFT_PENDING',
    createdAt: new Date(),
  },
];

export const MOCK_RECENT_SIGNALS = [
  {
    id: '1',
    action: 'PUBLISHED',
    description: 'React Performance Tips published to LinkedIn',
    timestamp: new Date(),
  },
];

export interface DashboardMetrics {
  repositoriesCount: number;
  draftsAwaitingReview: number;
  publishedPostsCount: number;
  failedSyncsCount: number;
}

export interface ApiResponse<T> {
  data?: T;
  error?: string;
  code?: number;
}

/**
 * Fetch dashboard metrics - counts of repos, drafts, published posts, failed syncs
 */
export async function getDashboardMetrics(): Promise<ApiResponse<DashboardMetrics>> {
  if (DEMO_MODE) {
    return { data: MOCK_DASHBOARD_METRICS };
  }

  try {
    const session = await auth();
    if (!session?.user?.id) {
      return {
        error: 'Unauthorized: No active session',
        code: 401,
      };
    }

    // Get workspace membership
    const workspace = await prisma.workspaceMember.findFirst({
      where: {
        userId: session.user.id,
      },
    });

    if (!workspace) {
      return {
        error: 'User is not a member of any workspace',
        code: 403,
      };
    }

    // Fetch real metrics from Prisma
    const [repos, drafts, published, failedSyncs] = await Promise.all([
      prisma.gitHubInstallation.count({
        where: { workspaceId: workspace.workspaceId },
      }),
      prisma.contentDraft.count({
        where: {
          workspaceId: workspace.workspaceId,
          status: 'DRAFT_PENDING',
        },
      }),
      prisma.auditLog.count({
        where: {
          workspaceId: workspace.workspaceId,
          action: 'PUBLISHED',
        },
      }),
      prisma.webhookDelivery.count({
        where: {
          workspaceId: workspace.workspaceId,
          status: 'FAILED',
          createdAt: {
            gte: new Date(Date.now() - 24 * 60 * 60 * 1000), // Last 24 hours
          },
        },
      }),
    ]);

    return {
      data: {
        repositoriesCount: repos,
        draftsAwaitingReview: drafts,
        publishedPostsCount: published,
        failedSyncsCount: failedSyncs,
      },
    };
  } catch (err) {
    return {
      error: err instanceof Error ? err.message : 'Failed to fetch metrics',
      code: 500,
    };
  }
}

/**
 * Fetch pending drafts awaiting review
 */
export async function getPendingDrafts() {
  if (DEMO_MODE) {
    return { data: MOCK_PENDING_DRAFTS };
  }

  try {
    const session = await auth();
    if (!session?.user?.id) {
      return { error: 'Unauthorized', code: 401 };
    }

    const workspace = await prisma.workspaceMember.findFirst({
      where: { userId: session.user.id },
    });

    if (!workspace) {
      return { error: 'No workspace', code: 403 };
    }

    const drafts = await prisma.contentDraft.findMany({
      where: {
        workspaceId: workspace.workspaceId,
        status: 'DRAFT_PENDING',
      },
      take: 3,
      orderBy: { createdAt: 'desc' },
    });

    return { data: drafts };
  } catch (err) {
    return {
      error: err instanceof Error ? err.message : 'Failed to fetch drafts',
      code: 500,
    };
  }
}

/**
 * Fetch recent activity signals from audit logs
 */
export async function getRecentSignals() {
  if (DEMO_MODE) {
    return { data: MOCK_RECENT_SIGNALS };
  }

  try {
    const session = await auth();
    if (!session?.user?.id) {
      return { error: 'Unauthorized', code: 401 };
    }

    const workspace = await prisma.workspaceMember.findFirst({
      where: { userId: session.user.id },
    });

    if (!workspace) {
      return { error: 'No workspace', code: 403 };
    }

    const signals = await prisma.auditLog.findMany({
      where: { workspaceId: workspace.workspaceId },
      take: 3,
      orderBy: { createdAt: 'desc' },
    });

    return {
      data: signals.map((log: typeof signals[0]) => ({
        id: log.id,
        action: log.action,
        description: `${log.action} at ${log.createdAt.toLocaleTimeString()}`,
        timestamp: log.createdAt,
      })),
    };
  } catch (err) {
    return {
      error: err instanceof Error ? err.message : 'Failed to fetch signals',
      code: 500,
    };
  }
}

/**
 * Fetch GitHub repository status for workspace
 */
export async function getGitHubRepos() {
  if (DEMO_MODE) {
    return { data: { hasGitHub: true, repos: [] } };
  }

  try {
    const session = await auth();
    if (!session?.user?.id) {
      return { error: 'Unauthorized', code: 401 };
    }

    const workspace = await prisma.workspaceMember.findFirst({
      where: { userId: session.user.id },
    });

    if (!workspace) {
      return { error: 'No workspace', code: 403 };
    }

    const installations = await prisma.gitHubInstallation.findMany({
      where: { workspaceId: workspace.workspaceId },
    });

    return {
      data: {
        hasGitHub: installations.length > 0,
        repos: [],
        installationCount: installations.length,
      },
    };
  } catch (err) {
    return {
      error: err instanceof Error ? err.message : 'Failed to fetch GitHub repos',
      code: 500,
    };
  }
}

/**
 * Fetch integration connection status (GitHub, LinkedIn, OpenAI)
 */
export async function getIntegrationStatus() {
  if (DEMO_MODE) {
    return {
      data: {
        github: { connected: true },
        linkedin: { connected: true },
        aiProvider: {
          provider: 'openai',
          model: 'gpt-4o-mini',
          configured: true,
        },
      },
    };
  }

  try {
    const session = await auth();
    if (!session?.user?.id) {
      return { error: 'Unauthorized', code: 401 };
    }

    const workspace = await prisma.workspaceMember.findFirst({
      where: { userId: session.user.id },
    });

    if (!workspace) {
      return { error: 'No workspace', code: 403 };
    }

    // Check integration statuses
    const [github, linkedin] = await Promise.all([
      prisma.gitHubInstallation.findFirst({
        where: { workspaceId: workspace.workspaceId },
      }),
      prisma.tokenVaultEntry.findFirst({
        where: {
          workspaceId: workspace.workspaceId,
          provider: 'LINKEDIN',
        },
      }),
    ]);

    return {
      data: {
        github: { connected: !!github },
        linkedin: { connected: !!linkedin },
        aiProvider: {
          provider: 'openai',
          model: 'gpt-4o-mini',
          configured: !!process.env.OPENAI_API_KEY,
        },
      },
    };
  } catch (err) {
    return {
      error: err instanceof Error ? err.message : 'Failed to fetch integration status',
      code: 500,
    };
  }
}

/**
 * Fetch audit logs for workspace
 */
export async function getAuditLogs(action?: string, limit: number = 50) {
  if (DEMO_MODE) {
    return {
      data: [
        {
          id: '1',
          action: 'PUBLISHED',
          description: 'Published a draft',
          createdAt: new Date(),
        },
        {
          id: '2',
          action: 'CREATED',
          description: 'Created a new draft',
          createdAt: new Date(Date.now() - 3600000),
        },
      ],
    };
  }

  try {
    const session = await auth();
    if (!session?.user?.id) {
      return { error: 'Unauthorized', code: 401 };
    }

    const workspace = await prisma.workspaceMember.findFirst({
      where: { userId: session.user.id },
    });

    if (!workspace) {
      return { error: 'No workspace', code: 403 };
    }

    const logs = await prisma.auditLog.findMany({
      where: {
        workspaceId: workspace.workspaceId,
        ...(action && { action }),
      },
      orderBy: { createdAt: 'desc' },
      take: limit,
    });

    return { data: logs };
  } catch (err) {
    return {
      error: err instanceof Error ? err.message : 'Failed to fetch audit logs',
      code: 500,
    };
  }
}

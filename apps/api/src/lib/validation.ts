import { z } from 'zod';

/**
 * Validation schemas for GitSync API endpoints
 */

// UUID validation
const UUIDSchema = z.string().uuid();

// Workspace ID validation
export const WorkspaceIdSchema = UUIDSchema;

// Installation ID validation (positive integer)
export const InstallationIdSchema = z.number().int().positive();

// GitHub OAuth callback query params
export const GitHubCallbackSchema = z.object({
  installation_id: z.string().regex(/^\d+$/),
  setup_action: z.enum(['install', 'update']),
  state: UUIDSchema, // workspace ID
});

// LinkedIn OAuth callback query params
export const LinkedInCallbackSchema = z.object({
  code: z.string().min(10), // Authorization code is typically long
  state: UUIDSchema, // workspace ID
  error: z.string().optional(),
});

// Draft creation
export const CreateDraftSchema = z.object({
  repositoryId: z.string().uuid(),
  githubUrl: z.string().url(),
  content: z.string().min(1).max(10000),
  requiresReview: z.boolean().default(false),
});

// Draft publish
export const PublishDraftSchema = z.object({
  id: z.string().uuid(),
  publishTarget: z.enum(['linkedin', 'github']).optional(),
});

// GitHub sync installation
export const GitHubSyncSchema = z.object({
  installationId: z.number().int().positive(),
  accountLogin: z.string().min(1).max(255),
  accountType: z.string().max(50).default('User'),
});

// Validate workspace ownership
export async function validateWorkspaceAccess(
  userId: string,
  workspaceId: string,
  prisma: any
): Promise<boolean> {
  if (!UUIDSchema.safeParse(workspaceId).success) {
    return false;
  }

  const member = await prisma.workspaceMember.findFirst({
    where: {
      userId,
      workspaceId,
    },
  });

  return !!member;
}

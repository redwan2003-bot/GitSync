import { Injectable } from "@nestjs/common";
import { Prisma } from "@GitSync/db";
import { PrismaService } from "../prisma/prisma.service";

export type AuditAction =
  | "DRAFT_CREATED"
  | "DRAFT_UPDATED"
  | "DRAFT_PUBLISHED"
  | "DRAFT_PUBLISH_FAILED"
  | "INTEGRATION_CONNECTED"
  | "INTEGRATION_DISCONNECTED"
  | "REPO_RULES_UPDATED"
  | "SETTINGS_UPDATED"
  | "ACCOUNT_DELETED";

@Injectable()
export class AuditService {
  constructor(private readonly prisma: PrismaService) {}

  async log(params: {
    workspaceId: string;
    userId?: string;
    action: AuditAction;
    resourceType: string;
    resourceId?: string;
    metadata?: Prisma.InputJsonValue;
  }) {
    return this.prisma.auditLog.create({
      data: {
        workspaceId: params.workspaceId,
        userId: params.userId,
        action: params.action,
        resourceType: params.resourceType,
        resourceId: params.resourceId,
        metadata: params.metadata ?? undefined,
      },
    });
  }
}

import {
  Controller,
  Get,
  Param,
  Put,
  Body,
  Post,
  HttpException,
  HttpStatus,
  UseGuards,
} from "@nestjs/common";
import { InternalAuthGuard } from "../auth/internal-auth.guard";
import { AuthContext } from "../auth/auth.decorator";
import type { RequestAuthContext } from "../auth/auth-context";
import { PrismaService } from "../prisma/prisma.service";
import { LinkedInService } from "../linkedin/linkedin.service";
import { AuditService } from "../audit/audit.service";
import { getApiEnv } from "../config/env";

@Controller("drafts")
@UseGuards(InternalAuthGuard)
export class DraftsController {
  constructor(
    private readonly prisma: PrismaService,
    private readonly linkedinService: LinkedInService,
    private readonly audit: AuditService,
  ) {}

  @Get()
  async getDrafts(@AuthContext() auth: RequestAuthContext) {
    return this.prisma.contentDraft.findMany({
      where: { workspaceId: auth.workspaceId },
      orderBy: { createdAt: "desc" },
    });
  }

  @Get(":id")
  async getDraft(
    @AuthContext() auth: RequestAuthContext,
    @Param("id") id: string,
  ) {
    const draft = await this.prisma.contentDraft.findFirst({
      where: { id, workspaceId: auth.workspaceId },
    });
    if (!draft) {
      throw new HttpException("Draft not found", HttpStatus.NOT_FOUND);
    }
    return draft;
  }

  @Put(":id")
  async updateDraft(
    @AuthContext() auth: RequestAuthContext,
    @Param("id") id: string,
    @Body() updateData: { generatedText: string },
  ) {
    const draft = await this.prisma.contentDraft.findFirst({
      where: { id, workspaceId: auth.workspaceId },
    });
    if (!draft) {
      throw new HttpException("Draft not found", HttpStatus.NOT_FOUND);
    }

    if (draft.status === "PUBLISHED") {
      throw new HttpException(
        "Published drafts cannot be edited in place. Create a new version.",
        HttpStatus.CONFLICT,
      );
    }

    const latestVersion = await this.prisma.draftVersion.findFirst({
      where: { draftId: id },
      orderBy: { version: "desc" },
    });
    const nextVersion = (latestVersion?.version ?? 0) + 1;

    const updated = await this.prisma.$transaction(async (tx) => {
      await tx.draftVersion.create({
        data: {
          draftId: id,
          version: nextVersion,
          fullText: updateData.generatedText,
          editedById: auth.userId,
        },
      });
      return tx.contentDraft.update({
        where: { id },
        data: {
          generatedText: updateData.generatedText,
          status: "DRAFT_EDITED",
        },
      });
    });

    await this.audit.log({
      workspaceId: auth.workspaceId,
      userId: auth.userId,
      action: "DRAFT_UPDATED",
      resourceType: "content_draft",
      resourceId: id,
      metadata: { version: nextVersion },
    });

    return updated;
  }

  @Post(":id/publish")
  async publishDraft(
    @AuthContext() auth: RequestAuthContext,
    @Param("id") id: string,
  ) {
    const env = getApiEnv();
    const draft = await this.prisma.contentDraft.findFirst({
      where: { id, workspaceId: auth.workspaceId },
      include: { repository: true },
    });
    if (!draft) {
      throw new HttpException("Draft not found", HttpStatus.NOT_FOUND);
    }
    if (!draft.generatedText?.trim()) {
      throw new HttpException(
        "Cannot publish empty draft",
        HttpStatus.BAD_REQUEST,
      );
    }
    if (draft.status === "PUBLISHED") {
      throw new HttpException("Draft already published", HttpStatus.CONFLICT);
    }

    if (draft.requiresReview && draft.status !== "APPROVED") {
      throw new HttpException(
        "Draft must be approved before publishing",
        HttpStatus.BAD_REQUEST,
      );
    }

    const repo = draft.repository;
    if (repo?.visibility === "private" && !repo.privateEnabled) {
      throw new HttpException(
        "Private repository publishing is not enabled",
        HttpStatus.FORBIDDEN,
      );
    }

    const weekStart = new Date();
    weekStart.setDate(weekStart.getDate() - 7);
    const publishedThisWeek = await this.prisma.linkedInPost.count({
      where: {
        draft: { workspaceId: auth.workspaceId },
        publishedAt: { gte: weekStart },
      },
    });
    const settings = await this.prisma.workspaceSettings.findUnique({
      where: { workspaceId: auth.workspaceId },
    });
    const maxPosts = settings?.maxPostsPerWeek ?? env.DEFAULT_MAX_POSTS_PER_WEEK;
    if (publishedThisWeek >= maxPosts) {
      throw new HttpException(
        `Weekly publish limit reached (${maxPosts} posts per week)`,
        HttpStatus.TOO_MANY_REQUESTS,
      );
    }

    try {
      const urn = await this.linkedinService.publishPost(draft.generatedText);

      const result = await this.prisma.$transaction(async (tx) => {
        const linkedInPost = await tx.linkedInPost.create({
          data: { draftId: id, urn },
        });
        const updatedDraft = await tx.contentDraft.update({
          where: { id },
          data: {
            status: "PUBLISHED",
            linkedInPostUrn: urn,
            publishedAt: new Date(),
          },
        });
        return { linkedInPost, updatedDraft };
      });

      await this.audit.log({
        workspaceId: auth.workspaceId,
        userId: auth.userId,
        action: "DRAFT_PUBLISHED",
        resourceType: "content_draft",
        resourceId: id,
        metadata: { urn },
      });

      return result.updatedDraft;
    } catch (error: unknown) {
      const message =
        error instanceof Error ? error.message : "Publish failed";
      await this.audit.log({
        workspaceId: auth.workspaceId,
        userId: auth.userId,
        action: "DRAFT_PUBLISH_FAILED",
        resourceType: "content_draft",
        resourceId: id,
        metadata: { error: message },
      });
      throw new HttpException(message, HttpStatus.BAD_GATEWAY);
    }
  }

  @Post(":id/approve")
  async approveDraft(
    @AuthContext() auth: RequestAuthContext,
    @Param("id") id: string,
  ) {
    const draft = await this.prisma.contentDraft.findFirst({
      where: { id, workspaceId: auth.workspaceId },
    });
    if (!draft) {
      throw new HttpException("Draft not found", HttpStatus.NOT_FOUND);
    }
    return this.prisma.contentDraft.update({
      where: { id },
      data: { status: "APPROVED" },
    });
  }
}

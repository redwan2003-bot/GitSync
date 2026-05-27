import { Controller, Delete, UseGuards, HttpCode } from "@nestjs/common";
import { InternalAuthGuard } from "../auth/internal-auth.guard";
import { AuthContext } from "../auth/auth.decorator";
import type { RequestAuthContext } from "../auth/auth-context";
import { PrismaService } from "../prisma/prisma.service";
import { AuditService } from "../audit/audit.service";

@Controller("account")
@UseGuards(InternalAuthGuard)
export class AccountController {
  constructor(
    private readonly prisma: PrismaService,
    private readonly audit: AuditService,
  ) {}

  @Delete()
  @HttpCode(204)
  async deleteAccount(@AuthContext() auth: RequestAuthContext) {
    await this.audit.log({
      workspaceId: auth.workspaceId,
      userId: auth.userId,
      action: "ACCOUNT_DELETED",
      resourceType: "user",
      resourceId: auth.userId,
    });

    await this.prisma.user.delete({
      where: { id: auth.userId },
    });
  }
}

import { Controller, Get, UseGuards } from "@nestjs/common";
import { InternalAuthGuard } from "../auth/internal-auth.guard";
import { AuthContext } from "../auth/auth.decorator";
import type { RequestAuthContext } from "../auth/auth-context";
import { PrismaService } from "../prisma/prisma.service";

@Controller("audit-logs")
@UseGuards(InternalAuthGuard)
export class AuditController {
  constructor(private readonly prisma: PrismaService) {}

  @Get()
  async list(@AuthContext() auth: RequestAuthContext) {
    return this.prisma.auditLog.findMany({
      where: { workspaceId: auth.workspaceId },
      orderBy: { createdAt: "desc" },
      take: 100,
    });
  }
}

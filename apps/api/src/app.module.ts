import { Module } from "@nestjs/common";
import { BullModule } from "@nestjs/bullmq";
import { AppController } from "./app.controller";
import { GithubModule } from "./github/github.module";
import { AiController } from "./ai/ai.controller";
import { DraftsModule } from "./drafts/drafts.module";
import { PrismaModule } from "./prisma/prisma.module";
import { AuditModule } from "./audit/audit.module";
import { IntegrationsModule } from "./integrations/integrations.module";
import { AccountModule } from "./account/account.module";
import { getApiEnv } from "./config/env";

function redisConnection() {
  const url = getApiEnv().REDIS_URL;
  return { url };
}

@Module({
  imports: [
    PrismaModule,
    AuditModule,
    BullModule.forRoot({
      connection: redisConnection(),
    }),
    BullModule.registerQueue({
      name: "ai-generation",
      connection: redisConnection(),
    }),
    GithubModule,
    DraftsModule,
    IntegrationsModule,
    AccountModule,
  ],
  controllers: [AppController, AiController],
  providers: [],
})
export class AppModule {}

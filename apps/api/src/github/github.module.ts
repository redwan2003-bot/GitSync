import { Module } from "@nestjs/common";
import { BullModule } from "@nestjs/bullmq";
import { GithubWebhookController } from "./webhook.controller";
import { WebhookService } from "./webhook.service";
import { getApiEnv } from "../config/env";

const redisUrl = () => {
  try {
    return getApiEnv().REDIS_URL;
  } catch {
    return process.env.REDIS_URL ?? "redis://localhost:6379";
  }
};

@Module({
  imports: [
    BullModule.registerQueue({
      name: "github-webhook",
      connection: { url: redisUrl() },
    }),
  ],
  controllers: [GithubWebhookController],
  providers: [WebhookService],
})
export class GithubModule {}

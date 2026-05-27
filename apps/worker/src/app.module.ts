import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { BullModule } from "@nestjs/bullmq";
import { AiProcessor } from "./ai.processor";
import { WebhookProcessor } from "./webhook.processor";
import { getWorkerEnv } from "./config/env";

@Module({
  imports: [
    BullModule.forRoot({
      connection: { url: getWorkerEnv().REDIS_URL },
    }),
    BullModule.registerQueue(
      { name: "ai-generation" },
      { name: "github-webhook" },
    ),
  ],
  controllers: [AppController],
  providers: [AppService, AiProcessor, WebhookProcessor],
})
export class AppModule {}

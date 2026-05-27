import { Processor, WorkerHost } from "@nestjs/bullmq";
import { Job } from "bullmq";
import { Logger } from "@nestjs/common";
import { PrismaClient } from "@GitSync/db";

@Processor("github-webhook")
export class WebhookProcessor extends WorkerHost {
  private readonly logger = new Logger(WebhookProcessor.name);
  private readonly prisma = new PrismaClient();

  async process(job: Job<{ deliveryId: string; event: string }>): Promise<void> {
    const { deliveryId, event } = job.data;
    this.logger.log(`Processing webhook ${deliveryId} (${event})`);

    try {
      await this.prisma.webhookDelivery.update({
        where: { deliveryId },
        data: { status: "PROCESSED", processedAt: new Date() },
      });
    } catch (error: unknown) {
      const message = error instanceof Error ? error.message : "Unknown error";
      await this.prisma.webhookDelivery.update({
        where: { deliveryId },
        data: { status: "FAILED", errorMessage: message },
      });
      throw error;
    }
  }
}

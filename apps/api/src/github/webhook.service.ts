import { Injectable, Logger } from "@nestjs/common";
import { InjectQueue } from "@nestjs/bullmq";
import { Queue } from "bullmq";
import { PrismaService } from "../prisma/prisma.service";
import { getApiEnv } from "../config/env";

@Injectable()
export class WebhookService {
  private readonly logger = new Logger(WebhookService.name);

  constructor(
    private readonly prisma: PrismaService,
    @InjectQueue("github-webhook") private readonly webhookQueue: Queue,
  ) {}

  async ingestDelivery(params: {
    deliveryId: string;
    event: string;
    payload: unknown;
  }): Promise<{ duplicate: boolean; queued: boolean }> {
    const env = getApiEnv();
    const expiresAt = new Date();
    expiresAt.setDate(expiresAt.getDate() + env.WEBHOOK_RETENTION_DAYS);

    const existing = await this.prisma.webhookDelivery.findUnique({
      where: { deliveryId: params.deliveryId },
    });

    if (existing) {
      this.logger.log(`Duplicate webhook delivery ${params.deliveryId}`);
      return { duplicate: true, queued: false };
    }

    await this.prisma.webhookDelivery.create({
      data: {
        deliveryId: params.deliveryId,
        event: params.event,
        payload: params.payload as object,
        status: "PENDING",
        expiresAt,
      },
    });

    await this.webhookQueue.add(
      "process",
      {
        deliveryId: params.deliveryId,
        event: params.event,
      },
      {
        jobId: params.deliveryId,
        removeOnComplete: 1000,
        removeOnFail: 5000,
      },
    );

    return { duplicate: false, queued: true };
  }
}

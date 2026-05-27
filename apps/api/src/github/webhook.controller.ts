import {
  Controller,
  Post,
  Headers,
  Req,
  HttpException,
  HttpStatus,
} from "@nestjs/common";
import type { RawBodyRequest } from "@nestjs/common";
import type { Request } from "express";
import { WebhookService } from "./webhook.service";
import { getApiEnv } from "../config/env";
import { verifyGithubWebhookSignature } from "./signature";

@Controller("webhooks")
export class GithubWebhookController {
  private readonly secret: string;

  constructor(private readonly webhookService: WebhookService) {
    this.secret = getApiEnv().GITHUB_WEBHOOK_SECRET;
  }

  @Post("github")
  async handleGithubWebhook(
    @Headers("x-hub-signature-256") signature: string | undefined,
    @Headers("x-github-event") event: string | undefined,
    @Headers("x-github-delivery") deliveryId: string | undefined,
    @Req() req: RawBodyRequest<Request>,
  ) {
    if (!deliveryId) {
      throw new HttpException(
        "Missing X-GitHub-Delivery",
        HttpStatus.BAD_REQUEST,
      );
    }

    if (!event) {
      throw new HttpException(
        "Missing X-GitHub-Event",
        HttpStatus.BAD_REQUEST,
      );
    }

    const rawBody = req.rawBody;
    if (!rawBody || !Buffer.isBuffer(rawBody)) {
      throw new HttpException(
        "Raw body required for signature verification",
        HttpStatus.BAD_REQUEST,
      );
    }

    if (!verifyGithubWebhookSignature(rawBody, signature, this.secret)) {
      throw new HttpException("Invalid signature", HttpStatus.UNAUTHORIZED);
    }

    let payload: unknown;
    try {
      payload = JSON.parse(rawBody.toString("utf8"));
    } catch {
      throw new HttpException("Invalid JSON payload", HttpStatus.BAD_REQUEST);
    }

    const result = await this.webhookService.ingestDelivery({
      deliveryId,
      event,
      payload,
    });

    return { received: true, ...result };
  }
}

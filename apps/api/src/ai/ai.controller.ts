import { Controller, Post, Body, Get, Param } from '@nestjs/common';
import { Queue } from 'bullmq';
import { InjectQueue } from '@nestjs/bullmq';
import { v4 as uuidv4 } from 'uuid';

/**
 * Endpoint to enqueue AI draft generation jobs.
 * Returns a requestId that can be used to poll status.
 */
@Controller('api/ai')
export class AiController {
  constructor(@InjectQueue('ai-generation') private readonly aiQueue: Queue) {}

  @Post('draft')
  async enqueueDraft(@Body() payload: { template: string; data: any; devSync?: boolean }) {
    const requestId = uuidv4();

    // Development shortcut – sync generation behind flag
    if (payload.devSync && process.env.NODE_ENV !== 'production') {
      const { AiGenerationService } = await import('@reposignal/ai');
      const service = new AiGenerationService();
      const schemas = await import('@reposignal/prompts');
      const schema =
        payload.template === 'summary'
          ? schemas.SummaryOutputSchema
          : schemas.SummaryOutputSchema;
      const result = await service.generateDraft(
        payload.template,
        payload.data,
        schema,
      );
      return { requestId, status: 'completed', result };
    }

    await this.aiQueue.add('generate', {
      requestId,
      template: payload.template,
      data: payload.data,
    });
    return { requestId, status: 'queued' };
  }

  @Get('draft/:id/status')
  async getStatus(@Param('id') id: string) {
    // Placeholder – real implementation would query a DB or Redis.
    return { requestId: id, status: 'processing (check logs)' };
  }
}

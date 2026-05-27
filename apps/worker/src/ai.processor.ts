import { Processor, WorkerHost } from '@nestjs/bullmq';
import { Job } from 'bullmq';
import { Logger } from '@nestjs/common';
import { AiGenerationService } from '@GitSync/ai';

@Processor('ai-generation', {
  concurrency: 1, // Conservative free-tier hosted beta default
  limiter: {
    max: 5,
    duration: 1000 * 60, // Limit to 5 jobs per minute globally for this queue to respect API quotas
  },
})
export class AiProcessor extends WorkerHost {
  private readonly logger = new Logger(AiProcessor.name);
  private aiService: AiGenerationService;

  constructor() {
    super();
    // Initialize AI Service
    this.aiService = new AiGenerationService();
  }

  async process(job: Job<any, any, string>): Promise<any> {
    this.logger.log(`Processing AI generation job ${job.id} for template: ${job.data.template}`);
    
    try {
      // The schema is dynamic per job, but we'll import it from the prompt registry in a real implementation
      // For this MVP, we assume the schema is passed or we resolve it here.
      // Since we can't easily pass the Zod schema over BullMQ (it strips functions/prototypes),
      // we just load it from @GitSync/prompts based on job.data.template.
      const schemas = await import('@GitSync/prompts');
      let schema: any;

      switch (job.data.template) {
        case 'summary':
          schema = schemas.SummaryOutputSchema;
          break;
        case 'release-notes':
          schema = schemas.ReleaseNotesOutputSchema;
          break;
        case 'project-update':
          schema = schemas.ProjectUpdateOutputSchema;
          break;
        case 'project-card':
          schema = schemas.ProjectCardOutputSchema;
          break;
        case 'evidence-check':
          schema = schemas.EvidenceCheckOutputSchema;
          break;
        default:
          throw new Error(`Unknown template or no schema defined for: ${job.data.template}`);
      }

      const result = await this.aiService.generateDraft(job.data.template, job.data.context, schema);
      
      this.logger.log(`Job ${job.id} completed successfully`);
      return result;
    } catch (error: any) {
      this.logger.error(`Failed to process AI job ${job.id}: ${error.message}`);
      
      // If error is a provider rate limit or 5xx, let BullMQ retry.
      // If it's a 4xx (like invalid prompt), we might want to fail permanently.
      // The backoff is handled by the enqueue options in WebhookService.
      throw error;
    }
  }
}

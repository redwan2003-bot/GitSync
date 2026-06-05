import OpenAI from "openai";
import * as Handlebars from "handlebars";
import { z } from "zod";
import { zodResponseFormat } from "openai/helpers/zod";
import { getTemplate } from "@GitSync/prompts";

interface AiGenerationServiceOptions {
  apiKey?: string;
  model?: string;
  client?: OpenAI;
}

export class AiGenerationService {
  private readonly client: OpenAI;
  private readonly model: string;

  constructor(options: AiGenerationServiceOptions = {}) {
    const apiKey = options.apiKey ?? process.env.OPENROUTER_API_KEY;
    if (!apiKey) {
      throw new Error("OPENROUTER_API_KEY is not set in environment.");
    }

    this.model = options.model ?? process.env.OPENROUTER_MODEL ?? "google/gemini-2.0-flash-lite-preview-02-05:free";
    this.client = options.client ?? new OpenAI({ 
      apiKey,
      baseURL: 'https://openrouter.ai/api/v1',
    });
  }

  /**
   * Generates a draft using the specified Handlebars template and validates the JSON output
   * using the provided Zod schema.
   */
  async generateDraft<T>(
    templateName: string,
    context: Record<string, any>,
    schema: z.ZodSchema<T>,
  ): Promise<T> {
    this.assertPrivateRepoAllowed(context);

    const templateString = getTemplate(templateName);
    const compiledTemplate = Handlebars.compile(templateString);
    const prompt = compiledTemplate(context);

    const response = await this.withRetries(() =>
      this.client.chat.completions.create({
        model: this.model,
        messages: [
          {
            role: "system",
            content: "You generate factual, evidence-bound GitSync content. Use only the provided evidence. Do not invent metrics, users, companies, production claims, collaborators, or benchmarks. Return JSON only."
          },
          { role: "user", content: prompt }
        ],
        temperature: 0.3,
        response_format: zodResponseFormat(schema as any, "DraftResponse"),
      }),
    );

    const rawContent = response.choices[0]?.message?.content ?? "{}";
    let parsedJson: unknown;
    try {
      parsedJson = JSON.parse(rawContent);
    } catch {
      throw new Error(
        `Failed to parse OpenAI response as JSON. Raw response: ${rawContent}`,
      );
    }

    const validationResult = schema.safeParse(parsedJson);
    if (!validationResult.success) {
      throw new Error(
        `OpenAI generated JSON did not match expected schema: ${validationResult.error.message}`,
      );
    }

    return validationResult.data;
  }

  private assertPrivateRepoAllowed(context: Record<string, any>): void {
    const visibility =
      context.repositoryVisibility ?? context.repository?.visibility;

    if (
      visibility === "private" &&
      process.env.OPENAI_ALLOW_PRIVATE_REPO_DRAFTING !== "true"
    ) {
      throw new Error(
        "Private repository drafting is disabled. Set OPENAI_ALLOW_PRIVATE_REPO_DRAFTING=true only after explicit user consent or a paid-provider privacy review.",
      );
    }
  }

  private async withRetries<T>(
    fn: () => Promise<T>,
    maxRetries = 3,
    delayMs = 1000,
  ): Promise<T> {
    let attempt = 0;
    while (attempt < maxRetries) {
      try {
        return await fn();
      } catch (error: any) {
        attempt++;
        if (attempt >= maxRetries) {
          throw error;
        }
        
        const isRateLimit = error?.status === 429;
        const isServerError = error?.status >= 500;
        
        if (!isRateLimit && !isServerError) {
          throw error;
        }

        console.warn(`OpenAI API error on attempt ${attempt}: ${error.message}. Retrying in ${delayMs}ms...`);
        await new Promise((resolve) => setTimeout(resolve, delayMs));
      }
    }
    throw new Error("Unreachable");
  }
}

import { GoogleGenAI } from "@google/genai";
import * as Handlebars from "handlebars";
import { z } from "zod";
import { zodToJsonSchema } from "zod-to-json-schema";
import { getTemplate } from "@GitSync/prompts";

interface AiGenerationServiceOptions {
  apiKey?: string;
  model?: string;
  client?: GoogleGenAI;
}

export class AiGenerationService {
  private readonly client: GoogleGenAI;
  private readonly model: string;

  constructor(options: AiGenerationServiceOptions = {}) {
    const apiKey = options.apiKey ?? process.env.GEMINI_API_KEY;
    if (!apiKey) {
      throw new Error("GEMINI_API_KEY is not set in environment.");
    }

    this.model = options.model ?? process.env.GEMINI_MODEL ?? "gemini-1.5-flash-latest";
    this.client = options.client ?? new GoogleGenAI({ apiKey });
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
    const responseSchema = this.toGeminiSchema(schema);

    const response = await this.withRetries(() =>
      this.client.models.generateContent({
        model: this.model,
        contents: prompt,
        config: {
          systemInstruction:
            "You generate factual, evidence-bound GitSync content. Use only the provided evidence. Do not invent metrics, users, companies, production claims, collaborators, or benchmarks. Return JSON only.",
          temperature: 0.3,
          responseMimeType: "application/json",
          responseSchema,
        },
      }),
    );

    const rawContent = response.text ?? "{}";
    let parsedJson: unknown;
    try {
      parsedJson = JSON.parse(rawContent);
    } catch {
      throw new Error(
        `Failed to parse Gemini response as JSON. Raw response: ${rawContent}`,
      );
    }

    const validationResult = schema.safeParse(parsedJson);
    if (!validationResult.success) {
      throw new Error(
        `Gemini generated JSON did not match expected schema: ${validationResult.error.message}`,
      );
    }

    return validationResult.data;
  }

  private toGeminiSchema(schema: z.ZodTypeAny): Record<string, unknown> {
    const jsonSchema = zodToJsonSchema(schema as any, {
      $refStrategy: "none",
      target: "jsonSchema7",
    }) as Record<string, unknown>;

    delete jsonSchema.$schema;
    return jsonSchema;
  }

  private assertPrivateRepoAllowed(context: Record<string, any>): void {
    const visibility =
      context.repositoryVisibility ?? context.repository?.visibility;

    if (
      visibility === "private" &&
      process.env.GEMINI_ALLOW_PRIVATE_REPO_DRAFTING !== "true"
    ) {
      throw new Error(
        "Private repository drafting is disabled for Gemini hosted beta. Set GEMINI_ALLOW_PRIVATE_REPO_DRAFTING=true only after explicit user consent or a paid-provider privacy review.",
      );
    }
  }

  private async withRetries<T>(operation: () => Promise<T>): Promise<T> {
    const maxAttempts = 3;
    let lastError: unknown;

    for (let attempt = 1; attempt <= maxAttempts; attempt += 1) {
      try {
        return await operation();
      } catch (error: any) {
        lastError = error;
        const status = error?.status ?? error?.response?.status;
        const retryable =
          status === 429 ||
          status >= 500 ||
          error?.code === "ECONNRESET" ||
          error?.code === "ETIMEDOUT";

        if (!retryable || attempt === maxAttempts) {
          break;
        }

        const delayMs = 500 * 2 ** (attempt - 1);
        await new Promise((resolve) => setTimeout(resolve, delayMs));
      }
    }

    throw lastError;
  }
}

import OpenAI from "openai";
import * as Handlebars from "handlebars";
import { z } from "zod";
import { getTemplate } from "@reposignal/prompts";

export class AiGenerationService {
  private client: OpenAI;

  constructor() {
    const apiKey = process.env.OPENAI_API_KEY;
    if (!apiKey) {
      throw new Error("OPENAI_API_KEY is not set in environment.");
    }
    this.client = new OpenAI({ apiKey });
  }

  /**
   * Generates a draft using the specified Handlebars template and validates the JSON output
   * using the provided Zod schema.
   */
  async generateDraft<T>(
    templateName: string,
    context: Record<string, any>,
    schema: z.ZodSchema<T>
  ): Promise<T> {
    const templateString = getTemplate(templateName);
    const compiledTemplate = Handlebars.compile(templateString);
    const prompt = compiledTemplate(context);

    // Call OpenAI with JSON mode enabled
    const response = await this.client.chat.completions.create({
      model: process.env.OPENAI_MODEL ?? "gpt-4o-mini",
      messages: [{ role: "user", content: prompt }],
      response_format: { type: "json_object" },
    });

    const rawContent = response.choices[0]?.message?.content ?? "{}";
    
    // The model is instructed to return JSON. We parse it and then pass to Zod for strict validation.
    let parsedJson: unknown;
    try {
      parsedJson = JSON.parse(rawContent);
    } catch (error) {
      throw new Error(`Failed to parse AI response as JSON. Raw response: ${rawContent}`);
    }

    // Validate structured output with Zod
    const validationResult = schema.safeParse(parsedJson);
    if (!validationResult.success) {
      throw new Error(`AI generated JSON did not match expected schema: ${validationResult.error.message}`);
    }

    return validationResult.data;
  }
}

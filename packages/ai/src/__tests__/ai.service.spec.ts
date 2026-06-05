import { beforeEach, describe, expect, it, vi } from "vitest";
import { z } from "zod";
import { AiGenerationService } from "../ai.service";

const mocks = vi.hoisted(() => ({
  generateContent: vi.fn(),
  googleGenAI: vi.fn(),
  getTemplate: vi.fn(),
}));

vi.mock("@google/genai", () => ({
  GoogleGenAI: mocks.googleGenAI,
}));

vi.mock("@GitSync/prompts", () => ({
  getTemplate: mocks.getTemplate,
}));

const schema = z.object({
  title: z.string(),
  bulletPoints: z.array(z.string()),
  overallScore: z.number(),
});

describe("AiGenerationService", () => {
  beforeEach(() => {
    vi.clearAllMocks();
    process.env.GEMINI_API_KEY = "test_key";
    process.env.GEMINI_MODEL = "gemini-1.5-flash-latest";
    process.env.GEMINI_ALLOW_PRIVATE_REPO_DRAFTING = "false";

    mocks.getTemplate.mockReturnValue("Mock template {{repoName}}");
    mocks.generateContent.mockResolvedValue({
      text: '{"title":"Test Summary","bulletPoints":["Test 1","Test 2"],"overallScore":90}',
    });
    mocks.googleGenAI.mockImplementation(() => ({
      models: {
        generateContent: mocks.generateContent,
      },
    }));
  });

  it("compiles template, calls Gemini, and validates JSON output", async () => {
    const service = new AiGenerationService();

    const result = await service.generateDraft(
      "summary",
      { repoName: "test/repo" },
      schema,
    );

    expect(mocks.googleGenAI).toHaveBeenCalledWith({ apiKey: "test_key" });
    expect(mocks.generateContent).toHaveBeenCalledWith(
      expect.objectContaining({
        model: "gemini-1.5-flash-latest",
        contents: "Mock template test/repo",
      }),
    );
    expect(result).toEqual({
      title: "Test Summary",
      bulletPoints: ["Test 1", "Test 2"],
      overallScore: 90,
    });
  });

  it("throws when GEMINI_API_KEY is missing", () => {
    delete process.env.GEMINI_API_KEY;

    expect(() => new AiGenerationService()).toThrow(/GEMINI_API_KEY/);
  });

  it("throws when Gemini returns invalid JSON", async () => {
    mocks.generateContent.mockResolvedValueOnce({ text: "not-json" });

    const service = new AiGenerationService();

    await expect(
      service.generateDraft("summary", { repoName: "test/repo" }, schema),
    ).rejects.toThrow(/Failed to parse Gemini response as JSON/);
  });

  it("throws when Gemini JSON does not match the schema", async () => {
    mocks.generateContent.mockResolvedValueOnce({
      text: '{"title":"Missing fields"}',
    });

    const service = new AiGenerationService();

    await expect(
      service.generateDraft("summary", { repoName: "test/repo" }, schema),
    ).rejects.toThrow(/did not match expected schema/);
  });

  it("blocks private repo drafting unless explicitly allowed", async () => {
    const service = new AiGenerationService();

    await expect(
      service.generateDraft(
        "summary",
        { repoName: "test/repo", repositoryVisibility: "private" },
        schema,
      ),
    ).rejects.toThrow(/Private repository drafting is disabled/);
  });
});

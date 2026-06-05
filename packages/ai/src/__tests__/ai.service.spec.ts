import { beforeEach, describe, expect, it, vi } from "vitest";
import { z } from "zod";
import { AiGenerationService } from "../ai.service";

const mocks = vi.hoisted(() => ({
  create: vi.fn(),
  openai: vi.fn(),
  getTemplate: vi.fn(),
}));

vi.mock("openai", () => {
  return {
    default: mocks.openai
  };
});

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
    process.env.OPENAI_API_KEY = "test_key";
    process.env.OPENAI_MODEL = "gpt-4o-mini";
    process.env.OPENAI_ALLOW_PRIVATE_REPO_DRAFTING = "false";

    mocks.getTemplate.mockReturnValue("Mock template {{repoName}}");
    mocks.create.mockResolvedValue({
      choices: [{
        message: {
          content: '{"title":"Test Summary","bulletPoints":["Test 1","Test 2"],"overallScore":90}'
        }
      }],
    });
    mocks.openai.mockImplementation(() => ({
      chat: {
        completions: {
          create: mocks.create,
        },
      },
    }));
  });

  it("compiles template, calls OpenAI, and validates JSON output", async () => {
    const service = new AiGenerationService();

    const result = await service.generateDraft(
      "summary",
      { repoName: "test/repo" },
      schema,
    );

    expect(mocks.openai).toHaveBeenCalledWith({ apiKey: "test_key" });
    expect(mocks.create).toHaveBeenCalledWith(
      expect.objectContaining({
        model: "gpt-4o-mini",
      }),
    );
    expect(result).toEqual({
      title: "Test Summary",
      bulletPoints: ["Test 1", "Test 2"],
      overallScore: 90,
    });
  });

  it("throws when OPENAI_API_KEY is missing", () => {
    delete process.env.OPENAI_API_KEY;

    expect(() => new AiGenerationService()).toThrow(/OPENAI_API_KEY/);
  });

  it("throws when OpenAI returns invalid JSON", async () => {
    mocks.create.mockResolvedValueOnce({
      choices: [{ message: { content: "not-json" } }]
    });

    const service = new AiGenerationService();

    await expect(
      service.generateDraft("summary", { repoName: "test/repo" }, schema),
    ).rejects.toThrow(/Failed to parse OpenAI response as JSON/);
  });

  it("throws when OpenAI JSON does not match the schema", async () => {
    mocks.create.mockResolvedValueOnce({
      choices: [{ message: { content: '{"title":"Missing fields"}' } }]
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

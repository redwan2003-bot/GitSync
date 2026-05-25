import { describe, it, expect, vi } from 'vitest';
import { AiGenerationService } from '../ai.service';
import { z } from 'zod';

// Mock OpenAI
vi.mock('openai', () => {
  return {
    default: class OpenAI {
      chat = {
        completions: {
          create: vi.fn().mockResolvedValue({
            choices: [{ message: { content: '{"title":"Test Summary","bulletPoints":["Test 1","Test 2"],"overallScore":90}' } }],
          }),
        },
      };
    },
  };
});

describe('AiGenerationService', () => {
  it('should compile template, call OpenAI, and validate JSON output', async () => {
    process.env.OPENAI_API_KEY = 'test_key';
    const service = new AiGenerationService();

    const schema = z.object({
      title: z.string(),
      bulletPoints: z.array(z.string()),
      overallScore: z.number(),
    });

    // We can't easily test real getTemplate() because we don't have the files in the test context properly linked sometimes, 
    // but assuming getTemplate works, the mock OpenAI will return valid JSON anyway.
    
    // Mock getTemplate for this test scope
    vi.mock('@reposignal/prompts', () => ({
      getTemplate: vi.fn().mockReturnValue('Mock template {{repoName}}'),
    }));

    const result = await service.generateDraft('summary', { repoName: 'test/repo' }, schema);

    expect(result.title).toBe('Test Summary');
    expect(result.bulletPoints.length).toBe(2);
    expect(result.overallScore).toBe(90);
  });
});

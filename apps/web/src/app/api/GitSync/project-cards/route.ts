import { NextRequest, NextResponse } from 'next/server';
import { auth } from '../../../../auth';
import { prisma } from '@GitSync/db';
import { checkRateLimit } from '../../../../lib/rate-limit';
import { successResponse, rateLimitErrorResponse, errorResponse, ErrorCodes } from '../../../../lib/api-response';

export async function GET(_request: NextRequest) {
  try {
    const session = await auth();

    if (!session?.user?.id) {
      return errorResponse(
        ErrorCodes.UNAUTHORIZED,
        'Authentication required',
        401
      );
    }

    // Rate limiting: 30 requests per minute per user
    const rateLimitCheck = checkRateLimit(`project-cards:${session.user.id}`, 30, 60);
    if (!rateLimitCheck.allowed) {
      return rateLimitErrorResponse(rateLimitCheck.resetAt);
    }

    const workspace = await prisma.workspaceMember.findFirst({
      where: { userId: session.user.id },
    });

    if (!workspace) {
      return errorResponse(
        ErrorCodes.FORBIDDEN,
        'No workspace found for user',
        403
      );
    }

    const projectCards = await prisma.projectCard.findMany({
      where: { workspaceId: workspace.workspaceId },
      orderBy: { updatedAt: 'desc' },
    });

    const formattedCards = projectCards.map((card: any) => ({
      id: card.id,
      name: card.title,
      description: card.description,
      url: (card.links as any)?.[0]?.url || '',
      date: card.startDate || card.createdAt.toISOString().split('T')[0]
    }));

    return successResponse({
      cards: formattedCards,
      workspace: {
        id: workspace.workspaceId,
      },
    });
  } catch (error) {
    console.error('Project cards error:', error);
    return errorResponse(
      ErrorCodes.INTERNAL_ERROR,
      'Failed to fetch project cards',
      500
    );
  }
}

/**
 * Generates a LinkedIn project card from a GitHub repository using AI.
 */
export async function POST(request: NextRequest) {
  try {
    const session = await auth();

    if (!session?.user?.id) {
      return errorResponse(
        ErrorCodes.UNAUTHORIZED,
        'Authentication required',
        401
      );
    }

    const rateLimitCheck = checkRateLimit(`generate-card:${session.user.id}`, 10, 60);
    if (!rateLimitCheck.allowed) {
      return rateLimitErrorResponse(rateLimitCheck.resetAt);
    }

    const body = await request.json();
    const { repositoryId } = body;

    if (!repositoryId) {
      return errorResponse(ErrorCodes.INVALID_INPUT, 'repositoryId is required', 400);
    }

    const workspace = await prisma.workspaceMember.findFirst({
      where: { userId: session.user.id },
    });

    if (!workspace) {
      return errorResponse(ErrorCodes.FORBIDDEN, 'No workspace found for user', 403);
    }

    const repository = await prisma.repository.findUnique({
      where: { id: repositoryId },
    });

    if (!repository || repository.workspaceId !== workspace.workspaceId) {
      return errorResponse(ErrorCodes.NOT_FOUND, 'Repository not found', 404);
    }

    // Build the AI prompt inline (matches project-card.hbs template format)
    const prompt = `Create a compact project card for LinkedIn.

Repository: ${repository.name}
Description: ${repository.description || 'No description provided.'}
Language: ${repository.language || 'Unknown'}
URL: ${repository.htmlUrl}

Output Requirements:
Return a JSON object with the following fields exactly as specified.
Do NOT include any markdown formatting around the JSON.

Rules:
- Use only the provided repository evidence.
- Do not invent metrics, users, companies, production usage, collaborators, benchmarks, funding, or impact.
- If evidence is missing, keep the claim generic or omit it.
- Keep tone credible and professional for LinkedIn.
- Avoid spam phrases like "thrilled to announce", "game-changing", and "revolutionary".
- Return JSON only. Do not include markdown fences.

Fields:
- title (string): The title of the project card.
- subtitle (string): A brief subtitle or tagline.
- details (string): A short paragraph describing the project and why it matters.
- callToAction (string): A short, engaging sentence prompting the reader to check out the repo or engage.

Return JSON only.`;

    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) {
      return errorResponse(ErrorCodes.INTERNAL_ERROR, 'AI service not configured', 500);
    }

    // Dynamic import to avoid bundling issues
    const { GoogleGenAI } = await import('@google/genai');
    const client = new GoogleGenAI({ apiKey });
    const model = process.env.GEMINI_MODEL || 'gemini-2.0-flash';

    const response = await client.models.generateContent({
      model,
      contents: prompt,
      config: {
        systemInstruction:
          'You generate factual, evidence-bound GitSync content. Use only the provided evidence. Do not invent metrics, users, companies, production claims, collaborators, or benchmarks. Return JSON only.',
        temperature: 0.3,
        responseMimeType: 'application/json',
        responseSchema: {
          type: 'object' as any,
          properties: {
            title: { type: 'string' as any },
            subtitle: { type: 'string' as any },
            details: { type: 'string' as any },
            callToAction: { type: 'string' as any },
          },
          required: ['title', 'subtitle', 'details', 'callToAction'],
        },
      },
    });

    const rawContent = response.text ?? '{}';
    let generatedCard: { title: string; subtitle: string; details: string; callToAction: string };

    try {
      generatedCard = JSON.parse(rawContent);
    } catch {
      console.error('Failed to parse AI response:', rawContent);
      return errorResponse(ErrorCodes.INTERNAL_ERROR, 'AI returned invalid response', 500);
    }

    // Save to DB
    const newProjectCard = await prisma.projectCard.create({
      data: {
        workspaceId: workspace.workspaceId,
        repositoryId: repository.id,
        title: generatedCard.title,
        role: generatedCard.subtitle,
        description: `${generatedCard.details}\n\n${generatedCard.callToAction}`,
        technologies: repository.language ? [repository.language] : [],
        links: repository.htmlUrl ? [{ type: 'GitHub', url: repository.htmlUrl }] : [],
        syncStatus: 'MANUAL_READY',
      },
    });

    return successResponse(
      {
        card: {
          id: newProjectCard.id,
          name: newProjectCard.title,
          description: newProjectCard.description,
          url: (newProjectCard.links as any)?.[0]?.url || '',
          date: newProjectCard.createdAt.toISOString().split('T')[0],
        },
      },
      201
    );
  } catch (error) {
    console.error('Project card generation error:', error);
    return errorResponse(
      ErrorCodes.INTERNAL_ERROR,
      'Failed to generate project card',
      500
    );
  }
}

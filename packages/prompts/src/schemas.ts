import { z } from 'zod';

export const SummaryOutputSchema = z.object({
  title: z.string(),
  bulletPoints: z.array(z.string()).max(5),
  overallScore: z.number().min(0).max(100),
});

export const ReleaseNotesOutputSchema = z.object({
  version: z.string(),
  highlights: z.array(z.string()),
  notes: z.string(),
});

export const ProjectUpdateOutputSchema = z.object({
  heading: z.string(),
  summary: z.string(),
  nextSteps: z.array(z.string()),
});

export const ProjectCardOutputSchema = z.object({
  title: z.string(),
  subtitle: z.string(),
  details: z.string(),
  callToAction: z.string(),
});

export const EvidenceCheckOutputSchema = z.object({
  issues: z.array(z.string()),
  confidence: z.number().min(0).max(100),
  correctedDraft: z.string().optional(),
});

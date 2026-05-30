'use client';

interface ProjectScoreRingProps {
  score: number;
  max?: number;
  label?: string;
}

export function ProjectScoreRing({ score, max = 100, label }: ProjectScoreRingProps) {
  const percentage = (score / max) * 100;
  const circumference = 2 * Math.PI * 45; // radius 45
  const offset = circumference - (percentage / 100) * circumference;

  return (
    <div className="flex flex-col items-center justify-center gap-4">
      <svg width="120" height="120" className="transform -rotate-90">
        <circle cx="60" cy="60" r="45" fill="none" stroke="currentColor" strokeWidth="2" className="text-surface-soft" />
        <circle
          cx="60"
          cy="60"
          r="45"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          className="text-signal transition-all duration-500"
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          strokeLinecap="round"
        />
      </svg>
      <div className="text-center">
        <div className="text-2xl font-bold text-text">{score}</div>
        {label && <div className="text-xs text-muted">{label}</div>}
      </div>
    </div>
  );
}

'use client';

import { CheckCircle2, Circle } from 'lucide-react';

const PIPELINE_STEPS = [
  { label: 'Repo Tracked', status: 'complete' },
  { label: 'Activity Logged', status: 'complete' },
  { label: 'AI Draft Created', status: 'complete' },
  { label: 'Review Required', status: 'active' },
  { label: 'Published', status: 'pending' },
];

export function PipelineStatusTracker() {
  return (
    <div className="space-y-6 pt-4">
      {PIPELINE_STEPS.map((step, idx) => (
        <div key={step.label} className="flex items-start gap-4">
          <div className="flex flex-col items-center">
            {step.status === 'complete' ? (
              <CheckCircle2 aria-hidden="true" size={24} className="text-signal" />
            ) : step.status === 'active' ? (
              <div aria-hidden="true" className="size-6 rounded-full border-2 border-commit flex items-center justify-center">
                <div className="size-2 rounded-full bg-commit" />
              </div>
            ) : (
              <Circle aria-hidden="true" size={24} className="text-muted/30" />
            )}
            {idx < PIPELINE_STEPS.length - 1 && (
              <div aria-hidden="true" className={`w-1 h-12 mt-2 ${step.status === 'complete' ? 'bg-signal' : 'bg-muted/20'}`} />
            )}
          </div>
          <div className="pt-1">
            <div className="text-sm font-medium text-text">{step.label}</div>
            <div className="text-xs text-muted/60">
              {step.status === 'complete' ? 'Completed' : step.status === 'active' ? 'In progress' : 'Pending'}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

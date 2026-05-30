'use client';

import { SignalOrbitFallback } from './signal-orbit-fallback';
import { H3 } from './typography';

export function SignalOrbitPanel() {
  return (
    <div className="space-y-4">
      <H3>Signal Orbit</H3>
      <SignalOrbitFallback />
      <div className="text-xs text-muted text-center pt-4">
        GitHub activity flowing to LinkedIn publishing
      </div>
    </div>
  );
}

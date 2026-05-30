'use client';

import dynamic from 'next/dynamic';
import React from 'react';
import SignalOrbitFallback from '@/components/signal-orbit-fallback';

// Lazy‑load the 3D scene only on the client side; SSR is disabled.
const SignalOrbitScene = dynamic(() => import('./signal-orbit-scene'), {
  ssr: false,
  loading: () => <SignalOrbitFallback />,
});

export default function DynamicOrbit() {
  return <SignalOrbitScene />;
}

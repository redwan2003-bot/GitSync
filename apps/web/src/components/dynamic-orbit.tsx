'use client';

import React from 'react';
import { SignalOrbitFallback } from './signal-orbit-fallback';

// Temporarily render only the fallback SVG to avoid React context issues
// The 3D scene will be re-enabled once peer dependency conflicts are resolved
export default function DynamicOrbit() {
  return <SignalOrbitFallback />;
}

'use client';

import React from 'react';

export default function SignalOrbitFallback() {
  // Simple animated SVG that respects prefers-reduced-motion
  return (
    <div className="w-full h-64 flex items-center justify-center bg-slate-900 text-slate-200">
      <svg
        className="animate-spin-slow"
        width="80"
        height="80"
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <circle cx="50" cy="50" r="45" stroke="var(--color-primary)" strokeWidth="8" strokeDasharray="283" strokeDashoffset="75" />
        <circle cx="50" cy="50" r="30" stroke="var(--color-accent)" strokeWidth="6" strokeDasharray="188" strokeDashoffset="30" />
      </svg>
    </div>
  );
}

/* Tailwind custom animation */
/* Add the following to globals.css if not present */
/* @layer utilities {
  @keyframes spin-slow {
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
  }
  .animate-spin-slow { animation: spin-slow 8s linear infinite; }
} */

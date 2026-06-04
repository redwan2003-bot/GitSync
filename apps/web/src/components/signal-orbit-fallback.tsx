'use client';

export function SignalOrbitFallback() {
  return (
    <div className="w-full h-64 flex items-center justify-center bg-surface-soft/50 rounded">
      <svg className="size-48 animate-spin-slow" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
        {/* Outer orbit circle */}
        <circle cx="100" cy="100" r="90" fill="none" stroke="currentColor" strokeWidth="1" className="text-cyan/20" />
        
        {/* Middle orbit circle */}
        <circle cx="100" cy="100" r="60" fill="none" stroke="currentColor" strokeWidth="1" className="text-signal/20" />
        
        {/* Inner orbit circle */}
        <circle cx="100" cy="100" r="30" fill="none" stroke="currentColor" strokeWidth="1" className="text-commit/20" />
        
        {/* Orbiting dots */}
        <circle cx="190" cy="100" r="4" fill="currentColor" className="text-cyan" />
        <circle cx="100" cy="10" r="4" fill="currentColor" className="text-signal" />
        <circle cx="10" cy="100" r="4" fill="currentColor" className="text-commit" />
        
        {/* Center point */}
        <circle cx="100" cy="100" r="6" fill="currentColor" className="text-text" />
      </svg>
    </div>
  );
}

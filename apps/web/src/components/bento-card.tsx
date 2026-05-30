'use client';

interface BentoCardProps {
  className?: string;
  children: React.ReactNode;
  span?: '1' | '2' | 'full';
}

export function BentoCard({ className = '', children, span = '1' }: BentoCardProps) {
  const spanClass = {
    '1': 'col-span-1',
    '2': 'col-span-1 lg:col-span-2',
    'full': 'col-span-full',
  }[span];

  return (
    <div
      className={`${spanClass} bg-surface border border-border rounded-lg p-6 transition-smooth hover:shadow-lg hover:shadow-signal/5 ${className}`}
    >
      {children}
    </div>
  );
}

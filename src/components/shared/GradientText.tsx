import React from 'react';
import { cn } from '@/lib/utils';

interface GradientTextProps {
  children: React.ReactNode;
  className?: string;
  from?: string;
  via?: string;
  to?: string;
}

export function GradientText({
  children,
  className,
  from = 'from-primary',
  via = 'via-purple-500',
  to = 'to-cyan-500',
}: GradientTextProps) {
  return (
    <span
      className={cn(
        'bg-gradient-to-r bg-clip-text text-transparent',
        from,
        via,
        to,
        className
      )}
    >
      {children}
    </span>
  );
}

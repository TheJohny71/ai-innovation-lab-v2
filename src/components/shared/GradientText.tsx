'use client';

import React from 'react';
import { cn } from '@/lib/utils';

interface GradientTextProps {
  children: React.ReactNode;
  className?: string;
}

export function GradientText({ children, className = '' }: GradientTextProps) {
  const baseGradient =
    'bg-clip-text text-transparent font-bold bg-gradient-paint';

  return (
    <span className={cn(baseGradient, className, 'relative')}>{children}</span>
  );
}

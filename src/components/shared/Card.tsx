'use client';

import React from 'react';
import { cn } from '@/lib/utils';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
  glow?: boolean;
  gradient?: string;
}

export function Card({
  children,
  className = '',
  hover = false,
  glow = false,
  gradient,
}: CardProps) {
  return (
    <div
      className={cn(
        'rounded-xl border border-white/10 bg-gray-900/50 backdrop-blur-sm transition-all duration-300',
        hover && 'hover:scale-105 hover:border-white/20',
        glow && `shadow-lg ${gradient ? gradient : 'shadow-indigo-500/20'}`,
        className
      )}
    >
      {children}
    </div>
  );
}

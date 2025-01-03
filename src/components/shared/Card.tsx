// Button.tsx
'use client';

import React from 'react';
import { cn } from '@/lib/utils';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'default' | 'outline';
  className?: string;
}

export function Button({
  variant = 'default',
  className,
  children,
  ...props
}: ButtonProps) {
  return (
    <button
      className={cn(
        'inline-flex items-center justify-center rounded-lg px-4 py-2 text-sm font-medium transition-colors',
        variant === 'default' && 'bg-blue-500 text-white hover:bg-blue-600',
        variant === 'outline' &&
          'border border-white/10 bg-transparent hover:bg-white/5',
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}

// Card.tsx
'use client';

import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
  glow?: boolean;
}

export function Card({
  children,
  className = '',
  hover = false,
  glow = false,
}: CardProps) {
  return (
    <div
      className={`rounded-lg border border-white/10 bg-gray-800/80 backdrop-blur transition-all ${
        hover
          ? 'hover:border-gray-600 hover:bg-gray-800/90 hover:shadow-lg'
          : ''
      } ${glow ? 'shadow-lg shadow-blue-500/20' : ''} ${className}`}
    >
      {children}
    </div>
  );
}

'use client';

import React from 'react';
import { cn } from '@/lib/utils';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'default' | 'outline' | 'gradient';
  className?: string;
  children?: React.ReactNode;  // Added this line
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
        'inline-flex items-center justify-center rounded-lg px-4 py-2 text-sm font-medium transition-all duration-300',
        variant === 'default' && 'bg-indigo-500 text-white hover:bg-indigo-600',
        variant === 'outline' &&
          'border border-white/10 bg-transparent hover:bg-white/5',
        variant === 'gradient' &&
          'bg-gradient-to-r from-indigo-500 to-cyan-400 text-white hover:opacity-90',
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}
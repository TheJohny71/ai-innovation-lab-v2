"use client";

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
        variant === 'outline' && 'border border-white/10 bg-transparent hover:bg-white/5',
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}

// src/components/shared/Button.tsx
'use client';

import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'default' | 'outline';
  className?: string;
  children: React.ReactNode;
}

export function Button({
  variant = 'default',
  className = '',
  children,
  ...props
}: ButtonProps) {
  const baseClasses =
    'inline-flex items-center px-4 py-2 rounded-lg text-sm font-medium transition-colors';
  const variantClasses = {
    default: 'bg-indigo-500 text-white hover:bg-indigo-600',
    outline: 'border border-white/10 hover:bg-white/5',
  };

  const classes = [baseClasses, variantClasses[variant], className]
    .filter(Boolean)
    .join(' ');

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
}

'use client';

import React from 'react';

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
  const classes = [
    'rounded-xl border border-white/10 backdrop-blur-sm transition-all duration-300',
    hover &&
      'hover:scale-105 hover:border-purple-400/20 hover:shadow-lg hover:shadow-purple-500/10',
    glow &&
      `shadow-lg ${gradient ? gradient : 'shadow-purple-500/20'} animate-card-float`,
    gradient || 'bg-slate-800/40',
    className,
  ]
    .filter(Boolean)
    .join(' ');

  return <div className={classes}>{children}</div>;
}

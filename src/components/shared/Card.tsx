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
        hover ? 'hover:border-gray-600 hover:shadow-lg hover:bg-gray-800/90' : ''
      } ${
        glow ? 'shadow-lg shadow-blue-500/20' : ''
      } ${className}`}
    >
      {children}
    </div>
  );
}

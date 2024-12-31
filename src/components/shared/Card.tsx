'use client';
import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
}

export function Card({ children, className = '' }: CardProps) {
  return (
    <div 
      className={`
        p-6 rounded-2xl
        bg-gradient-to-br from-gray-900/50 to-gray-900/30
        backdrop-blur-xl
        border border-gray-700/30
        shadow-xl
        ${className}
      `}
    >
      {children}
    </div>
  );
}

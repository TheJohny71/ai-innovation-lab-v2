import React from 'react';

interface CardProps {
  children: React.ReactNode;
  hover?: boolean;
  className?: string;
}

export function Card({ children, hover = false, className = '' }: CardProps) {
  return (
    <div 
      className={`
        rounded-xl 
        border border-white/10 
        bg-gray-900/40 
        backdrop-blur-sm 
        p-6
        ${hover ? 'hover:bg-gray-900/60 transition-colors' : ''} 
        ${className}
      `}
    >
      {children}
    </div>
  );
}

'use client';

import React from 'react';
import { type LucideIcon } from 'lucide-react';

interface AnimatedServiceBoxProps {
  icon: LucideIcon;
  title: string;
  color: 'purple' | 'blue' | 'teal';
  animationDelay?: number;
}

export function AnimatedServiceBox({
  icon: Icon,
  title,
  color,
  animationDelay = 0,
}: AnimatedServiceBoxProps) {
  const colorMap = {
    purple: {
      border: 'border-purple-500',
      text: 'text-purple-400',
      glow: 'shadow-purple-500/20',
    },
    blue: {
      border: 'border-blue-500',
      text: 'text-blue-400',
      glow: 'shadow-blue-500/20',
    },
    teal: {
      border: 'border-teal-500',
      text: 'text-teal-400',
      glow: 'shadow-teal-500/20',
    },
  };

  return (
    <div
      className="group relative"
      style={{
        animation: 'float 6s ease-in-out infinite',
        animationDelay: `${animationDelay}s`,
      }}
    >
      <div
        className={`relative flex flex-col items-center justify-center overflow-hidden 
                   rounded-xl border ${colorMap[color].border} bg-opacity-5 
                   p-6 backdrop-blur-sm transition-all duration-300 
                   hover:scale-105 hover:shadow-lg ${colorMap[color].glow}
                   h-[160px] w-[220px]`}
      >
        <div className={`mb-4 ${colorMap[color].text} relative`}>
          <div
            className="absolute -inset-1 animate-pulse opacity-30"
            style={{
              background: `radial-gradient(circle, ${color === 'purple' ? '#A855F7' : color === 'blue' ? '#3B82F6' : '#2DD4BF'} 0%, transparent 70%)`,
            }}
          />
          <Icon className="h-8 w-8 relative z-10 animate-bounce" />
        </div>
        <h3 className="text-center text-sm font-medium text-gray-200">
          {title.split(' ').map((word, i) => (
            <div key={i} className="leading-loose">
              {word}
            </div>
          ))}
        </h3>
      </div>
    </div>
  );
}

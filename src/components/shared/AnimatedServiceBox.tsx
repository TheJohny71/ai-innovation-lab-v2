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
    },
    blue: {
      border: 'border-blue-500',
      text: 'text-blue-400',
    },
    teal: {
      border: 'border-teal-500',
      text: 'text-teal-400',
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
                   p-4 backdrop-blur-sm transition-all duration-300 
                   hover:scale-105 h-[120px] w-[180px]`}
      >
        <div className={`mb-3 ${colorMap[color].text}`}>
          <Icon className="h-6 w-6" />
        </div>
        <h3 className="text-center text-sm font-medium text-gray-200">
          {title.split(' ').map((word, i) => (
            <div key={i}>{word}</div>
          ))}
        </h3>
      </div>
    </div>
  );
}

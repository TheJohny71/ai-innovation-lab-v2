'use client';

import React from 'react';
import { type LucideIcon } from 'lucide-react';

interface AnimatedServiceBoxProps {
  icon: LucideIcon;
  title: string;
  color: 'purple' | 'blue' | 'teal';
}

export function AnimatedServiceBox({
  icon: Icon,
  title,
  color,
}: AnimatedServiceBoxProps) {
  const colorMap = {
    purple: {
      border: 'border-purple-500',
      text: 'text-purple-400',
      iconClass: 'animate-pulse-circle',
    },
    blue: {
      border: 'border-blue-500',
      text: 'text-blue-400',
      iconClass: 'animate-wave',
    },
    teal: {
      border: 'border-teal-500',
      text: 'text-teal-400',
      iconClass: 'animate-sparkle',
    },
  };

  return (
    <div className="relative">
      <div
        className={`relative flex flex-col items-center justify-center 
                   rounded-xl border ${colorMap[color].border} bg-opacity-5 
                   backdrop-blur-sm transition-all duration-300 
                   h-[140px] w-[200px]`}
      >
        <div className={`mb-4 ${colorMap[color].text} relative`}>
          {/* Custom animated icon container */}
          <div className={`${colorMap[color].iconClass}`}>
            <Icon className="h-6 w-6" />
          </div>
        </div>
        <h3 className="text-center text-sm font-medium text-gray-200">
          {title.split(' ').map((word, i) => (
            <div key={i} className="leading-relaxed">
              {word}
            </div>
          ))}
        </h3>
      </div>
    </div>
  );
}

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
      iconBg: 'bg-purple-500',
    },
    blue: {
      border: 'border-blue-500',
      text: 'text-blue-400',
      iconBg: 'bg-blue-500',
    },
    teal: {
      border: 'border-teal-500',
      text: 'text-teal-400',
      iconBg: 'bg-teal-500',
    },
  };

  return (
    <div className="relative">
      <div
        className={`relative flex h-[120px] w-[200px] flex-col items-center justify-center
                   rounded-xl border ${colorMap[color].border} bg-opacity-5 
                   backdrop-blur-sm`}
      >
        {/* Enhanced Icon Animations */}
        <div className={`relative mb-3 ${colorMap[color].text}`}>
          {color === 'purple' && (
            <>
              {/* Concentric circles animation for Enhanced Client Service */}
              <div className="absolute inset-0 animate-ping rounded-full border-2 border-purple-500 opacity-20" />
              <div className="absolute inset-[-4px] animate-pulse rounded-full border border-purple-500 opacity-30" />
              <Icon className="relative h-6 w-6 animate-pulse" />
            </>
          )}

          {color === 'blue' && (
            <>
              {/* Wave animation for Accelerated Workflows */}
              <div className="absolute inset-0 overflow-hidden">
                <div
                  className={`absolute h-8 w-8 animate-[wave_2s_ease-in-out_infinite] ${colorMap[color].iconBg} opacity-20 blur-sm`}
                />
              </div>
              <Icon className="relative h-6 w-6 animate-bounce" />
            </>
          )}

          {color === 'teal' && (
            <>
              {/* Sparkle animation for Talent Acceleration */}
              <div className="absolute inset-[-8px] animate-spin-slow">
                <div
                  className={`h-full w-full rounded-full ${colorMap[color].iconBg} opacity-20 blur-sm`}
                />
              </div>
              <Icon className="relative h-6 w-6 animate-pulse" />
            </>
          )}
        </div>

        {/* Card Title */}
        <div className="text-center">
          {title.split(' ').map((word, i) => (
            <div key={i} className="text-sm font-medium text-gray-200">
              {word}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

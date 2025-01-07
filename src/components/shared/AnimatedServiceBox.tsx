'use client';

import React from 'react';
import { type LucideIcon } from 'lucide-react';

interface AnimatedServiceBoxProps {
  icon: LucideIcon;
  className?: string;
  title: string;
  description: string;
  color: 'purple' | 'blue' | 'teal';
  animationDelay?: number;
}

export function AnimatedServiceBox({
  icon: Icon,
  title,
  description,
  color,
  animationDelay = 0,
}: AnimatedServiceBoxProps) {
  const colorMap = {
    purple: {
      border: 'border-purple-500',
      bg: 'bg-purple-500',
      text: 'text-purple-400',
      glow: '#8B5CF6',
    },
    blue: {
      border: 'border-blue-500',
      bg: 'bg-blue-500',
      text: 'text-blue-400',
      glow: '#3B82F6',
    },
    teal: {
      border: 'border-teal-500',
      bg: 'bg-teal-500',
      text: 'text-teal-400',
      glow: '#2DD4BF',
    },
  };

  return (
    <div
      className="group relative"
      style={{
        animation: 'float 8s ease-in-out infinite',
        animationDelay: `${animationDelay}s`,
      }}
    >
      <div
        className={`relative overflow-hidden rounded-xl border ${colorMap[color].border} 
                   ${colorMap[color].bg} bg-opacity-5 p-8 backdrop-blur-sm 
                   transition-all duration-500 hover:scale-[1.02]`}
      >
        <div className="relative mb-6">
          <div
            className={`absolute inset-0 animate-pulse rounded-full ${colorMap[color].bg} 
                       opacity-20 blur-sm`}
          />
          <div className="relative">
            {color === 'purple' && (
              <div className="flex items-center justify-center">
                <div className={`h-12 w-12 ${colorMap[color].text}`}>
                  <svg viewBox="0 0 40 40" className="h-full w-full">
                    <circle
                      cx="20"
                      cy="20"
                      r="15"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <animate
                        attributeName="stroke-dasharray"
                        from="0,100"
                        to="100,0"
                        dur="3s"
                        repeatCount="indefinite"
                      />
                    </circle>
                    <circle
                      cx="20"
                      cy="20"
                      r="10"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeDasharray="4,4"
                    />
                    <circle
                      cx="20"
                      cy="20"
                      r="5"
                      fill="currentColor"
                      opacity="0.5"
                    >
                      <animate
                        attributeName="opacity"
                        values="0.5;0.8;0.5"
                        dur="2s"
                        repeatCount="indefinite"
                      />
                    </circle>
                  </svg>
                </div>
              </div>
            )}
            {color === 'blue' && (
              <div className={`h-12 w-12 ${colorMap[color].text}`}>
                <svg viewBox="0 0 40 40" className="h-full w-full">
                  <path
                    d="M5,20 C13,15 27,25 35,20"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <animate
                      attributeName="d"
                      values="M5,20 C13,15 27,25 35,20;
                             M5,20 C13,25 27,15 35,20;
                             M5,20 C13,15 27,25 35,20"
                      dur="3s"
                      repeatCount="indefinite"
                    />
                  </path>
                  <path
                    d="M5,25 C13,20 27,30 35,25"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    opacity="0.6"
                  />
                  <path
                    d="M5,30 C13,25 27,35 35,30"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    opacity="0.4"
                  />
                </svg>
              </div>
            )}
            {color === 'teal' && (
              <div className={`h-12 w-12 ${colorMap[color].text}`}>
                <svg viewBox="0 0 40 40" className="h-full w-full">
                  <path
                    d="M8,15 C13,10 18,10 23,15 C28,20 33,20 38,15
                       C33,10 28,10 23,15 C18,20 13,20 8,15Z"
                    stroke="currentColor"
                    strokeWidth="2"
                    fill="none"
                  >
                    <animate
                      attributeName="stroke-dasharray"
                      values="0,100;100,0"
                      dur="3s"
                      repeatCount="indefinite"
                    />
                  </path>
                </svg>
              </div>
            )}
          </div>
        </div>

        <h3 className="mb-3 text-xl font-semibold text-gray-100">{title}</h3>
        <p className="text-gray-300">{description}</p>

        <div
          className={`absolute inset-0 -z-10 ${colorMap[color].bg} opacity-0 blur-xl
                     transition-opacity duration-300 group-hover:opacity-20`}
        />
      </div>
    </div>
  );
}

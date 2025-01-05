'use client';

import React from 'react';
import { type LucideIcon } from 'lucide-react';

interface AnimatedServiceBoxProps {
  icon: LucideIcon;
  className?: string;
  title: string;
  description: string;
  color: string;
  animationDelay?: number,
}

export function AnimatedServiceBox({
  icon: Icon,
  title,
  description,
  color,
  animationDelay = 0,
}: AnimatedServiceBoxProps) {
  return (
    <div
      className="group relative"
      style={{
        animation: `float 8s ease-in-out infinite`,
        animationDelay: `${animationDelay}s`,
      }}
    >
      <div
        className={`relative overflow-hidden rounded-xl border bg-opacity-5 p-6
                   backdrop-blur-sm transition-all duration-300
                   border-${color}-500/10 bg-${color}-500`}
      >
        {/* Animated icon container */}
        <div className="relative mb-4">
          <div
            className={`absolute inset-0 opacity-20 blur-sm bg-${color}-500
                       animate-pulse rounded-full`}
          />
          <div className="relative">
            <Icon className={`h-12 w-12 text-${color}-400`} />
          </div>
        </div>

        {/* Title with gradient effect */}
        <h3 className="mb-2 text-xl font-semibold text-gray-100">{title}</h3>

        {/* Description */}
        <p className="text-gray-300">{description}</p>

        {/* Animated border glow effect */}
        <div
          className={`absolute inset-0 -z-10 opacity-0 transition-opacity
                     duration-300 group-hover:opacity-20 bg-${color}-500 blur-xl`}
        />
      </div>
    </div>
  );
}

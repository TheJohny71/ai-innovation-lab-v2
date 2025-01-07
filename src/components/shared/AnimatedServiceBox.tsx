'use client';

import React from 'react';
import { type LucideIcon } from 'lucide-react';

interface AnimatedServiceBoxProps {
  icon: LucideIcon;
  title: string;
  color: 'purple' | 'blue' | 'teal';
}

export function AnimatedServiceBox({ title, color }: AnimatedServiceBoxProps) {
  // Updated color palette with more sophisticated combinations
  const colorMap = {
    purple: {
      stroke: '#BD4BF9', // Vivid electric purple
      fill: 'rgba(189, 75, 249, 0.03)',
      background: '#1E1133', // Deep royal purple background
      glow: 'rgba(189, 75, 249, 0.25)',
      gradient: {
        start: '#BD4BF9',
        end: '#9B51E0', // Softer purple for depth
      },
    },
    blue: {
      stroke: '#0EA5E9', // Vibrant electric blue
      fill: 'rgba(14, 165, 233, 0.03)',
      background: '#0F2942', // Rich navy background
      glow: 'rgba(14, 165, 233, 0.25)',
      gradient: {
        start: '#0EA5E9',
        end: '#2563EB', // Deeper blue for contrast
      },
    },
    teal: {
      stroke: '#06B6D4', // Bright cyan
      fill: 'rgba(6, 182, 212, 0.03)',
      background: '#123C3C', // Deep teal background
      glow: 'rgba(6, 182, 212, 0.25)',
      gradient: {
        start: '#06B6D4',
        end: '#0D9488', // Darker teal for depth
      },
    },
  };

  const [firstWord, ...restWords] = title.split(' ');
  const secondLine = restWords.join(' ');

  return (
    <svg width="260" height="160" viewBox="-130 -80 260 160">
      <defs>
        <filter
          id={`glow-${color}`}
          x="-50%"
          y="-50%"
          width="200%"
          height="200%"
        >
          <feGaussianBlur in="SourceGraphic" stdDeviation="2" result="blur" />
          <feColorMatrix
            in="blur"
            type="matrix"
            values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7"
          />
        </filter>

        {/* Enhanced gradient with new color stops */}
        <linearGradient
          id={`card-gradient-${color}`}
          x1="0%"
          y1="0%"
          x2="100%"
          y2="100%"
        >
          <stop
            offset="0%"
            stopColor={colorMap[color].background}
            stopOpacity="0.95"
          />
          <stop
            offset="100%"
            stopColor={colorMap[color].background}
            stopOpacity="0.85"
          />
        </linearGradient>

        {/* Enhanced stroke gradient */}
        <linearGradient
          id={`stroke-gradient-${color}`}
          x1="0%"
          y1="0%"
          x2="100%"
          y2="100%"
        >
          <stop
            offset="0%"
            stopColor={colorMap[color].gradient.start}
            stopOpacity="1"
          />
          <stop
            offset="100%"
            stopColor={colorMap[color].gradient.end}
            stopOpacity="1"
          />
        </linearGradient>

        {/* Enhanced glow effect */}
        <filter id={`enhanced-glow-${color}`}>
          <feGaussianBlur stdDeviation="3" result="coloredBlur" />
          <feFlood floodColor={colorMap[color].glow} result="glowColor" />
          <feComposite
            in="glowColor"
            in2="coloredBlur"
            operator="in"
            result="softGlow"
          />
          <feMerge>
            <feMergeNode in="softGlow" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      {/* Card Background with enhanced styling */}
      <rect
        x="-130"
        y="-80"
        width="260"
        height="160"
        rx="16"
        fill={`url(#card-gradient-${color})`}
        stroke={`url(#stroke-gradient-${color})`}
        strokeWidth="1.5"
        filter={`url(#enhanced-glow-${color})`}
      >
        <animate
          attributeName="y"
          values="-80;-82;-80"
          dur="12s"
          repeatCount="indefinite"
        />
      </rect>

      {/* Animated Icons with updated colors */}
      {color === 'purple' && (
        <g transform="translate(0, -30)">
          <circle
            cx="0"
            cy="0"
            r="18"
            stroke={`url(#stroke-gradient-${color})`}
            strokeWidth="2"
            fill="none"
          >
            <animate
              attributeName="stroke-dasharray"
              values="0,120;120,120"
              dur="6s"
              repeatCount="indefinite"
            />
          </circle>
          <circle
            cx="0"
            cy="0"
            r="12"
            fill="none"
            stroke={colorMap[color].gradient.start}
            strokeWidth="1.5"
            strokeDasharray="4,4"
          />
          <circle
            cx="0"
            cy="0"
            r="6"
            fill={colorMap[color].gradient.start}
            opacity="0.6"
          >
            <animate
              attributeName="opacity"
              values="0.6;0.9;0.6"
              dur="4s"
              repeatCount="indefinite"
            />
          </circle>
        </g>
      )}

      {color === 'blue' && (
        <g transform="translate(0, -30)">
          <path
            d="M-18,-12 C0,-12 0,0 18,0"
            stroke={`url(#stroke-gradient-${color})`}
            strokeWidth="2"
            fill="none"
            opacity="0.8"
          >
            <animate
              attributeName="d"
              values="M-18,-12 C0,-12 0,0 18,0;M-18,-6 C0,-6 0,6 18,6;M-18,-12 C0,-12 0,0 18,0"
              dur="6s"
              repeatCount="indefinite"
            />
          </path>
          <path
            d="M-18,0 C0,0 0,12 18,12"
            stroke={colorMap[color].gradient.start}
            strokeWidth="2"
            fill="none"
            opacity="0.6"
          />
        </g>
      )}

      {color === 'teal' && (
        <g transform="translate(0, -30)">
          <path
            d="M-15,-6 C-9,-12 -2,-12 4,-6 C10,0 16,0 22,-6"
            stroke={`url(#stroke-gradient-${color})`}
            strokeWidth="2"
            fill="none"
          >
            <animate
              attributeName="stroke-dasharray"
              values="0,120;120,0"
              dur="12s"
              repeatCount="indefinite"
            />
          </path>
        </g>
      )}

      {/* Title Text with enhanced contrast */}
      <text
        y="20"
        fill="#F3F4F6"
        textAnchor="middle"
        className="text-xl font-medium tracking-wide"
      >
        {firstWord}
      </text>
      <text
        y="50"
        fill="#F3F4F6"
        textAnchor="middle"
        className="text-xl font-medium tracking-wide"
      >
        {secondLine}
      </text>
    </svg>
  );
}

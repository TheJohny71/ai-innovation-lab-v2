'use client';

import React from 'react';
import { type LucideIcon } from 'lucide-react';

interface AnimatedServiceBoxProps {
  icon: LucideIcon;
  title: string;
  color: 'purple' | 'blue' | 'teal';
}

export function AnimatedServiceBox({ title, color }: AnimatedServiceBoxProps) {
  const colorMap = {
    purple: {
      stroke: '#8B5CF6',
      fill: 'rgba(139, 92, 246, 0.03)',
      background: '#1a1432',
    },
    blue: {
      stroke: '#3B82F6',
      fill: 'rgba(59, 130, 246, 0.03)',
      background: '#141d32',
    },
    teal: {
      stroke: '#2DD4BF',
      fill: 'rgba(45, 212, 191, 0.03)',
      background: '#143232',
    },
  };

  const [firstWord, ...restWords] = title.split(' ');
  const secondLine = restWords.join(' ');

  return (
    <svg width="220" height="140" viewBox="-110 -70 220 140">
      <defs>
        <filter
          id={`glow-${color}`}
          x="-50%"
          y="-50%"
          width="200%"
          height="200%"
        >
          <feGaussianBlur in="SourceGraphic" stdDeviation="1" result="blur" />
          <feColorMatrix
            in="blur"
            type="matrix"
            values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 15 -4"
          />
        </filter>

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
            stopOpacity="1"
          />
          <stop
            offset="100%"
            stopColor={colorMap[color].background}
            stopOpacity="0.8"
          />
        </linearGradient>
      </defs>

      {/* Card Background */}
      <rect
        x="-110"
        y="-70"
        width="220"
        height="140"
        rx="15"
        fill={`url(#card-gradient-${color})`}
        stroke={colorMap[color].stroke}
        strokeWidth="1"
        filter={`url(#glow-${color})`}
      >
        <animate
          attributeName="y"
          values="-70;-72;-70"
          dur="12s"
          repeatCount="indefinite"
        />
      </rect>

      {/* Animated Icons */}
      {color === 'purple' && (
        <g transform="translate(0, -25)">
          <circle
            cx="0"
            cy="0"
            r="15"
            stroke={colorMap[color].stroke}
            strokeWidth="2"
            fill="none"
          >
            <animate
              attributeName="stroke-dasharray"
              values="0,100;100,100"
              dur="6s"
              repeatCount="indefinite"
            />
          </circle>
          <circle
            cx="0"
            cy="0"
            r="10"
            fill="none"
            stroke={colorMap[color].stroke}
            strokeWidth="1.5"
            strokeDasharray="4,4"
          />
          <circle
            cx="0"
            cy="0"
            r="5"
            fill={colorMap[color].stroke}
            opacity="0.5"
          >
            <animate
              attributeName="opacity"
              values="0.5;0.8;0.5"
              dur="4s"
              repeatCount="indefinite"
            />
          </circle>
        </g>
      )}

      {color === 'blue' && (
        <g transform="translate(0, -25)">
          <path
            d="M-15,-10 C0,-10 0,0 15,0"
            stroke={colorMap[color].stroke}
            strokeWidth="2"
            fill="none"
            opacity="0.8"
          >
            <animate
              attributeName="d"
              values="M-15,-10 C0,-10 0,0 15,0;M-15,-5 C0,-5 0,5 15,5;M-15,-10 C0,-10 0,0 15,0"
              dur="6s"
              repeatCount="indefinite"
            />
          </path>
          <path
            d="M-15,0 C0,0 0,10 15,10"
            stroke={colorMap[color].stroke}
            strokeWidth="2"
            fill="none"
            opacity="0.6"
          />
        </g>
      )}

      {color === 'teal' && (
        <g transform="translate(0, -25)">
          <path
            d="M-12,-5 C-7,-10 -2,-10 3,-5 C8,0 13,0 18,-5"
            stroke={colorMap[color].stroke}
            strokeWidth="2"
            fill="none"
          >
            <animate
              attributeName="stroke-dasharray"
              values="0,100;100,0"
              dur="12s"
              repeatCount="indefinite"
            />
          </path>
        </g>
      )}

      {/* Title Text */}
      <text
        y="15"
        fill="#E5E7EB"
        textAnchor="middle"
        className="text-lg font-medium"
      >
        {firstWord}
      </text>
      <text
        y="45"
        fill="#E5E7EB"
        textAnchor="middle"
        className="text-lg font-medium"
      >
        {secondLine}
      </text>
    </svg>
  );
}

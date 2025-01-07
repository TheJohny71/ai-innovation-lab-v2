'use client';

import React from 'react';
import { type LucideIcon } from 'lucide-react';

interface AnimatedServiceBoxProps {
  icon: LucideIcon;
  title: string;
  color: 'purple' | 'blue' | 'teal';
}

export function AnimatedServiceBox({
  title,
  color,
}: AnimatedServiceBoxProps) {
  // Configuration for different card types
  const colorMap = {
    purple: {
      stroke: '#8B5CF6',
      fill: 'rgba(139, 92, 246, 0.05)',
    },
    blue: {
      stroke: '#3B82F6',
      fill: 'rgba(59, 130, 246, 0.05)',
    },
    teal: {
      stroke: '#2DD4BF',
      fill: 'rgba(45, 212, 191, 0.05)',
    },
  };

  // Split title into two lines
  const [firstWord, ...restWords] = title.split(' ');
  const secondLine = restWords.join(' ');

  const renderIcon = (color: 'purple' | 'blue' | 'teal') => {
    if (color === 'purple') {
      return (
        <g>
          <circle cx="0" cy="-30" r="15" stroke={colorMap[color].stroke} strokeWidth="2">
            <animate 
              attributeName="stroke-dasharray" 
              values="0,100;100,100" 
              dur="6s" 
              repeatCount="indefinite"
            />
          </circle>
          <circle cx="0" cy="-30" r="10" fill="none" stroke={colorMap[color].stroke} strokeWidth="1.5" strokeDasharray="4,4"/>
          <circle cx="0" cy="-30" r="5" fill={colorMap[color].stroke} opacity="0.5">
            <animate 
              attributeName="opacity" 
              values="0.5;0.8;0.5" 
              dur="4s" 
              repeatCount="indefinite"
            />
          </circle>
        </g>
      );
    }

    if (color === 'blue') {
      return (
        <g transform="translate(0, -20)">
          <path 
            d="M-15,-25 C0,-25 0,-15 15,-15" 
            stroke={colorMap[color].stroke} 
            strokeWidth="2" 
            fill="none" 
            opacity="0.8"
          >
            <animate 
              attributeName="d" 
              values="M-15,-25 C0,-25 0,-15 15,-15;M-15,-20 C0,-20 0,-10 15,-10;M-15,-25 C0,-25 0,-15 15,-15" 
              dur="6s" 
              repeatCount="indefinite"
            />
          </path>
          <path 
            d="M-15,-15 C0,-15 0,-5 15,-5" 
            stroke={colorMap[color].stroke} 
            strokeWidth="2" 
            fill="none" 
            opacity="0.6"
          />
          <path 
            d="M-15,-5 C0,-5 0,5 15,5" 
            stroke={colorMap[color].stroke} 
            strokeWidth="2" 
            fill="none" 
            opacity="0.4"
          />
        </g>
      );
    }

    return (
      <g transform="translate(0, -20)">
        <path 
          d="M-12,-15 C-7,-20 -2,-20 3,-15 C8,-10 13,-10 18,-15 C13,-20 8,-20 3,-15 C-2,-10 -7,-10 -12,-15Z" 
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
    );
  };

  return (
    <div className="relative">
      <svg width="220" height="140" viewBox="-110 -70 220 140">
        <defs>
          <filter id={`glow-${color}`} x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur in="SourceGraphic" stdDeviation="2" result="blur" />
            <feColorMatrix 
              in="blur" 
              type="matrix" 
              values="1 0 0 0 0.6  0 0 0 0 0.2  0 0 0 0 1  0 0 0 18 -7" 
              result="glow" 
            />
            <feMerge>
              <feMergeNode in="glow" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        <rect 
          x="-110" 
          y="-70" 
          width="220" 
          height="140" 
          rx="15"
          fill={colorMap[color].fill}
          stroke={colorMap[color].stroke} 
          strokeWidth="1"
          filter={`url(#glow-${color})`}
        >
          <animate 
            attributeName="y" 
            values="-70;-73;-70"
            dur="12s"
            repeatCount="indefinite"
          />
        </rect>

        {renderIcon(color)}

        <text y="20" fill="#E5E7EB" 
              style={{ fontSize: '20px', letterSpacing: '1px', textAnchor: 'middle' }}>
          {firstWord}
        </text>
        <text y="50" fill="#E5E7EB" 
              style={{ fontSize: '20px', letterSpacing: '1px', textAnchor: 'middle' }}>
          {secondLine}
        </text>
      </svg>
    </div>
  );
}
'use client';

import React from 'react';

export function GradientBackground() {
  return (
    <div className="fixed inset-0 -z-10">
      <svg className="h-full w-full" preserveAspectRatio="xMidYMid slice">
        <defs>
          <linearGradient
            id="backgroundGradient"
            x1="0%"
            y1="0%"
            x2="0%"
            y2="100%"
          >
            <stop offset="0%" stopColor="#0F1729" stopOpacity="1" />
            <stop offset="50%" stopColor="#162033" stopOpacity="1" />
            <stop offset="100%" stopColor="#0F1729" stopOpacity="1" />
          </linearGradient>

          <filter id="softGlow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur in="SourceGraphic" stdDeviation="2" />
          </filter>

          <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
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

        <rect width="100%" height="100%" fill="url(#backgroundGradient)"/>
        
        <g opacity="0.4">
          {[...Array(4)].map((_, i) => {
            const positions = [
              { cx: 200, cy: 200, r: 3, color: '#3B82F6' },
              { cx: 400, cy: 600, r: 2, color: '#2DD4BF' },
              { cx: 800, cy: 300, r: 4, color: '#3B82F6' },
              { cx: 1000, cy: 500, r: 3, color: '#2DD4BF' }
            ];
            const pos = positions[i];
            
            return (
              <circle
                key={i}
                cx={pos.cx}
                cy={pos.cy}
                r={pos.r}
                fill={pos.color}
                filter="url(#softGlow)"
                opacity="0.4"
              >
                <animate
                  attributeName="cy"
                  values={`${pos.cy};${pos.cy - 50};${pos.cy}`}
                  dur={`${8 + i * 1}s`}
                  repeatCount="indefinite"
                />
                <animate
                  attributeName="opacity"
                  values="0.4;0.6;0.4"
                  dur={`${8 + i * 1}s`}
                  repeatCount="indefinite"
                />
              </circle>
            );
          })}
        </g>
      </svg>
    </div>
  );
}

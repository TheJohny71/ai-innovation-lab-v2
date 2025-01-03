'use client';

import React from 'react';

export function GradientBackground() {
  return (
    <div className="fixed inset-0 -z-10">
      <svg className="h-full w-full" preserveAspectRatio="xMidYMid slice">
        <defs>
          <linearGradient id="backgroundGradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#0A1128" stopOpacity="1" />
            <stop offset="50%" stopColor="#1B2B4D" stopOpacity="1" />
            <stop offset="100%" stopColor="#0A1128" stopOpacity="1" />
          </linearGradient>

          <filter id="softGlow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur in="SourceGraphic" stdDeviation="4" />
            <feColorMatrix type="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7" />
          </filter>

          <filter id="particleGlow" x="-100%" y="-100%" width="300%" height="300%">
            <feGaussianBlur in="SourceGraphic" stdDeviation="6" />
            <feColorMatrix type="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 15 -6" />
          </filter>

          <radialGradient id="particleGradient" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#4F46E5" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#4F46E5" stopOpacity="0" />
          </radialGradient>
        </defs>

        <rect width="100%" height="100%" fill="url(#backgroundGradient)" />

        <g className="particles">
          {[...Array(20)].map((_, i) => (
            <circle
              key={i}
              className={`particle-${i}`}
              r={Math.random() * 3 + 1}
              fill={Math.random() > 0.5 ? '#4F46E5' : '#06B6D4'}
              filter="url(#particleGlow)"
              opacity={Math.random() * 0.5 + 0.2}
            >
              <animate
                attributeName="cx"
                values={`${Math.random() * 100}%;${Math.random() * 100}%;${Math.random() * 100}%`}
                dur={`${Math.random() * 20 + 10}s`}
                repeatCount="indefinite"
              />
              <animate
                attributeName="cy"
                values={`${Math.random() * 100}%;${Math.random() * 100}%;${Math.random() * 100}%`}
                dur={`${Math.random() * 20 + 10}s`}
                repeatCount="indefinite"
              />
              <animate
                attributeName="opacity"
                values={`${Math.random() * 0.5 + 0.2};${Math.random() * 0.5 + 0.4};${Math.random() * 0.5 + 0.2}`}
                dur={`${Math.random() * 8 + 4}s`}
                repeatCount="indefinite"
              />
            </circle>
          ))}
        </g>
      </svg>
    </div>
  );
}

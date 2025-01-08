'use client';

import React from 'react';

export function GradientBackground() {
  return (
    <div className="fixed inset-0 -z-10">
      <div className="absolute inset-0 animated-gradient opacity-90" />
      <svg className="absolute inset-0 h-full w-full opacity-30" preserveAspectRatio="xMidYMid slice">
        <defs>
          <filter id="softGlow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur in="SourceGraphic" stdDeviation="2" />
          </filter>

          <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur in="SourceGraphic" stdDeviation="2" result="blur" />
            <feColorMatrix
              in="blur"
              type="matrix"
              values="1 0 0 0 0.6 0 0 0 0 0.2 0 0 0 0 1 0 0 0 18 -7"
              result="glow"
            />
            <feMerge>
              <feMergeNode in="glow" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>
        
        {/* Particle effect */}
        {[...Array(20)].map((_, i) => (
          <circle
            key={i}
            cx={Math.random() * 100 + '%'}
            cy={Math.random() * 100 + '%'}
            r="1"
            fill="#4A90E2"
            filter="url(#glow)"
            opacity="0.3"
          >
            <animate
              attributeName="cy"
              values={`${Math.random() * 100}%;${Math.random() * 100}%;${Math.random() * 100}%`}
              dur={`${3 + Math.random() * 5}s`}
              repeatCount="indefinite"
            />
          </circle>
        ))}
      </svg>
    </div>
  );
}
'use client';

import React from 'react';

export function GradientBackground() {
  return (
    <div className="fixed inset-0 -z-10">
      <svg className="h-full w-full" preserveAspectRatio="xMidYMid slice">
        <defs>
          <linearGradient id="backgroundGradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#0F1729" stopOpacity="1" />
            <stop offset="50%" stopColor="#162033" stopOpacity="1" />
            <stop offset="100%" stopColor="#0F1729" stopOpacity="1" />
          </linearGradient>
          
          <filter id="softGlow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur in="SourceGraphic" stdDeviation="2" />
          </filter>
        </defs>

        <rect width="100%" height="100%" fill="url(#backgroundGradient)"/>
        
        <g opacity="0.4">
          <circle cx="20%" cy="20%" r="3" fill="#3B82F6" filter="url(#softGlow)" opacity="0.4">
            <animate attributeName="cy" values="20%;15%;20%" dur="8s" repeatCount="indefinite" />
            <animate attributeName="opacity" values="0.4;0.6;0.4" dur="8s" repeatCount="indefinite" />
          </circle>
          
          <circle cx="40%" cy="60%" r="2" fill="#2DD4BF" filter="url(#softGlow)" opacity="0.3">
            <animate attributeName="cy" values="60%;55%;60%" dur="10s" repeatCount="indefinite" />
            <animate attributeName="opacity" values="0.3;0.5;0.3" dur="10s" repeatCount="indefinite" />
          </circle>
          
          <circle cx="80%" cy="30%" r="4" fill="#3B82F6" filter="url(#softGlow)" opacity="0.35">
            <animate attributeName="cy" values="30%;25%;30%" dur="12s" repeatCount="indefinite" />
            <animate attributeName="opacity" values="0.35;0.55;0.35" dur="12s" repeatCount="indefinite" />
          </circle>
          
          <circle cx="90%" cy="50%" r="3" fill="#2DD4BF" filter="url(#softGlow)" opacity="0.4">
            <animate attributeName="cy" values="50%;45%;50%" dur="9s" repeatCount="indefinite" />
            <animate attributeName="opacity" values="0.4;0.6;0.4" dur="9s" repeatCount="indefinite" />
          </circle>
        </g>
      </svg>
    </div>
  );
}

'use client';

import React from 'react';

export function WelcomeSvg() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 800" preserveAspectRatio="xMidYMid meet" className="w-full h-full">
      <defs>
        <linearGradient id="backgroundGradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" style={{ stopColor: '#0F1729', stopOpacity: 1 }} />
          <stop offset="50%" style={{ stopColor: '#162033', stopOpacity: 1 }} />
          <stop offset="100%" style={{ stopColor: '#0F1729', stopOpacity: 1 }} />
        </linearGradient>
        
        <linearGradient id="titleGradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" style={{ stopColor: '#3B82F6', stopOpacity: 1 }} />
          <stop offset="100%" style={{ stopColor: '#2DD4BF', stopOpacity: 1 }} />
        </linearGradient>
        
        {/* Your other gradients and filters from the SVG */}
    </defs>

    {/* Background with gradient */}
    <rect width="100%" height="100%" fill="url(#backgroundGradient)"/>
    
    {/* Rest of your SVG content */}
    {/* Main content group */}
    <g transform="translate(600, 400)" textAnchor="middle">
      {/* Title section */}
      <g transform="translate(0, -150)">
        <text y="-100" fill="url(#titleGradient)" style={{ fontSize: '72px', fontWeight: 'bold' }}>
          AI Innovation Law
        </text>
        <text y="-20" fill="#E5E7EB" style={{ fontSize: '42px', fontWeight: '500', letterSpacing: '2.2px' }}>
          AI Powered Legal Innovation
        </text>
        <text y="40" fill="#E5E7EB" style={{ fontSize: '24px', letterSpacing: '1px' }}>
          Accelerating Disruption Through Cultural Mindset Change
        </text>
      </g>
      
      {/* Service boxes and navigation bar from your SVG */}
      {/* ... rest of your SVG content ... */}
    </g>
    </svg>
  );
}

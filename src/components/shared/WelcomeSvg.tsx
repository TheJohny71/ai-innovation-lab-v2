'use client';

import React from 'react';

export default function WelcomeSvg() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 800" preserveAspectRatio="xMidYMid meet" className="h-full w-full">
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
        
        {/* Filters */}
        <filter id="softGlow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur in="SourceGraphic" stdDeviation="2" />
        </filter>
        
        <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur in="SourceGraphic" stdDeviation="2" result="blur" />
            <feColorMatrix in="blur" type="matrix" values="1 0 0 0 0.6  0 0 0 0 0.2  0 0 0 0 1  0 0 0 18 -7" result="glow" />
            <feMerge>
                <feMergeNode in="glow" />
                <feMergeNode in="SourceGraphic" />
            </feMerge>
        </filter>

        <filter id="navShadow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur in="SourceAlpha" stdDeviation="3"/>
            <feOffset dx="0" dy="2" result="offsetblur"/>
            <feComponentTransfer>
                <feFuncA type="linear" slope="0.2"/>
            </feComponentTransfer>
            <feMerge> 
                <feMergeNode/>
                <feMergeNode in="SourceGraphic"/> 
            </feMerge>
        </filter>
      </defs>

      {/* Background */}
      <rect width="100%" height="100%" fill="url(#backgroundGradient)"/>
    
      {/* Animated particles */}
      <g opacity="0.4">
        {/* ... particles code ... */}
        <circle cx="200" cy="200" r="3" fill="#3B82F6" filter="url(#softGlow)" opacity="0.4">
            <animate attributeName="cy" values="200;150;200" dur="8s" repeatCount="indefinite" />
            <animate attributeName="opacity" values="0.4;0.6;0.4" dur="8s" repeatCount="indefinite" />
        </circle>
        {/* Add more particles as in your original SVG */}
      </g>

      {/* Main content */}
      <g transform="translate(600, 400)" textAnchor="middle">
        {/* Title section */}
        <g transform="translate(0, -150)">
            <text y="-100" fill="url(#titleGradient)" 
                  style={{ fontSize: '72px', fontWeight: 'bold', filter: 'drop-shadow(0 4px 8px rgba(59, 130, 246, 0.3))' }}>
                AI Innovation Law
            </text>

            <text y="-20" fill="#E5E7EB" 
                  style={{ fontSize: '42px', fontWeight: '500', letterSpacing: '2.2px' }}>
                AI Powered Legal Innovation
            </text>

            <text y="40" fill="#E5E7EB" 
                  style={{ fontSize: '24px', letterSpacing: '1px' }}>
                Accelerating Disruption Through Cultural Mindset Change
            </text>
        </g>

        {/* Service boxes */}
        {/* ... Your service boxes code ... */}

        {/* Navigation bar */}
        <g transform="translate(0, 300)">
            <rect x="-320" y="-28" width="640" height="56" rx="28" 
                  fill="rgba(59, 130, 246, 0.05)" stroke="#3B82F6" strokeWidth="0.5"
                  filter="url(#navShadow)"/>
            <text x="-240" y="8" fill="#E5E7EB" 
                  style={{ fontSize: '19px', fontWeight: '400', letterSpacing: '0.5px' }}>Welcome</text>
            <text x="-80" y="8" fill="#E5E7EB" 
                  style={{ fontSize: '19px', fontWeight: '400', letterSpacing: '0.5px' }}>Solutions</text>
            <text x="80" y="8" fill="#E5E7EB" 
                  style={{ fontSize: '19px', fontWeight: '400', letterSpacing: '0.5px' }}>Disruption</text>
            <text x="240" y="8" fill="#E5E7EB" 
                  style={{ fontSize: '19px', fontWeight: '400', letterSpacing: '0.5px' }}>Future-Ready</text>
        </g>
      </g>
    </svg>
  );
}

'use client';

import React from 'react';

export default function WelcomeSvg() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1200 800"
      preserveAspectRatio="xMidYMid meet"
      className="h-full w-full"
    >
      <defs>
        <linearGradient
          id="backgroundGradient"
          x1="0%"
          y1="0%"
          x2="0%"
          y2="100%"
        >
          <stop offset="0%" style={{ stopColor: '#0F1729', stopOpacity: 1 }} />
          <stop offset="50%" style={{ stopColor: '#162033', stopOpacity: 1 }} />
          <stop offset="100%" style={{ stopColor: '#0F1729', stopOpacity: 1 }} />
        </linearGradient>

        <linearGradient id="titleGradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" style={{ stopColor: '#3B82F6', stopOpacity: 1 }} />
          <stop offset="100%" style={{ stopColor: '#2DD4BF', stopOpacity: 1 }} />
        </linearGradient>

        <filter id="softGlow" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur in="SourceGraphic" stdDeviation="2" />
        </filter>

        <filter id="navShadow" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur in="SourceAlpha" stdDeviation="3" />
          <feOffset dx="0" dy="2" result="offsetblur" />
          <feComponentTransfer>
            <feFuncA type="linear" slope="0.2" />
          </feComponentTransfer>
          <feMerge>
            <feMergeNode />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      <rect width="100%" height="100%" fill="url(#backgroundGradient)" />

      <g transform="translate(600, 400)" textAnchor="middle">
        <g transform="translate(0, -150)">
          <text
            y="-100"
            fill="url(#titleGradient)"
            style={{
              fontSize: '72px',
              fontWeight: 'bold',
              letterSpacing: '2.2px',
            }}
          >
            AI Innovation Law
          </text>

          <text
            y="-20"
            fill="#E5E7EB"
            style={{
              fontSize: '42px',
              fontWeight: '500',
              letterSpacing: '2.2px',
            }}
          >
            AI Powered Legal Innovation
          </text>

          <text
            y="40"
            fill="#E5E7EB"
            style={{ fontSize: '24px', letterSpacing: '1px' }}
          >
            Accelerating Disruption Through Cultural Mindset Change
          </text>
        </g>

        <g transform="translate(0, 300)">
          <rect
            x="-320"
            y="-28"
            width="640"
            height="56"
            rx="28"
            fill="rgba(59, 130, 246, 0.05)"
            stroke="#3B82F6"
            strokeWidth="0.5"
            filter="url(#navShadow)"
          />
          <text
            x="-240"
            y="8"
            fill="#E5E7EB"
            style={{ fontSize: '19px', fontWeight: '400', letterSpacing: '0.5px' }}
          >
            Welcome
          </text>
          <text
            x="-80"
            y="8"
            fill="#E5E7EB"
            style={{ fontSize: '19px', fontWeight: '400', letterSpacing: '0.5px' }}
          >
            Solutions
          </text>
          <text
            x="80"
            y="8"
            fill="#E5E7EB"
            style={{ fontSize: '19px', fontWeight: '400', letterSpacing: '0.5px' }}
          >
            Disruption
          </text>
          <text
            x="240"
            y="8"
            fill="#E5E7EB"
            style={{ fontSize: '19px', fontWeight: '400', letterSpacing: '0.5px' }}
          >
            Future-Ready
          </text>
        </g>
      </g>
    </svg>
  );
}

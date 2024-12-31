import React from 'react';

export const WelcomeSvg: React.FC = () => {
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
          <stop
            offset="100%"
            style={{ stopColor: '#0F1729', stopOpacity: 1 }}
          />
        </linearGradient>

        <linearGradient id="titleGradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" style={{ stopColor: '#3B82F6', stopOpacity: 1 }} />
          <stop
            offset="100%"
            style={{ stopColor: '#2DD4BF', stopOpacity: 1 }}
          />
        </linearGradient>
      </defs>

      <rect width="100%" height="100%" fill="url(#backgroundGradient)" />

      <g transform="translate(600, 400)" textAnchor="middle">
        <text
          y="-100"
          fill="url(#titleGradient)"
          style={{ fontSize: '72px', fontWeight: 'bold' }}
        >
          AI Innovation Law
        </text>

        <text
          y="-20"
          fill="#E5E7EB"
          style={{ fontSize: '42px', fontWeight: '500' }}
        >
          AI Powered Legal Innovation
        </text>

        <text y="40" fill="#E5E7EB" style={{ fontSize: '24px' }}>
          Updated: December 31, 2024 - 21:37 UTC
        </text>
      </g>
    </svg>
  );
};

export default WelcomeSvg;

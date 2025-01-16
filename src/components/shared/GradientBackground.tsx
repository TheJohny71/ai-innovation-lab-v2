'use client';

import React from 'react';

interface GradientBackgroundProps {
  className?: string;
}

export function GradientBackground({
  className = '',
}: GradientBackgroundProps) {
  return (
    <div className={`fixed inset-0 -z-10 overflow-hidden ${className}`}>
      {/* Rich blue-black base gradient */}
      <div className="absolute inset-0 bg-[#040812]" />

      {/* Primary radial gradient for the deep blue center */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0"
          style={{
            background:
              'radial-gradient(circle at 50% 50%, rgba(13, 25, 48, 0.9) 0%, rgba(4, 8, 18, 0.95) 50%, rgba(0, 0, 0, 1) 80%)',
          }}
        />
      </div>

      {/* Deep center glow */}
      <div
        className="absolute inset-0"
        style={{
          background:
            'radial-gradient(circle at 50% 50%, #090D1F 30%, #000000 100%)',
        }}
      />

      {/* Subtle blue glow overlay */}
      <div
        className="absolute inset-0 opacity-40"
        style={{
          backgroundImage:
            'radial-gradient(circle at 50% 50%, rgba(59, 130, 246, 0.15) 0%, rgba(59, 130, 246, 0.05) 20%, transparent 40%)',
          animation: 'pulse 12s ease-in-out infinite',
        }}
      />

      {/* Accent glow for depth */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage:
            'radial-gradient(circle at 50% 50%, rgba(147, 197, 253, 0.15) 0%, transparent 40%)',
          transform: 'scale(1.1)',
          animation: 'pulse 15s ease-in-out infinite reverse',
        }}
      />

      {/* Floating particles with reduced opacity */}
      {[...Array(30)].map((_, i) => (
        <div
          key={i}
          className="absolute rounded-full blur-sm"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            width: `${Math.random() * 2 + 1}px`,
            height: `${Math.random() * 2 + 1}px`,
            backgroundColor: 'rgba(59, 130, 246, 0.15)',
            animation: `float ${5 + Math.random() * 10}s ease-in-out infinite`,
            animationDelay: `${Math.random() * 5}s`,
          }}
        />
      ))}
    </div>
  );
}

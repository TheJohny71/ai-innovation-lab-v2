/* GradientBackground.tsx */
'use client';

import React from 'react';

export function GradientBackground() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      {/* Base gradient layer */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#090D1F] via-[#0F1631] to-[#090D1F] opacity-95" />

      {/* Animated radial gradient overlay */}
      <div
        className="absolute inset-0 opacity-40"
        style={{
          backgroundImage:
            'radial-gradient(circle at 50% 50%, rgba(74, 144, 226, 0.2) 0%, rgba(74, 144, 226, 0.1) 25%, transparent 50%)',
          animation: 'pulse 10s ease-in-out infinite',
        }}
      />

      {/* Secondary pulsing gradient */}
      <div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage:
            'radial-gradient(circle at 50% 50%, rgba(103, 232, 249, 0.1) 0%, transparent 50%)',
          transform: 'scale(1.5)',
          animation: 'pulse 8s ease-in-out infinite reverse',
        }}
      />

      {/* Floating particles */}
      {[...Array(40)].map((_, i) => (
        <div
          key={i}
          className="absolute rounded-full blur-sm"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            width: `${Math.random() * 3 + 1}px`,
            height: `${Math.random() * 3 + 1}px`,
            backgroundColor:
              i % 2 ? 'rgba(103, 232, 249, 0.3)' : 'rgba(74, 144, 226, 0.3)',
            animation: `float ${5 + Math.random() * 10}s ease-in-out infinite`,
            animationDelay: `${Math.random() * 5}s`,
          }}
        />
      ))}
    </div>
  );
}

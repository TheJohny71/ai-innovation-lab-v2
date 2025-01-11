/* Updated GradientBackground.tsx */
'use client';

import React from 'react';

export function GradientBackground() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#10182F] via-[#1A253B] to-[#10182F] opacity-95" />
      <div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage:
            'radial-gradient(circle at 50% 50%, rgba(74, 144, 226, 0.1) 0%, transparent 50%)',
          transform: 'scale(2)',
          animation: 'pulse 8s ease-in-out infinite',
        }}
      />
      {/* Particle effect */}
      {[...Array(30)].map((_, i) => (
        <div
          key={i}
          className="absolute h-1 w-1 rounded-full bg-blue-500/20 blur-sm"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animation: `float ${5 + Math.random() * 10}s ease-in-out infinite`,
            animationDelay: `${Math.random() * 5}s`,
          }}
        />
      ))}
    </div>
  );
}

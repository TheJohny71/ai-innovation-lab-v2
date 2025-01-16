'use client';

import React from 'react';
import { cn } from '@/lib/utils';

interface GradientBackgroundProps {
  className?: string;
}

export function GradientBackground({
  className = '',
}: GradientBackgroundProps) {
  return (
    <div className={`fixed inset-0 -z-10 overflow-hidden ${className}`}>
      {/* Base background */}
      <div className="absolute inset-0 bg-[#040812]" />

      {/* Primary deep blue gradient */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0"
          style={{
            background:
              'radial-gradient(circle at 50% 50%, #090D1F 0%, #000000 100%)',
          }}
        />
      </div>

      {/* Concentrated center glow */}
      <div
        className="absolute inset-0 opacity-40"
        style={{
          background:
            'radial-gradient(circle at 50% 50%, rgba(13, 25, 48, 0.9) 0%, transparent 25%)',
        }}
      />

      {/* Bright center highlight */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage:
            'radial-gradient(circle at 50% 50%, rgba(59, 130, 246, 0.4) 0%, transparent 15%)',
        }}
      />

      {/* Subtle ambient glow */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage:
            'radial-gradient(circle at 50% 50%, rgba(147, 197, 253, 0.2) 0%, transparent 20%)',
        }}
      />

      {/* Very soft outer glow */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 opacity-10"
          style={{
            background:
              'radial-gradient(circle at 50% 50%, rgba(59, 130, 246, 0.1) 0%, transparent 40%)',
            filter: 'blur(40px)',
          }}
        />
      </div>

      {/* Animated pulse effect */}
      <div className="absolute inset-0 animate-pulse opacity-10">
        <div
          className="absolute inset-0"
          style={{
            background:
              'radial-gradient(circle at 50% 50%, rgba(59, 130, 246, 0.3) 0%, transparent 35%)',
          }}
        />
      </div>

      {/* Subtle noise texture */}
      <div className="absolute inset-0 noise-bg opacity-[0.015]" />

      <style jsx>{`
        @keyframes pulse {
          0%,
          100% {
            transform: scale(1);
            opacity: var(--tw-opacity, 1);
          }
          50% {
            transform: scale(1.05);
            opacity: calc(var(--tw-opacity, 1) * 0.8);
          }
        }

        .noise-bg {
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E");
        }

        .bg-gradient-radial {
          background: radial-gradient(
            circle at 50% 50%,
            rgba(13, 25, 48, 0.5) 0%,
            transparent 50%
          );
        }

        @media (prefers-reduced-motion: reduce) {
          .animate-pulse {
            animation: none !important;
          }
        }
      `}</style>
    </div>
  );
}

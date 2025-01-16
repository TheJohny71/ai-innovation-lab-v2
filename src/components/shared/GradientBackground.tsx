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

      {/* Deep background gradient - made more gradual */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0"
          style={{
            background:
              'radial-gradient(100% 100% at 50% 50%, #07091A 0%, #000000 100%)',
          }}
        />
      </div>

      {/* Main ambient glow - much more diffused */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          background:
            'radial-gradient(140% 140% at 50% 50%, rgba(30, 35, 60, 0.6) -20%, transparent 100%)',
          filter: 'blur(60px)',
        }}
      />

      {/* Subtle purple tint - expanded spread */}
      <div
        className="absolute inset-0 opacity-8"
        style={{
          backgroundImage:
            'radial-gradient(150% 150% at 50% 50%, rgba(88, 91, 124, 0.2) -30%, transparent 100%)',
          filter: 'blur(80px)',
        }}
      />

      {/* Very soft deep blue undertone - wider spread */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          background:
            'radial-gradient(160% 160% at 50% 50%, rgba(13, 25, 48, 0.4) -40%, transparent 100%)',
          filter: 'blur(100px)',
        }}
      />

      {/* Subtle distributed highlight */}
      <div
        className="absolute inset-0 opacity-3"
        style={{
          backgroundImage:
            'radial-gradient(170% 170% at 50% 50%, rgba(147, 197, 253, 0.05) -50%, transparent 100%)',
          filter: 'blur(90px)',
        }}
      />

      {/* Additional glow effects - preserved but softened */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 opacity-15"
          style={{
            background:
              'radial-gradient(180% 180% at 50% 50%, rgba(59, 130, 246, 0.1) -60%, transparent 100%)',
            filter: 'blur(70px)',
          }}
        />
      </div>

      {/* Gradient overlay for depth */}
      <div
        className="absolute inset-0"
        style={{
          background:
            'linear-gradient(180deg, rgba(0, 0, 0, 0.1) 0%, rgba(9, 25, 47, 0.2) 100%)',
        }}
      />

      {/* Animated pulse effect - preserved but more subtle */}
      <div className="absolute inset-0 animate-pulse opacity-5">
        <div
          className="absolute inset-0"
          style={{
            background:
              'radial-gradient(200% 200% at 50% 50%, rgba(59, 130, 246, 0.1) -70%, transparent 100%)',
            filter: 'blur(100px)',
          }}
        />
      </div>

      {/* Noise texture */}
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
            180% 180% at 50% 50%,
            rgba(13, 25, 48, 0.3) -50%,
            transparent 100%
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

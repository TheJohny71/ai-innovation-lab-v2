'use client';

import React, { useState, useEffect } from 'react';
import { StarField } from '@/components/shared/StarField';
import { GradientBackground } from '@/components/shared/GradientBackground';
import { cn } from '@/lib/utils';

export default function NexusPage() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-deep-blue">
      {/* Background layers */}
      <div className="fixed inset-0">
        <GradientBackground className="absolute inset-0" />
        <StarField className="absolute inset-0" />
        <div className="absolute inset-0 noise-bg opacity-[0.03]" />
      </div>

      {/* Content layer */}
      <div className="relative z-20 flex min-h-screen flex-col items-center justify-center px-4 text-center">
        <h1
          className={cn(
            'text-6xl font-bold mb-4',
            'bg-gradient-to-b from-blue-300 to-blue-500 bg-clip-text',
            'filter drop-shadow-lg animate-fade-in'
          )}
          style={{
            color: '#A6C5F7',
            textShadow: '0 0 20px rgba(166, 197, 247, 0.3)',
          }}
        >
          AI Innovation Hub
        </h1>

        <h2
          className={cn(
            'text-2xl text-gray-300 mb-8',
            'filter drop-shadow-md animate-fade-in'
          )}
          style={{ animationDelay: '100ms' }}
        >
          Talent-Driven Mindset Acceleration
        </h2>

        <p
          className={cn(
            'text-sm text-emerald-300 uppercase tracking-[0.3em]',
            'animate-fade-in'
          )}
          style={{ animationDelay: '200ms' }}
        >
          INNOVATE · DISRUPT · LEAD
        </p>
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in {
          animation: fadeIn 0.5s ease-out forwards;
        }

        .noise-bg {
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E");
        }

        @media (prefers-reduced-motion: reduce) {
          .animate-fade-in {
            animation: none;
          }
        }
      `}</style>
    </div>
  );
}

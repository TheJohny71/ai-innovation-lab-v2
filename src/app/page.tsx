'use client';

import React from 'react';
import { StarField } from '@/components/shared/StarField';
import { GradientBackground } from '@/components/shared/GradientBackground';
import { BaseLayout } from '@/components/shared/BaseLayout';
import { fadeIn } from '@/lib/animation';

export default function NexusPage() {
  return (
    <BaseLayout>
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
            className={`mb-4 bg-gradient-to-b from-blue-300 to-blue-500 bg-clip-text text-6xl font-bold text-transparent filter drop-shadow-lg ${fadeIn}`}
          >
            Innovation Hub
          </h1>

          <h2
            className={`mb-6 text-xl text-gray-300 filter drop-shadow-md ${fadeIn}`}
            style={{ animationDelay: '100ms' }}
          >
            Talent-Driven AI Acceleration
          </h2>

          <div
            className={`text-sm text-emerald-400 tracking-[0.2em] font-medium ${fadeIn}`}
            style={{ animationDelay: '200ms' }}
          >
            INNOVATE · DISRUPT · LEAD
          </div>
        </div>
      </div>
    </BaseLayout>
  );
}

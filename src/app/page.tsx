'use client';

import { StarField } from '@/components/shared/StarField';
import { GradientBackground } from '@/components/shared/GradientBackground';
import { BaseLayout } from '@/components/shared/BaseLayout';

export default function NexusPage() {
  return (
    <BaseLayout>
      <div className="relative min-h-screen w-full overflow-hidden bg-deep-blue">
        <GradientBackground className="z-0" />
        <StarField className="z-10" />
        <div className="absolute inset-0 noise-bg opacity-[0.03]" />

        <div className="relative z-20 flex flex-col items-center justify-center min-h-screen px-4 text-center">
          <h1 className="text-6xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-b from-blue-300 to-blue-500 filter drop-shadow-lg animate-fade-in">
            Innovation Hub
          </h1>

          <h2
            className="text-xl text-gray-300 mb-6 filter drop-shadow-md animate-fade-in"
            style={{ animationDelay: '100ms' }}
          >
            Talent-Driven AI Acceleration
          </h2>

          <div
            className="text-sm text-emerald-400 tracking-[0.2em] font-medium animate-fade-in"
            style={{ animationDelay: '200ms' }}
          >
            INNOVATE · DISRUPT · LEAD
          </div>
        </div>
      </div>
    </BaseLayout>
  );
}

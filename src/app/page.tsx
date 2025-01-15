'use client';

import { StarField } from '@/components/shared/StarField';
import { GradientBackground } from '@/components/shared/GradientBackground';
import { GradientText } from '@/components/shared/GradientText';
import { BaseLayout } from '@/components/shared/BaseLayout';

export default function Home() {
  return (
    <BaseLayout>
      <StarField />
      <GradientBackground />

      <main className="relative min-h-screen flex flex-col items-center justify-center px-4 overflow-hidden">
        <div className="text-center space-y-6 animate-fade-in">
          {/* Main Title */}
          <h1 className="text-6xl font-bold mb-4">
            <GradientText className="text-blue-300 drop-shadow-lg">
              Innovation Hub
            </GradientText>
          </h1>

          {/* Subtitle */}
          <p className="text-xl text-gray-400 mb-6">
            Talent-Driven AI Acceleration
          </p>

          {/* Tagline */}
          <p className="text-sm text-emerald-300 uppercase tracking-widest">
            Innovate · Disrupt · Lead
          </p>
        </div>
      </main>
    </BaseLayout>
  );
}

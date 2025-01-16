'use client';

import { StarField } from '@/components/shared/StarField';
import { GradientBackground } from '@/components/shared/GradientBackground';
import { BaseLayout } from '@/components/shared/BaseLayout';

export default function NexusPage() {
  return (
    <BaseLayout>
      <div className="relative min-h-screen w-full overflow-hidden">
        <StarField className="z-0" />
        <GradientBackground className="z-10" />

        <div className="relative z-20 flex flex-col items-center justify-center min-h-screen px-4 text-center">
          <h1 className="text-6xl font-bold mb-4 text-blue-400 drop-shadow-lg">
            AI Innovation Hub
          </h1>

          <h2 className="text-xl text-gray-300/80 mb-6 drop-shadow-md">
            Empowering Digital Transformation
          </h2>

          <div className="text-sm text-emerald-500 tracking-[0.2em] font-medium">
            INNOVATE · DISRUPT · LEAD
          </div>
        </div>
      </div>
    </BaseLayout>
  );
}

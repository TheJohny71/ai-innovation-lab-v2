'use client';

import { StarField } from '@/components/shared/StarField';
import { GradientBackground } from '@/components/shared/GradientBackground';
import { BaseLayout } from '@/components/shared/BaseLayout';

export default function NexusPage() {
  return (
    <BaseLayout>
      <div className="relative min-h-screen w-full overflow-hidden bg-dark-blue">
        <StarField className="z-0" />
        <GradientBackground className="z-10" />
        <div className="absolute inset-0 noise-bg" />

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

        <nav className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-30">
          <ul className="flex gap-8 text-gray-400">
            <li>
              <button className="nav-link hover:text-blue-400">Nexus</button>
            </li>
            <li>
              <button className="nav-link hover:text-blue-400">
                Accelerate
              </button>
            </li>
            <li>
              <button className="nav-link hover:text-blue-400">
                Disruption
              </button>
            </li>
            <li>
              <button className="nav-link hover:text-blue-400">Mindset</button>
            </li>
            <li>
              <button className="nav-link hover:text-blue-400">
                Future-Ready
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </BaseLayout>
  );
}

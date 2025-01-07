'use client';

import * as React from 'react';
import { Users, Waves, Sparkles } from 'lucide-react';
import { GradientBackground } from './GradientBackground';
import { AnimatedServiceBox } from './AnimatedServiceBox';

const MainPreview: React.FC = () => {
  return (
    <main className="relative min-h-screen w-full overflow-hidden bg-[#0F1729]">
      <GradientBackground />

      {/* Content Container */}
      <div className="relative flex min-h-screen flex-col items-center">
        {/* Title Section with exact spacing */}
        <div className="mt-24 space-y-4 text-center">
          <h1 className="text-6xl font-bold">
            <span className="bg-gradient-to-r from-[#3B82F6] to-[#2DD4BF] bg-clip-text text-transparent">
              AI Innovation Hub
            </span>
          </h1>
          <h2 className="text-2xl font-medium tracking-wide text-gray-200">
            Transforming Legal Practice Through AI
          </h2>
          <p className="text-lg tracking-wide text-gray-400">
            Accelerating Innovation Through Cultural Mindset Change
          </p>
        </div>

        {/* Service Boxes with exact spacing */}
        <div className="mt-16 flex justify-center gap-8">
          <AnimatedServiceBox
            icon={Users}
            title="Enhanced Client Service"
            color="purple"
          />
          <AnimatedServiceBox
            icon={Waves}
            title="Accelerated Workflows"
            color="blue"
          />
          <AnimatedServiceBox
            icon={Sparkles}
            title="Talent Acceleration"
            color="teal"
          />
        </div>

        {/* Single Navigation Bar */}
        <div className="fixed bottom-8 left-1/2 -translate-x-1/2">
          <nav className="rounded-full border border-blue-500/20 bg-[#0F1729]/80 px-8 py-3 backdrop-blur-sm">
            <div className="flex gap-8">
              {[
                'Nexus',
                'Accelerate',
                'Disruption',
                'Mindset',
                'Future-Ready',
              ].map((item) => (
                <button
                  key={item}
                  className="text-gray-200 transition-colors hover:text-blue-400"
                >
                  {item}
                </button>
              ))}
            </div>
          </nav>
        </div>
      </div>
    </main>
  );
};

export default MainPreview;

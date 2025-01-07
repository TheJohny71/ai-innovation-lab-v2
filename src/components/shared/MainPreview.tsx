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
        {/* Title Section - Adjusted spacing */}
        <div className="mt-16 space-y-6 text-center">
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

        {/* Service Boxes - Adjusted spacing and positioning */}
        <div className="mt-24 mb-32 flex justify-center gap-12">
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

        {/* Navigation Bar - Fixed positioning and overlay issue resolved */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-50">
          <nav className="rounded-full border border-blue-500/20 bg-[#0F1729]/90 px-8 py-3 backdrop-blur-sm shadow-lg">
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

'use client';

import * as React from 'react';
import { Users, Waves, Sparkles } from 'lucide-react';
import { GradientBackground } from './GradientBackground';
import { AnimatedServiceBox } from './AnimatedServiceBox';

const MainPreview: React.FC = () => {
  return (
    <main className="relative min-h-screen w-full overflow-hidden bg-[#0F1729]">
      <GradientBackground />

      {/* Content Container - Refined spacing */}
      <div className="relative flex min-h-screen flex-col items-center">
        {/* Title Section - Enhanced hierarchy and spacing */}
        <div className="mt-16 space-y-6 text-center">
          <h1 className="text-7xl font-bold tracking-tight">
            <span className="bg-gradient-to-r from-[#3B82F6] to-[#2DD4BF] bg-clip-text text-transparent">
              AI Innovation Hub
            </span>
          </h1>
          <h2 className="text-2xl font-medium tracking-wide text-gray-200 pt-2">
            Transforming Legal Practice Through AI
          </h2>
          <p className="text-lg tracking-wide text-gray-400 pt-1">
            Accelerating Innovation Through Cultural Mindset Change
          </p>
        </div>

        {/* Service Boxes - Refined sizing and spacing */}
        <div className="mt-24 mb-32 flex justify-center gap-12 px-4">
          <div className="transform transition-transform duration-300 hover:scale-105">
            <AnimatedServiceBox
              icon={Users}
              title="Enhanced Client Service"
              color="purple"
            />
          </div>
          <div className="transform transition-transform duration-300 hover:scale-105">
            <AnimatedServiceBox
              icon={Waves}
              title="Accelerated Workflows"
              color="blue"
            />
          </div>
          <div className="transform transition-transform duration-300 hover:scale-105">
            <AnimatedServiceBox
              icon={Sparkles}
              title="Talent Acceleration"
              color="teal"
            />
          </div>
        </div>

        {/* Navigation Bar - Enhanced styling and positioning */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-50">
          <nav className="rounded-full border border-blue-500/20 bg-gradient-to-r from-[#0F1729]/95 to-[#162033]/95 px-10 py-3.5 backdrop-blur-xl shadow-lg transition-all duration-300">
            <div className="flex gap-10">
              {[
                'Nexus',
                'Accelerate',
                'Disruption',
                'Mindset',
                'Future-Ready',
              ].map((item) => (
                <button
                  key={item}
                  className="text-gray-200 transition-colors duration-300 hover:text-blue-400 hover:scale-105 transform"
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

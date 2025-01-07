'use client';

import * as React from 'react';
import { Users, Waves, Sparkles } from 'lucide-react';
import { GradientBackground } from './GradientBackground';
import { AnimatedServiceBox } from './AnimatedServiceBox';

const MainPreview: React.FC = () => {
  return (
    <div className="relative min-h-screen w-full bg-background">
      <GradientBackground />
      <div className="relative">
        <div className="flex min-h-screen flex-col items-center justify-start pt-32 px-4">
          {/* Title Section - With new subtitle */}
          <div className="space-y-5 text-center">
            <h1 className="text-6xl font-bold">
              <span className="bg-gradient-to-r from-blue-500 to-teal-400 bg-clip-text text-transparent">
                AI Innovation Hub
              </span>
            </h1>
            <h2 className="text-3xl font-medium tracking-wide text-gray-200">
              Transforming Legal Practice Through AI
            </h2>
            <p className="text-lg tracking-wide text-gray-400">
              Accelerating Innovation Through Cultural Mindset Change
            </p>
          </div>

          {/* Service Boxes - Reduced spacing */}
          <div className="mt-20 flex justify-center gap-6">
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

          {/* Navigation - Raised position */}
          <div className="mt-auto mb-12">
            <nav className="flex gap-8 rounded-full border border-blue-500/20 bg-blue-500/5 px-8 py-3">
              <button className="text-gray-200 hover:text-blue-400 transition-colors">
                Nexus
              </button>
              <button className="text-gray-200 hover:text-blue-400 transition-colors">
                Accelerate
              </button>
              <button className="text-gray-200 hover:text-blue-400 transition-colors">
                Disruption
              </button>
              <button className="text-gray-200 hover:text-blue-400 transition-colors">
                Mindset
              </button>
              <button className="text-gray-200 hover:text-blue-400 transition-colors">
                Future-Ready
              </button>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainPreview;

'use client';

import React from 'react';
import { Users, Waves, Sparkles } from 'lucide-react';
import { GradientBackground } from './GradientBackground';
import { AnimatedServiceBox } from './AnimatedServiceBox';

const MainPreview: React.FC = () => {
  return (
    <div className="relative min-h-screen w-full bg-background">
      <GradientBackground />
      <div className="relative">
        <div className="flex min-h-screen flex-col items-center pt-24 space-y-20 px-4">
          {/* Title Section - Moved higher up with adjusted spacing */}
          <div className="space-y-8">
            <h1 className="text-7xl font-bold">
              <span className="bg-gradient-to-r from-blue-500 to-teal-400 bg-clip-text text-transparent">
                AI Innovation Hub
              </span>
            </h1>
            <h2 className="text-4xl font-medium tracking-wide text-gray-200">
              AI Powered Legal Innovation
            </h2>
            <p className="text-xl tracking-wide text-gray-400">
              Accelerating Innovation Through Cultural Mindset Change
            </p>
          </div>

          {/* Service Boxes - Adjusted gap and layout */}
          <div className="flex flex-wrap justify-center gap-12">
            <AnimatedServiceBox
              icon={Users}
              title="Enhanced Client Service"
              color="purple"
              animationDelay={0}
            />
            <AnimatedServiceBox
              icon={Waves}
              title="Accelerated Workflows"
              color="blue"
              animationDelay={0.2}
            />
            <AnimatedServiceBox
              icon={Sparkles}
              title="Talent Acceleration"
              color="teal"
              animationDelay={0.4}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainPreview;

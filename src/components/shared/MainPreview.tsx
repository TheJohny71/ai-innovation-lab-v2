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
        <div className="flex min-h-screen flex-col items-center justify-center space-y-16 px-4">
          <div className="space-y-6 text-center">
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

          <div className="grid w-full max-w-7xl grid-cols-1 gap-8 md:grid-cols-3">
            <AnimatedServiceBox
              icon={Users}
              title="Enhanced Client Service"
              description="Transforming service delivery through AI-driven solutions"
              color="purple"
              animationDelay={0}
            />
            <AnimatedServiceBox
              icon={Waves}
              title="Accelerated Workflows"
              description="Streamlining processes with intelligent automation"
              color="blue"
              animationDelay={0.2}
            />
            <AnimatedServiceBox
              icon={Sparkles}
              title="Talent Acceleration"
              description="Empowering professionals with AI capabilities"
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

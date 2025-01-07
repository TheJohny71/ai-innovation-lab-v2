'use client';

import * as React from 'react';
import { Users, Waves, Sparkles } from 'lucide-react';
import { GradientBackground } from './GradientBackground';
import { AnimatedServiceBox } from './AnimatedServiceBox';

const MainPreview: React.FC = () => {
  const [activeSection, setActiveSection] = React.useState('nexus');

  const navigationItems = [
    { id: 'nexus', label: 'Nexus' },
    { id: 'accelerate', label: 'Accelerate' },
    { id: 'disruption', label: 'Disruption' },
    { id: 'mindset', label: 'Mindset' },
    { id: 'future-ready', label: 'Future-Ready' },
  ];

  return (
    <div className="relative flex min-h-screen w-full flex-col bg-background">
      <GradientBackground />

      {/* Main Content Container */}
      <div className="flex flex-1 flex-col">
        {/* Title Section */}
        <div className="flex flex-col items-center justify-start px-4 pt-32">
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

          {/* Service Boxes */}
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
        </div>

        {/* Navigation - Fixed at bottom */}
        <div className="mt-auto">
          <div className="flex justify-center pb-12 pt-8">
            <nav className="flex gap-8 rounded-full border border-blue-500/20 bg-blue-500/5 px-8 py-3 backdrop-blur-sm">
              {navigationItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => setActiveSection(item.id)}
                  className={`text-gray-200 transition-colors hover:text-blue-400 ${
                    activeSection === item.id ? 'text-blue-400' : ''
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainPreview;

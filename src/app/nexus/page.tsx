'use client';

import React from 'react';
import { StarField } from '@/components/shared/StarField';
import { NavigationBar } from '@/components/shared/NavigationBar';
import { GradientBackground } from '@/components/shared/GradientBackground';

export default function NexusPage() {
  return (
    <div className="min-h-screen bg-slate-900 text-white relative overflow-hidden">
      {/* Background Effects */}
      <GradientBackground />
      <StarField />

      <div className="container mx-auto flex flex-col justify-between h-screen p-8">
        {/* Hero Section */}
        <div className="flex-none space-y-6 text-center pt-16">
          <h1 className="text-6xl font-bold">
            <span className="bg-gradient-to-r from-blue-400/90 via-blue-300 to-teal-400/90 bg-clip-text text-transparent">
              AI Innovation Hub
            </span>
          </h1>

          <h2 className="text-2xl text-gray-200 font-light tracking-wide">
            Talent-Driven Mindset Acceleration
          </h2>

          <p className="text-sm text-emerald-300 uppercase tracking-[0.3em]">
            Innovate.&nbsp;&nbsp;Disrupt.&nbsp;&nbsp;Lead.
          </p>
        </div>

        {/* Navigation */}
        <div className="flex-none flex justify-center pb-8">
          <NavigationBar />
        </div>
      </div>
    </div>
  );
}
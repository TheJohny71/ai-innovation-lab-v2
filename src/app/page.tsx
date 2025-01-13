'use client';

import React from 'react';
import { StarField } from '@/components/shared/StarField';
import { GradientBackground } from '@/components/shared/GradientBackground';

export default function Page() {
  return (
    <div className="min-h-screen bg-[#090D1F] text-white relative overflow-hidden">
      <GradientBackground />
      <StarField />
      <div className="container mx-auto flex flex-col justify-between h-screen p-8">
        <div /> {/* Top spacing */}
        <div className="flex-1 flex flex-col items-center justify-center space-y-6 text-center">
          <h1 className="text-6xl font-bold">
            <span className="gradient-text">AI Innovation Hub</span>
          </h1>
          <h2 className="text-2xl text-gray-200 font-light tracking-wide">
            Talent-Driven Mindset Acceleration
          </h2>
          <p className="text-sm text-emerald-300 uppercase tracking-[0.3em]">
            Innovate.&nbsp;&nbsp;Disrupt.&nbsp;&nbsp;Lead.
          </p>
        </div>
        <nav className="flex justify-center py-8">
          <ul className="flex space-x-8 px-8 py-4 rounded-full bg-[#0B1425] bg-opacity-70 backdrop-blur-sm">
            <li>
              <a href="#" className="nav-link active text-cyan-400">
                Nexus
              </a>
            </li>
            <li>
              <a
                href="#"
                className="nav-link text-gray-400 hover:text-gray-300"
              >
                Accelerate
              </a>
            </li>
            <li>
              <a
                href="#"
                className="nav-link text-gray-400 hover:text-gray-300"
              >
                Disruption
              </a>
            </li>
            <li>
              <a
                href="#"
                className="nav-link text-gray-400 hover:text-gray-300"
              >
                Mindset
              </a>
            </li>
            <li>
              <a
                href="#"
                className="nav-link text-gray-400 hover:text-gray-300"
              >
                Future-Ready
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}

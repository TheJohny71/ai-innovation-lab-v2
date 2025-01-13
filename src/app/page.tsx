'use client';

import React from 'react';
import { StarField } from '@/components/shared/StarField';
import { smoothTransition } from '@/lib/animation';

export default function Page() {
  return (
    <div className="min-h-screen bg-[#090D1F] text-white relative overflow-hidden">
      <div
        className="absolute inset-0"
        style={{
          background:
            'radial-gradient(circle at 50% 50%, #090D1F 30%, #000000 100%)',
        }}
      />
      <StarField />

      <div className="container mx-auto flex flex-col justify-between h-screen p-8 relative">
        <div /> {/* Top spacing */}
        <div className="flex-1 flex flex-col items-center justify-center space-y-6 text-center">
          <h1
            className="text-6xl font-bold"
            style={{
              color: '#A6C5F7',
              textShadow: '0 2px 4px rgba(166, 197, 247, 0.2)',
            }}
          >
            AI Innovation Hub
          </h1>
          <h2 className="text-2xl text-gray-200 font-light tracking-wide">
            Talent-Driven Mindset Acceleration
          </h2>
          <p className="text-sm text-emerald-300 uppercase tracking-[0.3em]">
            Innovate.&nbsp;&nbsp;Disrupt.&nbsp;&nbsp;Lead.
          </p>
        </div>
        <nav className="flex justify-center py-8">
          <div
            className="px-8 py-4 rounded-full bg-[#0B1425] bg-opacity-70 backdrop-blur-sm"
            style={{
              boxShadow: '0 4px 12px rgba(0, 0, 0, 0.3)',
            }}
          >
            <ul className="flex space-x-8">
              {[
                'Nexus',
                'Accelerate',
                'Disruption',
                'Mindset',
                'Future-Ready',
              ].map((item, index) => (
                <li key={item}>
                  <a
                    href="#"
                    className={`nav-link ${smoothTransition} ${
                      index === 0
                        ? 'text-cyan-400 active'
                        : 'text-gray-400 hover:text-gray-300'
                    }`}
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </nav>
      </div>

      <style jsx>{`
        .nav-link {
          position: relative;
          padding: 0.5rem 1rem;
        }

        .nav-link::after {
          content: '';
          position: absolute;
          bottom: -4px;
          left: 0;
          width: 100%;
          height: 2px;
          background-color: #06b6d4;
          transform: scaleX(0);
          transition: transform 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .nav-link.active::after {
          transform: scaleX(1);
        }

        .nav-link:focus-visible {
          outline: 2px solid #06b6d4;
          outline-offset: 4px;
          border-radius: 4px;
        }
      `}</style>
    </div>
  );
}

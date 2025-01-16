'use client';

import React from 'react';
import { StarField } from '@/components/shared/StarField';
import { GradientBackground } from '@/components/shared/GradientBackground';
import { BaseLayout } from '@/components/shared/BaseLayout';
import { fadeIn } from '@/lib/animation';

export default function NexusPage() {
  return (
    <BaseLayout>
      <div className="relative min-h-screen w-full overflow-hidden">
        {/* Background layers */}
        <div className="fixed inset-0">
          <GradientBackground className="absolute inset-0" />
          <StarField className="absolute inset-0" />
          <div className="absolute inset-0 noise-bg opacity-[0.03]" />
        </div>

        {/* Content layer */}
        <div className="relative z-20 flex min-h-screen flex-col items-center justify-center px-4 text-center">
          <h1
            className="text-6xl font-bold mb-4"
            style={{
              color: '#A6C5F7',
              textShadow: '0 2px 4px rgba(166, 197, 247, 0.2)',
            }}
          >
            Innovation Hub
          </h1>

          <h2 className="text-2xl text-gray-300 mb-8">
            Talent-Driven AI Acceleration
          </h2>

          <div className="text-sm text-emerald-300 uppercase tracking-[0.3em]">
            INNOVATE · DISRUPT · LEAD
          </div>
        </div>

        {/* Navigation */}
        <nav
          className="fixed bottom-8 left-1/2 -translate-x-1/2 px-8 py-4 rounded-full bg-[#0B1425] bg-opacity-70 backdrop-blur-sm z-50"
          role="navigation"
          aria-label="Main navigation"
          style={{
            boxShadow: '0 4px 12px rgba(0, 0, 0, 0.3)',
          }}
        >
          <ul className="flex space-x-8" role="menubar">
            <li role="none">
              <a
                href="#"
                className="nav-link active text-cyan-400"
                role="menuitem"
                tabIndex={0}
                aria-current="page"
              >
                Nexus
              </a>
            </li>
            <li role="none">
              <a
                href="#"
                className="nav-link text-gray-400 hover:text-gray-300"
                role="menuitem"
                tabIndex={-1}
              >
                Accelerate
              </a>
            </li>
            <li role="none">
              <a
                href="#"
                className="nav-link text-gray-400 hover:text-gray-300"
                role="menuitem"
                tabIndex={-1}
              >
                Disruption
              </a>
            </li>
            <li role="none">
              <a
                href="#"
                className="nav-link text-gray-400 hover:text-gray-300"
                role="menuitem"
                tabIndex={-1}
              >
                Mindset
              </a>
            </li>
            <li role="none">
              <a
                href="#"
                className="nav-link text-gray-400 hover:text-gray-300"
                role="menuitem"
                tabIndex={-1}
              >
                Future-Ready
              </a>
            </li>
          </ul>
        </nav>

        <style jsx>{`
          .nav-link {
            position: relative;
            transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
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

          .nav-link:hover:not(.active),
          .nav-link:focus:not(.active) {
            color: #f3f4f6;
          }

          .nav-link:focus-visible {
            outline: 2px solid #06b6d4;
            outline-offset: 4px;
            border-radius: 4px;
          }
        `}</style>
      </div>
    </BaseLayout>
  );
}

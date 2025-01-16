'use client';

import React, { useState, useEffect } from 'react';
import { StarField } from '@/components/shared/StarField';
import { GradientBackground } from '@/components/shared/GradientBackground';
import { BaseLayout } from '@/components/shared/BaseLayout';
import { cn } from '@/lib/utils';

export default function NexusPage() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-deep-blue">
      {/* Background layers */}
      <div className="fixed inset-0">
        <GradientBackground className="absolute inset-0" />
        <StarField className="absolute inset-0" />
        <div className="absolute inset-0 noise-bg opacity-[0.03]" />
      </div>

      {/* Content layer */}
      <div className="relative z-20 flex min-h-screen flex-col items-center justify-center px-4 text-center">
        <h1
          className={cn(
            'text-6xl font-bold mb-4',
            'bg-gradient-to-b from-blue-300 to-blue-500 bg-clip-text',
            'filter drop-shadow-lg animate-fade-in'
          )}
          style={{
            color: '#A6C5F7',
            textShadow: '0 2px 4px rgba(166, 197, 247, 0.2)',
          }}
        >
          Innovation Hub
        </h1>

        <h2
          className={cn(
            'text-2xl text-gray-300 mb-8',
            'filter drop-shadow-md animate-fade-in'
          )}
          style={{ animationDelay: '100ms' }}
        >
          Talent-Driven AI Acceleration
        </h2>

        <div
          className={cn(
            'text-sm text-emerald-300 uppercase tracking-[0.3em]',
            'animate-fade-in'
          )}
          style={{ animationDelay: '200ms' }}
        >
          INNOVATE · DISRUPT · LEAD
        </div>
      </div>

      {/* Navigation */}
      <nav
        className={cn(
          'fixed bottom-8 left-1/2 -translate-x-1/2 px-8 py-4',
          'rounded-full bg-[#0B1425] bg-opacity-70 backdrop-blur-sm z-50',
          'glass-effect'
        )}
        role="navigation"
        aria-label="Main navigation"
        style={{
          boxShadow: '0 4px 12px rgba(0, 0, 0, 0.3)',
        }}
      >
        <ul className="flex space-x-8" role="menubar">
          {[
            { name: 'Nexus', active: true },
            { name: 'Accelerate' },
            { name: 'Disruption' },
            { name: 'Mindset' },
            { name: 'Future-Ready' },
          ].map((item) => (
            <li key={item.name} role="none">
              <a
                href="#"
                className={cn(
                  'nav-link transition-all duration-300 ease-in-out',
                  item.active
                    ? 'text-cyan-400'
                    : 'text-gray-400 hover:text-gray-300'
                )}
                role="menuitem"
                tabIndex={item.active ? 0 : -1}
                aria-current={item.active ? 'page' : undefined}
              >
                {item.name}
              </a>
            </li>
          ))}
        </ul>
      </nav>

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

        .nav-link:hover:not(.active),
        .nav-link:focus:not(.active) {
          color: #f3f4f6;
        }

        .nav-link:focus-visible {
          outline: 2px solid #06b6d4;
          outline-offset: 4px;
          border-radius: 4px;
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
}

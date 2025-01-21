'use client';

import React, { useState, useEffect } from 'react';
import { StarField } from '@/components/shared/StarField';
import { cn } from '@/lib/utils';

export default function NexusPage() {
  const [mounted, setMounted] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleMouseMove = (e: React.MouseEvent) => {
    const x = (e.clientX / window.innerWidth - 0.5) * 2;
    const y = (e.clientY / window.innerHeight - 0.5) * 2;
    setMousePosition({ x, y });
  };

  if (!mounted) {
    return null;
  }

  return (
    <div
      className="min-h-screen bg-deep-blue text-white relative overflow-hidden"
      onMouseMove={handleMouseMove}
    >
      {/* Background with noise texture */}
      <div className="absolute inset-0 opacity-[0.015] pointer-events-none bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIj48ZmlsdGVyIGlkPSJhIiB4PSIwIiB5PSIwIj48ZmVUdXJidWxlbmNlIGJhc2VGcmVxdWVuY3k9Ii43NSIgc3RpdGNoVGlsZXM9InN0aXRjaCIgdHlwZT0iZnJhY3RhbE5vaXNlIi8+PC9maWx0ZXI+PHJlY3Qgd2lkdGg9IjMwMCIgaGVpZ2h0PSIzMDAiIGZpbHRlcj0idXJsKCNhKSIgb3BhY2l0eT0iMC4xNSIvPjwvc3ZnPg==')]" />

      {/* Main content area with enhanced elliptical gradient background */}
      <div className="relative z-10">
        <div
          className="relative w-full h-screen overflow-hidden"
          style={{
            background:
              'radial-gradient(ellipse at 50% 50%, #0B1A36 10%, #000000 70%)',
            backgroundSize: '200% 150%',
          }}
        >
          {/* Star Field Animation with adjusted density */}
          <StarField className="opacity-90" />

          {/* Center content with parallax effect */}
          <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white">
            <div
              className="transform transition-transform duration-100 ease-out"
              style={{
                transform: `translate(${mousePosition.x * 5}px, ${mousePosition.y * 5}px)`,
              }}
            >
              <h1
                className={cn(
                  'text-6xl font-extrabold mb-14',
                  'animate-fade-in whitespace-nowrap'
                )}
                style={{
                  background:
                    'linear-gradient(90deg, #7dd3fc 0%, #2563eb 100%)',
                  WebkitBackgroundClip: 'text',
                  backgroundClip: 'text',
                  color: 'transparent',
                  textShadow: `
                    0 0 30px rgba(37, 99, 235, 0.3),
                    0 0 50px rgba(37, 99, 235, 0.2),
                    0 0 70px rgba(37, 99, 235, 0.1)
                  `,
                }}
              >
                <span className="text-white">AI</span> Innovation Hub
              </h1>

              <p
                className={cn(
                  'text-sm text-emerald-300 uppercase',
                  'tracking-[0.25em] animate-fade-in'
                )}
                style={{
                  animationDelay: '200ms',
                  letterSpacing: '0.25em',
                }}
              >
                Innovate · Disrupt · Lead
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation bar */}
      <div className="fixed bottom-8 left-0 right-0 z-50">
        <div className="container mx-auto px-4">
          <div className="flex justify-center">
            <div className="backdrop-blur-sm bg-white/[0.01] rounded-full px-6 py-2 flex space-x-10 border border-white/5">
              {[
                { name: 'Nexus', href: '/', active: true },
                { name: 'Accelerate', href: '/accelerate' },
                { name: 'Disruption', href: '/disruption' },
                { name: 'Mindset', href: '/mindset' },
                { name: 'Future-Ready', href: '/future-ready' },
              ].map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className={`
                    relative px-3 py-1.5 text-sm transition-all duration-200
                    ${
                      item.active
                        ? 'text-cyan-400 after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-cyan-400 after:transform after:scale-x-100'
                        : 'text-gray-400/90 hover:text-white after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-cyan-400 after:transform after:scale-x-0 after:transition-transform hover:after:scale-x-100'
                    }
                  `}
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
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

        .animate-fade-in {
          animation: fadeIn 0.5s ease-out forwards;
        }

        .noise-bg {
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E");
        }

        @media (prefers-reduced-motion: reduce) {
          .animate-fade-in {
            animation: none;
          }
        }
      `}</style>
    </div>
  );
}

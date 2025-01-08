// src/components/shared/NavigationBar.tsx
'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export function NavigationBar() {
  const pathname = usePathname();
  const isActive = (path: string) => pathname === path;

  return (
    <div className="fixed bottom-8 left-0 right-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-center">
          <div className="backdrop-blur-sm bg-white/[0.01] rounded-full px-6 py-2 flex space-x-10 border border-white/5">
            {[
              { name: 'Nexus', path: '/' },
              { name: 'Accelerate', path: '/accelerate' },
              { name: 'Disruption', path: '/disruption' },
              { name: 'Mindset', path: '/mindset' },
              { name: 'Future-Ready', path: '/future-ready' },
            ].map((item) => (
              <Link
                key={item.name}
                href={item.path}
                className={`px-3 py-1.5 text-sm transition-colors duration-200 ${
                  isActive(item.path)
                    ? 'text-cyan-400'
                    : 'text-gray-400/90 hover:text-white'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

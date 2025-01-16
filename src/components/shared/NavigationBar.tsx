'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';

interface NavigationItem {
  name: string;
  path: string;
}

export function NavigationBar() {
  const pathname = usePathname();
  const isActive = (path: string) => pathname === path;

  const navigationItems: NavigationItem[] = [
    { name: 'Nexus', path: '/' },
    { name: 'Accelerate', path: '/accelerate' },
    { name: 'Disruption', path: '/disruption' },
    { name: 'Mindset', path: '/mindset' },
    { name: 'Future-Ready', path: '/future-ready' },
  ];

  return (
    <div className="fixed bottom-8 left-0 right-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-center">
          <div className="backdrop-blur-sm bg-white/[0.01] rounded-full px-6 py-2 flex space-x-10 border border-white/5">
            {navigationItems.map((item) => (
              <Link
                key={item.name}
                href={item.path}
                className={cn(
                  'relative px-3 py-1.5 text-sm transition-all duration-200',
                  isActive(item.path)
                    ? 'text-cyan-400 after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-cyan-400 after:transform after:scale-x-100'
                    : 'text-gray-400/90 hover:text-white after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-cyan-400 after:transform after:scale-x-0 after:transition-transform hover:after:scale-x-100'
                )}
                aria-current={isActive(item.path) ? 'page' : undefined}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        @media (prefers-reduced-motion: reduce) {
          * {
            transition: none !important;
          }
        }
      `}</style>
    </div>
  );
}

'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Container } from './Container';

export function Header() {
  const pathname = usePathname();
  const isActive = (path: string) => pathname === path;

  return (
    <header className="fixed bottom-8 left-0 right-0 z-50">
      <Container>
        <nav className="flex justify-center">
          <div className="rounded-full border border-blue-800 bg-blue-900/20 px-1 py-1 backdrop-blur-sm">
            <div className="flex space-x-8 px-8 py-2">
              <Link
                href="/"
                className={`text-sm transition-colors ${
                  isActive('/')
                    ? 'text-cyan-400'
                    : 'text-white hover:text-cyan-400'
                }`}
              >
                Nexus
              </Link>
              <Link
                href="/accelerate"
                className={`text-sm transition-colors ${
                  isActive('/accelerate')
                    ? 'text-cyan-400'
                    : 'text-white hover:text-cyan-400'
                }`}
              >
                Accelerate
              </Link>
              <Link
                href="/disruption"
                className={`text-sm transition-colors ${
                  isActive('/disruption')
                    ? 'text-cyan-400'
                    : 'text-white hover:text-cyan-400'
                }`}
              >
                Disruption
              </Link>
              <Link
                href="/mindset"
                className={`text-sm transition-colors ${
                  isActive('/mindset')
                    ? 'text-cyan-400'
                    : 'text-white hover:text-cyan-400'
                }`}
              >
                Mindset
              </Link>
              <Link
                href="/future-ready"
                className={`text-sm transition-colors ${
                  isActive('/future-ready')
                    ? 'text-cyan-400'
                    : 'text-white hover:text-cyan-400'
                }`}
              >
                Future-Ready
              </Link>
            </div>
          </div>
        </nav>
      </Container>
    </header>
  );
}

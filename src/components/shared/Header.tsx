// src/components/shared/Header.tsx
import React from "react";
import { Container } from "./Container";
import Link from 'next/link';

export function Header() {
  return (
    <header className="fixed top-0 z-50 w-full border-b border-white/10 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <Container>
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <Link href="/" className="text-xl font-bold bg-gradient-to-r from-blue-400 to-teal-400 text-transparent bg-clip-text">
              AI Innovation Lab
            </Link>
          </div>
          <nav className="flex items-center gap-6">
            <Link href="/" className="text-sm font-medium hover:text-primary transition-colors">
              Welcome
            </Link>
            <Link href="/solutions" className="text-sm font-medium hover:text-primary transition-colors">
              Solutions
            </Link>
            <Link href="/disruption" className="text-sm font-medium hover:text-primary transition-colors">
              Disruption
            </Link>
            <Link href="/mindset" className="text-sm font-medium hover:text-primary transition-colors">
              Mindset
            </Link>
            <Link href="/apps" className="text-sm font-medium hover:text-primary transition-colors">
              Apps
            </Link>
          </nav>
        </div>
      </Container>
    </header>
  );
}

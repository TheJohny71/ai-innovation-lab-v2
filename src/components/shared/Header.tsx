import React from "react";
import { Container } from "./Container";
import Link from 'next/link';
import { GradientText } from './GradientText';

export function Header() {
  return (
    <header className="fixed top-0 z-50 w-full border-b border-white/10 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <Container>
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <Link href="/" className="text-xl font-bold">
              <GradientText>AI Innovation Lab</GradientText>
            </Link>
          </div>
          <nav className="flex items-center gap-6">
            <Link href="/" className="text-sm font-medium text-gray-200 hover:text-white transition-colors">
              Welcome
            </Link>
            <Link href="/solutions" className="text-sm font-medium text-gray-200 hover:text-white transition-colors">
              Solutions
            </Link>
            <Link href="/disruption" className="text-sm font-medium text-gray-200 hover:text-white transition-colors">
              Disruption
            </Link>
            <Link href="/mindset" className="text-sm font-medium text-gray-200 hover:text-white transition-colors">
              Mindset
            </Link>
            <Link href="/future-ready" className="text-sm font-medium text-gray-200 hover:text-white transition-colors">
              Future-Ready
            </Link>
          </nav>
        </div>
      </Container>
    </header>
  );
}

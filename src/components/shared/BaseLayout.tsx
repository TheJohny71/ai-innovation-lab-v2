'use client';

import React from 'react';
import { Header } from './Header';
import { GradientBackground } from './GradientBackground';

export function BaseLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-[#0B1225] text-white">
      <GradientBackground />
      <Header />
      <main className="relative pt-16">{children}</main>
    </div>
  );
}
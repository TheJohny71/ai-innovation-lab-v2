'use client';

import React from 'react';
import { Header } from './Header';
import { GradientBackground } from './GradientBackground';

export function BaseLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="h-screen overflow-hidden bg-[#0B1225] text-white">
      <GradientBackground />
      <Header />
      <main className="h-[calc(100vh-4rem)]">{children}</main>
    </div>
  );
}

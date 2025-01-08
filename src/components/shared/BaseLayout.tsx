'use client';

import React from 'react';
import { Header } from './Header';
import { GradientBackground } from './GradientBackground';

interface BaseLayoutProps {
  children: React.ReactNode;
}

const BaseLayout = ({ children }: BaseLayoutProps) => {
  return (
    <div className="h-screen overflow-hidden bg-[#0B1225] text-white">
      <GradientBackground />
      <Header />
      <main className="h-[calc(100vh-4rem)]">{children}</main>
    </div>
  );
};

export { BaseLayout };
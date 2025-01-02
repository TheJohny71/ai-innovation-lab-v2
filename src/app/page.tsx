'use client';

import React from 'react';
import WelcomeSvg from '../components/WelcomeSvg';

export default function Home() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-[#0F1729]">
      <div className="aspect-[3/2] w-full max-w-[1200px]">
        <WelcomeSvg />
      </div>
    </main>
  );
}

'use client';

import React from 'react';
import { Sparkles } from 'lucide-react';
import Image from 'next/image';

export default function MindsetPage() {
  return (
    <div className="min-h-screen flex flex-col p-4 relative">
      <div className="absolute inset-0 z-0 bg-[#0f1420]">
        <Image
          src="/ai-mindset-bg.webp"
          alt="AI visualization"
          fill
          priority
          loading="eager"
          className="object-cover opacity-40"
          sizes="100vw"
          quality={75}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#0f1420]" />
      </div>

      <div className="relative z-10 mt-20 ml-8">
        <h1 className="text-5xl font-bold mb-2">
          <span className="text-white">Talent-Driven</span>{' '}
          <span className="text-blue-400">AI Mindset</span>
        </h1>
        <p className="text-gray-400 text-lg">Empowering AI Transformation</p>
      </div>
    </div>
  );
}

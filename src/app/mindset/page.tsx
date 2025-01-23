'use client';

import React from 'react';
import { Sparkles } from 'lucide-react';
import Image from 'next/image';

export default function MindsetPage() {
  return (
    <div className="min-h-screen flex items-center justify-center p-4 relative">
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

      <div className="relative z-10 text-center max-w-2xl mx-auto p-8 rounded-2xl bg-white/[0.02] border border-violet-500/10 backdrop-blur-sm">
        <Sparkles className="w-12 h-12 mx-auto mb-6 text-violet-400/80" />
        <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-violet-400 to-fuchsia-400 bg-clip-text text-transparent">
          Talent-Driven AI Mindset
        </h1>
        <p className="text-xl text-gray-300 mb-3">
          Empowering AI Transformation
        </p>
      </div>
    </div>
  );
}

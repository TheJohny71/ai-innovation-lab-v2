'use client';

import React from 'react';
import { Sparkles } from 'lucide-react';

export default function MindsetPage() {
  return (
    <div className="min-h-screen bg-deep-blue flex items-center justify-center p-4">
      <div className="text-center max-w-2xl mx-auto p-8 rounded-2xl bg-white/[0.02] border border-violet-500/10 backdrop-blur-sm">
        <Sparkles className="w-12 h-12 mx-auto mb-6 text-violet-400/80" />
        <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-violet-400 to-fuchsia-400 bg-clip-text text-transparent">
          Growth Mindset
        </h1>
        <p className="text-xl text-gray-300 mb-3">
          Our collective journey towards AI-driven innovation.
        </p>
        <p className="text-gray-400 text-sm">
          An innovative approach to developing transformative mindsets. Stay
          tuned for insights.
        </p>
      </div>
    </div>
  );
}

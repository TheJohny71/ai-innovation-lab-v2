// src/app/page.tsx
'use client';

import React from 'react';
import { BaseLayout } from '@/components/shared/BaseLayout';

export default function Home() {
  return (
    <BaseLayout>
      <div className="container mx-auto px-8 h-full flex flex-col justify-between py-12">
        <div className="space-y-6 max-w-4xl mx-auto text-center mt-8 mb-16">
          <h1 className="text-6xl font-bold bg-gradient-to-r from-blue-400 via-blue-300 to-teal-400 bg-clip-text text-transparent px-8">
            AI Innovation Hub
          </h1>
          <h2 className="text-3xl text-gray-200 font-light tracking-wide">
            Transforming Legal Practice Through AI
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto mt-4">
            Accelerating Innovation Through Cultural Mindset Change
          </p>
        </div>

        {/* Feature sections will go here */}
      </div>
    </BaseLayout>
  );
}

/* MainPreview.tsx */
'use client';

import React, { useState } from 'react';
import { GradientBackground } from '@/components/shared/GradientBackground';
import { StarField } from '@/components/shared/StarField';
import NexusPage from '@/app/page';

const pages: { [key: string]: JSX.Element } = {
  nexus: <NexusPage />,
  welcome: (
    <div className="text-center py-20">
      <h1 className="text-5xl font-bold text-white">Welcome to the AI Hub</h1>
      <p className="text-lg text-gray-300 mt-4">
        Explore the future of legal technology.
      </p>
    </div>
  ),
};

export default function MainPreview() {
  const [activePage, setActivePage] = useState<keyof typeof pages>('nexus');

  return (
    <div className="relative min-h-screen text-white">
      <GradientBackground />
      <StarField />
      <div className="relative z-10">
        {pages[activePage]}
        <div className="fixed bottom-4 left-0 right-0 flex justify-center space-x-4">
          {Object.keys(pages).map((page) => (
            <button
              key={page}
              onClick={() => setActivePage(page)}
              className={`px-4 py-2 rounded-full border ${activePage === page ? 'bg-blue-500' : 'bg-gray-800'}`}
            >
              {page.charAt(0).toUpperCase() + page.slice(1)}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

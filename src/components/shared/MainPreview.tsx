'use client';

import React, { useState } from 'react';
import { BaseLayout } from '@/components/shared/BaseLayout';
import NexusPage from '@/app/page';
import { fadeIn } from '@/lib/animation';

const pages: { [key: string]: JSX.Element } = {
  nexus: <NexusPage />,
  welcome: (
    <div className={`text-center py-20 ${fadeIn}`}>
      <h1
        className="text-5xl font-bold mb-4"
        style={{
          color: '#A6C5F7',
          textShadow: '0 2px 4px rgba(166, 197, 247, 0.2)',
        }}
      >
        Welcome to the AI Hub
      </h1>
      <p className="text-lg text-gray-300 mt-4">
        Explore the future of legal technology.
      </p>
    </div>
  ),
};

export default function MainPreview() {
  const [activePage, setActivePage] = useState<keyof typeof pages>('nexus');

  return (
    <BaseLayout>
      <div className="relative min-h-screen">
        {/* Content */}
        <div className="relative z-10">{pages[activePage]}</div>

        {/* Page Selection */}
        <div className="fixed bottom-24 left-0 right-0 flex justify-center space-x-4 z-50">
          {Object.keys(pages).map((page) => (
            <button
              key={page}
              onClick={() => setActivePage(page)}
              className={`
                px-4 py-2 rounded-full border transition-all duration-300
                ${
                  activePage === page
                    ? 'bg-blue-500 border-blue-400 text-white'
                    : 'bg-gray-800/50 border-gray-700 text-gray-300 hover:bg-gray-700/70 hover:border-gray-600'
                }
              `}
            >
              {page.charAt(0).toUpperCase() + page.slice(1)}
            </button>
          ))}
        </div>
      </div>
    </BaseLayout>
  );
}

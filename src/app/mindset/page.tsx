'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

export default function MindsetPage() {
  const [activePanel, setActivePanel] = useState<number | null>(null);

  const panels = [
    {
      title: 'Always in Beta',
      content: [
        'Culture of change',
        'Start before ready',
        'Build for evolution',
        'Fast is not fast enough',
      ],
    },
    {
      title: 'Human-Led, AI-Enabled',
      content: [
        'AI as co-thinker',
        'Focus on velocity',
        'Warm tech approach',
        'Questions are the answer',
      ],
    },
    {
      title: 'Return on Intelligence',
      content: [
        'Long-term thinking',
        'Beyond efficiency',
        'Data is not the new oil',
        'Focus on behavior',
      ],
    },
  ];

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
        <p className="text-gray-400 text-lg">Leading AI Transformation</p>
      </div>

      <div className="relative z-10 mt-32 ml-24">
        <div className="space-y-32">
          {panels.map((panel, idx) => (
            <div key={idx} className="relative group">
              <motion.div
                className="cursor-pointer"
                whileHover={{ scale: 1.05 }}
                onClick={() => setActivePanel(activePanel === idx ? null : idx)}
              >
                <h3
                  className="text-4xl font-light text-white/90 tracking-wider hover:text-blue-400 
                             transition-colors duration-300 backdrop-blur-sm text-glow"
                >
                  {panel.title}
                </h3>
              </motion.div>

              <AnimatePresence>
                {activePanel === idx && (
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 20 }}
                    className="absolute right-full mr-12 top-0 w-96"
                  >
                    <div className="space-y-6">
                      {panel.content.map((item, i) => (
                        <motion.p
                          key={i}
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: i * 0.1 }}
                          className="text-xl text-white/80 font-light tracking-wide backdrop-blur-sm"
                        >
                          {item}
                        </motion.p>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

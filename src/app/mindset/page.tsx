'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { ChevronDown } from 'lucide-react';
import { Container } from '@/components/shared/Container';
import { GradientBackground } from '@/components/shared/GradientBackground';
import { cn } from '@/lib/utils';

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
    <div className="min-h-screen relative overflow-hidden bg-[#040812]">
      <GradientBackground />

      <div className="absolute inset-0 z-0">
        <div className="absolute left-0 w-2/3 h-full bg-gradient-to-r from-black/80 via-black/60 to-transparent z-10" />
        <Image
          src="/ai-mindset-bg.webp"
          alt="AI visualization"
          fill
          priority
          className="object-cover opacity-40"
          sizes="100vw"
          quality={75}
        />
      </div>

      <Container className="relative z-10">
        <div className="pt-12 px-8">
          <h1 className="text-5xl font-bold mb-2">
            <span className="text-blue-400">AI Mindset</span>
          </h1>
          <p className="text-gray-400 text-lg">Talent-Driven Transformation</p>
        </div>

        <div className="mt-24 px-8">
          <div className="space-y-20">
            {panels.map((panel, idx) => (
              <div key={idx} className="relative">
                <motion.div
                  className="flex items-center gap-2 cursor-pointer w-fit"
                  onClick={() =>
                    setActivePanel(activePanel === idx ? null : idx)
                  }
                >
                  <h3 className="text-2xl font-light tracking-wider text-white hover:text-blue-400 transition-colors">
                    {panel.title}
                  </h3>
                  <motion.div
                    animate={{ rotate: activePanel === idx ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <ChevronDown className="w-4 h-4 text-blue-400" />
                  </motion.div>
                </motion.div>

                <AnimatePresence>
                  {activePanel === idx && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="mt-4 ml-6"
                    >
                      {panel.content.map((item, i) => (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: i * 0.1 }}
                          className="flex items-center gap-3 mb-3"
                        >
                          <div className="w-1.5 h-1.5 rounded-full bg-blue-400" />
                          <p className="text-lg text-white/80">{item}</p>
                        </motion.div>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
}

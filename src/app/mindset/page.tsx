'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { Plus, Minus } from 'lucide-react';
import { Container } from '@/components/shared/Container';
import { GradientBackground } from '@/components/shared/GradientBackground';

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
        <motion.div
          initial={{ scale: 1 }}
          animate={{ scale: 1.1 }}
          transition={{ duration: 20, repeat: Infinity, repeatType: 'reverse' }}
          className="absolute inset-0"
        >
          <div className="absolute left-0 w-2/3 h-full bg-gradient-to-r from-black/80 via-black/60 to-transparent z-10" />
          <Image
            src="/ai-mindset-bg.webp"
            alt="AI visualization"
            fill
            priority
            className="object-cover opacity-40"
            sizes="100vw"
            quality={100}
          />
        </motion.div>
      </div>

      <Container className="relative z-10">
        <div className="pt-16 ml-16">
          <h1 className="text-6xl font-bold mb-3 tracking-tight text-shadow">
            <span className="text-white">AI</span>{' '}
            <span className="text-blue-400">Mindset</span>
          </h1>
          <div className="relative">
            <p className="text-gray-400 text-xl font-light tracking-wide">
              Talent-Driven Transformation
            </p>
            <div className="absolute bottom-0 left-0 w-48 h-px bg-gradient-to-r from-blue-400/50 to-transparent" />
          </div>
        </div>

        <div className="mt-32 relative ml-16">
          <div className="absolute top-0 left-0 w-px h-full bg-gradient-to-b from-blue-400/20 via-blue-400/10 to-transparent" />
          <div className="space-y-8">
            {panels.map((panel, idx) => (
              <motion.div
                key={idx}
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: idx * 0.1 }}
                className="relative"
              >
                <div className="absolute left-8 top-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-blue-400/20 border border-blue-400/40" />
                <div
                  className="ml-16 w-[480px] bg-black/30 backdrop-blur-md border-l border-white/10 rounded-xl p-6 hover:bg-black/40 transition-all duration-300 cursor-pointer"
                  onClick={() =>
                    setActivePanel(activePanel === idx ? null : idx)
                  }
                >
                  <motion.div
                    className="flex items-center justify-between"
                    whileHover={{ x: 4 }}
                    transition={{ duration: 0.2 }}
                  >
                    <h3 className="text-2xl font-light tracking-wide text-white">
                      {panel.title}
                    </h3>
                    {activePanel === idx ? (
                      <Minus className="w-5 h-5 text-blue-400" />
                    ) : (
                      <Plus className="w-5 h-5 text-blue-400" />
                    )}
                  </motion.div>

                  <AnimatePresence>
                    {activePanel === idx && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ type: 'spring', duration: 0.5 }}
                        className="overflow-hidden"
                      >
                        <div className="mt-6 space-y-4">
                          {panel.content.map((item, i) => (
                            <motion.div
                              key={i}
                              initial={{ opacity: 0, x: -10 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: i * 0.1 }}
                              className="flex items-center gap-3"
                            >
                              <div className="w-1.5 h-1.5 rounded-full bg-blue-400" />
                              <p className="text-lg text-white/80 font-light">
                                {item}
                              </p>
                            </motion.div>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </Container>

      <style jsx global>{`
        .text-shadow {
          text-shadow: 0 2px 10px rgba(0, 0, 0, 0.5);
        }
      `}</style>
    </div>
  );
}

'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { Plus, Minus } from 'lucide-react';
import { Container } from '@/components/shared/Container';
import { GradientBackground } from '@/components/shared/GradientBackground';

export default function MindsetPage() {
  const [activePanel, setActivePanel] = useState<number | null>(null);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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
        <div className="absolute left-0 w-1/2 h-full bg-gradient-to-r from-black/80 via-black/60 to-transparent z-10" />
        <motion.div
          style={{
            x: scrollY * 0.1,
          }}
        >
          <Image
            src="/ai-mindset-bg.webp"
            alt="AI visualization"
            fill
            priority
            className="object-cover opacity-35 object-[70%_center]"
            sizes="100vw"
            quality={100}
          />
        </motion.div>
      </div>

      <Container className="relative z-10">
        <div className="pt-16 ml-8">
          <h1 className="text-6xl font-bold mb-3 tracking-tight">
            <span className="text-white">AI</span>{' '}
            <span className="text-blue-400">Mindset</span>
          </h1>
          <div className="relative">
            <p className="text-gray-400 text-xl font-light">
              Talent-Driven Transformation
            </p>
          </div>
        </div>

        <div className="mt-24 relative ml-8">
          <div className="absolute top-0 left-0 w-px h-full bg-gradient-to-b from-blue-400/10 to-transparent" />
          <div className="space-y-8">
            {panels.map((panel, idx) => (
              <motion.div
                key={idx}
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: idx * 0.1 }}
                className="relative"
              >
                <div className="absolute left-0 top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-blue-400/20" />
                <div
                  className="ml-8 w-[480px] bg-black/30 backdrop-blur-md border-l border-white/10 rounded-xl p-6 hover:bg-black/40 transition-all duration-300 cursor-pointer"
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
    </div>
  );
}

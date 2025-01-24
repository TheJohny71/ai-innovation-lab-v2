'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { GradientText } from '@/components/shared/GradientText';
import { GradientBackground } from '@/components/shared/GradientBackground';
import { Container } from '@/components/shared/Container';
import { cn } from '@/lib/utils';
import { fadeIn, slideUp, smoothTransition } from '@/lib/animation';

interface Panel {
  title: string;
  content: string[];
}

export default function MindsetPage() {
  const [activePanel, setActivePanel] = useState<number | null>(null);

  const panels: Panel[] = [
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
    <div className="min-h-screen relative overflow-hidden">
      <GradientBackground />

      <div className="absolute inset-0 z-0">
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
        <div className={cn('mt-20', fadeIn)}>
          <h1 className="text-5xl font-bold mb-2">
            <span className="text-white">Talent-Driven</span>{' '}
            <GradientText>AI Mindset</GradientText>
          </h1>
          <p className="text-gray-400 text-lg">Leading AI Transformation</p>
        </div>

        <div className="mt-32 ml-24">
          <div className="space-y-32">
            {panels.map((panel, idx) => (
              <div key={idx} className="relative group">
                <motion.div
                  className="cursor-pointer"
                  animate={{ y: [0, -10, 0] }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  }}
                  whileHover={{ scale: 1.05 }}
                  onClick={() =>
                    setActivePanel(activePanel === idx ? null : idx)
                  }
                >
                  <h3
                    className={cn(
                      'text-4xl font-light tracking-wider',
                      'bg-clip-text text-transparent bg-gradient-to-r from-white/90 to-blue-400/90',
                      'hover:from-blue-400 hover:to-white',
                      smoothTransition,
                      'text-glow'
                    )}
                  >
                    {panel.title}
                  </h3>
                </motion.div>

                <AnimatePresence>
                  {activePanel === idx && (
                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      className="absolute left-full ml-12 top-0 w-96"
                    >
                      <div className="glass-card p-6 rounded-lg">
                        {panel.content.map((item, i) => (
                          <motion.p
                            key={i}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.1 }}
                            className="text-xl text-white/80 font-light tracking-wide mb-4 last:mb-0"
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
      </Container>
    </div>
  );
}

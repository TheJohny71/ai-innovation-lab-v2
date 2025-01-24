'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { Plus, Minus, ArrowRight } from 'lucide-react';
import { Container } from '@/components/shared/Container';
import { GradientBackground } from '@/components/shared/GradientBackground';

export default function MindsetPage() {
  const [activePanel, setActivePanel] = useState<number | null>(null);
  const [scrollY, setScrollY] = useState(0);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
      const totalHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      setScrollProgress((window.scrollY / totalHeight) * 100);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const panels = document.querySelectorAll('.panel-container');
      let clickedInsidePanel = false;

      panels.forEach((panel) => {
        if (panel.contains(event.target as Node)) {
          clickedInsidePanel = true;
        }
      });

      if (!clickedInsidePanel) {
        setActivePanel(null);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const panels = [
    {
      title: 'Always in Beta',
      content: [
        {
          heading: 'Culture of Change',
          details: 'Embrace continuous evolution and transformation',
        },
        {
          heading: 'Skills Half-Life',
          details: 'Prepare for rapid skill obsolescence and renewal',
        },
        {
          heading: 'Start Before Ready',
          details: 'Take action while learning and adapting',
        },
        {
          heading: 'Velocity Focus',
          details: 'Direction with speed trumps speed alone',
        },
        {
          heading: 'Cost of Inaction',
          details: 'Recognize stagnation as a significant risk',
        },
      ],
    },
    {
      title: 'Human-Led, AI-Enabled',
      content: [
        {
          heading: 'AI as Co-Thinker',
          details: 'Partner with AI, not replace with it',
        },
        {
          heading: 'Warm Tech Approach',
          details: 'Human-centric technology implementation',
        },
        {
          heading: 'Client-Speed Learning',
          details: 'Adapt and grow at market pace',
        },
        {
          heading: 'Beyond Replacement',
          details: 'AI augments human capability, not substitutes',
        },
      ],
    },
    {
      title: 'Strategic Intelligence',
      content: [
        {
          heading: 'Behavior Over Performance',
          details: 'KBIs supersede traditional KPIs',
        },
        {
          heading: 'Attention Economy',
          details: 'Focus on capturing and directing attention',
        },
        {
          heading: 'Risk Assessment',
          details: 'Distinguish headline risks from actual threats',
        },
        {
          heading: 'Information Balance',
          details: 'Optimize both input and output flows',
        },
      ],
    },
  ];

  return (
    <div className="min-h-screen relative overflow-hidden bg-[#040812]">
      <GradientBackground />

      <div className="absolute inset-0 z-0">
        <div className="absolute left-0 w-3/5 h-full bg-gradient-to-r from-black/80 via-black/60 to-transparent z-10" />
        <motion.div style={{ x: scrollY * 0.1 }}>
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

      <div className="fixed top-0 left-0 w-full h-1 bg-gray-800 z-50">
        <div
          className="h-full bg-blue-500 transition-all duration-300"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      <Container className="relative z-10 -ml-6 lg:-ml-8">
        <div className="pt-16 ml-16">
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

        <div className="mt-24 relative ml-16">
          <div className="absolute top-0 left-0 w-px h-full bg-gradient-to-b from-blue-400/10 to-transparent" />
          <div className="space-y-8">
            {panels.map((panel, idx) => (
              <motion.div
                key={idx}
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: idx * 0.1 }}
                className="relative panel-container"
              >
                <div className="absolute left-0 top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-blue-400/20" />
                <div
                  className="ml-4 w-[480px] bg-black/30 backdrop-blur-md border-l border-white/10 rounded-xl p-6 hover:bg-black/40 transition-all duration-300 cursor-pointer"
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
                              className="group hover:bg-black/40 p-4 rounded-lg transition-all"
                            >
                              <div className="flex items-center gap-3">
                                <ArrowRight className="w-4 h-4 text-blue-400 opacity-0 group-hover:opacity-100 transition-opacity" />
                                <h4 className="text-lg text-blue-300">
                                  {item.heading}
                                </h4>
                              </div>
                              <p className="text-white/80 ml-7 mt-1 font-light">
                                {item.details}
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

      <div className="fixed bottom-8 right-8 max-w-md">
        <div className="bg-black/30 backdrop-blur-sm p-6 rounded-xl border border-white/10">
          <p className="text-gray-300 italic font-light text-lg">
            &ldquo;Half of wisdom is learning what to unlearn&rdquo;
          </p>
          <p className="text-gray-400 text-sm mt-2">— Larry Niven</p>
        </div>
      </div>
    </div>
  );
}

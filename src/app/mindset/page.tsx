'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { Container } from '@/components/shared/Container';
import { GradientBackground } from '@/components/shared/GradientBackground';
import { QuoteContainer } from '@/components/shared/QuoteContainer';
import { TimelineSection } from '@/components/shared/TimelineSection';

interface PanelContent {
  heading: string;
  details: string;
}

interface Panel {
  title: string;
  content: PanelContent[];
}

export default function MindsetPage() {
  const [activePanel, setActivePanel] = useState<number | null>(null);
  const [scrollY, setScrollY] = useState(0);
  const [scrollProgress, setScrollProgress] = useState(0);

  const panels: Panel[] = [
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
      if (activePanel === null) return;

      const target = event.target as Node;
      const panel = document.querySelector(`[data-panel-id="${activePanel}"]`);

      if (panel && !panel.contains(target)) {
        setActivePanel(null);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [activePanel]);

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

        <QuoteContainer
          quote="Half of wisdom is learning what to unlearn"
          author="Larry Niven"
          scrollY={scrollY}
          className="mt-8 mb-16"
        />

        <TimelineSection
          panels={panels}
          activePanel={activePanel}
          onPanelClick={setActivePanel}
          className="mt-8"
        />
      </Container>
    </div>
  );
}

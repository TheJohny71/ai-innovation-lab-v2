'use client';

import React, { useState, useEffect, useMemo, useCallback } from 'react';
import { Zap, Globe, Layers, Flag, Star } from 'lucide-react';
import { debounce } from 'lodash';
import { BaseLayout } from '@/components/shared/BaseLayout';
import { Container } from '@/components/shared/Container';
import { Section, SectionHeader, SectionTitle } from '@/components/shared/Section';
import { Card } from '@/components/shared/Card';
import { GradientText } from '@/components/shared/GradientText';

interface MousePosition {
  x: number;
  y: number;
}

const metrics = {
  cards: [
    {
      icon: Zap,
      title: 'Total Initiatives',
      value: '31',
      subtitle: 'verified',
      mainStats: { trend: 'From 25 Law Firms' },
      additionalStats: {
        'Unique Firms': { value: '25' },
        'AmLaw 100': { value: '19' },
      },
      gradient: {
        border: 'border-purple-400/20',
        bg: 'bg-purple-500/10',
        text: 'text-purple-400',
      },
    },
    {
      icon: Globe,
      title: 'Global Reach',
      value: '18',
      subtitle: 'global deployments',
      mainStats: { trend: '58% Global Scale' },
      additionalStats: {
        'Global Firms': { value: '18' },
        'US Focus': { value: '13' },
      },
      gradient: {
        border: 'border-blue-400/20',
        bg: 'bg-blue-500/10',
        text: 'text-blue-400',
      },
    },
    {
      icon: Layers,
      title: 'Active Projects',
      value: '24',
      subtitle: 'in production',
      mainStats: { trend: '77% Active Rate' },
      additionalStats: {
        Development: { value: '4' },
        Planning: { value: '3' },
      },
      gradient: {
        border: 'border-blue-400/20',
        bg: 'bg-blue-500/10',
        text: 'text-blue-400',
      },
    },
    {
      icon: Flag,
      title: '2024 Launches',
      value: '8',
      subtitle: 'this year',
      mainStats: { trend: 'vs 6 in 2023' },
      additionalStats: {
        '2023 Total': { value: '6' },
        '2022 Total': { value: '4' },
      },
      gradient: {
        border: 'border-teal-400/20',
        bg: 'bg-teal-500/10',
        text: 'text-teal-400',
      },
    },
  ],
};

const StarField: React.FC<{ mousePosition: MousePosition }> = React.memo(({ mousePosition }) => {
  const stars = useMemo(() => {
    return Array(60)
      .fill(null)
      .map(() => ({
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        delay: Math.random() * 3,
        duration: 2 + Math.random() * 3,
        isAccent: Math.random() > 0.7,
        scale: 0.5 + Math.random() * 0.5,
      }));
  }, []);

  return (
    <div className="absolute inset-0 opacity-30">
      {stars.map((star, i) => (
        <div
          key={i}
          className="absolute animate-pulse"
          style={{
            left: star.left,
            top: star.top,
            transform: `translate3d(${mousePosition.x * 20}px, ${mousePosition.y * 20}px, 0) scale(${star.scale})`,
            animationDelay: `${star.delay}s`,
            animationDuration: `${star.duration}s`,
          }}
        >
          <Star
            className={`h-2 w-2 ${star.isAccent ? 'text-teal-400' : 'text-blue-400'}`}
            aria-hidden="true"
          />
        </div>
      ))}
    </div>
  );
});

StarField.displayName = 'StarField';

const DisruptionPage: React.FC = () => {
  const [mousePosition, setMousePosition] = useState<MousePosition>({ x: 0, y: 0 });
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const debouncedSetMousePosition = useMemo(() => {
    return debounce((x: number, y: number) => setMousePosition({ x, y }), 16);
  }, []);

  const handleMouseMove = useCallback(
    (e: MouseEvent) => {
      debouncedSetMousePosition(e.clientX / window.innerWidth, e.clientY / window.innerHeight);
    },
    [debouncedSetMousePosition]
  );

  useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      debouncedSetMousePosition.cancel();
    };
  }, [handleMouseMove, debouncedSetMousePosition]);

  return (
    <BaseLayout>
      <div className="relative min-h-screen overflow-hidden">
        <StarField mousePosition={mousePosition} />
        <Section className="pt-32">
          <Container>
            <SectionHeader>
              <SectionTitle>
                <GradientText>Law Firm AI Disruption Index</GradientText>
                <span className="block text-gray-400 mt-4">Tracking AI innovation in global law firms</span>
              </SectionTitle>
            </SectionHeader>
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-4">
              {metrics.cards.map((card, index) => (
                <Card key={index}>
                  <div className={`p-4 ${card.gradient.bg}`}>
                    <card.icon className={`h-6 w-6 ${card.gradient.text}`} />
                    <h3 className="font-semibold mt-2">{card.title}</h3>
                    <p className="text-lg">{card.value}</p>
                    <p className="text-sm text-gray-400">{card.subtitle}</p>
                  </div>
                </Card>
              ))}
            </div>
          </Container>
        </Section>
      </div>
    </BaseLayout>
  );
};

export default DisruptionPage;

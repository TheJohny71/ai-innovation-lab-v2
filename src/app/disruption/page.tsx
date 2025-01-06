'use client';

import React, { useState, useEffect, useMemo, useCallback } from 'react';
import { Zap, Globe, Layers, Flag, Star, ArrowRight } from 'lucide-react';
import { debounce } from 'lodash';
import { cn } from '@/lib/utils';
import { BaseLayout } from '@/components/shared/BaseLayout';
import { Container } from '@/components/shared/Container';
import {
  Section,
  SectionHeader,
  SectionTitle,
} from '@/components/shared/Section';
import { Button, Card } from '@/components/shared/Button';
import { GradientText } from '@/components/shared/GradientText';

// StarField Component
interface StarFieldProps {
  mousePosition: { x: number; y: number };
}

const StarField: React.FC<StarFieldProps> = ({ mousePosition }) => {
  const [stars, setStars] = useState<Array<{ x: number; y: number; size: number }>>([]);

  useEffect(() => {
    const generateStars = () => {
      const newStars = Array.from({ length: 100 }, () => ({
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        size: Math.random() * 2 + 1,
      }));
      setStars(newStars);
    };

    generateStars();
    window.addEventListener('resize', generateStars);
    return () => window.removeEventListener('resize', generateStars);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none">
      {stars.map((star, index) => {
        const dx = (mousePosition.x - star.x) * 0.01;
        const dy = (mousePosition.y - star.y) * 0.01;
        
        return (
          <div
            key={index}
            className="absolute bg-white rounded-full"
            style={{
              width: star.size,
              height: star.size,
              left: star.x + dx,
              top: star.y + dy,
              opacity: 0.6,
            }}
          />
        );
      })}
    </div>
  );
};

// Implementation Bar Component
interface ImplementationBarProps {
  name: string;
  value: number;
  maxValue?: number;
  className?: string;
}

function ImplementationBar({
  name,
  value,
  maxValue = 14,
  className,
}: ImplementationBarProps) {
  const width = `${(value / maxValue) * 100}%`;
  return (
    <div className={cn('mb-4', className)}>
      <div className="mb-2 flex justify-between">
        <span className="text-sm text-gray-300">{name}</span>
        <span className="text-sm text-gray-400">{value}</span>
      </div>
      <div className="h-2 w-full rounded-full bg-gray-800/50 backdrop-blur-sm">
        <div
          className="h-full rounded-full bg-gradient-to-r from-purple-400 to-blue-400 transition-all duration-500"
          style={{ width }}
        />
      </div>
    </div>
  );
}

const metrics = {
  cards: [
    {
      icon: Zap,
      title: 'Total Initiatives',
      value: '31',
      subtitle: 'verified',
      mainStats: { trend: 'From 25 Law Firms' },
      additionalStats: [
        { label: 'Unique Firms', value: '25' },
        { label: 'AmLaw 100', value: '19' },
        { label: 'Active Projects', value: '24' },
        { label: 'Pipeline', value: '7' },
      ],
      gradient: {
        border: 'border-purple-400/20',
        bg: 'bg-purple-500/10',
        text: 'text-purple-400',
      },
    },
  ],
  implementation: [
    { name: 'Document Analysis & Review', value: 14 },
    { name: 'Legal Research', value: 11 },
    { name: 'Contract Management', value: 9 },
    { name: 'Knowledge Management', value: 8 },
    { name: 'Client Service Automation', value: 7 },
  ],
  deployment: {
    active: 24,
    development: 4,
    planning: 3,
  },
};

const DisruptionPage: React.FC = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <BaseLayout>
      <div className="relative min-h-screen overflow-hidden">
        <StarField mousePosition={mousePosition} />
        <Section className="pt-32">
          <Container>
            <SectionHeader>
              <SectionTitle>
                <GradientText>Law Firm AI Disruption Index</GradientText>
                <span className="mt-4 block text-gray-400">
                  Tracking AI innovation in global law firms
                </span>
              </SectionTitle>
            </SectionHeader>

            {/* Metric Cards */}
            <div className="mt-12 grid grid-cols-1 gap-8 lg:grid-cols-4">
              {metrics.cards.map((card, index) => (
                <Card key={index} className={card.gradient.border}>
                  <div className={`p-6 ${card.gradient.bg}`}>
                    <card.icon className={`h-6 w-6 ${card.gradient.text}`} />
                    <h3 className="mt-2 text-lg font-semibold text-white">
                      {card.title}
                    </h3>
                    <p className="mt-1 text-3xl font-bold text-white">
                      {card.value}
                    </p>
                    <p className="text-sm text-gray-400">{card.subtitle}</p>
                    <p className="mt-2 text-sm text-gray-300">
                      {card.mainStats.trend}
                    </p>
                    <div className="mt-4 space-y-2">
                      {card.additionalStats.map((stat, i) => (
                        <div
                          key={i}
                          className="flex justify-between text-sm text-gray-400"
                        >
                          <span>{stat.label}</span>
                          <span className="font-medium text-gray-300">
                            {stat.value}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </Card>
              ))}
            </div>

            {/* Implementation Types */}
            <div className="mt-16 grid grid-cols-1 gap-8 lg:grid-cols-2">
              <div>
                <h3 className="mb-6 text-xl font-semibold text-white">
                  Implementation Types
                  <span className="ml-2 text-sm font-normal text-gray-400">
                    By practice area
                  </span>
                </h3>
                <div className="space-y-6">
                  {metrics.implementation.map((item, index) => (
                    <ImplementationBar
                      key={index}
                      name={item.name}
                      value={item.value}
                    />
                  ))}
                </div>
              </div>

              {/* Deployment Status */}
              <div>
                <h3 className="mb-6 text-xl font-semibold text-white">
                  Deployment Status
                  <span className="ml-2 text-sm font-normal text-gray-400">
                    Current state
                  </span>
                </h3>
                <div className="grid grid-cols-3 gap-4">
                  <Card className="border-blue-400/20">
                    <div className="p-4 text-center">
                      <p className="text-3xl font-bold text-blue-400">
                        {metrics.deployment.active}
                      </p>
                      <p className="mt-1 text-sm text-gray-400">Active</p>
                    </div>
                  </Card>
                  <Card className="border-blue-400/20">
                    <div className="p-4 text-center">
                      <p className="text-3xl font-bold text-blue-400">
                        {metrics.deployment.development}
                      </p>
                      <p className="mt-1 text-sm text-gray-400">Development</p>
                    </div>
                  </Card>
                  <Card className="border-blue-400/20">
                    <div className="p-4 text-center">
                      <p className="text-3xl font-bold text-blue-400">
                        {metrics.deployment.planning}
                      </p>
                      <p className="mt-1 text-sm text-gray-400">Planning</p>
                    </div>
                  </Card>
                </div>
              </div>
            </div>

            {/* Dataset Access Link */}
            <div className="mt-12 text-center">
              <Button
                variant="outline"
                className="group inline-flex items-center space-x-2"
              >
                <span>Access Complete Enterprise Dataset</span>
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </div>
          </Container>
        </Section>
      </div>
    </BaseLayout>
  );
};

export default DisruptionPage;

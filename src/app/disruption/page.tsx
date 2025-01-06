'use client';

import React, { useState, useEffect } from 'react';
import { ExternalLink, Zap, Globe, Layers, Flag } from 'lucide-react';
import { cn } from '@/lib/utils';
import { BaseLayout } from '@/components/shared/BaseLayout';
import { Container } from '@/components/shared/Container';
import { Button, Card } from '@/components/shared/Button';
import { GradientText } from '@/components/shared/GradientText';
import { ImplementationBar } from '@/components/shared/ImplementationBar';
import { StarField } from '@/components/shared/StarField';

interface MetricCard {
  icon: any;
  title: string;
  value: string;
  subtitle: string;
  mainStats: {
    trend: string;
  };
  additionalStats: Array<{
    label: string;
    value: string;
  }>;
  gradient: {
    border: string;
    bg: string;
    text: string;
  };
}

const metrics = {
  cards: [
    {
      icon: Zap,
      title: 'Total Initiatives',
      value: '31',
      subtitle: 'verified',
      mainStats: {
        trend: 'From 25 Law Firms',
      },
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
    // ... other cards
  ],
  implementation: [
    { name: 'Document Analysis & Review', value: 14 },
    { name: 'Legal Research', value: 11 },
    { name: 'Contract Management', value: 9 },
    { name: 'Knowledge Management', value: 8 },
    { name: 'Client Service Automation', value: 7 },
  ],
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
        
        <div className="fixed inset-0 pt-16">
          <Container maxWidth="xl" className="h-full">
            <div className="flex items-center justify-between mb-8">
              <div>
                <h1 className="text-4xl font-bold">
                  <GradientText className="bg-gradient-to-r from-purple-400 to-cyan-400">
                    Law Firm AI Disruption Index
                  </GradientText>
                </h1>
                <p className="mt-2 text-gray-400">
                  Tracking AI innovation in global law firms
                </p>
              </div>
              <Button
                variant="gradient"
                className="flex items-center gap-2 bg-blue-500 hover:bg-blue-600"
              >
                Access Dataset
                <ExternalLink size={14} />
              </Button>
            </div>

            <div className="grid grid-cols-4 gap-4 mb-6">
              {metrics.cards.map((card, index) => (
                <Card
                  key={index}
                  className={cn(card.gradient.border, 'p-4')}
                  hover
                  glow
                >
                  <div className={cn('flex items-center gap-2 mb-4', card.gradient.text)}>
                    <card.icon className="h-5 w-5" />
                    <span className="text-sm font-medium">{card.title}</span>
                  </div>
                  <div className="mb-2">
                    <div className="text-3xl font-bold text-white">
                      {card.value}
                    </div>
                    <div className="text-sm text-gray-400">{card.subtitle}</div>
                  </div>
                  <p className="text-sm text-gray-300 mb-4">
                    {card.mainStats.trend}
                  </p>
                  <div className="space-y-2">
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
                </Card>
              ))}
            </div>

            <div className="grid grid-cols-3 gap-4">
              <Card hover glow className="border-purple-400/20 p-4">
                <h3 className="text-lg font-semibold text-white mb-4">
                  Implementation Types
                  <span className="text-sm font-normal text-gray-400 ml-2">
                    By practice area
                  </span>
                </h3>
                <div className="space-y-4">
                  {metrics.implementation.map((item, index) => (
                    <ImplementationBar
                      key={index}
                      name={item.name}
                      value={item.value}
                      className="h-1.5"
                    />
                  ))}
                </div>
              </Card>

              <Card hover glow className="border-blue-400/20 p-4">
                <h3 className="text-lg font-semibold text-white mb-4">
                  Deployment Status
                  <span className="text-sm font-normal text-gray-400 ml-2">
                    Current state
                  </span>
                </h3>
                {/* Deployment status content */}
              </Card>

              <Card hover glow className="border-teal-400/20 p-4">
                <h3 className="text-lg font-semibold text-white mb-4">
                  Regional Impact
                  <span className="text-sm font-normal text-gray-400 ml-2">
                    Geographic distribution
                  </span>
                </h3>
                {/* Regional impact content */}
              </Card>
            </div>
          </Container>
        </div>
      </div>
    </BaseLayout>
  );
};

export default DisruptionPage;

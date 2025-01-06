'use client';

import React, { useState, useEffect } from 'react';
import { Zap, Globe, Layers, Flag, Star, ArrowRight } from 'lucide-react';
import { debounce } from 'lodash';
import { cn } from '@/lib/utils';
import { BaseLayout } from '@/components/shared/BaseLayout';
import { Container } from '@/components/shared/Container';
import {
  Section,
  SectionHeader,
  SectionTitle,
  SectionDescription,
} from '@/components/shared/Section';
import { Button, Card } from '@/components/shared/Button';
import { GradientText } from '@/components/shared/GradientText';
import { ImplementationBar } from '@/components/shared/ImplementationBar';
import { StarField } from '@/components/shared/StarField';

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
          <Container maxWidth="xl">
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
                <Card key={index} className={card.gradient.border} hover glow>
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
                  <Card hover glow className="border-blue-400/20">
                    <div className="p-4 text-center">
                      <p className="text-3xl font-bold text-blue-400">
                        {metrics.deployment.active}
                      </p>
                      <p className="mt-1 text-sm text-gray-400">Active</p>
                    </div>
                  </Card>
                  <Card hover glow className="border-blue-400/20">
                    <div className="p-4 text-center">
                      <p className="text-3xl font-bold text-blue-400">
                        {metrics.deployment.development}
                      </p>
                      <p className="mt-1 text-sm text-gray-400">Development</p>
                    </div>
                  </Card>
                  <Card hover glow className="border-blue-400/20">
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
                variant="gradient"
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

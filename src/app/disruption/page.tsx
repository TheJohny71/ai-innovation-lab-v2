'use client';

import React, { useState, useEffect } from 'react';
import { ExternalLink, Zap, Globe, Layers, Flag } from 'lucide-react';
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
    {
      icon: Globe,
      title: 'Global Reach',
      value: '18',
      subtitle: 'global deployments',
      mainStats: { trend: '58% Global Scale' },
      additionalStats: [
        { label: 'Global Firms', value: '18' },
        { label: 'US Focus', value: '13' },
        { label: 'Coverage', value: '58%' },
        { label: 'Regions', value: '4' },
      ],
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
      additionalStats: [
        { label: 'Development', value: '4' },
        { label: 'Planning', value: '3' },
        { label: 'Success Rate', value: '89%' },
        { label: 'Use Cases', value: '12' },
      ],
      gradient: {
        border: 'border-teal-400/20',
        bg: 'bg-teal-500/10',
        text: 'text-teal-400',
      },
    },
    {
      icon: Flag,
      title: '2024 Launches',
      value: '8',
      subtitle: 'this year',
      mainStats: { trend: 'vs 6 in 2023' },
      additionalStats: [
        { label: '2023 Total', value: '6' },
        { label: '2022 Total', value: '4' },
        { label: 'Growth', value: '33%' },
        { label: 'Pipeline', value: '5' },
      ],
      gradient: {
        border: 'border-emerald-400/20',
        bg: 'bg-emerald-500/10',
        text: 'text-emerald-400',
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
  regional: [
    { region: 'North America', value: '42%' },
    { region: 'Europe', value: '28%' },
    { region: 'Asia Pacific', value: '18%' },
    { region: 'Other Regions', value: '12%' },
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
                  <div className={cn('p-6', card.gradient.bg)}>
                    <card.icon className={cn('h-6 w-6', card.gradient.text)} />
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

            {/* Implementation and Deployment Grid */}
            <div className="mt-16 grid grid-cols-1 gap-8 lg:grid-cols-2">
              {/* Implementation Types */}
              <Card hover glow className="border-purple-400/20 p-6">
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
              </Card>

              {/* Regional Impact and Deployment Status */}
              <div className="space-y-8">
                <Card hover glow className="border-blue-400/20 p-6">
                  <h3 className="mb-6 text-xl font-semibold text-white">
                    Regional Impact
                    <span className="ml-2 text-sm font-normal text-gray-400">
                      Geographic distribution
                    </span>
                  </h3>
                  <div className="space-y-6">
                    {metrics.regional.map((item, index) => (
                      <div
                        key={index}
                        className="flex justify-between items-center"
                      >
                        <span className="text-gray-300">{item.region}</span>
                        <span className="text-2xl font-bold text-blue-400">
                          {item.value}
                        </span>
                      </div>
                    ))}
                  </div>
                </Card>

                <Card hover glow className="border-teal-400/20 p-6">
                  <h3 className="mb-6 text-xl font-semibold text-white">
                    Deployment Status
                    <span className="ml-2 text-sm font-normal text-gray-400">
                      Current state
                    </span>
                  </h3>
                  <div className="grid grid-cols-3 gap-4">
                    {[
                      { label: 'Active', value: metrics.deployment.active },
                      { label: 'Development', value: metrics.deployment.development },
                      { label: 'Planning', value: metrics.deployment.planning },
                    ].map((item, index) => (
                      <div key={index} className="text-center">
                        <p className="text-3xl font-bold text-teal-400">
                          {item.value}
                        </p>
                        <p className="mt-1 text-sm text-gray-400">{item.label}</p>
                      </div>
                    ))}
                  </div>
                </Card>
              </div>
            </div>

            {/* Dataset Access Button */}
            <div className="mt-12 text-center">
              <Button
                variant="gradient"
                className="group inline-flex items-center space-x-2"
              >
                <span>Access Complete Enterprise Dataset</span>
                <ExternalLink className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </div>
          </Container>
        </Section>
      </div>
    </BaseLayout>
  );
};

export default DisruptionPage;

'use client';

import React, { useState, useEffect } from 'react';
import { Zap, Globe, Layers, Flag, ArrowRight, Star } from 'lucide-react';
import { debounce } from 'lodash';
import { BaseLayout } from '@/components/shared/BaseLayout';
import { Container } from '@/components/shared/Container';
import { Section, SectionHeader, SectionTitle } from '@/components/shared/Section';
import { Card } from '@/components/shared/Card';
import { GradientText } from '@/components/shared/GradientText';
import type { MetricCardProps, Metrics } from '@/types/metrics';

interface MousePosition {
  x: number;
  y: number;
}

interface StarFieldProps {
  mousePosition: MousePosition;
}

interface ProgressBarProps {
  value: number;
  max: number;
  gradient: string;
}

const StarField: React.FC<StarFieldProps> = React.memo(({ mousePosition }) => {
  const stars = React.useMemo(() => Array(60).fill(null).map(() => ({
    left: `${Math.random() * 100}%`,
    top: `${Math.random() * 100}%`,
    delay: Math.random() * 3,
    duration: 2 + Math.random() * 3,
    isAccent: Math.random() > 0.7,
    scale: 0.5 + Math.random() * 0.5
  })), []);

  return (
    <div className="absolute inset-0 opacity-30">
      {stars.map((star, i) => (
        <div
          key={i}
          className="absolute animate-pulse transition-transform duration-500 ease-cubic-bezier"
          style={{
            left: star.left,
            top: star.top,
            transform: `translate3d(${mousePosition.x * 20}px, ${mousePosition.y * 20}px, 0) scale(${star.scale})`,
            animationDelay: `${star.delay}s`,
            animationDuration: `${star.duration}s`,
            transition: 'transform 0.5s cubic-bezier(0.4, 0, 0.2, 1)'
          }}
        >
          <Star 
            className={`w-2 h-2 ${star.isAccent ? 'text-teal-400' : 'text-blue-400'}`}
            aria-hidden="true"
          />
        </div>
      ))}
    </div>
  );
});

StarField.displayName = 'StarField';

const MetricCard: React.FC<MetricCardProps> = ({ icon: Icon, title, value, subtitle, mainStats, additionalStats, gradient }) => (
  <div className={`rounded-xl p-8 border-2 backdrop-blur-sm bg-gray-900/40 group hover:bg-gray-900/60 transition-colors ${gradient.border}`}>
    <div className="flex items-center space-x-3 mb-6">
      <Icon className={`w-6 h-6 ${gradient.text}`} strokeWidth={1.5} />
      <h3 className={`font-semibold ${gradient.text}`}>{title}</h3>
    </div>
    <div>
      <div className="text-4xl font-bold text-white mb-2">{value}</div>
      <div className="text-sm text-gray-400">{subtitle}</div>
    </div>
    <div className="mt-6 space-y-3">
      <div className="text-sm text-gray-400">{mainStats.trend}</div>
      {Object.entries(additionalStats).map(([key, stat]) => (
        <div key={key} className="flex justify-between text-sm">
          <span className="text-gray-400">{key}</span>
          <span className="text-gray-300">
            {stat.value} {stat.change && <span className="text-green-400">{stat.change}</span>}
          </span>
        </div>
      ))}
    </div>
  </div>
);

const ProgressBar: React.FC<ProgressBarProps> = ({ value, max, gradient }) => (
  <div className="h-2 bg-gray-700/30 rounded-full overflow-hidden">
    <div
      className={`h-full ${gradient}`}
      style={{ width: `${(value / max) * 100}%` }}
    />
  </div>
);
const metrics: Metrics = {
  cards: [
    {
      icon: Zap,
      title: "Total Initiatives",
      value: "31",
      subtitle: "verified",
      mainStats: {
        trend: "From 25 Law Firms"
      },
      additionalStats: {
        "Unique Firms": { value: "25" },
        "AmLaw 100": { value: "19" },
        "Active Projects": { value: "24" },
        "Pilot Phase": { value: "7" }
      },
      gradient: {
        border: "border-purple-400/20",
        bg: "bg-purple-500/10",
        text: "text-purple-400"
      }
    },
    {
      icon: Globe,
      title: "Global Reach",
      value: "18",
      subtitle: "global deployments",
      mainStats: {
        trend: "58% Global Scale"
      },
      additionalStats: {
        "Global Firms": { value: "18" },
        "US Focus": { value: "13" },
        "Coverage": { value: "58%" },
        "Regions": { value: "4" }
      },
      gradient: {
        border: "border-blue-400/20",
        bg: "bg-blue-500/10",
        text: "text-blue-400"
      }
    },
    {
      icon: Layers,
      title: "Active Projects",
      value: "24",
      subtitle: "in production",
      mainStats: {
        trend: "77% Active Rate"
      },
      additionalStats: {
        "Development": { value: "4" },
        "Planning": { value: "3" },
        "Success Rate": { value: "89%" },
        "Use Cases": { value: "12" }
      },
      gradient: {
        border: "border-blue-400/20",
        bg: "bg-blue-500/10",
        text: "text-blue-400"
      }
    },
    {
      icon: Flag,
      title: "2024 Launches",
      value: "8",
      subtitle: "this year",
      mainStats: {
        trend: "vs 6 in 2023"
      },
      additionalStats: {
        "2023 Total": { value: "6" },
        "2022 Total": { value: "4" },
        "Growth": { value: "33%" },
        "Pipeline": { value: "5" }
      },
      gradient: {
        border: "border-teal-400/20",
        bg: "bg-teal-500/10",
        text: "text-teal-400"
      }
    }
  ],
  implementationTypes: [
    { name: "Document Analysis & Review", count: 14 },
    { name: "Legal Research", count: 11 },
    { name: "Contract Management", count: 9 },
    { name: "Knowledge Management", count: 8 },
    { name: "Client Service Automation", count: 7 }
  ],
  deploymentStatus: {
    active: 24,
    development: 4,
    planning: 3
  }
};

const DisruptionPage = () => {
  const [mousePosition, setMousePosition] = useState<MousePosition>({ x: 0, y: 0 });
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const debouncedSetMousePosition = React.useMemo(
    () =>
      debounce((x: number, y: number) => {
        setMousePosition({ x, y });
      }, 16),
    []
  );

  const handleMouseMove = React.useCallback((e: MouseEvent) => {
    debouncedSetMousePosition(
      e.clientX / window.innerWidth,
      e.clientY / window.innerHeight
    );
  }, [debouncedSetMousePosition]);

  useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      debouncedSetMousePosition.cancel();
    };
  }, [handleMouseMove, debouncedSetMousePosition]);

  const currentDate = new Date('2024-12-31T20:30:35Z');
  const currentUser = 'TheJohny71';

  return (
    <BaseLayout>
      <div className="relative min-h-screen overflow-hidden">
        <StarField mousePosition={mousePosition} />
        
        <div className="absolute top-1/4 -left-32 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl" />
        
        <Section className="pt-32">
          <Container>
            <div className={`mb-12 max-w-5xl transition-opacity duration-1000 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
              <SectionHeader>
                <SectionTitle>
                  <GradientText className="from-purple-400 via-blue-400 to-teal-400">
                    Law Firm AI Disruption Index
                  </GradientText>
                  <span className="block text-xl text-gray-400 mt-6">
                    Tracking AI innovation in global law firms
                  </span>
                </SectionTitle>
              </SectionHeader>
            </div>

            <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12 transition-opacity duration-1000 delay-200 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
              {metrics.cards.map((card, index) => (
                <MetricCard key={index} {...card} />
              ))}
            </div>

            <div className={`grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8 transition-opacity duration-1000 delay-400 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
              <Card className="p-8">
                <h3 className="text-2xl font-medium text-white mb-8 flex items-center justify-between">
                  Implementation Types
                  <span className="text-sm text-gray-400">By practice area</span>
                </h3>
                <div className="space-y-8">
                  {metrics.implementationTypes.map((item) => (
                    <div key={item.name} className="space-y-3">
                      <div className="flex justify-between text-base">
                        <span className="text-gray-300 font-medium">{item.name}</span>
                        <span className="text-gray-400">{item.count}</span>
                      </div>
                      <ProgressBar 
                        value={item.count}
                        max={Math.max(...metrics.implementationTypes.map(t => t.count))}
                        gradient="bg-gradient-to-r from-purple-400 to-cyan-400"
                      />
                    </div>
                  ))}
                </div>
              </Card>

              <Card className="p-8 flex flex-col justify-between">
                <div>
                  <h3 className="text-2xl font-medium text-white mb-8 flex items-center justify-between">
                    Deployment Status
                    <span className="text-sm text-gray-400">Current state</span>
                  </h3>
                  <div className="grid grid-cols-3 gap-6 mb-8">
                    {Object.entries(metrics.deploymentStatus).map(([status, count]) => (
                      <div key={status} className="text-center p-6 bg-gray-900/40 rounded-xl border border-blue-400/20">
                        <div className="text-4xl font-bold text-blue-400 mb-2 drop-shadow-[0_0_15px_rgba(96,165,250,0.3)]">
                          {count}
                        </div>
                        <div className="text-sm text-gray-400 capitalize">{status}</div>
                      </div>
                    ))}
                  </div>
                  <div className="text-xs text-gray-500 text-right">
                    Last updated: {currentDate.toLocaleString('en-US', {
                      timeZone: 'UTC',
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric',
                      hour: '2-digit',
                      minute: '2-digit',
                      timeZoneName: 'short'
                    })}
                  </div>
                </div>
                <button 
                  className="w-full flex items-center justify-center gap-1 text-gray-300 hover:text-white transition-colors bg-gray-900/20 rounded-xl border border-blue-400/10 py-4 px-6 mt-auto"
                  onClick={() => {
                    console.log(`Dataset accessed by ${currentUser}`);
                  }}
                  aria-label="Access Complete Enterprise Dataset"
                >
                  <span>Access Complete Enterprise Dataset</span>
                  <ArrowRight className="w-4 h-4 opacity-70" />
                </button>
              </Card>
            </div>
          </Container>
        </Section>
      </div>
    </BaseLayout>
  );
};

export default DisruptionPage;
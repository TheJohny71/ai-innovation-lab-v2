'use client';

import React from 'react';
import {
  Box,
  Globe,
  TrendingUp,
  Zap,
  ExternalLink,
  LucideIcon,
} from 'lucide-react';
import { Button } from '@/components/shared/Button';
import { BaseLayout } from '@/components/shared/BaseLayout';
import { MetricCard } from '@/components/shared/MetricCard';
import { ImplementationTypes } from '@/components/shared/ImplementationTypes';
import DeploymentStatus from '@/components/shared/DeploymentStatus';
import { RegionalImpact } from '@/components/shared/RegionalImpact';
import { fadeIn, slideUp, stagger } from '@/lib/animation';
import type { Metrics } from '@/types/metrics';

const dashboardData: Metrics = {
  cards: [
    {
      icon: Box as LucideIcon,
      title: 'Total Initiatives',
      value: '33',
      subtitle: 'Verified',
      trend: 'From 27 firms',
      stats: {
        'Unique Firms': '27',
        'AmLaw 100': '23',
        'Active Projects': '22',
        'Pilot Phase': '1',
      },
      gradient: {
        background: 'bg-[#171C2C]',
        border: 'border-white/5',
        icon: 'bg-[#1E293B]',
        iconColor: 'text-blue-400',
        text: 'text-blue-400',
      },
    },
    {
      icon: Globe as LucideIcon,
      title: 'Global Reach',
      value: '16',
      subtitle: 'deployments',
      trend: 'Global Scale 48%',
      stats: {
        'Global Firms': '16',
        'US Focus': '7',
        Coverage: '48%',
        Regions: '7',
      },
      gradient: {
        background: 'bg-[#171C2C]',
        border: 'border-white/5',
        icon: 'bg-[#1E293B]',
        iconColor: 'text-blue-400',
        text: 'text-blue-400',
      },
    },
    {
      icon: TrendingUp as LucideIcon,
      title: 'Active Projects',
      value: '22',
      subtitle: 'in production',
      trend: '66.67% Active Rate',
      stats: {
        Development: '0',
        Planning: '0',
        'Success Rate': '66.67%',
        'Use Cases': '14',
      },
      gradient: {
        background: 'bg-[#171C2C]',
        border: 'border-white/5',
        icon: 'bg-[#1E293B]',
        iconColor: 'text-blue-400',
        text: 'text-blue-400',
      },
    },
    {
      icon: Zap as LucideIcon,
      title: '2024 Launches',
      value: '6',
      subtitle: 'in 2024',
      trend: 'vs. 4 in 2023',
      stats: {
        '2023 Total': '4',
        '2022 Total': '3',
        Growth: '50%',
        Pipeline: '0',
      },
      gradient: {
        background: 'bg-[#171C2C]',
        border: 'border-white/5',
        icon: 'bg-[#1E293B]',
        iconColor: 'text-blue-400',
        text: 'text-blue-400',
      },
    },
  ],
  implementationTypes: [
    { name: 'Document Analysis & Review', count: 4 },
    { name: 'Legal Research', count: 6 },
    { name: 'Contract Management', count: 2 },
    { name: 'Knowledge Management', count: 0 },
    { name: 'Client Service Automation', count: 2 },
  ],
  deploymentStatus: {
    active: 22,
    development: 0,
    planning: 0,
  },
  regionalImpact: [
    { name: 'North America', value: 21.21, color: '#94A3B8' },
    { name: 'Europe', value: 3.03, color: '#64748B' },
    { name: 'Asia Pacific', value: 0, color: '#475569' },
    { name: 'Other Regions', value: 75.76, color: '#334155' },
  ],
};

export default function DisruptionPage() {
  return (
    <BaseLayout>
      <div className="min-h-screen p-6 flex flex-col">
        <div className="max-w-7xl mx-auto w-full space-y-8 flex-grow pt-8">
          {/* Header */}
          <div className="flex justify-between items-start">
            <div className={fadeIn}>
              <h1 className="text-5xl font-bold text-white mb-3">
                Law Firm{' '}
                <span className="text-blue-400">AI Disruption Index</span>
              </h1>
              <p className="text-lg text-gray-400">
                Tracking AI innovation in global law firms
              </p>
            </div>
            <Button variant="default" className={`gap-2 ${fadeIn}`}>
              Access Dataset <ExternalLink size={16} />
            </Button>
          </div>

          {/* Info Box */}
          <div
            className={`bg-[#171C2C] backdrop-blur-sm rounded-lg p-4 text-sm text-gray-300 border border-white/5 ${slideUp}`}
          >
            <p className="mb-1">
              Analysis derived from 33 verified AI implementations across
              leading global law firms.
            </p>
            <div className="flex justify-between">
              <p>
                Data aggregated using AI-powered research across publicly
                available sources.
              </p>
              <p className="text-gray-400">Last updated: January 14, 2025</p>
            </div>
          </div>

          {/* Metric Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {dashboardData.cards.map((metric, index) => (
              <MetricCard
                key={index}
                {...metric}
                className={fadeIn}
                {...stagger(index)}
              />
            ))}
          </div>

          {/* Bottom Row */}
          <div className={`grid grid-cols-1 md:grid-cols-3 gap-4 ${slideUp}`}>
            <ImplementationTypes types={dashboardData.implementationTypes} />
            <DeploymentStatus data={dashboardData.deploymentStatus} />
            <RegionalImpact data={dashboardData.regionalImpact} />
          </div>
        </div>
      </div>
    </BaseLayout>
  );
}

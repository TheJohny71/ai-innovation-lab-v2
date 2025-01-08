// File: src/app/disruption/page.tsx
'use client';

import React from 'react';
import { Box, Globe, TrendingUp, Zap, ExternalLink } from 'lucide-react';
import { Button } from '@/components/shared/Button';
import { BaseLayout } from '@/components/shared/BaseLayout';
import { MetricCard } from '@/components/shared/MetricCard';
import { ImplementationTypes } from '@/components/shared/ImplementationTypes';
import { DeploymentStatus } from '@/components/shared/DeploymentStatus';
import { RegionalImpact } from '@/components/shared/RegionalImpact';

const metrics = [
  {
    icon: Box,
    title: 'Total Initiatives',
    value: '31',
    subtitle: 'Verified',
    trend: 'From 25 firms',
    stats: {
      'Unique Firms': '25',
      'AmLaw 100': '19',
      'Active Projects': '24',
      'Pilot Phase': '7',
    },
  },
  {
    icon: Globe,
    title: 'Global Reach',
    value: '18',
    subtitle: 'deployments',
    trend: 'Global Scale 58%',
    stats: {
      'Global Firms': '18',
      'US Focus': '13',
      Coverage: '58%',
      Regions: '4',
    },
  },
  {
    icon: TrendingUp,
    title: 'Active Projects',
    value: '24',
    subtitle: 'in production',
    trend: '77% Active Rate',
    stats: {
      Development: '4',
      Planning: '3',
      'Success Rate': '89%',
      'Use Cases': '12',
    },
  },
  {
    icon: Zap,
    title: '2024 Launches',
    value: '8',
    subtitle: 'in 2024',
    trend: 'vs. 6 in 2023',
    stats: {
      '2023 Total': '6',
      '2022 Total': '4',
      Growth: '33%',
      Pipeline: '5',
    },
  },
];

export default function DisruptionPage() {
  return (
    <BaseLayout>
      <div className="min-h-screen p-6 flex flex-col">
        <div className="max-w-7xl mx-auto w-full space-y-6 flex-grow">
          {/* Header */}
          <div className="flex justify-between items-start">
            <div>
              <h1 className="text-4xl font-bold text-white mb-2">
                Law Firm{' '}
                <span className="text-blue-400">AI Disruption Index</span>
              </h1>
              <p className="text-gray-400">
                Tracking AI innovation in global law firms
              </p>
            </div>
            <Button variant="default" className="gap-2">
              Access Dataset <ExternalLink size={16} />
            </Button>
          </div>

          {/* Info Box */}
          <div className="bg-slate-800/30 backdrop-blur-sm rounded-lg p-4 text-sm text-gray-300">
            <p className="mb-1">
              Analysis derived from 31 verified AI implementations across
              leading global law firms.
            </p>
            <div className="flex justify-between">
              <p>
                Data aggregated using AI-powered research across publicly
                available sources.
              </p>
              <p className="text-gray-400">Last updated: December 26, 2024</p>
            </div>
          </div>

          {/* Metric Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {metrics.map((metric, index) => (
              <MetricCard key={index} {...metric} />
            ))}
          </div>

          {/* Bottom Row */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <ImplementationTypes />
            <DeploymentStatus />
            <RegionalImpact />
          </div>
        </div>
      </div>
    </BaseLayout>
  );
}

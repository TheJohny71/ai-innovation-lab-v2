'use client';

import React from 'react';
import { Box, Globe, TrendingUp, Zap, ExternalLink } from 'lucide-react';
import { Button } from '@/components/shared/Button';
import { BaseLayout } from '@/components/shared/BaseLayout';
import { MetricCard } from '@/components/shared/MetricCard';
import { ImplementationTypes } from '@/components/shared/ImplementationTypes';
import { DeploymentStatus } from '@/components/shared/DeploymentStatus';
import { RegionalImpact } from '@/components/shared/RegionalImpact';
import type { Metrics } from '@/types/metrics';

const dashboardData: Metrics = {
  cards: [
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
      gradient: {
        background: 'bg-slate-800/40',
        border: 'border-white/10',
        icon: 'bg-slate-700/40',
        iconColor: 'text-white/80',
        text: 'text-blue-400/80',
      },
    },
    // ... rest of your cards data
  ],
  implementationTypes: [
    { name: 'Document Analysis & Review', count: 14 },
    { name: 'Legal Research', count: 12 },
    { name: 'Contract Management', count: 10 },
    { name: 'Knowledge Management', count: 8 },
    { name: 'Client Service Automation', count: 6 },
  ],
  deploymentStatus: {
    active: 24,
    development: 4,
    planning: 3,
  },
  regionalImpact: [
    { name: 'North America', value: 42, color: '#94A3B8' },
    { name: 'Europe', value: 28, color: '#64748B' },
    { name: 'Asia Pacific', value: 18, color: '#475569' },
    { name: 'Other Regions', value: 12, color: '#334155' },
  ],
};

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
            {dashboardData.cards.map((metric, index) => (
              <MetricCard key={index} {...metric} />
            ))}
          </div>

          {/* Bottom Row */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <ImplementationTypes types={dashboardData.implementationTypes} />
            <DeploymentStatus data={dashboardData.deploymentStatus} />
            <RegionalImpact data={dashboardData.regionalImpact} />
          </div>
        </div>
      </div>
    </BaseLayout>
  );
}

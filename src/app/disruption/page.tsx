'use client';

import React from 'react';
import { Box, Globe, TrendingUp, Zap, ExternalLink } from 'lucide-react';
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';
import { Button } from '@/components/shared/Button';
import { BaseLayout } from '@/components/shared/BaseLayout';
import { MetricCard } from '@/components/shared/MetricCard';

// Define types for clarity
interface AdditionalStat {
  value: string;
}

interface MetricDefinition {
  icon: React.ComponentType;
  title: string;
  value: string;
  subtitle: string;
  mainStats: {
    trend: string;
  };
  additionalStats: Record<string, AdditionalStat>;
  gradient: {
    background: string;
    border: string;
    text: string;
    icon: string;
    iconColor: string;
  };
}

// Components that were missing
function ImplementationTypes() {
  return (
    <div className="rounded-xl p-6 bg-gradient-to-br from-indigo-950 to-purple-900 border border-purple-500/20 backdrop-blur-sm">
      <h2 className="text-base font-semibold text-white mb-1">
        Implementation Types
      </h2>
      <p className="text-gray-400 text-sm mb-6">By practice area</p>
      {[
        { name: 'Document Analysis & Review', value: 14 },
        { name: 'Legal Research', value: 11 },
        { name: 'Contract Management', value: 9 },
        { name: 'Knowledge Management', value: 8 },
        { name: 'Client Service Automation', value: 7 },
      ].map((item) => (
        <div key={item.name} className="mb-4 last:mb-0">
          <div className="flex justify-between text-sm mb-1.5">
            <span className="text-gray-300 truncate pr-2">{item.name}</span>
            <span className="text-gray-400">{item.value}</span>
          </div>
          <div className="w-full bg-black/25 rounded-full h-1.5">
            <div
              className="h-full rounded-full bg-gradient-to-r from-purple-400 to-blue-400 transition-all duration-500"
              style={{
                width: `${(item.value / 14) * 100}%`,
              }}
            />
          </div>
        </div>
      ))}
    </div>
  );
}

function DeploymentStatus() {
  const data = [
    { name: 'Active', value: 24, color: '#10b981' },
    { name: 'Development', value: 4, color: '#818cf8' },
    { name: 'Planning', value: 3, color: '#c084fc' },
  ];
  const total = data.reduce((sum, item) => sum + item.value, 0);

  return (
    <div className="rounded-xl p-6 bg-gradient-to-br from-emerald-950 to-cyan-900 border border-emerald-500/20 backdrop-blur-sm">
      <h2 className="text-base font-semibold text-white mb-1">
        Deployment Status
      </h2>
      <div className="flex flex-col">
        <div className="h-48 flex justify-center relative">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={data}
                cx="50%"
                cy="50%"
                innerRadius={50}
                outerRadius={70}
                paddingAngle={2}
                dataKey="value"
                startAngle={90}
                endAngle={-270}
              >
                {data.map((entry, index) => (
                  <Cell key={index} fill={entry.color} />
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <span className="text-4xl font-bold text-white">{total}</span>
            <span className="text-sm text-gray-400">total</span>
          </div>
        </div>
        <div className="mt-4 space-y-2">
          {data.map((item) => (
            <div key={item.name} className="flex items-center justify-between">
              <div className="flex items-center">
                <div
                  className="w-2.5 h-2.5 rounded-full mr-2"
                  style={{ backgroundColor: item.color }}
                />
                <span className="text-gray-300 text-sm">{item.name}</span>
              </div>
              <span className="text-gray-300 text-sm">{item.value}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function RegionalImpact() {
  const data = [
    { name: 'North America', value: 42, color: '#10b981' },
    { name: 'Europe', value: 28, color: '#6366f1' },
    { name: 'Asia Pacific', value: 18, color: '#8b5cf6' },
    { name: 'Other Regions', value: 12, color: '#c084fc' },
  ];

  return (
    <div className="rounded-xl p-6 bg-gradient-to-br from-blue-950 to-slate-900 border border-blue-500/20 backdrop-blur-sm">
      <h2 className="text-base font-semibold text-white mb-1">
        Regional Impact
      </h2>
      <div className="flex flex-col">
        <div className="h-48 flex justify-center relative">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={data}
                cx="50%"
                cy="50%"
                innerRadius={50}
                outerRadius={70}
                paddingAngle={2}
                dataKey="value"
                startAngle={90}
                endAngle={-270}
              >
                {data.map((entry, index) => (
                  <Cell key={index} fill={entry.color} />
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <span className="text-4xl font-bold text-white">4</span>
            <span className="text-sm text-gray-400">regions</span>
          </div>
        </div>
        <div className="mt-4 space-y-2">
          {data.map((item) => (
            <div key={item.name} className="flex items-center justify-between">
              <div className="flex items-center">
                <div
                  className="w-2.5 h-2.5 rounded-full mr-2"
                  style={{ backgroundColor: item.color }}
                />
                <span className="text-gray-300 text-sm">{item.name}</span>
              </div>
              <span className="text-gray-300 text-sm">{item.value}%</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
// Define metrics data with proper typing
const metrics: MetricDefinition[] = [
  {
    icon: Box,
    title: 'Total Initiatives',
    value: '31',
    subtitle: 'verified',
    mainStats: { trend: 'From 25 Law Firms' },
    additionalStats: {
      'Unique Firms': { value: '25' },
      'AmLaw 100': { value: '19' },
      'Active Projects': { value: '24' },
      'Pilot Phase': { value: '7' },
    },
    gradient: {
      background: 'bg-gradient-to-br from-indigo-950 to-purple-900',
      border: 'border-purple-500/20',
      text: 'text-purple-400',
      icon: 'bg-purple-900/50',
      iconColor: 'text-purple-400',
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
      Coverage: { value: '58%' },
      Regions: { value: '4' },
    },
    gradient: {
      background: 'bg-gradient-to-br from-blue-950 to-slate-900',
      border: 'border-blue-500/20',
      text: 'text-blue-400',
      icon: 'bg-blue-900/50',
      iconColor: 'text-blue-400',
    },
  },
  // ... rest of your metrics data
];

export default function DisruptionPage() {
  return (
    <BaseLayout>
      <div className="min-h-screen p-6 flex flex-col">
        <div className="max-w-7xl mx-auto w-full space-y-6 flex-grow">
          <div className="flex justify-between items-center mb-4">
            <div>
              <h1 className="text-4xl font-bold text-white mb-2">
                Law Firm{' '}
                <span className="text-blue-400">AI Disruption Index</span>
              </h1>
              <p className="text-gray-400">
                Tracking AI innovation in global law firms
              </p>
            </div>
            <Button
              variant="default"
              className="bg-indigo-500 hover:bg-indigo-600 gap-2"
            >
              Access Dataset
              <ExternalLink size={16} />
            </Button>
          </div>

          <div className="bg-slate-800/50 backdrop-blur-sm rounded-lg p-4 text-sm text-gray-300 mb-6">
            <p className="mb-1">
              Analysis derived from 31 verified AI implementations across
              leading global law firms.
            </p>
            <div className="flex justify-between items-center">
              <p>
                Data aggregated using AI-powered research across publicly
                available sources and industry announcements.
              </p>
              <p className="text-gray-400">Last updated: December 26, 2024</p>
            </div>
          </div>

          <div className="grid grid-cols-4 gap-4">
            {metrics.map((card, index) => (
              <MetricCard key={index} {...card} />
            ))}
          </div>

          <div className="grid grid-cols-3 gap-4">
            <ImplementationTypes />
            <DeploymentStatus />
            <RegionalImpact />
          </div>
        </div>
      </div>
    </BaseLayout>
  );
}

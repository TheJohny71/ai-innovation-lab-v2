'use client';

import React from 'react';
import { Box, Globe, TrendingUp, Zap, ExternalLink } from 'lucide-react';
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';
import { Button } from '@/components/shared/Button';

type AdditionalStat = {
  value: string;
};

interface MetricCardProps {
  icon: React.ElementType;
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
    icon: string;
    iconColor: string;
    text: string;
  };
}

const MetricCard = ({
  icon: Icon,
  title,
  value,
  subtitle,
  mainStats,
  additionalStats,
  gradient,
}: MetricCardProps) => (
  <div
    className={`rounded-xl p-6 ${gradient.background} border ${gradient.border} transition-all duration-300`}
  >
    <div className="flex justify-between items-start mb-4">
      <div
        className={`${gradient.icon} p-2 rounded-lg flex items-center justify-center`}
      >
        <Icon className={gradient.iconColor} size={20} />
      </div>
    </div>
    <div className="space-y-1 mb-4">
      <h3 className="text-white font-medium text-sm">{title}</h3>
      <div className="flex items-baseline gap-2">
        <span className="text-2xl font-bold text-white">{value}</span>
        <span className="text-sm text-gray-400">{subtitle}</span>
      </div>
      <p className={`text-sm ${gradient.text}`}>{mainStats.trend}</p>
    </div>
    <div className="grid grid-cols-2 gap-2">
      {Object.entries(additionalStats).map(([label, stat]) => (
        <div key={label} className="bg-slate-900/30 rounded-lg p-2">
          <div className="text-xs text-gray-400 mb-0.5 truncate">{label}</div>
          <div className="text-sm text-white font-medium">{stat.value}</div>
        </div>
      ))}
    </div>
  </div>
);

const ImplementationTypes = () => (
  <div className="bg-gradient-to-br from-indigo-950 to-purple-900 rounded-xl p-6 border border-purple-500/20">
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
          <span className="text-gray-300 text-sm truncate pr-2">
            {item.name}
          </span>
          <span className="text-gray-400 text-sm">{item.value}</span>
        </div>
        <div className="w-full bg-black/25 rounded-full h-1">
          <div
            className="h-full rounded-full transition-all duration-500"
            style={{
              width: `${(item.value / 14) * 100}%`,
              backgroundColor: '#818cf8',
            }}
          />
        </div>
      </div>
    ))}
  </div>
);

const DeploymentStatus = () => {
  const data = [
    { name: 'Active', value: 24, color: '#10b981' },
    { name: 'Development', value: 4, color: '#818cf8' },
    { name: 'Planning', value: 3, color: '#c084fc' },
  ];
  const total = data.reduce((sum, item) => sum + item.value, 0);

  return (
    <div className="bg-gradient-to-br from-emerald-950 to-cyan-900 rounded-xl p-6 border border-emerald-500/20">
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
            <span className="text-6xl font-bold text-white -mt-2">{total}</span>
            <span className="text-sm text-gray-400 mt-1">total</span>
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
              <span className="text-gray-300 text-sm font-medium">
                {item.value}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const RegionalImpact = () => {
  const data = [
    { name: 'North America', value: 42, color: '#10b981' },
    { name: 'Europe', value: 28, color: '#6366f1' },
    { name: 'Asia Pacific', value: 18, color: '#8b5cf6' },
    { name: 'Other Regions', value: 12, color: '#c084fc' },
  ];

  return (
    <div className="bg-gradient-to-br from-blue-950 to-slate-900 rounded-xl p-6 border border-blue-500/20">
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
            <span className="text-6xl font-bold text-white -mt-2">4</span>
            <span className="text-sm text-gray-400 mt-1">regions</span>
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
};

const metrics: MetricCardProps[] = [
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
  {
    icon: TrendingUp,
    title: 'Active Projects',
    value: '24',
    subtitle: 'in production',
    mainStats: { trend: '77% Active Rate' },
    additionalStats: {
      Development: { value: '4' },
      Planning: { value: '3' },
      'Success Rate': { value: '89%' },
      'Use Cases': { value: '12' },
    },
    gradient: {
      background: 'bg-gradient-to-br from-emerald-950 to-cyan-900',
      border: 'border-emerald-500/20',
      text: 'text-emerald-400',
      icon: 'bg-emerald-900/50',
      iconColor: 'text-emerald-400',
    },
  },
  {
    icon: Zap,
    title: '2024 Launches',
    value: '8',
    subtitle: 'this year',
    mainStats: { trend: 'vs 6 in 2023' },
    additionalStats: {
      '2023 Total': { value: '6' },
      '2022 Total': { value: '4' },
      Growth: { value: '33%' },
      Pipeline: { value: '5' },
    },
    gradient: {
      background: 'bg-gradient-to-br from-violet-950 to-indigo-900',
      border: 'border-violet-500/20',
      text: 'text-violet-400',
      icon: 'bg-violet-900/50',
      iconColor: 'text-violet-400',
    },
  },
];

export default function DisruptionIndex() {
  return (
    <div className="min-h-screen bg-slate-900 p-6 flex flex-col">
      <div className="max-w-7xl mx-auto w-full space-y-6 flex-grow">
        <div className="flex justify-between items-center mb-4">
          <div>
            <h1 className="text-4xl font-bold text-white mb-2">
              Law Firm{' '}
              <span className="text-blue-400">AI Disruption Index</span>
            </h1>
            <p className="text-gray-400 text-base">
              Tracking AI innovation in global law firms
            </p>
          </div>
          <Button
            variant="default"
            className="bg-indigo-500 hover:bg-indigo-600 gap-2 inline-flex items-center"
          >
            Access Dataset
            <ExternalLink size={16} />
          </Button>
        </div>

        <div className="bg-slate-800/50 rounded-lg p-4 text-sm text-gray-300 mb-6">
          <p className="mb-1">
            Analysis derived from 31 verified AI implementations across leading
            global law firms.
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

      <div className="max-w-7xl mx-auto w-full mt-8">
        <div className="flex justify-center gap-4">
          <Button variant="outline">Nexus</Button>
          <Button variant="outline">Accelerate</Button>
          <Button
            variant="default"
            className="bg-indigo-500 hover:bg-indigo-600"
          >
            Disruption
          </Button>
          <Button variant="outline">Mindset</Button>
          <Button variant="outline">Mindset</Button>
          <Button variant="outline">Future-Ready</Button>
        </div>
      </div>
    </div>
  );
}

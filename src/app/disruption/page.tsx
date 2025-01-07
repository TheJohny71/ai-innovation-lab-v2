'use client';

import React from 'react';
import { Box, Globe, TrendingUp, Zap, ExternalLink, Clock } from 'lucide-react';

// ✅ TypeScript Type Definitions
interface MetricCardProps {
  icon: React.ComponentType<any>;
  title: string;
  value: string;
  subtitle: string;
  mainStats: {
    trend: string;
  };
  additionalStats: Record<string, { value: string }>;
  gradient: {
    background: string;
    border: string;
    icon: string;
    iconColor: string;
    text: string;
  };
}

// ✅ Metric Card Component
const MetricCard: React.FC<MetricCardProps> = ({
  icon: Icon,
  title,
  value,
  subtitle,
  mainStats,
  additionalStats,
  gradient,
}) => {
  return (
    <div
      className={`rounded-xl p-6 ${gradient.background} border ${gradient.border}`}
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
            <div className="text-xs text-gray-400 mb-0.5">{label}</div>
            <div className="text-sm text-white font-medium">{stat.value}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

// ✅ Enterprise Data Context Component
const EnterpriseDataContext = () => (
  <div className="mt-8 p-6 rounded-xl bg-slate-800 border border-slate-700">
    <div className="flex items-center gap-3">
      <Clock className="text-blue-400" />
      <h3 className="text-blue-400 font-semibold text-lg">
        Enterprise Data Context
      </h3>
    </div>
    <p className="text-gray-300 mt-2">
      Analysis derived from <strong>31 verified AI implementations</strong>{' '}
      across leading global law firms.
    </p>
    <p className="text-blue-300 text-sm mt-2">
      Data aggregated using AI-powered research across publicly available
      sources and industry announcements.
      <span className="text-gray-400 block mt-1">
        Last updated: December 26, 2024.
      </span>
    </p>
  </div>
);

// ✅ All Metrics for Display
const metricsData: MetricCardProps[] = [
  {
    icon: Box,
    title: 'Total Initiatives',
    value: '31',
    subtitle: 'Verified',
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
    subtitle: 'Global Deployments',
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
    subtitle: 'In Production',
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
    subtitle: 'This Year',
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

// ✅ Final Page Layout with All Cards Rendered
const DisruptionIndex: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-900 p-6 flex flex-col">
      <div className="max-w-7xl mx-auto w-full flex-1 flex flex-col space-y-8">
        {/* ✅ Header with Access Dataset Button */}
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-purple-400 via-blue-400 to-teal-400 bg-clip-text text-transparent">
            Law Firm AI Disruption Index
          </h1>
          <button className="flex items-center gap-2 bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg text-sm transition-colors">
            Access Dataset
            <ExternalLink size={14} />
          </button>
        </div>

        {/* ✅ All Metric Cards Rendered Properly */}
        <div className="grid grid-cols-4 gap-4">
          {metricsData.map((metric, index) => (
            <MetricCard key={index} {...metric} />
          ))}
        </div>

        {/* ✅ Enterprise Data Context Section */}
        <EnterpriseDataContext />
      </div>
    </div>
  );
};

export default DisruptionIndex;

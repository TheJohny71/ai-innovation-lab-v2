'use client';

import React from 'react';
import { Box, Globe, TrendingUp, Zap } from 'lucide-react';
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';
import MetricCard, { MetricCardProps } from '@/components/shared/MetricCard';
import { Button } from '@/components/shared/Button';

// ✅ Metric Cards Data (Fixed Types and Structure)
const metrics: MetricCardProps[] = [
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
      background: 'bg-gradient-to-br from-indigo-900 to-purple-900',
      border: 'border-purple-400/50',
      icon: 'bg-purple-900/50',
      iconColor: 'text-purple-400',
      text: 'text-purple-400',
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
      background: 'bg-gradient-to-br from-blue-900 to-slate-900',
      border: 'border-blue-500/50',
      icon: 'bg-blue-900/50',
      iconColor: 'text-blue-400',
      text: 'text-blue-400',
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
      background: 'bg-gradient-to-br from-teal-900 to-green-900',
      border: 'border-teal-400/50',
      icon: 'bg-teal-900/50',
      iconColor: 'text-teal-400',
      text: 'text-teal-400',
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
      background: 'bg-gradient-to-br from-fuchsia-900 to-violet-900',
      border: 'border-fuchsia-400/50',
      icon: 'bg-fuchsia-900/50',
      iconColor: 'text-fuchsia-400',
      text: 'text-fuchsia-400',
    },
  },
];

// ✅ Implementation Types Card
const ImplementationTypes = () => (
  <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700/50">
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
    ].map((item, index) => (
      <div key={index} className="mb-4 last:mb-0">
        <div className="flex justify-between text-sm mb-1.5">
          <span className="text-gray-300">{item.name}</span>
          <span className="text-gray-400">{item.value}</span>
        </div>
        <div className="w-full bg-slate-700 h-1.5 rounded-full overflow-hidden">
          <div
            className="h-full bg-blue-500 rounded-full"
            style={{ width: `${(item.value / 14) * 100}%` }}
          />
        </div>
      </div>
    ))}
  </div>
);

// ✅ Deployment Status Card
const DeploymentStatus = () => {
  const data = [
    { name: 'Active', value: 24, color: '#10b981' },
    { name: 'Development', value: 4, color: '#6366f1' },
    { name: 'Planning', value: 3, color: '#8b5cf6' },
  ];

  const total = data.reduce((sum, item) => sum + item.value, 0);

  return (
    <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700/50">
      <h2 className="text-base font-semibold text-white mb-1">
        Deployment Status
      </h2>
      <ResponsiveContainer width="100%" height={200}>
        <PieChart>
          <Pie
            data={data}
            dataKey="value"
            cx="50%"
            cy="50%"
            innerRadius={50}
            outerRadius={70}
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.color} />
            ))}
          </Pie>
        </PieChart>
      </ResponsiveContainer>
      <p className="text-center text-white mt-4 text-2xl font-bold">{total}</p>
    </div>
  );
};

// ✅ Regional Impact Card
const RegionalImpact = () => (
  <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700/50">
    <h2 className="text-base font-semibold text-white mb-1">Regional Impact</h2>
    <p className="text-gray-400">North America: 42%</p>
    <p className="text-gray-400">Europe: 28%</p>
    <p className="text-gray-400">Asia Pacific: 18%</p>
    <p className="text-gray-400">Other Regions: 12%</p>
  </div>
);

// ✅ Final Disruption Page Layout
const DisruptionIndex = () => {
  return (
    <div className="min-h-screen bg-slate-900 p-6 flex flex-col space-y-8">
      {/* Header Section */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-4xl font-bold text-white">
            Law Firm <span className="text-blue-400">AI Disruption Index</span>
          </h1>
          <p className="text-gray-400">
            Tracking AI innovation in global law firms
          </p>
        </div>
        <Button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg">
          Access Dataset
        </Button>
      </div>

      {/* Metric Cards Section */}
      <div className="grid grid-cols-4 gap-4">
        {metrics.map((metric, index) => (
          <MetricCard key={index} {...metric} />
        ))}
      </div>

      {/* Cards with Charts Section */}
      <div className="grid grid-cols-3 gap-4">
        <ImplementationTypes />
        <DeploymentStatus />
        <RegionalImpact />
      </div>
    </div>
  );
};

export default DisruptionIndex;

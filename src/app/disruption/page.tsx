'use client';

import React from 'react';
import { Box, Globe, TrendingUp, Zap, ExternalLink, Clock } from 'lucide-react';

// ✅ TypeScript Definitions for Metric Cards
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

// ✅ MetricCard Component
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

// ✅ Component: Implementation Types
const ImplementationTypes = () => (
  <div className="bg-slate-800 p-6 rounded-xl border border-slate-700">
    <h3 className="text-white font-semibold mb-2">Implementation Types</h3>
    <p className="text-gray-400 mb-4 text-sm">By practice area</p>
    {[
      { name: 'Document Analysis & Review', value: 14 },
      { name: 'Legal Research', value: 11 },
      { name: 'Contract Management', value: 9 },
      { name: 'Knowledge Management', value: 8 },
      { name: 'Client Service Automation', value: 7 },
    ].map((item, index) => (
      <div key={index} className="mb-2">
        <span className="text-gray-300">{item.name}</span>
        <div className="w-full bg-slate-700 rounded-full h-2 mt-1">
          <div
            className="h-full bg-blue-500 rounded-full"
            style={{ width: `${(item.value / 14) * 100}%` }}
          />
        </div>
      </div>
    ))}
  </div>
);

// ✅ Component: Deployment Status
const DeploymentStatus = () => (
  <div className="bg-slate-800 p-6 rounded-xl border border-slate-700">
    <h3 className="text-white font-semibold mb-2">Deployment Status</h3>
    <p className="text-gray-400 mb-4 text-sm">Current state</p>
    <p className="text-white text-2xl font-bold">Active: 24</p>
    <p className="text-white">Development: 4 | Planning: 3</p>
  </div>
);

// ✅ Component: Regional Impact
const RegionalImpact = () => (
  <div className="bg-slate-800 p-6 rounded-xl border border-slate-700">
    <h3 className="text-white font-semibold mb-2">Regional Impact</h3>
    <p className="text-gray-400 mb-4 text-sm">Geographic distribution</p>
    <ul className="space-y-2">
      <li className="text-white">North America: 42%</li>
      <li className="text-white">Europe: 28%</li>
      <li className="text-white">Asia Pacific: 18%</li>
      <li className="text-white">Other Regions: 12%</li>
    </ul>
  </div>
);

// ✅ Component: Enterprise Data Context
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

// ✅ Full Page Layout
const DisruptionIndex: React.FC = () => {
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
        background: 'bg-gradient-to-br from-indigo-950 to-purple-900',
        border: 'border-purple-500/20',
        icon: 'bg-purple-900/50',
        iconColor: 'text-purple-400',
        text: 'text-purple-400',
      },
    },
  ];

  return (
    <div className="min-h-screen bg-slate-900 p-6 flex flex-col">
      <div className="max-w-7xl mx-auto w-full flex-1 flex flex-col space-y-8">
        {/* ✅ Header with Access Button */}
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-purple-400 via-blue-400 to-teal-400 bg-clip-text text-transparent">
            Law Firm AI Disruption Index
          </h1>
          <button className="flex items-center gap-2 bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg text-sm transition-colors">
            Access Dataset
            <ExternalLink size={14} />
          </button>
        </div>

        {/* ✅ Metric Cards */}
        <div className="grid grid-cols-4 gap-4">
          {metrics.map((metric, index) => (
            <MetricCard key={index} {...metric} />
          ))}
        </div>

        {/* ✅ Missing Three Cards Fixed Here */}
        <div className="grid grid-cols-3 gap-4 mt-8">
          <ImplementationTypes />
          <DeploymentStatus />
          <RegionalImpact />
        </div>

        {/* ✅ Enterprise Data Context Section */}
        <EnterpriseDataContext />
      </div>
    </div>
  );
};

export default DisruptionIndex;

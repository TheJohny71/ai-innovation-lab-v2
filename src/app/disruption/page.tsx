'use client';

import React from 'react';
import { ExternalLink } from 'lucide-react';
import { MetricCard } from '@/components/shared/MetricCard';
import type { MetricCardProps } from '@/types/metrics';

const metrics: MetricCardProps[] = [
  {
    icon: () => <span>📊</span>,
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
      border: 'border-purple-400/20',
      bg: 'bg-purple-500/10',
      text: 'text-purple-400',
    },
  },
  {
    icon: () => <span>🌐</span>,
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
      border: 'border-blue-400/20',
      bg: 'bg-blue-500/10',
      text: 'text-blue-400',
    },
  },
  {
    icon: () => <span>📈</span>,
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
      border: 'border-teal-400/20',
      bg: 'bg-teal-500/10',
      text: 'text-teal-400',
    },
  },
  {
    icon: () => <span>🚀</span>,
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
      border: 'border-emerald-400/20',
      bg: 'bg-emerald-500/10',
      text: 'text-emerald-400',
    },
  },
];

const DisruptionIndex: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-900 p-6 flex flex-col justify-center">
      <div className="max-w-7xl mx-auto w-full flex-1 flex flex-col">
        {/* ✅ Header Section */}
        <div className="mb-12 flex justify-between items-center">
          <div className="space-y-2">
            <h1 className="text-4xl font-bold bg-gradient-to-r from-purple-400 via-blue-400 to-teal-400 bg-clip-text text-transparent">
              Law Firm AI Disruption Index
            </h1>
            <p className="text-gray-400 text-lg">
              Tracking AI innovation in global law firms
            </p>
          </div>
          <button className="flex items-center gap-2 bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg text-sm transition-colors">
            Access Dataset
            <ExternalLink size={14} />
          </button>
        </div>

        {/* ✅ Metrics Grid (Aligned Consistently) */}
        <div className="grid grid-cols-4 gap-4 mb-12">
          {metrics.map((card, index) => (
            <MetricCard key={index} {...card} />
          ))}
        </div>

        {/* ✅ Added Divider to Separate Sections */}
        <div className="border-t border-slate-700 my-8"></div>

        {/* ✅ Three Column Section Adjusted for Consistency */}
        <div className="grid grid-cols-4 gap-4">
          {/* Column 1: Implementation Types */}
          <div className="h-80 p-6 bg-slate-900/50 rounded-xl border border-slate-800/50">
            <h2 className="text-base font-semibold text-white mb-1">
              Implementation Types
            </h2>
            <p className="text-gray-500 text-sm mb-6">By practice area</p>
            <p className="text-sm text-gray-300">Document Analysis: 14</p>
            <p className="text-sm text-gray-300">Legal Research: 11</p>
            <p className="text-sm text-gray-300">Contract Management: 9</p>
            <p className="text-sm text-gray-300">Knowledge Management: 8</p>
          </div>

          {/* Column 2: Deployment Status */}
          <div className="h-80 p-6 bg-slate-900/50 rounded-xl border border-slate-800/50">
            <h2 className="text-base font-semibold text-white mb-1">
              Deployment Status
            </h2>
            <p className="text-gray-500 text-sm mb-6">Current state</p>
            <p className="text-sm text-gray-300">Active: 24</p>
            <p className="text-sm text-gray-300">Development: 4</p>
            <p className="text-sm text-gray-300">Planning: 3</p>
          </div>

          {/* Column 3: Regional Impact */}
          <div className="h-80 p-6 bg-slate-900/50 rounded-xl border border-slate-800/50">
            <h2 className="text-base font-semibold text-white mb-1">
              Regional Impact
            </h2>
            <p className="text-gray-500 text-sm mb-6">
              Geographic distribution
            </p>
            <p className="text-sm text-gray-300">North America: 42%</p>
            <p className="text-sm text-gray-300">Europe: 28%</p>
            <p className="text-sm text-gray-300">Asia Pacific: 18%</p>
            <p className="text-sm text-gray-300">Other Regions: 12%</p>
          </div>
        </div>

        {/* ✅ Data Summary (Minimal) */}
        <p className="text-sm text-gray-500 mt-8 text-center">
          Data last updated: January 2024 | Sources: Verified Firm Submissions
        </p>
      </div>
    </div>
  );
};

export default DisruptionIndex;

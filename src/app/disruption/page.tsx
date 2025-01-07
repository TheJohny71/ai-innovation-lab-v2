'use client';

import React from 'react';
import { ExternalLink } from 'lucide-react';
import { MetricCard, MetricCardProps } from '@/components/shared/MetricCard';
import { ImplementationBar } from '@/components/shared/ImplementationBar';

const metrics: MetricCardProps[] = [
  {
    icon: () => <span>⚡</span>,
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
      border: 'border-purple-400/20',
      bg: 'bg-purple-500/10',
      text: 'text-purple-400',
    },
  },
  {
    icon: () => <span>🌍</span>,
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
      border: 'border-blue-400/20',
      bg: 'bg-blue-500/10',
      text: 'text-blue-400',
    },
  },
  {
    icon: () => <span>📈</span>,
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
      border: 'border-teal-400/20',
      bg: 'bg-teal-500/10',
      text: 'text-teal-400',
    },
  },
  {
    icon: () => <span>🚀</span>,
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
        </div>

        {/* ✅ Metrics Grid with Updated Layout and Content */}
        <div className="grid grid-cols-4 gap-4 mb-12">
          {metrics.map((card, index) => (
            <MetricCard key={index} {...card} />
          ))}
        </div>

        {/* ✅ Implementation Types Section */}
        <div className="grid grid-cols-3 gap-4 mb-12">
          {/* Implementation Types */}
          <div className="bg-slate-900/50 rounded-xl p-6 border border-slate-800/50">
            <h2 className="text-base font-semibold text-white mb-1">
              Implementation Types
            </h2>
            <p className="text-gray-500 text-sm mb-6">By practice area</p>
            <ImplementationBar name="Document Analysis & Review" value={14} />
            <ImplementationBar name="Legal Research" value={11} />
            <ImplementationBar name="Contract Management" value={9} />
            <ImplementationBar name="Knowledge Management" value={8} />
            <ImplementationBar name="Client Service Automation" value={7} />
          </div>

          {/* ✅ Deployment Status Section Updated */}
          <div className="bg-slate-900/50 rounded-xl p-6 border border-slate-800/50 flex flex-col">
            <h2 className="text-base font-semibold text-white mb-6">
              Deployment Status
            </h2>
            <div className="flex flex-col gap-4">
              <div className="p-4 bg-slate-800 rounded-lg text-center">
                <p className="text-3xl font-bold text-blue-400">24</p>
                <p className="text-sm text-gray-300">Active</p>
              </div>
              <div className="p-4 bg-slate-800 rounded-lg text-center">
                <p className="text-3xl font-bold text-purple-400">4</p>
                <p className="text-sm text-gray-300">Development</p>
              </div>
              <div className="p-4 bg-slate-800 rounded-lg text-center">
                <p className="text-3xl font-bold text-teal-400">3</p>
                <p className="text-sm text-gray-300">Planning</p>
              </div>
            </div>
          </div>

          {/* ✅ Regional Impact Section */}
          <div className="bg-slate-900/50 rounded-xl p-6 border border-slate-800/50">
            <h2 className="text-base font-semibold text-white mb-6">
              Regional Impact
            </h2>
            <p className="text-sm text-gray-300 mb-2">North America: 42%</p>
            <p className="text-sm text-gray-300 mb-2">Europe: 28%</p>
            <p className="text-sm text-gray-300 mb-2">Asia Pacific: 18%</p>
            <p className="text-sm text-gray-300 mb-2">Other Regions: 12%</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DisruptionIndex;

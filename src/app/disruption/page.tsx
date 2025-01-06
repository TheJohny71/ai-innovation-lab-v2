'use client';

import React from 'react';
import { ExternalLink } from 'lucide-react';
import { Button } from '@/components/shared/Button';

// ✅ Explicit Type Definitions for the Metric Card Component
interface MetricCardProps {
  icon: React.ReactNode;
  title: string;
  value: string;
  subtitle: string;
  subtext?: string;
  stats: {
    label: string;
    value: string;
  }[];
  iconColor?: string;
}

// ✅ Reusable Metric Card Component (Now Fully Typed)
const MetricCard: React.FC<MetricCardProps> = ({
  icon,
  title,
  value,
  subtitle,
  subtext,
  stats,
  iconColor,
}) => (
  <div className="bg-slate-900/50 rounded-xl p-6 border border-slate-800/50 hover:border-slate-700/50 transition-colors">
    <div className="flex items-center gap-2 mb-6">
      <span className={`text-lg ${iconColor}`}>{icon}</span>
      <span className={`text-sm font-medium ${iconColor}`}>{title}</span>
    </div>
    <div className="flex flex-col mb-4">
      <div className="text-5xl font-bold text-white mb-1">{value}</div>
      <div className="text-sm text-gray-400">{subtitle}</div>
    </div>
    {subtext && <div className="text-sm text-gray-500 mb-4">{subtext}</div>}
    <div className="space-y-2">
      {stats.map((stat, index) => (
        <div key={index} className="flex justify-between items-center">
          <span className="text-gray-500">{stat.label}</span>
          <span className="text-gray-400">{stat.value}</span>
        </div>
      ))}
    </div>
  </div>
);

// ✅ Main Disruption Index Page Component
const DisruptionIndex: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-900 p-6 flex flex-col">
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
          <Button
            variant="gradient"
            className="flex items-center gap-2 text-white"
          >
            Access Dataset
            <ExternalLink size={14} />
          </Button>
        </div>

        {/* ✅ Metrics Grid Section */}
        <div className="grid grid-cols-4 gap-4 mb-12">
          <MetricCard
            icon="📊"
            iconColor="text-purple-500"
            title="Total Initiatives"
            value="31"
            subtitle="Verified"
            subtext="From 25 Law Firms"
            stats={[
              { label: 'Unique Firms', value: '25' },
              { label: 'AmLaw 100', value: '19' },
              { label: 'Active Projects', value: '24' },
              { label: 'Pilot Phase', value: '7' },
            ]}
          />
          <MetricCard
            icon="🌐"
            iconColor="text-blue-500"
            title="Global Reach"
            value="18"
            subtitle="Global Deployments"
            subtext="58% Global Scale"
            stats={[
              { label: 'Global Firms', value: '18' },
              { label: 'US Focus', value: '13' },
              { label: 'Coverage', value: '58%' },
              { label: 'Regions', value: '4' },
            ]}
          />
          <MetricCard
            icon="📈"
            iconColor="text-teal-500"
            title="Active Projects"
            value="24"
            subtitle="In Production"
            subtext="77% Active Rate"
            stats={[
              { label: 'Development', value: '4' },
              { label: 'Planning', value: '3' },
              { label: 'Success Rate', value: '89%' },
              { label: 'Use Cases', value: '12' },
            ]}
          />
          <MetricCard
            icon="🚀"
            iconColor="text-emerald-500"
            title="2024 Launches"
            value="8"
            subtitle="This Year"
            subtext="vs 6 in 2023"
            stats={[
              { label: '2023 Total', value: '6' },
              { label: '2022 Total', value: '4' },
              { label: 'Growth', value: '33%' },
              { label: 'Pipeline', value: '5' },
            ]}
          />
        </div>

        {/* ✅ Three Column Section */}
        <div className="grid grid-cols-3 gap-4">
          {/* Column 1 */}
          <div className="bg-slate-900/50 rounded-xl p-6 border border-slate-800/50 hover:border-slate-700/50 transition-colors">
            <h2 className="text-base font-semibold text-white mb-1">
              Implementation Types
            </h2>
            <p className="text-gray-500 text-sm mb-6">By practice area</p>
          </div>

          {/* Column 2 */}
          <div className="bg-slate-900/50 rounded-xl p-6 border border-slate-800/50 hover:border-slate-700/50 transition-colors">
            <h2 className="text-base font-semibold text-white mb-1">
              Deployment Status
            </h2>
            <p className="text-gray-500 text-sm mb-6">Current state</p>
          </div>

          {/* Column 3 */}
          <div className="bg-slate-900/50 rounded-xl p-6 border border-slate-800/50 hover:border-slate-700/50 transition-colors">
            <h2 className="text-base font-semibold text-white mb-1">
              Regional Impact
            </h2>
            <p className="text-gray-500 text-sm mb-6">
              Geographic distribution
            </p>
          </div>
        </div>

        {/* ✅ Updated Bottom Navigation Section */}
        <div className="fixed bottom-0 left-0 right-0 flex justify-center gap-4 p-3 bg-slate-900/90 backdrop-blur-sm border-t border-slate-800/50">
          <Button variant="gradient" className="text-sm">
            Welcome
          </Button>
          <Button variant="gradient" className="text-sm">
            Solutions
          </Button>
          <Button variant="gradient" className="text-sm">
            Disruption
          </Button>
          <Button variant="gradient" className="text-sm">
            Apps
          </Button>
        </div>
      </div>
    </div>
  );
};

export default DisruptionIndex;

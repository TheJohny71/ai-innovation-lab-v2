import React from 'react';
import { Box, Globe, TrendingUp, Zap, ExternalLink } from 'lucide-react';
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';
import { Button } from '@/components/shared/Button';

// Define TypeScript types for props
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

const MetricCard: React.FC<MetricCardProps> = ({
  icon: Icon,
  title,
  value,
  subtitle,
  mainStats,
  additionalStats,
  gradient,
}) => (
  <div
    className={`rounded-xl p-6 ${gradient.background} border ${gradient.border}`}
  >
    <div className="mb-6">
      <div className={`${gradient.icon} p-2 rounded-lg w-fit`}>
        <Icon className={`${gradient.iconColor} w-5 h-5`} />
      </div>
    </div>
    <div className="space-y-1 mb-6">
      <h3 className="text-white text-sm font-medium">{title}</h3>
      <div className="space-y-1">
        <div className="flex items-baseline gap-2">
          <span className="text-3xl font-bold text-white">{value}</span>
          <span className="text-sm text-gray-400">{subtitle}</span>
        </div>
        <p className={`text-sm ${gradient.text}`}>{mainStats.trend}</p>
      </div>
    </div>
    <div className="grid grid-cols-2 gap-4">
      {Object.entries(additionalStats).map(([label, stat]) => (
        <div
          key={label}
          className={`${gradient.background} rounded-lg bg-opacity-30 p-2`}
        >
          <p className="text-gray-400 text-xs mb-1">{label}</p>
          <p className="text-white text-sm font-medium">{stat.value}</p>
        </div>
      ))}
    </div>
  </div>
);

// Implementation Types Component
const ImplementationTypes = () => (
  <div className="bg-indigo-950 bg-opacity-50 rounded-xl p-6 border border-indigo-500/20">
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
          <span className="text-gray-300">{item.name}</span>
          <span className="text-gray-400">{item.value}</span>
        </div>
        <div className="w-full bg-black/25 h-1.5 rounded-full">
          <div
            className="h-full bg-blue-500 rounded-full"
            style={{ width: `${(item.value / 14) * 100}%` }}
          />
        </div>
      </div>
    ))}
  </div>
);

// Disruption Index Main Component
const DisruptionIndex = () => {
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
        background: 'bg-gradient-to-br from-purple-900 to-indigo-900',
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
        background: 'bg-gradient-to-br from-blue-900 to-slate-900',
        border: 'border-blue-500/20',
        text: 'text-blue-400',
        icon: 'bg-blue-900/50',
        iconColor: 'text-blue-400',
      },
    },
  ];

  return (
    <div className="min-h-screen bg-slate-900 p-6 flex flex-col">
      <div className="max-w-7xl mx-auto w-full space-y-6 flex-grow">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-4xl font-bold text-white">
              Law Firm{' '}
              <span className="text-blue-400">AI Disruption Index</span>
            </h1>
            <p className="text-gray-400">
              Tracking AI innovation in global law firms
            </p>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          {metrics.map((card, index) => (
            <MetricCard key={index} {...card} />
          ))}
        </div>

        <ImplementationTypes />
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
          <Button variant="outline">Future-Ready</Button>
        </div>
      </div>
    </div>
  );
};

export default DisruptionIndex;

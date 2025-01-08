// File: src/components/shared/MetricCard.tsx
'use client';

import React from 'react';
import { LucideIcon } from 'lucide-react';

interface MetricCardProps {
  icon: LucideIcon;
  title: string;
  value: string;
  subtitle: string;
  trend: string;
  stats: Record<string, string>;
}

export const MetricCard: React.FC<MetricCardProps> = ({
  icon: Icon,
  title,
  value,
  subtitle,
  trend,
  stats,
}) => (
  <div className="rounded-xl bg-slate-800/40 border border-white/10 p-6 relative backdrop-blur-sm">
    <div className="flex justify-between items-start mb-6">
      <h3 className="text-gray-200 text-sm font-medium">{title}</h3>
      <div className="bg-slate-700/40 w-10 h-10 rounded-lg flex items-center justify-center backdrop-blur-sm">
        <Icon className="text-white/80" size={20} />
      </div>
    </div>

    <div className="space-y-2 mb-6">
      <div className="text-4xl font-bold text-white">{value}</div>
      <div className="text-gray-300 text-sm">{subtitle}</div>
      <div className="text-blue-400/80 text-sm">{trend}</div>
    </div>

    <div className="grid grid-cols-2 gap-4">
      {Object.entries(stats).map(([label, value]) => (
        <div key={label} className="min-w-0">
          <div className="text-gray-400 text-xs truncate mb-1">{label}</div>
          <div className="text-white text-base font-medium">{value}</div>
        </div>
      ))}
    </div>
  </div>
);

export type { MetricCardProps };

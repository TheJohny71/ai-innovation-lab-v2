'use client';

import React from 'react';
import { LucideProps } from 'lucide-react';

interface MetricCardProps {
  icon: React.ComponentType<LucideProps>;
  title: string;
  value: string;
  subtitle: string;
  trend: string;
  stats: Record<string, string>;
  gradient: {
    background: string;
    border: string;
    icon: string;
    iconColor: string;
    text: string;
  };
}

export const MetricCard: React.FC<MetricCardProps> = ({
  icon: Icon,
  title,
  value,
  subtitle,
  trend,
  stats,
  gradient,
}) => (
  <div
    className={`rounded-xl ${gradient.background} border ${gradient.border} p-6 relative backdrop-blur-sm`}
  >
    <div className="flex justify-between items-start mb-6">
      <h3 className="text-gray-200 text-sm font-medium">{title}</h3>
      <div
        className={`${gradient.icon} w-10 h-10 rounded-lg flex items-center justify-center backdrop-blur-sm`}
      >
        <Icon className={gradient.iconColor} size={20} />
      </div>
    </div>

    <div className="space-y-2 mb-6">
      <div className="text-4xl font-bold text-white">{value}</div>
      <div className="text-gray-300 text-sm">{subtitle}</div>
      <div className={`${gradient.text} text-sm`}>{trend}</div>
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

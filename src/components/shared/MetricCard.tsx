'use client';

import React from 'react';
import { LucideIcon } from 'lucide-react';

interface MetricCardProps {
  icon: LucideIcon;
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

export function MetricCard({
  icon: Icon,
  title,
  value,
  subtitle,
  mainStats,
  additionalStats,
  gradient,
}: MetricCardProps) {
  return (
    <div
      className={`rounded-xl p-6 ${gradient.background} border ${gradient.border} backdrop-blur-sm`}
    >
      <div className="flex justify-between items-start mb-4">
        <div
          className={`${gradient.icon} p-2 rounded-lg flex items-center justify-center`}
        >
          <Icon className={gradient.iconColor} size={20} />
        </div>
      </div>

      <div className="space-y-2 mb-4">
        <h3 className="text-sm font-medium text-gray-300">{title}</h3>
        <div className="flex items-baseline gap-2">
          <span className="text-2xl font-bold text-white">{value}</span>
          <span className="text-sm text-gray-400">{subtitle}</span>
        </div>
        <p className={`text-sm ${gradient.text}`}>{mainStats.trend}</p>
      </div>

      <div className="grid grid-cols-2 gap-2">
        {Object.entries(additionalStats).map(([label, stat]) => (
          <div
            key={label}
            className="bg-black/20 backdrop-blur-sm rounded-lg p-2"
          >
            <div className="text-xs text-gray-400 mb-1">{label}</div>
            <div className="text-sm font-medium text-white">{stat.value}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export type { MetricCardProps };

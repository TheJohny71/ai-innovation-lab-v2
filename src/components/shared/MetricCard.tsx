'use client';

import React from 'react';
import { LucideIcon } from 'lucide-react';

interface GradientStyle {
  background: string;
  border: string;
  icon: string;
  iconColor: string;
  text: string;
}

export interface MetricCardProps {
  icon: LucideIcon;
  title: string;
  value: string;
  subtitle: string;
  trend: string;
  stats: Record<string, string>;
  gradient: GradientStyle;
}

export const MetricCard: React.FC<MetricCardProps> = ({
  icon: Icon,
  title,
  value,
  subtitle,
  trend,
  stats,
  gradient,
}) => {
  return (
    <div
      className={`relative overflow-hidden rounded-xl border ${gradient.border} p-6`}
    >
      <div
        className={`absolute inset-0 pointer-events-none ${gradient.background}`}
      />
      <div className="relative z-10 flex flex-col h-full">
        <div className="flex items-center gap-2">
          <div className={`p-2 rounded-lg ${gradient.icon}`}>
            <Icon className={`h-5 w-5 ${gradient.iconColor}`} />
          </div>
          <h3 className="text-sm font-medium">{title}</h3>
        </div>
        <div className="mt-4 flex flex-col">
          <div className="flex items-baseline gap-2">
            <p className={`text-2xl font-semibold ${gradient.text}`}>{value}</p>
            <span className="text-sm text-gray-500">{trend}</span>
          </div>
          <p className="text-sm text-gray-500">{subtitle}</p>
        </div>
        <div className="mt-4 grid grid-cols-2 gap-4 pt-4 border-t border-gray-100">
          {Object.entries(stats).map(([key, stat]) => (
            <div key={key} className="flex flex-col">
              <p className="text-sm font-medium">{stat}</p>
              <p className="text-xs text-gray-500">{key}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

'use client';

import React from 'react';
import type { LucideIcon } from 'lucide-react';

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
  trend?: string;
  stats?: Record<string, string>;
  gradient?: GradientStyle;
  className?: string;
}

export const MetricCard: React.FC<MetricCardProps> = ({
  icon: Icon,
  title,
  value,
  subtitle,
  trend,
  stats,
  gradient = {
    background: 'bg-slate-800/40',
    border: 'border-white/10',
    icon: 'bg-slate-700/40',
    iconColor: 'text-purple-400',
    text: 'text-purple-400',
  },
  className = '',
}) => {
  return (
    <div
      className={`relative rounded-xl border ${gradient.border} ${gradient.background} 
                 backdrop-blur-sm p-6 hover:bg-slate-800/60 transition-all duration-300 ${className}
                 hover:shadow-lg hover:shadow-purple-500/10`}
    >
      <div className="flex flex-col h-full">
        <div className="flex items-center gap-2 mb-3">
          <div className={`${gradient.icon} rounded-lg p-1`}>
            <Icon className={`h-5 w-5 ${gradient.iconColor}`} />
          </div>
          <h3 className={`text-sm font-medium ${gradient.text}`}>{title}</h3>
        </div>

        <div className="flex flex-col">
          <div className="flex items-baseline gap-2">
            <p className="text-4xl font-bold text-white tracking-tight">
              {value}
            </p>
            {trend && <span className="text-sm text-slate-400">{trend}</span>}
          </div>
          <p className="text-sm text-slate-400 mt-1 line-clamp-2">{subtitle}</p>
        </div>

        {stats && Object.keys(stats).length > 0 && (
          <div className="grid grid-cols-2 gap-4 mt-4 pt-4 border-t border-white/5">
            {Object.entries(stats).map(([key, stat]) => (
              <div key={key} className="flex flex-col">
                <p className="text-sm font-medium text-white">{stat}</p>
                <p className="text-xs text-slate-400">{key}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default MetricCard;

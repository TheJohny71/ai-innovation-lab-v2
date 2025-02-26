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
    background: 'bg-[#171C2C]',
    border: 'border-white/5',
    icon: 'bg-[#1E293B]',
    iconColor: 'text-blue-400',
    text: 'text-blue-400',
  },
  className = '',
}) => {
  return (
    <div
      className={`relative rounded-xl border ${gradient.border} ${gradient.background} 
                 backdrop-blur-sm p-6 ${className} transition-all duration-300 
                 hover:scale-102 hover:shadow-lg hover:shadow-blue-500/10 group`}
    >
      <div className="flex flex-col h-full">
        <div className="flex items-center gap-2 mb-3 transition-transform duration-300 group-hover:translate-x-1">
          <div
            className={`${gradient.icon} rounded-lg p-2 transition-colors duration-300 group-hover:bg-opacity-80`}
          >
            <Icon
              className={`h-5 w-5 ${gradient.iconColor} transform transition-transform group-hover:scale-110`}
            />
          </div>
          <h3 className={`text-sm font-medium ${gradient.text}`}>{title}</h3>
        </div>

        <div className="flex flex-col">
          <div className="flex items-baseline gap-2">
            <p className="text-3xl font-bold text-white tracking-tight transition-all duration-300 group-hover:text-blue-300">
              {value}
            </p>
            {trend && <span className="text-sm text-gray-400">{trend}</span>}
          </div>
          <p className="text-sm text-gray-400 mt-1 line-clamp-2">{subtitle}</p>
        </div>

        {stats && Object.keys(stats).length > 0 && (
          <div className="grid grid-cols-2 gap-4 mt-4 pt-4 border-t border-white/5">
            {Object.entries(stats).map(([key, stat]) => (
              <div
                key={key}
                className="flex flex-col transition-transform duration-300 hover:translate-y-[-2px]"
              >
                <p className="text-sm font-medium text-white">{stat}</p>
                <p className="text-xs text-gray-400">{key}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default MetricCard;

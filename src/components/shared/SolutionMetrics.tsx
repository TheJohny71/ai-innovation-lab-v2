'use client';

import React, { useMemo } from 'react';
import { Layers, LineChart, Server, LucideIcon } from 'lucide-react';
import type { Solution } from '@/app/accelerate/types';

interface GradientStyle {
  background: string;
  border: string;
  icon: string;
  iconColor: string;
  text: string;
}

interface MetricCardProps {
  icon: LucideIcon;
  title: string;
  value: string;
  subtitle: string;
  trend: string;
  stats: {
    [key: string]: string;
  };
  gradient: GradientStyle;
}

const MetricCard: React.FC<MetricCardProps> = ({
  icon: Icon,
  title,
  value,
  subtitle,
  trend,
  stats,
  gradient,
}) => (
  <div
    className={`rounded-xl ${gradient.background} border ${gradient.border} p-4 relative backdrop-blur-sm`}
  >
    <div className="flex justify-between items-start mb-4">
      <h3 className="text-gray-200 text-sm font-medium">{title}</h3>
      <div
        className={`${gradient.icon} w-8 h-8 rounded-lg flex items-center justify-center backdrop-blur-sm`}
      >
        <Icon className={gradient.iconColor} size={16} />
      </div>
    </div>

    <div className="space-y-1 mb-4">
      <div className="text-2xl font-bold text-white">{value}</div>
      <div className="text-gray-300 text-xs">{subtitle}</div>
      <div className={`${gradient.text} text-xs`}>{trend}</div>
    </div>

    <div className="grid grid-cols-2 gap-3">
      {Object.entries(stats).map(([label, value]) => (
        <div key={label} className="min-w-0">
          <div className="text-gray-400 text-xs truncate mb-0.5">{label}</div>
          <div className="text-white text-sm font-medium">{value}</div>
        </div>
      ))}
    </div>
  </div>
);

interface SolutionMetricsProps {
  solutions: Solution[];
}

const SolutionMetrics: React.FC<SolutionMetricsProps> = ({ solutions }) => {
  const metrics = useMemo(() => {
    const totalSolutions = solutions.length;
    const categories = [...new Set(solutions.map((s) => s.category))];
    const totalFeatures = solutions.reduce(
      (sum, s) => sum + s.features.length,
      0
    );

    const categoryCount = categories.reduce(
      (acc, category) => {
        acc[category] = solutions.filter((s) => s.category === category).length;
        return acc;
      },
      {} as Record<string, number>
    );

    const mostCommonCategory =
      categories.length > 0
        ? Object.entries(categoryCount).reduce((a, b) =>
            a[1] > b[1] ? a : b
          )[0]
        : 'N/A';

    const averageFeatures = Math.round(
      totalFeatures / Math.max(1, totalSolutions)
    );
    const maxFeatures =
      solutions.length > 0
        ? Math.max(...solutions.map((s) => s.features.length))
        : 0;

    const solutionsPerCategory = (
      totalSolutions / Math.max(1, categories.length)
    ).toFixed(1);

    const activeCount = solutions.filter((s) => s.status === 'active').length;
    const developmentCount = solutions.filter(
      (s) => s.status === 'development'
    ).length;

    const metrics: MetricCardProps[] = [
      {
        icon: Layers,
        title: 'Total Solutions',
        value: totalSolutions.toString(),
        subtitle: 'Available AI Tools',
        trend: `${categories.length} Different Categories`,
        stats: {
          Active: activeCount.toString(),
          'In Development': developmentCount.toString(),
        },
        gradient: {
          background:
            'bg-gradient-to-br from-blue-500/10 via-transparent to-transparent',
          border: 'border-blue-500/20',
          icon: 'bg-blue-500/10',
          iconColor: 'text-blue-400',
          text: 'text-blue-400',
        },
      },
      {
        icon: LineChart,
        title: 'Implementation Types',
        value: totalFeatures.toString(),
        subtitle: 'Total Available Features',
        trend: 'Across All Solutions',
        stats: {
          'Avg Features': averageFeatures.toString(),
          'Most Featured': maxFeatures.toString(),
        },
        gradient: {
          background:
            'bg-gradient-to-br from-purple-500/10 via-transparent to-transparent',
          border: 'border-purple-500/20',
          icon: 'bg-purple-500/10',
          iconColor: 'text-purple-400',
          text: 'text-purple-400',
        },
      },
      {
        icon: Server,
        title: 'Categories Overview',
        value: categories.length.toString(),
        subtitle: 'Distinct Categories',
        trend: 'Solution Categories',
        stats: {
          'Most Common': mostCommonCategory,
          'Solutions/Category': solutionsPerCategory,
        },
        gradient: {
          background:
            'bg-gradient-to-br from-emerald-500/10 via-transparent to-transparent',
          border: 'border-emerald-500/20',
          icon: 'bg-emerald-500/10',
          iconColor: 'text-emerald-400',
          text: 'text-emerald-400',
        },
      },
    ];

    return metrics;
  }, [solutions]);

  return (
    <div className="w-full max-w-[90vw] mx-auto mb-8">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900/50 via-slate-900/30 to-slate-900/50" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-slate-800/20 via-slate-900/10 to-transparent" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
        {metrics.map((metric, index) => (
          <MetricCard key={index} {...metric} />
        ))}
      </div>

      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-full">
        <div className="flex items-center space-x-2 text-sm text-slate-400">
          <div className="flex items-center space-x-1">
            <span className="w-2 h-2 rounded-full bg-blue-400" />
            <span>Active</span>
          </div>
          <div className="flex items-center space-x-1">
            <span className="w-2 h-2 rounded-full bg-purple-400" />
            <span>In Development</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SolutionMetrics;

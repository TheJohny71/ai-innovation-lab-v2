import React from 'react';
import type { MetricCardProps } from '@/types/metrics';

/**
 * Reusable MetricCard component displaying a card with metrics and stats.
 */
export const MetricCard: React.FC<MetricCardProps> = ({
  icon: Icon,
  title,
  value,
  subtitle,
  mainStats,
  additionalStats,
  gradient,
}) => {
  return (
    <div
      className={`p-6 rounded-xl border ${gradient.border} ${gradient.bg} hover:shadow-lg transition-shadow`}
    >
      {/* Header Section with Icon */}
      <div className="flex items-center gap-2 mb-6">
        <Icon className={`w-6 h-6 ${gradient.text}`} />
        <span className={`text-sm font-semibold ${gradient.text}`}>
          {title}
        </span>
      </div>

      {/* Main Metric Display */}
      <div className="mb-6">
        <p className="text-5xl font-bold text-white">{value}</p>
        <p className="text-gray-400 text-sm">{subtitle}</p>
        <p className="text-sm text-gray-300">{mainStats.trend}</p>
      </div>

      {/* Additional Stats */}
      <div className="space-y-2">
        {Object.entries(additionalStats).map(([label, stat], index) => (
          <div key={index} className="flex justify-between text-sm">
            <span className="text-gray-400">{label}</span>
            <span className="text-gray-300 font-semibold">{stat.value}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MetricCard;

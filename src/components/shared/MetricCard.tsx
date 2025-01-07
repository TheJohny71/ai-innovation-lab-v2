import React from 'react';

// ✅ Define TypeScript types for props
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
}) => {
  return (
    <div
      className={`rounded-xl p-6 ${gradient.background} border ${gradient.border}`}
    >
      {/* Icon Section */}
      <div className="flex justify-between items-start mb-4">
        <div
          className={`${gradient.icon} p-2 rounded-lg flex items-center justify-center`}
        >
          <Icon className={gradient.iconColor} size={20} />
        </div>
      </div>

      {/* Title and Stats */}
      <div className="space-y-1 mb-4">
        <h3 className="text-white font-medium text-sm">{title}</h3>
        <div className="flex items-baseline gap-2">
          <span className="text-2xl font-bold text-white">{value}</span>
          <span className="text-sm text-gray-400">{subtitle}</span>
        </div>
        <p className={`text-sm ${gradient.text}`}>{mainStats.trend}</p>
      </div>

      {/* Additional Stats Section */}
      <div className="grid grid-cols-2 gap-2">
        {Object.entries(additionalStats).map(([label, stat]) => (
          <div key={label} className="bg-slate-900/30 rounded-lg p-2">
            <div className="text-xs text-gray-400 mb-0.5">{label}</div>
            <div className="text-sm text-white font-medium">{stat.value}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MetricCard;
export type { MetricCardProps };

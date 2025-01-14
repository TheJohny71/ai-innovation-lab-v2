// src/components/shared/OverviewCard.tsx
'use client';

import React from 'react';
import { ArrowUpRight } from 'lucide-react';

const defaultSolution = {
  category: 'Overview',
  title: 'AI Solutions Overview',
  subtitle: 'Explore Available Tools',
  description:
    'A collection of specialized AI tools designed to enhance legal research, practice management, and governance.',
  features: [
    'Practice Management Tools',
    'Research Assistance',
    'Knowledge Management',
    'AI Governance',
  ],
};

interface OverviewCardProps {
  className?: string;
  onClick?: () => void;
}

const OverviewCard: React.FC<OverviewCardProps> = ({
  className = '',
  onClick,
}) => {
  return (
    <div
      className={`w-full max-w-xl rounded-2xl border border-white/20 overflow-hidden ${className}`}
      onClick={onClick}
    >
      {/* Dramatic background with multiple layers */}
      <div className="absolute inset-0">
        {/* Base dark gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800" />

        {/* Accent color waves */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-blue-600/20 via-transparent to-transparent" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,_var(--tw-gradient-stops))] from-purple-600/20 via-transparent to-transparent" />

        {/* Geometric patterns */}
        <div
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: `
              linear-gradient(45deg, rgba(59, 130, 246, 0.1) 25%, transparent 25%),
              linear-gradient(-45deg, rgba(59, 130, 246, 0.1) 25%, transparent 25%),
              linear-gradient(45deg, transparent 75%, rgba(59, 130, 246, 0.1) 75%),
              linear-gradient(-45deg, transparent 75%, rgba(59, 130, 246, 0.1) 75%)
            `,
            backgroundSize: '40px 40px',
            backgroundPosition: '0 0, 0 20px, 20px -20px, -20px 0px',
          }}
        />

        {/* Glowing orb effects */}
        <div className="absolute top-20 right-20 w-32 h-32 bg-blue-500/20 rounded-full blur-3xl" />
        <div className="absolute bottom-10 left-10 w-40 h-40 bg-purple-500/20 rounded-full blur-3xl" />
      </div>

      {/* Content wrapper with glass effect */}
      <div className="relative h-full">
        {/* Top Banner Section */}
        <div className="bg-gradient-to-r from-blue-500/40 via-indigo-500/30 to-purple-500/40 p-1" />

        <div className="p-8 backdrop-blur-sm">
          {/* Header Section */}
          <div className="flex items-start justify-between">
            <span className="text-sm font-medium px-3 py-1 rounded-full bg-blue-500/30 text-blue-200 backdrop-blur-sm">
              {defaultSolution.category}
            </span>
            <ArrowUpRight className="w-6 h-6 text-blue-300" />
          </div>

          {/* Title Section */}
          <div className="mt-4 space-y-2">
            <h3 className="text-3xl font-bold bg-gradient-to-r from-white via-blue-100 to-white bg-clip-text text-transparent">
              {defaultSolution.title}
            </h3>
            <p className="text-xl text-blue-300">{defaultSolution.subtitle}</p>
            <p className="text-slate-300 text-lg line-clamp-2">
              {defaultSolution.description}
            </p>
          </div>

          {/* Features Grid with glass effect */}
          <div className="mt-4 flex flex-wrap gap-2">
            {defaultSolution.features.slice(0, 3).map((feature, idx) => (
              <div
                key={idx}
                className="px-3 py-1 rounded-full text-sm bg-slate-800 text-slate-200 border border-slate-700"
              >
                {feature}
              </div>
            ))}
            {defaultSolution.features.length > 3 && (
              <span className="px-3 py-1 rounded-full text-sm bg-gradient-to-r from-blue-500/40 via-indigo-500/30 to-purple-500/40 text-blue-200">
                +{defaultSolution.features.length - 3} more
              </span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default OverviewCard;

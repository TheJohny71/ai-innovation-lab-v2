'use client';

import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { type Solution } from '@/app/accelerate/types';

const defaultSolution: Solution = {
  id: 'welcome',
  title: 'AI Solutions Overview',
  subtitle: 'Explore Available Tools',
  description:
    'A collection of specialized AI tools designed to enhance legal research, practice management, and governance.',
  category: 'Overview',
  gradient:
    'bg-gradient-to-r from-blue-500/40 via-indigo-500/30 to-purple-500/40',
  textColor: 'text-blue-200',
  cardGradient: 'from-blue-500/10 via-transparent to-transparent',
  borderHover: 'hover:border-blue-500/30',
  features: [
    'Practice Management Tools',
    'Research Assistance',
    'Knowledge Management',
    'AI Governance',
  ],
  details: {
    overview:
      'Browse through our collection of AI tools, each designed for specific legal workflows and requirements. Select any card to learn more about individual solutions.',
    benefits: [
      'Integrated workflow tools',
      'Research optimization',
      'Knowledge organization',
      'Compliance management',
    ],
  },
  status: 'active',
};

interface OverviewCardProps {
  solution?: Solution;
  onClick?: () => void;
  className?: string;
}

const OverviewCard: React.FC<OverviewCardProps> = ({
  solution = defaultSolution,
  onClick,
  className = '',
}) => {
  return (
    <div
      className={`w-full max-w-xl rounded-2xl border border-white/20 overflow-hidden ${className}`}
      onClick={onClick}
    >
      {/* Background decorative elements */}
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
        <div className={solution.gradient}>
          <div className="h-1 w-full" />
        </div>

        <div className="p-8 backdrop-blur-sm">
          {/* Header Section */}
          <div className="flex items-start justify-between">
            <span
              className={`text-sm font-medium px-3 py-1 rounded-full bg-blue-500/30 ${solution.textColor}`}
            >
              {solution.category}
            </span>
            <ArrowUpRight className="w-6 h-6 text-blue-300" />
          </div>

          {/* Title Section */}
          <div className="mt-4 space-y-2">
            <h3 className="text-3xl font-bold bg-gradient-to-r from-white via-blue-100 to-white bg-clip-text text-transparent">
              {solution.title}
            </h3>
            <p className={`text-xl ${solution.textColor}`}>
              {solution.subtitle}
            </p>
            <p className="text-slate-300 text-lg line-clamp-2">
              {solution.description}
            </p>
          </div>

          {/* Features Grid */}
          <div className="mt-4 flex flex-wrap gap-2">
            {solution.features.slice(0, 3).map((feature, idx) => (
              <div
                key={idx}
                className="px-3 py-1 rounded-full text-sm bg-slate-800 text-slate-200 border border-slate-700"
              >
                {feature}
              </div>
            ))}
            {solution.features.length > 3 && (
              <span
                className={`px-3 py-1 rounded-full text-sm ${solution.gradient} ${solution.textColor}`}
              >
                +{solution.features.length - 3} more
              </span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default OverviewCard;

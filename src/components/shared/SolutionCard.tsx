// components/shared/SolutionCard.tsx
'use client';

import React from 'react';
import { ChevronDown, ChevronRight } from 'lucide-react';
import type { Solution } from '@/app/accelerate/types';

interface SolutionCardProps {
  solution: Solution;
  isActive?: boolean;
  onClick?: () => void;
  isOpen?: boolean;
  onToggle?: () => void;
  variant?: 'compact' | 'detailed';
}

const SolutionCard: React.FC<SolutionCardProps> = ({
  solution,
  isActive = false,
  onClick,
  isOpen = false,
  onToggle,
  variant = 'detailed',
}) => {
  // Renders a list of features with the correct text color
  const FeatureList = ({ features }: { features: string[] }) => (
    <ul className="space-y-4">
      {features.map((feature, index) => (
        <li key={index} className="flex items-center space-x-3">
          <div className={`w-1.5 h-1.5 rounded-full ${solution.textColor}`} />
          <span className="text-slate-300">{feature}</span>
        </li>
      ))}
    </ul>
  );

  if (variant === 'compact') {
    return (
      <div
        onClick={onClick}
        className={`group relative p-8 rounded-3xl transition-all duration-500 cursor-pointer
                  bg-slate-900/50 backdrop-blur-xl border border-white/10
                  hover:border-purple-500/30 hover:bg-white/5
                  ${isActive ? 'bg-white/5 border-purple-500/30' : ''}`}
      >
        <div className="flex items-start justify-between">
          <div>
            <h3 className="text-2xl font-semibold text-white mb-2">
              {solution.title}
            </h3>
            <p className={`mb-4 ${solution.textColor}`}>{solution.subtitle}</p>
          </div>
          <ChevronRight
            className={`text-slate-400 transition-transform duration-300 
                     group-hover:translate-x-1 group-hover:text-white
                     ${isActive ? 'rotate-90' : ''}`}
          />
        </div>

        <p className="text-slate-300 mb-6">{solution.description}</p>

        <div className="flex flex-wrap gap-3">
          {solution.features.slice(0, 3).map((feature, idx) => (
            <span
              key={idx}
              className="px-3 py-1 rounded-full text-sm bg-white/5 text-slate-300
                       border border-white/10"
            >
              {feature}
            </span>
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
    );
  }

  return (
    <div className="rounded-xl bg-slate-900/50 backdrop-blur-sm overflow-hidden">
      <div className="p-8">
        <div className="flex flex-col space-y-6">
          {/* Category and Title */}
          <div>
            <span
              className={`text-sm font-medium px-3 py-1 rounded-full ${solution.gradient} ${solution.textColor}`}
            >
              {solution.category}
            </span>
            <h3 className={`text-2xl font-bold mt-4 ${solution.textColor}`}>
              {solution.title}
            </h3>
            <p className="text-slate-300 mt-2">{solution.subtitle}</p>
            <p className="text-slate-400 mt-4">{solution.description}</p>
          </div>
          {/* Features */}
          <div className="space-y-6">
            <FeatureList features={solution.features.slice(0, 3)} />
            {/* Conditionally render advanced features */}
            {isOpen && (
              <div className="mt-6">
                <FeatureList features={solution.features.slice(3)} />
              </div>
            )}
          </div>
        </div>
      </div>
      {/* Toggle Button */}
      {onToggle && (
        <button
          onClick={onToggle}
          className={`w-full p-4 text-white bg-slate-800/50 hover:bg-slate-800/70
                    transition-colors flex items-center justify-center space-x-2
                    ${solution.borderHover || ''}`}
        >
          <span>{isOpen ? 'View Less' : 'View Details'}</span>
          <ChevronDown
            className={`w-4 h-4 transition-transform ${isOpen ? 'rotate-180' : ''}`}
          />
        </button>
      )}
    </div>
  );
};

export default SolutionCard;

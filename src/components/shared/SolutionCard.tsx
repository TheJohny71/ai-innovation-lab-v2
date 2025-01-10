'use client';

import React, { useState, useCallback } from 'react';
import { ChevronUp, ChevronDown } from 'lucide-react';
import type { Solution } from '@/types/metrics';

interface SolutionCardProps {
  solution: Solution;
}

const SolutionCard: React.FC<SolutionCardProps> = ({ solution }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleToggle = useCallback((e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    setIsExpanded((prevState) => !prevState);
  }, []);

  // Feature List Component
  const FeatureList = ({
    items,
    color,
  }: {
    items: string[];
    color: string;
  }) => (
    <div className="space-y-3">
      {items.map((feature, index) => (
        <div
          key={`${solution.id}-${index}-${feature}`}
          className="text-gray-300 text-sm flex items-center gap-2"
        >
          <div className={`w-1.5 h-1.5 rounded-full ${color}`} />
          <span>{feature}</span>
        </div>
      ))}
    </div>
  );

  return (
    <div
      className={`relative bg-slate-800/50 rounded-xl border border-white/5 p-8
                 transition-all duration-300 ease-in-out ${solution.borderHover}`}
    >
      {/* Header Section */}
      <div className="flex items-start justify-between mb-4">
        <h3 className={`text-2xl font-bold ${solution.textColor}`}>
          {solution.title}
        </h3>
        <span
          className={`inline-flex px-3 py-1 rounded-full ${solution.gradient} 
                    ${solution.textColor} text-xs font-medium`}
        >
          {solution.category}
        </span>
      </div>

      {/* Description Section */}
      <p className="text-gray-300 mb-4">{solution.subtitle}</p>
      <p className="text-white/80 mb-6">{solution.description}</p>

      {/* Features Section */}
      <div className="mb-6">
        {!isExpanded ? (
          // Show only core features when collapsed
          <FeatureList
            items={solution.features.slice(0, 3)}
            color={solution.textColor}
          />
        ) : (
          // Show all features when expanded
          <div className="space-y-6">
            <div>
              <h4 className="text-white font-medium mb-4">Core Features</h4>
              <FeatureList
                items={solution.features.slice(0, 3)}
                color={solution.textColor}
              />
            </div>

            <div>
              <h4 className="text-white font-medium mb-4">
                Advanced Capabilities
              </h4>
              <FeatureList
                items={solution.features.slice(3)}
                color={solution.textColor}
              />
            </div>
          </div>
        )}
      </div>

      {/* Control Button */}
      <button
        onClick={handleToggle}
        className="w-full mt-6 py-3 rounded-lg bg-white/5 text-white font-medium 
                 hover:bg-white/10 transition-colors flex items-center justify-center gap-2"
        aria-expanded={isExpanded}
        type="button"
      >
        {isExpanded ? (
          <>
            Hide Details <ChevronUp className="w-4 h-4" />
          </>
        ) : (
          <>
            View Details <ChevronDown className="w-4 h-4" />
          </>
        )}
      </button>
    </div>
  );
};

// Prevent unnecessary re-renders
export default React.memo(SolutionCard);

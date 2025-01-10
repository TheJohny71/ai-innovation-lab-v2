// app/components/shared/SolutionCard.tsx
'use client';

import React, { useState } from 'react';
import { ChevronUp, ChevronDown, Circle } from 'lucide-react';
import type { Solution } from '@/types/metrics';

interface SolutionCardProps {
  solution: Solution;
}

const SolutionCard: React.FC<SolutionCardProps> = ({ solution }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsExpanded(!isExpanded);
  };

  // Separate components for initial and expanded feature lists
  const InitialFeatureList = ({ features }: { features: string[] }) => (
    <div className="space-y-3">
      {features.slice(0, 3).map((feature, index) => (
        <div
          key={index}
          className="text-gray-300 text-sm flex items-center gap-2"
        >
          <Circle
            className={`w-2 h-2 ${solution.textColor} flex-shrink-0`}
            fill="currentColor"
          />
          <span>{feature}</span>
        </div>
      ))}
    </div>
  );

  const ExpandedFeatureList = ({ features }: { features: string[] }) => (
    <div className="space-y-4">
      <h4 className="text-white font-medium">Core Features</h4>
      <div className="space-y-3">
        {features.slice(0, 3).map((feature, index) => (
          <div
            key={index}
            className="text-gray-300 text-sm flex items-center gap-2"
          >
            <Circle
              className={`w-2 h-2 ${solution.textColor} flex-shrink-0`}
              fill="currentColor"
            />
            <span>{feature}</span>
          </div>
        ))}
      </div>

      <h4 className="text-white font-medium pt-4">Advanced Capabilities</h4>
      <div className="space-y-3">
        {features.slice(3).map((feature, index) => (
          <div
            key={index + 3}
            className="text-gray-300 text-sm flex items-center gap-2"
          >
            <Circle
              className={`w-2 h-2 ${solution.textColor} flex-shrink-0`}
              fill="currentColor"
            />
            <span>{feature}</span>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <div
      className={`bg-slate-800/50 rounded-xl border border-white/5 p-8
                 transition-all duration-300 ease-in-out ${solution.borderHover}`}
    >
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

      <p className="text-gray-300 mb-4">{solution.subtitle}</p>
      <p className="text-white/80 mb-6">{solution.description}</p>

      {/* Features Section */}
      <div className="mb-6">
        {isExpanded ? (
          <ExpandedFeatureList features={solution.features} />
        ) : (
          <InitialFeatureList features={solution.features} />
        )}
      </div>

      {/* Control Button */}
      <button
        onClick={toggleExpand}
        className="w-full mt-6 py-3 rounded-lg bg-white/5 text-white font-medium 
                 hover:bg-white/10 transition-colors flex items-center justify-center gap-2"
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

export default SolutionCard;

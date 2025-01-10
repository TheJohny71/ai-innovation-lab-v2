// components/shared/SolutionCard.tsx
'use client';

import React from 'react';
import { ChevronDown } from 'lucide-react';
import type { Solution } from '@/types/metrics';

interface SolutionCardProps {
  solution: Solution;
  isOpen: boolean;
  onToggle: () => void;
}

const SolutionCard: React.FC<SolutionCardProps> = ({
  solution,
  isOpen,
  onToggle,
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
      <button
        onClick={onToggle}
        className={`w-full p-4 text-white bg-slate-800/50 hover:bg-slate-800/70
                    transition-colors flex items-center justify-center space-x-2
                    ${solution.borderHover || ''}`}
        // ^ Using borderHover if provided, otherwise empty string
      >
        <span>{isOpen ? 'View Less' : 'View Details'}</span>
        <ChevronDown
          className={`w-4 h-4 transition-transform ${isOpen ? 'rotate-180' : ''}`}
        />
      </button>
    </div>
  );
};

export default SolutionCard;

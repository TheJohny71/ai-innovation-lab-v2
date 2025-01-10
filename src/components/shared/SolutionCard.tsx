'use client';

import React, { useState, useCallback } from 'react';
import { ChevronUp, ChevronDown } from 'lucide-react';
import type { Solution } from '@/types/metrics';

interface SolutionCardProps {
  solution: Solution;
}

const SolutionCard = ({ solution }: SolutionCardProps) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleToggle = useCallback((e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsExpanded((prev) => !prev);
  }, []);

  const CustomBullet = () => (
    <div
      className={`w-1.5 h-1.5 rounded-full flex-shrink-0 ${solution.textColor}`}
      style={{ backgroundColor: 'currentColor' }}
      aria-hidden="true"
    />
  );

  return (
    <div
      className={`bg-slate-800/50 rounded-xl border border-white/5 p-8
                 transition-all duration-300 ease-in-out ${solution.borderHover}`}
      onClick={(e) => e.stopPropagation()}
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

      <div className="mb-6">
        {!isExpanded ? (
          <div className="space-y-3">
            {solution.features.slice(0, 3).map((feature, idx) => (
              <div
                key={`${solution.id}-initial-${idx}`}
                className="text-gray-300 text-sm flex items-center gap-2"
              >
                <CustomBullet />
                <span>{feature}</span>
              </div>
            ))}
          </div>
        ) : (
          <div className="space-y-6">
            <div>
              <h4 className="text-white font-medium mb-4">Core Features</h4>
              <div className="space-y-3">
                {solution.features.slice(0, 3).map((feature, idx) => (
                  <div
                    key={`${solution.id}-core-${idx}`}
                    className="text-gray-300 text-sm flex items-center gap-2"
                  >
                    <CustomBullet />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h4 className="text-white font-medium mb-4">
                Advanced Capabilities
              </h4>
              <div className="space-y-3">
                {solution.features.slice(3).map((feature, idx) => (
                  <div
                    key={`${solution.id}-advanced-${idx}`}
                    className="text-gray-300 text-sm flex items-center gap-2"
                  >
                    <CustomBullet />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>

      <button
        onClick={handleToggle}
        className="w-full mt-6 py-3 rounded-lg bg-white/5 text-white font-medium 
                 hover:bg-white/10 transition-colors flex items-center justify-center gap-2"
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

export default SolutionCard;

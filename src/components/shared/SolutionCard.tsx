'use client';
import React, { useState } from 'react';
import { ChevronUp, ChevronDown } from 'lucide-react';
import type { Solution } from '@/types/metrics';

interface SolutionCardProps {
  solution: Solution;
}

const SolutionCard = ({ solution }: SolutionCardProps) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const CustomBullet = () => (
    <div
      className={`w-1.5 h-1.5 rounded-full flex-shrink-0 ${solution.textColor}`}
      style={{ backgroundColor: 'currentColor' }}
      aria-hidden="true"
    />
  );

  return (
    <div
      className={`relative overflow-hidden rounded-xl bg-gradient-to-b ${solution.cardGradient}`}
    >
      <div
        className={`h-full p-8 backdrop-blur-sm border rounded-xl 
                   border-white/5 bg-slate-800/50 transition-all duration-300 
                   ${solution.borderHover}`}
      >
        <div className="flex items-start justify-between mb-4">
          <h3 className={`text-2xl font-bold ${solution.textColor}`}>
            {solution.title}
          </h3>
          <span
            className={`inline-flex px-3 py-1 rounded-full text-xs font-medium
                     ${solution.gradient} ${solution.textColor}`}
          >
            {solution.category}
          </span>
        </div>

        <p className="text-gray-300 mb-4">{solution.subtitle}</p>
        <p className="text-white/80 mb-6">{solution.description}</p>

        <div className="space-y-6">
          {isExpanded ? (
            <>
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
                  Advanced Features
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
            </>
          ) : (
            <div className="space-y-3">
              {solution.features.slice(0, 3).map((feature, idx) => (
                <div
                  key={`${solution.id}-preview-${idx}`}
                  className="text-gray-300 text-sm flex items-center gap-2"
                >
                  <CustomBullet />
                  <span>{feature}</span>
                </div>
              ))}
            </div>
          )}
        </div>

        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="w-full mt-6 py-3 rounded-lg bg-white/5 text-white font-medium 
                   hover:bg-white/10 transition-colors flex items-center justify-center gap-2"
          type="button"
          aria-expanded={isExpanded}
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
    </div>
  );
};

export default SolutionCard;

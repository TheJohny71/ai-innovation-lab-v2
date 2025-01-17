'use client';

import React from 'react';
import { ChevronRight } from 'lucide-react';
import { Solution } from '@/app/accelerate/types';

export interface SolutionCardProps {
  solution: Solution;
  onClick?: () => void;
  isActive?: boolean;
  variant?: 'compact' | 'detailed';
}

export const SolutionCard = ({
  solution,
  onClick,
  isActive = false,
  variant = 'detailed',
}: SolutionCardProps): JSX.Element => {
  if (variant === 'compact') {
    return (
      <div
        className="flex-none w-80 solution-card"
        style={{
          transformStyle: 'preserve-3d',
        }}
      >
        <div
          onClick={onClick}
          className={`group relative p-6 h-48 rounded-2xl solution-card-content
                    transition-all duration-500 cursor-pointer
                    bg-slate-900/90 border border-white/10
                    hover:border-${solution.textColor.replace('text-', '')}/30 
                    ${isActive ? `bg-slate-900 border-${solution.textColor.replace('text-', '')}/30` : ''}
                    card-hover`}
          role="button"
          tabIndex={0}
          onKeyPress={(e: React.KeyboardEvent) => {
            if (e.key === 'Enter' || e.key === ' ') {
              onClick?.();
            }
          }}
        >
          <div className="flex flex-col h-full justify-between">
            <div>
              <h3 className="text-2xl font-semibold text-white mb-2">
                {solution.title}
              </h3>
              <p className={`${solution.textColor}`}>{solution.subtitle}</p>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-slate-200">{solution.category}</span>
              <ChevronRight
                className={`text-slate-200 transition-transform duration-300 
                        group-hover:translate-x-1 group-hover:text-white
                        ${isActive ? 'rotate-90' : ''}`}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div
      className={`w-full max-w-md mx-auto rounded-2xl overflow-hidden transition-all duration-300
                ${solution.cardGradient || 'bg-slate-900/90'} 
                backdrop-blur-sm border-2
                ${isActive ? 'border-white/20 shadow-xl' : 'border-white/10'}`}
      onClick={onClick}
      role="button"
      tabIndex={0}
      onKeyPress={(e: React.KeyboardEvent) => {
        if (e.key === 'Enter' || e.key === ' ') {
          onClick?.();
        }
      }}
    >
      <div className="p-6 h-full flex flex-col">
        <div className="flex-1">
          <span
            className={`text-sm font-medium px-3 py-1 rounded-full 
                     ${solution.gradient} ${solution.textColor} 
                     inline-block mb-4`}
          >
            {solution.category}
          </span>
          <h3 className="text-2xl font-bold text-white mt-4 tracking-tight">
            {solution.title}
          </h3>
          <p className={`${solution.textColor} text-lg mt-2`}>
            {solution.subtitle}
          </p>
          <p className="text-slate-200 text-base my-4 line-clamp-2">
            {solution.description}
          </p>
        </div>

        <div className="flex flex-wrap gap-2 mt-4">
          {solution.features.slice(0, 3).map((feature, idx) => (
            <span
              key={idx}
              className="px-3 py-1 rounded-full text-sm 
                       bg-slate-800/80 text-slate-200 
                       border border-slate-700"
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
    </div>
  );
};

export default SolutionCard;

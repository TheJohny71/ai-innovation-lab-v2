'use client';

import React, { useState, useCallback } from 'react';
import { ChevronLeft, ChevronRight, ArrowUpRight } from 'lucide-react';
import type { Solution } from '@/app/accelerate/types';

interface SolutionCarouselProps {
  solutions: Solution[];
  onSolutionSelect: (solution: Solution) => void;
}

export const SolutionCarousel: React.FC<SolutionCarouselProps> = ({
  solutions = [],
  onSolutionSelect,
}) => {
  const [activeIndex, setActiveIndex] = useState(0);

  // Constants for carousel configuration
  const ROTATION_FACTOR = 8;
  const TRANSLATION_FACTOR = 306;
  const Z_TRANSLATION_FACTOR = 15;
  const SCALE_BASE = 1.15;

  const getCardStyles = useCallback(
    (index: number): React.CSSProperties => {
      const offset = index - activeIndex;
      const zIndex = 20 - Math.abs(offset);
      const opacity = offset === 0 ? 1 : 0.7;

      let translateX = 0;
      let rotateY = 0;
      let translateZ = 0;
      let scale = 1;

      if (offset === 0) {
        scale = SCALE_BASE;
      } else if (offset > 0) {
        translateX = TRANSLATION_FACTOR * offset;
        rotateY = ROTATION_FACTOR;
        translateZ = -Z_TRANSLATION_FACTOR * offset;
      } else {
        translateX = TRANSLATION_FACTOR * offset;
        rotateY = -ROTATION_FACTOR;
        translateZ = Z_TRANSLATION_FACTOR * offset;
      }

      return {
        transform: `translateX(calc(-50% + ${translateX}px)) translateZ(${translateZ}px) scale(${scale}) rotateY(${rotateY}deg)`,
        opacity,
        zIndex,
        position: 'absolute',
        left: '50%',
        transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
        transformStyle: 'preserve-3d',
      };
    },
    [activeIndex]
  );

  const renderCardContent = (solution: Solution, isActive: boolean) => {
    const getCategoryStyles = (category: string) => {
      switch (category.toLowerCase()) {
        case 'overview':
          return 'bg-blue-500/30 text-blue-400';
        case 'practice management':
          return 'bg-purple-500/10 text-purple-400';
        case 'knowledge management':
          return 'bg-teal-500/10 text-teal-400';
        case 'research':
          return 'bg-cyan-500/10 text-cyan-400';
        case 'governance':
          return 'bg-emerald-500/10 text-emerald-400';
        default:
          return 'bg-blue-500/30 text-blue-400';
      }
    };

    return (
      <div className="w-full max-w-xl rounded-2xl border border-white/20 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-blue-600/20 via-transparent to-transparent" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,_var(--tw-gradient-stops))] from-purple-600/20 via-transparent to-transparent" />
          <div
            className="absolute inset-0 opacity-30"
            style={{
              backgroundImage: `linear-gradient(45deg, rgba(59, 130, 246, 0.1) 25%, transparent 25%),
              linear-gradient(-45deg, rgba(59, 130, 246, 0.1) 25%, transparent 25%),
              linear-gradient(45deg, transparent 75%, rgba(59, 130, 246, 0.1) 75%),
              linear-gradient(-45deg, transparent 75%, rgba(59, 130, 246, 0.1) 75%)`,
              backgroundSize: '40px 40px',
              backgroundPosition: '0 0, 0 20px, 20px -20px, -20px 0px',
            }}
          />
          <div className="absolute top-20 right-20 w-32 h-32 bg-blue-500/20 rounded-full blur-3xl" />
          <div className="absolute bottom-10 left-10 w-40 h-40 bg-purple-500/20 rounded-full blur-3xl" />
        </div>
        <div className="relative h-full">
          <div className="bg-blue-500/10">
            <div className="h-1 w-full" />
          </div>
          <div className="p-8 backdrop-blur-sm">
            <div className="flex items-start justify-between">
              <span
                className={`text-sm font-medium px-3 py-1 rounded-full ${getCategoryStyles(solution.category)}`}
              >
                {solution.category}
              </span>
              <ArrowUpRight className="w-6 h-6 text-blue-300" />
            </div>
            <div className="mt-4 space-y-2">
              <h3 className="text-3xl font-bold bg-gradient-to-r from-white via-blue-100 to-white bg-clip-text text-transparent">
                {solution.title}
              </h3>
              <p className="text-xl text-blue-400">{solution.subtitle}</p>
              <p className="text-slate-300 text-lg line-clamp-2">
                {solution.description}
              </p>
            </div>
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
                <span className="px-3 py-1 rounded-full text-sm bg-blue-500/10 text-blue-400">
                  +{solution.features.length - 3} more
                </span>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  };

  const navigate = (direction: number) => {
    setActiveIndex((current) => {
      const newIndex = current + direction;
      if (newIndex < 0) return solutions.length - 1;
      if (newIndex >= solutions.length) return 0;
      return newIndex;
    });
  };

  return (
    <div className="relative min-h-[480px] flex items-center justify-center mx-auto w-full max-w-[90vw] mt-8">
      <div className="relative w-full h-full flex items-center justify-center [perspective:1000px]">
        {solutions.map((solution, index) => (
          <div
            key={solution.id}
            className="absolute left-1/2 w-full max-w-xl px-4 cursor-pointer"
            style={getCardStyles(index)}
            onClick={() => onSolutionSelect(solution)}
          >
            {renderCardContent(solution, index === activeIndex)}
          </div>
        ))}
      </div>
      <div className="absolute -bottom-16 left-0 right-0">
        <div className="flex justify-center items-center space-x-4">
          <button
            onClick={() => navigate(-1)}
            className="p-2 rounded-full bg-slate-800/50 backdrop-blur-sm border border-white/10 text-white hover:bg-slate-700/50 transition-all"
            aria-label="Previous solution"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <div className="flex space-x-2">
            {solutions.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`transition-all duration-300 rounded-full 
                  ${index === activeIndex ? 'w-8 h-2 bg-blue-500' : 'w-2 h-2 bg-slate-600 hover:bg-slate-500'}`}
                aria-label={`Go to solution ${index + 1}`}
              />
            ))}
          </div>
          <button
            onClick={() => navigate(1)}
            className="p-2 rounded-full bg-slate-800/50 backdrop-blur-sm border border-white/10 text-white hover:bg-slate-700/50 transition-all"
            aria-label="Next solution"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default SolutionCarousel;

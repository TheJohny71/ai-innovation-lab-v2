'use client';

import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, ArrowUpRight } from 'lucide-react';
import type { Solution } from '@/app/accelerate/types';

interface SolutionCarouselProps {
  solutions: Solution[];
  onSolutionSelect: (solution: Solution) => void;
}

interface CardPosition {
  translateX: number;
  translateZ: number;
  rotateY: number;
  scale: number;
  opacity: number;
  zIndex: number;
}

interface CardStyle extends React.CSSProperties {
  transform: string;
  opacity: number;
  zIndex: number;
  position: 'absolute';
  left: '50%';
  width: '100%';
  maxWidth: '32rem';
  transition: string;
  transformStyle: 'preserve-3d';
}

export const SolutionCarousel: React.FC<SolutionCarouselProps> = ({
  solutions = [],
  onSolutionSelect,
}) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const cardPositions: CardPosition[] = [
    // Center card
    {
      translateX: 0,
      translateZ: 0,
      rotateY: 0,
      scale: 1.15,
      opacity: 1,
      zIndex: 20,
    },
    // First right card
    {
      translateX: 306.1467458920718,
      translateZ: -15.224093497742652,
      rotateY: 8,
      scale: 1,
      opacity: 0.7,
      zIndex: 19,
    },
    // First left card
    {
      translateX: -306.1467458920718,
      translateZ: -15.224093497742652,
      rotateY: -8,
      scale: 1,
      opacity: 0.7,
      zIndex: 19,
    },
    // Second right card
    {
      translateX: 565.6854249492379,
      translateZ: -58.57864376269048,
      rotateY: 16,
      scale: 1,
      opacity: 0.7,
      zIndex: 18,
    },
    // Second left card
    {
      translateX: -565.6854249492379,
      translateZ: -58.57864376269048,
      rotateY: -16,
      scale: 1,
      opacity: 0.7,
      zIndex: 18,
    },
    // Third right card
    {
      translateX: 739.1036260090294,
      translateZ: -123.46331352698203,
      rotateY: 24,
      scale: 1,
      opacity: 0.7,
      zIndex: 17,
    },
  ];

  const getCardTransform = (index: number): CardStyle => {
    const relativeIndex =
      (((index - activeIndex) % solutions.length) + solutions.length) %
      solutions.length;
    let positionIndex = Math.min(
      Math.abs(relativeIndex),
      cardPositions.length - 1
    );

    // Handle the case for negative indices (left side cards)
    if (relativeIndex < 0) {
      positionIndex =
        Math.min(
          Math.abs(relativeIndex),
          Math.floor(cardPositions.length / 2)
        ) *
          2 +
        1;
    } else {
      positionIndex =
        Math.min(relativeIndex, Math.floor(cardPositions.length / 2)) * 2;
    }

    const position = cardPositions[positionIndex];

    if (!position) {
      return {
        transform: 'translateX(-50%) translateZ(0) scale(1) rotateY(0deg)',
        opacity: 0,
        zIndex: 0,
        position: 'absolute',
        left: '50%',
        width: '100%',
        maxWidth: '32rem',
        transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
        transformStyle: 'preserve-3d',
      };
    }

    return {
      transform: `translateX(calc(-50% + ${position.translateX}px)) translateZ(${position.translateZ}px) scale(${position.scale}) rotateY(${position.rotateY}deg)`,
      opacity: position.opacity,
      zIndex: position.zIndex,
      position: 'absolute',
      left: '50%',
      width: '100%',
      maxWidth: '32rem',
      transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
      transformStyle: 'preserve-3d',
    };
  };

  const getCategoryColor = (category: string): string => {
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

  const renderCard = (solution: Solution, index: number) => {
    const isActiveCard = index === activeIndex;

    return (
      <div
        key={solution.id}
        className="absolute left-1/2 w-full max-w-xl px-4 cursor-pointer"
        style={getCardTransform(index)}
        onClick={() => onSolutionSelect(solution)}
      >
        <div className="w-full max-w-xl rounded-2xl border border-white/20 overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800"></div>
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-blue-600/20 via-transparent to-transparent"></div>
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,_var(--tw-gradient-stops))] from-purple-600/20 via-transparent to-transparent"></div>
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
            ></div>
            <div className="absolute top-20 right-20 w-32 h-32 bg-blue-500/20 rounded-full blur-3xl"></div>
            <div className="absolute bottom-10 left-10 w-40 h-40 bg-purple-500/20 rounded-full blur-3xl"></div>
          </div>
          <div className="relative h-full">
            <div className="bg-blue-500/10">
              <div className="h-1 w-full"></div>
            </div>
            <div className="p-8 backdrop-blur-sm">
              <div className="flex items-start justify-between">
                <span
                  className={`text-sm font-medium px-3 py-1 rounded-full ${getCategoryColor(solution.category)}`}
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
      </div>
    );
  };

  return (
    <div className="relative min-h-[480px] flex items-center justify-center mx-auto w-full max-w-[90vw] mt-8">
      <div className="relative w-full h-full flex items-center justify-center [perspective:1000px]">
        {solutions.map((solution, index) => renderCard(solution, index))}
      </div>

      <div className="absolute -bottom-16 left-0 right-0">
        <div className="flex justify-center items-center space-x-4">
          <button
            onClick={() =>
              setActiveIndex(
                (current) => (current - 1 + solutions.length) % solutions.length
              )
            }
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
            onClick={() =>
              setActiveIndex((current) => (current + 1) % solutions.length)
            }
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

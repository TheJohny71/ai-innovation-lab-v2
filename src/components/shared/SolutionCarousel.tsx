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
  translateY: number;
  rotateX: number;
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
  // Find the index of the AI Solutions Overview card
  const defaultIndex = solutions.findIndex((s) => s.id === 'welcome') || 0;
  const [activeIndex, setActiveIndex] = useState(defaultIndex);

  const cardPositions: CardPosition[] = [
    // Center card with enhanced 3D effect
    {
      translateX: 0,
      translateZ: 75,
      translateY: -20,
      rotateX: 5,
      rotateY: 0,
      scale: 1.2,
      opacity: 1,
      zIndex: 20,
    },
    // First right card
    {
      translateX: 306.1467458920718,
      translateZ: -15.224093497742652,
      translateY: 0,
      rotateX: 0,
      rotateY: 8,
      scale: 1,
      opacity: 0.7,
      zIndex: 19,
    },
    // First left card
    {
      translateX: -306.1467458920718,
      translateZ: -15.224093497742652,
      translateY: 0,
      rotateX: 0,
      rotateY: -8,
      scale: 1,
      opacity: 0.7,
      zIndex: 19,
    },
    // Second right card
    {
      translateX: 565.6854249492379,
      translateZ: -58.57864376269048,
      translateY: 0,
      rotateX: 0,
      rotateY: 16,
      scale: 1,
      opacity: 0.7,
      zIndex: 18,
    },
    // Second left card
    {
      translateX: -565.6854249492379,
      translateZ: -58.57864376269048,
      translateY: 0,
      rotateX: 0,
      rotateY: -16,
      scale: 1,
      opacity: 0.7,
      zIndex: 18,
    },
    // Third right card
    {
      translateX: 739.1036260090294,
      translateZ: -123.46331352698203,
      translateY: 0,
      rotateX: 0,
      rotateY: 24,
      scale: 1,
      opacity: 0.7,
      zIndex: 17,
    },
  ];

  const getCardTransform = (index: number): CardStyle => {
    // Ensure continuous looping by calculating the shortest path to the target
    let relativeIndex = index - activeIndex;
    const length = solutions.length;

    // Adjust for shortest path around the circle
    if (relativeIndex > length / 2) {
      relativeIndex -= length;
    } else if (relativeIndex < -length / 2) {
      relativeIndex += length;
    }

    let positionIndex = Math.min(
      Math.abs(relativeIndex),
      cardPositions.length - 1
    );

    // Handle left/right positioning
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
        transition: 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
        transformStyle: 'preserve-3d',
      };
    }

    return {
      transform: `
        translateX(calc(-50% + ${position.translateX}px))
        translateZ(${position.translateZ}px)
        translateY(${position.translateY || 0}px)
        rotateX(${position.rotateX || 0}deg)
        rotateY(${position.rotateY}deg)
        scale(${position.scale})
      `,
      opacity: position.opacity,
      zIndex: position.zIndex,
      position: 'absolute',
      left: '50%',
      width: '100%',
      maxWidth: '32rem',
      transition: 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
      transformStyle: 'preserve-3d',
    };
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
        <div
          className={`w-full max-w-xl rounded-2xl border border-white/10 overflow-hidden 
                     transition-all duration-300 ${solution.borderHover}`}
        >
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-gradient-to-br from-slate-950/90 via-slate-900/90 to-slate-800/90"></div>
            <div
              className={`absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] ${solution.cardGradient}`}
            ></div>
            <div
              className={`absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,_var(--tw-gradient-stops))] ${solution.cardGradient}`}
            ></div>
            <div
              className="absolute inset-0 opacity-20"
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
            <div className="bg-blue-500/5">
              <div className="h-px w-full bg-gradient-to-r from-transparent via-blue-500/10 to-transparent"></div>
            </div>
            <div className="p-8 backdrop-blur-sm">
              <div className="flex items-start justify-between">
                <span
                  className={`text-sm font-medium px-3 py-1 rounded-full backdrop-blur-md ${solution.gradient} ${solution.textColor}`}
                >
                  {solution.category}
                </span>
                <ArrowUpRight className={`w-6 h-6 ${solution.textColor}`} />
              </div>
              <div className="mt-4 space-y-2">
                <h3 className="text-3xl font-bold bg-gradient-to-r from-white via-white to-white/80 bg-clip-text text-transparent">
                  {solution.title}
                </h3>
                <p className={`text-xl ${solution.textColor}`}>
                  {solution.subtitle}
                </p>
                <p className="text-slate-300/90 text-lg line-clamp-2">
                  {solution.description}
                </p>
              </div>
              <div className="mt-6 flex flex-wrap gap-2">
                {solution.features.slice(0, 3).map((feature, idx) => (
                  <div
                    key={idx}
                    className="px-3 py-1 rounded-full text-sm bg-slate-800/50 text-slate-300 border border-slate-700/50 backdrop-blur-sm"
                  >
                    {feature}
                  </div>
                ))}
                {solution.features.length > 3 && (
                  <span
                    className={`px-3 py-1 rounded-full text-sm backdrop-blur-sm ${solution.gradient} ${solution.textColor}`}
                  >
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
            className="p-2 rounded-full bg-slate-800/30 backdrop-blur-sm border border-white/5 text-white hover:bg-slate-700/30 transition-all"
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
                  ${index === activeIndex ? 'w-8 h-2 bg-blue-500/90' : 'w-2 h-2 bg-slate-600/50 hover:bg-slate-500/50'}`}
                aria-label={`Go to solution ${index + 1}`}
              />
            ))}
          </div>
          <button
            onClick={() =>
              setActiveIndex((current) => (current + 1) % solutions.length)
            }
            className="p-2 rounded-full bg-slate-800/30 backdrop-blur-sm border border-white/5 text-white hover:bg-slate-700/30 transition-all"
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

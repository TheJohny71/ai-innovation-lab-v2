// src/components/shared/SolutionCarousel.tsx
'use client';

import React, { type FC, useState, useCallback, useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { type Solution } from '@/app/accelerate/types';

interface SolutionCarouselProps {
  solutions: readonly Solution[];
  onSolutionSelect: (solution: Solution) => void;
}

const SolutionCarousel: FC<SolutionCarouselProps> = ({
  solutions = [] as Solution[],
  onSolutionSelect,
}) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleScroll = useCallback(
    (direction: number) => {
      const newIndex = Math.min(
        Math.max(0, activeIndex + direction),
        solutions.length - 1
      );
      setActiveIndex(newIndex);
    },
    [activeIndex, solutions.length]
  );

  const getCardStyles = useCallback(
    (index: number): React.CSSProperties => {
      const diff = index - activeIndex;
      const baseTransform = -activeIndex * 100;
      const xOffset = `${baseTransform + index * 100}%`;
      const scale = diff === 0 ? 1 : 0.9;
      const opacity = diff === 0 ? 1 : 0.5;
      const zIndex = diff === 0 ? 20 : 10;

      return {
        transform: `translateX(${xOffset}) scale(${scale})`,
        opacity,
        zIndex,
        transition: isDragging
          ? 'none'
          : 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
      };
    },
    [activeIndex, isDragging]
  );

  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    const container = containerRef.current;
    if (!container) return;

    setIsDragging(true);
    setStartX(e.pageX - container.offsetLeft);
    setScrollLeft(activeIndex);
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const container = containerRef.current;
    if (!isDragging || !container) return;

    const x = e.pageX - container.offsetLeft;
    const walk = (startX - x) / container.offsetWidth;
    const newIndex = Math.round(scrollLeft + walk);

    if (
      newIndex !== activeIndex &&
      newIndex >= 0 &&
      newIndex < solutions.length
    ) {
      setActiveIndex(newIndex);
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    const container = containerRef.current;
    const touch = e.touches[0];
    if (!container || !touch) return;

    setIsDragging(true);
    setStartX(touch.pageX - container.offsetLeft);
    setScrollLeft(activeIndex);
  };

  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    const container = containerRef.current;
    const touch = e.touches[0];
    if (!isDragging || !container || !touch) return;

    const x = touch.pageX - container.offsetLeft;
    const walk = (startX - x) / container.offsetWidth;
    const newIndex = Math.round(scrollLeft + walk);

    if (
      newIndex !== activeIndex &&
      newIndex >= 0 &&
      newIndex < solutions.length
    ) {
      setActiveIndex(newIndex);
    }
  };

  const handleTouchEnd = () => {
    setIsDragging(false);
  };

  return (
    <div className="w-full overflow-hidden">
      <div className="relative min-h-[480px] flex items-center justify-center mx-auto max-w-[1200px]">
        {/* Card Container */}
        <div
          ref={containerRef}
          className="relative w-full select-none touch-none"
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseUp}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          {solutions.map((solution, index) => (
            <div
              key={solution.id}
              className="absolute left-0 w-full max-w-xl mx-auto px-4"
              style={getCardStyles(index)}
              onClick={() => !isDragging && onSolutionSelect(solution)}
            >
              <div
                className={`rounded-2xl border transition-all duration-300
                         ${index === activeIndex ? 'border-white/20' : 'border-white/10'}
                         ${solution.cardGradient ? 'bg-gradient-to-br from-slate-900 via-slate-900 to-slate-800' : 'bg-slate-900'}`}
              >
                <div className="p-8">
                  <span
                    className={`text-sm font-medium px-3 py-1 rounded-full 
                             ${solution.gradient} ${solution.textColor} mb-4 inline-block`}
                  >
                    {solution.category}
                  </span>
                  <h3 className="text-3xl font-bold text-white mt-4">
                    {solution.title}
                  </h3>
                  <p className={`${solution.textColor} text-xl mt-2`}>
                    {solution.subtitle}
                  </p>
                  <p className="text-slate-200 text-lg my-4 line-clamp-2">
                    {solution.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {solution.features.slice(0, 3).map((feature, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 rounded-full text-sm bg-slate-800 text-slate-200 border border-slate-700"
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
            </div>
          ))}
        </div>

        {/* Navigation Controls */}
        <div className="absolute -bottom-20 left-0 right-0">
          <div className="flex flex-col items-center space-y-6">
            {/* Apple-style Scroll Bar */}
            <div className="relative w-48 h-1 bg-slate-800/50 rounded-full overflow-hidden backdrop-blur-sm">
              <div
                className="absolute top-0 left-0 h-full bg-blue-500 rounded-full transition-all duration-300"
                style={{
                  width: `${100 / solutions.length}%`,
                  transform: `translateX(${activeIndex * (100 / (solutions.length - 1))}%)`,
                }}
              />
            </div>

            {/* Navigation Buttons */}
            <div className="flex items-center space-x-4">
              <button
                onClick={() => handleScroll(-1)}
                disabled={activeIndex === 0}
                className="p-2 rounded-full bg-slate-800/50 backdrop-blur-sm border border-white/10 
                         text-white hover:bg-slate-700/50 transition-all disabled:opacity-30 
                         disabled:cursor-not-allowed"
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
                              ${
                                index === activeIndex
                                  ? 'w-8 h-2 bg-blue-500'
                                  : 'w-2 h-2 bg-slate-600 hover:bg-slate-500'
                              }`}
                    aria-label={`Go to solution ${index + 1}`}
                  />
                ))}
              </div>

              <button
                onClick={() => handleScroll(1)}
                disabled={activeIndex === solutions.length - 1}
                className="p-2 rounded-full bg-slate-800/50 backdrop-blur-sm border border-white/10 
                         text-white hover:bg-slate-700/50 transition-all disabled:opacity-30 
                         disabled:cursor-not-allowed"
                aria-label="Next solution"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SolutionCarousel;

'use client';

import React, { useState, useCallback, useRef, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import type { Solution } from '@/app/accelerate/types';
import { SolutionCard } from './SolutionCard';

interface SolutionCarouselProps {
  solutions: Solution[];
  onSolutionSelect: (solution: Solution) => void;
}

const SolutionCarousel: React.FC<SolutionCarouselProps> = ({
  solutions = [],
  onSolutionSelect,
}) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [dragDistance, setDragDistance] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  // Carousel configuration
  const PERSPECTIVE = 1000;
  const CARD_GAP = 20;
  const MAX_VISIBLE_CARDS = 5;
  const CARD_WIDTH = 400;
  const DRAG_THRESHOLD = 50;

  const getCardStyles = useCallback(
    (index: number): React.CSSProperties => {
      const diff = index - activeIndex;

      // Hide cards too far from active
      if (Math.abs(diff) > MAX_VISIBLE_CARDS / 2) {
        return { display: 'none' };
      }

      // Calculate position and transform
      const xOffset = diff * (CARD_WIDTH + CARD_GAP);
      const scale = 1 - Math.abs(diff) * 0.15;
      const zOffset = -Math.abs(diff) * 100;
      const opacity = 1 - Math.abs(diff) * 0.2;

      return {
        transform: `translateX(${xOffset + (isDragging ? dragDistance : 0)}px) 
                 translateZ(${zOffset}px) 
                 scale(${scale})`,
        opacity,
        transition: isDragging ? 'none' : 'all 0.5s ease-out',
        position: 'absolute',
        left: '50%',
        marginLeft: -(CARD_WIDTH / 2),
        width: CARD_WIDTH,
        zIndex: MAX_VISIBLE_CARDS - Math.abs(diff),
      };
    },
    [activeIndex, isDragging, dragDistance]
  );

  const handleDragStart = useCallback(
    (clientX: number) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      setIsDragging(true);
      setStartX(clientX - rect.left);
      setScrollLeft(activeIndex);
      setDragDistance(0);
    },
    [activeIndex]
  );

  const handleDragMove = useCallback(
    (clientX: number) => {
      if (!isDragging || !containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const x = clientX - rect.left;
      const distance = startX - x;
      setDragDistance(-distance);

      if (Math.abs(distance) > DRAG_THRESHOLD) {
        const direction = distance > 0 ? 1 : -1;
        const newIndex = Math.max(
          0,
          Math.min(scrollLeft + direction, solutions.length - 1)
        );
        setActiveIndex(newIndex);
      }
    },
    [isDragging, startX, scrollLeft, solutions.length]
  );

  const handleDragEnd = useCallback(() => {
    setIsDragging(false);
    setDragDistance(0);
  }, []);

  // Mouse event handlers
  const handleMouseDown = useCallback(
    (e: React.MouseEvent) => {
      handleDragStart(e.clientX);
    },
    [handleDragStart]
  );

  const handleMouseMove = useCallback(
    (e: React.MouseEvent) => {
      handleDragMove(e.clientX);
    },
    [handleDragMove]
  );

  const handleMouseUp = useCallback(() => {
    handleDragEnd();
  }, [handleDragEnd]);

  // Touch event handlers
  const handleTouchStart = useCallback(
    (e: React.TouchEvent) => {
      const touch = e.touches[0];
      if (touch) {
        handleDragStart(touch.clientX);
      }
    },
    [handleDragStart]
  );

  const handleTouchMove = useCallback(
    (e: React.TouchEvent) => {
      const touch = e.touches[0];
      if (touch) {
        handleDragMove(touch.clientX);
      }
    },
    [handleDragMove]
  );

  const handleTouchEnd = useCallback(() => {
    handleDragEnd();
  }, [handleDragEnd]);

  // Navigation handlers
  const navigate = useCallback(
    (direction: number) => {
      setActiveIndex((current) => {
        const newIndex = current + direction;
        return Math.max(0, Math.min(newIndex, solutions.length - 1));
      });
    },
    [solutions.length]
  );

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleMouseLeave = () => {
      if (isDragging) {
        handleDragEnd();
      }
    };

    container.addEventListener('mouseleave', handleMouseLeave);
    return () => {
      container.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [isDragging, handleDragEnd]);

  return (
    <div className="w-full overflow-hidden">
      <div className="relative min-h-[600px] flex items-center justify-center mx-auto w-full max-w-[90vw]">
        <div
          ref={containerRef}
          className="relative w-full h-full flex items-center justify-center"
          style={{ perspective: `${PERSPECTIVE}px` }}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          {solutions.map((solution, index) => (
            <div
              key={solution.id}
              style={getCardStyles(index)}
              onClick={() => !isDragging && onSolutionSelect(solution)}
              className={`cursor-pointer ${isDragging ? 'cursor-grabbing' : ''}`}
            >
              <SolutionCard
                solution={solution}
                isActive={index === activeIndex}
              />
            </div>
          ))}
        </div>

        {/* Navigation Controls */}
        <div className="absolute -bottom-12 left-0 right-0">
          <div className="flex justify-center items-center gap-6">
            <button
              onClick={() => navigate(-1)}
              className="p-2 rounded-full bg-slate-800/50 backdrop-blur-sm 
                     border border-white/10 text-white 
                     hover:bg-slate-700/50 transition-all
                     disabled:opacity-50 disabled:cursor-not-allowed"
              disabled={activeIndex === 0}
              aria-label="Previous solution"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            <div className="flex gap-2">
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
              onClick={() => navigate(1)}
              className="p-2 rounded-full bg-slate-800/50 backdrop-blur-sm 
                     border border-white/10 text-white 
                     hover:bg-slate-700/50 transition-all
                     disabled:opacity-50 disabled:cursor-not-allowed"
              disabled={activeIndex === solutions.length - 1}
              aria-label="Next solution"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SolutionCarousel;

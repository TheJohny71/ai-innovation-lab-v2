'use client';

import React, {
  useState,
  useCallback,
  useRef,
  useEffect,
  useMemo,
} from 'react';
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
  // Find overview index
  const overviewIndex = useMemo(
    () => solutions.findIndex((s) => s.id === 'overview'),
    [solutions]
  );

  // State management with default to overview
  const [activeIndex, setActiveIndex] = useState(
    overviewIndex !== -1 ? overviewIndex : 0
  );
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [dragDistance, setDragDistance] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  // Carousel configuration based on the example image
  const PERSPECTIVE = 1000;
  const CARD_GAP = 24;
  const MAX_VISIBLE_CARDS = 5;
  const CARD_WIDTH = 320;
  const DRAG_THRESHOLD = 50;
  const ROTATION_ANGLE = 6;
  const BASE_OPACITY = 0.8;
  const TRANSITION_DURATION = 500;
  const TRANSITION_TIMING = 'cubic-bezier(0.4, 0.0, 0.2, 1)';

  // Reset to overview when solutions change
  useEffect(() => {
    if (overviewIndex !== -1) {
      setActiveIndex(overviewIndex);
    }
  }, [overviewIndex, solutions]);

  // Index normalization for continuous loop
  const normalizeIndex = useCallback(
    (index: number): number => {
      return ((index % solutions.length) + solutions.length) % solutions.length;
    },
    [solutions.length]
  );

  // Enhanced card style calculation to match the example
  const getCardStyles = useCallback(
    (index: number): React.CSSProperties => {
      let diff = index - activeIndex;

      if (Math.abs(diff) > solutions.length / 2) {
        diff = diff - Math.sign(diff) * solutions.length;
      }

      const xOffset = diff * (CARD_WIDTH + CARD_GAP);
      const rotation = diff * ROTATION_ANGLE;

      const scale = Math.max(0.95, 1 - Math.abs(diff) * 0.05);
      const opacity = Math.max(BASE_OPACITY, 1 - Math.abs(diff) * 0.2);

      if (Math.abs(diff) > MAX_VISIBLE_CARDS / 2) {
        return { display: 'none' };
      }

      const transform = `
        translateX(${xOffset + (isDragging ? dragDistance : 0)}px)
        rotate(${rotation}deg)
        scale(${scale})
      `;

      return {
        transform,
        opacity,
        transition: isDragging
          ? 'none'
          : `all ${TRANSITION_DURATION}ms ${TRANSITION_TIMING}`,
        position: 'absolute',
        left: '50%',
        marginLeft: -(CARD_WIDTH / 2),
        width: CARD_WIDTH,
        transformOrigin: 'center center',
        zIndex: 1000 - Math.abs(diff * 10),
        willChange: 'transform, opacity',
      };
    },
    [activeIndex, isDragging, dragDistance, solutions.length]
  );

  // Card content renderer to match the example design
  const renderCardContent = (solution: Solution, isActive: boolean) => {
    const getColorScheme = (category: string) => {
      switch (category?.toLowerCase()) {
        case 'governance':
          return 'text-emerald-400';
        case 'practice management':
          return 'text-purple-400';
        case 'overview':
          return 'text-blue-400';
        case 'research':
          return 'text-emerald-400';
        default:
          return 'text-gray-400';
      }
    };

    const colorClass = getColorScheme(solution.category);

    if (isActive && solution.id === 'overview') {
      return (
        <div className="p-8 bg-blue-900/10 backdrop-blur-sm rounded-xl w-full">
          <div className="flex justify-between items-center mb-6">
            <div className={colorClass}>Overview</div>
            <ArrowUpRight className={colorClass} size={20} />
          </div>
          <h1 className="text-white text-3xl font-semibold mb-4">
            AI Solutions Overview
          </h1>
          <h2 className={`${colorClass} text-xl mb-6`}>
            Explore Available Tools
          </h2>
          <p className="text-gray-400 mb-8">{solution.description}</p>
          <div className="flex flex-wrap gap-3">
            <button className="bg-emerald-900/20 text-emerald-400 px-4 py-2 rounded-full text-sm">
              Practice Management Tools
            </button>
            <button className="bg-blue-900/20 text-blue-400 px-4 py-2 rounded-full text-sm">
              Research Assistance
            </button>
            <button className="bg-blue-900/20 text-blue-400 px-4 py-2 rounded-full text-sm">
              Knowledge Management
            </button>
            <div className="text-blue-400 text-sm mt-2">+1 more</div>
          </div>
        </div>
      );
    }

    return (
      <div className="p-6 bg-blue-900/10 backdrop-blur-sm rounded-xl w-full">
        <div className={`${colorClass} text-sm mb-1`}>{solution.category}</div>
        <h2 className="text-white text-2xl font-semibold mb-2">
          {solution.title}
        </h2>
        <div className={`${colorClass} text-sm mb-4`}>{solution.subtitle}</div>
        <p className="text-gray-400 text-sm">{solution.description}</p>
        <div className="mt-4 space-y-2">
          {solution.features?.slice(0, 3).map((feature, idx) => (
            <div key={idx} className="text-gray-400 text-sm">
              {feature}
            </div>
          ))}
          {solution.features && solution.features.length > 3 && (
            <div className={`${colorClass} text-sm`}>
              +{solution.features.length - 3} more
            </div>
          )}
        </div>
      </div>
    );
  };

  // [Drag handlers and event handlers remain unchanged]
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
        setActiveIndex(normalizeIndex(scrollLeft + direction));
      }
    },
    [isDragging, normalizeIndex, scrollLeft, startX]
  );

  const handleDragEnd = useCallback(() => {
    setIsDragging(false);
    setDragDistance(0);
  }, []);

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
        e.preventDefault();
      }
    },
    [handleDragMove]
  );

  const handleTouchEnd = useCallback(() => {
    handleDragEnd();
  }, [handleDragEnd]);

  const navigate = useCallback(
    (direction: number) => {
      setActiveIndex((current) => normalizeIndex(current + direction));
    },
    [normalizeIndex]
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
    <div className="w-full overflow-hidden bg-[#080B14]">
      <div className="relative min-h-[600px] flex items-center justify-center mx-auto w-full max-w-[1400px]">
        <div
          ref={containerRef}
          className="relative w-full h-full flex items-center justify-center"
          style={{
            perspective: `${PERSPECTIVE}px`,
            perspectiveOrigin: '50% 50%',
          }}
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
              {renderCardContent(
                solution,
                normalizeIndex(index) === normalizeIndex(activeIndex)
              )}
            </div>
          ))}
        </div>

        <div className="absolute -bottom-4 left-0 right-0 flex items-center justify-center gap-2">
          <button
            onClick={() => navigate(-1)}
            className="p-2 rounded-full bg-gray-800 hover:bg-gray-700 text-white"
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
                    index === normalizeIndex(activeIndex)
                      ? 'w-8 h-2 bg-blue-500'
                      : 'w-2 h-2 bg-gray-600'
                  }`}
                aria-label={`Go to solution ${index + 1}`}
                aria-current={index === normalizeIndex(activeIndex)}
              />
            ))}
          </div>

          <button
            onClick={() => navigate(1)}
            className="p-2 rounded-full bg-gray-800 hover:bg-gray-700 text-white"
            aria-label="Next solution"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default SolutionCarousel;

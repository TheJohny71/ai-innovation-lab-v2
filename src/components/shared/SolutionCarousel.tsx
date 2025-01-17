'use client';

import React, {
  useState,
  useCallback,
  useRef,
  useEffect,
  useMemo,
} from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import type { Solution } from '@/app/accelerate/types';
import { SolutionCard } from './SolutionCard';

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

  // Enhanced carousel configuration for better visibility and arch
  const PERSPECTIVE = 800;
  const CARD_GAP = -140;
  const MAX_VISIBLE_CARDS = 5;
  const CARD_WIDTH = 480;
  const DRAG_THRESHOLD = 50;
  const ROTATION_ANGLE = 3;
  const VERTICAL_OFFSET = 80;
  const ARC_MULTIPLIER = 80;
  const Y_OFFSET_START = 0.8;
  const BASE_OPACITY = 0.6;
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

  // Enhanced card style calculation
  const getCardStyles = useCallback(
    (index: number): React.CSSProperties => {
      let diff = index - activeIndex;

      // Normalize diff for continuous looping
      if (Math.abs(diff) > solutions.length / 2) {
        diff = diff - Math.sign(diff) * solutions.length;
      }

      // Enhanced arc positioning with stronger upward curve
      const xOffset = diff * (CARD_WIDTH + CARD_GAP);

      // More dramatic upward arc
      const normalizedDiff = Math.abs(diff);
      const arcHeight =
        normalizedDiff < Y_OFFSET_START
          ? 0
          : -Math.pow(normalizedDiff, 2) * ARC_MULTIPLIER;

      const yOffset = arcHeight + normalizedDiff * VERTICAL_OFFSET;

      // Progressive z-offset with less extreme depth
      const zOffset = Math.pow(normalizedDiff, 1.2) * 150;

      // Higher base opacity for better visibility
      const scale = Math.max(0.85, 1 - Math.pow(normalizedDiff, 0.6) * 0.15);
      const opacity = Math.max(
        BASE_OPACITY,
        1 - Math.pow(normalizedDiff, 0.7) * 0.4
      );

      // Hide cards too far from view
      if (Math.abs(diff) > MAX_VISIBLE_CARDS / 2) {
        return { display: 'none' };
      }

      const transform = `
        translateX(${xOffset + (isDragging ? dragDistance : 0)}px)
        translateY(${yOffset}px)
        translateZ(${-zOffset}px)
        rotateY(${diff * ROTATION_ANGLE}deg)
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
        filter: `blur(${Math.abs(diff) * 1}px)`,
      };
    },
    [activeIndex, isDragging, dragDistance, solutions.length]
  );

  // Drag handlers
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
        e.preventDefault();
      }
    },
    [handleDragMove]
  );

  const handleTouchEnd = useCallback(() => {
    handleDragEnd();
  }, [handleDragEnd]);

  // Navigation handler
  const navigate = useCallback(
    (direction: number) => {
      setActiveIndex((current) => normalizeIndex(current + direction));
    },
    [normalizeIndex]
  );

  // Mouse leave cleanup
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
      <div className="relative min-h-[500px] flex items-center justify-center mx-auto w-full max-w-[1200px]">
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
          <div className="absolute inset-0 bg-gradient-to-b from-slate-900/0 via-slate-900/80 to-slate-900/0 pointer-events-none" />

          {solutions.map((solution, index) => (
            <div
              key={solution.id}
              style={getCardStyles(index)}
              onClick={() => !isDragging && onSolutionSelect(solution)}
              className={`cursor-pointer ${isDragging ? 'cursor-grabbing' : ''}`}
            >
              <SolutionCard
                solution={solution}
                isActive={normalizeIndex(index) === normalizeIndex(activeIndex)}
              />
            </div>
          ))}
        </div>

        <div className="absolute -bottom-4 left-0 right-0 flex items-center justify-center gap-2">
          <button
            onClick={() => navigate(-1)}
            className="p-2 rounded-full bg-slate-800/50 backdrop-blur-sm border border-white/10 text-white hover:bg-slate-700/50 transition-all focus:outline-none focus:ring-2 focus:ring-blue-500/50 z-[1001]"
            aria-label="Previous solution"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <div className="flex gap-2 z-[1001]">
            {solutions.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`transition-all duration-300 rounded-full 
                  ${
                    index === normalizeIndex(activeIndex)
                      ? 'w-8 h-2 bg-blue-500'
                      : 'w-2 h-2 bg-slate-600 hover:bg-slate-500'
                  }
                  focus:outline-none focus:ring-2 focus:ring-blue-500/50`}
                aria-label={`Go to solution ${index + 1}`}
                aria-current={index === normalizeIndex(activeIndex)}
              />
            ))}
          </div>

          <button
            onClick={() => navigate(1)}
            className="p-2 rounded-full bg-slate-800/50 backdrop-blur-sm border border-white/10 text-white hover:bg-slate-700/50 transition-all focus:outline-none focus:ring-2 focus:ring-blue-500/50 z-[1001]"
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

'use client';

import React, {
  type FC,
  useState,
  useCallback,
  useRef,
  useEffect,
  useMemo,
} from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import type { Solution } from '@/app/accelerate/types';
import OverviewCard from '@/components/shared/OverviewCard';

interface SolutionCarouselProps {
  solutions: Solution[];
  onSolutionSelect: (solution: Solution) => void;
}

const SolutionCarousel: FC<SolutionCarouselProps> = ({
  solutions = [],
  onSolutionSelect,
}) => {
  const overviewIndex = useMemo(
    () => solutions.findIndex((s) => s.id === 'welcome'),
    [solutions]
  );

  const [activeIndex, setActiveIndex] = useState(overviewIndex);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [dragDistance, setDragDistance] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  // Enhanced carousel parameters
  const DRAG_THRESHOLD = 5;
  const TRANSITION_DURATION = 500;
  const CURVE_RADIUS = 900;
  const BASE_ROTATION = 6;
  const CENTER_SCALE = 1.1;
  const MIN_SCALE = 0.9;
  const CENTER_OPACITY = 1;
  const SIDE_OPACITY = 0.8;

  const solutionsLength = useMemo(() => solutions.length, [solutions]);

  const normalizeIndex = useCallback(
    (index: number): number =>
      ((index % solutionsLength) + solutionsLength) % solutionsLength,
    [solutionsLength]
  );

  useEffect(() => {
    setActiveIndex(overviewIndex);
  }, [overviewIndex]);

  const getCardStyles = useCallback(
    (index: number): React.CSSProperties => {
      const len = solutionsLength;
      let diff = index - activeIndex;

      const altDiff = diff - Math.sign(diff) * len;
      if (Math.abs(altDiff) < Math.abs(diff)) {
        diff = altDiff;
      }

      const theta = (diff * Math.PI) / 10;
      const xOffset = Math.sin(theta) * CURVE_RADIUS;
      const zOffset = (1 - Math.cos(theta)) * 250;

      const isCenter = index === normalizeIndex(activeIndex);
      const distanceFromCenter = Math.abs(diff);
      const scale = isCenter
        ? CENTER_SCALE
        : Math.max(MIN_SCALE, 1 - distanceFromCenter * 0.08);

      const opacity = isCenter
        ? CENTER_OPACITY
        : Math.max(SIDE_OPACITY, 1 - distanceFromCenter * 0.12);

      const rotate = isCenter
        ? 0
        : diff * BASE_ROTATION * (1 - distanceFromCenter * 0.1);

      const dragOffset = isDragging ? dragDistance * 0.1 : 0;

      return {
        transform: `
          translateX(calc(-50% + ${xOffset + dragOffset}px))
          translateZ(${-zOffset}px)
          scale(${scale})
          rotateY(${rotate}deg)
        `,
        opacity,
        zIndex: 20 - Math.abs(diff),
        position: 'absolute',
        left: '50%',
        width: '100%',
        maxWidth: '32rem',
        transition: isDragging
          ? 'none'
          : `all ${TRANSITION_DURATION}ms cubic-bezier(0.4, 0.0, 0.2, 1)`,
        transformStyle: 'preserve-3d',
        willChange: 'transform, opacity',
        transformOrigin: 'center center -400px',
      };
    },
    [activeIndex, isDragging, normalizeIndex, dragDistance, solutionsLength]
  );

  const handleMouseDown = useCallback(
    (e: React.MouseEvent) => {
      const container = containerRef.current;
      if (!container) return;

      const rect = container.getBoundingClientRect();
      if (!rect) return;

      setIsDragging(true);
      setStartX(e.clientX - rect.left);
      setScrollLeft(activeIndex);
      setDragDistance(0);
    },
    [activeIndex]
  );

  const handleMouseMove = useCallback(
    (e: React.MouseEvent) => {
      const container = containerRef.current;
      if (!isDragging || !container) return;

      const rect = container.getBoundingClientRect();
      if (!rect) return;

      const x = e.clientX - rect.left;
      const distance = startX - x;
      setDragDistance(distance);

      if (Math.abs(distance) > DRAG_THRESHOLD) {
        const walk = distance / container.offsetWidth;
        const newIndex = normalizeIndex(Math.round(scrollLeft + walk * 2));
        if (newIndex !== activeIndex) {
          setActiveIndex(newIndex);
        }
      }
    },
    [isDragging, normalizeIndex, scrollLeft, startX, activeIndex]
  );

  const handleMouseUp = useCallback(() => {
    setIsDragging(false);
    setDragDistance(0);
  }, []);

  const handleTouchStart = useCallback(
    (e: React.TouchEvent) => {
      const container = containerRef.current;
      if (!container) return;

      const rect = container.getBoundingClientRect();
      if (!rect) return;

      const touch = e.touches[0];
      if (!touch) return;

      setIsDragging(true);
      setStartX(touch.clientX - rect.left);
      setScrollLeft(activeIndex);
      setDragDistance(0);
    },
    [activeIndex]
  );

  const handleTouchMove = useCallback(
    (e: React.TouchEvent) => {
      const container = containerRef.current;
      if (!isDragging || !container) return;

      const rect = container.getBoundingClientRect();
      if (!rect) return;

      const touch = e.touches[0];
      if (!touch) return;

      const x = touch.clientX - rect.left;
      const distance = startX - x;
      setDragDistance(distance);

      if (Math.abs(distance) > DRAG_THRESHOLD) {
        const walk = distance / container.offsetWidth;
        const newIndex = normalizeIndex(Math.round(scrollLeft + walk * 2));
        if (newIndex !== activeIndex) {
          setActiveIndex(newIndex);
        }
      }
    },
    [isDragging, normalizeIndex, scrollLeft, startX, activeIndex]
  );

  const handleTouchEnd = useCallback(() => {
    setIsDragging(false);
    setDragDistance(0);
  }, []);

  const handleScroll = useCallback(
    (direction: number) => {
      setActiveIndex((prev) => normalizeIndex(prev + direction));
    },
    [normalizeIndex]
  );

  return (
    <div className="w-full">
      <div className="relative min-h-[520px] flex items-center justify-center mx-auto w-full max-w-[90vw] mt-12">
        <div
          ref={containerRef}
          className="relative w-full h-full flex items-center justify-center [perspective:1200px]"
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
              className="absolute left-1/2 w-full max-w-xl px-4 cursor-pointer"
              style={getCardStyles(index)}
              onClick={() => !isDragging && onSolutionSelect(solution)}
            >
              {solution.id === 'welcome' ? (
                <OverviewCard solution={solution} />
              ) : (
                <div
                  className={`rounded-2xl border transition-all duration-300 overflow-hidden
                           ${index === activeIndex ? 'border-white/20 shadow-lg' : 'border-white/10'}
                           ${solution.cardGradient ? 'bg-gradient-to-br from-slate-900 via-slate-900 to-slate-800' : 'bg-slate-900'}`}
                >
                  <div className="p-8">
                    <span
                      className={`text-sm font-medium px-3 py-1 rounded-full 
                               ${solution.gradient} ${solution.textColor} mb-4 inline-block`}
                    >
                      {solution.category}
                    </span>
                    <h3 className="text-3xl font-bold text-white mt-4 tracking-tight">
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
                          className="px-3 py-1 rounded-full text-sm bg-slate-800/80 text-slate-200 border border-slate-700"
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
              )}
            </div>
          ))}
        </div>

        <div className="absolute -bottom-16 left-0 right-0">
          <div className="flex justify-center items-center space-x-4">
            <button
              onClick={() => handleScroll(-1)}
              className="p-2 rounded-full bg-slate-800/50 backdrop-blur-sm border border-white/10 
                       text-white hover:bg-slate-700/50 transition-all"
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
                              index === normalizeIndex(activeIndex)
                                ? 'w-8 h-2 bg-blue-500'
                                : 'w-2 h-2 bg-slate-600 hover:bg-slate-500'
                            }`}
                  aria-label={`Go to solution ${index + 1}`}
                />
              ))}
            </div>

            <button
              onClick={() => handleScroll(1)}
              className="p-2 rounded-full bg-slate-800/50 backdrop-blur-sm border border-white/10 
                       text-white hover:bg-slate-700/50 transition-all"
              aria-label="Next solution"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SolutionCarousel;

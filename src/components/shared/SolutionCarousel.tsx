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

  // Fine-tuned carousel parameters for optimal layout
  const DRAG_THRESHOLD = 5;
  const TRANSITION_DURATION = 500;
  const CURVE_RADIUS = 750; // Increased for wider fan spread
  const BASE_ROTATION = 15; // Increased for more dramatic fan effect
  const CENTER_SCALE = 0.85; // Reduced further to make center card smaller
  const MIN_SCALE = 0.75; // Reduced for better size progression
  const CENTER_OPACITY = 1;
  const SIDE_OPACITY = 0.65; // Reduced for more dramatic fade
  const PERSPECTIVE = 1200; // Increased for enhanced 3D effect

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

      const theta = (diff * Math.PI) / 10; // Adjusted for wider spread
      const xOffset = Math.sin(theta) * CURVE_RADIUS;
      const zOffset = (1 - Math.cos(theta)) * 300; // Increased from 250 for more depth

      const isCenter = index === normalizeIndex(activeIndex);
      const distanceFromCenter = Math.abs(diff);

      const scale = isCenter
        ? CENTER_SCALE
        : Math.max(MIN_SCALE, 1 - distanceFromCenter * 0.15); // Increased scale reduction

      const opacity = isCenter
        ? CENTER_OPACITY
        : Math.max(SIDE_OPACITY, 1 - distanceFromCenter * 0.2);

      const rotate = isCenter
        ? 0
        : diff * BASE_ROTATION * (1 - distanceFromCenter * 0.1);

      const dragOffset = isDragging ? dragDistance * 0.1 : 0;

      const maxOffset = Math.min(Math.abs(xOffset), CURVE_RADIUS);
      const normalizedXOffset = Math.sign(xOffset) * maxOffset;

      return {
        transform: `
          translateX(calc(-50% + ${normalizedXOffset + dragOffset}px))
          translateZ(${-zOffset}px)
          scale(${scale})
          rotateY(${rotate}deg)
        `,
        opacity,
        zIndex: 20 - Math.abs(diff),
        position: 'absolute',
        left: '50%',
        width: '100%',
        maxWidth: '26rem', // Reduced from 28rem
        transition: isDragging
          ? 'none'
          : `all ${TRANSITION_DURATION}ms cubic-bezier(0.4, 0.0, 0.2, 1)`,
        transformStyle: 'preserve-3d',
        willChange: 'transform, opacity',
        transformOrigin: 'center center -300px', // Adjusted from -250px
        visibility: Math.abs(diff) > 2 ? 'hidden' : 'visible',
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
    <div className="w-full overflow-hidden">
      <div className="relative min-h-[450px] flex items-center justify-center mx-auto w-full max-w-[80vw] mb-16">
        <div
          ref={containerRef}
          className="relative w-full h-full flex items-center justify-center"
          style={{ perspective: `${PERSPECTIVE}px` }}
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
                  className={`rounded-2xl border transition-all duration-300 overflow-hidden backdrop-blur-sm
                           ${index === activeIndex ? 'border-white/20 shadow-xl' : 'border-white/10'}
                           ${solution.cardGradient ? 'bg-gradient-to-br from-slate-900/90 via-slate-900/90 to-slate-800/90' : 'bg-slate-900/90'}`}
                >
                  <div className="p-6">
                    <span
                      className={`text-sm font-medium px-3 py-1 rounded-full 
                               ${solution.gradient} ${solution.textColor} mb-4 inline-block`}
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

        {/* Navigation Controls */}
        <div className="absolute -bottom-8 left-0 right-0">
          <div className="flex justify-center items-center gap-6">
            <button
              onClick={() => handleScroll(-1)}
              className="p-2 rounded-full bg-slate-800/50 backdrop-blur-sm border border-white/10 
                       text-white hover:bg-slate-700/50 transition-all"
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
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SolutionCarousel;

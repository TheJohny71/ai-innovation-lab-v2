'use client';

import React, {
  type FC,
  useState,
  useCallback,
  useRef,
  useEffect,
} from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { type Solution } from '@/app/accelerate/types';
import OverviewCard from '@/components/shared/OverviewCard';

interface SolutionCarouselProps {
  solutions: readonly Solution[];
  onSolutionSelect: (solution: Solution) => void;
}

const SolutionCarousel: FC<SolutionCarouselProps> = ({
  solutions = [] as Solution[],
  onSolutionSelect,
}) => {
  const overviewIndex = solutions.findIndex((s) => s.id === 'welcome');
  const [activeIndex, setActiveIndex] = useState(overviewIndex);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  // Memoize normalizeIndex function
  const normalizeIndex = useCallback(
    (index: number): number => {
      const len = solutions.length;
      return ((index % len) + len) % len;
    },
    [solutions.length]
  );

  useEffect(() => {
    const handleRouteChange = () => {
      setActiveIndex(overviewIndex);
    };
    return () => handleRouteChange();
  }, [overviewIndex]);

  const getCardStyles = useCallback(
    (index: number): React.CSSProperties => {
      const len = solutions.length;
      let diff = index - activeIndex;
      const altDiff = diff - Math.sign(diff) * len;
      if (Math.abs(altDiff) < Math.abs(diff)) {
        diff = altDiff;
      }

      // Adjusted base values for curved layout
      const baseSpacing = 250; // Controls card spacing
      const curveRadius = 800; // Controls the curve depth
      const baseRotation = 8; // Degrees of rotation for each card

      // Calculate position on the curve
      const theta = (diff * Math.PI) / 8; // Angle in radians
      const xOffset = Math.sin(theta) * curveRadius;
      const zOffset = (1 - Math.cos(theta)) * 200; // Z-depth of curve

      // Scale and opacity based on position
      const scale = diff === 0 ? 1 : Math.max(0.7, 0.9 - Math.abs(diff) * 0.1);
      const opacity =
        diff === 0 ? 1 : Math.max(0.4, 0.8 - Math.abs(diff) * 0.15);

      // Calculate rotation for curved effect
      const rotate = diff === 0 ? 0 : diff * baseRotation;

      // Apply transforms
      return {
        transform: `
          translateX(calc(-50% + ${xOffset}px))
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
          : 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
        transformStyle: 'preserve-3d',
      };
    },
    [activeIndex, isDragging, solutions.length]
  );

  const handleMouseDown = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      const container = containerRef.current;
      if (!container) return;
      setIsDragging(true);
      setStartX(e.pageX - container.offsetLeft);
      setScrollLeft(activeIndex);
    },
    [activeIndex]
  );

  const handleMouseMove = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      const container = containerRef.current;
      if (!isDragging || !container) return;
      const x = e.pageX - container.offsetLeft;
      const walk = (startX - x) / container.offsetWidth;
      setActiveIndex(normalizeIndex(Math.round(scrollLeft + walk * 2)));
    },
    [isDragging, normalizeIndex, scrollLeft, startX]
  );

  const handleMouseUp = useCallback(() => {
    setIsDragging(false);
  }, []);

  const handleTouchStart = useCallback(
    (e: React.TouchEvent<HTMLDivElement>) => {
      const container = containerRef.current;
      const touch = e.touches[0];
      if (!container || !touch) return;
      setIsDragging(true);
      setStartX(touch.pageX - container.offsetLeft);
      setScrollLeft(activeIndex);
    },
    [activeIndex]
  );

  const handleTouchMove = useCallback(
    (e: React.TouchEvent<HTMLDivElement>) => {
      const container = containerRef.current;
      const touch = e.touches[0];
      if (!isDragging || !container || !touch) return;
      const x = touch.pageX - container.offsetLeft;
      const walk = (startX - x) / container.offsetWidth;
      setActiveIndex(normalizeIndex(Math.round(scrollLeft + walk * 2)));
    },
    [isDragging, normalizeIndex, scrollLeft, startX]
  );

  const handleTouchEnd = useCallback(() => {
    setIsDragging(false);
  }, []);

  const handleScroll = useCallback(
    (direction: number) => {
      setActiveIndex((prev) => normalizeIndex(prev + direction));
    },
    [normalizeIndex]
  );

  return (
    <div className="w-full">
      <div className="relative min-h-[480px] flex items-center justify-center mx-auto w-full max-w-[90vw] mt-8">
        {/* Card Container */}
        <div
          ref={containerRef}
          className="relative w-full h-full flex items-center justify-center [perspective:1000px]"
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
              )}
            </div>
          ))}
        </div>

        {/* Navigation Controls */}
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

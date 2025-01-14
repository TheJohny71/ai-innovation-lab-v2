import { type FC, useState, useCallback, useMemo } from 'react';
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

  const getCardStyles = useCallback(
    (index: number): { transform: string; opacity: number; zIndex: number } => {
      const diff = index - activeIndex;
      const baseScale = Math.max(0.8, 1 - Math.abs(diff) * 0.1);
      const baseOpacity = Math.max(0.7, 1 - Math.abs(diff) * 0.15);
      const spacing = 160;
      const xOffset = diff * spacing;
      const zOffset = Math.abs(diff) * 40;
      const yOffset = Math.abs(diff) * 5;

      if (diff === 0) {
        return {
          transform: 'translate(-50%, 0) scale(1)',
          opacity: 1,
          zIndex: 30,
        };
      }

      return {
        transform: `translate(calc(-50% + ${xOffset}px), ${yOffset}px) 
                   translateZ(${-zOffset}px) 
                   scale(${baseScale}) 
                   rotateY(${diff * 8}deg)`,
        opacity: baseOpacity,
        zIndex: 20 - Math.abs(diff),
      };
    },
    [activeIndex]
  );

  const renderSolutionCard = useCallback(
    (solution: Solution, index: number) => {
      const styles = getCardStyles(index);
      const isActive = index === activeIndex;

      return (
        <div
          key={solution.id}
          className="absolute left-1/2 w-full max-w-2xl transition-all duration-500 ease-out cursor-pointer"
          style={{
            transform: styles.transform,
            opacity: styles.opacity,
            zIndex: styles.zIndex,
          }}
          onClick={() => isActive && onSolutionSelect(solution)}
        >
          <div
            className={`h-full rounded-2xl border transition-all duration-300
                     ${isActive ? 'border-white/20' : 'border-white/10'}
                     ${
                       solution.cardGradient
                         ? `bg-gradient-to-br from-slate-900 via-slate-900 to-slate-800`
                         : 'bg-slate-900'
                     }`}
          >
            <div className="p-8 h-full">
              <div className="flex flex-col justify-between h-full">
                <div>
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
                </div>
                <div>
                  <p className="text-slate-200 text-lg mb-4 line-clamp-2">
                    {solution.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {solution.features.slice(0, 3).map((feature, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 rounded-full text-sm
                                bg-slate-800 text-slate-200 
                                border border-slate-700"
                      >
                        {feature}
                      </span>
                    ))}
                    {solution.features.length > 3 && (
                      <span
                        className={`px-3 py-1 rounded-full text-sm 
                                ${solution.gradient} ${solution.textColor}`}
                      >
                        +{solution.features.length - 3} more
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    },
    [activeIndex, getCardStyles, onSolutionSelect]
  );

  // Event handlers remain the same
  const handleEventDrag = useCallback(
    (deltaX: number) => {
      if (!solutions?.length) return;

      const walk = deltaX - scrollLeft;
      if (Math.abs(walk) > 50) {
        if (walk > 0 && activeIndex > 0) {
          setActiveIndex((prev) => prev - 1);
          setIsDragging(false);
        } else if (walk < 0 && activeIndex < solutions.length - 1) {
          setActiveIndex((prev) => prev + 1);
          setIsDragging(false);
        }
        setScrollLeft(deltaX);
      }
    },
    [activeIndex, scrollLeft, solutions]
  );

  // Mouse and touch event handlers remain the same...

  return (
    <div className="w-full">
      <div className="relative h-[480px] flex items-center justify-center perspective-[2000px]">
        <div className="relative w-full h-full flex items-center justify-center preserve-3d">
          {solutions.map((solution, index) =>
            renderSolutionCard(solution, index)
          )}
        </div>

        <div className="absolute -bottom-16 left-0 right-0 flex justify-center items-center space-x-3">
          <button
            onClick={() => setActiveIndex(Math.max(0, activeIndex - 1))}
            disabled={activeIndex === 0}
            className="p-2 rounded-full bg-slate-800 border border-white/10 text-white 
                     hover:bg-slate-700 transition-colors disabled:opacity-30 
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
                className={`w-2 h-2 rounded-full transition-all duration-300 
                          ${
                            index === activeIndex
                              ? 'bg-blue-500 scale-110'
                              : 'bg-slate-600 hover:bg-slate-500'
                          } hover:scale-110`}
                aria-label={`Go to solution ${index + 1}`}
              />
            ))}
          </div>

          <button
            onClick={() =>
              setActiveIndex(Math.min(solutions.length - 1, activeIndex + 1))
            }
            disabled={activeIndex === solutions.length - 1}
            className="p-2 rounded-full bg-slate-800 border border-white/10 text-white 
                     hover:bg-slate-700 transition-colors disabled:opacity-30 
                     disabled:cursor-not-allowed"
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

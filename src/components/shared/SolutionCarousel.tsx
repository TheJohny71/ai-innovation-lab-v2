import { type FC, useState, useCallback } from 'react';
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

  const getCardStyles = useCallback(
    (index: number): { transform: string; opacity: number; zIndex: number } => {
      const diff = index - activeIndex;

      // Show more of adjacent cards
      const spacing = 120; // Reduced spacing to show more of adjacent cards
      const xOffset = diff * spacing;

      // Smoother opacity falloff for visible cards
      const baseOpacity =
        diff === 0 ? 1 : Math.max(0.5, 1 - Math.abs(diff) * 0.3);

      // Smaller scale difference between cards
      const baseScale =
        diff === 0 ? 1 : Math.max(0.9, 1 - Math.abs(diff) * 0.05);

      return {
        transform: `translate(calc(-50% + ${xOffset}px), 0) scale(${baseScale})`,
        opacity: baseOpacity,
        zIndex: 20 - Math.abs(diff),
      };
    },
    [activeIndex]
  );

  return (
    <div className="w-full">
      <div className="relative h-[480px] flex items-center justify-center">
        {/* Card Container */}
        <div className="relative w-full h-full flex items-center justify-center">
          {solutions.map((solution, index) => (
            <div
              key={solution.id}
              className="absolute left-1/2 w-full max-w-2xl transition-all duration-500 ease-out cursor-pointer"
              style={getCardStyles(index)}
              onClick={() =>
                index === activeIndex && onSolutionSelect(solution)
              }
            >
              {/* Card content remains the same */}
              <div
                className={`h-full rounded-2xl border transition-all duration-300
                           ${index === activeIndex ? 'border-white/20' : 'border-white/10'}
                           ${
                             solution.cardGradient
                               ? 'bg-gradient-to-br from-slate-900 via-slate-900 to-slate-800'
                               : 'bg-slate-900'
                           }`}
              >
                {/* Existing card content */}
              </div>
            </div>
          ))}
        </div>

        {/* Navigation Controls - Below Cards */}
        <div className="absolute -bottom-16 left-0 right-0 flex flex-col items-center space-y-6">
          {/* Dot Indicators */}
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

          {/* Arrow Controls */}
          <div className="flex items-center space-x-4">
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
    </div>
  );
};

export default SolutionCarousel;

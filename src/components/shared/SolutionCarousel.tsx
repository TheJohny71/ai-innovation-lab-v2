// SolutionCarousel.tsx
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
    (index: number) => {
      const diff = index - activeIndex;
      const spacing = 120;
      const xOffset = diff * spacing;
      const baseOpacity =
        diff === 0 ? 1 : Math.max(0.5, 1 - Math.abs(diff) * 0.3);
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
    <div className="w-full overflow-hidden">
      {' '}
      {/* Added overflow-hidden */}
      <div className="relative min-h-[480px] flex items-center justify-center mx-auto max-w-[1200px]">
        {/* Card Container */}
        <div className="relative w-full flex items-center justify-center">
          {solutions.map((solution, index) => (
            <div
              key={solution.id}
              className="absolute left-1/2 w-full max-w-xl transition-all duration-500 ease-out cursor-pointer px-4"
              style={getCardStyles(index)}
              onClick={() =>
                index === activeIndex && onSolutionSelect(solution)
              }
            >
              <div
                className={`rounded-2xl border transition-all duration-300
                         ${index === activeIndex ? 'border-white/20' : 'border-white/10'}
                         ${
                           solution.cardGradient
                             ? 'bg-gradient-to-br from-slate-900 via-slate-900 to-slate-800'
                             : 'bg-slate-900'
                         }`}
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
          ))}
        </div>

        {/* Navigation Controls - Centered below cards */}
        <div className="absolute -bottom-20 left-0 right-0">
          <div className="flex justify-center items-center space-x-4">
            <button
              onClick={() => setActiveIndex(Math.max(0, activeIndex - 1))}
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
              onClick={() =>
                setActiveIndex(Math.min(solutions.length - 1, activeIndex + 1))
              }
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
  );
};

export default SolutionCarousel;

import { type FC, useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { type Solution } from '@/app/accelerate/types';

interface SolutionCarouselProps {
  solutions: Solution[];
  onSolutionSelect: (solution: Solution) => void;
}

const SolutionCarousel: FC<SolutionCarouselProps> = ({
  solutions,
  onSolutionSelect,
}) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const getCardStyles = (index: number): string => {
    const diff = index - activeIndex;

    // Base styles for all cards
    let styles =
      'absolute transform transition-all duration-500 ease-in-out w-full max-w-2xl';

    if (Math.abs(diff) <= 2) {
      // Calculate horizontal position - cards move left/right from center
      const translateX = `${diff * 100}%`; // Move cards 100% of width left/right
      const scale = 1 - Math.abs(diff) * 0.05; // Slight scale reduction for distance
      const opacity = 1 - Math.abs(diff) * 0.2; // Fade out cards further away
      const zIndex = 30 - Math.abs(diff);

      return `${styles} left-1/2 -translate-x-1/2 translate-x-[${translateX}] 
              scale-${scale} opacity-${opacity} z-${zIndex} 
              ${diff === 0 ? 'cursor-pointer' : ''}`;
    }

    // Hide cards too far from active
    return `${styles} opacity-0 pointer-events-none`;
  };

  return (
    <div className="w-full">
      <div className="relative h-[480px] flex items-center justify-center">
        {/* Cards Container */}
        <div className="relative w-full h-full flex items-center justify-center">
          {solutions.map((solution, index) => (
            <div
              key={solution.id}
              className={getCardStyles(index)}
              onClick={() =>
                index === activeIndex && onSolutionSelect(solution)
              }
            >
              <div
                className="h-full rounded-2xl bg-slate-900/60 border border-white/10 
                            backdrop-blur-sm hover:bg-white/5 transition-all duration-300"
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
                      <p className="text-slate-400 text-lg mb-4 line-clamp-2">
                        {solution.description}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {solution.features
                          .slice(0, 3)
                          .map((feature: string, idx: number) => (
                            <span
                              key={idx}
                              className="px-3 py-1 rounded-full text-sm
                                    bg-slate-800/50 text-slate-300 
                                    border border-slate-700/50"
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
          ))}
        </div>

        {/* Navigation Controls */}
        <div className="absolute -bottom-16 left-0 right-0 flex justify-center items-center space-x-3">
          <button
            onClick={() => setActiveIndex(Math.max(0, activeIndex - 1))}
            disabled={activeIndex === 0}
            className="p-2 rounded-full bg-slate-800/30 border border-white/10 text-white 
                     hover:bg-slate-700/40 transition-colors disabled:opacity-30 
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
                            ? 'bg-blue-500/70 scale-110'
                            : 'bg-slate-600/50 hover:bg-slate-500/60'
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
            className="p-2 rounded-full bg-slate-800/30 border border-white/10 text-white 
                     hover:bg-slate-700/40 transition-colors disabled:opacity-30 
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

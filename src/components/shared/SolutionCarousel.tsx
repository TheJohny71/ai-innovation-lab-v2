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

  const getPosition = (
    index: number
  ): 'center' | 'left' | 'right' | 'far-left' | 'far-right' => {
    const diff = index - activeIndex;
    if (diff === 0) return 'center';
    if (diff === 1) return 'right';
    if (diff === -1) return 'left';
    if (diff >= 2) return 'far-right';
    return 'far-left';
  };

  const getCardStyles = (position: string): string => {
    switch (position) {
      case 'center':
        return 'z-20 translate-x-0 opacity-100 scale-100 pointer-events-auto';
      case 'left':
        return 'z-10 -translate-x-full opacity-50 scale-90 pointer-events-auto';
      case 'far-left':
        return 'z-0 -translate-x-[200%] opacity-0 scale-75 pointer-events-none';
      case 'right':
        return 'z-10 translate-x-full opacity-50 scale-90 pointer-events-auto';
      case 'far-right':
        return 'z-0 translate-x-[200%] opacity-0 scale-75 pointer-events-none';
      default:
        return 'opacity-0 scale-0 pointer-events-none';
    }
  };

  const handleCardClick = (index: number, solution: Solution) => {
    if (index === activeIndex) {
      onSolutionSelect(solution);
    } else {
      setActiveIndex(index);
    }
  };

  return (
    <div className="w-full flex items-center justify-center">
      {/* Fixed Center Card Space */}
      <div className="relative w-full h-[480px] flex items-center justify-center">
        {/* Center Card Marker (for visualization during development) */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-[640px] h-[320px] absolute">
            {solutions.map((solution, index) => (
              <div
                key={solution.id}
                className={`absolute inset-0 transition-all duration-500 ease-in-out ${getCardStyles(getPosition(index))}`}
                onClick={() => handleCardClick(index, solution)}
              >
                <div
                  className={`h-full solution-card-content rounded-2xl bg-slate-900/60 border border-white/10 
                              backdrop-blur-sm ${solution.borderHover} transition-all duration-300 
                              hover:bg-white/5 cursor-pointer`}
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
                          {solution.features.slice(0, 3).map((feature, idx) => (
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
                              className={`px-3 py-1 rounded-full text-sm ${solution.gradient} ${solution.textColor}`}
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

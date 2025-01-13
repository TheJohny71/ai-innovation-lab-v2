import { type FC, useState } from 'react';
import { ChevronLeft, ChevronRight, ArrowRight, X } from 'lucide-react';
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
        return 'z-20 translate-x-0 opacity-100 scale-100';
      case 'left':
        return 'z-10 -translate-x-[calc(100%+4rem)] opacity-30 scale-95';
      case 'far-left':
        return 'z-0 -translate-x-[calc(200%+8rem)] opacity-0 scale-90';
      case 'right':
        return 'z-10 translate-x-[calc(100%+4rem)] opacity-30 scale-95';
      case 'far-right':
        return 'z-0 translate-x-[calc(200%+8rem)] opacity-0 scale-90';
      default:
        return 'opacity-0 scale-0';
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
    <div className="w-full flex items-center justify-center py-16">
      <div className="relative w-full h-96">
        <div className="absolute inset-0 flex items-center justify-center">
          {solutions.map((solution, index) => (
            <div
              key={solution.id}
              className={`absolute left-1/2 -translate-x-1/2 w-full max-w-3xl transition-all duration-500 ease-in-out ${getCardStyles(getPosition(index))}`}
              onClick={() => handleCardClick(index, solution)}
            >
              <div
                className={`solution-card-content rounded-2xl bg-slate-900/60 border border-white/10 backdrop-blur-sm
                           ${solution.borderHover} transition-all duration-300`}
              >
                <div className="p-8 h-full">
                  <div className="flex flex-col h-full justify-between">
                    <div>
                      <span
                        className={`text-sm font-medium px-3 py-1 rounded-full 
                                   ${solution.gradient} ${solution.textColor} mb-4 inline-block`}
                      >
                        {solution.category}
                      </span>
                      <h3 className="text-4xl font-bold text-white mb-4">
                        {solution.title}
                      </h3>
                      <p className={`${solution.textColor} text-xl`}>
                        {solution.subtitle}
                      </p>
                    </div>
                    <div className="flex items-center justify-between mt-8">
                      <p className="text-slate-400 text-lg max-w-lg line-clamp-2">
                        {solution.description}
                      </p>
                      <ChevronRight className="w-5 h-5" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="absolute -bottom-12 left-0 right-0 flex justify-center items-center space-x-3">
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

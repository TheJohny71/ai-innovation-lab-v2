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
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const getCardStyles = (
    index: number
  ): { transform: string; opacity: number; zIndex: number } => {
    const diff = index - activeIndex;

    // Base positioning
    const baseX = diff * 60; // Horizontal spacing between cards
    const baseScale = Math.max(0.8, 1 - Math.abs(diff) * 0.1);
    const baseOpacity = Math.max(0, 1 - Math.abs(diff) * 0.3);
    const baseZ = Math.max(0, 10 - Math.abs(diff) * 2);

    // Arc calculations
    const radius = 600;
    const angle = ((diff * 15) / 180) * Math.PI; // Convert to radians
    const x = Math.sin(angle) * radius;
    const z = (1 - Math.cos(angle)) * radius;

    if (diff === 0) {
      return {
        transform: 'translateX(-50%) translateZ(0) scale(1)',
        opacity: 1,
        zIndex: 30,
      };
    }

    return {
      transform: `translateX(calc(-50% + ${x}px)) 
                 translateZ(${-z}px) 
                 scale(${baseScale}) 
                 rotateY(${diff * 15}deg)`,
      opacity: baseOpacity,
      zIndex: baseZ,
    };
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    setStartX(e.pageX - scrollLeft);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - startX;
    const walk = x - scrollLeft;
    if (Math.abs(walk) > 100) {
      if (walk > 0 && activeIndex > 0) {
        setActiveIndex(activeIndex - 1);
        setIsDragging(false);
      } else if (walk < 0 && activeIndex < solutions.length - 1) {
        setActiveIndex(activeIndex + 1);
        setIsDragging(false);
      }
      setScrollLeft(x);
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  return (
    <div className="w-full perspective-1000">
      <div
        className="relative h-[480px] flex items-center justify-center"
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
      >
        {/* 3D Scene Container */}
        <div className="relative w-full h-full flex items-center justify-center preserve-3d">
          {solutions.map((solution, index) => {
            const styles = getCardStyles(index);

            return (
              <div
                key={solution.id}
                className="absolute left-1/2 w-full max-w-2xl transition-all duration-500 ease-out"
                style={{
                  transform: styles.transform,
                  opacity: styles.opacity,
                  zIndex: styles.zIndex,
                }}
                onClick={() =>
                  index === activeIndex && onSolutionSelect(solution)
                }
              >
                <div
                  className={`h-full rounded-2xl border border-white/10 
                           transition-all duration-300 cursor-pointer
                           ${solution.cardGradient ? `bg-gradient-to-br ${solution.cardGradient}` : 'bg-slate-900/60'}
                           ${index === activeIndex ? solution.borderHover : ''}`}
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
          })}
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

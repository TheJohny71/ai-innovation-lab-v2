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

  const getCardStyles = (index: number): string => {
    const diff = index - activeIndex;

    // Enhanced base styles with premium feel
    let styles =
      'absolute transition-all duration-700 ease-out w-full max-w-2xl';

    if (diff === 0) {
      // Center card with enhanced prominence
      return `${styles} left-1/2 -translate-x-1/2 z-30 opacity-100 transform-none scale-100`;
    } else {
      // Calculate arc position with adjusted radius for better visual spread
      const radius = 900; // Slightly larger radius for smoother arc
      const angleSpread = 50; // Reduced angle for tighter grouping
      const angle = (diff * angleSpread) / (solutions.length * 0.75);
      const xPos = Math.sin((angle * Math.PI) / 180) * radius;
      const zPos = Math.cos((angle * Math.PI) / 180) * radius - radius;

      return `${styles} left-1/2 transform-gpu
              translate-x-[calc(-50%+${xPos}px)]
              translate-z-[${zPos}px]
              rotateY(${angle}deg)
              opacity-${Math.max(0, 80 - Math.abs(diff) * 20)}
              z-${Math.max(0, 20 - Math.abs(diff))}
              scale-${Math.max(0.8, 1 - Math.abs(diff) * 0.08)}`;
    }
  };

  // Mouse handlers remain the same
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
        {/* Enhanced 3D Scene Container with subtle background effect */}
        <div className="relative w-full h-full flex items-center justify-center preserve-3d">
          <div className="absolute inset-0 bg-gradient-to-b from-slate-900/20 to-slate-900/10 backdrop-blur-3xl rounded-3xl" />

          {solutions.map((solution, index) => (
            <div
              key={solution.id}
              className={getCardStyles(index)}
              onClick={() =>
                index === activeIndex && onSolutionSelect(solution)
              }
            >
              <div
                className={`h-full rounded-2xl bg-gradient-to-br from-slate-900/95 to-slate-800/95
                          backdrop-blur-xl border border-white/10 shadow-2xl
                          transition-all duration-500 ease-out
                          ${index === activeIndex ? 'hover:bg-white/5 hover:scale-[1.02]' : ''}`}
              >
                <div className="p-8 h-full">
                  <div className="flex flex-col justify-between h-full">
                    <div>
                      <span
                        className={`text-sm font-medium px-4 py-1.5 rounded-full 
                                 ${solution.gradient} ${solution.textColor} 
                                 mb-4 inline-block backdrop-blur-md shadow-lg`}
                      >
                        {solution.category}
                      </span>
                      <h3 className="text-3xl font-bold text-white mt-4 tracking-tight">
                        {solution.title}
                      </h3>
                      <p
                        className={`${solution.textColor} text-xl mt-2 font-light`}
                      >
                        {solution.subtitle}
                      </p>
                    </div>
                    <div>
                      <p className="text-slate-300 text-lg mb-6 line-clamp-2 font-light">
                        {solution.description}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {solution.features
                          .slice(0, 3)
                          .map((feature: string, idx: number) => (
                            <span
                              key={idx}
                              className="px-4 py-1.5 rounded-full text-sm
                                    bg-white/5 text-slate-200 backdrop-blur-lg
                                    border border-white/10 shadow-lg"
                            >
                              {feature}
                            </span>
                          ))}
                        {solution.features.length > 3 && (
                          <span
                            className={`px-4 py-1.5 rounded-full text-sm 
                                    ${solution.gradient} ${solution.textColor}
                                    backdrop-blur-lg shadow-lg`}
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

        {/* Enhanced Progress Bar */}
        <div
          className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1/2 h-1 bg-white/5 
                      rounded-full overflow-hidden backdrop-blur-lg"
        >
          <div
            className="h-full bg-gradient-to-r from-blue-500/70 to-blue-400/70 
                     transition-all duration-500 ease-out"
            style={{
              width: `${(activeIndex / (solutions.length - 1)) * 100}%`,
            }}
          />
        </div>

        {/* Enhanced Navigation Controls */}
        <div className="absolute -bottom-16 left-0 right-0 flex justify-center items-center space-x-6">
          <button
            onClick={() => setActiveIndex(Math.max(0, activeIndex - 1))}
            disabled={activeIndex === 0}
            className="p-3 rounded-full bg-white/5 border border-white/10 text-white 
                     backdrop-blur-xl shadow-lg
                     hover:bg-white/10 hover:scale-105
                     transition-all duration-300 ease-out
                     disabled:opacity-30 disabled:cursor-not-allowed
                     disabled:hover:scale-100 disabled:hover:bg-white/5"
            aria-label="Previous solution"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          <div className="flex space-x-3">
            {solutions.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-2 h-2 rounded-full transition-all duration-500 ease-out
                        ${
                          index === activeIndex
                            ? 'bg-blue-500 w-6'
                            : 'bg-white/20 hover:bg-white/30'
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
            className="p-3 rounded-full bg-white/5 border border-white/10 text-white 
                     backdrop-blur-xl shadow-lg
                     hover:bg-white/10 hover:scale-105
                     transition-all duration-300 ease-out
                     disabled:opacity-30 disabled:cursor-not-allowed
                     disabled:hover:scale-100 disabled:hover:bg-white/5"
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

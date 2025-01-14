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

    // Base styles for all cards with perspective transform
    let styles =
      'absolute transition-all duration-500 ease-in-out w-full max-w-2xl solution-card';

    if (diff === 0) {
      // Center card
      return `${styles} left-1/2 -translate-x-1/2 z-30 opacity-100 transform-none`;
    } else {
      // Calculate arc position for background cards
      const radius = 800; // Radius of the arc
      const angleSpread = 60; // Total angle spread in degrees
      const angle = (diff * angleSpread) / (solutions.length * 0.75); // Distribute cards along the arc
      const xPos = Math.sin((angle * Math.PI) / 180) * radius;
      const zPos = Math.cos((angle * Math.PI) / 180) * radius - radius;

      return `${styles} left-1/2 transform-gpu
              translate-x-[calc(-50%+${xPos}px)]
              translate-z-[${zPos}px]
              rotateY(${angle}deg)
              opacity-${Math.max(0, 70 - Math.abs(diff) * 20)}
              z-${Math.max(0, 20 - Math.abs(diff))}
              scale-${Math.max(0.7, 1 - Math.abs(diff) * 0.1)}`;
    }
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
          {solutions.map((solution, index) => (
            <div
              key={solution.id}
              className={getCardStyles(index)}
              onClick={() =>
                index === activeIndex && onSolutionSelect(solution)
              }
            >
              <div
                className={`h-full rounded-2xl bg-slate-900/60 border border-white/10 
                            backdrop-blur-sm transition-all duration-300
                            solution-card-content
                            ${index === activeIndex ? 'hover:bg-white/5' : ''}`}
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
          ))}
        </div>

        {/* Navigation Controls */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 flex items-center gap-4">
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

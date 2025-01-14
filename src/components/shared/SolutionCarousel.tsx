import { type FC, useState, useCallback, useMemo } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

// Update the Solution interface to match your data structure
interface SolutionDetails {
  overview: string;
  benefits: string[];
}

interface Solution {
  id: string;
  category: string;
  title: string;
  subtitle: string;
  description: string;
  features: string[];
  gradient: string;
  textColor: string;
  borderHover: string;
  cardGradient: string;
  details: SolutionDetails;
}

interface SolutionCarouselProps {
  solutions: readonly Solution[];
  onSolutionSelect: (solution: Solution) => void;
}

function isSolution(value: unknown): value is Solution {
  if (!value || typeof value !== 'object') return false;

  const solution = value as Partial<Solution>;
  if (!solution.id || typeof solution.id !== 'string') return false;
  if (!solution.category || typeof solution.category !== 'string') return false;
  if (!solution.title || typeof solution.title !== 'string') return false;
  if (!solution.subtitle || typeof solution.subtitle !== 'string') return false;
  if (!solution.description || typeof solution.description !== 'string')
    return false;
  if (!Array.isArray(solution.features)) return false;
  if (!solution.gradient || typeof solution.gradient !== 'string') return false;
  if (!solution.textColor || typeof solution.textColor !== 'string')
    return false;
  if (!solution.borderHover || typeof solution.borderHover !== 'string')
    return false;
  if (!solution.cardGradient || typeof solution.cardGradient !== 'string')
    return false;
  if (!solution.details || typeof solution.details !== 'object') return false;

  const details = solution.details as Partial<SolutionDetails>;
  if (!details.overview || typeof details.overview !== 'string') return false;
  if (!Array.isArray(details.benefits)) return false;

  return true;
}

const SolutionCarousel: FC<SolutionCarouselProps> = ({
  solutions = [] as Solution[],
  onSolutionSelect,
}) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const validSolutions = useMemo(
    () => (solutions ?? []).filter((s): s is Solution => isSolution(s)),
    [solutions]
  );

  const getCardStyles = useCallback(
    (index: number): { transform: string; opacity: number; zIndex: number } => {
      const diff = index - activeIndex;
      const baseScale = Math.max(0.7, 1 - Math.abs(diff) * 0.15);
      const baseOpacity = Math.max(0.4, 1 - Math.abs(diff) * 0.25);
      const spacing = 120;
      const xOffset = diff * spacing;
      const zOffset = Math.abs(diff) * 60;
      const yOffset = Math.abs(diff) * 10;

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
                 rotateY(${diff * 12}deg)`,
        opacity: baseOpacity,
        zIndex: 20 - Math.abs(diff),
      };
    },
    [activeIndex]
  );

  const handleEventDrag = useCallback(
    (deltaX: number) => {
      if (!validSolutions?.length) return;

      const walk = deltaX - scrollLeft;
      if (Math.abs(walk) > 50) {
        if (walk > 0 && activeIndex > 0) {
          setActiveIndex((prev) => prev - 1);
          setIsDragging(false);
        } else if (walk < 0 && activeIndex < validSolutions.length - 1) {
          setActiveIndex((prev) => prev + 1);
          setIsDragging(false);
        }
        setScrollLeft(deltaX);
      }
    },
    [activeIndex, scrollLeft, validSolutions]
  );

  const handleMouseDown = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      setIsDragging(true);
      setStartX(e.pageX - scrollLeft);
    },
    [scrollLeft]
  );

  const handleMouseMove = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      if (!isDragging) return;
      e.preventDefault();
      handleEventDrag(e.pageX - startX);
    },
    [isDragging, startX, handleEventDrag]
  );

  const handleMouseUp = useCallback(() => {
    setIsDragging(false);
  }, []);

  const handleTouchStart = useCallback(
    (e: React.TouchEvent<HTMLDivElement>) => {
      const touch = e.touches[0];
      if (!touch) return;

      setIsDragging(true);
      setStartX(touch.pageX - scrollLeft);
    },
    [scrollLeft]
  );

  const handleTouchMove = useCallback(
    (e: React.TouchEvent<HTMLDivElement>) => {
      if (!isDragging) return;

      const touch = e.touches[0];
      if (!touch) return;

      handleEventDrag(touch.pageX - startX);
    },
    [isDragging, startX, handleEventDrag]
  );

  const renderSolutionCard = useCallback(
    (solution: Solution, index: number) => {
      const styles = getCardStyles(index);

      return (
        <div
          key={solution.id}
          className="absolute left-1/2 w-full max-w-2xl transition-all duration-500 ease-out cursor-pointer"
          style={{
            transform: styles.transform,
            opacity: styles.opacity,
            zIndex: styles.zIndex,
          }}
          onClick={() => index === activeIndex && onSolutionSelect(solution)}
        >
          <div
            className={`h-full rounded-2xl border border-white/10 
                     backdrop-blur-sm transition-all duration-300
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
    },
    [activeIndex, getCardStyles, onSolutionSelect]
  );

  if (!validSolutions?.length) {
    return null;
  }

  return (
    <div className="w-full">
      <div
        className="relative h-[480px] flex items-center justify-center perspective-1000"
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleMouseUp}
      >
        <div className="relative w-full h-full flex items-center justify-center preserve-3d">
          {validSolutions.map((solution, index) =>
            renderSolutionCard(solution, index)
          )}
        </div>

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
            {validSolutions.map((_, index) => (
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
              setActiveIndex(
                Math.min(validSolutions.length - 1, activeIndex + 1)
              )
            }
            disabled={activeIndex === validSolutions.length - 1}
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

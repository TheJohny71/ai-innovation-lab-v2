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
      const baseScale = Math.max(0.85, 1 - Math.abs(diff) * 0.15);
      const baseOpacity = Math.max(0.6, 1 - Math.abs(diff) * 0.25);
      const spacing = 320;
      const xOffset = diff * spacing;
      const zOffset = Math.abs(diff) * 80;
      const yOffset = Math.abs(diff) * 20;

      if (diff === 0) {
        return {
          transform: 'translate(-50%, 0) scale(1) rotateY(0deg)',
          opacity: 1,
          zIndex: 30,
        };
      }

      return {
        transform: `translate(calc(-50% + ${xOffset}px), ${yOffset}px)
                    translateZ(${-zOffset}px)
                    scale(${baseScale})
                    rotateY(${diff * 15}deg)`,
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
        } else if (walk < 0 && activeIndex < validSolutions.length - 1) {
          setActiveIndex((prev) => prev + 1);
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

  const handleMouseUp = useCallback(() => setIsDragging(false), []);

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
            className={`h-full rounded-2xl border border-white/10 backdrop-blur-sm transition-all duration-300
                        ${solution.cardGradient ? `bg-gradient-to-br ${solution.cardGradient}` : 'bg-slate-900/60'}
                        ${index === activeIndex ? solution.borderHover : ''}`}
          >
            <div className="p-8 h-full">
              <h3 className="text-3xl font-bold text-white">
                {solution.title}
              </h3>
              <p className="text-lg text-slate-400">{solution.subtitle}</p>
            </div>
          </div>
        </div>
      );
    },
    [activeIndex, getCardStyles, onSolutionSelect]
  );

  return (
    <div className="relative perspective-1000 overflow-visible">
      <div className="relative w-full h-[480px] preserve-3d flex items-center justify-center">
        {validSolutions.map((solution, index) =>
          renderSolutionCard(solution, index)
        )}
      </div>
    </div>
  );
};

export default SolutionCarousel;

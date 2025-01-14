import { type FC, useState, useCallback, useMemo } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { type Solution } from '@/app/accelerate/types';

interface SolutionCarouselProps {
  solutions: readonly Solution[];
  onSolutionSelect: (solution: Solution) => void;
}

function isSolution(value: unknown): value is Solution {
  if (!value || typeof value !== 'object') return false;

  const solution = value as Partial<Solution>;
  return (
    typeof solution.id === 'string' &&
    typeof solution.category === 'string' &&
    typeof solution.title === 'string' &&
    typeof solution.subtitle === 'string' &&
    typeof solution.description === 'string' &&
    Array.isArray(solution.features) &&
    typeof solution.gradient === 'string' &&
    typeof solution.textColor === 'string' &&
    typeof solution.borderHover === 'string' &&
    typeof solution.details === 'string'
  );
}

const SolutionCarousel: FC<SolutionCarouselProps> = ({
  solutions = [] as Solution[],
  onSolutionSelect,
}) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  // Validate solutions at the top level
  const validSolutions = useMemo(
    () => (solutions ?? []).filter((s): s is Solution => isSolution(s)),
    [solutions]
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

  // Rest of the component implementation remains the same...

  return (
    <div className="w-full">{/* Component JSX remains the same... */}</div>
  );
};

export default SolutionCarousel;

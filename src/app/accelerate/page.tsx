'use client';

import React, { useState, useEffect, useCallback, useRef } from 'react';
import { ChevronUp, ChevronDown } from 'lucide-react';
import type { Solution } from '@/types/metrics';

interface SolutionCardProps {
  solution: Solution;
  index: number; // Add index for debugging
}

const SolutionCard = ({ solution, index }: SolutionCardProps) => {
  // Create a unique identifier for this instance
  const cardId = useRef(`card-${solution.id}-${index}`);
  const [isExpanded, setIsExpanded] = useState(false);

  // Debug mount behavior
  useEffect(() => {
    console.log(`Card ${cardId.current} mounted`);
    return () => console.log(`Card ${cardId.current} unmounted`);
  }, []);

  // Debug state changes
  useEffect(() => {
    console.log(`Card ${cardId.current} expanded state: ${isExpanded}`);
  }, [isExpanded]);

  const handleToggle = useCallback((e: React.MouseEvent) => {
    // Log the event target
    console.log('Event target:', e.target);
    console.log('Current target:', e.currentTarget);

    // Ensure event handling
    e.preventDefault();
    e.stopPropagation();

    // Debug click handler
    console.log(`Toggle clicked for card ${cardId.current}`);

    setIsExpanded((prev) => {
      console.log(
        `Updating state for ${cardId.current} from ${prev} to ${!prev}`
      );
      return !prev;
    });
  }, []);

  const CustomBullet = useCallback(
    () => (
      <div
        className={`w-1.5 h-1.5 rounded-full flex-shrink-0 ${solution.textColor}`}
        style={{ backgroundColor: 'currentColor' }}
        aria-hidden="true"
      />
    ),
    [solution.textColor]
  );

  // Prevent event bubbling at the container level
  const containerProps = {
    onClick: (e: React.MouseEvent) => {
      e.stopPropagation();
    },
    onMouseDown: (e: React.MouseEvent) => {
      e.stopPropagation();
    },
    className: `bg-slate-800/50 rounded-xl border border-white/5 p-8
               transition-all duration-300 ease-in-out ${solution.borderHover}`,
  };

  return (
    <div {...containerProps}>
      <div className="flex items-start justify-between mb-4">
        <h3 className={`text-2xl font-bold ${solution.textColor}`}>
          {solution.title}
        </h3>
        <span
          className={`inline-flex px-3 py-1 rounded-full ${solution.gradient} 
                    ${solution.textColor} text-xs font-medium`}
        >
          {solution.category}
        </span>
      </div>

      <p className="text-gray-300 mb-4">{solution.subtitle}</p>
      <p className="text-white/80 mb-6">{solution.description}</p>

      <div className="mb-6">
        {!isExpanded ? (
          <div className="space-y-3">
            {solution.features.slice(0, 3).map((feature, idx) => (
              <div
                key={`${cardId.current}-initial-${idx}`}
                className="text-gray-300 text-sm flex items-center gap-2"
              >
                <CustomBullet />
                <span>{feature}</span>
              </div>
            ))}
          </div>
        ) : (
          <div className="space-y-6">
            <div>
              <h4 className="text-white font-medium mb-4">Core Features</h4>
              <div className="space-y-3">
                {solution.features.slice(0, 3).map((feature, idx) => (
                  <div
                    key={`${cardId.current}-core-${idx}`}
                    className="text-gray-300 text-sm flex items-center gap-2"
                  >
                    <CustomBullet />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h4 className="text-white font-medium mb-4">
                Advanced Capabilities
              </h4>
              <div className="space-y-3">
                {solution.features.slice(3).map((feature, idx) => (
                  <div
                    key={`${cardId.current}-advanced-${idx}`}
                    className="text-gray-300 text-sm flex items-center gap-2"
                  >
                    <CustomBullet />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>

      <button
        onClick={handleToggle}
        onMouseDown={(e) => e.stopPropagation()} // Additional event blocking
        className="w-full mt-6 py-3 rounded-lg bg-white/5 text-white font-medium 
                 hover:bg-white/10 transition-colors flex items-center justify-center gap-2"
        type="button"
        data-card-id={cardId.current} // For debugging
      >
        {isExpanded ? (
          <>
            Hide Details <ChevronUp className="w-4 h-4" />
          </>
        ) : (
          <>
            View Details <ChevronDown className="w-4 h-4" />
          </>
        )}
      </button>
    </div>
  );
};

// We need to modify how the component is exported and used
export default React.memo(SolutionCard, (prev, next) => {
  // Only re-render if the solution data changes
  return prev.solution.id === next.solution.id && prev.index === next.index;
});

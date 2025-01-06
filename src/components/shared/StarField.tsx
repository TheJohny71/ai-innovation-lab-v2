'use client';

import React, { useState, useEffect } from 'react';

interface StarFieldProps {
  mousePosition: { x: number; y: number };
}

export function StarField({ mousePosition }: StarFieldProps) {
  const [stars, setStars] = useState<
    Array<{ x: number; y: number; size: number }>
  >([]);

  useEffect(() => {
    const generateStars = () => {
      const newStars = Array.from({ length: 100 }, () => ({
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        size: Math.random() * 2 + 1,
      }));
      setStars(newStars);
    };

    generateStars();
    const handleResize = () => {
      generateStars();
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="pointer-events-none fixed inset-0">
      {stars.map((star, index) => {
        const dx = (mousePosition.x - star.x) * 0.01;
        const dy = (mousePosition.y - star.y) * 0.01;

        return (
          <div
            key={index}
            className="absolute rounded-full bg-white transition-all duration-300"
            style={{
              width: star.size,
              height: star.size,
              left: star.x + dx,
              top: star.y + dy,
              opacity: 0.6,
            }}
          />
        );
      })}
    </div>
  );
}

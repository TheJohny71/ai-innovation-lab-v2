'use client';

import React, { useState, useEffect, useCallback } from 'react';

interface StarFieldProps {
  className?: string;
}

type StarLayer = 'foreground' | 'background';

interface Star {
  x: number;
  y: number;
  size: number;
  speed: number;
  opacity: number;
  layer: StarLayer;
  color: string;
}

export function StarField({ className = '' }: StarFieldProps) {
  const [stars, setStars] = useState<Star[]>([]);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);

    const handleMotionPreference = (e: MediaQueryListEvent) => setPrefersReducedMotion(e.matches);
    mediaQuery.addEventListener('change', handleMotionPreference);

    return () => mediaQuery.removeEventListener('change', handleMotionPreference);
  }, []);

  useEffect(() => {
    const generateStars = () => {
      const newStars = Array.from({ length: 150 }, (): Star => ({
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        size: Math.random() * 2 + 1,
        speed: Math.random() * 0.5 + 0.1,
        opacity: Math.random() * 0.5 + 0.3,
        layer: Math.random() > 0.3 ? 'foreground' : 'background',
        color: Math.random() > 0.5 ? '#FFFFFF' : '#E6E6FA'
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

  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    if (prefersReducedMotion) return;
    
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePosition({
      x: (e.clientX - rect.left) / rect.width,
      y: (e.clientY - rect.top) / rect.height
    });
  }, [prefersReducedMotion]);

  return (
    <div 
      className={`pointer-events-none fixed inset-0 ${className}`}
      onMouseMove={handleMouseMove}
    >
      {stars.map((star, index) => {
        const parallaxEffect = star.layer === 'foreground' ? 0.03 : 0.01;
        const dx = (mousePosition.x * window.innerWidth - star.x) * parallaxEffect;
        const dy = (mousePosition.y * window.innerHeight - star.y) * parallaxEffect;

        return (
          <div
            key={index}
            className="absolute rounded-full transition-all duration-300"
            style={{
              width: star.size,
              height: star.size,
              left: star.x + dx,
              top: star.y + dy,
              opacity: star.opacity,
              backgroundColor: star.color,
              transform: `scale(${star.layer === 'foreground' ? 1.2 : 1})`,
              boxShadow: star.layer === 'foreground' 
                ? `0 0 ${star.size * 2}px ${star.color}`
                : 'none',
              zIndex: star.layer === 'foreground' ? 1 : 0
            }}
          />
        );
      })}
    </div>
  );
}
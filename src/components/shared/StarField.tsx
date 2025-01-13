/* StarField.tsx */
'use client';

import React, { useState, useEffect, useCallback } from 'react';

interface StarFieldProps {
  className?: string;
}

type StarLayer = 'foreground' | 'background';

interface Star {
  id: number;
  initialX: number;
  initialY: number;
  size: number;
  duration: number;
  delay: number;
  z: number;
  color: string;
  layer: StarLayer;
}

const FOREGROUND_COLORS = ['white', '#E6E6FA', '#B0C4DE'] as const;

export function StarField({ className = '' }: StarFieldProps) {
  const [stars, setStars] = useState<Star[]>([]);
  const [mousePosition, setMousePosition] = useState({ x: 0.5, y: 0.5 });
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);

    const getParticleCount = (baseCount: number) => {
      const screenArea = window.innerWidth * window.innerHeight;
      const baseArea = 1920 * 1080;
      const scaleFactor = Math.sqrt(screenArea / baseArea);
      return Math.floor(baseCount * scaleFactor);
    };

    const getForegroundColor = () => {
      const index = Math.floor(Math.random() * 3);
      switch (index) {
        case 0:
          return 'white';
        case 1:
          return '#E6E6FA';
        case 2:
          return '#B0C4DE';
        default:
          return 'white';
      }
    };

    const generateStars = (
      baseCount: number,
      isForeground: boolean
    ): Star[] => {
      const stars: Star[] = [];
      const count = getParticleCount(baseCount);

      for (let i = 0; i < count; i++) {
        const star: Star = {
          id: i,
          initialX: (Math.random() - 0.5) * (isForeground ? 200 : 300),
          initialY: (Math.random() - 0.5) * (isForeground ? 200 : 300),
          size: isForeground
            ? Math.random() * 0.5 + 0.2
            : Math.random() * 1.5 + 1,
          duration: isForeground
            ? Math.random() * 20 + 35
            : Math.random() * 30 + 45,
          delay: Math.random() * -30,
          z: isForeground ? Math.random() * 100 : Math.random() * 200,
          color: isForeground
            ? getForegroundColor()
            : 'rgba(255, 255, 255, 0.15)',
          layer: isForeground ? 'foreground' : 'background',
        };
        stars.push(star);
      }
      return stars;
    };

    if (!prefersReducedMotion) {
      const newStars = [
        ...generateStars(100, true),
        ...generateStars(40, false),
      ];
      setStars(newStars);
    }

    const handleResize = () => {
      if (!prefersReducedMotion) {
        const newStars = [
          ...generateStars(100, true),
          ...generateStars(40, false),
        ];
        setStars(newStars);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [prefersReducedMotion]);

  const handleMouseMove = useCallback(
    (e: React.MouseEvent) => {
      if (prefersReducedMotion) return;

      const rect = e.currentTarget.getBoundingClientRect();
      setMousePosition({
        x: (e.clientX - rect.left) / rect.width,
        y: (e.clientY - rect.top) / rect.height,
      });
    },
    [prefersReducedMotion]
  );

  return (
    <div
      className={`fixed inset-0 ${className}`}
      style={{ perspective: '500px' }}
      onMouseMove={handleMouseMove}
    >
      {stars.map((star) => {
        const distanceFromMouse = Math.hypot(
          mousePosition.x - (0.5 + star.initialX / window.innerWidth),
          mousePosition.y - (0.5 + star.initialY / window.innerHeight)
        );

        const mouseEffect =
          star.layer === 'foreground'
            ? Math.max(0, 0.15 - distanceFromMouse) *
              80 *
              (1 - Math.pow(distanceFromMouse, 2))
            : 0;

        const zOffset = star.z * (mousePosition.x - 0.5) * 0.1;

        return (
          <div
            key={star.id}
            className="star absolute"
            style={{
              left: `calc(50% + ${star.initialX + mouseEffect * (mousePosition.x - 0.5)}px)`,
              top: `calc(50% + ${star.initialY + mouseEffect * (mousePosition.y - 0.5)}px)`,
              width: `${star.size}px`,
              height: `${star.size}px`,
              color: star.color,
              animation: `starfieldForward ${star.duration}s linear infinite`,
              animationDelay: `${star.delay}s`,
              transform: `translateZ(${zOffset}px)`,
            }}
          />
        );
      })}
      <style jsx>
        {`
          .star::before {
            content: '';
            position: absolute;
            width: 100%;
            height: 100%;
            background: radial-gradient(
              circle,
              currentColor 0%,
              transparent 100%
            );
            border-radius: 50%;
          }
        `}
      </style>
    </div>
  );
}

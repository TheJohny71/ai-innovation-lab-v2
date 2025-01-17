'use client';

import React, { useState, useEffect, useCallback, useMemo } from 'react';

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

interface WindowDimensions {
  width: number;
  height: number;
}

const FOREGROUND_COLORS = ['white', '#E6E6FA', '#B0C4DE', '#87CEEB'] as const;
const BACKGROUND_COLOR = 'rgba(255, 255, 255, 0.2)' as const;
const BASE_SCREEN = { width: 1920, height: 1080 };

const getRandomFromArray = <T extends readonly any[]>(arr: T): T[number] => {
  return arr[Math.floor(Math.random() * arr.length)];
};

const calculateParticleCount = (
  baseCount: number,
  dimensions: WindowDimensions
): number => {
  const screenArea = dimensions.width * dimensions.height;
  const baseArea = BASE_SCREEN.width * BASE_SCREEN.height;
  const scaleFactor = Math.sqrt(screenArea / baseArea);
  return Math.floor(baseCount * scaleFactor);
};

export function StarField({ className = '' }: StarFieldProps): JSX.Element {
  const [stars, setStars] = useState<Star[]>([]);
  const [mousePosition, setMousePosition] = useState({ x: 0.5, y: 0.5 });
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const [windowSize, setWindowSize] = useState<WindowDimensions>({
    width:
      typeof window !== 'undefined' ? window.innerWidth : BASE_SCREEN.width,
    height:
      typeof window !== 'undefined' ? window.innerHeight : BASE_SCREEN.height,
  });

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);

    const handleMotionPreference = (e: MediaQueryListEvent) =>
      setPrefersReducedMotion(e.matches);
    mediaQuery.addEventListener('change', handleMotionPreference);
    return () =>
      mediaQuery.removeEventListener('change', handleMotionPreference);
  }, []);

  useEffect(() => {
    if (prefersReducedMotion) {
      setStars([]);
      return;
    }

    const generateStars = (
      baseCount: number,
      isForeground: boolean
    ): Star[] => {
      const count = calculateParticleCount(baseCount, windowSize);
      const stars: Star[] = [];

      for (let i = 0; i < count; i++) {
        stars.push({
          id: isForeground ? i : i + 1000,
          initialX: (Math.random() - 0.5) * (isForeground ? 400 : 600),
          initialY: (Math.random() - 0.5) * (isForeground ? 400 : 600),
          size: isForeground ? Math.random() * 2 + 1 : Math.random() * 3 + 1.5,
          duration: isForeground
            ? Math.random() * 20 + 30
            : Math.random() * 30 + 45,
          delay: Math.random() * -50,
          z: isForeground ? Math.random() * 400 : Math.random() * 800,
          color: isForeground
            ? getRandomFromArray(FOREGROUND_COLORS)
            : BACKGROUND_COLOR,
          layer: isForeground ? 'foreground' : 'background',
        });
      }
      return stars;
    };

    setStars([...generateStars(150, true), ...generateStars(80, false)]);
  }, [prefersReducedMotion, windowSize]);

  const handleMouseMove = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      if (prefersReducedMotion) return;

      const rect = e.currentTarget.getBoundingClientRect();
      setMousePosition({
        x: (e.clientX - rect.left) / rect.width,
        y: (e.clientY - rect.top) / rect.height,
      });
    },
    [prefersReducedMotion]
  );

  const containerStyle = useMemo(
    () => ({
      perspective: '800px',
      perspectiveOrigin: '50% 50%',
    }),
    []
  );

  return (
    <div
      className={`fixed inset-0 ${className}`}
      style={containerStyle}
      onMouseMove={handleMouseMove}
    >
      {stars.map((star) => {
        const distanceFromCenter = Math.hypot(
          mousePosition.x - 0.5,
          mousePosition.y - 0.5
        );

        const mouseEffect =
          star.layer === 'foreground'
            ? Math.max(0, 0.2 - distanceFromCenter) * 120
            : Math.max(0, 0.15 - distanceFromCenter) * 80;

        const zOffset = star.z * (mousePosition.x - 0.5) * 0.2;

        return (
          <div
            key={star.id}
            className="star"
            style={
              {
                left: `calc(50% + ${star.initialX + mouseEffect * (mousePosition.x - 0.5)}px)`,
                top: `calc(50% + ${star.initialY + mouseEffect * (mousePosition.y - 0.5)}px)`,
                width: `${star.size}px`,
                height: `${star.size}px`,
                color: star.color,
                animation: `starfieldForward ${star.duration}s linear infinite`,
                animationDelay: `${star.delay}s`,
                transform: `translateZ(${zOffset}px)`,
                '--initial-opacity':
                  star.layer === 'foreground' ? '0.3' : '0.1',
                '--max-opacity': star.layer === 'foreground' ? '1' : '0.3',
              } as React.CSSProperties
            }
          />
        );
      })}

      <style jsx>{`
        .star {
          position: absolute;
          transform-style: preserve-3d;
          @apply will-change-[transform-opacity] transform-gpu;
        }

        .star::before {
          content: '';
          position: absolute;
          width: 100%;
          height: 100%;
          background: radial-gradient(
            circle,
            currentColor 30%,
            transparent 70%
          );
          border-radius: 50%;
        }

        @keyframes starfieldForward {
          0% {
            transform: translate3d(0, 0, -400px) scale(0.01);
            opacity: 0;
          }
          10% {
            opacity: var(--initial-opacity, 0.3);
          }
          90% {
            opacity: var(--max-opacity, 1);
          }
          100% {
            transform: translate3d(0, 0, 2500px) scale(2.5);
            opacity: 0;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .star {
            animation: none !important;
          }
        }
      `}</style>
    </div>
  );
}

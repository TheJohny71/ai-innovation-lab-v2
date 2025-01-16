'use client';

import React, { useState, useEffect, useCallback, useMemo } from 'react';
import { starfield } from '@/lib/animations';

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

const FOREGROUND_COLORS = ['white', '#E6E6FA', '#B0C4DE'] as const;
const BACKGROUND_COLOR = 'rgba(255, 255, 255, 0.15)' as const;
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
  return Math.floor(baseCount * Math.sqrt(screenArea / baseArea));
};

const generateStar = (
  id: number,
  isForeground: boolean,
  dimensions: WindowDimensions
): Star => {
  const spreadFactor = isForeground ? 200 : 300;
  const duration = isForeground
    ? starfield.animation.duration.min +
      Math.random() *
        (starfield.animation.duration.max - starfield.animation.duration.min)
    : starfield.animation.duration.max + Math.random() * 20;

  return {
    id,
    initialX: (Math.random() - 0.5) * spreadFactor,
    initialY: (Math.random() - 0.5) * spreadFactor,
    size: isForeground ? Math.random() * 1.5 + 0.8 : Math.random() * 2.5 + 2,
    duration,
    delay:
      Math.random() *
        (starfield.animation.delay.max - starfield.animation.delay.min) +
      starfield.animation.delay.min,
    z: isForeground ? Math.random() * 300 : Math.random() * 500,
    color: isForeground
      ? getRandomFromArray(FOREGROUND_COLORS)
      : BACKGROUND_COLOR,
    layer: isForeground ? 'foreground' : 'background',
  };
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

    const generateStarField = (
      baseCount: number,
      isForeground: boolean
    ): Star[] => {
      const count = calculateParticleCount(baseCount, windowSize);
      return Array.from({ length: count }, (_, index) =>
        generateStar(
          isForeground ? index : index + 1000,
          isForeground,
          windowSize
        )
      );
    };

    setStars([
      ...generateStarField(150, true),
      ...generateStarField(60, false),
    ]);
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
      perspective: '1000px',
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
        const distanceFromMouse = Math.hypot(
          mousePosition.x - (0.5 + star.initialX / windowSize.width),
          mousePosition.y - (0.5 + star.initialY / windowSize.height)
        );

        const mouseEffect =
          star.layer === 'foreground'
            ? Math.max(0, 0.15 - distanceFromMouse) *
              80 *
              (1 - Math.pow(distanceFromMouse, 2))
            : 0;

        const zOffset = star.z * (mousePosition.x - 0.5) * 0.2;

        const starStyle: React.CSSProperties & {
          [key: string]: string | number;
        } = {
          left: `calc(50% + ${star.initialX + mouseEffect * (mousePosition.x - 0.5)}px)`,
          top: `calc(50% + ${star.initialY + mouseEffect * (mousePosition.y - 0.5)}px)`,
          width: `${star.size}px`,
          height: `${star.size}px`,
          color: star.color,
          animation: `starfieldForward ${star.duration}s linear infinite`,
          animationDelay: `${star.delay}s`,
          transform: `translateZ(${zOffset}px)`,
          '--initial-opacity':
            star.layer === 'foreground'
              ? starfield.animation.opacity.initial.toString()
              : '0.15',
          '--max-opacity':
            star.layer === 'foreground'
              ? starfield.animation.opacity.max.toString()
              : '0.4',
        };

        return (
          <div key={star.id} className="star absolute" style={starStyle} />
        );
      })}
      <style jsx>{`
        .star {
          transform-style: preserve-3d;
          will-change: transform, opacity;
        }
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
        @keyframes starfieldForward {
          0% {
            transform: translateZ(0) translateY(0);
            opacity: var(--initial-opacity);
          }
          100% {
            transform: translateZ(-400px) translateY(-100px);
            opacity: var(--max-opacity);
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

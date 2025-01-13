'use client';

import React, { useEffect, useState, useCallback } from 'react';

// ✅ Explicitly define the type for a particle
interface Particle {
  id: number;
  initialX: number;
  initialY: number;
  size: number;
  duration: number;
  delay: number;
  z: number;
  color: string;
  layer: 'foreground' | 'background';
}

const EnhancedNexusPage = () => {
  const [particles, setParticles] = useState<Particle[]>([]);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const [windowSize, setWindowSize] = useState({
    width: typeof window !== 'undefined' ? window.innerWidth : 1920,
    height: typeof window !== 'undefined' ? window.innerHeight : 1080,
  });

  // ✅ Window resize handler
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

  // ✅ Motion preference handling
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);

    const handleMotionPreference = (e: MediaQueryListEvent) =>
      setPrefersReducedMotion(e.matches);

    mediaQuery.addEventListener('change', handleMotionPreference);

    return () =>
      mediaQuery.removeEventListener('change', handleMotionPreference);
  }, []);

  // ✅ Particle generation (fixed)
  useEffect(() => {
    if (prefersReducedMotion) {
      setParticles([]);
      return;
    }

    const getParticleCount = (baseCount: number) => {
      const screenArea = windowSize.width * windowSize.height;
      const baseArea = 1920 * 1080;
      return Math.floor(baseCount * Math.sqrt(screenArea / baseArea));
    };

    const generateParticles = (
      baseCount: number,
      isForeground: boolean
    ): Particle[] =>
      Array.from({ length: getParticleCount(baseCount) }, () => ({
        id: Math.random(),
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
          ? (['white', '#E6E6FA', '#B0C4DE'][Math.floor(Math.random() * 3)] ??
            'white')
          : 'rgba(255, 255, 255, 0.15)',
        layer: isForeground ? 'foreground' : 'background',
      }));

    setParticles([
      ...generateParticles(100, true),
      ...generateParticles(40, false),
    ]);
  }, [prefersReducedMotion, windowSize]);

  // ✅ Mouse movement handler
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

  return (
    <div
      className="relative w-full h-screen overflow-hidden"
      style={{
        background: `radial-gradient(circle at 50% 50%, #0B1A36 10%, #000000 60%)`,
      }}
      onMouseMove={handleMouseMove}
    >
      {/* ✅ Starfield Particle Effect */}
      <div className="absolute inset-0" style={{ perspective: '500px' }}>
        {particles.map((particle) => {
          const zOffset = particle.z * (mousePosition.x - 0.5) * 0.1;
          return (
            <div
              key={particle.id}
              className="star"
              style={{
                position: 'absolute',
                left: `calc(50% + ${particle.initialX}px)`,
                top: `calc(50% + ${particle.initialY}px)`,
                width: `${particle.size}px`,
                height: `${particle.size}px`,
                backgroundColor: particle.color,
                borderRadius: '50%',
                animation: `starfieldForward ${particle.duration}s linear infinite`,
                animationDelay: `${particle.delay}s`,
                transform: `translateZ(${zOffset}px)`,
              }}
            />
          );
        })}
      </div>

      {/* ✅ Restored Title, Subtitle, and Tagline */}
      <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white">
        <h1 className="text-6xl font-bold mb-4 text-blue-300 drop-shadow-lg">
          AI Innovation Hub
        </h1>
        <p className="text-xl text-gray-400 mb-6">
          Empowering Digital Transformation
        </p>
        <p className="text-sm text-emerald-300 uppercase tracking-widest">
          Innovate · Disrupt · Lead
        </p>
      </div>
    </div>
  );
};

export default EnhancedNexusPage;

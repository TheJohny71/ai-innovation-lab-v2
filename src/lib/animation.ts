// src/lib/animation.ts
export const fadeIn = 'animate-in fade-in duration-500';
export const slideUp = 'animate-in slide-in-from-bottom duration-500';
export const scaleUp = 'animate-in zoom-in duration-500';

export const stagger = (index: number) => ({
  animationDelay: `${index * 100}ms`,
  style: { animationFillMode: 'forwards' },
});

// Star field animations
export const starfield = {
  container: 'fixed inset-0 transform-gpu overflow-hidden perspective-500',
  star: 'absolute rounded-full transform-gpu bg-white will-change-transform',
};

// Enhanced animations
export const glowPulse = 'animate-enhanced-pulse';
export const hoverScale = 'transition-transform hover:scale-105';
export const smoothTransition = 'transition-all duration-300 ease-in-out';

// Animation keyframes
export const keyframes = {
  starfieldForward: {
    '0%': { transform: 'translate3d(0, 0, -100px) scale(0.05)', opacity: 0 },
    '20%': { opacity: 'var(--initial-opacity, 0.2)' },
    '70%': { opacity: 'var(--max-opacity, 0.8)' },
    '100%': { transform: 'translate3d(0, 0, 1000px) scale(1.5)', opacity: 0 },
  },
};

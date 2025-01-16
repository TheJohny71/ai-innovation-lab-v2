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
  animation: {
    duration: {
      min: 60,
      max: 90,
    },
    delay: {
      min: -20,
      max: 0,
    },
    opacity: {
      initial: 0.2,
      max: 0.8,
    },
  },
};

export const glowPulse = 'animate-enhanced-pulse';
export const hoverScale = 'transition-transform hover:scale-105';
export const smoothTransition = 'transition-all duration-300 ease-in-out';

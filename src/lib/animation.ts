export const fadeIn = 'animate-in fade-in duration-500';
export const slideUp = 'animate-in slide-in-from-bottom duration-500';
export const scaleUp = 'animate-in zoom-in duration-500';

export const stagger = (index: number) => ({
  animationDelay: `${index * 100}ms`,
  style: { animationFillMode: 'forwards' },
});

export const glowPulse = 'animate-enhanced-pulse';
export const hoverScale = 'transition-transform hover:scale-105';
export const smoothTransition = 'transition-all duration-300 ease-in-out';

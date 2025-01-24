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

/** @type {import('tailwindcss').Config} */
export default {
  theme: {
    extend: {
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out forwards',
        'slide-up': 'slideUp 0.5s ease-out forwards',
        pulse: 'pulse 10s ease-in-out infinite',
        float: 'float 5s ease-in-out infinite',
        'enhanced-pulse': 'enhancedPulse 4s ease-in-out infinite',
        'starfield-forward': 'starfieldForward var(--duration) linear infinite',
        'nav-pulse': 'navPulse 2s ease-in-out infinite',
        'card-float': 'cardFloat 3s ease-in-out infinite',
        'glow-pulse': 'glowPulse 2s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        pulse: {
          '0%, 100%': { transform: 'scale(1)', opacity: '1' },
          '50%': { transform: 'scale(1.1)', opacity: '0.8' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        enhancedPulse: {
          '0%, 100%': { transform: 'scale(1)', opacity: '0.8' },
          '50%': { transform: 'scale(1.05)', opacity: '1' },
        },
        starfieldForward: {
          '0%': {
            transform: 'translate3d(0, 0, -400px) scale(0.01)',
            opacity: '0',
          },
          '10%': { opacity: 'var(--initial-opacity, 0.3)' },
          '90%': { opacity: 'var(--max-opacity, 1)' },
          '100%': {
            transform: 'translate3d(0, 0, 2500px) scale(2.5)',
            opacity: '0',
          },
        },
        navPulse: {
          '0%, 100%': { boxShadow: '0 0 0 0 rgba(34, 211, 238, 0.2)' },
          '50%': { boxShadow: '0 0 20px 4px rgba(34, 211, 238, 0.3)' },
        },
        cardFloat: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-5px)' },
        },
        glowPulse: {
          '0%, 100%': { boxShadow: '0 0 5px rgba(34, 211, 238, 0.2)' },
          '50%': { boxShadow: '0 0 20px rgba(34, 211, 238, 0.4)' },
        },
      },
    },
  },
};

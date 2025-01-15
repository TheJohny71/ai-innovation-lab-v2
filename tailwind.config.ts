import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  safelist: [
    // ... your existing safelist items ...
  ],
  theme: {
    extend: {
      colors: {
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
      },
      animation: {
        starfieldForward: 'starfieldForward var(--duration) linear infinite',
        'fade-in': 'fadeIn 0.5s ease-out',
        'slide-in': 'slideIn 0.5s ease-out',
        pulse: 'pulse 8s ease-in-out infinite',
        float: 'float 6s ease-in-out infinite',
        shine: 'shine 8s linear infinite',
        'enhanced-pulse':
          'enhancedPulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'card-entrance': 'cardEntrance 0.5s ease-out forwards',
      },
      keyframes: {
        starfieldForward: {
          '0%': {
            transform: 'translate3d(0, 0, -100px) scale(0.05)',
            opacity: '0',
          },
          '20%': { opacity: 'var(--initial-opacity, 0.2)' },
          '70%': { opacity: 'var(--max-opacity, 0.8)' },
          '100%': {
            transform: 'translate3d(0, 0, 1000px) scale(1.5)',
            opacity: '0',
          },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        pulse: {
          '0%, 100%': {
            transform: 'scale(2) rotate(0deg)',
            opacity: '0.3',
          },
          '50%': {
            transform: 'scale(2.2) rotate(180deg)',
            opacity: '0.5',
          },
        },
        float: {
          '0%, 100%': { transform: 'translate(0, 0)' },
          '50%': { transform: 'translate(0, -20px)' },
        },
        shine: {
          from: { backgroundPosition: '0% center' },
          to: { backgroundPosition: '200% center' },
        },
        cardEntrance: {
          from: {
            opacity: '0',
            transform: 'perspective(1000px) rotateY(-15deg) translateX(50px)',
          },
          to: {
            opacity: '1',
            transform: 'perspective(1000px) rotateY(-5deg) translateX(0)',
          },
        },
      },
      transitionProperty: {
        'transform-opacity': 'transform, opacity',
      },
    },
  },
  plugins: [],
};

export default config;

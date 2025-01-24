/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        'deep-blue': '#040812',
      },
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
      backdropBlur: { sm: '4px' },
      transitionProperty: {
        'transform-opacity': 'transform, opacity',
      },
      transformStyle: { '3d': 'preserve-3d' },
      willChange: { 'transform-opacity': 'transform, opacity' },
      perspective: {
        500: '500px',
        800: '800px',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-paint':
          'linear-gradient(to bottom right, var(--tw-gradient-stops))',
      },
      opacity: {
        1: '0.01',
        2: '0.02',
        3: '0.03',
        15: '0.15',
      },
      zIndex: { '-10': '-10' },
      transitionDuration: { 2000: '2000ms' },
      scale: {
        101: '1.01',
        102: '1.02',
      },
      boxShadow: {
        glow: '0 0 10px rgba(34, 211, 238, 0.3)',
      },
    },
  },
  plugins: [],
};

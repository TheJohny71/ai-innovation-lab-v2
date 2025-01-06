import type { Config } from 'tailwindcss';
import plugin from 'tailwindcss/plugin';

const config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: '#0F1729',
        primary: {
          DEFAULT: '#3B82F6',
          foreground: '#FFFFFF',
        },
        secondary: {
          DEFAULT: '#2DD4BF',
          foreground: '#FFFFFF',
        },
      },
      animation: {
        float: 'float 8s ease-in-out infinite',
        'float-delayed': 'float 8s ease-in-out 2s infinite',
        'glow-pulse': 'glowPulse 4s ease-in-out infinite',
        'particle-float': 'particleFloat 20s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        glowPulse: {
          '0%, 100%': { opacity: '0.4' }, // Changed to string
          '50%': { opacity: '0.8' }, // Changed to string
        },
        particleFloat: {
          '0%, 100%': {
            transform: 'translate(0px, 0px) scale(1)',
          },
          '33%': {
            transform: 'translate(30px, -50px) scale(1.2)',
          },
          '66%': {
            transform: 'translate(-20px, 20px) scale(0.8)',
          },
        },
      },
      backdropFilter: {
        none: 'none',
        blur: 'blur(8px)',
      },
      dropShadow: {
        glow: '0 0 10px rgba(59, 130, 246, 0.5)',
        'glow-cyan': '0 0 10px rgba(45, 212, 191, 0.5)',
        'glow-purple': '0 0 10px rgba(139, 92, 246, 0.5)',
      },
      transitionDuration: {
        '2000': '2000ms',
      },
      scale: {
        '102': '1.02',
      },
    },
  },
  plugins: [
    plugin(({ addUtilities }) => {
      addUtilities({
        '.glow-shadow-blue': {
          'box-shadow': '0 0 20px rgba(59, 130, 246, 0.3)',
        },
        '.glow-shadow-cyan': {
          'box-shadow': '0 0 20px rgba(45, 212, 191, 0.3)',
        },
        '.glow-shadow-purple': {
          'box-shadow': '0 0 20px rgba(139, 92, 246, 0.3)',
        },
      });
    }),
  ],
  safelist: [
    'text-purple-400',
    'text-blue-400',
    'text-cyan-400',
    'bg-purple-500',
    'bg-blue-500',
    'bg-cyan-500',
    'border-purple-500/10',
    'border-blue-500/10',
    'border-cyan-500/10',
    {
      pattern: /bg-(purple|blue|cyan)-(400|500)/,
      variants: ['hover', 'group-hover'],
    },
  ],
} satisfies Config;

export default config;

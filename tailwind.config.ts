// tailwind.config.ts
import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  safelist: [
    // Background colors
    'bg-purple-950',
    'bg-blue-950',
    'bg-emerald-950',
    'bg-violet-950',
    'bg-indigo-950',
    // Text colors
    'text-purple-400',
    'text-blue-400',
    'text-emerald-400',
    'text-violet-400',
    'text-indigo-400',
    'text-teal-400',
    // Border colors
    'border-purple-500/20',
    'border-blue-500/20',
    'border-emerald-500/20',
    'border-violet-500/20',
    'border-indigo-500/20',
    // Gradient backgrounds
    'from-indigo-950',
    'from-blue-950',
    'from-emerald-950',
    'from-violet-950',
    'to-purple-900',
    'to-slate-900',
    'to-cyan-900',
    'to-indigo-900',
    // New additions for main page
    'w-10',
    'w-12',
    'h-10',
    'h-12',
    'backdrop-blur-sm',
    'backdrop-blur-md',
    'bg-white/[0.01]',
    'bg-white/[0.02]',
    'bg-white/[0.03]',
    'from-blue-400/90',
    'via-blue-300',
    'to-teal-400/90',
    'text-gray-400/90',
  ],
  theme: {
    extend: {
      colors: {
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
      },
      animation: {
        pulse: 'pulse 8s ease-in-out infinite',
        float: 'float 10s ease-in-out infinite',
      },
      keyframes: {
        pulse: {
          '0%, 100%': { transform: 'scale(2) rotate(0deg)' },
          '50%': { transform: 'scale(2.2) rotate(180deg)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
      },
      // Added for backdrop blur variations
      backdropBlur: {
        xs: '2px',
      },
    },
  },
  plugins: [],
};

export default config;

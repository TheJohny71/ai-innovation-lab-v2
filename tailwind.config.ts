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
    'bg-black/20',
    'bg-black/25',
    'bg-slate-800/50',
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
    'from-purple-400',
    'to-purple-900',
    'to-slate-900',
    'to-cyan-900',
    'to-indigo-900',
    'to-blue-400',
    // Grid and layout
    'grid-cols-1',
    'md:grid-cols-2',
    'md:grid-cols-3',
    'gap-4',
    'gap-6',
    // New additions
    'w-2.5',
    'h-2.5',
    'h-48',
    'backdrop-blur-sm',
    'backdrop-blur-md',
    'bg-white/[0.01]',
    'bg-white/[0.02]',
    'bg-white/[0.03]',
    'from-blue-400/90',
    'via-blue-300',
    'to-teal-400/90',
    'text-gray-400/90',
    // Progress bar related
    'h-1.5',
    'rounded-full',
    'bg-gradient-to-r',
    'bg-gradient-to-br',
    // Hover states
    'hover:bg-indigo-600',
    'hover:bg-white/5',
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
      backdropBlur: {
        xs: '2px',
      },
    },
  },
  plugins: [],
};

export default config;
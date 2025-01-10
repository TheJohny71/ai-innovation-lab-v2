import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  safelist: [
    // Color classes for solutions
    'bg-purple-500/10',
    'text-purple-400',
    'hover:border-purple-500/30',
    'from-purple-500/10',

    'bg-teal-500/10',
    'text-teal-400',
    'hover:border-teal-500/30',
    'from-teal-500/10',

    'bg-cyan-500/10',
    'text-cyan-400',
    'hover:border-cyan-500/30',
    'from-cyan-500/10',

    // Background and border utilities
    'text-white/80',
    'bg-white/5',
    'hover:bg-white/10',
    'border-white/5',
    'border-white/10',

    // Text colors and styles
    'text-white',
    'text-blue-400',
    'text-gray-300',
    'text-xs',
    'text-sm',
    'text-2xl',
    'text-5xl',
    'font-bold',
    'font-medium',

    // Layout classes
    'grid-cols-2',
    'lg:grid-cols-3',
    'gap-8',
    'space-y-2',
    'space-y-3',
    'px-6',
    'py-24',
    'max-w-7xl',
    'mb-16',
    'mb-6',
    'mb-4',
    'mt-6',
    'mt-1',
    'p-8',
    'px-3',
    'py-1',
    'py-3',
    'pt-6',
    'w-1.5',
    'h-1.5',
    'w-2',
    'h-2',
    'w-4',
    'h-4',

    // Flex and Grid utilities
    'flex',
    'grid',
    'items-start',
    'items-center',
    'justify-between',
    'justify-center',
    'flex-shrink-0',
    'gap-2',

    // Animation and transition classes
    'max-h-[500px]',
    'max-h-0',
    'opacity-0',
    'opacity-100',
    'duration-300',
    'ease-in-out',
    'group-hover:opacity-100',
    'transition-all',
    'transition-opacity',
    'transition-colors',
    'transition-transform',

    // Utility classes
    'rounded-xl',
    'rounded-lg',
    'rounded-full',
    'overflow-hidden',
    'relative',
    'absolute',
    'inset-0',
    'flex-grow',
    'flex-1',
    'flex-shrink-0',
    'min-w-0',
    'whitespace-nowrap',
    'line-clamp-1',
    'text-center',
    'min-h-screen',
    'bg-slate-900',
    'inline-flex',
  ],
  theme: {
    extend: {
      colors: {
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
      },
      transitionProperty: {
        'max-height': 'max-height',
      },
      backgroundImage: {
        'gradient-to-b': 'linear-gradient(to bottom, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
};

export default config;

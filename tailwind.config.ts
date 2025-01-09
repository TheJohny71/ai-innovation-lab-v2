import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  safelist: [
    // Existing safelist items...

    // New color classes for solutions
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

    'text-white/80',
    'bg-white/5',
    'hover:bg-white/10',
    'border-white/5',
    'border-white/10',

    // Layout classes
    'grid-cols-2',
    'lg:grid-cols-3',
    'gap-8',
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
    'w-1',
    'h-1',
    'w-4',
    'h-4',

    // Utility classes
    'rounded-xl',
    'rounded-lg',
    'rounded-full',
    'transition-all',
    'transition-opacity',
    'opacity-0',
    'group-hover:opacity-100',
    'overflow-hidden',
    'relative',
    'absolute',
    'inset-0',
  ],
  theme: {
    extend: {
      colors: {
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
      },
    },
  },
  plugins: [],
};

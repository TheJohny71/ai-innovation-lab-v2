import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  safelist: [
    // Your existing safelist
    ...// New additions for updated design
    // Background colors and opacities
    'bg-slate-800/40',
    'bg-slate-700/40',
    'bg-slate-800/30',
    'bg-black/20',
    'from-gray-400/80',
    'to-gray-500/60',

    // Text colors and opacities
    'text-white/80',
    'text-blue-400/80',
    'text-gray-200',
    'text-gray-300',
    'text-gray-400',

    // Sizes and spacing
    'w-10',
    'h-10',
    'text-xs',
    'text-base',
    'text-4xl',
    'space-y-2',
    'space-y-3',
    'space-y-4',
    'mb-1',
    'mb-6',
    'gap-2',
    'gap-4',

    // Layout
    'min-w-0',
    'truncate',
    'grid-cols-2',
    'lg:grid-cols-4',

    // Flexbox
    'items-start',
    'items-center',
    'justify-center',
    'flex-col',

    // Positioning
    'relative',
    'absolute',
    'inset-0',

    // Charts specific
    'rounded-lg',
    'rounded-xl',
    'rounded-full',

    // Others
    'font-medium',
    'font-semibold',
    'font-bold',
    'pr-2',
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

/** @type {import('postcss-load-config').Config} */
export default {
  plugins: {
    'postcss-import': {},
    tailwindcss: {
      config: './tailwind.config.ts', // Explicitly pointing to the correct Tailwind config
    },
    autoprefixer: {
      flexbox: 'no-2009',
      grid: 'autoplace',
    },
  },
};

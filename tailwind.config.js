/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    fontFamily: {
      inter: 'Inter, sans-serif',
    },
    extend: {
      textColor: {
        skin: {
          base: 'var(--color-text-base)',
          muted: 'var(--color-text-muted)',
        },
      },
      backgroundColor: {
        skin: {
          'surface-1': 'var(--color-surface-1)',
          'surface-2': 'var(--color-surface-2)',
          'surface-3': 'var(--color-surface-3)',
        },
      },
    },
  },
  plugins: [],
};

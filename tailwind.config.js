/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    screens: {
      mobile: '398px',
      tablet: '736px',
      desktop: '1680px'
    },
    colors: {
      white: '#ffffff',
      gray: '#909194',
      black: '#242833',
      'royal-blue': {
        100: '#EBF1FF',
        200: '#D5E2FF',
        400: '#5F8BFF',
        500: '#3A6FEC',
        900: '#00123D',
      },
      mirage: {
        800: '#282D3A',
        850: '#1C212C',
        900: '#131825',
        950: '#0C0F17',
      }
    },
    fontFamily: {
      inter: 'Inter, sans-serif'
    },
    extend: {
    },
  },
  plugins: [],
}

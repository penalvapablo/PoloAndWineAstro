/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');
module.exports = {
  content: [
    './src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',
  ],
  theme: {
    colors: {
      one: '#FFDF61',
      two: '#2F4858',
      three: '#082032',
      four: '#2F4858',
      five: '#FFF6D4',
      burger: '#292929',
      bg: '#FFFCEF',
    },
    extend: {
      dropShadow: {
        '3xl': '10px 10px 10px rgba(0, 0, 0, 0.25)',
      },
      screens: {
        xsm: '475px',
        ...defaultTheme.screens,
        wide: '1980px',
      },

      fontFamily: {
        title: [
          'TangoSans',
          ...defaultTheme.fontFamily.sans,
        ],
        text: ['Roboto', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
};

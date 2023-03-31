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
      six: '#292929',
    },
    extend: {
      screens: {
        xsm: { raw: '(min-width: 500px)' },
        wide: { raw: '(min-width: 1980px)' },
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

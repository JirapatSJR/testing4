const withMT = require("@material-tailwind/react/utils/withMT")

/** @type {import('tailwindcss').Config} */
module.exports = withMT({
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      
    spacing: {
      '108': '25rem' /* 400px */,
      '128': '32rem' /* 512px */,
    },
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        green4wd: '#00BAB3',
        gray4wd: '#4A4F54',
        orange4wd: '#FF671D',
        black4wd: '#000000',
        white4wd: '#FFF6F6',
      }
    },
  },
  plugins: [],
})

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './App.{js,jsx,ts,tsx}',
    './<custom directory>/**/*.{js,jsx,ts,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#770FDF',
        secondary: '#0FDF8F',
        black: '#000',
        gray_default: '#A0A0A0',
        gray_light: '#F4F4F4',
        white: '#FFF',
        bg_primary: '#F7EFFF',
      },
      fontFamily: {
        sora: ['Sora-Regular'],
        sora_bold: ['Sora-Bold'],
      },
    },
  },
  plugins: [],
}

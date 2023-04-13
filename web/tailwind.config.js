/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: [
    './src/pages/**/*.{js,jsx,ts,tsx}',
    './src/components/**/*.{js,jsx,ts,tsx}',
    './src/sections/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        Poppins: ["'Poppins', sans-serif"],
        Public_Sans: ["'Public-Sans', sans-serif"],
      },
      colors: {
        'gray-50': '#F7F7F7',
        'gray-100': '#E6E6E6',
        'gray-200': '#CCCCCC',
        'gray-300': '#B2B2B2',
        'gray-400': '#999999',
        'gray-500': '#808080',
        'gray-600': '#666666', // Typography
        'gray-700': '#4D4D4D',
        'gray-800': '#333333',
        'gray-900': '#1A1A1A', // Typography
        typography: '#333333',
        black: '#000000',
        white: '#FFFFFF',

        primary_blue_600: '#0017A6',
        primary_blue_100: '#D9E9FC',
        primary_blue_50: '#E7F0FF',
        addition_button_color: '#4679E5',
      },
      transitionProperty: {
        width: 'width',
        height: 'height',
        gap: 'gap',
      },
    },
  },
  plugins: [],
}

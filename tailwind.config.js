/** @type {import('tailwindcss').Config} */

import { createThemes } from 'tw-colors';

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [
    createThemes({
      light: {
        'title': '#000000',
        'primary': '#FF6347',
        'secondary': '#00BFFF',
        'brand': '#EAEAEA',
      },
      dark: {
        'title': '#000000',
        'primary': '#FF8C00',
        'secondary': '#556B2F',
        'brand': '#333333',
      },
      terminal: {
        'title': '#008F11',
        'primary': '#39FF14',
        'secondary': '#706D6D',
        'brand': '#0D0208',
      },
      cyber: {
        'title': '#000000',
        'primary': '#1E90FF',
        'secondary': '#FF69B4',
        'brand': '#2C2C2C',
      },
      historic: {
        'title': '#000000',
        'primary': '#FFD700',
        'secondary': '#B22222',
        'brand': '#B8B8B8',
      },
    }
    ),
  ],
}


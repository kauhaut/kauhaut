import aspectRatio from '@tailwindcss/aspect-ratio';
import typography from '@tailwindcss/typography';

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  plugins: [typography, aspectRatio],
  theme: {
    colors: {
      'text': '#08060a',
      'background': '#f1ebfa',
      'primary': '#af8ae3',
      'secondary': '#841f3b',
      'accent': '#d67352',
    },
    fontSize: {
      sm: '0.750rem',
      base: '1rem',
      xl: '1.333rem',
      '2xl': '1.777rem',
      '3xl': '2.369rem',
      '4xl': '3.158rem',
      '5xl': '4.210rem',
    },
    fontFamily: {
      heading: 'Barrio',
      body: 'Molengo',
    },
    fontWeight: {
      normal: '400',
      bold: '700',
    },
  },
};

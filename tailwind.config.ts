// /** @type {import('tailwindcss').Config} */

import twTypography from '@tailwindcss/typography';
import type {Config} from 'tailwindcss';
import {screens} from 'tailwindcss/defaultTheme';

import {extendedTheme} from './src/lib/extended-theme';

export const uiConfig: Config = {
  darkMode: ['class'],
  content: [
    // "./ui/**/*.{ts,tsx}",
    // './components/**/*.{ts,tsx}',
    // './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  theme: {
    screens: {
      // xs: '23.4375rem',
      ...screens,
    },
    container: {
      center: true,
      padding: '1rem',
      screens: {
        ...screens,
        xs: '100%',
        //   // '2xl': '1400px',
      },
    },

    extend: extendedTheme,
  },
  plugins: [twTypography],
};

export default uiConfig;

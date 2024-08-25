/// <reference types="vite/client" />
import {resolve} from 'path';
import react from '@vitejs/plugin-react-swc';
import autoprefixer from 'autoprefixer';
import tailwindcss from 'tailwindcss';
import {defineConfig} from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
  css: {
    postcss: {
      plugins: [tailwindcss(), autoprefixer()],
    },
  },
  plugins: [react()],
  resolve: {alias: {'~': resolve(__dirname, 'src')}},
});

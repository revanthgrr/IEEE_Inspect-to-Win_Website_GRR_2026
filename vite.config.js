import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'


// https://vite.dev/config/
export default defineConfig({
  base: '/IEEE_Inspect-to-Win_Website_GRR_2026/',
  plugins: [react()],

  css: {
    devSourcemap: true, // Generate CSS source maps for DevTools
  },

  build: {
    minify: 'esbuild',
    cssMinify: false, // Preserve CSS comments
    sourcemap: true, // Generate source maps for debugging
    esbuild: {
      legalComments: 'inline', // Preserve JavaScript comments
    },
  },
})

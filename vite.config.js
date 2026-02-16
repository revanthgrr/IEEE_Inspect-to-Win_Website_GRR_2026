// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'


// // https://vite.dev/config/
// export default defineConfig({
//   base: '/IEEE_Inspect-to-Win_Website_GRR_2026/',
//   plugins: [react()],

//   build: {
//     minify: 'esbuild',
//     cssMinify: false, // Preserve CSS comments
//     esbuild: {
//       legalComments: 'inline', // Preserve JavaScript comments
//     },
//   },
// })


import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import cssInjectedByJsPlugin from "vite-plugin-css-injected-by-js";

export default defineConfig({
  plugins: [
    react(),
    cssInjectedByJsPlugin()
  ]
});

import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/', // Set base to root to support custom domain.
  plugins: [vue()],
  build: {
    outDir: 'docs', // Ensure build files are output to the 'docs' folder
    emptyOutDir: true, // Optional: Clears the 'docs' folder before building
  },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})


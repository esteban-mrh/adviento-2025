import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { fileURLToPath } from 'url'

// https://vite.dev/config/
export default defineConfig({
  // Base path configuration:
  // - Use '/' for Netlify deployment (VITE_BASE_PATH environment variable)
  // - Use '/adviento-2025/' for GitHub Pages (default, matches repository name)
  // Override by setting VITE_BASE_PATH environment variable
  base: process.env.VITE_BASE_PATH || "/adviento-2025/", 
  plugins: [react()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
})

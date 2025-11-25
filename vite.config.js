import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { fileURLToPath } from 'url'

// https://vite.dev/config/
export default defineConfig({
  // Use '/' for Netlify, '/adviento-2025/' for GitHub Pages
  // Set VITE_BASE_PATH environment variable to override
  base: process.env.VITE_BASE_PATH || "/adviento-2025/", 
  plugins: [react()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
})

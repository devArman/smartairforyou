import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Relative base so the build works from any path (subfolder hosting, previews).
export default defineConfig({
  plugins: [react()],
  base: './',
})

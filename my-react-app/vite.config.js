import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: "/Labb2-Webbutveckling-React-Rasmus",
  plugins: [react()],
})

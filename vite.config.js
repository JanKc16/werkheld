import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    open: true, // Öffnet automatisch den Browser, wenn du npm run dev startest
    port: 5173  // Legt den Standard-Port fest
  }
})
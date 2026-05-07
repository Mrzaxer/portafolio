import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    fs: {
      allow: [
        "D:/mi-portafolio/mi-portafolio",
        "C:/Users/efrai/.cursor/projects/d-mi-portafolio-mi-portafolio/assets",
      ],
    },
  },
})
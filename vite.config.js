import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    // Proxy: todas las peticiones a /api/* se reenvían al backend Spring Boot
    // Esto evita problemas de CORS durante el desarrollo y asegura que
    // SOLO el puerto 5173 de React se comunique con el backend.
    proxy: {
      '/api': {
        target: 'http://localhost:8080',
        changeOrigin: true,
        secure: false,
      },
    },
  },
})

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [vue()],
  base: "./",
  server: {
    proxy: {
        "/sd/services/": {
          target: process.env.VITE_APP_REAL_URL,
          changeOrigin: true,
          secure: false,
          ws: true
        }
      }
  },
})

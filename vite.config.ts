import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/multi-step-form-main/',
  resolve: {
    alias: {
      src: '/src',
    },
  }
})

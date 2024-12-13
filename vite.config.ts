import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import routerPlugin from '@tanstack/router-plugin/vite'


// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), routerPlugin()],
})

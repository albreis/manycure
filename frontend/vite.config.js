import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'
import removeConsole from 'vite-plugin-remove-console'

export default defineConfig({
  optimizeDeps: {
    include: ['fast-deep-equal']
  },
  build: {
    sourcemap: true, // Source map generation must be turned on
  },
  plugins: [
    vue(),
    removeConsole()
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  appType: 'spa',
  server: {
    host: '0.0.0.0',
    port: 5173,
    allowedHosts: ['manycure.app'],
    watch: {
      usePolling: true,
    },
    client: {
      webSocketURL: {
        protocol: 'wss',
        hostname: 'manycure.app',
        port: 443,
        pathname: '/ws'
      }
    }
  },
})

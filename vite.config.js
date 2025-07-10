import { defineConfig } from 'vite';
import sassGlobImports from 'vite-plugin-sass-glob-import';
import { resolve } from 'path'

export default defineConfig({
  server: {
    host: '0.0.0.0',
    port: 3000,
    watch: {
      usePolling: true
    },
    proxy: {
      '^/(?!@vite|src/|node_modules/)': {
        target: 'http://php-server',
        changeOrigin: true
      }
    }
  },
  build: {
    outDir: './dist',
    emptyOutDir: true,
    assetsDir: 'assets',
  },
  plugins: [
    sassGlobImports()
  ],
});
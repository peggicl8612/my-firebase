import { defineConfig } from 'vite'
import { resolve } from 'path'
import { fileURLToPath, URL } from 'node:url'

const __dirname = fileURLToPath(new URL('.', import.meta.url))

export default defineConfig({
  root: '.',
  publicDir: 'public',
  server: {
    port: 3000,
    strictPort: true,
    open: true
   },
  build: {
    outDir: 'dist',
    emptyOutDir: true,
   
  },
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src')
    }
  }
})


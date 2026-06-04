import { defineConfig } from 'vite'

export default defineConfig({
  build: {
    emptyOutDir: false,
    lib: {
      entry: './src/controller-entry.ts',
      formats: ['iife'],
      name: 'MockController',
      fileName: () => 'controller.js',
    },
    rollupOptions: {
      output: {
        dir: 'dist',
      }
    }
  }
})

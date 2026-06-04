import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import cssInjectedByJsPlugin from 'vite-plugin-css-injected-by-js'

export default defineConfig({
  plugins: [react(), cssInjectedByJsPlugin()],
  build: {
    minify: false,
    rollupOptions: {
      input: {
        app: './src/main.tsx',
      },
      output: {
        entryFileNames: 'app.js',
        inlineDynamicImports: true,
      }
    }
  }
})

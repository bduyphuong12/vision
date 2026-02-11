import { defineConfig } from 'vitest/config'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig({
  esbuild: {
    loader: 'jsx',
    include: /src\/.*\.js$/,
    exclude: [],
    jsx: 'automatic',
  },
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './src/setupTests.js',
    css: true,
  },
  resolve: {
    alias: {
      "components": path.resolve(__dirname, "./src/components"),
      "assets": path.resolve(__dirname, "./src/assets"),
      "context": path.resolve(__dirname, "./src/context"),
      "examples": path.resolve(__dirname, "./src/examples"),
      "layouts": path.resolve(__dirname, "./src/layouts"),
      "variables": path.resolve(__dirname, "./src/variables"),
    }
  }
})

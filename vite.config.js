import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { fileURLToPath, URL } from 'node:url'
import yaml from '@rollup/plugin-yaml'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue({
      template: {
        compilerOptions: {
          compatConfig: {
            MODE: 2 // Vue 2 compat mode
          },
          isCustomElement: (tag) => {
            // Treat SVG namespace tags as custom elements to suppress warnings
            return tag.startsWith('dc:') || tag.startsWith('cc:') || tag.startsWith('rdf:');
          }
        }
      }
    }),
    yaml()
  ],
  resolve: {
    alias: {
      '~': fileURLToPath(new URL('./src', import.meta.url)),
      '@': fileURLToPath(new URL('./src', import.meta.url)),
      'vue': '@vue/compat'
    }
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: ``
      }
    }
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          'vendor': ['vue', 'vue-router'],
          'animations': ['animejs', 'gsap']
        }
      }
    }
  }
})

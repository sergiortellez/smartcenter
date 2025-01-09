import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0' // This exposes the server to the local network
  },
  resolve: {
    alias: {

      '@assets': '/src/assets',
      '@components': '/src/components',
      '@context': '/src/context',
      '@hooks': '/src/hooks',
      '@data': '/src/data',
      '@pages': '/src/pages',
      '@firebase': '/src/firebase',

    }
  }
})

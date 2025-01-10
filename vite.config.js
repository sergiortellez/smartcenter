import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import fs from 'fs';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  plugins: [
    react(),
    {
      name: 'add-cname',
      closeBundle() {
        if (mode !== 'development') {
          const cnamePath = path.resolve(__dirname, 'dist/CNAME');
          fs.writeFileSync(cnamePath, 'smart.huin.solutions');
        }
      },
    },
  ],
  server: {
    host: '0.0.0.0', // This exposes the server to the local network
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
    },
  },
  define: {
    'process.env': process.env,
  },
  base: mode === 'development' ? '/' : '/smartcenter/', // Adjust the base for GitHub Pages
  build: {
    rollupOptions: {
      output: {
        assetFileNames: 'assets/[name].[hash][extname]',
        chunkFileNames: 'assets/[name].[hash].js',
        entryFileNames: 'assets/[name].[hash].js',
      },
    },
  },
}));


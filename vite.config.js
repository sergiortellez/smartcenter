// vite.config.js
import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react-swc';
import fs from 'fs';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  // Load environment variables based on the current mode.
  // This will load from .env, .env.[mode], etc.
  process.env = { ...process.env, ...loadEnv(mode, process.cwd()) };

  // Determine the base URL from the environment variable.
  const base = process.env.VITE_BASE_URL || '/';

  return {
    plugins: [
      react(),
      {
        name: 'conditional-add-cname',
        closeBundle() {
          // Only add the CNAME file when deploying to GitHub Pages,
          // i.e., when not in development and the base is '/'.
          if (mode !== 'development' && base === '/') {
            const cnamePath = path.resolve(__dirname, 'dist/CNAME');
            fs.writeFileSync(cnamePath, 'smart.huin.solutions');
          }
        },
      },
    ],
    server: {
      host: '0.0.0.0', // Exposes the dev server to your local network.
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
    base, // Sets the base path according to the environment variable.
    build: {
      rollupOptions: {
        output: {
          assetFileNames: 'assets/[name].[hash][extname]',
          chunkFileNames: 'assets/[name].[hash].js',
          entryFileNames: 'assets/[name].[hash].js',
        },
      },
    },
  };
});

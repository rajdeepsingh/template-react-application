/// <reference types="vitest" />
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import tsConfigPaths from 'vite-tsconfig-paths';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [tsConfigPaths(), react()],
  // resolve: {
  //   alias: {
  //     '@': path.join(path.dirname(new URL(import.meta.url).pathname), '/src'),
  //   },
  // },
  test: {
    include: ['**/*.test.ts'],
    clearMocks: true,
    environment: 'jsdom',
    setupFiles: ['./setupTests'],
  },
});

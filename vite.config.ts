/* eslint-disable import/no-extraneous-dependencies */
import path from 'node:path';

import react from '@vitejs/plugin-react-swc';
import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';

import pkgJSON from './package.json';

export default defineConfig({
  plugins: [react(), dts({ rollupTypes: true, insertTypesEntry: true })],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
  build: {
    sourcemap: false,
    emptyOutDir: true,
    copyPublicDir: false,
    minify: 'esbuild',
    lib: {
      entry: path.resolve(__dirname, 'src', 'index.ts'),
      name: 'ikui',
      formats: ['es', 'umd'],
      fileName: 'ikui',
    },
    rollupOptions: {
      external: [
        ...Object.keys(pkgJSON.peerDependencies),
        ...Object.keys(pkgJSON.devDependencies),
      ],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
        },
      },
    },
  },
});

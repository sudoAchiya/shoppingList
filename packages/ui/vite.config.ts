import path, { extname, relative, resolve } from 'path';
import react from '@vitejs/plugin-react';
import { glob } from 'glob';
import dts from 'vite-plugin-dts';
import { libInjectCss } from 'vite-plugin-lib-inject-css';
import svgr from 'vite-plugin-svgr';
import { defineConfig } from 'vitest/config';

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    libInjectCss(),
    dts({
      tsconfigPath: resolve(__dirname, 'tsconfig.lib.json'),
    }),
    svgr(),
  ],
  resolve: {
    alias: [
      { find: '@', replacement: path.resolve(__dirname, 'lib') },
      { find: '@src', replacement: path.resolve(__dirname, 'src') },
    ],
  },
  test: {
    globals: true,
    environment: 'jsdom',
    css: true,
    coverage: {
      provider: 'v8',
      reporter: ['lcov', 'html', 'text'],
    },
    reporters: ['junit', 'default'],
    outputFile: 'test-results.xml',
    setupFiles: ['./vitest.setup.ts'],
  },
  build: {
    lib: {
      entry: resolve(__dirname, 'lib/main.ts'),
      formats: ['es'],
    },
    copyPublicDir: false,
    rollupOptions: {
      external: [
        'react',
        'react-dom',
        '@mui/material',
        '@emotion/react',
        '@emotion/styled',
        '@mui/icons-material',
        '@mui/lab',
        '@mui/x-date-pickers',
      ],
      input: Object.fromEntries(
        glob
          .sync('lib/**/*.{ts,tsx}', { ignore: '**/*.stories.*' })
          .map(file => {
            const name = relative(
              'lib',
              file.slice(0, file.length - extname(file).length),
            );
            return [name, resolve(__dirname, file)];
          }),
      ),
      output: {
        assetFileNames: 'assets/[name]-[extname]',
        entryFileNames: '[name].js',
      },
    },
  },
});

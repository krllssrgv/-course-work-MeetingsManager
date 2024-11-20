import path from 'node:path';

import EnvironmentPlugin from 'vite-plugin-environment';
import { defineConfig } from 'vitest/config';

export default defineConfig({
    plugins: [EnvironmentPlugin([])],
    resolve: {
        alias: {
            '@': path.resolve(__dirname, './src'),
        },
    },
    test: {
        environment: 'jsdom',
        globals: true,
        setupFiles: ['./setup-tests.ts'],
        include: ['src/**/*.{test,spec}.{ts,tsx}'],
        exclude: ['node_modules'],
        coverage: {
            include: [
              'src/**/*.ts',
              'src/**/*.tsx'
            ],
            exclude: [
              'src/**/index.ts',
              '**/*.d.ts'
            ],
            // reporter: ['text', 'html'],
            reporter: ['text'],
        },
    },
});

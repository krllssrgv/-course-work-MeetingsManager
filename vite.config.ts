import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    resolve: {
        alias: {
            '@app': path.resolve(__dirname, './src/app/App'),
            '@pages': path.resolve(__dirname, './src/pages/index'),
            '@widgets': path.resolve(__dirname, './src/widgets/index'),
            '@features': path.resolve(__dirname, './src/features/index'),
            '@entities': path.resolve(__dirname, './src/entities/index'),
            '@shared': path.resolve(__dirname, './src/shared/index'),
        },
    },
    css: {
        preprocessorOptions: {
            scss: {
                additionalData: `@use "src/shared/consts/variables.scss" as *;`,
            },
        },
    },
});
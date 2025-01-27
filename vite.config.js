import react from '@vitejs/plugin-react';
// import reactRefresh from '@vitejs/plugin-react-refresh';
import path from 'path';
import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '~': path.resolve(__dirname, './'), // 根路径
      '@': path.resolve(__dirname, 'src'), // src 路径
    },
  },
  server: {
    port: 1024,
  },
  plugins: [react()],
  build: {
    minify: false, // 禁用压缩
  },
  base: './',
});

import path from 'path';
import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

// Рабочий конфиг для деплоя на Vercel
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, '.', '');
  return {
    base: '/', // обязательно для Vercel!
    plugins: [react()],
    define: {
      'process.env.API_KEY': JSON.stringify(env.GEMINI_API_KEY),
      'process.env.GEMINI_API_KEY': JSON.stringify(env.GEMINI_API_KEY)
    },
        resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      },
    },
    server: {
      port: 3000,
      host: '0.0.0.0',
    },
    build: {
      outDir: 'dist', // обязательно для Vercel!
    },
  };
});

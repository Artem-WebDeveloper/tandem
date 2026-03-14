import { defineConfig } from 'vitest/config';
import { fileURLToPath } from 'node:url';

export default defineConfig({
  test: {
    globals: true, // позволяет использовать такие функции как 'describe', 'it', 'test' без импорта
    environment: 'jsdom', // нужно для тестирования компонентов в браузерном окружении
    setupFiles: './src/setupTests.ts', // файл для глобальной настройки тестов
  },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
});

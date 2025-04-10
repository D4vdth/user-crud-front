
import { defineConfig, envField } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
  },
  env: {
    schema:{
      USER_API: envField.string({context:"server", access:"public"})
    }
  }
});
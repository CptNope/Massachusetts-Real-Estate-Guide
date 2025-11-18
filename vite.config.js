import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// IMPORTANT: when deploying to GitHub Pages, set `base` to '/YOUR-REPO-NAME/'
export default defineConfig({
  plugins: [react()],
  base: '/'
});

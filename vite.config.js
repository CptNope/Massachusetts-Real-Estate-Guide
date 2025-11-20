import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/Massachusetts-Real-Estate-Guide/',
  
  // CSS optimization
  css: {
    postcss: './postcss.config.js',
    // Minify CSS in production
    devSourcemap: true,
  },
  
  // Build optimization
  build: {
    // Generate sourcemaps for debugging (can disable in production)
    sourcemap: false,
    
    // CSS code splitting for better caching
    cssCodeSplit: true,
    
    // Chunk size warnings (increased due to large bundle)
    chunkSizeWarningLimit: 1000,
    
    // Rollup options for advanced optimization
    rollupOptions: {
      output: {
        // Manual chunks for better caching
        manualChunks: {
          // Vendor chunk for React and related libraries
          'react-vendor': ['react', 'react-dom'],
          // Chart.js in separate chunk
          'charts': ['chart.js', 'react-chartjs-2'],
          // Leaflet in separate chunk
          'maps': ['leaflet'],
        },
        // Asset file naming
        assetFileNames: (assetInfo) => {
          // CSS files
          if (assetInfo.name.endsWith('.css')) {
            return 'assets/css/[name]-[hash][extname]';
          }
          // Other assets
          return 'assets/[name]-[hash][extname]';
        },
        // Chunk file naming
        chunkFileNames: 'assets/js/[name]-[hash].js',
        entryFileNames: 'assets/js/[name]-[hash].js',
      }
    },
    
    // Minification settings
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true, // Remove console.logs in production
        drop_debugger: true,
        pure_funcs: ['console.log', 'console.info'], // Remove specific console methods
      },
      format: {
        comments: false, // Remove all comments
      },
    },
    
    // Target modern browsers for smaller bundle
    target: 'es2015',
    
    // Increase chunk size limit before warning
    reportCompressedSize: true,
  },
  
  // Development server options
  server: {
    port: 3000,
    open: false,
  },
});

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { VitePWA } from 'vite-plugin-pwa';

export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      scope: '/Massachusetts-Real-Estate-Guide/',
      includeAssets: ['favicon.svg', 'icon-192.svg', 'icon-512.svg'],
      manifest: {
        name: 'Massachusetts Real Estate Guide 2025',
        short_name: 'MA RE Guide',
        description: 'Massachusetts real estate contract flow, 2025 law changes, commission negotiation, and broker relationships guide',
        theme_color: '#38bdf8',
        background_color: '#0b1120',
        display: 'standalone',
        start_url: '/Massachusetts-Real-Estate-Guide/',
        icons: [
          {
            src: 'icon-192.svg',
            sizes: '192x192',
            type: 'image/svg+xml',
            purpose: 'any maskable'
          },
          {
            src: 'icon-512.svg',
            sizes: '512x512',
            type: 'image/svg+xml',
            purpose: 'any maskable'
          }
        ]
      },
      workbox: {
        globPatterns: ['**/*.{js,css,html,ico,png,svg,woff,woff2}'],
        runtimeCaching: [
          {
            urlPattern: /^https:\/\/fonts\.googleapis\.com\/.*/i,
            handler: 'CacheFirst',
            options: {
              cacheName: 'google-fonts-cache',
              expiration: {
                maxEntries: 10,
                maxAgeSeconds: 60 * 60 * 24 * 365 // 365 days
              },
              cacheableResponse: {
                statuses: [0, 200]
              }
            }
          },
          {
            urlPattern: /^https:\/\/fonts\.gstatic\.com\/.*/i,
            handler: 'CacheFirst',
            options: {
              cacheName: 'gstatic-fonts-cache',
              expiration: {
                maxEntries: 10,
                maxAgeSeconds: 60 * 60 * 24 * 365 // 365 days
              },
              cacheableResponse: {
                statuses: [0, 200]
              }
            }
          },
          {
            urlPattern: /\.(?:png|jpg|jpeg|svg|gif|webp)$/,
            handler: 'CacheFirst',
            options: {
              cacheName: 'images-cache',
              expiration: {
                maxEntries: 60,
                maxAgeSeconds: 60 * 60 * 24 * 30 // 30 days
              }
            }
          },
          {
            urlPattern: /\.(?:js|css)$/,
            handler: 'StaleWhileRevalidate',
            options: {
              cacheName: 'static-resources',
            }
          }
        ]
      }
    })
  ],
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
        manualChunks: (id) => {
          // Vendor chunks
          if (id.includes('node_modules')) {
            if (id.includes('react') || id.includes('react-dom')) {
              return 'react-vendor';
            }
            if (id.includes('chart.js') || id.includes('react-chartjs-2')) {
              return 'charts';
            }
            if (id.includes('leaflet')) {
              return 'maps';
            }
            if (id.includes('jspdf')) {
              return 'pdf-vendor';
            }
            if (id.includes('@emailjs/browser')) {
              return 'email-vendor';
            }
          }
          // Study data split into 3 separate chunks for granular loading
          if (id.includes('flashcardsData.js')) {
            return 'flashcardsData';
          }
          if (id.includes('quizData.js')) {
            return 'quizData';
          }
          if (id.includes('examData.js')) {
            return 'examData';
          }
          // Legacy support (can be removed after confirming split works)
          if (id.includes('studyData.js')) {
            return 'studyData';
          }
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

import autoprefixer from 'autoprefixer';
import cssnano from 'cssnano';

export default {
  plugins: [
    // Add vendor prefixes automatically
    autoprefixer(),
    
    // Minify CSS (only in production)
    process.env.NODE_ENV === 'production' && cssnano({
      preset: ['default', {
        discardComments: {
          removeAll: true,
        },
      }]
    }),
  ].filter(Boolean), // Remove falsy values (when NODE_ENV !== 'production')
};

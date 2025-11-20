const autoprefixer = require('autoprefixer');
const cssnano = require('cssnano');
const purgecss = require('@fullhuman/postcss-purgecss').default;

module.exports = {
  plugins: [
    // Add vendor prefixes automatically
    autoprefixer(),
    
    // Remove unused CSS (only in production)
    process.env.NODE_ENV === 'production' && purgecss({
      content: [
        './index.html',
        './src/**/*.{js,jsx,ts,tsx}',
      ],
      // Safelist important classes that might be added dynamically
      safelist: [
        // Animation classes
        /^animate-/,
        /^transition-/,
        // Chart.js classes
        /^chart/,
        /^chartjs/,
        // Leaflet map classes
        /^leaflet/,
        // Dynamic state classes
        /^active$/,
        /^inactive$/,
        /^hover$/,
        /^focus$/,
        /^disabled$/,
        /^error$/,
        /^success$/,
        /^warning$/,
        // Comparable differentiation
        /^comp-section/,
        /^data-loaded$/,
        // Dark mode
        /^dark$/,
        // Tooltip and modal classes
        /^tooltip/,
        /^modal/,
        /^dropdown/,
        // Result and notification classes
        /^notification/,
        /^result-/,
        // nth-child patterns (for comparable colors)
        /nth-of-type/,
      ],
      // Don't remove these selectors
      blocklist: [],
      // More aggressive extraction for JSX
      defaultExtractor: content => {
        // Match class names in JSX className props
        const classMatches = content.match(/className[=:][\s\S]*?["{]([^"}]*)["}]/g);
        const classes = classMatches
          ? classMatches.map(match => match.match(/[a-zA-Z0-9-_:]+/g)).flat()
          : [];
        
        // Also match traditional class patterns
        const traditional = content.match(/[A-Za-z0-9-_:/]+/g) || [];
        
        return [...new Set([...classes, ...traditional])];
      }
    }),
    
    // Minify CSS (only in production)
    process.env.NODE_ENV === 'production' && cssnano({
      preset: ['advanced', {
        discardComments: {
          removeAll: true,
        },
        reduceIdents: false, // Keep animation names
        zindex: false, // Don't optimize z-index
        // Merge rules carefully
        mergeLonghand: true,
        mergeRules: true,
        // Remove duplicates
        discardDuplicates: true,
        discardEmpty: true,
        // Minify selectors
        minifySelectors: true,
        // Optimize colors
        colormin: true,
        // Normalize whitespace
        normalizeWhitespace: true,
      }]
    }),
  ].filter(Boolean), // Remove falsy values (when NODE_ENV !== 'production')
};

/**
 * CMA Calculation Utilities
 * Helper functions for pricing calculations, statistics, and analysis
 */

/**
 * Calculate price per square foot
 * @param {number|string} price - Property price
 * @param {number|string} sqft - Square footage
 * @returns {string} Price per sqft formatted to 2 decimals
 */
export const calcPricePerSqft = (price, sqft) => {
  const p = parseFloat(price) || 0;
  const s = parseInt(sqft) || 1;
  return s > 0 ? (p / s).toFixed(2) : 0;
};

/**
 * Determine confidence level based on comparable consistency
 * @param {Array} adjustedComps - Array of adjusted comparable objects
 * @returns {Object} Confidence level object with level, color, and text
 */
export const getConfidenceLevel = (adjustedComps) => {
  if (adjustedComps.length < 2) {
    return { 
      level: 'low', 
      color: '#ef4444', 
      text: '🔴 Low Confidence - Use 3+ comps' 
    };
  }
  
  const values = adjustedComps.map(c => c.adjustedPrice);
  const avg = values.reduce((a, b) => a + b, 0) / values.length;
  const range = Math.max(...values) - Math.min(...values);
  const variance = range / avg;
  
  if (variance < 0.05) {
    return { 
      level: 'high', 
      color: '#10b981', 
      text: '🟢 High Confidence - Tight clustering' 
    };
  }
  
  if (variance < 0.15) {
    return { 
      level: 'medium', 
      color: '#f59e0b', 
      text: '🟡 Medium Confidence - Moderate spread' 
    };
  }
  
  return { 
    level: 'low', 
    color: '#ef4444', 
    text: '🔴 Low Confidence - Wide variance' 
  };
};

/**
 * Calculate median value from array of numbers
 * @param {Array<number>} values - Array of numeric values
 * @returns {number} Median value
 */
export const calculateMedian = (values) => {
  const sorted = [...values].sort((a, b) => a - b);
  const mid = Math.floor(sorted.length / 2);
  return sorted.length % 2 === 0 
    ? (sorted[mid - 1] + sorted[mid]) / 2 
    : sorted[mid];
};

/**
 * Calculate standard deviation
 * @param {Array<number>} values - Array of numeric values
 * @returns {number} Standard deviation
 */
export const calculateStdDev = (values) => {
  const avg = values.reduce((a, b) => a + b, 0) / values.length;
  const squaredDiffs = values.map(v => Math.pow(v - avg, 2));
  const variance = squaredDiffs.reduce((a, b) => a + b, 0) / values.length;
  return Math.sqrt(variance);
};

/**
 * Detect statistical outliers in comparables
 * Uses z-score method (>2 standard deviations from median)
 * @param {Array} adjustedComps - Array of adjusted comparable objects
 * @returns {Array<number>} Array of comparable IDs that are outliers
 */
export const detectOutliers = (adjustedComps) => {
  if (adjustedComps.length < 3) return [];
  
  const values = adjustedComps.map(c => c.adjustedPrice);
  const median = calculateMedian(values);
  const stdDev = calculateStdDev(values);
  
  return adjustedComps
    .filter(comp => {
      const zScore = Math.abs((comp.adjustedPrice - median) / stdDev);
      return zScore > 2; // More than 2 standard deviations away
    })
    .map(comp => comp.id);
};

/**
 * Calculate average value from array
 * @param {Array<number>} values - Array of numeric values
 * @returns {number} Average value
 */
export const calculateAverage = (values) => {
  if (!values || values.length === 0) return 0;
  return values.reduce((sum, val) => sum + val, 0) / values.length;
};

/**
 * Calculate percentage difference between two values
 * @param {number} value1 - First value
 * @param {number} value2 - Second value
 * @returns {number} Percentage difference
 */
export const calculatePercentDifference = (value1, value2) => {
  if (value2 === 0) return 0;
  return ((value1 - value2) / value2) * 100;
};

/**
 * Format currency for display
 * @param {number} value - Numeric value
 * @param {boolean} compact - Use compact notation (e.g., $1.2M)
 * @returns {string} Formatted currency string
 */
export const formatCurrency = (value, compact = false) => {
  if (compact && value >= 1000000) {
    return `$${(value / 1000000).toFixed(1)}M`;
  }
  if (compact && value >= 1000) {
    return `$${(value / 1000).toFixed(0)}K`;
  }
  return `$${value.toLocaleString()}`;
};

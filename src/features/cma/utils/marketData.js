/**
 * Market Data Constants
 * Real-time market indicators and trends for Massachusetts housing market
 * Data simulated based on actual market trends and patterns
 */

/**
 * Current Massachusetts housing market data
 * Updated based on trends from Freddie Mac, NAR, and local MLS data
 */
export const marketData = {
  // Mortgage Rates
  mortgageRate: 6.89,                    // Current 30-year fixed rate (%)
  mortgageRateTrend: -0.11,              // Weekly change (%)
  
  // Housing Prices
  medianPrice: 625000,                   // MA median home price ($)
  medianPriceTrend: 3.2,                 // Year-over-year change (%)
  
  // Inventory & Supply
  inventoryMonths: 2.3,                  // Months of supply
  inventoryTrend: -15,                   // % change from 2023
  
  // Market Velocity
  avgDOM: 32,                            // Average days on market
  domTrend: -8,                          // Change vs. last month (days)
  
  // Market Conditions
  interestRateImpact: 'moderate',        // low/moderate/high
  affordabilityIndex: 72,                // 0-100 (100 = perfect balance)
  buyerDemand: 'high',                   // low/moderate/high
  
  // Seasonal Factors (monthly multipliers)
  seasonalFactor: [
    0.95,  // January   - Winter slowdown
    0.96,  // February  - Winter slowdown
    1.00,  // March     - Spring begins
    1.03,  // April     - Spring peak
    1.05,  // May       - Peak season
    1.04,  // June      - Strong summer
    1.02,  // July      - Summer continues
    1.01,  // August    - Summer tail
    1.00,  // September - Fall begins
    0.99,  // October   - Fall market
    0.97,  // November  - Slowing down
    0.95   // December  - Holiday slowdown
  ][new Date().getMonth()]
};

/**
 * Price per square foot benchmarks by region
 */
export const regionalPricing = {
  'Boston': { min: 600, avg: 725, max: 1200 },
  'Cambridge': { min: 700, avg: 850, max: 1400 },
  'Brookline': { min: 650, avg: 780, max: 1300 },
  'Newton': { min: 550, avg: 680, max: 1100 },
  'Somerville': { min: 600, avg: 720, max: 1200 },
  'Worcester': { min: 180, avg: 245, max: 400 },
  'Springfield': { min: 120, avg: 185, max: 350 },
  'Cape Cod': { min: 350, avg: 520, max: 900 },
  'Berkshires': { min: 200, avg: 310, max: 550 },
  'North Shore': { min: 300, avg: 425, max: 750 }
};

/**
 * Inventory level thresholds
 */
export const inventoryLevels = {
  extreme: { max: 2, label: "Extreme Seller's Market", icon: '🔥🔥' },
  strong: { min: 2, max: 4, label: "Strong Seller's Market", icon: '🔥' },
  balanced: { min: 4, max: 6, label: 'Balanced Market', icon: '⚖️' },
  buyer: { min: 6, label: "Buyer's Market", icon: '🏦' }
};

/**
 * Days on market (DOM) benchmarks
 */
export const domBenchmarks = {
  hot: { max: 20, label: 'Hot Market', velocity: 'fast' },
  moderate: { min: 20, max: 45, label: 'Moderate Market', velocity: 'moderate' },
  slow: { min: 45, label: 'Slow Market', velocity: 'slow' }
};

/**
 * Market trend multipliers for predictions
 */
export const trendMultipliers = {
  rising: {
    three: 1.02,   // 3-month
    six: 1.04,     // 6-month
    twelve: 1.08   // 12-month
  },
  falling: {
    three: 0.98,
    six: 0.96,
    twelve: 0.92
  },
  stable: {
    three: 1.0,
    six: 1.0,
    twelve: 1.0
  }
};

/**
 * Get market condition based on inventory and DOM
 * @param {number} inventoryMonths - Months of inventory
 * @param {number} avgDOM - Average days on market
 * @returns {Object} Market condition object
 */
export const getMarketCondition = (inventoryMonths, avgDOM) => {
  const isSellerMarket = inventoryMonths < 4;
  const isFastSelling = avgDOM < 30;
  
  if (isSellerMarket && isFastSelling) {
    return {
      type: "strong-seller",
      label: "Strong Seller's Market",
      description: "Low inventory + fast sales favor sellers",
      icon: "🔥",
      color: "#ef4444"
    };
  }
  
  if (isSellerMarket || isFastSelling) {
    return {
      type: "moderate-seller",
      label: "Moderate Seller's Market",
      description: "Conditions favor sellers",
      icon: "📈",
      color: "#f59e0b"
    };
  }
  
  if (inventoryMonths > 6 && avgDOM > 60) {
    return {
      type: "buyer",
      label: "Buyer's Market",
      description: "High inventory + slow sales favor buyers",
      icon: "🏦",
      color: "#3b82f6"
    };
  }
  
  return {
    type: "balanced",
    label: "Balanced Market",
    description: "Fair conditions for buyers and sellers",
    icon: "⚖️",
    color: "#10b981"
  };
};

/**
 * Data source information
 */
export const dataSources = {
  mortgageRates: {
    name: 'Freddie Mac PMMS',
    url: 'https://www.freddiemac.com/pmms',
    description: 'Primary Mortgage Market Survey'
  },
  housingData: {
    name: 'National Association of Realtors',
    url: 'https://www.nar.realtor',
    description: 'Housing statistics and trends'
  },
  census: {
    name: 'U.S. Census Bureau',
    url: 'https://www.census.gov',
    description: 'Demographics and housing data'
  },
  fred: {
    name: 'FRED Economic Data',
    url: 'https://fred.stlouisfed.org',
    description: 'Federal Reserve economic indicators'
  }
};

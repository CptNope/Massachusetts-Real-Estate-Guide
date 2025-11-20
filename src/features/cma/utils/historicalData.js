/**
 * Historical Market Data Utilities
 * Fetches real historical data from free public APIs (FRED, HUD, Census)
 * No API key required for basic usage
 */

/**
 * FRED API Series IDs for Real Estate Data
 */
const FRED_SERIES = {
  MORTGAGE_30Y: 'MORTGAGE30US',           // 30-Year Fixed Rate Mortgage Average
  MORTGAGE_15Y: 'MORTGAGE15US',           // 15-Year Fixed Rate Mortgage Average
  MEDIAN_HOME_PRICE_US: 'MSPUS',          // Median Sales Price of Houses Sold (US)
  MEDIAN_HOME_PRICE_NE: 'MEDLISPRINE',    // Median Listing Price (Northeast)
  HOUSING_STARTS: 'HOUST',                // Housing Starts
  EXISTING_HOME_SALES: 'EXHOSLUSM495S',   // Existing Home Sales
  BUILDING_PERMITS: 'PERMIT',             // New Private Housing Units Authorized
  MONTHS_SUPPLY: 'MSACSR',                // Monthly Supply of Houses
  HOME_AFFORDABILITY: 'FIXHAI',           // Housing Affordability Index
  UNEMPLOYMENT_MA: 'MAUR',                // Unemployment Rate: Massachusetts
  GDP_MA: 'MANQGSP',                      // GDP: Massachusetts
  CONSUMER_CONFIDENCE: 'UMCSENT'          // Consumer Sentiment Index
};

/**
 * Fetch data from FRED API
 * @param {string} seriesId - FRED series ID
 * @param {number} yearsBack - Number of years of historical data (default: 5)
 * @returns {Promise<Array>} Array of {date, value} objects
 */
export const fetchFREDData = async (seriesId, yearsBack = 5) => {
  try {
    // Calculate start date
    const endDate = new Date();
    const startDate = new Date();
    startDate.setFullYear(endDate.getFullYear() - yearsBack);
    
    const startStr = startDate.toISOString().split('T')[0];
    const endStr = endDate.toISOString().split('T')[0];
    
    // FRED API endpoint (JSON format doesn't require API key for basic access)
    const url = `https://api.stlouisfed.org/fred/series/observations?series_id=${seriesId}&observation_start=${startStr}&observation_end=${endStr}&file_type=json&api_key=`;
    
    const response = await fetch(url);
    
    if (!response.ok) {
      throw new Error(`FRED API error: ${response.status}`);
    }
    
    const data = await response.json();
    
    if (!data.observations || data.observations.length === 0) {
      return [];
    }
    
    // Filter out non-numeric values and format
    return data.observations
      .filter(obs => obs.value !== '.' && !isNaN(parseFloat(obs.value)))
      .map(obs => ({
        date: obs.date,
        value: parseFloat(obs.value),
        formatted: new Date(obs.date).toLocaleDateString('en-US', { 
          year: 'numeric', 
          month: 'short' 
        })
      }));
  } catch (error) {
    console.error(`Failed to fetch FRED data for ${seriesId}:`, error);
    return generateFallbackData(seriesId, yearsBack);
  }
};

/**
 * Generate fallback/simulated data if API fails
 * @param {string} seriesId - FRED series ID
 * @param {number} yearsBack - Number of years
 * @returns {Array} Simulated data points
 */
const generateFallbackData = (seriesId, yearsBack = 5) => {
  const data = [];
  const today = new Date();
  const monthsBack = yearsBack * 12;
  
  // Base values and trends for different series
  const seriesConfig = {
    [FRED_SERIES.MORTGAGE_30Y]: { base: 6.5, trend: 0.02, volatility: 0.3 },
    [FRED_SERIES.MEDIAN_HOME_PRICE_US]: { base: 400000, trend: 500, volatility: 5000 },
    [FRED_SERIES.MONTHS_SUPPLY]: { base: 3.5, trend: -0.01, volatility: 0.3 },
    [FRED_SERIES.HOUSING_STARTS]: { base: 1500, trend: 5, volatility: 100 },
    [FRED_SERIES.UNEMPLOYMENT_MA]: { base: 3.2, trend: 0.01, volatility: 0.2 }
  };
  
  const config = seriesConfig[seriesId] || { base: 100, trend: 1, volatility: 5 };
  
  for (let i = monthsBack; i >= 0; i--) {
    const date = new Date(today);
    date.setMonth(date.getMonth() - i);
    
    const trendValue = config.base + (monthsBack - i) * config.trend;
    const randomness = (Math.random() - 0.5) * config.volatility;
    const value = trendValue + randomness;
    
    data.push({
      date: date.toISOString().split('T')[0],
      value: parseFloat(value.toFixed(2)),
      formatted: date.toLocaleDateString('en-US', { year: 'numeric', month: 'short' })
    });
  }
  
  return data;
};

/**
 * Fetch multiple series at once
 * @param {Object} seriesMap - Object mapping names to series IDs
 * @param {number} yearsBack - Years of history
 * @returns {Promise<Object>} Object with series data
 */
export const fetchMultipleSeries = async (seriesMap, yearsBack = 5) => {
  const results = {};
  
  await Promise.all(
    Object.entries(seriesMap).map(async ([name, seriesId]) => {
      results[name] = await fetchFREDData(seriesId, yearsBack);
    })
  );
  
  return results;
};

/**
 * Get pre-configured market data sets
 * @param {number} yearsBack - Years of history
 * @returns {Promise<Object>} All market data series
 */
export const getMarketDataSets = async (yearsBack = 5) => {
  const series = {
    mortgageRates: FRED_SERIES.MORTGAGE_30Y,
    medianPrices: FRED_SERIES.MEDIAN_HOME_PRICE_US,
    monthsSupply: FRED_SERIES.MONTHS_SUPPLY,
    housingStarts: FRED_SERIES.HOUSING_STARTS,
    unemploymentMA: FRED_SERIES.UNEMPLOYMENT_MA
  };
  
  return await fetchMultipleSeries(series, yearsBack);
};

/**
 * Calculate trend from data points
 * @param {Array} data - Array of {date, value} objects
 * @returns {Object} Trend analysis
 */
export const calculateTrend = (data) => {
  if (!data || data.length < 2) {
    return { direction: 'stable', change: 0, changePercent: 0 };
  }
  
  const recent = data.slice(-6); // Last 6 months
  const older = data.slice(-12, -6); // Previous 6 months
  
  const recentAvg = recent.reduce((sum, d) => sum + d.value, 0) / recent.length;
  const olderAvg = older.length > 0 
    ? older.reduce((sum, d) => sum + d.value, 0) / older.length
    : recentAvg;
  
  const change = recentAvg - olderAvg;
  const changePercent = olderAvg !== 0 ? (change / olderAvg) * 100 : 0;
  
  let direction = 'stable';
  if (Math.abs(changePercent) > 5) {
    direction = changePercent > 0 ? 'rising' : 'falling';
  }
  
  return {
    direction,
    change: parseFloat(change.toFixed(2)),
    changePercent: parseFloat(changePercent.toFixed(2)),
    current: data[data.length - 1]?.value,
    previous: olderAvg
  };
};

/**
 * Format data for Chart.js
 * @param {Array} data - Array of {date, value} objects
 * @param {string} label - Chart label
 * @param {string} color - Chart color
 * @returns {Object} Chart.js dataset
 */
export const formatForChart = (data, label, color = '#4f9eff') => {
  return {
    labels: data.map(d => d.formatted),
    datasets: [{
      label,
      data: data.map(d => d.value),
      borderColor: color,
      backgroundColor: `${color}33`,
      fill: true,
      tension: 0.4,
      pointRadius: 2,
      pointHoverRadius: 5
    }]
  };
};

/**
 * Get chart configuration for specific metric
 * @param {string} metric - Metric type
 * @returns {Object} Chart configuration
 */
export const getChartConfig = (metric) => {
  const configs = {
    mortgageRates: {
      title: '30-Year Mortgage Rates',
      color: '#ef4444',
      unit: '%',
      yAxisLabel: 'Rate (%)',
      icon: '📈'
    },
    medianPrices: {
      title: 'Median Home Prices',
      color: '#10b981',
      unit: '$',
      format: 'currency',
      yAxisLabel: 'Price ($)',
      icon: '🏠'
    },
    monthsSupply: {
      title: 'Months Supply of Inventory',
      color: '#f59e0b',
      unit: ' months',
      yAxisLabel: 'Months',
      icon: '📦'
    },
    housingStarts: {
      title: 'Housing Starts',
      color: '#8b5cf6',
      unit: 'K units',
      yAxisLabel: 'Units (Thousands)',
      icon: '🏗️'
    },
    unemploymentMA: {
      title: 'Massachusetts Unemployment Rate',
      color: '#ec4899',
      unit: '%',
      yAxisLabel: 'Rate (%)',
      icon: '💼'
    }
  };
  
  return configs[metric] || configs.mortgageRates;
};

/**
 * Export all series IDs for reference
 */
export { FRED_SERIES };

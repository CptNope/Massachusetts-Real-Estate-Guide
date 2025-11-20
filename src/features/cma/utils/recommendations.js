/**
 * Recommendation Engine Utilities
 * Generates market-intelligent recommendations based on CMA data and market conditions
 */

/**
 * Generate market-intelligent recommendations for buyers/sellers
 * @param {string} trend - Market trend: 'rising', 'falling', or 'stable'
 * @param {number} avgDOM - Average days on market
 * @param {number} confidence - Confidence score (0-100)
 * @param {string} riskLevel - Risk level: 'low', 'moderate', or 'high'
 * @param {Object} marketData - Current market data object
 * @returns {Array<Object>} Array of recommendation objects
 */
export const generateRecommendations = (trend, avgDOM, confidence, riskLevel, marketData) => {
  const recs = [];
  
  // Pricing recommendations (market-aware)
  if (trend === 'rising' && avgDOM < 20) {
    if (marketData.inventoryMonths < 3) {
      recs.push({ 
        type: 'pricing', 
        icon: '💰', 
        text: `Seller's market (${marketData.inventoryMonths}mo inventory) - consider listing above average`, 
        priority: 'high' 
      });
    } else {
      recs.push({ 
        type: 'pricing', 
        icon: '💰', 
        text: 'Strong seller\'s market - list at top of comparable range', 
        priority: 'high' 
      });
    }
  } else if (trend === 'falling' && avgDOM > 45) {
    recs.push({ 
      type: 'pricing', 
      icon: '💰', 
      text: 'Cooling market - price competitively to attract buyers', 
      priority: 'high' 
    });
  } else {
    recs.push({ 
      type: 'pricing', 
      icon: '💰', 
      text: 'Balanced market - price near average comparable sales', 
      priority: 'medium' 
    });
  }
  
  // Interest rate impact
  if (marketData.mortgageRateTrend < -0.15) {
    recs.push({ 
      type: 'market', 
      icon: '📉', 
      text: `Mortgage rates declining (${marketData.mortgageRate}%) - buyer demand increasing`, 
      priority: 'high' 
    });
  } else if (marketData.mortgageRateTrend > 0.15) {
    recs.push({ 
      type: 'market', 
      icon: '📈', 
      text: `Rising rates (${marketData.mortgageRate}%) may impact buyer affordability`, 
      priority: 'medium' 
    });
  }
  
  // Timing recommendations
  if (avgDOM < 15 && marketData.inventoryMonths < 3) {
    recs.push({ 
      type: 'timing', 
      icon: '⏰', 
      text: 'Exceptional seller\'s market - list immediately', 
      priority: 'high' 
    });
  } else if (avgDOM > 60) {
    recs.push({ 
      type: 'timing', 
      icon: '⏰', 
      text: 'Longer marketing period expected - prepare accordingly', 
      priority: 'medium' 
    });
  }
  
  // Seasonal timing
  const currentMonth = new Date().getMonth();
  if ([3, 4, 5].includes(currentMonth)) { // Spring market (April, May, June)
    recs.push({ 
      type: 'seasonal', 
      icon: '🌸', 
      text: 'Peak spring season - optimal listing conditions', 
      priority: 'high' 
    });
  } else if ([11, 0, 1].includes(currentMonth)) { // Winter (December, January, February)
    recs.push({ 
      type: 'seasonal', 
      icon: '❄️', 
      text: 'Winter slowdown expected - serious buyers only', 
      priority: 'medium' 
    });
  }
  
  // Inventory analysis
  if (marketData.inventoryMonths < 2) {
    recs.push({ 
      type: 'inventory', 
      icon: '📦', 
      text: 'Critical low inventory - expect multiple offers', 
      priority: 'high' 
    });
  } else if (marketData.inventoryMonths > 6) {
    recs.push({ 
      type: 'inventory', 
      icon: '📦', 
      text: 'High inventory - buyers have choices, price competitively', 
      priority: 'high' 
    });
  }
  
  // Marketing recommendations
  if (avgDOM > 30 || marketData.buyerDemand === 'low') {
    recs.push({ 
      type: 'marketing', 
      icon: '📢', 
      text: 'Invest in professional photos, staging, and virtual tour', 
      priority: 'medium' 
    });
  }
  
  // Data quality recommendations
  if (confidence < 70) {
    recs.push({ 
      type: 'data', 
      icon: '📊', 
      text: 'Add more comparables for more reliable predictions', 
      priority: 'high' 
    });
  }
  
  // Risk recommendations
  if (riskLevel === 'high') {
    recs.push({ 
      type: 'risk', 
      icon: '⚠️', 
      text: 'High price variation - verify comp quality and adjustments', 
      priority: 'high' 
    });
  }
  
  // Affordability insight
  if (marketData.affordabilityIndex < 60) {
    recs.push({ 
      type: 'affordability', 
      icon: '💳', 
      text: 'Affordability concerns may limit buyer pool', 
      priority: 'medium' 
    });
  }
  
  return recs;
};

/**
 * Calculate market trend based on comparable data
 * @param {Array<Object>} comps - Array of comparable property objects
 * @returns {string} Market trend: 'rising', 'falling', or 'stable'
 */
export const calculateMarketTrend = (comps) => {
  if (!comps || comps.length === 0) return 'stable';
  
  // Simplified trend analysis based on DOM and pricing
  const avgDOM = comps.reduce((sum, c) => sum + parseFloat(c.dom || 30), 0) / comps.length;
  const prices = comps.map(c => c.adjustedPrice);
  const avgPrice = prices.reduce((sum, p) => sum + p, 0) / prices.length;
  
  // Hot market: low DOM, prices above average
  if (avgDOM < 20 && avgPrice > 400000) return 'rising';
  
  // Cooling market: high DOM, mixed prices  
  if (avgDOM > 45) return 'falling';
  
  // Stable market
  return 'stable';
};

/**
 * Get recommendation priority level info
 * @param {string} priority - Priority level: 'high' or 'medium'
 * @returns {Object} Priority info object
 */
export const getRecommendationPriority = (priority) => {
  const priorityInfo = {
    high: {
      label: '🔴 High',
      color: '#dc2626',
      bgColor: '#fee2e2',
      sortOrder: 1
    },
    medium: {
      label: '🟡 Medium',
      color: '#92400e',
      bgColor: '#fef3c7',
      sortOrder: 2
    }
  };
  
  return priorityInfo[priority] || priorityInfo.medium;
};

/**
 * Filter recommendations by type
 * @param {Array<Object>} recommendations - Array of recommendation objects
 * @param {string} type - Recommendation type to filter by
 * @returns {Array<Object>} Filtered recommendations
 */
export const filterRecommendationsByType = (recommendations, type) => {
  return recommendations.filter(rec => rec.type === type);
};

/**
 * Sort recommendations by priority
 * @param {Array<Object>} recommendations - Array of recommendation objects
 * @returns {Array<Object>} Sorted recommendations (high priority first)
 */
export const sortRecommendationsByPriority = (recommendations) => {
  return [...recommendations].sort((a, b) => {
    const priorityOrder = { high: 1, medium: 2 };
    return (priorityOrder[a.priority] || 3) - (priorityOrder[b.priority] || 3);
  });
};

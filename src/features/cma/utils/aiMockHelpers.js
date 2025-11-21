/**
 * AI and Mock Response Helper Utilities
 * Provides mock AI responses and email generation for CMA features
 */

/**
 * Generate mock AI response based on question content
 * @param {string} question - User's question
 * @returns {string} Mock AI response
 */
export function generateMockAIResponse(question) {
  const lowerQ = question.toLowerCase();
  
  if (lowerQ.includes('value') || lowerQ.includes('price')) {
    return `Based on your comparable properties, the estimated market value is in the range shown in your analysis. Consider the adjustments made for differences in beds, baths, square footage, and other features. The properties with the smallest total adjustments are typically the most reliable indicators of value.`;
  }
  
  if (lowerQ.includes('market') || lowerQ.includes('trend')) {
    return `The market data shows current trends in your area. Look at days on market (DOM) across your comparables - lower DOM suggests a seller's market, while higher DOM indicates a buyer's market. Compare your subject property's features against the comps to position it competitively.`;
  }
  
  return `I'm an AI assistant for your CMA analysis. I can help explain valuations, market trends, and provide recommendations based on your comparable properties. What specific aspect of the CMA would you like to discuss?`;
}

/**
 * Generate mock AI report based on comparable data
 * @param {Array} adjustedComps - Array of adjusted comparable properties
 * @param {Object} subjectInfo - Subject property information
 * @returns {string} Mock AI report
 */
export function generateMockAIReport(adjustedComps, subjectInfo = {}) {
  if (!adjustedComps || adjustedComps.length === 0) {
    return 'No comparable data available for analysis.';
  }

  const avgPrice = adjustedComps.reduce((sum, comp) => sum + comp.adjustedPrice, 0) / adjustedComps.length;
  const minPrice = Math.min(...adjustedComps.map(c => c.adjustedPrice));
  const maxPrice = Math.max(...adjustedComps.map(c => c.adjustedPrice));
  
  const report = `
**AI-Generated Market Analysis Report**

**Executive Summary:**
Based on ${adjustedComps.length} comparable properties, the estimated market value range is $${minPrice.toLocaleString()} - $${maxPrice.toLocaleString()}, with an average of $${Math.round(avgPrice).toLocaleString()}.

**Key Findings:**
• Average adjusted price: $${Math.round(avgPrice).toLocaleString()}
• Price range: $${(maxPrice - minPrice).toLocaleString()}
• Recommended list price: $${Math.round(avgPrice * 1.02).toLocaleString()} - $${Math.round(avgPrice * 1.03).toLocaleString()}

**Market Positioning:**
The subject property compares favorably to recent sales in the area. Consider pricing competitively within the suggested range to attract buyers while maximizing value.

**Recommendation:**
Based on current market conditions and comparable sales, positioning the property at $${Math.round(avgPrice).toLocaleString()} should generate strong buyer interest while achieving optimal value.
  `.trim();
  
  return report;
}

/**
 * Generate mock AI property description
 * @param {Object} subjectProperty - Subject property details
 * @returns {string} Mock AI-generated description
 */
export function generateMockAIDescription(subjectProperty = {}) {
  const {
    beds = '3',
    baths = '2',
    sqft = '1800',
    address = 'this property',
    garage = 'yes',
    condition = 'good',
    pool = 'no',
    view = 'none'
  } = subjectProperty;

  const features = [];
  if (garage === 'yes') features.push('attached garage');
  if (pool === 'yes') features.push('private pool');
  if (view !== 'none') features.push(`${view} view`);
  
  const featuresText = features.length > 0 
    ? `, featuring ${features.join(', ')}`
    : '';

  return `Welcome to ${address}, a ${condition} condition home offering ${beds} bedrooms and ${baths} bathrooms across ${parseInt(sqft).toLocaleString()} square feet of living space${featuresText}. This property represents an excellent opportunity in today's market, combining desirable features with competitive pricing. The home's layout and condition make it an attractive option for discerning buyers seeking value and quality.`;
}

/**
 * Generate mock AI insights based on market data
 * @param {Array} adjustedComps - Array of adjusted comparable properties
 * @param {Object} marketData - Market statistics
 * @returns {Array} Array of insight objects
 */
export function generateMockAIInsights(adjustedComps, marketData = {}) {
  if (!adjustedComps || adjustedComps.length === 0) {
    return [];
  }

  const avgDOM = adjustedComps.reduce((sum, comp) => {
    return sum + (parseInt(comp.dom) || 30);
  }, 0) / adjustedComps.length;

  const insights = [
    {
      icon: '📊',
      title: 'Market Velocity',
      description: avgDOM < 30 
        ? 'Fast-moving market. Properties selling quickly. Consider competitive pricing.'
        : 'Moderate market pace. Buyers taking time to decide. Price strategically.',
      impact: 'high'
    },
    {
      icon: '💰',
      title: 'Pricing Strategy',
      description: 'Based on comparable sales, pricing within 2-3% of average adjusted value will maximize exposure while maintaining value.',
      impact: 'high'
    },
    {
      icon: '🎯',
      title: 'Competitive Position',
      description: `${adjustedComps.length} comparable properties analyzed. Your property's unique features provide competitive advantages.`,
      impact: 'medium'
    },
    {
      icon: '📈',
      title: 'Market Trend',
      description: marketData.trend === 'rising' 
        ? 'Upward trend detected. Consider pricing at upper end of range.'
        : 'Stable market conditions. Focus on value proposition and property condition.',
      impact: 'medium'
    }
  ];

  return insights;
}

/**
 * Generate mock AI email based on template type
 * @param {string} emailType - Type of email (listing, market_update, cma_report)
 * @param {Object} data - Data for email generation
 * @returns {Object} Email object with subject and body
 */
export function generateMockAIEmail(emailType, data = {}) {
  const templates = {
    listing: {
      subject: `New Listing Alert: ${data.address || 'Property Available'}`,
      body: `Dear ${data.firstName || 'Valued Client'},\n\nI wanted to personally notify you about an exciting new listing that matches your criteria.\n\n**Property Highlights:**\n• ${data.beds || 3} Bedrooms, ${data.baths || 2} Bathrooms\n• ${data.sqft || '1,800'} Square Feet\n• ${data.address || 'Prime Location'}\n• Priced at $${data.price || '450,000'}\n\nThis property represents excellent value in today's market. I'd love to schedule a showing at your convenience.\n\nBest regards,\n${data.agentName || 'Your Real Estate Professional'}`
    },
    market_update: {
      subject: `Your Monthly Market Update - ${new Date().toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}`,
      body: `Dear ${data.firstName || 'Valued Client'},\n\nHere's your monthly market update for ${data.area || 'your area'}:\n\n**Market Highlights:**\n• Average Sale Price: $${data.avgPrice || '445,000'}\n• Days on Market: ${data.avgDOM || '25'} days\n• Inventory Levels: ${data.inventory || 'Moderate'}\n• Market Trend: ${data.trend || 'Stable'}\n\n${data.insight || 'The market remains active with strong buyer demand. Now is an excellent time for both buyers and sellers.'}\n\nLet's discuss how these trends affect your real estate goals.\n\nBest regards,\n${data.agentName || 'Your Real Estate Professional'}`
    },
    cma_report: {
      subject: `Your Property Analysis is Ready - ${data.address || 'Property Evaluation'}`,
      body: `Hello ${data.firstName || 'Valued Client'},\n\nI've completed the comprehensive market analysis for ${data.address || 'your property'}.\n\n**Analysis Summary:**\n• Estimated Value Range: $${data.minValue || '425,000'} - $${data.maxValue || '445,000'}\n• Recommended List Price: $${data.recommendedPrice || '435,000'}\n• Comparable Properties Analyzed: ${data.compCount || '6'}\n• Market Position: ${data.position || 'Competitive'}\n\nThe attached report includes detailed comparisons, market trends, and pricing strategy recommendations.\n\nI'm available to discuss these findings and answer any questions you may have.\n\nBest regards,\n${data.agentName || 'Your Real Estate Professional'}`
    }
  };

  return templates[emailType] || {
    subject: 'Real Estate Update',
    body: `Dear ${data.firstName || 'Valued Client'},\n\nThank you for your continued trust in my services.\n\nBest regards,\n${data.agentName || 'Your Real Estate Professional'}`
  };
}

/**
 * Format currency for display
 * @param {number} value - Numeric value
 * @returns {string} Formatted currency string
 */
export function formatCurrency(value) {
  if (isNaN(value)) return '$0';
  return `$${Math.round(value).toLocaleString()}`;
}

/**
 * Calculate confidence level based on comparable data
 * @param {Array} adjustedComps - Array of adjusted comparables
 * @returns {Object} Confidence metrics
 */
export function calculateConfidenceMetrics(adjustedComps) {
  if (!adjustedComps || adjustedComps.length === 0) {
    return { level: 'low', percentage: 0, message: 'Insufficient data' };
  }

  const count = adjustedComps.length;
  const prices = adjustedComps.map(c => c.adjustedPrice);
  const avg = prices.reduce((a, b) => a + b, 0) / count;
  const variance = prices.reduce((sum, price) => sum + Math.pow(price - avg, 2), 0) / count;
  const stdDev = Math.sqrt(variance);
  const coefficientOfVariation = (stdDev / avg) * 100;

  let level, percentage, message;

  if (count >= 6 && coefficientOfVariation < 5) {
    level = 'very high';
    percentage = 95;
    message = 'Excellent data consistency with 6+ comparables';
  } else if (count >= 4 && coefficientOfVariation < 10) {
    level = 'high';
    percentage = 85;
    message = 'Strong data reliability with low variance';
  } else if (count >= 3 && coefficientOfVariation < 15) {
    level = 'medium';
    percentage = 70;
    message = 'Adequate data for reasonable estimation';
  } else {
    level = 'low';
    percentage = 50;
    message = 'Limited data or high variance - use caution';
  }

  return { level, percentage, message, coefficientOfVariation: coefficientOfVariation.toFixed(2) };
}

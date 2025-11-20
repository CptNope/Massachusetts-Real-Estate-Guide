/**
 * AI Helper Functions
 * Mock AI functions for generating reports, descriptions, insights, and emails
 * In production, these would integrate with actual AI services
 */

/**
 * Generate AI-powered CMA report
 * @param {Array} comparables - Array of comparable properties
 * @param {Object} prediction - AI prediction object
 * @returns {string} Generated report
 */
export const generateAIReport = (comparables, prediction) => {
  if (!comparables || comparables.length === 0) {
    return 'Unable to generate report without comparable properties.';
  }

  const avgPrice = comparables.reduce((sum, c) => sum + (c.adjustedPrice || 0), 0) / comparables.length;
  const priceRange = {
    min: Math.min(...comparables.map(c => c.adjustedPrice || 0)),
    max: Math.max(...comparables.map(c => c.adjustedPrice || 0))
  };

  return `# Comprehensive Market Analysis Report

## Executive Summary
Based on ${comparables.length} comparable properties, the estimated market value is **$${Math.round(avgPrice).toLocaleString()}**.

## Market Overview
- **Price Range**: $${priceRange.min.toLocaleString()} - $${priceRange.max.toLocaleString()}
- **Average DOM**: ${Math.round(comparables.reduce((sum, c) => sum + (parseInt(c.dom) || 0), 0) / comparables.length)} days
- **Market Trend**: ${prediction?.trend || 'Stable'}
- **Confidence**: ${prediction?.confidence || 85}%

## Key Findings
1. **Price Positioning**: The subject property is well-positioned within the local market
2. **Market Activity**: ${comparables.length >= 5 ? 'Strong' : 'Moderate'} comparable activity indicates ${comparables.length >= 5 ? 'an active' : 'a balanced'} market
3. **Value Range**: Property values show ${priceRange.max - priceRange.min > 50000 ? 'significant' : 'moderate'} variation

## Recommendations
${prediction?.recommendations?.map((rec, i) => `${i + 1}. ${rec.text}`).join('\n') || 'Consider current market conditions for optimal pricing strategy.'}

---
*Report generated on ${new Date().toLocaleDateString()}*`;
};

/**
 * Generate AI property description
 * @param {Object} propertyData - Property details
 * @returns {string} Generated description
 */
export const generateAIDescription = (propertyData = {}) => {
  const { beds = 3, baths = 2, sqft = 2000, condition = 'good', age = 10 } = propertyData;

  const conditionWords = {
    excellent: 'meticulously maintained',
    good: 'well-maintained',
    fair: 'solid',
    poor: 'value-oriented'
  };

  const ageDescription = age < 5 
    ? 'modern, recently built' 
    : age < 15 
    ? 'established' 
    : 'mature, character-filled';

  return `Discover this ${conditionWords[condition] || 'well-maintained'} ${ageDescription} property featuring ${beds} bedrooms and ${baths} bathrooms across ${sqft.toLocaleString()} square feet of thoughtfully designed living space.

This ${condition} condition home offers comfortable living with room to grow. The property showcases quality construction and practical layout, perfect for today's lifestyle needs.

Key features include:
• ${beds} spacious bedrooms
• ${baths} full bathrooms
• ${sqft.toLocaleString()} square feet
• ${condition.charAt(0).toUpperCase() + condition.slice(1)} overall condition
• Built approximately ${age} years ago

This home represents excellent value in today's market. Schedule your showing today to experience all this property has to offer!`;
};

/**
 * Generate AI market insights
 * @param {Array} comparables - Array of comparable properties
 * @param {Object} marketData - Market data object
 * @returns {Array} Array of insight objects
 */
export const generateAIInsights = (comparables, marketData) => {
  const insights = [];

  // Insight 1: Market activity
  insights.push({
    category: 'Market Activity',
    icon: '📊',
    text: `Based on ${comparables.length} comparable sales, the market shows ${comparables.length >= 5 ? 'strong' : 'moderate'} activity levels.`,
    impact: comparables.length >= 5 ? 'positive' : 'neutral'
  });

  // Insight 2: Price trends
  const prices = comparables.map(c => c.adjustedPrice || 0);
  const avgPrice = prices.reduce((sum, p) => sum + p, 0) / prices.length;
  const priceVariation = ((Math.max(...prices) - Math.min(...prices)) / avgPrice) * 100;

  insights.push({
    category: 'Price Consistency',
    icon: '💰',
    text: `Price variation of ${priceVariation.toFixed(1)}% indicates ${priceVariation < 10 ? 'a stable' : priceVariation < 20 ? 'a moderately varied' : 'a diverse'} market.`,
    impact: priceVariation < 10 ? 'positive' : priceVariation < 20 ? 'neutral' : 'caution'
  });

  // Insight 3: Days on market
  const avgDOM = comparables.reduce((sum, c) => sum + (parseInt(c.dom) || 0), 0) / comparables.length;
  insights.push({
    category: 'Market Velocity',
    icon: '⚡',
    text: `Average ${Math.round(avgDOM)} days on market suggests ${avgDOM < 30 ? 'a hot' : avgDOM < 60 ? 'a balanced' : 'a slow'} market pace.`,
    impact: avgDOM < 30 ? 'positive' : avgDOM < 60 ? 'neutral' : 'caution'
  });

  // Insight 4: Market conditions
  if (marketData) {
    const { inventoryMonths, mortgageRate } = marketData;
    
    if (inventoryMonths) {
      insights.push({
        category: 'Supply & Demand',
        icon: '📦',
        text: `${inventoryMonths} months of inventory indicates ${inventoryMonths < 4 ? "a seller's" : inventoryMonths > 6 ? "a buyer's" : "a balanced"} market.`,
        impact: inventoryMonths < 4 ? 'seller-favorable' : inventoryMonths > 6 ? 'buyer-favorable' : 'balanced'
      });
    }

    if (mortgageRate) {
      insights.push({
        category: 'Financing Climate',
        icon: '💳',
        text: `Current mortgage rates at ${mortgageRate}% ${mortgageRate < 6 ? 'support strong' : mortgageRate < 7.5 ? 'allow moderate' : 'may limit'} buyer purchasing power.`,
        impact: mortgageRate < 6 ? 'positive' : mortgageRate < 7.5 ? 'neutral' : 'caution'
      });
    }
  }

  return insights;
};

/**
 * Generate AI email for different purposes
 * @param {string} emailType - Type of email ('new_listing', 'market_update', 'cma_report')
 * @param {Object} data - Email context data
 * @returns {Object} Email subject and body
 */
export const generateAIEmail = (emailType, data = {}) => {
  const { address = '[Property Address]', price = '[Price]', month = new Date().toLocaleString('default', { month: 'long' }), year = new Date().getFullYear() } = data;

  const templates = {
    new_listing: {
      subject: `🏡 Just Listed: ${address}`,
      body: `Hello {{firstName}},

I wanted to personally reach out about an exciting new listing that just hit the market!

📍 **Property**: ${address}
💰 **Price**: ${price}

This property offers exceptional value in today's market. Key highlights include:
• Prime location
• Move-in ready condition
• Competitive pricing
• Strong investment potential

I'd love to arrange a private showing for you. Properties like this don't stay available long in our current market.

Are you available this week to take a look?

Best regards,
{{agentName}}`
    },

    market_update: {
      subject: `📊 ${month} ${year} Market Update`,
      body: `Hello {{firstName}},

Your ${month} ${year} Market Update is here!

## Market Snapshot
The real estate market continues to show strong fundamentals this month:

📈 **Price Trends**: Steady appreciation
⚡ **Activity Level**: Robust buyer interest
🏡 **Inventory**: Competitive conditions
💰 **Financing**: Favorable rates available

## What This Means for You
${data.isSellerLead ? 'Now is an excellent time to list - buyer demand remains strong!' : 'Quality properties are moving quickly - staying alert to new listings is key!'}

I'm here to help you navigate these market conditions. Let's schedule a time to discuss your specific situation and goals.

Would you like to chat this week?

Best regards,
{{agentName}}`
    },

    cma_report: {
      subject: `📊 Your Property Analysis for ${address}`,
      body: `Hello {{firstName}},

Your comprehensive Comparative Market Analysis is complete!

## Executive Summary
Property: ${address}
Estimated Value: ${price}
Analysis Date: ${new Date().toLocaleDateString()}

I've prepared a detailed report that includes:
✓ Comparable property analysis
✓ Market trend evaluation
✓ Pricing recommendations
✓ Strategic insights

The analysis shows your property is well-positioned in the current market. I've identified several key factors that support optimal pricing.

📎 **Full Report Attached**

I'd love to walk you through these findings and answer any questions. When's a good time to connect?

Best regards,
{{agentName}}`
    }
  };

  return templates[emailType] || {
    subject: 'Real Estate Update',
    body: 'Hello! I have some important information to share with you about the market.'
  };
};

/**
 * Generate mock AI response for chat/questions
 * @param {string} question - User question
 * @returns {string} AI response
 */
export const generateMockAIResponse = (question) => {
  const lowerQ = question.toLowerCase();

  if (lowerQ.includes('value') || lowerQ.includes('price')) {
    return 'Based on the comparable properties analyzed, the estimated market value falls within the range shown in the prediction panel. This value considers recent sales, property characteristics, and current market conditions. The confidence score indicates the reliability of this estimate based on data quality and market consistency.';
  }

  if (lowerQ.includes('market') || lowerQ.includes('trend')) {
    return 'Current market trends show dynamic activity. The analysis incorporates days on market, price movements, and supply levels to determine market direction. Review the recommendations section for specific insights about timing and positioning strategies.';
  }

  if (lowerQ.includes('comparable') || lowerQ.includes('comp')) {
    return 'Comparable properties are selected based on location proximity, property characteristics similarity, and recent sale dates. Adjustments are applied for differences in size, condition, features, and timing to ensure accurate comparison. More comparables generally increase confidence in the valuation.';
  }

  return "I'm an AI assistant for your CMA analysis. I can help explain valuations, market trends, and provide recommendations based on your comparable properties. What specific aspect of the CMA would you like to discuss?";
};

export default {
  generateAIReport,
  generateAIDescription,
  generateAIInsights,
  generateAIEmail,
  generateMockAIResponse
};

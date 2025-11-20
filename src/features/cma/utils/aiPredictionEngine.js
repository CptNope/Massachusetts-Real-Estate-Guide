/**
 * AI Prediction Engine with Historical Market Data Integration
 * Combines CMA analysis with real market trends from FRED
 */

import { getMarketDataSets, calculateTrend } from './historicalData';
import { generateRecommendations } from './recommendations';
import { marketData as currentMarketData } from './marketData';

/**
 * Enhanced AI prediction with historical market data
 * @param {Array} adjustedComps - Adjusted comparable properties
 * @param {Object} marketData - Optional market data (fetched if not provided)
 * @returns {Promise<Object>} Enhanced prediction object
 */
export const generateEnhancedPrediction = async (adjustedComps, providedMarketData = null) => {
  if (!adjustedComps || adjustedComps.length === 0) {
    throw new Error('No comparables provided');
  }

  // Fetch historical market data (or use provided)
  let historicalData = providedMarketData;
  let trends = {};
  
  try {
    if (!historicalData) {
      console.log('Fetching historical market data...');
      historicalData = await getMarketDataSets(2); // 2 years of data
    }
    
    // Calculate trends for each metric
    trends = {
      mortgageRates: calculateTrend(historicalData.mortgageRates || []),
      medianPrices: calculateTrend(historicalData.medianPrices || []),
      monthsSupply: calculateTrend(historicalData.monthsSupply || []),
      housingStarts: calculateTrend(historicalData.housingStarts || []),
      unemploymentMA: calculateTrend(historicalData.unemploymentMA || [])
    };
  } catch (error) {
    console.warn('Failed to fetch historical data, using fallback:', error);
    trends = getFallbackTrends();
  }

  // Basic calculations from comps
  const prices = adjustedComps.map(c => c.adjustedPrice);
  const avgPrice = prices.reduce((sum, p) => sum + p, 0) / prices.length;
  const avgDOM = adjustedComps.reduce((sum, c) => sum + parseFloat(c.dom || 30), 0) / adjustedComps.length;
  
  // Calculate base confidence
  const variance = Math.max(...prices) - Math.min(...prices);
  const variancePercent = (variance / avgPrice) * 100;
  let baseConfidence = 100 - Math.min(variancePercent, 50);
  
  // Adjust confidence based on comp count
  if (adjustedComps.length < 3) baseConfidence *= 0.7;
  else if (adjustedComps.length >= 5) baseConfidence = Math.min(baseConfidence * 1.1, 100);
  
  // Determine market trend from historical data
  const marketTrend = determineMarketTrend(trends, avgDOM);
  
  // Calculate market-adjusted multipliers
  const multipliers = calculateMarketMultipliers(trends, currentMarketData);
  
  // Generate predictions with market adjustments
  const predictions = {
    current: Math.round(avgPrice),
    threeMonth: Math.round(avgPrice * multipliers.threeMonth),
    sixMonth: Math.round(avgPrice * multipliers.sixMonth),
    twelveMonth: Math.round(avgPrice * multipliers.twelveMonth),
    seasonalAdjusted: Math.round(avgPrice * currentMarketData.seasonalFactor)
  };
  
  // Calculate investment metrics with market context
  const annualAppreciation = ((multipliers.twelveMonth - 1) * 100).toFixed(2);
  const monthlyAppreciation = (annualAppreciation / 12).toFixed(2);
  
  // Calculate risk level with market data
  const riskLevel = calculateRiskLevel(variancePercent, trends, adjustedComps.length);
  
  // Generate market-aware recommendations
  const recommendations = generateRecommendations(
    marketTrend,
    avgDOM,
    baseConfidence,
    riskLevel,
    currentMarketData
  );
  
  // Add data-driven recommendations
  const dataRecommendations = generateDataDrivenRecommendations(trends, predictions);
  
  return {
    currentValue: predictions.current,
    predictedValue: predictions.threeMonth,
    threeMonth: predictions.threeMonth,
    sixMonth: predictions.sixMonth,
    twelveMonth: predictions.twelveMonth,
    seasonalAdjusted: predictions.seasonalAdjusted,
    trend: marketTrend,
    confidence: Math.round(baseConfidence),
    factors: {
      compsAnalyzed: adjustedComps.length,
      priceRange: Math.max(...prices) - Math.min(...prices),
      avgDOM: Math.round(avgDOM),
      pricePerSqft: adjustedComps.reduce((sum, c) => sum + (c.adjustedPrice / parseInt(c.sqft)), 0) / adjustedComps.length,
      marketVelocity: avgDOM < 30 ? 'fast' : avgDOM > 60 ? 'slow' : 'moderate',
      competitionLevel: avgDOM < 20 ? 'high' : avgDOM > 45 ? 'low' : 'moderate',
      priceVariation: variancePercent.toFixed(2),
      riskLevel: riskLevel
    },
    investment: {
      annualAppreciation: parseFloat(annualAppreciation),
      monthlyAppreciation: parseFloat(monthlyAppreciation),
      projectedEquity: predictions.twelveMonth - avgPrice
    },
    marketContext: {
      mortgageRate: trends.mortgageRates.current || currentMarketData.mortgageRate,
      mortgageRateTrend: trends.mortgageRates.changePercent || 0,
      medianPrice: trends.medianPrices.current || currentMarketData.medianPrice,
      medianPriceTrend: trends.medianPrices.changePercent || 0,
      inventoryMonths: trends.monthsSupply.current || currentMarketData.inventoryMonths,
      inventoryTrend: trends.monthsSupply.direction,
      marketDays: Math.round(avgDOM),
      affordabilityIndex: currentMarketData.affordabilityIndex,
      buyerDemand: currentMarketData.buyerDemand,
      seasonalFactor: ((currentMarketData.seasonalFactor - 1) * 100).toFixed(1),
      dataSource: 'FRED + MLS Analysis'
    },
    historicalTrends: {
      mortgageRates: trends.mortgageRates,
      homePrices: trends.medianPrices,
      inventory: trends.monthsSupply,
      construction: trends.housingStarts,
      employment: trends.unemploymentMA
    },
    recommendations: [...recommendations, ...dataRecommendations],
    marketStrength: calculateMarketStrength(trends, avgDOM),
    dataQuality: {
      historical: !!historicalData,
      confidence: baseConfidence,
      compCount: adjustedComps.length,
      dataAge: 'Current'
    }
  };
};

/**
 * Determine overall market trend from historical data
 */
const determineMarketTrend = (trends, avgDOM) => {
  let score = 0;
  
  // Mortgage rates falling = positive for market
  if (trends.mortgageRates.direction === 'falling') score += 2;
  else if (trends.mortgageRates.direction === 'rising') score -= 2;
  
  // Home prices rising = positive
  if (trends.medianPrices.direction === 'rising') score += 2;
  else if (trends.medianPrices.direction === 'falling') score -= 2;
  
  // Low inventory = positive for sellers
  if (trends.monthsSupply.current && trends.monthsSupply.current < 4) score += 1;
  else if (trends.monthsSupply.current && trends.monthsSupply.current > 6) score -= 1;
  
  // Fast DOM = hot market
  if (avgDOM < 30) score += 1;
  else if (avgDOM > 60) score -= 1;
  
  // Low unemployment = healthy market
  if (trends.unemploymentMA.direction === 'falling') score += 1;
  
  if (score >= 3) return 'rising';
  if (score <= -3) return 'falling';
  return 'stable';
};

/**
 * Calculate market-adjusted multipliers for predictions
 */
const calculateMarketMultipliers = (trends, marketData) => {
  let base3mo = 1.0;
  let base6mo = 1.0;
  let base12mo = 1.0;
  
  // Adjust for mortgage rate trends
  if (trends.mortgageRates.direction === 'falling') {
    const rateImpact = Math.abs(trends.mortgageRates.changePercent) / 100;
    base3mo *= (1 + rateImpact * 0.5);
    base6mo *= (1 + rateImpact * 0.8);
    base12mo *= (1 + rateImpact * 1.2);
  } else if (trends.mortgageRates.direction === 'rising') {
    const rateImpact = Math.abs(trends.mortgageRates.changePercent) / 100;
    base3mo *= (1 - rateImpact * 0.3);
    base6mo *= (1 - rateImpact * 0.5);
    base12mo *= (1 - rateImpact * 0.8);
  }
  
  // Adjust for price trends
  if (trends.medianPrices.changePercent) {
    const priceGrowth = trends.medianPrices.changePercent / 100;
    base12mo *= (1 + priceGrowth * 0.5); // Half the historical growth
  }
  
  // Adjust for inventory
  if (trends.monthsSupply.current) {
    if (trends.monthsSupply.current < 3) {
      base3mo *= 1.02;
      base6mo *= 1.04;
      base12mo *= 1.06;
    } else if (trends.monthsSupply.current > 6) {
      base3mo *= 0.99;
      base6mo *= 0.98;
      base12mo *= 0.96;
    }
  }
  
  // Apply seasonal adjustment
  base3mo *= marketData.seasonalFactor;
  
  return {
    threeMonth: base3mo,
    sixMonth: base6mo,
    twelveMonth: base12mo
  };
};

/**
 * Calculate risk level with market context
 */
const calculateRiskLevel = (variancePercent, trends, compCount) => {
  let risk = 'moderate';
  
  if (variancePercent > 20 || compCount < 3) {
    risk = 'high';
  } else if (variancePercent < 10 && compCount >= 5) {
    risk = 'low';
  }
  
  // Increase risk if market is very volatile
  if (trends.medianPrices.changePercent && Math.abs(trends.medianPrices.changePercent) > 10) {
    risk = risk === 'low' ? 'moderate' : 'high';
  }
  
  return risk;
};

/**
 * Generate recommendations based on historical data trends
 */
const generateDataDrivenRecommendations = (trends, predictions) => {
  const recs = [];
  
  // Mortgage rate insights
  if (trends.mortgageRates.direction === 'falling' && Math.abs(trends.mortgageRates.changePercent) > 5) {
    recs.push({
      type: 'data-driven',
      icon: '📉',
      text: `Mortgage rates down ${Math.abs(trends.mortgageRates.changePercent).toFixed(1)}% (6mo) - buyer purchasing power increasing`,
      priority: 'high',
      source: 'FRED Data'
    });
  } else if (trends.mortgageRates.direction === 'rising' && Math.abs(trends.mortgageRates.changePercent) > 5) {
    recs.push({
      type: 'data-driven',
      icon: '📈',
      text: `Mortgage rates up ${Math.abs(trends.mortgageRates.changePercent).toFixed(1)}% (6mo) - may cool buyer demand`,
      priority: 'high',
      source: 'FRED Data'
    });
  }
  
  // Price trend insights
  if (trends.medianPrices.direction === 'rising' && trends.medianPrices.changePercent > 5) {
    recs.push({
      type: 'data-driven',
      icon: '📊',
      text: `Home prices rising ${trends.medianPrices.changePercent.toFixed(1)}% (6mo) - strong appreciation trend`,
      priority: 'medium',
      source: 'FRED Data'
    });
  }
  
  // Inventory insights
  if (trends.monthsSupply.current) {
    if (trends.monthsSupply.current < 3) {
      recs.push({
        type: 'data-driven',
        icon: '📦',
        text: `Low inventory (${trends.monthsSupply.current.toFixed(1)}mo supply) - expect competitive offers`,
        priority: 'high',
        source: 'FRED Data'
      });
    } else if (trends.monthsSupply.current > 6) {
      recs.push({
        type: 'data-driven',
        icon: '📦',
        text: `High inventory (${trends.monthsSupply.current.toFixed(1)}mo supply) - more negotiating power for buyers`,
        priority: 'medium',
        source: 'FRED Data'
      });
    }
  }
  
  // Employment insights
  if (trends.unemploymentMA.direction === 'falling') {
    recs.push({
      type: 'data-driven',
      icon: '💼',
      text: 'MA unemployment falling - strong economic fundamentals support housing demand',
      priority: 'medium',
      source: 'FRED Data'
    });
  }
  
  return recs;
};

/**
 * Calculate overall market strength score
 */
const calculateMarketStrength = (trends, avgDOM) => {
  let score = 50; // Base score
  
  // Positive indicators
  if (trends.mortgageRates.direction === 'falling') score += 10;
  if (trends.medianPrices.direction === 'rising') score += 10;
  if (trends.monthsSupply.current && trends.monthsSupply.current < 4) score += 10;
  if (avgDOM < 30) score += 10;
  if (trends.unemploymentMA.direction === 'falling') score += 10;
  if (trends.housingStarts.direction === 'rising') score += 5;
  
  // Negative indicators
  if (trends.mortgageRates.direction === 'rising') score -= 10;
  if (trends.medianPrices.direction === 'falling') score -= 10;
  if (trends.monthsSupply.current && trends.monthsSupply.current > 6) score -= 10;
  if (avgDOM > 60) score -= 10;
  if (trends.unemploymentMA.direction === 'rising') score -= 10;
  
  return Math.max(0, Math.min(100, score));
};

/**
 * Get fallback trends if API fails
 */
const getFallbackTrends = () => {
  return {
    mortgageRates: { direction: 'stable', changePercent: 0, current: 6.89 },
    medianPrices: { direction: 'stable', changePercent: 0, current: 625000 },
    monthsSupply: { direction: 'stable', changePercent: 0, current: 3.5 },
    housingStarts: { direction: 'stable', changePercent: 0, current: 1500 },
    unemploymentMA: { direction: 'stable', changePercent: 0, current: 3.2 }
  };
};

export default generateEnhancedPrediction;

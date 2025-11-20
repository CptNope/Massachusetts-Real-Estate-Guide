import React from 'react';

/**
 * Visual Price Comparison Chart Component
 * Displays a bar chart comparing adjusted prices of all comparables
 */
export const PriceComparisonChart = ({ comps, avgPrice, mode }) => {
  const maxPrice = Math.max(...comps.map(c => c.adjustedPrice));
  const minPrice = Math.min(...comps.map(c => c.adjustedPrice));
  
  return (
    <div className="price-comparison-chart">
      <h4>📊 Visual Price Comparison</h4>
      <div className="chart-container">
        <div className="chart-y-axis">
          <span className="y-label">${(maxPrice / 1000).toFixed(0)}K</span>
          <span className="y-label">${(avgPrice / 1000).toFixed(0)}K</span>
          <span className="y-label">${(minPrice / 1000).toFixed(0)}K</span>
        </div>
        <div className="chart-bars">
          {comps.map(comp => {
            const height = ((comp.adjustedPrice - minPrice) / (maxPrice - minPrice)) * 100;
            const isAvg = Math.abs(comp.adjustedPrice - avgPrice) / avgPrice < 0.02;
            return (
              <div key={comp.id} className="chart-bar-wrapper">
                <div className="chart-bar-container">
                  <div 
                    className={`chart-bar ${isAvg ? 'near-avg' : ''}`}
                    style={{ height: `${Math.max(height, 5)}%` }}
                    title={`$${comp.adjustedPrice.toLocaleString()}`}
                  >
                    <span className="bar-value">${(comp.adjustedPrice / 1000).toFixed(0)}K</span>
                  </div>
                </div>
                <span className="bar-label">#{comp.id}</span>
              </div>
            );
          })}
        </div>
        {mode === 'learning' && (
          <div className="chart-legend">
            <span className="legend-item">📊 Taller bars = Higher adjusted value</span>
            <span className="legend-item">🎯 Near average = More reliable</span>
          </div>
        )}
      </div>
    </div>
  );
};

export default PriceComparisonChart;

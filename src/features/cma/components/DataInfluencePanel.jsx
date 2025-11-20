import React from 'react';

/**
 * Data Influence Panel
 * Shows how historical market data influenced the AI prediction
 */
export const DataInfluencePanel = ({ prediction }) => {
  if (!prediction || !prediction.historicalTrends) {
    return null;
  }

  const { historicalTrends, marketStrength, marketContext } = prediction;

  const getTrendIcon = (direction) => {
    if (direction === 'rising') return '📈';
    if (direction === 'falling') return '📉';
    return '➡️';
  };

  const getTrendClass = (direction) => {
    if (direction === 'rising') return 'trend-positive';
    if (direction === 'falling') return 'trend-negative';
    return 'trend-neutral';
  };

  const getStrengthLabel = (score) => {
    if (score >= 75) return { label: 'Very Strong', class: 'strength-very-strong', icon: '🔥🔥' };
    if (score >= 60) return { label: 'Strong', class: 'strength-strong', icon: '🔥' };
    if (score >= 40) return { label: 'Moderate', class: 'strength-moderate', icon: '⚖️' };
    if (score >= 25) return { label: 'Weak', class: 'strength-weak', icon: '📉' };
    return { label: 'Very Weak', class: 'strength-very-weak', icon: '❄️' };
  };

  const strengthInfo = getStrengthLabel(marketStrength);

  // Filter data-driven recommendations
  const dataRecs = prediction.recommendations?.filter(rec => rec.source === 'FRED Data') || [];

  return (
    <div className="data-influence-panel">
      <div className="panel-header">
        <h4>📊 Market Data Influence</h4>
        <p className="panel-subtitle">
          This prediction incorporates real-time data from Federal Reserve Economic Data (FRED)
        </p>
      </div>

      {/* Market Strength Score */}
      <div className="market-strength-card">
        <div className="strength-header">
          <span className="strength-label">Overall Market Strength</span>
          <div className={`strength-score ${strengthInfo.class}`}>
            <span className="score-icon">{strengthInfo.icon}</span>
            <span className="score-value">{marketStrength}/100</span>
            <span className="score-label">{strengthInfo.label}</span>
          </div>
        </div>
        <div className="strength-bar">
          <div 
            className={`strength-fill ${strengthInfo.class}`}
            style={{ width: `${marketStrength}%` }}
          />
        </div>
      </div>

      {/* Historical Trends Grid */}
      <div className="trends-grid">
        {/* Mortgage Rates */}
        {historicalTrends.mortgageRates && (
          <div className={`trend-card ${getTrendClass(historicalTrends.mortgageRates.direction)}`}>
            <div className="trend-icon">{getTrendIcon(historicalTrends.mortgageRates.direction)}</div>
            <div className="trend-content">
              <h5>Mortgage Rates</h5>
              <div className="trend-value">
                {historicalTrends.mortgageRates.current?.toFixed(2)}%
              </div>
              <div className="trend-change">
                {historicalTrends.mortgageRates.changePercent > 0 ? '+' : ''}
                {historicalTrends.mortgageRates.changePercent?.toFixed(1)}% (6mo)
              </div>
            </div>
          </div>
        )}

        {/* Home Prices */}
        {historicalTrends.homePrices && (
          <div className={`trend-card ${getTrendClass(historicalTrends.homePrices.direction)}`}>
            <div className="trend-icon">{getTrendIcon(historicalTrends.homePrices.direction)}</div>
            <div className="trend-content">
              <h5>Home Prices</h5>
              <div className="trend-value">
                ${(historicalTrends.homePrices.current / 1000).toFixed(0)}K
              </div>
              <div className="trend-change">
                {historicalTrends.homePrices.changePercent > 0 ? '+' : ''}
                {historicalTrends.homePrices.changePercent?.toFixed(1)}% (6mo)
              </div>
            </div>
          </div>
        )}

        {/* Inventory */}
        {historicalTrends.inventory && (
          <div className={`trend-card ${getTrendClass(historicalTrends.inventory.direction)}`}>
            <div className="trend-icon">{getTrendIcon(historicalTrends.inventory.direction)}</div>
            <div className="trend-content">
              <h5>Inventory Supply</h5>
              <div className="trend-value">
                {historicalTrends.inventory.current?.toFixed(1)} mo
              </div>
              <div className="trend-change">
                {historicalTrends.inventory.changePercent > 0 ? '+' : ''}
                {historicalTrends.inventory.changePercent?.toFixed(1)}% (6mo)
              </div>
            </div>
          </div>
        )}

        {/* Employment */}
        {historicalTrends.employment && (
          <div className={`trend-card ${getTrendClass(historicalTrends.employment.direction)}`}>
            <div className="trend-icon">{getTrendIcon(historicalTrends.employment.direction)}</div>
            <div className="trend-content">
              <h5>MA Unemployment</h5>
              <div className="trend-value">
                {historicalTrends.employment.current?.toFixed(1)}%
              </div>
              <div className="trend-change">
                {historicalTrends.employment.changePercent > 0 ? '+' : ''}
                {historicalTrends.employment.changePercent?.toFixed(1)}% (6mo)
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Data-Driven Recommendations */}
      {dataRecs.length > 0 && (
        <div className="data-recommendations">
          <h5>💡 Insights from Market Data</h5>
          <div className="recommendations-list">
            {dataRecs.map((rec, index) => (
              <div key={index} className={`recommendation-item priority-${rec.priority}`}>
                <span className="rec-icon">{rec.icon}</span>
                <div className="rec-content">
                  <p className="rec-text">{rec.text}</p>
                  <span className="rec-source">Source: {rec.source}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Data Quality Badge */}
      <div className="data-quality-badge">
        <span className="quality-icon">✓</span>
        <span className="quality-text">
          Enhanced with {prediction.dataQuality?.historical ? 'live' : 'simulated'} FRED data • 
          {prediction.factors?.compsAnalyzed} comparables • 
          {prediction.confidence}% confidence
        </span>
      </div>
    </div>
  );
};

export default DataInfluencePanel;

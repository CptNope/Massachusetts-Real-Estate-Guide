import React, { useState, useEffect } from 'react';
import { Line } from 'react-chartjs-2';
import { 
  getMarketDataSets, 
  calculateTrend, 
  formatForChart, 
  getChartConfig 
} from '../utils/historicalData';

/**
 * Market History Charts Component
 * Displays historical trends for key market variables from public data sources
 */
export const MarketHistoryCharts = ({ yearsBack = 5, onDataLoaded }) => {
  const [marketData, setMarketData] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedMetrics, setSelectedMetrics] = useState([
    'mortgageRates',
    'medianPrices',
    'monthsSupply'
  ]);

  // Fetch market data on mount
  useEffect(() => {
    fetchMarketData();
  }, [yearsBack]);

  const fetchMarketData = async () => {
    setLoading(true);
    setError(null);
    
    try {
      const data = await getMarketDataSets(yearsBack);
      setMarketData(data);
      
      if (onDataLoaded) {
        onDataLoaded(data);
      }
    } catch (err) {
      console.error('Failed to fetch market data:', err);
      setError('Failed to load market data. Showing simulated data.');
    } finally {
      setLoading(false);
    }
  };

  const toggleMetric = (metric) => {
    setSelectedMetrics(prev => 
      prev.includes(metric)
        ? prev.filter(m => m !== metric)
        : [...prev, metric]
    );
  };

  const renderChart = (metric) => {
    const data = marketData[metric];
    if (!data || data.length === 0) return null;

    const config = getChartConfig(metric);
    const trend = calculateTrend(data);
    const chartData = formatForChart(data, config.title, config.color);

    const options = {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          display: true,
          position: 'top',
          labels: {
            color: 'var(--text-primary)',
            font: { size: 12 }
          }
        },
        tooltip: {
          mode: 'index',
          intersect: false,
          callbacks: {
            label: (context) => {
              let label = context.dataset.label || '';
              if (label) label += ': ';
              
              if (config.format === 'currency') {
                label += '$' + context.parsed.y.toLocaleString();
              } else {
                label += context.parsed.y.toFixed(2) + config.unit;
              }
              
              return label;
            }
          }
        }
      },
      scales: {
        x: {
          grid: {
            color: 'rgba(128, 128, 128, 0.1)'
          },
          ticks: {
            color: 'var(--text-secondary)',
            maxRotation: 45,
            minRotation: 45
          }
        },
        y: {
          grid: {
            color: 'rgba(128, 128, 128, 0.1)'
          },
          ticks: {
            color: 'var(--text-secondary)',
            callback: (value) => {
              if (config.format === 'currency') {
                return '$' + (value / 1000).toFixed(0) + 'K';
              }
              return value.toFixed(1) + (config.unit === '%' ? config.unit : '');
            }
          },
          title: {
            display: true,
            text: config.yAxisLabel,
            color: 'var(--text-secondary)'
          }
        }
      }
    };

    return (
      <div key={metric} className="market-chart-card">
        <div className="chart-header">
          <div className="chart-title">
            <span className="chart-icon">{config.icon}</span>
            <h4>{config.title}</h4>
          </div>
          <div className={`trend-indicator trend-${trend.direction}`}>
            {trend.direction === 'rising' && '📈'}
            {trend.direction === 'falling' && '📉'}
            {trend.direction === 'stable' && '➡️'}
            <span className="trend-text">
              {trend.changePercent > 0 ? '+' : ''}{trend.changePercent.toFixed(1)}% (6mo)
            </span>
          </div>
        </div>
        
        <div className="chart-stats">
          <div className="stat-item">
            <span className="stat-label">Current</span>
            <span className="stat-value">
              {config.format === 'currency' 
                ? `$${trend.current?.toLocaleString()}` 
                : `${trend.current?.toFixed(2)}${config.unit}`}
            </span>
          </div>
          <div className="stat-item">
            <span className="stat-label">Change</span>
            <span className={`stat-value stat-${trend.direction}`}>
              {trend.change > 0 ? '+' : ''}{config.format === 'currency' 
                ? `$${trend.change.toLocaleString()}` 
                : `${trend.change.toFixed(2)}${config.unit}`}
            </span>
          </div>
        </div>

        <div className="chart-container">
          <Line data={chartData} options={options} />
        </div>

        <div className="chart-footer">
          <p className="data-source">
            📊 Source: Federal Reserve Economic Data (FRED)
          </p>
        </div>
      </div>
    );
  };

  const availableMetrics = [
    { id: 'mortgageRates', label: '📈 Mortgage Rates', color: '#ef4444' },
    { id: 'medianPrices', label: '🏠 Home Prices', color: '#10b981' },
    { id: 'monthsSupply', label: '📦 Inventory', color: '#f59e0b' },
    { id: 'housingStarts', label: '🏗️ Housing Starts', color: '#8b5cf6' },
    { id: 'unemploymentMA', label: '💼 Unemployment', color: '#ec4899' }
  ];

  if (loading) {
    return (
      <div className="market-history-loading">
        <div className="loading-spinner-large">⏳</div>
        <p>Loading historical market data from FRED...</p>
        <p className="loading-hint">This may take a few seconds</p>
      </div>
    );
  }

  return (
    <div className="market-history-charts">
      <div className="market-history-header">
        <div className="header-content">
          <h3>📊 Historical Market Trends</h3>
          <p className="header-subtitle">
            Real data from Federal Reserve Economic Data (FRED) • Last {yearsBack} years
          </p>
        </div>
        
        <button 
          className="refresh-btn" 
          onClick={fetchMarketData}
          title="Refresh data"
        >
          🔄 Refresh
        </button>
      </div>

      {error && (
        <div className="market-data-notice warning">
          ⚠️ {error}
        </div>
      )}

      {/* Metric Selector */}
      <div className="metric-selector">
        <label className="selector-label">Select Metrics to Display:</label>
        <div className="metric-chips">
          {availableMetrics.map(metric => (
            <button
              key={metric.id}
              className={`metric-chip ${selectedMetrics.includes(metric.id) ? 'active' : ''}`}
              onClick={() => toggleMetric(metric.id)}
              style={{ 
                '--chip-color': metric.color,
                borderColor: selectedMetrics.includes(metric.id) ? metric.color : 'var(--border-color)'
              }}
            >
              {metric.label}
              {selectedMetrics.includes(metric.id) && ' ✓'}
            </button>
          ))}
        </div>
      </div>

      {/* Charts Grid */}
      <div className="market-charts-grid">
        {selectedMetrics.map(metric => renderChart(metric))}
      </div>

      {selectedMetrics.length === 0 && (
        <div className="market-data-notice">
          👆 Select at least one metric above to view historical trends
        </div>
      )}

      {/* Data Info */}
      <div className="market-data-info">
        <h4>📚 About This Data</h4>
        <ul>
          <li><strong>Source:</strong> Federal Reserve Economic Data (FRED) - Official US government data</li>
          <li><strong>Update Frequency:</strong> Data is typically updated monthly or quarterly</li>
          <li><strong>Coverage:</strong> National and Massachusetts-specific indicators</li>
          <li><strong>Free & Public:</strong> No API key required, accessible to everyone</li>
        </ul>
      </div>
    </div>
  );
};

export default MarketHistoryCharts;

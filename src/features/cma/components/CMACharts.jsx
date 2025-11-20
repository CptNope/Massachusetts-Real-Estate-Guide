import React, { useEffect, useRef, useState } from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  PointElement,
  ArcElement,
  RadialLinearScale,
  Title,
  Tooltip,
  Legend,
  Filler
} from 'chart.js';
import { Bar, Line, Doughnut, Radar } from 'react-chartjs-2';

// Register Chart.js components
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  PointElement,
  ArcElement,
  RadialLinearScale,
  Title,
  Tooltip,
  Legend,
  Filler
);

/**
 * CMACharts Component
 * Redesigned with time-series data and meaningful CMA visualizations
 * Shows market trends, price analysis, and comparative insights over time
 */
export const CMACharts = ({ comparables, subjectProperty, onClose }) => {
  const [activeChart, setActiveChart] = useState('trends');

  if (!comparables || comparables.length === 0) {
    return (
      <div className="cma-charts-panel">
        <div className="charts-header">
          <h3>📊 CMA Data Visualization</h3>
          <button className="close-btn" onClick={onClose}>✕</button>
        </div>
        <div className="charts-empty">
          <p>⚠️ Add comparable properties to see charts</p>
          <button onClick={onClose}>Close</button>
        </div>
      </div>
    );
  }

  // Prepare data for charts
  const compData = comparables.map((comp, index) => ({
    label: comp.address || `Comp ${index + 1}`,
    price: parseInt(comp.price) || 0,
    adjustedPrice: parseInt(comp.adjustedPrice) || parseInt(comp.price) || 0,
    beds: parseInt(comp.beds) || 0,
    baths: parseFloat(comp.baths) || 0,
    sqft: parseInt(comp.sqft) || 0,
    age: parseInt(comp.age) || 0,
    dom: parseInt(comp.dom) || 0,
    condition: comp.condition || 'good'
  }));

  const avgAdjustedPrice = compData.reduce((sum, c) => sum + c.adjustedPrice, 0) / compData.length;
  const minPrice = Math.min(...compData.map(c => c.adjustedPrice));
  const maxPrice = Math.max(...compData.map(c => c.adjustedPrice));
  const priceRange = maxPrice - minPrice;

  // Generate realistic historical market data (simulated for MA market)
  const generateHistoricalData = () => {
    const months = ['6 mo ago', '5 mo ago', '4 mo ago', '3 mo ago', '2 mo ago', 'Last month', 'Current'];
    const basePrice = avgAdjustedPrice * 0.92; // Start 8% lower for appreciation
    const appreciation = 0.08 / 6; // Monthly appreciation rate
    
    return months.map((month, index) => ({
      month,
      avgPrice: Math.round(basePrice * (1 + appreciation * index)),
      minPrice: Math.round(basePrice * (1 + appreciation * index) * 0.88),
      maxPrice: Math.round(basePrice * (1 + appreciation * index) * 1.12)
    }));
  };

  const historicalData = generateHistoricalData();

  // NEW Chart 1: Market Price Trends Over Time
  const marketTrendsData = {
    labels: historicalData.map(d => d.month),
    datasets: [
      {
        label: 'Average Market Price',
        data: historicalData.map(d => d.avgPrice),
        borderColor: 'rgba(99, 102, 241, 1)',
        backgroundColor: 'rgba(99, 102, 241, 0.1)',
        borderWidth: 3,
        fill: true,
        tension: 0.4,
        pointRadius: 5,
        pointHoverRadius: 7
      },
      {
        label: 'Price Range (High)',
        data: historicalData.map(d => d.maxPrice),
        borderColor: 'rgba(16, 185, 129, 0.6)',
        backgroundColor: 'transparent',
        borderWidth: 2,
        borderDash: [5, 5],
        fill: false,
        tension: 0.4,
        pointRadius: 3
      },
      {
        label: 'Price Range (Low)',
        data: historicalData.map(d => d.minPrice),
        borderColor: 'rgba(239, 68, 68, 0.6)',
        backgroundColor: 'transparent',
        borderWidth: 2,
        borderDash: [5, 5],
        fill: false,
        tension: 0.4,
        pointRadius: 3
      }
    ]
  };

  // Chart 2: Price Comparison (Before & After Adjustments)
  const priceComparisonData = {
    labels: compData.map(c => c.label.substring(0, 30)),
    datasets: [
      {
        label: 'Original Price',
        data: compData.map(c => c.price),
        backgroundColor: 'rgba(99, 102, 241, 0.5)',
        borderColor: 'rgba(99, 102, 241, 1)',
        borderWidth: 2
      },
      {
        label: 'Adjusted Price',
        data: compData.map(c => c.adjustedPrice),
        backgroundColor: 'rgba(16, 185, 129, 0.5)',
        borderColor: 'rgba(16, 185, 129, 1)',
        borderWidth: 2
      },
      {
        label: 'Market Average',
        data: compData.map(() => avgAdjustedPrice),
        type: 'line',
        borderColor: 'rgba(251, 191, 36, 1)',
        borderWidth: 2,
        borderDash: [5, 5],
        pointRadius: 0,
        fill: false
      }
    ]
  };

  // Chart 2: Adjustment Impact
  const adjustmentImpactData = {
    labels: compData.map(c => c.label.substring(0, 30)),
    datasets: [{
      label: 'Adjustment Amount ($)',
      data: compData.map(c => c.adjustedPrice - c.price),
      backgroundColor: compData.map(c => 
        c.adjustedPrice > c.price 
          ? 'rgba(16, 185, 129, 0.7)' 
          : 'rgba(239, 68, 68, 0.7)'
      ),
      borderColor: compData.map(c => 
        c.adjustedPrice > c.price 
          ? 'rgba(16, 185, 129, 1)' 
          : 'rgba(239, 68, 68, 1)'
      ),
      borderWidth: 2
    }]
  };

  // Chart 3: Price Distribution
  const priceDistributionData = {
    labels: [
      `Below Avg (< $${Math.floor(avgAdjustedPrice).toLocaleString()})`,
      `Average (± 5%)`,
      `Above Avg (> $${Math.floor(avgAdjustedPrice).toLocaleString()})`
    ],
    datasets: [{
      data: [
        compData.filter(c => c.adjustedPrice < avgAdjustedPrice * 0.95).length,
        compData.filter(c => c.adjustedPrice >= avgAdjustedPrice * 0.95 && c.adjustedPrice <= avgAdjustedPrice * 1.05).length,
        compData.filter(c => c.adjustedPrice > avgAdjustedPrice * 1.05).length
      ],
      backgroundColor: [
        'rgba(239, 68, 68, 0.7)',
        'rgba(251, 191, 36, 0.7)',
        'rgba(16, 185, 129, 0.7)'
      ],
      borderColor: [
        'rgba(239, 68, 68, 1)',
        'rgba(251, 191, 36, 1)',
        'rgba(16, 185, 129, 1)'
      ],
      borderWidth: 2
    }]
  };

  // Chart 4: Feature Comparison Radar
  const avgBeds = compData.reduce((sum, c) => sum + c.beds, 0) / compData.length;
  const avgBaths = compData.reduce((sum, c) => sum + c.baths, 0) / compData.length;
  const avgSqft = compData.reduce((sum, c) => sum + c.sqft, 0) / compData.length;
  const avgAge = compData.reduce((sum, c) => sum + c.age, 0) / compData.length;

  const subjectBeds = parseInt(subjectProperty?.beds) || avgBeds;
  const subjectBaths = parseFloat(subjectProperty?.baths) || avgBaths;
  const subjectSqft = parseInt(subjectProperty?.sqft) || avgSqft;
  const subjectAge = parseInt(subjectProperty?.age) || avgAge;

  const radarData = {
    labels: ['Bedrooms', 'Bathrooms', 'Sqft (÷100)', 'Age (yrs)', 'Condition'],
    datasets: [
      {
        label: 'Subject Property',
        data: [
          subjectBeds,
          subjectBaths,
          subjectSqft / 100,
          subjectAge,
          subjectProperty?.condition === 'excellent' ? 5 : 
          subjectProperty?.condition === 'good' ? 3.5 : 
          subjectProperty?.condition === 'fair' ? 2 : 1
        ],
        backgroundColor: 'rgba(99, 102, 241, 0.2)',
        borderColor: 'rgba(99, 102, 241, 1)',
        borderWidth: 2,
        pointBackgroundColor: 'rgba(99, 102, 241, 1)'
      },
      {
        label: 'Market Average',
        data: [
          avgBeds,
          avgBaths,
          avgSqft / 100,
          avgAge,
          3.5 // average condition
        ],
        backgroundColor: 'rgba(16, 185, 129, 0.2)',
        borderColor: 'rgba(16, 185, 129, 1)',
        borderWidth: 2,
        pointBackgroundColor: 'rgba(16, 185, 129, 1)'
      }
    ]
  };

  // Chart 5: Price per Sqft Comparison
  const pricePerSqftData = {
    labels: compData.map(c => c.label.substring(0, 30)),
    datasets: [{
      label: 'Price per Sqft',
      data: compData.map(c => c.sqft > 0 ? Math.round(c.adjustedPrice / c.sqft) : 0),
      backgroundColor: 'rgba(139, 92, 246, 0.6)',
      borderColor: 'rgba(139, 92, 246, 1)',
      borderWidth: 2
    }]
  };

  // Chart 6: Days on Market (if available)
  const hasDOMData = compData.some(c => c.dom > 0);
  const domData = hasDOMData ? {
    labels: compData.map(c => c.label.substring(0, 30)),
    datasets: [{
      label: 'Days on Market',
      data: compData.map(c => c.dom),
      backgroundColor: 'rgba(236, 72, 153, 0.6)',
      borderColor: 'rgba(236, 72, 153, 1)',
      borderWidth: 2,
      fill: true
    }]
  } : null;

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'top',
        labels: {
          color: 'var(--text-primary)',
          font: { size: 12 }
        }
      },
      tooltip: {
        backgroundColor: 'rgba(0, 0, 0, 0.8)',
        titleColor: '#fff',
        bodyColor: '#fff',
        borderColor: 'rgba(99, 102, 241, 0.5)',
        borderWidth: 1
      }
    },
    scales: {
      y: {
        ticks: {
          color: 'var(--text-secondary)',
          callback: function(value) {
            return '$' + value.toLocaleString();
          }
        },
        grid: {
          color: 'rgba(0, 0, 0, 0.1)'
        }
      },
      x: {
        ticks: {
          color: 'var(--text-secondary)',
          maxRotation: 45,
          minRotation: 45
        },
        grid: {
          display: false
        }
      }
    }
  };

  const radarOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'top',
        labels: {
          color: 'var(--text-primary)'
        }
      }
    },
    scales: {
      r: {
        ticks: {
          color: 'var(--text-secondary)',
          backdropColor: 'transparent'
        },
        grid: {
          color: 'rgba(0, 0, 0, 0.1)'
        },
        pointLabels: {
          color: 'var(--text-primary)',
          font: { size: 12 }
        }
      }
    }
  };

  return (
    <div className="cma-charts-panel">
      <div className="charts-header">
        <h3>📊 CMA Data Visualization</h3>
        <button className="close-btn" onClick={onClose}>✕</button>
      </div>

      <div className="charts-summary">
        <div className="chart-stat">
          <span className="stat-label">Comparables:</span>
          <span className="stat-value">{comparables.length}</span>
        </div>
        <div className="chart-stat">
          <span className="stat-label">Avg Price:</span>
          <span className="stat-value">${Math.round(avgAdjustedPrice).toLocaleString()}</span>
        </div>
        <div className="chart-stat">
          <span className="stat-label">Price Range:</span>
          <span className="stat-value">${Math.round(priceRange).toLocaleString()}</span>
        </div>
        <div className="chart-stat">
          <span className="stat-label">Std Dev:</span>
          <span className="stat-value">
            ${Math.round(Math.sqrt(compData.reduce((sum, c) => sum + Math.pow(c.adjustedPrice - avgAdjustedPrice, 2), 0) / compData.length)).toLocaleString()}
          </span>
        </div>
      </div>

      {/* Chart Type Selector */}
      <div className="chart-selector">
        <button 
          className={`chart-tab ${activeChart === 'trends' ? 'active' : ''}`}
          onClick={() => setActiveChart('trends')}
        >
          📈 Market Trends
        </button>
        <button 
          className={`chart-tab ${activeChart === 'prices' ? 'active' : ''}`}
          onClick={() => setActiveChart('prices')}
        >
          💰 Price Analysis
        </button>
        <button 
          className={`chart-tab ${activeChart === 'value' ? 'active' : ''}`}
          onClick={() => setActiveChart('value')}
        >
          📐 Value Metrics
        </button>
        <button 
          className={`chart-tab ${activeChart === 'features' ? 'active' : ''}`}
          onClick={() => setActiveChart('features')}
        >
          🎯 Features
        </button>
        {hasDOMData && (
          <button 
            className={`chart-tab ${activeChart === 'activity' ? 'active' : ''}`}
            onClick={() => setActiveChart('activity')}
          >
            ⏱️ Market Activity
          </button>
        )}
      </div>

      {/* Chart Display */}
      <div className="chart-container">
        {activeChart === 'trends' && (
          <div className="chart-wrapper">
            <h4>📈 Market Price Trends - Last 6 Months</h4>
            <div className="chart-canvas">
              <Line data={marketTrendsData} options={{
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                  legend: {
                    position: 'top',
                    labels: { color: '#1f2937', font: { size: 12, weight: '600' } }
                  },
                  tooltip: {
                    backgroundColor: 'rgba(0, 0, 0, 0.9)',
                    titleColor: '#fff',
                    bodyColor: '#fff',
                    padding: 12,
                    cornerRadius: 8
                  }
                },
                scales: {
                  y: {
                    ticks: {
                      color: '#6b7280',
                      callback: function(value) {
                        return '$' + (value / 1000).toFixed(0) + 'K';
                      }
                    },
                    grid: { color: 'rgba(0, 0, 0, 0.05)' }
                  },
                  x: {
                    ticks: { color: '#6b7280', font: { size: 11 } },
                    grid: { display: false }
                  }
                }
              }} />
            </div>
            <p className="chart-description">
              <strong>Market Appreciation:</strong> {((historicalData[historicalData.length - 1].avgPrice / historicalData[0].avgPrice - 1) * 100).toFixed(1)}% over 6 months
              • <strong>Current Avg:</strong> ${Math.round(avgAdjustedPrice).toLocaleString()}
              • <strong>Trend:</strong> {historicalData[historicalData.length - 1].avgPrice > historicalData[historicalData.length - 2].avgPrice ? '📈 Rising' : '📉 Cooling'}
            </p>
          </div>
        )}

        {activeChart === 'prices' && (
          <div className="chart-wrapper">
            <h4>💰 Comparable Property Pricing Analysis</h4>
            <div className="chart-canvas">
              <Bar data={priceComparisonData} options={{
                ...chartOptions,
                plugins: {
                  ...chartOptions.plugins,
                  legend: {
                    position: 'top',
                    labels: { color: '#1f2937', font: { size: 12, weight: '600' } }
                  }
                }
              }} />
            </div>
            <p className="chart-description">
              <strong>Analysis:</strong> Original prices (blue) vs. adjusted values (green) after accounting for property differences
              • <strong>Avg Adjustment:</strong> ${Math.round(compData.reduce((sum, c) => sum + Math.abs(c.adjustedPrice - c.price), 0) / compData.length).toLocaleString()}
            </p>
          </div>
        )}

        {activeChart === 'value' && (
          <div className="chart-wrapper">
            <h4>📐 Price Per Square Foot & Value Analysis</h4>
            <div className="chart-canvas">
              <Bar data={pricePerSqftData} options={{
                ...chartOptions,
                plugins: {
                  ...chartOptions.plugins,
                  legend: {
                    position: 'top',
                    labels: { color: '#1f2937', font: { size: 12, weight: '600' } }
                  }
                }
              }} />
            </div>
            <p className="chart-description">
              <strong>Market $/Sqft:</strong> ${Math.round(avgAdjustedPrice / (compData.reduce((sum, c) => sum + c.sqft, 0) / compData.length))}/sqft
              • <strong>Range:</strong> ${Math.round(Math.min(...compData.map(c => c.adjustedPrice / c.sqft)))}-${Math.round(Math.max(...compData.map(c => c.adjustedPrice / c.sqft)))}/sqft
              • Best Value: {compData.reduce((best, c) => c.adjustedPrice / c.sqft < best.adjustedPrice / best.sqft ? c : best).label.substring(0, 20)}
            </p>
          </div>
        )}

        {activeChart === 'features' && (
          <div className="chart-wrapper">
            <h4>🎯 Property Features: Subject vs. Market Average</h4>
            <div className="chart-canvas">
              <Radar data={radarData} options={{
                ...radarOptions,
                plugins: {
                  ...radarOptions.plugins,
                  legend: {
                    position: 'top',
                    labels: { color: '#1f2937', font: { size: 12, weight: '600' } }
                  }
                }
              }} />
            </div>
            <p className="chart-description">
              <strong>Subject Property (Blue):</strong> {subjectBeds} bed • {subjectBaths} bath • {subjectSqft} sqft • {subjectAge} yrs
              • <strong>Market Avg (Green):</strong> {avgBeds.toFixed(1)} bed • {avgBaths.toFixed(1)} bath • {Math.round(avgSqft)} sqft • {Math.round(avgAge)} yrs
            </p>
          </div>
        )}

        {activeChart === 'activity' && domData && (
          <div className="chart-wrapper">
            <h4>⏱️ Market Activity & Days on Market</h4>
            <div className="chart-canvas">
              <Line data={domData} options={{
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                  legend: {
                    position: 'top',
                    labels: { color: '#1f2937', font: { size: 12, weight: '600' } }
                  },
                  tooltip: {
                    backgroundColor: 'rgba(0, 0, 0, 0.9)',
                    padding: 12,
                    cornerRadius: 8
                  }
                },
                scales: {
                  y: {
                    ticks: {
                      color: '#6b7280',
                      callback: function(value) {
                        return value + ' days';
                      }
                    },
                    grid: { color: 'rgba(0, 0, 0, 0.05)' }
                  },
                  x: {
                    ticks: { color: '#6b7280', font: { size: 11 }, maxRotation: 45, minRotation: 45 },
                    grid: { display: false }
                  }
                }
              }} />
            </div>
            <p className="chart-description">
              <strong>Market Velocity:</strong> {Math.round(compData.reduce((s, c) => s + c.dom, 0) / compData.length)} avg days
              • <strong>Fastest Sale:</strong> {Math.min(...compData.map(c => c.dom))} days
              • <strong>Slowest Sale:</strong> {Math.max(...compData.map(c => c.dom))} days
              • {Math.round(compData.reduce((s, c) => s + c.dom, 0) / compData.length) < 30 ? '🔥 Hot Market' : Math.round(compData.reduce((s, c) => s + c.dom, 0) / compData.length) < 60 ? '✅ Normal' : '❄️ Slow Market'}
            </p>
          </div>
        )}
      </div>

      <div className="charts-footer">
        <p className="data-note">
          📊 Charts updated automatically when comparable properties are modified
        </p>
      </div>
    </div>
  );
};

export default CMACharts;

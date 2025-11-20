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
 * Comprehensive chart visualizations for CMA data
 * Shows price comparisons, adjustments, features, and market positioning
 */
export const CMACharts = ({ comparables, subjectProperty, onClose }) => {
  const [activeChart, setActiveChart] = useState('prices');

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

  // Chart 1: Price Comparison (Before & After Adjustments)
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
          className={`chart-tab ${activeChart === 'prices' ? 'active' : ''}`}
          onClick={() => setActiveChart('prices')}
        >
          💰 Prices
        </button>
        <button 
          className={`chart-tab ${activeChart === 'adjustments' ? 'active' : ''}`}
          onClick={() => setActiveChart('adjustments')}
        >
          📊 Adjustments
        </button>
        <button 
          className={`chart-tab ${activeChart === 'distribution' ? 'active' : ''}`}
          onClick={() => setActiveChart('distribution')}
        >
          🥧 Distribution
        </button>
        <button 
          className={`chart-tab ${activeChart === 'features' ? 'active' : ''}`}
          onClick={() => setActiveChart('features')}
        >
          🎯 Features
        </button>
        <button 
          className={`chart-tab ${activeChart === 'sqft' ? 'active' : ''}`}
          onClick={() => setActiveChart('sqft')}
        >
          📐 $/Sqft
        </button>
        {hasDOMData && (
          <button 
            className={`chart-tab ${activeChart === 'dom' ? 'active' : ''}`}
            onClick={() => setActiveChart('dom')}
          >
            ⏱️ DOM
          </button>
        )}
      </div>

      {/* Chart Display */}
      <div className="chart-container">
        {activeChart === 'prices' && (
          <div className="chart-wrapper">
            <h4>Price Comparison: Original vs. Adjusted</h4>
            <div className="chart-canvas">
              <Bar data={priceComparisonData} options={chartOptions} />
            </div>
            <p className="chart-description">
              Compares original listing prices with adjusted values after accounting for differences in features, condition, and age.
            </p>
          </div>
        )}

        {activeChart === 'adjustments' && (
          <div className="chart-wrapper">
            <h4>Adjustment Impact by Comparable</h4>
            <div className="chart-canvas">
              <Bar data={adjustmentImpactData} options={{
                ...chartOptions,
                scales: {
                  ...chartOptions.scales,
                  y: {
                    ...chartOptions.scales.y,
                    ticks: {
                      ...chartOptions.scales.y.ticks,
                      callback: function(value) {
                        return (value >= 0 ? '+' : '') + '$' + value.toLocaleString();
                      }
                    }
                  }
                }
              }} />
            </div>
            <p className="chart-description">
              Green bars indicate upward adjustments (subject property superior), red bars indicate downward adjustments (subject property inferior).
            </p>
          </div>
        )}

        {activeChart === 'distribution' && (
          <div className="chart-wrapper">
            <h4>Price Distribution Relative to Average</h4>
            <div className="chart-canvas">
              <Doughnut data={priceDistributionData} options={{
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                  legend: {
                    position: 'right',
                    labels: { color: 'var(--text-primary)' }
                  }
                }
              }} />
            </div>
            <p className="chart-description">
              Shows how comparable properties are distributed around the market average of ${Math.round(avgAdjustedPrice).toLocaleString()}.
            </p>
          </div>
        )}

        {activeChart === 'features' && (
          <div className="chart-wrapper">
            <h4>Feature Comparison: Subject vs. Market</h4>
            <div className="chart-canvas">
              <Radar data={radarData} options={radarOptions} />
            </div>
            <p className="chart-description">
              Spider chart comparing subject property features (blue) against market averages (green). Larger area indicates more/better features.
            </p>
          </div>
        )}

        {activeChart === 'sqft' && (
          <div className="chart-wrapper">
            <h4>Price per Square Foot Analysis</h4>
            <div className="chart-canvas">
              <Bar data={pricePerSqftData} options={chartOptions} />
            </div>
            <p className="chart-description">
              Normalized pricing metric useful for comparing properties of different sizes. Average: ${Math.round(avgAdjustedPrice / avgSqft)}/sqft.
            </p>
          </div>
        )}

        {activeChart === 'dom' && domData && (
          <div className="chart-wrapper">
            <h4>Days on Market Comparison</h4>
            <div className="chart-canvas">
              <Line data={domData} options={{
                ...chartOptions,
                scales: {
                  ...chartOptions.scales,
                  y: {
                    ...chartOptions.scales.y,
                    ticks: {
                      color: 'var(--text-secondary)',
                      callback: function(value) {
                        return value + ' days';
                      }
                    }
                  }
                }
              }} />
            </div>
            <p className="chart-description">
              Market velocity indicator. Lower values suggest higher demand. Average: {Math.round(compData.reduce((s, c) => s + c.dom, 0) / compData.length)} days.
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

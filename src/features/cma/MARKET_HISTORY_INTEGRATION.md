# Market History Charts Integration

## Overview
Display historical trends from Federal Reserve Economic Data (FRED) and other public sources directly in your CMA reports.

## Features
✅ **Real Historical Data** - From FRED (Federal Reserve)
✅ **Multiple Metrics** - 5 key market indicators
✅ **Interactive Charts** - Toggle metrics on/off
✅ **Trend Analysis** - Automatic 6-month trend calculation
✅ **No API Key** - Free public data
✅ **Fallback Data** - Simulated data if API unavailable

## Available Metrics

### 1. **📈 Mortgage Rates** (30-Year Fixed)
- **FRED Series**: MORTGAGE30US
- **Update Frequency**: Weekly
- **Shows**: Interest rate trends affecting affordability

### 2. **🏠 Median Home Prices**
- **FRED Series**: MSPUS (US) / MEDLISPRINE (Northeast)
- **Update Frequency**: Monthly/Quarterly
- **Shows**: Overall price appreciation trends

### 3. **📦 Months Supply of Inventory**
- **FRED Series**: MSACSR
- **Update Frequency**: Monthly
- **Shows**: Supply/demand balance (2-4mo = seller's market)

### 4. **🏗️ Housing Starts**
- **FRED Series**: HOUST
- **Update Frequency**: Monthly
- **Shows**: New construction activity

### 5. **💼 Massachusetts Unemployment**
- **FRED Series**: MAUR
- **Update Frequency**: Monthly
- **Shows**: Economic health indicator

## Quick Integration

### Import Component
```javascript
import { MarketHistoryCharts } from './components';
```

### Basic Usage
```jsx
<MarketHistoryCharts yearsBack={5} />
```

### With Callback
```jsx
<MarketHistoryCharts 
  yearsBack={3}
  onDataLoaded={(data) => {
    console.log('Market data loaded:', data);
    // Use data in your analysis
  }}
/>
```

## Integration in EnhancedCMA.jsx

### Option 1: Add as Dedicated Tab/Panel
```jsx
// Add state for showing charts
const [showMarketHistory, setShowMarketHistory] = useState(false);

// Add button to toggle
<button onClick={() => setShowMarketHistory(!showMarketHistory)}>
  📊 Market Trends
</button>

// Render charts conditionally
{showMarketHistory && (
  <div className="market-history-panel">
    <MarketHistoryCharts yearsBack={5} />
  </div>
)}
```

### Option 2: Add to Existing Charts Section
```jsx
{/* After your existing charts */}
<div className="advanced-market-analysis">
  <h3>📊 Historical Market Trends</h3>
  <MarketHistoryCharts yearsBack={3} />
</div>
```

### Option 3: Collapsible Section
```jsx
const [expandedSections, setExpandedSections] = useState({});

<div className="collapsible-section">
  <button 
    onClick={() => setExpandedSections({
      ...expandedSections,
      marketHistory: !expandedSections.marketHistory
    })}
  >
    📊 View Historical Market Data
    {expandedSections.marketHistory ? ' ▼' : ' ▶'}
  </button>
  
  {expandedSections.marketHistory && (
    <MarketHistoryCharts yearsBack={5} />
  )}
</div>
```

## Using the Data Programmatically

### Fetch Data Directly
```javascript
import { getMarketDataSets, calculateTrend } from './utils/historicalData';

// Fetch all data
const marketData = await getMarketDataSets(5); // 5 years

// Analyze trends
const mortgageTrend = calculateTrend(marketData.mortgageRates);
console.log('Mortgage rates:', mortgageTrend);
// {
//   direction: 'falling',
//   change: -0.43,
//   changePercent: -6.2,
//   current: 6.47,
//   previous: 6.90
// }
```

### Integrate with AI Predictions
```javascript
const enhanceAIPrediction = async (prediction) => {
  const marketData = await getMarketDataSets(2);
  const mortgageTrend = calculateTrend(marketData.mortgageRates);
  
  // Adjust prediction based on rate trends
  if (mortgageTrend.direction === 'falling') {
    prediction.buyerDemandFactor *= 1.1; // 10% boost
    prediction.recommendations.push({
      type: 'market',
      text: `Falling mortgage rates (${mortgageTrend.changePercent}%) increasing buyer demand`,
      priority: 'high'
    });
  }
  
  return prediction;
};
```

### Custom Chart Configuration
```javascript
import { fetchFREDData, formatForChart } from './utils/historicalData';

// Fetch specific series
const rates = await fetchFREDData('MORTGAGE30US', 10); // 10 years

// Format for Chart.js
const chartData = formatForChart(
  rates,
  '30-Year Mortgage Rate',
  '#ef4444' // red color
);

// Use in your own chart
<Line data={chartData} options={yourOptions} />
```

## Data Structure

### Returned Data Format
```javascript
{
  mortgageRates: [
    {
      date: '2024-01-01',
      value: 6.62,
      formatted: 'Jan 2024'
    },
    // ... more data points
  ],
  medianPrices: [...],
  monthsSupply: [...],
  housingStarts: [...],
  unemploymentMA: [...]
}
```

### Trend Object
```javascript
{
  direction: 'rising' | 'falling' | 'stable',
  change: 0.43,              // Absolute change
  changePercent: 6.5,        // Percentage change
  current: 6.89,             // Current value
  previous: 6.46             // Previous period average
}
```

## Styling

The component uses existing CMA styles but you can customize:

```css
/* Adjust chart height */
.chart-container {
  height: 400px; /* default: 300px */
}

/* Change grid layout */
.market-charts-grid {
  grid-template-columns: repeat(2, 1fr); /* 2 columns */
}

/* Hide data source */
.data-source {
  display: none;
}
```

## API Rate Limits

### FRED API
- **Without Key**: Basic access, no documented limits
- **With Key** (Optional): Higher limits, more series
- **Best Practice**: Cache results, don't fetch on every render

### Implementation
```javascript
// Cache data for 1 hour
const CACHE_KEY = 'market_data_cache';
const CACHE_DURATION = 60 * 60 * 1000; // 1 hour

const getCachedData = () => {
  const cached = localStorage.getItem(CACHE_KEY);
  if (!cached) return null;
  
  const { data, timestamp } = JSON.parse(cached);
  if (Date.now() - timestamp > CACHE_DURATION) return null;
  
  return data;
};

const cacheData = (data) => {
  localStorage.setItem(CACHE_KEY, JSON.stringify({
    data,
    timestamp: Date.now()
  }));
};
```

## Troubleshooting

### Charts Not Loading
1. Check browser console for API errors
2. Verify internet connection
3. FRED API may have rate limits (rare)
4. Falls back to simulated data automatically

### Wrong Data Displayed
1. Check FRED series IDs are correct
2. Verify date ranges make sense
3. Some series may have gaps (weekends, holidays)

### Performance Issues
1. Reduce `yearsBack` parameter (use 2-3 instead of 5)
2. Implement caching (see above)
3. Only render charts when tab/section is active

## Future Enhancements

- [ ] Add more FRED series (construction permits, sales volume)
- [ ] State-specific data (MA vs US comparison)
- [ ] Custom date range selector
- [ ] Export charts as images
- [ ] Compare current market to historical averages
- [ ] Predictive trend lines
- [ ] Correlation analysis between metrics

## Resources

- **FRED API Docs**: https://fred.stlouisfed.org/docs/api/fred/
- **Series Browser**: https://fred.stlouisfed.org/
- **Chart.js Docs**: https://www.chartjs.org/

## Example: Full Integration

```jsx
import { MarketHistoryCharts } from './components';
import { getMarketDataSets, calculateTrend } from './utils/historicalData';

function EnhancedCMA() {
  const [marketInsights, setMarketInsights] = useState(null);
  
  const handleMarketDataLoaded = async (data) => {
    // Analyze all trends
    const insights = {
      rates: calculateTrend(data.mortgageRates),
      prices: calculateTrend(data.medianPrices),
      inventory: calculateTrend(data.monthsSupply)
    };
    
    setMarketInsights(insights);
    
    // Show insights to user
    if (insights.rates.direction === 'falling') {
      showNotification('📉 Mortgage rates trending down - good time for buyers!', 'info');
    }
  };
  
  return (
    <div className="cma-tool">
      {/* Your existing CMA content */}
      
      {/* Add market history section */}
      <section className="market-analysis-section">
        <MarketHistoryCharts 
          yearsBack={5}
          onDataLoaded={handleMarketDataLoaded}
        />
      </section>
      
      {/* Show insights */}
      {marketInsights && (
        <div className="market-insights-summary">
          <h4>Market Insights</h4>
          <ul>
            <li>Rates: {marketInsights.rates.direction} ({marketInsights.rates.changePercent}%)</li>
            <li>Prices: {marketInsights.prices.direction} ({marketInsights.prices.changePercent}%)</li>
            <li>Inventory: {marketInsights.inventory.current} months</li>
          </ul>
        </div>
      )}
    </div>
  );
}
```

---

**The historical market charts are ready to integrate! Just add `<MarketHistoryCharts />` wherever you want to display market trends in your CMA tool.** 📊📈

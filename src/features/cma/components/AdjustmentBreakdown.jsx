import React from 'react';

/**
 * Adjustment Breakdown Component
 * Shows detailed breakdown of how adjustments were calculated for a comparable
 */
export const AdjustmentBreakdown = ({ comp, subject, adjustments }) => {
  const breakdowns = [];
  
  // Beds
  const bedDiff = parseInt(comp.beds) - parseInt(subject.beds);
  if (bedDiff !== 0) {
    breakdowns.push({ factor: 'Bedrooms', diff: bedDiff, value: bedDiff * parseInt(adjustments.bed), unit: 'bed' });
  }
  
  // Baths
  const bathDiff = parseFloat(comp.baths) - parseFloat(subject.baths);
  if (bathDiff !== 0) {
    breakdowns.push({ factor: 'Bathrooms', diff: bathDiff, value: bathDiff * parseInt(adjustments.bath), unit: 'bath' });
  }
  
  // Sqft
  const sqftDiff = parseInt(comp.sqft) - parseInt(subject.sqft);
  if (sqftDiff !== 0) {
    breakdowns.push({ factor: 'Square Footage', diff: sqftDiff, value: sqftDiff * parseFloat(adjustments.sqft), unit: 'sqft' });
  }
  
  // Garage
  if (comp.garage !== subject.garage) {
    const garageAdj = comp.garage === 'yes' && subject.garage === 'no' ? -parseInt(adjustments.garage) : 
                      comp.garage === 'no' && subject.garage === 'yes' ? parseInt(adjustments.garage) : 0;
    if (garageAdj !== 0) {
      breakdowns.push({ factor: 'Garage', diff: garageAdj > 0 ? '+1' : '-1', value: garageAdj, unit: '' });
    }
  }
  
  return (
    <div className="adjustment-breakdown">
      <h5>📊 Adjustment Breakdown</h5>
      <div className="breakdown-items">
        {breakdowns.map((item, idx) => (
          <div key={idx} className={`breakdown-item ${item.value >= 0 ? 'positive' : 'negative'}`}>
            <span className="breakdown-factor">{item.factor}</span>
            <span className="breakdown-calc">
              {item.diff > 0 ? '+' : ''}{item.diff} {item.unit} × ${Math.abs(item.value / (item.diff || 1)).toLocaleString()}
            </span>
            <span className="breakdown-result">
              = {item.value >= 0 ? '+' : ''}${item.value.toLocaleString()}
            </span>
          </div>
        ))}
      </div>
      <div className="breakdown-total">
        <span>Total Adjustment:</span>
        <span className="total-value">${breakdowns.reduce((sum, item) => sum + item.value, 0).toLocaleString()}</span>
      </div>
    </div>
  );
};

export default AdjustmentBreakdown;

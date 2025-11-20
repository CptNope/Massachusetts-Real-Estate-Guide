import React from 'react';

/**
 * Executive Summary Component
 * Displays a professional summary of the CMA analysis results
 */
export const ExecutiveSummary = ({ 
  comps, 
  avgPrice, 
  minPrice, 
  maxPrice, 
  recMin, 
  recMax, 
  confidence, 
  clientName, 
  address, 
  mode 
}) => {
  const today = new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
  
  return (
    <div className="executive-summary print-section">
      <div className="summary-header">
        <div className="summary-title-section">
          <h3>📋 Executive Summary</h3>
          <p className="summary-date">{today}</p>
        </div>
        {clientName && <p className="summary-client">Prepared for: <strong>{clientName}</strong></p>}
      </div>
      
      <div className="summary-grid">
        <div className="summary-section">
          <h4>Subject Property</h4>
          <p className="summary-address">{address || 'Not specified'}</p>
        </div>
        
        <div className="summary-section">
          <h4>Market Analysis</h4>
          <div className="summary-stats">
            <div className="summary-stat-item">
              <span className="stat-label">Comparables Analyzed:</span>
              <span className="stat-value">{comps.length}</span>
            </div>
            <div className="summary-stat-item">
              <span className="stat-label">Average Adjusted Value:</span>
              <span className="stat-value highlight">${avgPrice.toLocaleString()}</span>
            </div>
            <div className="summary-stat-item">
              <span className="stat-label">Value Range:</span>
              <span className="stat-value">${minPrice.toLocaleString()} - ${maxPrice.toLocaleString()}</span>
            </div>
          </div>
        </div>
        
        <div className="summary-section recommendation-section">
          <h4>Recommended Listing Range</h4>
          <div className="summary-recommendation">
            <div className="rec-item">
              <span className="rec-label">Conservative:</span>
              <span className="rec-value">${recMin.toLocaleString()}</span>
            </div>
            <div className="rec-divider">to</div>
            <div className="rec-item">
              <span className="rec-label">Aggressive:</span>
              <span className="rec-value">${recMax.toLocaleString()}</span>
            </div>
          </div>
        </div>
        
        <div className="summary-section">
          <h4>Data Confidence</h4>
          <div className={`confidence-badge ${confidence.level}`}>
            {confidence.text}
          </div>
          {mode === 'learning' && (
            <p className="confidence-explanation">
              {confidence.level === 'high' ? 'Excellent data consistency. High reliability for pricing decisions.' :
               confidence.level === 'medium' ? 'Moderate spread in values. Review comp selection carefully.' :
               'Wide variance detected. Consider adding more comparables or verifying data accuracy.'}
            </p>
          )}
        </div>
      </div>
      
      <div className="summary-footer">
        <p className="disclaimer-text">
          <strong>Disclaimer:</strong> This analysis is for informational purposes only and should not be considered a formal appraisal. 
          Final pricing decisions should consider additional market factors and professional guidance.
        </p>
      </div>
    </div>
  );
};

export default ExecutiveSummary;

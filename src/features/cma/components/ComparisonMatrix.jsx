import React from 'react';

/**
 * Comparison Matrix Table Component
 * Displays a detailed side-by-side comparison of subject property vs comparables
 */
export const ComparisonMatrix = ({ comps, subject }) => {
  return (
    <div className="comparison-matrix">
      <h4>📋 Comparison Matrix</h4>
      <div className="matrix-scroll">
        <table className="matrix-table">
          <thead>
            <tr>
              <th className="matrix-header">Feature</th>
              <th className="matrix-subject">Subject</th>
              {comps.map(comp => (
                <th key={comp.id} className="matrix-comp">Comp #{comp.id}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="feature-label">Sale Price</td>
              <td className="subject-cell">-</td>
              {comps.map(comp => (
                <td key={comp.id} className="comp-cell">${(comp.price / 1000).toFixed(0)}K</td>
              ))}
            </tr>
            <tr>
              <td className="feature-label">Bedrooms</td>
              <td className="subject-cell">{subject.beds}</td>
              {comps.map(comp => (
                <td key={comp.id} className={`comp-cell ${parseInt(comp.beds) !== parseInt(subject.beds) ? 'diff' : ''}`}>
                  {comp.beds}
                </td>
              ))}
            </tr>
            <tr>
              <td className="feature-label">Bathrooms</td>
              <td className="subject-cell">{subject.baths}</td>
              {comps.map(comp => (
                <td key={comp.id} className={`comp-cell ${parseFloat(comp.baths) !== parseFloat(subject.baths) ? 'diff' : ''}`}>
                  {comp.baths}
                </td>
              ))}
            </tr>
            <tr>
              <td className="feature-label">Square Feet</td>
              <td className="subject-cell">{subject.sqft}</td>
              {comps.map(comp => (
                <td key={comp.id} className={`comp-cell ${parseInt(comp.sqft) !== parseInt(subject.sqft) ? 'diff' : ''}`}>
                  {comp.sqft}
                </td>
              ))}
            </tr>
            <tr>
              <td className="feature-label">Garage</td>
              <td className="subject-cell">{subject.garage === 'yes' ? '✓' : '✗'}</td>
              {comps.map(comp => (
                <td key={comp.id} className={`comp-cell ${comp.garage !== subject.garage ? 'diff' : ''}`}>
                  {comp.garage === 'yes' ? '✓' : '✗'}
                </td>
              ))}
            </tr>
            <tr className="adjustment-row">
              <td className="feature-label">Adjustment</td>
              <td className="subject-cell">-</td>
              {comps.map(comp => (
                <td key={comp.id} className={`comp-cell ${comp.adjustment >= 0 ? 'positive' : 'negative'}`}>
                  {comp.adjustment >= 0 ? '+' : ''}${(comp.adjustment / 1000).toFixed(0)}K
                </td>
              ))}
            </tr>
            <tr className="total-row">
              <td className="feature-label">Adjusted Value</td>
              <td className="subject-cell">-</td>
              {comps.map(comp => (
                <td key={comp.id} className="comp-cell total">${(comp.adjustedPrice / 1000).toFixed(0)}K</td>
              ))}
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ComparisonMatrix;

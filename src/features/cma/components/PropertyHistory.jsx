import React, { useState, useEffect } from 'react';
import { fetchCompletePropertyData } from '../utils/deedData';

/**
 * PropertyHistory Component
 * Displays comprehensive property history including deed records,
 * sale history, tax assessments, and modifications
 */
export const PropertyHistory = ({ address, onClose }) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState('sales');
  const [error, setError] = useState(null);

  useEffect(() => {
    if (address) {
      loadPropertyData();
    }
  }, [address]);

  const loadPropertyData = async () => {
    setLoading(true);
    setError(null);
    
    try {
      const result = await fetchCompletePropertyData(address);
      
      if (result.success) {
        setData(result);
      } else {
        setError(result.error || 'Failed to load property data');
      }
    } catch (err) {
      console.error('Error loading property data:', err);
      setError('An error occurred while loading property data');
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="property-history-panel">
        <div className="property-history-header">
          <h3>📜 Property History & Deed Records</h3>
          <button className="close-btn" onClick={onClose}>✕</button>
        </div>
        <div className="property-history-loading">
          <div className="loading-spinner"></div>
          <p>Fetching property records...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="property-history-panel">
        <div className="property-history-header">
          <h3>📜 Property History & Deed Records</h3>
          <button className="close-btn" onClick={onClose}>✕</button>
        </div>
        <div className="property-history-error">
          <p>⚠️ {error}</p>
          <button onClick={loadPropertyData}>Retry</button>
        </div>
      </div>
    );
  }

  if (!data) return null;

  return (
    <div className="property-history-panel">
      <div className="property-history-header">
        <h3>📜 Property History & Deed Records</h3>
        <button className="close-btn" onClick={onClose}>✕</button>
      </div>

      <div className="property-history-address">
        <strong>{address}</strong>
        <span className="data-timestamp">Data retrieved: {new Date(data.fetchedAt).toLocaleString()}</span>
      </div>

      {/* Tab Navigation */}
      <div className="property-history-tabs">
        <button 
          className={`tab ${activeTab === 'sales' ? 'active' : ''}`}
          onClick={() => setActiveTab('sales')}
        >
          📊 Sale History
        </button>
        <button 
          className={`tab ${activeTab === 'deed' ? 'active' : ''}`}
          onClick={() => setActiveTab('deed')}
        >
          📋 Deed Records
        </button>
        <button 
          className={`tab ${activeTab === 'taxes' ? 'active' : ''}`}
          onClick={() => setActiveTab('taxes')}
        >
          💰 Tax History
        </button>
        <button 
          className={`tab ${activeTab === 'modifications' ? 'active' : ''}`}
          onClick={() => setActiveTab('modifications')}
        >
          🔨 Modifications
        </button>
      </div>

      {/* Tab Content */}
      <div className="property-history-content">
        {/* Sale History Tab */}
        {activeTab === 'sales' && data.saleHistory && data.saleHistory.success && (
          <div className="sale-history-tab">
            <div className="tab-header">
              <h4>Sales History</h4>
              <div className="stats">
                <span className="stat-badge">
                  {data.saleHistory.totalSales} Sales
                </span>
                <span className="stat-badge appreciation">
                  {data.saleHistory.priceAppreciation} Appreciation
                </span>
              </div>
            </div>

            <div className="sales-timeline">
              {data.saleHistory.sales.map((sale, index) => (
                <div key={index} className="sale-entry">
                  <div className="sale-date">{sale.date}</div>
                  <div className="sale-details">
                    <div className="sale-price">${sale.price.toLocaleString()}</div>
                    <div className="sale-meta">
                      <span className="sale-type">{sale.saleType}</span>
                      <span>${sale.pricePerSqft}/sqft</span>
                      <span>{sale.daysOnMarket} days</span>
                    </div>
                    {sale.listPrice && sale.listPrice !== sale.price && (
                      <div className="sale-comparison">
                        List: ${sale.listPrice.toLocaleString()} 
                        <span className={sale.price > sale.listPrice ? 'over-ask' : 'under-ask'}>
                          ({((sale.price / sale.listPrice - 1) * 100).toFixed(1)}%)
                        </span>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <div className="data-source">{data.saleHistory.dataSource}</div>
          </div>
        )}

        {/* Deed Records Tab */}
        {activeTab === 'deed' && data.deedData && data.deedData.success && (
          <div className="deed-records-tab">
            <div className="deed-section">
              <h4>📄 Current Deed Information</h4>
              <div className="info-grid">
                <div className="info-item">
                  <label>Book & Page:</label>
                  <span>{data.deedData.deedInfo.bookPage}</span>
                </div>
                <div className="info-item">
                  <label>Record Date:</label>
                  <span>{data.deedData.deedInfo.recordDate}</span>
                </div>
                <div className="info-item">
                  <label>Deed Type:</label>
                  <span>{data.deedData.deedInfo.deedType}</span>
                </div>
                <div className="info-item">
                  <label>Document #:</label>
                  <span>{data.deedData.deedInfo.documentNumber}</span>
                </div>
                <div className="info-item">
                  <label>Recording Fee:</label>
                  <span>{data.deedData.deedInfo.recordingFee}</span>
                </div>
                <div className="info-item">
                  <label>Transfer Tax:</label>
                  <span>{data.deedData.deedInfo.transferTax}</span>
                </div>
              </div>
            </div>

            <div className="deed-section">
              <h4>👤 Current Owner</h4>
              <div className="info-grid">
                <div className="info-item">
                  <label>Owner Name:</label>
                  <span>{data.deedData.currentOwner.name}</span>
                </div>
                <div className="info-item">
                  <label>Ownership Type:</label>
                  <span>{data.deedData.currentOwner.ownershipType}</span>
                </div>
                <div className="info-item">
                  <label>Vesting Date:</label>
                  <span>{data.deedData.currentOwner.vestingDate}</span>
                </div>
              </div>
            </div>

            <div className="deed-section">
              <h4>🗺️ Parcel Information</h4>
              <div className="info-grid">
                <div className="info-item">
                  <label>Parcel Number:</label>
                  <span>{data.deedData.parcelInfo.parcelNumber}</span>
                </div>
                <div className="info-item">
                  <label>Legal Description:</label>
                  <span>{data.deedData.parcelInfo.legalDescription}</span>
                </div>
                <div className="info-item">
                  <label>Lot Size:</label>
                  <span>{data.deedData.parcelInfo.lotSize}</span>
                </div>
                <div className="info-item">
                  <label>Zoning:</label>
                  <span>{data.deedData.parcelInfo.zoning}</span>
                </div>
              </div>
            </div>

            <div className="deed-section">
              <h4>⚠️ Encumbrances & Liens</h4>
              {data.deedData.encumbrances.map((enc, index) => (
                <div key={index} className="encumbrance-item">
                  <div className="enc-type">{enc.type}</div>
                  <div className="enc-details">
                    {enc.holder && <span>Holder: {enc.holder}</span>}
                    {enc.amount && <span>Amount: {enc.amount}</span>}
                    {enc.status && <span className="status">{enc.status}</span>}
                    {enc.recordDate && <span>Recorded: {enc.recordDate}</span>}
                    {enc.note && <p className="enc-note">{enc.note}</p>}
                  </div>
                </div>
              ))}
            </div>

            <div className="data-source">{data.deedData.dataSource}</div>
          </div>
        )}

        {/* Tax History Tab */}
        {activeTab === 'taxes' && data.taxHistory && data.taxHistory.success && (
          <div className="tax-history-tab">
            <div className="tab-header">
              <h4>Tax Assessment History</h4>
              <span className="stat-badge">
                Avg Increase: {data.taxHistory.averageAnnualIncrease}
              </span>
            </div>

            <div className="tax-table">
              <div className="tax-table-header">
                <div>Year</div>
                <div>Land Value</div>
                <div>Building Value</div>
                <div>Total Value</div>
                <div>Tax Rate</div>
                <div>Annual Tax</div>
              </div>
              {data.taxHistory.assessments.map((assessment, index) => (
                <div key={index} className="tax-table-row">
                  <div className="tax-year">{assessment.year}</div>
                  <div>${assessment.landValue.toLocaleString()}</div>
                  <div>${assessment.buildingValue.toLocaleString()}</div>
                  <div className="total-value">${assessment.totalValue.toLocaleString()}</div>
                  <div>${assessment.taxRate}/K</div>
                  <div className="annual-tax">${assessment.annualTax.toLocaleString()}</div>
                </div>
              ))}
            </div>

            <div className="data-source">{data.taxHistory.dataSource}</div>
          </div>
        )}

        {/* Modifications Tab */}
        {activeTab === 'modifications' && data.propertyHistory && data.propertyHistory.success && (
          <div className="modifications-tab">
            <div className="deed-section">
              <h4>🏗️ Build History</h4>
              <div className="info-grid">
                <div className="info-item">
                  <label>Year Built:</label>
                  <span>{data.propertyHistory.buildHistory.yearBuilt}</span>
                </div>
                <div className="info-item">
                  <label>Builder:</label>
                  <span>{data.propertyHistory.buildHistory.builder}</span>
                </div>
                <div className="info-item">
                  <label>Original Price:</label>
                  <span>${data.propertyHistory.buildHistory.originalPrice.toLocaleString()}</span>
                </div>
              </div>
            </div>

            <div className="deed-section">
              <h4>🔨 Permits & Modifications</h4>
              <div className="modifications-timeline">
                {data.propertyHistory.modifications.map((mod, index) => (
                  <div key={index} className="modification-entry">
                    <div className="mod-year">{mod.year}</div>
                    <div className="mod-details">
                      <div className="mod-type">{mod.type}</div>
                      <div className="mod-meta">
                        <span>Permit: {mod.permitNumber}</span>
                        <span>Value: {mod.value}</span>
                        <span>By: {mod.contractor}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="deed-section">
              <h4>🏠 Property Characteristics</h4>
              <div className="characteristics-grid">
                {Object.entries(data.propertyHistory.characteristics).map(([key, value]) => (
                  <div key={key} className="char-item">
                    <label>{key.charAt(0).toUpperCase() + key.slice(1).replace(/([A-Z])/g, ' $1')}:</label>
                    <span>{value}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="data-source">{data.propertyHistory.dataSource}</div>
          </div>
        )}
      </div>

      <div className="property-history-note">
        <strong>Note:</strong> {data.note}
      </div>
    </div>
  );
};

export default PropertyHistory;

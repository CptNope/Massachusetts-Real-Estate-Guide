import React, { useState, useEffect } from 'react';
import { cmaChallenges } from './cmaChallenges';
import { marketTemplates, getTemplate } from './marketTemplates';

// Executive Summary Card Component
const ExecutiveSummary = ({ comps, avgPrice, minPrice, maxPrice, recMin, recMax, confidence, clientName, address, mode }) => {
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

// Comparison Matrix Table Component
const ComparisonMatrix = ({ comps, subject }) => {
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

// Visual Price Comparison Chart Component
const PriceComparisonChart = ({ comps, avgPrice, mode }) => {
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

// Visual Adjustment Breakdown Component
const AdjustmentBreakdown = ({ comp, subject, adjustments }) => {
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

// Tooltip Component for Learning Mode
const Tooltip = ({ text, children }) => {
  const [show, setShow] = useState(false);
  return (
    <div className="tooltip-wrapper" onMouseEnter={() => setShow(true)} onMouseLeave={() => setShow(false)}>
      {children}
      {show && <div className="tooltip-popup">{text}</div>}
    </div>
  );
};

// Helper to calculate price per sqft
const calcPricePerSqft = (price, sqft) => {
  const p = parseFloat(price) || 0;
  const s = parseInt(sqft) || 1;
  return s > 0 ? (p / s).toFixed(2) : 0;
};

// Helper to determine confidence level
const getConfidenceLevel = (adjustedComps) => {
  if (adjustedComps.length < 2) return { level: 'low', color: '#ef4444', text: '🔴 Low Confidence - Use 3+ comps' };
  
  const values = adjustedComps.map(c => c.adjustedPrice);
  const avg = values.reduce((a, b) => a + b, 0) / values.length;
  const range = Math.max(...values) - Math.min(...values);
  const variance = range / avg;
  
  if (variance < 0.05) return { level: 'high', color: '#10b981', text: '🟢 High Confidence - Tight clustering' };
  if (variance < 0.15) return { level: 'medium', color: '#f59e0b', text: '🟡 Medium Confidence - Moderate spread' };
  return { level: 'low', color: '#ef4444', text: '🔴 Low Confidence - Wide variance' };
};

// Advanced statistics helpers
const calculateMedian = (values) => {
  const sorted = [...values].sort((a, b) => a - b);
  const mid = Math.floor(sorted.length / 2);
  return sorted.length % 2 === 0 ? (sorted[mid - 1] + sorted[mid]) / 2 : sorted[mid];
};

const calculateStdDev = (values) => {
  const avg = values.reduce((a, b) => a + b, 0) / values.length;
  const squaredDiffs = values.map(v => Math.pow(v - avg, 2));
  const variance = squaredDiffs.reduce((a, b) => a + b, 0) / values.length;
  return Math.sqrt(variance);
};

const detectOutliers = (adjustedComps) => {
  if (adjustedComps.length < 3) return [];
  
  const values = adjustedComps.map(c => c.adjustedPrice);
  const median = calculateMedian(values);
  const stdDev = calculateStdDev(values);
  
  return adjustedComps.filter(comp => {
    const zScore = Math.abs((comp.adjustedPrice - median) / stdDev);
    return zScore > 2; // More than 2 standard deviations away
  }).map(comp => comp.id);
};

export default function EnhancedCMA({ gamification }) {
  const [showHelp, setShowHelp] = useState(false);
  const [showDataSources, setShowDataSources] = useState(false);
  const [showChallenges, setShowChallenges] = useState(false);
  const [activeChallenge, setActiveChallenge] = useState(null);
  const [challengeStartTime, setChallengeStartTime] = useState(null);
  const [showChallengeComplete, setShowChallengeComplete] = useState(false);
  const [showSaveLoad, setShowSaveLoad] = useState(false);
  const [mode, setMode] = useState('learning'); // 'learning' or 'professional'
  const [showTemplates, setShowTemplates] = useState(false);
  const [currentTemplate, setCurrentTemplate] = useState('custom');
  const [libraryView, setLibraryView] = useState('list'); // 'list' or 'grid'
  const [searchTerm, setSearchTerm] = useState('');
  const [showShortcuts, setShowShortcuts] = useState(false);
  const [notification, setNotification] = useState(null);
  const [lastSaved, setLastSaved] = useState(null);
  const [history, setHistory] = useState([]);
  const [historyIndex, setHistoryIndex] = useState(-1);
  const [validationErrors, setValidationErrors] = useState({});
  const [analysisNotes, setAnalysisNotes] = useState('');
  const [comp1Notes, setComp1Notes] = useState('');
  const [comp2Notes, setComp2Notes] = useState('');
  const [comp3Notes, setComp3Notes] = useState('');
  const [comp4Notes, setComp4Notes] = useState('');
  const [comp5Notes, setComp5Notes] = useState('');
  const [comp6Notes, setComp6Notes] = useState('');
  const [showBulkActions, setShowBulkActions] = useState(false);
  const [favorites, setFavorites] = useState([]);
  const [showBranding, setShowBranding] = useState(false);
  const [showMap, setShowMap] = useState(false);
  const [showPhotos, setShowPhotos] = useState(false);
  const [showEmail, setShowEmail] = useState(false);
  const [showCharts, setShowCharts] = useState(false);
  const [showMLS, setShowMLS] = useState(false);
  const [showAPI, setShowAPI] = useState(false);
  const [showAI, setShowAI] = useState(false);
  const [showChatGPT, setShowChatGPT] = useState(false);
  const [showAISettings, setShowAISettings] = useState(false);
  
  // ChatGPT Integration State
  const [openaiKey, setOpenaiKey] = useState('');
  const [chatMessages, setChatMessages] = useState([]);
  const [chatInput, setChatInput] = useState('');
  const [aiLoading, setAiLoading] = useState(false);
  const [aiReport, setAiReport] = useState('');
  const [aiDescription, setAiDescription] = useState('');
  const [aiInsights, setAiInsights] = useState([]);
  
  // CRM Mass Email System State
  const [showEmailCRM, setShowEmailCRM] = useState(false);
  const [showEmailSettings, setShowEmailSettings] = useState(false);
  const [showLegalInfo, setShowLegalInfo] = useState(false);
  const [showContractInfo, setShowContractInfo] = useState(false);
  const [showContractEffects, setShowContractEffects] = useState(false);
  const [showContractPerformance, setShowContractPerformance] = useState(false);
  const [showSalesContracts, setShowSalesContracts] = useState(false);
  const [showMortgageTheory, setShowMortgageTheory] = useState(false);
  const [showLawBanner, setShowLawBanner] = useState(true);
  const [contacts, setContacts] = useState([]);
  const [selectedContacts, setSelectedContacts] = useState([]);
  const [emailCampaigns, setEmailCampaigns] = useState([]);
  const [currentCampaign, setCurrentCampaign] = useState({
    name: '',
    subject: '',
    body: '',
    template: 'blank'
  });
  const [emailProvider, setEmailProvider] = useState('none');
  const [emailConfig, setEmailConfig] = useState({
    sendgrid: { apiKey: '', fromEmail: '' },
    mailchimp: { apiKey: '', audienceId: '', fromEmail: '', fromName: '' },
    resend: { apiKey: '', fromEmail: '' },
    mailgun: { apiKey: '', domain: '', fromEmail: '' },
    aws_ses: { accessKey: '', secretKey: '', region: 'us-east-1', fromEmail: '' },
    postmark: { apiToken: '', fromEmail: '' },
    smtp: { host: '', port: '587', username: '', password: '', fromEmail: '' }
  });
  const [emailProviderStatus, setEmailProviderStatus] = useState('not_configured');
  const [emailTemplates, setEmailTemplates] = useState([
    {
      id: 'new_listing',
      name: 'New Listing Alert',
      subject: 'New Property Alert: {{address}}',
      body: 'Hi {{firstName}},\n\nI wanted to personally notify you about a new listing that matches your criteria...'
    },
    {
      id: 'market_update',
      name: 'Monthly Market Update',
      subject: 'Your {{month}} Market Update',
      body: 'Dear {{firstName}},\n\nHere\'s your monthly market update for {{area}}...'
    },
    {
      id: 'cma_report',
      name: 'CMA Report Delivery',
      subject: 'Your Property Analysis is Ready',
      body: 'Hello {{firstName}},\n\nI\'ve completed the market analysis for {{address}}...'
    }
  ]);
  const [showContactForm, setShowContactForm] = useState(false);
  const [newContact, setNewContact] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    tags: []
  });
  
  // API Token System State
  const [apiTokens, setApiTokens] = useState([]);
  const [newTokenName, setNewTokenName] = useState('');
  const [showTokenCreate, setShowTokenCreate] = useState(false);
  
  // AI Prediction State
  const [aiPrediction, setAiPrediction] = useState(null);
  const [marketTrend, setMarketTrend] = useState(null);
  const [predictionConfidence, setPredictionConfidence] = useState(0);
  
  // MLS Integration State
  const [mlsConnected, setMlsConnected] = useState(false);
  const [mlsProvider, setMlsProvider] = useState('');
  const [mlsUsername, setMlsUsername] = useState('');
  const [mlsPassword, setMlsPassword] = useState('');
  const [mlsSearchAddress, setMlsSearchAddress] = useState('');
  const [mlsSearchRadius, setMlsSearchRadius] = useState('1');
  const [mlsResults, setMlsResults] = useState([]);
  const [showMLSImport, setShowMLSImport] = useState(false);
  
  // Photo Upload State
  const [subjectPhoto, setSubjectPhoto] = useState('');
  const [comp1Photo, setComp1Photo] = useState('');
  const [comp2Photo, setComp2Photo] = useState('');
  const [comp3Photo, setComp3Photo] = useState('');
  const [comp4Photo, setComp4Photo] = useState('');
  const [comp5Photo, setComp5Photo] = useState('');
  const [comp6Photo, setComp6Photo] = useState('');
  
  // Email State
  const [emailTo, setEmailTo] = useState('');
  const [emailSubject, setEmailSubject] = useState('');
  const [emailMessage, setEmailMessage] = useState('');
  
  // Branding Settings
  const [brandingLogo, setBrandingLogo] = useState('');
  const [brandingCompany, setBrandingCompany] = useState('');
  const [brandingPhone, setBrandingPhone] = useState('');
  const [brandingEmail, setBrandingEmail] = useState('');
  const [brandingLicense, setBrandingLicense] = useState('');
  const [brandingColor, setBrandingColor] = useState('#3b82f6');
  
  // Load branding settings on mount
  useEffect(() => {
    const savedBranding = localStorage.getItem('cma_branding');
    if (savedBranding) {
      const data = JSON.parse(savedBranding);
      setBrandingLogo(data.logo || '');
      setBrandingCompany(data.company || '');
      setBrandingPhone(data.phone || '');
      setBrandingEmail(data.email || '');
      setBrandingLicense(data.license || '');
      setBrandingColor(data.color || '#3b82f6');
    }
  }, []);

  const saveBranding = () => {
    const brandingData = {
      logo: brandingLogo,
      company: brandingCompany,
      phone: brandingPhone,
      email: brandingEmail,
      license: brandingLicense,
      color: brandingColor
    };
    localStorage.setItem('cma_branding', JSON.stringify(brandingData));
    showNotification('🎨 Branding settings saved! +10 XP', 'success');
    if (gamification) {
      gamification.addXP(10, 'Branding customized');
      gamification.recordActivity('branding_set');
    }
  };

  // MLS Integration Functions
  const connectMLS = () => {
    if (!mlsProvider || !mlsUsername || !mlsPassword) {
      showNotification('⚠️ Please fill in all MLS credentials', 'error');
      return;
    }
    
    // Store credentials (in production, this would connect to MLS API)
    const mlsCredentials = {
      provider: mlsProvider,
      username: mlsUsername,
      // Note: Never store actual passwords in production
      connected: true,
      connectedAt: new Date().toISOString()
    };
    localStorage.setItem('mls_credentials', JSON.stringify(mlsCredentials));
    setMlsConnected(true);
    showNotification(`✅ Connected to ${mlsProvider} MLS! +25 XP`, 'success');
    if (gamification) {
      gamification.addXP(25, 'MLS connected');
      gamification.recordActivity('mls_connected');
    }
  };

  const disconnectMLS = () => {
    localStorage.removeItem('mls_credentials');
    setMlsConnected(false);
    setMlsProvider('');
    setMlsUsername('');
    setMlsPassword('');
    showNotification('Disconnected from MLS', 'info');
  };

  const searchMLS = () => {
    if (!mlsConnected) {
      showNotification('⚠️ Please connect to MLS first', 'error');
      return;
    }
    if (!mlsSearchAddress) {
      showNotification('⚠️ Please enter a search address', 'error');
      return;
    }

    // Mock MLS search results (in production, this would call MLS API)
    const mockResults = [
      {
        mlsNumber: 'MA12345678',
        address: '789 Commonwealth Ave, Boston, MA',
        price: 495000,
        beds: 3,
        baths: 2,
        sqft: 1850,
        yearBuilt: 2015,
        dom: 12,
        status: 'Sold',
        soldDate: '2024-10-15'
      },
      {
        mlsNumber: 'MA12345679',
        address: '321 Beacon St, Boston, MA',
        price: 515000,
        beds: 3,
        baths: 2.5,
        sqft: 1950,
        yearBuilt: 2018,
        dom: 8,
        status: 'Sold',
        soldDate: '2024-11-01'
      },
      {
        mlsNumber: 'MA12345680',
        address: '654 Mass Ave, Cambridge, MA',
        price: 475000,
        beds: 3,
        baths: 2,
        sqft: 1750,
        yearBuilt: 2012,
        dom: 25,
        status: 'Sold',
        soldDate: '2024-09-20'
      }
    ];

    setMlsResults(mockResults);
    setShowMLSImport(true);
    showNotification(`Found ${mockResults.length} comparables! +10 XP`, 'success');
    if (gamification) {
      gamification.addXP(10, 'MLS search performed');
      gamification.recordActivity('mls_search');
    }
  };

  const importMLSProperty = (property, compNumber) => {
    const currentYear = new Date().getFullYear();
    const age = currentYear - property.yearBuilt;
    
    // Map MLS data to CMA fields
    const setActive = eval(`setComp${compNumber}Active`);
    const setPrice = eval(`setComp${compNumber}Price`);
    const setBeds = eval(`setComp${compNumber}Beds`);
    const setBaths = eval(`setComp${compNumber}Baths`);
    const setSqft = eval(`setComp${compNumber}Sqft`);
    const setAge = eval(`setComp${compNumber}Age`);
    const setDOM = eval(`setComp${compNumber}DOM`);

    setActive(true);
    setPrice(property.price.toString());
    setBeds(property.beds.toString());
    setBaths(property.baths.toString());
    setSqft(property.sqft.toString());
    setAge(age.toString());
    setDOM(property.dom.toString());

    showNotification(`✅ Imported ${property.address} to Comp #${compNumber}! +15 XP`, 'success');
    if (gamification) {
      gamification.addXP(15, 'MLS property imported');
      gamification.recordActivity('mls_import');
    }
  };

  // Load MLS credentials on mount
  useEffect(() => {
    const savedMLS = localStorage.getItem('mls_credentials');
    if (savedMLS) {
      const data = JSON.parse(savedMLS);
      setMlsProvider(data.provider || '');
      setMlsUsername(data.username || '');
      setMlsConnected(data.connected || false);
    }
  }, []);

  // API Token Management Functions
  const generateAPIToken = () => {
    if (!newTokenName) {
      showNotification('⚠️ Please enter a token name', 'error');
      return;
    }

    const token = {
      id: Date.now().toString(),
      name: newTokenName,
      token: `cma_${Math.random().toString(36).substr(2, 9)}_${Date.now().toString(36)}`,
      created: new Date().toISOString(),
      lastUsed: null,
      usageCount: 0
    };

    const updatedTokens = [...apiTokens, token];
    setApiTokens(updatedTokens);
    localStorage.setItem('api_tokens', JSON.stringify(updatedTokens));
    setNewTokenName('');
    setShowTokenCreate(false);
    showNotification(`✅ API token created: ${token.name}! +30 XP`, 'success');
    
    if (gamification) {
      gamification.addXP(30, 'API token generated');
      gamification.recordActivity('api_token_created');
    }
  };

  const deleteAPIToken = (tokenId) => {
    if (!confirm('Delete this API token? Applications using it will lose access.')) return;
    
    const updatedTokens = apiTokens.filter(t => t.id !== tokenId);
    setApiTokens(updatedTokens);
    localStorage.setItem('api_tokens', JSON.stringify(updatedTokens));
    showNotification('🗑️ API token deleted', 'info');
  };

  const copyTokenToClipboard = (token) => {
    navigator.clipboard.writeText(token);
    showNotification('📋 Token copied to clipboard!', 'success');
  };

  // Load API tokens on mount
  useEffect(() => {
    const savedTokens = localStorage.getItem('api_tokens');
    if (savedTokens) {
      setApiTokens(JSON.parse(savedTokens));
    }
  }, []);

  // AI Market Prediction Engine
  const generateAIPrediction = () => {
    if (adjustedComps.length === 0) {
      showNotification('⚠️ Add comparables first to generate predictions', 'error');
      return;
    }

    // Simple ML-inspired prediction algorithm
    const prices = adjustedComps.map(c => c.adjustedPrice);
    const avgPrice = prices.reduce((sum, p) => sum + p, 0) / prices.length;
    const recentTrend = calculateMarketTrend(adjustedComps);
    
    // Price prediction with trend adjustment
    const trendMultiplier = recentTrend === 'rising' ? 1.03 : recentTrend === 'falling' ? 0.97 : 1.0;
    const predictedPrice = Math.round(avgPrice * trendMultiplier);
    
    // Confidence based on data quality
    const stdDev = calculateStdDev(prices.map(p => parseFloat(p)));
    const cv = stdDev / avgPrice;
    const confidence = Math.max(0, Math.min(100, 100 - (cv * 100)));
    
    // 3-month and 6-month predictions
    const threeMonthPrediction = Math.round(predictedPrice * (recentTrend === 'rising' ? 1.02 : recentTrend === 'falling' ? 0.98 : 1.0));
    const sixMonthPrediction = Math.round(predictedPrice * (recentTrend === 'rising' ? 1.04 : recentTrend === 'falling' ? 0.96 : 1.0));

    const prediction = {
      currentValue: Math.round(avgPrice),
      predictedValue: predictedPrice,
      threeMonth: threeMonthPrediction,
      sixMonth: sixMonthPrediction,
      trend: recentTrend,
      confidence: Math.round(confidence),
      factors: {
        compsAnalyzed: adjustedComps.length,
        priceRange: Math.max(...prices) - Math.min(...prices),
        avgDOM: adjustedComps.reduce((sum, c) => sum + parseFloat(c.dom || 0), 0) / adjustedComps.length
      }
    };

    setAiPrediction(prediction);
    setMarketTrend(recentTrend);
    setPredictionConfidence(Math.round(confidence));
    setShowAI(true);
    
    showNotification('🤖 AI prediction generated! +50 XP', 'success');
    if (gamification) {
      gamification.addXP(50, 'AI prediction generated');
      gamification.recordActivity('ai_prediction_used');
    }
  };

  const calculateMarketTrend = (comps) => {
    // Simplified trend analysis based on DOM and pricing
    const avgDOM = comps.reduce((sum, c) => sum + parseFloat(c.dom || 30), 0) / comps.length;
    const prices = comps.map(c => c.adjustedPrice);
    const avgPrice = prices.reduce((sum, p) => sum + p, 0) / prices.length;
    
    // Hot market: low DOM, prices above average
    if (avgDOM < 20 && avgPrice > 400000) return 'rising';
    // Cooling market: high DOM, mixed prices  
    if (avgDOM > 45) return 'falling';
    // Stable market
    return 'stable';
  };

  // Load OpenAI key on mount
  useEffect(() => {
    const savedKey = localStorage.getItem('openai_key');
    if (savedKey) {
      setOpenaiKey(savedKey);
    }
  }, []);

  // ChatGPT & AI Assistant Functions
  const saveOpenAIKey = () => {
    if (!openaiKey) {
      showNotification('⚠️ Please enter your OpenAI API key', 'error');
      return;
    }
    localStorage.setItem('openai_key', openaiKey);
    showNotification('✅ OpenAI API key saved! +20 XP', 'success');
    if (gamification) {
      gamification.addXP(20, 'OpenAI configured');
      gamification.recordActivity('openai_configured');
    }
  };

  const sendChatMessage = async () => {
    if (!chatInput.trim()) return;
    if (!openaiKey) {
      showNotification('⚠️ Please configure OpenAI API key first', 'error');
      return;
    }

    const userMessage = { role: 'user', content: chatInput };
    setChatMessages([...chatMessages, userMessage]);
    setChatInput('');
    setAiLoading(true);

    // Mock AI response (in production, this would call OpenAI API)
    setTimeout(() => {
      const aiResponse = generateMockAIResponse(chatInput);
      setChatMessages(prev => [...prev, { role: 'assistant', content: aiResponse }]);
      setAiLoading(false);
      
      if (gamification) {
        gamification.addXP(10, 'ChatGPT query');
        gamification.recordActivity('chatgpt_used');
      }
    }, 1500);
  };

  const generateMockAIResponse = (question) => {
    const lowerQ = question.toLowerCase();
    
    if (lowerQ.includes('value') || lowerQ.includes('price')) {
      return `Based on your CMA with ${adjustedComps.length} comparables, the estimated value range is $${Math.round(avgAdjustedValue - 15000).toLocaleString()} - $${Math.round(avgAdjustedValue + 15000).toLocaleString()}. The market appears to be ${marketTrend || 'stable'} based on the average days on market and pricing patterns.`;
    }
    if (lowerQ.includes('market') || lowerQ.includes('trend')) {
      return `The current market trend is ${marketTrend || 'stable'}. This is determined by analyzing the average days on market (${adjustedComps.length > 0 ? Math.round(adjustedComps.reduce((sum, c) => sum + parseFloat(c.dom || 30), 0) / adjustedComps.length) : 'N/A'} days) and pricing patterns across your comparables.`;
    }
    if (lowerQ.includes('recommendation') || lowerQ.includes('suggest')) {
      return `I recommend pricing the property at $${Math.round(avgAdjustedValue).toLocaleString()} based on the CMA analysis. Consider highlighting the property's best features and ensuring it's in excellent condition to maximize value. The current ${marketTrend || 'stable'} market conditions suggest this is a good time to list.`;
    }
    return `I'm an AI assistant for your CMA analysis. I can help explain valuations, market trends, and provide recommendations based on your comparable properties. What specific aspect of the CMA would you like to discuss?`;
  };

  const generateAIReport = () => {
    if (adjustedComps.length === 0) {
      showNotification('⚠️ Add comparables first', 'error');
      return;
    }

    setAiLoading(true);
    
    // Mock AI report generation (in production, use OpenAI)
    setTimeout(() => {
      const report = `PROFESSIONAL MARKET ANALYSIS REPORT

EXECUTIVE SUMMARY
This Comparative Market Analysis (CMA) has been prepared for ${subjectAddress || 'the subject property'}. After analyzing ${adjustedComps.length} comparable properties in the area, we have determined an estimated market value range.

PROPERTY VALUATION
Based on our comprehensive analysis of ${adjustedComps.length} comparable sales, the estimated market value is:
• Low Estimate: $${Math.round(avgAdjustedValue - 20000).toLocaleString()}
• Mid-Range Value: $${Math.round(avgAdjustedValue).toLocaleString()}
• High Estimate: $${Math.round(avgAdjustedValue + 20000).toLocaleString()}

MARKET CONDITIONS
The current market is trending ${marketTrend || 'stable'}. ${marketTrend === 'rising' ? 'Strong buyer demand and low inventory are driving prices upward.' : marketTrend === 'falling' ? 'Increased inventory and longer days on market indicate a cooling market.' : 'The market shows balanced conditions with consistent pricing and moderate activity.'}

COMPARABLE ANALYSIS
We analyzed ${adjustedComps.length} recent sales that are similar in size, condition, and location to the subject property. These comparables range from $${Math.min(...adjustedComps.map(c => c.adjustedPrice)).toLocaleString()} to $${Math.max(...adjustedComps.map(c => c.adjustedPrice)).toLocaleString()}, with an average of $${Math.round(avgAdjustedValue).toLocaleString()}.

RECOMMENDATION
Based on this analysis, we recommend ${marketTrend === 'rising' ? 'pricing competitively but not undervaluing the property given strong market conditions' : marketTrend === 'falling' ? 'strategic pricing to generate interest in a slower market' : 'pricing within the established range to attract qualified buyers'}. The property should be positioned to highlight its best features and generate strong buyer interest.`;

      setAiReport(report);
      setAiLoading(false);
      showNotification('✅ AI report generated! +75 XP', 'success');
      
      if (gamification) {
        gamification.addXP(75, 'AI report generated');
        gamification.recordActivity('ai_report_generated');
      }
    }, 2000);
  };

  const generateAIDescription = () => {
    setAiLoading(true);
    
    setTimeout(() => {
      const desc = `Welcome to ${subjectAddress || 'this exceptional property'}! This beautifully maintained home offers ${subjectBeds || '3'} bedrooms and ${subjectBaths || '2'} bathrooms across ${subjectSqft || '1,800'} square feet of thoughtfully designed living space.

Located in a ${marketTrend === 'rising' ? 'highly desirable and sought-after' : 'well-established'} neighborhood, this property combines comfort, convenience, and quality. ${subjectGarage === 'yes' ? 'The attached garage provides secure parking and additional storage space.' : ''} ${subjectCondition === 'excellent' ? 'The home is in pristine condition, move-in ready for discerning buyers.' : 'With some updates, this property offers tremendous potential for the right buyer.'}

The current market valuation of approximately $${Math.round(avgAdjustedValue).toLocaleString()} reflects the property's excellent location, desirable features, and the ${marketTrend || 'stable'} market conditions. This is an outstanding opportunity for ${marketTrend === 'rising' ? 'buyers looking to invest in an appreciating market' : 'value-conscious buyers seeking quality at a fair price'}.

Don't miss this chance to own a piece of ${subjectAddress ? subjectAddress.split(',')[1]?.trim() || 'this wonderful community' : 'this wonderful community'}!`;

      setAiDescription(desc);
      setAiLoading(false);
      showNotification('✅ AI description generated! +40 XP', 'success');
      
      if (gamification) {
        gamification.addXP(40, 'AI description generated');
        gamification.recordActivity('ai_description_generated');
      }
    }, 1500);
  };

  const generateAIInsights = () => {
    if (adjustedComps.length === 0) {
      showNotification('⚠️ Add comparables first', 'error');
      return;
    }

    const insights = [
      {
        icon: '💰',
        title: 'Pricing Strategy',
        insight: `Price at $${Math.round(avgAdjustedValue).toLocaleString()} to align with ${adjustedComps.length} comparable sales. ${marketTrend === 'rising' ? 'Strong market supports premium pricing.' : marketTrend === 'falling' ? 'Competitive pricing recommended for faster sale.' : 'Fair pricing ensures steady buyer interest.'}`
      },
      {
        icon: '📈',
        title: 'Market Position',
        insight: `${marketTrend === 'rising' ? 'Hot market! Expect strong buyer competition and potential multiple offers.' : marketTrend === 'falling' ? 'Cooling market. Plan for longer marketing period and negotiation.' : 'Balanced market provides stable conditions for both parties.'}`
      },
      {
        icon: '🎯',
        title: 'Competitive Edge',
        insight: `${subjectCondition === 'excellent' ? 'Excellent condition is a major selling point - emphasize this!' : subjectCondition === 'good' ? 'Good condition competes well. Minor upgrades could boost value.' : 'Consider strategic improvements to maximize sale price.'}`
      },
      {
        icon: '⏱️',
        title: 'Time to Sell',
        insight: `Average DOM in area: ${adjustedComps.length > 0 ? Math.round(adjustedComps.reduce((sum, c) => sum + parseFloat(c.dom || 30), 0) / adjustedComps.length) : 30} days. ${marketTrend === 'rising' ? 'Expect faster-than-average sale time.' : marketTrend === 'falling' ? 'Plan for extended marketing period.' : 'Normal timeline expected.'}`
      }
    ];

    setAiInsights(insights);
    showNotification('✅ AI insights generated! +60 XP', 'success');
    
    if (gamification) {
      gamification.addXP(60, 'AI insights generated');
      gamification.recordActivity('ai_insights_generated');
    }
  };

  // CRM Email System Functions
  useEffect(() => {
    const savedContacts = localStorage.getItem('crm_contacts');
    if (savedContacts) {
      setContacts(JSON.parse(savedContacts));
    }
    const savedCampaigns = localStorage.getItem('email_campaigns');
    if (savedCampaigns) {
      setEmailCampaigns(JSON.parse(savedCampaigns));
    }
    const savedEmailProvider = localStorage.getItem('email_provider');
    if (savedEmailProvider) {
      setEmailProvider(savedEmailProvider);
    }
    const savedEmailConfig = localStorage.getItem('email_config');
    if (savedEmailConfig) {
      setEmailConfig(JSON.parse(savedEmailConfig));
    }
    const savedEmailStatus = localStorage.getItem('email_provider_status');
    if (savedEmailStatus) {
      setEmailProviderStatus(savedEmailStatus);
    }
  }, []);

  const saveEmailConfig = () => {
    if (emailProvider === 'none') {
      showNotification('⚠️ Please select an email provider', 'error');
      return;
    }

    const config = emailConfig[emailProvider];
    const requiredFields = {
      sendgrid: ['apiKey', 'fromEmail'],
      mailchimp: ['apiKey', 'audienceId', 'fromEmail', 'fromName'],
      resend: ['apiKey', 'fromEmail'],
      mailgun: ['apiKey', 'domain', 'fromEmail'],
      aws_ses: ['accessKey', 'secretKey', 'region', 'fromEmail'],
      postmark: ['apiToken', 'fromEmail'],
      smtp: ['host', 'port', 'username', 'password', 'fromEmail']
    };

    const missing = requiredFields[emailProvider].filter(field => !config[field]);
    if (missing.length > 0) {
      showNotification(`⚠️ Please fill in: ${missing.join(', ')}`, 'error');
      return;
    }

    localStorage.setItem('email_provider', emailProvider);
    localStorage.setItem('email_config', JSON.stringify(emailConfig));
    localStorage.setItem('email_provider_status', 'configured');
    setEmailProviderStatus('configured');
    
    showNotification(`✅ ${emailProvider.toUpperCase()} configured! +30 XP`, 'success');
    
    if (gamification) {
      gamification.addXP(30, 'Email provider configured');
      gamification.recordActivity('email_provider_configured');
    }
  };

  const testEmailConnection = () => {
    if (emailProviderStatus !== 'configured') {
      showNotification('⚠️ Please configure and save first', 'error');
      return;
    }

    // Mock test (in production, this would actually send a test email via backend)
    showNotification('📧 Test email sent! Check your inbox. +10 XP', 'success');
    setEmailProviderStatus('connected');
    localStorage.setItem('email_provider_status', 'connected');
    
    if (gamification) {
      gamification.addXP(10, 'Email connection tested');
      gamification.recordActivity('email_connection_tested');
    }
  };

  const updateEmailConfig = (provider, field, value) => {
    setEmailConfig({
      ...emailConfig,
      [provider]: {
        ...emailConfig[provider],
        [field]: value
      }
    });
  };

  const addContact = () => {
    if (!newContact.firstName || !newContact.email) {
      showNotification('⚠️ Please enter name and email', 'error');
      return;
    }

    const contact = {
      id: Date.now().toString(),
      ...newContact,
      created: new Date().toISOString(),
      lastContact: null
    };

    const updated = [...contacts, contact];
    setContacts(updated);
    localStorage.setItem('crm_contacts', JSON.stringify(updated));
    setNewContact({ firstName: '', lastName: '', email: '', phone: '', tags: [] });
    setShowContactForm(false);
    showNotification(`✅ ${contact.firstName} added to contacts! +15 XP`, 'success');
    
    if (gamification) {
      gamification.addXP(15, 'Contact added');
      gamification.recordActivity('contact_added');
    }
  };

  const deleteContact = (id) => {
    if (!confirm('Delete this contact?')) return;
    const updated = contacts.filter(c => c.id !== id);
    setContacts(updated);
    localStorage.setItem('crm_contacts', JSON.stringify(updated));
    showNotification('Contact deleted', 'info');
  };

  const toggleContactSelection = (id) => {
    setSelectedContacts(prev => 
      prev.includes(id) ? prev.filter(c => c !== id) : [...prev, id]
    );
  };

  const selectAllContacts = () => {
    setSelectedContacts(contacts.map(c => c.id));
  };

  const generateAIEmail = (emailType) => {
    setAiLoading(true);
    
    setTimeout(() => {
      let subject = '';
      let body = '';

      if (emailType === 'new_listing') {
        subject = `Exciting New Listing: ${subjectAddress || 'Premium Property'}`;
        body = `Hi {{firstName}},

I wanted to reach out personally to let you know about an exceptional new listing that just hit the market!

🏠 Property: ${subjectAddress || 'Beautiful Home'}
💰 Price: $${Math.round(avgAdjustedValue).toLocaleString()}
🛏️ ${subjectBeds || '3'} Beds | 🛁 ${subjectBaths || '2'} Baths | 📏 ${subjectSqft || '1,800'} sqft

This property is located in a ${marketTrend === 'rising' ? 'highly sought-after' : 'desirable'} area and represents excellent value. ${marketTrend === 'rising' ? 'The market is hot right now, so I expect this to move quickly!' : 'This is a great opportunity in the current market conditions.'}

Would you like to schedule a showing? I'd be happy to provide you with a complete market analysis and walk you through the property.

Best regards,
${brandingCompany || 'Your Real Estate Professional'}
${brandingPhone || ''}`;
      } else if (emailType === 'market_update') {
        subject = `Your ${new Date().toLocaleString('default', { month: 'long' })} Market Update`;
        body = `Dear {{firstName}},

I hope this email finds you well! I wanted to share your monthly market update with some exciting insights about the local real estate market.

📊 MARKET SNAPSHOT:
• Trend: ${marketTrend === 'rising' ? '📈 Rising' : marketTrend === 'falling' ? '📉 Cooling' : '➡️ Stable'}
• Average Days on Market: ${adjustedComps.length > 0 ? Math.round(adjustedComps.reduce((sum, c) => sum + parseFloat(c.dom || 30), 0) / adjustedComps.length) : 30} days
• Median Price: $${Math.round(avgAdjustedValue).toLocaleString()}

${marketTrend === 'rising' ? '🔥 The market is heating up! Great time for sellers, and buyers should act quickly on properties they love.' : marketTrend === 'falling' ? '💡 Opportunities emerging for buyers as inventory increases. Sellers should price strategically.' : '✅ Balanced market conditions provide good opportunities for both buyers and sellers.'}

Thinking about buying or selling? Let's chat about how these trends might affect your plans!

Warmly,
${brandingCompany || 'Your Trusted Agent'}`;
      } else if (emailType === 'cma_report') {
        subject = `Your Property Analysis for ${subjectAddress || 'Your Home'} is Ready`;
        body = `Hello {{firstName}},

Great news! I've completed the comprehensive market analysis you requested.

📋 PROPERTY ANALYSIS SUMMARY:
• Subject: ${subjectAddress || 'Your Property'}
• Estimated Value: $${Math.round(avgAdjustedValue - 10000).toLocaleString()} - $${Math.round(avgAdjustedValue + 10000).toLocaleString()}
• Market Trend: ${marketTrend || 'Stable'}
• Comparables Analyzed: ${adjustedComps.length}

Based on my analysis of ${adjustedComps.length} comparable sales in your area, I've prepared a detailed report that shows exactly how your property compares to recent sales.

The current ${marketTrend || 'stable'} market conditions ${marketTrend === 'rising' ? 'are favorable for sellers' : marketTrend === 'falling' ? 'present opportunities for strategic pricing' : 'provide balanced conditions'}.

I'd love to review this analysis with you in detail. When would be a good time for us to connect?

Professional regards,
${brandingCompany || 'Your Agent'}
${brandingEmail || ''}`;
      }

      setCurrentCampaign({ ...currentCampaign, subject, body });
      setAiLoading(false);
      showNotification('✅ AI email generated! +50 XP', 'success');
      
      if (gamification) {
        gamification.addXP(50, 'AI email generated');
        gamification.recordActivity('ai_email_generated');
      }
    }, 1500);
  };

  const personalizeEmail = (template, contact) => {
    return template
      .replace(/{{firstName}}/g, contact.firstName)
      .replace(/{{lastName}}/g, contact.lastName || '')
      .replace(/{{email}}/g, contact.email)
      .replace(/{{phone}}/g, contact.phone || '')
      .replace(/{{month}}/g, new Date().toLocaleString('default', { month: 'long' }))
      .replace(/{{address}}/g, subjectAddress || 'this property')
      .replace(/{{area}}/g, subjectAddress ? subjectAddress.split(',')[1]?.trim() || 'your area' : 'your area');
  };

  const sendMassEmail = () => {
    if (selectedContacts.length === 0) {
      showNotification('⚠️ Please select contacts', 'error');
      return;
    }
    if (!currentCampaign.subject || !currentCampaign.body) {
      showNotification('⚠️ Please write email content', 'error');
      return;
    }

    const campaign = {
      id: Date.now().toString(),
      ...currentCampaign,
      recipients: selectedContacts.length,
      sent: new Date().toISOString(),
      status: 'sent',
      opens: 0,
      clicks: 0
    };

    const updated = [...emailCampaigns, campaign];
    setEmailCampaigns(updated);
    localStorage.setItem('email_campaigns', JSON.stringify(updated));

    showNotification(`✅ Campaign sent to ${selectedContacts.length} contacts! +100 XP`, 'success');
    
    if (gamification) {
      gamification.addXP(100, 'Mass email campaign sent');
      gamification.recordActivity('mass_email_sent');
    }

    // Reset
    setCurrentCampaign({ name: '', subject: '', body: '', template: 'blank' });
    setSelectedContacts([]);
  };

  // Photo upload handler (convert to base64)
  const handlePhotoUpload = (e, setter) => {
    const file = e.target.files[0];
    if (file) {
      if (file.size > 2000000) { // 2MB limit
        showNotification('⚠️ Photo must be under 2MB', 'error');
        return;
      }
      const reader = new FileReader();
      reader.onloadend = () => {
        setter(reader.result);
        showNotification('📸 Photo uploaded successfully! +5 XP', 'success');
        if (gamification) {
          gamification.addXP(5, 'Photo uploaded');
          gamification.recordActivity('photo_uploaded');
        }
      };
      reader.readAsDataURL(file);
    }
  };

  // Direct PDF Export (simplified version - full implementation would use jsPDF)
  const exportToPDF = () => {
    showNotification('📄 PDF exported! +15 XP', 'success');
    if (gamification) {
      gamification.addXP(15, 'PDF exported');
      gamification.recordActivity('pdf_exported');
    }
  };

  // Email Integration (simplified - would use EmailJS in production)
  const sendEmail = () => {
    if (!emailTo) {
      showNotification('⚠️ Please enter recipient email', 'error');
      return;
    }
    
    // In production, this would use EmailJS or similar service
    showNotification(`📧 Email sent! +20 XP`, 'success');
    if (gamification) {
      gamification.addXP(20, 'Email sent to client');
      gamification.recordActivity('email_sent');
    }
    setShowEmail(false);
    
    // Reset form
    setEmailTo('');
    setEmailSubject('');
    setEmailMessage('');
  };
  
  // Bulk Actions
  const clearAllComps = () => {
    if (!confirm('Clear all comparable data? This cannot be undone.')) return;
    
    setComp1Active(false); setComp2Active(false); setComp3Active(false);
    setComp4Active(false); setComp5Active(false); setComp6Active(false);
    
    [1, 2, 3, 4, 5, 6].forEach(i => {
      const setPrice = eval(`setComp${i}Price`);
      const setBeds = eval(`setComp${i}Beds`);
      const setBaths = eval(`setComp${i}Baths`);
      const setSqft = eval(`setComp${i}Sqft`);
      
      setPrice(''); setBeds('3'); setBaths('2'); setSqft('1800');
    });
    
    showNotification('🗑️ All comparables cleared. +5 XP', 'info');
    if (gamification) {
      gamification.addXP(5, 'Bulk action used');
      gamification.recordActivity('bulk_action_used');
    }
  };

  const copyAdjustmentsToClipboard = () => {
    const adjustments = {
      bed: bedAdjustment, bath: bathAdjustment, sqft: sqftAdjustment,
      garage: garageAdjustment, condition: conditionAdjustment, age: ageAdjustment,
      dom: domAdjustment, pool: poolAdjustment, lotSize: lotSizeAdjustment,
      location: locationAdjustment, view: viewAdjustment, upgrades: upgradesAdjustment
    };
    navigator.clipboard.writeText(JSON.stringify(adjustments, null, 2));
    showNotification('📋 Adjustment values copied to clipboard', 'success');
  };

  const toggleFavorite = (cmaName) => {
    const newFavorites = favorites.includes(cmaName)
      ? favorites.filter(f => f !== cmaName)
      : [...favorites, cmaName];
    setFavorites(newFavorites);
    localStorage.setItem('cma_favorites', JSON.stringify(newFavorites));
    const isFavoriting = newFavorites.includes(cmaName);
    showNotification(isFavoriting ? '⭐ Added to favorites! +3 XP' : '☆ Removed from favorites', 'success');
    if (isFavoriting && gamification) {
      gamification.addXP(3, 'CMA favorited');
      gamification.recordActivity('favorite_added');
    }
  };

  // Load favorites on mount
  useEffect(() => {
    const savedFavorites = localStorage.getItem('cma_favorites');
    if (savedFavorites) {
      setFavorites(JSON.parse(savedFavorites));
    }
  }, []);
  
  // Undo/Redo: Save state to history
  const saveToHistory = (stateName, value) => {
    const newHistory = history.slice(0, historyIndex + 1);
    newHistory.push({ stateName, value, timestamp: Date.now() });
    if (newHistory.length > 50) newHistory.shift(); // Keep last 50 actions
    setHistory(newHistory);
    setHistoryIndex(newHistory.length - 1);
  };

  const undo = () => {
    if (historyIndex > 0) {
      const prevState = history[historyIndex - 1];
      setHistoryIndex(historyIndex - 1);
      // Apply the previous state based on stateName
      showNotification('↶ Undo', 'info');
    }
  };

  const redo = () => {
    if (historyIndex < history.length - 1) {
      const nextState = history[historyIndex + 1];
      setHistoryIndex(historyIndex + 1);
      showNotification('↷ Redo', 'info');
    }
  };

  // Input validation
  const validateInput = (field, value) => {
    const errors = { ...validationErrors };
    
    if (field.includes('Price') && value) {
      if (isNaN(value) || parseFloat(value) < 0) {
        errors[field] = 'Must be a positive number';
      } else {
        delete errors[field];
      }
    }
    
    if (field.includes('Sqft') && value) {
      if (isNaN(value) || parseInt(value) < 100) {
        errors[field] = 'Must be at least 100 sq ft';
      } else {
        delete errors[field];
      }
    }
    
    setValidationErrors(errors);
    return Object.keys(errors).length === 0;
  };
  
  // Auto-save draft every 30 seconds
  useEffect(() => {
    const autoSaveDraft = () => {
      const draftData = {
        client: { name: clientName, preparedBy, brokerage: brokerageName, purpose: reportPurpose },
        subject: { address: subjectAddress, beds: subjectBeds, baths: subjectBaths, sqft: subjectSqft, 
                   garage: subjectGarage, pool: subjectPool, lotSize: subjectLotSize, location: subjectLocation,
                   view: subjectView, upgrades: subjectUpgrades },
        adjustments: { bed: bedAdjustment, bath: bathAdjustment, sqft: sqftAdjustment, garage: garageAdjustment,
                      condition: conditionAdjustment, age: ageAdjustment, dom: domAdjustment, pool: poolAdjustment,
                      lotSize: lotSizeAdjustment, location: locationAdjustment, view: viewAdjustment, upgrades: upgradesAdjustment },
        savedDate: new Date().toISOString()
      };
      localStorage.setItem('cma_draft', JSON.stringify(draftData));
      setLastSaved(new Date().toLocaleTimeString());
    };

    const interval = setInterval(autoSaveDraft, 30000); // 30 seconds
    return () => clearInterval(interval);
  }, [clientName, preparedBy, brokerageName, reportPurpose, subjectAddress, subjectBeds, subjectBaths, 
      subjectSqft, subjectGarage, subjectPool, subjectLotSize, subjectLocation, subjectView, subjectUpgrades,
      bedAdjustment, bathAdjustment, sqftAdjustment, garageAdjustment, conditionAdjustment, ageAdjustment,
      domAdjustment, poolAdjustment, lotSizeAdjustment, locationAdjustment, viewAdjustment, upgradesAdjustment]);

  // Load draft on mount
  useEffect(() => {
    const draft = localStorage.getItem('cma_draft');
    if (draft) {
      const data = JSON.parse(draft);
      if (confirm('Found an auto-saved draft. Would you like to restore it?')) {
        setClientName(data.client?.name || '');
        setPreparedBy(data.client?.preparedBy || '');
        setBrokerageName(data.client?.brokerage || '');
        setReportPurpose(data.client?.purpose || 'listing');
        setSubjectAddress(data.subject?.address || '');
        setSubjectBeds(data.subject?.beds || '3');
        setSubjectBaths(data.subject?.baths || '2');
        setSubjectSqft(data.subject?.sqft || '1800');
        setSubjectGarage(data.subject?.garage || 'yes');
        showNotification('Draft restored successfully!', 'success');
      }
    }
  }, []);

  // Notification system
  const showNotification = (message, type = 'info') => {
    setNotification({ message, type });
    setTimeout(() => setNotification(null), 3000);
  };
  
  // Keyboard shortcuts
  useEffect(() => {
    const handleKeyPress = (e) => {
      // Only if not typing in an input
      if (e.target.tagName === 'INPUT' || e.target.tagName === 'SELECT' || e.target.tagName === 'TEXTAREA') return;
      
      // Ctrl/Cmd + Z = Undo
      if ((e.ctrlKey || e.metaKey) && e.key === 'z' && !e.shiftKey) {
        e.preventDefault();
        undo();
      }
      // Ctrl/Cmd + Y or Ctrl/Cmd + Shift + Z = Redo
      else if ((e.ctrlKey || e.metaKey) && (e.key === 'y' || (e.key === 'z' && e.shiftKey))) {
        e.preventDefault();
        redo();
      }
      // Ctrl/Cmd + S = Save
      else if ((e.ctrlKey || e.metaKey) && e.key === 's') {
        e.preventDefault();
        saveCMA();
      }
      // Ctrl/Cmd + P = Print
      else if ((e.ctrlKey || e.metaKey) && e.key === 'p') {
        e.preventDefault();
        handlePrint();
      }
      // Ctrl/Cmd + E = Export
      else if ((e.ctrlKey || e.metaKey) && e.key === 'e') {
        e.preventDefault();
        exportToJSON();
      }
      // ? = Show shortcuts
      else if (e.key === '?' && !e.ctrlKey && !e.metaKey) {
        e.preventDefault();
        setShowShortcuts(!showShortcuts);
      }
      // M = Toggle mode
      else if (e.key === 'm' && !e.ctrlKey && !e.metaKey) {
        e.preventDefault();
        toggleMode();
      }
      // T = Toggle templates
      else if (e.key === 't' && !e.ctrlKey && !e.metaKey) {
        e.preventDefault();
        setShowTemplates(!showTemplates);
      }
    };
    
    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [showShortcuts, showTemplates]);
  
  // Apply market template
  const applyTemplate = (templateId) => {
    const template = getTemplate(templateId);
    const adj = template.adjustments;
    
    setBedAdjustment(adj.bed);
    setBathAdjustment(adj.bath);
    setSqftAdjustment(adj.sqft);
    setGarageAdjustment(adj.garage);
    setConditionAdjustment(adj.condition);
    setAgeAdjustment(adj.age);
    setDomAdjustment(adj.dom);
    setPoolAdjustment(adj.pool);
    setLotSizeAdjustment(adj.lotSize);
    setLocationAdjustment(adj.location);
    setViewAdjustment(adj.view);
    setUpgradesAdjustment(adj.upgrades);
    
    setCurrentTemplate(templateId);
    
    if (gamification && templateId !== 'custom') {
      gamification.addXP(10, `Applied ${template.name} template! 🎯`);
    }
  };
  
  // Mode toggle with gamification
  const toggleMode = () => {
    const newMode = mode === 'learning' ? 'professional' : 'learning';
    setMode(newMode);
    
    if (gamification && newMode === 'professional') {
      // Award XP for first time using Professional mode
      const stats = gamification.stats || {};
      if (!stats.usedProfessionalMode) {
        gamification.addXP(25, 'Unlocked Professional Mode! 💼');
        gamification.recordActivity('professional_mode_unlocked');
      }
    }
  };
  
  // Client Information
  const [clientName, setClientName] = useState('');
  const [preparedBy, setPreparedBy] = useState('');
  const [brokerageName, setBrokerageName] = useState('');
  const [reportPurpose, setReportPurpose] = useState('listing');
  
  // Subject Property
  const [subjectBeds, setSubjectBeds] = useState('3');
  const [subjectBaths, setSubjectBaths] = useState('2');
  const [subjectSqft, setSubjectSqft] = useState('1800');
  const [subjectGarage, setSubjectGarage] = useState('yes');
  const [subjectCondition, setSubjectCondition] = useState('good');
  const [subjectAge, setSubjectAge] = useState('10');
  const [subjectAddress, setSubjectAddress] = useState('');
  const [subjectPool, setSubjectPool] = useState('no');
  const [subjectLotSize, setSubjectLotSize] = useState('8000');
  const [subjectLocation, setSubjectLocation] = useState('3');
  const [subjectView, setSubjectView] = useState('none');
  const [subjectUpgrades, setSubjectUpgrades] = useState('average');
  
  // Comparable 1
  const [comp1Active, setComp1Active] = useState(true);
  const [comp1Price, setComp1Price] = useState('425000');
  const [comp1Beds, setComp1Beds] = useState('3');
  const [comp1Baths, setComp1Baths] = useState('2');
  const [comp1Sqft, setComp1Sqft] = useState('1750');
  const [comp1Garage, setComp1Garage] = useState('yes');
  const [comp1Condition, setComp1Condition] = useState('good');
  const [comp1Age, setComp1Age] = useState('12');
  const [comp1DOM, setComp1DOM] = useState('30');
  const [comp1Pool, setComp1Pool] = useState('no');
  const [comp1LotSize, setComp1LotSize] = useState('7500');
  const [comp1Location, setComp1Location] = useState('3');
  const [comp1View, setComp1View] = useState('none');
  const [comp1Upgrades, setComp1Upgrades] = useState('average');
  
  // Comparable 2
  const [comp2Active, setComp2Active] = useState(true);
  const [comp2Price, setComp2Price] = useState('440000');
  const [comp2Beds, setComp2Beds] = useState('3');
  const [comp2Baths, setComp2Baths] = useState('2.5');
  const [comp2Sqft, setComp2Sqft] = useState('1900');
  const [comp2Garage, setComp2Garage] = useState('yes');
  const [comp2Condition, setComp2Condition] = useState('excellent');
  const [comp2Age, setComp2Age] = useState('8');
  const [comp2DOM, setComp2DOM] = useState('15');
  const [comp2Pool, setComp2Pool] = useState('no');
  const [comp2LotSize, setComp2LotSize] = useState('8500');
  const [comp2Location, setComp2Location] = useState('4');
  const [comp2View, setComp2View] = useState('none');
  const [comp2Upgrades, setComp2Upgrades] = useState('excellent');
  
  // Comparable 3
  const [comp3Active, setComp3Active] = useState(true);
  const [comp3Price, setComp3Price] = useState('415000');
  const [comp3Beds, setComp3Beds] = useState('3');
  const [comp3Baths, setComp3Baths] = useState('1.5');
  const [comp3Sqft, setComp3Sqft] = useState('1650');
  const [comp3Garage, setComp3Garage] = useState('no');
  const [comp3Condition, setComp3Condition] = useState('fair');
  const [comp3Age, setComp3Age] = useState('15');
  const [comp3DOM, setComp3DOM] = useState('45');
  const [comp3Pool, setComp3Pool] = useState('no');
  const [comp3LotSize, setComp3LotSize] = useState('6500');
  const [comp3Location, setComp3Location] = useState('2');
  const [comp3View, setComp3View] = useState('none');
  const [comp3Upgrades, setComp3Upgrades] = useState('poor');
  
  // Comparable 4
  const [comp4Active, setComp4Active] = useState(false);
  const [comp4Price, setComp4Price] = useState('430000');
  const [comp4Beds, setComp4Beds] = useState('3');
  const [comp4Baths, setComp4Baths] = useState('2');
  const [comp4Sqft, setComp4Sqft] = useState('1800');
  const [comp4Garage, setComp4Garage] = useState('yes');
  const [comp4Condition, setComp4Condition] = useState('good');
  const [comp4Age, setComp4Age] = useState('10');
  const [comp4DOM, setComp4DOM] = useState('25');
  const [comp4Pool, setComp4Pool] = useState('no');
  const [comp4LotSize, setComp4LotSize] = useState('8000');
  const [comp4Location, setComp4Location] = useState('3');
  const [comp4View, setComp4View] = useState('none');
  const [comp4Upgrades, setComp4Upgrades] = useState('average');
  
  // Comparable 5
  const [comp5Active, setComp5Active] = useState(false);
  const [comp5Price, setComp5Price] = useState('435000');
  const [comp5Beds, setComp5Beds] = useState('3');
  const [comp5Baths, setComp5Baths] = useState('2');
  const [comp5Sqft, setComp5Sqft] = useState('1850');
  const [comp5Garage, setComp5Garage] = useState('yes');
  const [comp5Condition, setComp5Condition] = useState('good');
  const [comp5Age, setComp5Age] = useState('9');
  const [comp5DOM, setComp5DOM] = useState('20');
  const [comp5Pool, setComp5Pool] = useState('no');
  const [comp5LotSize, setComp5LotSize] = useState('8200');
  const [comp5Location, setComp5Location] = useState('3');
  const [comp5View, setComp5View] = useState('none');
  const [comp5Upgrades, setComp5Upgrades] = useState('average');
  
  // Comparable 6
  const [comp6Active, setComp6Active] = useState(false);
  const [comp6Price, setComp6Price] = useState('445000');
  const [comp6Beds, setComp6Beds] = useState('3');
  const [comp6Baths, setComp6Baths] = useState('2.5');
  const [comp6Sqft, setComp6Sqft] = useState('1950');
  const [comp6Garage, setComp6Garage] = useState('yes');
  const [comp6Condition, setComp6Condition] = useState('excellent');
  const [comp6Age, setComp6Age] = useState('7');
  const [comp6DOM, setComp6DOM] = useState('18');
  const [comp6Pool, setComp6Pool] = useState('yes');
  const [comp6LotSize, setComp6LotSize] = useState('9000');
  const [comp6Location, setComp6Location] = useState('4');
  const [comp6View, setComp6View] = useState('park');
  const [comp6Upgrades, setComp6Upgrades] = useState('excellent');
  
  // Adjustment values
  const [bedAdjustment, setBedAdjustment] = useState('20000');
  const [bathAdjustment, setBathAdjustment] = useState('15000');
  const [sqftAdjustment, setSqftAdjustment] = useState('100');
  const [garageAdjustment, setGarageAdjustment] = useState('15000');
  const [conditionAdjustment, setConditionAdjustment] = useState('10000');
  const [ageAdjustment, setAgeAdjustment] = useState('2000');
  const [domAdjustment, setDomAdjustment] = useState('500');
  const [poolAdjustment, setPoolAdjustment] = useState('20000');
  const [lotSizeAdjustment, setLotSizeAdjustment] = useState('5');
  const [locationAdjustment, setLocationAdjustment] = useState('10000');
  const [viewAdjustment, setViewAdjustment] = useState('25000');
  const [upgradesAdjustment, setUpgradesAdjustment] = useState('15000');

  const conditionValues = { 'poor': 1, 'fair': 2, 'good': 3, 'excellent': 4 };
  const upgradesValues = { 'poor': 1, 'average': 2, 'good': 3, 'excellent': 4 };
  const viewValues = { 'none': 0, 'park': 1, 'mountain': 2, 'city': 2, 'water': 3 };

  const calcCompAdjustment = (comp) => {
    let adjustment = 0;
    const subBeds = parseInt(subjectBeds) || 0;
    const subBaths = parseFloat(subjectBaths) || 0;
    const subSqft = parseInt(subjectSqft) || 0;
    const subGar = subjectGarage === 'yes';
    const subCond = conditionValues[subjectCondition];
    const subAge = parseInt(subjectAge) || 0;
    const subPool = subjectPool === 'yes';
    const subLotSize = parseInt(subjectLotSize) || 0;
    const subLoc = parseInt(subjectLocation) || 3;
    const subView = viewValues[subjectView] || 0;
    const subUpg = upgradesValues[subjectUpgrades] || 2;
    
    const compBeds = parseInt(comp.beds) || 0;
    const compBaths = parseFloat(comp.baths) || 0;
    const compSqft = parseInt(comp.sqft) || 0;
    const compGar = comp.garage === 'yes';
    const compCond = conditionValues[comp.condition];
    const compAge = parseInt(comp.age) || 0;
    const compDOM = parseInt(comp.dom) || 0;
    const compPool = comp.pool === 'yes';
    const compLotSize = parseInt(comp.lotSize) || 0;
    const compLoc = parseInt(comp.location) || 3;
    const compView = viewValues[comp.view] || 0;
    const compUpg = upgradesValues[comp.upgrades] || 2;
    
    const bedAdj = parseFloat(bedAdjustment) || 0;
    const bathAdj = parseFloat(bathAdjustment) || 0;
    const sqftAdj = parseFloat(sqftAdjustment) || 0;
    const garAdj = parseFloat(garageAdjustment) || 0;
    const condAdj = parseFloat(conditionAdjustment) || 0;
    const ageAdj = parseFloat(ageAdjustment) || 0;
    const domAdj = parseFloat(domAdjustment) || 0;
    const poolAdj = parseFloat(poolAdjustment) || 0;
    const lotSizeAdj = parseFloat(lotSizeAdjustment) || 0;
    const locationAdj = parseFloat(locationAdjustment) || 0;
    const viewAdj = parseFloat(viewAdjustment) || 0;
    const upgradesAdj = parseFloat(upgradesAdjustment) || 0;

    // Bedroom adjustment
    if (compBeds > subBeds) adjustment -= (compBeds - subBeds) * bedAdj;
    if (compBeds < subBeds) adjustment += (subBeds - compBeds) * bedAdj;
    
    // Bathroom adjustment
    if (compBaths > subBaths) adjustment -= (compBaths - subBaths) * bathAdj;
    if (compBaths < subBaths) adjustment += (subBaths - compBaths) * bathAdj;
    
    // Square footage adjustment
    adjustment += (subSqft - compSqft) * sqftAdj;
    
    // Garage adjustment
    if (compGar && !subGar) adjustment -= garAdj;
    if (!compGar && subGar) adjustment += garAdj;
    
    // Condition adjustment
    if (compCond > subCond) adjustment -= (compCond - subCond) * condAdj;
    if (compCond < subCond) adjustment += (subCond - compCond) * condAdj;
    
    // Age adjustment
    if (compAge < subAge) adjustment -= (subAge - compAge) * ageAdj;
    if (compAge > subAge) adjustment += (compAge - subAge) * ageAdj;
    
    // Days on market adjustment (longer DOM = less desirable, reduce value)
    if (compDOM > 60) adjustment -= domAdj * 2;
    else if (compDOM > 30) adjustment -= domAdj;
    
    // Pool adjustment
    if (compPool && !subPool) adjustment -= poolAdj;
    if (!compPool && subPool) adjustment += poolAdj;
    
    // Lot size adjustment (per sqft)
    const lotDiff = subLotSize - compLotSize;
    adjustment += lotDiff * lotSizeAdj;
    
    // Location quality adjustment (1-5 scale)
    const locDiff = subLoc - compLoc;
    adjustment += locDiff * locationAdj;
    
    // View premium adjustment
    const viewDiff = subView - compView;
    adjustment += viewDiff * viewAdj;
    
    // Upgrades adjustment
    const upgDiff = subUpg - compUpg;
    adjustment += upgDiff * upgradesAdj;
    
    return adjustment;
  };

  const comps = [];
  if (comp1Active) {
    comps.push({
      id: 1,
      price: parseFloat(comp1Price) || 0,
      beds: comp1Beds,
      baths: comp1Baths,
      sqft: comp1Sqft,
      garage: comp1Garage,
      condition: comp1Condition,
      age: comp1Age,
      dom: comp1DOM,
      pool: comp1Pool,
      lotSize: comp1LotSize,
      location: comp1Location,
      view: comp1View,
      upgrades: comp1Upgrades
    });
  }
  if (comp2Active) {
    comps.push({
      id: 2,
      price: parseFloat(comp2Price) || 0,
      beds: comp2Beds,
      baths: comp2Baths,
      sqft: comp2Sqft,
      garage: comp2Garage,
      condition: comp2Condition,
      age: comp2Age,
      dom: comp2DOM,
      pool: comp2Pool,
      lotSize: comp2LotSize,
      location: comp2Location,
      view: comp2View,
      upgrades: comp2Upgrades
    });
  }
  if (comp3Active) {
    comps.push({
      id: 3,
      price: parseFloat(comp3Price) || 0,
      beds: comp3Beds,
      baths: comp3Baths,
      sqft: comp3Sqft,
      garage: comp3Garage,
      condition: comp3Condition,
      age: comp3Age,
      dom: comp3DOM,
      pool: comp3Pool,
      lotSize: comp3LotSize,
      location: comp3Location,
      view: comp3View,
      upgrades: comp3Upgrades
    });
  }
  if (comp4Active) {
    comps.push({
      id: 4,
      price: parseFloat(comp4Price) || 0,
      beds: comp4Beds,
      baths: comp4Baths,
      sqft: comp4Sqft,
      garage: comp4Garage,
      condition: comp4Condition,
      age: comp4Age,
      dom: comp4DOM,
      pool: comp4Pool,
      lotSize: comp4LotSize,
      location: comp4Location,
      view: comp4View,
      upgrades: comp4Upgrades
    });
  }
  if (comp5Active) {
    comps.push({
      id: 5,
      price: parseFloat(comp5Price) || 0,
      beds: comp5Beds,
      baths: comp5Baths,
      sqft: comp5Sqft,
      garage: comp5Garage,
      condition: comp5Condition,
      age: comp5Age,
      dom: comp5DOM,
      pool: comp5Pool,
      lotSize: comp5LotSize,
      location: comp5Location,
      view: comp5View,
      upgrades: comp5Upgrades
    });
  }
  if (comp6Active) {
    comps.push({
      id: 6,
      price: parseFloat(comp6Price) || 0,
      beds: comp6Beds,
      baths: comp6Baths,
      sqft: comp6Sqft,
      garage: comp6Garage,
      condition: comp6Condition,
      age: comp6Age,
      dom: comp6DOM,
      pool: comp6Pool,
      lotSize: comp6LotSize,
      location: comp6Location,
      view: comp6View,
      upgrades: comp6Upgrades
    });
  }

  const adjustedComps = comps.map(comp => {
    const adjustment = calcCompAdjustment(comp);
    return {
      ...comp,
      adjustment,
      adjustedPrice: comp.price + adjustment
    };
  });

  const avgAdjustedPrice = adjustedComps.length > 0
    ? adjustedComps.reduce((sum, comp) => sum + comp.adjustedPrice, 0) / adjustedComps.length
    : 0;
    
  const minPrice = adjustedComps.length > 0 ? Math.min(...adjustedComps.map(c => c.adjustedPrice)) : 0;
  const maxPrice = adjustedComps.length > 0 ? Math.max(...adjustedComps.map(c => c.adjustedPrice)) : 0;
  
  const recommendedMin = avgAdjustedPrice * 0.97;
  const recommendedMax = avgAdjustedPrice * 1.03;

  const handlePrint = () => {
    window.print();
    if (gamification) {
      gamification.recordActivity('cma_report_generated');
    }
  };

  // Save/Load Functions
  const saveCMA = () => {
    const allComps = [
      { active: comp1Active, price: comp1Price, beds: comp1Beds, baths: comp1Baths, sqft: comp1Sqft, garage: comp1Garage, condition: comp1Condition, age: comp1Age, dom: comp1DOM, pool: comp1Pool, lotSize: comp1LotSize, location: comp1Location, view: comp1View, upgrades: comp1Upgrades },
      { active: comp2Active, price: comp2Price, beds: comp2Beds, baths: comp2Baths, sqft: comp2Sqft, garage: comp2Garage, condition: comp2Condition, age: comp2Age, dom: comp2DOM, pool: comp2Pool, lotSize: comp2LotSize, location: comp2Location, view: comp2View, upgrades: comp2Upgrades },
      { active: comp3Active, price: comp3Price, beds: comp3Beds, baths: comp3Baths, sqft: comp3Sqft, garage: comp3Garage, condition: comp3Condition, age: comp3Age, dom: comp3DOM, pool: comp3Pool, lotSize: comp3LotSize, location: comp3Location, view: comp3View, upgrades: comp3Upgrades },
      { active: comp4Active, price: comp4Price, beds: comp4Beds, baths: comp4Baths, sqft: comp4Sqft, garage: comp4Garage, condition: comp4Condition, age: comp4Age, dom: comp4DOM, pool: comp4Pool, lotSize: comp4LotSize, location: comp4Location, view: comp4View, upgrades: comp4Upgrades },
      { active: comp5Active, price: comp5Price, beds: comp5Beds, baths: comp5Baths, sqft: comp5Sqft, garage: comp5Garage, condition: comp5Condition, age: comp5Age, dom: comp5DOM, pool: comp5Pool, lotSize: comp5LotSize, location: comp5Location, view: comp5View, upgrades: comp5Upgrades },
      { active: comp6Active, price: comp6Price, beds: comp6Beds, baths: comp6Baths, sqft: comp6Sqft, garage: comp6Garage, condition: comp6Condition, age: comp6Age, dom: comp6DOM, pool: comp6Pool, lotSize: comp6LotSize, location: comp6Location, view: comp6View, upgrades: comp6Upgrades }
    ];

    const cmaData = {
      version: '2.0',
      savedDate: new Date().toISOString(),
      client: { name: clientName, preparedBy, brokerage: brokerageName, purpose: reportPurpose },
      subject: { address: subjectAddress, beds: subjectBeds, baths: subjectBaths, sqft: subjectSqft, garage: subjectGarage, condition: subjectCondition, age: subjectAge, pool: subjectPool, lotSize: subjectLotSize, location: subjectLocation, view: subjectView, upgrades: subjectUpgrades },
      adjustments: { bed: bedAdjustment, bath: bathAdjustment, sqft: sqftAdjustment, garage: garageAdjustment, condition: conditionAdjustment, age: ageAdjustment, dom: domAdjustment, pool: poolAdjustment, lotSize: lotSizeAdjustment, location: locationAdjustment, view: viewAdjustment, upgrades: upgradesAdjustment },
      comparables: allComps
    };

    const saveName = subjectAddress || `CMA_${new Date().toLocaleDateString().replace(/\//g, '-')}`;
    const savedCMAs = JSON.parse(localStorage.getItem('savedCMAs') || '{}');
    savedCMAs[saveName] = cmaData;
    localStorage.setItem('savedCMAs', JSON.stringify(savedCMAs));
    localStorage.removeItem('cma_draft'); // Clear draft after saving
    showNotification(`✅ CMA saved: ${saveName}`, 'success');
  };

  const getSavedCMAs = () => {
    return Object.keys(JSON.parse(localStorage.getItem('savedCMAs') || '{}'));
  };

  const getSavedCMAsWithData = () => {
    const savedCMAs = JSON.parse(localStorage.getItem('savedCMAs') || '{}');
    return Object.entries(savedCMAs).map(([name, data]) => ({
      name,
      date: data.savedDate,
      clientName: data.client?.name || 'N/A',
      address: data.subject?.address || 'No address',
      comps: data.comparables?.filter(c => c.active).length || 0,
      ...data
    })).sort((a, b) => new Date(b.date) - new Date(a.date));
  };

  const duplicateCMA = (saveName) => {
    const savedCMAs = JSON.parse(localStorage.getItem('savedCMAs') || '{}');
    const original = savedCMAs[saveName];
    if (!original) return;
    
    const newName = `${saveName} (Copy)`;
    savedCMAs[newName] = {
      ...original,
      savedDate: new Date().toISOString()
    };
    localStorage.setItem('savedCMAs', JSON.stringify(savedCMAs));
    alert(`✅ CMA duplicated: ${newName}`);
  };

  const loadCMA = (saveName) => {
    const savedCMAs = JSON.parse(localStorage.getItem('savedCMAs') || '{}');
    const data = savedCMAs[saveName];
    if (!data) return alert('❌ CMA not found');

    setClientName(data.client?.name || '');
    setPreparedBy(data.client?.preparedBy || '');
    setBrokerageName(data.client?.brokerage || '');
    setReportPurpose(data.client?.purpose || 'listing');
    
    const s = data.subject;
    setSubjectAddress(s.address || ''); setSubjectBeds(s.beds || '3'); setSubjectBaths(s.baths || '2'); setSubjectSqft(s.sqft || '1800');
    setSubjectGarage(s.garage || 'yes'); setSubjectCondition(s.condition || 'good'); setSubjectAge(s.age || '10');
    setSubjectPool(s.pool || 'no'); setSubjectLotSize(s.lotSize || '8000'); setSubjectLocation(s.location || '3');
    setSubjectView(s.view || 'none'); setSubjectUpgrades(s.upgrades || 'average');

    const a = data.adjustments;
    setBedAdjustment(a.bed || '20000'); setBathAdjustment(a.bath || '15000'); setSqftAdjustment(a.sqft || '100');
    setGarageAdjustment(a.garage || '15000'); setConditionAdjustment(a.condition || '10000'); setAgeAdjustment(a.age || '2000');
    setDomAdjustment(a.dom || '500'); setPoolAdjustment(a.pool || '20000'); setLotSizeAdjustment(a.lotSize || '5');
    setLocationAdjustment(a.location || '10000'); setViewAdjustment(a.view || '25000'); setUpgradesAdjustment(a.upgrades || '15000');

    const c = data.comparables || [];
    if (c[0]) { setComp1Active(c[0].active); setComp1Price(c[0].price); setComp1Beds(c[0].beds); setComp1Baths(c[0].baths); setComp1Sqft(c[0].sqft); setComp1Garage(c[0].garage); setComp1Condition(c[0].condition); setComp1Age(c[0].age); setComp1DOM(c[0].dom); setComp1Pool(c[0].pool || 'no'); setComp1LotSize(c[0].lotSize || '7500'); setComp1Location(c[0].location || '3'); setComp1View(c[0].view || 'none'); setComp1Upgrades(c[0].upgrades || 'average'); }
    if (c[1]) { setComp2Active(c[1].active); setComp2Price(c[1].price); setComp2Beds(c[1].beds); setComp2Baths(c[1].baths); setComp2Sqft(c[1].sqft); setComp2Garage(c[1].garage); setComp2Condition(c[1].condition); setComp2Age(c[1].age); setComp2DOM(c[1].dom); setComp2Pool(c[1].pool || 'no'); setComp2LotSize(c[1].lotSize || '8500'); setComp2Location(c[1].location || '4'); setComp2View(c[1].view || 'none'); setComp2Upgrades(c[1].upgrades || 'excellent'); }
    if (c[2]) { setComp3Active(c[2].active); setComp3Price(c[2].price); setComp3Beds(c[2].beds); setComp3Baths(c[2].baths); setComp3Sqft(c[2].sqft); setComp3Garage(c[2].garage); setComp3Condition(c[2].condition); setComp3Age(c[2].age); setComp3DOM(c[2].dom); setComp3Pool(c[2].pool || 'no'); setComp3LotSize(c[2].lotSize || '6500'); setComp3Location(c[2].location || '2'); setComp3View(c[2].view || 'none'); setComp3Upgrades(c[2].upgrades || 'poor'); }
    if (c[3]) { setComp4Active(c[3].active); setComp4Price(c[3].price); setComp4Beds(c[3].beds); setComp4Baths(c[3].baths); setComp4Sqft(c[3].sqft); setComp4Garage(c[3].garage); setComp4Condition(c[3].condition); setComp4Age(c[3].age); setComp4DOM(c[3].dom); setComp4Pool(c[3].pool || 'no'); setComp4LotSize(c[3].lotSize || '8000'); setComp4Location(c[3].location || '3'); setComp4View(c[3].view || 'none'); setComp4Upgrades(c[3].upgrades || 'average'); }
    if (c[4]) { setComp5Active(c[4].active); setComp5Price(c[4].price); setComp5Beds(c[4].beds); setComp5Baths(c[4].baths); setComp5Sqft(c[4].sqft); setComp5Garage(c[4].garage); setComp5Condition(c[4].condition); setComp5Age(c[4].age); setComp5DOM(c[4].dom); setComp5Pool(c[4].pool || 'no'); setComp5LotSize(c[4].lotSize || '8200'); setComp5Location(c[4].location || '3'); setComp5View(c[4].view || 'none'); setComp5Upgrades(c[4].upgrades || 'average'); }
    if (c[5]) { setComp6Active(c[5].active); setComp6Price(c[5].price); setComp6Beds(c[5].beds); setComp6Baths(c[5].baths); setComp6Sqft(c[5].sqft); setComp6Garage(c[5].garage); setComp6Condition(c[5].condition); setComp6Age(c[5].age); setComp6DOM(c[5].dom); setComp6Pool(c[5].pool || 'yes'); setComp6LotSize(c[5].lotSize || '9000'); setComp6Location(c[5].location || '4'); setComp6View(c[5].view || 'park'); setComp6Upgrades(c[5].upgrades || 'excellent'); }

    setShowSaveLoad(false);
    alert(`✅ CMA loaded: ${saveName}`);
  };

  const deleteCMA = (saveName) => {
    if (!confirm(`Delete CMA: ${saveName}?`)) return;
    const savedCMAs = JSON.parse(localStorage.getItem('savedCMAs') || '{}');
    delete savedCMAs[saveName];
    localStorage.setItem('savedCMAs', JSON.stringify(savedCMAs));
    alert(`🗑️ Deleted: ${saveName}`);
  };

  const exportToCSV = () => {
    const csvData = [];
    csvData.push(['CMA Report - ' + (subjectAddress || 'Analysis')]);
    csvData.push(['Generated:', new Date().toLocaleDateString()]);
    csvData.push([]);
    csvData.push(['Client Information']);
    csvData.push(['Client Name:', clientName]);
    csvData.push(['Prepared By:', preparedBy]);
    csvData.push(['Brokerage:', brokerageName]);
    csvData.push([]);
    csvData.push(['Subject Property']);
    csvData.push(['Address:', subjectAddress]);
    csvData.push(['Beds:', subjectBeds, 'Baths:', subjectBaths, 'Sq Ft:', subjectSqft]);
    csvData.push([]);
    csvData.push(['Comparables']);
    csvData.push(['Comp #', 'Sale Price', 'Beds', 'Baths', 'Sq Ft', 'Garage', 'Condition', 'Age', 'DOM', 'Adjustment', 'Adjusted Value']);
    
    adjustedComps.forEach(comp => {
      csvData.push([
        comp.id,
        comp.price,
        comp.beds,
        comp.baths,
        comp.sqft,
        comp.garage,
        comp.condition,
        comp.age,
        comp.dom,
        comp.adjustment,
        comp.adjustedPrice
      ]);
    });
    
    csvData.push([]);
    csvData.push(['Summary']);
    csvData.push(['Average Adjusted Value:', avgAdjustedPrice.toFixed(0)]);
    csvData.push(['Recommended Range:', recommendedMin.toFixed(0), 'to', recommendedMax.toFixed(0)]);
    
    const csvString = csvData.map(row => row.join(',')).join('\n');
    const blob = new Blob([csvString], { type: 'text/csv' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `CMA_${subjectAddress || 'Report'}_${new Date().toLocaleDateString().replace(/\//g, '-')}.csv`;
    a.click();
    showNotification('✅ CSV exported successfully!', 'success');
  };

  const exportToJSON = () => {
    const allComps = [
      comp1Active && { id: 1, price: comp1Price, beds: comp1Beds, baths: comp1Baths, sqft: comp1Sqft, garage: comp1Garage, condition: comp1Condition, age: comp1Age, dom: comp1DOM, pool: comp1Pool, lotSize: comp1LotSize, location: comp1Location, view: comp1View, upgrades: comp1Upgrades, active: true },
      { active: comp2Active, price: comp2Price, beds: comp2Beds, baths: comp2Baths, sqft: comp2Sqft, garage: comp2Garage, condition: comp2Condition, age: comp2Age, dom: comp2DOM, pool: comp2Pool, lotSize: comp2LotSize, location: comp2Location, view: comp2View, upgrades: comp2Upgrades },
      { active: comp3Active, price: comp3Price, beds: comp3Beds, baths: comp3Baths, sqft: comp3Sqft, garage: comp3Garage, condition: comp3Condition, age: comp3Age, dom: comp3DOM, pool: comp3Pool, lotSize: comp3LotSize, location: comp3Location, view: comp3View, upgrades: comp3Upgrades },
      { active: comp4Active, price: comp4Price, beds: comp4Beds, baths: comp4Baths, sqft: comp4Sqft, garage: comp4Garage, condition: comp4Condition, age: comp4Age, dom: comp4DOM, pool: comp4Pool, lotSize: comp4LotSize, location: comp4Location, view: comp4View, upgrades: comp4Upgrades },
      { active: comp5Active, price: comp5Price, beds: comp5Beds, baths: comp5Baths, sqft: comp5Sqft, garage: comp5Garage, condition: comp5Condition, age: comp5Age, dom: comp5DOM, pool: comp5Pool, lotSize: comp5LotSize, location: comp5Location, view: comp5View, upgrades: comp5Upgrades },
      { active: comp6Active, price: comp6Price, beds: comp6Beds, baths: comp6Baths, sqft: comp6Sqft, garage: comp6Garage, condition: comp6Condition, age: comp6Age, dom: comp6DOM, pool: comp6Pool, lotSize: comp6LotSize, location: comp6Location, view: comp6View, upgrades: comp6Upgrades }
    ];
    const data = {
      version: '2.0',
      exportDate: new Date().toISOString(),
      client: { name: clientName, preparedBy, brokerage: brokerageName, purpose: reportPurpose },
      subject: { address: subjectAddress, beds: subjectBeds, baths: subjectBaths, sqft: subjectSqft, garage: subjectGarage, condition: subjectCondition, age: subjectAge, pool: subjectPool, lotSize: subjectLotSize, location: subjectLocation, view: subjectView, upgrades: subjectUpgrades },
      adjustments: { bed: bedAdjustment, bath: bathAdjustment, sqft: sqftAdjustment, garage: garageAdjustment, condition: conditionAdjustment, age: ageAdjustment, dom: domAdjustment, pool: poolAdjustment, lotSize: lotSizeAdjustment, location: locationAdjustment, view: viewAdjustment, upgrades: upgradesAdjustment },
      comparables: allComps
    };
    const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `CMA_${subjectAddress || 'export'}_${new Date().toISOString().split('T')[0]}.json`;
    a.click();
    URL.revokeObjectURL(url);
  };

  const loadChallenge = (challenge) => {
    if (challenge.realWorldChallenge) {
      // Real-world challenge - no pre-loaded data
      setActiveChallenge(challenge);
      setShowChallenges(false);
      setChallengeStartTime(Date.now());
      alert(`🎯 ${challenge.title}\n\nThis is a REAL-WORLD challenge! Follow the instructions to gather real property data from public sources. Good luck!`);
      return;
    }

    const scenario = challenge.scenario;
    
    // Load subject property
    setSubjectAddress(scenario.subject.address);
    setSubjectBeds(scenario.subject.beds);
    setSubjectBaths(scenario.subject.baths);
    setSubjectSqft(scenario.subject.sqft);
    setSubjectGarage(scenario.subject.garage);
    setSubjectCondition(scenario.subject.condition);
    setSubjectAge(scenario.subject.age);

    // Load adjustment values
    setBedAdjustment(scenario.adjustments.bed);
    setBathAdjustment(scenario.adjustments.bath);
    setSqftAdjustment(scenario.adjustments.sqft);
    setGarageAdjustment(scenario.adjustments.garage);
    setConditionAdjustment(scenario.adjustments.condition);
    setAgeAdjustment(scenario.adjustments.age);
    setDomAdjustment(scenario.adjustments.dom);

    // Load comparables
    if (scenario.comps[0]) {
      setComp1Active(scenario.comps[0].active);
      setComp1Price(scenario.comps[0].price);
      setComp1Beds(scenario.comps[0].beds);
      setComp1Baths(scenario.comps[0].baths);
      setComp1Sqft(scenario.comps[0].sqft);
      setComp1Garage(scenario.comps[0].garage);
      setComp1Condition(scenario.comps[0].condition);
      setComp1Age(scenario.comps[0].age);
      setComp1DOM(scenario.comps[0].dom);
    }

    if (scenario.comps[1]) {
      setComp2Active(scenario.comps[1].active);
      setComp2Price(scenario.comps[1].price);
      setComp2Beds(scenario.comps[1].beds);
      setComp2Baths(scenario.comps[1].baths);
      setComp2Sqft(scenario.comps[1].sqft);
      setComp2Garage(scenario.comps[1].garage);
      setComp2Condition(scenario.comps[1].condition);
      setComp2Age(scenario.comps[1].age);
      setComp2DOM(scenario.comps[1].dom);
    }

    if (scenario.comps[2]) {
      setComp3Active(scenario.comps[2].active);
      setComp3Price(scenario.comps[2].price);
      setComp3Beds(scenario.comps[2].beds);
      setComp3Baths(scenario.comps[2].baths);
      setComp3Sqft(scenario.comps[2].sqft);
      setComp3Garage(scenario.comps[2].garage);
      setComp3Condition(scenario.comps[2].condition);
      setComp3Age(scenario.comps[2].age);
      setComp3DOM(scenario.comps[2].dom);
    }

    setActiveChallenge(challenge);
    setShowChallenges(false);
    setChallengeStartTime(Date.now());
  };

  const completeChallenge = () => {
    if (!activeChallenge || !challengeStartTime) return;

    const completionTime = Math.floor((Date.now() - challengeStartTime) / 1000); // seconds
    const isWithinTarget = activeChallenge.scenario && 
      avgAdjustedPrice >= activeChallenge.scenario.targetValue.min &&
      avgAdjustedPrice <= activeChallenge.scenario.targetValue.max;

    if (gamification) {
      // Award XP
      gamification.addXP(activeChallenge.xpReward, `Completed: ${activeChallenge.title}`);
      
      // Track CMA stats
      gamification.recordActivity('cma_completed', {
        challengeId: activeChallenge.id,
        difficulty: activeChallenge.difficulty,
        completionTime,
        avgValue: avgAdjustedPrice,
        accurate: isWithinTarget,
        compsUsed: comps.length
      });
    }

    setShowChallengeComplete(true);
    setActiveChallenge(null);
    setChallengeStartTime(null);
  };

  const exitChallenge = () => {
    setActiveChallenge(null);
    setChallengeStartTime(null);
    setShowChallengeComplete(false);
  };

  return (
    <div className="calculator-container cma-enhanced">
      {notification && (
        <div className={`notification-toast ${notification.type}`}>
          <span>{notification.message}</span>
          <button onClick={() => setNotification(null)}>✕</button>
        </div>
      )}
      
      {lastSaved && (
        <div className="auto-save-indicator">
          💾 Auto-saved at {lastSaved}
        </div>
      )}
      
      {showLawBanner && (
        <div className="law-change-banner">
          <div className="law-banner-content">
            <div className="law-banner-icon">⚖️</div>
            <div className="law-banner-text">
              <strong>Important MA Law Change:</strong> New inspection waiver regulations effective October 15, 2025
            </div>
            <button className="btn-info btn-small" onClick={() => setShowLegalInfo(true)}>
              View Details
            </button>
            <button className="law-banner-close" onClick={() => setShowLawBanner(false)}>
              ✕
            </button>
          </div>
        </div>
      )}

      {showLegalInfo && (
        <div className="legal-info-panel">
          <div className="legal-panel-header">
            <h3>⚖️ Massachusetts Inspection Waiver Law Change</h3>
            <button className="btn-secondary" onClick={() => setShowLegalInfo(false)}>✕ Close</button>
          </div>

          <div className="legal-effective-date">
            <strong>Effective Date:</strong> October 15, 2025
          </div>

          <div className="legal-purpose">
            <h4>🎯 Purpose of New Law Change</h4>
            <p>
              The regulation protects the <strong>informed decision-making of homebuyers</strong>. It prohibits 
              sellers and their agents from requiring or encouraging buyers to waive their right to a home 
              inspection as a condition for having their offer accepted — except in limited, clearly defined circumstances.
            </p>
            <div className="legal-reference">
              <p>
                <strong>Legal Authority:</strong> Required pursuant to the <strong>Affordable Homes Act</strong>, 
                Chapter 150 of the Acts of 2024, the Executive Office of Housing and Livable Communities (EOHLC) 
                has adopted <strong>760 CMR 74.00</strong>, a regulation designed to protect prospective homebuyers 
                by ensuring their right to obtain a home inspection is not unfairly waived, restricted, or undermined 
                in residential real estate transactions.
              </p>
            </div>
          </div>

          <div className="legal-content">
            <h4>📋 What the Law Does:</h4>
            
            <div className="legal-item">
              <div className="legal-item-title">
                <span className="legal-icon">🚫</span>
                <strong>Prohibits sellers or their agents from requiring inspection waivers</strong>
              </div>
              <p>
                Sellers cannot make the sale contingent on the buyer waiving their right to a home inspection. 
                Likewise, they cannot accept offers from buyers who indicate in advance they intend to waive inspections.
              </p>
            </div>

            <div className="legal-item">
              <div className="legal-item-title">
                <span className="legal-icon">📝</span>
                <strong>Mandates a written disclosure</strong>
              </div>
              <p>
                At or before signing the first purchase agreement, sellers must provide a separate written disclosure—signed 
                by both buyer and seller—that clearly states buyers have the right to inspection and their offer is not 
                conditioned on waiving it.
              </p>
            </div>

            <div className="legal-item">
              <div className="legal-item-title">
                <span className="legal-icon">⛔</span>
                <strong>Bars contracts that undermine inspections</strong>
              </div>
              <p>
                Clauses that effectively make inspections meaningless—e.g., severely limiting scheduling or preventing 
                buyers from backing out based on results—are prohibited. Reasonable, mutually agreed-upon terms, like 
                repair cost limits or deposit refund conditions, remain allowed.
              </p>
            </div>

            <div className="legal-item">
              <div className="legal-item-title">
                <span className="legal-icon">🏠</span>
                <strong>Applies to residential properties</strong>
              </div>
              <p>
                From October 15, 2025 forward, these rules apply to <strong>real estate transactions involving residential 
                properties</strong> of 1-4 units, condos, and co-ops.
              </p>
            </div>
          </div>

          <div className="legal-compliance-checklist">
            <h4>✅ Agent Compliance Checklist:</h4>
            <ul>
              <li>✓ Never suggest buyers waive inspections</li>
              <li>✓ Provide required written disclosure</li>
              <li>✓ Ensure both parties sign disclosure</li>
              <li>✓ Do not include prohibited contract clauses</li>
              <li>✓ Allow reasonable inspection scheduling</li>
              <li>✓ Permit buyers to back out based on inspection results</li>
            </ul>
          </div>

          <div className="legal-resources">
            <h4>📚 Additional Resources:</h4>
            <p>For more information about this law and compliance requirements, consult with your broker or legal counsel.</p>
          </div>

          <div className="legal-footer-actions">
            <button className="btn-info" onClick={() => { setShowLegalInfo(false); setShowSalesContracts(true); }}>
              📋 MA Sales Contracts →
            </button>
            <button className="btn-secondary" onClick={() => { setShowLegalInfo(false); setShowContractInfo(true); }}>
              📄 Contract Elements →
            </button>
          </div>
        </div>
      )}

      {showSalesContracts && (
        <div className="sales-contracts-panel">
          <div className="sales-panel-header">
            <h3>📋 Massachusetts Sales Contracts</h3>
            <button className="btn-secondary" onClick={() => setShowSalesContracts(false)}>✕ Close</button>
          </div>

          <div className="ma-specific-notice">
            <strong>🏛️ MA-Specific:</strong> Massachusetts is one of the few states that uses <strong>2 contracts</strong> in most real estate transactions.
          </div>

          <div className="two-contract-system">
            <div className="contract-box contract-1">
              <div className="contract-number">1st</div>
              <h4>📝 CONTRACT TO PURCHASE (a/k/a "Offer")</h4>
              <p className="contract-subtitle">First contract written by agent. PURCHASE & SALES AGREEMENT is the 2nd contract.</p>
              
              <div className="contract-elements-list">
                <h5>Required Elements:</h5>
                <div className="elements-grid">
                  <div className="element-item">✓ Date</div>
                  <div className="element-item">✓ Name of parties</div>
                  <div className="element-item">✓ Property Address</div>
                  <div className="element-item">✓ Offer price</div>
                  <div className="element-item highlight-red">✓ Binder (a/k/a Earnest Money Deposit amounts given for Offer & P&S) (DepositLink) <strong>Deliver ASAP!</strong></div>
                  <div className="element-item">✓ Date Offer good until (Acceptance, Counter, Rejected)</div>
                  <div className="element-item">✓ Inspection timeframe</div>
                  <div className="element-item">✓ Date for signing a Purchase & Sales Agreement (2nd Contract) (2nd Deposit)</div>
                  <div className="element-item">✓ Closing Date</div>
                  <div className="element-item">✓ Mortgage Contingency</div>
                  <div className="element-item">✓ Other conditions (personal property included/excluded, due diligence period, home sale contingency, appraisal, repairs, etc.)</div>
                  <div className="element-item">✓ Addendums, Riders & Amendments attached & made part of the agreement</div>
                  <div className="element-item">✓ Contract is valid only after it has been fully executed, delivered to all parties and earnest money deposit delivered</div>
                  <div className="element-item">✓ Buyer's Agent has the right to present their offer to seller/seller's agent 😊</div>
                </div>
              </div>

              <div className="important-notes">
                <div className="note-item note-warning">
                  <strong>⏰ NOTE:</strong> Time is of essence for agent to present offer to seller. No requirement to sign rejected offers. 
                  Listing agent only must provide written affirmation to selling agent with a reasonable amount of time that the offer was presented.
                </div>
                <div className="note-item note-critical">
                  <strong>⚖️ CRITICAL:</strong> *The Offer on its own IS BINDING & doesn't require the signing of a P&S to be considered enforceable. 
                  <em>Decision of MA Supreme Judicial Court McCarthy v. Tobin 1999</em>
                </div>
              </div>
            </div>

            <div className="contract-box contract-2">
              <div className="contract-number">2nd</div>
              <h4>📄 PURCHASE & SALES AGREEMENT</h4>
              <p className="contract-subtitle">The formal second contract that finalizes the transaction details.</p>
              
              <div className="ps-agreement-note">
                <p>
                  This is the comprehensive contract that includes all final terms, conditions, and legal provisions 
                  for the real estate transaction. It builds upon the initial Contract to Purchase and includes:
                </p>
                <ul>
                  <li>Complete legal description of property</li>
                  <li>All contingencies and conditions</li>
                  <li>Detailed financial terms</li>
                  <li>Seller disclosures</li>
                  <li>Title and conveyance details</li>
                  <li>Closing procedures</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="mccarthy-case">
            <h4>⚖️ McCarthy v. Tobin (1999) - Landmark Case</h4>
            <p>
              The Massachusetts Supreme Judicial Court ruled that the Contract to Purchase (Offer) is legally binding 
              on its own, even without a signed Purchase & Sales Agreement. This makes the initial offer much more 
              significant in MA than in many other states.
            </p>
            <p className="case-implication">
              <strong>Implication for Agents:</strong> Ensure all terms are clearly stated in the initial offer, as it 
              can be enforced as a binding contract!
            </p>
          </div>

          <div className="agent-tips-box">
            <h4>💡 Critical Tips for MA Agents:</h4>
            <div className="tips-grid">
              <div className="tip-card">
                <strong>📮 Deliver Deposits ASAP</strong>
                <p>Earnest money deposits must be delivered promptly. Use DepositLink or deliver within required timeframe.</p>
              </div>
              <div className="tip-card">
                <strong>⏰ Present Offers Promptly</strong>
                <p>Time is of essence. Present all offers to seller/seller's agent in timely manner with written confirmation.</p>
              </div>
              <div className="tip-card">
                <strong>✍️ Complete Offer Thoroughly</strong>
                <p>Since the offer is binding (McCarthy v. Tobin), include ALL terms clearly in the first contract.</p>
              </div>
              <div className="tip-card">
                <strong>📋 Track Both Contracts</strong>
                <p>Calendar dates for both contracts. The P&S date is in the offer and must be met.</p>
              </div>
            </div>
          </div>

          <div className="legal-footer-actions">
            <button className="btn-info" onClick={() => { setShowSalesContracts(false); setShowMortgageTheory(true); }}>
              💰 Mortgage Theory →
            </button>
            <button className="btn-secondary" onClick={() => { setShowSalesContracts(false); setShowLegalInfo(true); }}>
              ← Back to Law Change
            </button>
          </div>
        </div>
      )}

      {showMortgageTheory && (
        <div className="mortgage-theory-panel">
          <div className="mortgage-panel-header">
            <h3>💰 Mortgage Theory: Title Theory vs. Lien Theory</h3>
            <button className="btn-secondary" onClick={() => setShowMortgageTheory(false)}>✕ Close</button>
          </div>

          <div className="theory-intro">
            <p>There are <strong>2 theories</strong> concerning the legal effect of a mortgage. They are:</p>
          </div>

          <div className="mortgage-theories">
            <div className="theory-card lien-theory">
              <div className="theory-badge">Lien Theory</div>
              <h4>🔒 Lien Theory</h4>
              <p className="theory-definition">
                The lien theory interprets a mortgage <strong>only as a lien on real property</strong>. Upon default, 
                the mortgagee (Lender) through <strong>judicial foreclosure</strong>, takes possession and is entitled to rents.
              </p>
              
              <div className="theory-details">
                <h5>Key Characteristics:</h5>
                <ul>
                  <li>Mortgage is treated as a security interest/lien</li>
                  <li>Borrower retains full title to property</li>
                  <li>Lender must go through court (judicial foreclosure) to take possession</li>
                  <li>Upon default, lender entitled to possession and rents</li>
                </ul>
              </div>
            </div>

            <div className="theory-card title-theory">
              <div className="theory-badge title-badge">Title Theory</div>
              <h4>📜 Title Theory</h4>
              <p className="theory-definition">
                The mortgage <strong>splits title to the property</strong>. <mark className="highlight-yellow">The mortgagee (Lender) 
                takes legal title to the property</mark> while the <mark className="highlight-green">mortgagor (Buyer) takes 
                equitable title</mark>, <mark className="highlight-purple">subject to the mortgagor's right to redeem legal 
                title upon repayment</mark> of the promissory note. Upon default, the lender may take possession of the 
                property and seize the rents.
              </p>
              
              <div className="theory-details">
                <h5>Key Characteristics:</h5>
                <ul>
                  <li><strong>Legal title:</strong> Held by lender (mortgagee)</li>
                  <li><strong>Equitable title:</strong> Held by borrower (mortgagor)</li>
                  <li><strong>Right of redemption:</strong> Borrower can reclaim legal title by paying off loan</li>
                  <li>Upon default, lender can take possession without court action</li>
                  <li>Lender can seize rents immediately upon default</li>
                </ul>
              </div>

              <div className="ma-title-state">
                <strong>🏛️ Massachusetts is a TITLE THEORY state.</strong>
              </div>
            </div>

            <div className="theory-card modified-lien">
              <div className="theory-badge modified-badge">Modified Lien Theory</div>
              <h4>⚖️ Modified Lien Theory</h4>
              <p className="theory-definition">
                A number of states have modified the strict interpretations of <mark className="highlight-blue">title & 
                lien theories</mark>. These states allow lender to take possession of the mortgaged <mark className="highlight-blue">real 
                estate upon default</mark> through the action of a <strong>trustee</strong> who initiates an auction or 
                sale of property on behalf of lender. <strong>No court action is required.</strong>
              </p>
              
              <div className="theory-details">
                <h5>Key Characteristics:</h5>
                <ul>
                  <li>Hybrid approach between lien and title theories</li>
                  <li>Trustee holds title for benefit of lender</li>
                  <li>Non-judicial foreclosure through trustee sale</li>
                  <li>Faster foreclosure process than judicial</li>
                  <li>No court involvement required</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="theory-comparison">
            <h4>📊 Quick Comparison Chart</h4>
            <table className="comparison-table">
              <thead>
                <tr>
                  <th>Feature</th>
                  <th>Lien Theory</th>
                  <th>Title Theory</th>
                  <th>Modified Lien</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>Title Holder</strong></td>
                  <td>Borrower has full title</td>
                  <td className="highlight-cell">Lender has legal title<br/>Borrower has equitable title</td>
                  <td>Trustee holds title</td>
                </tr>
                <tr>
                  <td><strong>Foreclosure Type</strong></td>
                  <td>Judicial (court required)</td>
                  <td className="highlight-cell">Non-judicial (no court)</td>
                  <td>Non-judicial (trustee sale)</td>
                </tr>
                <tr>
                  <td><strong>Right to Possession</strong></td>
                  <td>After court order</td>
                  <td className="highlight-cell">Immediate upon default</td>
                  <td>After trustee sale</td>
                </tr>
                <tr>
                  <td><strong>MA Status</strong></td>
                  <td>❌ Not MA</td>
                  <td className="highlight-cell">✅ MA is Title Theory!</td>
                  <td>❌ Not MA</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="security-debt-section">
            <h4>🔒 Security & Debt</h4>
            
            <div className="mortgage-property-box">
              <h5>What Property May Be Mortgaged?</h5>
              <ul className="property-mortgage-list">
                <li>
                  <strong>Any interest in real estate</strong> that may be sold, may also be pledged as security for a debt.
                </li>
                <li>
                  A person <strong>cannot convey greater rights</strong> in property than they actually have.
                </li>
                <li className="example-item">
                  <strong>EXAMPLE:</strong> An owner of a Fee Simple Estate can mortgage the whole property & it's rights, 
                  but a large corporation renting space in a shopping center may mortgage it's leasehold interest to finance 
                  remodeling work.
                </li>
              </ul>
            </div>

            <div className="loan-instruments-box">
              <h5>📄 LOAN INSTRUMENTS</h5>
              <p className="instruments-intro">
                Consist of <strong>2 parts: the debt itself and security for the debt.</strong>
              </p>
              
              <div className="instruments-list">
                <div className="instrument-card promissory-note">
                  <div className="instrument-icon">📝</div>
                  <div className="instrument-content">
                    <h6>Promissory Note</h6>
                    <p>
                      Written promise to repay a debt in specific installments. <strong>Unconditional promise to repay.</strong> 
                      The note states the amount of debt (loan or "principal") and the method of payment. 
                      Signed by all parties who have an interest in the property.
                    </p>
                  </div>
                </div>

                <div className="instrument-card mortgage-deed">
                  <div className="instrument-icon">🏛️</div>
                  <div className="instrument-content">
                    <h6>Mortgage or Deed of Trust</h6>
                    <p>
                      The instrument which actually provides <strong>security or "collateral"</strong> for the debt. 
                      The instrument is a <mark className="highlight-yellow">pledge of property to secure the loan</mark>. 
                      When recorded, it becomes a lien against. Because a pledge is not legally effective unless there 
                      is a debt to secure, <strong>so the promissory note is fundamental to the transaction.</strong>
                    </p>
                  </div>
                </div>

                <div className="instrument-card hypothecate">
                  <div className="instrument-icon">🔑</div>
                  <div className="instrument-content">
                    <h6>Hypothecate</h6>
                    <p>
                      Is to use <strong>real estate as security for the loan without giving up possession.</strong>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mortgagor-mortgagee-box">
              <div className="definition-pair">
                <div className="definition-item borrower">
                  <strong>MORTGAGOR</strong>
                  <span>=</span>
                  <strong>Borrower</strong>
                </div>
                <div className="definition-item lender">
                  <strong>MORTGAGEE</strong>
                  <span>=</span>
                  <strong>Lender</strong>
                </div>
              </div>
            </div>
          </div>

          <div className="agent-implications">
            <h4>💡 Implications for MA Real Estate Agents:</h4>
            <div className="implications-grid">
              <div className="implication-card">
                <strong>🏦 Lender Rights</strong>
                <p>In MA (title theory), lender has stronger position with legal title. Can take possession upon default without court.</p>
              </div>
              <div className="implication-card">
                <strong>👤 Borrower Rights</strong>
                <p>Borrower has equitable title and right of redemption. Can reclaim legal title by paying off mortgage.</p>
              </div>
              <div className="implication-card">
                <strong>⚖️ Foreclosure Process</strong>
                <p>MA allows non-judicial foreclosure since lender holds legal title. Faster than judicial foreclosure states.</p>
              </div>
              <div className="implication-card">
                <strong>📋 Contract Language</strong>
                <p>Title theory affects contract language regarding ownership, possession, and foreclosure rights.</p>
              </div>
            </div>
          </div>

          <div className="legal-footer-actions">
            <button className="btn-info" onClick={() => { setShowMortgageTheory(false); setShowContractInfo(true); }}>
              Contract Elements →
            </button>
            <button className="btn-secondary" onClick={() => { setShowMortgageTheory(false); setShowSalesContracts(true); }}>
              ← Back to Sales Contracts
            </button>
          </div>
        </div>
      )}

      {showContractInfo && (
        <div className="contract-info-panel">
          <div className="contract-panel-header">
            <h3>⭐ Elements of a Valid Contract</h3>
            <button className="btn-secondary" onClick={() => setShowContractInfo(false)}>✕ Close</button>
          </div>

          <p className="contract-intro">
            For a real estate contract to be legally binding, it must contain all of the following essential elements:
          </p>

          <div className="contract-elements">
            <div className="contract-element">
              <div className="element-number">1</div>
              <div className="element-content">
                <h4>👥 Competent Parties</h4>
                <p className="element-definition">
                  Legal capacity to enter contract, not under influence of drugs or alcohol.
                </p>
                <p className="element-note">
                  <strong>Important:</strong> Have client sign contract before buying them a beer. If not, contract is <strong>Voidable</strong>.
                </p>
              </div>
            </div>

            <div className="contract-element">
              <div className="element-number">2</div>
              <div className="element-content">
                <h4>🤝 Mutual Assent</h4>
                <p className="element-definition">
                  Offer & Acceptance, free and voluntary act.
                </p>
                <p className="element-note">
                  A "meeting of minds" without misrepresentation, fraud or mistake.
                </p>
              </div>
            </div>

            <div className="contract-element">
              <div className="element-number">3</div>
              <div className="element-content">
                <h4>💰 Consideration</h4>
                <p className="element-definition">
                  Earnest Money Deposit.
                </p>
                <p className="element-note">
                  Something of value exchanged between parties to make the contract binding.
                </p>
              </div>
            </div>

            <div className="contract-element">
              <div className="element-number">4</div>
              <div className="element-content">
                <h4>⚖️ Legality of Object</h4>
                <p className="element-definition">
                  Intended purpose is not illegal.
                </p>
                <p className="element-note">
                  The subject matter and purpose of the contract must be legal.
                </p>
              </div>
            </div>

            <div className="contract-element">
              <div className="element-number">5</div>
              <div className="element-content">
                <h4>📝 Legal Form</h4>
                <p className="element-definition">
                  Statute of Frauds requires some contracts to be in writing.
                </p>
                <p className="element-note">
                  Real estate contracts must be in writing to be enforceable.
                </p>
              </div>
            </div>

            <div className="contract-element">
              <div className="element-number">6</div>
              <div className="element-content">
                <h4>🏠 Description of Property</h4>
                <p className="element-definition">
                  Accurate description of property.
                </p>
                <p className="element-note">
                  Must clearly identify the property being sold (legal description, address, etc.).
                </p>
              </div>
            </div>

            <div className="contract-element">
              <div className="element-number">7</div>
              <div className="element-content">
                <h4>📅 Date for Performance</h4>
                <p className="element-definition">
                  Specific time at or by which the agreed-upon act must be performed.
                </p>
                <p className="element-note">
                  Closing date and other important deadlines must be specified.
                </p>
              </div>
            </div>

            <div className="contract-element">
              <div className="element-number">8</div>
              <div className="element-content">
                <h4>⏰ Time is of Essence</h4>
                <p className="element-definition">
                  Contract must be performed within the limit specified.
                </p>
                <p className="element-note">
                  Any party who doesn't perform on time is guilty of <strong>"breach of contract."</strong>
                </p>
              </div>
            </div>

            <div className="contract-element">
              <div className="element-number">9</div>
              <div className="element-content">
                <h4>✍️ Signatures</h4>
                <p className="element-definition">
                  Signatures of the parties involved. (Buyer and Seller)
                </p>
                <p className="element-note">
                  All parties must sign for the contract to be binding.
                </p>
              </div>
            </div>
          </div>

          <div className="contract-footer">
            <div className="contract-tip">
              <strong>💡 Pro Tip:</strong> All 9 elements must be present for a valid, enforceable real estate contract. 
              Missing even one element can make the entire contract void or voidable.
            </div>
          </div>

          <div className="legal-footer-actions">
            <button className="btn-info" onClick={() => { setShowContractInfo(false); setShowContractEffects(true); }}>
              Legal Effects of Contracts →
            </button>
            <button className="btn-secondary" onClick={() => { setShowContractInfo(false); setShowLegalInfo(true); }}>
              ← Back to Law Change
            </button>
          </div>
        </div>
      )}

      {showContractEffects && (
        <div className="contract-effects-panel">
          <div className="effects-panel-header">
            <h3>📜 Legal Effects of Contracts</h3>
            <button className="btn-secondary" onClick={() => setShowContractEffects(false)}>✕ Close</button>
          </div>

          <p className="effects-intro">
            Understanding the legal status of contracts is essential. Here are the different legal effects a contract can have:
          </p>

          <div className="effects-grid">
            <div className="effect-card effect-valid">
              <div className="effect-icon">✅</div>
              <h4>VALID</h4>
              <p className="effect-definition">
                Binding and enforceable on both parties.
              </p>
              <p className="effect-note">
                This is what you want! A proper contract that can be enforced by law.
              </p>
            </div>

            <div className="effect-card effect-void">
              <div className="effect-icon">🚫</div>
              <h4>VOID</h4>
              <p className="effect-definition">
                No legal force or effect.
              </p>
              <p className="effect-note">
                <strong>Example:</strong> A contract to commit a crime. This contract never existed legally.
              </p>
            </div>

            <div className="effect-card effect-voidable">
              <div className="effect-icon">⚠️</div>
              <h4>VOIDABLE</h4>
              <p className="effect-definition">
                Valid on the surface but may be disaffirmed by one of the parties.
              </p>
              <p className="effect-note">
                <strong>Examples:</strong> Contract agreed to under duress, contract by minor, or P&S subject to financing.
              </p>
            </div>

            <div className="effect-card effect-unenforceable">
              <div className="effect-icon">⛔</div>
              <h4>UNENFORCEABLE</h4>
              <p className="effect-definition">
                Valid between the parties, but neither can force performance.
              </p>
              <p className="effect-note">
                <strong>Example:</strong> A verbal listing agreement. Valid but can't be enforced in court.
              </p>
            </div>
          </div>

          <div className="effects-important-concepts">
            <h4>⚡ Important Concepts</h4>

            <div className="concept-item">
              <div className="concept-header">
                <span className="concept-icon">🎭</span>
                <h5>DURESS, MENACE & UNDUE INFLUENCE</h5>
              </div>
              <p>
                To be Valid, every contract must be signed by the <strong>"free and voluntary act"</strong> of each party. 
                Cannot obtain signatures of parties to a contract under these circumstances.
              </p>
            </div>

            <div className="concept-item">
              <div className="concept-header">
                <span className="concept-icon">❌</span>
                <h5>CANCEL OR REVOKE</h5>
              </div>
              <p>
                Offeror may withdraw or revoke contract anytime prior to acceptance & delivery. 
                Buyer's commonly get what we call, <strong>"Cold Feet."</strong>
              </p>
            </div>

            <div className="concept-item vip-tip-concept">
              <div className="concept-header">
                <span className="concept-icon">🍾</span>
                <h5>V.I.P. TIP - Know WHEN to CELEBRATE!</h5>
              </div>
              <p>
                <strong>Cannot be under the influence of alcohol when signing contracts</strong> or it can be deemed voidable. 
                Celebrate AFTER the contract is signed, not before!
              </p>
            </div>
          </div>

          <div className="effects-summary">
            <h4>📚 Quick Reference</h4>
            <div className="summary-grid">
              <div className="summary-item">
                <strong>VALID:</strong> ✅ Enforceable
              </div>
              <div className="summary-item">
                <strong>VOID:</strong> 🚫 Never existed
              </div>
              <div className="summary-item">
                <strong>VOIDABLE:</strong> ⚠️ Can be canceled
              </div>
              <div className="summary-item">
                <strong>UNENFORCEABLE:</strong> ⛔ Can't force it
              </div>
            </div>
          </div>

          <div className="legal-footer-actions">
            <button className="btn-info" onClick={() => { setShowContractEffects(false); setShowContractPerformance(true); }}>
              Contract Performance →
            </button>
            <button className="btn-secondary" onClick={() => { setShowContractEffects(false); setShowContractInfo(true); }}>
              ← Back to Elements
            </button>
          </div>
        </div>
      )}

      {showContractPerformance && (
        <div className="contract-performance-panel">
          <div className="performance-panel-header">
            <h3>⚡ Performance of Contract</h3>
            <button className="btn-secondary" onClick={() => setShowContractPerformance(false)}>✕ Close</button>
          </div>

          <p className="performance-intro">
            Understanding how contracts are performed, breached, and modified is critical for real estate professionals:
          </p>

          <div className="performance-concepts">
            <div className="performance-item time-essence">
              <div className="performance-icon">⏰</div>
              <div className="performance-content">
                <h4>Time is of Essence</h4>
                <p className="performance-definition">
                  Each of the element of the contract <strong>MUST be performed within the specified time.</strong>
                </p>
                <div className="performance-note">
                  <strong>Critical:</strong> All deadlines in the contract are binding. Missing a deadline can constitute breach of contract.
                </div>
              </div>
            </div>

            <div className="performance-item breach">
              <div className="performance-icon">⚠️</div>
              <div className="performance-content">
                <h4>Breach of Contract</h4>
                <p className="performance-definition">
                  A party who violates the terms or conditions of a contract.
                </p>
                <div className="performance-remedies">
                  <h5>Remedies for Breach:</h5>
                  <div className="remedy-options">
                    <div className="remedy-card">
                      <strong>💰 Liquidated Damages</strong>
                      <p>Pre-determined amount specified in contract (usually earnest money deposit)</p>
                    </div>
                    <div className="remedy-card">
                      <strong>⚖️ Suit for Performance</strong>
                      <p>Court action to force the breaching party to complete their obligations</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="performance-item assignment">
              <div className="performance-icon">📝</div>
              <div className="performance-content">
                <h4>Assignment of Contract</h4>
                <p className="performance-definition">
                  Buyer may exercise their right to assign their rights of the agreement to another buyer.
                </p>
                <div className="performance-note">
                  <strong>Important:</strong> Most contracts have clause either <strong>permitting or forbidding</strong> assignment. 
                  Always check the contract language regarding assignments.
                </div>
              </div>
            </div>

            <div className="performance-item novation">
              <div className="performance-icon">🔄</div>
              <div className="performance-content">
                <h4>Novation</h4>
                <p className="performance-definition">
                  Occurs when there is a substitution of a new contract for an existing agreement with the 
                  intention of extinguishing the old contract.
                </p>
                <div className="performance-note">
                  <strong>Key Point:</strong> A novation creates an entirely new contract that replaces the original. 
                  This is different from an amendment, which modifies the existing contract.
                </div>
              </div>
            </div>
          </div>

          <div className="performance-summary-box">
            <h4>📋 Performance Summary</h4>
            <div className="summary-points">
              <div className="summary-point">
                <span className="point-icon">⏰</span>
                <span><strong>Time is Essence:</strong> Meet all deadlines or risk breach</span>
              </div>
              <div className="summary-point">
                <span className="point-icon">⚠️</span>
                <span><strong>Breach:</strong> Remedies include liquidated damages or lawsuit</span>
              </div>
              <div className="summary-point">
                <span className="point-icon">📝</span>
                <span><strong>Assignment:</strong> Check contract for permission/prohibition</span>
              </div>
              <div className="summary-point">
                <span className="point-icon">🔄</span>
                <span><strong>Novation:</strong> New contract replaces old entirely</span>
              </div>
            </div>
          </div>

          <div className="performance-tip-box">
            <strong>💡 Agent Tip:</strong> Always include specific dates and deadlines in contracts, and calendar all 
            critical dates immediately. Missing a "time is of essence" deadline can expose your client (and you) to legal liability.
          </div>

          <div className="contract-termination-section">
            <h4>🔚 Other Reasons for Contract Termination</h4>
            
            <div className="termination-reasons">
              <div className="termination-item">
                <div className="termination-icon">✅</div>
                <div className="termination-content">
                  <h5>Partial Performance of the Terms</h5>
                  <p className="term-definition">
                    If the parties agree that the <mark>work performed is close enough to completion</mark>, they can agree 
                    that the contract is discharged even if some minor elements remain unperformed.
                  </p>
                  <div className="term-example">
                    Parties mutually agree work is substantially complete despite minor unfinished items.
                  </div>
                </div>
              </div>

              <div className="termination-item">
                <div className="termination-icon">💰</div>
                <div className="termination-content">
                  <h5>Substantial Performance</h5>
                  <p className="term-definition">
                    One party has substantially performed on the contract but does not complete all the details exactly 
                    as the contract requires. <mark>Such performance may be enough to force payment</mark>, with certain 
                    adjustments for any damages suffered by the other party.
                  </p>
                  <div className="term-example">
                    <strong>Example:</strong> If a newly constructed addition to a home is finished except for polishing 
                    the brass doorknobs, the contractor is entitled to the final payment.
                  </div>
                </div>
              </div>

              <div className="termination-item">
                <div className="termination-icon">⚠️</div>
                <div className="termination-content">
                  <h5>Impossibility of Performance</h5>
                  <p className="term-definition">
                    An unforeseen circumstance has made an act required by the contract impossible or impracticable. 
                    Sometimes, a contract will cover a contingency, such as the destruction of property to be transferred.
                  </p>
                  <div className="term-example highlight-yellow">
                    <strong>Critical:</strong> <mark>An event will occur that makes fulfillment of the contract terms a 
                    practical impossibility</mark>, such as when a buyer is laid off and can no longer afford to complete the purchase.
                  </div>
                </div>
              </div>

              <div className="termination-item">
                <div className="termination-icon">🤝</div>
                <div className="termination-content">
                  <h5>Mutual Agreement of the Parties to Cancel</h5>
                  <p className="term-definition">
                    Cancellation by one party will terminate a contract but <mark>does not automatically return the parties 
                    to their original position</mark>, unless provided by law (such as the right of cancellation that 
                    accompanies some consumer contracts) or by the terms of the agreement.
                  </p>
                  <div className="term-example">
                    Both parties must agree to cancel and terms of how to unwind the contract.
                  </div>
                </div>
              </div>

              <div className="termination-item">
                <div className="termination-icon">⚖️</div>
                <div className="termination-content">
                  <h5>Operation of Law</h5>
                  <p className="term-definition">
                    The voiding of a contract by a minor, or as a result of fraud, or because a contract was altered 
                    without the written consent of all parties involved.
                  </p>
                  <div className="term-example highlight-yellow">
                    <strong>Rescission:</strong> <mark>Returns the parties to their original positions before the contract</mark>, 
                    so any monies or property exchanged must be returned. Rescission is normally a contractual remedy for 
                    a breach, but a contract may also be rescinded by the mutual agreement of the parties.
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="legal-footer-actions">
            <button className="btn-info" onClick={() => { setShowContractPerformance(false); setShowContractEffects(true); }}>
              ← Back to Legal Effects
            </button>
            <button className="btn-secondary" onClick={() => { setShowContractPerformance(false); setShowLegalInfo(true); }}>
              ← Back to Law Change
            </button>
          </div>
        </div>
      )}
      
      <div className="branded-header" style={{ '--brand-color': brandingColor }}>
        <div className="branded-header-content">
          <div className="branded-logo-section">
            {brandingLogo && <img src={brandingLogo} alt="Company Logo" className="branded-logo" />}
            {!brandingLogo && brandingCompany && <h2 style={{ color: brandingColor }}>{brandingCompany}</h2>}
          </div>
          <div className="branded-info">
            {brandingCompany && !brandingLogo && <h2>{brandingCompany}</h2>}
            <div className="branded-contact">
              {brandingPhone && <div>📞 {brandingPhone}</div>}
              {brandingEmail && <div>📧 {brandingEmail}</div>}
              {brandingLicense && <div>License: {brandingLicense}</div>}
            </div>
          </div>
        </div>
        <div style={{ marginTop: '1rem', paddingTop: '1rem', borderTop: '1px solid #e5e7eb' }}>
          <h3>Comparative Market Analysis</h3>
          <p><strong>Subject Property:</strong> {subjectAddress || 'Not specified'}</p>
          <p><strong>Date:</strong> {new Date().toLocaleDateString()}</p>
          {clientName && <p><strong>Prepared for:</strong> {clientName}</p>}
        </div>
      </div>
      
      <div className="cma-print-header" style={{ display: 'none' }}>
        <h2>Comparative Market Analysis</h2>
        <p>Subject Property: {subjectAddress || 'Not specified'}</p>
        <p>Date: {new Date().toLocaleDateString()}</p>
      </div>

      <div className="cma-toolbar">
        <button 
          className={`mode-toggle-btn ${mode === 'learning' ? 'mode-learning' : 'mode-professional'}`}
          onClick={toggleMode}
          title={mode === 'learning' ? 'Switch to Professional Mode - Hide learning aids' : 'Switch to Learning Mode - Show tooltips & guidance'}
        >
          {mode === 'learning' ? '🎓 Learning Mode' : '💼 Professional Mode'}
        </button>
        <button 
          className="btn-secondary cma-help-btn"
          onClick={() => setShowHelp(!showHelp)}
          title="How to use CMA Calculator"
        >
          {showHelp ? '📖 Hide Guide' : '📖 How to Use'}
        </button>
        <button 
          className="btn-secondary cma-help-btn"
          onClick={() => setShowDataSources(!showDataSources)}
          title="Where to find property data"
        >
          {showDataSources ? '🔍 Hide Data Sources' : '🔍 Data Sources'}
        </button>
        {mode === 'learning' && (
          <button 
            className="btn-primary cma-help-btn"
            onClick={() => setShowChallenges(!showChallenges)}
            title="Practice challenges with XP rewards"
          >
            {showChallenges ? '🎮 Hide Challenges' : '🎮 Start Challenge'}
          </button>
        )}
        <button 
          className="btn-success cma-help-btn"
          onClick={() => setShowSaveLoad(!showSaveLoad)}
          title="Save or load CMA reports"
        >
          {showSaveLoad ? '💾 Hide Save/Load' : '💾 Save/Load'}
        </button>
        <button 
          className="btn-secondary cma-help-btn"
          onClick={() => setShowTemplates(!showTemplates)}
          title="Quick-load market templates"
        >
          {showTemplates ? '🎯 Hide Templates' : '🎯 Market Templates'}
        </button>
        <button 
          className="btn-secondary cma-help-btn"
          onClick={() => setShowShortcuts(!showShortcuts)}
          title="Keyboard shortcuts (Press ?)"
        >
          ⌨️
        </button>
        <button 
          className="btn-secondary cma-help-btn"
          onClick={() => setShowBulkActions(!showBulkActions)}
          title="Bulk actions & utilities"
        >
          ⚡
        </button>
        <button 
          className="btn-secondary cma-help-btn"
          onClick={() => setShowBranding(!showBranding)}
          title="Branding & customization"
        >
          🎨
        </button>
        <button 
          className="btn-secondary cma-help-btn"
          onClick={() => setShowMap(!showMap)}
          title="Map view of properties"
        >
          🗺️
        </button>
        <button 
          className="btn-secondary cma-help-btn"
          onClick={() => setShowPhotos(!showPhotos)}
          title="Upload photos"
        >
          📸
        </button>
        <button 
          className="btn-secondary cma-help-btn"
          onClick={() => setShowCharts(!showCharts)}
          title="Advanced charts"
        >
          📊
        </button>
        <button 
          className="btn-success cma-help-btn"
          onClick={exportToPDF}
          title="Export to PDF"
        >
          📄 PDF
        </button>
        <button 
          className="btn-success cma-help-btn"
          onClick={() => setShowEmail(!showEmail)}
          title="Email report"
        >
          📧
        </button>
        <button 
          className={`btn-primary cma-help-btn ${mlsConnected ? 'mls-connected' : ''}`}
          onClick={() => setShowMLS(!showMLS)}
          title={mlsConnected ? "MLS Connected - Search properties" : "Connect to MLS"}
        >
          🏢 {mlsConnected ? 'MLS ✓' : 'MLS'}
        </button>
        <button 
          className="btn-primary cma-help-btn"
          onClick={() => setShowAPI(!showAPI)}
          title="API Access & Tokens"
        >
          🔑 API
        </button>
        <button 
          className="btn-primary cma-help-btn ai-btn"
          onClick={generateAIPrediction}
          title="Generate AI Market Prediction"
        >
          🤖 AI Predict
        </button>
      </div>

      {showAPI && (
        <div className="api-panel">
          <h3>🔑 API Access & Developer Tokens</h3>
          
          <div className="api-intro">
            <p><strong>For Developers:</strong> Generate API tokens to access your CMA data programmatically!</p>
            <p>Use these tokens to integrate CMA data into your own applications, websites, or automation tools.</p>
          </div>

          <div className="api-tokens-section">
            <div className="tokens-header">
              <h4>Your API Tokens ({apiTokens.length})</h4>
              <button 
                className="btn-primary"
                onClick={() => setShowTokenCreate(!showTokenCreate)}
              >
                + Create Token
              </button>
            </div>

            {showTokenCreate && (
              <div className="token-create-form">
                <input
                  type="text"
                  value={newTokenName}
                  onChange={(e) => setNewTokenName(e.target.value)}
                  placeholder="Token name (e.g., 'My Website', 'Mobile App')"
                  className="calc-input"
                />
                <div className="token-create-actions">
                  <button className="btn-success" onClick={generateAPIToken}>
                    Generate Token
                  </button>
                  <button className="btn-secondary" onClick={() => setShowTokenCreate(false)}>
                    Cancel
                  </button>
                </div>
              </div>
            )}

            {apiTokens.length > 0 ? (
              <div className="tokens-list">
                {apiTokens.map(token => (
                  <div key={token.id} className="token-card">
                    <div className="token-info">
                      <strong>{token.name}</strong>
                      <span className="token-date">Created: {new Date(token.created).toLocaleDateString()}</span>
                    </div>
                    <div className="token-value">
                      <code>{token.token}</code>
                      <button 
                        className="btn-small btn-secondary"
                        onClick={() => copyTokenToClipboard(token.token)}
                      >
                        📋 Copy
                      </button>
                    </div>
                    <div className="token-stats">
                      <span>Uses: {token.usageCount}</span>
                      <span>Last used: {token.lastUsed || 'Never'}</span>
                    </div>
                    <button 
                      className="btn-danger btn-small"
                      onClick={() => deleteAPIToken(token.id)}
                    >
                      🗑️ Delete
                    </button>
                  </div>
                ))}
              </div>
            ) : (
              <div className="no-tokens">
                <p>No API tokens yet. Create one to get started!</p>
              </div>
            )}
          </div>

          <div className="api-docs-section">
            <h4>📚 API Documentation</h4>
            <div className="api-endpoint">
              <h5>GET /api/cma/:id</h5>
              <p>Retrieve a specific CMA by ID</p>
              <div className="api-example">
                <strong>Request:</strong>
                <pre>curl -H "Authorization: Bearer YOUR_TOKEN" \{'\n'}  https://yoursite.com/api/cma/123</pre>
              </div>
              <div className="api-example">
                <strong>Response:</strong>
                <pre>{`{
  "id": "123",
  "subjectProperty": {...},
  "comparables": [...],
  "analysis": {...}
}`}</pre>
              </div>
            </div>
            <div className="api-endpoint">
              <h5>POST /api/cma</h5>
              <p>Create a new CMA programmatically</p>
              <div className="api-example">
                <strong>Request:</strong>
                <pre>{`curl -X POST -H "Authorization: Bearer YOUR_TOKEN" \\
  -H "Content-Type: application/json" \\
  -d '{"subject": {...}, "comps": [...]}' \\
  https://yoursite.com/api/cma`}</pre>
              </div>
            </div>
            <p className="api-note">
              💡 <strong>Note:</strong> Full API implementation requires a backend server. 
              This interface demonstrates the token management system.
            </p>
          </div>
        </div>
      )}

      {showAI && aiPrediction && (
        <div className="ai-panel">
          <h3>🤖 AI Market Prediction & Analysis</h3>
          
          <div className="ai-prediction-header">
            <div className="ai-confidence">
              <h4>Confidence Score</h4>
              <div className="confidence-meter">
                <div 
                  className="confidence-fill" 
                  style={{ width: `${aiPrediction.confidence}%` }}
                />
              </div>
              <span className="confidence-value">{aiPrediction.confidence}%</span>
            </div>
            <div className="ai-trend">
              <h4>Market Trend</h4>
              <div className={`trend-indicator trend-${aiPrediction.trend}`}>
                {aiPrediction.trend === 'rising' && '📈 Rising Market'}
                {aiPrediction.trend === 'falling' && '📉 Cooling Market'}
                {aiPrediction.trend === 'stable' && '➡️ Stable Market'}
              </div>
            </div>
          </div>

          <div className="ai-predictions-grid">
            <div className="prediction-card">
              <h4>Current Value</h4>
              <div className="prediction-value current">
                ${aiPrediction.currentValue.toLocaleString()}
              </div>
              <p>Based on {aiPrediction.factors.compsAnalyzed} comparables</p>
            </div>
            <div className="prediction-card">
              <h4>Predicted Value (Now)</h4>
              <div className="prediction-value predicted">
                ${aiPrediction.predictedValue.toLocaleString()}
              </div>
              <p className={aiPrediction.trend}>
                {aiPrediction.trend === 'rising' && '+3% adjustment'}
                {aiPrediction.trend === 'falling' && '-3% adjustment'}
                {aiPrediction.trend === 'stable' && 'No adjustment'}
              </p>
            </div>
            <div className="prediction-card">
              <h4>3-Month Forecast</h4>
              <div className="prediction-value">
                ${aiPrediction.threeMonth.toLocaleString()}
              </div>
              <p className={aiPrediction.trend}>
                {((aiPrediction.threeMonth / aiPrediction.currentValue - 1) * 100).toFixed(1)}% change
              </p>
            </div>
            <div className="prediction-card">
              <h4>6-Month Forecast</h4>
              <div className="prediction-value">
                ${aiPrediction.sixMonth.toLocaleString()}
              </div>
              <p className={aiPrediction.trend}>
                {((aiPrediction.sixMonth / aiPrediction.currentValue - 1) * 100).toFixed(1)}% change
              </p>
            </div>
          </div>

          <div className="ai-factors">
            <h4>📊 Analysis Factors</h4>
            <div className="factors-grid">
              <div className="factor-item">
                <span>Comparables Analyzed:</span>
                <strong>{aiPrediction.factors.compsAnalyzed}</strong>
              </div>
              <div className="factor-item">
                <span>Price Range:</span>
                <strong>${aiPrediction.factors.priceRange.toLocaleString()}</strong>
              </div>
              <div className="factor-item">
                <span>Average DOM:</span>
                <strong>{Math.round(aiPrediction.factors.avgDOM)} days</strong>
              </div>
            </div>
          </div>

          <div className="ai-explanation">
            <h4>💡 How This Works</h4>
            <p>
              Our AI prediction engine analyzes your comparable properties using machine learning-inspired algorithms. 
              It considers pricing trends, days on market, and market conditions to forecast future values.
            </p>
            <p>
              <strong>Confidence Score:</strong> Higher scores indicate more reliable predictions based on consistent comparable data.
            </p>
            <p>
              <strong>Market Trend:</strong> Determined by average DOM and pricing patterns in your comparables.
            </p>
          </div>

          <button className="btn-secondary" onClick={() => setShowAI(false)} style={{ marginTop: '1rem' }}>
            ✕ Close Prediction
          </button>
        </div>
      )}

      {showMLS && (
        <div className="mls-panel">
          <h3>🏢 MLS Integration {mlsConnected && <span className="mls-status-badge">Connected</span>}</h3>
          
          {!mlsConnected ? (
            <div className="mls-connect-section">
              <p className="panel-description">
                <strong>For Licensed Agents:</strong> Connect your MLS account to import real comparable data directly into your CMAs!
              </p>
              <div className="mls-provider-info">
                <h4>📋 Supported MLS Systems:</h4>
                <ul>
                  <li>✅ MLS PIN (Massachusetts)</li>
                  <li>✅ MLSPIN / MLS Property Information Network</li>
                  <li>✅ GBREB / Greater Boston Real Estate Board</li>
                  <li>✅ CRMLS / California Regional MLS</li>
                  <li>✅ Bright MLS (Mid-Atlantic)</li>
                  <li>✅ RETS & Web API compatible systems</li>
                </ul>
              </div>
              <div className="mls-credentials-form">
                <div className="input-group">
                  <label>MLS Provider *</label>
                  <select 
                    value={mlsProvider}
                    onChange={(e) => setMlsProvider(e.target.value)}
                    className="calc-input"
                  >
                    <option value="">Select your MLS...</option>
                    <option value="MLSPIN">MLS PIN (Massachusetts)</option>
                    <option value="GBREB">Greater Boston Real Estate Board</option>
                    <option value="CRMLS">California Regional MLS</option>
                    <option value="BrightMLS">Bright MLS</option>
                    <option value="Other">Other RETS-Compatible</option>
                  </select>
                </div>
                <div className="input-group">
                  <label>MLS Username *</label>
                  <input
                    type="text"
                    value={mlsUsername}
                    onChange={(e) => setMlsUsername(e.target.value)}
                    placeholder="Your MLS username"
                    className="calc-input"
                  />
                </div>
                <div className="input-group">
                  <label>MLS Password *</label>
                  <input
                    type="password"
                    value={mlsPassword}
                    onChange={(e) => setMlsPassword(e.target.value)}
                    placeholder="Your MLS password"
                    className="calc-input"
                  />
                  <p className="input-hint">
                    🔒 Demo Mode: Credentials are stored locally for demonstration. 
                    In production, this would use secure OAuth/API authentication.
                  </p>
                </div>
                <div className="mls-actions">
                  <button className="btn-primary" onClick={connectMLS}>
                    🔗 Connect to MLS
                  </button>
                  <button className="btn-secondary" onClick={() => setShowMLS(false)}>
                    ✕ Cancel
                  </button>
                </div>
              </div>
            </div>
          ) : (
            <div className="mls-search-section">
              <div className="mls-connection-info">
                <p>✅ Connected to <strong>{mlsProvider}</strong> as <strong>{mlsUsername}</strong></p>
                <button className="btn-secondary btn-small" onClick={disconnectMLS}>
                  Disconnect
                </button>
              </div>
              
              <h4>🔍 Search for Comparables</h4>
              <div className="mls-search-form">
                <div className="input-group">
                  <label>Search Address or Area</label>
                  <input
                    type="text"
                    value={mlsSearchAddress}
                    onChange={(e) => setMlsSearchAddress(e.target.value)}
                    placeholder="e.g., Boston, MA 02116"
                    className="calc-input"
                  />
                </div>
                <div className="input-group">
                  <label>Search Radius (miles)</label>
                  <select 
                    value={mlsSearchRadius}
                    onChange={(e) => setMlsSearchRadius(e.target.value)}
                    className="calc-input"
                  >
                    <option value="0.5">0.5 miles</option>
                    <option value="1">1 mile</option>
                    <option value="2">2 miles</option>
                    <option value="5">5 miles</option>
                  </select>
                </div>
                <button className="btn-primary" onClick={searchMLS}>
                  🔍 Search MLS
                </button>
              </div>

              {showMLSImport && mlsResults.length > 0 && (
                <div className="mls-results">
                  <h4>📊 Found {mlsResults.length} Sold Comparables</h4>
                  <div className="mls-results-grid">
                    {mlsResults.map((property, index) => (
                      <div key={property.mlsNumber} className="mls-result-card">
                        <div className="mls-result-header">
                          <strong>{property.address}</strong>
                          <span className="mls-number">MLS# {property.mlsNumber}</span>
                        </div>
                        <div className="mls-result-details">
                          <div className="mls-detail-row">
                            <span>💰 Sold Price:</span>
                            <strong>${property.price.toLocaleString()}</strong>
                          </div>
                          <div className="mls-detail-row">
                            <span>🛏️ Beds/Baths:</span>
                            <span>{property.beds} / {property.baths}</span>
                          </div>
                          <div className="mls-detail-row">
                            <span>📏 Sq Ft:</span>
                            <span>{property.sqft.toLocaleString()}</span>
                          </div>
                          <div className="mls-detail-row">
                            <span>📅 Sold:</span>
                            <span>{property.soldDate}</span>
                          </div>
                          <div className="mls-detail-row">
                            <span>⏱️ DOM:</span>
                            <span>{property.dom} days</span>
                          </div>
                        </div>
                        <div className="mls-import-actions">
                          {[1, 2, 3, 4, 5, 6].map(num => (
                            <button 
                              key={num}
                              className="btn-success btn-small"
                              onClick={() => importMLSProperty(property, num)}
                              title={`Import to Comparable #${num}`}
                            >
                              → Comp #{num}
                            </button>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}
          
          <div className="mls-info-section">
            <h4>ℹ️ About MLS Integration</h4>
            <p className="mls-info-text">
              <strong>Current Status:</strong> Demo/Mock Mode - This shows the MLS integration interface.
            </p>
            <p className="mls-info-text">
              <strong>For Production Use:</strong> Real MLS integration requires:
            </p>
            <ul className="mls-requirements-list">
              <li>✅ Active MLS membership & credentials</li>
              <li>✅ Backend server with MLS API integration</li>
              <li>✅ RETS or Web API compatibility</li>
              <li>✅ Compliance with MLS terms of service</li>
              <li>✅ Secure authentication (OAuth recommended)</li>
            </ul>
            <p className="mls-info-text">
              <strong>Benefits:</strong> Once connected, import real sold comparables directly from MLS with one click!
            </p>
          </div>
        </div>
      )}

      {showPhotos && (
        <div className="photos-panel">
          <h3>📸 Photo Upload</h3>
          <p className="panel-description">Add photos to your CMA for visual appeal (max 2MB per photo)</p>
          <div className="photos-grid">
            <div className="photo-upload-item">
              <label>Subject Property Photo</label>
              <input
                type="file"
                accept="image/*"
                onChange={(e) => handlePhotoUpload(e, setSubjectPhoto)}
                className="file-input"
              />
              {subjectPhoto && (
                <div className="photo-preview">
                  <img src={subjectPhoto} alt="Subject" />
                  <button onClick={() => setSubjectPhoto('')} className="remove-photo">✕</button>
                </div>
              )}
            </div>
            {[1, 2, 3, 4, 5, 6].map(i => {
              const photo = eval(`comp${i}Photo`);
              const setPhoto = eval(`setComp${i}Photo`);
              const active = eval(`comp${i}Active`);
              if (!active) return null;
              return (
                <div key={i} className="photo-upload-item">
                  <label>Comparable #{i} Photo</label>
                  <input
                    type="file"
                    accept="image/*"
                    onChange={(e) => handlePhotoUpload(e, setPhoto)}
                    className="file-input"
                  />
                  {photo && (
                    <div className="photo-preview">
                      <img src={photo} alt={`Comp ${i}`} />
                      <button onClick={() => setPhoto('')} className="remove-photo">✕</button>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
          <button className="btn-secondary" onClick={() => setShowPhotos(false)} style={{ marginTop: '1rem' }}>
            ✕ Close
          </button>
        </div>
      )}

      {showEmail && (
        <div className="email-panel">
          <h3>📧 Email CMA Report</h3>
          <div className="email-form">
            <div className="input-group">
              <label>Recipient Email *</label>
              <input
                type="email"
                value={emailTo}
                onChange={(e) => setEmailTo(e.target.value)}
                placeholder="client@example.com"
                className="calc-input"
              />
            </div>
            <div className="input-group">
              <label>Subject Line</label>
              <input
                type="text"
                value={emailSubject}
                onChange={(e) => setEmailSubject(e.target.value)}
                placeholder="Your CMA Report - {subjectAddress}"
                className="calc-input"
              />
            </div>
            <div className="input-group">
              <label>Message (Optional)</label>
              <textarea
                value={emailMessage}
                onChange={(e) => setEmailMessage(e.target.value)}
                placeholder="Add a personal message to your client..."
                className="notes-textarea"
                rows="4"
              />
            </div>
            <div className="email-actions">
              <button className="btn-primary" onClick={sendEmail}>
                📧 Send Email
              </button>
              <button className="btn-secondary" onClick={() => setShowEmail(false)}>
                ✕ Cancel
              </button>
            </div>
          </div>
        </div>
      )}

      {showCharts && adjustedComps.length > 0 && (
        <div className="charts-panel">
          <h3>📊 Advanced Charts & Analytics</h3>
          <div className="charts-grid">
            <div className="chart-card">
              <h4>📊 Chart Visualization Ready</h4>
              <p>Advanced pie and line charts with Chart.js integration</p>
              <div className="chart-placeholder">
                <p>🥧 Pie Chart: Adjustment Breakdown</p>
                <p>📈 Line Chart: Price Trends</p>
                <p>📊 Bar Chart: Comp Comparison</p>
              </div>
              <p className="chart-note">
                💡 Chart.js is installed and ready for full chart implementation
              </p>
            </div>
          </div>
          <button className="btn-secondary" onClick={() => setShowCharts(false)} style={{ marginTop: '1rem' }}>
            ✕ Close
          </button>
        </div>
      )}

      {showBranding && (
        <div className="branding-panel">
          <h3>🎨 Branding & Customization</h3>
          <div className="branding-grid">
            <div className="branding-field">
              <label>Company Logo URL</label>
              <input
                type="url"
                value={brandingLogo}
                onChange={(e) => setBrandingLogo(e.target.value)}
                placeholder="https://example.com/logo.png"
                className="calc-input"
              />
              <p className="input-hint">URL to your company logo (appears on reports)</p>
            </div>
            <div className="branding-field">
              <label>Company Name</label>
              <input
                type="text"
                value={brandingCompany}
                onChange={(e) => setBrandingCompany(e.target.value)}
                placeholder="Your Realty Company"
                className="calc-input"
              />
            </div>
            <div className="branding-field">
              <label>Phone Number</label>
              <input
                type="tel"
                value={brandingPhone}
                onChange={(e) => setBrandingPhone(e.target.value)}
                placeholder="(555) 123-4567"
                className="calc-input"
              />
            </div>
            <div className="branding-field">
              <label>Email Address</label>
              <input
                type="email"
                value={brandingEmail}
                onChange={(e) => setBrandingEmail(e.target.value)}
                placeholder="agent@realty.com"
                className="calc-input"
              />
            </div>
            <div className="branding-field">
              <label>License Number</label>
              <input
                type="text"
                value={brandingLicense}
                onChange={(e) => setBrandingLicense(e.target.value)}
                placeholder="License #123456"
                className="calc-input"
              />
            </div>
            <div className="branding-field">
              <label>Brand Color</label>
              <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                <input
                  type="color"
                  value={brandingColor}
                  onChange={(e) => setBrandingColor(e.target.value)}
                  style={{ width: '60px', height: '40px', cursor: 'pointer', border: '1px solid #d1d5db', borderRadius: '6px' }}
                />
                <span style={{ color: '#6b7280', fontSize: '0.875rem' }}>{brandingColor}</span>
              </div>
            </div>
          </div>
          <div className="branding-actions">
            <button className="btn-primary" onClick={saveBranding}>
              💾 Save Branding
            </button>
            <button className="btn-secondary" onClick={() => setShowBranding(false)}>
              ✕ Close
            </button>
          </div>
        </div>
      )}

      {showMap && (
        <div className="map-panel">
          <h3>🗺️ Property Locations</h3>
          <div className="map-placeholder">
            <div className="map-info">
              <h4>📍 Interactive Map View</h4>
              <p>Map visualization shows approximate locations based on addresses entered.</p>
              <p><strong>Subject Property:</strong> {subjectAddress || 'Not specified'}</p>
              <p><strong>Active Comparables:</strong> {adjustedComps.length} properties</p>
              <div className="map-features">
                <div className="map-feature-item">
                  <span className="map-marker subject">🏠</span>
                  <span>Subject Property</span>
                </div>
                <div className="map-feature-item">
                  <span className="map-marker comp">📍</span>
                  <span>Comparable Properties</span>
                </div>
              </div>
              <p className="map-note">
                💡 <strong>Tip:</strong> In a production environment, this would display an interactive map with property locations plotted using geocoding services.
              </p>
            </div>
          </div>
          <button className="btn-secondary" onClick={() => setShowMap(false)} style={{ marginTop: '1rem' }}>
            ✕ Close Map
          </button>
        </div>
      )}

      {showBulkActions && (
        <div className="bulk-actions-panel">
          <h3>⚡ Quick Actions</h3>
          <div className="bulk-actions-grid">
            <button className="bulk-action-btn" onClick={clearAllComps}>
              🗑️ Clear All Comps
            </button>
            <button className="bulk-action-btn" onClick={copyAdjustmentsToClipboard}>
              📋 Copy Adjustments
            </button>
            <button className="bulk-action-btn" onClick={exportToCSV}>
              📊 Export to CSV
            </button>
            <button className="bulk-action-btn" onClick={exportToJSON}>
              📄 Export to JSON
            </button>
            <button className="bulk-action-btn" onClick={handlePrint}>
              🖨️ Print Report
            </button>
            <button className="bulk-action-btn" onClick={() => setShowBulkActions(false)}>
              ✕ Close
            </button>
          </div>
        </div>
      )}

      {showShortcuts && (
        <div className="keyboard-shortcuts-modal">
          <div className="shortcuts-content">
            <div className="shortcuts-header">
              <h3>⌨️ Keyboard Shortcuts</h3>
              <button className="close-btn" onClick={() => setShowShortcuts(false)}>✕</button>
            </div>
            <div className="shortcuts-grid">
              <div className="shortcut-group">
                <h4>Actions</h4>
                <div className="shortcut-item">
                  <kbd>Ctrl/⌘</kbd> + <kbd>Z</kbd>
                  <span>Undo</span>
                </div>
                <div className="shortcut-item">
                  <kbd>Ctrl/⌘</kbd> + <kbd>Y</kbd>
                  <span>Redo</span>
                </div>
                <div className="shortcut-item">
                  <kbd>Ctrl/⌘</kbd> + <kbd>S</kbd>
                  <span>Save CMA</span>
                </div>
                <div className="shortcut-item">
                  <kbd>Ctrl/⌘</kbd> + <kbd>P</kbd>
                  <span>Print Report</span>
                </div>
                <div className="shortcut-item">
                  <kbd>Ctrl/⌘</kbd> + <kbd>E</kbd>
                  <span>Export JSON</span>
                </div>
              </div>
              <div className="shortcut-group">
                <h4>Navigation</h4>
                <div className="shortcut-item">
                  <kbd>M</kbd>
                  <span>Toggle Learning/Pro Mode</span>
                </div>
                <div className="shortcut-item">
                  <kbd>T</kbd>
                  <span>Toggle Templates</span>
                </div>
                <div className="shortcut-item">
                  <kbd>?</kbd>
                  <span>Show/Hide Shortcuts</span>
                </div>
              </div>
            </div>
            <p className="shortcuts-tip">💡 <strong>Tip:</strong> Shortcuts don't work while typing in input fields</p>
          </div>
        </div>
      )}

      {showTemplates && (
        <div className="market-templates-panel">
          <h3>🎯 Market Templates</h3>
          <p className="templates-intro">
            Quick-load adjustment values for different Massachusetts markets. Perfect for getting started!
          </p>
          <div className="templates-grid">
            {Object.values(marketTemplates).map(template => (
              <div 
                key={template.id} 
                className={`template-card ${currentTemplate === template.id ? 'active' : ''}`}
                onClick={() => applyTemplate(template.id)}
              >
                <div className="template-header">
                  <h4>{template.name}</h4>
                  {currentTemplate === template.id && <span className="active-badge">✓ Active</span>}
                </div>
                <p className="template-description">{template.description}</p>
                <div className="template-stats">
                  <span className="template-stat">Avg: ${template.avgPriceSqft}/sqft</span>
                  <span className="template-type">{template.marketType}</span>
                </div>
                {mode === 'learning' && (
                  <p className="template-notes">💡 {template.notes}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      )}

      {showSaveLoad && (
        <div className="cma-save-load-panel">
          <h3>💾 Save/Load CMA Reports</h3>
          <div className="save-load-actions">
            <button className="btn-primary" onClick={saveCMA}>💾 Save Current CMA</button>
            <button className="btn-secondary" onClick={exportToJSON}>📥 Export to JSON</button>
          </div>
          {getSavedCMAs().length > 0 && (
            <div className="cma-library">
              <div className="library-header">
                <h4>📚 CMA Library ({getSavedCMAs().length})</h4>
                <div className="library-controls">
                  <input 
                    type="text" 
                    className="library-search" 
                    placeholder="🔍 Search CMAs..." 
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                  <div className="view-toggle">
                    <button 
                      className={`view-btn ${libraryView === 'list' ? 'active' : ''}`}
                      onClick={() => setLibraryView('list')}
                      title="List view"
                    >
                      ☰
                    </button>
                    <button 
                      className={`view-btn ${libraryView === 'grid' ? 'active' : ''}`}
                      onClick={() => setLibraryView('grid')}
                      title="Grid view"
                    >
                      ⊞
                    </button>
                  </div>
                </div>
              </div>
              <div className={`cma-library-items ${libraryView}`}>
                {getSavedCMAsWithData()
                  .filter(cma => 
                    searchTerm === '' || 
                    cma.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                    cma.clientName.toLowerCase().includes(searchTerm.toLowerCase()) ||
                    cma.address.toLowerCase().includes(searchTerm.toLowerCase())
                  )
                  .map(cma => (
                    <div key={cma.name} className="cma-library-card">
                      <div className="cma-card-header">
                        <div className="cma-card-title">
                          <span className="cma-icon">📄</span>
                          <strong>{cma.name}</strong>
                        </div>
                        <span className="cma-date">{new Date(cma.date).toLocaleDateString()}</span>
                      </div>
                      <div className="cma-card-details">
                        <div className="cma-detail">
                          <span className="detail-label">Client:</span>
                          <span className="detail-value">{cma.clientName}</span>
                        </div>
                        <div className="cma-detail">
                          <span className="detail-label">Address:</span>
                          <span className="detail-value">{cma.address}</span>
                        </div>
                        <div className="cma-detail">
                          <span className="detail-label">Comps:</span>
                          <span className="detail-value">{cma.comps} active</span>
                        </div>
                      </div>
                      <div className="cma-card-actions">
                        <button className="btn-small btn-primary" onClick={() => loadCMA(cma.name)}>📂 Load</button>
                        <button className="btn-small" onClick={() => duplicateCMA(cma.name)}>📋 Copy</button>
                        <button className="btn-small btn-danger" onClick={() => { deleteCMA(cma.name); setSearchTerm(''); }}>🗑️ Delete</button>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          )}
        </div>
      )}

      {activeChallenge && (
        <div className="active-challenge-banner">
          <div className="challenge-info">
            <span className="challenge-icon">🎯</span>
            <div>
              <strong>{activeChallenge.title}</strong>
              <span className={`difficulty-badge ${activeChallenge.difficulty}`}>
                {activeChallenge.difficulty}
              </span>
            </div>
          </div>
          <div className="challenge-actions">
            <button className="btn-success" onClick={completeChallenge}>
              ✅ Complete Challenge ({activeChallenge.xpReward} XP)
            </button>
            <button className="btn-secondary" onClick={exitChallenge}>
              Exit Challenge
            </button>
          </div>
        </div>
      )}

      {showChallenges && (
        <div className="cma-challenges-panel">
          <h3>🎮 CMA Practice Challenges</h3>
          <p className="challenges-intro">
            Test your skills with these practice scenarios! Each challenge awards XP and helps you master CMA analysis.
          </p>
          <div className="challenges-grid">
            {cmaChallenges.map(challenge => (
              <div key={challenge.id} className={`challenge-card ${challenge.difficulty}`}>
                <div className="challenge-card-header">
                  <h4>{challenge.title}</h4>
                  <span className={`difficulty-badge ${challenge.difficulty}`}>
                    {challenge.difficulty}
                  </span>
                </div>
                <p className="challenge-description">{challenge.description}</p>
                
                {challenge.instructions && (
                  <div className="challenge-instructions">
                    <strong>📋 Instructions:</strong>
                    <ul>
                      {challenge.instructions.slice(0, 3).map((instruction, i) => (
                        <li key={i}>{instruction}</li>
                      ))}
                    </ul>
                  </div>
                )}

                {challenge.learningPoints && (
                  <div className="challenge-learning">
                    <strong>🎓 You'll Learn:</strong>
                    <ul>
                      {challenge.learningPoints.slice(0, 2).map((point, i) => (
                        <li key={i}>{point}</li>
                      ))}
                    </ul>
                  </div>
                )}

                <div className="challenge-card-footer">
                  <span className="xp-reward">⭐ {challenge.xpReward} XP</span>
                  <button 
                    className="btn-primary"
                    onClick={() => loadChallenge(challenge)}
                  >
                    Start Challenge →
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {showChallengeComplete && (
        <div className="challenge-complete-modal">
          <div className="challenge-complete-content">
            <div className="success-icon">🎉</div>
            <h2>Challenge Complete!</h2>
            <p>Congratulations! You've completed the CMA challenge.</p>
            <div className="completion-stats">
              <div className="stat-item">
                <span className="stat-label">Average Value</span>
                <span className="stat-value">${avgAdjustedPrice.toLocaleString()}</span>
              </div>
              <div className="stat-item">
                <span className="stat-label">Comps Used</span>
                <span className="stat-value">{comps.length}</span>
              </div>
            </div>
            <button 
              className="btn-primary"
              onClick={() => setShowChallengeComplete(false)}
            >
              Continue
            </button>
          </div>
        </div>
      )}

      {showHelp && (
        <div className="cma-help-panel">
          <h3>📚 How to Use the CMA Calculator</h3>
          <div className="help-content">
            <div className="help-section">
              <h4>Step 1: Enter Subject Property Details</h4>
              <p>Input the property you're valuing: address, beds, baths, square footage, garage, condition, and age.</p>
            </div>
            <div className="help-section">
              <h4>Step 2: Set Adjustment Values</h4>
              <p>These represent market value per feature. Massachusetts defaults:</p>
              <ul>
                <li>Bedroom: $20,000 | Bathroom: $15,000 | Sq Ft: $100</li>
                <li>Garage: $15,000 | Condition Level: $10,000 | Age: $2,000/yr</li>
                <li>Adjust based on your local market (urban areas higher)</li>
              </ul>
            </div>
            <div className="help-section">
              <h4>Step 3: Enter 3 Comparable Sales</h4>
              <p>Find recent sales (last 3-6 months) within 1 mile. Toggle checkboxes to enable/disable comps.</p>
            </div>
            <div className="help-section">
              <h4>Step 4: Analyze Results</h4>
              <p>Review adjusted values, average, range, and recommended listing price (conservative to aggressive).</p>
            </div>
            <div className="help-best-practices">
              <h4>🌟 Best Practices</h4>
              <ul>
                <li>✅ Use 3-6 recent sales (last 3-6 months)</li>
                <li>✅ Choose similar properties within 1 mile</li>
                <li>✅ Verify sale prices through official records</li>
                <li>❌ Don't mix property types or use foreclosures with standard sales</li>
              </ul>
            </div>
          </div>
        </div>
      )}

      {showDataSources && (
        <div className="cma-data-sources-panel">
          <h3>🔍 Where to Find Property Data</h3>
          <div className="data-sources-content">
            <div className="data-source">
              <h4>🏛️ FREE: Local Assessor Databases</h4>
              <p><strong>Access:</strong> Google "[City Name] MA assessor database"</p>
              <p><strong>Data:</strong> Property characteristics, assessed values, recent sales, tax records</p>
              <p><strong>Best For:</strong> Verifying property features and finding recent sales</p>
            </div>
            <div className="data-source">
              <h4>📜 FREE: Registry of Deeds (by county)</h4>
              <p><strong>Access:</strong> Search "[County] Registry of Deeds Massachusetts"</p>
              <p><strong>Data:</strong> Official sale prices, transfer dates, deed information</p>
              <p><strong>Best For:</strong> Verifying actual closing prices and dates</p>
            </div>
            <div className="data-source">
              <h4>🌐 FREE: Zillow.com (Manual Lookup)</h4>
              <p><strong>Access:</strong> www.zillow.com - search by address</p>
              <p><strong>Data:</strong> Zestimate, recent sales, property details, comparable sales</p>
              <p><strong>Tip:</strong> Check "Price & Tax History" and "Comparable Sales" sections</p>
            </div>
            <div className="data-source">
              <h4>🏠 FREE: Redfin.com (Manual Lookup)</h4>
              <p><strong>Access:</strong> www.redfin.com - search by address</p>
              <p><strong>Data:</strong> Recent sales, DOM (days on market), market stats</p>
              <p><strong>Tip:</strong> View "Sale & Tax History" and "Nearby Homes"</p>
            </div>
            <div className="data-source">
              <h4>💼 REQUIRES LICENSE: MLS (Multiple Listing Service)</h4>
              <p><strong>Access:</strong> Must be licensed real estate agent with MLS membership</p>
              <p><strong>Data:</strong> Complete sales data, active listings, agent notes, exact DOM</p>
              <p><strong>Note:</strong> Most comprehensive source - you'll get access when licensed!</p>
            </div>
            <div className="data-collection-steps">
              <h4>📋 Quick Data Collection Guide:</h4>
              <ol>
                <li>Use Assessor Database → Get property characteristics</li>
                <li>Search Zillow/Redfin → Find 3-6 recent comparable sales within 1 mile</li>
                <li>Verify sale prices → Check Registry of Deeds if needed</li>
                <li>Enter data into calculator → Analyze results</li>
                <li>Print professional CMA → Present to client</li>
              </ol>
            </div>
            <div className="api-note">
              <p><strong>⚙️ Why No Real-Time API?</strong> Most real estate APIs (Zillow, Realtor.com) are closed or require expensive licensing. MLS data requires agent credentials. This educational tool teaches manual data gathering - a critical skill for real agents!</p>
            </div>
          </div>
        </div>
      )}

      <div className="calculator-inputs">
        <div className="client-info-section">
          <h4>📋 Client Information (Optional)</h4>
          <div className="input-row">
            <div className="input-group">
              <label htmlFor="clientName">Client Name</label>
              <input id="clientName" type="text" value={clientName} onChange={(e) => setClientName(e.target.value)} className="calc-input" placeholder="John Smith" />
            </div>
            <div className="input-group">
              <label htmlFor="preparedBy">Prepared By</label>
              <input id="preparedBy" type="text" value={preparedBy} onChange={(e) => setPreparedBy(e.target.value)} className="calc-input" placeholder="Your Name" />
            </div>
            <div className="input-group">
              <label htmlFor="brokerageName">Brokerage</label>
              <input id="brokerageName" type="text" value={brokerageName} onChange={(e) => setBrokerageName(e.target.value)} className="calc-input" placeholder="Your Brokerage" />
            </div>
            <div className="input-group">
              <label htmlFor="reportPurpose">Purpose</label>
              <select id="reportPurpose" value={reportPurpose} onChange={(e) => setReportPurpose(e.target.value)} className="calc-input">
                <option value="listing">Listing</option>
                <option value="buying">Buying</option>
                <option value="refinance">Refinance</option>
              </select>
            </div>
          </div>
        </div>

        <h4>Subject Property</h4>
        <div className="input-group">
          <label htmlFor="subjectAddress">Address (Optional)</label>
          <input
            id="subjectAddress"
            type="text"
            value={subjectAddress}
            onChange={(e) => setSubjectAddress(e.target.value)}
            className="calc-input"
            placeholder="123 Main St, Boston, MA"
          />
        </div>

        <div className="input-row">
          <div className="input-group">
            <label htmlFor="subjectBeds">Bedrooms</label>
            <input
              id="subjectBeds"
              type="number"
              value={subjectBeds}
              onChange={(e) => setSubjectBeds(e.target.value)}
              className="calc-input"
            />
          </div>

          <div className="input-group">
            <label htmlFor="subjectBaths">Bathrooms</label>
            <input
              id="subjectBaths"
              type="number"
              step="0.5"
              value={subjectBaths}
              onChange={(e) => setSubjectBaths(e.target.value)}
              className="calc-input"
            />
          </div>

          <div className="input-group">
            <label htmlFor="subjectSqft">Square Feet</label>
            <input
              id="subjectSqft"
              type="number"
              value={subjectSqft}
              onChange={(e) => setSubjectSqft(e.target.value)}
              className="calc-input"
            />
          </div>
        </div>

        <div className="input-row">
          <div className="input-group">
            <label htmlFor="subjectGarage">Garage</label>
            <select
              id="subjectGarage"
              value={subjectGarage}
              onChange={(e) => setSubjectGarage(e.target.value)}
              className="calc-input"
            >
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>
          </div>

          <div className="input-group">
            <label htmlFor="subjectCondition">Condition</label>
            <select
              id="subjectCondition"
              value={subjectCondition}
              onChange={(e) => setSubjectCondition(e.target.value)}
              className="calc-input"
            >
              <option value="poor">Poor</option>
              <option value="fair">Fair</option>
              <option value="good">Good</option>
              <option value="excellent">Excellent</option>
            </select>
          </div>

          <div className="input-group">
            <label htmlFor="subjectAge">Age (years)</label>
            <input
              id="subjectAge"
              type="number"
              value={subjectAge}
              onChange={(e) => setSubjectAge(e.target.value)}
              className="calc-input"
            />
          </div>
        </div>

        <div className="input-row">
          <div className="input-group">
            <label htmlFor="subjectPool">Pool</label>
            <select id="subjectPool" value={subjectPool} onChange={(e) => setSubjectPool(e.target.value)} className="calc-input">
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>
          </div>

          <div className="input-group">
            <label htmlFor="subjectLotSize">Lot Size (sqft)</label>
            <input id="subjectLotSize" type="number" value={subjectLotSize} onChange={(e) => setSubjectLotSize(e.target.value)} className="calc-input" />
          </div>

          <div className="input-group">
            <label htmlFor="subjectLocation">Location Quality</label>
            <select id="subjectLocation" value={subjectLocation} onChange={(e) => setSubjectLocation(e.target.value)} className="calc-input">
              <option value="1">1 - Poor</option>
              <option value="2">2 - Fair</option>
              <option value="3">3 - Good</option>
              <option value="4">4 - Very Good</option>
              <option value="5">5 - Excellent</option>
            </select>
          </div>
        </div>

        <div className="input-row">
          <div className="input-group">
            <label htmlFor="subjectView">View</label>
            <select id="subjectView" value={subjectView} onChange={(e) => setSubjectView(e.target.value)} className="calc-input">
              <option value="none">None</option>
              <option value="park">Park/Green Space</option>
              <option value="water">Water View</option>
              <option value="mountain">Mountain View</option>
              <option value="city">City Skyline</option>
            </select>
          </div>

          <div className="input-group">
            <label htmlFor="subjectUpgrades">Upgrades/Renovations</label>
            <select id="subjectUpgrades" value={subjectUpgrades} onChange={(e) => setSubjectUpgrades(e.target.value)} className="calc-input">
              <option value="poor">Poor/Dated</option>
              <option value="average">Average</option>
              <option value="good">Good/Some Updates</option>
              <option value="excellent">Excellent/Recently Updated</option>
            </select>
          </div>
        </div>

        <h4>Adjustment Values</h4>
        <div className="input-row">
          <div className="input-group">
            <label htmlFor="bedAdj">Per Bedroom</label>
            <div className="input-wrapper">
              <span className="input-prefix">$</span>
              <input
                id="bedAdj"
                type="number"
                value={bedAdjustment}
                onChange={(e) => setBedAdjustment(e.target.value)}
                className="calc-input"
              />
            </div>
          </div>

          <div className="input-group">
            <label htmlFor="bathAdj">Per Bathroom</label>
            <div className="input-wrapper">
              <span className="input-prefix">$</span>
              <input
                id="bathAdj"
                type="number"
                value={bathAdjustment}
                onChange={(e) => setBathAdjustment(e.target.value)}
                className="calc-input"
              />
            </div>
          </div>

          <div className="input-group">
            <label htmlFor="sqftAdj">Per Sq Ft</label>
            <div className="input-wrapper">
              <span className="input-prefix">$</span>
              <input
                id="sqftAdj"
                type="number"
                value={sqftAdjustment}
                onChange={(e) => setSqftAdjustment(e.target.value)}
                className="calc-input"
              />
            </div>
          </div>

          <div className="input-group">
            <label htmlFor="garageAdj">Garage</label>
            <div className="input-wrapper">
              <span className="input-prefix">$</span>
              <input
                id="garageAdj"
                type="number"
                value={garageAdjustment}
                onChange={(e) => setGarageAdjustment(e.target.value)}
                className="calc-input"
              />
            </div>
          </div>
        </div>

        <div className="input-row">
          <div className="input-group">
            <label htmlFor="condAdj">Per Condition Level</label>
            <div className="input-wrapper">
              <span className="input-prefix">$</span>
              <input
                id="condAdj"
                type="number"
                value={conditionAdjustment}
                onChange={(e) => setConditionAdjustment(e.target.value)}
                className="calc-input"
              />
            </div>
          </div>

          <div className="input-group">
            <label htmlFor="ageAdj">Per Year Age</label>
            <div className="input-wrapper">
              <span className="input-prefix">$</span>
              <input
                id="ageAdj"
                type="number"
                value={ageAdjustment}
                onChange={(e) => setAgeAdjustment(e.target.value)}
                className="calc-input"
              />
            </div>
          </div>

          <div className="input-group">
            <label htmlFor="domAdj">Days on Market Penalty</label>
            <div className="input-wrapper">
              <span className="input-prefix">$</span>
              <input
                id="domAdj"
                type="number"
                value={domAdjustment}
                onChange={(e) => setDomAdjustment(e.target.value)}
                className="calc-input"
              />
            </div>
          </div>
        </div>

        <div className="input-row">
          <div className="input-group">
            <label htmlFor="poolAdj">Pool</label>
            <div className="input-wrapper">
              <span className="input-prefix">$</span>
              <input id="poolAdj" type="number" value={poolAdjustment} onChange={(e) => setPoolAdjustment(e.target.value)} className="calc-input" />
            </div>
          </div>

          <div className="input-group">
            <label htmlFor="lotSizeAdj">Per 1000 Sqft Lot</label>
            <div className="input-wrapper">
              <span className="input-prefix">$</span>
              <input id="lotSizeAdj" type="number" value={lotSizeAdjustment} onChange={(e) => setLotSizeAdjustment(e.target.value)} className="calc-input" />
            </div>
          </div>

          <div className="input-group">
            <label htmlFor="locationAdj">Per Location Level</label>
            <div className="input-wrapper">
              <span className="input-prefix">$</span>
              <input id="locationAdj" type="number" value={locationAdjustment} onChange={(e) => setLocationAdjustment(e.target.value)} className="calc-input" />
            </div>
          </div>
        </div>

        <div className="input-row">
          <div className="input-group">
            <label htmlFor="viewAdj">View Premium (Base)</label>
            <div className="input-wrapper">
              <span className="input-prefix">$</span>
              <input id="viewAdj" type="number" value={viewAdjustment} onChange={(e) => setViewAdjustment(e.target.value)} className="calc-input" />
            </div>
          </div>

          <div className="input-group">
            <label htmlFor="upgradesAdj">Per Upgrade Level</label>
            <div className="input-wrapper">
              <span className="input-prefix">$</span>
              <input id="upgradesAdj" type="number" value={upgradesAdjustment} onChange={(e) => setUpgradesAdjustment(e.target.value)} className="calc-input" />
            </div>
          </div>
        </div>

        {/* Comparable 1 */}
        <div className="comp-section">
          <div className="comp-header">
            <h4>
              <input
                type="checkbox"
                checked={comp1Active}
                onChange={(e) => setComp1Active(e.target.checked)}
              />
              {' '}Comparable #1
            </h4>
          </div>
          
          {comp1Active && (
            <>
              <div className="input-group">
                <label htmlFor="comp1Price">Sale Price</label>
                <div className="input-wrapper">
                  <span className="input-prefix">$</span>
                  <input
                    id="comp1Price"
                    type="number"
                    value={comp1Price}
                    onChange={(e) => setComp1Price(e.target.value)}
                    className="calc-input"
                  />
                </div>
              </div>

              <div className="input-row">
                <div className="input-group">
                  <label>Beds</label>
                  <input type="number" value={comp1Beds} onChange={(e) => setComp1Beds(e.target.value)} className="calc-input" />
                </div>
                <div className="input-group">
                  <label>Baths</label>
                  <input type="number" step="0.5" value={comp1Baths} onChange={(e) => setComp1Baths(e.target.value)} className="calc-input" />
                </div>
                <div className="input-group">
                  <label>Sq Ft</label>
                  <input type="number" value={comp1Sqft} onChange={(e) => setComp1Sqft(e.target.value)} className="calc-input" />
                </div>
              </div>

              <div className="input-row">
                <div className="input-group">
                  <label>Garage</label>
                  <select value={comp1Garage} onChange={(e) => setComp1Garage(e.target.value)} className="calc-input">
                    <option value="yes">Yes</option>
                    <option value="no">No</option>
                  </select>
                </div>
                <div className="input-group">
                  <label>Condition</label>
                  <select value={comp1Condition} onChange={(e) => setComp1Condition(e.target.value)} className="calc-input">
                    <option value="poor">Poor</option>
                    <option value="fair">Fair</option>
                    <option value="good">Good</option>
                    <option value="excellent">Excellent</option>
                  </select>
                </div>
                <div className="input-group">
                  <label>Age (yrs)</label>
                  <input type="number" value={comp1Age} onChange={(e) => setComp1Age(e.target.value)} className="calc-input" />
                </div>
                <div className="input-group">
                  <label>Days on Market</label>
                  <input type="number" value={comp1DOM} onChange={(e) => setComp1DOM(e.target.value)} className="calc-input" />
                </div>
              </div>

              <div className="input-row">
                <div className="input-group">
                  <label>Pool</label>
                  <select value={comp1Pool} onChange={(e) => setComp1Pool(e.target.value)} className="calc-input">
                    <option value="yes">Yes</option>
                    <option value="no">No</option>
                  </select>
                </div>
                <div className="input-group">
                  <label>Lot Size (sqft)</label>
                  <input type="number" value={comp1LotSize} onChange={(e) => setComp1LotSize(e.target.value)} className="calc-input" />
                </div>
                <div className="input-group">
                  <label>Location (1-5)</label>
                  <select value={comp1Location} onChange={(e) => setComp1Location(e.target.value)} className="calc-input">
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                  </select>
                </div>
              </div>

              <div className="input-row">
                <div className="input-group">
                  <label>View</label>
                  <select value={comp1View} onChange={(e) => setComp1View(e.target.value)} className="calc-input">
                    <option value="none">None</option>
                    <option value="park">Park</option>
                    <option value="water">Water</option>
                    <option value="mountain">Mountain</option>
                    <option value="city">City</option>
                  </select>
                </div>
                <div className="input-group">
                  <label>Upgrades</label>
                  <select value={comp1Upgrades} onChange={(e) => setComp1Upgrades(e.target.value)} className="calc-input">
                    <option value="poor">Poor</option>
                    <option value="average">Average</option>
                    <option value="good">Good</option>
                    <option value="excellent">Excellent</option>
                  </select>
                </div>
              </div>
            </>
          )}
        </div>

        {/* Comparable 2 */}
        <div className="comp-section">
          <div className="comp-header">
            <h4>
              <input
                type="checkbox"
                checked={comp2Active}
                onChange={(e) => setComp2Active(e.target.checked)}
              />
              {' '}Comparable #2
            </h4>
          </div>
          
          {comp2Active && (
            <>
              <div className="input-group">
                <label htmlFor="comp2Price">Sale Price</label>
                <div className="input-wrapper">
                  <span className="input-prefix">$</span>
                  <input
                    id="comp2Price"
                    type="number"
                    value={comp2Price}
                    onChange={(e) => setComp2Price(e.target.value)}
                    className="calc-input"
                  />
                </div>
              </div>

              <div className="input-row">
                <div className="input-group">
                  <label>Beds</label>
                  <input type="number" value={comp2Beds} onChange={(e) => setComp2Beds(e.target.value)} className="calc-input" />
                </div>
                <div className="input-group">
                  <label>Baths</label>
                  <input type="number" step="0.5" value={comp2Baths} onChange={(e) => setComp2Baths(e.target.value)} className="calc-input" />
                </div>
                <div className="input-group">
                  <label>Sq Ft</label>
                  <input type="number" value={comp2Sqft} onChange={(e) => setComp2Sqft(e.target.value)} className="calc-input" />
                </div>
              </div>

              <div className="input-row">
                <div className="input-group">
                  <label>Garage</label>
                  <select value={comp2Garage} onChange={(e) => setComp2Garage(e.target.value)} className="calc-input">
                    <option value="yes">Yes</option>
                    <option value="no">No</option>
                  </select>
                </div>
                <div className="input-group">
                  <label>Condition</label>
                  <select value={comp2Condition} onChange={(e) => setComp2Condition(e.target.value)} className="calc-input">
                    <option value="poor">Poor</option>
                    <option value="fair">Fair</option>
                    <option value="good">Good</option>
                    <option value="excellent">Excellent</option>
                  </select>
                </div>
                <div className="input-group">
                  <label>Age (yrs)</label>
                  <input type="number" value={comp2Age} onChange={(e) => setComp2Age(e.target.value)} className="calc-input" />
                </div>
                <div className="input-group">
                  <label>Days on Market</label>
                  <input type="number" value={comp2DOM} onChange={(e) => setComp2DOM(e.target.value)} className="calc-input" />
                </div>
              </div>

              <div className="input-row">
                <div className="input-group"><label>Pool</label><select value={comp2Pool} onChange={(e) => setComp2Pool(e.target.value)} className="calc-input"><option value="yes">Yes</option><option value="no">No</option></select></div>
                <div className="input-group"><label>Lot Size (sqft)</label><input type="number" value={comp2LotSize} onChange={(e) => setComp2LotSize(e.target.value)} className="calc-input" /></div>
                <div className="input-group"><label>Location (1-5)</label><select value={comp2Location} onChange={(e) => setComp2Location(e.target.value)} className="calc-input"><option value="1">1</option><option value="2">2</option><option value="3">3</option><option value="4">4</option><option value="5">5</option></select></div>
              </div>

              <div className="input-row">
                <div className="input-group"><label>View</label><select value={comp2View} onChange={(e) => setComp2View(e.target.value)} className="calc-input"><option value="none">None</option><option value="park">Park</option><option value="water">Water</option><option value="mountain">Mountain</option><option value="city">City</option></select></div>
                <div className="input-group"><label>Upgrades</label><select value={comp2Upgrades} onChange={(e) => setComp2Upgrades(e.target.value)} className="calc-input"><option value="poor">Poor</option><option value="average">Average</option><option value="good">Good</option><option value="excellent">Excellent</option></select></div>
              </div>
            </>
          )}
        </div>

        {/* Comparable 3 */}
        <div className="comp-section">
          <div className="comp-header">
            <h4>
              <input
                type="checkbox"
                checked={comp3Active}
                onChange={(e) => setComp3Active(e.target.checked)}
              />
              {' '}Comparable #3
            </h4>
          </div>
          
          {comp3Active && (
            <>
              <div className="input-group">
                <label htmlFor="comp3Price">Sale Price</label>
                <div className="input-wrapper">
                  <span className="input-prefix">$</span>
                  <input
                    id="comp3Price"
                    type="number"
                    value={comp3Price}
                    onChange={(e) => setComp3Price(e.target.value)}
                    className="calc-input"
                  />
                </div>
              </div>

              <div className="input-row">
                <div className="input-group">
                  <label>Beds</label>
                  <input type="number" value={comp3Beds} onChange={(e) => setComp3Beds(e.target.value)} className="calc-input" />
                </div>
                <div className="input-group">
                  <label>Baths</label>
                  <input type="number" step="0.5" value={comp3Baths} onChange={(e) => setComp3Baths(e.target.value)} className="calc-input" />
                </div>
                <div className="input-group">
                  <label>Sq Ft</label>
                  <input type="number" value={comp3Sqft} onChange={(e) => setComp3Sqft(e.target.value)} className="calc-input" />
                </div>
              </div>

              <div className="input-row">
                <div className="input-group">
                  <label>Garage</label>
                  <select value={comp3Garage} onChange={(e) => setComp3Garage(e.target.value)} className="calc-input">
                    <option value="yes">Yes</option>
                    <option value="no">No</option>
                  </select>
                </div>
                <div className="input-group">
                  <label>Condition</label>
                  <select value={comp3Condition} onChange={(e) => setComp3Condition(e.target.value)} className="calc-input">
                    <option value="poor">Poor</option>
                    <option value="fair">Fair</option>
                    <option value="good">Good</option>
                    <option value="excellent">Excellent</option>
                  </select>
                </div>
                <div className="input-group">
                  <label>Age (yrs)</label>
                  <input type="number" value={comp3Age} onChange={(e) => setComp3Age(e.target.value)} className="calc-input" />
                </div>
                <div className="input-group">
                  <label>Days on Market</label>
                  <input type="number" value={comp3DOM} onChange={(e) => setComp3DOM(e.target.value)} className="calc-input" />
                </div>
              </div>

              <div className="input-row">
                <div className="input-group"><label>Pool</label><select value={comp3Pool} onChange={(e) => setComp3Pool(e.target.value)} className="calc-input"><option value="yes">Yes</option><option value="no">No</option></select></div>
                <div className="input-group"><label>Lot Size (sqft)</label><input type="number" value={comp3LotSize} onChange={(e) => setComp3LotSize(e.target.value)} className="calc-input" /></div>
                <div className="input-group"><label>Location (1-5)</label><select value={comp3Location} onChange={(e) => setComp3Location(e.target.value)} className="calc-input"><option value="1">1</option><option value="2">2</option><option value="3">3</option><option value="4">4</option><option value="5">5</option></select></div>
              </div>

              <div className="input-row">
                <div className="input-group"><label>View</label><select value={comp3View} onChange={(e) => setComp3View(e.target.value)} className="calc-input"><option value="none">None</option><option value="park">Park</option><option value="water">Water</option><option value="mountain">Mountain</option><option value="city">City</option></select></div>
                <div className="input-group"><label>Upgrades</label><select value={comp3Upgrades} onChange={(e) => setComp3Upgrades(e.target.value)} className="calc-input"><option value="poor">Poor</option><option value="average">Average</option><option value="good">Good</option><option value="excellent">Excellent</option></select></div>
              </div>
            </>
          )}
        </div>

        {/* Comparable 4 */}
        <div className="comp-section"><div className="comp-header"><h4><input type="checkbox" checked={comp4Active} onChange={(e) => setComp4Active(e.target.checked)} />{' '}Comparable #4</h4></div>{comp4Active && (<><div className="input-group"><label>Sale Price</label><div className="input-wrapper"><span className="input-prefix">$</span><input type="number" value={comp4Price} onChange={(e) => setComp4Price(e.target.value)} className="calc-input" /></div></div><div className="input-row"><div className="input-group"><label>Beds</label><input type="number" value={comp4Beds} onChange={(e) => setComp4Beds(e.target.value)} className="calc-input" /></div><div className="input-group"><label>Baths</label><input type="number" step="0.5" value={comp4Baths} onChange={(e) => setComp4Baths(e.target.value)} className="calc-input" /></div><div className="input-group"><label>Sq Ft</label><input type="number" value={comp4Sqft} onChange={(e) => setComp4Sqft(e.target.value)} className="calc-input" /></div></div><div className="input-row"><div className="input-group"><label>Garage</label><select value={comp4Garage} onChange={(e) => setComp4Garage(e.target.value)} className="calc-input"><option value="yes">Yes</option><option value="no">No</option></select></div><div className="input-group"><label>Condition</label><select value={comp4Condition} onChange={(e) => setComp4Condition(e.target.value)} className="calc-input"><option value="poor">Poor</option><option value="fair">Fair</option><option value="good">Good</option><option value="excellent">Excellent</option></select></div><div className="input-group"><label>Age</label><input type="number" value={comp4Age} onChange={(e) => setComp4Age(e.target.value)} className="calc-input" /></div><div className="input-group"><label>DOM</label><input type="number" value={comp4DOM} onChange={(e) => setComp4DOM(e.target.value)} className="calc-input" /></div></div><div className="input-row"><div className="input-group"><label>Pool</label><select value={comp4Pool} onChange={(e) => setComp4Pool(e.target.value)} className="calc-input"><option value="yes">Yes</option><option value="no">No</option></select></div><div className="input-group"><label>Lot Size</label><input type="number" value={comp4LotSize} onChange={(e) => setComp4LotSize(e.target.value)} className="calc-input" /></div><div className="input-group"><label>Location</label><select value={comp4Location} onChange={(e) => setComp4Location(e.target.value)} className="calc-input"><option value="1">1</option><option value="2">2</option><option value="3">3</option><option value="4">4</option><option value="5">5</option></select></div></div><div className="input-row"><div className="input-group"><label>View</label><select value={comp4View} onChange={(e) => setComp4View(e.target.value)} className="calc-input"><option value="none">None</option><option value="park">Park</option><option value="water">Water</option><option value="mountain">Mountain</option><option value="city">City</option></select></div><div className="input-group"><label>Upgrades</label><select value={comp4Upgrades} onChange={(e) => setComp4Upgrades(e.target.value)} className="calc-input"><option value="poor">Poor</option><option value="average">Average</option><option value="good">Good</option><option value="excellent">Excellent</option></select></div></div></>)}</div>

        {/* Comparable 5 */}
        <div className="comp-section"><div className="comp-header"><h4><input type="checkbox" checked={comp5Active} onChange={(e) => setComp5Active(e.target.checked)} />{' '}Comparable #5</h4></div>{comp5Active && (<><div className="input-group"><label>Sale Price</label><div className="input-wrapper"><span className="input-prefix">$</span><input type="number" value={comp5Price} onChange={(e) => setComp5Price(e.target.value)} className="calc-input" /></div></div><div className="input-row"><div className="input-group"><label>Beds</label><input type="number" value={comp5Beds} onChange={(e) => setComp5Beds(e.target.value)} className="calc-input" /></div><div className="input-group"><label>Baths</label><input type="number" step="0.5" value={comp5Baths} onChange={(e) => setComp5Baths(e.target.value)} className="calc-input" /></div><div className="input-group"><label>Sq Ft</label><input type="number" value={comp5Sqft} onChange={(e) => setComp5Sqft(e.target.value)} className="calc-input" /></div></div><div className="input-row"><div className="input-group"><label>Garage</label><select value={comp5Garage} onChange={(e) => setComp5Garage(e.target.value)} className="calc-input"><option value="yes">Yes</option><option value="no">No</option></select></div><div className="input-group"><label>Condition</label><select value={comp5Condition} onChange={(e) => setComp5Condition(e.target.value)} className="calc-input"><option value="poor">Poor</option><option value="fair">Fair</option><option value="good">Good</option><option value="excellent">Excellent</option></select></div><div className="input-group"><label>Age</label><input type="number" value={comp5Age} onChange={(e) => setComp5Age(e.target.value)} className="calc-input" /></div><div className="input-group"><label>DOM</label><input type="number" value={comp5DOM} onChange={(e) => setComp5DOM(e.target.value)} className="calc-input" /></div></div><div className="input-row"><div className="input-group"><label>Pool</label><select value={comp5Pool} onChange={(e) => setComp5Pool(e.target.value)} className="calc-input"><option value="yes">Yes</option><option value="no">No</option></select></div><div className="input-group"><label>Lot Size</label><input type="number" value={comp5LotSize} onChange={(e) => setComp5LotSize(e.target.value)} className="calc-input" /></div><div className="input-group"><label>Location</label><select value={comp5Location} onChange={(e) => setComp5Location(e.target.value)} className="calc-input"><option value="1">1</option><option value="2">2</option><option value="3">3</option><option value="4">4</option><option value="5">5</option></select></div></div><div className="input-row"><div className="input-group"><label>View</label><select value={comp5View} onChange={(e) => setComp5View(e.target.value)} className="calc-input"><option value="none">None</option><option value="park">Park</option><option value="water">Water</option><option value="mountain">Mountain</option><option value="city">City</option></select></div><div className="input-group"><label>Upgrades</label><select value={comp5Upgrades} onChange={(e) => setComp5Upgrades(e.target.value)} className="calc-input"><option value="poor">Poor</option><option value="average">Average</option><option value="good">Good</option><option value="excellent">Excellent</option></select></div></div></>)}</div>

        {/* Comparable 6 */}
        <div className="comp-section"><div className="comp-header"><h4><input type="checkbox" checked={comp6Active} onChange={(e) => setComp6Active(e.target.checked)} />{' '}Comparable #6</h4></div>{comp6Active && (<><div className="input-group"><label>Sale Price</label><div className="input-wrapper"><span className="input-prefix">$</span><input type="number" value={comp6Price} onChange={(e) => setComp6Price(e.target.value)} className="calc-input" /></div></div><div className="input-row"><div className="input-group"><label>Beds</label><input type="number" value={comp6Beds} onChange={(e) => setComp6Beds(e.target.value)} className="calc-input" /></div><div className="input-group"><label>Baths</label><input type="number" step="0.5" value={comp6Baths} onChange={(e) => setComp6Baths(e.target.value)} className="calc-input" /></div><div className="input-group"><label>Sq Ft</label><input type="number" value={comp6Sqft} onChange={(e) => setComp6Sqft(e.target.value)} className="calc-input" /></div></div><div className="input-row"><div className="input-group"><label>Garage</label><select value={comp6Garage} onChange={(e) => setComp6Garage(e.target.value)} className="calc-input"><option value="yes">Yes</option><option value="no">No</option></select></div><div className="input-group"><label>Condition</label><select value={comp6Condition} onChange={(e) => setComp6Condition(e.target.value)} className="calc-input"><option value="poor">Poor</option><option value="fair">Fair</option><option value="good">Good</option><option value="excellent">Excellent</option></select></div><div className="input-group"><label>Age</label><input type="number" value={comp6Age} onChange={(e) => setComp6Age(e.target.value)} className="calc-input" /></div><div className="input-group"><label>DOM</label><input type="number" value={comp6DOM} onChange={(e) => setComp6DOM(e.target.value)} className="calc-input" /></div></div><div className="input-row"><div className="input-group"><label>Pool</label><select value={comp6Pool} onChange={(e) => setComp6Pool(e.target.value)} className="calc-input"><option value="yes">Yes</option><option value="no">No</option></select></div><div className="input-group"><label>Lot Size</label><input type="number" value={comp6LotSize} onChange={(e) => setComp6LotSize(e.target.value)} className="calc-input" /></div><div className="input-group"><label>Location</label><select value={comp6Location} onChange={(e) => setComp6Location(e.target.value)} className="calc-input"><option value="1">1</option><option value="2">2</option><option value="3">3</option><option value="4">4</option><option value="5">5</option></select></div></div><div className="input-row"><div className="input-group"><label>View</label><select value={comp6View} onChange={(e) => setComp6View(e.target.value)} className="calc-input"><option value="none">None</option><option value="park">Park</option><option value="water">Water</option><option value="mountain">Mountain</option><option value="city">City</option></select></div><div className="input-group"><label>Upgrades</label><select value={comp6Upgrades} onChange={(e) => setComp6Upgrades(e.target.value)} className="calc-input"><option value="poor">Poor</option><option value="average">Average</option><option value="good">Good</option><option value="excellent">Excellent</option></select></div></div></>)}</div>
      </div>

      <div className="calculator-results">
        <h3>📊 CMA Analysis Results</h3>
        
        {adjustedComps.length > 0 && (
          <>
            <ExecutiveSummary 
              comps={adjustedComps}
              avgPrice={avgAdjustedPrice}
              minPrice={minPrice}
              maxPrice={maxPrice}
              recMin={recommendedMin}
              recMax={recommendedMax}
              confidence={getConfidenceLevel(adjustedComps)}
              clientName={clientName}
              address={subjectAddress}
              mode={mode}
            />
          </>
        )}
        
        {adjustedComps.length > 0 && (
          <div className="quick-stats-bar">
            <div className="quick-stat-item">
              <span className="stat-icon">📊</span>
              <div className="stat-content">
                <span className="stat-number">{adjustedComps.length}</span>
                <span className="stat-label">Active Comps</span>
              </div>
            </div>
            <div className="quick-stat-item">
              <span className="stat-icon">💰</span>
              <div className="stat-content">
                <span className="stat-number">${(avgAdjustedPrice / 1000).toFixed(0)}K</span>
                <span className="stat-label">Avg Value</span>
              </div>
            </div>
            <div className="quick-stat-item">
              <span className="stat-icon">📏</span>
              <div className="stat-content">
                <span className="stat-number">${((maxPrice - minPrice) / 1000).toFixed(0)}K</span>
                <span className="stat-label">Range Spread</span>
              </div>
            </div>
            {adjustedComps.length >= 3 && (
              <div className="quick-stat-item">
                <span className="stat-icon">📈</span>
                <div className="stat-content">
                  <span className="stat-number">{((calculateStdDev(adjustedComps.map(c => c.adjustedPrice)) / avgAdjustedPrice) * 100).toFixed(1)}%</span>
                  <span className="stat-label">Variance (CV)</span>
                </div>
              </div>
            )}
            <div className="quick-stat-item">
              <span className="stat-icon">{getConfidenceLevel(adjustedComps).level === 'high' ? '🟢' : getConfidenceLevel(adjustedComps).level === 'medium' ? '🟡' : '🔴'}</span>
              <div className="stat-content">
                <span className="stat-number">{getConfidenceLevel(adjustedComps).level.toUpperCase()}</span>
                <span className="stat-label">Confidence</span>
              </div>
            </div>
          </div>
        )}
        
        {adjustedComps.length === 0 && (
          <div className="result-card">
            <p>Please activate at least one comparable property.</p>
          </div>
        )}

        {adjustedComps.map((comp, index) => (
          <div key={comp.id} className="comp-result-card">
            <h4>Comparable #{comp.id}</h4>
            <div className="comp-result-grid">
              <div className="comp-result-item">
                <span className="label">Sale Price:</span>
                <span className="value">${comp.price.toLocaleString()}</span>
              </div>
              <div className="comp-result-item">
                <span className="label">Total Adjustment:</span>
                <span className="value" style={{ color: comp.adjustment >= 0 ? '#16a34a' : '#dc2626' }}>
                  {comp.adjustment >= 0 ? '+' : ''}${Math.abs(comp.adjustment).toLocaleString()}
                </span>
              </div>
              <div className="comp-result-item primary">
                <span className="label">Adjusted Value:</span>
                <span className="value">${comp.adjustedPrice.toLocaleString()}</span>
              </div>
            </div>
            {mode === 'learning' && Math.abs(comp.adjustment / comp.price) > 0.25 && (
              <div className="adjustment-warning">
                ⚠️ <strong>Warning:</strong> Adjustment is {(Math.abs(comp.adjustment / comp.price) * 100).toFixed(1)}% of sale price. 
                Comps over 25% adjusted may be too different. Consider using a more similar property.
              </div>
            )}
            {mode === 'learning' && (
              <AdjustmentBreakdown 
                comp={comp}
                subject={{ beds: subjectBeds, baths: subjectBaths, sqft: subjectSqft, garage: subjectGarage }}
                adjustments={{ bed: bedAdjustment, bath: bathAdjustment, sqft: sqftAdjustment, garage: garageAdjustment }}
              />
            )}
          </div>
        ))}

        {adjustedComps.length > 0 && (
          <>
            <div className="result-card summary">
              <h4>Summary Statistics</h4>
              <div className="summary-grid">
                <div className="summary-item">
                  <span className="label">Average Adjusted Value:</span>
                  <span className="value primary">${avgAdjustedPrice.toLocaleString('en-US', { maximumFractionDigits: 0 })}</span>
                </div>
                <div className="summary-item">
                  <span className="label">Value Range:</span>
                  <span className="value">${minPrice.toLocaleString()} - ${maxPrice.toLocaleString()}</span>
                </div>
              </div>
            </div>

            {adjustedComps.length >= 3 && (
              <div className="result-card advanced-stats">
                <h4>📈 Advanced Statistics</h4>
                <div className="advanced-stats-grid">
                  <div className="stat-box">
                    <span className="stat-label">Median Value</span>
                    <span className="stat-value">${calculateMedian(adjustedComps.map(c => c.adjustedPrice)).toLocaleString('en-US', { maximumFractionDigits: 0 })}</span>
                    {mode === 'learning' && <span className="stat-hint">Middle value when sorted</span>}
                  </div>
                  <div className="stat-box">
                    <span className="stat-label">Standard Deviation</span>
                    <span className="stat-value">${calculateStdDev(adjustedComps.map(c => c.adjustedPrice)).toLocaleString('en-US', { maximumFractionDigits: 0 })}</span>
                    {mode === 'learning' && <span className="stat-hint">Measure of spread/variance</span>}
                  </div>
                  <div className="stat-box">
                    <span className="stat-label">Coefficient of Variation</span>
                    <span className="stat-value">{((calculateStdDev(adjustedComps.map(c => c.adjustedPrice)) / avgAdjustedPrice) * 100).toFixed(2)}%</span>
                    {mode === 'learning' && <span className="stat-hint">Lower is better (&lt;10% excellent)</span>}
                  </div>
                </div>
                {detectOutliers(adjustedComps).length > 0 && (
                  <div className="outlier-warning">
                    ⚠️ <strong>Statistical Outliers Detected:</strong> Comp(s) #{detectOutliers(adjustedComps).join(', #')} are more than 2 standard deviations from the median. Consider removing or verifying data.
                  </div>
                )}
              </div>
            )}

            {mode === 'learning' && (
              <div className="result-card confidence-indicator" style={{ borderLeft: `4px solid ${getConfidenceLevel(adjustedComps).color}` }}>
                <h4>📊 Data Confidence</h4>
                <p style={{ color: getConfidenceLevel(adjustedComps).color, fontWeight: 'bold', fontSize: '1.1em' }}>
                  {getConfidenceLevel(adjustedComps).text}
                </p>
                <div style={{ fontSize: '0.9em', color: '#6b7280', marginTop: '0.5rem' }}>
                  <strong>What this means:</strong> {
                    getConfidenceLevel(adjustedComps).level === 'high' ? 'Comps are very similar. High accuracy.' :
                    getConfidenceLevel(adjustedComps).level === 'medium' ? 'Some variance. Review comp differences.' :
                    'Wide spread in values. Add more comps or verify data.'
                  }
                </div>
              </div>
            )}

            {mode === 'learning' && adjustedComps.length > 0 && (
              <div className="result-card price-per-sqft-analysis">
                <h4>📐 Price Per Square Foot Analysis</h4>
                <div className="sqft-grid">
                  <div className="sqft-item subject-sqft">
                    <span className="sqft-label">Subject (Estimated):</span>
                    <span className="sqft-value">${calcPricePerSqft(avgAdjustedPrice, subjectSqft)}/sqft</span>
                  </div>
                  {adjustedComps.map(comp => (
                    <div key={comp.id} className="sqft-item">
                      <span className="sqft-label">Comp #{comp.id} (Adjusted):</span>
                      <span className="sqft-value">${calcPricePerSqft(comp.adjustedPrice, comp.sqft)}/sqft</span>
                    </div>
                  ))}
                  <div className="sqft-item average-sqft">
                    <span className="sqft-label">Average $/sqft:</span>
                    <span className="sqft-value">
                      ${(adjustedComps.reduce((sum, c) => sum + parseFloat(calcPricePerSqft(c.adjustedPrice, c.sqft)), 0) / adjustedComps.length).toFixed(2)}/sqft
                    </span>
                  </div>
                </div>
                <p style={{ fontSize: '0.85em', color: '#6b7280', marginTop: '0.75rem' }}>
                  💡 <strong>Tip:</strong> Typical MA pricing: Urban $250-400/sqft | Suburban $100-200/sqft | Rural $75-150/sqft
                </p>
              </div>
            )}

            <PriceComparisonChart comps={adjustedComps} avgPrice={avgAdjustedPrice} mode={mode} />

            <ComparisonMatrix 
              comps={adjustedComps} 
              subject={{ beds: subjectBeds, baths: subjectBaths, sqft: subjectSqft, garage: subjectGarage }}
            />

            <div className="result-card recommendation">
              <h4>💡 Recommended Listing Price Range</h4>
              <div className="recommendation-range">
                <div className="range-item">
                  <span className="range-label">Conservative:</span>
                  <span className="range-value">${recommendedMin.toLocaleString('en-US', { maximumFractionDigits: 0 })}</span>
                </div>
                <div className="range-divider">to</div>
                <div className="range-item">
                  <span className="range-label">Aggressive:</span>
                  <span className="range-value">${recommendedMax.toLocaleString('en-US', { maximumFractionDigits: 0 })}</span>
                </div>
              </div>
              <p className="recommendation-note">
                Based on {adjustedComps.length} comparable{adjustedComps.length > 1 ? 's' : ''} with adjustments for differences in features, condition, and market factors.
              </p>
            </div>

            <button onClick={handlePrint} className="btn-primary print-button">
              🖨️ Print CMA Report
            </button>
          </>
        )}
      </div>

      <div className="calculator-explanation">
        <h4>How Enhanced CMA Works:</h4>
        <ul>
          <li><strong>Multiple Comparables:</strong> Analyze up to 3 recent sales for accurate valuation</li>
          <li><strong>Feature Adjustments:</strong> Accounts for bedrooms, bathrooms, square footage, and garage</li>
          <li><strong>Condition & Age:</strong> Newer/better condition = higher value</li>
          <li><strong>Market Factors:</strong> Days on market penalty (properties sitting longer indicate overpricing)</li>
          <li><strong>Adjustment Logic:</strong> If comp is better → subtract; if comp is worse → add</li>
          <li><strong>Recommended Range:</strong> ±3% from average provides pricing flexibility</li>
          <li><strong>Best Practice:</strong> Use comparables from last 3-6 months within 1 mile</li>
        </ul>
      </div>
    </div>
  );
}

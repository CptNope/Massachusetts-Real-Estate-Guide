import React, { useState, useEffect } from 'react';
import { cmaChallenges } from './cmaChallenges';

export default function EnhancedCMA({ gamification }) {
  const [showHelp, setShowHelp] = useState(false);
  const [showDataSources, setShowDataSources] = useState(false);
  const [showChallenges, setShowChallenges] = useState(false);
  const [activeChallenge, setActiveChallenge] = useState(null);
  const [challengeStartTime, setChallengeStartTime] = useState(null);
  const [showChallengeComplete, setShowChallengeComplete] = useState(false);
  
  // Subject Property
  const [subjectBeds, setSubjectBeds] = useState('3');
  const [subjectBaths, setSubjectBaths] = useState('2');
  const [subjectSqft, setSubjectSqft] = useState('1800');
  const [subjectGarage, setSubjectGarage] = useState('yes');
  const [subjectCondition, setSubjectCondition] = useState('good');
  const [subjectAge, setSubjectAge] = useState('10');
  const [subjectAddress, setSubjectAddress] = useState('');
  
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
  
  // Adjustment values
  const [bedAdjustment, setBedAdjustment] = useState('20000');
  const [bathAdjustment, setBathAdjustment] = useState('15000');
  const [sqftAdjustment, setSqftAdjustment] = useState('100');
  const [garageAdjustment, setGarageAdjustment] = useState('15000');
  const [conditionAdjustment, setConditionAdjustment] = useState('10000');
  const [ageAdjustment, setAgeAdjustment] = useState('2000');
  const [domAdjustment, setDomAdjustment] = useState('500');

  const conditionValues = { 'poor': 1, 'fair': 2, 'good': 3, 'excellent': 4 };

  const calcCompAdjustment = (comp) => {
    let adjustment = 0;
    const subBeds = parseInt(subjectBeds) || 0;
    const subBaths = parseFloat(subjectBaths) || 0;
    const subSqft = parseInt(subjectSqft) || 0;
    const subGar = subjectGarage === 'yes';
    const subCond = conditionValues[subjectCondition];
    const subAge = parseInt(subjectAge) || 0;
    
    const compBeds = parseInt(comp.beds) || 0;
    const compBaths = parseFloat(comp.baths) || 0;
    const compSqft = parseInt(comp.sqft) || 0;
    const compGar = comp.garage === 'yes';
    const compCond = conditionValues[comp.condition];
    const compAge = parseInt(comp.age) || 0;
    const compDOM = parseInt(comp.dom) || 0;
    
    const bedAdj = parseFloat(bedAdjustment) || 0;
    const bathAdj = parseFloat(bathAdjustment) || 0;
    const sqftAdj = parseFloat(sqftAdjustment) || 0;
    const garAdj = parseFloat(garageAdjustment) || 0;
    const condAdj = parseFloat(conditionAdjustment) || 0;
    const ageAdj = parseFloat(ageAdjustment) || 0;
    const domAdj = parseFloat(domAdjustment) || 0;

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
      dom: comp1DOM
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
      dom: comp2DOM
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
      dom: comp3DOM
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
      <div className="cma-print-header" style={{ display: 'none' }}>
        <h2>Comparative Market Analysis</h2>
        <p>Subject Property: {subjectAddress || 'Not specified'}</p>
        <p>Date: {new Date().toLocaleDateString()}</p>
      </div>

      <div className="cma-toolbar">
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
        <button 
          className="btn-primary cma-help-btn"
          onClick={() => setShowChallenges(!showChallenges)}
          title="Practice challenges with XP rewards"
        >
          {showChallenges ? '🎮 Hide Challenges' : '🎮 Start Challenge'}
        </button>
      </div>

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
            </>
          )}
        </div>
      </div>

      <div className="calculator-results">
        <h3>📊 CMA Analysis Results</h3>
        
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

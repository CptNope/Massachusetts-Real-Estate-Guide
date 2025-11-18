import React, { useState } from 'react';

export default function CalculatorMode() {
  const [activeCalculator, setActiveCalculator] = useState('commission');

  return (
    <div className="study-mode-container">
      <div className="study-mode-header">
        <h2>🧮 Real Estate Calculators</h2>
        <p>Calculate commissions, splits, and net proceeds</p>
      </div>

      <div className="calculator-tabs">
        <button
          className={`calc-tab ${activeCalculator === 'commission' ? 'active' : ''}`}
          onClick={() => setActiveCalculator('commission')}
        >
          💰 Commission Split
        </button>
        <button
          className={`calc-tab ${activeCalculator === 'proceeds' ? 'active' : ''}`}
          onClick={() => setActiveCalculator('proceeds')}
        >
          📊 Net Proceeds
        </button>
      </div>

      {activeCalculator === 'commission' && <CommissionCalculator />}
      {activeCalculator === 'proceeds' && <NetProceedsCalculator />}
    </div>
  );
}

function CommissionCalculator() {
  const [salePrice, setSalePrice] = useState('500000');
  const [commissionRate, setCommissionRate] = useState('5');
  const [splitPercentage, setSplitPercentage] = useState('50');
  const [capAmount, setCapAmount] = useState('');
  const [paidToCap, setPaidToCap] = useState('0');
  const [hasCap, setHasCap] = useState(false);

  const totalCommission = (parseFloat(salePrice) || 0) * (parseFloat(commissionRate) || 0) / 100;
  const agentSplit = totalCommission * (parseFloat(splitPercentage) || 0) / 100;
  const brokerSplit = totalCommission - agentSplit;
  
  // Cap calculation
  const capRemaining = hasCap ? Math.max(0, (parseFloat(capAmount) || 0) - (parseFloat(paidToCap) || 0)) : 0;
  const brokerTake = hasCap ? Math.min(brokerSplit, capRemaining) : brokerSplit;
  const agentFinal = totalCommission - brokerTake;
  const afterCapBonus = hasCap ? agentFinal - agentSplit : 0;

  return (
    <div className="calculator-container">
      <div className="calculator-inputs">
        <div className="input-group">
          <label htmlFor="salePrice">Sale Price</label>
          <div className="input-wrapper">
            <span className="input-prefix">$</span>
            <input
              id="salePrice"
              type="number"
              value={salePrice}
              onChange={(e) => setSalePrice(e.target.value)}
              className="calc-input"
            />
          </div>
        </div>

        <div className="input-group">
          <label htmlFor="commissionRate">Total Commission Rate</label>
          <div className="input-wrapper">
            <input
              id="commissionRate"
              type="number"
              step="0.1"
              value={commissionRate}
              onChange={(e) => setCommissionRate(e.target.value)}
              className="calc-input"
            />
            <span className="input-suffix">%</span>
          </div>
        </div>

        <div className="input-group">
          <label htmlFor="splitPercentage">Agent Split Percentage</label>
          <div className="input-wrapper">
            <input
              id="splitPercentage"
              type="number"
              value={splitPercentage}
              onChange={(e) => setSplitPercentage(e.target.value)}
              className="calc-input"
            />
            <span className="input-suffix">%</span>
          </div>
          <p className="input-hint">Common splits: 50/50, 60/40, 70/30, 80/20</p>
        </div>

        <div className="input-group checkbox-group">
          <label>
            <input
              type="checkbox"
              checked={hasCap}
              onChange={(e) => setHasCap(e.target.checked)}
            />
            <span>Agent has cap structure</span>
          </label>
        </div>

        {hasCap && (
          <>
            <div className="input-group">
              <label htmlFor="capAmount">Annual Cap Amount</label>
              <div className="input-wrapper">
                <span className="input-prefix">$</span>
                <input
                  id="capAmount"
                  type="number"
                  value={capAmount}
                  onChange={(e) => setCapAmount(e.target.value)}
                  className="calc-input"
                />
              </div>
              <p className="input-hint">Total amount paid to broker before 100% commission</p>
            </div>

            <div className="input-group">
              <label htmlFor="paidToCap">Already Paid to Cap</label>
              <div className="input-wrapper">
                <span className="input-prefix">$</span>
                <input
                  id="paidToCap"
                  type="number"
                  value={paidToCap}
                  onChange={(e) => setPaidToCap(e.target.value)}
                  className="calc-input"
                />
              </div>
            </div>
          </>
        )}
      </div>

      <div className="calculator-results">
        <h3>Results</h3>
        
        <div className="result-card primary">
          <div className="result-label">Total Commission</div>
          <div className="result-value">${totalCommission.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</div>
        </div>

        {!hasCap ? (
          <>
            <div className="result-card success">
              <div className="result-label">Agent Receives ({splitPercentage}%)</div>
              <div className="result-value">${agentSplit.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</div>
            </div>

            <div className="result-card">
              <div className="result-label">Broker Receives</div>
              <div className="result-value">${brokerSplit.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</div>
            </div>
          </>
        ) : (
          <>
            <div className="result-card">
              <div className="result-label">Cap Remaining</div>
              <div className="result-value">${capRemaining.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</div>
            </div>

            <div className="result-card">
              <div className="result-label">Broker Receives (toward cap)</div>
              <div className="result-value">${brokerTake.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</div>
            </div>

            <div className="result-card success">
              <div className="result-label">Agent Receives</div>
              <div className="result-value">${agentFinal.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</div>
            </div>

            {afterCapBonus > 0 && (
              <div className="result-card bonus">
                <div className="result-label">🎉 Post-Cap Bonus</div>
                <div className="result-value">+${afterCapBonus.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</div>
              </div>
            )}
          </>
        )}
      </div>

      <div className="calculator-explanation">
        <h4>How it works:</h4>
        <ul>
          <li>Total commission = Sale price × Commission rate</li>
          <li>Standard split = Total commission × Your split %</li>
          {hasCap && <li>After reaching your cap, you keep 100% of commissions</li>}
          <li>Broker receives the remaining amount (or amount toward cap)</li>
        </ul>
      </div>
    </div>
  );
}

function NetProceedsCalculator() {
  const [salePrice, setSalePrice] = useState('500000');
  const [mortgageBalance, setMortgageBalance] = useState('350000');
  const [commissionRate, setCommissionRate] = useState('5');
  const [closingCosts, setClosingCosts] = useState('3000');
  const [repairs, setRepairs] = useState('0');
  const [otherFees, setOtherFees] = useState('0');

  const totalCommission = (parseFloat(salePrice) || 0) * (parseFloat(commissionRate) || 0) / 100;
  const totalDeductions = totalCommission + 
    (parseFloat(mortgageBalance) || 0) + 
    (parseFloat(closingCosts) || 0) + 
    (parseFloat(repairs) || 0) + 
    (parseFloat(otherFees) || 0);
  const netProceeds = (parseFloat(salePrice) || 0) - totalDeductions;

  return (
    <div className="calculator-container">
      <div className="calculator-inputs">
        <div className="input-group">
          <label htmlFor="salePriceProceeds">Sale Price</label>
          <div className="input-wrapper">
            <span className="input-prefix">$</span>
            <input
              id="salePriceProceeds"
              type="number"
              value={salePrice}
              onChange={(e) => setSalePrice(e.target.value)}
              className="calc-input"
            />
          </div>
        </div>

        <div className="input-group">
          <label htmlFor="mortgageBalance">Mortgage Payoff Balance</label>
          <div className="input-wrapper">
            <span className="input-prefix">$</span>
            <input
              id="mortgageBalance"
              type="number"
              value={mortgageBalance}
              onChange={(e) => setMortgageBalance(e.target.value)}
              className="calc-input"
            />
          </div>
        </div>

        <div className="input-group">
          <label htmlFor="commissionRateProceeds">Commission Rate</label>
          <div className="input-wrapper">
            <input
              id="commissionRateProceeds"
              type="number"
              step="0.1"
              value={commissionRate}
              onChange={(e) => setCommissionRate(e.target.value)}
              className="calc-input"
            />
            <span className="input-suffix">%</span>
          </div>
        </div>

        <div className="input-group">
          <label htmlFor="closingCosts">Estimated Closing Costs</label>
          <div className="input-wrapper">
            <span className="input-prefix">$</span>
            <input
              id="closingCosts"
              type="number"
              value={closingCosts}
              onChange={(e) => setClosingCosts(e.target.value)}
              className="calc-input"
            />
          </div>
          <p className="input-hint">Title insurance, transfer taxes, attorney fees, etc.</p>
        </div>

        <div className="input-group">
          <label htmlFor="repairs">Pre-Sale Repairs</label>
          <div className="input-wrapper">
            <span className="input-prefix">$</span>
            <input
              id="repairs"
              type="number"
              value={repairs}
              onChange={(e) => setRepairs(e.target.value)}
              className="calc-input"
            />
          </div>
        </div>

        <div className="input-group">
          <label htmlFor="otherFees">Other Fees</label>
          <div className="input-wrapper">
            <span className="input-prefix">$</span>
            <input
              id="otherFees"
              type="number"
              value={otherFees}
              onChange={(e) => setOtherFees(e.target.value)}
              className="calc-input"
            />
          </div>
          <p className="input-hint">HOA fees, staging costs, etc.</p>
        </div>
      </div>

      <div className="calculator-results">
        <h3>Estimated Net Proceeds</h3>
        
        <div className="result-breakdown">
          <div className="breakdown-item">
            <span>Sale Price</span>
            <span className="positive">+${parseFloat(salePrice).toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</span>
          </div>
          <div className="breakdown-item deduction">
            <span>Mortgage Payoff</span>
            <span className="negative">-${parseFloat(mortgageBalance).toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</span>
          </div>
          <div className="breakdown-item deduction">
            <span>Commission ({commissionRate}%)</span>
            <span className="negative">-${totalCommission.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</span>
          </div>
          <div className="breakdown-item deduction">
            <span>Closing Costs</span>
            <span className="negative">-${parseFloat(closingCosts).toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</span>
          </div>
          {parseFloat(repairs) > 0 && (
            <div className="breakdown-item deduction">
              <span>Repairs</span>
              <span className="negative">-${parseFloat(repairs).toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</span>
            </div>
          )}
          {parseFloat(otherFees) > 0 && (
            <div className="breakdown-item deduction">
              <span>Other Fees</span>
              <span className="negative">-${parseFloat(otherFees).toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</span>
            </div>
          )}
        </div>

        <div className={`result-card ${netProceeds >= 0 ? 'success' : 'warning'} large`}>
          <div className="result-label">Net Proceeds to Seller</div>
          <div className="result-value">
            ${netProceeds.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
          </div>
        </div>

        {netProceeds < 0 && (
          <div className="calculator-warning">
            ⚠️ Negative proceeds indicate seller would need to bring money to closing
          </div>
        )}
      </div>

      <div className="calculator-explanation">
        <h4>What's included:</h4>
        <ul>
          <li><strong>Mortgage Payoff:</strong> Full balance owed on property</li>
          <li><strong>Commission:</strong> Typically 5-6% of sale price</li>
          <li><strong>Closing Costs:</strong> Title, transfer taxes, attorney (~1-3% of price)</li>
          <li><strong>Repairs:</strong> Pre-inspection fixes or credits to buyer</li>
          <li><strong>Other Fees:</strong> HOA transfer fees, staging, etc.</li>
        </ul>
        <p className="disclaimer">
          <strong>Note:</strong> This is an estimate. Actual proceeds may vary. Consult with your agent and attorney for precise calculations.
        </p>
      </div>
    </div>
  );
}

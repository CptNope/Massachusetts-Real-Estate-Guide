import React, { useState } from 'react';

export default function CalculatorMode() {
  const [activeCalculator, setActiveCalculator] = useState('commission');

  return (
    <div className="study-mode-container">
      <div className="study-mode-header">
        <h2>🧮 Professional Real Estate Calculators</h2>
        <p>6 calculators: commissions, mortgages, investments, property valuations, and closing costs</p>
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
        <button
          className={`calc-tab ${activeCalculator === 'mortgage' ? 'active' : ''}`}
          onClick={() => setActiveCalculator('mortgage')}
        >
          🏠 Mortgage
        </button>
        <button
          className={`calc-tab ${activeCalculator === 'investment' ? 'active' : ''}`}
          onClick={() => setActiveCalculator('investment')}
        >
          📈 Investment Property
        </button>
        <button
          className={`calc-tab ${activeCalculator === 'cma' ? 'active' : ''}`}
          onClick={() => setActiveCalculator('cma')}
        >
          🏘️ CMA Tool
        </button>
        <button
          className={`calc-tab ${activeCalculator === 'closing' ? 'active' : ''}`}
          onClick={() => setActiveCalculator('closing')}
        >
          📋 Closing Costs
        </button>
      </div>

      {activeCalculator === 'commission' && <CommissionCalculator />}
      {activeCalculator === 'proceeds' && <NetProceedsCalculator />}
      {activeCalculator === 'mortgage' && <MortgageCalculator />}
      {activeCalculator === 'investment' && <InvestmentPropertyCalculator />}
      {activeCalculator === 'cma' && <CMACalculator />}
      {activeCalculator === 'closing' && <ClosingCostCalculator />}
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

function MortgageCalculator() {
  const [loanAmount, setLoanAmount] = useState('400000');
  const [interestRate, setInterestRate] = useState('6.5');
  const [loanTerm, setLoanTerm] = useState('30');
  const [propertyTax, setPropertyTax] = useState('6000');
  const [insurance, setInsurance] = useState('1200');

  const monthlyRate = (parseFloat(interestRate) / 100) / 12;
  const numPayments = parseFloat(loanTerm) * 12;
  const principal = parseFloat(loanAmount) || 0;
  
  const monthlyPI = monthlyRate > 0 && principal > 0
    ? (principal * monthlyRate * Math.pow(1 + monthlyRate, numPayments)) / 
      (Math.pow(1 + monthlyRate, numPayments) - 1)
    : 0;

  const monthlyTax = (parseFloat(propertyTax) || 0) / 12;
  const monthlyInsurance = (parseFloat(insurance) || 0) / 12;
  const totalMonthly = monthlyPI + monthlyTax + monthlyInsurance;
  const totalPaid = monthlyPI * numPayments;
  const totalInterest = totalPaid - principal;

  return (
    <div className="calculator-container">
      <div className="calculator-inputs">
        <div className="input-group">
          <label htmlFor="loanAmount">Loan Amount</label>
          <div className="input-wrapper">
            <span className="input-prefix">$</span>
            <input
              id="loanAmount"
              type="number"
              value={loanAmount}
              onChange={(e) => setLoanAmount(e.target.value)}
              className="calc-input"
            />
          </div>
        </div>

        <div className="input-group">
          <label htmlFor="interestRate">Interest Rate</label>
          <div className="input-wrapper">
            <input
              id="interestRate"
              type="number"
              step="0.125"
              value={interestRate}
              onChange={(e) => setInterestRate(e.target.value)}
              className="calc-input"
            />
            <span className="input-suffix">%</span>
          </div>
        </div>

        <div className="input-group">
          <label htmlFor="loanTerm">Loan Term</label>
          <div className="input-wrapper">
            <input
              id="loanTerm"
              type="number"
              value={loanTerm}
              onChange={(e) => setLoanTerm(e.target.value)}
              className="calc-input"
            />
            <span className="input-suffix">years</span>
          </div>
        </div>

        <div className="input-group">
          <label htmlFor="propertyTax">Annual Property Tax</label>
          <div className="input-wrapper">
            <span className="input-prefix">$</span>
            <input
              id="propertyTax"
              type="number"
              value={propertyTax}
              onChange={(e) => setPropertyTax(e.target.value)}
              className="calc-input"
            />
          </div>
        </div>

        <div className="input-group">
          <label htmlFor="insurance">Annual Insurance</label>
          <div className="input-wrapper">
            <span className="input-prefix">$</span>
            <input
              id="insurance"
              type="number"
              value={insurance}
              onChange={(e) => setInsurance(e.target.value)}
              className="calc-input"
            />
          </div>
        </div>
      </div>

      <div className="calculator-results">
        <h3>Monthly Payment (PITI)</h3>
        
        <div className="result-card primary large">
          <div className="result-label">Total Monthly Payment</div>
          <div className="result-value">${totalMonthly.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</div>
        </div>

        <div className="result-breakdown">
          <div className="breakdown-item">
            <span>Principal & Interest</span>
            <span>${monthlyPI.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</span>
          </div>
          <div className="breakdown-item">
            <span>Property Tax</span>
            <span>${monthlyTax.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</span>
          </div>
          <div className="breakdown-item">
            <span>Insurance</span>
            <span>${monthlyInsurance.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</span>
          </div>
        </div>

        <div className="result-card">
          <div className="result-label">Total Interest Over {loanTerm} Years</div>
          <div className="result-value">${totalInterest.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</div>
        </div>
      </div>

      <div className="calculator-explanation">
        <h4>How it works:</h4>
        <ul>
          <li><strong>P & I:</strong> Principal and interest payment</li>
          <li><strong>Taxes:</strong> Property taxes held in escrow</li>
          <li><strong>Insurance:</strong> Homeowners insurance</li>
        </ul>
      </div>
    </div>
  );
}

function InvestmentPropertyCalculator() {
  const [purchasePrice, setPurchasePrice] = useState('300000');
  const [downPayment, setDownPayment] = useState('20');
  const [monthlyRent, setMonthlyRent] = useState('2500');
  const [vacancy, setVacancy] = useState('5');
  const [propertyTax, setPropertyTax] = useState('4000');
  const [insurance, setInsurance] = useState('1200');
  const [maintenance, setMaintenance] = useState('200');
  const [propertyMgmt, setPropertyMgmt] = useState('10');

  const price = parseFloat(purchasePrice) || 0;
  const downPct = parseFloat(downPayment) || 0;
  const downAmount = price * (downPct / 100);
  const loanAmount = price - downAmount;
  
  const grossRent = (parseFloat(monthlyRent) || 0) * 12;
  const vacancyLoss = grossRent * ((parseFloat(vacancy) || 0) / 100);
  const effectiveIncome = grossRent - vacancyLoss;
  
  const annualTax = parseFloat(propertyTax) || 0;
  const annualInsurance = parseFloat(insurance) || 0;
  const annualMaintenance = (parseFloat(maintenance) || 0) * 12;
  const mgmtFee = effectiveIncome * ((parseFloat(propertyMgmt) || 0) / 100);
  
  const totalExpenses = annualTax + annualInsurance + annualMaintenance + mgmtFee;
  const noi = effectiveIncome - totalExpenses;
  
  const capRate = price > 0 ? (noi / price) * 100 : 0;
  const cashOnCash = downAmount > 0 ? (noi / downAmount) * 100 : 0;

  return (
    <div className="calculator-container">
      <div className="calculator-inputs">
        <div className="input-group">
          <label htmlFor="purchasePrice">Purchase Price</label>
          <div className="input-wrapper">
            <span className="input-prefix">$</span>
            <input
              id="purchasePrice"
              type="number"
              value={purchasePrice}
              onChange={(e) => setPurchasePrice(e.target.value)}
              className="calc-input"
            />
          </div>
        </div>

        <div className="input-group">
          <label htmlFor="downPayment">Down Payment</label>
          <div className="input-wrapper">
            <input
              id="downPayment"
              type="number"
              value={downPayment}
              onChange={(e) => setDownPayment(e.target.value)}
              className="calc-input"
            />
            <span className="input-suffix">%</span>
          </div>
        </div>

        <div className="input-group">
          <label htmlFor="monthlyRent">Monthly Rent</label>
          <div className="input-wrapper">
            <span className="input-prefix">$</span>
            <input
              id="monthlyRent"
              type="number"
              value={monthlyRent}
              onChange={(e) => setMonthlyRent(e.target.value)}
              className="calc-input"
            />
          </div>
        </div>

        <div className="input-group">
          <label htmlFor="vacancy">Vacancy Rate</label>
          <div className="input-wrapper">
            <input
              id="vacancy"
              type="number"
              value={vacancy}
              onChange={(e) => setVacancy(e.target.value)}
              className="calc-input"
            />
            <span className="input-suffix">%</span>
          </div>
        </div>

        <div className="input-group">
          <label htmlFor="propertyTaxInv">Annual Property Tax</label>
          <div className="input-wrapper">
            <span className="input-prefix">$</span>
            <input
              id="propertyTaxInv"
              type="number"
              value={propertyTax}
              onChange={(e) => setPropertyTax(e.target.value)}
              className="calc-input"
            />
          </div>
        </div>

        <div className="input-group">
          <label htmlFor="insuranceInv">Annual Insurance</label>
          <div className="input-wrapper">
            <span className="input-prefix">$</span>
            <input
              id="insuranceInv"
              type="number"
              value={insurance}
              onChange={(e) => setInsurance(e.target.value)}
              className="calc-input"
            />
          </div>
        </div>

        <div className="input-group">
          <label htmlFor="maintenance">Monthly Maintenance</label>
          <div className="input-wrapper">
            <span className="input-prefix">$</span>
            <input
              id="maintenance"
              type="number"
              value={maintenance}
              onChange={(e) => setMaintenance(e.target.value)}
              className="calc-input"
            />
          </div>
        </div>

        <div className="input-group">
          <label htmlFor="propertyMgmt">Property Management Fee</label>
          <div className="input-wrapper">
            <input
              id="propertyMgmt"
              type="number"
              value={propertyMgmt}
              onChange={(e) => setPropertyMgmt(e.target.value)}
              className="calc-input"
            />
            <span className="input-suffix">%</span>
          </div>
        </div>
      </div>

      <div className="calculator-results">
        <h3>Investment Analysis</h3>
        
        <div className="result-card primary">
          <div className="result-label">Cap Rate</div>
          <div className="result-value">{capRate.toFixed(2)}%</div>
        </div>

        <div className="result-card success">
          <div className="result-label">Cash-on-Cash Return</div>
          <div className="result-value">{cashOnCash.toFixed(2)}%</div>
        </div>

        <div className="result-breakdown">
          <div className="breakdown-item">
            <span>Gross Rent (Annual)</span>
            <span className="positive">${grossRent.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</span>
          </div>
          <div className="breakdown-item deduction">
            <span>Vacancy Loss ({vacancy}%)</span>
            <span className="negative">-${vacancyLoss.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</span>
          </div>
          <div className="breakdown-item deduction">
            <span>Total Expenses</span>
            <span className="negative">-${totalExpenses.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</span>
          </div>
        </div>

        <div className="result-card">
          <div className="result-label">Net Operating Income (NOI)</div>
          <div className="result-value">${noi.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</div>
        </div>

        <div className="result-card">
          <div className="result-label">Cash Invested</div>
          <div className="result-value">${downAmount.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</div>
        </div>
      </div>

      <div className="calculator-explanation">
        <h4>How it works:</h4>
        <ul>
          <li><strong>Cap Rate:</strong> NOI ÷ Purchase Price (measures property performance)</li>
          <li><strong>Cash-on-Cash:</strong> NOI ÷ Cash Invested (measures return on your money)</li>
          <li><strong>NOI:</strong> Effective Income - Operating Expenses</li>
        </ul>
      </div>
    </div>
  );
}

function CMACalculator() {
  const [subjectBeds, setSubjectBeds] = useState('3');
  const [subjectBaths, setSubjectBaths] = useState('2');
  const [subjectSqft, setSubjectSqft] = useState('1800');
  const [subjectGarage, setSubjectGarage] = useState('yes');
  
  const [comp1Price, setComp1Price] = useState('425000');
  const [comp1Beds, setComp1Beds] = useState('3');
  const [comp1Baths, setComp1Baths] = useState('2');
  const [comp1Sqft, setComp1Sqft] = useState('1750');
  const [comp1Garage, setComp1Garage] = useState('yes');
  
  const [bedAdjustment, setBedAdjustment] = useState('20000');
  const [bathAdjustment, setBathAdjustment] = useState('15000');
  const [sqftAdjustment, setSqftAdjustment] = useState('100');
  const [garageAdjustment, setGarageAdjustment] = useState('15000');

  const calcAdjustment = () => {
    let adjustment = 0;
    const subBeds = parseInt(subjectBeds) || 0;
    const subBaths = parseFloat(subjectBaths) || 0;
    const subSqft = parseInt(subjectSqft) || 0;
    const subGar = subjectGarage === 'yes';
    
    const c1Beds = parseInt(comp1Beds) || 0;
    const c1Baths = parseFloat(comp1Baths) || 0;
    const c1Sqft = parseInt(comp1Sqft) || 0;
    const c1Gar = comp1Garage === 'yes';
    
    const bedAdj = parseFloat(bedAdjustment) || 0;
    const bathAdj = parseFloat(bathAdjustment) || 0;
    const sqftAdj = parseFloat(sqftAdjustment) || 0;
    const garAdj = parseFloat(garageAdjustment) || 0;

    if (c1Beds > subBeds) adjustment -= (c1Beds - subBeds) * bedAdj;
    if (c1Beds < subBeds) adjustment += (subBeds - c1Beds) * bedAdj;
    
    if (c1Baths > subBaths) adjustment -= (c1Baths - subBaths) * bathAdj;
    if (c1Baths < subBaths) adjustment += (subBaths - c1Baths) * bathAdj;
    
    adjustment += (subSqft - c1Sqft) * sqftAdj;
    
    if (c1Gar && !subGar) adjustment -= garAdj;
    if (!c1Gar && subGar) adjustment += garAdj;
    
    return adjustment;
  };

  const adjustment = calcAdjustment();
  const adjustedPrice = (parseFloat(comp1Price) || 0) + adjustment;

  return (
    <div className="calculator-container">
      <div className="calculator-inputs">
        <h4>Subject Property</h4>
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
        </div>

        <h4>Comparable Property #1</h4>
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
            <label htmlFor="comp1Beds">Bedrooms</label>
            <input
              id="comp1Beds"
              type="number"
              value={comp1Beds}
              onChange={(e) => setComp1Beds(e.target.value)}
              className="calc-input"
            />
          </div>

          <div className="input-group">
            <label htmlFor="comp1Baths">Bathrooms</label>
            <input
              id="comp1Baths"
              type="number"
              step="0.5"
              value={comp1Baths}
              onChange={(e) => setComp1Baths(e.target.value)}
              className="calc-input"
            />
          </div>

          <div className="input-group">
            <label htmlFor="comp1Sqft">Square Feet</label>
            <input
              id="comp1Sqft"
              type="number"
              value={comp1Sqft}
              onChange={(e) => setComp1Sqft(e.target.value)}
              className="calc-input"
            />
          </div>

          <div className="input-group">
            <label htmlFor="comp1Garage">Garage</label>
            <select
              id="comp1Garage"
              value={comp1Garage}
              onChange={(e) => setComp1Garage(e.target.value)}
              className="calc-input"
            >
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>
          </div>
        </div>

        <h4>Adjustment Values</h4>
        <div className="input-row">
          <div className="input-group">
            <label htmlFor="bedAdjustment">Per Bedroom</label>
            <div className="input-wrapper">
              <span className="input-prefix">$</span>
              <input
                id="bedAdjustment"
                type="number"
                value={bedAdjustment}
                onChange={(e) => setBedAdjustment(e.target.value)}
                className="calc-input"
              />
            </div>
          </div>

          <div className="input-group">
            <label htmlFor="bathAdjustment">Per Bathroom</label>
            <div className="input-wrapper">
              <span className="input-prefix">$</span>
              <input
                id="bathAdjustment"
                type="number"
                value={bathAdjustment}
                onChange={(e) => setBathAdjustment(e.target.value)}
                className="calc-input"
              />
            </div>
          </div>

          <div className="input-group">
            <label htmlFor="sqftAdjustment">Per Square Foot</label>
            <div className="input-wrapper">
              <span className="input-prefix">$</span>
              <input
                id="sqftAdjustment"
                type="number"
                value={sqftAdjustment}
                onChange={(e) => setSqftAdjustment(e.target.value)}
                className="calc-input"
              />
            </div>
          </div>

          <div className="input-group">
            <label htmlFor="garageAdjustment">Garage</label>
            <div className="input-wrapper">
              <span className="input-prefix">$</span>
              <input
                id="garageAdjustment"
                type="number"
                value={garageAdjustment}
                onChange={(e) => setGarageAdjustment(e.target.value)}
                className="calc-input"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="calculator-results">
        <h3>Comp #1 Analysis</h3>
        
        <div className="result-card">
          <div className="result-label">Comp Sale Price</div>
          <div className="result-value">${parseFloat(comp1Price).toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</div>
        </div>

        <div className="result-card">
          <div className="result-label">Total Adjustment</div>
          <div className="result-value" style={{ color: adjustment >= 0 ? '#16a34a' : '#dc2626' }}>
            {adjustment >= 0 ? '+' : ''}${adjustment.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
          </div>
        </div>

        <div className="result-card primary large">
          <div className="result-label">Adjusted Comparable Value</div>
          <div className="result-value">${adjustedPrice.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</div>
        </div>
      </div>

      <div className="calculator-explanation">
        <h4>How it works:</h4>
        <ul>
          <li><strong>If comp is better:</strong> SUBTRACT from comp price</li>
          <li><strong>If comp is worse:</strong> ADD to comp price</li>
          <li><strong>Adjusted value:</strong> Estimates what comp would sell for if it matched subject property</li>
          <li>Use 3-6 comps for accurate CMA</li>
        </ul>
      </div>
    </div>
  );
}

function ClosingCostCalculator() {
  const [purchasePrice, setPurchasePrice] = useState('500000');
  const [downPaymentPercent, setDownPaymentPercent] = useState('20');
  const [loanType, setLoanType] = useState('conventional');
  const [hasHOA, setHasHOA] = useState(false);
  const [hoaMonthly, setHoaMonthly] = useState('200');
  const [propertyTaxAnnual, setPropertyTaxAnnual] = useState('6000');
  const [homeownersInsurance, setHomeownersInsurance] = useState('1200');
  const [attorneyFee, setAttorneyFee] = useState('1000');
  const [viewingSide, setViewingSide] = useState('buyer'); // 'buyer' or 'seller'

  const price = parseFloat(purchasePrice) || 0;
  const downPayment = price * (parseFloat(downPaymentPercent) || 0) / 100;
  const loanAmount = price - downPayment;

  // BUYER COSTS
  const buyerCosts = {
    // Lender Fees
    loanOriginationFee: loanAmount * 0.01, // 1% of loan
    appraisalFee: 500,
    creditReportFee: 50,
    floodCertification: 25,
    taxServiceFee: 85,
    
    // Title & Escrow
    titleInsurance: price * 0.004, // ~0.4% in MA
    titleSearch: 300,
    recordingFees: 125, // Registry of Deeds
    
    // Government Fees
    maStampTax: price * 0.00456, // MA deed stamp tax (buyer pays in some counties)
    
    // Inspections
    homeInspection: 500,
    
    // Prepaid Items
    propertyTaxPrepaid: (parseFloat(propertyTaxAnnual) || 0) / 12 * 3, // 3 months
    homeownersInsPrepaid: parseFloat(homeownersInsurance) || 0,
    prepaidInterest: (loanAmount * 0.07 / 365) * 15, // ~15 days interest
    
    // HOA
    hoaTransferFee: hasHOA ? 250 : 0,
    hoaPrepaid: hasHOA ? (parseFloat(hoaMonthly) || 0) * 2 : 0,
    
    // Professional Fees
    attorneyFeeBuyer: parseFloat(attorneyFee) || 0,
    
    // PMI (if down payment < 20%)
    pmiUpfront: (loanType === 'fha') ? loanAmount * 0.0175 : 0,
    
    // Survey
    surveyCost: 500,
  };

  // SELLER COSTS
  const sellerCosts = {
    // Commission
    realEstateCommission: price * 0.05, // 5% total commission
    
    // Title & Transfer
    titleInsuranceSeller: price * 0.001, // Seller's portion
    maStampTaxSeller: price * 0.00456, // MA deed stamp tax
    
    // Payoffs
    existingMortgagePayoff: 0, // User would input actual amount
    
    // Repairs & Concessions
    buyerConcessions: 0, // User would input
    repairs: 0, // User would input
    
    // Professional Fees
    attorneyFeeSeller: parseFloat(attorneyFee) || 0,
    
    // Other
    homeWarranty: 500,
    recordingFees: 75,
    municipalLienCertificate: 100,
    waterBill: 150,
    smokeDetectorInspection: 100,
  };

  const totalBuyerCosts = Object.values(buyerCosts).reduce((sum, cost) => sum + cost, 0);
  const totalSellerCosts = Object.values(sellerCosts).reduce((sum, cost) => sum + cost, 0);
  
  const cashToClose = downPayment + totalBuyerCosts;
  const netToSeller = price - totalSellerCosts;

  return (
    <div className="calculator-container">
      <div className="calculator-inputs">
        <h3>Property Details</h3>
        
        <div className="input-group">
          <label htmlFor="purchasePrice">Purchase Price</label>
          <div className="input-wrapper">
            <span className="input-prefix">$</span>
            <input
              id="purchasePrice"
              type="number"
              value={purchasePrice}
              onChange={(e) => setPurchasePrice(e.target.value)}
              className="calc-input"
            />
          </div>
        </div>

        <div className="input-row">
          <div className="input-group">
            <label htmlFor="downPaymentPercent">Down Payment</label>
            <div className="input-wrapper">
              <input
                id="downPaymentPercent"
                type="number"
                step="0.5"
                value={downPaymentPercent}
                onChange={(e) => setDownPaymentPercent(e.target.value)}
                className="calc-input"
              />
              <span className="input-suffix">%</span>
            </div>
          </div>

          <div className="input-group">
            <label htmlFor="loanType">Loan Type</label>
            <select
              id="loanType"
              value={loanType}
              onChange={(e) => setLoanType(e.target.value)}
              className="calc-input"
            >
              <option value="conventional">Conventional</option>
              <option value="fha">FHA</option>
              <option value="va">VA</option>
            </select>
          </div>
        </div>

        <div className="input-row">
          <div className="input-group">
            <label htmlFor="propertyTaxAnnual">Annual Property Tax</label>
            <div className="input-wrapper">
              <span className="input-prefix">$</span>
              <input
                id="propertyTaxAnnual"
                type="number"
                value={propertyTaxAnnual}
                onChange={(e) => setPropertyTaxAnnual(e.target.value)}
                className="calc-input"
              />
            </div>
          </div>

          <div className="input-group">
            <label htmlFor="homeownersInsurance">Annual Homeowners Insurance</label>
            <div className="input-wrapper">
              <span className="input-prefix">$</span>
              <input
                id="homeownersInsurance"
                type="number"
                value={homeownersInsurance}
                onChange={(e) => setHomeownersInsurance(e.target.value)}
                className="calc-input"
              />
            </div>
          </div>
        </div>

        <div className="input-group">
          <label htmlFor="attorneyFee">Attorney Fee (Buyer & Seller)</label>
          <div className="input-wrapper">
            <span className="input-prefix">$</span>
            <input
              id="attorneyFee"
              type="number"
              value={attorneyFee}
              onChange={(e) => setAttorneyFee(e.target.value)}
              className="calc-input"
            />
          </div>
        </div>

        <div className="input-group">
          <label>
            <input
              type="checkbox"
              checked={hasHOA}
              onChange={(e) => setHasHOA(e.target.checked)}
            />
            {' '}Property has HOA
          </label>
          {hasHOA && (
            <div className="input-wrapper">
              <span className="input-prefix">$</span>
              <input
                type="number"
                value={hoaMonthly}
                onChange={(e) => setHoaMonthly(e.target.value)}
                placeholder="Monthly HOA fee"
                className="calc-input"
              />
              <span className="input-suffix">/month</span>
            </div>
          )}
        </div>

        <div className="view-toggle">
          <button
            className={`toggle-btn ${viewingSide === 'buyer' ? 'active' : ''}`}
            onClick={() => setViewingSide('buyer')}
          >
            👤 Buyer Costs
          </button>
          <button
            className={`toggle-btn ${viewingSide === 'seller' ? 'active' : ''}`}
            onClick={() => setViewingSide('seller')}
          >
            🏠 Seller Costs
          </button>
        </div>
      </div>

      {viewingSide === 'buyer' && (
        <div className="calculator-results">
          <h3>Buyer Closing Costs (Massachusetts)</h3>
          
          <div className="cost-category">
            <h4>Lender Fees</h4>
            <div className="cost-item">
              <span>Loan Origination Fee (1%)</span>
              <span>${buyerCosts.loanOriginationFee.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</span>
            </div>
            <div className="cost-item">
              <span>Appraisal Fee</span>
              <span>${buyerCosts.appraisalFee.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</span>
            </div>
            <div className="cost-item">
              <span>Credit Report</span>
              <span>${buyerCosts.creditReportFee.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</span>
            </div>
            <div className="cost-item">
              <span>Flood Certification</span>
              <span>${buyerCosts.floodCertification.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</span>
            </div>
            <div className="cost-item">
              <span>Tax Service Fee</span>
              <span>${buyerCosts.taxServiceFee.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</span>
            </div>
          </div>

          <div className="cost-category">
            <h4>Title & Recording</h4>
            <div className="cost-item">
              <span>Title Insurance</span>
              <span>${buyerCosts.titleInsurance.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</span>
            </div>
            <div className="cost-item">
              <span>Title Search</span>
              <span>${buyerCosts.titleSearch.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</span>
            </div>
            <div className="cost-item">
              <span>Recording Fees</span>
              <span>${buyerCosts.recordingFees.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</span>
            </div>
            <div className="cost-item">
              <span>MA Deed Stamp Tax (0.456%)</span>
              <span>${buyerCosts.maStampTax.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</span>
            </div>
          </div>

          <div className="cost-category">
            <h4>Prepaid Items</h4>
            <div className="cost-item">
              <span>Property Tax (3 months)</span>
              <span>${buyerCosts.propertyTaxPrepaid.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</span>
            </div>
            <div className="cost-item">
              <span>Homeowners Insurance (1 year)</span>
              <span>${buyerCosts.homeownersInsPrepaid.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</span>
            </div>
            <div className="cost-item">
              <span>Prepaid Interest (~15 days)</span>
              <span>${buyerCosts.prepaidInterest.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</span>
            </div>
          </div>

          <div className="cost-category">
            <h4>Other Costs</h4>
            <div className="cost-item">
              <span>Home Inspection</span>
              <span>${buyerCosts.homeInspection.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</span>
            </div>
            <div className="cost-item">
              <span>Survey</span>
              <span>${buyerCosts.surveyCost.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</span>
            </div>
            <div className="cost-item">
              <span>Attorney Fee</span>
              <span>${buyerCosts.attorneyFeeBuyer.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</span>
            </div>
            {hasHOA && (
              <>
                <div className="cost-item">
                  <span>HOA Transfer Fee</span>
                  <span>${buyerCosts.hoaTransferFee.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</span>
                </div>
                <div className="cost-item">
                  <span>HOA Prepaid (2 months)</span>
                  <span>${buyerCosts.hoaPrepaid.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</span>
                </div>
              </>
            )}
            {loanType === 'fha' && buyerCosts.pmiUpfront > 0 && (
              <div className="cost-item">
                <span>FHA Upfront MIP (1.75%)</span>
                <span>${buyerCosts.pmiUpfront.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</span>
              </div>
            )}
          </div>

          <div className="result-card primary large">
            <div className="result-label">Total Closing Costs</div>
            <div className="result-value">${totalBuyerCosts.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</div>
          </div>

          <div className="result-card accent large">
            <div className="result-label">Down Payment</div>
            <div className="result-value">${downPayment.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</div>
          </div>

          <div className="result-card success large">
            <div className="result-label">💰 Total Cash to Close</div>
            <div className="result-value">${cashToClose.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</div>
          </div>
        </div>
      )}

      {viewingSide === 'seller' && (
        <div className="calculator-results">
          <h3>Seller Closing Costs (Massachusetts)</h3>
          
          <div className="cost-category">
            <h4>Commissions & Fees</h4>
            <div className="cost-item">
              <span>Real Estate Commission (5%)</span>
              <span>${sellerCosts.realEstateCommission.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</span>
            </div>
            <div className="cost-item">
              <span>Attorney Fee</span>
              <span>${sellerCosts.attorneyFeeSeller.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</span>
            </div>
          </div>

          <div className="cost-category">
            <h4>Title & Transfer</h4>
            <div className="cost-item">
              <span>Title Insurance (Seller's portion)</span>
              <span>${sellerCosts.titleInsuranceSeller.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</span>
            </div>
            <div className="cost-item">
              <span>MA Deed Stamp Tax (0.456%)</span>
              <span>${sellerCosts.maStampTaxSeller.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</span>
            </div>
            <div className="cost-item">
              <span>Recording Fees</span>
              <span>${sellerCosts.recordingFees.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</span>
            </div>
          </div>

          <div className="cost-category">
            <h4>Municipal & Inspections</h4>
            <div className="cost-item">
              <span>Municipal Lien Certificate</span>
              <span>${sellerCosts.municipalLienCertificate.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</span>
            </div>
            <div className="cost-item">
              <span>Final Water Bill</span>
              <span>${sellerCosts.waterBill.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</span>
            </div>
            <div className="cost-item">
              <span>Smoke Detector Inspection</span>
              <span>${sellerCosts.smokeDetectorInspection.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</span>
            </div>
          </div>

          <div className="cost-category">
            <h4>Optional</h4>
            <div className="cost-item">
              <span>Home Warranty</span>
              <span>${sellerCosts.homeWarranty.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</span>
            </div>
          </div>

          <div className="result-card primary large">
            <div className="result-label">Total Closing Costs</div>
            <div className="result-value">${totalSellerCosts.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</div>
          </div>

          <div className="result-card success large">
            <div className="result-label">💵 Net Proceeds to Seller</div>
            <div className="result-value">${netToSeller.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</div>
          </div>
        </div>
      )}

      <div className="calculator-explanation">
        <h4>Massachusetts Closing Cost Notes:</h4>
        <ul>
          <li><strong>Buyer costs:</strong> Typically 2-5% of purchase price</li>
          <li><strong>Seller costs:</strong> Typically 6-10% (mostly commission)</li>
          <li><strong>MA Stamp Tax:</strong> $4.56 per $1,000 (0.456%)</li>
          <li><strong>Attorney required:</strong> MA requires attorney for closings</li>
          <li><strong>Title insurance:</strong> Split between buyer/seller varies by county</li>
          <li><strong>PMI:</strong> Required if down payment {"<"} 20% (conventional)</li>
          <li><strong>FHA MIP:</strong> 1.75% upfront + 0.55-0.85% annual</li>
          <li>Actual costs vary - get detailed Closing Disclosure from lender</li>
        </ul>
      </div>
    </div>
  );
}

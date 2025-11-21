export const section = {
  id: 'real-estate-math',
  icon: '🔢',
  title: '42. Real Estate Mathematics',
  subtitle: 'Essential Calculations with Step-by-Step Solutions',
  body: (
    <>
      <h3>📐 Area & Volume Calculations</h3>
      
      <h4>🔹 Square Footage (Area)</h4>
      <ul>
        <li><strong>Rectangle:</strong> Length × Width = Square Feet</li>
        <li><strong>Triangle:</strong> (Base × Height) ÷ 2 = Square Feet</li>
        <li><strong>Circle:</strong> π × Radius² = Square Feet (π ≈ 3.14)</li>
      </ul>

      <h4>🔹 Acres</h4>
      <ul>
        <li><strong>1 Acre =</strong> 43,560 square feet</li>
        <li><strong>Square Feet to Acres:</strong> Divide by 43,560</li>
        <li><strong>Acres to Square Feet:</strong> Multiply by 43,560</li>
      </ul>

      <h4>🔹 Practice Problems</h4>

      <div style={{background: '#fff4e6', padding: '1rem', borderRadius: '8px', marginBottom: '1rem'}}>
        <strong>Problem 1:</strong> House is 60 feet × 40 feet. What is the square footage?
        <p><strong>Solution:</strong></p>
        <ul>
          <li>60 ft × 40 ft = <strong>2,400 square feet</strong></li>
        </ul>
      </div>

      <div style={{background: '#fff4e6', padding: '1rem', borderRadius: '8px', marginBottom: '1rem'}}>
        <strong>Problem 2:</strong> Lot is 150 feet × 200 feet. How many acres?
        <p><strong>Solution:</strong></p>
        <ul>
          <li>Step 1: 150 ft × 200 ft = 30,000 sq ft</li>
          <li>Step 2: 30,000 ÷ 43,560 = <strong>0.69 acres</strong></li>
        </ul>
      </div>

      <div style={{background: '#fff4e6', padding: '1rem', borderRadius: '8px', marginBottom: '1rem'}}>
        <strong>Problem 3:</strong> Lot is 2.5 acres. How many square feet?
        <p><strong>Solution:</strong></p>
        <ul>
          <li>2.5 acres × 43,560 = <strong>108,900 square feet</strong></li>
        </ul>
      </div>

      <hr/>

      <h3>💰 Commission Calculations</h3>
      
      <h4>🔹 Basic Commission Formula</h4>
      <ul>
        <li><strong>Commission = Sale Price × Commission Rate</strong></li>
        <li><strong>Example:</strong> $400,000 sale × 5% = $20,000 commission</li>
      </ul>

      <h4>🔹 Agent's Share (Splits)</h4>
      <ul>
        <li><strong>Formula:</strong> Total Commission × Split % = Agent's Share</li>
        <li><strong>Common Splits:</strong> 50/50, 60/40, 70/30, 80/20</li>
      </ul>

      <h4>🔹 Practice Problems</h4>

      <div style={{background: '#fff4e6', padding: '1rem', borderRadius: '8px', marginBottom: '1rem'}}>
        <strong>Problem 4:</strong> Home sells for $500,000. Commission is 6%. How much total commission?
        <p><strong>Solution:</strong></p>
        <ul>
          <li>$500,000 × 0.06 = <strong>$30,000 commission</strong></li>
        </ul>
      </div>

      <div style={{background: '#fff4e6', padding: '1rem', borderRadius: '8px', marginBottom: '1rem'}}>
        <strong>Problem 5:</strong> Total commission is $18,000. Listing broker and selling broker split 50/50. Selling agent gets 70% of their broker's half. How much does selling agent get?
        <p><strong>Solution:</strong></p>
        <ul>
          <li>Step 1: Broker's share = $18,000 × 0.50 = $9,000</li>
          <li>Step 2: Agent's share = $9,000 × 0.70 = <strong>$6,300</strong></li>
        </ul>
      </div>

      <div style={{background: '#fff4e6', padding: '1rem', borderRadius: '8px', marginBottom: '1rem'}}>
        <strong>Problem 6:</strong> Agent received $12,000 commission. This was 60% of broker's 50% share. What was total commission?
        <p><strong>Solution:</strong></p>
        <ul>
          <li>Step 1: Broker's share = $12,000 ÷ 0.60 = $20,000</li>
          <li>Step 2: Total commission = $20,000 ÷ 0.50 = <strong>$40,000</strong></li>
        </ul>
      </div>

      <hr/>

      <h3>📅 Proration Calculations</h3>
      
      <h4>🔹 Proration Rules</h4>
      <ul>
        <li><strong>Annual ÷ 365 =</strong> Daily rate</li>
        <li><strong>Annual ÷ 12 =</strong> Monthly rate</li>
        <li><strong>Seller Pays:</strong> Day of closing (usually)</li>
        <li><strong>Buyer Pays:</strong> Day after closing forward</li>
      </ul>

      <h4>🔹 What Gets Prorated?</h4>
      <ul>
        <li>✅ Property taxes</li>
        <li>✅ HOA fees/condo fees</li>
        <li>✅ Rent (if tenant-occupied)</li>
        <li>✅ Utility bills</li>
        <li>❌ Commission (NOT prorated - paid at closing)</li>
      </ul>

      <h4>🔹 Practice Problems</h4>

      <div style={{background: '#fff4e6', padding: '1rem', borderRadius: '8px', marginBottom: '1rem'}}>
        <strong>Problem 7:</strong> Annual property tax is $7,300. Closing is October 15. Fiscal year is July 1 - June 30. How much does seller owe?
        <p><strong>Solution:</strong></p>
        <ul>
          <li>Step 1: Daily rate = $7,300 ÷ 365 = $20/day</li>
          <li>Step 2: Days seller owned = July 1 to Oct 15 = 107 days</li>
          <li>Step 3: Seller owes = 107 × $20 = <strong>$2,140</strong></li>
        </ul>
      </div>

      <div style={{background: '#fff4e6', padding: '1rem', borderRadius: '8px', marginBottom: '1rem'}}>
        <strong>Problem 8:</strong> HOA fees are $300/month, paid in advance on 1st of month. Closing is March 18. Seller already paid March fee. What credit does seller get?
        <p><strong>Solution:</strong></p>
        <ul>
          <li>Step 1: Daily rate = $300 ÷ 30 = $10/day</li>
          <li>Step 2: Buyer owes for March 19-31 = 13 days</li>
          <li>Step 3: Credit to seller = 13 × $10 = <strong>$130</strong></li>
        </ul>
      </div>

      <hr/>

      <h3>🏦 Loan Calculations</h3>
      
      <h4>🔹 Loan-to-Value Ratio (LTV)</h4>
      <ul>
        <li><strong>Formula:</strong> (Loan Amount ÷ Property Value) × 100 = LTV%</li>
        <li><strong>Purpose:</strong> Lender's risk assessment</li>
        <li><strong>Example:</strong> $320,000 loan on $400,000 home = 80% LTV</li>
      </ul>

      <h4>🔹 Down Payment</h4>
      <ul>
        <li><strong>Formula:</strong> Purchase Price × Down Payment % = Down Payment $</li>
        <li><strong>Or:</strong> Purchase Price - Loan Amount = Down Payment</li>
      </ul>

      <h4>🔹 Monthly Principal & Interest (P&I)</h4>
      <ul>
        <li><strong>Quick Formula:</strong> Use factor table (given on exam)</li>
        <li><strong>Or Calculate:</strong> Loan Amount × Factor = Monthly P&I</li>
      </ul>

      <h4>🔹 Practice Problems</h4>

      <div style={{background: '#fff4e6', padding: '1rem', borderRadius: '8px', marginBottom: '1rem'}}>
        <strong>Problem 9:</strong> Home price is $450,000. Buyer makes 20% down payment. What is loan amount?
        <p><strong>Solution:</strong></p>
        <ul>
          <li>Step 1: Down payment = $450,000 × 0.20 = $90,000</li>
          <li>Step 2: Loan amount = $450,000 - $90,000 = <strong>$360,000</strong></li>
        </ul>
      </div>

      <div style={{background: '#fff4e6', padding: '1rem', borderRadius: '8px', marginBottom: '1rem'}}>
        <strong>Problem 10:</strong> Loan is $300,000 on home valued at $375,000. What is LTV?
        <p><strong>Solution:</strong></p>
        <ul>
          <li>($300,000 ÷ $375,000) × 100 = <strong>80% LTV</strong></li>
        </ul>
      </div>

      <div style={{background: '#fff4e6', padding: '1rem', borderRadius: '8px', marginBottom: '1rem'}}>
        <strong>Problem 11:</strong> Loan is $250,000 at 6% interest. What is first month's interest payment?
        <p><strong>Solution:</strong></p>
        <ul>
          <li>Step 1: Annual interest = $250,000 × 0.06 = $15,000</li>
          <li>Step 2: Monthly interest = $15,000 ÷ 12 = <strong>$1,250</strong></li>
        </ul>
      </div>

      <hr/>

      <h3>📈 Investment Property Calculations</h3>
      
      <h4>🔹 Net Operating Income (NOI)</h4>
      <ul>
        <li><strong>Formula:</strong> Gross Income - Operating Expenses = NOI</li>
        <li><strong>Do NOT Include:</strong> Mortgage payments, depreciation</li>
      </ul>

      <h4>🔹 Capitalization Rate (Cap Rate)</h4>
      <ul>
        <li><strong>Formula:</strong> (NOI ÷ Property Value) × 100 = Cap Rate %</li>
        <li><strong>Purpose:</strong> Measure investment return</li>
        <li><strong>Higher Cap Rate =</strong> Better return (or higher risk)</li>
      </ul>

      <h4>🔹 Cash-on-Cash Return</h4>
      <ul>
        <li><strong>Formula:</strong> (Annual Cash Flow ÷ Cash Invested) × 100 = Cash-on-Cash %</li>
        <li><strong>Cash Flow =</strong> NOI - Mortgage Payments</li>
      </ul>

      <h4>🔹 Practice Problems</h4>

      <div style={{background: '#fff4e6', padding: '1rem', borderRadius: '8px', marginBottom: '1rem'}}>
        <strong>Problem 12:</strong> Property generates $60,000 annual rent. Operating expenses are $18,000. What is NOI?
        <p><strong>Solution:</strong></p>
        <ul>
          <li>NOI = $60,000 - $18,000 = <strong>$42,000</strong></li>
        </ul>
      </div>

      <div style={{background: '#fff4e6', padding: '1rem', borderRadius: '8px', marginBottom: '1rem'}}>
        <strong>Problem 13:</strong> NOI is $48,000. Property value is $600,000. What is cap rate?
        <p><strong>Solution:</strong></p>
        <ul>
          <li>($48,000 ÷ $600,000) × 100 = <strong>8% cap rate</strong></li>
        </ul>
      </div>

      <div style={{background: '#fff4e6', padding: '1rem', borderRadius: '8px', marginBottom: '1rem'}}>
        <strong>Problem 14:</strong> Property has 9% cap rate and NOI of $54,000. What is property value?
        <p><strong>Solution:</strong></p>
        <ul>
          <li>Value = NOI ÷ Cap Rate</li>
          <li>Value = $54,000 ÷ 0.09 = <strong>$600,000</strong></li>
        </ul>
      </div>

      <hr/>

      <h3>💡 Percentage & Appreciation/Depreciation</h3>
      
      <h4>🔹 Appreciation Formula</h4>
      <ul>
        <li><strong>New Value = Original × (1 + Rate)</strong></li>
        <li><strong>Example:</strong> $300,000 home appreciates 5% = $300,000 × 1.05 = $315,000</li>
      </ul>

      <h4>🔹 Depreciation Formula</h4>
      <ul>
        <li><strong>New Value = Original × (1 - Rate)</strong></li>
        <li><strong>Example:</strong> $400,000 home depreciates 3% = $400,000 × 0.97 = $388,000</li>
      </ul>

      <h4>🔹 Practice Problems</h4>

      <div style={{background: '#fff4e6', padding: '1rem', borderRadius: '8px', marginBottom: '1rem'}}>
        <strong>Problem 15:</strong> Home bought for $350,000 appreciates 4% per year for 2 years. What is new value?
        <p><strong>Solution:</strong></p>
        <ul>
          <li>Year 1: $350,000 × 1.04 = $364,000</li>
          <li>Year 2: $364,000 × 1.04 = <strong>$378,560</strong></li>
          <li><em>Or use: $350,000 × 1.04² = $378,560</em></li>
        </ul>
      </div>

      <hr/>

      <h3>🔑 Key Exam Formulas (Quick Reference)</h3>

      <table style={{width: '100%', borderCollapse: 'collapse', marginTop: '1rem'}}>
        <thead>
          <tr style={{background: '#38bdf8', color: 'white'}}>
            <th style={{padding: '0.5rem', border: '1px solid #ddd'}}>What to Find</th>
            <th style={{padding: '0.5rem', border: '1px solid #ddd'}}>Formula</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={{padding: '0.5rem', border: '1px solid #ddd'}}>Square Feet</td>
            <td style={{padding: '0.5rem', border: '1px solid #ddd'}}>Length × Width</td>
          </tr>
          <tr style={{background: '#f0f9ff'}}>
            <td style={{padding: '0.5rem', border: '1px solid #ddd'}}>Acres</td>
            <td style={{padding: '0.5rem', border: '1px solid #ddd'}}>Square Feet ÷ 43,560</td>
          </tr>
          <tr>
            <td style={{padding: '0.5rem', border: '1px solid #ddd'}}>Commission</td>
            <td style={{padding: '0.5rem', border: '1px solid #ddd'}}>Sale Price × Rate</td>
          </tr>
          <tr style={{background: '#f0f9ff'}}>
            <td style={{padding: '0.5rem', border: '1px solid #ddd'}}>LTV</td>
            <td style={{padding: '0.5rem', border: '1px solid #ddd'}}>(Loan ÷ Value) × 100</td>
          </tr>
          <tr>
            <td style={{padding: '0.5rem', border: '1px solid #ddd'}}>NOI</td>
            <td style={{padding: '0.5rem', border: '1px solid #ddd'}}>Gross Income - Operating Expenses</td>
          </tr>
          <tr style={{background: '#f0f9ff'}}>
            <td style={{padding: '0.5rem', border: '1px solid #ddd'}}>Cap Rate</td>
            <td style={{padding: '0.5rem', border: '1px solid #ddd'}}>(NOI ÷ Value) × 100</td>
          </tr>
          <tr>
            <td style={{padding: '0.5rem', border: '1px solid #ddd'}}>Monthly Interest</td>
            <td style={{padding: '0.5rem', border: '1px solid #ddd'}}>(Loan × Annual Rate) ÷ 12</td>
          </tr>
          <tr style={{background: '#f0f9ff'}}>
            <td style={{padding: '0.5rem', border: '1px solid #ddd'}}>Proration</td>
            <td style={{padding: '0.5rem', border: '1px solid #ddd'}}>Annual ÷ 365 × Days</td>
          </tr>
        </tbody>
      </table>

      <hr/>

      <h3>✏️ Exam Tips for Math</h3>
      <ul>
        <li>✅ <strong>Bring Calculator:</strong> Non-programmable calculator allowed</li>
        <li>✅ <strong>Show Work:</strong> Write out steps (helps catch errors)</li>
        <li>✅ <strong>Check Units:</strong> Square feet vs. acres, monthly vs. annual</li>
        <li>✅ <strong>Double-Check:</strong> Math errors are easy to make under pressure</li>
        <li>✅ <strong>Round Carefully:</strong> Follow exam instructions (usually 2 decimals)</li>
        <li>✅ <strong>Read Carefully:</strong> "What does seller owe?" vs. "What does buyer owe?"</li>
      </ul>
    </>
  )
};

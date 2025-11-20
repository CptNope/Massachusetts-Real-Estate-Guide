import React from 'react';

export const section = {
    id: 'financing',
    icon: '🏦',
    title: '20. Financing Deep Dive',
    subtitle: 'Loan types, down payments, approval process, qualification - understanding buyer financing',
    body: (
      <>
        <h3>Most Common Types of Purchase Loans - Quick Reference</h3>
        <p className="highlight">
          <strong>Essential Overview:</strong> Understanding the various loan types helps you guide buyers to 
          the right financing option for their situation. Here's a quick reference of the most common purchase loans.
        </p>

        <div className="loan-types-overview">
          <div className="loan-type-card">
            <h4>📋 Conventional</h4>
            <p>Traditional loans 15/20/30 year terms with Fixed Rates. 3% down payment</p>
            <ul>
              <li><strong>Down Payment:</strong> As low as 3% (typically 3-20%)</li>
              <li><strong>Best For:</strong> Buyers with good credit (620+) and stable income</li>
              <li><strong>Not government-backed</strong></li>
              <li><strong>PMI required if less than 20% down</strong></li>
            </ul>
          </div>

          <div className="loan-type-card">
            <h4>🏠 FHA</h4>
            <p>30 yr. loans backed by Federal Housing Administration / 3.5% down payment</p>
            <ul>
              <li><strong>Down Payment:</strong> 3.5% (credit score 580+) or 10% (credit score 500-579)</li>
              <li><strong>Best For:</strong> First-time buyers, lower credit scores, lower income</li>
              <li><strong>Government-insured</strong></li>
              <li><strong>MIP (Mortgage Insurance Premium) required for life of loan if &lt;10% down</strong></li>
            </ul>
          </div>

          <div className="loan-type-card">
            <h4>🎖️ VA</h4>
            <p>For Veteran's with eligibility. 100% financing</p>
            <ul>
              <li><strong>Down Payment:</strong> $0 (100% financing)</li>
              <li><strong>Best For:</strong> Veterans, active duty military, eligible surviving spouses</li>
              <li><strong>Government-guaranteed</strong></li>
              <li><strong>No PMI required</strong></li>
              <li><strong>Certificate of Eligibility needed</strong></li>
            </ul>
          </div>

          <div className="loan-type-card">
            <h4>🏡 Mass Housing</h4>
            <p>Backed by State of MA, require buyers to take class. Traditionally 3% down payment but can 
            now get up to 100% financing. Offers Rehab loans and will finance cost of de-leading homes with Lead Paint.</p>
            <ul>
              <li><strong>Down Payment:</strong> 3% traditional, but up to 100% financing available</li>
              <li><strong>Best For:</strong> First-time buyers, moderate income, homes needing lead paint removal</li>
              <li><strong>Requirements:</strong> Must take homebuyer education class</li>
              <li><strong>Special Programs:</strong> Rehab loans, lead paint deleading financing</li>
              <li><strong>Income limits apply</strong></li>
            </ul>
          </div>

          <div className="loan-type-card">
            <h4>🌾 USDA</h4>
            <p>U.S. Department of Agriculture, specific rural areas only, 100% financing.</p>
            <ul>
              <li><strong>Down Payment:</strong> $0 (100% financing)</li>
              <li><strong>Best For:</strong> Rural/suburban area buyers with moderate income</li>
              <li><strong>Location Restrictions:</strong> Property must be in USDA-eligible rural area</li>
              <li><strong>Income limits apply</strong></li>
              <li><strong>Government-guaranteed</strong></li>
            </ul>
          </div>

          <div className="loan-type-card">
            <h4>📊 Adjustable Rate Mortgage (ARM)</h4>
            <p>Interest rate adjusts according to index of U.S. Treasury Securities</p>
            <ul>
              <li><strong>Rate Structure:</strong> Fixed for initial period (3, 5, 7, 10 years), then adjusts</li>
              <li><strong>Best For:</strong> Buyers planning to move/refinance before adjustment period</li>
              <li><strong>Lower initial rates than fixed</strong></li>
              <li><strong>Risk:</strong> Payment can increase significantly after initial period</li>
            </ul>
          </div>

          <div className="loan-type-card">
            <h4>🏗️ Construction Loan</h4>
            <p>Eventually converts over to conventional loan upon completion of construction.</p>
            <ul>
              <li><strong>Purpose:</strong> Finance land purchase and construction costs</li>
              <li><strong>Draw Schedule:</strong> Funds released in stages as construction progresses</li>
              <li><strong>Conversion:</strong> Converts to permanent mortgage upon completion</li>
              <li><strong>Best For:</strong> Building custom homes or major renovations</li>
              <li><strong>Requires detailed construction plans and budget</strong></li>
            </ul>
          </div>

          <div className="loan-type-card">
            <h4>🔧 203K Rehab Loan</h4>
            <p>FHA loan allows buyers to include repairs/improvements in loan at time of purchase.</p>
            <ul>
              <li><strong>Purpose:</strong> Purchase + renovation costs in one loan</li>
              <li><strong>Best For:</strong> Homes needing significant repairs/updates</li>
              <li><strong>Types:</strong> Standard (major structural) or Limited (up to $35,000 repairs)</li>
              <li><strong>Down Payment:</strong> 3.5% on total loan (purchase + repairs)</li>
              <li><strong>Great for fixer-uppers</strong></li>
            </ul>
          </div>

          <div className="loan-type-card">
            <h4>🎈 Balloon Loan</h4>
            <p>Short-term loan to be paid in full by maturity date. (7-10yrs)</p>
            <ul>
              <li><strong>Term:</strong> Typically 7-10 years</li>
              <li><strong>Payment Structure:</strong> Low monthly payments based on 30-year amortization</li>
              <li><strong>Balloon Payment:</strong> Entire remaining balance due at end of term</li>
              <li><strong>Best For:</strong> Buyers expecting significant income increase or planning to sell</li>
              <li><strong>Risk:</strong> Must refinance or pay off entire balance at maturity</li>
            </ul>
          </div>

          <div className="loan-type-card">
            <h4>🔄 Reverse Mortgage</h4>
            <p>Homeowners 62 years or older can take a loan against their equity. Lump sum payment, 
            monthly installment or open line of credit. NOT repaid to lender until owner dies, moves out or is in default.</p>
            <ul>
              <li><strong>Age Requirement:</strong> 62 years or older</li>
              <li><strong>Payout Options:</strong> Lump sum, monthly payments, or line of credit</li>
              <li><strong>No Monthly Payments:</strong> Loan not repaid until owner dies, moves, or defaults</li>
              <li><strong>Best For:</strong> Seniors needing cash flow, want to age in place</li>
              <li><strong>Must maintain property, pay taxes and insurance</strong></li>
            </ul>
          </div>

          <div className="loan-type-card">
            <h4>🏚️ HUD Homes</h4>
            <p>Foreclosures of FHA homes by HUD. Agents must register to submit bids. Don't deal with 
            general public. All homes sold "as-is". Early bidding for owner-occupied purchasers. Often offer to pay 
            buyer's closing costs up to 6%.</p>
            <ul>
              <li><strong>What They Are:</strong> FHA foreclosures owned by HUD</li>
              <li><strong>Agent Registration Required:</strong> Must register at HUDHomeStore.gov to submit bids</li>
              <li><strong>Condition:</strong> Sold "as-is" (no repairs by seller)</li>
              <li><strong>Priority Period:</strong> First 15-30 days for owner-occupied buyers only</li>
              <li><strong>Incentives:</strong> Often offers up to 6% toward buyer's closing costs</li>
              <li><strong>Bidding Process:</strong> Sealed bid auction, highest bid wins</li>
            </ul>
          </div>
        </div>

        <h4>Quick Comparison Chart:</h4>
        <div className="comparison-table">
          <table>
            <thead>
              <tr>
                <th>Loan Type</th>
                <th>Down Payment</th>
                <th>Credit Score</th>
                <th>Best For</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Conventional</strong></td>
                <td>3-20%</td>
                <td>620+</td>
                <td>Good credit, stable income</td>
              </tr>
              <tr>
                <td><strong>FHA</strong></td>
                <td>3.5%</td>
                <td>580+</td>
                <td>First-time buyers, lower credit</td>
              </tr>
              <tr>
                <td><strong>VA</strong></td>
                <td>0%</td>
                <td>No minimum</td>
                <td>Veterans, military</td>
              </tr>
              <tr>
                <td><strong>Mass Housing</strong></td>
                <td>3% or 0%</td>
                <td>Varies</td>
                <td>First-time, moderate income</td>
              </tr>
              <tr>
                <td><strong>USDA</strong></td>
                <td>0%</td>
                <td>640+</td>
                <td>Rural areas, moderate income</td>
              </tr>
              <tr>
                <td><strong>203K Rehab</strong></td>
                <td>3.5%</td>
                <td>580+</td>
                <td>Fixer-upper properties</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p className="highlight">
          <strong>Agent Tip:</strong> Have this quick reference memorized to guide buyers efficiently. 
          Match loan type to buyer profile: Veterans→VA, Rural→USDA, Lower credit→FHA, 
          Fixer-upper→203K, Good credit→Conventional. Always refer to licensed lender for specific qualification.
        </p>

        <hr />

        <h3>23.1 Conventional Loans</h3>
        <p className="highlight">
          Most common loan type for buyers with good credit and stable income. Not government-backed.
        </p>

        <h4>Key Features:</h4>
        <ul>
          <li><strong>Down Payment:</strong> 3-20% (PMI required if less than 20%)</li>
          <li><strong>Credit Score:</strong> 620+ minimum (700+ for best rates)</li>
          <li><strong>Debt-to-Income Ratio:</strong> 43% maximum (36% preferred)</li>
          <li><strong>Loan Limits (2025):</strong> $766,550 standard, $1,149,825 high-cost areas (MA)</li>
          <li><strong>PMI (Private Mortgage Insurance):</strong> 0.5-1.5% annually if &lt;20% down</li>
          <li><strong>Interest Rates:</strong> Typically lowest rates available</li>
        </ul>

        <h4>Conventional Loan Types:</h4>
        <div className="loan-types">
          <p><strong>Conforming:</strong> Meets Fannie Mae/Freddie Mac standards, lower rates</p>
          <p><strong>Non-Conforming:</strong> Doesn't meet standards (jumbo loans, unique properties)</p>
          <p><strong>Portfolio:</strong> Lender keeps loan instead of selling it</p>
        </div>

        <h4>Advantages:</h4>
        <ul>
          <li>✅ Lowest interest rates with good credit</li>
          <li>✅ PMI drops off at 78% LTV (loan-to-value)</li>
          <li>✅ Can be used for investment properties (higher down payment)</li>
          <li>✅ Flexible terms (15, 20, 30 years)</li>
          <li>✅ Fewer property requirements than FHA</li>
        </ul>

        <h4>Disadvantages:</h4>
        <ul>
          <li>❌ Stricter credit requirements</li>
          <li>❌ Larger down payment needed</li>
          <li>❌ Tougher approval for self-employed</li>
        </ul>

        <h3>23.2 Adjustable Rate Mortgage (ARM)</h3>
        <p className="highlight">
          Originates with 1 rate of interest, with the rate fluctuating UP or DOWN during the term of the 
          loan based on economic indicators.
        </p>

        <p><strong>Key Concept:</strong> Because the interest rate may change, so may the borrower's mortgage 
        payment. Details of how or when the rate of interest will or may change are detailed in the note.</p>

        <h4>ARM Components Explained:</h4>

        <div className="arm-component">
          <h5>📊 Index:</h5>
          <p>Rate is tied to financial indicator, such as <strong>cost-of-funds index</strong> for federally 
          chartered lenders. Many indexes are tied to <strong>U.S. Treasury Securities</strong>.</p>
          <ul>
            <li>Common indexes: SOFR, Treasury rates, Cost of Funds Index (COFI)</li>
            <li>Index moves up/down with market conditions</li>
            <li>Beyond borrower's and lender's control</li>
          </ul>
        </div>

        <div className="arm-component">
          <h5>➕ Margin:</h5>
          <p><strong>Interest rate = Index rate + a premium (margin)</strong></p>
          <p>Margin represents lender's cost of doing business.</p>
          <p className="example"><strong>Example:</strong> If index is 1.5% and Margin is 2% over index, 
          the total rate would be 3.5%.</p>
          <ul>
            <li><strong>Margin is fixed:</strong> Doesn't change over life of loan</li>
            <li><strong>Typical margin:</strong> 2-3%</li>
            <li><strong>Your rate:</strong> Index + Margin = Total interest rate</li>
          </ul>
        </div>

        <div className="arm-component">
          <h5>🔒 Interest Rate Caps:</h5>
          <p>Limits the amount a rate can change at 1 time (periodic rate cap) and also limits the total 
          increase over the life of the loan (aggregate rate cap).</p>
          
          <p><strong>Periodic Rate Cap:</strong> Maximum rate change per adjustment period</p>
          <ul>
            <li>Typically 2% per adjustment</li>
            <li>Example: Rate is 4%, can only go up to 6% or down to 2% at next adjustment</li>
          </ul>

          <p><strong>Lifetime Cap (Aggregate):</strong> Maximum rate over life of loan</p>
          <ul>
            <li>Typically 5-6% above starting rate</li>
            <li>Example: Start at 3%, lifetime cap of 6% = maximum rate of 9%</li>
          </ul>

          <p className="info">ARM's generally carry a <strong>2% periodic rate cap</strong> (amount rate can 
          jump or drop at one time) & <strong>6% over life of the loan</strong>.</p>
        </div>

        <div className="arm-component">
          <h5>💰 Payment Caps:</h5>
          <p>Mortgagor is protected against possibility of unaffordable individual payments by the payment cap, 
          which sets a maximum payment amount.</p>
          
          <p className="warning"><strong>⚠️ Negative Amortization Risk:</strong> A rate increase could result in a 
          <strong> negative amortization</strong>. (Meaning - the principal amount may not decrease if payment cap 
          is reached)</p>

          <h6>How Negative Amortization Works:</h6>
          <ul>
            <li><strong>Rate increases:</strong> Should make payment $2,000</li>
            <li><strong>Payment cap:</strong> Limits payment to $1,800</li>
            <li><strong>Shortfall:</strong> $200 per month not covered</li>
            <li><strong>Result:</strong> $200 added to principal balance each month</li>
            <li><strong>Your loan grows:</strong> Owe more than you borrowed!</li>
          </ul>
        </div>

        <div className="arm-component">
          <h5>📅 Adjustment Period:</h5>
          <p><strong>Definition:</strong> How often can the rate adjust. Common periods are monthly, quarterly 
          and annually.</p>
          
          <h6>Common ARM Types:</h6>
          <ul>
            <li><strong>5/1 ARM:</strong> Fixed for 5 years, then adjusts every 1 year thereafter</li>
            <li><strong>7/1 ARM:</strong> Fixed for 7 years, then adjusts annually</li>
            <li><strong>10/1 ARM:</strong> Fixed for 10 years, then adjusts annually</li>
            <li><strong>5/6 ARM:</strong> Fixed for 5 years, then adjusts every 6 months</li>
            <li><strong>3/1 ARM:</strong> Fixed for 3 years, then adjusts annually</li>
          </ul>

          <p className="example"><strong>Example: 5/1 ARM at 3%</strong></p>
          <ul>
            <li>Years 1-5: Fixed at 3%</li>
            <li>Year 6: Could adjust to 5% (2% cap)</li>
            <li>Year 7: Could adjust to 7% (2% cap)</li>
            <li>Year 8: Could adjust to 9% (2% cap, hits 6% lifetime cap)</li>
            <li>Thereafter: Can't go above 9% (3% start + 6% lifetime cap)</li>
          </ul>
        </div>

        <h4>Advantages of ARMs:</h4>
        <ul>
          <li>✅ <strong>Lower Initial Rate:</strong> Start 0.5-1% below fixed rates</li>
          <li>✅ <strong>Lower Initial Payment:</strong> More affordable at first</li>
          <li>✅ <strong>Rate May Decrease:</strong> If market rates fall, your rate falls</li>
          <li>✅ <strong>Good for Short-Term:</strong> If selling/refinancing within fixed period</li>
          <li>✅ <strong>Easier Qualification:</strong> Lower start rate = lower DTI</li>
        </ul>

        <h4>Disadvantages of ARMs:</h4>
        <ul>
          <li>❌ <strong>Uncertainty:</strong> Don't know future payment amounts</li>
          <li>❌ <strong>Payment Shock:</strong> Payments can increase significantly</li>
          <li>❌ <strong>Negative Amortization:</strong> May owe more than borrowed</li>
          <li>❌ <strong>Harder to Budget:</strong> Variable payments complicate planning</li>
          <li>❌ <strong>Risk if Rates Rise:</strong> Could become unaffordable</li>
        </ul>

        <h4>When ARMs Make Sense:</h4>
        <ul>
          <li>📈 <strong>Expect Income Increase:</strong> Can afford higher payments later</li>
          <li>🏠 <strong>Planning to Move:</strong> Within 5-7 years (before adjustments)</li>
          <li>📉 <strong>Rates Expected to Fall:</strong> Benefit from rate decreases</li>
          <li>💼 <strong>Short-Term Ownership:</strong> Not your forever home</li>
          <li>🔄 <strong>Plan to Refinance:</strong> Before adjustment period begins</li>
        </ul>

        <h4>When ARMs DON'T Make Sense:</h4>
        <ul>
          <li>🏡 <strong>Forever Home:</strong> Planning to stay 10+ years</li>
          <li>💰 <strong>Fixed Income:</strong> Retirees, can't afford increases</li>
          <li>📊 <strong>Tight Budget:</strong> Can barely afford current payment</li>
          <li>😰 <strong>Risk Averse:</strong> Need payment certainty</li>
          <li>📈 <strong>Rates Low:</strong> When fixed rates are already low, lock in!</li>
        </ul>

        <div className="comparison">
          <h4>ARM vs. Fixed Rate Comparison:</h4>
          <table>
            <tr>
              <th>Feature</th>
              <th>ARM</th>
              <th>Fixed Rate</th>
            </tr>
            <tr>
              <td>Initial Rate</td>
              <td>Lower (3%)</td>
              <td>Higher (4%)</td>
            </tr>
            <tr>
              <td>Rate Changes</td>
              <td>Yes, periodically</td>
              <td>Never</td>
            </tr>
            <tr>
              <td>Payment Certainty</td>
              <td>Low</td>
              <td>High</td>
            </tr>
            <tr>
              <td>Risk Level</td>
              <td>Higher</td>
              <td>Lower</td>
            </tr>
            <tr>
              <td>Best For</td>
              <td>Short-term, expect income growth</td>
              <td>Long-term, stable income</td>
            </tr>
          </table>
        </div>

        <p className="highlight">
          <strong>Agent Tip:</strong> Always ensure buyers understand ARM risks. Don't just qualify at start rate - 
          verify they can afford payments at maximum rate (after caps apply). ARMs caused many foreclosures in 
          2008 crisis when rates adjusted upward and payments became unaffordable.
        </p>

        <h3>23.3 FHA Loans</h3>
        <p>
          Federal Housing Administration insured loans. Popular for first-time buyers with lower down payment.
        </p>

        <h4>Key Features:</h4>
        <ul>
          <li><strong>Down Payment:</strong> 3.5% minimum</li>
          <li><strong>Credit Score:</strong> 580+ for 3.5% down, 500-579 for 10% down</li>
          <li><strong>Debt-to-Income Ratio:</strong> Up to 50% allowed</li>
          <li><strong>Loan Limits (2025 MA):</strong> $498,257 to $1,149,825 (county-dependent)</li>
          <li><strong>MIP (Mortgage Insurance Premium):</strong> Upfront 1.75% + annual 0.55-1.05%</li>
          <li><strong>MIP Duration:</strong> Life of loan if &lt;10% down, 11 years if ≥10% down</li>
        </ul>

        <h4>Property Requirements:</h4>
        <ul>
          <li>Must be primary residence (no investment properties)</li>
          <li>Must meet FHA minimum property standards</li>
          <li>Requires FHA appraisal (stricter than conventional)</li>
          <li>Seller can contribute up to 6% toward closing costs</li>
        </ul>

        <h4>Advantages:</h4>
        <ul>
          <li>✅ Low down payment (3.5%)</li>
          <li>✅ More lenient credit requirements</li>
          <li>✅ Higher debt-to-income ratios accepted</li>
          <li>✅ Assumable loans (buyer can take over loan)</li>
          <li>✅ Gift funds allowed for down payment</li>
        </ul>

        <h4>Disadvantages:</h4>
        <ul>
          <li>❌ MIP for life of loan (if &lt;10% down)</li>
          <li>❌ Stricter property condition requirements</li>
          <li>❌ Lower loan limits than conventional in some areas</li>
          <li>❌ Longer closing times (more documentation)</li>
        </ul>

        <h3>23.4 VA Loans</h3>
        <p>
          Department of Veterans Affairs guaranteed loans for eligible military members, veterans, and spouses.
        </p>

        <h4>Key Features:</h4>
        <ul>
          <li><strong>Down Payment:</strong> $0 (100% financing)</li>
          <li><strong>Credit Score:</strong> No minimum (lender discretion, typically 620+)</li>
          <li><strong>Loan Limits:</strong> No maximum in most areas (2025)</li>
          <li><strong>Funding Fee:</strong> 2.15-3.3% (waived for disabled veterans)</li>
          <li><strong>PMI:</strong> None required</li>
          <li><strong>Eligibility:</strong> Certificate of Eligibility (COE) required</li>
        </ul>

        <h4>Eligibility Requirements:</h4>
        <ul>
          <li>Active duty: 90 consecutive days during wartime, 181 days during peacetime</li>
          <li>Veterans: Minimum service requirements met, honorable discharge</li>
          <li>Reservists/National Guard: 6 years of service</li>
          <li>Surviving spouses: Eligible in certain circumstances</li>
        </ul>

        <h4>Advantages:</h4>
        <ul>
          <li>✅ No down payment required</li>
          <li>✅ No PMI ever</li>
          <li>✅ Competitive interest rates</li>
          <li>✅ Seller can pay all buyer closing costs</li>
          <li>✅ Lenient credit requirements</li>
          <li>✅ Can use multiple times</li>
          <li>✅ Assumable by qualified buyers</li>
        </ul>

        <h4>Disadvantages:</h4>
        <ul>
          <li>❌ Funding fee (unless disabled)</li>
          <li>❌ Must be primary residence</li>
          <li>❌ Stricter property condition standards</li>
          <li>❌ Some sellers hesitate (unfamiliar, longer closing)</li>
          <li>❌ VA appraisal required (can be conservative)</li>
        </ul>

        <h3>23.5 USDA Loans</h3>
        <p>
          U.S. Department of Agriculture loans for rural and suburban properties. Zero down payment option.
        </p>

        <h4>Key Features:</h4>
        <ul>
          <li><strong>Down Payment:</strong> $0 (100% financing)</li>
          <li><strong>Credit Score:</strong> 640+ preferred</li>
          <li><strong>Income Limits:</strong> 115% of area median income</li>
          <li><strong>Location:</strong> Must be in USDA-eligible area (check map)</li>
          <li><strong>Guarantee Fee:</strong> 1% upfront + 0.35% annual</li>
        </ul>

        <h4>Advantages:</h4>
        <ul>
          <li>✅ No down payment</li>
          <li>✅ Low mortgage insurance</li>
          <li>✅ Competitive rates</li>
          <li>✅ Seller can pay closing costs</li>
        </ul>

        <h4>Disadvantages:</h4>
        <ul>
          <li>❌ Geographic restrictions</li>
          <li>❌ Income limits</li>
          <li>❌ Primary residence only</li>
          <li>❌ Longer processing times</li>
        </ul>

        <h3>23.6 Jumbo Loans</h3>
        <p>
          Loans exceeding conventional conforming limits. Common in high-cost Massachusetts markets.
        </p>

        <h4>Key Features:</h4>
        <ul>
          <li><strong>Loan Amount:</strong> Above $766,550 (or local limit)</li>
          <li><strong>Down Payment:</strong> 10-20% typically required</li>
          <li><strong>Credit Score:</strong> 700+ minimum (740+ for best rates)</li>
          <li><strong>Debt-to-Income:</strong> 43% maximum (stricter)</li>
          <li><strong>Reserves:</strong> 6-12 months cash reserves required</li>
          <li><strong>Documentation:</strong> Extensive income/asset verification</li>
        </ul>

        <h4>Advantages:</h4>
        <ul>
          <li>✅ Allows purchase of higher-priced homes</li>
          <li>✅ No PMI if 20% down</li>
          <li>✅ Competitive rates (if strong financials)</li>
        </ul>

        <h4>Disadvantages:</h4>
        <ul>
          <li>❌ Higher interest rates than conforming</li>
          <li>❌ Larger down payment</li>
          <li>❌ Stricter qualification requirements</li>
          <li>❌ More documentation</li>
          <li>❌ Fewer lenders offer jumbo loans</li>
        </ul>

        <h3>23.7 Alternative Financing</h3>
        
        <h4>Seller Financing:</h4>
        <ul>
          <li><strong>How it works:</strong> Seller acts as lender, buyer makes payments to seller</li>
          <li><strong>Terms:</strong> Negotiable (usually 5-10 years with balloon payment)</li>
          <li><strong>When used:</strong> Buyer can't qualify traditionally, fast closing needed, property hard to finance</li>
          <li><strong>Risks:</strong> Seller still liable for existing mortgage (due-on-sale clause), buyer default</li>
        </ul>

        <h4>Bridge Loans:</h4>
        <ul>
          <li><strong>Purpose:</strong> Short-term financing until permanent financing secured</li>
          <li><strong>Common use:</strong> Buying before selling current home</li>
          <li><strong>Term:</strong> 6-12 months typically</li>
          <li><strong>Cost:</strong> Higher interest rates (7-10%)</li>
        </ul>

        <h4>Hard Money Loans:</h4>
        <ul>
          <li><strong>Source:</strong> Private investors, not banks</li>
          <li><strong>Based on:</strong> Property value, not borrower credit</li>
          <li><strong>Use:</strong> Fix-and-flip, distressed properties</li>
          <li><strong>Terms:</strong> 6-18 months, 8-15% interest, high fees</li>
        </ul>

        <h3>23.8 Understanding Loan Amortization</h3>
        <p className="highlight">
          Amortization is the process of paying off a loan through regular payments over time. Understanding 
          how your payment is split between principal and interest is crucial for buyers.
        </p>

        <h4>Fully Amortized Loan:</h4>
        <p>A fully amortized loan has fixed payments throughout the loan term. Each payment includes both 
        principal (paying down the loan balance) and interest (cost of borrowing).</p>

        <div className="amortization-visual">
          <h5>🔑 Key Insight: The 50/50 Milestone</h5>
          <p className="info">
            <strong>On a 30-year mortgage, it's not until years 23-24 before the principal and interest 
            portions are 50/50.</strong>
          </p>
          
          <h5>How Amortization Works:</h5>
          <ul>
            <li><strong>Early Years:</strong> Most of your payment goes toward interest, little toward principal</li>
            <li><strong>Year 1:</strong> Might be 80% interest / 20% principal</li>
            <li><strong>Year 10:</strong> Roughly 65% interest / 35% principal</li>
            <li><strong>Year 23-24:</strong> Finally reaches 50% interest / 50% principal</li>
            <li><strong>Final Years:</strong> Most of your payment goes toward principal, little interest</li>
          </ul>

          <h5>Why This Matters:</h5>
          <ul>
            <li>💰 <strong>Equity Build:</strong> You build equity slowly at first, faster later</li>
            <li>📊 <strong>Interest Costs:</strong> Most interest is paid in early years</li>
            <li>🏠 <strong>Refinancing Timing:</strong> Refinancing early means starting the cycle over</li>
            <li>💵 <strong>Extra Payments:</strong> Extra principal payments early have biggest impact</li>
            <li>📈 <strong>15-Year vs 30-Year:</strong> 15-year loans reach 50/50 split around year 10</li>
          </ul>
        </div>

        <h4>Example: $400,000 Loan at 6.5% (30-Year Fixed)</h4>
        <div className="example">
          <p><strong>Monthly Payment:</strong> $2,528 (principal + interest only)</p>
          
          <p><strong>Payment #1 (Month 1):</strong></p>
          <ul>
            <li>Interest: $2,167 (86% of payment)</li>
            <li>Principal: $361 (14% of payment)</li>
            <li>Remaining Balance: $399,639</li>
          </ul>

          <p><strong>Payment #120 (Year 10):</strong></p>
          <ul>
            <li>Interest: $1,746 (69% of payment)</li>
            <li>Principal: $782 (31% of payment)</li>
            <li>Remaining Balance: $327,883</li>
          </ul>

          <p><strong>Payment #280 (Year 23.3):</strong></p>
          <ul>
            <li>Interest: $1,264 (50% of payment)</li>
            <li>Principal: $1,264 (50% of payment) - THE 50/50 POINT!</li>
            <li>Remaining Balance: $233,000</li>
          </ul>

          <p><strong>Payment #360 (Final Payment):</strong></p>
          <ul>
            <li>Interest: $14</li>
            <li>Principal: $2,514 (99% of payment)</li>
            <li>Remaining Balance: $0</li>
          </ul>

          <p className="highlight">
            <strong>Total Interest Paid Over 30 Years:</strong> $510,000+ (more than the loan itself!)
          </p>
        </div>

        <h4>Strategies to Reduce Interest:</h4>
        <ul>
          <li><strong>Extra Principal Payments:</strong> Even $100/month extra saves tens of thousands</li>
          <li><strong>Bi-Weekly Payments:</strong> Pay half your payment every 2 weeks = 13 payments/year instead of 12</li>
          <li><strong>Shorter Loan Term:</strong> 15-year loans save massive interest but have higher payments</li>
          <li><strong>Refinance:</strong> Lower rate can save thousands (but resets amortization schedule)</li>
          <li><strong>Round Up Payments:</strong> $2,528 → $2,600 = big difference over time</li>
        </ul>

        <h3>23.9 Pre-Qualification vs. Pre-Approval</h3>
        <div className="comparison">
          <h4>Pre-Qualification (Weak):</h4>
          <ul>
            <li>Based on stated income/assets (unverified)</li>
            <li>Quick process (phone/online)</li>
            <li>No credit check or documentation</li>
            <li>Estimate only - not reliable</li>
            <li>❌ Not taken seriously by sellers</li>
          </ul>

          <h4>Pre-Approval (Strong):</h4>
          <ul>
            <li>Verified income, assets, employment</li>
            <li>Hard credit check performed</li>
            <li>Documentation reviewed (W2s, pay stubs, bank statements)</li>
            <li>Conditional commitment from lender</li>
            <li>✅ Shows buyer is serious and qualified</li>
          </ul>
        </div>

        <h3>23.10 Mortgage Approval Process</h3>
        <div className="process-timeline">
          <ol>
            <li><strong>Pre-Approval:</strong> Before house hunting (1-3 days)</li>
            <li><strong>Offer Accepted:</strong> Start formal application (day 1)</li>
            <li><strong>Processing:</strong> Lender gathers/verifies documents (days 1-10)</li>
            <li><strong>Appraisal Ordered:</strong> Property valuation (days 3-7)</li>
            <li><strong>Underwriting:</strong> Final loan approval (days 10-20)</li>
            <li><strong>Clear to Close:</strong> All conditions met (day 25-30)</li>
            <li><strong>Closing:</strong> Sign documents, fund loan (day 30-45)</li>
          </ol>
        </div>

        <h3>23.11 Common Financing Issues & Solutions</h3>
        <div className="issues-solutions">
          <h4>Issue: Low Appraisal</h4>
          <ul>
            <li><strong>Problem:</strong> Property appraises below purchase price</li>
            <li><strong>Solutions:</strong>
              <ul>
                <li>Buyer increases down payment to cover gap</li>
                <li>Seller reduces price</li>
                <li>Split the difference</li>
                <li>Challenge appraisal with better comps</li>
                <li>Walk away (if contingency exists)</li>
              </ul>
            </li>
          </ul>

          <h4>Issue: DTI Too High</h4>
          <ul>
            <li><strong>Problem:</strong> Debt-to-income ratio exceeds lender limits</li>
            <li><strong>Solutions:</strong>
              <ul>
                <li>Pay off debts before closing</li>
                <li>Find co-signer</li>
                <li>Increase down payment</li>
                <li>Look at lower-priced properties</li>
                <li>Try different loan program (FHA allows higher DTI)</li>
              </ul>
            </li>
          </ul>

          <h4>Issue: Employment Gap or Job Change</h4>
          <ul>
            <li><strong>Problem:</strong> Buyer changed jobs during process</li>
            <li><strong>Solutions:</strong>
              <ul>
                <li>New job in same field usually OK</li>
                <li>Provide offer letter and verification</li>
                <li>May delay closing for pay stub proof</li>
                <li>DO NOT change jobs during mortgage process if avoidable</li>
              </ul>
            </li>
          </ul>

          <h4>Issue: Large Deposits in Bank Account</h4>
          <ul>
            <li><strong>Problem:</strong> Unexplained deposits raise red flags</li>
            <li><strong>Solutions:</strong>
              <ul>
                <li>Document source (gift, bonus, tax refund)</li>
                <li>Provide gift letter if from family</li>
                <li>Avoid large deposits during process</li>
              </ul>
            </li>
          </ul>
        </div>

        <h3>23.12 Agent's Role in Financing</h3>
        <div className="agent-role">
          <h4>What Agents SHOULD Do:</h4>
          <ul>
            <li>✅ Recommend buyers get pre-approved before house hunting</li>
            <li>✅ Refer to 2-3 reputable lenders</li>
            <li>✅ Explain difference between loan types</li>
            <li>✅ Review pre-approval letters for strength</li>
            <li>✅ Coordinate with lender during transaction</li>
            <li>✅ Monitor financing contingency deadlines</li>
            <li>✅ Help buyer understand closing costs</li>
          </ul>

          <h4>What Agents CANNOT Do:</h4>
          <ul>
            <li>❌ Guarantee loan approval</li>
            <li>❌ Give specific financial advice</li>
            <li>❌ Calculate exact loan qualifications</li>
            <li>❌ Recommend specific loan products</li>
            <li>❌ Accept kickbacks from lenders (RESPA violation)</li>
            <li>❌ Pressure buyer to use specific lender</li>
          </ul>
        </div>

        <h3>23.13 Dodd-Frank Act - Consumer Protection</h3>
        <p className="highlight">
          <strong>Took effect January 10, 2014</strong> - Major federal consumer protection law regulating 
          mortgage lenders and servicers.
        </p>

        <h4>What is the Dodd-Frank Act?</h4>
        <p>A consumer information pamphlet explains the information the mortgage lender MUST provide to borrower. 
        Also provides contact info for consumers to file a complaint if lender isn't following rules.</p>

        <h4>📋 What Lenders MUST Do Under Dodd-Frank:</h4>
        <div className="dodd-frank-requirements">
          
          <h5>1. Give Billing Info in Writing:</h5>
          <ul>
            <li>Clear, written statements showing payment amounts, dates, fees</li>
            <li>Itemized breakdown of how payment is applied (principal, interest, escrow)</li>
            <li>Annual summary of payments and loan balance</li>
            <li>Must be provided monthly</li>
          </ul>

          <h5>2. Give Borrower 2 Months Warning if ARM Will Have Rate Change:</h5>
          <ul>
            <li>Notice must be sent 60-120 days before adjustable rate mortgage rate changes</li>
            <li>Must show: current rate, new rate, new payment amount</li>
            <li>Helps borrower prepare for payment increase</li>
            <li>Required for all ARM adjustments</li>
          </ul>

          <h5>3. Promptly Credit Borrowers Payments:</h5>
          <ul>
            <li>Must credit payment on day received</li>
            <li>Cannot hold payments to generate late fees</li>
            <li>If payment arrives by 5pm, credit that day</li>
            <li>Must apply to principal, interest, escrow appropriately</li>
          </ul>

          <h5>4. Respond Quickly When Borrower Inquires About Paying Off Loan:</h5>
          <ul>
            <li>Must provide payoff quote within 7 business days of request</li>
            <li>Quote must be accurate and show exact amount to pay off</li>
            <li>Include per-diem interest if paid off on different date</li>
            <li>Cannot delay payoff requests</li>
          </ul>

          <h5>5. Not Charge for Insurance Borrower Doesn't Need:</h5>
          <ul>
            <li><strong>Force-placed insurance:</strong> Lender can only charge if borrower actually lacks coverage</li>
            <li>Must give 45-day notice before charging for lender-placed insurance</li>
            <li>Cannot over-charge for insurance that lender provides if borrower fails to do so</li>
            <li>Must accept borrower's own insurance if adequate</li>
          </ul>

          <h5>6. Quickly Resolve Complaint - Within 30-45 Days:</h5>
          <ul>
            <li>Must acknowledge complaint in writing within 5 business days</li>
            <li>Must respond to complaint within 30 days (45 days maximum)</li>
            <li>Response must explain resolution or why no action taken</li>
            <li>Must share information with borrower about complaint status</li>
          </ul>

          <h5>7. Have and Follow Good Customer Service Policy & Procedures:</h5>
          <ul>
            <li>Maintain written servicing policies</li>
            <li>Train staff on servicing requirements</li>
            <li>Provide borrowers with multiple ways to contact (phone, email, mail)</li>
            <li>Assign single point of contact for borrowers in foreclosure</li>
            <li>Keep accurate records of communications</li>
          </ul>

          <h5>8. Contact Borrowers Who Are Having Trouble Making Payments:</h5>
          <ul>
            <li>Must reach out to borrower by 36th day of delinquency</li>
            <li>Inform about loss mitigation options (forbearance, modification, etc.)</li>
            <li>Cannot wait until foreclosure to contact borrower</li>
            <li>Must make good faith effort to establish live contact</li>
          </ul>

          <h5>9. Work with Borrowers Before Starting or Continuing Foreclosure:</h5>
          <ul>
            <li><strong>Dual tracking prohibited:</strong> Cannot pursue foreclosure while evaluating for loss mitigation</li>
            <li>Must review complete loss mitigation application 37+ days before foreclosure sale</li>
            <li>Give borrower time to submit complete application</li>
            <li>Cannot start foreclosure until borrower is 120+ days delinquent</li>
            <li>Must notify borrower of foreclosure alternatives</li>
          </ul>

          <h5>10. Allow Borrowers to Seek Review of Decision About Loan Workout Request:</h5>
          <ul>
            <li>Must provide reason for denial of loss mitigation application</li>
            <li>Borrower has right to appeal denial</li>
            <li>Must give deadline for appeal (typically 14 days)</li>
            <li>Different person must review appeal</li>
            <li>Cannot proceed with foreclosure during appeal period</li>
          </ul>
        </div>

        <h4>Why Dodd-Frank Matters for Real Estate Agents:</h4>
        <ul>
          <li>🏠 <strong>Know Your Buyers' Rights:</strong> Educate clients about lender obligations</li>
          <li>📞 <strong>Spot Red Flags:</strong> If buyer reports lender not following rules, refer to attorney</li>
          <li>⏰ <strong>Timeline Awareness:</strong> Understand 120-day pre-foreclosure timeline</li>
          <li>💼 <strong>Loss Mitigation:</strong> Know alternatives to foreclosure (short sale, modification)</li>
          <li>📋 <strong>Documentation:</strong> Encourage buyers to keep all lender communications</li>
          <li>⚖️ <strong>Complaint Process:</strong> Know where to direct borrowers (CFPB - Consumer Financial Protection Bureau)</li>
        </ul>

        <h4>Where to File Complaints:</h4>
        <ul>
          <li><strong>CFPB:</strong> Consumer Financial Protection Bureau - consumerfinance.gov/complaint</li>
          <li><strong>State Banking Regulator:</strong> Massachusetts Division of Banks</li>
          <li><strong>HUD:</strong> For FHA loans</li>
          <li><strong>VA:</strong> For VA loans</li>
          <li><strong>Attorney General:</strong> MA Attorney General's Office - Consumer Protection Division</li>
        </ul>

        <p className="warning">
          <strong>⚠️ Agent Responsibility:</strong> While you can't give legal advice, you should know these 
          protections exist and refer clients to appropriate resources if they're having lender issues. Dodd-Frank 
          protections can make the difference between foreclosure and keeping a home.
        </p>

        <h3>23.14 Federal Reserve System - The Fed</h3>
        <p className="highlight">
          <strong>Understanding the Fed is crucial for real estate professionals</strong> - Federal Reserve 
          policies directly impact mortgage rates, lending availability, and the housing market.
        </p>

        <h4>What is the Federal Reserve?</h4>
        <p>The Fed operates to maintain sound credit conditions, to help counteract inflationary and 
        deflationary trends, and to create a favorable economic climate.</p>

        <h4>Federal Reserve Structure:</h4>
        <ul>
          <li><strong>12 Districts:</strong> System divides country into 12 districts, each served by a Federal Reserve Bank</li>
          <li><strong>Regional Banks:</strong> Boston, New York, Philadelphia, Cleveland, Richmond, Atlanta, Chicago, St. Louis, Minneapolis, Kansas City, Dallas, San Francisco</li>
          <li><strong>Massachusetts:</strong> Part of First District, served by Federal Reserve Bank of Boston</li>
          <li><strong>Board of Governors:</strong> 7-member board in Washington D.C. oversees entire system</li>
          <li><strong>FOMC:</strong> Federal Open Market Committee sets monetary policy (meets 8 times/year)</li>
        </ul>

        <h4>How the Fed Regulates Money Flow:</h4>
        <p className="highlight">
          <strong>Key Concept:</strong> The Federal Reserve indirectly regulates the flow of money in the 
          marketplace through its banks by controlling their reserve requirements and discount rates.
        </p>

        <div className="fed-tools">
          <h5>1️⃣ RESERVE REQUIREMENTS</h5>
          <p><strong>Definition:</strong> Fed requires member banks to keep a certain amount of reserve on hand as 
          "reserve funds" that are unavailable for loans or other use.</p>
          
          <p><strong>Purpose:</strong> Designed to protect consumer deposits.</p>

          <h6>How Reserve Requirements Work:</h6>
          <ul>
            <li><strong>Banks hold reserves:</strong> Typically 10% of deposits must be held in reserve</li>
            <li><strong>Limits lending:</strong> If bank has $100M deposits, can only lend $90M</li>
            <li><strong>Money multiplier effect:</strong> Controls how much money banks create through lending</li>
          </ul>

          <h6>Impact on Economy:</h6>
          <ul>
            <li><strong>Increase reserve requirements:</strong>
              <ul>
                <li>Fed limits amount of money banks can use to make loans</li>
                <li>Causes interest rates to increase</li>
                <li>Slows down overactive economy</li>
                <li>Opposite: decreases reserve → allows more money to be loaned in marketplace</li>
                <li>Thereby boosting the economy</li>
              </ul>
            </li>
            <li><strong>Decrease reserve requirements:</strong>
              <ul>
                <li>Banks can lend more money</li>
                <li>Interest rates decrease</li>
                <li>Stimulates borrowing and economy</li>
                <li>More mortgages available</li>
              </ul>
            </li>
          </ul>

          <h5>2️⃣ DISCOUNT RATES</h5>
          <p><strong>Definition:</strong> Banks borrow money from Fed Reserve to expand lending operations. 
          The interest rate the district federal reserve banks charge for use of the money is called "discount rate."</p>

          <h6>How Discount Rates Work:</h6>
          <ul>
            <li><strong>Bank needs funds:</strong> Borrows from Federal Reserve at discount rate</li>
            <li><strong>Sets baseline:</strong> This rate is the basis for what banks charge their loan customers</li>
            <li><strong>Ripple effect:</strong> Discount rate influences all interest rates in economy</li>
          </ul>

          <h6>Impact on Mortgage Rates:</h6>
          <ul>
            <li><strong>When Fed rates are high:</strong>
              <ul>
                <li>Bank rates are high</li>
                <li>Mortgage rates increase</li>
                <li>Fewer people can afford to buy</li>
                <li>Housing market slows down</li>
                <li>Cools inflation</li>
              </ul>
            </li>
            <li><strong>When Fed rate is low:</strong>
              <ul>
                <li>Banks rate is low</li>
                <li>Mortgage rates decrease</li>
                <li>More people can afford to buy</li>
                <li>Housing market heats up</li>
                <li>Stimulates economy</li>
              </ul>
            </li>
          </ul>

          <h5>3️⃣ OPEN MARKET ACTIVITIES</h5>
          <p><strong>Definition:</strong> The Fed can buy or sell U.S. Treasury securities and, by doing so, 
          change the money supply.</p>

          <h6>How Open Market Operations Work:</h6>
          <ul>
            <li><strong>Fed buys securities:</strong>
              <ul>
                <li>Money supply increases</li>
                <li>Money flows from GOVT to investors</li>
                <li>Economy expands</li>
                <li>More money available for lending</li>
                <li>Interest rates typically decrease</li>
              </ul>
            </li>
            <li><strong>Fed sells securities:</strong>
              <ul>
                <li>Money supply decreases</li>
                <li>Money flows from investors to GOVT</li>
                <li>Economy contracts</li>
                <li>Less money available for lending</li>
                <li>Interest rates typically increase</li>
              </ul>
            </li>
          </ul>

          <h6>Impact on Real Estate:</h6>
          <ul>
            <li><strong>Quantitative Easing (QE):</strong> Fed buying securities to inject money into economy</li>
            <li><strong>Mortgage-Backed Securities:</strong> Fed can buy MBS to directly lower mortgage rates</li>
            <li><strong>Historical Example:</strong> 2008-2014, Fed bought trillions in MBS to stabilize housing market</li>
            <li><strong>Tightening:</strong> Fed selling securities reduces money supply, raises rates</li>
          </ul>
        </div>

        <h4>The Fed's Dual Mandate:</h4>
        <ul>
          <li>📈 <strong>Maximum Employment:</strong> Keep unemployment low</li>
          <li>💰 <strong>Price Stability:</strong> Keep inflation around 2% target</li>
        </ul>

        <h4>Fed Tempers the Economy:</h4>
        <p>The Fed also tempers the economy through its open-market operations.</p>
        <ul>
          <li><strong>Overheating Economy:</strong> Fed raises rates, tightens money supply, slows growth</li>
          <li><strong>Recession/Slow Growth:</strong> Fed lowers rates, increases money supply, stimulates growth</li>
          <li><strong>Balancing Act:</strong> Too much stimulus = inflation, too little = recession</li>
        </ul>

        <h4>Why Real Estate Agents Need to Understand the Fed:</h4>
        <div className="agent-fed-knowledge">
          <h5>📊 Market Timing:</h5>
          <ul>
            <li>Low rates = more buyers can afford homes</li>
            <li>Rising rates = buyer urgency increases ("buy before rates go higher")</li>
            <li>Rate changes affect refinancing activity</li>
          </ul>

          <h5>💬 Client Education:</h5>
          <ul>
            <li>Explain why mortgage rates are changing</li>
            <li>"Fed raised rates" is why mortgage rates went up</li>
            <li>Help buyers understand rate lock importance</li>
            <li>Timing decisions (wait for lower rates vs. buy now)</li>
          </ul>

          <h5>🏠 Market Conditions:</h5>
          <ul>
            <li><strong>Low Rate Environment:</strong> Seller's market, multiple offers, bidding wars</li>
            <li><strong>High Rate Environment:</strong> Buyer's market, more negotiation power, slower sales</li>
            <li><strong>Rate Changes:</strong> Can shift market from hot to cold quickly</li>
          </ul>

          <h5>📈 Economic Indicators to Watch:</h5>
          <ul>
            <li><strong>Fed Funds Rate:</strong> Target rate for overnight bank lending</li>
            <li><strong>FOMC Meetings:</strong> 8 per year - rate decisions announced</li>
            <li><strong>Fed Chairman Statements:</strong> Jerome Powell's speeches move markets</li>
            <li><strong>Meeting Minutes:</strong> Published 3 weeks after meetings</li>
            <li><strong>Economic Data:</strong> Jobs report, inflation (CPI), GDP growth</li>
          </ul>
        </div>

        <h4>Recent History - Fed Actions:</h4>
        <ul>
          <li><strong>2008-2015:</strong> Near-zero rates, QE to rescue economy from Great Recession</li>
          <li><strong>2015-2018:</strong> Gradual rate increases as economy recovered</li>
          <li><strong>2020:</strong> Emergency rate cuts to 0% due to COVID-19 pandemic</li>
          <li><strong>2022-2023:</strong> Aggressive rate increases (0% → 5.25-5.5%) to fight inflation</li>
          <li><strong>Impact:</strong> Mortgage rates went from 3% to 7%+ in 18 months</li>
        </ul>

        <h4>Fed vs. Mortgage Rates:</h4>
        <p className="warning">
          <strong>⚠️ Important Distinction:</strong> The Fed does NOT directly set mortgage rates. The Fed sets 
          the Federal Funds Rate (overnight bank lending rate) and the Discount Rate (rate banks borrow from Fed). 
          Mortgage rates are influenced by these rates but also by:
        </p>
        <ul>
          <li>10-year Treasury bond yields (biggest influence)</li>
          <li>Mortgage-backed securities market</li>
          <li>Inflation expectations</li>
          <li>Economic growth outlook</li>
          <li>Credit markets and spreads</li>
          <li>Lender competition and margins</li>
        </ul>

        <div className="example">
          <h5>Real-World Example:</h5>
          <p><strong>Scenario:</strong> Fed announces 0.25% rate increase</p>
          <ul>
            <li><strong>Fed Funds Rate:</strong> Goes from 5.00% to 5.25%</li>
            <li><strong>Bank Prime Rate:</strong> Increases from 8.00% to 8.25% (usually Fed rate + 3%)</li>
            <li><strong>Mortgage Rates:</strong> May increase 0.25% to 0.50% (not always exact correlation)</li>
            <li><strong>30-Year Fixed:</strong> Might go from 7.0% to 7.25-7.5%</li>
            <li><strong>Buyer Impact:</strong> $400K loan - payment increases ~$70-$140/month</li>
            <li><strong>Affordability:</strong> Reduces buying power by ~$10,000-$20,000</li>
          </ul>
        </div>

        <p className="highlight">
          <strong>Agent Takeaway:</strong> Monitor Fed announcements and rate trends. When the Fed signals rate 
          changes, it creates urgency or caution in buyers. Use this knowledge to counsel clients on timing 
          and help them understand the broader economic factors affecting their home purchase or sale. Subscribe 
          to Fed news and explain rate impacts in simple terms clients can understand.
        </p>

        <h3>23.15 Lenders in the Primary Market</h3>
        <p className="highlight">
          <strong>Primary Market:</strong> Where loans are originated directly between borrowers and lenders. 
          Understanding the different types of lenders helps you guide clients to the right financing source.
        </p>

        <div className="lender-types">
          <h4>1️⃣ Savings Associations (Thrifts)</h4>
          <p><strong>What they do:</strong> Specialize in long-term residential loans which are viewed as secured 
          investments for the benefit of their depositors.</p>
          
          <h5>Key Characteristics:</h5>
          <ul>
            <li><strong>Focus:</strong> Long-term residential mortgages</li>
            <li><strong>Products:</strong> Primarily provide conventional loans & FHA & VA Loans</li>
            <li><strong>Security:</strong> Loans secured by real estate</li>
            <li><strong>Purpose:</strong> Benefit depositors through safe, secured investments</li>
            <li><strong>Stability:</strong> Conservative lending approach</li>
          </ul>

          <h4>2️⃣ Mutual Savings Banks</h4>
          <p><strong>What they do:</strong> Offer limited checking account privileges, primarily investing in loans 
          secured by income property as well as residential real estate.</p>
          
          <h5>Key Characteristics:</h5>
          <ul>
            <li><strong>Ownership:</strong> Don't issue stock and are mutually owned by their investors</li>
            <li><strong>Products:</strong> Prefer to originate FHA-insured or VA-guaranteed loans</li>
            <li><strong>Investment Focus:</strong> Income-producing properties + residential</li>
            <li><strong>Structure:</strong> Member-owned (like credit unions)</li>
            <li><strong>Services:</strong> Limited checking, but strong lending</li>
          </ul>

          <h4>3️⃣ Commercial Banks</h4>
          <p><strong>What they do:</strong> Specialize in conventional, FHA & VA loans. Home Improvement loans, 
          short-term construction loans, etc.</p>
          
          <h5>Key Characteristics:</h5>
          <ul>
            <li><strong>Full Service:</strong> Complete banking services (checking, savings, business)</li>
            <li><strong>Loan Types:</strong> Conventional, FHA, VA mortgages</li>
            <li><strong>Construction Loans:</strong> Short-term construction financing</li>
            <li><strong>Home Improvement:</strong> Renovation and improvement loans</li>
            <li><strong>Business Focus:</strong> Also serve commercial/business needs</li>
            <li><strong>Flexibility:</strong> Widest range of loan products</li>
          </ul>

          <h4>4️⃣ Insurance Companies</h4>
          <p><strong>What they do:</strong> Invest the money paid by their policyholders premiums. Some money is held 
          for paying claims & cover operating expenses, but more is invested in profit-earning enterprises such as 
          real estate loans.</p>
          
          <h5>Key Characteristics:</h5>
          <ul>
            <li><strong>Source of Funds:</strong> Policyholder premiums</li>
            <li><strong>Investment Strategy:</strong> Long-term real estate investments</li>
            <li><strong>Loan Types:</strong> Large commercial mortgages, apartment buildings</li>
            <li><strong>Less Common:</strong> Rarely do single-family residential</li>
            <li><strong>Large Scale:</strong> Prefer bigger loan amounts</li>
            <li><strong>Conservative:</strong> Secure, long-term investments</li>
          </ul>

          <h4>5️⃣ Mortgage Banking Companies (Direct Lenders)</h4>
          <p><strong>What they do:</strong> Use their own money to fund loans which are usually sold later to investors. 
          Mortgage company receives a fee for the servicing of the loan.</p>
          
          <h5>How They Work:</h5>
          <ul>
            <li><strong>Origination:</strong> Use own capital to fund loans</li>
            <li><strong>Secondary Market:</strong> Sell loans to investors (Fannie Mae, Freddie Mac)</li>
            <li><strong>Servicing:</strong> Often retain servicing rights for fee income</li>
            <li><strong>Example:</strong> Quicken Loans, loanDepot, Guaranteed Rate</li>
            <li><strong>Volume Focus:</strong> Originate high volume, sell to free up capital</li>
          </ul>

          <h5>Revenue Sources:</h5>
          <ul>
            <li>💰 <strong>Origination Fees:</strong> Points and fees at closing</li>
            <li>💰 <strong>Servicing Fees:</strong> Monthly fee (typically 0.25-0.5% annually)</li>
            <li>💰 <strong>Sale Premium:</strong> Profit from selling loans above par</li>
          </ul>

          <h4>6️⃣ Mortgage Brokers (NOT Lenders)</h4>
          <p className="warning"><strong>⚠️ IMPORTANT:</strong> Mortgage brokers are NOT lenders - they are licensed 
          intermediaries bringing borrowers & lenders together.</p>
          
          <h5>How Brokers Work:</h5>
          <ul>
            <li><strong>Role:</strong> Intermediary connecting borrowers to lenders</li>
            <li><strong>No Funds:</strong> Do NOT use their own money</li>
            <li><strong>Access:</strong> Work with multiple lenders (wholesale rates)</li>
            <li><strong>Compensation:</strong> Paid commission once loan is sold to lender or investor</li>
            <li><strong>No Servicing:</strong> DO NOT service the loans after closing</li>
            <li><strong>Example:</strong> Local mortgage broker shops</li>
          </ul>

          <h5>Broker vs. Banker:</h5>
          <div className="comparison">
            <p><strong>Mortgage Broker:</strong></p>
            <ul>
              <li>Works with multiple lenders</li>
              <li>Shops for best rate/terms</li>
              <li>Paid by lender (commission)</li>
              <li>Doesn't fund loans</li>
              <li>Can offer more options</li>
            </ul>

            <p><strong>Mortgage Banker:</strong></p>
            <ul>
              <li>Uses own funds</li>
              <li>One set of products</li>
              <li>Paid by fees + servicing</li>
              <li>Funds loans directly</li>
              <li>May have better rates</li>
            </ul>
          </div>

          <h4>7️⃣ Credit Unions</h4>
          <p><strong>What they do:</strong> Members place money in savings accounts. C.U.'s Offer conventional, 
          FHA & VA loans.</p>
          
          <h5>Key Characteristics:</h5>
          <ul>
            <li><strong>Membership:</strong> Must be member to get loan (job, location, affiliation)</li>
            <li><strong>Non-Profit:</strong> Member-owned, not-for-profit</li>
            <li><strong>Lower Rates:</strong> Often offer best rates (no profit motive)</li>
            <li><strong>Loan Products:</strong> Conventional, FHA, VA</li>
            <li><strong>Personalized:</strong> More flexible underwriting</li>
            <li><strong>Service:</strong> Better customer service typically</li>
          </ul>

          <h4>8️⃣ Pension Funds</h4>
          <p><strong>What they do:</strong> Invest in low-risk real estate with a potential of higher income.</p>
          
          <h5>Key Characteristics:</h5>
          <ul>
            <li><strong>Purpose:</strong> Grow retirement funds for members</li>
            <li><strong>Investment:</strong> Large commercial real estate loans</li>
            <li><strong>Risk Profile:</strong> Low-risk, stable returns</li>
            <li><strong>Rare for Residential:</strong> Focus on commercial/multi-family</li>
            <li><strong>Long-Term:</strong> Matches pension payout timelines</li>
          </ul>

          <h4>9️⃣ Other Sources of Funds</h4>
          <p><strong>Alternative Lenders:</strong> Syndications, educational institutions, hospitals, charitable 
          foundations, etc. invest.</p>
          
          <h5>Examples:</h5>
          <ul>
            <li><strong>Syndications:</strong> Groups of investors pooling funds</li>
            <li><strong>Universities:</strong> Endowment investments in real estate</li>
            <li><strong>Hospitals:</strong> Investment of operating reserves</li>
            <li><strong>Foundations:</strong> Charitable foundation investments</li>
            <li><strong>Family Offices:</strong> High-net-worth family investment</li>
          </ul>

          <h4>🔟 Loan Servicing</h4>
          <p><strong>What it is:</strong> Lenders who sell of loan tend to hold onto the servicing to make 
          additional money.</p>
          
          <h5>What Servicers Do:</h5>
          <ul>
            <li>📧 <strong>Collecting Monthly Payments:</strong> Process borrower payments</li>
            <li>🏦 <strong>Holding Insurance and Tax Escrows:</strong> Manage escrow accounts</li>
            <li>💰 <strong>Making Escrow Payments:</strong> Pay property taxes and insurance</li>
            <li>📮 <strong>Sending Out Notices:</strong> Annual statements, tax forms</li>
            <li>📞 <strong>Customer Service:</strong> Answer borrower questions</li>
            <li>⚠️ <strong>Default Management:</strong> Work with delinquent borrowers</li>
          </ul>

          <h5>Why Servicing is Valuable:</h5>
          <ul>
            <li><strong>Steady Income:</strong> 0.25-0.5% of loan balance annually</li>
            <li><strong>Long-Term:</strong> Income for life of loan (30 years)</li>
            <li><strong>Asset:</strong> Servicing rights can be bought/sold</li>
            <li><strong>Float:</strong> Earn interest on escrow funds</li>
          </ul>

          <p className="example"><strong>Example:</strong> $300K loan serviced at 0.375% = $1,125/year × 30 years = 
          $33,750 total servicing income from one loan.</p>
        </div>

        <h4>Primary Market vs. Secondary Market:</h4>
        <div className="comparison">
          <h5>Primary Market (Loan Origination):</h5>
          <ul>
            <li>Where loans are created/originated</li>
            <li>Borrower works directly with lender</li>
            <li>Examples: Banks, credit unions, mortgage companies</li>
            <li>Lender underwrites and funds loan</li>
          </ul>

          <h5>Secondary Market (Loan Trading):</h5>
          <ul>
            <li>Where existing loans are bought/sold</li>
            <li>No borrower involvement</li>
            <li>Examples: Fannie Mae, Freddie Mac, private investors</li>
            <li>Provides liquidity to primary market</li>
          </ul>
        </div>

        <h4>Why This Matters for Agents:</h4>
        <ul>
          <li>🏦 <strong>Lender Relationships:</strong> Build network with various lender types</li>
          <li>💡 <strong>Client Guidance:</strong> Recommend appropriate lender for situation</li>
          <li>⚡ <strong>Speed:</strong> Credit unions may be slower, mortgage bankers faster</li>
          <li>💰 <strong>Rates:</strong> Credit unions often have best rates, brokers shop around</li>
          <li>📋 <strong>Underwriting:</strong> Different lenders have different flexibility</li>
          <li>🎯 <strong>Specialization:</strong> Some focus on FHA/VA, others conventional</li>
        </ul>

        <p className="highlight">
          <strong>Agent Tip:</strong> Develop relationships with 2-3 lenders from different categories (commercial 
          bank, credit union, mortgage banker, broker). This gives clients options and you backup when one falls 
          through. Know each lender's strengths: speed, rates, difficult loans, jumbo loans, etc.
        </p>

        <h3>23.16 Secondary Mortgage Market</h3>
        <p className="highlight">
          <strong>What is the Secondary Mortgage Market?</strong> A system that allows lenders to sell their 
          loans to raise more cash and lend to new borrowers. Loans are "packaged" and sold in units by 
          investment bankers, and stockbrokers to investors in the form of a "pass-through security."
        </p>

        <h4>How the Secondary Market Works:</h4>
        <div className="process-flow">
          <ol>
            <li><strong>Origination:</strong> Lender makes loan to borrower in primary market</li>
            <li><strong>Packaging:</strong> Multiple loans bundled together into mortgage-backed securities</li>
            <li><strong>Sale:</strong> Sold to investors through Fannie Mae, Ginnie Mae, or Freddie Mac</li>
            <li><strong>Capital Returns:</strong> Lender gets cash back to make new loans</li>
            <li><strong>Investor Income:</strong> Investors receive borrowers' monthly payments</li>
          </ol>
        </div>

        <h4>Why Secondary Market Matters:</h4>
        <ul>
          <li>💰 <strong>Liquidity:</strong> Frees up lender capital to make more loans</li>
          <li>🏦 <strong>More Availability:</strong> Increases mortgage availability nationwide</li>
          <li>📉 <strong>Lower Rates:</strong> Competition keeps rates lower</li>
          <li>📊 <strong>Standardization:</strong> Creates uniform lending standards</li>
          <li>🔄 <strong>Risk Distribution:</strong> Spreads risk among many investors</li>
        </ul>

        <h4>3 MAJOR INVESTORS IN SECONDARY MORTGAGE MARKET:</h4>
        
        <div className="secondary-market-investors">
          <h5>1️⃣ Federal National Mortgage Association (FNMA or "Fannie Mae")</h5>
          <div className="investor-box">
            <p><strong>What it is:</strong> Owned by shareholders and managed independent of the government</p>
            
            <h6>Key Characteristics:</h6>
            <ul>
              <li><strong>Ownership:</strong> Publicly traded corporation (originally government-created 1938)</li>
              <li><strong>Independence:</strong> Private company, but government-sponsored enterprise (GSE)</li>
              <li><strong>Purpose:</strong> Buy mortgages from lenders to provide liquidity</li>
              <li><strong>Loan Types:</strong> Buys conventional loans and FHA loans</li>
              <li><strong>Standards:</strong> Sets conforming loan limits and underwriting guidelines</li>
              <li><strong>Market Share:</strong> Largest player in secondary market</li>
            </ul>

            <h6>What Fannie Mae Does:</h6>
            <ul>
              <li>✅ Purchases conventional mortgages from lenders</li>
              <li>✅ Purchases FHA-insured loans</li>
              <li>✅ Packages loans into mortgage-backed securities (MBS)</li>
              <li>✅ Sells MBS to investors worldwide</li>
              <li>✅ Sets conforming loan limits (2025: $766,550 standard)</li>
              <li>✅ Provides mortgage guidelines lenders must follow</li>
            </ul>

            <p className="info">
              <strong>Historical Note:</strong> Created during Great Depression to expand homeownership. 
              Privatized in 1968, but placed under conservatorship in 2008 financial crisis.
            </p>
          </div>

          <h5>2️⃣ Government National Mortgage Association (GNMA or "Ginnie Mae")</h5>
          <div className="investor-box">
            <p><strong>What it is:</strong> A government-owned corporation created in 1968 when Fannie Mae 
            became a private corporation</p>
            
            <h6>Key Characteristics:</h6>
            <ul>
              <li><strong>Ownership:</strong> 100% U.S. Government-owned (part of HUD)</li>
              <li><strong>Full Faith & Credit:</strong> Only MBS backed by full faith of U.S. government</li>
              <li><strong>Loan Types:</strong> Buys FHA loans and VA loans ONLY</li>
              <li><strong>Mission:</strong> Support affordable housing for veterans and low/moderate-income families</li>
              <li><strong>Guarantee:</strong> Guarantees timely payment to investors</li>
            </ul>

            <h6>What Ginnie Mae Does:</h6>
            <ul>
              <li>✅ Purchases FHA-insured mortgages</li>
              <li>✅ Purchases VA-guaranteed mortgages</li>
              <li>✅ Guarantees mortgage-backed securities</li>
              <li>✅ Does NOT buy conventional loans</li>
              <li>✅ Provides government backing to investors</li>
              <li>✅ Lowest risk MBS available (government guarantee)</li>
            </ul>

            <p className="highlight">
              <strong>Key Difference:</strong> Ginnie Mae ONLY deals with government-backed loans (FHA & VA), 
              while Fannie Mae deals with conventional and FHA loans.
            </p>
          </div>

          <h5>3️⃣ Federal Home Loan Mortgage Corporation (FHLMC or "Freddie Mac")</h5>
          <div className="investor-box">
            <p><strong>What it is:</strong> Deals primarily in conventional mortgages</p>
            
            <h6>Key Characteristics:</h6>
            <ul>
              <li><strong>Ownership:</strong> Publicly traded corporation (government-sponsored enterprise)</li>
              <li><strong>Creation:</strong> Established 1970 to compete with Fannie Mae</li>
              <li><strong>Loan Types:</strong> Focuses on conventional mortgages</li>
              <li><strong>Purpose:</strong> Increase competition and liquidity in secondary market</li>
              <li><strong>Standards:</strong> Works with Fannie Mae to set conforming standards</li>
            </ul>

            <h6>What Freddie Mac Does:</h6>
            <ul>
              <li>✅ Purchases conventional mortgages from lenders</li>
              <li>✅ Particularly focuses on smaller lenders (credit unions, community banks)</li>
              <li>✅ Packages loans into mortgage-backed securities</li>
              <li>✅ Provides stability to mortgage market</li>
              <li>✅ Follows same conforming loan limits as Fannie Mae</li>
            </ul>

            <p className="info">
              <strong>Market Role:</strong> Created to provide competition to Fannie Mae and ensure no single 
              entity dominated the secondary market. Also placed under conservatorship in 2008.
            </p>
          </div>
        </div>

        <h4>Fannie Mae vs. Ginnie Mae vs. Freddie Mac - Quick Comparison:</h4>
        <div className="comparison-table">
          <table>
            <thead>
              <tr>
                <th>Feature</th>
                <th>Fannie Mae</th>
                <th>Ginnie Mae</th>
                <th>Freddie Mac</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Ownership</strong></td>
                <td>Private (GSE)</td>
                <td>U.S. Government</td>
                <td>Private (GSE)</td>
              </tr>
              <tr>
                <td><strong>Loan Types</strong></td>
                <td>Conventional & FHA</td>
                <td>FHA & VA Only</td>
                <td>Conventional (primarily)</td>
              </tr>
              <tr>
                <td><strong>Created</strong></td>
                <td>1938</td>
                <td>1968</td>
                <td>1970</td>
              </tr>
              <tr>
                <td><strong>Government Backing</strong></td>
                <td>Implicit (GSE status)</td>
                <td>Explicit (full faith & credit)</td>
                <td>Implicit (GSE status)</td>
              </tr>
              <tr>
                <td><strong>Primary Focus</strong></td>
                <td>Large/national lenders</td>
                <td>Government loans</td>
                <td>Smaller/community lenders</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h4>Why Agents Need to Know This:</h4>
        <ul>
          <li>📋 <strong>Conforming Limits:</strong> Fannie/Freddie set the conforming loan limits you'll reference daily</li>
          <li>💰 <strong>Loan Eligibility:</strong> Understand which loans qualify for secondary market (better rates)</li>
          <li>🏦 <strong>Lender Confidence:</strong> Loans that meet Fannie/Freddie standards close more reliably</li>
          <li>📊 <strong>Market Impact:</strong> Secondary market changes affect buyer purchasing power</li>
          <li>⚡ <strong>Rate Movements:</strong> MBS trading affects daily mortgage rate changes</li>
          <li>🎯 <strong>Guidelines:</strong> Fannie/Freddie underwriting guidelines become lender requirements</li>
        </ul>

        <div className="example">
          <h5>Real-World Example:</h5>
          <p><strong>Scenario:</strong> Your buyer is applying for a $800,000 loan in Massachusetts</p>
          <ul>
            <li><strong>Conforming Limit (2025):</strong> $766,550 standard / $1,149,825 high-cost</li>
            <li><strong>If in standard county:</strong> $800K exceeds limit = Jumbo loan (higher rate, stricter requirements)</li>
            <li><strong>If in high-cost area:</strong> $800K within limit = Conforming loan (better rate, easier approval)</li>
            <li><strong>Why it matters:</strong> Fannie/Freddie won't buy jumbo loans, so lenders charge more</li>
            <li><strong>Agent value:</strong> Know county limits to advise on price ranges and financing</li>
          </ul>
        </div>

        <p className="warning">
          <strong>⚠️ Important:</strong> While lenders interact directly with these entities, your clients will 
          never deal with Fannie Mae, Ginnie Mae, or Freddie Mac directly. However, every conforming loan they get 
          is likely sold to one of these organizations within days or weeks of closing. This is normal and doesn't 
          affect the borrower (though their servicer may change).
        </p>

        <p className="highlight">
          <strong>Agent Takeaway:</strong> The secondary mortgage market is the engine that keeps mortgage money 
          flowing. Without Fannie Mae, Ginnie Mae, and Freddie Mac buying loans, lenders would run out of money 
          and mortgages would be scarce and expensive. Understanding this system helps you explain to clients why 
          conforming loan limits matter, why their loan servicer might change, and how the broader mortgage market 
          affects their financing options.
        </p>

        <p className="highlight">
          <strong>Remember:</strong> Understanding financing helps you guide buyers realistically and spot 
          potential issues early. Always defer specific loan questions to lenders. Strong pre-approval = 
          stronger offer. Financing contingencies protect buyers but need clear deadlines. Know Dodd-Frank 
          protections to help clients in distress. Understanding the Fed helps you anticipate market shifts. 
          Know your local lenders and their specialties.
        </p>
      </>
    )
  };

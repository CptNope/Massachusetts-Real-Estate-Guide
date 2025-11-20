import React from 'react';

export const section = {
    id: 'tax-implications',
    icon: '💵',
    title: '22. Tax Implications for Buyers, Sellers & Investors',
    subtitle: 'Capital gains, 1031 exchanges, depreciation, deductions - understanding real estate tax strategies',
    body: (
      <>
        <h3>25.1 Capital Gains on Home Sales</h3>
        <p className="highlight">
          When you sell a property for more than you paid, the profit is a capital gain. Tax treatment depends 
          on whether it's your primary residence or an investment property.
        </p>

        <h4>Primary Residence Exclusion (Section 121):</h4>
        <ul>
          <li><strong>Single Filers:</strong> Exclude up to $250,000 in capital gains</li>
          <li><strong>Married Filing Jointly:</strong> Exclude up to $500,000 in capital gains</li>
          <li><strong>Requirements:</strong>
            <ul>
              <li>Owned the home for at least 2 years out of the last 5</li>
              <li>Used as primary residence for at least 2 years out of the last 5</li>
              <li>Haven't claimed the exclusion in the past 2 years</li>
            </ul>
          </li>
          <li><strong>Frequency:</strong> Can use every 2 years (no lifetime limit)</li>
        </ul>

        <h4>Capital Gains Example - Primary Residence:</h4>
        <div className="example">
          <p><strong>Scenario:</strong> Married couple, filed jointly</p>
          <ul>
            <li>Purchase Price: $400,000 (2018)</li>
            <li>Capital Improvements: $50,000 (new roof, kitchen)</li>
            <li>Adjusted Basis: $450,000</li>
            <li>Sale Price: $650,000 (2025)</li>
            <li>Selling Costs: $40,000</li>
            <li>Capital Gain: $650,000 - $450,000 - $40,000 = $160,000</li>
            <li><strong>Tax Owed: $0</strong> (under $500,000 exclusion)</li>
          </ul>
        </div>

        <h4>Investment Property Capital Gains:</h4>
        <ul>
          <li><strong>Short-Term (&lt;1 year):</strong> Taxed as ordinary income (10-37% federal)</li>
          <li><strong>Long-Term (&gt;1 year):</strong> Taxed at capital gains rates (0%, 15%, or 20%)</li>
          <li><strong>No Exclusion:</strong> Investment properties don't qualify for $250k/$500k exclusion</li>
          <li><strong>Depreciation Recapture:</strong> Pay 25% tax on depreciation claimed (see below)</li>
        </ul>

        <h4>Calculating Your Basis:</h4>
        <div className="basis-calculation">
          <p><strong>Original Purchase Price</strong></p>
          <p>+ Purchase Closing Costs (title, attorney, recording fees)</p>
          <p>+ Capital Improvements (not repairs)</p>
          <p>− Depreciation Claimed (investment only)</p>
          <p>= <strong>Adjusted Basis</strong></p>
          <p></p>
          <p><strong>Sale Price</strong></p>
          <p>− Adjusted Basis</p>
          <p>− Selling Costs (commission, attorney, repairs to sell)</p>
          <p>= <strong>Capital Gain (or Loss)</strong></p>
        </div>

        <h3>25.2 The 1031 Exchange (Like-Kind Exchange)</h3>
        <p>
          Named after IRS Code Section 1031. Allows investors to defer capital gains taxes by exchanging 
          one investment property for another.
        </p>

        <h4>Key Requirements:</h4>
        <ul>
          <li><strong>Like-Kind:</strong> Must exchange investment property for investment property (residential for residential, commercial for commercial, or any combo - all real estate is "like-kind")</li>
          <li><strong>Investment Use:</strong> Both properties must be held for investment or business use (NOT personal residence)</li>
          <li><strong>Equal or Greater Value:</strong> Must purchase replacement property of equal or greater value</li>
          <li><strong>All Equity Must Be Reinvested:</strong> Can't receive cash ("boot") without triggering some tax</li>
          <li><strong>Qualified Intermediary Required:</strong> Cannot touch proceeds yourself</li>
        </ul>

        <h4>1031 Exchange Timeline (STRICT DEADLINES):</h4>
        <div className="timeline-strict">
          <ol>
            <li><strong>Day 0:</strong> Close on sale of relinquished property</li>
            <li><strong>Day 1-45:</strong> Identify up to 3 potential replacement properties (written notice to intermediary)</li>
            <li><strong>Day 45:</strong> IDENTIFICATION DEADLINE (no extensions, no exceptions)</li>
            <li><strong>Day 46-180:</strong> Complete purchase of replacement property</li>
            <li><strong>Day 180:</strong> EXCHANGE DEADLINE (or tax return due date if earlier)</li>
          </ol>
        </div>

        <h4>Types of 1031 Exchanges:</h4>
        <div className="exchange-types">
          <p><strong>Delayed Exchange:</strong> Most common. Sell first, buy later (45/180 day rules)</p>
          <p><strong>Simultaneous Exchange:</strong> Close on both properties same day</p>
          <p><strong>Reverse Exchange:</strong> Buy replacement before selling relinquished (complex, expensive)</p>
          <p><strong>Improvement/Construction Exchange:</strong> Use proceeds to improve replacement property</p>
        </div>

        <h4>1031 Exchange Example:</h4>
        <div className="example">
          <p><strong>Relinquished Property:</strong> $500k sale, $200k original basis, $300k gain</p>
          <p><strong>Replacement Property:</strong> $600k purchase</p>
          <p><strong>Result:</strong> $300k capital gain deferred (not forgiven - tax owed when eventually sell without 1031)</p>
          <p><strong>New Basis:</strong> $300k (carryover basis from relinquished property)</p>
        </div>

        <h4>Common 1031 Mistakes:</h4>
        <ul>
          <li>❌ Missing 45-day identification deadline (no extensions EVER)</li>
          <li>❌ Touching the proceeds (must use qualified intermediary)</li>
          <li>❌ Buying personal residence (must be investment)</li>
          <li>❌ Trading down in value (triggers partial tax)</li>
          <li>❌ Taking cash out ("boot" is taxable)</li>
          <li>❌ Not including debt (new mortgage must be equal or greater)</li>
        </ul>

        <h3>25.3 Depreciation for Rental Properties</h3>
        <p>
          Rental property owners can deduct depreciation - a tax deduction for "wear and tear" even though 
          property may be appreciating in value.
        </p>

        <h4>Depreciation Basics:</h4>
        <ul>
          <li><strong>Residential Rental:</strong> 27.5 year depreciation schedule</li>
          <li><strong>Commercial Property:</strong> 39 year depreciation schedule</li>
          <li><strong>What You Depreciate:</strong> Building value only (NOT land)</li>
          <li><strong>How to Split:</strong> County assessor's ratio, or allocate based on appraisal</li>
        </ul>

        <h4>Depreciation Calculation Example:</h4>
        <div className="example">
          <p><strong>Property:</strong> 3-unit rental building purchased for $550k</p>
          <p><strong>Land Value:</strong> $100k (not depreciable)</p>
          <p><strong>Building Value:</strong> $450k (depreciable)</p>
          <p><strong>Annual Depreciation:</strong> $450k ÷ 27.5 = $16,364/year</p>
          <p><strong>Monthly Depreciation:</strong> $1,364/month</p>
          <p><strong>Tax Savings:</strong> $16,364 × 24% tax bracket = $3,927/year</p>
        </div>

        <h4>Depreciation Recapture (Section 1250):</h4>
        <ul>
          <li><strong>When:</strong> When you sell the property</li>
          <li><strong>Rate:</strong> 25% federal tax on all depreciation claimed</li>
          <li><strong>Example:</strong> Claimed $100k depreciation over 10 years = $25k tax owed at sale</li>
          <li><strong>Important:</strong> You MUST recapture even if you didn't claim depreciation (should have claimed it)</li>
        </ul>

        <h4>Bonus Depreciation & Cost Segregation:</h4>
        <div className="advanced-depreciation">
          <p><strong>Bonus Depreciation:</strong> Accelerate depreciation on personal property (appliances, carpets, fixtures)</p>
          <p><strong>Cost Segregation Study:</strong> Engineering analysis separating components (5-year, 15-year, 27.5-year)</p>
          <p><strong>Benefit:</strong> Front-load depreciation deductions in early years</p>
          <p><strong>Cost:</strong> $5k-$15k for study (worth it for larger properties)</p>
        </div>

        <h3>25.4 Tax Deductions for Homeowners</h3>
        
        <h4>Primary Residence Deductions:</h4>
        <ul>
          <li><strong>Mortgage Interest:</strong> Deductible on loans up to $750k ($1M if borrowed before 12/15/17)</li>
          <li><strong>Property Taxes:</strong> $10k cap (SALT deduction includes state/local income taxes too)</li>
          <li><strong>Points Paid:</strong> Deductible in year paid if new purchase, amortized if refinance</li>
          <li><strong>Home Office:</strong> If self-employed and exclusive business use (simplified method: $5/sq ft up to 300 sq ft)</li>
          <li><strong>Energy Credits:</strong> Solar panels, energy-efficient windows (varies by year)</li>
          <li><strong>Capital Improvements:</strong> Not immediately deductible, but increase basis (reduces future capital gain)</li>
        </ul>

        <h4>What's NOT Deductible (Primary Residence):</h4>
        <ul>
          <li>❌ Homeowners insurance</li>
          <li>❌ HOA fees</li>
          <li>❌ Utilities</li>
          <li>❌ Repairs and maintenance</li>
          <li>❌ Principal payments on mortgage</li>
          <li>❌ Moving expenses (eliminated 2018-2025, except military)</li>
        </ul>

        <h3>25.5 Tax Deductions for Rental Property Owners</h3>
        <p className="highlight">
          Rental property expenses are MUCH more generous than primary residence. Almost all expenses are deductible.
        </p>

        <h4>Fully Deductible Rental Expenses:</h4>
        <div className="rental-deductions">
          <ul>
            <li>✅ Mortgage interest (no $750k cap)</li>
            <li>✅ Property taxes (no $10k cap)</li>
            <li>✅ Insurance (property, liability, landlord)</li>
            <li>✅ Repairs and maintenance</li>
            <li>✅ Property management fees</li>
            <li>✅ Utilities (if owner-paid)</li>
            <li>✅ Advertising for tenants</li>
            <li>✅ Legal and professional fees</li>
            <li>✅ HOA fees</li>
            <li>✅ Pest control</li>
            <li>✅ Landscaping</li>
            <li>✅ Snow removal</li>
            <li>✅ Depreciation (building + appliances)</li>
            <li>✅ Travel to property (mileage or actual)</li>
            <li>✅ Home office (if exclusive rental business use)</li>
            <li>✅ Continuing education (landlord courses)</li>
            <li>✅ Software/apps (property management tools)</li>
            <li>✅ Supplies (cleaning, repairs)</li>
          </ul>
        </div>

        <h4>Repairs vs. Capital Improvements:</h4>
        <div className="comparison">
          <h5>Repairs (Fully Deductible Immediately):</h5>
          <ul>
            <li>Fixing broken items</li>
            <li>Painting</li>
            <li>Patching roof</li>
            <li>Replacing broken appliances</li>
            <li>Minor plumbing/electrical fixes</li>
          </ul>

          <h5>Capital Improvements (Depreciate Over Time):</h5>
          <ul>
            <li>New roof</li>
            <li>Room additions</li>
            <li>New HVAC system</li>
            <li>Kitchen/bathroom remodel</li>
            <li>Replacing all windows</li>
          </ul>
        </div>

        <h3>25.6 Passive Activity Loss Rules</h3>
        <p>
          Rental real estate is generally considered "passive income" which has special tax rules.
        </p>

        <h4>The $25,000 Exception:</h4>
        <ul>
          <li><strong>Who Qualifies:</strong> Active participation in rental (make decisions, approve tenants)</li>
          <li><strong>Benefit:</strong> Can deduct up to $25,000 in rental losses against ordinary income</li>
          <li><strong>Phase-Out:</strong> Reduces by 50% of AGI above $100,000, fully phased out at $150,000</li>
          <li><strong>Example:</strong> W-2 income $90,000, rental loss $15,000 = AGI $75,000 (loss fully deductible)</li>
        </ul>

        <h4>Real Estate Professional Status:</h4>
        <ul>
          <li><strong>Requirements:</strong>
            <ul>
              <li>Spend more than 750 hours/year in real estate activities</li>
              <li>Spend more than 50% of working time in real estate</li>
              <li>Materially participate in each rental activity</li>
            </ul>
          </li>
          <li><strong>Benefit:</strong> Rental losses NOT subject to passive loss limitations</li>
          <li><strong>Who Qualifies:</strong> Full-time agents, property managers, developers, house flippers</li>
        </ul>

        <h3>25.7 First-Time Homebuyer & Tax Credits</h3>
        
        <h4>Current Programs (2025):</h4>
        <ul>
          <li><strong>Federal:</strong> No current first-time buyer tax credit at federal level</li>
          <li><strong>MassHousing:</strong> MA state program offering down payment assistance</li>
          <li><strong>MCC (Mortgage Credit Certificate):</strong> Annual tax credit for portion of mortgage interest (not a deduction, a credit)</li>
          <li><strong>Energy Credits:</strong> Still available for solar, geothermal, energy-efficient upgrades</li>
        </ul>

        <h4>Mortgage Credit Certificate (MCC):</h4>
        <ul>
          <li><strong>How it Works:</strong> Convert portion of mortgage interest to direct tax credit</li>
          <li><strong>Credit Amount:</strong> 20-40% of annual interest (MA offers up to 50%)</li>
          <li><strong>Carryforward:</strong> Unused credit can carry forward up to 3 years</li>
          <li><strong>Example:</strong> $15,000 annual interest, 30% MCC = $4,500 tax credit</li>
          <li><strong>Eligibility:</strong> First-time buyers, income limits, purchase price limits</li>
        </ul>

        <h3>25.8 Tax Forms for Real Estate</h3>
        <div className="tax-forms">
          <h4>Homeowners:</h4>
          <ul>
            <li><strong>Schedule A:</strong> Itemized deductions (mortgage interest, property taxes)</li>
            <li><strong>Form 1098:</strong> Mortgage interest statement from lender</li>
            <li><strong>Form 1099-S:</strong> Sale of property (if gain exceeds exclusion)</li>
          </ul>

          <h4>Rental Property Owners:</h4>
          <ul>
            <li><strong>Schedule E:</strong> Rental income and expenses</li>
            <li><strong>Form 4562:</strong> Depreciation</li>
            <li><strong>Form 1099-MISC:</strong> Issue to contractors paid $600+</li>
          </ul>

          <h4>Real Estate Agents:</h4>
          <ul>
            <li><strong>Schedule C:</strong> Business income/expenses (self-employed)</li>
            <li><strong>Schedule SE:</strong> Self-employment tax</li>
            <li><strong>Form 1099-NEC:</strong> Received from broker</li>
            <li><strong>Estimated Tax Vouchers:</strong> Quarterly payments (1040-ES)</li>
          </ul>
        </div>

        <h3>25.9 Estate Planning & Real Estate</h3>
        
        <h4>Step-Up in Basis at Death:</h4>
        <ul>
          <li><strong>How it Works:</strong> Heirs receive property at fair market value on date of death</li>
          <li><strong>Benefit:</strong> Eliminates all capital gains accrued during owner's lifetime</li>
          <li><strong>Example:</strong> Property purchased $100k in 1980, worth $800k at death in 2025, heir's basis = $800k (no capital gain if sold soon after)</li>
          <li><strong>Strategy:</strong> Hold appreciated real estate until death to avoid capital gains tax</li>
        </ul>

        <h4>Transfer Methods:</h4>
        <div className="transfer-methods">
          <p><strong>Will:</strong> Goes through probate, can be contested, becomes public record</p>
          <p><strong>Trust:</strong> Avoids probate, stays private, more control over distribution</p>
          <p><strong>Joint Tenancy with Right of Survivorship:</strong> Automatic transfer to surviving owner</p>
          <p><strong>Transfer on Death Deed (TODD):</strong> MA allows since 2022, transfers at death without probate</p>
        </div>

        <h3>25.10 Agent's Role in Tax Discussions</h3>
        <div className="agent-role-tax">
          <h4>What Agents CAN Do:</h4>
          <ul>
            <li>✅ Mention tax implications generally ("Many sellers qualify for capital gains exclusion")</li>
            <li>✅ Recommend client consult CPA/tax professional</li>
            <li>✅ Explain 1031 exchange EXISTS (not how to do it)</li>
            <li>✅ Provide referrals to tax professionals (no kickbacks)</li>
            <li>✅ Help track capital improvements for basis calculation</li>
            <li>✅ Explain closing cost deductions in general</li>
          </ul>

          <h4>What Agents CANNOT Do:</h4>
          <ul>
            <li>❌ Calculate capital gains tax</li>
            <li>❌ Advise which deductions client qualifies for</li>
            <li>❌ Interpret tax law</li>
            <li>❌ Complete any tax forms</li>
            <li>❌ Guarantee tax treatment</li>
            <li>❌ Give specific 1031 exchange advice</li>
            <li>❌ Determine if client is real estate professional</li>
          </ul>
        </div>

        <p className="highlight">
          <strong>CRITICAL REMINDER:</strong> You are NOT a CPA, tax attorney, or tax preparer. ALWAYS refer 
          tax questions to qualified tax professionals. Say: "That's a great question for your CPA. Tax law is 
          complex and individual situations vary. I can recommend 2-3 tax professionals who specialize in real 
          estate if you'd like." Giving tax advice you're not qualified to give creates liability and violates 
          regulations. Focus on what you know - real estate transactions. Let tax professionals handle tax advice.
        </p>
      </>
    )
  };

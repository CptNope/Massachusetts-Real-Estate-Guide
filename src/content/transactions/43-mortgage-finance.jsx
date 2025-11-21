export const section = {
  id: 'mortgage-finance',
  icon: '🏦',
  title: '43. Mortgage Finance Deep Dive',
  subtitle: 'Mortgage Clauses, Secondary Market, and Underwriting',
  body: (
    <>
      <h3>📋 Essential Mortgage Clauses</h3>
      
      <h4>🔹 1. Acceleration Clause</h4>
      <ul>
        <li><strong>What It Does:</strong> Allows lender to demand full payment immediately</li>
        <li><strong>When Triggered:</strong> Borrower defaults (misses payments)</li>
        <li><strong>Effect:</strong> Entire loan balance becomes due at once</li>
        <li><strong>Purpose:</strong> Protects lender from prolonged default</li>
        <li><strong>Example:</strong> Miss 3 payments → lender can accelerate → demand full $300,000</li>
      </ul>

      <h4>🔹 2. Alienation Clause (Due-on-Sale)</h4>
      <ul>
        <li><strong>What It Does:</strong> Loan must be paid off when property sells</li>
        <li><strong>Prevents:</strong> Assumable loans (buyer taking over seller's loan)</li>
        <li><strong>Effect:</strong> Borrower cannot transfer property without paying loan</li>
        <li><strong>Benefit to Lender:</strong> Can re-evaluate new buyer, charge new rate</li>
        <li><strong>Common:</strong> In almost all modern mortgages</li>
      </ul>

      <h4>🔹 3. Defeasance Clause</h4>
      <ul>
        <li><strong>What It Does:</strong> Lender must release lien when loan paid in full</li>
        <li><strong>Effect:</strong> Mortgage is "defeated" upon full payment</li>
        <li><strong>Borrower's Right:</strong> Get clear title once loan satisfied</li>
        <li><strong>Document Issued:</strong> Discharge of Mortgage (or Release Deed)</li>
        <li><strong>Must Record:</strong> Release should be recorded at Registry of Deeds</li>
      </ul>

      <h4>🔹 4. Prepayment Penalty Clause</h4>
      <ul>
        <li><strong>What It Does:</strong> Charges fee for paying loan off early</li>
        <li><strong>Purpose:</strong> Lender ensures minimum interest income</li>
        <li><strong>Common Period:</strong> First 3-5 years of loan</li>
        <li><strong>Typical Penalty:</strong> 1-2% of loan balance or 6 months interest</li>
        <li><strong>Less Common Now:</strong> Many loans have no prepayment penalty</li>
      </ul>

      <h4>🔹 5. Subordination Clause</h4>
      <ul>
        <li><strong>What It Does:</strong> Allows a later loan to take priority</li>
        <li><strong>Effect:</strong> First mortgage agrees to become second (subordinate)</li>
        <li><strong>When Used:</strong> Refinancing, construction loans</li>
        <li><strong>Example:</strong> Construction loan becomes first, land loan becomes second</li>
        <li><strong>Risk:</strong> Subordinated lender has less security</li>
      </ul>

      <h4>🔹 6. Power of Sale Clause</h4>
      <ul>
        <li><strong>What It Does:</strong> Allows non-judicial foreclosure</li>
        <li><strong>Effect:</strong> Lender can foreclose without going to court</li>
        <li><strong>Varies by State:</strong> Not all states allow (MA allows)</li>
        <li><strong>Faster Process:</strong> Quicker than judicial foreclosure</li>
      </ul>

      <h4>🔹 7. Exculpatory Clause (Non-Recourse)</h4>
      <ul>
        <li><strong>What It Does:</strong> Limits lender to taking only the property</li>
        <li><strong>Effect:</strong> Lender cannot sue borrower for deficiency</li>
        <li><strong>Rare:</strong> Most loans are recourse (lender CAN sue)</li>
        <li><strong>Example:</strong> Home sells for $250K but owed $300K → lender eats $50K loss</li>
      </ul>

      <hr/>

      <h3>🏛️ Secondary Mortgage Market</h3>
      
      <h4>🔹 What is the Secondary Market?</h4>
      <ul>
        <li><strong>Definition:</strong> Where existing mortgages are bought and sold</li>
        <li><strong>Primary Market:</strong> Lender → Borrower (origination)</li>
        <li><strong>Secondary Market:</strong> Lender → Investor (selling loans)</li>
        <li><strong>Purpose:</strong> Provides liquidity to lenders</li>
        <li><strong>Benefit:</strong> More money available for new loans</li>
      </ul>

      <h4>🔹 Key Players</h4>

      <h5>1. Fannie Mae (FNMA - Federal National Mortgage Association)</h5>
      <ul>
        <li><strong>Created:</strong> 1938 (Great Depression)</li>
        <li><strong>Type:</strong> Government-Sponsored Enterprise (GSE) - private but federally chartered</li>
        <li><strong>What It Does:</strong> Buys conventional loans from lenders</li>
        <li><strong>Purpose:</strong> Creates secondary market for conventional mortgages</li>
        <li><strong>Does NOT:</strong> Make loans directly to consumers</li>
      </ul>

      <h5>2. Freddie Mac (FHLMC - Federal Home Loan Mortgage Corporation)</h5>
      <ul>
        <li><strong>Created:</strong> 1970</li>
        <li><strong>Type:</strong> Government-Sponsored Enterprise (GSE)</li>
        <li><strong>What It Does:</strong> Buys conventional loans (similar to Fannie Mae)</li>
        <li><strong>Original Focus:</strong> Savings & loan associations</li>
        <li><strong>Function:</strong> Competes with Fannie Mae to buy mortgages</li>
      </ul>

      <h5>3. Ginnie Mae (GNMA - Government National Mortgage Association)</h5>
      <ul>
        <li><strong>Created:</strong> 1968</li>
        <li><strong>Type:</strong> Fully government agency (part of HUD)</li>
        <li><strong>What It Does:</strong> Guarantees mortgage-backed securities</li>
        <li><strong>Focus:</strong> FHA, VA, and USDA loans (government-insured loans)</li>
        <li><strong>Full Faith & Credit:</strong> Backed by U.S. government</li>
        <li><strong>Does NOT Buy Loans:</strong> Only guarantees securities</li>
      </ul>

      <h4>🔹 How Secondary Market Works</h4>
      <ol>
        <li><strong>Origination:</strong> Bank lends money to buyer (primary market)</li>
        <li><strong>Packaging:</strong> Bank pools similar loans together</li>
        <li><strong>Sale:</strong> Bank sells loans to Fannie/Freddie</li>
        <li><strong>Securitization:</strong> Loans packaged into mortgage-backed securities (MBS)</li>
        <li><strong>Investment:</strong> Investors buy MBS</li>
        <li><strong>Cash Return:</strong> Bank gets cash to make more loans</li>
      </ol>

      <h4>🔹 Benefits of Secondary Market</h4>
      <ul>
        <li>✅ More money available for mortgages</li>
        <li>✅ Lower interest rates</li>
        <li>✅ Standardized underwriting (conforming loans)</li>
        <li>✅ Geographic distribution of risk</li>
      </ul>

      <hr/>

      <h3>📊 Loan Underwriting Process</h3>
      
      <h4>🔹 What is Underwriting?</h4>
      <ul>
        <li><strong>Definition:</strong> Process of evaluating loan risk</li>
        <li><strong>Underwriter:</strong> Person who approves or denies loan</li>
        <li><strong>Goal:</strong> Determine if borrower can repay loan</li>
        <li><strong>The 3 C's:</strong> Credit, Capacity, Collateral</li>
      </ul>

      <h4>🔹 The 3 C's of Underwriting</h4>

      <h5>1. Credit</h5>
      <ul>
        <li><strong>Credit Score:</strong> FICO score (300-850)
          <ul>
            <li>Excellent: 740+</li>
            <li>Good: 670-739</li>
            <li>Fair: 580-669</li>
            <li>Poor: Below 580</li>
          </ul>
        </li>
        <li><strong>Credit History:</strong> Payment history, bankruptcies, collections</li>
        <li><strong>Credit Report:</strong> From Experian, Equifax, TransUnion</li>
      </ul>

      <h5>2. Capacity (Income)</h5>
      <ul>
        <li><strong>Employment:</strong> Stable job, 2-year history preferred</li>
        <li><strong>Income Verification:</strong> Pay stubs, W-2s, tax returns</li>
        <li><strong>Debt-to-Income Ratio (DTI):</strong>
          <ul>
            <li><strong>Front-End DTI:</strong> Housing costs ÷ Gross monthly income (28% max typical)</li>
            <li><strong>Back-End DTI:</strong> All debts ÷ Gross monthly income (36-43% max typical)</li>
          </ul>
        </li>
      </ul>

      <h5>3. Collateral (Property)</h5>
      <ul>
        <li><strong>Appraisal:</strong> Professional valuation of property</li>
        <li><strong>LTV Ratio:</strong> Loan amount ÷ Property value (80% typical max)</li>
        <li><strong>Property Condition:</strong> Must meet lender standards</li>
        <li><strong>Title Clear:</strong> No liens or title defects</li>
      </ul>

      <hr/>

      <h3>📄 TRID (TILA-RESPA Integrated Disclosures)</h3>
      
      <h4>🔹 What is TRID?</h4>
      <ul>
        <li><strong>Acronym:</strong> Truth in Lending Act - Real Estate Settlement Procedures Act Integrated Disclosures</li>
        <li><strong>Purpose:</strong> Consumer protection through disclosure</li>
        <li><strong>Effective:</strong> October 2015</li>
        <li><strong>Replaces:</strong> Old HUD-1, TIL, GFE forms</li>
      </ul>

      <h4>🔹 Key Documents</h4>

      <h5>1. Loan Estimate (LE)</h5>
      <ul>
        <li><strong>When:</strong> Within 3 business days of application</li>
        <li><strong>Purpose:</strong> Disclose loan terms and estimated costs</li>
        <li><strong>Pages:</strong> 3 pages</li>
        <li><strong>Content:</strong>
          <ul>
            <li>Loan amount, interest rate, monthly payment</li>
            <li>Estimated closing costs</li>
            <li>Cash to close estimate</li>
          </ul>
        </li>
        <li><strong>Binding:</strong> Some fees cannot increase, some can increase up to 10%</li>
      </ul>

      <h5>2. Closing Disclosure (CD)</h5>
      <ul>
        <li><strong>When:</strong> At least 3 business days before closing</li>
        <li><strong>Purpose:</strong> Final loan terms and actual costs</li>
        <li><strong>Pages:</strong> 5 pages</li>
        <li><strong>Content:</strong>
          <ul>
            <li>Final loan terms</li>
            <li>Actual closing costs</li>
            <li>Actual cash to close</li>
            <li>Comparison to Loan Estimate</li>
          </ul>
        </li>
        <li><strong>3-Day Rule:</strong> Must receive 3 business days before closing</li>
        <li><strong>Changes Trigger Reset:</strong> If APR increases by more than 0.125%, must issue new CD and wait 3 more days</li>
      </ul>

      <hr/>

      <h3>🔑 Key Exam Points</h3>
      <ul>
        <li>✅ <strong>Acceleration Clause:</strong> Entire loan due upon default</li>
        <li>✅ <strong>Alienation Clause:</strong> Loan due when property sells (due-on-sale)</li>
        <li>✅ <strong>Defeasance Clause:</strong> Lien released when loan paid</li>
        <li>✅ <strong>Fannie Mae/Freddie Mac:</strong> Buy conventional loans (GSEs)</li>
        <li>✅ <strong>Ginnie Mae:</strong> Guarantees FHA/VA loans (government agency)</li>
        <li>✅ <strong>3 C's:</strong> Credit, Capacity, Collateral</li>
        <li>✅ <strong>Loan Estimate:</strong> Within 3 days of application</li>
        <li>✅ <strong>Closing Disclosure:</strong> At least 3 days before closing</li>
      </ul>

      <hr/>

      <h3>❓ Common Exam Scenarios</h3>

      <div style={{background: '#f0f9ff', padding: '1rem', borderRadius: '8px', marginBottom: '1rem'}}>
        <strong>Q: Borrower defaults on mortgage. Lender demands full loan balance immediately. What clause allows this?</strong>
        <p><strong>A:</strong> Acceleration clause. Allows lender to "accelerate" the loan and demand entire balance due immediately upon default.</p>
      </div>

      <div style={{background: '#f0f9ff', padding: '1rem', borderRadius: '8px', marginBottom: '1rem'}}>
        <strong>Q: Which agency buys conventional loans? Which agency guarantees FHA/VA loans?</strong>
        <p><strong>A:</strong> Fannie Mae and Freddie Mac buy conventional loans. Ginnie Mae guarantees FHA/VA loans (but doesn't buy them).</p>
      </div>

      <div style={{background: '#f0f9ff', padding: '1rem', borderRadius: '8px', marginBottom: '1rem'}}>
        <strong>Q: When must borrower receive Closing Disclosure?</strong>
        <p><strong>A:</strong> At least 3 business days before closing. If APR increases by more than 0.125%, must issue new CD and wait 3 more days.</p>
      </div>

      <div style={{background: '#f0f9ff', padding: '1rem', borderRadius: '8px'}}>
        <strong>Q: Borrower wants to sell home and have buyer take over existing mortgage. What clause prevents this?</strong>
        <p><strong>A:</strong> Alienation clause (due-on-sale clause). Requires loan to be paid off when property transfers.</p>
      </div>
    </>
  )
};

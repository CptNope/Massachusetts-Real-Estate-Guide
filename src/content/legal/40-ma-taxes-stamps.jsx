export const section = {
  id: 'ma-taxes-stamps',
  icon: '💵',
  title: '40. MA Property Taxes & Deed Stamps',
  subtitle: 'Tax Billing, Liens, and Transfer Taxes',
  body: (
    <>
      <h3>🏛️ Massachusetts Property Tax System</h3>
      
      <h4>🔹 Tax Year & Fiscal Year</h4>
      <ul>
        <li><strong>MA Fiscal Year:</strong> July 1 - June 30 (NOT calendar year)
          <ul>
            <li>Example: FY 2025 = July 1, 2024 - June 30, 2025</li>
          </ul>
        </li>
        <li><strong>Assessment Date:</strong> January 1 of each year
          <ul>
            <li>Whoever owns property on Jan 1 pays taxes for entire fiscal year</li>
          </ul>
        </li>
        <li><strong>Tax Bills:</strong> Issued twice per year (quarterly payments)</li>
      </ul>

      <h4>🔹 Quarterly Tax Billing</h4>
      <ul>
        <li><strong>4 Quarterly Payments:</strong>
          <ul>
            <li><strong>Q1:</strong> Due August 1 (preliminary)</li>
            <li><strong>Q2:</strong> Due November 1 (preliminary)</li>
            <li><strong>Q3:</strong> Due February 1 (actual)</li>
            <li><strong>Q4:</strong> Due May 1 (actual)</li>
          </ul>
        </li>
        <li><strong>Preliminary Bills (Q1 & Q2):</strong>
          <ul>
            <li>Based on prior year's assessment</li>
            <li>Each payment = 25% of prior year tax</li>
          </ul>
        </li>
        <li><strong>Actual Bills (Q3 & Q4):</strong>
          <ul>
            <li>Based on current year assessment</li>
            <li>Adjusted for any difference from preliminary</li>
          </ul>
        </li>
      </ul>

      <h4>🔹 Tax Calculation</h4>
      <ul>
        <li><strong>Formula:</strong> Assessed Value × Tax Rate = Annual Tax</li>
        <li><strong>Assessed Value:</strong> Set by town assessor (supposed to be market value)</li>
        <li><strong>Tax Rate:</strong> Set by town (varies by municipality)
          <ul>
            <li>Expressed as "per $1,000" of value</li>
            <li>Example: $15 per $1,000 = 1.5%</li>
          </ul>
        </li>
        <li><strong>Example:</strong>
          <ul>
            <li>Home value: $500,000</li>
            <li>Tax rate: $12 per $1,000</li>
            <li>Annual tax: ($500,000 ÷ $1,000) × $12 = $6,000</li>
            <li>Quarterly payment: $6,000 ÷ 4 = $1,500</li>
          </ul>
        </li>
      </ul>

      <hr/>

      <h3>⚖️ Property Tax Liens & Foreclosure</h3>
      
      <h4>🔹 Tax Lien Priority</h4>
      <ul>
        <li><strong>Superior to All Others:</strong> Property tax liens have FIRST priority
          <ul>
            <li>Even ahead of mortgages</li>
            <li>Even if mortgage recorded first</li>
          </ul>
        </li>
        <li><strong>Automatic Lien:</strong> Lien attaches automatically on January 1</li>
      </ul>

      <h4>🔹 Tax Foreclosure Process (Tax Taking)</h4>
      <ul>
        <li><strong>When:</strong> If taxes unpaid for period of time (varies by town)</li>
        <li><strong>Process:</strong>
          <ol>
            <li>Tax bill sent (August, November, February, May)</li>
            <li>Demand notice sent if unpaid (30 days)</li>
            <li>Tax lien certificate recorded</li>
            <li>Town can take property for unpaid taxes</li>
            <li>Redemption period (typically 6 months to 2 years)</li>
            <li>If not redeemed, town takes title</li>
          </ol>
        </li>
        <li><strong>Redemption:</strong> Owner can pay back taxes + interest + fees to reclaim</li>
      </ul>

      <hr/>

      <h3>💰 Property Tax Exemptions</h3>
      
      <h4>🔹 Common Exemptions (Reduce Tax Bill)</h4>
      <ul>
        <li><strong>Residential Exemption:</strong> For owner-occupied homes in some cities (e.g., Boston)
          <ul>
            <li>Reduces tax burden on residents vs. investors</li>
          </ul>
        </li>
        <li><strong>Senior Exemption (Clause 41C):</strong>
          <ul>
            <li>Age 65 or older</li>
            <li>Own and occupy property</li>
            <li>Income/asset limits apply</li>
            <li>Varies by town</li>
          </ul>
        </li>
        <li><strong>Veteran Exemption (Clause 22):</strong>
          <ul>
            <li>For veterans who served during wartime</li>
            <li>Additional exemption for disabled veterans</li>
            <li>Gold Star parents (parent of servicemember killed)</li>
          </ul>
        </li>
        <li><strong>Blind Exemption (Clause 37A):</strong>
          <ul>
            <li>For legally blind individuals</li>
            <li>Own and occupy property</li>
          </ul>
        </li>
        <li><strong>Surviving Spouse Exemption:</strong>
          <ul>
            <li>Widow/widower of certain veterans</li>
            <li>Widow/widower of police/fire killed in line of duty</li>
          </ul>
        </li>
      </ul>

      <h4>🔹 How to Apply</h4>
      <ul>
        <li><strong>File With:</strong> Local assessor's office</li>
        <li><strong>Deadline:</strong> Typically April 1 (check with town)</li>
        <li><strong>Documentation:</strong> Proof of age, veteran status, disability, etc.</li>
      </ul>

      <hr/>

      <h3>📜 Excise Stamp Tax (Deed Stamps)</h3>
      
      <h4>🔹 What is Stamp Tax?</h4>
      <ul>
        <li><strong>Transfer Tax:</strong> Tax on sale/transfer of real property</li>
        <li><strong>Also Called:</strong> Deed stamps, documentary stamps, excise stamps</li>
        <li><strong>Purpose:</strong> Revenue for state/county</li>
      </ul>

      <h4>🔹 Tax Rate</h4>
      <ul>
        <li><strong>State Rate:</strong> $2.28 per $500 of sale price (or fraction thereof)
          <ul>
            <li>Equivalent to $4.56 per $1,000</li>
          </ul>
        </li>
        <li><strong>Additional County Tax:</strong> Some counties add own tax (Barnstable, Dukes, Nantucket)
          <ul>
            <li>Example: Nantucket adds 2% land bank fee</li>
          </ul>
        </li>
      </ul>

      <h4>🔹 Calculation Examples</h4>
      <ul>
        <li><strong>Example 1:</strong> $300,000 sale price
          <ul>
            <li>$300,000 ÷ $500 = 600 units</li>
            <li>600 × $2.28 = $1,368 stamp tax</li>
          </ul>
        </li>
        <li><strong>Example 2:</strong> $475,250 sale price
          <ul>
            <li>$475,250 ÷ $500 = 950.5, round UP to 951 units</li>
            <li>951 × $2.28 = $2,168.28 stamp tax</li>
          </ul>
        </li>
        <li><strong>Key:</strong> ALWAYS round UP to next $500 increment</li>
      </ul>

      <h4>🔹 Who Pays Stamp Tax?</h4>
      <ul>
        <li><strong>Typically Seller:</strong> But negotiable</li>
        <li><strong>Paid At Closing:</strong> Through escrow</li>
        <li><strong>Stamps Affixed:</strong> To deed before recording</li>
      </ul>

      <h4>🔹 Exemptions from Stamp Tax</h4>
      <ul>
        <li>❌ Gifts (no consideration)</li>
        <li>❌ Transfers between spouses (divorce settlements)</li>
        <li>❌ Inheritance/estate transfers</li>
        <li>❌ Transfers to/from government</li>
        <li>❌ Mortgage foreclosure sales</li>
        <li>❌ Nominal consideration ($1 transfers between family)</li>
      </ul>

      <hr/>

      <h3>💡 Tax Prorations at Closing</h3>
      
      <h4>🔹 How Prorations Work</h4>
      <ul>
        <li><strong>Purpose:</strong> Divide tax burden fairly between buyer and seller</li>
        <li><strong>Based On:</strong> Closing date
          <ul>
            <li>Seller pays for days they owned property</li>
            <li>Buyer pays for days they own property</li>
          </ul>
        </li>
        <li><strong>Calculation:</strong>
          <ul>
            <li>Annual tax ÷ 365 = daily rate</li>
            <li>Daily rate × number of days = proration</li>
          </ul>
        </li>
      </ul>

      <h4>🔹 Example Proration</h4>
      <ul>
        <li><strong>Scenario:</strong>
          <ul>
            <li>Annual tax: $7,300</li>
            <li>Closing date: October 15</li>
            <li>Seller owned: July 1 - Oct 15 = 107 days</li>
            <li>Buyer owns: Oct 16 - June 30 = 258 days</li>
          </ul>
        </li>
        <li><strong>Calculation:</strong>
          <ul>
            <li>Daily rate: $7,300 ÷ 365 = $20/day</li>
            <li>Seller owes: 107 days × $20 = $2,140</li>
            <li>Buyer owes: 258 days × $20 = $5,160</li>
          </ul>
        </li>
      </ul>

      <hr/>

      <h3>🔑 Key Exam Points</h3>
      <ul>
        <li>✅ <strong>Fiscal Year:</strong> July 1 - June 30 (not calendar year)</li>
        <li>✅ <strong>Assessment Date:</strong> January 1 (owner on this date pays full year)</li>
        <li>✅ <strong>Quarterly Payments:</strong> August 1, November 1, February 1, May 1</li>
        <li>✅ <strong>Tax Lien Priority:</strong> First priority (ahead of all other liens, even mortgages)</li>
        <li>✅ <strong>Exemptions:</strong> Senior (65+), veterans, blind, surviving spouse</li>
        <li>✅ <strong>Stamp Tax Rate:</strong> $2.28 per $500 of sale price</li>
        <li>✅ <strong>Stamp Tax Paid By:</strong> Typically seller (but negotiable)</li>
        <li>✅ <strong>Round UP:</strong> Always round up to next $500 for stamp tax</li>
      </ul>

      <hr/>

      <h3>❓ Common Exam Scenarios</h3>

      <div style={{background: '#f0f9ff', padding: '1rem', borderRadius: '8px', marginBottom: '1rem'}}>
        <strong>Q: Property sold for $425,000. What is the MA excise stamp tax?</strong>
        <p><strong>A:</strong> $425,000 ÷ $500 = 850 units. 850 × $2.28 = $1,938 stamp tax.</p>
      </div>

      <div style={{background: '#f0f9ff', padding: '1rem', borderRadius: '8px', marginBottom: '1rem'}}>
        <strong>Q: When are MA property taxes due?</strong>
        <p><strong>A:</strong> Quarterly: August 1, November 1, February 1, May 1. Q1 & Q2 are preliminary (based on prior year). Q3 & Q4 are actual (based on current assessment).</p>
      </div>

      <div style={{background: '#f0f9ff', padding: '1rem', borderRadius: '8px', marginBottom: '1rem'}}>
        <strong>Q: Property has both a mortgage and unpaid taxes. Which lien has priority?</strong>
        <p><strong>A:</strong> Property tax lien has FIRST priority, even if mortgage was recorded first. Tax liens are superior to all other liens.</p>
      </div>

      <div style={{background: '#f0f9ff', padding: '1rem', borderRadius: '8px'}}>
        <strong>Q: What is Massachusetts fiscal year?</strong>
        <p><strong>A:</strong> July 1 - June 30. Assessment date is January 1. Whoever owns property on January 1 pays taxes for the entire fiscal year.</p>
      </div>
    </>
  )
};

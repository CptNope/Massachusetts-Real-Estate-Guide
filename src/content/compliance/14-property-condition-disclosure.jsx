import React from 'react';

export const section = {
    id: 'property-condition-disclosure',
    icon: '⚠️',
    title: '14. Property Condition - Required Disclosure',
    subtitle: 'Seller disclosure duties, latent defects, building code violations, material defects definition',
    body: (
      <>
        <h3>32.1 Seller's Duty to Disclose</h3>
        <p className="highlight">
          <strong>DISCLOSURE REQUIREMENT:</strong> In properties up to 4 units, the seller has a legal duty to disclose any 
          <strong> known defects that threaten structural soundness or personal safety</strong>.
        </p>

        <div className="warning-box">
          <p><strong>⚠️ CRITICAL:</strong> This is a LEGAL OBLIGATION, not optional. Failure to disclose known defects can result 
          in lawsuits, rescission of sale, and damages.</p>
        </div>

        <h4>Scope of Disclosure Duty:</h4>
        <ul>
          <li><strong>Property Types:</strong> Up to 4 units (single-family, 2-family, 3-family, 4-family)</li>
          <li><strong>What Must Be Disclosed:</strong> Defects threatening structural soundness OR personal safety</li>
          <li><strong>Knowledge Requirement:</strong> Seller must disclose "known" defects</li>
          <li><strong>Not Required:</strong> Seller doesn't have to investigate or hire inspectors (but must disclose what they know)</li>
        </ul>

        <h3>32.2 Types of Defects That Must Be Disclosed</h3>

        <h4>1. Latent Defects</h4>
        <div className="defect-type">
          <p><strong>Definition:</strong> A hidden structural defect <strong>not discoverable by ordinary inspection</strong>.</p>
          
          <h5>Characteristics of Latent Defects:</h5>
          <ul>
            <li><strong>Hidden:</strong> Not visible to buyer during normal walkthrough</li>
            <li><strong>Structural:</strong> Affects the structure or systems of the home</li>
            <li><strong>Not Discoverable:</strong> Cannot be found by reasonable visual inspection</li>
            <li><strong>Known to Seller:</strong> Seller is aware of the defect</li>
          </ul>

          <h5>Examples of Latent Defects:</h5>
          <ul>
            <li>Foundation cracks hidden behind finished basement walls</li>
            <li>Roof trusses that are cracked but covered by finished ceiling</li>
            <li>Electrical wiring problems inside walls</li>
            <li>Plumbing leaks within walls or under floors</li>
            <li>Termite damage inside walls or structural members</li>
            <li>Septic system failure not visible from surface</li>
            <li>Previous flooding in basement that seller cleaned up and hid</li>
          </ul>

          <div className="warning-box">
            <p><strong>Key Point:</strong> Just because the buyer COULD have discovered it with an inspection doesn't relieve 
            seller's duty to disclose if it's a latent defect the seller knew about!</p>
          </div>
        </div>

        <h4>2. Building Code Violations</h4>
        <div className="defect-type">
          <p><strong>Legal Principle:</strong> Courts have ruled <strong>in favor of the Buyer</strong> when seller has neglected 
          to reveal known violations of zoning or building codes.</p>
          
          <h5>What Must Be Disclosed:</h5>
          <ul>
            <li><strong>Known Violations:</strong> Any building code violations seller is aware of</li>
            <li><strong>Unpermitted Work:</strong> Additions, renovations done without permits</li>
            <li><strong>Zoning Violations:</strong> Non-conforming uses or structures</li>
            <li><strong>Outstanding Violations:</strong> Notices from building department</li>
            <li><strong>Failed Inspections:</strong> Work that didn't pass inspection</li>
          </ul>

          <h5>Common Building Code Issues:</h5>
          <ul>
            <li>Unpermitted additions or finished basements</li>
            <li>Illegal in-law apartments</li>
            <li>Non-conforming electrical or plumbing work</li>
            <li>Structures built too close to property lines (setback violations)</li>
            <li>Converted garages without permits</li>
            <li>Added bathrooms/bedrooms without required permits</li>
          </ul>

          <div className="danger-box">
            <p><strong>Seller Liability:</strong> If seller knew about code violations and didn't disclose, buyer can sue for 
            damages, cost of bringing property into compliance, or even rescind the sale.</p>
          </div>
        </div>

        <h4>3. Material Defects</h4>
        <div className="defect-type">
          <p><strong>Definition:</strong> All known 'material facts or defects' must be disclosed to buyer <strong>before making 
          an offer</strong>.</p>
          
          <div className="key-concept">
            <p><strong>Test for Material Defect:</strong> <em>Had buyer known about the issue, might they have decided not to 
            purchase the home OR negotiated differently?</em></p>
            <p>If the answer is YES or MAYBE, it's a material defect that must be disclosed.</p>
          </div>

          <h5>Examples of Material Defects:</h5>
          <ul>
            <li><strong>Structural Issues:</strong>
              <ul>
                <li>Foundation cracks or settling</li>
                <li>Roof leaks or damage</li>
                <li>Sagging floors or ceilings</li>
                <li>Water damage or mold</li>
              </ul>
            </li>
            <li><strong>System Failures:</strong>
              <ul>
                <li>Non-functioning HVAC, plumbing, or electrical</li>
                <li>Septic system problems</li>
                <li>Well water contamination</li>
                <li>Drainage or flooding issues</li>
              </ul>
            </li>
            <li><strong>Environmental Hazards:</strong>
              <ul>
                <li>Lead paint (if known)</li>
                <li>Asbestos</li>
                <li>Radon (if tested and levels high)</li>
                <li>Underground oil tanks</li>
              </ul>
            </li>
            <li><strong>Legal/Title Issues:</strong>
              <ul>
                <li>Boundary disputes</li>
                <li>Easements affecting property use</li>
                <li>Pending lawsuits related to property</li>
                <li>Special assessments</li>
              </ul>
            </li>
          </ul>
        </div>

        <h3>32.3 The Material Defect Test</h3>
        <div className="rule-box">
          <p><strong>Would the buyer have made a different decision?</strong></p>
          <p>A defect is "material" if, had the buyer known about it, they might have:</p>
          <ul>
            <li>Decided NOT to purchase the property</li>
            <li>Negotiated a lower price</li>
            <li>Required repairs before closing</li>
            <li>Asked for a credit at closing</li>
            <li>Walked away from the deal</li>
          </ul>
          <p><strong>If any of these are possible, it's material and must be disclosed.</strong></p>
        </div>

        <h3>32.4 Seller's Knowledge Requirement</h3>

        <h4>What Does "Known" Mean?</h4>
        <ul>
          <li><strong>Actual Knowledge:</strong> Seller personally experienced or observed the defect</li>
          <li><strong>Constructive Knowledge:</strong> Seller received reports, notices, or was told about defect</li>
          <li><strong>Should Have Known:</strong> In some cases, courts say seller "should have known" about obvious issues</li>
        </ul>

        <h4>Seller Does NOT Have To:</h4>
        <ul>
          <li>❌ Hire inspectors to find defects</li>
          <li>❌ Conduct invasive testing</li>
          <li>❌ Investigate rumors or speculation</li>
          <li>❌ Disclose defects they genuinely don't know about</li>
        </ul>

        <h4>Seller DOES Have To:</h4>
        <ul>
          <li>✅ Disclose all defects they personally know about</li>
          <li>✅ Disclose defects previous owners told them about</li>
          <li>✅ Disclose defects found in inspection reports they received</li>
          <li>✅ Disclose violations or notices received from city/town</li>
          <li>✅ Be truthful if buyer asks direct questions</li>
        </ul>

        <h3>32.5 Agent's Role in Disclosure</h3>

        <h4>Listing Agent Duties:</h4>
        <ul>
          <li><strong>Ask Seller:</strong> Question seller about known defects</li>
          <li><strong>Complete Disclosure Form:</strong> Help seller fill out property disclosure statement</li>
          <li><strong>Disclose What You Know:</strong> Agent must disclose defects THEY observe or know about</li>
          <li><strong>Don't Hide:</strong> Cannot help seller conceal defects</li>
          <li><strong>Encourage Honesty:</strong> Advise seller that disclosure protects everyone</li>
        </ul>

        <h4>Buyer Agent Duties:</h4>
        <ul>
          <li><strong>Review Disclosures:</strong> Carefully review seller's disclosure statement with buyer</li>
          <li><strong>Ask Questions:</strong> Follow up on vague or concerning disclosures</li>
          <li><strong>Recommend Inspection:</strong> Always recommend professional home inspection</li>
          <li><strong>Point Out Red Flags:</strong> Alert buyer to potential issues you observe</li>
          <li><strong>Don't Rely on Seller:</strong> Don't assume seller's disclosure is complete</li>
        </ul>

        <h3>32.6 Consequences of Non-Disclosure</h3>

        <h4>Seller Liability:</h4>
        <ul>
          <li><strong>Lawsuits:</strong> Buyer can sue for fraud, misrepresentation, or breach of duty</li>
          <li><strong>Damages:</strong> Cost to repair defect, diminution in value, consequential damages</li>
          <li><strong>Rescission:</strong> In extreme cases, sale can be unwound (buyer gets money back)</li>
          <li><strong>Punitive Damages:</strong> If fraud is proven, additional punitive damages possible</li>
          <li><strong>Attorney Fees:</strong> Seller may have to pay buyer's legal fees</li>
        </ul>

        <h4>Agent Liability:</h4>
        <ul>
          <li><strong>Professional Liability:</strong> Agent can be sued alongside seller</li>
          <li><strong>License Disciplinary Action:</strong> Failure to disclose can result in license suspension</li>
          <li><strong>Reputation Damage:</strong> Even if not liable, reputation suffers</li>
          <li><strong>E&O Insurance Claims:</strong> Claims affect future insurance premiums</li>
        </ul>

        <h3>32.7 Best Practices</h3>
        <div className="best-practices">
          <h4>For Sellers:</h4>
          <ol>
            <li><strong>Complete Disclosure Form Thoroughly:</strong> Answer all questions honestly and completely</li>
            <li><strong>When in Doubt, Disclose:</strong> Better to over-disclose than under-disclose</li>
            <li><strong>Provide Documentation:</strong> Include copies of repair receipts, inspection reports, permits</li>
            <li><strong>Update Disclosures:</strong> If new issues arise before closing, immediately disclose</li>
            <li><strong>Don't Hide Defects:</strong> Never paint over, cover up, or conceal problems</li>
          </ol>

          <h4>For Agents:</h4>
          <ol>
            <li><strong>Use Disclosure Forms:</strong> Always use comprehensive property disclosure statement</li>
            <li><strong>Ask Direct Questions:</strong> Question seller about all potential issues</li>
            <li><strong>Document Everything:</strong> Keep records of what seller told you</li>
            <li><strong>Disclose What You See:</strong> If you observe defects, you must disclose</li>
            <li><strong>Recommend Inspections:</strong> Always recommend professional inspections</li>
            <li><strong>Follow Up:</strong> If disclosure is vague, get clarification</li>
            <li><strong>Encourage Honesty:</strong> Explain to seller that disclosure protects them from lawsuits</li>
          </ol>
        </div>

        <h3>32.8 Sample Disclosure Language</h3>
        <div className="sample-language">
          <h4>Good Disclosure Examples:</h4>
          <p><strong>✅</strong> "Foundation has minor cracks in northeast corner of basement. Had structural engineer inspect in 2020 
          who said it was not structural. Report available upon request."</p>
          
          <p><strong>✅</strong> "Roof is 18 years old. Had leak in 2019 over master bedroom which was repaired. No leaks since repair."</p>
          
          <p><strong>✅</strong> "Finished basement was done without permits in 2015. Town was never notified. Used licensed electrician 
          and plumber but didn't pull permits."</p>

          <h4>Bad Disclosure Examples:</h4>
          <p><strong>❌</strong> "Roof has some issues" (Too vague - what issues?)</p>
          
          <p><strong>❌</strong> "Everything is fine as far as I know" (Not specific enough)</p>
          
          <p><strong>❌</strong> Leaving sections blank or marking "Unknown" when seller actually knows</p>
        </div>

        <p className="highlight">
          <strong>Remember:</strong> Massachusetts law requires sellers of 1-4 unit properties to disclose known defects that 
          threaten structural soundness or personal safety. Latent defects (hidden but known to seller), building code violations, 
          and material defects MUST be disclosed. The test for a material defect is: "Would the buyer have made a different decision 
          if they had known?" When in doubt, disclose! It's better to over-disclose than face a lawsuit later. Agents must also 
          disclose defects they personally observe. Always use comprehensive disclosure forms, ask sellers direct questions, and 
          encourage honesty. Disclosure protects everyone - seller, buyer, and agent.
        </p>
      </>
    )
  };

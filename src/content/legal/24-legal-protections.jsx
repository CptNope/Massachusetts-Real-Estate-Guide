import React from 'react';

export const section = {
    id: 'legal-protections',
    icon: '⚖️',
    title: '24. Legal Protections & MA Compliance',
    subtitle: 'Bonds, Protection Clauses, Chapter 93A & Trust Accounts',
    body: (
      <>
        <h3>18.1 Bonds in Massachusetts Real Estate</h3>
        <div className="bonds-section">
          <h4>Broker Bond/Fidelity Bond:</h4>
          <ul>
            <li><strong>Purpose:</strong> Protects clients from broker's dishonest acts</li>
            <li><strong>Amount:</strong> Typically $25,000-100,000</li>
            <li><strong>Cost:</strong> $300-500 per year</li>
            <li><strong>Required:</strong> For brokers managing trust accounts</li>
          </ul>

          <p><em>Note: MA does not require a license bond, but E&O insurance and fidelity bonds 
          are standard practice and often required by brokerages.</em></p>
        </div>

        <h3>18.2 Protection Clauses in Contracts</h3>
        <div className="protection-clauses">
          <h4>Financing Contingency:</h4>
          <ul>
            <li>Buyer can cancel if financing falls through</li>
            <li>Must specify deadline and loan terms</li>
            <li>Protects buyer's deposit if loan denied</li>
          </ul>

          <h4>Home Sale Contingency:</h4>
          <ul>
            <li>Buyer must sell current home first</li>
            <li>Sets deadline for sale</li>
            <li>Often includes "kick-out clause" for seller protection</li>
          </ul>

          <h4>Kick-Out Clause:</h4>
          <ul>
            <li>Seller can accept backup offers</li>
            <li>Gives first buyer 24-72 hours to remove contingency</li>
            <li>Protects seller from being tied up indefinitely</li>
          </ul>

          <h4>Attorney Review Period:</h4>
          <ul>
            <li>Attorneys can review and suggest changes</li>
            <li>Typically 5-7 business days</li>
            <li>Either party can cancel during this period</li>
          </ul>
        </div>

        <h3>18.3 Massachusetts Chapter 93A - Consumer Protection Act</h3>
        <div className="chapter93a">
          <div className="chapter93a-header">
            <p className="highlight">
              <strong>Massachusetts Consumer Protection Act (MCPA; M.G.L. c. 93A)</strong>
            </p>
            <p className="subtitle-text">
              <strong>"Common sense laws!"</strong> - These are fundamental consumer protection rules that apply to 
              ALL business interactions, not just real estate.
            </p>
          </div>

          <h4>📋 Purpose: Level the Playing Field</h4>
          <p>
            Chapter 93A was created to <strong>level the playing field between consumers and businesses in all areas, 
            not just real estate.</strong> It protects consumers from unfair or deceptive business practices across 
            every industry.
          </p>

          <h4>⚖️ What Chapter 93A Outlaws:</h4>
          <div className="chapter93a-violations">
            <p className="warning">
              <strong>Unfair and deceptive acts or practices in the conduct of any trade or commerce, including:</strong>
            </p>
            <ul>
              <li><strong>Advertising</strong> - False, misleading, or deceptive advertising</li>
              <li><strong>Offering for sale, rent, or lease</strong> - Misrepresenting property or terms</li>
              <li><strong>Selling, renting, leasing, or distributing</strong> - Unfair practices during transactions</li>
              <li><strong>Any service or property</strong> - Whether real or personal, tangible or intangible</li>
            </ul>
          </div>

          <h4>🏠 Real Estate Examples of 93A Violations:</h4>
          <table>
            <thead>
              <tr>
                <th>Violation Type</th>
                <th>Example</th>
                <th>Why It's a Problem</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Misrepresentation</strong></td>
                <td>Claiming house has new roof when it's 15 years old</td>
                <td>False statement of material fact</td>
              </tr>
              <tr>
                <td><strong>False Advertising</strong></td>
                <td>"Guaranteed to sell in 30 days!" or puffing claims</td>
                <td>Deceptive marketing promises</td>
              </tr>
              <tr>
                <td><strong>Failure to Disclose</strong></td>
                <td>Knowing about foundation crack but not disclosing</td>
                <td>Hiding material defects</td>
              </tr>
              <tr>
                <td><strong>Unfair Pressure</strong></td>
                <td>Forcing buyer to waive inspection with threats</td>
                <td>Coercive tactics</td>
              </tr>
              <tr>
                <td><strong>Bait & Switch</strong></td>
                <td>Advertising low commission then adding hidden fees</td>
                <td>Deceptive pricing practices</td>
              </tr>
              <tr>
                <td><strong>Omission of Facts</strong></td>
                <td>Not mentioning property is in flood zone</td>
                <td>Material non-disclosure</td>
              </tr>
            </tbody>
          </table>

          <h4>💰 Penalties & Damages (Severe!):</h4>
          <div className="chapter93a-penalties">
            <ul>
              <li><strong>Double Damages:</strong> If violation was knowing/willful</li>
              <li><strong>Triple Damages:</strong> If violation was intentional and egregious</li>
              <li><strong>Attorney's Fees:</strong> Winning plaintiff gets attorney's fees paid by defendant (HUGE!)</li>
              <li><strong>Costs of Litigation:</strong> Defendant pays all court costs</li>
              <li><strong>License Suspension:</strong> Board can suspend or revoke real estate license</li>
              <li><strong>Injunctive Relief:</strong> Court can order you to stop certain practices</li>
              <li><strong>Reputation Damage:</strong> Public record of consumer protection violation</li>
            </ul>

            <p className="warning">
              <strong>⚠️ Why This Is Terrifying:</strong> The attorney's fees provision means even a small violation 
              can cost you $50,000+ because the plaintiff's lawyer bills get paid by YOU if you lose. This encourages 
              lawsuits and makes settlement expensive.
            </p>
          </div>

          <h4>📬 The 30-Day Demand Letter (Critical!):</h4>
          <div className="demand-letter-process">
            <p><strong>Before filing a lawsuit, consumer MUST send a written demand letter:</strong></p>
            
            <h5>What Happens:</h5>
            <ol>
              <li><strong>Consumer Sends Letter:</strong> Describes violation and demands remedy (refund, repairs, damages)</li>
              <li><strong>You Have 30 Days:</strong> To respond with a reasonable settlement offer</li>
              <li><strong>If You Settle:</strong> Within 30 days with reasonable offer, you avoid lawsuit</li>
              <li><strong>If You Ignore:</strong> Consumer can sue and you're in deep trouble</li>
              <li><strong>If Offer Unreasonable:</strong> Consumer can still sue but you showed good faith</li>
            </ol>

            <h5>Best Practices When You Receive a Demand Letter:</h5>
            <ul>
              <li>✅ <strong>DO NOT IGNORE IT!</strong> Ignoring makes damages worse</li>
              <li>✅ <strong>Contact your E&O insurance immediately</strong> - they may cover defense</li>
              <li>✅ <strong>Consult an attorney immediately</strong> - real estate attorney experienced in 93A</li>
              <li>✅ <strong>Respond within 30 days</strong> with reasonable settlement offer</li>
              <li>✅ <strong>Document everything</strong> - all communications, evidence, timeline</li>
              <li>✅ <strong>Be professional</strong> - don't get defensive or angry in response</li>
              <li>❌ <strong>Don't admit fault</strong> without attorney guidance</li>
              <li>❌ <strong>Don't offer inadequate settlement</strong> - could be seen as bad faith</li>
            </ul>

            <p className="highlight">
              <strong>Reasonable Offer = Avoiding Triple Damages:</strong> If you make a reasonable settlement offer 
              within 30 days and the consumer rejects it, then sues and wins LESS than your offer, you may avoid 
              multiple damages. But if you lowball or ignore, triple damages are likely.
            </p>
          </div>

          <h4>🛡️ How to Protect Yourself from 93A Claims:</h4>
          <div className="chapter93a-protection">
            <ol>
              <li><strong>Never lie or exaggerate</strong> - Stick to verifiable facts</li>
              <li><strong>Disclose everything material</strong> - When in doubt, disclose</li>
              <li><strong>Get everything in writing</strong> - Verbal promises = liability</li>
              <li><strong>Avoid puffing in advertising</strong> - No "best," "perfect," "guaranteed"</li>
              <li><strong>Follow all disclosure laws</strong> - Lead paint, stigmatized property, etc.</li>
              <li><strong>Don't make promises you can't keep</strong> - "I'll sell it in 30 days"</li>
              <li><strong>Accurate MLS listings</strong> - Verify all property details</li>
              <li><strong>Proper agency disclosure</strong> - Always clear about who you represent</li>
              <li><strong>No high-pressure tactics</strong> - Let clients make informed decisions</li>
              <li><strong>Keep detailed records</strong> - Document all communications and disclosures</li>
            </ol>
          </div>

          <h4>Common 93A Scenarios in Real Estate:</h4>
          <div className="chapter93a-scenarios">
            <h5>Scenario 1: The Undisclosed Roof Leak</h5>
            <p><strong>Situation:</strong> Listing agent knows roof leaks but doesn't disclose. Buyer discovers after closing.</p>
            <p><strong>Violation:</strong> Failure to disclose material defect</p>
            <p><strong>Result:</strong> Buyer sends demand letter for $15,000 (cost of new roof). Agent ignores it. Buyer sues. 
            Agent loses, pays $45,000 (triple damages) + $30,000 (buyer's attorney fees) + court costs = $75,000+ total!</p>

            <h5>Scenario 2: The "Guaranteed Sale" Ad</h5>
            <p><strong>Situation:</strong> Agent advertises "Guaranteed to sell in 60 days or I'll buy it myself!"</p>
            <p><strong>Violation:</strong> False advertising (can't guarantee sale)</p>
            <p><strong>Result:</strong> Property doesn't sell. Seller demands agent buy it per advertisement. Agent refuses. 
            93A lawsuit for deceptive advertising + breach of promise.</p>

            <h5>Scenario 3: The Hidden Commission Fees</h5>
            <p><strong>Situation:</strong> Agent quotes 5% commission but contract has 6% plus "admin fees"</p>
            <p><strong>Violation:</strong> Deceptive pricing (bait and switch)</p>
            <p><strong>Result:</strong> Seller catches it, demands refund. Agent refuses. 93A claim for unfair business practice.</p>
          </div>

          <h4>93A vs Other Legal Claims:</h4>
          <table>
            <thead>
              <tr>
                <th>Claim Type</th>
                <th>Damages</th>
                <th>Attorney Fees</th>
                <th>Difficulty</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Chapter 93A</strong></td>
                <td>2x-3x actual damages</td>
                <td>✅ Plaintiff gets fees</td>
                <td>Easier to prove</td>
              </tr>
              <tr>
                <td><strong>Fraud</strong></td>
                <td>Actual damages only</td>
                <td>❌ Each pays own</td>
                <td>Harder to prove (intent)</td>
              </tr>
              <tr>
                <td><strong>Breach of Contract</strong></td>
                <td>Actual damages only</td>
                <td>❌ Each pays own</td>
                <td>Must prove contract terms</td>
              </tr>
              <tr>
                <td><strong>Negligence</strong></td>
                <td>Actual damages only</td>
                <td>❌ Each pays own</td>
                <td>Must prove duty/breach</td>
              </tr>
            </tbody>
          </table>

          <p className="highlight">
            <strong>Why Plaintiffs Love 93A:</strong> It's easier to prove than fraud (no need to show intent to deceive), 
            provides multiple damages, AND the defendant pays attorney fees. It's a plaintiff-friendly law designed to 
            protect consumers.
          </p>

          <div className="chapter93a-summary">
            <h4>🎯 Bottom Line on Chapter 93A:</h4>
            <ul>
              <li>✅ It's a <strong>consumer protection law</strong> that applies to ALL businesses</li>
              <li>✅ Prohibits <strong>unfair or deceptive practices</strong> in ANY commerce</li>
              <li>✅ Real estate agents are absolutely subject to it</li>
              <li>✅ Penalties are <strong>severe</strong>: 2x-3x damages + attorney fees</li>
              <li>✅ <strong>30-day demand letter</strong> is required before lawsuit</li>
              <li>✅ <strong>Respond immediately</strong> to demand letters - never ignore!</li>
              <li>✅ Best protection: <strong>honesty, transparency, and full disclosure</strong></li>
            </ul>

            <p className="warning">
              <strong>⚠️ Remember:</strong> These are "common sense laws" - don't lie, don't mislead, don't hide 
              material facts, don't use deceptive advertising. If you follow basic ethical principles, you'll avoid 
              93A liability. If you cut corners or deceive consumers, 93A will crush you financially.
            </p>
          </div>

          <h4>📋 MCPA's Recommendations - Disclosure & Confidentiality</h4>
          <div className="mcpa-recommendations">
            <p className="highlight">
              <strong>Cooperating brokers should make independent investigations of property they are involved 
              with whenever possible. CYA!</strong> (Cover Your Assets!)
            </p>

            <h5>Agent-Specific Duties:</h5>
            <div className="agent-duties">
              <div className="seller-agent-duty">
                <p><strong>📌 Seller's Agent:</strong></p>
                <ul>
                  <li><strong>Material defect/fact & use wide-open eyes!</strong></li>
                  <li>Inspect property thoroughly</li>
                  <li>Ask seller direct questions about property condition</li>
                  <li>Document everything seller tells you</li>
                  <li>Disclose all known material facts</li>
                </ul>
              </div>

              <div className="buyer-agent-duty">
                <p><strong>🔍 Buyer's Agent:</strong></p>
                <ul>
                  <li><strong>Bring a shovel & DIG! DIG! DIG!!!</strong></li>
                  <li><strong>Caveat Emptor = Let the buyer beware!</strong></li>
                  <li>Investigate property condition thoroughly</li>
                  <li>Recommend inspections (home, pest, radon, etc.)</li>
                  <li>Research property history (permits, violations, sales history)</li>
                  <li>Don't rely solely on seller's disclosures</li>
                  <li>Protect your buyer client through due diligence</li>
                </ul>
              </div>
            </div>

            <h5>🚨 When MCPA Overrides Confidentiality (Critical!):</h5>
            <div className="confidentiality-override">
              <p className="warning">
                <strong>MCPA overrides the common-law agency duty of confidentiality in some circumstances.</strong>
              </p>
              
              <p><strong>Rule:</strong> A broker MUST disclose facts about the property to the buyer even if 
              the seller revealed them to the broker in confidence.</p>

              <h6>Examples When You MUST Disclose (Even if Confidential):</h6>
              <div className="disclosure-examples">
                <div className="example-must-disclose">
                  <p><strong>Example 1: Roof Leaks</strong></p>
                  <p className="scenario">
                    If the seller has stated that the roof leaks, for example, the broker MUST pass on this 
                    information to the prospective buyer.
                  </p>
                  <p className="rule">
                    <strong>Why:</strong> Material defect about the property itself. Property condition facts 
                    override confidentiality. Buyer has right to know about defects.
                  </p>
                </div>

                <div className="example-must-disclose">
                  <p><strong>Example 2: "As-Is" Sale</strong></p>
                  <p className="scenario">
                    "As-Is" Sale doesn't negate seller's need to still disclose any known material facts or defects.
                  </p>
                  <p className="rule">
                    <strong>Why:</strong> "As-Is" means no repairs, NOT no disclosure. Seller and agent still 
                    must disclose known defects. Buyer accepts property condition, but must know what condition is.
                  </p>
                </div>
              </div>

              <h6>Example When You MUST Keep Confidential:</h6>
              <div className="example-keep-confidential">
                <p><strong>Example 3: Seller's Divorce</strong></p>
                <p className="scenario">
                  While a Seller revealing that they are selling due to a Divorce - MUST be kept confidential!
                </p>
                <p className="rule">
                  <strong>Why:</strong> Personal information about the seller (not about the property). 
                  Seller's motivation is private. Not a material fact about property condition. Revealing 
                  could harm seller's negotiating position.
                </p>
              </div>
            </div>

            <h5>🔐 What You CANNOT Reveal Without Permission:</h5>
            <div className="cannot-reveal">
              <p className="warning">
                <strong>Broker cannot reveal any personal information about the seller, such as the seller's 
                willingness to accept an offer that is less than the listing price.</strong>
              </p>

              <p className="highlight">
                <strong>Get seller's written permission before using the following statements:</strong>
              </p>

              <ul>
                <li><strong>"Motivated Seller!"</strong> 
                  <ul>
                    <li>❌ Cannot say without permission - reveals seller's urgency</li>
                    <li>❌ Weakens seller's negotiating position</li>
                    <li>❌ Personal information about seller (not property)</li>
                    <li>✅ CAN say if seller gives written permission in listing agreement</li>
                  </ul>
                </li>
                <li><strong>"Make an Offer!"</strong>
                  <ul>
                    <li>❌ Cannot say without permission - implies seller will accept less</li>
                    <li>❌ Suggests seller is willing to negotiate below asking</li>
                    <li>❌ Personal information about seller's willingness to accept lower price</li>
                    <li>✅ CAN say if seller authorizes this language</li>
                  </ul>
                </li>
              </ul>

              <h6>Other Personal Information You CANNOT Reveal:</h6>
              <ul>
                <li>❌ Seller is in financial distress</li>
                <li>❌ Seller has received other offers (unless authorized)</li>
                <li>❌ Seller's reason for selling (divorce, job loss, relocation urgency)</li>
                <li>❌ Seller will accept less than listing price</li>
                <li>❌ Seller's timeline/urgency to close</li>
                <li>❌ Seller's personal circumstances that create pressure</li>
              </ul>
            </div>

            <h5>Decision Tree: To Disclose or Not to Disclose?</h5>
            <table>
              <thead>
                <tr>
                  <th>Information Type</th>
                  <th>Must Disclose?</th>
                  <th>Reason</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>Property defect (roof leak)</strong></td>
                  <td>✅ YES</td>
                  <td>Material fact about property - MCPA overrides confidentiality</td>
                </tr>
                <tr>
                  <td><strong>Foundation crack</strong></td>
                  <td>✅ YES</td>
                  <td>Material defect - must disclose even if seller told you in confidence</td>
                </tr>
                <tr>
                  <td><strong>Previous flood damage</strong></td>
                  <td>✅ YES</td>
                  <td>Material fact affecting property value and safety</td>
                </tr>
                <tr>
                  <td><strong>Stigmatized property event</strong></td>
                  <td>⚠️ ONLY IF ASKED</td>
                  <td>Not material defect but must answer truthfully if asked</td>
                </tr>
                <tr>
                  <td><strong>Seller's divorce</strong></td>
                  <td>❌ NO</td>
                  <td>Personal information - keep confidential</td>
                </tr>
                <tr>
                  <td><strong>Seller's financial distress</strong></td>
                  <td>❌ NO</td>
                  <td>Personal information - weakens seller's position</td>
                </tr>
                <tr>
                  <td><strong>Seller will accept less</strong></td>
                  <td>❌ NO</td>
                  <td>Personal information - need written permission</td>
                </tr>
                <tr>
                  <td><strong>"Motivated seller"</strong></td>
                  <td>❌ NOT WITHOUT PERMISSION</td>
                  <td>Personal info - get written authorization first</td>
                </tr>
              </tbody>
            </table>

            <h5>Best Practices for Disclosure:</h5>
            <ol>
              <li><strong>Ask Seller Direct Questions:</strong>
                <ul>
                  <li>"Are there any defects or issues with the property?"</li>
                  <li>"Have there been any repairs to roof, foundation, plumbing, electrical?"</li>
                  <li>"Any water damage, flooding, or moisture issues?"</li>
                  <li>"Any structural issues or repairs?"</li>
                  <li>"Any issues with septic, well, or utilities?"</li>
                </ul>
              </li>
              <li><strong>Document Everything:</strong>
                <ul>
                  <li>Write down what seller tells you</li>
                  <li>Get seller signature on disclosure forms</li>
                  <li>Keep records of when information was disclosed</li>
                  <li>Email confirmations of verbal disclosures</li>
                </ul>
              </li>
              <li><strong>Property Facts = Must Disclose:</strong>
                <ul>
                  <li>Defects, damage, repairs, issues</li>
                  <li>Disclose even if "As-Is" sale</li>
                  <li>Disclose even if seller told you in confidence</li>
                  <li>MCPA overrides confidentiality for property facts</li>
                </ul>
              </li>
              <li><strong>Personal Info = Keep Confidential:</strong>
                <ul>
                  <li>Seller's motivation, urgency, financial situation</li>
                  <li>Willingness to accept lower price</li>
                  <li>Personal circumstances (divorce, job loss, health)</li>
                  <li>Get written permission before revealing</li>
                </ul>
              </li>
              <li><strong>When in Doubt:</strong>
                <ul>
                  <li>Is it about the PROPERTY? → Disclose</li>
                  <li>Is it about the SELLER? → Keep confidential</li>
                  <li>Consult broker or attorney if unclear</li>
                </ul>
              </li>
            </ol>

            <div className="mcpa-summary">
              <h5>🎯 MCPA Disclosure Summary:</h5>
              <p className="highlight">
                <strong>Property Facts Beat Confidentiality:</strong> MCPA consumer protection law overrides 
                your duty of confidentiality when it comes to material facts about the property. You MUST 
                disclose property defects even if seller told you in confidence. But you MUST keep personal 
                information about the seller confidential unless you have written permission to share it.
              </p>
              
              <p className="warning">
                <strong>⚠️ The Line:</strong> Property condition = disclose. Seller's personal situation = 
                confidential. When you cross this line wrong, you either violate MCPA (failing to disclose 
                defect) or breach fiduciary duty (revealing confidential info). Both can end your career.
              </p>
            </div>
          </div>
        </div>

        <h3>18.4 Lead Paint Disclosure (Federal & MA)</h3>
        <ul>
          <li><strong>Applies to:</strong> Properties built before 1978</li>
          <li><strong>Required:</strong> Lead paint disclosure form</li>
          <li><strong>10-Day Inspection Period:</strong> Buyer has right to inspect for lead</li>
          <li><strong>Pamphlet:</strong> Must provide EPA's "Protect Your Family from Lead" pamphlet</li>
          <li><strong>Penalties:</strong> Up to $16,000 per violation, plus triple damages</li>
        </ul>

        <h3>18.5 MA Smoke Detector & CO Alarm Law</h3>
        <ul>
          <li><strong>Required:</strong> Working smoke/CO detectors on every level</li>
          <li><strong>Certificate:</strong> Seller must provide compliance certificate at closing</li>
          <li><strong>Responsibility:</strong> Seller's obligation to bring up to code</li>
          <li><strong>Inspection:</strong> By local fire department</li>
        </ul>

        <h3>18.6 Escrow Accounts & Record Keeping</h3>
        <div className="escrow-accounts">
          <h4>Escrow Account Requirements:</h4>
          <p><strong>Immediate Deposit:</strong> Immediately upon acceptance of Contract to Purchase, earnest money 
          MUST be deposited into broker's Escrow Account. Broker has no claims to the funds - only acts as an 
          Escrow Agent with fiduciary responsibilities.</p>

          <p className="warning">
            <strong>⚠️ VIP NOTE:</strong> Contract may not be binding until the earnest money is received by the 
            listing agent/brokerage. Acceptance alone may not create a binding contract - deposit receipt is critical!
          </p>

          <h4>NO COMMINGLING OF FUNDS:</h4>
          <p className="warning">
            <strong>Absolutely Prohibited:</strong> Cannot mix escrow money with operating account. Escrow account 
            can be 1 account for all escrow funds, but MUST be completely separate from broker's personal or business 
            operating funds. Violation = license suspension + criminal charges.
          </p>

          <h4>When Funds Can Be Released:</h4>
          <p>Funds can ONLY be released:</p>
          <ul>
            <li><strong>At consummation of sale</strong> (closing)</li>
            <li><strong>Upon mutual consent/release</strong> from both parties</li>
            <li><strong>Court ordered directive</strong></li>
          </ul>
          <p><em>Account is either interest or non-interest bearing. Cannot release without proper authorization.</em></p>

          <h4>Record Keeping Requirements:</h4>
          <div className="record-keeping">
            <p><strong>Copies of Checks:</strong> Keep for <strong>3 YEARS</strong></p>
            <p><strong>Checkbook Register:</strong> Keep for <strong>10 YEARS</strong></p>

            <h4>Records Must Clearly Indicate:</h4>
            <ul>
              <li>Date and from whom deposit was given</li>
              <li>Date deposited</li>
              <li>Source of money</li>
              <li>Check number</li>
              <li>Date of withdrawal</li>
              <li>Name of persons receiving money</li>
              <li>Any other pertinent information</li>
            </ul>
          </div>

          <h4>Board Inspection:</h4>
          <p>Records are subject to inspection by the Board of Registration or its agents at any time. Must maintain 
          complete and accurate records at all times.</p>

          <h4>Check Signing Authority:</h4>
          <p className="warning">
            <strong>BROKER ONLY:</strong> Only a BROKER shall be permitted to have check signing authority on escrow 
            accounts. Bookkeepers, accountants, salespeople, or unlicensed assistants CANNOT have signing authority. 
            This is a non-delegable broker responsibility.
          </p>

          <h4>No Salesperson May Hold Client Funds:</h4>
          <p>Salespeople cannot hold earnest money checks. All client funds must go directly to broker's escrow account. 
          Salesperson holding client funds = violation of license law.</p>
        </div>

        <p className="highlight">
          <strong>Compliance Summary:</strong> MA has strict consumer protection laws. Always disclose, 
          document everything, and when in doubt, consult your broker or real estate attorney. 
          Prevention is cheaper than lawsuits!
        </p>
      </>
    )
  };

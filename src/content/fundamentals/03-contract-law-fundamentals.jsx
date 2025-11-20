import React from 'react';

export const section = {
    id: 'contract-law-fundamentals',
    icon: '📝',
    title: '3. Contract Law Fundamentals',
    subtitle: 'Essential contract principles - types, elements, enforceability, and Statute of Frauds',
    body: (
      <>
        <h3>35.1 What is a Contract?</h3>
        <div className="definition-box">
          <p className="highlight">
            <strong>A Contract is a voluntary agreement of promise between legally competent parties, supported by legal 
            consideration, to perform (or refrain from performing) some legal act.</strong>
          </p>
        </div>

        <h4>Key Elements of This Definition:</h4>
        <ul>
          <li><strong>Voluntary:</strong> Freely entered into without coercion</li>
          <li><strong>Agreement of Promise:</strong> Mutual promises or obligations</li>
          <li><strong>Legally Competent Parties:</strong> Have legal capacity to contract</li>
          <li><strong>Supported by Consideration:</strong> Something of value exchanged</li>
          <li><strong>To Perform (or Refrain):</strong> Action or forbearance required</li>
          <li><strong>Some Legal Act:</strong> Purpose must be lawful</li>
        </ul>

        <h3>35.2 Express and Implied Contracts</h3>

        <h4>Express Contracts</h4>
        <div className="contract-type-box">
          <p><strong>Definition:</strong> Parties <strong>SHOW their intentions in words</strong>, either oral or written.</p>
          
          <h5>Characteristics:</h5>
          <ul>
            <li>Intentions clearly stated</li>
            <li>Terms explicitly outlined</li>
            <li>Can be oral OR written</li>
            <li>Most real estate contracts are express</li>
          </ul>

          <h5>Examples:</h5>
          <ul>
            <li><strong>Listing Agreement:</strong> Written contract stating seller will pay X% commission</li>
            <li><strong>Purchase and Sale Agreement:</strong> Written contract specifying price, terms, closing date</li>
            <li><strong>Lease:</strong> Written or oral agreement stating rent amount and term</li>
            <li><strong>Employment Agreement:</strong> Written contract between broker and agent</li>
          </ul>

          <div className="warning-box">
            <p><strong>⚠️ Massachusetts Statute of Frauds:</strong> Many contracts MUST be in writing to be enforceable (see Section 35.5)</p>
          </div>
        </div>

        <h4>Implied Contracts</h4>
        <div className="contract-type-box">
          <p><strong>Definition:</strong> Agreement of parties is <strong>DEMONSTRATED by the parties' acts and conduct</strong>.</p>
          
          <h5>Characteristics:</h5>
          <ul>
            <li>No written or spoken words</li>
            <li>Conduct creates the obligation</li>
            <li>Reasonable person would infer agreement</li>
            <li>Courts enforce based on behavior</li>
          </ul>

          <h5>Examples:</h5>
          <ul>
            <li><strong>Restaurant Service:</strong> You sit down, order food, eat it. Implied contract to pay (no one said "I promise to pay").</li>
            <li><strong>Gas Station:</strong> You pump gas into your car. Implied contract to pay for what you pumped.</li>
            <li><strong>Taxi Ride:</strong> You get in taxi, tell destination. Implied contract to pay fare.</li>
            <li><strong>Property Management:</strong> Agent manages property for months without written agreement. Implied contract for payment.</li>
          </ul>

          <div className="info-box">
            <p><strong>💡 Note:</strong> While implied contracts exist, always get it in writing! Written contracts prevent disputes and are required for many real estate transactions.</p>
          </div>
        </div>

        <h3>35.3 Bilateral and Unilateral Contracts</h3>

        <h4>Bilateral Contracts</h4>
        <div className="contract-type-box">
          <p><strong>Definition:</strong> <strong>Both parties promise to do something</strong>; one promise given in exchange for another.</p>
          
          <h5>Structure: Promise ↔ Promise</h5>
          <ul>
            <li>Party A promises to do X</li>
            <li>Party B promises to do Y</li>
            <li>BOTH parties are obligated</li>
            <li>Most common type of contract</li>
          </ul>

          <h5>Real Estate Examples:</h5>
          <ul>
            <li><strong>Purchase and Sale Agreement (P&S):</strong>
              <ul>
                <li>Buyer promises: To pay $X and close on specified date</li>
                <li>Seller promises: To convey property with clear title</li>
                <li>Both have obligations</li>
              </ul>
            </li>
            <li><strong>Listing Agreement:</strong>
              <ul>
                <li>Seller promises: To pay commission if property sells</li>
                <li>Broker promises: To market property and seek buyers</li>
                <li>Both have obligations</li>
              </ul>
            </li>
            <li><strong>Lease:</strong>
              <ul>
                <li>Tenant promises: To pay rent</li>
                <li>Landlord promises: To provide property for use</li>
                <li>Both have obligations</li>
              </ul>
            </li>
          </ul>
        </div>

        <h4>Unilateral Contracts</h4>
        <div className="contract-type-box">
          <p><strong>Definition:</strong> <strong>One-sided agreement.</strong> One party makes a promise in order to induce a second party to perform. The 2nd party is not obligated to act. However, if the 2nd party does comply, the first party is obligated to keep the promise.</p>
          
          <h5>Structure: Promise → Performance (if chosen)</h5>
          <ul>
            <li>Party A makes a promise</li>
            <li>Party B can choose whether to perform</li>
            <li>If Party B performs, Party A must fulfill promise</li>
            <li>Party B never promises anything</li>
          </ul>

          <h5>Key Example: Option to Buy</h5>
          <div className="example-box">
            <p><strong>Scenario:</strong> Seller gives Buyer an option to purchase property for $500,000 within 90 days for $5,000 option fee.</p>
            
            <p><strong>Analysis:</strong></p>
            <ul>
              <li><strong>Seller's Promise:</strong> "If you exercise this option, I will sell you the property for $500,000"</li>
              <li><strong>Buyer's Rights:</strong> Can choose to buy OR walk away</li>
              <li><strong>Buyer's Obligation:</strong> NONE - buyer never promises to buy</li>
              <li><strong>If Buyer Exercises:</strong> Seller MUST sell at $500,000</li>
              <li><strong>If Buyer Doesn't Exercise:</strong> Option expires, seller keeps $5,000 fee</li>
            </ul>

            <p><strong>Why Unilateral?</strong> Only the seller promises to perform. Buyer has a right, not an obligation.</p>
          </div>

          <h5>Other Unilateral Contract Examples:</h5>
          <ul>
            <li><strong>Reward Offers:</strong> "I'll pay $1,000 to whoever finds my lost dog"
              <ul>
                <li>You promise to pay IF someone finds dog</li>
                <li>No one is obligated to search</li>
                <li>If someone does find dog, you must pay</li>
              </ul>
            </li>
            <li><strong>Open Listing:</strong> "I'll pay commission to any broker who brings me a buyer"
              <ul>
                <li>Seller promises to pay if broker brings buyer</li>
                <li>Broker not obligated to work on property</li>
                <li>If broker brings buyer, seller must pay</li>
              </ul>
            </li>
          </ul>
        </div>

        <h3>35.4 Executed and Executory Contracts</h3>

        <h4>Executed Contracts</h4>
        <div className="contract-type-box">
          <p><strong>Definition:</strong> <strong>All parties have fulfilled their promise</strong>; the contract has been performed.</p>
          
          <p><strong>Also Refers To:</strong> The parties having <strong>executed (signed) the agreement</strong>.</p>

          <h5>Two Meanings:</h5>
          <ol>
            <li><strong>Executed = Signed:</strong> "We executed the P&S yesterday" (we signed it)</li>
            <li><strong>Executed = Completed:</strong> "The contract is fully executed" (all obligations fulfilled)</li>
          </ol>

          <h5>Examples:</h5>
          <ul>
            <li><strong>Closed Real Estate Sale:</strong>
              <ul>
                <li>Buyer paid the purchase price</li>
                <li>Seller conveyed the deed</li>
                <li>Both obligations fulfilled → Executed contract</li>
              </ul>
            </li>
            <li><strong>Completed Lease Term:</strong>
              <ul>
                <li>Tenant paid all rent</li>
                <li>Landlord provided property for full term</li>
                <li>Lease expired → Executed contract</li>
              </ul>
            </li>
            <li><strong>Commission Paid:</strong>
              <ul>
                <li>Broker sold the property</li>
                <li>Seller paid the commission</li>
                <li>Both obligations fulfilled → Executed contract</li>
              </ul>
            </li>
          </ul>
        </div>

        <h4>Executory Contracts</h4>
        <div className="contract-type-box">
          <p><strong>Definition:</strong> <strong>One or both parties still have an act to perform.</strong> The contract obligations are not yet fulfilled.</p>

          <h5>Examples:</h5>
          <ul>
            <li><strong>Signed P&S Before Closing:</strong>
              <ul>
                <li>Contract is signed (executed), but...</li>
                <li>Buyer hasn't paid yet</li>
                <li>Seller hasn't conveyed deed</li>
                <li>Still executory until closing</li>
              </ul>
            </li>
            <li><strong>Active Lease:</strong>
              <ul>
                <li>Lease is signed, but...</li>
                <li>Tenant must continue paying rent</li>
                <li>Landlord must continue providing property</li>
                <li>Executory until lease ends</li>
              </ul>
            </li>
            <li><strong>Listing Agreement:</strong>
              <ul>
                <li>Agreement is signed, but...</li>
                <li>Broker must market property</li>
                <li>Seller must pay commission if sold</li>
                <li>Executory until sale or expiration</li>
              </ul>
            </li>
          </ul>

          <div className="key-concept">
            <p><strong>Key Point:</strong> Most real estate contracts are executory from signing until closing. The P&S is executory; only at closing does it become executed (fully performed).</p>
          </div>
        </div>

        <h3>35.5 Statute of Frauds - CRITICAL FOR MASSACHUSETTS</h3>
        <div className="statute-of-frauds-box">
          <p className="highlight">
            <strong>Statute of Frauds:</strong> Massachusetts law requires <strong>ALL real estate contracts be in WRITING to be enforceable.</strong>
          </p>

          <h4>Why It Exists:</h4>
          <ul>
            <li>Prevents fraudulent claims about oral agreements</li>
            <li>Provides clear evidence of terms</li>
            <li>Reduces disputes and litigation</li>
            <li>Protects parties from faulty memories</li>
          </ul>

          <h4>Real Estate Contracts That MUST Be In Writing:</h4>
          <div className="must-be-written">
            <ul>
              <li>✍️ Listing agreements</li>
              <li>✍️ Purchase and Sale agreements</li>
              <li>✍️ Offers to purchase</li>
              <li>✍️ Leases longer than 1 year</li>
              <li>✍️ Options to buy</li>
              <li>✍️ Rights of first refusal</li>
              <li>✍️ Easements</li>
              <li>✍️ Mortgages and deeds of trust</li>
              <li>✍️ Deeds</li>
              <li>✍️ Any contract for sale of land or interest in land</li>
            </ul>
          </div>

          <h4>Consequences of Oral Agreement:</h4>
          <div className="danger-box">
            <p><strong>❌ UNENFORCEABLE:</strong> If required to be in writing but only oral, contract CANNOT be enforced in court.</p>
            <ul>
              <li>Cannot sue for specific performance</li>
              <li>Cannot collect commission (if oral listing)</li>
              <li>Cannot force sale</li>
              <li>Agreement is void and worthless</li>
            </ul>
          </div>

          <div className="exam-tip">
            <p><strong>🎯 EXAM TIP:</strong> If exam asks "Can an oral listing agreement be enforced?" → Answer: <strong>NO</strong>. Statute of Frauds requires it in writing.</p>
          </div>
        </div>

        <h3>35.6 Essential Elements of a Valid Contract</h3>
        <p>For a contract to be legally enforceable, it MUST contain ALL of these elements:</p>

        <div className="elements-grid">
          <div className="element-card">
            <h4>1. Competent Parties</h4>
            <p><strong>Requirement:</strong> All parties must have legal capacity to enter into a contract.</p>
            
            <h5>Competent Means:</h5>
            <ul>
              <li><strong>Legal Age:</strong> 18+ years old in Massachusetts</li>
              <li><strong>Sound Mind:</strong> Not mentally incapacitated</li>
              <li><strong>Sober:</strong> Not under influence of drugs or alcohol at signing</li>
              <li><strong>Legal Authority:</strong> Has right to contract (not in guardianship/conservatorship)</li>
            </ul>

            <h5>Incompetent Parties:</h5>
            <ul>
              <li>❌ Minors (under 18) - voidable by minor</li>
              <li>❌ Mentally incompetent persons - void</li>
              <li>❌ Intoxicated persons (if so impaired they don't understand) - voidable</li>
              <li>❌ Persons under guardianship - void unless guardian signs</li>
            </ul>

            <div className="practical-tip">
              <p><strong>💡 Practical Tip:</strong> "Have client sign contract BEFORE buying them a beer. If not, contract is Voidable."</p>
              <p>Never have clients sign important documents after they've been drinking!</p>
            </div>
          </div>

          <div className="element-card">
            <h4>2. Mutual Assent (Meeting of the Minds)</h4>
            <p><strong>Requirement:</strong> <strong>Offer & Acceptance</strong>, free and voluntary act. A "meeting of minds" without misrepresentation, fraud, or mistake.</p>
            
            <h5>Components:</h5>
            <ul>
              <li><strong>Offer:</strong> One party proposes terms</li>
              <li><strong>Acceptance:</strong> Other party agrees to exact terms</li>
              <li><strong>Free Will:</strong> No coercion or duress</li>
              <li><strong>Understanding:</strong> Both parties understand terms</li>
            </ul>

            <h5>Destroys Mutual Assent:</h5>
            <ul>
              <li>❌ <strong>Misrepresentation:</strong> False statement of material fact</li>
              <li>❌ <strong>Fraud:</strong> Intentional deception to induce agreement</li>
              <li>❌ <strong>Mistake:</strong> Material error about subject matter or terms</li>
              <li>❌ <strong>Duress:</strong> Threat or force used to obtain agreement</li>
              <li>❌ <strong>Undue Influence:</strong> Taking advantage of position of trust</li>
            </ul>

            <div className="example-box">
              <p><strong>Example:</strong> Agent tells buyer "basement never floods" knowing it floods every spring. Buyer signs P&S. This is fraud/misrepresentation. NO mutual assent. Contract is voidable by buyer.</p>
            </div>
          </div>

          <div className="element-card">
            <h4>3. Consideration</h4>
            <p><strong>Requirement:</strong> <strong>Earnest Money Deposit</strong> or something of value exchanged.</p>
            
            <p><strong>Definition:</strong> Something of value given by each party to show the agreement is not a gift.</p>

            <h5>Forms of Consideration:</h5>
            <ul>
              <li><strong>Money:</strong> Earnest money deposit, down payment</li>
              <li><strong>Promise:</strong> Promise to pay or perform</li>
              <li><strong>Property:</strong> Trading one property for another</li>
              <li><strong>Services:</strong> Work or labor provided</li>
              <li><strong>Forbearance:</strong> Agreeing NOT to do something</li>
            </ul>

            <h5>Real Estate Examples:</h5>
            <ul>
              <li><strong>Purchase Agreement:</strong>
                <ul>
                  <li>Buyer's consideration: Money (purchase price)</li>
                  <li>Seller's consideration: Property (deed transfer)</li>
                </ul>
              </li>
              <li><strong>Listing Agreement:</strong>
                <ul>
                  <li>Seller's consideration: Promise to pay commission</li>
                  <li>Broker's consideration: Marketing services</li>
                </ul>
              </li>
              <li><strong>Option:</strong>
                <ul>
                  <li>Buyer's consideration: Option fee ($5,000)</li>
                  <li>Seller's consideration: Holding property off market</li>
                </ul>
              </li>
            </ul>

            <div className="info-box">
              <p><strong>Note:</strong> Consideration doesn't have to be "adequate" (equal value). Courts don't judge if it's a "good deal." As long as something of value is exchanged, consideration exists.</p>
            </div>
          </div>

          <div className="element-card">
            <h4>4. Legality of Object</h4>
            <p><strong>Requirement:</strong> The <strong>intended purpose is not illegal</strong>.</p>
            
            <p>Contract cannot be for an illegal purpose or violate public policy.</p>

            <h5>Legal Purposes:</h5>
            <ul>
              <li>✅ Buying/selling property for residence</li>
              <li>✅ Buying/selling property for investment</li>
              <li>✅ Leasing property for business</li>
              <li>✅ Hiring broker to sell property</li>
            </ul>

            <h5>Illegal Purposes (Contract VOID):</h5>
            <ul>
              <li>❌ Purchase property to operate illegal drug business</li>
              <li>❌ Lease property for prostitution</li>
              <li>❌ Contract to violate fair housing laws</li>
              <li>❌ Agreement to commit fraud</li>
              <li>❌ Contract that violates zoning laws knowingly</li>
            </ul>

            <div className="warning-box">
              <p><strong>⚠️ Important:</strong> If contract has illegal purpose, it is VOID from the beginning. Courts will not enforce it, and parties cannot sue for breach.</p>
            </div>
          </div>

          <div className="element-card">
            <h4>5. Legal Form</h4>
            <p><strong>Requirement:</strong> <strong>Statute of Frauds requires some contracts to be in writing.</strong></p>
            
            <p>In Massachusetts, all real estate contracts MUST be in writing to be enforceable.</p>

            <h5>Must Be In Writing:</h5>
            <ul>
              <li>✍️ All contracts for sale of land</li>
              <li>✍️ All listing agreements</li>
              <li>✍️ Leases over 1 year</li>
              <li>✍️ Mortgages and deeds</li>
            </ul>

            <div className="key-point">
              <p><strong>Key Exam Point:</strong> Oral real estate contracts are UNENFORCEABLE in Massachusetts due to Statute of Frauds.</p>
            </div>
          </div>

          <div className="element-card">
            <h4>6. Description of Property</h4>
            <p><strong>Requirement:</strong> <strong>Accurate description of property.</strong></p>
            
            <p>Contract must identify the property being sold/leased with sufficient detail.</p>

            <h5>Acceptable Descriptions:</h5>
            <ul>
              <li><strong>Legal Description:</strong> Metes and bounds, lot/block, recorded plan</li>
              <li><strong>Street Address:</strong> "123 Main St, Boston, MA 02101"</li>
              <li><strong>Assessor's Parcel Number (APN):</strong> Tax ID number</li>
            </ul>

            <h5>Property Description Must:</h5>
            <ul>
              <li>✅ Uniquely identify the property</li>
              <li>✅ Be clear and unambiguous</li>
              <li>✅ Allow property to be located</li>
              <li>❌ Cannot be vague ("my house" insufficient)</li>
            </ul>
          </div>

          <div className="element-card">
            <h4>7. Date for Performance</h4>
            <p><strong>Requirement:</strong> <strong>Specific time at or by which the agreed-upon act must be performed.</strong></p>
            
            <p>Contract must state WHEN obligations must be fulfilled.</p>

            <h5>Examples:</h5>
            <ul>
              <li>"Closing shall occur on or before December 15, 2025"</li>
              <li>"Inspection must be completed within 10 days of P&S"</li>
              <li>"Financing commitment due within 30 days"</li>
              <li>"Lease term: January 1, 2025 - December 31, 2025"</li>
            </ul>

            <h5>Why Important:</h5>
            <ul>
              <li>Creates deadline for performance</li>
              <li>Determines when breach occurs</li>
              <li>Allows for specific performance enforcement</li>
              <li>Clarifies when rights expire</li>
            </ul>
          </div>

          <div className="element-card">
            <h4>8. Time is of the Essence</h4>
            <p><strong>Meaning:</strong> Contract <strong>MUST be performed within the time limit specified</strong> & any party who doesn't perform on time is guilty of <strong>"breach of contract."</strong></p>
            
            <div className="critical-box">
              <p><strong>🚨 CRITICAL CLAUSE:</strong> When "Time is of the Essence" is in contract, deadlines are STRICT. Missing deadline = breach.</p>
            </div>

            <h5>With "Time is of Essence" Clause:</h5>
            <ul>
              <li>⏰ Deadlines are MANDATORY, not suggestions</li>
              <li>⏰ Missing closing date by 1 day = breach</li>
              <li>⏰ Other party can cancel contract</li>
              <li>⏰ Breaching party may forfeit deposit</li>
              <li>⏰ Can sue for specific performance or damages</li>
            </ul>

            <h5>Without "Time is of Essence" Clause:</h5>
            <ul>
              <li>Deadlines are targets, not absolute</li>
              <li>"Reasonable time" for performance</li>
              <li>Minor delays may be acceptable</li>
              <li>More flexibility for parties</li>
            </ul>

            <div className="example-box">
              <p><strong>Example:</strong> P&S states "Closing on December 15, 2025. Time is of the Essence."</p>
              <p>Buyer fails to close on December 15. Seller can immediately cancel contract and keep buyer's deposit as liquidated damages.</p>
            </div>
          </div>

          <div className="element-card">
            <h4>9. Signatures</h4>
            <p><strong>Requirement:</strong> <strong>Signatures of the parties involved</strong> (Buyer and Seller).</p>
            
            <p>Contract must be signed by all parties who have obligations.</p>

            <h5>Signature Requirements:</h5>
            <ul>
              <li><strong>Who Must Sign:</strong> All parties with obligations under contract</li>
              <li><strong>Both Spouses:</strong> If property owned jointly, both must sign</li>
              <li><strong>Electronic Signatures:</strong> Legal and binding in Massachusetts</li>
              <li><strong>Initials:</strong> May be required for changes or addendums</li>
            </ul>

            <h5>Types of Acceptable Signatures:</h5>
            <ul>
              <li>✅ Handwritten signature (most common)</li>
              <li>✅ Electronic signature (DocuSign, etc.)</li>
              <li>✅ Digital signature with encryption</li>
              <li>✅ Mark or "X" (if witnessed and party unable to write)</li>
            </ul>

            <div className="info-box">
              <p><strong>Electronic Signatures:</strong> Massachusetts recognizes electronic signatures as legal and binding. All parties must consent to use electronic signatures.</p>
            </div>
          </div>
        </div>

        <h3>35.7 Summary: Contract Checklist</h3>
        <div className="checklist-box">
          <p><strong>For a contract to be valid and enforceable, it MUST have:</strong></p>
          <ol>
            <li>☑️ <strong>Competent Parties</strong> - Legal capacity (18+, sober, sound mind)</li>
            <li>☑️ <strong>Mutual Assent</strong> - Offer + acceptance, no fraud/mistake</li>
            <li>☑️ <strong>Consideration</strong> - Something of value exchanged</li>
            <li>☑️ <strong>Legality of Object</strong> - Legal purpose</li>
            <li>☑️ <strong>Legal Form</strong> - In writing (Statute of Frauds)</li>
            <li>☑️ <strong>Description of Property</strong> - Accurate identification</li>
            <li>☑️ <strong>Date for Performance</strong> - When obligations due</li>
            <li>☑️ <strong>Time is of Essence</strong> - (If applicable) Strict deadlines</li>
            <li>☑️ <strong>Signatures</strong> - All parties sign</li>
          </ol>
          <p className="highlight"><strong>Missing even ONE element can make contract unenforceable!</strong></p>
        </div>

        <p className="highlight">
          <strong>Remember:</strong> Contract law is HEAVILY tested on the Massachusetts exam. Know the difference between bilateral/unilateral, executed/executory, express/implied contracts. Understand that Statute of Frauds requires real estate contracts in writing. Memorize all 9 essential elements - competent parties, mutual assent, consideration, legality of object, legal form, description of property, date for performance, time is of essence, and signatures. "Time is of Essence" makes deadlines strict - missing them = breach. A contract missing ANY required element is unenforceable. When in doubt, put it in writing!
        </p>
      </>
    )
  };

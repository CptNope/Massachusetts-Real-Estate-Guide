import React from 'react';

export const section = {
    id: 'agency-termination',
    icon: '🔚',
    title: '12. Termination of Agency Relationships',
    subtitle: 'How agency relationships end - by acts of parties, operation of law, and legal consequences',
    body: (
      <>
        <h3>30.1 Understanding Agency Termination</h3>
        <p className="highlight">
          <strong>Agency termination</strong> is how an agency relationship legally ends. Understanding termination is critical 
          because it affects commission rights, fiduciary duties, continuing obligations, and potential liability. There are TWO 
          main categories: termination by acts of the parties and termination by operation of law.
        </p>

        <div className="key-concept">
          <p><strong>Critical Principle:</strong> Just because an agency terminates does NOT mean all obligations end. Some duties 
          continue AFTER termination, especially confidentiality and accounting obligations.</p>
        </div>

        <h3>30.2 Termination by Acts of Parties</h3>
        <p>
          These are voluntary actions taken by the principal (client) or agent that end the agency relationship. Both parties have 
          certain rights to terminate, but consequences vary.
        </p>

        <h4>1. Completion of Purpose (Performance)</h4>
        <div className="termination-method">
          <p><strong>What It Is:</strong> The agency relationship ends when its purpose is fulfilled.</p>
          
          <h5>Examples:</h5>
          <ul>
            <li><strong>Sale Closes:</strong> Listing agreement terminates when property sale is completed</li>
            <li><strong>Buyer Purchases:</strong> Buyer-broker agreement ends when buyer successfully purchases a property</li>
            <li><strong>Lease Signed:</strong> If agent hired to find a rental, agency ends when lease is executed</li>
          </ul>

          <h5>Commission Rights:</h5>
          <div className="success-box">
            <p><strong>✅ AGENT EARNS COMMISSION:</strong> When agency terminates due to successful completion, agent has earned 
            their commission and must be paid per the agreement.</p>
          </div>

          <h5>Key Points:</h5>
          <ul>
            <li>Most natural and desired form of termination</li>
            <li>No conflict - both parties satisfied</li>
            <li>All contractual obligations fulfilled</li>
            <li>Commission due and payable</li>
          </ul>
        </div>

        <h4>2. Expiration of Term</h4>
        <div className="termination-method">
          <p><strong>What It Is:</strong> The agency agreement has a specified end date that arrives.</p>
          
          <h5>Examples:</h5>
          <ul>
            <li><strong>6-Month Listing Expires:</strong> Listing agreement stated "This agreement expires on June 30, 2025" and that date passes</li>
            <li><strong>90-Day Buyer Agreement:</strong> Buyer-broker agreement for 90 days reaches its end date</li>
            <li><strong>Automatic Termination:</strong> No action needed - agreement simply expires</li>
          </ul>

          <h5>Commission Rights:</h5>
          <ul>
            <li><strong>If Sold During Term:</strong> Agent earns commission if property sold/purchased before expiration</li>
            <li><strong>If Expired Without Sale:</strong> No commission owed (unless protection period clause applies)</li>
            <li><strong>Protection Period:</strong> Many agreements have "tail" provisions protecting agent's commission</li>
          </ul>

          <div className="info-box">
            <p><strong>Protection Period Clause Example:</strong> "If within 90 days after expiration of this agreement, the property 
            is sold to a buyer procured by agent during the term, agent shall be entitled to the agreed commission."</p>
          </div>

          <h5>Best Practices:</h5>
          <ul>
            <li>All listing agreements MUST have expiration dates (not perpetual)</li>
            <li>Extension requires mutual written agreement</li>
            <li>Automatic renewal clauses are disfavored (must be clearly disclosed)</li>
            <li>Clear protection period terms prevent disputes</li>
          </ul>
        </div>

        <h4>3. Mutual Agreement (Mutual Consent)</h4>
        <div className="termination-method">
          <p><strong>What It Is:</strong> Principal and agent BOTH agree to end the relationship before completion or expiration.</p>
          
          <h5>How It Works:</h5>
          <ul>
            <li>Both parties voluntarily agree to terminate</li>
            <li>Should be documented in writing</li>
            <li>Can occur at any time by mutual consent</li>
            <li>Usually addresses any outstanding obligations</li>
          </ul>

          <h5>Common Scenarios:</h5>
          <ul>
            <li><strong>Not a Good Fit:</strong> Client and agent realize they're not compatible - agree to part ways</li>
            <li><strong>Changed Circumstances:</strong> Client decides not to sell/buy - agent agrees to release them</li>
            <li><strong>Agent Transfer:</strong> Agent leaving brokerage - client agrees to end relationship</li>
            <li><strong>Negotiated Settlement:</strong> Parties agree on terms (partial commission, expenses, etc.)</li>
          </ul>

          <h5>Commission Rights:</h5>
          <div className="info-box">
            <p><strong>Negotiable:</strong> Parties can agree to any terms - no commission, partial commission, reimbursement of 
            expenses, etc. Get it in writing!</p>
          </div>

          <h5>Best Practices:</h5>
          <ul>
            <li><strong>Written Release:</strong> Get signed mutual termination agreement</li>
            <li><strong>Clear Terms:</strong> Specify any commission payments or expense reimbursements</li>
            <li><strong>No Liability:</strong> Include mutual release of claims language</li>
            <li><strong>Return Materials:</strong> Agent returns all client documents and property</li>
          </ul>
        </div>

        <h4>4. Revocation by Principal</h4>
        <div className="termination-method">
          <p><strong>What It Is:</strong> The principal (client) unilaterally terminates the agency relationship.</p>
          
          <div className="warning-box">
            <p><strong>⚠️ CRITICAL:</strong> Principal has the <strong>POWER</strong> to revoke at any time, but may not always 
            have the <strong>RIGHT</strong> to do so without consequences.</p>
          </div>

          <h5>Power vs. Right:</h5>
          <ul>
            <li><strong>Power:</strong> Principal can ALWAYS fire the agent (can't force someone to represent you)</li>
            <li><strong>Right:</strong> Principal may owe damages/commission if termination breaches the contract</li>
            <li><strong>Key Principle:</strong> You can fire your agent, but you may have to pay them anyway</li>
          </ul>

          <h5>Commission Rights:</h5>
          <div className="commission-scenarios">
            <h6>Scenario 1: Wrongful Termination Without Cause</h6>
            <ul>
              <li><strong>Situation:</strong> Seller fires listing agent mid-term for no valid reason</li>
              <li><strong>Result:</strong> Agent may be entitled to damages equal to expected commission</li>
              <li><strong>Theory:</strong> Principal breached the contract</li>
              <li><strong>Agent Must Prove:</strong> They would have earned the commission but for wrongful termination</li>
            </ul>

            <h6>Scenario 2: Termination for Cause (Agent Breach)</h6>
            <ul>
              <li><strong>Situation:</strong> Agent fails to market property, misses appointments, violates fiduciary duties</li>
              <li><strong>Result:</strong> Principal can terminate WITHOUT owing commission or damages</li>
              <li><strong>Valid Reasons:</strong> Negligence, breach of duty, fraud, failure to perform</li>
            </ul>

            <h6>Scenario 3: "For Convenience" Clauses</h6>
            <ul>
              <li><strong>Some Agreements Include:</strong> "Principal may terminate for any reason with X days notice"</li>
              <li><strong>May Require:</strong> Payment of marketing expenses or partial commission</li>
              <li><strong>Clarity Important:</strong> Agreement should specify termination terms</li>
            </ul>
          </div>

          <h5>Legal Consequences:</h5>
          <ul>
            <li>Agent may sue for breach of contract</li>
            <li>Agent may seek commission as damages</li>
            <li>Principal may owe reimbursement of marketing expenses</li>
            <li>Protection period may still apply if property later sells</li>
          </ul>

          <div className="best-practice">
            <h6>Best Practice for Agents:</h6>
            <ul>
              <li>Document all work performed and expenses incurred</li>
              <li>Send written communication of concerns before relationship deteriorates</li>
              <li>Consider negotiated settlement rather than litigation</li>
              <li>Consult attorney if pursuing commission claim</li>
            </ul>
          </div>
        </div>

        <h4>5. Renunciation by Agent</h4>
        <div className="termination-method">
          <p><strong>What It Is:</strong> The agent voluntarily withdraws from the agency relationship.</p>
          
          <div className="warning-box">
            <p><strong>⚠️ DANGER:</strong> Agent who abandons client without justification may lose commission AND face 
            liability for damages caused to principal.</p>
          </div>

          <h5>Wrongful Renunciation:</h5>
          <ul>
            <li><strong>Abandonment:</strong> Agent quits mid-transaction without valid reason</li>
            <li><strong>Consequences:</strong> Loses any commission rights, may owe damages to principal</li>
            <li><strong>Damages:</strong> Principal may recover difference if forced to pay higher commission to new agent</li>
            <li><strong>Professional Reputation:</strong> Can result in complaints to licensing board</li>
          </ul>

          <h5>Justified Renunciation:</h5>
          <p>Agent MAY withdraw if:</p>
          <ul>
            <li><strong>Principal's Breach:</strong> Client refuses to pay agreed commission, violates agreement terms</li>
            <li><strong>Illegal Activity:</strong> Principal asks agent to do something illegal/unethical</li>
            <li><strong>Impossible Performance:</strong> Circumstances make it impossible to fulfill duties</li>
            <li><strong>Health/Emergency:</strong> Agent has serious illness or emergency making performance impossible</li>
            <li><strong>Principal's Fraud:</strong> Client lied about material facts, engaged in fraudulent activity</li>
          </ul>

          <h5>Proper Procedure for Agent Withdrawal:</h5>
          <ol>
            <li><strong>Written Notice:</strong> Provide written notice to principal</li>
            <li><strong>Reasonable Time:</strong> Give principal reasonable time to find replacement agent</li>
            <li><strong>Don't Abandon:</strong> Continue critical duties until replacement found (pending offers, etc.)</li>
            <li><strong>Return Property:</strong> Return all client documents, keys, materials</li>
            <li><strong>Notify Third Parties:</strong> Inform other agents, title companies of termination</li>
            <li><strong>Document Reason:</strong> Clearly state justification if applicable</li>
          </ol>

          <div className="best-practice">
            <p><strong>Best Practice:</strong> Never abandon a client mid-transaction. If relationship is untenable, seek 
            mutual termination agreement or consult your broker/attorney before withdrawing.</p>
          </div>
        </div>

        <h3>30.3 Termination by Operation of Law</h3>
        <p>
          These terminations occur automatically due to legal events, regardless of the parties' wishes. No action needed - 
          the law automatically terminates the agency.
        </p>

        <h4>1. Death of Principal or Agent</h4>
        <div className="termination-method">
          <p><strong>What Happens:</strong> Agency relationship AUTOMATICALLY terminates upon death of either party.</p>
          
          <h5>Why This Happens:</h5>
          <ul>
            <li>Agency is a personal relationship based on trust</li>
            <li>Cannot force heir to honor deceased's choice of agent</li>
            <li>Agent's personal skill/judgment cannot be inherited or transferred</li>
            <li>Principal's consent to specific agent ends with death</li>
          </ul>

          <h5>Practical Implications:</h5>
          <div className="scenario-box">
            <h6>Scenario: Seller Dies Mid-Listing</h6>
            <ul>
              <li><strong>Listing Agreement:</strong> Automatically terminates upon seller's death</li>
              <li><strong>Commission:</strong> Not earned unless property was sold BEFORE death</li>
              <li><strong>Estate Sale:</strong> Heirs must sign NEW listing agreement with agent (or different agent)</li>
              <li><strong>No Automatic Rights:</strong> Original agent has no automatic right to continue representing estate</li>
            </ul>
          </div>

          <div className="scenario-box">
            <h6>Scenario: Agent Dies Mid-Transaction</h6>
            <ul>
              <li><strong>Agreement Terminates:</strong> Client no longer bound to deceased agent's brokerage</li>
              <li><strong>Pending Transactions:</strong> Broker may assign another agent to complete</li>
              <li><strong>Client Choice:</strong> Client can choose to continue with brokerage or select new representation</li>
              <li><strong>Commission:</strong> If sale closes, commission may go to deceased agent's estate (depends on brokerage policy)</li>
            </ul>
          </div>

          <h5>Exception - Corporate Principals:</h5>
          <ul>
            <li>If principal is a corporation, death of corporate officer does NOT terminate agency</li>
            <li>Corporation continues to exist despite death of individual officers</li>
            <li>Agency agreement remains in force</li>
          </ul>
        </div>

        <h4>2. Incapacity of Principal or Agent</h4>
        <div className="termination-method">
          <p><strong>What Happens:</strong> Legal incapacity (insanity, coma, guardianship) automatically terminates agency.</p>
          
          <h5>Types of Incapacity:</h5>
          <ul>
            <li><strong>Mental Incompetence:</strong> Principal or agent declared legally incompetent</li>
            <li><strong>Coma/Severe Injury:</strong> Incapacitated to extent they cannot make decisions</li>
            <li><strong>Guardianship Appointed:</strong> Court appoints guardian/conservator</li>
            <li><strong>Loss of License:</strong> Agent loses real estate license = legal incapacity to act as agent</li>
          </ul>

          <h5>Why This Happens:</h5>
          <ul>
            <li>Incapacitated person cannot give informed consent</li>
            <li>Cannot be bound by agent's actions if unable to understand them</li>
            <li>Agent cannot properly represent incapacitated principal's interests</li>
            <li>Incapacitated agent cannot fulfill fiduciary duties</li>
          </ul>

          <div className="scenario-box">
            <h6>Scenario: Seller Suffers Stroke Mid-Listing</h6>
            <ul>
              <li><strong>Listing Terminates:</strong> If stroke renders seller incompetent to make decisions</li>
              <li><strong>Power of Attorney:</strong> If seller had given POA before stroke, attorney-in-fact can act</li>
              <li><strong>Guardianship:</strong> Court-appointed guardian would need to sign new listing agreement</li>
              <li><strong>Pending Offers:</strong> Cannot be accepted by agent - requires legal representative</li>
            </ul>
          </div>

          <h5>Important Distinction:</h5>
          <div className="warning-box">
            <p><strong>Temporary Incapacity:</strong> Minor illness, short hospital stay does NOT terminate agency. Must be 
            serious, long-term incapacity that prevents decision-making.</p>
          </div>
        </div>

        <h4>3. Bankruptcy of Principal</h4>
        <div className="termination-method">
          <p><strong>What Happens:</strong> Bankruptcy of the principal generally terminates agency relationships.</p>
          
          <h5>Why This Happens:</h5>
          <ul>
            <li>Bankruptcy transfers control of assets to bankruptcy trustee</li>
            <li>Principal loses authority to deal with property in bankruptcy estate</li>
            <li>Trustee represents creditors, not the bankrupt principal</li>
            <li>Agency agreement cannot bind bankruptcy estate without court approval</li>
          </ul>

          <h5>Practical Implications:</h5>
          <ul>
            <li><strong>Listing Agreement:</strong> Terminates if seller files bankruptcy</li>
            <li><strong>Buyer-Broker Agreement:</strong> May continue if bankruptcy doesn't affect ability to purchase</li>
            <li><strong>Trustee's Choice:</strong> Bankruptcy trustee may choose to hire same agent or different representation</li>
            <li><strong>Commission Claims:</strong> Agent must file claim in bankruptcy proceedings</li>
          </ul>

          <div className="info-box">
            <p><strong>Exception:</strong> Bankruptcy of agent does not automatically terminate agency unless it affects agent's 
            ability to perform duties. However, principal has right to terminate if concerned about agent's financial situation.</p>
          </div>
        </div>

        <h4>4. Destruction of Subject Matter</h4>
        <div className="termination-method">
          <p><strong>What Happens:</strong> If the property that is the subject of the agency is destroyed, agency terminates.</p>
          
          <h5>Examples:</h5>
          <ul>
            <li><strong>House Burns Down:</strong> Listing agreement for house terminates if house is destroyed by fire</li>
            <li><strong>Condemnation:</strong> Government condemns and takes property through eminent domain</li>
            <li><strong>Total Loss:</strong> Natural disaster completely destroys property</li>
          </ul>

          <h5>Why This Happens:</h5>
          <ul>
            <li>Agency purpose becomes impossible to fulfill</li>
            <li>Cannot sell what no longer exists</li>
            <li>Doctrine of impossibility of performance</li>
          </ul>

          <h5>Commission Rights:</h5>
          <ul>
            <li><strong>Usually No Commission:</strong> Agent has not earned commission if property destroyed before sale</li>
            <li><strong>Exception:</strong> If contract had "ready, willing, able buyer" clause and buyer was found before destruction</li>
            <li><strong>Expenses:</strong> Agent may seek reimbursement of marketing expenses (depends on agreement)</li>
          </ul>

          <div className="info-box">
            <p><strong>Partial Destruction:</strong> If property is damaged but not completely destroyed, agency may continue. 
            Seller can choose to repair and continue listing, or terminate agreement.</p>
          </div>
        </div>

        <h4>5. Change in Law Making Agency Illegal</h4>
        <div className="termination-method">
          <p><strong>What Happens:</strong> If law changes making the agency purpose illegal, agency automatically terminates.</p>
          
          <h5>Examples:</h5>
          <ul>
            <li><strong>Zoning Change:</strong> Property was listed for commercial use, new zoning prohibits commercial use</li>
            <li><strong>New Regulations:</strong> Law prohibits type of transaction agent was hired to perform</li>
            <li><strong>License Revocation:</strong> Agent's license suspended/revoked - illegal to continue acting as agent</li>
          </ul>

          <h5>Why This Happens:</h5>
          <ul>
            <li>Courts will not enforce illegal contracts</li>
            <li>Agency purpose becomes unlawful</li>
            <li>Public policy prevents enforcement of illegal agency</li>
          </ul>

          <h5>Commission Rights:</h5>
          <ul>
            <li>Usually no commission if termination due to illegality</li>
            <li>Agent may seek quantum meruit (reasonable value of services) for work done before illegality</li>
            <li>Depends on circumstances and agent's knowledge of potential illegality</li>
          </ul>
        </div>

        <h3>30.4 Continuing Obligations After Termination</h3>
        <div className="warning-box">
          <p><strong>⚠️ CRITICAL:</strong> Agency termination does NOT end ALL obligations. Some duties continue FOREVER.</p>
        </div>

        <h4>Obligations That Continue:</h4>
        <ul>
          <li><strong>1. Confidentiality:</strong> Agent must NEVER disclose client's confidential information, even after termination
            <ul>
              <li>Seller's bottom line</li>
              <li>Buyer's maximum price</li>
              <li>Motivation to sell/buy</li>
              <li>Personal information</li>
              <li>Financial situation</li>
            </ul>
          </li>
          <li><strong>2. Accounting:</strong> Agent must provide final accounting of all funds, transactions, and commissions</li>
          <li><strong>3. Return of Property:</strong> Agent must return all documents, keys, and materials belonging to client</li>
          <li><strong>4. Non-Disparagement:</strong> Agent should not badmouth former client</li>
        </ul>

        <h4>Obligations That End:</h4>
        <ul>
          <li>Duty to actively market property (if listing)</li>
          <li>Duty to search for properties (if buyer agency)</li>
          <li>Duty to present offers</li>
          <li>Duty to provide regular updates</li>
          <li>Duty to advocate for client</li>
        </ul>

        <h3>30.5 Commission Disputes After Termination</h3>
        <p>
          Many termination issues involve commission disputes. Understanding when commission is earned vs. when it's owed is critical.
        </p>

        <h4>General Rule: When is Commission Earned?</h4>
        <div className="rule-box">
          <p><strong>Traditional Rule:</strong> Commission earned when agent produces a <strong>ready, willing, and able buyer</strong> 
          at the price and terms acceptable to seller.</p>
          <p><strong>Modern Practice:</strong> Most agreements specify commission earned at <strong>closing</strong> only.</p>
        </div>

        <h4>Common Scenarios:</h4>
        <div className="scenario-box">
          <h5>Scenario 1: Listing Expires, Then Seller Sells to Agent's Buyer</h5>
          <ul>
            <li><strong>With Protection Period:</strong> Agent entitled to commission if sale occurs within protection period</li>
            <li><strong>Without Protection Period:</strong> Agent not entitled to commission</li>
            <li><strong>Key Factor:</strong> Did agent introduce buyer during listing term?</li>
          </ul>
        </div>

        <div className="scenario-box">
          <h5>Scenario 2: Seller Terminates Listing, Then Sells Themselves</h5>
          <ul>
            <li><strong>If Wrongful Termination:</strong> Agent may be entitled to commission as damages</li>
            <li><strong>Must Prove:</strong> Agent would have earned commission but for seller's breach</li>
            <li><strong>Challenge:</strong> Seller may argue they sold without agent's efforts</li>
          </ul>
        </div>

        <div className="scenario-box">
          <h5>Scenario 3: Agent Finds Buyer, But Deal Falls Through After Termination</h5>
          <ul>
            <li><strong>Generally:</strong> No commission if sale doesn't close</li>
            <li><strong>Exception:</strong> If agreement specified "ready, willing, able" buyer standard</li>
            <li><strong>Depends On:</strong> Specific language in listing agreement</li>
          </ul>
        </div>

        <h3>30.6 Best Practices for Clean Termination</h3>
        <div className="best-practices">
          <ol>
            <li><strong>Written Agreement:</strong> Always document termination in writing signed by both parties</li>
            <li><strong>Clear Terms:</strong> Specify commission obligations, if any</li>
            <li><strong>Return Property:</strong> Promptly return all client documents, keys, lockboxes</li>
            <li><strong>Final Accounting:</strong> Provide written accounting of all transactions and expenses</li>
            <li><strong>Remove Listings:</strong> Remove property from MLS immediately</li>
            <li><strong>Notify Third Parties:</strong> Inform cooperating agents, title companies, lenders of termination</li>
            <li><strong>Protect Confidentiality:</strong> Do not disclose client's confidential information</li>
            <li><strong>Document Everything:</strong> Keep copies of termination agreement and all communications</li>
            <li><strong>No Negative Talk:</strong> Do not badmouth former client to others</li>
            <li><strong>Professional Transition:</strong> If appropriate, recommend other agents</li>
          </ol>
        </div>

        <h3>30.7 Legal Concepts Summary</h3>
        <div className="comparison-table">
          <table>
            <thead>
              <tr>
                <th>Termination Method</th>
                <th>Voluntary?</th>
                <th>Commission Rights?</th>
                <th>Key Points</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Performance</strong></td>
                <td>N/A</td>
                <td>✅ Yes - Fully Earned</td>
                <td>Best outcome - everyone satisfied</td>
              </tr>
              <tr>
                <td><strong>Expiration</strong></td>
                <td>N/A</td>
                <td>Depends on protection period</td>
                <td>Clean termination if no pending deals</td>
              </tr>
              <tr>
                <td><strong>Mutual Agreement</strong></td>
                <td>✅ Yes</td>
                <td>As agreed in writing</td>
                <td>Get written release!</td>
              </tr>
              <tr>
                <td><strong>Revocation by Principal</strong></td>
                <td>✅ Yes</td>
                <td>Maybe - if wrongful termination</td>
                <td>Power to fire vs. right to fire</td>
              </tr>
              <tr>
                <td><strong>Renunciation by Agent</strong></td>
                <td>✅ Yes</td>
                <td>❌ Forfeited if wrongful</td>
                <td>Never abandon client!</td>
              </tr>
              <tr>
                <td><strong>Death</strong></td>
                <td>❌ No</td>
                <td>❌ Not earned</td>
                <td>Automatic termination</td>
              </tr>
              <tr>
                <td><strong>Incapacity</strong></td>
                <td>❌ No</td>
                <td>❌ Not earned</td>
                <td>Automatic termination</td>
              </tr>
              <tr>
                <td><strong>Bankruptcy</strong></td>
                <td>❌ No</td>
                <td>File claim in bankruptcy</td>
                <td>Trustee controls assets</td>
              </tr>
              <tr>
                <td><strong>Destruction of Property</strong></td>
                <td>❌ No</td>
                <td>❌ Usually not earned</td>
                <td>Impossibility of performance</td>
              </tr>
              <tr>
                <td><strong>Change in Law</strong></td>
                <td>❌ No</td>
                <td>❌ Usually not earned</td>
                <td>Illegality terminates agency</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p className="highlight">
          <strong>Remember:</strong> Agency termination is a critical concept for the exam and real practice. Know the difference 
          between termination by acts of parties (voluntary) vs. operation of law (automatic). Understand that principals always 
          have the POWER to terminate but may not have the RIGHT without consequences. Most importantly, remember that 
          confidentiality obligations NEVER end - you must protect client's confidential information forever. When in doubt about 
          termination, get it in writing and consult your broker or attorney. A clean termination protects both parties and prevents 
          future disputes.
        </p>
      </>
    )
  };

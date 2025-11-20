import React from 'react';

export const section = {
    id: 'agent-authority',
    icon: '🎯',
    title: '9. Agent Authority Levels & Responsibilities to Principal',
    subtitle: 'Universal, general, and special agents - understanding scope of authority',
    body: (
      <>
        <h3>28.1 Understanding Agent Authority</h3>
        <p className="highlight">
          Not all agents have the same level of authority. Agency law recognizes three distinct levels of authority 
          based on the scope of what the agent is empowered to do for the principal (client).
        </p>

        <h3>28.2 Universal Agent</h3>
        <p>
          Empowered to do ANYTHING the principal (client) could do personally. Virtually UNLIMITED authority.
        </p>

        <h4>Characteristics of Universal Agent:</h4>
        <ul>
          <li><strong>Scope:</strong> Complete and total authority over principal's affairs</li>
          <li><strong>Powers:</strong> Can act on behalf of principal in ANY capacity</li>
          <li><strong>Duration:</strong> Typically long-term or indefinite</li>
          <li><strong>Control:</strong> Virtually unlimited - can make any decision principal could make</li>
          <li><strong>Responsibility:</strong> Tremendous fiduciary responsibility</li>
        </ul>

        <h4>Common Examples of Universal Agent:</h4>
        <div className="examples">
          <p><strong>Power of Attorney (POA):</strong></p>
          <ul>
            <li>General Power of Attorney grants universal agent status</li>
            <li>Agent can sign contracts, access bank accounts, sell property, make medical decisions</li>
            <li>Typically used when principal is incapacitated or unable to act personally</li>
            <li>Requires explicit written document granting broad powers</li>
          </ul>

          <p><strong>Court-Appointed Guardian:</strong></p>
          <ul>
            <li>Guardian appointed by court for incapacitated person</li>
            <li>Can make financial, medical, and personal decisions</li>
            <li>Acts as universal agent for the ward (person under guardianship)</li>
            <li>Court oversight ensures protection of ward's interests</li>
          </ul>
        </div>

        <h4>Universal Agent Powers:</h4>
        <ul>
          <li>✅ Buy, sell, or mortgage real estate</li>
          <li>✅ Access and manage all bank accounts</li>
          <li>✅ Sign contracts and legal documents</li>
          <li>✅ Make investment decisions</li>
          <li>✅ File taxes and manage financial affairs</li>
          <li>✅ Make healthcare decisions (if specified)</li>
          <li>✅ Hire and fire employees/agents</li>
          <li>✅ Essentially anything the principal could do themselves</li>
        </ul>

        <h4>Why Universal Agency is Rare:</h4>
        <div className="warning-box">
          <p><strong>⚠️ Extreme Trust Required:</strong></p>
          <ul>
            <li>Grants enormous power - potential for abuse</li>
            <li>Principal completely vulnerable to agent's decisions</li>
            <li>Usually reserved for closest family members or attorneys</li>
            <li>Courts carefully scrutinize universal agency relationships</li>
            <li>Only used when absolutely necessary (incapacity, illness, military deployment)</li>
          </ul>
        </div>

        <h3>28.3 General Agent</h3>
        <p>
          Authorized to perform ANY and ALL acts associated with a particular LIMITED activity. Broad authority 
          within a specific scope.
        </p>

        <h4>Characteristics of General Agent:</h4>
        <ul>
          <li><strong>Scope:</strong> Broad authority within a defined area of responsibility</li>
          <li><strong>Powers:</strong> Can handle all matters related to specific activity</li>
          <li><strong>Duration:</strong> Typically ongoing/continuous relationship</li>
          <li><strong>Control:</strong> Wide discretion within their area of responsibility</li>
          <li><strong>Limits:</strong> Authority limited to the specific activity or property</li>
        </ul>

        <h4>Classic Example: Property Manager</h4>
        <div className="property-manager-example">
          <p><strong>Property Manager as General Agent of an Apartment Building:</strong></p>
          
          <h5>What Property Manager CAN Do (Within Scope):</h5>
          <ul>
            <li>✅ Sign lease agreements with tenants</li>
            <li>✅ Collect rent payments</li>
            <li>✅ Hire contractors for repairs and maintenance</li>
            <li>✅ Evict tenants for non-payment or lease violations</li>
            <li>✅ Advertise vacancies and show units</li>
            <li>✅ Handle tenant complaints and maintenance requests</li>
            <li>✅ Enforce lease terms and building rules</li>
            <li>✅ Purchase supplies and pay vendors</li>
            <li>✅ Make day-to-day operational decisions</li>
          </ul>

          <h5>What Property Manager CANNOT Do (Outside Scope):</h5>
          <ul>
            <li>❌ Sell the apartment building (outside their authority)</li>
            <li>❌ Mortgage the property</li>
            <li>❌ Make major capital improvements without owner approval</li>
            <li>❌ Change the fundamental use of the property</li>
            <li>❌ Act on owner's behalf in unrelated business matters</li>
          </ul>
        </div>

        <h4>Other Examples of General Agents:</h4>
        <ul>
          <li><strong>Branch Manager:</strong> Manages all operations of one location but not entire company</li>
          <li><strong>Business Manager:</strong> Handles all business affairs of entertainer/athlete within that scope</li>
          <li><strong>Estate Executor:</strong> Manages all affairs of deceased's estate (within estate matters only)</li>
          <li><strong>Construction Manager:</strong> Oversees entire construction project with full authority for that project</li>
        </ul>

        <h4>Key Distinction:</h4>
        <div className="key-distinction">
          <p><strong>General Agent vs Universal Agent:</strong></p>
          <ul>
            <li><strong>Universal:</strong> Can do ANYTHING principal could do (no subject matter limitation)</li>
            <li><strong>General:</strong> Can do ANYTHING related to SPECIFIC activity (subject matter limited)</li>
          </ul>
          <p><strong>Example:</strong> Property manager (general agent) can sign leases for the building, but cannot sell 
          the owner's car or access their personal bank accounts - authority limited to property management only.</p>
        </div>

        <h3>28.4 Special Agent</h3>
        <p>
          Has EXTREMELY LIMITED authority and is usually authorized to represent the principal in only ONE SPECIFIC 
          transaction or piece of business.
        </p>

        <h4>Characteristics of Special Agent:</h4>
        <ul>
          <li><strong>Scope:</strong> Single transaction or very specific limited purpose</li>
          <li><strong>Powers:</strong> Only what's specifically authorized in writing</li>
          <li><strong>Duration:</strong> Usually short-term, ends when transaction completes</li>
          <li><strong>Control:</strong> Very limited discretion</li>
          <li><strong>Limits:</strong> Cannot exceed specifically granted authority</li>
        </ul>

        <h4>REAL ESTATE BROKERS ARE SPECIAL AGENTS</h4>
        <div className="critical-point">
          <p><strong>🏠 This is YOU as a Real Estate Agent!</strong></p>
          <p>When you are hired to represent a buyer or seller, you are a <strong>SPECIAL AGENT</strong> with 
          very limited authority.</p>
        </div>

        <h4>Real Estate Broker as Special Agent:</h4>
        <div className="broker-authority">
          <h5>What Real Estate Brokers ARE Authorized to Do:</h5>
          <ul>
            <li>✅ Market and advertise the property (if listing agent)</li>
            <li>✅ Show the property to prospective buyers</li>
            <li>✅ Find suitable properties (if buyer's agent)</li>
            <li>✅ Present offers and counteroffers between parties</li>
            <li>✅ Negotiate terms on behalf of client (within parameters)</li>
            <li>✅ Provide market data and comparative analysis</li>
            <li>✅ Coordinate inspections, appraisals, and closing</li>
            <li>✅ Facilitate the transaction to closing</li>
            <li>✅ Provide professional real estate advice</li>
          </ul>

          <h5>What Real Estate Brokers are NOT Authorized to Do:</h5>
          <ul>
            <li>❌ <strong>Sign contracts on behalf of client</strong> (client must sign themselves)</li>
            <li>❌ <strong>Accept or reject offers</strong> (only client can accept/reject)</li>
            <li>❌ <strong>Change material terms</strong> without client's specific approval</li>
            <li>❌ <strong>Bind client to any agreement</strong> without client's signature</li>
            <li>❌ <strong>Access client's bank accounts</strong> or personal funds</li>
            <li>❌ <strong>Make decisions</strong> on behalf of client (only present options)</li>
            <li>❌ <strong>Practice law</strong> (review contracts, give legal advice)</li>
            <li>❌ <strong>Act as attorney-in-fact</strong> or sign legal documents for client</li>
          </ul>
        </div>

        <h4>Why Real Estate Agents are Special Agents:</h4>
        <ul>
          <li><strong>Single Transaction:</strong> Authority limited to buying/selling specific property</li>
          <li><strong>Limited Duration:</strong> Authority ends when transaction closes (or listing expires)</li>
          <li><strong>No Signature Authority:</strong> Cannot bind client - client must sign all documents</li>
          <li><strong>Specific Purpose:</strong> Authority limited to facilitating real estate transaction</li>
          <li><strong>Cannot Exceed Authority:</strong> Must get client approval for material decisions</li>
        </ul>

        <h4>Other Examples of Special Agents:</h4>
        <ul>
          <li><strong>Auction Agent:</strong> Authorized to sell one specific item or collection at auction</li>
          <li><strong>Insurance Agent:</strong> Authorized to write specific policy for client</li>
          <li><strong>Closing Attorney:</strong> Authorized to handle specific real estate closing only</li>
          <li><strong>Stock Broker (Single Trade):</strong> Authorized to execute one specific stock transaction</li>
          <li><strong>Travel Agent:</strong> Authorized to book specific trip for client</li>
        </ul>

        <h3>28.5 Comparing the Three Levels</h3>
        <div className="comparison-table">
          <table>
            <thead>
              <tr>
                <th>Agent Type</th>
                <th>Scope of Authority</th>
                <th>Duration</th>
                <th>Common Examples</th>
                <th>Can Sign for Principal?</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Universal Agent</strong></td>
                <td>Virtually UNLIMITED - anything principal could do</td>
                <td>Long-term / Indefinite</td>
                <td>Power of Attorney, Court-appointed Guardian</td>
                <td>✅ Yes</td>
              </tr>
              <tr>
                <td><strong>General Agent</strong></td>
                <td>ALL acts within SPECIFIC activity</td>
                <td>Ongoing / Continuous</td>
                <td>Property Manager, Branch Manager</td>
                <td>✅ Yes (within scope)</td>
              </tr>
              <tr>
                <td><strong>Special Agent</strong></td>
                <td>SINGLE transaction or very limited purpose</td>
                <td>Short-term / Ends at completion</td>
                <td><strong>Real Estate Broker</strong>, Auctioneer</td>
                <td>❌ No</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h3>28.6 Why This Matters for Real Estate Agents</h3>
        
        <h4>Understanding Your Limited Authority Protects You:</h4>
        <div className="protection-points">
          <ul>
            <li><strong>No Signature Authority:</strong> You cannot sign contracts for clients - they must sign themselves</li>
            <li><strong>Cannot Bind Client:</strong> You cannot accept offers or agree to terms - only client can</li>
            <li><strong>Must Get Approval:</strong> Material changes require client's specific approval</li>
            <li><strong>Stay in Your Lane:</strong> Do not exceed your special agent authority</li>
            <li><strong>Document Everything:</strong> Get client approval in writing for decisions</li>
          </ul>
        </div>

        <h4>Common Mistakes (Exceeding Special Agent Authority):</h4>
        <div className="common-mistakes">
          <ul>
            <li>❌ Agent accepts offer on behalf of seller without seller's signature</li>
            <li>❌ Agent agrees to change material terms without client approval</li>
            <li>❌ Agent signs documents "on behalf of" client</li>
            <li>❌ Agent makes binding commitments client didn't authorize</li>
            <li>❌ Agent tries to act as power of attorney without proper documentation</li>
          </ul>
        </div>

        <h4>What to Say to Clients:</h4>
        <div className="client-language">
          <p><strong>✅ Correct:</strong></p>
          <ul>
            <li>"I'll present this offer to you and explain the terms, but you'll need to decide whether to accept, reject, or counter."</li>
            <li>"I can negotiate on your behalf within the parameters we discussed, but any agreement requires your signature."</li>
            <li>"I'm here to facilitate and advise, but all final decisions are yours to make."</li>
            <li>"You'll need to sign all contracts and documents - I cannot sign on your behalf."</li>
          </ul>

          <p><strong>❌ Incorrect:</strong></p>
          <ul>
            <li>"I'll accept this offer for you." (NO - only client can accept)</li>
            <li>"Don't worry, I'll sign the documents for you." (NO - unauthorized)</li>
            <li>"I'm agreeing to these terms on your behalf." (NO - exceeds authority)</li>
            <li>"I'll handle everything - you don't need to be involved." (NO - client must decide)</li>
          </ul>
        </div>

        <h3>28.7 Special Circumstances: When Authority Level Matters</h3>
        
        <h4>Scenario 1: Client Out of State</h4>
        <div className="scenario">
          <p><strong>Problem:</strong> Your seller client is overseas and cannot sign closing documents in person.</p>
          <p><strong>Solution:</strong> Client must either:</p>
          <ul>
            <li>Sign documents electronically (if allowed)</li>
            <li>Grant someone Power of Attorney (creates universal or general agent)</li>
            <li>Work with closing attorney for remote signing arrangements</li>
          </ul>
          <p><strong>You CANNOT:</strong> Sign on client's behalf as special agent</p>
        </div>

        <h4>Scenario 2: Emergency Repairs</h4>
        <div className="scenario">
          <p><strong>Problem:</strong> Property manager (general agent) discovers major plumbing leak requiring immediate $10k repair.</p>
          <p><strong>General Agent Authority:</strong> Can authorize emergency repairs to protect property (within scope of property management)</p>
          <p><strong>Special Agent (Broker):</strong> Would need to contact owner for approval first (outside scope)</p>
        </div>

        <h4>Scenario 3: Accepting an Offer</h4>
        <div className="scenario">
          <p><strong>Problem:</strong> Buyer submits excellent offer. Seller is unreachable for 24 hours.</p>
          <p><strong>As Special Agent:</strong> You CANNOT accept the offer on seller's behalf - must wait for seller's decision and signature</p>
          <p><strong>If Seller had granted you POA:</strong> Could potentially accept (but not recommended - creates conflicts)</p>
        </div>

        <h3>28.8 Key Takeaways for Real Estate Professionals</h3>
        <div className="key-takeaways">
          <ul>
            <li>✅ <strong>Know Your Authority Level:</strong> You are a SPECIAL AGENT with limited authority</li>
            <li>✅ <strong>Cannot Sign for Clients:</strong> All contracts require client's personal signature</li>
            <li>✅ <strong>Cannot Accept/Reject:</strong> Only client can accept or reject offers</li>
            <li>✅ <strong>Facilitate, Don't Decide:</strong> Your role is to facilitate and advise, not make decisions</li>
            <li>✅ <strong>Get Client Approval:</strong> Material changes require client's specific approval</li>
            <li>✅ <strong>Document Authority:</strong> Your authority comes from listing/buyer agreement (special agent)</li>
            <li>✅ <strong>Stay in Your Lane:</strong> Don't try to act as universal or general agent</li>
            <li>✅ <strong>Respect Limitations:</strong> Your limitations protect both you and your client</li>
          </ul>
        </div>

        <p className="highlight">
          <strong>Remember:</strong> As a real estate broker, you are a SPECIAL AGENT with authority limited to 
          facilitating the specific real estate transaction. You CANNOT sign contracts on behalf of clients, accept or 
          reject offers, or bind clients to agreements. Your role is to advise, facilitate, and guide - not to make 
          decisions for your clients. Understanding and respecting these limitations protects you from liability and 
          ensures you stay within the bounds of your authority. Always get client approval for material decisions and 
          ensure all documents are signed by the client personally!
        </p>
      </>
    )
  };

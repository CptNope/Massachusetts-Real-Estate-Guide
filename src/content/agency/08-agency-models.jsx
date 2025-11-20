import React from 'react';

export const section = {
    id: 'agency-models',
    icon: '👥',
    title: '8. Designated vs Non-Designated Agency',
    subtitle: 'Business models, dual agency implications, and office protocols',
    body: (
      <>
        <h3>26.1 Understanding Agency Business Models</h3>
        <p className="highlight">
          Massachusetts law allows brokerages to operate under two different agency models. Understanding 
          the differences is critical for agents, as it affects dual agency situations, confidentiality, 
          and office procedures.
        </p>

        <h3>26.2 Non-Designated Agency (Traditional Model)</h3>
        <p>
          Also known as "Traditional Agency" - the original and still common model where all agents in a 
          brokerage share agency relationships.
        </p>

        <h4>How It Works:</h4>
        <ul>
          <li><strong>Firm-Wide Agency:</strong> ALL agents in the firm have the SAME agency relationship with the consumer being represented</li>
          <li><strong>If ONE agent is hired to represent a client, then ALL agents in the firm represent that client</strong></li>
          <li><strong>"Guilty by Association":</strong> Every agent in the brokerage owes fiduciary duties to every client</li>
          <li><strong>Automatic Dual Agency:</strong> If any agent in the firm represents the buyer AND any other agent represents the seller in the same transaction, the ENTIRE FIRM is in dual agency</li>
        </ul>

        <h4>Critical Implications:</h4>
        <div className="warning-box">
          <p><strong>⚠️ Undisclosed Dual Agency Risk:</strong> Agents must be VERY careful not to accidentally create undisclosed dual agency</p>
          <p><strong>Example:</strong> Agent A lists a property. Agent B (same firm) shows it to their buyer. This is automatic dual agency for the entire firm - MUST be disclosed and consented to in writing.</p>
        </div>

        <h4>Office Protocols - Non-Designated Agency:</h4>
        <div className="protocols-allowed">
          <h5>✅ What You CAN Do:</h5>
          <ul>
            <li>✅ Share information in office meetings about clients</li>
            <li>✅ Leave files accessible in the office</li>
            <li>✅ Discuss strategy with colleagues about shared clients</li>
            <li>✅ Everything is confidentially kept WITHIN the office</li>
            <li>✅ Collaborate freely since all agents represent all clients</li>
            <li>✅ Cover for each other on client matters</li>
          </ul>
        </div>

        <h4>Dual Agency in Non-Designated Firms:</h4>
        <ul>
          <li><strong>Disclosure Required:</strong> Must disclose to BOTH parties in writing</li>
          <li><strong>Informed Consent:</strong> Both buyer and seller must consent</li>
          <li><strong>Limited Representation:</strong> Agents become neutral facilitators, cannot advocate for either side</li>
          <li><strong>Confidentiality Maintained:</strong> Each party's confidential info stays confidential</li>
          <li><strong>Document Everything:</strong> Written disclosure and consent forms required</li>
        </ul>

        <h3>26.3 Designated Agency Model</h3>
        <p>
          A newer model designed to avoid firm-wide dual agency by appointing specific agents to represent 
          specific clients.
        </p>

        <h4>How It Works:</h4>
        <ul>
          <li><strong>Broker/Owner Becomes Dual Agent:</strong> The Principal Broker becomes the dual agent (serves both clients)</li>
          <li><strong>Appointed Agents:</strong> Broker Principal appoints 1 agent to represent a SINGLE client</li>
          <li><strong>Designated Buyer's Agent:</strong> One agent is designated to represent ONLY the buyer</li>
          <li><strong>Designated Seller's Agent:</strong> Another agent is designated to represent ONLY the seller</li>
          <li><strong>No Dual Agency for Agents:</strong> Each designated agent does NOT become a dual agent themselves</li>
          <li><strong>Full Representation:</strong> Each designated agent can fully advocate for their designated client</li>
        </ul>

        <h4>Critical Distinction:</h4>
        <div className="key-difference">
          <p><strong>Appointing Broker = Dual Agent</strong> (represents both clients through the agency)</p>
          <p><strong>Designated Agents = NOT Dual Agents</strong> (each represents only their designated client)</p>
        </div>

        <h4>Who Can Be a Designated Agent:</h4>
        <ul>
          <li><strong>Listing Agent:</strong> CAN be a disclosed dual agent with both clients' consent (if handling both sides)</li>
          <li><strong>Separate Designated Agents:</strong> More common - different agents for buyer and seller</li>
          <li><strong>Broker Discretion:</strong> Principal Broker makes all designation decisions</li>
        </ul>

        <h4>Office Protocols - Designated Agency:</h4>
        <div className="protocols-restricted">
          <h5>❌ What You CANNOT Do:</h5>
          <ul>
            <li>❌ <strong>CANNOT share information</strong> between designated agents about their respective clients</li>
            <li>❌ <strong>CANNOT leave files in the office</strong> where other designated agents can access them</li>
            <li>❌ <strong>CANNOT discuss client details</strong> in office meetings if other designated agents are present</li>
            <li>❌ <strong>CANNOT collaborate</strong> on the transaction with the other designated agent</li>
            <li>❌ <strong>Must maintain strict firewall</strong> between the two designated agents</li>
            <li>❌ <strong>Separate file systems</strong> required for each designated agent's clients</li>
          </ul>
        </div>

        <h4>Information Firewall Requirements:</h4>
        <ul>
          <li>Designated Buyer's Agent cannot share buyer's confidential info (max price, motivation, etc.) with Designated Seller's Agent</li>
          <li>Designated Seller's Agent cannot share seller's confidential info (bottom line, motivation, etc.) with Designated Buyer's Agent</li>
          <li>Only the Principal Broker (dual agent) can access both sides' information</li>
          <li>Broker must maintain neutrality and cannot favor either side</li>
          <li>All communications should go through proper channels</li>
        </ul>

        <h3>26.4 Comparing the Two Models</h3>
        <div className="comparison-table">
          <table>
            <thead>
              <tr>
                <th>Feature</th>
                <th>Non-Designated (Traditional)</th>
                <th>Designated Agency</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Agency Relationship</strong></td>
                <td>All agents represent all clients</td>
                <td>Specific agents represent specific clients</td>
              </tr>
              <tr>
                <td><strong>Dual Agency</strong></td>
                <td>Entire firm becomes dual agent</td>
                <td>Only Principal Broker is dual agent</td>
              </tr>
              <tr>
                <td><strong>Agent Status</strong></td>
                <td>All agents are dual agents in in-house transaction</td>
                <td>Designated agents are NOT dual agents</td>
              </tr>
              <tr>
                <td><strong>Advocacy</strong></td>
                <td>Limited - must remain neutral</td>
                <td>Full - each agent advocates for their client</td>
              </tr>
              <tr>
                <td><strong>Office Sharing</strong></td>
                <td>✅ Can share files and info in office</td>
                <td>❌ Cannot share - strict firewall</td>
              </tr>
              <tr>
                <td><strong>Collaboration</strong></td>
                <td>✅ Agents can collaborate on shared clients</td>
                <td>❌ Designated agents cannot collaborate</td>
              </tr>
              <tr>
                <td><strong>Disclosure Requirement</strong></td>
                <td>Must disclose dual agency to both parties</td>
                <td>Must disclose designation and broker's dual agency</td>
              </tr>
              <tr>
                <td><strong>Client Protection</strong></td>
                <td>Confidentiality maintained, limited advocacy</td>
                <td>Full advocacy, strict information separation</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h3>26.5 Advantages & Disadvantages</h3>
        
        <h4>Non-Designated Agency (Traditional):</h4>
        <div className="pros-cons">
          <h5>Advantages:</h5>
          <ul>
            <li>✅ Simpler office operations - open collaboration</li>
            <li>✅ Easy coverage when agents are unavailable</li>
            <li>✅ Team approach to client service</li>
            <li>✅ Shared knowledge benefits all clients</li>
            <li>✅ Less complex compliance requirements</li>
          </ul>

          <h5>Disadvantages:</h5>
          <ul>
            <li>❌ Automatic dual agency in in-house transactions</li>
            <li>❌ Limited advocacy when dual agency occurs</li>
            <li>❌ Higher risk of undisclosed dual agency violations</li>
            <li>❌ Clients may feel less protected</li>
            <li>❌ "Guilty by association" can be confusing for clients</li>
          </ul>
        </div>

        <h4>Designated Agency:</h4>
        <div className="pros-cons">
          <h5>Advantages:</h5>
          <ul>
            <li>✅ Full advocacy for clients - each agent can fight for their client</li>
            <li>✅ Designated agents avoid being dual agents</li>
            <li>✅ Better client protection through information firewall</li>
            <li>✅ Clearer agency relationships</li>
            <li>✅ Both buyer and seller get full representation</li>
            <li>✅ Keeps transaction in-house while maintaining representation quality</li>
          </ul>

          <h5>Disadvantages:</h5>
          <ul>
            <li>❌ Strict information firewall requirements</li>
            <li>❌ Cannot share files or collaborate in office</li>
            <li>❌ More complex compliance and documentation</li>
            <li>❌ Difficult to cover for designated agents</li>
            <li>❌ Requires careful office procedures and training</li>
            <li>❌ Principal Broker bears dual agency burden</li>
          </ul>
        </div>

        <h3>26.6 Which Model Should Your Brokerage Use?</h3>
        <p>
          This is a business decision made by the Principal Broker. Factors to consider:
        </p>

        <h4>Non-Designated Works Best For:</h4>
        <ul>
          <li>Small brokerages with few in-house transactions</li>
          <li>Teams that work closely together</li>
          <li>Firms that want simple office operations</li>
          <li>Brokerages willing to refer out in-house transactions to avoid dual agency</li>
        </ul>

        <h4>Designated Works Best For:</h4>
        <ul>
          <li>Larger brokerages with frequent in-house transactions</li>
          <li>Firms that want to keep both sides of transactions</li>
          <li>Brokerages prioritizing client advocacy over office simplicity</li>
          <li>Offices with systems for maintaining information firewalls</li>
        </ul>

        <h3>26.7 Best Practices for Agents</h3>
        
        <h4>If Your Firm Uses Non-Designated Agency:</h4>
        <ul>
          <li>✅ Immediately recognize in-house transactions as dual agency</li>
          <li>✅ Disclose dual agency to both parties IN WRITING before proceeding</li>
          <li>✅ Get informed consent from both buyer and seller</li>
          <li>✅ Maintain confidentiality for both parties' sensitive information</li>
          <li>✅ Stay neutral - do not advocate for either side</li>
          <li>✅ Document everything - disclosure forms, consent forms</li>
          <li>✅ Consider referring out one side if dual agency feels uncomfortable</li>
        </ul>

        <h4>If Your Firm Uses Designated Agency:</h4>
        <ul>
          <li>✅ Wait for Principal Broker to make designation</li>
          <li>✅ Understand who you represent (buyer OR seller, not both)</li>
          <li>✅ Do NOT share your client's confidential info with other designated agent</li>
          <li>✅ Keep files secure and separate from other designated agent's access</li>
          <li>✅ Advocate fully for YOUR designated client</li>
          <li>✅ Direct all communications through proper channels</li>
          <li>✅ Respect the information firewall - it protects everyone</li>
        </ul>

        <h3>26.8 Common Mistakes to Avoid</h3>
        <div className="common-mistakes">
          <h4>Non-Designated Agency Mistakes:</h4>
          <ul>
            <li>❌ Failing to recognize in-house transaction as dual agency</li>
            <li>❌ Not disclosing dual agency in writing</li>
            <li>❌ Proceeding without both parties' consent</li>
            <li>❌ Advocating for one party over the other</li>
            <li>❌ Sharing one party's confidential info with the other</li>
            <li>❌ Assuming "everyone knows" = proper disclosure (it doesn't!)</li>
          </ul>

          <h4>Designated Agency Mistakes:</h4>
          <ul>
            <li>❌ Sharing files or client info with other designated agent</li>
            <li>❌ Discussing your client's strategy in office meetings</li>
            <li>❌ Leaving confidential documents where others can see them</li>
            <li>❌ Thinking you can "informally collaborate" with other side</li>
            <li>❌ Failing to maintain strict information firewall</li>
            <li>❌ Acting as dual agent when you're only designated to one client</li>
          </ul>
        </div>

        <h3>26.9 Disclosure Requirements</h3>
        
        <h4>Both Models Require:</h4>
        <ul>
          <li><strong>Written Disclosure:</strong> Agency relationship must be disclosed in writing</li>
          <li><strong>Timing:</strong> At first personal meeting with consumer</li>
          <li><strong>Form:</strong> Massachusetts Mandatory Agency Disclosure Form</li>
          <li><strong>Dual Agency:</strong> Additional written disclosure and consent if dual agency exists</li>
          <li><strong>Designated Agency:</strong> Separate disclosure explaining designation process</li>
        </ul>

        <h4>Documentation Checklist:</h4>
        <div className="checklist">
          <ul>
            <li>☐ Agency disclosure form signed at first meeting</li>
            <li>☐ Listing agreement or buyer agreement specifying agency model</li>
            <li>☐ Dual agency disclosure (if applicable)</li>
            <li>☐ Dual agency consent from both parties (if applicable)</li>
            <li>☐ Designated agency appointment letter (if applicable)</li>
            <li>☐ Information firewall policy acknowledgment (designated agency)</li>
            <li>☐ All disclosures in client file for Board inspection</li>
          </ul>
        </div>

        <p className="highlight">
          <strong>Remember:</strong> Your brokerage's agency model affects how you operate daily. Know which model 
          your firm uses and follow the protocols strictly. Dual agency violations are serious and can result in 
          license suspension, fines, and lawsuits. When in doubt, disclose more rather than less, document everything, 
          and consult your Principal Broker. The agency relationship is the foundation of your fiduciary duties - 
          get it right!
        </p>
      </>
    )
  };

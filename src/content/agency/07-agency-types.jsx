import React from 'react';

export const section = {
    id: 'agency-types',
    icon: '🤝',
    title: '7. Types of Agency Relationships',
    subtitle: 'Express, implied, seller\'s, buyer\'s, customer, facilitator, dual agency, and subagent',
    body: (
      <>
        <h3>27.1 Understanding Agency Types</h3>
        <p className="highlight">
          Massachusetts recognizes multiple types of agency relationships. Understanding each type is critical 
          for proper disclosure, avoiding liability, and ensuring compliance with state law.
        </p>

        <h3>27.2 Express Agency</h3>
        <p>
          A written agreement establishing the intentions of the parties.
        </p>

        <h4>Key Characteristics:</h4>
        <ul>
          <li><strong>Written Agreement:</strong> Formal contract creating the agency relationship</li>
          <li><strong>Clear Terms:</strong> Duties, compensation, and duration are specified</li>
          <li><strong>Most Common Forms:</strong>
            <ul>
              <li><strong>Listing Agreement:</strong> Creates seller's agency</li>
              <li><strong>Exclusive Buyer Agency Agreement:</strong> Creates buyer's agency</li>
            </ul>
          </li>
          <li><strong>Legal Protection:</strong> Written agreement protects both parties</li>
          <li><strong>Required in MA:</strong> Buyer-broker agreements mandatory before showing property (2025)</li>
        </ul>

        <h4>Benefits of Express Agency:</h4>
        <ul>
          <li>✅ Clear expectations and responsibilities</li>
          <li>✅ Documented compensation agreements</li>
          <li>✅ Legal enforceability</li>
          <li>✅ Proper disclosure to all parties</li>
          <li>✅ Protection from misunderstandings</li>
        </ul>

        <h4>Types of Listing Agreements</h4>
        <p>
          When representing a seller, several types of listing agreements can be used. Understanding each type is critical 
          for proper client service and legal compliance.
        </p>

        <div className="listing-types">
          <div className="listing-type">
            <h5>1. Exclusive Right to Sell (Named Exclusions)</h5>
            <p className="highlight">
              <strong>✅ MOST COMMONLY USED IN TODAY'S MARKET</strong>
            </p>
            <p>
              <strong>Definition:</strong> One broker is hired to represent the seller. Regardless of who sells the home 
              (listing broker, cooperating broker, or even the seller themselves), a commission is due to the listing brokerage.
            </p>
            <ul>
              <li><strong>Exclusive Rights:</strong> Listing broker earns commission NO MATTER WHO finds the buyer</li>
              <li><strong>Seller Protection:</strong> Broker has strong incentive to market aggressively</li>
              <li><strong>Cooperating Brokers Permitted:</strong> Listing broker can work with other brokerages</li>
              <li><strong>Named Exclusions:</strong> Seller can exclude specific known potential buyers from commission obligation</li>
              <li><strong>Industry Standard:</strong> This is the default and expected listing type</li>
              <li><strong>MLS Inclusion:</strong> Property can be listed on MLS with cooperation offered</li>
            </ul>
            <div className="key-point">
              <p><strong>Key Point:</strong> Even if seller finds their own buyer, commission is still owed. This motivates 
              maximum broker effort and cooperation with other agents.</p>
            </div>
          </div>

          <div className="listing-type">
            <h5>2. Exclusive Agency</h5>
            <p className="warning">
              <strong>⚠️ RARELY USED</strong>
            </p>
            <p>
              <strong>Definition:</strong> Only ONE office/brokerage is hired to represent the seller. No cooperating with 
              other brokerages is permitted. If the seller sells the house themselves, NO commission is due.
            </p>
            <ul>
              <li><strong>One Office Only:</strong> Listing brokerage cannot cooperate with outside agents</li>
              <li><strong>Seller Can Sell:</strong> If seller finds their own buyer, no commission owed</li>
              <li><strong>Limited Exposure:</strong> Property cannot be shown by other brokerages</li>
              <li><strong>Reduced Marketing:</strong> Only listing office markets the property</li>
              <li><strong>Why Rarely Used:</strong> Limits exposure and reduces likelihood of sale</li>
            </ul>
            <div className="warning-box">
              <p><strong>Problem:</strong> Severely limits property exposure. Sellers miss out on buyers represented by 
              other agents. Most brokers refuse this type of listing.</p>
            </div>
          </div>

          <div className="listing-type">
            <h5>3. Open Listing</h5>
            <p className="warning">
              <strong>❌ NEVER USED IN PROFESSIONAL PRACTICE</strong>
            </p>
            <p>
              <strong>Definition:</strong> Seller allows SEVERAL agencies to list the home for sale. Seller only agrees 
              to pay commission to the ONE who actually sells it. Seller retains the right to sell themselves without 
              paying any commission.
            </p>
            <ul>
              <li><strong>Multiple Listings:</strong> Property listed with multiple brokerages simultaneously</li>
              <li><strong>Commission to Procuring Broker Only:</strong> Only the broker who brings the buyer gets paid</li>
              <li><strong>Seller Can Sell:</strong> No commission if seller finds buyer</li>
              <li><strong>No Exclusivity:</strong> No broker has exclusive rights</li>
              <li><strong>Why Never Used:</strong> No broker will invest time/money with no guarantee of commission</li>
              <li><strong>Unethical Competition:</strong> Creates race between brokers instead of cooperation</li>
            </ul>
            <div className="warning-box">
              <p><strong>Reality:</strong> Professional brokers refuse open listings. No MLS exposure. No marketing 
              budget investment. Property sits unsold. This benefits no one.</p>
            </div>
          </div>

          <div className="listing-type">
            <h5>4. Net Listing</h5>
            <p className="danger">
              <strong>🚫 ILLEGAL IN MASSACHUSETTS (over $300,000)</strong>
            </p>
            <p>
              <strong>Definition:</strong> Seller specifies a minimum "net" amount they want to receive. Agent/brokerage 
              keeps EVERYTHING above that amount as their commission. Commission is unlimited.
            </p>
            <ul>
              <li><strong>Fixed Seller Amount:</strong> Seller receives specified net amount</li>
              <li><strong>Unlimited Broker Commission:</strong> Broker keeps whatever they can get above the net</li>
              <li><strong>Conflict of Interest:</strong> Broker incentivized to withhold true market value from seller</li>
              <li><strong>Potential for Fraud:</strong> Seller may receive far less than property's worth</li>
              <li><strong>Legal Prohibition:</strong> Banned over $300,000 in Massachusetts</li>
            </ul>
            <div className="danger-box">
              <p><strong>⚠️ LICENSE VIOLATION:</strong> Using net listings over $300,000 can result in license suspension 
              or revocation. This is considered a conflict of interest and potential fraud.</p>
              <p><strong>Example of Problem:</strong> Seller wants net $400k. Property worth $500k. Agent sells for $480k, 
              keeps $80k commission (16%!). Seller never knows they could have gotten $500k.</p>
            </div>
            <div className="best-practice">
              <p><strong>BEST PRACTICE:</strong> Never use net listings. Use standard percentage-based exclusive right 
              to sell agreements. Provide accurate CMA showing true market value. Seller deserves to know what their 
              property is worth and what they'll net AFTER standard commission.</p>
            </div>
          </div>

          <div className="listing-type">
            <h5>5. Entry Only (Flat Fee MLS)</h5>
            <p>
              <strong>Definition:</strong> Seller pays a flat fee for LIMITED services - typically just posting the listing 
              in the MLS. No OLDCAR fiduciary duties are required from the broker.
            </p>
            <ul>
              <li><strong>Flat Fee:</strong> One-time payment (not percentage commission)</li>
              <li><strong>MLS Posting Only:</strong> Property listed in Multiple Listing Service</li>
              <li><strong>No Agent Services:</strong> No showings, no negotiations, no advice</li>
              <li><strong>No Fiduciary Duties:</strong> Broker is not acting as traditional listing agent</li>
              <li><strong>Seller Handles Rest:</strong> Seller manages showings, negotiations, paperwork</li>
              <li><strong>Limited Brokerage Service:</strong> Brokerage provides minimal support</li>
            </ul>
            <div className="info-box">
              <p><strong>Common Use:</strong> Sellers trying to save on commission but still get MLS exposure. Works for 
              very experienced sellers or those willing to handle all buyer inquiries and negotiations themselves.</p>
              <p><strong>Typical Fee:</strong> $300-$1,000 flat fee for MLS posting. Seller may still offer buyer agent 
              commission to attract buyers with representation.</p>
            </div>
          </div>
        </div>

        <h4>📋 Important Disclosure Requirement</h4>
        <div className="warning-box">
          <p className="highlight">
            <strong>⚠️ CRITICAL:</strong> If you don't give the seller a copy of the signed listing agreement, 
            it's considered UNENFORCEABLE.
          </p>
          <ul>
            <li><strong>Requirement:</strong> Seller MUST receive a copy when agreement is executed</li>
            <li><strong>Timing:</strong> Provide immediately upon signing</li>
            <li><strong>Consequence of Non-Compliance:</strong> Listing agreement cannot be legally enforced</li>
            <li><strong>Board Violation:</strong> Failure to provide copies is a licensing violation</li>
            <li><strong>Best Practice:</strong> Have seller sign acknowledgment of receipt</li>
          </ul>
        </div>

        <h4>Comparison Table: Listing Agreement Types</h4>
        <div className="comparison-table">
          <table>
            <thead>
              <tr>
                <th>Type</th>
                <th>Who Gets Paid?</th>
                <th>Seller Can Sell?</th>
                <th>Cooperation Allowed?</th>
                <th>Usage</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Exclusive Right to Sell</strong></td>
                <td>Listing broker ALWAYS</td>
                <td>❌ No (commission still owed)</td>
                <td>✅ Yes</td>
                <td>✅ Most common</td>
              </tr>
              <tr>
                <td><strong>Exclusive Agency</strong></td>
                <td>Listing broker if they sell</td>
                <td>✅ Yes (no commission)</td>
                <td>❌ No</td>
                <td>⚠️ Rarely used</td>
              </tr>
              <tr>
                <td><strong>Open Listing</strong></td>
                <td>Broker who procures buyer</td>
                <td>✅ Yes (no commission)</td>
                <td>⚠️ Yes (competing)</td>
                <td>❌ Never used</td>
              </tr>
              <tr className="danger-row">
                <td><strong>Net Listing</strong></td>
                <td>Broker (unlimited amount)</td>
                <td>N/A</td>
                <td>N/A</td>
                <td>🚫 ILLEGAL (over $300k)</td>
              </tr>
              <tr>
                <td><strong>Entry Only</strong></td>
                <td>Flat fee to broker</td>
                <td>✅ Yes (seller manages)</td>
                <td>✅ Buyer agents welcome</td>
                <td>⚠️ Limited use</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h3>27.3 Implied Agency</h3>
        <p>
          Agency created by the parties' demonstrated acts or conduct, even though no formal written agency 
          agreement exists.
        </p>

        <h4>How It Happens:</h4>
        <div className="warning-box">
          <p><strong>⚠️ DANGER ZONE:</strong> This is how agents accidentally create agency relationships without intending to!</p>
          <p><strong>Example:</strong> Buyer walks into real estate office requesting to see a home listed by another company. 
          Agent sets up appointment and shows property without giving Agency Disclosure. Buyer assumes agent is working 
          for them - IMPLIED AGENCY created by agent's conduct.</p>
        </div>

        <h4>Common Implied Agency Scenarios:</h4>
        <ul>
          <li>Agent provides extensive services without written agreement</li>
          <li>Agent acts as though representing someone (advice, advocacy, negotiations)</li>
          <li>Party relies on agent's actions believing agency relationship exists</li>
          <li>Agent performs duties typically associated with agency representation</li>
          <li>No agency disclosure given, creating confusion about relationship</li>
        </ul>

        <h4>Risks of Implied Agency:</h4>
        <ul>
          <li>❌ Undisclosed dual agency violations</li>
          <li>❌ Fiduciary duty breaches</li>
          <li>❌ Liability for misrepresentation</li>
          <li>❌ License disciplinary action</li>
          <li>❌ Lawsuits from confused parties</li>
          <li>❌ Commission disputes</li>
        </ul>

        <h4>How to Avoid Implied Agency:</h4>
        <ul>
          <li>✅ Provide Agency Disclosure Form at first personal meeting (REQUIRED in MA)</li>
          <li>✅ Get written buyer-broker agreement BEFORE showing properties</li>
          <li>✅ Clarify your role explicitly: "I represent the seller" or "I represent you as the buyer"</li>
          <li>✅ Don't provide advice or advocacy to unrepresented parties</li>
          <li>✅ Document all agency relationships in writing</li>
          <li>✅ Be clear about who you work for</li>
        </ul>

        <h3>27.4 Seller's Agency</h3>
        <p>
          Agent represents the SELLER'S best interests only.
        </p>

        <h4>Seller's Agent Duties:</h4>
        <ul>
          <li><strong>Fiduciary Duties:</strong> OLD CAR duties owed to seller</li>
          <li><strong>Marketing:</strong> Advertise and promote property</li>
          <li><strong>Disclosure:</strong> Disclose all material facts TO seller</li>
          <li><strong>Negotiation:</strong> Negotiate best price and terms FOR seller</li>
          <li><strong>Confidentiality:</strong> Protect seller's confidential info (bottom line, motivation, flexibility)</li>
          <li><strong>Honesty to Buyer:</strong> Still owe honesty and fairness to buyer (customer)</li>
        </ul>

        <h4>What Seller's Agent Must Disclose TO Buyer:</h4>
        <ul>
          <li>✅ Material property defects known to agent</li>
          <li>✅ "I represent the seller in this transaction"</li>
          <li>✅ Any conflicts of interest</li>
          <li>✅ That buyer should consider own representation</li>
        </ul>

        <h4>What Seller's Agent CANNOT Disclose to Buyer:</h4>
        <ul>
          <li>❌ Seller will accept less than asking price</li>
          <li>❌ Seller is motivated/desperate to sell</li>
          <li>❌ Seller facing foreclosure/divorce/job transfer</li>
          <li>❌ Other offers on the table (unless instructed to disclose)</li>
          <li>❌ Any seller confidential information</li>
        </ul>

        <h3>27.5 Buyer's Agency</h3>
        <p>
          Agent represents the BUYER'S best interests only.
        </p>

        <h4>Buyer's Agent Duties:</h4>
        <ul>
          <li><strong>Fiduciary Duties:</strong> OLD CAR duties owed to buyer</li>
          <li><strong>Property Search:</strong> Help find suitable properties</li>
          <li><strong>Investigation:</strong> Research property condition, value, neighborhood</li>
          <li><strong>Disclosure:</strong> Disclose all material facts TO buyer</li>
          <li><strong>Negotiation:</strong> Negotiate best price and terms FOR buyer</li>
          <li><strong>Confidentiality:</strong> Protect buyer's confidential info (max price, motivation, urgency)</li>
          <li><strong>Honesty to Seller:</strong> Still owe honesty and fairness to seller (customer)</li>
        </ul>

        <h4>What Buyer's Agent Must Disclose TO Seller:</h4>
        <ul>
          <li>✅ "I represent the buyer in this transaction"</li>
          <li>✅ Material facts about buyer's ability to perform (if relevant)</li>
          <li>✅ Any conflicts of interest</li>
        </ul>

        <h4>What Buyer's Agent CANNOT Disclose to Seller:</h4>
        <ul>
          <li>❌ Buyer will pay more than offered</li>
          <li>❌ Buyer is desperate/motivated to buy quickly</li>
          <li>❌ Buyer facing time pressure (job transfer, baby coming, etc.)</li>
          <li>❌ Buyer's maximum qualifying amount</li>
          <li>❌ Any buyer confidential information</li>
        </ul>

        <h3>27.6 Customer (Unrepresented Party)</h3>
        <p>
          A party who is NOT represented by the agent but is still entitled to fairness and honesty.
        </p>

        <h4>Customer Rights:</h4>
        <ul>
          <li>Honest and fair treatment</li>
          <li>Disclosure of material property defects</li>
          <li>No fraud or misrepresentation</li>
          <li>Accurate information about property</li>
          <li>Fair dealing in all respects</li>
        </ul>

        <h4>What Customer Does NOT Get:</h4>
        <ul>
          <li>❌ Fiduciary duties (no OLD CAR)</li>
          <li>❌ Advocacy or advice</li>
          <li>❌ Confidentiality of their information</li>
          <li>❌ Agent's loyalty</li>
          <li>❌ Negotiation on their behalf</li>
        </ul>

        <h4>Example:</h4>
        <div className="example">
          <p><strong>Scenario:</strong> You represent the seller (listing agent). Unrepresented buyer comes to open house.</p>
          <p><strong>Buyer is your CUSTOMER:</strong> Owe honesty, must disclose defects, cannot lie or mislead.</p>
          <p><strong>Buyer is NOT your CLIENT:</strong> Don't owe fiduciary duties, don't advocate for them, don't give advice about offer strategy.</p>
          <p><strong>Must Say:</strong> "I represent the seller. You should consider getting your own representation. Anything you tell me, I must disclose to the seller if it's material."</p>
        </div>

        <h3>27.7 Facilitator (Non-Agent)</h3>
        <p>
          Also known as "transaction coordinator" or "transaction broker." Works to complete the transaction but 
          doesn't represent either seller OR buyer. Has LIMITED LIABILITY.
        </p>

        <h4>Facilitator Role:</h4>
        <ul>
          <li><strong>Administrative Tasks:</strong> Coordinates paperwork, schedules inspections, tracks deadlines</li>
          <li><strong>No Advocacy:</strong> Does not represent either party's interests</li>
          <li><strong>No Fiduciary Duties:</strong> No OLD CAR duties owed</li>
          <li><strong>Limited Liability:</strong> Less legal responsibility than agent</li>
          <li><strong>Neutral Position:</strong> Helps both parties equally without taking sides</li>
        </ul>

        <h4>What Facilitator CAN Do:</h4>
        <ul>
          <li>✅ Prepare contracts (fill in blanks with provided information)</li>
          <li>✅ Coordinate inspections and appraisals</li>
          <li>✅ Track contingency deadlines</li>
          <li>✅ Communicate between parties</li>
          <li>✅ Present offers and counteroffers</li>
        </ul>

        <h4>What Facilitator CANNOT Do:</h4>
        <ul>
          <li>❌ Give advice to either party</li>
          <li>❌ Advocate for either party</li>
          <li>❌ Negotiate on behalf of either party</li>
          <li>❌ Provide opinions on value, terms, or strategy</li>
          <li>❌ Recommend one course of action over another</li>
        </ul>

        <h4>Facilitator in Massachusetts:</h4>
        <div className="ma-specific">
          <p><strong>Limited Use:</strong> Massachusetts agents typically act as either seller's agent, buyer's agent, or dual agent</p>
          <p><strong>Disclosure Required:</strong> If acting as facilitator, must disclose in writing</p>
          <p><strong>No Fiduciary Protection:</strong> Parties don't get fiduciary representation</p>
          <p><strong>Not Common:</strong> Most agents and clients prefer full representation</p>
        </div>

        <h3>27.8 Dual Agency</h3>
        <p>
          Agent represents BOTH buyer AND seller's best interests in the same transaction. Neither person has 
          full fiduciary representation.
        </p>

        <h4>How Dual Agency Occurs:</h4>
        <ul>
          <li>Same agent represents both buyer and seller</li>
          <li>Different agents in same firm represent buyer and seller (non-designated agency)</li>
          <li>Agent transitions from representing one party to representing both</li>
        </ul>

        <h4>Dual Agency Limitations:</h4>
        <div className="limitations">
          <p><strong>Cannot Fulfill "OLD CAR" Duties Fully:</strong></p>
          <ul>
            <li>❌ <strong>Obedience:</strong> Cannot obey conflicting instructions from both parties</li>
            <li>❌ <strong>Loyalty:</strong> Cannot be fully loyal to both - inherent conflict</li>
            <li>✅ <strong>Disclosure:</strong> Must disclose material facts to BOTH</li>
            <li>✅ <strong>Confidentiality:</strong> MUST maintain confidentiality for BOTH parties</li>
            <li>✅ <strong>Accountability:</strong> Still accountable to both</li>
            <li>✅ <strong>Reasonable Care:</strong> Still owe reasonable care to both</li>
          </ul>
        </div>

        <h4>Dual Agent's Role:</h4>
        <ul>
          <li><strong>Facilitator:</strong> Help the transaction proceed</li>
          <li><strong>Neutral Party:</strong> Cannot advocate for either side</li>
          <li><strong>Honest Broker:</strong> Present facts honestly to both</li>
          <li><strong>Ministerial Acts:</strong> Perform administrative tasks</li>
          <li><strong>Cannot Advise:</strong> Cannot give strategic advice to either party</li>
        </ul>

        <h3>27.9 Disclosed Dual Agency</h3>
        <p>
          Both clients have given formal written consent to the dual agency relationship.
        </p>

        <h4>Requirements for Disclosed Dual Agency:</h4>
        <ul>
          <li>✅ <strong>Written Disclosure:</strong> Explain dual agency to both parties in writing</li>
          <li>✅ <strong>Informed Consent:</strong> Both buyer AND seller must consent in writing</li>
          <li>✅ <strong>Before Proceeding:</strong> Get consent BEFORE continuing with transaction</li>
          <li>✅ <strong>Explain Limitations:</strong> Make clear they won't get full representation</li>
          <li>✅ <strong>Right to Refuse:</strong> Either party can refuse and agent must withdraw from one side</li>
          <li>✅ <strong>Document Everything:</strong> Keep signed disclosure and consent forms</li>
        </ul>

        <h4>Disclosed Dual Agency is LEGAL if:</h4>
        <ul>
          <li>✅ Properly disclosed in writing to both parties</li>
          <li>✅ Both parties provide informed written consent</li>
          <li>✅ Agent maintains confidentiality for both parties</li>
          <li>✅ Agent stays neutral and doesn't favor either side</li>
          <li>✅ All material facts disclosed to both parties</li>
        </ul>

        <h3>27.10 Undisclosed Dual Agency</h3>
        <p>
          When both clients are not aware of the "conflict of interest" - the agent is representing both but 
          hasn't disclosed it or obtained consent.
        </p>

        <div className="critical-warning">
          <h4>⚠️ CRITICAL VIOLATION - ALWAYS ILLEGAL</h4>
          <p><strong>This is FRAUD and a SERIOUS license violation!</strong></p>
        </div>

        <h4>How It Happens (Accidentally or Intentionally):</h4>
        <ul>
          <li>Agent shows own listing to buyer without disclosing they represent seller</li>
          <li>Agent represents buyer but shows property listed by colleague (non-designated agency) without disclosure</li>
          <li>Agent "forgets" to get written dual agency consent</li>
          <li>Implied agency creates dual agency agent didn't recognize</li>
          <li>Agent tries to hide dual agency to keep both commissions</li>
        </ul>

        <h4>Consequences of Undisclosed Dual Agency:</h4>
        <div className="severe-penalties">
          <ul>
            <li>🚨 <strong>License Suspension or Revocation</strong></li>
            <li>🚨 <strong>Lawsuit from Both Parties:</strong> Fraud, breach of fiduciary duty</li>
            <li>🚨 <strong>Lose Entire Commission:</strong> Courts may order return of all commission</li>
            <li>🚨 <strong>Damages:</strong> Pay damages to harmed parties</li>
            <li>🚨 <strong>Criminal Charges:</strong> Fraud charges possible in serious cases</li>
            <li>🚨 <strong>E&O Won't Cover:</strong> Insurance excludes intentional acts/fraud</li>
            <li>🚨 <strong>Reputation Destroyed:</strong> Career-ending violation</li>
          </ul>
        </div>

        <h4>Prevention:</h4>
        <ul>
          <li>✅ Provide Agency Disclosure Form at FIRST meeting (MA law)</li>
          <li>✅ Recognize in-house transactions immediately</li>
          <li>✅ Get written dual agency consent BEFORE proceeding</li>
          <li>✅ Document everything in writing</li>
          <li>✅ When in doubt, DISCLOSE</li>
          <li>✅ Consider referring out one side if uncomfortable</li>
        </ul>

        <h3>27.11 Designated Agency</h3>
        <p>
          Broker/owner designates one agent to represent the seller and another agent to represent the buyer.
        </p>

        <h4>How It Works:</h4>
        <ul>
          <li><strong>Principal Broker:</strong> Becomes the dual agent (represents both through the agency)</li>
          <li><strong>Designated Seller's Agent:</strong> Appointed to represent ONLY the seller</li>
          <li><strong>Designated Buyer's Agent:</strong> Appointed to represent ONLY the buyer</li>
          <li><strong>Key Benefit:</strong> Each designated agent can provide FULL representation to their client</li>
          <li><strong>Not Dual Agents:</strong> The designated agents themselves are NOT dual agents</li>
        </ul>

        <h4>Detailed Coverage:</h4>
        <p>See Section 26 (Designated vs Non-Designated Agency) for complete coverage of designated agency model, 
        office protocols, information firewall requirements, and best practices.</p>

        <h3>27.12 Subagent</h3>
        <p>
          An agent of an agent. May be either a Seller's subagent or Buyer's subagent. Can only be performed 
          with informed written consent.
        </p>

        <h4>Subagency Explained:</h4>
        <ul>
          <li><strong>Agent's Agent:</strong> Works for and owes duties to another agent's client</li>
          <li><strong>Not Direct Relationship:</strong> Doesn't have direct agreement with principal</li>
          <li><strong>Owes Same Duties:</strong> Owes fiduciary duties to the principal (through main agent)</li>
          <li><strong>Requires Consent:</strong> All parties must consent in writing</li>
        </ul>

        <h4>Historical Context - Seller Subagency:</h4>
        <div className="historical-context">
          <p><strong>Pre-1990s MLS System:</strong></p>
          <ul>
            <li>ALL agents in MLS were subagents of the listing agent</li>
            <li>BOTH the listing agent AND showing agent represented the SELLER</li>
            <li>Buyer had NO representation (both agents worked for seller)</li>
            <li>This created confusion and unfairness to buyers</li>
          </ul>
          
          <p><strong>1990s Reform:</strong></p>
          <ul>
            <li>Buyer agency became recognized and widely adopted</li>
            <li>Subagency largely eliminated from residential real estate</li>
            <li>Now each party typically has their own representation</li>
          </ul>
        </div>

        <h4>Modern Subagency:</h4>
        <ul>
          <li><strong>Rare in Residential:</strong> Almost never used in modern residential transactions</li>
          <li><strong>Still Exists in Commercial:</strong> Sometimes used in commercial real estate</li>
          <li><strong>Requires Written Consent:</strong> Must be disclosed and consented to</li>
          <li><strong>Mostly Historical:</strong> Understanding it is important for exams and legal knowledge</li>
        </ul>

        <h4>Why Subagency Declined:</h4>
        <ul>
          <li>❌ Confusing to consumers (buyer thought agent represented them)</li>
          <li>❌ Buyer had no representation</li>
          <li>❌ Both agents competed to please seller (not fair to buyer)</li>
          <li>❌ Liability issues when subagent made mistakes</li>
          <li>✅ Buyer agency provides better protection and clarity</li>
        </ul>

        <h3>27.13 Quick Reference Chart</h3>
        <div className="reference-chart">
          <table>
            <thead>
              <tr>
                <th>Agency Type</th>
                <th>Who They Represent</th>
                <th>Fiduciary Duties?</th>
                <th>Written Agreement?</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Seller's Agent</strong></td>
                <td>Seller only</td>
                <td>✅ Yes (to seller)</td>
                <td>✅ Listing agreement</td>
              </tr>
              <tr>
                <td><strong>Buyer's Agent</strong></td>
                <td>Buyer only</td>
                <td>✅ Yes (to buyer)</td>
                <td>✅ Buyer agreement</td>
              </tr>
              <tr>
                <td><strong>Dual Agent</strong></td>
                <td>Both buyer & seller</td>
                <td>⚠️ Limited to both</td>
                <td>✅ Required + consent</td>
              </tr>
              <tr>
                <td><strong>Designated Agent</strong></td>
                <td>One party only</td>
                <td>✅ Yes (to their client)</td>
                <td>✅ Designation letter</td>
              </tr>
              <tr>
                <td><strong>Facilitator</strong></td>
                <td>Neither party</td>
                <td>❌ No</td>
                <td>✅ Disclosure required</td>
              </tr>
              <tr>
                <td><strong>Customer</strong></td>
                <td>Not represented</td>
                <td>❌ No</td>
                <td>❌ No agreement</td>
              </tr>
              <tr>
                <td><strong>Subagent</strong></td>
                <td>Another agent's client</td>
                <td>✅ Yes (through main agent)</td>
                <td>✅ Consent required</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h3>27.14 Key Takeaways for Agents</h3>
        <div className="key-takeaways">
          <ul>
            <li>✅ <strong>Always use Express Agency:</strong> Get written agreements, don't rely on implied</li>
            <li>✅ <strong>Disclose at First Meeting:</strong> MA law requires agency disclosure form</li>
            <li>✅ <strong>Avoid Undisclosed Dual Agency:</strong> Career-ending violation</li>
            <li>✅ <strong>Get Dual Agency Consent in Writing:</strong> Before proceeding with in-house transaction</li>
            <li>✅ <strong>Know Your Role:</strong> Seller's agent, buyer's agent, dual agent, or designated agent</li>
            <li>✅ <strong>Treat Customers Fairly:</strong> Even if not your client, owe honesty</li>
            <li>✅ <strong>Document Everything:</strong> Written agreements, disclosures, consents</li>
            <li>✅ <strong>When in Doubt, Disclose:</strong> Over-disclosure is safer than under-disclosure</li>
          </ul>
        </div>

        <p className="highlight">
          <strong>Remember:</strong> Agency relationships are the foundation of your practice. Get them right from 
          the start. Undisclosed dual agency can end your career. Express agency with proper written agreements 
          protects everyone. Always provide the Massachusetts Mandatory Agency Disclosure Form at the first personal 
          meeting. Know your role, disclose your role, document your role!
        </p>
      </>
    )
  };

import React from 'react';

export const sections = [
  {
    id: 'flow',
    icon: '🧭',
    title: '1. Contract Flow in Massachusetts',
    subtitle: 'Offer \u2192 Acceptance \u2192 P&S \u2192 Closing',
    body: (
      <>
        <h3>1.1 Offer to Purchase (OTP)</h3>
        <ul>
          <li>Must be in writing to be enforceable.</li>
          <li>Becomes binding when signed and delivered.</li>
          <li>Counter-offer acts as a rejection of the prior offer and creates a new offer.</li>
          <li>
            Common terms:
            <ul>
              <li>Purchase price</li>
              <li>Deposits (offer deposit, later P&amp;S deposit)</li>
              <li>Inspection contingency and deadline</li>
              <li>Financing and appraisal contingencies</li>
              <li>Target closing date and occupancy details</li>
            </ul>
          </li>
        </ul>
        <p className="highlight">
          2025 rule: Buyer must receive the Mandatory Home Inspection Disclosure before submitting
          the first written offer.
        </p>

        <h3>1.2 Seller Response</h3>
        <ul>
          <li>Accept the offer as written.</li>
          <li>Reject the offer outright.</li>
          <li>
            Make a counter-offer (which cancels the prior offer and places a new offer on the table).
          </li>
        </ul>

        <h3>1.3 Purchase &amp; Sale Agreement (P&amp;S)</h3>
        <ul>
          <li>Drafted and negotiated after offer acceptance (often by attorneys).</li>
          <li>Larger deposit is typically due at this stage (often 3\u20135% of the price).</li>
          <li>
            Clarifies and expands contingencies:
            <ul>
              <li>Inspection process and remedies</li>
              <li>Financing and appraisal timing</li>
              <li>Title and defect cure periods</li>
              <li>Precise closing logistics and default remedies</li>
            </ul>
          </li>
        </ul>

        <h3>1.4 Closing</h3>
        <ul>
          <li>Final walk-through.</li>
          <li>Loan and settlement documents signed.</li>
          <li>Deed recorded and funds disbursed.</li>
          <li>Buyer receives keys after recording.</li>
        </ul>
      </>
    )
  },
  {
    id: 'law-changes',
    icon: '⚖️',
    title: '2. 2025 MA Law & Form Changes',
    subtitle: 'Inspection rights, buyer-broker compensation, backup offers, dual agency',
    body: (
      <>
        <h3>2.1 Home Inspection Waiver Ban (Effective October 2025)</h3>
        <ul>
          <li>Sellers and listing agents cannot require buyers to waive home inspections.</li>
          <li>
            Buyer must receive a Massachusetts Mandatory Home Inspection Disclosure before the first
            written offer.
          </li>
          <li>
            What <strong>can</strong> still be negotiated:
            <ul>
              <li>Inspection deadline (shorter windows can make an offer more attractive).</li>
              <li>
                Repair thresholds \u2013 for example, buyer may only terminate if repair estimates exceed
                a certain dollar amount.
              </li>
              <li>
                How deposits are handled if buyer terminates after inspection (refund rules, notice
                requirements).
              </li>
              <li>Limiting negotiations to structural / major mechanical defects, not cosmetics.</li>
            </ul>
          </li>
          <li>Offers cannot be filtered or prioritized solely based on waiving inspection.</li>
        </ul>

        <h3>2.2 Buyer-Agent Compensation \u2013 New 2025 MAR Forms</h3>
        <ul>
          <li>Commissions are explicitly treated as fully negotiable.</li>
          <li>
            The offer now has a section specifying:
            <ul>
              <li>How much the buyer\u2019s broker is to be paid.</li>
              <li>Who pays that compensation (buyer, seller, or a combination).</li>
              <li>Any caps or fixed-fee structures the parties agree to.</li>
            </ul>
          </li>
          <li>
            Buyer must sign a <strong>Buyer-Broker Agreement</strong> before touring properties that
            addresses compensation, agency, and duties.
          </li>
        </ul>

        <h3>2.3 Backup Offers</h3>
        <ul>
          <li>Backup offers are permitted in Massachusetts.</li>
          <li>
            The seller must give written instructions to the listing agent to solicit or accept
            backup offers.
          </li>
          <li>Prospective buyers must be clearly told they are submitting a backup offer.</li>
        </ul>

        <h3>2.4 Dual Agency Clarifications</h3>
        <ul>
          <li>Dual agency is legal but strictly regulated.</li>
          <li>
            Requires <strong>written informed consent</strong> from all parties before it occurs.
          </li>
          <li>
            The dual agent must remain neutral and cannot advocate for either side\u2019s negotiating
            position.
          </li>
        </ul>
      </>
    )
  },
  {
    id: 'negotiable-terms',
    icon: '🧾',
    title: '3. Negotiable Contract Terms in MA',
    subtitle: 'What can actually be negotiated in a Massachusetts deal',
    body: (
      <>
        <h3>3.1 Price</h3>
        <ul>
          <li>Based on comparable sales, condition, and competition.</li>
          <li>
            Strong offers often use better terms (shorter timelines, fewer contingencies) instead of
            just higher prices.
          </li>
        </ul>

        <h3>3.2 Deposits</h3>
        <ul>
          <li>Two-step structure is common:</li>
          <li>
            <ul>
              <li>Offer deposit (small, shows seriousness).</li>
              <li>P&amp;S deposit (larger, often 3\u20135% of purchase price).</li>
            </ul>
          </li>
          <li>Size and timing of deposits are fully negotiable.</li>
        </ul>

        <h3>3.3 Inspection Terms</h3>
        <ul>
          <li>Inspection waivers may not be required, but inspection clauses are customizable.</li>
          <li>
            Buyers can offer:
            <ul>
              <li>Shorter inspection periods.</li>
              <li>\u201cInformation only\u201d inspections with limited repair requests.</li>
              <li>
                Threshold-based clauses (for example, terminate only if repairs exceed a set dollar
                amount).
              </li>
            </ul>
          </li>
          <li>
            Sellers can request:
            <ul>
              <li>No cosmetic or trivial issues to be raised.</li>
              <li>Firm inspection deadlines.</li>
              <li>Limited repair credits instead of repairs performed by seller.</li>
            </ul>
          </li>
        </ul>

        <h3>3.4 Financing &amp; Appraisal Contingencies</h3>
        <ul>
          <li>Financing contingency covers the buyer\u2019s ability to obtain a loan.</li>
          <li>Appraisal contingency protects if value comes in lower than purchase price.</li>
          <li>
            Negotiation points:
            <ul>
              <li>Shorter or longer financing deadlines.</li>
              <li>Appraisal gap coverage (buyer agrees to cover a shortfall up to a set amount).</li>
              <li>Whether buyer can switch lenders or loan programs.</li>
            </ul>
          </li>
        </ul>

        <h3>3.5 Closing Date &amp; Occupancy</h3>
        <ul>
          <li>Closing date can be fixed or expressed as a range.</li>
          <li>Rent-back arrangements allow seller to stay after closing for a set time.</li>
          <li>Early occupancy by buyer is rare but possible with a use &amp; occupancy agreement.</li>
        </ul>

        <h3>3.6 Inclusions, Exclusions, and Personal Property</h3>
        <ul>
          <li>Which items stay (appliances, fixtures, furniture) should be clearly specified.</li>
          <li>Ambiguity here is a common source of disputes; clear lists are best.</li>
        </ul>
      </>
    )
  },
  {
    id: 'commissions',
    icon: '💸',
    title: '4. Commission Negotiation in Massachusetts',
    subtitle: '2025 rules, examples, and scripts',
    body: (
      <>
        <h3>4.1 General Rules</h3>
        <ul>
          <li>All real-estate commissions are negotiable.</li>
          <li>There is no legal \u201cstandard rate.\u201d</li>
          <li>
            Compensation must be in writing in the listing agreement or buyer-broker agreement.
          </li>
        </ul>

        <h3>4.2 Buyer-Agent Compensation</h3>
        <ul>
          <li>
            Buyer and their broker negotiate how the buyer\u2019s agent will be paid:
            <ul>
              <li>Percentage (e.g., 1%\u20132%).</li>
              <li>Flat fee (e.g., $3,500 or $5,000).</li>
              <li>Hourly consultation model (less common).</li>
              <li>Fee caps (e.g., 1% up to a maximum dollar amount).</li>
              <li>Rebates at closing (where allowed by law and brokerage policy).</li>
            </ul>
          </li>
          <li>
            The offer then states whether and how the seller will contribute toward buyer-agent
            compensation.
          </li>
        </ul>

        <h4>Example buyer-agent compensation clauses:</h4>
        <pre>
{`Seller agrees to contribute 2% of the purchase price toward buyer\u2019s broker compensation.`}
        </pre>
        <pre>
{`Buyer is responsible for buyer-agent compensation per separate written buyer-broker agreement.`}
        </pre>
        <pre>
{`Buyer-broker compensation is capped at $7,000 total, regardless of final sale price.`}
        </pre>

        <h3>4.3 Listing (Seller) Commission</h3>
        <ul>
          <li>Negotiated between seller and listing brokerage.</li>
          <li>Can be traditional percentage, reduced rate, sliding scale, or a capped amount.</li>
          <li>
            Some listing agreements offer bonus commissions if the property sells quickly or above
            asking price.
          </li>
        </ul>

        <h3>4.4 Commission Negotiation Scripts</h3>
        <h4>Buyer \u2192 Buyer\u2019s Agent</h4>
        <pre>
{`Given the 2025 rules where I may directly pay my buyer\u2019s agent, I\u2019d like to agree to a flat fee of $4,500 or 1% of the purchase price, whichever is lower. Are you open to that?`}
        </pre>

        <h4>Buyer \u2192 Seller (within an offer)</h4>
        <pre>
{`Buyer requests a $7,500 seller credit to be applied toward buyer-broker compensation. This has been factored into the offer price.`}
        </pre>

        <h4>Seller \u2192 Listing Agent</h4>
        <pre>
{`Your proposal is a 5% total commission. Would you consider 4% with the same services, and 5% only if the home sells over the asking price?`}
        </pre>
      </>
    )
  },
  {
    id: 'broker-relationship',
    icon: '🤝',
    title: '5. Broker & Sales Associate Relationship',
    subtitle: 'Independent contractors, commission splits, caps, and obligations',
    body: (
      <>
        <h3>5.1 Independent Contractor Status</h3>
        <ul>
          <li>Most sales associates are Independent Contractors (ICs), not employees.</li>
          <li>No set hours or required schedule from the broker.</li>
          <li>ICs may work as much or as little as they want.</li>
          <li>They are self-employed for tax purposes and receive a 1099, not a W-2.</li>
        </ul>

        <h3>5.2 Employment/Independent Contractor Agreement</h3>
        <ul>
          <li>Defines the nature of the relationship and compensation.</li>
          <li>Clarifies duties, responsibilities, and supervision by the broker.</li>
          <li>Specifies commission splits and how expenses are handled.</li>
        </ul>

        <h3>5.3 Broker Responsibility</h3>
        <ul>
          <li>Broker is responsible for the acts of the sales associate performed in the business.</li>
          <li>Broker must supervise to ensure legal compliance and adherence to company policies.</li>
        </ul>

        <h3>5.4 Commission Splits</h3>
        <ul>
          <li>Traditional brokerage splits (especially for new agents): 50/50 or 60/40.</li>
          <li>
            Non-traditional high-split companies: 70/30, 80/20, 90/10 \u2014 but agents pay more of their
            own expenses, such as:
            <ul>
              <li>Advertising and marketing</li>
              <li>Office space and desk fees</li>
              <li>Copies and supplies</li>
            </ul>
          </li>
        </ul>

        <h3>5.5 Capping Plans</h3>
        <ul>
          <li>Capping commission plans are increasingly popular.</li>
          <li>
            Agent pays a portion of commissions to the brokerage until they hit a yearly \u201ccap\u201d amount.
          </li>
          <li>After the cap, the agent receives a very high split or 100% of further commissions.</li>
        </ul>

        <h3>5.6 Rules, Memberships, and Performance Standards</h3>
        <ul>
          <li>Agents must follow company rules and regulations.</li>
          <li>Required memberships often include:</li>
          <li>
            <ul>
              <li>Multiple Listing Service (MLS)</li>
              <li>Local Board of REALTORS\u00ae (if the brokerage is a REALTOR\u00ae office)</li>
            </ul>
          </li>
          <li>Brokerages may set minimum performance requirements.</li>
        </ul>

        <h3>5.7 Non-Compete Clauses</h3>
        <ul>
          <li>Non-compete clauses are not common in residential real-estate agreements.</li>
          <li>They are more likely to appear in commercial brokerage settings.</li>
        </ul>
      </>
    )
  },
  {
    id: 'exam-prep',
    icon: '📝',
    title: '6. Exam Prep View',
    subtitle: 'What the MA licensing exam is likely to test',
    body: (
      <>
        <h3>6.1 High-Yield Exam Points</h3>
        <ul>
          <li>Offer \u2192 Counter-offer rules (counter-offer = rejection + new offer).</li>
          <li>When an offer becomes binding (signed and delivered).</li>
          <li>
            Inspection waivers cannot be required, and the mandatory inspection disclosure must be
            provided before offer.
          </li>
          <li>Commissions are always negotiable; there is no standard rate.</li>
          <li>Buyer must sign a buyer-broker agreement before touring homes.</li>
          <li>Dual agency requires written informed consent from all parties.</li>
          <li>Deposits are held in escrow and returned if contingency conditions allow.</li>
          <li>
            Broker is responsible for the acts of their sales associates; agents are independent
            contractors receiving 1099s.
          </li>
        </ul>

        <h3>6.2 Quick Exam Cheatsheet</h3>
        <pre>
{`Offer + acceptance + delivery = binding contract (subject to contingencies).
Counter-offer kills the original offer.
Inspection waivers may NOT be required.
Buyer must get inspection disclosure before first written offer.
Commissions always negotiable; no standard rate.
Buyer-broker agreement is needed before showings.
Dual agency must be disclosed and in writing.
Deposits held in escrow; refunded if contingencies are not met.
Agents are Independent Contractors; broker is responsible for their acts.`}
        </pre>
      </>
    )
  },
  {
    id: 'investor',
    icon: '🏦',
    title: '7. Investor Strategy View',
    subtitle: 'How to use these rules strategically as an investor',
    body: (
      <>
        <h3>7.1 Investor Priorities</h3>
        <ul>
          <li>Acquire at the right price with manageable risk.</li>
          <li>Use inspection and contingency terms to preserve exit options.</li>
          <li>Keep deposits and sunk costs as low as possible.</li>
          <li>Structure compensation with agents around long-term volume.</li>
        </ul>

        <h3>7.2 Offer Structure for Investors</h3>
        <ul>
          <li>Smaller deposits early; larger sums only after due diligence.</li>
          <li>
            Short, focused inspection periods that emphasize major defects and renovation budget
            stability.
          </li>
          <li>Flexible closing dates to appeal to sellers.</li>
          <li>Seller credits instead of price reductions to help with financing or rehab costs.</li>
        </ul>

        <h3>7.3 Commission Strategy for Investors</h3>
        <ul>
          <li>Negotiate buyer-agent compensation structures based on multiple deals per year.</li>
          <li>
            For example: 1% or a fixed fee, with improved terms after a certain number of closed
            transactions.
          </li>
          <li>
            When selling flips, negotiate reduced listing commissions or performance-based models
            with the listing brokerage.
          </li>
        </ul>

        <h3>7.4 Sample Investor Scripts</h3>
        <h4>Investor \u2192 Buyer\u2019s Agent</h4>
        <pre>
{`I plan to buy several properties this year. Can we structure my buyer-broker compensation as 1% per transaction, capped at $5,000 per deal, with the understanding that we revisit and potentially reduce that further after three closed deals?`}
        </pre>

        <h4>Investor \u2192 Seller (credits instead of price drops)</h4>
        <pre>
{`Instead of reducing the purchase price by $10,000, would you be willing to provide a $10,000 closing credit? This allows me to proceed with needed rehab while keeping the nominal price strong for your comparable sales.`}
        </pre>

        <h3>7.5 Investor One-Glance Cheatsheet</h3>
        <pre>
{`Keep deposits low and refundable where possible.
Use short inspections instead of waiving them.
Ask for seller credits rather than only price cuts.
Negotiate commissions for volume – think long game.
Offer flexible closings and rent-backs to beat higher-priced offers.
Always understand your agent’s split and cap – it influences incentives.`}
        </pre>
      </>
    )
  },
  {
    id: 'cheat',
    icon: '📌',
    title: '8. Global Cheat Sheet',
    subtitle: 'One dense block to memorize or print',
    body: (
      <>
        <pre>
{`MA Real Estate Negotiation (2025)

• Offer must be written; counter-offer cancels previous offer.
• Acceptance + delivery = binding contract (subject to contingencies).
• Buyer must receive home-inspection disclosure before first written offer.
• Sellers cannot require inspection waivers.
• Buyer-broker compensation is fully negotiable and appears in the offer.
• Buyer must sign a buyer-broker agreement before touring homes.
• All commissions are negotiable; no standard rate.
• Dual agency requires written informed consent; agent must stay neutral.
• Deposits (offer + P&S) held in escrow; refunded if contingencies not met.
• P&S clarifies inspection, financing, appraisal, title, and closing details.
• Brokers are responsible for acts of sales associates.
• Agents are independent contractors, paid by commission, receiving 1099s.
• Commission splits (50/50, 60/40, 70/30, 80/20, 90/10) and cap plans vary by brokerage.
• MLS and Board membership often required; company rules and minimum production may apply.
• Backup offers allowed with proper disclosure.
• Investors can exploit terms (credits, timing, contingencies, commissions) to create win–win deals.`}
        </pre>
      </>
    )
  },
  {
    id: 'antitrust-associations',
    icon: '⚖️',
    title: '11. Antitrust Laws & Professional Associations',
    subtitle: 'Federal Laws, Ethics, MLS, MAR, and NAR',
    body: (
      <>
        <h3>11.1 Sherman Antitrust Act</h3>
        <p>
          Federal law prohibiting agreements that restrain trade. Real estate professionals must
          understand and comply with antitrust regulations.
        </p>

        <h4>Price-Fixing (ILLEGAL)</h4>
        <ul>
          <li>
            <strong>What it is:</strong> Competing brokers agreeing on commission rates, fees, or prices
          </li>
          <li>
            <strong>Example:</strong> Two brokerages agree to always charge 6% commission
          </li>
          <li>
            <strong>Legal alternative:</strong> Each firm independently sets its own rates
          </li>
          <li>
            <strong>Key point:</strong> You can discuss YOUR rates with clients, but never coordinate rates
            with competitors
          </li>
        </ul>

        <h4>Market Allocation (ILLEGAL)</h4>
        <ul>
          <li>
            <strong>What it is:</strong> Competing brokers dividing territories or property types
          </li>
          <li>
            <strong>Example:</strong> "You take the north side of town, I'll take the south"
          </li>
          <li>
            <strong>Example:</strong> "You handle residential, I'll handle commercial"
          </li>
          <li>
            <strong>Key point:</strong> Brokers must compete freely for business everywhere
          </li>
        </ul>

        <h4>Group Boycott (ILLEGAL)</h4>
        <ul>
          <li>
            <strong>What it is:</strong> Competitors agreeing to exclude or refuse to deal with another
            business
          </li>
          <li>
            <strong>Example:</strong> Multiple brokers agreeing not to show properties from a discount
            brokerage
          </li>
          <li>
            <strong>Example:</strong> Agents refusing to cooperate with a new competitor
          </li>
          <li>
            <strong>Key point:</strong> Each broker decides independently who they work with
          </li>
        </ul>

        <h4>Tie-In Arrangements (ILLEGAL)</h4>
        <ul>
          <li>
            <strong>What it is:</strong> Requiring use of one service as a condition of another
          </li>
          <li>
            <strong>Example:</strong> "You must use my affiliated mortgage company to work with me"
          </li>
          <li>
            <strong>Legal alternative:</strong> You can recommend services but clients must have freedom
            of choice
          </li>
        </ul>

        <p className="highlight">
          <strong>Penalties for Antitrust Violations:</strong>
          <br />
          • Civil fines up to $1 million per violation
          <br />
          • Criminal prosecution (up to $100 million for corporations)
          <br />
          • Treble damages (3x actual damages) in private lawsuits
          <br />• License suspension or revocation
        </p>

        <h3>11.2 Massachusetts Association of REALTORS® (MAR)</h3>
        <p>
          Statewide trade organization providing resources, advocacy, and support to real estate
          professionals in Massachusetts.
        </p>

        <h4>MAR Benefits</h4>
        <ul>
          <li>
            <strong>Standard Forms Library:</strong> Access to legally vetted forms (OTP, P&amp;S, etc.)
          </li>
          <li>
            <strong>Legal Hotline:</strong> Quick answers to legal questions from MAR attorneys
          </li>
          <li>
            <strong>Legislative Advocacy:</strong> Lobbying at state level for industry interests
          </li>
          <li>
            <strong>Education &amp; CE:</strong> Continuing education courses and certification programs
          </li>
          <li>
            <strong>Market Data:</strong> Access to market statistics and trends
          </li>
          <li>
            <strong>Networking:</strong> Events, conferences, and professional connections
          </li>
        </ul>

        <h3>11.3 National Association of REALTORS® (NAR)</h3>
        <p>
          The largest trade association in the United States, representing 1.5+ million members
          nationwide.
        </p>

        <h4>REALTOR® vs. Real Estate Agent</h4>
        <ul>
          <li>
            <strong>Real Estate Agent:</strong> Anyone with an active real estate license
          </li>
          <li>
            <strong>REALTOR®:</strong> Licensed agent who is a NAR member and follows the Code of Ethics
          </li>
          <li>
            <strong>Trademark:</strong> REALTOR® is a registered trademark; only members can use it
          </li>
        </ul>

        <h4>NAR Code of Ethics</h4>
        <p>17 Articles grouped into three main duties:</p>
        <ul>
          <li>
            <strong>Duties to Clients and Customers:</strong>
            <ul>
              <li>Protect and promote client interests</li>
              <li>Honest and accurate representation</li>
              <li>Disclose material facts</li>
              <li>Maintain confidentiality</li>
            </ul>
          </li>
          <li>
            <strong>Duties to the Public:</strong>
            <ul>
              <li>Truthful advertising</li>
              <li>No discrimination (Fair Housing Act compliance)</li>
              <li>Professional conduct</li>
            </ul>
          </li>
          <li>
            <strong>Duties to Other REALTORS®:</strong>
            <ul>
              <li>Cooperate with other members</li>
              <li>Respect listings and representation</li>
              <li>Share commission information</li>
              <li>Resolve disputes through arbitration</li>
            </ul>
          </li>
        </ul>

        <h3>11.4 Multiple Listing Service (MLS)</h3>
        <p>
          A cooperative database where brokers share property listings to facilitate transactions
          and broker cooperation.
        </p>

        <h4>MLS Benefits</h4>
        <ul>
          <li>
            <strong>Maximum Exposure:</strong> Listings seen by thousands of agents and buyers
          </li>
          <li>
            <strong>Broker Cooperation:</strong> Enables buyer agents to show your listings
          </li>
          <li>
            <strong>Compensation Offers:</strong> Clearly states buyer-broker compensation
          </li>
          <li>
            <strong>Market Data:</strong> Comprehensive comparable sales data
          </li>
          <li>
            <strong>Public Access:</strong> Feeds data to Zillow, Realtor.com, and other sites
          </li>
        </ul>

        <h4>MLS Rules &amp; Responsibilities</h4>
        <ul>
          <li>Accurate listing information (price, features, availability)</li>
          <li>Timely updates (price changes, pending status, sold)</li>
          <li>Proper photos and descriptions</li>
          <li>Fair treatment of all members</li>
          <li>Compliance with data display rules</li>
        </ul>

        <h3>11.5 Local REALTOR® Boards</h3>
        <p>
          Regional associations providing local services, MLS access, and community networking.
        </p>

        <h4>Major MA Boards Include:</h4>
        <ul>
          <li>Greater Boston Association of REALTORS® (GBAR)</li>
          <li>Cape Cod &amp; Islands Association of REALTORS®</li>
          <li>Berkshire County Board of REALTORS®</li>
          <li>MetroWest Association of REALTORS®</li>
          <li>And many others across the state</li>
        </ul>

        <h4>Local Board Benefits</h4>
        <ul>
          <li>MLS access for your region</li>
          <li>Local market expertise and statistics</li>
          <li>Networking events and referrals</li>
          <li>Local CE courses and training</li>
          <li>Community involvement opportunities</li>
        </ul>

        <h3>11.6 Membership Costs &amp; Requirements</h3>
        <p>
          <strong>Typical Annual Costs (vary by location):</strong>
        </p>
        <ul>
          <li>NAR dues: ~$150-200</li>
          <li>MAR dues: ~$200-300</li>
          <li>Local board dues: ~$300-600</li>
          <li>MLS fees: ~$200-500</li>
          <li>
            <strong>Total typical cost: $850-1,600/year</strong>
          </li>
        </ul>

        <p className="highlight">
          <strong>Key Takeaway:</strong> While membership is not legally required to practice real
          estate, most brokerages require NAR/MAR/MLS membership because MLS access is essential for
          competitive practice. The benefits far outweigh the costs for active agents.
        </p>
      </>
    )
  },
  {
    id: 'transaction-cycle',
    icon: '🔄',
    title: '12. The Transaction Cycle',
    subtitle: 'From Offer to Closing - Timelines, Responsibilities & Milestones',
    body: (
      <>
        <h3>12.1 Critical Timeline - The 10-Day Window</h3>
        <div className="timeline-box">
          <h4>Days 1-10: Inspection & P&S Period</h4>
          <ul>
            <li><strong>Day 1:</strong> Offer Accepted</li>
            <li><strong>Days 1-10:</strong> Home Inspection & Due Diligence Period
              <ul>
                <li>Buyer performs home inspection</li>
                <li>Reviews property condition</li>
                <li>Can request repairs or negotiate</li>
                <li>Can cancel with inspection contingency</li>
              </ul>
            </li>
            <li><strong>Day 10 (typical):</strong> Purchase & Sales Agreement (P&S) Executed
              <ul>
                <li>Transaction becomes more binding</li>
                <li>Deposit increases (typically to 5%)</li>
                <li>Closing date officially set</li>
                <li>All terms finalized</li>
              </ul>
            </li>
          </ul>
        </div>

        <h3>12.2 Broker Responsibilities Throughout the Cycle</h3>
        <div className="responsibilities-section">
          <h4>Pre-Contract Phase:</h4>
          <ul>
            <li>Listing property for sale (pricing strategy, marketing plan)</li>
            <li>Qualifying buyers (pre-approval verification, needs assessment)</li>
            <li>Showing the property (scheduling, preparation, feedback)</li>
            <li>Writing offer on property (terms, contingencies, deadlines)</li>
          </ul>

          <h4>Post-Contract Phase:</h4>
          <ul>
            <li>Coordinating home inspection/due diligence (within 10 days)</li>
            <li>Executing P&S Agreement (within 10 days from offer)</li>
            <li>Managing transaction timeline and communications</li>
            <li>Coordinating with lender, attorney, and other parties</li>
            <li>Guiding parties through closing per contract terms</li>
          </ul>
        </div>

        <h3>12.3 Lender's Financing Process</h3>
        <p><strong>Starts:</strong> Couple days after signed P&S Agreement</p>
        
        <h4>What the Lender Orders Immediately:</h4>
        <ol>
          <li><strong>Appraisal</strong>
            <ul>
              <li>Licensed appraiser valuates property</li>
              <li>Ensures property worth purchase price</li>
              <li>Buyer typically pays $400-600</li>
              <li>Takes 1-2 weeks to complete</li>
            </ul>
          </li>
          <li><strong>Title Search</strong>
            <ul>
              <li>Examines property ownership history</li>
              <li>Checks for liens and encumbrances</li>
              <li>Ensures clear title for transfer</li>
              <li>Attorney or title company performs</li>
            </ul>
          </li>
        </ol>

        <h3>12.4 Commitment Letter (30-45 Days from P&S)</h3>
        <div className="commitment-box">
          <p><strong>What It Is:</strong> Formal written promise from lender to provide mortgage loan</p>
          
          <h4>Contains:</h4>
          <ul>
            <li>Loan amount and interest rate</li>
            <li>Loan type (conventional, FHA, VA, etc.)</li>
            <li>Monthly payment estimate</li>
            <li><strong>Conditions to be cleared</strong></li>
            <li>Expiration date</li>
          </ul>

          <h4>Common "Clear Conditions":</h4>
          <ul>
            <li>Proof of homeowner's insurance</li>
            <li>Final walkthrough completed</li>
            <li>Income verification current</li>
            <li>Employment verification (day before closing)</li>
            <li>No new credit inquiries or debt</li>
            <li>Updated bank statements</li>
            <li>Appraisal acceptable to lender</li>
            <li>Clear title confirmed</li>
          </ul>

          <p className="highlight">
            <strong>Critical:</strong> Conditions must be cleared PRIOR to closing AND at time of closing.
            Failure to clear = loan won't fund = closing delayed or cancelled.
          </p>
        </div>

        <h3>12.5 Clear to Close</h3>
        <p><strong>Obtained:</strong> Days before closing (typically 2-7 days)</p>
        <p><strong>Means:</strong> All loan conditions satisfied, underwriting complete, loan approved to fund</p>
        <p><strong>Next Steps:</strong> Final walkthrough, closing scheduled, funds wired</p>

        <h3>12.6 Complete Transaction Sequence</h3>
        <div className="sequence-flow">
          <ol>
            <li>✅ <strong>Offer</strong> → Accepted</li>
            <li>✅ <strong>P&S</strong> → Within 10 days</li>
            <li>✅ <strong>Inspection</strong> → Within 10 days</li>
            <li>✅ <strong>Financing Starts</strong> → Couple days after P&S</li>
            <li>✅ <strong>Appraisal & Title Ordered</strong> → Immediately</li>
            <li>✅ <strong>Commitment Letter</strong> → 30-45 days from P&S</li>
            <li>✅ <strong>Clear Conditions</strong> → Before closing</li>
            <li>✅ <strong>Clear to Close</strong> → Days before closing</li>
            <li>✅ <strong>Closing</strong> → Per contract terms</li>
          </ol>
        </div>

        <p className="highlight">
          <strong>Pro Tip:</strong> Managing expectations and communicating timelines clearly is crucial.
          Keep all parties informed of where they are in the process and what's needed next to avoid
          delays and maintain transaction momentum.
        </p>
      </>
    )
  },
  {
    id: 'digital-compliance',
    icon: '📱',
    title: '13. Digital Compliance & Marketing',
    subtitle: 'E-Signatures, Do Not Call, TCPA, CAN-SPAM & COPPA',
    body: (
      <>
        <h3>13.1 Electronic Signatures - Legal & Binding</h3>
        <p><strong>Two Federal Laws Make E-Signatures Valid:</strong></p>
        <ul>
          <li><strong>E-Sign Act (2000):</strong> Federal law making electronic signatures legal and binding in interstate commerce</li>
          <li><strong>UETA:</strong> Uniform Electronic Transactions Act - state-level validation adopted by most states including MA</li>
        </ul>
        <p className="highlight">
          Electronic signatures are <strong>legal and binding</strong> for most real estate documents including offers, 
          contracts, disclosures, and addendums. All parties must consent to use electronic signatures.
        </p>

        <h3>13.2 Do Not Call Registry - STRICT COMPLIANCE</h3>
        <div className="dnc-rules">
          <h4>Key Requirements:</h4>
          <ul>
            <li><strong>Check Every 31 Days:</strong> Search registry at www.donotcall.gov</li>
            <li><strong>Cannot Call Unless:</strong>
              <ul>
                <li>Established Business Relationship (EBR) within 18 months (transaction) or 3 months (inquiry)</li>
                <li>Written consent to call</li>
                <li>Calling about listing they inquired about</li>
              </ul>
            </li>
            <li><strong>Penalties:</strong> Up to $11,000-$43,280 per illegal call</li>
            <li><strong>Internal DNC List:</strong> Required IN ADDITION to National DNC (keep 5 years)</li>
          </ul>

          <h4>Common Misconception - "FREE OFFER" TRAP:</h4>
          <p className="warning">
            ❌ <strong>MYTH:</strong> Offering "free home valuations" or "free CMAs" exempts you from DNC rules.<br/>
            ✅ <strong>REALITY:</strong> It's STILL telemarketing if purpose is to promote your business. 
            Requires EBR or consent. NO EXEMPTION for "free" offers!
          </p>

          <h4>FSBO Contact Rules:</h4>
          <ul>
            <li>✅ <strong>CAN call</strong> on behalf of buyer client (representing buyer)</li>
            <li>❌ <strong>CANNOT call</strong> to solicit listing (marketing yourself)</li>
          </ul>
        </div>

        <h3>13.3 TCPA - Telephone Consumer Protection Act</h3>
        <div className="tcpa-rules">
          <h4>Key Requirements:</h4>
          <ul>
            <li><strong>Time Restrictions:</strong> No calls before 8am or after 9pm LOCAL TIME of person being called</li>
            <li><strong>Caller Disclosures:</strong> Must provide name, phone number, and address at beginning of call</li>
            <li><strong>Marketing Texts:</strong> Require prior express written consent</li>
            <li><strong>Auto-Dialers & Prerecorded Messages:</strong> Require written consent</li>
            <li><strong>Ringless Voicemails:</strong> Require written consent (NOT a loophole!)</li>
            <li><strong>Penalties:</strong> $500-1,500 per violation</li>
          </ul>
        </div>

        <h3>13.4 CAN-SPAM Act - Email Marketing</h3>
        <div className="canspam-rules">
          <h4>Every Commercial Email MUST Include:</h4>
          <ol>
            <li>Clear unsubscribe mechanism (single click or reply)</li>
            <li>Your physical postal address</li>
            <li>Truthful "From" and subject lines</li>
            <li>Identify as advertisement if promotional</li>
          </ol>
          <p><strong>Unsubscribe Processing:</strong> Within 10 BUSINESS DAYS</p>
          <p><strong>Penalties:</strong> Up to $43,792 per email</p>
          <p className="highlight">
            Can email existing customers/clients (EBR) but MUST provide unsubscribe option in every email.
          </p>
        </div>

        <h3>13.5 COPPA - Children's Online Privacy</h3>
        <p><strong>Effective:</strong> July 1, 2013 (7/1/13)</p>
        <p><strong>Protects:</strong> Children under 13 years old</p>
        <ul>
          <li>Requires privacy policy on websites/apps</li>
          <li>Requires verifiable parental consent before collecting data from children under 13</li>
          <li>Limits personal information collection</li>
        </ul>
        <p><em>Most real estate sites not directed at children, but be aware if marketing to families.</em></p>

        <h3>13.6 Broker Advertising & Identification - MA Requirements</h3>
        <div className="broker-advertising-rules">
          <h4>🚨 SALESPERSONS ARE PROHIBITED FROM ADVERTISING</h4>
          <p className="highlight">
            <strong>However, in practice:</strong> Salespersons are <strong>only permitted to advertise with brokerage 
            overseeing ad copy & taking responsibility.</strong> The broker MUST approve all advertising and is liable 
            for compliance.
          </p>

          <h4>General Advertising Rules:</h4>
          <ul>
            <li><strong>❌ Cannot Advertise in ANY Way That is False or Misleading</strong>
              <ul>
                <li>Includes ALL forms of media, internet & websites, etc.</li>
                <li>All claims must be accurate and verifiable</li>
                <li>No exaggerations or misrepresentations</li>
              </ul>
            </li>
          </ul>

          <h4>🚫 NO PUFFING!!</h4>
          <div className="no-puffing-warning">
            <p className="warning">
              <strong>PUFFING</strong> = Making something sound better than it really is
            </p>
            <ul>
              <li>❌ "Better than New"</li>
              <li>❌ "Best house in town"</li>
              <li>❌ "Perfect condition" (unless objectively true)</li>
              <li>❌ "Dream home"</li>
              <li>❌ "Won't last!" (creates false urgency)</li>
            </ul>
            <p className="highlight">
              <strong>Use FACTS, not fluff.</strong> Stick to verifiable statements about property features, 
              square footage, amenities, and location.
            </p>
          </div>

          <h4>🚫 NO BLIND ADS!</h4>
          <div className="blind-ads-warning">
            <p className="warning">
              <strong>BLIND ADS</strong> = Advertisements that don't clearly identify the brokerage
            </p>
            <p><strong>Rule:</strong> Must include <strong>name of company in ALL advertisements</strong></p>
            <ul>
              <li>❌ "Jane Smith, Realtor® - 781-555-5555" (missing brokerage name)</li>
              <li>❌ "Call me for a free home valuation!" (no company identification)</li>
              <li>✅ "Jane Smith - XYZ Realty Corp. - 781-555-5555"</li>
            </ul>
          </div>

          <h4>📱 SOCIAL MEDIA - Twitter, Facebook, LinkedIn, Instagram, etc.</h4>
          <p className="highlight">
            <strong>IMPORTANT:</strong> Massachusetts <strong>DOES NOT acknowledge the 1-click rule</strong> even though 
            NAR does. In MA, your brokerage name must be clearly visible in the post itself, not just on your profile.
          </p>
          <ul>
            <li><strong>NAR 1-Click Rule:</strong> Allows brokerage info to be 1 click away (e.g., in bio/profile)</li>
            <li><strong>MA Rule:</strong> Brokerage name must be <strong>IN THE POST/ADVERTISEMENT ITSELF</strong></li>
            <li><strong>Best Practice:</strong> Include brokerage name in every post to comply with MA law</li>
          </ul>

          <h4>📋 BROKER IDENTIFICATION - Company Name & Phone # Must Be Prominent</h4>
          <div className="broker-id-rules">
            <p className="highlight">
              <strong>Rule:</strong> Company name & phone number must be <strong>prominent within the advertisement.</strong>
            </p>
            
            <h5>SIZE DOES MATTER:</h5>
            <p>
              While no <strong>actual size requirements</strong> exist in the laws, <strong>the consumer must be able 
              to easily identify which company placed the Ad.</strong>
            </p>

            <div className="advertising-examples">
              <h5>❌ INCORRECT Example:</h5>
              <div className="ad-example-wrong">
                <p style={{fontSize: '24px', fontWeight: 'bold', textAlign: 'center'}}>
                  Jane Smith<br/>
                  &<br/>
                  Associates<br/>
                  781-555-5555
                </p>
                <p style={{fontSize: '10px', textAlign: 'right'}}>XYZ Corp.</p>
              </div>
              <p className="warning">
                <strong>❌ WRONG:</strong> Brokerage name "XYZ Corp." is tiny and barely visible. Agent name is prominent. 
                Consumer cannot easily identify the company.
              </p>

              <h5>✅ CORRECT Example:</h5>
              <div className="ad-example-correct">
                <p style={{fontSize: '24px', fontWeight: 'bold', textAlign: 'center'}}>
                  Jane Smith<br/>
                  &<br/>
                  Associates<br/>
                  781-555-5555
                </p>
                <p style={{fontSize: '18px', fontWeight: 'bold', textAlign: 'center', backgroundColor: '#ffeb3b', padding: '5px'}}>
                  XYZ Corp.
                </p>
              </div>
              <p className="success">
                <strong>✅ CORRECT:</strong> Brokerage name "XYZ Corp." is prominent and easily visible. Consumer 
                can clearly identify which company placed the ad.
              </p>
            </div>

            <h5>Best Practices:</h5>
            <ul>
              <li><strong>Brokerage Name Size:</strong> Should be at least as large as agent name, or larger</li>
              <li><strong>Brokerage Phone:</strong> Include broker's office phone number (not just agent's cell)</li>
              <li><strong>Visibility:</strong> Don't hide brokerage info in tiny print or light colors</li>
              <li><strong>Placement:</strong> Put brokerage name near agent name, not in a corner</li>
              <li><strong>Consistency:</strong> Use same format across all advertising channels</li>
            </ul>
          </div>

          <h4>Common Advertising Violations:</h4>
          <table>
            <thead>
              <tr>
                <th>Violation</th>
                <th>Example</th>
                <th>Consequence</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Blind Ad</strong></td>
                <td>"Beautiful 3BR home, call Jane 555-1234"</td>
                <td>License suspension, fines</td>
              </tr>
              <tr>
                <td><strong>Puffing</strong></td>
                <td>"Best investment opportunity ever!"</td>
                <td>Disciplinary action, lawsuit</td>
              </tr>
              <tr>
                <td><strong>False Claims</strong></td>
                <td>"Guaranteed to sell in 30 days!"</td>
                <td>Chapter 93A violation, fines</td>
              </tr>
              <tr>
                <td><strong>Hidden Brokerage</strong></td>
                <td>Tiny brokerage name in corner</td>
                <td>Board complaint, fine</td>
              </tr>
              <tr>
                <td><strong>Unauthorized Ad</strong></td>
                <td>Salesperson advertising without broker approval</td>
                <td>Immediate license suspension</td>
              </tr>
            </tbody>
          </table>

          <h4>Social Media Specific Requirements:</h4>
          <ul>
            <li><strong>Facebook Posts:</strong> Include brokerage name in the post text, not just profile</li>
            <li><strong>Instagram Posts:</strong> Include brokerage in caption or overlay on image</li>
            <li><strong>Twitter/X:</strong> Include brokerage in bio AND in promotional tweets</li>
            <li><strong>LinkedIn:</strong> List brokerage as employer AND mention in property posts</li>
            <li><strong>TikTok/Reels:</strong> Display brokerage name on screen or in description</li>
            <li><strong>YouTube:</strong> Include brokerage in video description and on-screen graphics</li>
          </ul>

          <h4>Website & Email Signature Requirements:</h4>
          <ul>
            <li><strong>Website:</strong> Brokerage name on every page, typically in header/footer</li>
            <li><strong>Email Signature:</strong> Must include:
              <ul>
                <li>Your full name</li>
                <li>Brokerage name</li>
                <li>Office phone number</li>
                <li>Office address (physical location)</li>
                <li>License number (best practice)</li>
              </ul>
            </li>
            <li><strong>Business Cards:</strong> Brokerage name must be prominent, not in fine print</li>
          </ul>

          <div className="advertising-checklist">
            <h4>✅ Advertising Compliance Checklist:</h4>
            <ol>
              <li>☐ Broker approved all advertising copy</li>
              <li>☐ Brokerage name is prominent and easily readable</li>
              <li>☐ Office phone number is included</li>
              <li>☐ No puffing or exaggerated claims</li>
              <li>☐ All statements are factual and verifiable</li>
              <li>☐ No blind ads (company clearly identified)</li>
              <li>☐ Social media posts include brokerage in post itself (not just profile)</li>
              <li>☐ Fair Housing compliance (no discriminatory language or images)</li>
              <li>☐ Property photos are accurate and current</li>
              <li>☐ Price and property details are correct</li>
            </ol>
          </div>
        </div>

        <p className="highlight">
          <strong>Bottom Line:</strong> Digital compliance is NON-NEGOTIABLE. One violation can cost thousands 
          or end your career. Always verify you have proper authorization before calling, texting, or emailing. 
          <strong>ALL advertising must prominently display your brokerage name and be approved by your broker.</strong>
        </p>
      </>
    )
  },
  {
    id: 'multi-state',
    icon: '🗺️',
    title: '14. Multi-State Licensing',
    subtitle: 'Expanding Your Practice to Neighboring States',
    body: (
      <>
        <h3>14.1 License Reciprocity Explained</h3>
        <p><strong>What It Is:</strong> Agreement allowing licensed agents from one state to obtain license 
        in another state with reduced requirements (waiving pre-license education or national exam).</p>
        <p><strong>What It's NOT:</strong> ❌ Not automatic licensing ❌ Not permission to practice cross-border 
        ❌ Not the same as having two licenses</p>

        <h3>14.2 Massachusetts Neighboring States</h3>
        <div className="state-comparison">
          <h4>Rhode Island (EASIEST) ⭐</h4>
          <ul>
            <li><strong>Reciprocity:</strong> ✅ YES</li>
            <li><strong>Requirements:</strong> State exam only (no course, no national exam)</li>
            <li><strong>Cost:</strong> ~$100-150</li>
            <li><strong>Timeline:</strong> 2-4 weeks</li>
            <li><strong>Best For:</strong> Quick expansion, testing multi-state waters</li>
          </ul>

          <h4>New Hampshire (POPULAR) ⭐⭐</h4>
          <ul>
            <li><strong>Reciprocity:</strong> ✅ YES</li>
            <li><strong>Requirements:</strong> NH state exam + 40-hour NH course</li>
            <li><strong>Cost:</strong> ~$150-250 + $200-300 course</li>
            <li><strong>Timeline:</strong> 4-8 weeks</li>
            <li><strong>Best For:</strong> Border towns, vacation/second-home market (lakes, mountains, seacoast)</li>
          </ul>

          <h4>Vermont ⭐⭐</h4>
          <ul>
            <li><strong>Reciprocity:</strong> ✅ YES</li>
            <li><strong>Requirements:</strong> VT state exam + background check</li>
            <li><strong>Cost:</strong> ~$100-200</li>
            <li><strong>Timeline:</strong> 3-6 weeks</li>
            <li><strong>Best For:</strong> Western MA agents, niche market</li>
          </ul>

          <h4>Connecticut ⭐⭐⭐</h4>
          <ul>
            <li><strong>Reciprocity:</strong> ✅ YES</li>
            <li><strong>Requirements:</strong> CT state exam + 60-hour CT course</li>
            <li><strong>Cost:</strong> ~$200-300 + $300-400 course</li>
            <li><strong>Timeline:</strong> 6-10 weeks</li>
            <li><strong>Best For:</strong> Southwestern MA agents, CT border areas</li>
          </ul>

          <h4>New York (HARDEST) ⭐⭐⭐⭐⭐</h4>
          <ul>
            <li><strong>Reciprocity:</strong> ❌ NO</li>
            <li><strong>Requirements:</strong> Full 75-hour course + national AND NY state exams</li>
            <li><strong>Cost:</strong> ~$500-800 total</li>
            <li><strong>Timeline:</strong> 3-6 months</li>
            <li><strong>Best For:</strong> Serious expansion, large market opportunity</li>
          </ul>
        </div>

        <h3>14.3 Maintaining Multiple Licenses</h3>
        <ul>
          <li>Complete CE requirements for EACH state (can be 12-24+ hours annually)</li>
          <li>Pay renewal fees for each state</li>
          <li>Maintain active status in all states</li>
          <li>Comply with each state's laws and regulations</li>
          <li>Have proper E&O coverage for all states</li>
        </ul>

        <h3>14.4 Multi-State Broker Operations</h3>
        <p><strong>Can You Own Brokerages in Multiple States?</strong> YES, but requires:</p>
        <ul>
          <li>Obtain broker license meeting each state's requirements</li>
          <li>Comply with each state's regulations</li>
          <li>Maintain separate trust accounts per state</li>
          <li>Have proper insurance coverage in each state</li>
        </ul>

        <p className="highlight">
          <strong>Why Expand?</strong> Border town coverage, vacation/second-home markets, client relocation 
          services, increased income potential, competitive advantage, and professional development.
        </p>
      </>
    )
  },
  {
    id: 'referrals',
    icon: '💰',
    title: '15. Referrals & Compensation Rules',
    subtitle: 'Referral Fees, Gifts to Clients & RESPA Compliance',
    body: (
      <>
        <h3>15.1 Referral Fees (20-35%)</h3>
        <p><strong>What They Are:</strong> Commission paid to agent for referring a client to another agent</p>
        <p><strong>Typical Range:</strong> 20-35% of receiving agent's commission</p>
        <p><strong>Example:</strong> Receiving agent earns $10,000 → Referring agent gets $2,000-3,500</p>

        <h4>Out-of-State Referrals:</h4>
        <ul>
          <li>✅ Generally ALLOWED if you're licensed in at least one state</li>
          <li>✅ Can receive fees from states where you're not licensed</li>
          <li>✅ Must be referring from your home state</li>
          <li>✅ Receiving agent must be licensed in transaction state</li>
        </ul>

        <h4>Referral Agreements - REQUIRED:</h4>
        <ul>
          <li>Must be in WRITING</li>
          <li>Include: names, client info, fee %, payment terms, signatures</li>
          <li>Sign BEFORE transaction closes</li>
          <li>Between licensed agents/brokers ONLY</li>
        </ul>

        <h3>15.2 Who CANNOT Receive Referral Fees</h3>
        <div className="warning">
          <p><strong>❌ UNLICENSED PERSONS CANNOT RECEIVE REFERRAL FEES</strong></p>
          <ul>
            <li>RESPA and state laws prohibit it</li>
            <li>Only licensed professionals can receive compensation</li>
            <li>Violations = fines, license suspension, criminal penalties</li>
          </ul>
        </div>

        <h3>15.3 Gifts to Clients - The $100 Rule</h3>
        <div className="gift-rules">
          <h4>✅ ALLOWED:</h4>
          <ul>
            <li>Closing gifts (gift baskets, plants, home items)</li>
            <li>Keep under $100 (recommended)</li>
            <li>Thank-you gifts after closing</li>
            <li>Holiday cards and small tokens</li>
            <li>Branded marketing items (calendars, magnets)</li>
          </ul>

          <h4>❌ AVOID:</h4>
          <ul>
            <li>Cash or cash equivalents</li>
            <li>Gift cards (seen as cash)</li>
            <li>Anything to induce future business</li>
            <li>Gifts before transaction (inducement)</li>
          </ul>
        </div>

        <h3>15.4 RESPA Section 8 - Critical Compliance</h3>
        <p><strong>Prohibits:</strong></p>
        <ul>
          <li>❌ Kickbacks for referrals</li>
          <li>❌ Unearned fees</li>
          <li>❌ Gifts in exchange for business referrals</li>
          <li>❌ Payments to settlement service providers for referrals</li>
        </ul>
        <p><strong>Penalties:</strong> $10,000+ fines, up to 1 year prison, license revocation</p>

        <h3>15.5 Unlicensed Assistant Compensation</h3>
        <div className="assistant-rules">
          <h4>✅ CAN PAY:</h4>
          <ul>
            <li>Hourly wage</li>
            <li>Annual salary</li>
            <li>Bonuses (not transaction-based)</li>
          </ul>

          <h4>❌ CANNOT PAY:</h4>
          <ul>
            <li>Commission splits</li>
            <li>Percentage of sales</li>
            <li>Transaction-based pay</li>
          </ul>

          <h4>What Assistants CAN Do:</h4>
          <ul>
            <li>Schedule appointments, answer phones</li>
            <li>Prepare marketing materials</li>
            <li>Maintain files, coordinate closings</li>
          </ul>

          <h4>What Assistants CANNOT Do:</h4>
          <ul>
            <li>Show properties, discuss terms</li>
            <li>Negotiate, give advice</li>
            <li>Anything requiring a license</li>
          </ul>
        </div>

        <p className="highlight">
          <strong>Key Takeaway:</strong> Only licensed agents can receive referral fees or commission-based pay. 
          Always disclose referral arrangements to clients for transparency and trust.
        </p>
      </>
    )
  },
  {
    id: 'professional-development',
    icon: '🎓',
    title: '16. Professional Development & Licensing',
    subtitle: 'Continuing Education, Certifications & Career Growth',
    body: (
      <>
        <h3>16.1 Massachusetts Continuing Education (CE)</h3>
        <div className="ce-requirements">
          <p><strong>Required:</strong> 12 hours every 2 years for license renewal</p>
          <h4>Must Include:</h4>
          <ul>
            <li>Fair Housing Law (required topic)</li>
            <li>Board-approved courses from accredited providers</li>
            <li>Complete before license expiration</li>
            <li>Keep certificates for records</li>
          </ul>
          <p><strong>Renewal Cycle:</strong> Every 2 years on your birth month</p>
          <p><strong>Fees:</strong> $200-250 for renewal + $100-300 for CE courses</p>
        </div>

        <h3>16.2 Broker vs Salesperson Requirements</h3>
        <div className="license-comparison">
          <h4>Salesperson (Agent):</h4>
          <ul>
            <li>40-hour pre-license course</li>
            <li>Pass state exam</li>
            <li>Affiliate with licensed broker</li>
            <li>Cannot operate independently</li>
            <li>12 hrs CE every 2 years</li>
          </ul>

          <h4>Broker:</h4>
          <ul>
            <li>3+ years as licensed salesperson (in MA or equivalent)</li>
            <li>30-hour broker course</li>
            <li>Pass broker exam</li>
            <li>Can supervise salespeople</li>
            <li>Can operate own brokerage</li>
            <li>12 hrs CE every 2 years</li>
          </ul>
        </div>

        <h3>16.2.5 License Application Requirements</h3>
        <div className="application-requirements">
          <p className="highlight">
            <strong>Additional requirements for obtaining a Massachusetts real estate license:</strong>
          </p>

          <h4>📋 Citizenship Requirement (Constitutionally Defective - NOT Enforced)</h4>
          <div className="citizenship-requirement">
            <p className="warning">
              <strong>Applicant to show evidence of citizenship or intent of citizenship</strong>
            </p>
            <p className="highlight">
              <strong>⚠️ IMPORTANT:</strong> The "board" based on Attorney General's opinion, <strong>declared this 
              requirement to be constitutionally defective and does not enforce requirement even though still listed 
              on the MGL's</strong> (Massachusetts General Laws).
            </p>
            <ul>
              <li><strong>Historical Requirement:</strong> Used to require proof of US citizenship or intent to become citizen</li>
              <li><strong>Current Status:</strong> NOT ENFORCED - declared unconstitutional</li>
              <li><strong>Why Still Listed:</strong> Legislature hasn't removed from statute yet</li>
              <li><strong>For Applicants:</strong> You do NOT need to prove citizenship to get licensed</li>
              <li><strong>Legal Status:</strong> Can obtain license regardless of citizenship status</li>
            </ul>
            <p className="success">
              <strong>✅ Bottom Line:</strong> Don't worry about this requirement - the Board does not enforce it 
              and will not ask for proof of citizenship. This is an outdated law that remains on the books but is 
              not applied.
            </p>
          </div>

          <h4>💰 Tax Compliance (STRICTLY ENFORCED)</h4>
          <div className="tax-requirement">
            <p className="warning">
              <strong>Must have filed all state tax returns & paid all taxes.</strong>
            </p>
            <ul>
              <li><strong>Requirement:</strong> All MA state tax returns must be filed and current</li>
              <li><strong>All Taxes Paid:</strong> Cannot have outstanding tax debt to MA</li>
              <li><strong>Verification:</strong> Board checks with MA Department of Revenue</li>
              <li><strong>Includes:</strong>
                <ul>
                  <li>Income tax</li>
                  <li>Sales tax (if you have a business)</li>
                  <li>Any other MA state taxes owed</li>
                </ul>
              </li>
              <li><strong>Payment Plans:</strong> If on payment plan, must be current with payments</li>
              <li><strong>Federal Taxes:</strong> Not checked by MA Board, only state taxes</li>
            </ul>
            <p className="highlight">
              <strong>⚠️ This IS Enforced:</strong> Unlike the citizenship requirement, tax compliance is strictly 
              enforced. If you owe MA taxes or haven't filed returns, your license application will be denied or 
              delayed until resolved.
            </p>
          </div>

          <h4>🛡️ Broker Surety Bond Requirement</h4>
          <div className="surety-bond">
            <p className="warning">
              <strong>Brokers must obtain $5,000 Surety Bond</strong>
            </p>
            <ul>
              <li><strong>Who Needs It:</strong> BROKERS only (not salespersons)</li>
              <li><strong>Amount:</strong> Minimum $5,000</li>
              <li><strong>Purpose:</strong> Protects public from broker's dishonest acts</li>
              <li><strong>When Required:</strong> Before broker license is issued</li>
              <li><strong>How to Obtain:</strong>
                <ul>
                  <li>Contact insurance company or surety bond provider</li>
                  <li>Apply for real estate surety bond</li>
                  <li>Pay premium (typically $100-200 per year)</li>
                  <li>Submit proof to Board with application</li>
                </ul>
              </li>
              <li><strong>Renewal:</strong> Must maintain bond while license is active</li>
              <li><strong>Cost:</strong> Annual premium based on credit score (typically $100-300/year)</li>
            </ul>
            <p className="highlight">
              <strong>Note:</strong> This is different from E&O insurance. The surety bond is a licensing requirement 
              for brokers. E&O insurance is recommended but not legally required by MA.
            </p>
          </div>

          <h4>🎤 Board Interview (If Deemed Necessary)</h4>
          <div className="board-interview">
            <p className="warning">
              <strong>Applicant required to appear before board for personal interview if they deem necessary</strong>
            </p>
            <ul>
              <li><strong>When Required:</strong> Board discretion - not automatic for all applicants</li>
              <li><strong>Common Triggers:</strong>
                <ul>
                  <li>Criminal history on background check</li>
                  <li>Prior license issues in another state</li>
                  <li>Questionable information on application</li>
                  <li>Complaints or concerns about applicant</li>
                  <li>Gap in work history or education</li>
                </ul>
              </li>
              <li><strong>What to Expect:</strong>
                <ul>
                  <li>Appear in person at Board offices</li>
                  <li>Answer questions about your application</li>
                  <li>Explain any issues or concerns</li>
                  <li>Demonstrate knowledge and character</li>
                  <li>Be honest and professional</li>
                </ul>
              </li>
              <li><strong>Preparation:</strong>
                <ul>
                  <li>Review your entire application</li>
                  <li>Be ready to explain any issues</li>
                  <li>Bring supporting documents</li>
                  <li>Dress professionally</li>
                  <li>Be honest - don't hide anything</li>
                </ul>
              </li>
              <li><strong>Outcome:</strong>
                <ul>
                  <li>Board may approve license</li>
                  <li>Board may deny license</li>
                  <li>Board may approve with conditions</li>
                  <li>Board may request additional information</li>
                </ul>
              </li>
            </ul>
            <p className="highlight">
              <strong>Best Practice:</strong> Be completely honest on your application. If you have any issues 
              (criminal history, previous license problems, etc.), disclose them upfront and provide explanation. 
              Hiding information that comes up in background check is worse than disclosing and explaining.
            </p>
          </div>

          <h4>✅ Complete License Application Checklist:</h4>
          <div className="application-checklist">
            <h5>For Salesperson License:</h5>
            <ol>
              <li>☐ Complete 40-hour pre-license course from approved school</li>
              <li>☐ Pass state salesperson exam (score 70% or higher)</li>
              <li>☐ Complete license application (online or paper)</li>
              <li>☐ Pay application fee ($100-150)</li>
              <li>☐ Submit background check/fingerprints</li>
              <li>☐ Verify all MA state taxes filed and paid</li>
              <li>☐ <s>Provide proof of citizenship</s> (NOT ENFORCED - ignore this)</li>
              <li>☐ Wait for Board approval</li>
              <li>☐ Affiliate with licensed broker before license issued</li>
              <li>☐ Appear for interview if requested by Board</li>
            </ol>

            <h5>For Broker License (Additional Requirements):</h5>
            <ol>
              <li>☐ 3+ years as licensed salesperson (MA or equivalent)</li>
              <li>☐ Complete 30-hour broker pre-license course</li>
              <li>☐ Pass state broker exam (score 70% or higher)</li>
              <li>☐ Complete broker license application</li>
              <li>☐ Pay broker application fee ($150-200)</li>
              <li>☐ Submit background check/fingerprints</li>
              <li>☐ Verify all MA state taxes filed and paid</li>
              <li>☐ <strong>Obtain $5,000 surety bond</strong> (CRITICAL - broker only!)</li>
              <li>☐ Submit proof of surety bond to Board</li>
              <li>☐ <s>Provide proof of citizenship</s> (NOT ENFORCED - ignore this)</li>
              <li>☐ Wait for Board approval</li>
              <li>☐ Appear for interview if requested by Board</li>
            </ol>
          </div>

          <h4>⏱️ Timeline for License Application:</h4>
          <ul>
            <li><strong>Course Completion:</strong> 40 hours (1-4 weeks depending on schedule)</li>
            <li><strong>Exam Scheduling:</strong> 1-2 weeks after course</li>
            <li><strong>Application Processing:</strong> 2-4 weeks after passing exam</li>
            <li><strong>Background Check:</strong> 2-6 weeks</li>
            <li><strong>Board Review:</strong> 1-4 weeks</li>
            <li><strong>Total:</strong> 6-12 weeks from starting course to receiving license</li>
            <li><strong>If Interview Required:</strong> Add 4-8 weeks</li>
          </ul>

          <div className="application-summary">
            <h4>🎯 Application Requirements Summary:</h4>
            <ul>
              <li>✅ <strong>Tax Compliance:</strong> STRICTLY ENFORCED - must have all MA taxes filed and paid</li>
              <li>✅ <strong>Broker Surety Bond:</strong> REQUIRED for brokers - $5,000 minimum</li>
              <li>✅ <strong>Board Interview:</strong> POSSIBLE - be prepared, honest, and professional</li>
              <li>❌ <strong>Citizenship:</strong> NOT ENFORCED - don't worry about this outdated requirement</li>
            </ul>
            <p className="warning">
              <strong>⚠️ Most Common Application Delays:</strong> Outstanding MA tax debt and incomplete background 
              checks. Make sure all state taxes are current BEFORE applying!
            </p>
          </div>
        </div>

        <h3>16.2.6 Broker & Salesperson License Structure</h3>
        <div className="license-structure">
          <h4>🏢 Broker License Entity Types</h4>
          <div className="broker-entity-types">
            <p className="highlight">
              <strong>Brokers license can be held by corporation, society, association or partnership.</strong>
            </p>
            <ul>
              <li><strong>Corporation:</strong> Real estate brokerage structured as corp (Inc., LLC, etc.)</li>
              <li><strong>Society:</strong> Organized group operating as brokerage</li>
              <li><strong>Association:</strong> Professional association acting as brokerage</li>
              <li><strong>Partnership:</strong> Two or more people operating brokerage together</li>
              <li><strong>Sole Proprietorship:</strong> Individual broker (also allowed)</li>
            </ul>
            <p><strong>Key Point:</strong> Broker license is not limited to individuals - business entities can hold broker licenses</p>
          </div>

          <h4>📝 D/B/A's (Doing Business As) - Agency Disclosure Requirements</h4>
          <div className="dba-requirements">
            <p className="warning">
              <strong>D/B/A's - agency use name of broker owner & their license # on the Agency Disclosure forms</strong>
            </p>
            <ul>
              <li><strong>D/B/A Explained:</strong> "Doing Business As" - trade name different from legal entity name</li>
              <li><strong>Example:</strong> "John Smith Real Estate" (D/B/A) owned by "Smith Properties LLC" (legal entity)</li>
              <li><strong>Agency Disclosure Forms Must Show:</strong>
                <ul>
                  <li>Name of broker owner (legal entity or individual)</li>
                  <li>Broker's license number</li>
                  <li>Cannot just list D/B/A name without broker owner info</li>
                </ul>
              </li>
              <li><strong>Why:</strong> Public must know who is legally responsible (licensed broker)</li>
              <li><strong>Transparency:</strong> Prevents confusion about who holds the license</li>
            </ul>
            <p className="highlight">
              <strong>Example:</strong> If you work for "Boston Dream Homes" (D/B/A) owned by "Jane Doe Realty Corp" 
              (licensed broker), your agency disclosure must list "Jane Doe Realty Corp, License #123456" not just 
              "Boston Dream Homes."
            </p>
          </div>

          <h4>👥 Teams Cannot Get Licensed</h4>
          <div className="team-licensing">
            <p className="warning">
              <strong>Teams cannot get licensed.</strong>
            </p>
            <ul>
              <li><strong>What This Means:</strong> Real estate "teams" are marketing groups, not legal entities</li>
              <li><strong>Examples:</strong>
                <ul>
                  <li>❌ "The Smith Team" cannot hold a broker license</li>
                  <li>❌ "Premier Sales Group" cannot get licensed as a team</li>
                  <li>✅ Team members must be individually licensed under a broker</li>
                </ul>
              </li>
              <li><strong>How Teams Work:</strong>
                <ul>
                  <li>Team is marketing brand, not legal entity</li>
                  <li>Each team member must have individual salesperson or broker license</li>
                  <li>All team members must be affiliated with same licensed broker</li>
                  <li>Team name can be used for marketing but not for licensing</li>
                </ul>
              </li>
              <li><strong>Agency Disclosure:</strong> Must use individual agent's name and broker's name, not team name</li>
              <li><strong>Advertising:</strong> Team name can be used but must include broker's name and license info</li>
            </ul>
            <p className="highlight">
              <strong>Common Scenario:</strong> "The Smith Team" works for "ABC Realty Corp" (licensed broker). Each 
              team member has individual license under ABC Realty Corp. They can market as "The Smith Team" but all 
              legal documents and disclosures must show individual agent names and ABC Realty Corp broker info.
            </p>
          </div>

          <h4>👔 Designated Officer Requirement (For Entity Brokers)</h4>
          <div className="designated-officer">
            <p className="warning">
              <strong>(1) person must be Designated Officer of entity</strong><br/>
              <strong>Designated Officer must hold a broker license.</strong>
            </p>
            <ul>
              <li><strong>When Required:</strong> If brokerage is corporation, LLC, partnership, or other entity</li>
              <li><strong>One Person Only:</strong> Exactly ONE person must be designated officer</li>
              <li><strong>Must Hold Broker License:</strong> Designated officer cannot be just a salesperson</li>
              <li><strong>Responsibilities:</strong>
                <ul>
                  <li>Supervise all real estate activities of the entity</li>
                  <li>Ensure compliance with MA real estate laws</li>
                  <li>Responsible for all agents affiliated with entity</li>
                  <li>Sign official documents on behalf of entity</li>
                  <li>Handle Board communications</li>
                </ul>
              </li>
              <li><strong>Liability:</strong> Designated officer is responsible for entity's compliance</li>
              <li><strong>Cannot Have Multiple:</strong> Entity can only have ONE designated officer at a time</li>
            </ul>
            <p className="highlight">
              <strong>Example:</strong> "Smith Realty LLC" is a corporation. John Smith (broker license #12345) is 
              the Designated Officer. He's responsible for overseeing all agents, ensuring compliance, and is the 
              point of contact with the Board. Even though the entity holds the broker license, John is personally 
              responsible as the designated officer.
            </p>
          </div>

          <h4>📅 Examination Frequency Requirements</h4>
          <div className="exam-frequency">
            <p className="warning">
              <strong>Broker examination must be offered at least 6 times a year and Salesperson exams at least 
              8 times per year. (minimum)</strong>
            </p>
            <ul>
              <li><strong>Broker Exam:</strong> Minimum 6 times per year
                <ul>
                  <li>Approximately every 2 months</li>
                  <li>Actual schedule may offer more frequently</li>
                  <li>Ensures reasonable access to exam</li>
                </ul>
              </li>
              <li><strong>Salesperson Exam:</strong> Minimum 8 times per year
                <ul>
                  <li>Approximately every 1.5 months</li>
                  <li>More frequent because higher demand</li>
                  <li>Actual schedule may offer more frequently</li>
                </ul>
              </li>
              <li><strong>Why Different?</strong> More people take salesperson exam, so offered more often</li>
              <li><strong>Scheduling:</strong> Check with testing center for exact dates</li>
              <li><strong>Re-Takes:</strong> If you fail, must wait until next scheduled exam date</li>
            </ul>
            <p className="highlight">
              <strong>Practical Impact:</strong> If you fail the exam, you won't have to wait more than 2 months 
              (broker) or 1.5 months (salesperson) for the next opportunity. In reality, most testing centers offer 
              exams more frequently than the minimum.
            </p>
          </div>

          <h4>♿ Fee Waivers for Disabled Veterans and Blind Persons</h4>
          <div className="fee-waivers">
            <p className="warning">
              <strong>Fees for issuance or renewal of broker or salespersons license are waived for blind persons 
              or paraplegic veterans.</strong>
            </p>
            <ul>
              <li><strong>Who Qualifies:</strong>
                <ul>
                  <li>Blind persons (legally blind)</li>
                  <li>Paraplegic veterans (service-connected paralysis)</li>
                </ul>
              </li>
              <li><strong>What's Waived:</strong>
                <ul>
                  <li>License issuance fees (first-time license)</li>
                  <li>License renewal fees (every 2 years)</li>
                  <li>Both broker AND salesperson licenses covered</li>
                </ul>
              </li>
              <li><strong>What's NOT Waived:</strong>
                <ul>
                  <li>Pre-license course fees (still must pay school)</li>
                  <li>Exam fees (may still apply - check with testing center)</li>
                  <li>CE course fees (must still pay for continuing education)</li>
                  <li>E&O insurance, MLS fees, NAR dues (private fees not waived)</li>
                </ul>
              </li>
              <li><strong>How to Apply:</strong>
                <ul>
                  <li>Complete standard license application</li>
                  <li>Include documentation of blindness or paraplegic veteran status</li>
                  <li>Medical certification for blindness</li>
                  <li>VA documentation for paraplegic veteran status</li>
                  <li>Board will review and approve waiver</li>
                </ul>
              </li>
              <li><strong>Renewal:</strong> Waiver applies to renewals too - must re-submit documentation each renewal</li>
            </ul>
            <p className="highlight">
              <strong>Savings:</strong> License fees are typically $100-200 for issuance and $200-250 for renewal 
              every 2 years. This waiver can save $400-700 over a typical 4-year period. It's a significant benefit 
              for qualified individuals.
            </p>
          </div>

          <div className="license-structure-summary">
            <h4>🎯 License Structure Summary:</h4>
            <ul>
              <li>✅ <strong>Broker licenses:</strong> Can be held by corporations, societies, associations, partnerships, or individuals</li>
              <li>✅ <strong>D/B/A's:</strong> Must show broker owner name & license # on agency disclosure forms</li>
              <li>✅ <strong>Teams:</strong> Cannot get licensed (marketing groups only, individuals must be licensed)</li>
              <li>✅ <strong>Designated Officer:</strong> Entities must have ONE designated officer with broker license</li>
              <li>✅ <strong>Exams:</strong> Broker minimum 6x/year, Salesperson minimum 8x/year</li>
              <li>✅ <strong>Fee Waivers:</strong> Available for blind persons and paraplegic veterans</li>
            </ul>
          </div>
        </div>

        <h3>16.3 Professional Certifications</h3>
        <div className="certifications">
          <h4>GRI (Graduate, REALTOR® Institute)</h4>
          <ul>
            <li><strong>Requirements:</strong> 90+ hours of coursework</li>
            <li><strong>Focus:</strong> Advanced real estate topics, sales strategies</li>
            <li><strong>Cost:</strong> $800-1,200 total</li>
            <li><strong>Benefits:</strong> Enhanced credibility, advanced knowledge</li>
          </ul>

          <h4>CRS (Certified Residential Specialist)</h4>
          <ul>
            <li><strong>Requirements:</strong> Experience + advanced courses</li>
            <li><strong>Focus:</strong> Residential transaction expertise</li>
            <li><strong>Cost:</strong> $1,000-1,500</li>
            <li><strong>Benefits:</strong> Top 3% designation, market leader status</li>
          </ul>

          <h4>ABR (Accredited Buyer's Representative)</h4>
          <ul>
            <li><strong>Requirements:</strong> ABR course + 5+ buyer transactions</li>
            <li><strong>Focus:</strong> Buyer representation expertise</li>
            <li><strong>Cost:</strong> $400-600</li>
            <li><strong>Benefits:</strong> Specialized buyer agency knowledge</li>
          </ul>

          <h4>SRES (Seniors Real Estate Specialist)</h4>
          <ul>
            <li><strong>Focus:</strong> Serving 50+ demographic</li>
            <li><strong>Cost:</strong> $400-600</li>
            <li><strong>Benefits:</strong> Niche market expertise</li>
          </ul>

          <h4>CNE (Certified Negotiation Expert)</h4>
          <ul>
            <li><strong>Focus:</strong> Advanced negotiation strategies</li>
            <li><strong>Cost:</strong> $300-500</li>
            <li><strong>Benefits:</strong> Enhanced deal-making skills</li>
          </ul>

          <p><em>All certifications are optional but enhance marketability and expertise.</em></p>
        </div>

        <h3>16.4 Mandatory vs Optional Requirements</h3>
        <div className="requirements-table">
          <h4>✅ MANDATORY (Required to Practice):</h4>
          <ul>
            <li>Real estate license (active status)</li>
            <li>Broker affiliation</li>
            <li>12 hrs CE every 2 years</li>
            <li>License renewal every 2 years</li>
            <li>Fair Housing compliance</li>
          </ul>

          <h4>💡 OPTIONAL (Recommended for Success):</h4>
          <ul>
            <li>Professional certifications (GRI, CRS, ABR, etc.)</li>
            <li>NAR/MAR membership (often required by brokerage)</li>
            <li>MLS access (often required by brokerage)</li>
            <li>Additional training and education</li>
          </ul>
        </div>

        <h3>16.5 Licensing Requirements & Violations (CRITICAL!)</h3>
        <div className="licensing-requirements">
          <h4>🚨 Criminal Conviction Reporting (30-Day Rule)</h4>
          <div className="conviction-reporting">
            <p className="warning">
              <strong>A broker or salesperson shall report to the Board within 30 days his or her conviction 
              of any crime including any misdemeanor or felony</strong> under the law of the Commonwealth, 
              the United States or laws of another jurisdiction which if committed in Massachusetts would 
              constitute a crime under Massachusetts law.
            </p>

            <h5>What Must Be Reported:</h5>
            <ul>
              <li><strong>ANY Crime:</strong> Including misdemeanors and felonies</li>
              <li><strong>All Jurisdictions:</strong> MA, other states, federal</li>
              <li><strong>Equivalent Crimes:</strong> If it would be a crime in MA, report it</li>
              <li><strong>DUI/OUI:</strong> Yes, must report</li>
              <li><strong>Domestic Incidents:</strong> Yes, must report if convicted</li>
              <li><strong>Drug Charges:</strong> Yes, must report</li>
              <li><strong>Theft/Fraud:</strong> Yes, must report</li>
            </ul>

            <h5>Timeline:</h5>
            <p><strong>Within 30 DAYS of conviction</strong> (not arrest - conviction!)</p>

            <h5>How to Report:</h5>
            <ul>
              <li>Written notice to the Board of Registration of Real Estate Brokers and Salespersons</li>
              <li>Include: Your name, license number, date of conviction, charge, jurisdiction, court</li>
              <li>Attach: Copy of court judgment or conviction record</li>
              <li>Send certified mail with return receipt</li>
            </ul>

            <h5>Consequences of NOT Reporting:</h5>
            <ul>
              <li>❌ Automatic license suspension or revocation</li>
              <li>❌ Additional disciplinary action for failure to report</li>
              <li>❌ Cannot claim ignorance of requirement</li>
              <li>❌ More severe penalties than if you had reported timely</li>
            </ul>

            <h5>Does the Board Find Out Anyway?</h5>
            <p className="highlight">
              <strong>YES!</strong> The Board runs periodic background checks. They WILL find out. Reporting 
              immediately shows honesty and responsibility. Hiding it shows dishonesty and results in harsher 
              penalties.
            </p>
          </div>

          <h4>📚 Fraudulent Education Certification (License Suspension)</h4>
          <div className="education-fraud">
            <p className="warning">
              <strong>A real estate broker and salesperson who fraudulently certifies to the Board completion 
              of the educational curriculum</strong> described in 254 CMR 5.03 may, following a hearing, which 
              hearing may be waived by such broker or salesperson, be subject to the <strong>suspension of their 
              license until such time that the Board is satisfied that the educational curriculum has been completed.</strong>
            </p>

            <h5>What This Means:</h5>
            <ul>
              <li><strong>Fraudulent Certification:</strong> Lying about completing required CE hours</li>
              <li><strong>Examples:</strong>
                <ul>
                  <li>Submitting fake CE certificates</li>
                  <li>Claiming credit for courses not taken</li>
                  <li>Having someone else take courses for you</li>
                  <li>Forging instructor signatures</li>
                  <li>Using altered completion certificates</li>
                </ul>
              </li>
            </ul>

            <h5>Consequences:</h5>
            <ul>
              <li><strong>Hearing:</strong> Board schedules hearing (you can waive it)</li>
              <li><strong>License Suspension:</strong> Your license is suspended immediately</li>
              <li><strong>Cannot Practice:</strong> Cannot work as agent while suspended</li>
              <li><strong>Complete Education:</strong> Must actually complete ALL required CE</li>
              <li><strong>Prove Completion:</strong> Submit legitimate certificates to Board</li>
              <li><strong>Board Review:</strong> Board must be "satisfied" education is complete</li>
              <li><strong>Reinstatement:</strong> License restored only after Board approval</li>
            </ul>

            <h5>Additional Penalties:</h5>
            <ul>
              <li>Fines from the Board</li>
              <li>Permanent record of violation</li>
              <li>Potential Chapter 93A liability if harmed clients</li>
              <li>Possible criminal charges (fraud)</li>
              <li>Loss of income during suspension</li>
              <li>Damage to professional reputation</li>
            </ul>

            <p className="highlight">
              <strong>Don't Risk It:</strong> CE courses are not that expensive or time-consuming. The penalty 
              for faking completion is career-ending. Just do the actual work.
            </p>
          </div>

          <h4>🔒 License Surrender (7-Day Rule)</h4>
          <div className="license-surrender">
            <p className="warning">
              <strong>A broker or salesperson upon notice of suspension or revocation of his license shall 
              deliver his/her license to the offices of the Board within seven days</strong> of the receipt 
              of such notice.
            </p>

            <h5>What This Means:</h5>
            <ul>
              <li><strong>Notice of Suspension:</strong> Board sends written notice that license is suspended</li>
              <li><strong>Notice of Revocation:</strong> Board sends written notice that license is revoked (permanent)</li>
              <li><strong>7 Days:</strong> You have 7 calendar days from receipt of notice</li>
              <li><strong>Physical License:</strong> Must surrender your actual license card/certificate</li>
              <li><strong>Board Offices:</strong> Deliver to Board's office (mail certified or in person)</li>
            </ul>

            <h5>Suspension vs Revocation:</h5>
            <table>
              <thead>
                <tr>
                  <th>Suspension</th>
                  <th>Revocation</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Temporary loss of license</td>
                  <td>Permanent loss of license</td>
                </tr>
                <tr>
                  <td>Can be reinstated after conditions met</td>
                  <td>Cannot be reinstated (must re-apply for new license)</td>
                </tr>
                <tr>
                  <td>Common: 30 days to 1 year</td>
                  <td>Serious violations only</td>
                </tr>
                <tr>
                  <td>Example: Failure to complete CE, minor violations</td>
                  <td>Example: Fraud, embezzlement, serious crimes</td>
                </tr>
              </tbody>
            </table>

            <h5>What Happens if You Don't Surrender License:</h5>
            <ul>
              <li>❌ Additional disciplinary action</li>
              <li>❌ Extended suspension period</li>
              <li>❌ Possible contempt charges</li>
              <li>❌ Harder to get reinstated</li>
              <li>❌ Shows lack of cooperation with Board</li>
            </ul>

            <h5>During Suspension/Revocation:</h5>
            <ul>
              <li>❌ <strong>CANNOT</strong> practice real estate</li>
              <li>❌ <strong>CANNOT</strong> earn commissions</li>
              <li>❌ <strong>CANNOT</strong> represent yourself as licensed agent</li>
              <li>❌ <strong>CANNOT</strong> work on deals that started before suspension</li>
              <li>✅ <strong>CAN</strong> work on getting reinstated (if suspension)</li>
              <li>✅ <strong>MUST</strong> notify broker immediately</li>
              <li>✅ <strong>MUST</strong> notify clients on active deals</li>
            </ul>

            <h5>Reinstatement After Suspension:</h5>
            <ol>
              <li>Complete all requirements imposed by Board</li>
              <li>Submit proof of compliance</li>
              <li>Pay any fines or fees</li>
              <li>Apply for reinstatement in writing</li>
              <li>Wait for Board approval</li>
              <li>Receive reinstated license</li>
              <li>Can resume practice</li>
            </ol>
          </div>

          <h4>Common Reasons for License Suspension/Revocation:</h4>
          <table>
            <thead>
              <tr>
                <th>Violation</th>
                <th>Typical Penalty</th>
                <th>Prevention</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Failure to complete CE</td>
                <td>Suspension until complete</td>
                <td>Track CE hours, complete early</td>
              </tr>
              <tr>
                <td>Criminal conviction (serious)</td>
                <td>Revocation</td>
                <td>Don't commit crimes!</td>
              </tr>
              <tr>
                <td>Fraud/misrepresentation</td>
                <td>Suspension or revocation</td>
                <td>Always be honest</td>
              </tr>
              <tr>
                <td>Embezzlement</td>
                <td>Revocation + criminal charges</td>
                <td>Never touch client funds improperly</td>
              </tr>
              <tr>
                <td>Chapter 93A violation (repeated)</td>
                <td>Suspension</td>
                <td>Follow consumer protection laws</td>
              </tr>
              <tr>
                <td>Fair Housing violation</td>
                <td>Suspension + fines</td>
                <td>Never discriminate</td>
              </tr>
              <tr>
                <td>Practicing without license</td>
                <td>Fines + possible criminal charges</td>
                <td>Keep license active and renewed</td>
              </tr>
              <tr>
                <td>Failure to report conviction</td>
                <td>Suspension + additional penalties</td>
                <td>Report within 30 days</td>
              </tr>
            </tbody>
          </table>

          <div className="licensing-summary">
            <h4>🎯 Key Takeaways - Licensing Compliance:</h4>
            <ul>
              <li>✅ <strong>Report ANY conviction within 30 days</strong> - no exceptions!</li>
              <li>✅ <strong>Never fake CE completion</strong> - career suicide</li>
              <li>✅ <strong>Surrender license within 7 days if suspended/revoked</strong></li>
              <li>✅ <strong>Keep license active and in good standing</strong></li>
              <li>✅ <strong>Cooperate with the Board</strong> - honesty helps your case</li>
              <li>✅ <strong>Don't practice during suspension</strong> - serious consequences</li>
              <li>✅ <strong>Track CE hours religiously</strong> - don't let them lapse</li>
              <li>✅ <strong>Report violations to broker immediately</strong></li>
            </ul>

            <p className="warning">
              <strong>⚠️ The Board Takes These Seriously:</strong> License violations are not minor issues. 
              The Board has the power to end your real estate career. Follow ALL requirements to the letter. 
              When in doubt, over-report and over-comply. Your license is your livelihood - protect it!
            </p>
          </div>

          <h4>⚠️ Complete List: Suspension or Refusal to Renew License</h4>
          <div className="suspension-reasons">
            <p className="warning">
              <strong>The following violations can result in license suspension, revocation, or refusal to renew:</strong>
            </p>

            <div className="violation-list">
              <div className="violation-item">
                <h5>1. DUTY TO PRESENT ALL OFFERS</h5>
                <p className="warning">
                  <strong>Agent must present all offers immediately unless other arrangements have been made 
                  between Seller & Listing Agent.</strong>
                </p>
                <ul>
                  <li><strong>Rule:</strong> Every offer must be presented to seller promptly</li>
                  <li><strong>Exception:</strong> Only if seller and listing agent have written agreement otherwise</li>
                  <li><strong>Cannot:</strong> Withhold offers because you think they're too low</li>
                  <li><strong>Cannot:</strong> Delay presenting offers to favor another buyer</li>
                  <li><strong>Must:</strong> Present offers even if property is under agreement (backup offers)</li>
                  <li><strong>Violation:</strong> Breach of fiduciary duty to seller</li>
                  <li><strong>Penalty:</strong> License suspension, fines, lawsuit from seller</li>
                </ul>
              </div>

              <div className="violation-item">
                <h5>2. IMPAIRMENT - Drugs & Alcohol</h5>
                <p className="warning">
                  <strong>Cannot practice real estate impaired by drugs & or alcohol</strong>
                </p>
                <ul>
                  <li><strong>Rule:</strong> Must be sober and mentally competent while performing RE duties</li>
                  <li><strong>Includes:</strong> Showing properties, meetings, negotiations, signings</li>
                  <li><strong>Cannot:</strong> Work under influence of drugs (illegal or prescription)</li>
                  <li><strong>Cannot:</strong> Work under influence of alcohol</li>
                  <li><strong>Penalty:</strong> Immediate license suspension, potential permanent revocation</li>
                  <li><strong>Liability:</strong> Civil liability for damages caused while impaired</li>
                </ul>
              </div>

              <div className="violation-item">
                <h5>3. CONFLICTS OF INTEREST</h5>
                <p className="warning">
                  <strong>If don't disclose personal or family interest in the transaction</strong>
                </p>
                <ul>
                  <li><strong>Rule:</strong> Must disclose ANY personal or family interest</li>
                  <li><strong>Examples:</strong>
                    <ul>
                      <li>You or family member is buyer/seller</li>
                      <li>You own the property being sold</li>
                      <li>You have financial interest in transaction</li>
                      <li>Family member has interest in transaction</li>
                    </ul>
                  </li>
                  <li><strong>Must:</strong> Disclose in writing before any agreements signed</li>
                  <li><strong>Cannot:</strong> Hide your interest and act as neutral agent</li>
                  <li><strong>Penalty:</strong> License suspension, commission forfeiture, Chapter 93A liability</li>
                </ul>
              </div>

              <div className="violation-item">
                <h5>4. DUAL AGENCY WITHOUT CONSENT</h5>
                <p className="warning">
                  <strong>Acted as Dual Agency or other capacity without both Buyer & Sellers written consent</strong>
                </p>
                <ul>
                  <li><strong>Rule:</strong> MUST have written consent from BOTH parties for dual agency</li>
                  <li><strong>Cannot:</strong> Represent both sides without full disclosure and written consent</li>
                  <li><strong>Required:</strong>
                    <ul>
                      <li>MA Mandatory Agency Disclosure Form</li>
                      <li>Dual Agency Disclosure Form</li>
                      <li>Written consent from buyer</li>
                      <li>Written consent from seller</li>
                    </ul>
                  </li>
                  <li><strong>Violation:</strong> Undisclosed dual agency = serious ethical and legal breach</li>
                  <li><strong>Penalty:</strong> License suspension/revocation, lawsuit, triple damages</li>
                </ul>
              </div>

              <div className="violation-item">
                <h5>5. ESCROW VIOLATIONS</h5>
                <p className="warning">
                  <strong>Failure to account or remit escrow money</strong>
                </p>
                <ul>
                  <li><strong>Rule:</strong> All deposits must be placed in escrow account immediately</li>
                  <li><strong>Cannot:</strong> Delay depositing client funds</li>
                  <li><strong>Cannot:</strong> Use client funds for own purposes (commingling)</li>
                  <li><strong>Cannot:</strong> Fail to return funds when required</li>
                  <li><strong>Must:</strong> Keep accurate records of all escrow transactions</li>
                  <li><strong>Must:</strong> Remit funds promptly per agreement</li>
                  <li><strong>Violation:</strong> Conversion of funds = theft</li>
                  <li><strong>Penalty:</strong> License revocation, criminal charges, restitution</li>
                </ul>
              </div>

              <div className="violation-item">
                <h5>6. PAYING NON-LICENSEES</h5>
                <p className="warning">
                  <strong>Paid commissions to non-licensees</strong>
                </p>
                <ul>
                  <li><strong>Rule:</strong> Can ONLY pay commissions to licensed real estate professionals</li>
                  <li><strong>Cannot:</strong> Pay referral fees to unlicensed individuals</li>
                  <li><strong>Cannot:</strong> Split commission with unlicensed person</li>
                  <li><strong>Cannot:</strong> Give "finder's fees" to unlicensed bird dogs</li>
                  <li><strong>Exception:</strong> Can give gifts (small value, not tied to transaction)</li>
                  <li><strong>Violation:</strong> Aiding unlicensed practice of real estate</li>
                  <li><strong>Penalty:</strong> License suspension, fines, commission forfeiture</li>
                </ul>
              </div>

              <div className="violation-item">
                <h5>7. UNDISCLOSED COMPENSATION</h5>
                <p className="warning">
                  <strong>Accepted, gave or charged any undisclosed commission, rebate or profit on 
                  expenditures for a principal.</strong>
                </p>
                <ul>
                  <li><strong>Rule:</strong> ALL compensation must be disclosed to your client</li>
                  <li><strong>Cannot:</strong> Receive kickbacks from vendors without disclosure</li>
                  <li><strong>Cannot:</strong> Mark up services and pocket difference</li>
                  <li><strong>Cannot:</strong> Accept referral fees from inspectors, contractors without disclosure</li>
                  <li><strong>Must:</strong> Disclose any financial benefit you receive</li>
                  <li><strong>Example:</strong> Inspector pays you $100 for referral → MUST disclose to client</li>
                  <li><strong>Violation:</strong> Breach of fiduciary duty (Accounting)</li>
                  <li><strong>Penalty:</strong> License suspension, return of hidden profits, lawsuits</li>
                </ul>
              </div>

              <div className="violation-item">
                <h5>8. INDUCING BREACH OF CONTRACT</h5>
                <p className="warning">
                  <strong>Induced or assisted any party in breaking a contract or listing agreement for 
                  personal gain</strong>
                </p>
                <ul>
                  <li><strong>Rule:</strong> Cannot encourage breach of existing agreements</li>
                  <li><strong>Cannot:</strong> Tell buyer to back out of deal so they can use you instead</li>
                  <li><strong>Cannot:</strong> Convince seller to break listing with another agent</li>
                  <li><strong>Cannot:</strong> Help client avoid contractual obligations for your benefit</li>
                  <li><strong>Violation:</strong> Tortious interference with contract</li>
                  <li><strong>Penalty:</strong> License suspension, lawsuit from other agent, damages</li>
                </ul>
              </div>

              <div className="violation-item">
                <h5>9. FAILURE TO PROVIDE COPIES</h5>
                <p className="warning">
                  <strong>Failed to give buyer or seller a copy of the P&S (Listing Agreements & Buyer Broker 
                  Agreements must also be given to respective clients when executed)</strong>
                </p>
                <ul>
                  <li><strong>Rule:</strong> Clients MUST receive copies of all signed documents</li>
                  <li><strong>Must Provide Immediately:</strong>
                    <ul>
                      <li>Listing agreement (to seller)</li>
                      <li>Buyer broker agreement (to buyer)</li>
                      <li>Purchase & Sale agreement (to both)</li>
                      <li>Any amendments or addendums</li>
                    </ul>
                  </li>
                  <li><strong>When:</strong> At time of execution (when signed)</li>
                  <li><strong>Cannot:</strong> Delay providing copies</li>
                  <li><strong>Violation:</strong> Deprives clients of their rights</li>
                  <li><strong>Penalty:</strong> License suspension, Chapter 93A violation</li>
                </ul>
              </div>

              <div className="violation-item">
                <h5>10. NET LISTING PROHIBITION (Comprehensive Explanation)</h5>
                <p className="warning">
                  <strong>Accepted a Net Listing - ILLEGAL IN MASSACHUSETTS</strong>
                </p>

                <h6>📋 What is a Net Listing?</h6>
                <div className="net-listing-definition">
                  <p className="highlight">
                    <strong>Net Listing:</strong> A listing agreement where the seller specifies a minimum "net" 
                    amount they want to receive, and the agent keeps everything above that amount as their commission.
                  </p>
                  <p><strong>Structure:</strong> Seller receives fixed amount, agent commission is unlimited (whatever they can get above the net)</p>
                </div>

                <h6>💰 How Net Listings Work (Example Scenarios):</h6>
                <div className="net-listing-examples">
                  <p><strong>Example 1: Basic Net Listing</strong></p>
                  <ul>
                    <li>Seller says: "I want $200,000 net from the sale"</li>
                    <li>Agent lists property for $250,000</li>
                    <li>Property sells for $250,000</li>
                    <li>Seller receives: $200,000 (their net)</li>
                    <li>Agent receives: $50,000 (everything above the net = 20% commission!)</li>
                  </ul>

                  <p><strong>Example 2: Agent Gets Even More</strong></p>
                  <ul>
                    <li>Seller says: "I want $300,000 net from the sale"</li>
                    <li>Agent lists property for $350,000</li>
                    <li>Property actually worth $400,000 (agent knows this)</li>
                    <li>Property sells for $400,000</li>
                    <li>Seller receives: $300,000 (their net)</li>
                    <li>Agent receives: $100,000 (25% commission!)</li>
                    <li><strong>Problem:</strong> Agent had NO incentive to tell seller property was worth $400k</li>
                  </ul>

                  <p><strong>Example 3: Multiple Offers Scenario</strong></p>
                  <ul>
                    <li>Seller wants $250,000 net</li>
                    <li>Offer A: $280,000 (agent makes $30,000)</li>
                    <li>Offer B: $320,000 (agent makes $70,000)</li>
                    <li><strong>Conflict:</strong> Agent is tempted to push for lower offer because they make more money!</li>
                    <li>If commission was 5%, agent would make $14,000 on A or $16,000 on B (clear incentive for higher price)</li>
                    <li>With net listing, agent makes MORE on lower offer (reversed incentive!)</li>
                  </ul>
                </div>

                <h6>🚫 Why Net Listings are ILLEGAL in Massachusetts:</h6>
                <div className="net-listing-reasons">
                  <p className="warning">
                    <strong>Net listings create inherent conflicts of interest that are fundamentally incompatible 
                    with an agent's fiduciary duty to their client.</strong>
                  </p>

                  <p><strong>1. Agent Benefits from Getting LESS for Seller</strong></p>
                  <ul>
                    <li>If property worth $400k but seller only wants $300k net</li>
                    <li>Agent can list at $350k and keep $50k (14% commission)</li>
                    <li>Or agent lists at $300k and keeps $0 (seller gets true value)</li>
                    <li><strong>Incentive:</strong> Agent profits from seller's ignorance of true value</li>
                  </ul>

                  <p><strong>2. Violates Fiduciary Duty of Loyalty</strong></p>
                  <ul>
                    <li>Agent's duty: Get highest price possible for seller</li>
                    <li>Net listing: Agent makes more when sale price is lower relative to true value</li>
                    <li>Direct conflict between agent's interest and seller's interest</li>
                  </ul>

                  <p><strong>3. Encourages Fraud and Misrepresentation</strong></p>
                  <ul>
                    <li>Agent has incentive to LOW-BALL the comparative market analysis (CMA)</li>
                    <li>Agent might tell seller property worth $300k when it's worth $400k</li>
                    <li>Seller sets net at $280k thinking they're getting good deal</li>
                    <li>Agent sells for $400k and pockets $120k (30% commission!)</li>
                    <li>Seller never knows they were cheated</li>
                  </ul>

                  <p><strong>4. Unlimited Commission Potential</strong></p>
                  <ul>
                    <li>Normal commission: 5-6% regardless of sale price</li>
                    <li>Net listing: Commission can be 10%, 20%, 50% or more!</li>
                    <li>No transparency in compensation</li>
                    <li>Seller doesn't know how much agent is making</li>
                  </ul>

                  <p><strong>5. Preys on Unsophisticated Sellers</strong></p>
                  <ul>
                    <li>Sellers who don't know market value are vulnerable</li>
                    <li>Desperate sellers in foreclosure or financial distress targeted</li>
                    <li>Elderly sellers who trust agent may be exploited</li>
                    <li>Net listings are a tool for predatory practices</li>
                  </ul>

                  <p><strong>6. Undermines Public Trust in Real Estate Profession</strong></p>
                  <ul>
                    <li>Creates appearance of impropriety</li>
                    <li>Makes all agents look like they're trying to cheat sellers</li>
                    <li>Consumer protection concern</li>
                  </ul>
                </div>

                <h6>⚖️ Legal Status in Massachusetts:</h6>
                <ul>
                  <li><strong>Illegal:</strong> Net listings are expressly prohibited</li>
                  <li><strong>Automatic Violation:</strong> Even if seller agrees, still illegal</li>
                  <li><strong>Cannot Be Waived:</strong> Seller cannot waive this protection</li>
                  <li><strong>Criminal vs Civil:</strong> May be both licensing violation AND consumer fraud</li>
                </ul>

                <h6>⚠️ Consequences of Using Net Listing:</h6>
                <div className="net-listing-penalties">
                  <p className="warning"><strong>License Penalties:</strong></p>
                  <ul>
                    <li>License suspension (immediate)</li>
                    <li>Potential license revocation</li>
                    <li>Fines from Board of Registration</li>
                    <li>Permanent record of violation</li>
                  </ul>

                  <p className="warning"><strong>Financial Penalties:</strong></p>
                  <ul>
                    <li>Commission forfeiture (must return ALL commission)</li>
                    <li>Chapter 93A liability (consumer protection - triple damages)</li>
                    <li>Lawsuit from seller for breach of fiduciary duty</li>
                    <li>Punitive damages if fraud involved</li>
                  </ul>

                  <p className="warning"><strong>Criminal Consequences:</strong></p>
                  <ul>
                    <li>Fraud charges if misrepresented value</li>
                    <li>Theft by deception</li>
                    <li>Criminal penalties on top of civil</li>
                  </ul>
                </div>

                <h6>✅ LEGAL Alternatives to Net Listings:</h6>
                <div className="legal-alternatives">
                  <p className="highlight">
                    <strong>If seller wants guaranteed minimum amount, use these LEGAL approaches:</strong>
                  </p>

                  <p><strong>1. Guaranteed Sale Program (with contingencies)</strong></p>
                  <ul>
                    <li>Agent offers to buy property for $X if doesn't sell</li>
                    <li>Must be separate contract, not part of listing</li>
                    <li>Must have contingencies and escape clauses</li>
                    <li>Commission still calculated as percentage, not net</li>
                  </ul>

                  <p><strong>2. Standard Percentage Commission</strong></p>
                  <ul>
                    <li><strong>Example:</strong> 5% commission regardless of price</li>
                    <li>Seller wants $200k net, list at $210,526 (so after 5% commission = $200k net)</li>
                    <li>If sells for more, seller gets more (and agent commission increases too)</li>
                    <li><strong>Key Difference:</strong> Both agent AND seller benefit from higher price</li>
                  </ul>

                  <p><strong>3. Flat Fee Commission</strong></p>
                  <ul>
                    <li><strong>Example:</strong> Agent charges $10,000 flat fee regardless of price</li>
                    <li>Seller wants $200k net, list at $210,000</li>
                    <li>If sells for $250,000, seller gets $240,000 (agent still gets $10k)</li>
                    <li><strong>Key Difference:</strong> Agent's compensation is fixed, no incentive to manipulate price</li>
                  </ul>

                  <p><strong>4. Tiered Commission Structure</strong></p>
                  <ul>
                    <li><strong>Example:</strong> 5% on first $300k, 3% on anything above</li>
                    <li>Still percentage-based, but structured differently</li>
                    <li>Legal as long as disclosed and agent still wants highest price</li>
                  </ul>

                  <p><strong>5. Explain Market Value and Set Realistic Expectations</strong></p>
                  <ul>
                    <li>Provide accurate CMA showing true market value</li>
                    <li>Explain closing costs, commission, net proceeds</li>
                    <li>Use standard listing agreement with percentage commission</li>
                    <li>Seller understands what they'll net AFTER standard commission</li>
                  </ul>
                </div>

                <h6>❌ Common Misconceptions About Net Listings:</h6>
                <div className="net-listing-myths">
                  <p><strong>Myth 1: "If the seller agrees, it's okay"</strong></p>
                  <ul>
                    <li>❌ <strong>FALSE:</strong> Net listings are illegal even with seller consent</li>
                    <li>It's a consumer protection law - cannot be waived</li>
                  </ul>

                  <p><strong>Myth 2: "It benefits the seller because they know what they'll get"</strong></p>
                  <ul>
                    <li>❌ <strong>FALSE:</strong> Seller knows minimum but doesn't know if agent is hiding true value</li>
                    <li>Seller might accept $200k net when property worth $300k</li>
                    <li>False sense of security</li>
                  </ul>

                  <p><strong>Myth 3: "It motivates the agent to get the highest price"</strong></p>
                  <ul>
                    <li>❌ <strong>FALSE:</strong> Agent profits MORE from hiding true value and listing low</li>
                    <li>Agent makes 100% of amount above net, not just 5-6%</li>
                    <li>Perverse incentive</li>
                  </ul>

                  <p><strong>Myth 4: "It's only illegal if the seller doesn't know"</strong></p>
                  <ul>
                    <li>❌ <strong>FALSE:</strong> Illegal regardless of disclosure</li>
                    <li>Even if seller fully understands, still prohibited</li>
                  </ul>

                  <p><strong>Myth 5: "I can use net listing in other states"</strong></p>
                  <ul>
                    <li>⚠️ <strong>DEPENDS:</strong> Some states allow net listings with heavy disclosure</li>
                    <li>But MA prohibits them completely</li>
                    <li>Know the law in your state</li>
                  </ul>
                </div>

                <h6>🎯 Bottom Line on Net Listings:</h6>
                <div className="net-listing-summary">
                  <p className="warning">
                    <strong>NEVER use a net listing in Massachusetts. It is automatic license suspension.</strong>
                  </p>
                  <ul>
                    <li><strong>Why They Exist:</strong> Seem to benefit both parties on surface</li>
                    <li><strong>Why They're Illegal:</strong> Create unavoidable conflicts of interest</li>
                    <li><strong>What to Use Instead:</strong> Percentage commission or flat fee</li>
                    <li><strong>If Seller Asks:</strong> Explain why illegal and offer legal alternatives</li>
                    <li><strong>Your Duty:</strong> Get highest price possible with transparent, legal compensation</li>
                  </ul>
                  <p className="highlight">
                    <strong>Real-World Advice:</strong> If a seller says "I just want $X net," calculate what list 
                    price would net them $X after a standard percentage commission. Market at that price with 
                    standard commission structure. This achieves their goal legally while maintaining your 
                    fiduciary duty to get them the highest possible price.
                  </p>
                </div>
              </div>

              <div className="violation-item">
                <h5>11. OUT-OF-STATE PROPERTY VIOLATIONS</h5>
                <p className="warning">
                  <strong>Engaged in sale of real property located in a land development in another state 
                  that was promoted or advertised in Massachusetts without the owner/developer complying 
                  with all filing requirements.</strong>
                </p>
                <ul>
                  <li><strong>Rule:</strong> Out-of-state developers must register with MA before marketing here</li>
                  <li><strong>Cannot:</strong> Market out-of-state development without proper filings</li>
                  <li><strong>Cannot:</strong> Help developer avoid MA registration requirements</li>
                  <li><strong>Must:</strong> Verify developer has complied with MA laws</li>
                  <li><strong>Violation:</strong> Consumer protection violation</li>
                  <li><strong>Penalty:</strong> License suspension, fines</li>
                </ul>
              </div>

              <div className="violation-item">
                <h5>12. LAPSED LICENSE</h5>
                <p className="warning">
                  <strong>Cannot practice with lapsed license</strong>
                </p>
                <ul>
                  <li><strong>Rule:</strong> License must be current and active</li>
                  <li><strong>Cannot:</strong> Work during renewal period if not renewed</li>
                  <li><strong>Cannot:</strong> Complete transactions started before lapse</li>
                  <li><strong>Cannot:</strong> Claim "I'm renewing it" as excuse</li>
                  <li><strong>Must:</strong> Renew BEFORE expiration</li>
                  <li><strong>Commission:</strong> Cannot collect commission for work done while lapsed</li>
                  <li><strong>Violation:</strong> Practicing without license</li>
                  <li><strong>Penalty:</strong> Fines, cannot collect commission, license issues</li>
                </ul>
              </div>

              <div className="violation-item">
                <h5>13. RENTAL APARTMENT ADVERTISING</h5>
                <p className="warning">
                  <strong>Advertisement regarding availability of an apartment for rent must contain 
                  following language: "the apartment advertised may no longer be available for rent."</strong>
                </p>
                <ul>
                  <li><strong>Rule:</strong> All rental ads MUST include this disclaimer</li>
                  <li><strong>Exact Language Required:</strong> "the apartment advertised may no longer be available for rent."</li>
                  <li><strong>Why:</strong> Prevents bait-and-switch tactics</li>
                  <li><strong>Applies To:</strong> All rental apartment advertising</li>
                  <li><strong>Cannot:</strong> Advertise rental apartments without this disclaimer</li>
                  <li><strong>Violation:</strong> Consumer protection violation</li>
                  <li><strong>Penalty:</strong> Fines, license suspension for repeated violations</li>
                </ul>
              </div>

              <div className="violation-item">
                <h5>14. DISCRIMINATION VIOLATIONS (M.G.L. c. 151B)</h5>
                <p className="warning">
                  <strong>Persons committed unlawful discrimination in violation of M.G.L. c. 151B, license 
                  will be suspended for 60 days. If occurred within 2 years of prior violation, suspended 
                  for 90 days.</strong>
                </p>
                <ul>
                  <li><strong>First Violation:</strong> 60-day suspension (mandatory)</li>
                  <li><strong>Second Violation (within 2 years):</strong> 90-day suspension (mandatory)</li>
                  <li><strong>What Counts:</strong>
                    <ul>
                      <li>Fair Housing violations</li>
                      <li>Discrimination based on protected classes</li>
                      <li>Steering, blockbusting, redlining</li>
                      <li>Discriminatory advertising</li>
                      <li>Refusing to show properties based on protected class</li>
                    </ul>
                  </li>
                  <li><strong>Cannot:</strong> Discriminate in any way</li>
                  <li><strong>Violation:</strong> Civil rights violation</li>
                  <li><strong>Penalty:</strong> Mandatory suspension, fines up to $100,000+, civil lawsuit</li>
                  <li><strong>Career Ending:</strong> Multiple violations = permanent revocation likely</li>
                </ul>
              </div>
            </div>

            <div className="suspension-summary">
              <h4>🎯 Suspension/Refusal to Renew Summary:</h4>
              <p className="warning">
                <strong>ANY of these violations can result in license suspension, revocation, or refusal 
                to renew. The Board takes ALL violations seriously. Your license is a PRIVILEGE, not a right. 
                Follow all laws, rules, and ethical standards. When in doubt, consult your broker or an attorney.</strong>
              </p>
              <p className="highlight">
                <strong>Most Common Violations:</strong> Failure to present all offers, undisclosed dual agency, 
                escrow violations, paying non-licensees, and discrimination. Avoid these at all costs!
              </p>
            </div>
          </div>

          <h4>⚖️ Enforcement of Board Investigations - Due Process Procedures</h4>
          <div className="board-investigations">
            <p className="highlight">
              <strong>If the Board receives a complaint against you, there is a formal investigation and hearing 
              process. Understanding your rights and the procedures is critical.</strong>
            </p>

            <div className="investigation-procedures">
              <div className="procedure-step">
                <h5>📝 Step 1: Complaint Must Be in Writing</h5>
                <p className="warning">
                  <strong>All complaints must be in writing and signed by complainant</strong>
                </p>
                <ul>
                  <li><strong>Written Requirement:</strong> Verbal complaints are not accepted</li>
                  <li><strong>Signed by Complainant:</strong> Must have signature of person making complaint</li>
                  <li><strong>Why:</strong> Prevents frivolous or anonymous accusations</li>
                  <li><strong>Details Required:</strong>
                    <ul>
                      <li>Name and contact info of complainant</li>
                      <li>Name of licensee being complained about</li>
                      <li>Description of alleged violation</li>
                      <li>Dates, locations, and specific facts</li>
                      <li>Supporting documentation if available</li>
                    </ul>
                  </li>
                  <li><strong>Who Can Complain:</strong> Anyone (clients, other agents, public, Board initiated)</li>
                  <li><strong>Board Review:</strong> Board reviews complaint for merit before proceeding</li>
                </ul>
                <p className="highlight">
                  <strong>Note:</strong> The Board can also initiate investigations on its own without a complaint 
                  if it becomes aware of potential violations (e.g., through audits, inspections, or other means).
                </p>
              </div>

              <div className="procedure-step">
                <h5>📅 Step 2: Hearing Upon 10 Days Notice</h5>
                <p className="warning">
                  <strong>Hearing upon 10 days notice to person being charged</strong>
                </p>
                <ul>
                  <li><strong>Notice Requirement:</strong> Board must give you at least 10 days advance notice</li>
                  <li><strong>Notice Contents:</strong>
                    <ul>
                      <li>Date, time, and location of hearing</li>
                      <li>Specific charges against you</li>
                      <li>Your rights at the hearing</li>
                      <li>Potential penalties</li>
                    </ul>
                  </li>
                  <li><strong>Delivery Method:</strong> Certified mail to your address on file with Board</li>
                  <li><strong>10-Day Minimum:</strong> Gives you time to prepare defense</li>
                  <li><strong>Your Rights:</strong>
                    <ul>
                      <li>Right to be represented by attorney</li>
                      <li>Right to present evidence</li>
                      <li>Right to cross-examine witnesses</li>
                      <li>Right to testify on your own behalf</li>
                      <li>Right to bring witnesses</li>
                    </ul>
                  </li>
                </ul>
                <p className="highlight">
                  <strong>⚠️ STRONGLY RECOMMENDED:</strong> Hire an attorney who specializes in real estate 
                  licensing defense. Board hearings are serious legal proceedings. Do not go alone.
                </p>
              </div>

              <div className="procedure-step">
                <h5>🛡️ Step 3: No Action Until After Hearing & Finding</h5>
                <p className="warning">
                  <strong>No refusal to renew of license or face suspension until after hearing is conducted 
                  & finding issued</strong>
                </p>
                <ul>
                  <li><strong>Due Process Protection:</strong> You cannot be punished before hearing</li>
                  <li><strong>License Remains Active:</strong> You can continue working until Board issues finding</li>
                  <li><strong>Exception:</strong> Board may impose emergency suspension if public safety at risk</li>
                  <li><strong>Hearing Must Occur:</strong> Board must conduct formal hearing</li>
                  <li><strong>Finding Must Be Issued:</strong> Board must make written decision</li>
                  <li><strong>Timeline:</strong> Can take months from complaint to final finding</li>
                  <li><strong>During Investigation:</strong>
                    <ul>
                      <li>Continue working normally</li>
                      <li>Maintain professional conduct</li>
                      <li>Do NOT destroy evidence or documents</li>
                      <li>Cooperate with Board (but through attorney)</li>
                      <li>Do NOT discuss case publicly or on social media</li>
                    </ul>
                  </li>
                </ul>
                <p className="warning">
                  <strong>Emergency Suspension:</strong> In rare cases involving immediate danger to public 
                  (e.g., ongoing fraud, theft of client funds, violent behavior), Board can impose immediate 
                  emergency suspension pending full hearing. This is extremely rare.
                </p>
              </div>

              <div className="procedure-step">
                <h5>📚 Step 4: Board's Investigative Powers</h5>
                <p className="warning">
                  <strong>Board may summons witnesses & books / papers</strong>
                </p>
                <ul>
                  <li><strong>Subpoena Power:</strong> Board has legal authority to compel evidence</li>
                  <li><strong>Can Summon:</strong>
                    <ul>
                      <li>Witnesses to testify under oath</li>
                      <li>Documents and records</li>
                      <li>Electronic files and communications</li>
                      <li>Financial records</li>
                      <li>Transaction files</li>
                    </ul>
                  </li>
                  <li><strong>Must Comply:</strong> Failing to respond to Board summons is separate violation</li>
                  <li><strong>What Board Can Request:</strong>
                    <ul>
                      <li>Listing agreements and buyer broker agreements</li>
                      <li>Purchase & sale agreements</li>
                      <li>Escrow records</li>
                      <li>Commission records</li>
                      <li>Emails and text messages</li>
                      <li>Advertising materials</li>
                      <li>CE certificates</li>
                      <li>Any documents related to complaint</li>
                    </ul>
                  </li>
                  <li><strong>Production Timeline:</strong> Must produce within time specified in summons</li>
                  <li><strong>Privilege:</strong> Attorney-client communications may be privileged (consult lawyer)</li>
                </ul>
                <p className="highlight">
                  <strong>Best Practice:</strong> Work with your attorney to organize and produce all requested 
                  documents. Do NOT alter, destroy, or hide evidence - this will make things much worse.
                </p>
              </div>

              <div className="procedure-step">
                <h5>⚖️ Step 5: Compelling Witness Testimony</h5>
                <p className="warning">
                  <strong>If witness fails to show up, Superior Court can issue an order for them to appear.</strong>
                </p>
                <ul>
                  <li><strong>Court Enforcement:</strong> Board can go to Superior Court for help</li>
                  <li><strong>When Used:</strong> If witness ignores Board summons</li>
                  <li><strong>Court Order:</strong> Superior Court can issue order to compel appearance</li>
                  <li><strong>Contempt of Court:</strong> Failing to comply with court order = contempt</li>
                  <li><strong>Penalties for Non-Compliance:</strong>
                    <ul>
                      <li>Fines</li>
                      <li>Jail time (for contempt)</li>
                      <li>Additional license penalties if you're the licensee</li>
                    </ul>
                  </li>
                  <li><strong>Applies to Anyone:</strong> Includes other agents, brokers, clients, vendors</li>
                </ul>
                <p className="warning">
                  <strong>If You're Summoned as Witness:</strong> You MUST appear or face legal consequences. 
                  If you have concerns about testifying, consult an attorney but do not simply ignore the summons.
                </p>
              </div>

              <div className="procedure-step">
                <h5>✍️ Step 6: Board Decision Requirements</h5>
                <p className="warning">
                  <strong>Decision of board must be by majority, in writing and signed by all members. 
                  Copies sent to each interested party.</strong>
                </p>
                <ul>
                  <li><strong>Majority Vote:</strong> More than half of Board members must agree</li>
                  <li><strong>Written Decision Required:</strong> Oral decisions not valid</li>
                  <li><strong>Signed by ALL Members:</strong> Every Board member must sign (even dissenters)</li>
                  <li><strong>Decision Must Include:</strong>
                    <ul>
                      <li>Findings of fact (what happened)</li>
                      <li>Conclusions of law (which rules were violated)</li>
                      <li>Reasoning for decision</li>
                      <li>Penalty or dismissal</li>
                      <li>Effective date</li>
                    </ul>
                  </li>
                  <li><strong>Copies Sent To:</strong>
                    <ul>
                      <li>Licensee being charged</li>
                      <li>Licensee's attorney (if represented)</li>
                      <li>Complainant</li>
                      <li>Any other interested parties</li>
                    </ul>
                  </li>
                  <li><strong>Service Method:</strong> Certified mail or hand delivery</li>
                  <li><strong>Public Record:</strong> Decision becomes public record</li>
                </ul>
                <p className="highlight">
                  <strong>Possible Outcomes:</strong>
                  <ul>
                    <li>Dismissal (no violation found)</li>
                    <li>Letter of reprimand (warning, no suspension)</li>
                    <li>Fine (monetary penalty)</li>
                    <li>Suspension (temporary loss of license - 30/60/90 days or more)</li>
                    <li>Revocation (permanent loss of license)</li>
                    <li>Conditions (probation, additional CE, supervision, etc.)</li>
                  </ul>
                </p>
              </div>

              <div className="procedure-step">
                <h5>📞 Step 7: Right to Appeal</h5>
                <p className="warning">
                  <strong>Decision may be appealed to Superior Court within 20 days following notification 
                  of decision</strong>
                </p>
                <ul>
                  <li><strong>20-Day Deadline:</strong> Must file appeal within 20 days of receiving decision</li>
                  <li><strong>Strictly Enforced:</strong> Miss deadline = lose right to appeal</li>
                  <li><strong>Count From:</strong> Date you received written decision (not date it was issued)</li>
                  <li><strong>Where to Appeal:</strong> Massachusetts Superior Court</li>
                  <li><strong>Appeal Process:</strong>
                    <ul>
                      <li>File notice of appeal with Superior Court</li>
                      <li>Serve copy on Board of Registration</li>
                      <li>Pay filing fees</li>
                      <li>Submit record of proceedings</li>
                      <li>File appellate brief</li>
                    </ul>
                  </li>
                  <li><strong>Standard of Review:</strong>
                    <ul>
                      <li>Was Board decision supported by substantial evidence?</li>
                      <li>Did Board follow proper procedures?</li>
                      <li>Was decision arbitrary or capricious?</li>
                      <li>Court does NOT re-hear case, only reviews Board's process</li>
                    </ul>
                  </li>
                  <li><strong>During Appeal:</strong>
                    <ul>
                      <li>License suspension/revocation typically NOT stayed (remains in effect)</li>
                      <li>Can request stay from court (requires showing of harm and likelihood of success)</li>
                      <li>Appeal can take 6-18 months</li>
                    </ul>
                  </li>
                  <li><strong>Appeal Outcomes:</strong>
                    <ul>
                      <li>Affirm Board decision (Board wins)</li>
                      <li>Reverse Board decision (you win)</li>
                      <li>Remand to Board for new hearing (do over)</li>
                      <li>Modify penalty (reduce suspension, etc.)</li>
                    </ul>
                  </li>
                </ul>
                <p className="warning">
                  <strong>⚠️ CRITICAL:</strong> Do NOT miss the 20-day appeal deadline! Mark it on your 
                  calendar immediately when you receive the decision. Consult an appellate attorney right away.
                </p>
              </div>
            </div>

            <div className="investigation-timeline">
              <h5>⏱️ Typical Investigation Timeline:</h5>
              <ul>
                <li><strong>Complaint Filed:</strong> Day 0</li>
                <li><strong>Board Review:</strong> 2-8 weeks (Board decides if complaint has merit)</li>
                <li><strong>Investigation:</strong> 2-6 months (Board gathers evidence)</li>
                <li><strong>Notice of Hearing:</strong> At least 10 days before hearing</li>
                <li><strong>Hearing:</strong> 1 day to several days depending on complexity</li>
                <li><strong>Decision:</strong> 4-12 weeks after hearing</li>
                <li><strong>Total Time:</strong> 6 months to 2+ years from complaint to final decision</li>
                <li><strong>If Appealed:</strong> Add 6-18 months</li>
              </ul>
            </div>

            <div className="investigation-best-practices">
              <h5>🎯 What to Do If You Receive a Board Complaint:</h5>
              <ol>
                <li><strong>DO NOT PANIC</strong> - Having a complaint filed doesn't mean you're guilty</li>
                <li><strong>HIRE AN ATTORNEY IMMEDIATELY</strong> - Specializing in real estate licensing defense</li>
                <li><strong>DO NOT CONTACT COMPLAINANT</strong> - Can make things worse</li>
                <li><strong>PRESERVE ALL EVIDENCE</strong> - Do not delete emails, texts, documents</li>
                <li><strong>NOTIFY YOUR BROKER</strong> - They need to know</li>
                <li><strong>NOTIFY YOUR E&O INSURANCE</strong> - May cover legal fees</li>
                <li><strong>DO NOT DISCUSS PUBLICLY</strong> - No social media posts about the case</li>
                <li><strong>COOPERATE WITH BOARD</strong> - But through your attorney</li>
                <li><strong>ORGANIZE YOUR DEFENSE</strong> - Gather all documents, witnesses, evidence</li>
                <li><strong>PREPARE FOR HEARING</strong> - Practice testimony with attorney</li>
                <li><strong>ATTEND ALL PROCEEDINGS</strong> - Show respect for process</li>
                <li><strong>BE PROFESSIONAL</strong> - Dress appropriately, be respectful, tell truth</li>
              </ol>
            </div>

            <div className="investigation-summary">
              <h4>🎯 Board Investigation Process Summary:</h4>
              <p className="warning">
                <strong>The Board investigation process is formal, legal, and serious. Your license and career 
                are at stake. Follow all procedures, meet all deadlines, and work with qualified legal counsel 
                throughout the process.</strong>
              </p>
              <ul>
                <li>✅ <strong>Complaint:</strong> Must be written and signed</li>
                <li>✅ <strong>Notice:</strong> At least 10 days before hearing</li>
                <li>✅ <strong>Due Process:</strong> No penalty until after hearing and finding</li>
                <li>✅ <strong>Board Powers:</strong> Can summon witnesses and documents</li>
                <li>✅ <strong>Court Enforcement:</strong> Superior Court can compel witness appearance</li>
                <li>✅ <strong>Decision:</strong> Majority vote, written, signed by all members</li>
                <li>✅ <strong>Appeal:</strong> 20 days to appeal to Superior Court</li>
              </ul>
              <p className="highlight">
                <strong>Prevention is Best:</strong> The best way to handle a Board investigation is to never 
                get one. Follow all laws, maintain high ethical standards, document everything, communicate 
                clearly with clients, and when in doubt, consult your broker or attorney BEFORE acting.
              </p>
            </div>
          </div>
        </div>

        <h3>16.6 Real Estate License Exemptions (Who Doesn't Need a License)</h3>
        <div className="license-exemptions">
          <p className="highlight">
            <strong>Not everyone performing real estate activities needs a license.</strong> The following 
            individuals and entities are EXEMPT from Massachusetts real estate licensing requirements:
          </p>

          <h4>✅ Persons Exempt from Licensing:</h4>
          <div className="exemption-list">
            <div className="exemption-item">
              <h5>1. Persons Acting on Their Own Behalf</h5>
              <ul>
                <li><strong>Example:</strong> Selling your own home (For Sale By Owner - FSBO)</li>
                <li><strong>Why:</strong> You're not acting as an agent for someone else</li>
                <li><strong>Rule:</strong> Can sell/buy/lease your own property without license</li>
                <li><strong>Limitation:</strong> Cannot do this as a business for others</li>
              </ul>
            </div>

            <div className="exemption-item">
              <h5>2. Property Managers (Unless Collecting Additional Commission)</h5>
              <ul>
                <li><strong>Example:</strong> Building superintendent managing apartments for fixed salary</li>
                <li><strong>Rule:</strong> No license needed if paid flat fee/salary for management</li>
                <li><strong>⚠️ EXCEPTION:</strong> If collecting commission on leasing/sales = license required</li>
                <li><strong>Key Distinction:</strong> Managing properties ≠ selling/leasing for commission</li>
              </ul>
            </div>

            <div className="exemption-item">
              <h5>3. Licensed Auctioneers</h5>
              <ul>
                <li><strong>Example:</strong> Auctioneer conducting real estate auction</li>
                <li><strong>Rule:</strong> If licensed as auctioneer, don't need RE license</li>
                <li><strong>Scope:</strong> Can auction real property under auctioneer license</li>
                <li><strong>Note:</strong> Different license type, same activity permitted</li>
              </ul>
            </div>

            <div className="exemption-item">
              <h5>4. Public Officers/Employees Performing Official Duties</h5>
              <ul>
                <li><strong>Examples:</strong>
                  <ul>
                    <li>City/town selling municipal property</li>
                    <li>Sheriff conducting foreclosure sale</li>
                    <li>Tax collector selling tax-titled property</li>
                    <li>Government employees handling public land transactions</li>
                  </ul>
                </li>
                <li><strong>Rule:</strong> Government officials acting in official capacity exempt</li>
                <li><strong>Why:</strong> Public duty, not private business</li>
              </ul>
            </div>

            <div className="exemption-item">
              <h5>5. Attorney-in-Fact Under Power of Attorney (POA)</h5>
              <ul>
                <li><strong>Example:</strong> Person with POA selling property for elderly parent</li>
                <li><strong>Rule:</strong> If owner authorizes you via POA to complete transaction, no license needed</li>
                <li><strong>Requirement:</strong> Must have valid Power of Attorney document</li>
                <li><strong>Scope:</strong> Acting on behalf of owner under legal authority</li>
                <li><strong>Limitation:</strong> Only for properties covered by the POA</li>
              </ul>
            </div>

            <div className="exemption-item">
              <h5>6. Court-Appointed Fiduciaries</h5>
              <p><strong>Includes:</strong></p>
              <ul>
                <li><strong>Receivers:</strong> Court-appointed to manage property in litigation</li>
                <li><strong>Trustees of Trusts:</strong> Managing trust property</li>
                <li><strong>Trustees in Bankruptcy:</strong> Liquidating bankrupt estate assets</li>
                <li><strong>Administrators:</strong> Handling deceased person's estate (no will)</li>
                <li><strong>Executors:</strong> Handling deceased person's estate (with will)</li>
                <li><strong>Conservators:</strong> Managing property for incapacitated person</li>
                <li><strong>Personal Representatives:</strong> Estate representatives</li>
                <li><strong>Guardians:</strong> Managing property for minor or incapacitated person</li>
                <li><strong>Other Court-Appointed Persons:</strong> Acting under court order</li>
              </ul>
              <p><strong>Rule:</strong> If appointed by court or acting under court order, exempt</p>
              <p><strong>Why:</strong> Legal fiduciary duty supersedes licensing requirement</p>
            </div>

            <div className="exemption-item">
              <h5>7. Financial Institutions Acting as Fiduciaries or for Themselves</h5>
              <p><strong>Includes:</strong></p>
              <ul>
                <li><strong>Banks</strong></li>
                <li><strong>Credit Unions</strong></li>
                <li><strong>Insurance Companies</strong></li>
              </ul>
              <p><strong>When Exempt:</strong></p>
              <ul>
                <li><strong>Acting as Fiduciaries:</strong> Managing real estate in trust capacity</li>
                <li><strong>Negotiating a Mortgage:</strong> Lending money secured by real estate</li>
                <li><strong>Acting for Themselves:</strong> Selling/managing their own property</li>
                <li><strong>Foreclosures:</strong> Foreclosing and selling property they hold mortgage on</li>
              </ul>
              <p><strong>Rule:</strong> Financial institutions handling real estate as lenders or owners exempt</p>
              <p><strong>Why:</strong> Regulated by banking/insurance laws, not real estate laws</p>
            </div>
          </div>

          <h4>❌ Who DOES Need a License:</h4>
          <div className="needs-license">
            <p className="warning">
              <strong>If you DON'T fall into one of the above exemptions, you NEED a license to:</strong>
            </p>
            <ul>
              <li>Sell, lease, or rent real estate for others</li>
              <li>Negotiate real estate transactions for others</li>
              <li>List properties for sale/lease</li>
              <li>Show properties to buyers/tenants</li>
              <li>Collect commissions on real estate transactions</li>
              <li>Advertise yourself as a real estate professional</li>
              <li>Perform any real estate services for compensation</li>
            </ul>
          </div>

          <h4>Common Misconceptions & Clarifications:</h4>
          <table>
            <thead>
              <tr>
                <th>Situation</th>
                <th>License Needed?</th>
                <th>Why/Why Not</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Selling your own home</td>
                <td>❌ NO</td>
                <td>Acting on your own behalf</td>
              </tr>
              <tr>
                <td>Helping friend sell their home for free</td>
                <td>⚠️ MAYBE</td>
                <td>If no compensation, likely OK. If "gift" = commission, need license</td>
              </tr>
              <tr>
                <td>Property manager collecting flat monthly fee</td>
                <td>❌ NO</td>
                <td>Not collecting commission on sales/leases</td>
              </tr>
              <tr>
                <td>Property manager getting % of rent collected</td>
                <td>✅ YES</td>
                <td>Commission-based = license required</td>
              </tr>
              <tr>
                <td>Attorney selling client's property</td>
                <td>❌ NO</td>
                <td>If POA or legal representation, exempt</td>
              </tr>
              <tr>
                <td>Executor selling estate property</td>
                <td>❌ NO</td>
                <td>Court-appointed fiduciary exempt</td>
              </tr>
              <tr>
                <td>Bank foreclosing and selling property</td>
                <td>❌ NO</td>
                <td>Financial institution acting for itself</td>
              </tr>
              <tr>
                <td>Auctioneer selling real estate</td>
                <td>❌ NO</td>
                <td>Licensed auctioneer exempt</td>
              </tr>
              <tr>
                <td>Bird-dogging (finding deals for fee)</td>
                <td>✅ YES</td>
                <td>Acting as middleman for compensation = license required</td>
              </tr>
              <tr>
                <td>Wholesaling real estate</td>
                <td>⚠️ GRAY AREA</td>
                <td>If assigning contracts = might need license. Consult attorney.</td>
              </tr>
            </tbody>
          </table>

          <h4>⚠️ Penalties for Practicing Without a License:</h4>
          <div className="unlicensed-penalties">
            <ul>
              <li><strong>Criminal Charges:</strong> Misdemeanor with fines and potential jail time</li>
              <li><strong>Cannot Collect Commission:</strong> Courts won't enforce your commission agreement</li>
              <li><strong>Cannot Sue for Fees:</strong> No legal recourse to collect payment</li>
              <li><strong>Client Can Sue You:</strong> For damages caused by unlicensed activity</li>
              <li><strong>Chapter 93A Violation:</strong> Unfair/deceptive practice (triple damages!)</li>
              <li><strong>Permanent Bar:</strong> May never be able to get license later</li>
            </ul>

            <p className="warning">
              <strong>⚠️ Important:</strong> If you engage in real estate activity requiring a license without 
              having one, you cannot enforce any contracts or collect any fees. All your work is void. You may 
              also face criminal prosecution.
            </p>
          </div>

          <h4>When in Doubt:</h4>
          <div className="doubt-guidance">
            <p className="highlight">
              <strong>If you're unsure whether your activity requires a license, ASK:</strong>
            </p>
            <ol>
              <li><strong>Am I acting for someone else's property?</strong> (If yes, likely need license)</li>
              <li><strong>Am I receiving compensation?</strong> (If yes, likely need license)</li>
              <li><strong>Am I in one of the exemption categories?</strong> (If no, likely need license)</li>
              <li><strong>Would a reasonable person think I'm acting as a real estate agent?</strong> (If yes, need license)</li>
            </ol>

            <p><strong>When in doubt:</strong></p>
            <ul>
              <li>Consult the MA Board of Registration of Real Estate Brokers and Salespersons</li>
              <li>Speak with a real estate attorney</li>
              <li>Get licensed if there's any question (better safe than sorry)</li>
            </ul>
          </div>

          <div className="exemption-summary">
            <h4>🎯 Exemption Summary:</h4>
            <p className="highlight">
              <strong>The Rule of Thumb:</strong> If you're getting paid to help others buy, sell, or lease 
              real estate, you need a license UNLESS you fall into one of the specific exemption categories 
              (POA, court-appointed fiduciary, financial institution, auctioneer, government official, or 
              managing for flat fee). When in doubt, get licensed. The penalties for practicing without a 
              license are severe and can end your real estate career before it starts.
            </p>
          </div>
        </div>

        <p className="highlight">
          <strong>Career Path:</strong> Salesperson (3+ years) → Broker → Brokerage Owner → Multi-State Broker.
          Continuous learning and professional certifications accelerate growth and income potential.
        </p>
      </>
    )
  },
  {
    id: 'insurance',
    icon: '🛡️',
    title: '17. Insurance & Risk Management',
    subtitle: 'E&O, Liability, Cyber & Fidelity Coverage',
    body: (
      <>
        <h3>17.1 Errors & Omissions (E&O) Insurance</h3>
        <div className="eo-insurance">
          <p><strong>What It Covers:</strong> Professional mistakes, negligence, failure to perform duties</p>
          <p><strong>Cost:</strong> $300-800 per year (individual agent)</p>
          <p><strong>Required:</strong> Not mandatory by MA law, but required by most brokers</p>

          <h4>Coverage Examples:</h4>
          <ul>
            <li>Missing a deadline causing client financial loss</li>
            <li>Errors in paperwork or disclosures</li>
            <li>Failure to disclose (if unintentional)</li>
            <li>Breach of fiduciary duty</li>
            <li>Misrepresentation (if not intentional)</li>
          </ul>

          <h4>Does NOT Cover:</h4>
          <ul>
            <li>❌ Intentional acts or fraud</li>
            <li>❌ Criminal violations</li>
            <li>❌ Embezzlement</li>
            <li>❌ Discrimination</li>
          </ul>

          <h4>Claims-Made vs Occurrence:</h4>
          <ul>
            <li><strong>Claims-Made:</strong> Covers claims filed during policy period (need tail coverage after)</li>
            <li><strong>Occurrence:</strong> Covers incidents during policy period (no tail needed)</li>
          </ul>

          <p><strong>Typical Coverage Limits:</strong> $1M per claim / $2M aggregate</p>
          <p><strong>Deductibles:</strong> $500-2,500 per claim</p>
        </div>

        <h3>17.2 General Liability Insurance</h3>
        <ul>
          <li><strong>Covers:</strong> Bodily injury, property damage during showings/open houses</li>
          <li><strong>Cost:</strong> $400-600 per year</li>
          <li><strong>Example:</strong> Client slips and falls during property showing</li>
        </ul>

        <h3>17.3 Cyber Liability Insurance</h3>
        <ul>
          <li><strong>Covers:</strong> Data breaches, hacking, stolen client information</li>
          <li><strong>Cost:</strong> $500-1,000 per year</li>
          <li><strong>Important:</strong> Increasingly critical as transactions go digital</li>
        </ul>

        <h3>17.4 Fidelity Bonds</h3>
        <ul>
          <li><strong>Covers:</strong> Dishonest acts, theft of client funds</li>
          <li><strong>Required:</strong> For brokers handling trust accounts</li>
          <li><strong>Cost:</strong> $300-500 per year</li>
          <li><strong>Purpose:</strong> Protects clients if agent steals or misappropriates funds</li>
        </ul>

        <h3>17.5 Complete Insurance Package</h3>
        <div className="insurance-summary">
          <h4>Typical Agent Annual Insurance Costs:</h4>
          <ul>
            <li>E&O Insurance: $300-800</li>
            <li>General Liability: $400-600</li>
            <li>Cyber Liability: $500-1,000 (optional but recommended)</li>
            <li><strong>Total: $1,200-2,400 per year</strong></li>
          </ul>

          <h4>Broker Additional Costs:</h4>
          <ul>
            <li>Fidelity Bond: $300-500</li>
            <li>Higher coverage limits</li>
            <li>Workers' comp (if employees)</li>
            <li><strong>Total: $2,000-4,000+ per year</strong></li>
          </ul>
        </div>

        <p className="highlight">
          <strong>Bottom Line:</strong> Insurance is a BUSINESS EXPENSE, not an option. One uninsured claim 
          can bankrupt you. Always verify coverage includes all states where you're licensed and covers 
          all your business activities.
        </p>
      </>
    )
  },
  {
    id: 'legal-protections',
    icon: '⚖️',
    title: '18. Legal Protections & MA Compliance',
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
  },
  {
    id: 'wisp',
    icon: '🔒',
    title: '19. MA Privacy & Security Laws (WISP)',
    subtitle: 'Written Information Security Program - Protecting Client Data',
    body: (
      <>
        <h3>19.1 What is WISP?</h3>
        <p><strong>Written Information Security Program</strong> - Massachusetts law (201 CMR 17.00) requiring 
        businesses to implement and maintain a comprehensive written security program to protect personal 
        information of Massachusetts residents.</p>
        
        <p className="highlight">
          <strong>Applies to:</strong> ALL businesses that own or license personal information about Massachusetts 
          residents, including real estate brokerages, agents, and property managers.
        </p>

        <h3>19.2 What is "Personal Information"?</h3>
        <div className="personal-info-definition">
          <p><strong>Personal Information = Name + One or More of the Following:</strong></p>
          <ul>
            <li>✅ <strong>Social Security Number (SSN)</strong></li>
            <li>✅ <strong>Driver's License Number</strong> and state-issued identification card number</li>
            <li>✅ <strong>Financial Account Number</strong> or credit/debit card number, WITH OR WITHOUT 
            any required security code, access code, personal identification number, or passwords that would 
            permit access to a resident's financial account</li>
          </ul>

          <p><strong>Name Must Include:</strong></p>
          <ul>
            <li>First name and last name, OR</li>
            <li>First initial and last name</li>
          </ul>

          <p className="warning">
            ❌ <strong>Public Information is EXCLUDED</strong> - Information lawfully available to the general 
            public from federal, state, or local government records is not considered personal information under WISP.
          </p>
        </div>

        <h3>19.3 What Must Be Safeguarded?</h3>
        <div className="safeguarding-requirements">
          <p><strong>ALL of the following that contain personal information:</strong></p>
          <ul>
            <li>📄 <strong>Paper Records</strong> - Client files, applications, contracts</li>
            <li>💻 <strong>Electronic Records</strong> - Digital files, databases, emails</li>
            <li>🖥️ <strong>Computer Systems</strong> - Desktop computers, servers</li>
            <li>💼 <strong>Laptops</strong> - Mobile computers, notebooks</li>
            <li>💾 <strong>Portable Drive Devices</strong> - USB drives, external hard drives, smartphones, tablets</li>
          </ul>

          <h4>Real Estate Examples:</h4>
          <ul>
            <li>Purchase and sale agreements with financial info</li>
            <li>Loan applications and pre-approval letters</li>
            <li>Copies of driver's licenses or state IDs</li>
            <li>W-9 forms with SSNs</li>
            <li>Credit reports</li>
            <li>Wire transfer information</li>
            <li>Tenant applications with SSNs</li>
          </ul>
        </div>

        <h3>19.4 Data Breach Notification Requirements</h3>
        <div className="breach-notification">
          <p className="warning">
            <strong>⚠️ CRITICAL:</strong> Any person or business that knows of a breach in security laws 
            MUST file a notice with:
          </p>
          <ol>
            <li><strong>Massachusetts Attorney General</strong></li>
            <li><strong>Director of Office of Consumer Affairs</strong></li>
            <li><strong>Affected Residents</strong> (individuals whose information was breached)</li>
          </ol>

          <h4>What Constitutes a Breach?</h4>
          <ul>
            <li>Unauthorized access to personal information</li>
            <li>Lost or stolen laptop/device with unencrypted data</li>
            <li>Hacking or cyberattack</li>
            <li>Accidental disclosure to unauthorized parties</li>
            <li>Theft of paper files</li>
          </ul>

          <h4>Timeline for Notification:</h4>
          <ul>
            <li>As soon as possible</li>
            <li>No unreasonable delay</li>
            <li>Document when breach was discovered</li>
            <li>Consult attorney immediately</li>
          </ul>
        </div>

        <h3>19.5 Required Components of WISP Compliance</h3>
        <div className="wisp-components">
          <h4>1. Written Security Plan</h4>
          <ul>
            <li>Documented policies and procedures</li>
            <li>Must be in writing (not just verbal)</li>
            <li>Updated regularly</li>
            <li>Accessible to employees</li>
          </ul>

          <h4>2. Employee Training</h4>
          <ul>
            <li>Regular security training for all employees</li>
            <li>Onboarding training for new hires</li>
            <li>Annual refresher training</li>
            <li>Document training completion</li>
          </ul>

          <h4>3. Access Controls</h4>
          <ul>
            <li>Limit who can access personal information</li>
            <li>Use unique user IDs and passwords</li>
            <li>Terminate access when employee leaves</li>
            <li>Need-to-know basis only</li>
          </ul>

          <h4>4. Encryption</h4>
          <ul>
            <li>Encrypt electronic files containing personal information</li>
            <li>Use encrypted email for sensitive documents</li>
            <li>Encrypt laptops and portable devices</li>
            <li>Use secure file transfer methods</li>
          </ul>

          <h4>5. Secure Disposal</h4>
          <ul>
            <li>Shred paper documents with personal information</li>
            <li>Wipe or destroy electronic media before disposal</li>
            <li>Don't just delete - properly destroy</li>
            <li>Document disposal procedures</li>
          </ul>

          <h4>6. Regular Security Assessments</h4>
          <ul>
            <li>Periodically review security measures</li>
            <li>Test systems for vulnerabilities</li>
            <li>Update policies as needed</li>
            <li>Document assessments</li>
          </ul>

          <h4>7. Vendor Management</h4>
          <ul>
            <li>Ensure vendors protect personal information</li>
            <li>Written agreements with security requirements</li>
            <li>Verify vendor compliance</li>
            <li>Examples: cloud storage, CRM systems, transaction platforms</li>
          </ul>

          <h4>8. Incident Response Plan</h4>
          <ul>
            <li>Plan for responding to security breaches</li>
            <li>Designated person responsible</li>
            <li>Steps to contain and investigate breach</li>
            <li>Notification procedures</li>
          </ul>
        </div>

        <h3>19.6 Penalties for Non-Compliance</h3>
        <ul>
          <li><strong>Civil Penalties:</strong> Fines and damages</li>
          <li><strong>Attorney General Enforcement:</strong> State can take action</li>
          <li><strong>Private Right of Action:</strong> Affected individuals can sue</li>
          <li><strong>Reputational Damage:</strong> Loss of client trust</li>
          <li><strong>License Risk:</strong> Board of Registration can investigate</li>
        </ul>

        <h3>19.7 Practical Steps for Real Estate Professionals</h3>
        <div className="practical-steps">
          <h4>✅ DO:</h4>
          <ul>
            <li>Create and maintain a written WISP document</li>
            <li>Lock file cabinets with paper documents</li>
            <li>Encrypt laptops and mobile devices</li>
            <li>Use strong, unique passwords</li>
            <li>Shred documents before disposal</li>
            <li>Train all staff on security</li>
            <li>Use secure email for sensitive info</li>
            <li>Verify vendor security (DocuSign, CRMs, etc.)</li>
            <li>Report breaches immediately</li>
          </ul>

          <h4>❌ DON'T:</h4>
          <ul>
            <li>Email unencrypted SSNs or financial info</li>
            <li>Leave client files visible to others</li>
            <li>Use unsecured public Wi-Fi for client data</li>
            <li>Throw documents in regular trash</li>
            <li>Store passwords on sticky notes</li>
            <li>Give all employees access to everything</li>
            <li>Ignore security updates</li>
            <li>Assume vendors handle everything</li>
          </ul>
        </div>

        <p className="highlight">
          <strong>Bottom Line:</strong> WISP compliance is NOT optional for Massachusetts real estate professionals. 
          One data breach can result in significant fines, lawsuits, and career damage. Implement proper security 
          measures NOW, not after a breach occurs. When in doubt, consult with a cybersecurity professional or attorney.
        </p>
      </>
    )
  },
  {
    id: 'two-contract-attorney',
    icon: '⚖️',
    title: '20. Two-Contract System & Attorney Role',
    subtitle: 'MA\'s Unique Process & Proper Legal Verbiage',
    body: (
      <>
        <h3>20.1 Massachusetts Two-Contract System</h3>
        <p><strong>Massachusetts is Different:</strong> Unlike most states that use one contract, MA uses a two-contract 
        system that protects both parties during the due diligence period.</p>

        <div className="two-contracts">
          <h4>Contract #1: Offer to Purchase (OTP)</h4>
          <ul>
            <li><strong>Purpose:</strong> Initial agreement establishing basic terms</li>
            <li><strong>Timing:</strong> First step in the transaction</li>
            <li><strong>Created By:</strong> Real estate agents using standard forms</li>
            <li><strong>Includes:</strong>
              <ul>
                <li>Purchase price</li>
                <li>Initial deposit amount</li>
                <li>Inspection contingency and deadline</li>
                <li>Financing and appraisal contingencies</li>
                <li>Target closing date</li>
                <li>Basic terms and conditions</li>
              </ul>
            </li>
            <li><strong>Binding:</strong> Creates initial contractual relationship (especially once earnest money deposited)</li>
          </ul>

          <h4>Contract #2: Purchase & Sales Agreement (P&S)</h4>
          <ul>
            <li><strong>Purpose:</strong> Comprehensive legal contract with full terms and protections</li>
            <li><strong>Timing:</strong> Typically executed within 10 days after offer acceptance</li>
            <li><strong>Created By:</strong> Attorneys for buyer and seller</li>
            <li><strong>Includes:</strong>
              <ul>
                <li>All terms from Offer to Purchase</li>
                <li>Detailed legal provisions</li>
                <li>Expanded contingencies</li>
                <li>Title and defect cure periods</li>
                <li>Specific property inclusions/exclusions</li>
                <li>Warranties and representations</li>
                <li>Default remedies</li>
                <li>Closing procedures</li>
              </ul>
            </li>
            <li><strong>Deposit:</strong> Larger deposit due (typically 5% of purchase price)</li>
            <li><strong>Binding:</strong> More binding than OTP - harder to cancel after P&S signed</li>
          </ul>
        </div>

        <h3>20.2 Why Two Contracts?</h3>
        <div className="rationale">
          <h4>Benefits of the Two-Contract System:</h4>
          <ol>
            <li><strong>Speed:</strong> Offer to Purchase can be executed quickly to secure the property</li>
            <li><strong>Due Diligence Time:</strong> 10-day period allows for:
              <ul>
                <li>Home inspection</li>
                <li>Review of property condition</li>
                <li>Attorney review and advice</li>
                <li>Mortgage pre-qualification verification</li>
              </ul>
            </li>
            <li><strong>Attorney Involvement:</strong> Ensures professional legal review before final commitment</li>
            <li><strong>Protection:</strong> Both parties get legal protection through attorney-drafted P&S</li>
            <li><strong>Clarity:</strong> Comprehensive P&S clarifies all terms and prevents misunderstandings</li>
          </ol>
        </div>

        <h3>20.3 Attorney Role in Massachusetts Transactions</h3>
        <div className="attorney-involvement">
          <h4>When Attorneys Get Involved:</h4>
          <p><strong>Typical Timeline:</strong> After offer acceptance, before P&S signing</p>

          <h4>What Attorneys Handle:</h4>
          <ul>
            <li>✅ <strong>Draft P&S Agreement</strong> - Create comprehensive legal contract</li>
            <li>✅ <strong>Review Offer to Purchase</strong> - Ensure terms are clear and protect client</li>
            <li>✅ <strong>Negotiate Terms</strong> - Work with other party's attorney on modifications</li>
            <li>✅ <strong>Title Search</strong> - Research property ownership history and liens</li>
            <li>✅ <strong>Resolve Title Issues</strong> - Clear clouds on title, liens, encumbrances</li>
            <li>✅ <strong>Review All Documents</strong> - Closing disclosure, deed, settlement statement</li>
            <li>✅ <strong>Explain Legal Implications</strong> - Clarify what terms mean legally</li>
            <li>✅ <strong>Conduct Closing</strong> - Handle settlement, signing, recording</li>
            <li>✅ <strong>Prepare Deed</strong> - Draft legal document transferring ownership</li>
            <li>✅ <strong>Record Documents</strong> - File with Registry of Deeds</li>
            <li>✅ <strong>Disburse Funds</strong> - Manage escrow and closing funds</li>
          </ul>

          <p className="highlight">
            <strong>Important:</strong> Attorney involvement is customary in MA but not legally required. However, 
            most transactions involve attorneys for both buyer and seller. It's considered standard practice.
          </p>
        </div>

        <h3>20.4 Proper Language When Discussing Attorneys</h3>
        <div className="proper-language">
          <h4>✅ DO SAY:</h4>
          <ul>
            <li>"You have the right to consult with an attorney at any time."</li>
            <li>"Many people choose to have an attorney review contracts and represent them at closing."</li>
            <li>"I recommend you consider speaking with a real estate attorney."</li>
            <li>"An attorney can explain the legal implications of this."</li>
            <li>"You should consult your attorney about this."</li>
            <li>"Your attorney will draft the P&S Agreement."</li>
            <li>"This is a legal question that your attorney should address."</li>
          </ul>

          <h4>❌ DO NOT SAY:</h4>
          <ul>
            <li>❌ "You don't need an attorney." (Unauthorized practice of law)</li>
            <li>❌ "This means you have to..." (Interpreting legal consequences)</li>
            <li>❌ "The law requires..." (Giving legal advice)</li>
            <li>❌ "I'll just cross that out." (Modifying legal documents)</li>
            <li>❌ "Let me explain what this clause means legally..." (Legal interpretation)</li>
            <li>❌ "You should do..." (Legal advice)</li>
            <li>❌ "Attorneys just slow things down." (Discouraging attorney use)</li>
            <li>❌ "Attorneys are too expensive - I can handle it." (Misrepresentation)</li>
          </ul>
        </div>

        <h3>20.5 Unauthorized Practice of Law</h3>
        <div className="unauthorized-practice">
          <h4>What Agents CANNOT Do:</h4>
          <ul>
            <li>❌ Draft contracts (only use approved standard forms)</li>
            <li>❌ Interpret legal documents or consequences</li>
            <li>❌ Give legal advice</li>
            <li>❌ Advise whether attorney is needed</li>
            <li>❌ Modify legal language in contracts</li>
            <li>❌ Explain what "the law requires"</li>
            <li>❌ Practice law in any form</li>
          </ul>

          <h4>What Agents CAN Do:</h4>
          <ul>
            <li>✅ Explain terms in standard real estate forms</li>
            <li>✅ Recommend clients consult with an attorney</li>
            <li>✅ Provide names of attorneys (2-3 recommendations)</li>
            <li>✅ Facilitate the transaction process</li>
            <li>✅ Coordinate between parties and attorneys</li>
            <li>✅ Explain customary practices in MA</li>
          </ul>

          <p className="warning">
            <strong>⚠️ Consequences of Unauthorized Practice of Law:</strong> License suspension or revocation, 
            fines, civil liability, loss of commission, and potential criminal charges. Always stay in your lane!
          </p>
        </div>

        <h3>20.6 Recommending Attorneys to Clients</h3>
        <div className="attorney-recommendations">
          <h4>✅ What You CAN Do:</h4>
          <ul>
            <li>Provide 2-3 attorney names as suggestions</li>
            <li>Share attorneys you've worked with successfully</li>
            <li>Explain your experience working with them</li>
            <li>Note they specialize in real estate</li>
          </ul>

          <h4>❌ What You CANNOT Do:</h4>
          <ul>
            <li>Receive referral fees from attorneys (RESPA violation)</li>
            <li>Pressure clients to use specific attorney</li>
            <li>Fail to disclose business relationships with attorneys</li>
            <li>Imply kickbacks or reciprocal arrangements exist</li>
            <li>Guarantee results based on attorney choice</li>
          </ul>

          <h4>Best Practice:</h4>
          <p>"Here are 2-3 real estate attorneys I've worked with in the past. You're welcome to contact them, 
          use your own attorney, or ask friends and family for recommendations. The choice is entirely yours."</p>
        </div>

        <h3>20.7 Critical Phrases for Agents</h3>
        <div className="critical-phrases">
          <h4>When Client Asks "Do I need an attorney?"</h4>
          <p className="proper-response">
            "You have the right to consult with an attorney at any time during this transaction. In Massachusetts, 
            it's very common for both buyers and sellers to have attorney representation, especially for drafting 
            and reviewing the Purchase & Sales Agreement and handling the closing. Many people find that having 
            an attorney provides peace of mind and protects their interests. I recommend you consider speaking 
            with a real estate attorney."
          </p>

          <h4>When Client Asks "What does this clause mean?"</h4>
          <p className="proper-response">
            "That's a legal question that your attorney should explain to you. An attorney can clarify the legal 
            implications and ensure you fully understand your rights and obligations under this contract."
          </p>

          <h4>When Client Wants to Modify Contract Language:</h4>
          <p className="proper-response">
            "Contract modifications should be handled by your attorney. They can review the proposed changes and 
            ensure they're properly drafted to protect your interests."
          </p>
        </div>

        <p className="highlight">
          <strong>Remember:</strong> When in doubt, refer to an attorney. It's always better to over-refer than 
          to risk unauthorized practice of law. Protecting your clients means knowing when to bring in legal 
          professionals - and that's a sign of competence, not weakness!
        </p>
      </>
    )
  },
  {
    id: 'fair-housing',
    icon: '⚖️',
    title: '21. Fair Housing Act - Complete Compliance Guide',
    subtitle: 'Protected classes, violations, penalties, advertising compliance, and your legal obligations',
    body: (
      <>
        <h3>21.1 Overview - Why Fair Housing Matters</h3>
        <p>
          The Fair Housing Act is <strong>FEDERAL LAW</strong> that prohibits discrimination in housing. 
          Violations can result in:
        </p>
        <ul>
          <li><strong>Criminal charges</strong> (if willful violation)</li>
          <li><strong>Civil lawsuits</strong> with unlimited damages</li>
          <li><strong>License suspension/revocation</strong></li>
          <li><strong>Fines up to $16,000 (first offense)</strong>, $37,500 (second), $65,000 (third+)</li>
          <li><strong>Attorney fees</strong> paid by violator</li>
          <li><strong>Reputation destruction</strong> - career ending</li>
        </ul>
        <p className="highlight">
          Fair Housing is <strong>NOT NEGOTIABLE</strong>. You cannot "accommodate" client requests that violate 
          Fair Housing, even if they ask you to. Refusing discriminatory requests is your legal and ethical duty.
        </p>

        <h3>21.2 Federal Protected Classes (Title VIII - Fair Housing Act of 1968 as amended)</h3>
        <div className="protected-classes">
          <h4>The 7 Federal Protected Classes:</h4>
          <ol>
            <li><strong>Race</strong> - Cannot discriminate based on race</li>
            <li><strong>Color</strong> - Cannot discriminate based on skin color</li>
            <li><strong>Religion</strong> - Cannot discriminate based on religious beliefs</li>
            <li><strong>National Origin</strong> - Cannot discriminate based on country of origin</li>
            <li><strong>Sex</strong> - Cannot discriminate based on gender (includes sexual harassment)</li>
            <li><strong>Familial Status</strong> - Cannot discriminate against families with children under 18, pregnant women, or those securing custody</li>
            <li><strong>Disability</strong> - Cannot discriminate against people with physical or mental disabilities</li>
          </ol>
        </div>

        <h3>21.3 Massachusetts Additional Protected Classes</h3>
        <p>Massachusetts law (Chapter 151B) provides <strong>ADDITIONAL</strong> protections beyond federal law:</p>
        <ul>
          <li><strong>Sexual Orientation</strong> - Gay, lesbian, bisexual protection</li>
          <li><strong>Gender Identity</strong> - Transgender protection</li>
          <li><strong>Age</strong> - Cannot discriminate based on age</li>
          <li><strong>Marital Status</strong> - Single, married, divorced</li>
          <li><strong>Military/Veteran Status</strong> - Cannot discriminate against veterans</li>
          <li><strong>Ancestry</strong> - Ethnic background</li>
          <li><strong>Public Assistance</strong> - Section 8, welfare recipients</li>
        </ul>
        <p className="highlight">
          <strong>Remember:</strong> Massachusetts law is BROADER than federal law. Always follow the law that 
          provides MORE protection to consumers.
        </p>

        <h3>21.4 What Constitutes Discrimination?</h3>
        
        <h4>Prohibited Actions:</h4>
        <div className="violation-examples">
          <h5>❌ Refusing to Show/Rent/Sell</h5>
          <ul>
            <li>"I don't have any properties available" (when you do)</li>
            <li>"That neighborhood isn't right for you"</li>
            <li>"The owner only wants [certain type] of tenant"</li>
            <li>Not returning calls from protected class members</li>
          </ul>

          <h5>❌ Different Terms or Conditions</h5>
          <ul>
            <li>Higher rent for families with children</li>
            <li>Larger security deposit for disabled persons</li>
            <li>Different lease terms based on race</li>
            <li>Requiring co-signers only for certain groups</li>
          </ul>

          <h5>❌ Steering</h5>
          <ul>
            <li>"You'd be happier in this neighborhood" (based on race/religion)</li>
            <li>"There are more people like you over there"</li>
            <li>Only showing certain areas to certain groups</li>
            <li>Channeling protected classes to/away from areas</li>
          </ul>

          <h5>❌ Blockbusting</h5>
          <ul>
            <li>"You should sell now before [protected class] moves in"</li>
            <li>"Property values are dropping because of [protected class]"</li>
            <li>Inducing panic selling based on protected class entry</li>
          </ul>

          <h5>❌ Discriminatory Advertising</h5>
          <ul>
            <li>"Perfect for traditional family"</li>
            <li>"No children"</li>
            <li>"Ideal for mature couple"</li>
            <li>"Christian community"</li>
            <li>"Walk to St. Mary's Church" (implies religion preference)</li>
            <li>Pictures showing only one race</li>
          </ul>

          <h5>❌ Disability Discrimination</h5>
          <ul>
            <li>Refusing reasonable accommodations (service animals)</li>
            <li>Refusing reasonable modifications (ramps, grab bars)</li>
            <li>Asking about nature/severity of disability</li>
            <li>"No wheelchairs" or "no disabled persons"</li>
          </ul>

          <h5>❌ Medical Condition Discrimination (CRITICAL!)</h5>
          <div className="medical-discrimination-warning">
            <p className="highlight">
              <strong>🚨 It's ILLEGAL to discriminate in the sale or rental of housing based on HIV or AIDS status.</strong>
            </p>
            <ul>
              <li><strong>HIPAA Laws:</strong> Cannot state anyone's current or past MEDICAL conditions</li>
              <li><strong>HIV/AIDS:</strong> Protected under disability discrimination laws</li>
              <li><strong>COVID-19:</strong> Medical condition - cannot discriminate based on COVID status or history</li>
              <li><strong>Privacy:</strong> Medical information is confidential and protected</li>
              <li><strong>Cannot Ask:</strong> You cannot inquire about applicant's medical history or conditions</li>
              <li><strong>Cannot Disclose:</strong> Even if you somehow know, you cannot share medical information</li>
            </ul>
            <p className="liability-warning">
              <strong>⚠️ Violations:</strong> HIPAA violations can result in criminal penalties up to $250,000 and 10 years in prison, 
              plus Fair Housing Act violations with fines up to $100,000+.
            </p>
          </div>

          <h5>❌ Familial Status Discrimination</h5>
          <ul>
            <li>"No children allowed"</li>
            <li>"Adults only" (except qualified senior housing 55+/62+)</li>
            <li>"Two-person maximum" (unless legitimate occupancy standard)</li>
            <li>Discouraging families with children</li>
          </ul>
        </div>

        <h3>21.5 Exemptions (Very Limited!)</h3>
        <div className="exemptions">
          <h4>Religious Organizations:</h4>
          <ul>
            <li>Can limit to members of own religion</li>
            <li>Only for non-commercial property</li>
            <li>Cannot discriminate on other bases (race, sex, etc.)</li>
          </ul>

          <h4>Private Clubs:</h4>
          <ul>
            <li>Can limit lodgings to members</li>
            <li>Must be truly private, not open to public</li>
            <li>Incidental income-producing purpose</li>
          </ul>

          <h4>Senior Housing (55+ or 62+):</h4>
          <ul>
            <li>62+ housing: All residents must be 62 or older</li>
            <li>55+ housing: 80% of units have at least one person 55+</li>
            <li>Must publish policies and procedures</li>
            <li>Must verify age</li>
            <li>Still cannot discriminate on other bases</li>
          </ul>

          <h4>Owner-Occupied Buildings (3 units or fewer):</h4>
          <ul>
            <li>Owner lives in one unit</li>
            <li>Building has 3 or fewer total units</li>
            <li>Cannot use discriminatory advertising</li>
            <li>Cannot use broker (loses exemption if you use agent!)</li>
          </ul>

          <p className="highlight">
            <strong>Critical:</strong> These exemptions are VERY NARROW. If you're involved as a real estate 
            professional, most exemptions DON'T APPLY. Always assume Fair Housing applies!
          </p>
        </div>

        <h3>21.6 Advertising Compliance</h3>
        <div className="advertising-rules">
          <h4>✅ SAFE - Use These Words:</h4>
          <ul>
            <li>Master bedroom, great room, family room</li>
            <li>Walk to schools, near parks</li>
            <li>Convenient to shopping, restaurants, highway</li>
            <li>Quiet neighborhood, tree-lined street</li>
            <li>Spacious, updated, modern, charming</li>
            <li>Pet-friendly (with landlord permission)</li>
          </ul>

          <h4>⚠️ USE WITH EXTREME CAUTION:</h4>
          <ul>
            <li>"Perfect for family" - Could imply no singles</li>
            <li>"Great for executives" - Could imply age/income discrimination</li>
            <li>"Near St. Joseph's Church" - Could imply religion preference</li>
            <li>"Mature landscaping" - Could imply age preference</li>
            <li>"Empty nester special" - Familial status discrimination</li>
          </ul>

          <h4>❌ NEVER USE - Prohibited Language:</h4>
          <ul>
            <li>"No children" - Familial status violation</li>
            <li>"Adults only" - Familial status violation (unless qualified senior)</li>
            <li>"Traditional family" - Familial status/marital status</li>
            <li>"Perfect for Christian family" - Religion violation</li>
            <li>"Integrated neighborhood" - Race violation</li>
            <li>"No wheelchairs" - Disability violation</li>
            <li>"English-speaking only" - National origin violation</li>
            <li>"Ideal for bachelor" - Familial status/sex discrimination</li>
          </ul>

          <h4>Photos and Images:</h4>
          <ul>
            <li>Use diverse representation in marketing materials</li>
            <li>Don't use only one race/age/family type in photos</li>
            <li>Be inclusive in visual representation</li>
            <li>Human models should represent diversity</li>
          </ul>
        </div>

        <h3>21.7 How to Handle Discriminatory Requests from Clients</h3>
        <div className="handling-discrimination">
          <h4>When Client Says: "I don't want to sell to [protected class]"</h4>
          <p className="proper-response">
            <strong>Your Response:</strong> "I understand you have preferences, but federal and state Fair 
            Housing laws prohibit me from discriminating against anyone based on [race, religion, etc.]. As a 
            licensed professional, I'm required to treat all potential buyers equally. I cannot and will not 
            honor that request. If you cannot comply with Fair Housing law, I will need to withdraw from 
            representing you."
          </p>

          <h4>When Client Says: "Don't show my property to families with kids"</h4>
          <p className="proper-response">
            <strong>Your Response:</strong> "That would be familial status discrimination, which is illegal 
            under the Fair Housing Act. I'm required by law to show your property to all qualified buyers 
            regardless of whether they have children. I cannot follow that instruction."
          </p>

          <h4>When Client Says: "I only want [protected class] tenants/buyers"</h4>
          <p className="proper-response">
            <strong>Your Response:</strong> "Even if you're trying to help a particular group, Fair Housing law 
            prohibits preferential treatment based on protected classes. We must treat all applicants equally 
            and select based on lawful criteria like credit, income, and rental history - not on race, religion, 
            or other protected characteristics."
          </p>

          <h4>Document Everything:</h4>
          <ul>
            <li>Keep records of discriminatory requests</li>
            <li>Document your refusal in writing</li>
            <li>Send follow-up email confirming your position</li>
            <li>Keep proof you did not discriminate</li>
            <li>Terminate relationship if client insists</li>
          </ul>
        </div>

        <h3>21.8 Reasonable Accommodations for Disabilities</h3>
        <div className="disability-rules">
          <h4>Reasonable Accommodations (Policy Changes):</h4>
          <p>Must allow disabled persons to request policy changes, such as:</p>
          <ul>
            <li><strong>Service animals</strong> - Even in "no pets" buildings</li>
            <li><strong>Assistance animals</strong> - Emotional support animals (with proper documentation)</li>
            <li><strong>Reserved parking</strong> - Closer to entrance</li>
            <li><strong>Modified payment schedules</strong> - If disability affects payment ability</li>
            <li><strong>Communication accommodations</strong> - Large print, electronic formats</li>
          </ul>

          <h4>Reasonable Modifications (Physical Changes):</h4>
          <p>Must allow disabled persons to make physical modifications at their expense:</p>
          <ul>
            <li>Installing grab bars in bathroom</li>
            <li>Widening doorways for wheelchairs</li>
            <li>Installing ramps</li>
            <li>Lowering countertops, cabinets</li>
            <li>Installing visual fire alarms for deaf tenants</li>
          </ul>
          <p><strong>Landlord's Rights:</strong></p>
          <ul>
            <li>Can require tenant to pay for modifications</li>
            <li>Can require restoration to original condition at lease end (if reasonable)</li>
            <li>Can require reasonable documentation of disability</li>
            <li>Cannot ask about nature/severity of disability</li>
          </ul>

          <h4>What You Can Ask:</h4>
          <ul>
            <li>✅ "Can you provide documentation from a healthcare provider that you have a disability?"</li>
            <li>✅ "Can you explain how the requested accommodation relates to your disability?"</li>
          </ul>

          <h4>What You CANNOT Ask:</h4>
          <ul>
            <li>❌ "What's wrong with you?"</li>
            <li>❌ "How severe is your disability?"</li>
            <li>❌ "Can you show me your medical records?"</li>
            <li>❌ "Are you taking medication?"</li>
          </ul>
        </div>

        <h3>21.9 Penalties and Enforcement</h3>
        <div className="penalties">
          <h4>HUD Administrative Complaints:</h4>
          <ul>
            <li><strong>First offense:</strong> Up to $16,000 fine</li>
            <li><strong>Second offense (within 5 years):</strong> Up to $37,500</li>
            <li><strong>Third+ offense (within 7 years):</strong> Up to $65,000</li>
            <li>Plus attorney fees and costs</li>
            <li>Plus actual damages to victim</li>
          </ul>

          <h4>Federal Lawsuit:</h4>
          <ul>
            <li><strong>Unlimited compensatory damages</strong> (emotional distress, humiliation)</li>
            <li><strong>Punitive damages</strong> (to punish and deter)</li>
            <li><strong>Injunctive relief</strong> (court orders to change practices)</li>
            <li><strong>Attorney fees</strong> paid by defendant</li>
            <li><strong>Criminal penalties</strong> if willful violation (fines and imprisonment)</li>
          </ul>

          <h4>State License Board:</h4>
          <ul>
            <li>License suspension</li>
            <li>License revocation</li>
            <li>Mandatory education</li>
            <li>Probation</li>
            <li>Public reprimand</li>
          </ul>

          <h4>NAR Professional Standards:</h4>
          <ul>
            <li>Article 10 violation</li>
            <li>Fines up to $15,000</li>
            <li>Suspension from association</li>
            <li>Expulsion from Realtor® membership</li>
          </ul>
        </div>

        <h3>21.10 Best Practices for Compliance</h3>
        <div className="best-practices">
          <h4>DO:</h4>
          <ul>
            <li>✅ Treat everyone equally regardless of protected class</li>
            <li>✅ Use the same criteria for all applicants</li>
            <li>✅ Document all decisions with legitimate business reasons</li>
            <li>✅ Refuse discriminatory requests from clients</li>
            <li>✅ Provide equal service to all</li>
            <li>✅ Show all available properties that meet stated criteria</li>
            <li>✅ Take Fair Housing training regularly</li>
            <li>✅ Display Equal Housing Opportunity logo</li>
            <li>✅ Keep records of all applicants and why each was accepted/rejected</li>
          </ul>

          <h4>DON'T:</h4>
          <ul>
            <li>❌ Steer based on protected class</li>
            <li>❌ Use discriminatory language in advertising</li>
            <li>❌ Ask about protected class status</li>
            <li>❌ Make assumptions about "fit" based on protected class</li>
            <li>❌ Accommodate client's discriminatory requests</li>
            <li>❌ Tell different stories to different people</li>
            <li>❌ Volunteer protected class information about neighborhoods</li>
            <li>❌ Ignore Fair Housing obligations because client insists</li>
          </ul>
        </div>

        <h3>21.11 Case Study Examples</h3>
        <div className="case-studies">
          <h4>Case 1: The Steering Violation</h4>
          <p><strong>Situation:</strong> Agent shows African American buyers only properties in predominantly 
          African American neighborhoods, despite buyers requesting diverse areas.</p>
          <p><strong>Violation:</strong> Steering based on race</p>
          <p><strong>Penalty:</strong> $65,000 HUD fine, license suspension, $100,000 civil judgment</p>
          
          <h4>Case 2: The "No Children" Ad</h4>
          <p><strong>Situation:</strong> Landlord instructs agent to advertise "Adults Only Building - 
          Perfect for Professionals"</p>
          <p><strong>Violation:</strong> Familial status discrimination in advertising</p>
          <p><strong>Penalty:</strong> $16,000 HUD fine to agent, $25,000 to landlord, mandatory training</p>
          
          <h4>Case 3: Service Animal Denial</h4>
          <p><strong>Situation:</strong> Landlord refuses to rent to blind tenant with service dog, citing 
          "no pets" policy</p>
          <p><strong>Violation:</strong> Failure to provide reasonable accommodation for disability</p>
          <p><strong>Penalty:</strong> $37,500 HUD fine, $50,000 emotional distress damages, attorney fees</p>
          
          <h4>Case 4: Religious Preference</h4>
          <p><strong>Situation:</strong> Seller tells agent "Only sell to Christian family"</p>
          <p><strong>Correct Response:</strong> Agent refuses, documents refusal, terminates listing if 
          seller insists</p>
          <p><strong>Outcome:</strong> Agent protected from liability by refusing to discriminate</p>
        </div>

        <p className="highlight">
          <strong>Remember:</strong> Fair Housing compliance is NON-NEGOTIABLE. Your license, your career, 
          and your freedom depend on it. When in doubt, treat everyone equally. You cannot "accommodate" 
          discriminatory requests even if clients insist. Refusing to discriminate is always the right choice!
        </p>

        <div className="critical-resources">
          <h4>Fair Housing Resources:</h4>
          <ul>
            <li><strong>HUD Fair Housing:</strong> 1-800-669-9777 | hud.gov/fairhousing</li>
            <li><strong>MA Commission Against Discrimination (MCAD):</strong> mass.gov/mcad</li>
            <li><strong>NAR Fair Housing Resources:</strong> nar.realtor/fairhousing</li>
            <li><strong>Equal Housing Opportunity Logo:</strong> Required in advertising</li>
          </ul>
        </div>
      </>
    )
  },
  {
    id: 'valuation',
    icon: '💰',
    title: '22. Property Valuation Methods',
    subtitle: 'CMA, cost approach, income approach, market approach - pricing properties accurately',
    body: (
      <>
        <h3>22.1 Comparative Market Analysis (CMA)</h3>
        <p className="highlight">
          The CMA is the most common valuation method used by agents. It compares the subject property 
          to similar recently sold properties (comparables or "comps") to estimate market value.
        </p>

        <h4>Components of a Strong CMA:</h4>
        <ul>
          <li><strong>Active Listings:</strong> Current competition (what buyers can choose instead)</li>
          <li><strong>Pending Sales:</strong> Properties under contract (market direction indicator)</li>
          <li><strong>Sold Properties:</strong> Actual market values (past 3-6 months, same area)</li>
          <li><strong>Expired/Withdrawn:</strong> Failed listings (what didn't work)</li>
        </ul>

        <h4>The 3 C's of Comparables:</h4>
        <div className="key-points">
          <p><strong>1. Condition:</strong> Similar physical condition and updates</p>
          <p><strong>2. Characteristics:</strong> Beds, baths, square footage, lot size, style</p>
          <p><strong>3. Close Proximity:</strong> Same neighborhood or comparable area</p>
        </div>

        <h4>Adjustments in CMA:</h4>
        <ul>
          <li><strong>If comp is better:</strong> SUBTRACT value from comp price</li>
          <li><strong>If comp is worse:</strong> ADD value to comp price</li>
          <li><strong>Common adjustments:</strong>
            <ul>
              <li>Extra bedroom: +$15k-$30k</li>
              <li>Extra bathroom: +$10k-$20k</li>
              <li>Garage: +$10k-$25k</li>
              <li>Finished basement: +$15k-$40k</li>
              <li>Pool: +$10k-$30k (seasonal)</li>
              <li>Updates (kitchen/bath): +$10k-$50k</li>
            </ul>
          </li>
        </ul>

        <h4>CMA Best Practices:</h4>
        <ul>
          <li>✅ Use 3-6 comparable sales minimum</li>
          <li>✅ Keep comps within 1 mile and 6 months when possible</li>
          <li>✅ Adjust for market conditions (appreciation/depreciation)</li>
          <li>✅ Weight the most similar comps more heavily</li>
          <li>✅ Consider days on market and list-to-sale price ratios</li>
          <li>❌ Don't use comps from different school districts unless necessary</li>
          <li>❌ Don't cherry-pick comps to support desired price</li>
        </ul>

        <h4>📊 CMA as "Opinion of Value" - Critical Understanding</h4>
        <div className="cma-opinion-section">
          <p className="warning">
            <strong>Real Estate Agents perform an analysis to list and sell residential property. This is their 
            "opinion of value" to determine a listing & likely sale price.</strong>
          </p>
          
          <p className="highlight">
            <strong>⚠️ Key Point:</strong> A CMA varies depending on the <strong>skill & experience of the agent</strong>. 
            Not all CMAs are created equal! An experienced agent with deep market knowledge will produce more accurate valuations.
          </p>
          
          <h5>🔍 The CMA Looks at the Following Data:</h5>
          <div className="cma-data-points">
            <div className="data-point">
              <h6>✅ Recent <em>comparable sales</em></h6>
              <ul>
                <li>Properties that have SOLD (closed) in past 3-6 months</li>
                <li>Similar size, style, condition, location</li>
                <li>These are the strongest indicators of actual market value</li>
                <li>Must be arm's length transactions (no family sales, short sales)</li>
              </ul>
            </div>
            
            <div className="data-point">
              <h6>✅ <em>Current Inventory</em></h6>
              <ul>
                <li>Active listings (what's available NOW)</li>
                <li>Shows current competition</li>
                <li>Indicates market supply</li>
                <li>High inventory = downward price pressure</li>
                <li>Low inventory = upward price pressure</li>
              </ul>
            </div>
            
            <div className="data-point">
              <h6>✅ <em>Expired or Withdrawn Inventory (homes that didn't sell)</em></h6>
              <ul>
                <li>Listings that failed to sell and expired</li>
                <li>Listings withdrawn by seller</li>
                <li>Shows what the market REJECTED</li>
                <li>Critical for understanding overpricing</li>
                <li>Helps avoid same mistakes</li>
                <li><strong>Why it matters:</strong> If similar homes didn't sell at $X, yours won't either</li>
              </ul>
            </div>
            
            <div className="data-point">
              <h6>✅ <em>Current & future market conditions</em></h6>
              <ul>
                <li>Market trend: appreciating or depreciating?</li>
                <li>Interest rate environment</li>
                <li>Seasonal factors (spring/summer = hot, winter = slow)</li>
                <li>Economic indicators (unemployment, job growth)</li>
                <li>Local development plans</li>
                <li>School district changes</li>
                <li><strong>Forward-looking:</strong> Where is market heading, not just where it's been</li>
              </ul>
            </div>
          </div>
          
          <h5>🔧 Making Adjustments - Negative / Positive</h5>
          <p className="highlight">
            <strong>Agents can make negative / positive adjustments for property differences to nail down a likely sale price.</strong>
          </p>
          <div className="adjustment-examples">
            <p><strong>Example Adjustment Scenario:</strong></p>
            <ul>
              <li><strong>Subject Property:</strong> 3 bed, 2 bath, no garage</li>
              <li><strong>Comparable:</strong> 3 bed, 2 bath, 2-car garage, sold for $450k</li>
              <li><strong>Adjustment:</strong> Garage worth $20k in this market</li>
              <li><strong>Adjusted Comp Value:</strong> $450k - $20k = $430k (what comp would've sold for without garage)</li>
              <li><strong>Therefore:</strong> Subject property worth approximately $430k</li>
            </ul>
            
            <p className="warning">
              <strong>Critical Rule:</strong> Adjustments must be based on market data, not guesses. Use recent sales 
              to determine the value of specific features in YOUR market.
            </p>
          </div>
          
          <h5>💻 CMA Software & Programs</h5>
          <div className="cma-software">
            <p className="highlight">
              <strong>CMA programs are available for FREE through MLS or agents can purchase a customized CMA software package.</strong>
            </p>
            <ul>
              <li><strong>Free MLS CMA Tools:</strong>
                <ul>
                  <li>Included with MLS membership</li>
                  <li>Basic CMA reports</li>
                  <li>Pull comps directly from MLS data</li>
                  <li>Generate PDF reports</li>
                  <li>Sufficient for most listings</li>
                </ul>
              </li>
              <li><strong>Premium CMA Software:</strong>
                <ul>
                  <li>Cloud CMA ($10-30/month)</li>
                  <li>HomeSpotter CMA</li>
                  <li>ShowingTime CMA</li>
                  <li><strong>Benefits:</strong> Better visuals, client presentations, marketing materials, mobile access</li>
                  <li><strong>Worth it?</strong> If you do many listings, yes. Better presentation = higher perceived value</li>
                </ul>
              </li>
            </ul>
          </div>
        </div>

        <h4>📋 Listing Presentation: Comparable Sales & Beyond</h4>
        <div className="listing-presentation">
          <p className="warning">
            <strong>Listing Presentation Components:</strong> Comparable Sales & Adjustments, Marketing Plan, 
            Resume, Professional References, Examples of Brochures, Postcards & other marketing materials.
          </p>
          
          <h5>Complete Listing Presentation Checklist:</h5>
          <ol>
            <li><strong>📊 Comparable Sales & Adjustments</strong>
              <ul>
                <li>Detailed CMA with at least 3-6 comps</li>
                <li>Show sold, active, and expired properties</li>
                <li>Explain each adjustment clearly</li>
                <li>Recommended list price range</li>
                <li>Market absorption rate (how quickly homes sell)</li>
              </ul>
            </li>
            
            <li><strong>📈 Marketing Plan</strong>
              <ul>
                <li>MLS listing strategy (photos, description, keywords)</li>
                <li>Online marketing (Zillow, Realtor.com, social media)</li>
                <li>Open house schedule</li>
                <li>Print advertising plan</li>
                <li>Agent/broker tour</li>
                <li>Professional photography/videography</li>
                <li>Virtual tours or 3D walkthroughs</li>
                <li>Email blast to agent database</li>
                <li>Direct mail to neighbors</li>
              </ul>
            </li>
            
            <li><strong>📄 Your Resume</strong>
              <ul>
                <li>Years of experience</li>
                <li>Relevant certifications (GRI, ABR, SRS, etc.)</li>
                <li>Recent sales in their neighborhood</li>
                <li>Average days on market for your listings</li>
                <li>Average list-to-sale price ratio</li>
                <li>Sales volume (if impressive)</li>
              </ul>
            </li>
            
            <li><strong>💬 Professional References</strong>
              <ul>
                <li>3-5 recent client testimonials</li>
                <li>Preferably from same neighborhood</li>
                <li>Specific success stories</li>
                <li>Contact info (with client permission)</li>
                <li>Online reviews (Google, Zillow, Realtor.com)</li>
              </ul>
            </li>
            
            <li><strong>📮 Examples of Marketing Materials</strong>
              <ul>
                <li>Sample brochures (your past listings)</li>
                <li>Postcards (Just Listed, Open House, Just Sold)</li>
                <li>Feature sheets</li>
                <li>Social media posts</li>
                <li>Email marketing examples</li>
                <li>Virtual tour links</li>
                <li>Video marketing samples</li>
              </ul>
            </li>
          </ol>
          
          <div className="presentation-tips">
            <h5>🎯 Listing Presentation Success Tips:</h5>
            <p className="warning">
              <strong>"What makes you different???? It's NOT WHAT YOU THINK THEY WANT TO HEAR! (DO AT HOME)"</strong>
            </p>
            <ul>
              <li><strong>❌ Don't:</strong> Tell them what you THINK they want to hear</li>
              <li><strong>❌ Don't:</strong> Overpromise on list price to win listing</li>
              <li><strong>❌ Don't:</strong> Use generic, templated presentations</li>
              <li><strong>❌ Don't:</strong> Focus only on YOUR accomplishments</li>
              <li><strong>✅ Do:</strong> Ask questions about THEIR goals and concerns</li>
              <li><strong>✅ Do:</strong> Listen more than you talk</li>
              <li><strong>✅ Do:</strong> Be honest about realistic pricing (even if it's lower than they hope)</li>
              <li><strong>✅ Do:</strong> Customize presentation to their specific property and situation</li>
              <li><strong>✅ Do:</strong> Show data, not opinions</li>
              <li><strong>✅ Do:</strong> Explain your strategy for THEIR home, not just your general approach</li>
            </ul>
            
            <p className="highlight">
              <strong>The Truth:</strong> Sellers want an agent who will be HONEST about pricing, PROACTIVE in marketing, 
              and RESPONSIVE during the process. They can smell BS from a mile away. Data-driven pricing and a solid 
              marketing plan win more listings than inflated price promises.
            </p>
          </div>
        </div>

        <h4>📸 BPO (Broker Price Opinion) - Different from CMA</h4>
        <div className="bpo-section">
          <p className="warning">
            <strong>BPO (Broker Price Opinion) - an informal market analysis usually conducted by doing a 
            drive-by and taking photos to verify property exists. Typically ordered by Banks or corporate 
            relocation companies.</strong>
          </p>
          
          <h5>BPO vs CMA - Key Differences:</h5>
          <div className="comparison-table">
            <table className="comparison">
              <thead>
                <tr>
                  <th>Feature</th>
                  <th>CMA (Comparative Market Analysis)</th>
                  <th>BPO (Broker Price Opinion)</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>Purpose</strong></td>
                  <td>Help sellers price property for sale</td>
                  <td>Verify property value for lender/bank</td>
                </tr>
                <tr>
                  <td><strong>Who Orders It</strong></td>
                  <td>Seller/buyer or their agent</td>
                  <td>Banks, lenders, relocation companies</td>
                </tr>
                <tr>
                  <td><strong>Interior Inspection</strong></td>
                  <td>Yes - full walkthrough</td>
                  <td>Usually NO - drive-by only (exterior BPO)<br/>Sometimes yes (interior BPO)</td>
                </tr>
                <tr>
                  <td><strong>Detail Level</strong></td>
                  <td>Comprehensive - detailed adjustments</td>
                  <td>Quick - less detailed</td>
                </tr>
                <tr>
                  <td><strong>Cost</strong></td>
                  <td>Usually free (part of listing service)</td>
                  <td>$50-150 paid to agent</td>
                </tr>
                <tr>
                  <td><strong>Presentation</strong></td>
                  <td>Professional, marketed to client</td>
                  <td>Standardized form for lender</td>
                </tr>
                <tr>
                  <td><strong>Time to Complete</strong></td>
                  <td>2-4 hours (thorough)</td>
                  <td>30-60 minutes (quick)</td>
                </tr>
              </tbody>
            </table>
          </div>
          
          <h5>When BPOs Are Used:</h5>
          <ul>
            <li><strong>Foreclosure valuation:</strong> Bank needs value estimate before foreclosure auction</li>
            <li><strong>Short sale evaluation:</strong> Lender determining if short sale price is acceptable</li>
            <li><strong>Loan modification:</strong> Bank re-assessing property value for loan restructure</li>
            <li><strong>Corporate relocation:</strong> Company helping transferred employee sell home</li>
            <li><strong>Estate planning:</strong> Quick value for estate settlement</li>
            <li><strong>Divorce proceedings:</strong> Fast property valuation</li>
            <li><strong>Loss mitigation:</strong> Bank determining options for distressed borrower</li>
          </ul>
          
          <h5>Types of BPOs:</h5>
          <ul>
            <li><strong>Exterior BPO (Drive-by):</strong>
              <ul>
                <li>Agent drives by property</li>
                <li>Takes exterior photos</li>
                <li>Verifies property exists and condition</li>
                <li>Pulls comps from MLS</li>
                <li>Provides value estimate</li>
                <li>Faster, less expensive</li>
              </ul>
            </li>
            <li><strong>Interior BPO:</strong>
              <ul>
                <li>Agent goes inside property</li>
                <li>Takes interior and exterior photos</li>
                <li>Notes condition of rooms, systems, updates</li>
                <li>More accurate than exterior-only</li>
                <li>Takes longer, costs more</li>
              </ul>
            </li>
          </ul>
          
          <h5>⚠️ BPO Important Notes:</h5>
          <ul>
            <li><strong>NOT an Appraisal:</strong> BPO is agent's opinion, NOT a licensed appraisal</li>
            <li><strong>Cannot be used for lending:</strong> Banks require actual appraisal for mortgage approval</li>
            <li><strong>Quick turnaround:</strong> Usually needed within 24-72 hours</li>
            <li><strong>E&O Insurance:</strong> Agents should have E&O coverage when doing BPOs (liability)</li>
            <li><strong>Pay is low:</strong> $50-150 for work that takes 1-2 hours (not very profitable)</li>
            <li><strong>Good for exposure:</strong> Can lead to REO listings if you do quality work</li>
          </ul>
          
          <p className="highlight">
            <strong>Pro Tip:</strong> BPOs can be a foot-in-the-door with banks and relocation companies. If you do 
            quality, timely BPOs, you may get referrals for REO (bank-owned) listings or relocation listings, 
            which can be lucrative.
          </p>
        </div>

        <h3>22.2 Cost Approach</h3>
        <p>
          Used primarily for new construction, unique properties, or insurance purposes. 
          Calculates what it would cost to rebuild the property from scratch.
        </p>

        <h4>Cost Approach Formula:</h4>
        <div className="formula">
          <p><strong>Land Value + Replacement Cost New - Depreciation = Property Value</strong></p>
        </div>

        <h4>Steps in Cost Approach:</h4>
        <ol>
          <li><strong>Estimate Land Value:</strong> Use recent land sales in area</li>
          <li><strong>Calculate Replacement Cost:</strong> Construction cost per square foot × size</li>
          <li><strong>Subtract Depreciation:</strong>
            <ul>
              <li>Physical deterioration (age, wear and tear)</li>
              <li>Functional obsolescence (outdated design, poor layout)</li>
              <li>External obsolescence (neighborhood decline, busy road)</li>
            </ul>
          </li>
          <li><strong>Add Land and Depreciated Building:</strong> Final value</li>
        </ol>

        <h4>When to Use Cost Approach:</h4>
        <ul>
          <li>✅ New construction (little to no depreciation)</li>
          <li>✅ Unique properties (churches, schools, special-use)</li>
          <li>✅ Insurance valuations</li>
          <li>✅ Properties with few comparables</li>
          <li>❌ NOT ideal for older properties (depreciation hard to quantify)</li>
          <li>❌ NOT ideal for standard residential (CMA is better)</li>
        </ul>

        <h3>22.3 Income Approach</h3>
        <p className="highlight">
          Used for investment properties. Values property based on income it generates. 
          Primary method for commercial and multi-family properties.
        </p>

        <h4>Income Approach Formula:</h4>
        <div className="formula">
          <p><strong>Net Operating Income (NOI) ÷ Capitalization Rate = Property Value</strong></p>
        </div>

        <h4>Calculating Net Operating Income (NOI):</h4>
        <div className="calculation-steps">
          <p>Gross Potential Rent (all units at market rent)</p>
          <p>− Vacancy Loss (5-10% typical)</p>
          <p>= Effective Gross Income</p>
          <p>− Operating Expenses (NOT including mortgage)</p>
          <p>= Net Operating Income (NOI)</p>
        </div>

        <h4>Operating Expenses Include:</h4>
        <ul>
          <li>Property taxes</li>
          <li>Insurance</li>
          <li>Utilities (if owner-paid)</li>
          <li>Maintenance and repairs</li>
          <li>Property management (if applicable)</li>
          <li>Landscaping/snow removal</li>
          <li>Common area utilities</li>
        </ul>

        <h4>Operating Expenses DO NOT Include:</h4>
        <ul>
          <li>❌ Mortgage payments (debt service)</li>
          <li>❌ Depreciation (accounting, not cash)</li>
          <li>❌ Income taxes (investor-specific)</li>
          <li>❌ Capital improvements (one-time, not recurring)</li>
        </ul>

        <h4>Capitalization Rate (Cap Rate):</h4>
        <ul>
          <li><strong>Definition:</strong> Rate of return investor expects</li>
          <li><strong>Market cap rates:</strong> 4-8% typical for residential, 5-12% for commercial</li>
          <li><strong>Higher cap rate:</strong> Higher risk, lower property value</li>
          <li><strong>Lower cap rate:</strong> Lower risk (better area), higher property value</li>
          <li><strong>Example:</strong> $50,000 NOI ÷ 6% cap rate = $833,333 value</li>
        </ul>

        <h4>When to Use Income Approach:</h4>
        <ul>
          <li>✅ Multi-family properties (3+ units)</li>
          <li>✅ Commercial real estate</li>
          <li>✅ Investment properties</li>
          <li>✅ Rent-producing properties</li>
          <li>❌ NOT for owner-occupied single-family (no income)</li>
        </ul>

        <h3>22.4 Market Approach (Sales Comparison)</h3>
        <p>
          The market approach is similar to CMA but more formal. It's used in professional appraisals 
          and relies on recent sales of comparable properties.
        </p>

        <h4>Market Approach Process:</h4>
        <ol>
          <li><strong>Identify Comparables:</strong> Recent sales, similar properties, same market</li>
          <li><strong>Make Adjustments:</strong> Account for differences in size, condition, features</li>
          <li><strong>Reconcile Values:</strong> Weight most similar comps more heavily</li>
          <li><strong>Arrive at Value:</strong> Final opinion of market value</li>
        </ol>

        <h4>Adjustment Grid Example:</h4>
        <div className="example-grid">
          <table>
            <thead>
              <tr>
                <th>Feature</th>
                <th>Subject</th>
                <th>Comp 1</th>
                <th>Adjustment</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Sale Price</td>
                <td>-</td>
                <td>$400,000</td>
                <td>-</td>
              </tr>
              <tr>
                <td>Bedrooms</td>
                <td>3</td>
                <td>4</td>
                <td>-$20,000</td>
              </tr>
              <tr>
                <td>Garage</td>
                <td>Yes</td>
                <td>No</td>
                <td>+$15,000</td>
              </tr>
              <tr>
                <td>Adjusted Price</td>
                <td>-</td>
                <td>$395,000</td>
                <td>-</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h4>Difference: CMA vs. Appraisal</h4>
        <div className="comparison">
          <h5>CMA (Agent-Prepared):</h5>
          <ul>
            <li>Marketing tool for pricing property</li>
            <li>Less formal, more flexible</li>
            <li>Free to client</li>
            <li>Uses agent's local market knowledge</li>
            <li>Not accepted by lenders</li>
          </ul>

          <h5>Appraisal (Certified Appraiser):</h5>
          <ul>
            <li>Required by lenders for financing</li>
            <li>Formal, standardized process (USPAP standards)</li>
            <li>Costs $300-$600+</li>
            <li>Independent third-party valuation</li>
            <li>Legally binding for loan purposes</li>
          </ul>
        </div>

        <h3>22.5 Valuation Red Flags</h3>
        <div className="warning-box">
          <h4>Signs of Overpricing:</h4>
          <ul>
            <li>⚠️ No showings after 2-3 weeks</li>
            <li>⚠️ Priced 10%+ above recent comps</li>
            <li>⚠️ Days on market exceeding area average</li>
            <li>⚠️ No offers on well-marketed property</li>
            <li>⚠️ Price reductions not generating activity</li>
          </ul>

          <h4>Signs of Underpricing:</h4>
          <ul>
            <li>⚠️ Multiple offers within first week</li>
            <li>⚠️ Showings booked solid immediately</li>
            <li>⚠️ Offers well above asking price</li>
            <li>⚠️ Priced below recent comparable sales</li>
          </ul>
        </div>

        <h3>22.6 Agent's Role in Valuation</h3>
        <div className="agent-role">
          <h4>What Agents SHOULD Do:</h4>
          <ul>
            <li>✅ Provide comprehensive CMA with multiple comps</li>
            <li>✅ Explain how you arrived at suggested price range</li>
            <li>✅ Discuss market conditions and trends</li>
            <li>✅ Set realistic expectations with data</li>
            <li>✅ Recommend pricing strategy (aggressive vs. conservative)</li>
            <li>✅ Update pricing recommendations as market shifts</li>
          </ul>

          <h4>What Agents CANNOT Do:</h4>
          <ul>
            <li>❌ Guarantee a specific sale price</li>
            <li>❌ Perform a formal appraisal (unless also licensed appraiser)</li>
            <li>❌ Guarantee property will appraise at list price</li>
            <li>❌ Overprice to "win" listing (unethical)</li>
            <li>❌ Lowball to create quick sale for commission</li>
          </ul>
        </div>

        <p className="highlight">
          <strong>Remember:</strong> Proper valuation protects both buyer and seller. Overpricing wastes 
          time and costs money. Underpricing leaves money on the table. Use data, not emotions. Your 
          credibility depends on accurate pricing guidance backed by solid market analysis.
        </p>
      </>
    )
  },
  {
    id: 'financing',
    icon: '🏦',
    title: '23. Financing Deep Dive',
    subtitle: 'Loan types, down payments, approval process, qualification - understanding buyer financing',
    body: (
      <>
        <h3>23.1 Conventional Loans</h3>
        <p className="highlight">
          Most common loan type for buyers with good credit and stable income. Not government-backed.
        </p>

        <h4>Key Features:</h4>
        <ul>
          <li><strong>Down Payment:</strong> 3-20% (PMI required if less than 20%)</li>
          <li><strong>Credit Score:</strong> 620+ minimum (700+ for best rates)</li>
          <li><strong>Debt-to-Income Ratio:</strong> 43% maximum (36% preferred)</li>
          <li><strong>Loan Limits (2025):</strong> $766,550 standard, $1,149,825 high-cost areas (MA)</li>
          <li><strong>PMI (Private Mortgage Insurance):</strong> 0.5-1.5% annually if &lt;20% down</li>
          <li><strong>Interest Rates:</strong> Typically lowest rates available</li>
        </ul>

        <h4>Conventional Loan Types:</h4>
        <div className="loan-types">
          <p><strong>Conforming:</strong> Meets Fannie Mae/Freddie Mac standards, lower rates</p>
          <p><strong>Non-Conforming:</strong> Doesn't meet standards (jumbo loans, unique properties)</p>
          <p><strong>Portfolio:</strong> Lender keeps loan instead of selling it</p>
        </div>

        <h4>Advantages:</h4>
        <ul>
          <li>✅ Lowest interest rates with good credit</li>
          <li>✅ PMI drops off at 78% LTV (loan-to-value)</li>
          <li>✅ Can be used for investment properties (higher down payment)</li>
          <li>✅ Flexible terms (15, 20, 30 years)</li>
          <li>✅ Fewer property requirements than FHA</li>
        </ul>

        <h4>Disadvantages:</h4>
        <ul>
          <li>❌ Stricter credit requirements</li>
          <li>❌ Larger down payment needed</li>
          <li>❌ Tougher approval for self-employed</li>
        </ul>

        <h3>23.2 FHA Loans</h3>
        <p>
          Federal Housing Administration insured loans. Popular for first-time buyers with lower down payment.
        </p>

        <h4>Key Features:</h4>
        <ul>
          <li><strong>Down Payment:</strong> 3.5% minimum</li>
          <li><strong>Credit Score:</strong> 580+ for 3.5% down, 500-579 for 10% down</li>
          <li><strong>Debt-to-Income Ratio:</strong> Up to 50% allowed</li>
          <li><strong>Loan Limits (2025 MA):</strong> $498,257 to $1,149,825 (county-dependent)</li>
          <li><strong>MIP (Mortgage Insurance Premium):</strong> Upfront 1.75% + annual 0.55-1.05%</li>
          <li><strong>MIP Duration:</strong> Life of loan if &lt;10% down, 11 years if ≥10% down</li>
        </ul>

        <h4>Property Requirements:</h4>
        <ul>
          <li>Must be primary residence (no investment properties)</li>
          <li>Must meet FHA minimum property standards</li>
          <li>Requires FHA appraisal (stricter than conventional)</li>
          <li>Seller can contribute up to 6% toward closing costs</li>
        </ul>

        <h4>Advantages:</h4>
        <ul>
          <li>✅ Low down payment (3.5%)</li>
          <li>✅ More lenient credit requirements</li>
          <li>✅ Higher debt-to-income ratios accepted</li>
          <li>✅ Assumable loans (buyer can take over loan)</li>
          <li>✅ Gift funds allowed for down payment</li>
        </ul>

        <h4>Disadvantages:</h4>
        <ul>
          <li>❌ MIP for life of loan (if &lt;10% down)</li>
          <li>❌ Stricter property condition requirements</li>
          <li>❌ Lower loan limits than conventional in some areas</li>
          <li>❌ Longer closing times (more documentation)</li>
        </ul>

        <h3>23.3 VA Loans</h3>
        <p>
          Department of Veterans Affairs guaranteed loans for eligible military members, veterans, and spouses.
        </p>

        <h4>Key Features:</h4>
        <ul>
          <li><strong>Down Payment:</strong> $0 (100% financing)</li>
          <li><strong>Credit Score:</strong> No minimum (lender discretion, typically 620+)</li>
          <li><strong>Loan Limits:</strong> No maximum in most areas (2025)</li>
          <li><strong>Funding Fee:</strong> 2.15-3.3% (waived for disabled veterans)</li>
          <li><strong>PMI:</strong> None required</li>
          <li><strong>Eligibility:</strong> Certificate of Eligibility (COE) required</li>
        </ul>

        <h4>Eligibility Requirements:</h4>
        <ul>
          <li>Active duty: 90 consecutive days during wartime, 181 days during peacetime</li>
          <li>Veterans: Minimum service requirements met, honorable discharge</li>
          <li>Reservists/National Guard: 6 years of service</li>
          <li>Surviving spouses: Eligible in certain circumstances</li>
        </ul>

        <h4>Advantages:</h4>
        <ul>
          <li>✅ No down payment required</li>
          <li>✅ No PMI ever</li>
          <li>✅ Competitive interest rates</li>
          <li>✅ Seller can pay all buyer closing costs</li>
          <li>✅ Lenient credit requirements</li>
          <li>✅ Can use multiple times</li>
          <li>✅ Assumable by qualified buyers</li>
        </ul>

        <h4>Disadvantages:</h4>
        <ul>
          <li>❌ Funding fee (unless disabled)</li>
          <li>❌ Must be primary residence</li>
          <li>❌ Stricter property condition standards</li>
          <li>❌ Some sellers hesitate (unfamiliar, longer closing)</li>
          <li>❌ VA appraisal required (can be conservative)</li>
        </ul>

        <h3>23.4 USDA Loans</h3>
        <p>
          U.S. Department of Agriculture loans for rural and suburban properties. Zero down payment option.
        </p>

        <h4>Key Features:</h4>
        <ul>
          <li><strong>Down Payment:</strong> $0 (100% financing)</li>
          <li><strong>Credit Score:</strong> 640+ preferred</li>
          <li><strong>Income Limits:</strong> 115% of area median income</li>
          <li><strong>Location:</strong> Must be in USDA-eligible area (check map)</li>
          <li><strong>Guarantee Fee:</strong> 1% upfront + 0.35% annual</li>
        </ul>

        <h4>Advantages:</h4>
        <ul>
          <li>✅ No down payment</li>
          <li>✅ Low mortgage insurance</li>
          <li>✅ Competitive rates</li>
          <li>✅ Seller can pay closing costs</li>
        </ul>

        <h4>Disadvantages:</h4>
        <ul>
          <li>❌ Geographic restrictions</li>
          <li>❌ Income limits</li>
          <li>❌ Primary residence only</li>
          <li>❌ Longer processing times</li>
        </ul>

        <h3>23.5 Jumbo Loans</h3>
        <p>
          Loans exceeding conventional conforming limits. Common in high-cost Massachusetts markets.
        </p>

        <h4>Key Features:</h4>
        <ul>
          <li><strong>Loan Amount:</strong> Above $766,550 (or local limit)</li>
          <li><strong>Down Payment:</strong> 10-20% typically required</li>
          <li><strong>Credit Score:</strong> 700+ minimum (740+ for best rates)</li>
          <li><strong>Debt-to-Income:</strong> 43% maximum (stricter)</li>
          <li><strong>Reserves:</strong> 6-12 months cash reserves required</li>
          <li><strong>Documentation:</strong> Extensive income/asset verification</li>
        </ul>

        <h4>Advantages:</h4>
        <ul>
          <li>✅ Allows purchase of higher-priced homes</li>
          <li>✅ No PMI if 20% down</li>
          <li>✅ Competitive rates (if strong financials)</li>
        </ul>

        <h4>Disadvantages:</h4>
        <ul>
          <li>❌ Higher interest rates than conforming</li>
          <li>❌ Larger down payment</li>
          <li>❌ Stricter qualification requirements</li>
          <li>❌ More documentation</li>
          <li>❌ Fewer lenders offer jumbo loans</li>
        </ul>

        <h3>23.6 Alternative Financing</h3>
        
        <h4>Seller Financing:</h4>
        <ul>
          <li><strong>How it works:</strong> Seller acts as lender, buyer makes payments to seller</li>
          <li><strong>Terms:</strong> Negotiable (usually 5-10 years with balloon payment)</li>
          <li><strong>When used:</strong> Buyer can't qualify traditionally, fast closing needed, property hard to finance</li>
          <li><strong>Risks:</strong> Seller still liable for existing mortgage (due-on-sale clause), buyer default</li>
        </ul>

        <h4>Bridge Loans:</h4>
        <ul>
          <li><strong>Purpose:</strong> Short-term financing until permanent financing secured</li>
          <li><strong>Common use:</strong> Buying before selling current home</li>
          <li><strong>Term:</strong> 6-12 months typically</li>
          <li><strong>Cost:</strong> Higher interest rates (7-10%)</li>
        </ul>

        <h4>Hard Money Loans:</h4>
        <ul>
          <li><strong>Source:</strong> Private investors, not banks</li>
          <li><strong>Based on:</strong> Property value, not borrower credit</li>
          <li><strong>Use:</strong> Fix-and-flip, distressed properties</li>
          <li><strong>Terms:</strong> 6-18 months, 8-15% interest, high fees</li>
        </ul>

        <h3>23.7 Pre-Qualification vs. Pre-Approval</h3>
        <div className="comparison">
          <h4>Pre-Qualification (Weak):</h4>
          <ul>
            <li>Based on stated income/assets (unverified)</li>
            <li>Quick process (phone/online)</li>
            <li>No credit check or documentation</li>
            <li>Estimate only - not reliable</li>
            <li>❌ Not taken seriously by sellers</li>
          </ul>

          <h4>Pre-Approval (Strong):</h4>
          <ul>
            <li>Verified income, assets, employment</li>
            <li>Hard credit check performed</li>
            <li>Documentation reviewed (W2s, pay stubs, bank statements)</li>
            <li>Conditional commitment from lender</li>
            <li>✅ Shows buyer is serious and qualified</li>
          </ul>
        </div>

        <h3>23.8 Mortgage Approval Process</h3>
        <div className="process-timeline">
          <ol>
            <li><strong>Pre-Approval:</strong> Before house hunting (1-3 days)</li>
            <li><strong>Offer Accepted:</strong> Start formal application (day 1)</li>
            <li><strong>Processing:</strong> Lender gathers/verifies documents (days 1-10)</li>
            <li><strong>Appraisal Ordered:</strong> Property valuation (days 3-7)</li>
            <li><strong>Underwriting:</strong> Final loan approval (days 10-20)</li>
            <li><strong>Clear to Close:</strong> All conditions met (day 25-30)</li>
            <li><strong>Closing:</strong> Sign documents, fund loan (day 30-45)</li>
          </ol>
        </div>

        <h3>23.9 Common Financing Issues & Solutions</h3>
        <div className="issues-solutions">
          <h4>Issue: Low Appraisal</h4>
          <ul>
            <li><strong>Problem:</strong> Property appraises below purchase price</li>
            <li><strong>Solutions:</strong>
              <ul>
                <li>Buyer increases down payment to cover gap</li>
                <li>Seller reduces price</li>
                <li>Split the difference</li>
                <li>Challenge appraisal with better comps</li>
                <li>Walk away (if contingency exists)</li>
              </ul>
            </li>
          </ul>

          <h4>Issue: DTI Too High</h4>
          <ul>
            <li><strong>Problem:</strong> Debt-to-income ratio exceeds lender limits</li>
            <li><strong>Solutions:</strong>
              <ul>
                <li>Pay off debts before closing</li>
                <li>Find co-signer</li>
                <li>Increase down payment</li>
                <li>Look at lower-priced properties</li>
                <li>Try different loan program (FHA allows higher DTI)</li>
              </ul>
            </li>
          </ul>

          <h4>Issue: Employment Gap or Job Change</h4>
          <ul>
            <li><strong>Problem:</strong> Buyer changed jobs during process</li>
            <li><strong>Solutions:</strong>
              <ul>
                <li>New job in same field usually OK</li>
                <li>Provide offer letter and verification</li>
                <li>May delay closing for pay stub proof</li>
                <li>DO NOT change jobs during mortgage process if avoidable</li>
              </ul>
            </li>
          </ul>

          <h4>Issue: Large Deposits in Bank Account</h4>
          <ul>
            <li><strong>Problem:</strong> Unexplained deposits raise red flags</li>
            <li><strong>Solutions:</strong>
              <ul>
                <li>Document source (gift, bonus, tax refund)</li>
                <li>Provide gift letter if from family</li>
                <li>Avoid large deposits during process</li>
              </ul>
            </li>
          </ul>
        </div>

        <h3>23.10 Agent's Role in Financing</h3>
        <div className="agent-role">
          <h4>What Agents SHOULD Do:</h4>
          <ul>
            <li>✅ Recommend buyers get pre-approved before house hunting</li>
            <li>✅ Refer to 2-3 reputable lenders</li>
            <li>✅ Explain difference between loan types</li>
            <li>✅ Review pre-approval letters for strength</li>
            <li>✅ Coordinate with lender during transaction</li>
            <li>✅ Monitor financing contingency deadlines</li>
            <li>✅ Help buyer understand closing costs</li>
          </ul>

          <h4>What Agents CANNOT Do:</h4>
          <ul>
            <li>❌ Guarantee loan approval</li>
            <li>❌ Give specific financial advice</li>
            <li>❌ Calculate exact loan qualifications</li>
            <li>❌ Recommend specific loan products</li>
            <li>❌ Accept kickbacks from lenders (RESPA violation)</li>
            <li>❌ Pressure buyer to use specific lender</li>
          </ul>
        </div>

        <p className="highlight">
          <strong>Remember:</strong> Understanding financing helps you guide buyers realistically and spot 
          potential issues early. Always defer specific loan questions to lenders. Strong pre-approval = 
          stronger offer. Financing contingencies protect buyers but need clear deadlines.
        </p>
      </>
    )
  },
  {
    id: 'title-closing',
    icon: '📄',
    title: '24. Title & Closing Process',
    subtitle: 'Title search, title insurance, closing documents, settlement statements - final transaction steps',
    body: (
      <>
        <h3>24.1 Title Search Process</h3>
        <p className="highlight">
          The title search verifies the seller has legal right to sell the property and uncovers any liens, 
          encumbrances, or defects that could affect ownership transfer.
        </p>

        <h4>What Title Search Reveals:</h4>
        <ul>
          <li><strong>Chain of Title:</strong> Complete ownership history</li>
          <li><strong>Outstanding Mortgages:</strong> Existing loans that must be paid off</li>
          <li><strong>Liens:</strong> Tax liens, mechanic's liens, judgment liens</li>
          <li><strong>Easements:</strong> Rights others have to use the property</li>
          <li><strong>Encroachments:</strong> Structures crossing property lines</li>
          <li><strong>Restrictions:</strong> Deed restrictions, covenants, HOA rules</li>
          <li><strong>Unpaid Taxes:</strong> Property tax arrears</li>
        </ul>

        <h4>Title Search Timeline:</h4>
        <div className="timeline">
          <ol>
            <li><strong>Ordered:</strong> Shortly after P&S signed (within 3-5 days)</li>
            <li><strong>Search Performed:</strong> Attorney or title company reviews public records (5-7 days)</li>
            <li><strong>Preliminary Report:</strong> Issues identified (if any) (day 7-10)</li>
            <li><strong>Cure Period:</strong> Seller resolves title defects (varies, can be 30+ days)</li>
            <li><strong>Final Title Commitment:</strong> Clear title confirmed before closing</li>
          </ol>
        </div>

        <h4>Common Title Issues:</h4>
        <div className="common-issues">
          <p><strong>Tax Liens:</strong> Unpaid federal/state/local taxes attached to property</p>
          <p><strong>Mechanic's Liens:</strong> Contractors/suppliers unpaid for work done</p>
          <p><strong>Judgment Liens:</strong> Court judgments against owner</p>
          <p><strong>Divorce/Estate Issues:</strong> Unclear ownership due to death or divorce</p>
          <p><strong>Survey Disputes:</strong> Boundary disagreements with neighbors</p>
          <p><strong>HOA Liens:</strong> Unpaid homeowners association fees</p>
        </div>

        <h3>24.2 Types of Title Insurance</h3>
        
        <h4>Owner's Title Insurance:</h4>
        <ul>
          <li><strong>Who it protects:</strong> Buyer/new owner</li>
          <li><strong>Coverage amount:</strong> Purchase price of property</li>
          <li><strong>Duration:</strong> As long as owner or heirs have interest in property</li>
          <li><strong>Cost:</strong> One-time premium at closing ($1,000-$3,000 typical)</li>
          <li><strong>Who pays:</strong> Usually buyer (negotiable)</li>
          <li><strong>What it covers:</strong>
            <ul>
              <li>Forged documents in chain of title</li>
              <li>Unknown heirs claiming ownership</li>
              <li>Undisclosed easements</li>
              <li>Errors in public records</li>
              <li>Fraud in prior transactions</li>
              <li>Liens not discovered in search</li>
            </ul>
          </li>
        </ul>

        <h4>Lender's Title Insurance:</h4>
        <ul>
          <li><strong>Who it protects:</strong> Mortgage lender</li>
          <li><strong>Coverage amount:</strong> Decreases as loan is paid down</li>
          <li><strong>Duration:</strong> Until loan is paid off</li>
          <li><strong>Cost:</strong> $500-$1,500 typical</li>
          <li><strong>Who pays:</strong> Buyer (required by lender if financing)</li>
          <li><strong>Required:</strong> YES, if obtaining mortgage</li>
          <li><strong>Note:</strong> Does NOT protect owner (only lender)</li>
        </ul>

        <h4>Why Both Policies?</h4>
        <div className="explanation">
          <p><strong>Lender's Policy:</strong> Required if you have a mortgage. Protects the lender's investment, 
          coverage decreases as you pay down loan. Expires when loan is paid off.</p>
          <p><strong>Owner's Policy:</strong> Optional but HIGHLY recommended. Protects your equity investment. 
          One-time premium covers you forever. Relatively inexpensive protection for major asset.</p>
        </div>

        <h3>24.3 Closing Documents</h3>
        
        <h4>Key Documents Buyer Signs:</h4>
        <ul>
          <li><strong>Closing Disclosure:</strong> Final costs breakdown (received 3 days before closing)</li>
          <li><strong>Promissory Note:</strong> Promise to repay loan</li>
          <li><strong>Mortgage/Deed of Trust:</strong> Pledges property as collateral</li>
          <li><strong>Truth in Lending Disclosure:</strong> APR, finance charges, payment schedule</li>
          <li><strong>Initial Escrow Disclosure:</strong> Estimated property tax and insurance payments</li>
          <li><strong>Affidavit of Title:</strong> Buyer swears no new liens since title search</li>
          <li><strong>Occupancy Affidavit:</strong> States buyer will occupy (primary residence)</li>
        </ul>

        <h4>Key Documents Seller Signs:</h4>
        <ul>
          <li><strong>Deed:</strong> Transfers ownership to buyer (recorded)</li>
          <li><strong>Closing Disclosure:</strong> Seller's version showing proceeds</li>
          <li><strong>Affidavit of Title:</strong> Confirms no new liens, unpaid bills</li>
          <li><strong>FIRPTA Affidavit:</strong> Confirms seller is U.S. citizen (tax withholding)</li>
          <li><strong>Payoff Authorization:</strong> Allows payoff of existing mortgage</li>
          <li><strong>Lead Paint Disclosure:</strong> For pre-1978 properties</li>
        </ul>

        <h4>The Deed (Most Important Document):</h4>
        <div className="deed-types">
          <p><strong>Warranty Deed:</strong> Seller guarantees clear title, defends against all claims (most protection)</p>
          <p><strong>Quitclaim Deed:</strong> Seller transfers only what they own, no guarantees (least protection)</p>
          <p><strong>Bargain and Sale Deed:</strong> Middle ground, some warranties but not full</p>
        </div>

        <h3>24.4 Closing Disclosure (CD) - Formerly HUD-1</h3>
        <p>
          The Closing Disclosure replaced the HUD-1 Settlement Statement in 2015 under TRID rules. 
          It's a 5-page standardized form showing all costs in the transaction.
        </p>

        <h4>Closing Disclosure Timeline:</h4>
        <ul>
          <li><strong>3 Business Days Before Closing:</strong> Lender must provide final CD</li>
          <li><strong>If Changes Occur:</strong> May require new 3-day waiting period</li>
          <li><strong>Changes Requiring Re-Disclosure:</strong>
            <ul>
              <li>APR changes by more than 0.125%</li>
              <li>Loan product changes</li>
              <li>Prepayment penalty added</li>
            </ul>
          </li>
        </ul>

        <h4>Closing Disclosure Pages Breakdown:</h4>
        <div className="cd-breakdown">
          <p><strong>Page 1:</strong> Loan terms, projected payments, costs at closing</p>
          <p><strong>Page 2:</strong> Closing cost details (origination, services, taxes, other costs)</p>
          <p><strong>Page 3:</strong> Calculating cash to close, summaries for borrower and seller</p>
          <p><strong>Page 4:</strong> Additional loan disclosures (liability, assumption, etc.)</p>
          <p><strong>Page 5:</strong> Loan calculations, other disclosures, contact information</p>
        </div>

        <h4>Common Closing Costs (Buyer):</h4>
        <ul>
          <li><strong>Origination Charges:</strong> Loan origination fee (0.5-1% of loan)</li>
          <li><strong>Appraisal:</strong> $400-$600</li>
          <li><strong>Credit Report:</strong> $25-$50</li>
          <li><strong>Title Insurance:</strong> $1,500-$4,000 (both policies)</li>
          <li><strong>Attorney Fees:</strong> $500-$1,500</li>
          <li><strong>Recording Fees:</strong> $100-$300</li>
          <li><strong>Survey:</strong> $300-$600 (if required)</li>
          <li><strong>Home Inspection:</strong> $300-$500 (paid pre-closing usually)</li>
          <li><strong>Prepaid Items:</strong> Property taxes, homeowners insurance, HOA</li>
          <li><strong>Escrow Deposit:</strong> 2-3 months taxes and insurance</li>
          <li><strong>HOA Transfer Fee:</strong> $200-$500 (if applicable)</li>
        </ul>

        <h4>Common Closing Costs (Seller):</h4>
        <ul>
          <li><strong>Agent Commissions:</strong> 5-6% of sale price (biggest cost)</li>
          <li><strong>Attorney Fees:</strong> $500-$1,500</li>
          <li><strong>Mortgage Payoff:</strong> Remaining balance + any prepayment penalty</li>
          <li><strong>Title Search:</strong> $200-$400</li>
          <li><strong>Property Tax Prorations:</strong> Pay through closing date</li>
          <li><strong>HOA Prorations:</strong> Pay through closing date</li>
          <li><strong>Transfer Taxes:</strong> $4.56 per $1,000 in MA (varies by municipality)</li>
          <li><strong>Home Warranty:</strong> $300-$600 (if providing to buyer)</li>
        </ul>

        <h3>24.5 Prorations and Credits</h3>
        <p>
          Prorations ensure buyer and seller each pay their fair share of ongoing expenses based on closing date.
        </p>

        <h4>Items Typically Prorated:</h4>
        <ul>
          <li><strong>Property Taxes:</strong> Calculated daily, seller pays through closing</li>
          <li><strong>HOA Fees:</strong> Monthly or quarterly dues split</li>
          <li><strong>Utilities:</strong> Usually handled directly (final reading), not on CD</li>
          <li><strong>Rent (Multi-Family):</strong> If closing mid-month, rent prorated</li>
          <li><strong>Prepaid Items:</strong> If seller prepaid taxes, buyer reimburses for future</li>
        </ul>

        <h4>Proration Example:</h4>
        <div className="example">
          <p><strong>Situation:</strong> Annual property tax = $7,300 (paid through Dec 31)</p>
          <p><strong>Closing Date:</strong> October 15</p>
          <p><strong>Calculation:</strong></p>
          <ul>
            <li>Oct 15 - Dec 31 = 77 days buyer will own property</li>
            <li>$7,300 ÷ 365 = $20/day</li>
            <li>$20 × 77 days = $1,540</li>
            <li><strong>Result:</strong> Buyer credits seller $1,540 for prepaid taxes</li>
          </ul>
        </div>

        <h3>24.6 The Closing Table</h3>
        
        <h4>Who Attends Closing?</h4>
        <ul>
          <li>Buyer(s)</li>
          <li>Seller(s)</li>
          <li>Buyer's attorney (in MA, typically required)</li>
          <li>Seller's attorney</li>
          <li>Closing agent (title company or attorney)</li>
          <li>Real estate agents (optional but common)</li>
          <li>Lender representative (rare, usually remote)</li>
        </ul>

        <h4>What Happens at Closing?</h4>
        <ol>
          <li><strong>Review Documents:</strong> Attorney explains each document before signing</li>
          <li><strong>Sign Documents:</strong> Buyer signs 50-100 pages, seller signs 10-20</li>
          <li><strong>Transfer Funds:</strong> Buyer's certified funds verified</li>
          <li><strong>Pay Off Existing Loan:</strong> Seller's mortgage satisfied</li>
          <li><strong>Disburse Proceeds:</strong> Seller receives net proceeds check</li>
          <li><strong>Record Deed:</strong> New deed filed with county (may happen after meeting)</li>
          <li><strong>Hand Over Keys:</strong> Buyer receives keys, garage openers, etc.</li>
          <li><strong>Final Walk-Through Issues:</strong> Resolve any last-minute concerns</li>
        </ol>

        <h4>What Buyer Brings:</h4>
        <ul>
          <li>✅ Government-issued photo ID</li>
          <li>✅ Certified check or wire confirmation (closing costs + down payment)</li>
          <li>✅ Proof of homeowner's insurance</li>
          <li>✅ Final walk-through checklist</li>
        </ul>

        <h4>What Seller Brings:</h4>
        <ul>
          <li>✅ Government-issued photo ID</li>
          <li>✅ All keys, garage openers, access codes</li>
          <li>✅ Appliance manuals and warranties</li>
          <li>✅ HOA documents and contacts</li>
          <li>✅ Mailbox key</li>
        </ul>

        <h3>24.7 Post-Closing</h3>
        
        <h4>Buyer's Post-Closing Checklist:</h4>
        <ul>
          <li>✅ Change locks (for security)</li>
          <li>✅ Set up utilities in your name</li>
          <li>✅ File deed with homestead exemption (MA property tax protection)</li>
          <li>✅ Update mailing address (USPS, DMV, voter registration)</li>
          <li>✅ Review first mortgage statement carefully</li>
          <li>✅ Keep closing documents in safe place (7+ years)</li>
          <li>✅ Save receipts for capital improvements (tax purposes)</li>
        </ul>

        <h4>Seller's Post-Closing Checklist:</h4>
        <ul>
          <li>✅ Confirm mortgage payoff received by lender</li>
          <li>✅ Cancel homeowner's insurance (after closing date)</li>
          <li>✅ Forward mail to new address</li>
          <li>✅ Transfer or cancel utilities</li>
          <li>✅ Keep closing documents (capital gains calculation)</li>
          <li>✅ Track moving expenses if relocating for work (may be deductible)</li>
        </ul>

        <h3>24.8 Common Closing Problems & Solutions</h3>
        <div className="problems-solutions">
          <h4>Problem: Lender Not Clear to Close</h4>
          <p><strong>Solution:</strong> Postpone closing, provide requested documentation immediately, 
          stay in close contact with lender and attorney</p>

          <h4>Problem: Title Issue Discovered Late</h4>
          <p><strong>Solution:</strong> Seller must cure defect (pay off lien, resolve dispute), 
          may delay closing, buyer can walk if not resolved in reasonable time</p>

          <h4>Problem: Seller Not Ready to Vacate</h4>
          <p><strong>Solution:</strong> Negotiate rent-back agreement, escrow funds for damage, 
          or delay closing if buyer agrees</p>

          <h4>Problem: Final Walk-Through Reveals Damage</h4>
          <p><strong>Solution:</strong> Escrow funds to cover repairs, reduce purchase price, 
          seller makes repairs before closing, or buyer walks if serious</p>

          <h4>Problem: Wiring Fraud Attempt</h4>
          <p><strong>Solution:</strong> ALWAYS verify wiring instructions by calling known phone number, 
          never trust email alone, confirm with attorney verbally</p>
        </div>

        <h3>24.9 Agent's Role at Closing</h3>
        <div className="agent-role">
          <h4>Before Closing:</h4>
          <ul>
            <li>✅ Coordinate with all parties</li>
            <li>✅ Remind clients what to bring</li>
            <li>✅ Confirm final walk-through completed</li>
            <li>✅ Verify closing funds wired/certified</li>
            <li>✅ Review Closing Disclosure with client</li>
          </ul>

          <h4>At Closing:</h4>
          <ul>
            <li>✅ Attend to support client (optional but appreciated)</li>
            <li>✅ Clarify any last questions</li>
            <li>✅ Collect commission check (if not wired)</li>
            <li>✅ Hand over keys and access items</li>
            <li>✅ Congratulate and thank everyone</li>
          </ul>

          <h4>After Closing:</h4>
          <ul>
            <li>✅ Send thank you notes</li>
            <li>✅ Request reviews/testimonials</li>
            <li>✅ Ask for referrals</li>
            <li>✅ Stay in touch (holiday cards, market updates)</li>
            <li>✅ Remind about homestead filing (MA)</li>
          </ul>
        </div>

        <p className="highlight">
          <strong>Remember:</strong> Closing is the culmination of weeks of work. Review the Closing Disclosure 
          carefully - errors happen! Attorney is there to protect you - ask questions. Wire fraud is REAL - 
          verify all instructions verbally. Keep all closing documents forever (IRS requires 7 years minimum, 
          but keep deed and title insurance permanently).
        </p>
      </>
    )
  },
  {
    id: 'tax-implications',
    icon: '💵',
    title: '25. Tax Implications for Buyers, Sellers & Investors',
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
  },
  {
    id: 'agency-models',
    icon: '👥',
    title: '26. Designated vs Non-Designated Agency',
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
  },
  {
    id: 'agency-types',
    icon: '🤝',
    title: '27. Types of Agency Relationships',
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
  },
  {
    id: 'agent-authority',
    icon: '🎯',
    title: '28. Agent Authority Levels & Responsibilities to Principal',
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
  },
  {
    id: 'stigmatized-properties',
    icon: '👻',
    title: '29. Stigmatized Properties',
    subtitle: 'Disclosure requirements for properties with psychological impacts - deaths, crimes, and paranormal claims',
    body: (
      <>
        <h3>29.1 What is a Stigmatized Property?</h3>
        <p className="highlight">
          A stigmatized property is one that society has found "undesirable" NOT because of physical defects, but 
          because of events that have occurred on or inside the property. These events create a psychological impact 
          rather than a physical defect.
        </p>

        <h3>29.2 Types of Stigmatizing Events</h3>
        <div className="event-types">
          <h4>Criminal Events:</h4>
          <ul>
            <li>🔪 <strong>Murder or Homicide:</strong> Death by violence on the property</li>
            <li>💊 <strong>Drug Lab:</strong> Property used for manufacturing illegal drugs (meth lab, etc.)</li>
            <li>🚔 <strong>Felony:</strong> Serious crimes committed on premises</li>
            <li>⚠️ <strong>Gang-Related Activity:</strong> Gang operations or violence</li>
          </ul>

          <h4>Death-Related Events:</h4>
          <ul>
            <li>💔 <strong>Suicide:</strong> Self-inflicted death on property</li>
            <li>⚰️ <strong>Natural Death:</strong> Death from natural causes (if recent or disturbing)</li>
            <li>🩺 <strong>Unattended Death:</strong> Body not discovered for extended period</li>
          </ul>

          <h4>Other Stigmatizing Factors:</h4>
          <ul>
            <li>👻 <strong>Haunted/Paranormal:</strong> Claims of ghosts, spirits, paranormal activity</li>
            <li>😱 <strong>Notorious Resident:</strong> Former occupant was infamous criminal or celebrity</li>
            <li>🏚️ <strong>Site of Tragedy:</strong> Fire with fatalities, natural disaster deaths</li>
            <li>😨 <strong>Sex Offender Nearby:</strong> Registered sex offender living close by</li>
            <li>☣️ <strong>Contamination Concerns:</strong> Prior biological/chemical contamination (even if remediated)</li>
          </ul>
        </div>

        <h3>29.3 Massachusetts Law on Stigmatized Properties</h3>
        <div className="ma-law">
          <h4>CRITICAL RULE: "Only If Asked"</h4>
          <p className="highlight">
            <strong>Seller and Agent are NOT required to disclose stigmatizing events UNLESS specifically asked.</strong>
          </p>

          <h4>What This Means:</h4>
          <ul>
            <li>✅ <strong>If asked directly:</strong> Seller & Agent MUST answer truthfully</li>
            <li>✅ <strong>Cannot lie:</strong> If buyer asks "has anyone died here?" you must tell the truth</li>
            <li>❌ <strong>No duty to investigate:</strong> Not required to research property history</li>
            <li>❌ <strong>No duty to volunteer:</strong> Not required to bring it up if not asked</li>
            <li>⚠️ <strong>Cannot mislead:</strong> Cannot make false statements to cover up events</li>
          </ul>
        </div>

        <h3>29.4 Why Stigmatized Properties Are Different</h3>
        <div className="distinction">
          <h4>Material Defect vs Stigma:</h4>
          <table>
            <thead>
              <tr>
                <th>Material Defect</th>
                <th>Stigma</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Physical problem</strong> with property</td>
                <td><strong>Psychological impact</strong> on buyer</td>
              </tr>
              <tr>
                <td>Affects property value objectively</td>
                <td>May affect value subjectively</td>
              </tr>
              <tr>
                <td><strong>MUST disclose</strong> proactively</td>
                <td><strong>Only disclose IF ASKED</strong></td>
              </tr>
              <tr>
                <td>Examples: Foundation crack, roof leak, mold</td>
                <td>Examples: Murder, suicide, haunted claims</td>
              </tr>
              <tr>
                <td>Buyer can inspect/verify</td>
                <td>Cannot be physically inspected</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h3>29.5 Agent's Responsibilities</h3>
        
        <h4>What You MUST Do:</h4>
        <ul>
          <li>✅ Answer truthfully if directly asked about stigmatizing events</li>
          <li>✅ Disclose known information if specifically questioned</li>
          <li>✅ Not make false or misleading statements</li>
          <li>✅ Document that buyer asked (or didn't ask) about property history</li>
          <li>✅ Recommend buyer do their own research if concerned</li>
        </ul>

        <h4>What You Are NOT Required to Do:</h4>
        <ul>
          <li>❌ Volunteer information about deaths or crimes without being asked</li>
          <li>❌ Research property history for stigmatizing events</li>
          <li>❌ Investigate rumors or paranormal claims</li>
          <li>❌ Check police records or death certificates</li>
          <li>❌ Ask seller about every possible stigmatizing event</li>
        </ul>

        <h4>What You CANNOT Do:</h4>
        <ul>
          <li>🚫 Lie or misrepresent when asked directly</li>
          <li>🚫 Hide known information when specifically questioned</li>
          <li>🚫 Tell buyer "nothing happened here" if you know otherwise</li>
          <li>🚫 Make up stories or cover up events</li>
          <li>🚫 Discourage buyer from asking questions</li>
        </ul>

        <h3>29.6 Practical Examples</h3>
        
        <h4>Example 1: Murder 5 Years Ago</h4>
        <div className="example-scenario">
          <p><strong>Situation:</strong> Property had a murder 5 years ago. Widely known in neighborhood. Buyer doesn't ask.</p>
          <p><strong>Agent's Duty:</strong> NOT required to disclose. Can complete sale without mentioning.</p>
          <p><strong>If Buyer Asks:</strong> "Has anyone died here?" MUST answer truthfully: "Yes, there was a murder here 5 years ago."</p>
          <p><strong>Best Practice:</strong> Document that buyer did not ask about property history.</p>
        </div>

        <h4>Example 2: Rumored to be Haunted</h4>
        <div className="example-scenario">
          <p><strong>Situation:</strong> Neighbors say house is haunted. Seller never experienced anything. Buyer asks: "Is this house haunted?"</p>
          <p><strong>Correct Answer:</strong> "I don't have personal knowledge of paranormal activity, but neighbors have mentioned such claims. You may want to research the property history."</p>
          <p><strong>Why:</strong> You're being truthful without claiming knowledge you don't have.</p>
        </div>

        <h4>Example 3: Suicide Last Year</h4>
        <div className="example-scenario">
          <p><strong>Situation:</strong> Previous owner committed suicide in master bedroom last year. Buyer asks: "Why did the previous owner leave?"</p>
          <p><strong>Wrong Answer:</strong> "They just wanted to downsize." (This is a lie)</p>
          <p><strong>Correct Answer:</strong> "The previous owner passed away. The estate is selling." (Truthful without graphic details unless buyer asks specifically)</p>
          <p><strong>If Asked Specifically:</strong> "How did they die?" → Must answer: "It was a suicide."</p>
        </div>

        <h4>Example 4: Meth Lab Remediated</h4>
        <div className="example-scenario">
          <p><strong>Situation:</strong> Property was a meth lab, professionally remediated and certified clean. Buyer asks about property history.</p>
          <p><strong>Must Disclose:</strong> "This property was previously used as a methamphetamine lab. It has been professionally remediated and tested. I can provide the clearance certificate."</p>
          <p><strong>Why:</strong> Buyer specifically asked, and while remediated, it's a material fact that affects buyer perception.</p>
          <p><strong>Note:</strong> Remediated contamination sits between physical defect and stigma - disclose when asked!</p>
        </div>

        <h3>29.7 Megan's Law - Sex Offender Registry</h3>
        <div className="megans-law">
          <p className="highlight">
            <strong>Megan's Law</strong> is a federal law requiring sex offender registration. The registry is 
            <strong> PUBLIC KNOWLEDGE</strong> and available online. Offenders MUST disclose where they live and work 
            immediately upon being released.
          </p>

          <h4>Three Risk Levels:</h4>
          <div className="risk-levels">
            <div className="risk-level-1">
              <h5>📗 Level 1 - Low Risk</h5>
              <ul>
                <li><strong>Risk:</strong> Low risk of re-offense</li>
                <li><strong>Public Access:</strong> Limited public access to information</li>
                <li><strong>Notification:</strong> Police and certain agencies notified</li>
                <li><strong>Typical Offenses:</strong> Non-violent, first-time offenses</li>
              </ul>
            </div>

            <div className="risk-level-2">
              <h5>📙 Level 2 - Moderate Risk</h5>
              <ul>
                <li><strong>Risk:</strong> Moderate risk of re-offense</li>
                <li><strong>Public Access:</strong> Available online to public (searchable)</li>
                <li><strong>Notification:</strong> Schools, daycare centers, and neighbors may be notified</li>
                <li><strong>Typical Offenses:</strong> Repeat offenses or more serious crimes</li>
                <li><strong>⚠️ Note:</strong> Level 2 and 3 offenders are PUBLICLY AVAILABLE online</li>
              </ul>
            </div>

            <div className="risk-level-3">
              <h5>📕 Level 3 - High Risk</h5>
              <ul>
                <li><strong>Risk:</strong> High risk of re-offense and danger to public</li>
                <li><strong>Public Access:</strong> Widely available to public (searchable online)</li>
                <li><strong>Notification:</strong> Active community notification, flyers, public meetings</li>
                <li><strong>Typical Offenses:</strong> Violent, predatory offenses or multiple convictions</li>
                <li><strong>🚨 Alert:</strong> Law enforcement actively notifies community</li>
              </ul>
            </div>
          </div>

          <h4>Agent's Role with Sex Offender Information:</h4>
          <ul>
            <li>✅ <strong>Can Direct to Database:</strong> "You can search the public sex offender registry at [state website]"</li>
            <li>✅ <strong>Can Acknowledge It's Public:</strong> "Sex offender information is public knowledge available online"</li>
            <li>✅ <strong>Should Recommend Research:</strong> Suggest buyers research if they have concerns</li>
            <li>❌ <strong>NOT Required to Research:</strong> You don't have to check the registry for every property</li>
            <li>❌ <strong>NOT Required to Volunteer:</strong> Don't have to tell buyer "there's an offender 3 blocks away"</li>
            <li>⚠️ <strong>If Asked:</strong> Must answer truthfully if you have knowledge (but can admit you don't know)</li>
          </ul>

          <h4>How Offenders Are Registered:</h4>
          <p>
            Upon release from incarceration, sex offenders MUST:
          </p>
          <ul>
            <li>📍 <strong>Register Address:</strong> Where they live (and update within days if they move)</li>
            <li>🏢 <strong>Register Workplace:</strong> Where they work or go to school</li>
            <li>📸 <strong>Provide Photo:</strong> Recent photograph for database</li>
            <li>🔄 <strong>Update Regularly:</strong> Annual or more frequent verification</li>
            <li>⚠️ <strong>Failure to Register:</strong> Criminal offense with serious penalties</li>
          </ul>

          <h4>Accessing the Registry (Recommend to Buyers):</h4>
          <ul>
            <li>🌐 <strong>Massachusetts:</strong> Mass.gov Sex Offender Registry Board (SORB)</li>
            <li>🗺️ <strong>Search by Address:</strong> Enter property address to see offenders nearby</li>
            <li>📱 <strong>Mobile Apps:</strong> Various apps available for smartphone alerts</li>
            <li>🔍 <strong>National:</strong> National Sex Offender Public Website (NSOPW.gov)</li>
            <li>📧 <strong>Email Alerts:</strong> Some states offer notification services</li>
          </ul>

          <div className="megans-law-note">
            <p className="highlight">
              <strong>Critical Distinction:</strong> Sex offender information is PUBLIC KNOWLEDGE (not confidential like 
              medical conditions). The registry exists specifically to inform the public. However, agents are still not 
              required to research or volunteer this information - buyers should do their own due diligence. If asked 
              and you know, answer truthfully. If you don't know, say so and direct them to the public registry.
            </p>
          </div>
        </div>

        <h3>29.8 How Buyers Can Research</h3>
        <div className="buyer-research">
          <h4>Recommend These Resources to Buyers:</h4>
          <ul>
            <li>🔍 <strong>Public Records:</strong> Police reports, court records, death certificates</li>
            <li>📰 <strong>News Archives:</strong> Search property address in local news databases</li>
            <li>🏘️ <strong>Neighborhood Canvassing:</strong> Talk to neighbors about property history</li>
            <li>💻 <strong>Online Databases:</strong> 
              <ul>
                <li>DiedInHouse.com (paid service checking death records)</li>
                <li><strong>Megan's Law Database</strong> (Mass.gov SORB - sex offender registry Level 2 & 3 available)</li>
                <li>Local crime maps</li>
              </ul>
            </li>
            <li>🏛️ <strong>Town Hall:</strong> Building permits, violations, code enforcement history</li>
            <li>🗣️ <strong>Ask Directly:</strong> "Has anyone died here? Any crimes? Paranormal activity?"</li>
          </ul>
        </div>

        <h3>29.9 Impact on Property Value</h3>
        <div className="value-impact">
          <h4>Stigmatized Properties Typically Sell For:</h4>
          <ul>
            <li>📉 <strong>2-10% less</strong> than comparable non-stigmatized properties</li>
            <li>📉 <strong>10-25% less</strong> for well-publicized violent crimes</li>
            <li>📉 <strong>15-35% less</strong> for notorious cases (celebrity murders, serial killers)</li>
            <li>💀 <strong>Infamous properties</strong> can be nearly unmarketable</li>
          </ul>

          <h4>Factors Affecting Impact:</h4>
          <ul>
            <li><strong>Recency:</strong> Recent events more stigmatizing than old events</li>
            <li><strong>Publicity:</strong> Well-known cases harder to sell</li>
            <li><strong>Type of Event:</strong> Violent crimes worse than natural deaths</li>
            <li><strong>Location:</strong> Exact location (bedroom vs garage) affects perception</li>
            <li><strong>Remediation:</strong> Cleanup and renovation can help</li>
            <li><strong>Market:</strong> Stigma matters less in seller's markets</li>
          </ul>
        </div>

        <h3>29.10 Seller Strategies</h3>
        <div className="seller-strategies">
          <h4>If Selling Stigmatized Property:</h4>
          <ul>
            <li>💰 <strong>Price Accordingly:</strong> Expect lower market value</li>
            <li>🔨 <strong>Renovate:</strong> Change layout, paint, flooring where event occurred</li>
            <li>⏰ <strong>Wait:</strong> Stigma lessens with time (sometimes years needed)</li>
            <li>📋 <strong>Full Disclosure:</strong> Some sellers proactively disclose to avoid issues</li>
            <li>🎯 <strong>Target Market:</strong> Investors less affected by stigma than owner-occupants</li>
            <li>📄 <strong>Written Disclosure:</strong> Consider disclosure even if not required (protects from future claims)</li>
          </ul>
        </div>

        <h3>29.11 Legal Risks & Liability</h3>
        
        <h4>Agent Can Be Liable For:</h4>
        <div className="liability-warning">
          <ul>
            <li>🚨 <strong>Fraud:</strong> Lying when directly asked about stigmatizing events</li>
            <li>🚨 <strong>Misrepresentation:</strong> Making false statements to cover up history</li>
            <li>🚨 <strong>Failure to Disclose:</strong> If asked specifically and you don't answer truthfully</li>
            <li>🚨 <strong>Active Concealment:</strong> Deliberately hiding known information when questioned</li>
          </ul>
        </div>

        <h4>Agent is NOT Liable For:</h4>
        <ul>
          <li>✅ Not volunteering information about stigmatizing events</li>
          <li>✅ Not researching property history for past events</li>
          <li>✅ Unknown stigmatizing events (no duty to investigate)</li>
          <li>✅ Buyer's failure to ask about property history</li>
        </ul>

        <h3>29.12 Best Practices for Agents</h3>
        <div className="best-practices">
          <ol>
            <li><strong>Ask Seller Direct Questions:</strong> "To your knowledge, have any deaths, crimes, or unusual events occurred on this property?" Document answer.</li>
            <li><strong>Answer Truthfully:</strong> If buyer asks, answer honestly based on what you know.</li>
            <li><strong>Don't Investigate:</strong> You're not required to research - but if you happen to know, you must disclose when asked.</li>
            <li><strong>Document Everything:</strong> Note whether buyer asked about property history. Keep record of questions and answers.</li>
            <li><strong>Recommend Research:</strong> Suggest buyer do their own due diligence if concerned.</li>
            <li><strong>Consider Disclosure:</strong> Some agents recommend sellers disclose proactively to avoid future problems.</li>
            <li><strong>Know the Difference:</strong> Physical defects = must disclose. Stigma = only if asked.</li>
            <li><strong>Be Neutral:</strong> Don't exaggerate or minimize. State facts objectively.</li>
          </ol>
        </div>

        <h3>29.13 Sample Language for Agents</h3>
        <div className="sample-language">
          <h4>When Buyer Asks About Deaths/Crimes:</h4>
          <p><strong>✅ Good Response:</strong> "To the best of my knowledge, [state the facts]. I recommend you research public records if you'd like more detailed information."</p>
          <p><strong>❌ Bad Response:</strong> "Nothing happened here that you need to worry about." (Misleading)</p>
          
          <h4>When You Don't Know:</h4>
          <p><strong>✅ Good Response:</strong> "I don't have personal knowledge of any such events, but I'm not required to investigate. Public records are available if you'd like to research further."</p>
          
          <h4>When Seller Hasn't Disclosed to You:</h4>
          <p><strong>✅ Good Response:</strong> "The seller hasn't disclosed any such events to me. You may want to ask the seller directly and/or check public records."</p>

          <h4>When Recommending Research:</h4>
          <p><strong>✅ Good Response:</strong> "Property history research is available through public records, news archives, and online databases. I can provide the property address and timeline if you'd like to investigate."</p>
        </div>

        <p className="highlight">
          <strong>Remember:</strong> Stigmatized properties involve psychological impacts, not physical defects. You are NOT required 
          to volunteer information or investigate property history. However, if asked directly, you MUST answer truthfully based on 
          what you know. The key is: ONLY IF ASKED must you disclose - but when asked, you MUST be honest. Document all questions 
          and answers. When in doubt, recommend the buyer research public records and speak with neighbors.
        </p>
      </>
    )
  },
  {
    id: 'agency-termination',
    icon: '🔚',
    title: '30. Termination of Agency Relationships',
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
  }
];

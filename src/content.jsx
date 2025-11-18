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
  }
];

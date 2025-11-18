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

        <p className="highlight">
          <strong>Bottom Line:</strong> Digital compliance is NON-NEGOTIABLE. One violation can cost thousands 
          or end your career. Always verify you have proper authorization before calling, texting, or emailing.
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

        <h3>18.3 Massachusetts Chapter 93A - Consumer Protection</h3>
        <div className="chapter93a">
          <p><strong>What It Is:</strong> MA law prohibiting unfair or deceptive business practices</p>
          
          <h4>Prohibits:</h4>
          <ul>
            <li>Misrepresentation of property condition</li>
            <li>False advertising</li>
            <li>Failure to disclose material defects (if known)</li>
            <li>Unfair or deceptive trade practices</li>
          </ul>

          <h4>Penalties:</h4>
          <ul>
            <li>Double or triple damages</li>
            <li>Attorney's fees for winning plaintiff</li>
            <li>License suspension</li>
          </ul>

          <p><strong>Demand Letter:</strong> Consumer must send 30-day demand letter before lawsuit. 
          Respond promptly and professionally!</p>
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
  }
];

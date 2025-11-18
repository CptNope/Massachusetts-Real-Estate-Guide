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
  }
];

import React from 'react';

export const section = {
    id: 'commissions',
    icon: '💸',
    title: '18. Commission Negotiation in Massachusetts',
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
  };

import React from 'react';

export const section = {
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
  };

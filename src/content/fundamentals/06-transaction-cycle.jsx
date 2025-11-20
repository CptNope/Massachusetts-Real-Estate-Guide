import React from 'react';

export const section = {
    id: 'transaction-cycle',
    icon: '🔄',
    title: '6. The Transaction Cycle',
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
  };

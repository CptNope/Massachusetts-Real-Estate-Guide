import React from 'react';

export const section = {
    id: 'referrals',
    icon: '💰',
    title: '27. Referrals & Compensation Rules',
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
  };

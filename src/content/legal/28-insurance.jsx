import React from 'react';

export const section = {
    id: 'insurance',
    icon: '🛡️',
    title: '28. Insurance & Risk Management',
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
  };

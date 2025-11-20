import React from 'react';

export const section = {
    id: 'antitrust-associations',
    icon: '⚖️',
    title: '23. Antitrust Laws & Professional Associations',
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
  };

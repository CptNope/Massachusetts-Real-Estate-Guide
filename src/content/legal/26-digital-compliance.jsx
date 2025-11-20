import React from 'react';

export const section = {
    id: 'digital-compliance',
    icon: '📱',
    title: '26. Digital Compliance & Marketing',
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
  };

import React from 'react';

export const section = {
    id: 'stigmatized-properties',
    icon: '👻',
    title: '16. Stigmatized Properties',
    subtitle: 'Disclosure requirements for properties with psychological impacts - deaths, crimes, and paranormal claims',
    body: (
      <>
        <h3>29.1 What is a Stigmatized Property?</h3>
        <p className="highlight">
          A stigmatized property is one that society has found "undesirable" NOT because of physical defects, but 
          because of events that have occurred on or inside the property. These events create a psychological impact 
          rather than a physical defect.
        </p>

        <h3>29.2 Types of Stigmatizing Events</h3>
        <div className="event-types">
          <h4>Criminal Events:</h4>
          <ul>
            <li>🔪 <strong>Murder or Homicide:</strong> Death by violence on the property</li>
            <li>💊 <strong>Drug Lab:</strong> Property used for manufacturing illegal drugs (meth lab, etc.)</li>
            <li>🚔 <strong>Felony:</strong> Serious crimes committed on premises</li>
            <li>⚠️ <strong>Gang-Related Activity:</strong> Gang operations or violence</li>
          </ul>

          <h4>Death-Related Events:</h4>
          <ul>
            <li>💔 <strong>Suicide:</strong> Self-inflicted death on property</li>
            <li>⚰️ <strong>Natural Death:</strong> Death from natural causes (if recent or disturbing)</li>
            <li>🩺 <strong>Unattended Death:</strong> Body not discovered for extended period</li>
          </ul>

          <h4>Other Stigmatizing Factors:</h4>
          <ul>
            <li>👻 <strong>Haunted/Paranormal:</strong> Claims of ghosts, spirits, paranormal activity</li>
            <li>😱 <strong>Notorious Resident:</strong> Former occupant was infamous criminal or celebrity</li>
            <li>🏚️ <strong>Site of Tragedy:</strong> Fire with fatalities, natural disaster deaths</li>
            <li>😨 <strong>Sex Offender Nearby:</strong> Registered sex offender living close by</li>
            <li>☣️ <strong>Contamination Concerns:</strong> Prior biological/chemical contamination (even if remediated)</li>
          </ul>
        </div>

        <h3>29.3 Massachusetts Law on Stigmatized Properties</h3>
        <div className="ma-law">
          <h4>CRITICAL RULE: "Only If Asked"</h4>
          <p className="highlight">
            <strong>Seller and Agent are NOT required to disclose stigmatizing events UNLESS specifically asked.</strong>
          </p>

          <h4>What This Means:</h4>
          <ul>
            <li>✅ <strong>If asked directly:</strong> Seller & Agent MUST answer truthfully</li>
            <li>✅ <strong>Cannot lie:</strong> If buyer asks "has anyone died here?" you must tell the truth</li>
            <li>❌ <strong>No duty to investigate:</strong> Not required to research property history</li>
            <li>❌ <strong>No duty to volunteer:</strong> Not required to bring it up if not asked</li>
            <li>⚠️ <strong>Cannot mislead:</strong> Cannot make false statements to cover up events</li>
          </ul>
        </div>

        <h3>29.4 Why Stigmatized Properties Are Different</h3>
        <div className="distinction">
          <h4>Material Defect vs Stigma:</h4>
          <table>
            <thead>
              <tr>
                <th>Material Defect</th>
                <th>Stigma</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Physical problem</strong> with property</td>
                <td><strong>Psychological impact</strong> on buyer</td>
              </tr>
              <tr>
                <td>Affects property value objectively</td>
                <td>May affect value subjectively</td>
              </tr>
              <tr>
                <td><strong>MUST disclose</strong> proactively</td>
                <td><strong>Only disclose IF ASKED</strong></td>
              </tr>
              <tr>
                <td>Examples: Foundation crack, roof leak, mold</td>
                <td>Examples: Murder, suicide, haunted claims</td>
              </tr>
              <tr>
                <td>Buyer can inspect/verify</td>
                <td>Cannot be physically inspected</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h3>29.5 Agent's Responsibilities</h3>
        
        <h4>What You MUST Do:</h4>
        <ul>
          <li>✅ Answer truthfully if directly asked about stigmatizing events</li>
          <li>✅ Disclose known information if specifically questioned</li>
          <li>✅ Not make false or misleading statements</li>
          <li>✅ Document that buyer asked (or didn't ask) about property history</li>
          <li>✅ Recommend buyer do their own research if concerned</li>
        </ul>

        <h4>What You Are NOT Required to Do:</h4>
        <ul>
          <li>❌ Volunteer information about deaths or crimes without being asked</li>
          <li>❌ Research property history for stigmatizing events</li>
          <li>❌ Investigate rumors or paranormal claims</li>
          <li>❌ Check police records or death certificates</li>
          <li>❌ Ask seller about every possible stigmatizing event</li>
        </ul>

        <h4>What You CANNOT Do:</h4>
        <ul>
          <li>🚫 Lie or misrepresent when asked directly</li>
          <li>🚫 Hide known information when specifically questioned</li>
          <li>🚫 Tell buyer "nothing happened here" if you know otherwise</li>
          <li>🚫 Make up stories or cover up events</li>
          <li>🚫 Discourage buyer from asking questions</li>
        </ul>

        <h3>29.6 Practical Examples</h3>
        
        <h4>Example 1: Murder 5 Years Ago</h4>
        <div className="example-scenario">
          <p><strong>Situation:</strong> Property had a murder 5 years ago. Widely known in neighborhood. Buyer doesn't ask.</p>
          <p><strong>Agent's Duty:</strong> NOT required to disclose. Can complete sale without mentioning.</p>
          <p><strong>If Buyer Asks:</strong> "Has anyone died here?" MUST answer truthfully: "Yes, there was a murder here 5 years ago."</p>
          <p><strong>Best Practice:</strong> Document that buyer did not ask about property history.</p>
        </div>

        <h4>Example 2: Rumored to be Haunted</h4>
        <div className="example-scenario">
          <p><strong>Situation:</strong> Neighbors say house is haunted. Seller never experienced anything. Buyer asks: "Is this house haunted?"</p>
          <p><strong>Correct Answer:</strong> "I don't have personal knowledge of paranormal activity, but neighbors have mentioned such claims. You may want to research the property history."</p>
          <p><strong>Why:</strong> You're being truthful without claiming knowledge you don't have.</p>
        </div>

        <h4>Example 3: Suicide Last Year</h4>
        <div className="example-scenario">
          <p><strong>Situation:</strong> Previous owner committed suicide in master bedroom last year. Buyer asks: "Why did the previous owner leave?"</p>
          <p><strong>Wrong Answer:</strong> "They just wanted to downsize." (This is a lie)</p>
          <p><strong>Correct Answer:</strong> "The previous owner passed away. The estate is selling." (Truthful without graphic details unless buyer asks specifically)</p>
          <p><strong>If Asked Specifically:</strong> "How did they die?" → Must answer: "It was a suicide."</p>
        </div>

        <h4>Example 4: Meth Lab Remediated</h4>
        <div className="example-scenario">
          <p><strong>Situation:</strong> Property was a meth lab, professionally remediated and certified clean. Buyer asks about property history.</p>
          <p><strong>Must Disclose:</strong> "This property was previously used as a methamphetamine lab. It has been professionally remediated and tested. I can provide the clearance certificate."</p>
          <p><strong>Why:</strong> Buyer specifically asked, and while remediated, it's a material fact that affects buyer perception.</p>
          <p><strong>Note:</strong> Remediated contamination sits between physical defect and stigma - disclose when asked!</p>
        </div>

        <h3>29.7 Megan's Law - Sex Offender Registry</h3>
        <div className="megans-law">
          <p className="highlight">
            <strong>Megan's Law</strong> is a federal law requiring sex offender registration. The registry is 
            <strong> PUBLIC KNOWLEDGE</strong> and available online. Offenders MUST disclose where they live and work 
            immediately upon being released.
          </p>

          <h4>Three Risk Levels:</h4>
          <div className="risk-levels">
            <div className="risk-level-1">
              <h5>📗 Level 1 - Low Risk</h5>
              <ul>
                <li><strong>Risk:</strong> Low risk of re-offense</li>
                <li><strong>Public Access:</strong> Limited public access to information</li>
                <li><strong>Notification:</strong> Police and certain agencies notified</li>
                <li><strong>Typical Offenses:</strong> Non-violent, first-time offenses</li>
              </ul>
            </div>

            <div className="risk-level-2">
              <h5>📙 Level 2 - Moderate Risk</h5>
              <ul>
                <li><strong>Risk:</strong> Moderate risk of re-offense</li>
                <li><strong>Public Access:</strong> Available online to public (searchable)</li>
                <li><strong>Notification:</strong> Schools, daycare centers, and neighbors may be notified</li>
                <li><strong>Typical Offenses:</strong> Repeat offenses or more serious crimes</li>
                <li><strong>⚠️ Note:</strong> Level 2 and 3 offenders are PUBLICLY AVAILABLE online</li>
              </ul>
            </div>

            <div className="risk-level-3">
              <h5>📕 Level 3 - High Risk</h5>
              <ul>
                <li><strong>Risk:</strong> High risk of re-offense and danger to public</li>
                <li><strong>Public Access:</strong> Widely available to public (searchable online)</li>
                <li><strong>Notification:</strong> Active community notification, flyers, public meetings</li>
                <li><strong>Typical Offenses:</strong> Violent, predatory offenses or multiple convictions</li>
                <li><strong>🚨 Alert:</strong> Law enforcement actively notifies community</li>
              </ul>
            </div>
          </div>

          <h4>Agent's Role with Sex Offender Information:</h4>
          <ul>
            <li>✅ <strong>Can Direct to Database:</strong> "You can search the public sex offender registry at [state website]"</li>
            <li>✅ <strong>Can Acknowledge It's Public:</strong> "Sex offender information is public knowledge available online"</li>
            <li>✅ <strong>Should Recommend Research:</strong> Suggest buyers research if they have concerns</li>
            <li>❌ <strong>NOT Required to Research:</strong> You don't have to check the registry for every property</li>
            <li>❌ <strong>NOT Required to Volunteer:</strong> Don't have to tell buyer "there's an offender 3 blocks away"</li>
            <li>⚠️ <strong>If Asked:</strong> Must answer truthfully if you have knowledge (but can admit you don't know)</li>
          </ul>

          <h4>How Offenders Are Registered:</h4>
          <p>
            Upon release from incarceration, sex offenders MUST:
          </p>
          <ul>
            <li>📍 <strong>Register Address:</strong> Where they live (and update within days if they move)</li>
            <li>🏢 <strong>Register Workplace:</strong> Where they work or go to school</li>
            <li>📸 <strong>Provide Photo:</strong> Recent photograph for database</li>
            <li>🔄 <strong>Update Regularly:</strong> Annual or more frequent verification</li>
            <li>⚠️ <strong>Failure to Register:</strong> Criminal offense with serious penalties</li>
          </ul>

          <h4>Accessing the Registry (Recommend to Buyers):</h4>
          <ul>
            <li>🌐 <strong>Massachusetts:</strong> Mass.gov Sex Offender Registry Board (SORB)</li>
            <li>🗺️ <strong>Search by Address:</strong> Enter property address to see offenders nearby</li>
            <li>📱 <strong>Mobile Apps:</strong> Various apps available for smartphone alerts</li>
            <li>🔍 <strong>National:</strong> National Sex Offender Public Website (NSOPW.gov)</li>
            <li>📧 <strong>Email Alerts:</strong> Some states offer notification services</li>
          </ul>

          <div className="megans-law-note">
            <p className="highlight">
              <strong>Critical Distinction:</strong> Sex offender information is PUBLIC KNOWLEDGE (not confidential like 
              medical conditions). The registry exists specifically to inform the public. However, agents are still not 
              required to research or volunteer this information - buyers should do their own due diligence. If asked 
              and you know, answer truthfully. If you don't know, say so and direct them to the public registry.
            </p>
          </div>
        </div>

        <h3>29.8 How Buyers Can Research</h3>
        <div className="buyer-research">
          <h4>Recommend These Resources to Buyers:</h4>
          <ul>
            <li>🔍 <strong>Public Records:</strong> Police reports, court records, death certificates</li>
            <li>📰 <strong>News Archives:</strong> Search property address in local news databases</li>
            <li>🏘️ <strong>Neighborhood Canvassing:</strong> Talk to neighbors about property history</li>
            <li>💻 <strong>Online Databases:</strong> 
              <ul>
                <li>DiedInHouse.com (paid service checking death records)</li>
                <li><strong>Megan's Law Database</strong> (Mass.gov SORB - sex offender registry Level 2 & 3 available)</li>
                <li>Local crime maps</li>
              </ul>
            </li>
            <li>🏛️ <strong>Town Hall:</strong> Building permits, violations, code enforcement history</li>
            <li>🗣️ <strong>Ask Directly:</strong> "Has anyone died here? Any crimes? Paranormal activity?"</li>
          </ul>
        </div>

        <h3>29.9 Impact on Property Value</h3>
        <div className="value-impact">
          <h4>Stigmatized Properties Typically Sell For:</h4>
          <ul>
            <li>📉 <strong>2-10% less</strong> than comparable non-stigmatized properties</li>
            <li>📉 <strong>10-25% less</strong> for well-publicized violent crimes</li>
            <li>📉 <strong>15-35% less</strong> for notorious cases (celebrity murders, serial killers)</li>
            <li>💀 <strong>Infamous properties</strong> can be nearly unmarketable</li>
          </ul>

          <h4>Factors Affecting Impact:</h4>
          <ul>
            <li><strong>Recency:</strong> Recent events more stigmatizing than old events</li>
            <li><strong>Publicity:</strong> Well-known cases harder to sell</li>
            <li><strong>Type of Event:</strong> Violent crimes worse than natural deaths</li>
            <li><strong>Location:</strong> Exact location (bedroom vs garage) affects perception</li>
            <li><strong>Remediation:</strong> Cleanup and renovation can help</li>
            <li><strong>Market:</strong> Stigma matters less in seller's markets</li>
          </ul>
        </div>

        <h3>29.10 Seller Strategies</h3>
        <div className="seller-strategies">
          <h4>If Selling Stigmatized Property:</h4>
          <ul>
            <li>💰 <strong>Price Accordingly:</strong> Expect lower market value</li>
            <li>🔨 <strong>Renovate:</strong> Change layout, paint, flooring where event occurred</li>
            <li>⏰ <strong>Wait:</strong> Stigma lessens with time (sometimes years needed)</li>
            <li>📋 <strong>Full Disclosure:</strong> Some sellers proactively disclose to avoid issues</li>
            <li>🎯 <strong>Target Market:</strong> Investors less affected by stigma than owner-occupants</li>
            <li>📄 <strong>Written Disclosure:</strong> Consider disclosure even if not required (protects from future claims)</li>
          </ul>
        </div>

        <h3>29.11 Legal Risks & Liability</h3>
        
        <h4>Agent Can Be Liable For:</h4>
        <div className="liability-warning">
          <ul>
            <li>🚨 <strong>Fraud:</strong> Lying when directly asked about stigmatizing events</li>
            <li>🚨 <strong>Misrepresentation:</strong> Making false statements to cover up history</li>
            <li>🚨 <strong>Failure to Disclose:</strong> If asked specifically and you don't answer truthfully</li>
            <li>🚨 <strong>Active Concealment:</strong> Deliberately hiding known information when questioned</li>
          </ul>
        </div>

        <h4>Agent is NOT Liable For:</h4>
        <ul>
          <li>✅ Not volunteering information about stigmatizing events</li>
          <li>✅ Not researching property history for past events</li>
          <li>✅ Unknown stigmatizing events (no duty to investigate)</li>
          <li>✅ Buyer's failure to ask about property history</li>
        </ul>

        <h3>29.12 Best Practices for Agents</h3>
        <div className="best-practices">
          <ol>
            <li><strong>Ask Seller Direct Questions:</strong> "To your knowledge, have any deaths, crimes, or unusual events occurred on this property?" Document answer.</li>
            <li><strong>Answer Truthfully:</strong> If buyer asks, answer honestly based on what you know.</li>
            <li><strong>Don't Investigate:</strong> You're not required to research - but if you happen to know, you must disclose when asked.</li>
            <li><strong>Document Everything:</strong> Note whether buyer asked about property history. Keep record of questions and answers.</li>
            <li><strong>Recommend Research:</strong> Suggest buyer do their own due diligence if concerned.</li>
            <li><strong>Consider Disclosure:</strong> Some agents recommend sellers disclose proactively to avoid future problems.</li>
            <li><strong>Know the Difference:</strong> Physical defects = must disclose. Stigma = only if asked.</li>
            <li><strong>Be Neutral:</strong> Don't exaggerate or minimize. State facts objectively.</li>
          </ol>
        </div>

        <h3>29.13 Sample Language for Agents</h3>
        <div className="sample-language">
          <h4>When Buyer Asks About Deaths/Crimes:</h4>
          <p><strong>✅ Good Response:</strong> "To the best of my knowledge, [state the facts]. I recommend you research public records if you'd like more detailed information."</p>
          <p><strong>❌ Bad Response:</strong> "Nothing happened here that you need to worry about." (Misleading)</p>
          
          <h4>When You Don't Know:</h4>
          <p><strong>✅ Good Response:</strong> "I don't have personal knowledge of any such events, but I'm not required to investigate. Public records are available if you'd like to research further."</p>
          
          <h4>When Seller Hasn't Disclosed to You:</h4>
          <p><strong>✅ Good Response:</strong> "The seller hasn't disclosed any such events to me. You may want to ask the seller directly and/or check public records."</p>

          <h4>When Recommending Research:</h4>
          <p><strong>✅ Good Response:</strong> "Property history research is available through public records, news archives, and online databases. I can provide the property address and timeline if you'd like to investigate."</p>
        </div>

        <p className="highlight">
          <strong>Remember:</strong> Stigmatized properties involve psychological impacts, not physical defects. You are NOT required 
          to volunteer information or investigate property history. However, if asked directly, you MUST answer truthfully based on 
          what you know. The key is: ONLY IF ASKED must you disclose - but when asked, you MUST be honest. Document all questions 
          and answers. When in doubt, recommend the buyer research public records and speak with neighbors.
        </p>
      </>
    )
  };

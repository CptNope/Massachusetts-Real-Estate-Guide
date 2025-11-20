import React from 'react';

export const section = {
    id: 'professional-development',
    icon: '🎓',
    title: '29. Professional Development & Licensing',
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

        <h3>16.2.5 License Application Requirements</h3>
        <div className="application-requirements">
          <p className="highlight">
            <strong>Additional requirements for obtaining a Massachusetts real estate license:</strong>
          </p>

          <h4>📋 Citizenship Requirement (Constitutionally Defective - NOT Enforced)</h4>
          <div className="citizenship-requirement">
            <p className="warning">
              <strong>Applicant to show evidence of citizenship or intent of citizenship</strong>
            </p>
            <p className="highlight">
              <strong>⚠️ IMPORTANT:</strong> The "board" based on Attorney General's opinion, <strong>declared this 
              requirement to be constitutionally defective and does not enforce requirement even though still listed 
              on the MGL's</strong> (Massachusetts General Laws).
            </p>
            <ul>
              <li><strong>Historical Requirement:</strong> Used to require proof of US citizenship or intent to become citizen</li>
              <li><strong>Current Status:</strong> NOT ENFORCED - declared unconstitutional</li>
              <li><strong>Why Still Listed:</strong> Legislature hasn't removed from statute yet</li>
              <li><strong>For Applicants:</strong> You do NOT need to prove citizenship to get licensed</li>
              <li><strong>Legal Status:</strong> Can obtain license regardless of citizenship status</li>
            </ul>
            <p className="success">
              <strong>✅ Bottom Line:</strong> Don't worry about this requirement - the Board does not enforce it 
              and will not ask for proof of citizenship. This is an outdated law that remains on the books but is 
              not applied.
            </p>
          </div>

          <h4>💰 Tax Compliance (STRICTLY ENFORCED)</h4>
          <div className="tax-requirement">
            <p className="warning">
              <strong>Must have filed all state tax returns & paid all taxes.</strong>
            </p>
            <ul>
              <li><strong>Requirement:</strong> All MA state tax returns must be filed and current</li>
              <li><strong>All Taxes Paid:</strong> Cannot have outstanding tax debt to MA</li>
              <li><strong>Verification:</strong> Board checks with MA Department of Revenue</li>
              <li><strong>Includes:</strong>
                <ul>
                  <li>Income tax</li>
                  <li>Sales tax (if you have a business)</li>
                  <li>Any other MA state taxes owed</li>
                </ul>
              </li>
              <li><strong>Payment Plans:</strong> If on payment plan, must be current with payments</li>
              <li><strong>Federal Taxes:</strong> Not checked by MA Board, only state taxes</li>
            </ul>
            <p className="highlight">
              <strong>⚠️ This IS Enforced:</strong> Unlike the citizenship requirement, tax compliance is strictly 
              enforced. If you owe MA taxes or haven't filed returns, your license application will be denied or 
              delayed until resolved.
            </p>
          </div>

          <h4>🛡️ Broker Surety Bond Requirement</h4>
          <div className="surety-bond">
            <p className="warning">
              <strong>Brokers must obtain $5,000 Surety Bond</strong>
            </p>
            <ul>
              <li><strong>Who Needs It:</strong> BROKERS only (not salespersons)</li>
              <li><strong>Amount:</strong> Minimum $5,000</li>
              <li><strong>Purpose:</strong> Protects public from broker's dishonest acts</li>
              <li><strong>When Required:</strong> Before broker license is issued</li>
              <li><strong>How to Obtain:</strong>
                <ul>
                  <li>Contact insurance company or surety bond provider</li>
                  <li>Apply for real estate surety bond</li>
                  <li>Pay premium (typically $100-200 per year)</li>
                  <li>Submit proof to Board with application</li>
                </ul>
              </li>
              <li><strong>Renewal:</strong> Must maintain bond while license is active</li>
              <li><strong>Cost:</strong> Annual premium based on credit score (typically $100-300/year)</li>
            </ul>
            <p className="highlight">
              <strong>Note:</strong> This is different from E&O insurance. The surety bond is a licensing requirement 
              for brokers. E&O insurance is recommended but not legally required by MA.
            </p>
          </div>

          <h4>🎤 Board Interview (If Deemed Necessary)</h4>
          <div className="board-interview">
            <p className="warning">
              <strong>Applicant required to appear before board for personal interview if they deem necessary</strong>
            </p>
            <ul>
              <li><strong>When Required:</strong> Board discretion - not automatic for all applicants</li>
              <li><strong>Common Triggers:</strong>
                <ul>
                  <li>Criminal history on background check</li>
                  <li>Prior license issues in another state</li>
                  <li>Questionable information on application</li>
                  <li>Complaints or concerns about applicant</li>
                  <li>Gap in work history or education</li>
                </ul>
              </li>
              <li><strong>What to Expect:</strong>
                <ul>
                  <li>Appear in person at Board offices</li>
                  <li>Answer questions about your application</li>
                  <li>Explain any issues or concerns</li>
                  <li>Demonstrate knowledge and character</li>
                  <li>Be honest and professional</li>
                </ul>
              </li>
              <li><strong>Preparation:</strong>
                <ul>
                  <li>Review your entire application</li>
                  <li>Be ready to explain any issues</li>
                  <li>Bring supporting documents</li>
                  <li>Dress professionally</li>
                  <li>Be honest - don't hide anything</li>
                </ul>
              </li>
              <li><strong>Outcome:</strong>
                <ul>
                  <li>Board may approve license</li>
                  <li>Board may deny license</li>
                  <li>Board may approve with conditions</li>
                  <li>Board may request additional information</li>
                </ul>
              </li>
            </ul>
            <p className="highlight">
              <strong>Best Practice:</strong> Be completely honest on your application. If you have any issues 
              (criminal history, previous license problems, etc.), disclose them upfront and provide explanation. 
              Hiding information that comes up in background check is worse than disclosing and explaining.
            </p>
          </div>

          <h4>✅ Complete License Application Checklist:</h4>
          <div className="application-checklist">
            <h5>For Salesperson License:</h5>
            <ol>
              <li>☐ Complete 40-hour pre-license course from approved school</li>
              <li>☐ Pass state salesperson exam (score 70% or higher)</li>
              <li>☐ Complete license application (online or paper)</li>
              <li>☐ Pay application fee ($100-150)</li>
              <li>☐ Submit background check/fingerprints</li>
              <li>☐ Verify all MA state taxes filed and paid</li>
              <li>☐ <s>Provide proof of citizenship</s> (NOT ENFORCED - ignore this)</li>
              <li>☐ Wait for Board approval</li>
              <li>☐ Affiliate with licensed broker before license issued</li>
              <li>☐ Appear for interview if requested by Board</li>
            </ol>

            <h5>For Broker License (Additional Requirements):</h5>
            <ol>
              <li>☐ 3+ years as licensed salesperson (MA or equivalent)</li>
              <li>☐ Complete 30-hour broker pre-license course</li>
              <li>☐ Pass state broker exam (score 70% or higher)</li>
              <li>☐ Complete broker license application</li>
              <li>☐ Pay broker application fee ($150-200)</li>
              <li>☐ Submit background check/fingerprints</li>
              <li>☐ Verify all MA state taxes filed and paid</li>
              <li>☐ <strong>Obtain $5,000 surety bond</strong> (CRITICAL - broker only!)</li>
              <li>☐ Submit proof of surety bond to Board</li>
              <li>☐ <s>Provide proof of citizenship</s> (NOT ENFORCED - ignore this)</li>
              <li>☐ Wait for Board approval</li>
              <li>☐ Appear for interview if requested by Board</li>
            </ol>
          </div>

          <h4>⏱️ Timeline for License Application:</h4>
          <ul>
            <li><strong>Course Completion:</strong> 40 hours (1-4 weeks depending on schedule)</li>
            <li><strong>Exam Scheduling:</strong> 1-2 weeks after course</li>
            <li><strong>Application Processing:</strong> 2-4 weeks after passing exam</li>
            <li><strong>Background Check:</strong> 2-6 weeks</li>
            <li><strong>Board Review:</strong> 1-4 weeks</li>
            <li><strong>Total:</strong> 6-12 weeks from starting course to receiving license</li>
            <li><strong>If Interview Required:</strong> Add 4-8 weeks</li>
          </ul>

          <div className="application-summary">
            <h4>🎯 Application Requirements Summary:</h4>
            <ul>
              <li>✅ <strong>Tax Compliance:</strong> STRICTLY ENFORCED - must have all MA taxes filed and paid</li>
              <li>✅ <strong>Broker Surety Bond:</strong> REQUIRED for brokers - $5,000 minimum</li>
              <li>✅ <strong>Board Interview:</strong> POSSIBLE - be prepared, honest, and professional</li>
              <li>❌ <strong>Citizenship:</strong> NOT ENFORCED - don't worry about this outdated requirement</li>
            </ul>
            <p className="warning">
              <strong>⚠️ Most Common Application Delays:</strong> Outstanding MA tax debt and incomplete background 
              checks. Make sure all state taxes are current BEFORE applying!
            </p>
          </div>
        </div>

        <h3>16.2.6 Broker & Salesperson License Structure</h3>
        <div className="license-structure">
          <h4>🏢 Broker License Entity Types</h4>
          <div className="broker-entity-types">
            <p className="highlight">
              <strong>Brokers license can be held by corporation, society, association or partnership.</strong>
            </p>
            <ul>
              <li><strong>Corporation:</strong> Real estate brokerage structured as corp (Inc., LLC, etc.)</li>
              <li><strong>Society:</strong> Organized group operating as brokerage</li>
              <li><strong>Association:</strong> Professional association acting as brokerage</li>
              <li><strong>Partnership:</strong> Two or more people operating brokerage together</li>
              <li><strong>Sole Proprietorship:</strong> Individual broker (also allowed)</li>
            </ul>
            <p><strong>Key Point:</strong> Broker license is not limited to individuals - business entities can hold broker licenses</p>
          </div>

          <h4>📝 D/B/A's (Doing Business As) - Agency Disclosure Requirements</h4>
          <div className="dba-requirements">
            <p className="warning">
              <strong>D/B/A's - agency use name of broker owner & their license # on the Agency Disclosure forms</strong>
            </p>
            <ul>
              <li><strong>D/B/A Explained:</strong> "Doing Business As" - trade name different from legal entity name</li>
              <li><strong>Example:</strong> "John Smith Real Estate" (D/B/A) owned by "Smith Properties LLC" (legal entity)</li>
              <li><strong>Agency Disclosure Forms Must Show:</strong>
                <ul>
                  <li>Name of broker owner (legal entity or individual)</li>
                  <li>Broker's license number</li>
                  <li>Cannot just list D/B/A name without broker owner info</li>
                </ul>
              </li>
              <li><strong>Why:</strong> Public must know who is legally responsible (licensed broker)</li>
              <li><strong>Transparency:</strong> Prevents confusion about who holds the license</li>
            </ul>
            <p className="highlight">
              <strong>Example:</strong> If you work for "Boston Dream Homes" (D/B/A) owned by "Jane Doe Realty Corp" 
              (licensed broker), your agency disclosure must list "Jane Doe Realty Corp, License #123456" not just 
              "Boston Dream Homes."
            </p>
          </div>

          <h4>👥 Teams Cannot Get Licensed</h4>
          <div className="team-licensing">
            <p className="warning">
              <strong>Teams cannot get licensed.</strong>
            </p>
            <ul>
              <li><strong>What This Means:</strong> Real estate "teams" are marketing groups, not legal entities</li>
              <li><strong>Examples:</strong>
                <ul>
                  <li>❌ "The Smith Team" cannot hold a broker license</li>
                  <li>❌ "Premier Sales Group" cannot get licensed as a team</li>
                  <li>✅ Team members must be individually licensed under a broker</li>
                </ul>
              </li>
              <li><strong>How Teams Work:</strong>
                <ul>
                  <li>Team is marketing brand, not legal entity</li>
                  <li>Each team member must have individual salesperson or broker license</li>
                  <li>All team members must be affiliated with same licensed broker</li>
                  <li>Team name can be used for marketing but not for licensing</li>
                </ul>
              </li>
              <li><strong>Agency Disclosure:</strong> Must use individual agent's name and broker's name, not team name</li>
              <li><strong>Advertising:</strong> Team name can be used but must include broker's name and license info</li>
            </ul>
            <p className="highlight">
              <strong>Common Scenario:</strong> "The Smith Team" works for "ABC Realty Corp" (licensed broker). Each 
              team member has individual license under ABC Realty Corp. They can market as "The Smith Team" but all 
              legal documents and disclosures must show individual agent names and ABC Realty Corp broker info.
            </p>
          </div>

          <h4>👔 Designated Officer Requirement (For Entity Brokers)</h4>
          <div className="designated-officer">
            <p className="warning">
              <strong>(1) person must be Designated Officer of entity</strong><br/>
              <strong>Designated Officer must hold a broker license.</strong>
            </p>
            <ul>
              <li><strong>When Required:</strong> If brokerage is corporation, LLC, partnership, or other entity</li>
              <li><strong>One Person Only:</strong> Exactly ONE person must be designated officer</li>
              <li><strong>Must Hold Broker License:</strong> Designated officer cannot be just a salesperson</li>
              <li><strong>Responsibilities:</strong>
                <ul>
                  <li>Supervise all real estate activities of the entity</li>
                  <li>Ensure compliance with MA real estate laws</li>
                  <li>Responsible for all agents affiliated with entity</li>
                  <li>Sign official documents on behalf of entity</li>
                  <li>Handle Board communications</li>
                </ul>
              </li>
              <li><strong>Liability:</strong> Designated officer is responsible for entity's compliance</li>
              <li><strong>Cannot Have Multiple:</strong> Entity can only have ONE designated officer at a time</li>
            </ul>
            <p className="highlight">
              <strong>Example:</strong> "Smith Realty LLC" is a corporation. John Smith (broker license #12345) is 
              the Designated Officer. He's responsible for overseeing all agents, ensuring compliance, and is the 
              point of contact with the Board. Even though the entity holds the broker license, John is personally 
              responsible as the designated officer.
            </p>
          </div>

          <h4>📅 Examination Frequency Requirements</h4>
          <div className="exam-frequency">
            <p className="warning">
              <strong>Broker examination must be offered at least 6 times a year and Salesperson exams at least 
              8 times per year. (minimum)</strong>
            </p>
            <ul>
              <li><strong>Broker Exam:</strong> Minimum 6 times per year
                <ul>
                  <li>Approximately every 2 months</li>
                  <li>Actual schedule may offer more frequently</li>
                  <li>Ensures reasonable access to exam</li>
                </ul>
              </li>
              <li><strong>Salesperson Exam:</strong> Minimum 8 times per year
                <ul>
                  <li>Approximately every 1.5 months</li>
                  <li>More frequent because higher demand</li>
                  <li>Actual schedule may offer more frequently</li>
                </ul>
              </li>
              <li><strong>Why Different?</strong> More people take salesperson exam, so offered more often</li>
              <li><strong>Scheduling:</strong> Check with testing center for exact dates</li>
              <li><strong>Re-Takes:</strong> If you fail, must wait until next scheduled exam date</li>
            </ul>
            <p className="highlight">
              <strong>Practical Impact:</strong> If you fail the exam, you won't have to wait more than 2 months 
              (broker) or 1.5 months (salesperson) for the next opportunity. In reality, most testing centers offer 
              exams more frequently than the minimum.
            </p>
          </div>

          <h4>♿ Fee Waivers for Disabled Veterans and Blind Persons</h4>
          <div className="fee-waivers">
            <p className="warning">
              <strong>Fees for issuance or renewal of broker or salespersons license are waived for blind persons 
              or paraplegic veterans.</strong>
            </p>
            <ul>
              <li><strong>Who Qualifies:</strong>
                <ul>
                  <li>Blind persons (legally blind)</li>
                  <li>Paraplegic veterans (service-connected paralysis)</li>
                </ul>
              </li>
              <li><strong>What's Waived:</strong>
                <ul>
                  <li>License issuance fees (first-time license)</li>
                  <li>License renewal fees (every 2 years)</li>
                  <li>Both broker AND salesperson licenses covered</li>
                </ul>
              </li>
              <li><strong>What's NOT Waived:</strong>
                <ul>
                  <li>Pre-license course fees (still must pay school)</li>
                  <li>Exam fees (may still apply - check with testing center)</li>
                  <li>CE course fees (must still pay for continuing education)</li>
                  <li>E&O insurance, MLS fees, NAR dues (private fees not waived)</li>
                </ul>
              </li>
              <li><strong>How to Apply:</strong>
                <ul>
                  <li>Complete standard license application</li>
                  <li>Include documentation of blindness or paraplegic veteran status</li>
                  <li>Medical certification for blindness</li>
                  <li>VA documentation for paraplegic veteran status</li>
                  <li>Board will review and approve waiver</li>
                </ul>
              </li>
              <li><strong>Renewal:</strong> Waiver applies to renewals too - must re-submit documentation each renewal</li>
            </ul>
            <p className="highlight">
              <strong>Savings:</strong> License fees are typically $100-200 for issuance and $200-250 for renewal 
              every 2 years. This waiver can save $400-700 over a typical 4-year period. It's a significant benefit 
              for qualified individuals.
            </p>
          </div>

          <div className="license-structure-summary">
            <h4>🎯 License Structure Summary:</h4>
            <ul>
              <li>✅ <strong>Broker licenses:</strong> Can be held by corporations, societies, associations, partnerships, or individuals</li>
              <li>✅ <strong>D/B/A's:</strong> Must show broker owner name & license # on agency disclosure forms</li>
              <li>✅ <strong>Teams:</strong> Cannot get licensed (marketing groups only, individuals must be licensed)</li>
              <li>✅ <strong>Designated Officer:</strong> Entities must have ONE designated officer with broker license</li>
              <li>✅ <strong>Exams:</strong> Broker minimum 6x/year, Salesperson minimum 8x/year</li>
              <li>✅ <strong>Fee Waivers:</strong> Available for blind persons and paraplegic veterans</li>
            </ul>
          </div>
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

        <h3>16.5 Licensing Requirements & Violations (CRITICAL!)</h3>
        <div className="licensing-requirements">
          <h4>🚨 Criminal Conviction Reporting (30-Day Rule)</h4>
          <div className="conviction-reporting">
            <p className="warning">
              <strong>A broker or salesperson shall report to the Board within 30 days his or her conviction 
              of any crime including any misdemeanor or felony</strong> under the law of the Commonwealth, 
              the United States or laws of another jurisdiction which if committed in Massachusetts would 
              constitute a crime under Massachusetts law.
            </p>

            <h5>What Must Be Reported:</h5>
            <ul>
              <li><strong>ANY Crime:</strong> Including misdemeanors and felonies</li>
              <li><strong>All Jurisdictions:</strong> MA, other states, federal</li>
              <li><strong>Equivalent Crimes:</strong> If it would be a crime in MA, report it</li>
              <li><strong>DUI/OUI:</strong> Yes, must report</li>
              <li><strong>Domestic Incidents:</strong> Yes, must report if convicted</li>
              <li><strong>Drug Charges:</strong> Yes, must report</li>
              <li><strong>Theft/Fraud:</strong> Yes, must report</li>
            </ul>

            <h5>Timeline:</h5>
            <p><strong>Within 30 DAYS of conviction</strong> (not arrest - conviction!)</p>

            <h5>How to Report:</h5>
            <ul>
              <li>Written notice to the Board of Registration of Real Estate Brokers and Salespersons</li>
              <li>Include: Your name, license number, date of conviction, charge, jurisdiction, court</li>
              <li>Attach: Copy of court judgment or conviction record</li>
              <li>Send certified mail with return receipt</li>
            </ul>

            <h5>Consequences of NOT Reporting:</h5>
            <ul>
              <li>❌ Automatic license suspension or revocation</li>
              <li>❌ Additional disciplinary action for failure to report</li>
              <li>❌ Cannot claim ignorance of requirement</li>
              <li>❌ More severe penalties than if you had reported timely</li>
            </ul>

            <h5>Does the Board Find Out Anyway?</h5>
            <p className="highlight">
              <strong>YES!</strong> The Board runs periodic background checks. They WILL find out. Reporting 
              immediately shows honesty and responsibility. Hiding it shows dishonesty and results in harsher 
              penalties.
            </p>
          </div>

          <h4>📚 Fraudulent Education Certification (License Suspension)</h4>
          <div className="education-fraud">
            <p className="warning">
              <strong>A real estate broker and salesperson who fraudulently certifies to the Board completion 
              of the educational curriculum</strong> described in 254 CMR 5.03 may, following a hearing, which 
              hearing may be waived by such broker or salesperson, be subject to the <strong>suspension of their 
              license until such time that the Board is satisfied that the educational curriculum has been completed.</strong>
            </p>

            <h5>What This Means:</h5>
            <ul>
              <li><strong>Fraudulent Certification:</strong> Lying about completing required CE hours</li>
              <li><strong>Examples:</strong>
                <ul>
                  <li>Submitting fake CE certificates</li>
                  <li>Claiming credit for courses not taken</li>
                  <li>Having someone else take courses for you</li>
                  <li>Forging instructor signatures</li>
                  <li>Using altered completion certificates</li>
                </ul>
              </li>
            </ul>

            <h5>Consequences:</h5>
            <ul>
              <li><strong>Hearing:</strong> Board schedules hearing (you can waive it)</li>
              <li><strong>License Suspension:</strong> Your license is suspended immediately</li>
              <li><strong>Cannot Practice:</strong> Cannot work as agent while suspended</li>
              <li><strong>Complete Education:</strong> Must actually complete ALL required CE</li>
              <li><strong>Prove Completion:</strong> Submit legitimate certificates to Board</li>
              <li><strong>Board Review:</strong> Board must be "satisfied" education is complete</li>
              <li><strong>Reinstatement:</strong> License restored only after Board approval</li>
            </ul>

            <h5>Additional Penalties:</h5>
            <ul>
              <li>Fines from the Board</li>
              <li>Permanent record of violation</li>
              <li>Potential Chapter 93A liability if harmed clients</li>
              <li>Possible criminal charges (fraud)</li>
              <li>Loss of income during suspension</li>
              <li>Damage to professional reputation</li>
            </ul>

            <p className="highlight">
              <strong>Don't Risk It:</strong> CE courses are not that expensive or time-consuming. The penalty 
              for faking completion is career-ending. Just do the actual work.
            </p>
          </div>

          <h4>🔒 License Surrender (7-Day Rule)</h4>
          <div className="license-surrender">
            <p className="warning">
              <strong>A broker or salesperson upon notice of suspension or revocation of his license shall 
              deliver his/her license to the offices of the Board within seven days</strong> of the receipt 
              of such notice.
            </p>

            <h5>What This Means:</h5>
            <ul>
              <li><strong>Notice of Suspension:</strong> Board sends written notice that license is suspended</li>
              <li><strong>Notice of Revocation:</strong> Board sends written notice that license is revoked (permanent)</li>
              <li><strong>7 Days:</strong> You have 7 calendar days from receipt of notice</li>
              <li><strong>Physical License:</strong> Must surrender your actual license card/certificate</li>
              <li><strong>Board Offices:</strong> Deliver to Board's office (mail certified or in person)</li>
            </ul>

            <h5>Suspension vs Revocation:</h5>
            <table>
              <thead>
                <tr>
                  <th>Suspension</th>
                  <th>Revocation</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Temporary loss of license</td>
                  <td>Permanent loss of license</td>
                </tr>
                <tr>
                  <td>Can be reinstated after conditions met</td>
                  <td>Cannot be reinstated (must re-apply for new license)</td>
                </tr>
                <tr>
                  <td>Common: 30 days to 1 year</td>
                  <td>Serious violations only</td>
                </tr>
                <tr>
                  <td>Example: Failure to complete CE, minor violations</td>
                  <td>Example: Fraud, embezzlement, serious crimes</td>
                </tr>
              </tbody>
            </table>

            <h5>What Happens if You Don't Surrender License:</h5>
            <ul>
              <li>❌ Additional disciplinary action</li>
              <li>❌ Extended suspension period</li>
              <li>❌ Possible contempt charges</li>
              <li>❌ Harder to get reinstated</li>
              <li>❌ Shows lack of cooperation with Board</li>
            </ul>

            <h5>During Suspension/Revocation:</h5>
            <ul>
              <li>❌ <strong>CANNOT</strong> practice real estate</li>
              <li>❌ <strong>CANNOT</strong> earn commissions</li>
              <li>❌ <strong>CANNOT</strong> represent yourself as licensed agent</li>
              <li>❌ <strong>CANNOT</strong> work on deals that started before suspension</li>
              <li>✅ <strong>CAN</strong> work on getting reinstated (if suspension)</li>
              <li>✅ <strong>MUST</strong> notify broker immediately</li>
              <li>✅ <strong>MUST</strong> notify clients on active deals</li>
            </ul>

            <h5>Reinstatement After Suspension:</h5>
            <ol>
              <li>Complete all requirements imposed by Board</li>
              <li>Submit proof of compliance</li>
              <li>Pay any fines or fees</li>
              <li>Apply for reinstatement in writing</li>
              <li>Wait for Board approval</li>
              <li>Receive reinstated license</li>
              <li>Can resume practice</li>
            </ol>
          </div>

          <h4>Common Reasons for License Suspension/Revocation:</h4>
          <table>
            <thead>
              <tr>
                <th>Violation</th>
                <th>Typical Penalty</th>
                <th>Prevention</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Failure to complete CE</td>
                <td>Suspension until complete</td>
                <td>Track CE hours, complete early</td>
              </tr>
              <tr>
                <td>Criminal conviction (serious)</td>
                <td>Revocation</td>
                <td>Don't commit crimes!</td>
              </tr>
              <tr>
                <td>Fraud/misrepresentation</td>
                <td>Suspension or revocation</td>
                <td>Always be honest</td>
              </tr>
              <tr>
                <td>Embezzlement</td>
                <td>Revocation + criminal charges</td>
                <td>Never touch client funds improperly</td>
              </tr>
              <tr>
                <td>Chapter 93A violation (repeated)</td>
                <td>Suspension</td>
                <td>Follow consumer protection laws</td>
              </tr>
              <tr>
                <td>Fair Housing violation</td>
                <td>Suspension + fines</td>
                <td>Never discriminate</td>
              </tr>
              <tr>
                <td>Practicing without license</td>
                <td>Fines + possible criminal charges</td>
                <td>Keep license active and renewed</td>
              </tr>
              <tr>
                <td>Failure to report conviction</td>
                <td>Suspension + additional penalties</td>
                <td>Report within 30 days</td>
              </tr>
            </tbody>
          </table>

          <div className="licensing-summary">
            <h4>🎯 Key Takeaways - Licensing Compliance:</h4>
            <ul>
              <li>✅ <strong>Report ANY conviction within 30 days</strong> - no exceptions!</li>
              <li>✅ <strong>Never fake CE completion</strong> - career suicide</li>
              <li>✅ <strong>Surrender license within 7 days if suspended/revoked</strong></li>
              <li>✅ <strong>Keep license active and in good standing</strong></li>
              <li>✅ <strong>Cooperate with the Board</strong> - honesty helps your case</li>
              <li>✅ <strong>Don't practice during suspension</strong> - serious consequences</li>
              <li>✅ <strong>Track CE hours religiously</strong> - don't let them lapse</li>
              <li>✅ <strong>Report violations to broker immediately</strong></li>
            </ul>

            <p className="warning">
              <strong>⚠️ The Board Takes These Seriously:</strong> License violations are not minor issues. 
              The Board has the power to end your real estate career. Follow ALL requirements to the letter. 
              When in doubt, over-report and over-comply. Your license is your livelihood - protect it!
            </p>
          </div>

          <h4>⚠️ Complete List: Suspension or Refusal to Renew License</h4>
          <div className="suspension-reasons">
            <p className="warning">
              <strong>The following violations can result in license suspension, revocation, or refusal to renew:</strong>
            </p>

            <div className="violation-list">
              <div className="violation-item">
                <h5>1. DUTY TO PRESENT ALL OFFERS</h5>
                <p className="warning">
                  <strong>Agent must present all offers immediately unless other arrangements have been made 
                  between Seller & Listing Agent.</strong>
                </p>
                <ul>
                  <li><strong>Rule:</strong> Every offer must be presented to seller promptly</li>
                  <li><strong>Exception:</strong> Only if seller and listing agent have written agreement otherwise</li>
                  <li><strong>Cannot:</strong> Withhold offers because you think they're too low</li>
                  <li><strong>Cannot:</strong> Delay presenting offers to favor another buyer</li>
                  <li><strong>Must:</strong> Present offers even if property is under agreement (backup offers)</li>
                  <li><strong>Violation:</strong> Breach of fiduciary duty to seller</li>
                  <li><strong>Penalty:</strong> License suspension, fines, lawsuit from seller</li>
                </ul>
              </div>

              <div className="violation-item">
                <h5>2. IMPAIRMENT - Drugs & Alcohol</h5>
                <p className="warning">
                  <strong>Cannot practice real estate impaired by drugs & or alcohol</strong>
                </p>
                <ul>
                  <li><strong>Rule:</strong> Must be sober and mentally competent while performing RE duties</li>
                  <li><strong>Includes:</strong> Showing properties, meetings, negotiations, signings</li>
                  <li><strong>Cannot:</strong> Work under influence of drugs (illegal or prescription)</li>
                  <li><strong>Cannot:</strong> Work under influence of alcohol</li>
                  <li><strong>Penalty:</strong> Immediate license suspension, potential permanent revocation</li>
                  <li><strong>Liability:</strong> Civil liability for damages caused while impaired</li>
                </ul>
              </div>

              <div className="violation-item">
                <h5>3. CONFLICTS OF INTEREST</h5>
                <p className="warning">
                  <strong>If don't disclose personal or family interest in the transaction</strong>
                </p>
                <ul>
                  <li><strong>Rule:</strong> Must disclose ANY personal or family interest</li>
                  <li><strong>Examples:</strong>
                    <ul>
                      <li>You or family member is buyer/seller</li>
                      <li>You own the property being sold</li>
                      <li>You have financial interest in transaction</li>
                      <li>Family member has interest in transaction</li>
                    </ul>
                  </li>
                  <li><strong>Must:</strong> Disclose in writing before any agreements signed</li>
                  <li><strong>Cannot:</strong> Hide your interest and act as neutral agent</li>
                  <li><strong>Penalty:</strong> License suspension, commission forfeiture, Chapter 93A liability</li>
                </ul>
              </div>

              <div className="violation-item">
                <h5>4. DUAL AGENCY WITHOUT CONSENT</h5>
                <p className="warning">
                  <strong>Acted as Dual Agency or other capacity without both Buyer & Sellers written consent</strong>
                </p>
                <ul>
                  <li><strong>Rule:</strong> MUST have written consent from BOTH parties for dual agency</li>
                  <li><strong>Cannot:</strong> Represent both sides without full disclosure and written consent</li>
                  <li><strong>Required:</strong>
                    <ul>
                      <li>MA Mandatory Agency Disclosure Form</li>
                      <li>Dual Agency Disclosure Form</li>
                      <li>Written consent from buyer</li>
                      <li>Written consent from seller</li>
                    </ul>
                  </li>
                  <li><strong>Violation:</strong> Undisclosed dual agency = serious ethical and legal breach</li>
                  <li><strong>Penalty:</strong> License suspension/revocation, lawsuit, triple damages</li>
                </ul>
              </div>

              <div className="violation-item">
                <h5>5. ESCROW VIOLATIONS</h5>
                <p className="warning">
                  <strong>Failure to account or remit escrow money</strong>
                </p>
                <ul>
                  <li><strong>Rule:</strong> All deposits must be placed in escrow account immediately</li>
                  <li><strong>Cannot:</strong> Delay depositing client funds</li>
                  <li><strong>Cannot:</strong> Use client funds for own purposes (commingling)</li>
                  <li><strong>Cannot:</strong> Fail to return funds when required</li>
                  <li><strong>Must:</strong> Keep accurate records of all escrow transactions</li>
                  <li><strong>Must:</strong> Remit funds promptly per agreement</li>
                  <li><strong>Violation:</strong> Conversion of funds = theft</li>
                  <li><strong>Penalty:</strong> License revocation, criminal charges, restitution</li>
                </ul>
              </div>

              <div className="violation-item">
                <h5>6. PAYING NON-LICENSEES</h5>
                <p className="warning">
                  <strong>Paid commissions to non-licensees</strong>
                </p>
                <ul>
                  <li><strong>Rule:</strong> Can ONLY pay commissions to licensed real estate professionals</li>
                  <li><strong>Cannot:</strong> Pay referral fees to unlicensed individuals</li>
                  <li><strong>Cannot:</strong> Split commission with unlicensed person</li>
                  <li><strong>Cannot:</strong> Give "finder's fees" to unlicensed bird dogs</li>
                  <li><strong>Exception:</strong> Can give gifts (small value, not tied to transaction)</li>
                  <li><strong>Violation:</strong> Aiding unlicensed practice of real estate</li>
                  <li><strong>Penalty:</strong> License suspension, fines, commission forfeiture</li>
                </ul>
              </div>

              <div className="violation-item">
                <h5>7. UNDISCLOSED COMPENSATION</h5>
                <p className="warning">
                  <strong>Accepted, gave or charged any undisclosed commission, rebate or profit on 
                  expenditures for a principal.</strong>
                </p>
                <ul>
                  <li><strong>Rule:</strong> ALL compensation must be disclosed to your client</li>
                  <li><strong>Cannot:</strong> Receive kickbacks from vendors without disclosure</li>
                  <li><strong>Cannot:</strong> Mark up services and pocket difference</li>
                  <li><strong>Cannot:</strong> Accept referral fees from inspectors, contractors without disclosure</li>
                  <li><strong>Must:</strong> Disclose any financial benefit you receive</li>
                  <li><strong>Example:</strong> Inspector pays you $100 for referral → MUST disclose to client</li>
                  <li><strong>Violation:</strong> Breach of fiduciary duty (Accounting)</li>
                  <li><strong>Penalty:</strong> License suspension, return of hidden profits, lawsuits</li>
                </ul>
              </div>

              <div className="violation-item">
                <h5>8. INDUCING BREACH OF CONTRACT</h5>
                <p className="warning">
                  <strong>Induced or assisted any party in breaking a contract or listing agreement for 
                  personal gain</strong>
                </p>
                <ul>
                  <li><strong>Rule:</strong> Cannot encourage breach of existing agreements</li>
                  <li><strong>Cannot:</strong> Tell buyer to back out of deal so they can use you instead</li>
                  <li><strong>Cannot:</strong> Convince seller to break listing with another agent</li>
                  <li><strong>Cannot:</strong> Help client avoid contractual obligations for your benefit</li>
                  <li><strong>Violation:</strong> Tortious interference with contract</li>
                  <li><strong>Penalty:</strong> License suspension, lawsuit from other agent, damages</li>
                </ul>
              </div>

              <div className="violation-item">
                <h5>9. FAILURE TO PROVIDE COPIES</h5>
                <p className="warning">
                  <strong>Failed to give buyer or seller a copy of the P&S (Listing Agreements & Buyer Broker 
                  Agreements must also be given to respective clients when executed)</strong>
                </p>
                <ul>
                  <li><strong>Rule:</strong> Clients MUST receive copies of all signed documents</li>
                  <li><strong>Must Provide Immediately:</strong>
                    <ul>
                      <li>Listing agreement (to seller)</li>
                      <li>Buyer broker agreement (to buyer)</li>
                      <li>Purchase & Sale agreement (to both)</li>
                      <li>Any amendments or addendums</li>
                    </ul>
                  </li>
                  <li><strong>When:</strong> At time of execution (when signed)</li>
                  <li><strong>Cannot:</strong> Delay providing copies</li>
                  <li><strong>Violation:</strong> Deprives clients of their rights</li>
                  <li><strong>Penalty:</strong> License suspension, Chapter 93A violation</li>
                </ul>
              </div>

              <div className="violation-item">
                <h5>10. NET LISTING PROHIBITION (Comprehensive Explanation)</h5>
                <p className="warning">
                  <strong>Accepted a Net Listing - ILLEGAL IN MASSACHUSETTS</strong>
                </p>

                <h6>📋 What is a Net Listing?</h6>
                <div className="net-listing-definition">
                  <p className="highlight">
                    <strong>Net Listing:</strong> A listing agreement where the seller specifies a minimum "net" 
                    amount they want to receive, and the agent keeps everything above that amount as their commission.
                  </p>
                  <p><strong>Structure:</strong> Seller receives fixed amount, agent commission is unlimited (whatever they can get above the net)</p>
                </div>

                <h6>💰 How Net Listings Work (Example Scenarios):</h6>
                <div className="net-listing-examples">
                  <p><strong>Example 1: Basic Net Listing</strong></p>
                  <ul>
                    <li>Seller says: "I want $200,000 net from the sale"</li>
                    <li>Agent lists property for $250,000</li>
                    <li>Property sells for $250,000</li>
                    <li>Seller receives: $200,000 (their net)</li>
                    <li>Agent receives: $50,000 (everything above the net = 20% commission!)</li>
                  </ul>

                  <p><strong>Example 2: Agent Gets Even More</strong></p>
                  <ul>
                    <li>Seller says: "I want $300,000 net from the sale"</li>
                    <li>Agent lists property for $350,000</li>
                    <li>Property actually worth $400,000 (agent knows this)</li>
                    <li>Property sells for $400,000</li>
                    <li>Seller receives: $300,000 (their net)</li>
                    <li>Agent receives: $100,000 (25% commission!)</li>
                    <li><strong>Problem:</strong> Agent had NO incentive to tell seller property was worth $400k</li>
                  </ul>

                  <p><strong>Example 3: Multiple Offers Scenario</strong></p>
                  <ul>
                    <li>Seller wants $250,000 net</li>
                    <li>Offer A: $280,000 (agent makes $30,000)</li>
                    <li>Offer B: $320,000 (agent makes $70,000)</li>
                    <li><strong>Conflict:</strong> Agent is tempted to push for lower offer because they make more money!</li>
                    <li>If commission was 5%, agent would make $14,000 on A or $16,000 on B (clear incentive for higher price)</li>
                    <li>With net listing, agent makes MORE on lower offer (reversed incentive!)</li>
                  </ul>
                </div>

                <h6>🚫 Why Net Listings are ILLEGAL in Massachusetts:</h6>
                <div className="net-listing-reasons">
                  <p className="warning">
                    <strong>Net listings create inherent conflicts of interest that are fundamentally incompatible 
                    with an agent's fiduciary duty to their client.</strong>
                  </p>

                  <p><strong>1. Agent Benefits from Getting LESS for Seller</strong></p>
                  <ul>
                    <li>If property worth $400k but seller only wants $300k net</li>
                    <li>Agent can list at $350k and keep $50k (14% commission)</li>
                    <li>Or agent lists at $300k and keeps $0 (seller gets true value)</li>
                    <li><strong>Incentive:</strong> Agent profits from seller's ignorance of true value</li>
                  </ul>

                  <p><strong>2. Violates Fiduciary Duty of Loyalty</strong></p>
                  <ul>
                    <li>Agent's duty: Get highest price possible for seller</li>
                    <li>Net listing: Agent makes more when sale price is lower relative to true value</li>
                    <li>Direct conflict between agent's interest and seller's interest</li>
                  </ul>

                  <p><strong>3. Encourages Fraud and Misrepresentation</strong></p>
                  <ul>
                    <li>Agent has incentive to LOW-BALL the comparative market analysis (CMA)</li>
                    <li>Agent might tell seller property worth $300k when it's worth $400k</li>
                    <li>Seller sets net at $280k thinking they're getting good deal</li>
                    <li>Agent sells for $400k and pockets $120k (30% commission!)</li>
                    <li>Seller never knows they were cheated</li>
                  </ul>

                  <p><strong>4. Unlimited Commission Potential</strong></p>
                  <ul>
                    <li>Normal commission: 5-6% regardless of sale price</li>
                    <li>Net listing: Commission can be 10%, 20%, 50% or more!</li>
                    <li>No transparency in compensation</li>
                    <li>Seller doesn't know how much agent is making</li>
                  </ul>

                  <p><strong>5. Preys on Unsophisticated Sellers</strong></p>
                  <ul>
                    <li>Sellers who don't know market value are vulnerable</li>
                    <li>Desperate sellers in foreclosure or financial distress targeted</li>
                    <li>Elderly sellers who trust agent may be exploited</li>
                    <li>Net listings are a tool for predatory practices</li>
                  </ul>

                  <p><strong>6. Undermines Public Trust in Real Estate Profession</strong></p>
                  <ul>
                    <li>Creates appearance of impropriety</li>
                    <li>Makes all agents look like they're trying to cheat sellers</li>
                    <li>Consumer protection concern</li>
                  </ul>
                </div>

                <h6>⚖️ Legal Status in Massachusetts:</h6>
                <ul>
                  <li><strong>Illegal:</strong> Net listings are expressly prohibited</li>
                  <li><strong>Automatic Violation:</strong> Even if seller agrees, still illegal</li>
                  <li><strong>Cannot Be Waived:</strong> Seller cannot waive this protection</li>
                  <li><strong>Criminal vs Civil:</strong> May be both licensing violation AND consumer fraud</li>
                </ul>

                <h6>⚠️ Consequences of Using Net Listing:</h6>
                <div className="net-listing-penalties">
                  <p className="warning"><strong>License Penalties:</strong></p>
                  <ul>
                    <li>License suspension (immediate)</li>
                    <li>Potential license revocation</li>
                    <li>Fines from Board of Registration</li>
                    <li>Permanent record of violation</li>
                  </ul>

                  <p className="warning"><strong>Financial Penalties:</strong></p>
                  <ul>
                    <li>Commission forfeiture (must return ALL commission)</li>
                    <li>Chapter 93A liability (consumer protection - triple damages)</li>
                    <li>Lawsuit from seller for breach of fiduciary duty</li>
                    <li>Punitive damages if fraud involved</li>
                  </ul>

                  <p className="warning"><strong>Criminal Consequences:</strong></p>
                  <ul>
                    <li>Fraud charges if misrepresented value</li>
                    <li>Theft by deception</li>
                    <li>Criminal penalties on top of civil</li>
                  </ul>
                </div>

                <h6>✅ LEGAL Alternatives to Net Listings:</h6>
                <div className="legal-alternatives">
                  <p className="highlight">
                    <strong>If seller wants guaranteed minimum amount, use these LEGAL approaches:</strong>
                  </p>

                  <p><strong>1. Guaranteed Sale Program (with contingencies)</strong></p>
                  <ul>
                    <li>Agent offers to buy property for $X if doesn't sell</li>
                    <li>Must be separate contract, not part of listing</li>
                    <li>Must have contingencies and escape clauses</li>
                    <li>Commission still calculated as percentage, not net</li>
                  </ul>

                  <p><strong>2. Standard Percentage Commission</strong></p>
                  <ul>
                    <li><strong>Example:</strong> 5% commission regardless of price</li>
                    <li>Seller wants $200k net, list at $210,526 (so after 5% commission = $200k net)</li>
                    <li>If sells for more, seller gets more (and agent commission increases too)</li>
                    <li><strong>Key Difference:</strong> Both agent AND seller benefit from higher price</li>
                  </ul>

                  <p><strong>3. Flat Fee Commission</strong></p>
                  <ul>
                    <li><strong>Example:</strong> Agent charges $10,000 flat fee regardless of price</li>
                    <li>Seller wants $200k net, list at $210,000</li>
                    <li>If sells for $250,000, seller gets $240,000 (agent still gets $10k)</li>
                    <li><strong>Key Difference:</strong> Agent's compensation is fixed, no incentive to manipulate price</li>
                  </ul>

                  <p><strong>4. Tiered Commission Structure</strong></p>
                  <ul>
                    <li><strong>Example:</strong> 5% on first $300k, 3% on anything above</li>
                    <li>Still percentage-based, but structured differently</li>
                    <li>Legal as long as disclosed and agent still wants highest price</li>
                  </ul>

                  <p><strong>5. Explain Market Value and Set Realistic Expectations</strong></p>
                  <ul>
                    <li>Provide accurate CMA showing true market value</li>
                    <li>Explain closing costs, commission, net proceeds</li>
                    <li>Use standard listing agreement with percentage commission</li>
                    <li>Seller understands what they'll net AFTER standard commission</li>
                  </ul>
                </div>

                <h6>❌ Common Misconceptions About Net Listings:</h6>
                <div className="net-listing-myths">
                  <p><strong>Myth 1: "If the seller agrees, it's okay"</strong></p>
                  <ul>
                    <li>❌ <strong>FALSE:</strong> Net listings are illegal even with seller consent</li>
                    <li>It's a consumer protection law - cannot be waived</li>
                  </ul>

                  <p><strong>Myth 2: "It benefits the seller because they know what they'll get"</strong></p>
                  <ul>
                    <li>❌ <strong>FALSE:</strong> Seller knows minimum but doesn't know if agent is hiding true value</li>
                    <li>Seller might accept $200k net when property worth $300k</li>
                    <li>False sense of security</li>
                  </ul>

                  <p><strong>Myth 3: "It motivates the agent to get the highest price"</strong></p>
                  <ul>
                    <li>❌ <strong>FALSE:</strong> Agent profits MORE from hiding true value and listing low</li>
                    <li>Agent makes 100% of amount above net, not just 5-6%</li>
                    <li>Perverse incentive</li>
                  </ul>

                  <p><strong>Myth 4: "It's only illegal if the seller doesn't know"</strong></p>
                  <ul>
                    <li>❌ <strong>FALSE:</strong> Illegal regardless of disclosure</li>
                    <li>Even if seller fully understands, still prohibited</li>
                  </ul>

                  <p><strong>Myth 5: "I can use net listing in other states"</strong></p>
                  <ul>
                    <li>⚠️ <strong>DEPENDS:</strong> Some states allow net listings with heavy disclosure</li>
                    <li>But MA prohibits them completely</li>
                    <li>Know the law in your state</li>
                  </ul>
                </div>

                <h6>🎯 Bottom Line on Net Listings:</h6>
                <div className="net-listing-summary">
                  <p className="warning">
                    <strong>NEVER use a net listing in Massachusetts. It is automatic license suspension.</strong>
                  </p>
                  <ul>
                    <li><strong>Why They Exist:</strong> Seem to benefit both parties on surface</li>
                    <li><strong>Why They're Illegal:</strong> Create unavoidable conflicts of interest</li>
                    <li><strong>What to Use Instead:</strong> Percentage commission or flat fee</li>
                    <li><strong>If Seller Asks:</strong> Explain why illegal and offer legal alternatives</li>
                    <li><strong>Your Duty:</strong> Get highest price possible with transparent, legal compensation</li>
                  </ul>
                  <p className="highlight">
                    <strong>Real-World Advice:</strong> If a seller says "I just want $X net," calculate what list 
                    price would net them $X after a standard percentage commission. Market at that price with 
                    standard commission structure. This achieves their goal legally while maintaining your 
                    fiduciary duty to get them the highest possible price.
                  </p>
                </div>
              </div>

              <div className="violation-item">
                <h5>11. OUT-OF-STATE PROPERTY VIOLATIONS</h5>
                <p className="warning">
                  <strong>Engaged in sale of real property located in a land development in another state 
                  that was promoted or advertised in Massachusetts without the owner/developer complying 
                  with all filing requirements.</strong>
                </p>
                <ul>
                  <li><strong>Rule:</strong> Out-of-state developers must register with MA before marketing here</li>
                  <li><strong>Cannot:</strong> Market out-of-state development without proper filings</li>
                  <li><strong>Cannot:</strong> Help developer avoid MA registration requirements</li>
                  <li><strong>Must:</strong> Verify developer has complied with MA laws</li>
                  <li><strong>Violation:</strong> Consumer protection violation</li>
                  <li><strong>Penalty:</strong> License suspension, fines</li>
                </ul>
              </div>

              <div className="violation-item">
                <h5>12. LAPSED LICENSE</h5>
                <p className="warning">
                  <strong>Cannot practice with lapsed license</strong>
                </p>
                <ul>
                  <li><strong>Rule:</strong> License must be current and active</li>
                  <li><strong>Cannot:</strong> Work during renewal period if not renewed</li>
                  <li><strong>Cannot:</strong> Complete transactions started before lapse</li>
                  <li><strong>Cannot:</strong> Claim "I'm renewing it" as excuse</li>
                  <li><strong>Must:</strong> Renew BEFORE expiration</li>
                  <li><strong>Commission:</strong> Cannot collect commission for work done while lapsed</li>
                  <li><strong>Violation:</strong> Practicing without license</li>
                  <li><strong>Penalty:</strong> Fines, cannot collect commission, license issues</li>
                </ul>
              </div>

              <div className="violation-item">
                <h5>13. RENTAL APARTMENT ADVERTISING</h5>
                <p className="warning">
                  <strong>Advertisement regarding availability of an apartment for rent must contain 
                  following language: "the apartment advertised may no longer be available for rent."</strong>
                </p>
                <ul>
                  <li><strong>Rule:</strong> All rental ads MUST include this disclaimer</li>
                  <li><strong>Exact Language Required:</strong> "the apartment advertised may no longer be available for rent."</li>
                  <li><strong>Why:</strong> Prevents bait-and-switch tactics</li>
                  <li><strong>Applies To:</strong> All rental apartment advertising</li>
                  <li><strong>Cannot:</strong> Advertise rental apartments without this disclaimer</li>
                  <li><strong>Violation:</strong> Consumer protection violation</li>
                  <li><strong>Penalty:</strong> Fines, license suspension for repeated violations</li>
                </ul>
              </div>

              <div className="violation-item">
                <h5>14. DISCRIMINATION VIOLATIONS (M.G.L. c. 151B)</h5>
                <p className="warning">
                  <strong>Persons committed unlawful discrimination in violation of M.G.L. c. 151B, license 
                  will be suspended for 60 days. If occurred within 2 years of prior violation, suspended 
                  for 90 days.</strong>
                </p>
                <ul>
                  <li><strong>First Violation:</strong> 60-day suspension (mandatory)</li>
                  <li><strong>Second Violation (within 2 years):</strong> 90-day suspension (mandatory)</li>
                  <li><strong>What Counts:</strong>
                    <ul>
                      <li>Fair Housing violations</li>
                      <li>Discrimination based on protected classes</li>
                      <li>Steering, blockbusting, redlining</li>
                      <li>Discriminatory advertising</li>
                      <li>Refusing to show properties based on protected class</li>
                    </ul>
                  </li>
                  <li><strong>Cannot:</strong> Discriminate in any way</li>
                  <li><strong>Violation:</strong> Civil rights violation</li>
                  <li><strong>Penalty:</strong> Mandatory suspension, fines up to $100,000+, civil lawsuit</li>
                  <li><strong>Career Ending:</strong> Multiple violations = permanent revocation likely</li>
                </ul>
              </div>
            </div>

            <div className="suspension-summary">
              <h4>🎯 Suspension/Refusal to Renew Summary:</h4>
              <p className="warning">
                <strong>ANY of these violations can result in license suspension, revocation, or refusal 
                to renew. The Board takes ALL violations seriously. Your license is a PRIVILEGE, not a right. 
                Follow all laws, rules, and ethical standards. When in doubt, consult your broker or an attorney.</strong>
              </p>
              <p className="highlight">
                <strong>Most Common Violations:</strong> Failure to present all offers, undisclosed dual agency, 
                escrow violations, paying non-licensees, and discrimination. Avoid these at all costs!
              </p>
            </div>
          </div>

          <h4>⚖️ Enforcement of Board Investigations - Due Process Procedures</h4>
          <div className="board-investigations">
            <p className="highlight">
              <strong>If the Board receives a complaint against you, there is a formal investigation and hearing 
              process. Understanding your rights and the procedures is critical.</strong>
            </p>

            <div className="investigation-procedures">
              <div className="procedure-step">
                <h5>📝 Step 1: Complaint Must Be in Writing</h5>
                <p className="warning">
                  <strong>All complaints must be in writing and signed by complainant</strong>
                </p>
                <ul>
                  <li><strong>Written Requirement:</strong> Verbal complaints are not accepted</li>
                  <li><strong>Signed by Complainant:</strong> Must have signature of person making complaint</li>
                  <li><strong>Why:</strong> Prevents frivolous or anonymous accusations</li>
                  <li><strong>Details Required:</strong>
                    <ul>
                      <li>Name and contact info of complainant</li>
                      <li>Name of licensee being complained about</li>
                      <li>Description of alleged violation</li>
                      <li>Dates, locations, and specific facts</li>
                      <li>Supporting documentation if available</li>
                    </ul>
                  </li>
                  <li><strong>Who Can Complain:</strong> Anyone (clients, other agents, public, Board initiated)</li>
                  <li><strong>Board Review:</strong> Board reviews complaint for merit before proceeding</li>
                </ul>
                <p className="highlight">
                  <strong>Note:</strong> The Board can also initiate investigations on its own without a complaint 
                  if it becomes aware of potential violations (e.g., through audits, inspections, or other means).
                </p>
              </div>

              <div className="procedure-step">
                <h5>📅 Step 2: Hearing Upon 10 Days Notice</h5>
                <p className="warning">
                  <strong>Hearing upon 10 days notice to person being charged</strong>
                </p>
                <ul>
                  <li><strong>Notice Requirement:</strong> Board must give you at least 10 days advance notice</li>
                  <li><strong>Notice Contents:</strong>
                    <ul>
                      <li>Date, time, and location of hearing</li>
                      <li>Specific charges against you</li>
                      <li>Your rights at the hearing</li>
                      <li>Potential penalties</li>
                    </ul>
                  </li>
                  <li><strong>Delivery Method:</strong> Certified mail to your address on file with Board</li>
                  <li><strong>10-Day Minimum:</strong> Gives you time to prepare defense</li>
                  <li><strong>Your Rights:</strong>
                    <ul>
                      <li>Right to be represented by attorney</li>
                      <li>Right to present evidence</li>
                      <li>Right to cross-examine witnesses</li>
                      <li>Right to testify on your own behalf</li>
                      <li>Right to bring witnesses</li>
                    </ul>
                  </li>
                </ul>
                <p className="highlight">
                  <strong>⚠️ STRONGLY RECOMMENDED:</strong> Hire an attorney who specializes in real estate 
                  licensing defense. Board hearings are serious legal proceedings. Do not go alone.
                </p>
              </div>

              <div className="procedure-step">
                <h5>🛡️ Step 3: No Action Until After Hearing & Finding</h5>
                <p className="warning">
                  <strong>No refusal to renew of license or face suspension until after hearing is conducted 
                  & finding issued</strong>
                </p>
                <ul>
                  <li><strong>Due Process Protection:</strong> You cannot be punished before hearing</li>
                  <li><strong>License Remains Active:</strong> You can continue working until Board issues finding</li>
                  <li><strong>Exception:</strong> Board may impose emergency suspension if public safety at risk</li>
                  <li><strong>Hearing Must Occur:</strong> Board must conduct formal hearing</li>
                  <li><strong>Finding Must Be Issued:</strong> Board must make written decision</li>
                  <li><strong>Timeline:</strong> Can take months from complaint to final finding</li>
                  <li><strong>During Investigation:</strong>
                    <ul>
                      <li>Continue working normally</li>
                      <li>Maintain professional conduct</li>
                      <li>Do NOT destroy evidence or documents</li>
                      <li>Cooperate with Board (but through attorney)</li>
                      <li>Do NOT discuss case publicly or on social media</li>
                    </ul>
                  </li>
                </ul>
                <p className="warning">
                  <strong>Emergency Suspension:</strong> In rare cases involving immediate danger to public 
                  (e.g., ongoing fraud, theft of client funds, violent behavior), Board can impose immediate 
                  emergency suspension pending full hearing. This is extremely rare.
                </p>
              </div>

              <div className="procedure-step">
                <h5>📚 Step 4: Board's Investigative Powers</h5>
                <p className="warning">
                  <strong>Board may summons witnesses & books / papers</strong>
                </p>
                <ul>
                  <li><strong>Subpoena Power:</strong> Board has legal authority to compel evidence</li>
                  <li><strong>Can Summon:</strong>
                    <ul>
                      <li>Witnesses to testify under oath</li>
                      <li>Documents and records</li>
                      <li>Electronic files and communications</li>
                      <li>Financial records</li>
                      <li>Transaction files</li>
                    </ul>
                  </li>
                  <li><strong>Must Comply:</strong> Failing to respond to Board summons is separate violation</li>
                  <li><strong>What Board Can Request:</strong>
                    <ul>
                      <li>Listing agreements and buyer broker agreements</li>
                      <li>Purchase & sale agreements</li>
                      <li>Escrow records</li>
                      <li>Commission records</li>
                      <li>Emails and text messages</li>
                      <li>Advertising materials</li>
                      <li>CE certificates</li>
                      <li>Any documents related to complaint</li>
                    </ul>
                  </li>
                  <li><strong>Production Timeline:</strong> Must produce within time specified in summons</li>
                  <li><strong>Privilege:</strong> Attorney-client communications may be privileged (consult lawyer)</li>
                </ul>
                <p className="highlight">
                  <strong>Best Practice:</strong> Work with your attorney to organize and produce all requested 
                  documents. Do NOT alter, destroy, or hide evidence - this will make things much worse.
                </p>
              </div>

              <div className="procedure-step">
                <h5>⚖️ Step 5: Compelling Witness Testimony</h5>
                <p className="warning">
                  <strong>If witness fails to show up, Superior Court can issue an order for them to appear.</strong>
                </p>
                <ul>
                  <li><strong>Court Enforcement:</strong> Board can go to Superior Court for help</li>
                  <li><strong>When Used:</strong> If witness ignores Board summons</li>
                  <li><strong>Court Order:</strong> Superior Court can issue order to compel appearance</li>
                  <li><strong>Contempt of Court:</strong> Failing to comply with court order = contempt</li>
                  <li><strong>Penalties for Non-Compliance:</strong>
                    <ul>
                      <li>Fines</li>
                      <li>Jail time (for contempt)</li>
                      <li>Additional license penalties if you're the licensee</li>
                    </ul>
                  </li>
                  <li><strong>Applies to Anyone:</strong> Includes other agents, brokers, clients, vendors</li>
                </ul>
                <p className="warning">
                  <strong>If You're Summoned as Witness:</strong> You MUST appear or face legal consequences. 
                  If you have concerns about testifying, consult an attorney but do not simply ignore the summons.
                </p>
              </div>

              <div className="procedure-step">
                <h5>✍️ Step 6: Board Decision Requirements</h5>
                <p className="warning">
                  <strong>Decision of board must be by majority, in writing and signed by all members. 
                  Copies sent to each interested party.</strong>
                </p>
                <ul>
                  <li><strong>Majority Vote:</strong> More than half of Board members must agree</li>
                  <li><strong>Written Decision Required:</strong> Oral decisions not valid</li>
                  <li><strong>Signed by ALL Members:</strong> Every Board member must sign (even dissenters)</li>
                  <li><strong>Decision Must Include:</strong>
                    <ul>
                      <li>Findings of fact (what happened)</li>
                      <li>Conclusions of law (which rules were violated)</li>
                      <li>Reasoning for decision</li>
                      <li>Penalty or dismissal</li>
                      <li>Effective date</li>
                    </ul>
                  </li>
                  <li><strong>Copies Sent To:</strong>
                    <ul>
                      <li>Licensee being charged</li>
                      <li>Licensee's attorney (if represented)</li>
                      <li>Complainant</li>
                      <li>Any other interested parties</li>
                    </ul>
                  </li>
                  <li><strong>Service Method:</strong> Certified mail or hand delivery</li>
                  <li><strong>Public Record:</strong> Decision becomes public record</li>
                </ul>
                <p className="highlight">
                  <strong>Possible Outcomes:</strong>
                  <ul>
                    <li>Dismissal (no violation found)</li>
                    <li>Letter of reprimand (warning, no suspension)</li>
                    <li>Fine (monetary penalty)</li>
                    <li>Suspension (temporary loss of license - 30/60/90 days or more)</li>
                    <li>Revocation (permanent loss of license)</li>
                    <li>Conditions (probation, additional CE, supervision, etc.)</li>
                  </ul>
                </p>
              </div>

              <div className="procedure-step">
                <h5>📞 Step 7: Right to Appeal</h5>
                <p className="warning">
                  <strong>Decision may be appealed to Superior Court within 20 days following notification 
                  of decision</strong>
                </p>
                <ul>
                  <li><strong>20-Day Deadline:</strong> Must file appeal within 20 days of receiving decision</li>
                  <li><strong>Strictly Enforced:</strong> Miss deadline = lose right to appeal</li>
                  <li><strong>Count From:</strong> Date you received written decision (not date it was issued)</li>
                  <li><strong>Where to Appeal:</strong> Massachusetts Superior Court</li>
                  <li><strong>Appeal Process:</strong>
                    <ul>
                      <li>File notice of appeal with Superior Court</li>
                      <li>Serve copy on Board of Registration</li>
                      <li>Pay filing fees</li>
                      <li>Submit record of proceedings</li>
                      <li>File appellate brief</li>
                    </ul>
                  </li>
                  <li><strong>Standard of Review:</strong>
                    <ul>
                      <li>Was Board decision supported by substantial evidence?</li>
                      <li>Did Board follow proper procedures?</li>
                      <li>Was decision arbitrary or capricious?</li>
                      <li>Court does NOT re-hear case, only reviews Board's process</li>
                    </ul>
                  </li>
                  <li><strong>During Appeal:</strong>
                    <ul>
                      <li>License suspension/revocation typically NOT stayed (remains in effect)</li>
                      <li>Can request stay from court (requires showing of harm and likelihood of success)</li>
                      <li>Appeal can take 6-18 months</li>
                    </ul>
                  </li>
                  <li><strong>Appeal Outcomes:</strong>
                    <ul>
                      <li>Affirm Board decision (Board wins)</li>
                      <li>Reverse Board decision (you win)</li>
                      <li>Remand to Board for new hearing (do over)</li>
                      <li>Modify penalty (reduce suspension, etc.)</li>
                    </ul>
                  </li>
                </ul>
                <p className="warning">
                  <strong>⚠️ CRITICAL:</strong> Do NOT miss the 20-day appeal deadline! Mark it on your 
                  calendar immediately when you receive the decision. Consult an appellate attorney right away.
                </p>
              </div>
            </div>

            <div className="investigation-timeline">
              <h5>⏱️ Typical Investigation Timeline:</h5>
              <ul>
                <li><strong>Complaint Filed:</strong> Day 0</li>
                <li><strong>Board Review:</strong> 2-8 weeks (Board decides if complaint has merit)</li>
                <li><strong>Investigation:</strong> 2-6 months (Board gathers evidence)</li>
                <li><strong>Notice of Hearing:</strong> At least 10 days before hearing</li>
                <li><strong>Hearing:</strong> 1 day to several days depending on complexity</li>
                <li><strong>Decision:</strong> 4-12 weeks after hearing</li>
                <li><strong>Total Time:</strong> 6 months to 2+ years from complaint to final decision</li>
                <li><strong>If Appealed:</strong> Add 6-18 months</li>
              </ul>
            </div>

            <div className="investigation-best-practices">
              <h5>🎯 What to Do If You Receive a Board Complaint:</h5>
              <ol>
                <li><strong>DO NOT PANIC</strong> - Having a complaint filed doesn't mean you're guilty</li>
                <li><strong>HIRE AN ATTORNEY IMMEDIATELY</strong> - Specializing in real estate licensing defense</li>
                <li><strong>DO NOT CONTACT COMPLAINANT</strong> - Can make things worse</li>
                <li><strong>PRESERVE ALL EVIDENCE</strong> - Do not delete emails, texts, documents</li>
                <li><strong>NOTIFY YOUR BROKER</strong> - They need to know</li>
                <li><strong>NOTIFY YOUR E&O INSURANCE</strong> - May cover legal fees</li>
                <li><strong>DO NOT DISCUSS PUBLICLY</strong> - No social media posts about the case</li>
                <li><strong>COOPERATE WITH BOARD</strong> - But through your attorney</li>
                <li><strong>ORGANIZE YOUR DEFENSE</strong> - Gather all documents, witnesses, evidence</li>
                <li><strong>PREPARE FOR HEARING</strong> - Practice testimony with attorney</li>
                <li><strong>ATTEND ALL PROCEEDINGS</strong> - Show respect for process</li>
                <li><strong>BE PROFESSIONAL</strong> - Dress appropriately, be respectful, tell truth</li>
              </ol>
            </div>

            <div className="investigation-summary">
              <h4>🎯 Board Investigation Process Summary:</h4>
              <p className="warning">
                <strong>The Board investigation process is formal, legal, and serious. Your license and career 
                are at stake. Follow all procedures, meet all deadlines, and work with qualified legal counsel 
                throughout the process.</strong>
              </p>
              <ul>
                <li>✅ <strong>Complaint:</strong> Must be written and signed</li>
                <li>✅ <strong>Notice:</strong> At least 10 days before hearing</li>
                <li>✅ <strong>Due Process:</strong> No penalty until after hearing and finding</li>
                <li>✅ <strong>Board Powers:</strong> Can summon witnesses and documents</li>
                <li>✅ <strong>Court Enforcement:</strong> Superior Court can compel witness appearance</li>
                <li>✅ <strong>Decision:</strong> Majority vote, written, signed by all members</li>
                <li>✅ <strong>Appeal:</strong> 20 days to appeal to Superior Court</li>
              </ul>
              <p className="highlight">
                <strong>Prevention is Best:</strong> The best way to handle a Board investigation is to never 
                get one. Follow all laws, maintain high ethical standards, document everything, communicate 
                clearly with clients, and when in doubt, consult your broker or attorney BEFORE acting.
              </p>
            </div>
          </div>
        </div>

        <h3>16.6 Real Estate License Exemptions (Who Doesn't Need a License)</h3>
        <div className="license-exemptions">
          <p className="highlight">
            <strong>Not everyone performing real estate activities needs a license.</strong> The following 
            individuals and entities are EXEMPT from Massachusetts real estate licensing requirements:
          </p>

          <h4>✅ Persons Exempt from Licensing:</h4>
          <div className="exemption-list">
            <div className="exemption-item">
              <h5>1. Persons Acting on Their Own Behalf</h5>
              <ul>
                <li><strong>Example:</strong> Selling your own home (For Sale By Owner - FSBO)</li>
                <li><strong>Why:</strong> You're not acting as an agent for someone else</li>
                <li><strong>Rule:</strong> Can sell/buy/lease your own property without license</li>
                <li><strong>Limitation:</strong> Cannot do this as a business for others</li>
              </ul>
            </div>

            <div className="exemption-item">
              <h5>2. Property Managers (Unless Collecting Additional Commission)</h5>
              <ul>
                <li><strong>Example:</strong> Building superintendent managing apartments for fixed salary</li>
                <li><strong>Rule:</strong> No license needed if paid flat fee/salary for management</li>
                <li><strong>⚠️ EXCEPTION:</strong> If collecting commission on leasing/sales = license required</li>
                <li><strong>Key Distinction:</strong> Managing properties ≠ selling/leasing for commission</li>
              </ul>
            </div>

            <div className="exemption-item">
              <h5>3. Licensed Auctioneers</h5>
              <ul>
                <li><strong>Example:</strong> Auctioneer conducting real estate auction</li>
                <li><strong>Rule:</strong> If licensed as auctioneer, don't need RE license</li>
                <li><strong>Scope:</strong> Can auction real property under auctioneer license</li>
                <li><strong>Note:</strong> Different license type, same activity permitted</li>
              </ul>
            </div>

            <div className="exemption-item">
              <h5>4. Public Officers/Employees Performing Official Duties</h5>
              <ul>
                <li><strong>Examples:</strong>
                  <ul>
                    <li>City/town selling municipal property</li>
                    <li>Sheriff conducting foreclosure sale</li>
                    <li>Tax collector selling tax-titled property</li>
                    <li>Government employees handling public land transactions</li>
                  </ul>
                </li>
                <li><strong>Rule:</strong> Government officials acting in official capacity exempt</li>
                <li><strong>Why:</strong> Public duty, not private business</li>
              </ul>
            </div>

            <div className="exemption-item">
              <h5>5. Attorney-in-Fact Under Power of Attorney (POA)</h5>
              <ul>
                <li><strong>Example:</strong> Person with POA selling property for elderly parent</li>
                <li><strong>Rule:</strong> If owner authorizes you via POA to complete transaction, no license needed</li>
                <li><strong>Requirement:</strong> Must have valid Power of Attorney document</li>
                <li><strong>Scope:</strong> Acting on behalf of owner under legal authority</li>
                <li><strong>Limitation:</strong> Only for properties covered by the POA</li>
              </ul>
            </div>

            <div className="exemption-item">
              <h5>6. Court-Appointed Fiduciaries</h5>
              <p><strong>Includes:</strong></p>
              <ul>
                <li><strong>Receivers:</strong> Court-appointed to manage property in litigation</li>
                <li><strong>Trustees of Trusts:</strong> Managing trust property</li>
                <li><strong>Trustees in Bankruptcy:</strong> Liquidating bankrupt estate assets</li>
                <li><strong>Administrators:</strong> Handling deceased person's estate (no will)</li>
                <li><strong>Executors:</strong> Handling deceased person's estate (with will)</li>
                <li><strong>Conservators:</strong> Managing property for incapacitated person</li>
                <li><strong>Personal Representatives:</strong> Estate representatives</li>
                <li><strong>Guardians:</strong> Managing property for minor or incapacitated person</li>
                <li><strong>Other Court-Appointed Persons:</strong> Acting under court order</li>
              </ul>
              <p><strong>Rule:</strong> If appointed by court or acting under court order, exempt</p>
              <p><strong>Why:</strong> Legal fiduciary duty supersedes licensing requirement</p>
            </div>

            <div className="exemption-item">
              <h5>7. Financial Institutions Acting as Fiduciaries or for Themselves</h5>
              <p><strong>Includes:</strong></p>
              <ul>
                <li><strong>Banks</strong></li>
                <li><strong>Credit Unions</strong></li>
                <li><strong>Insurance Companies</strong></li>
              </ul>
              <p><strong>When Exempt:</strong></p>
              <ul>
                <li><strong>Acting as Fiduciaries:</strong> Managing real estate in trust capacity</li>
                <li><strong>Negotiating a Mortgage:</strong> Lending money secured by real estate</li>
                <li><strong>Acting for Themselves:</strong> Selling/managing their own property</li>
                <li><strong>Foreclosures:</strong> Foreclosing and selling property they hold mortgage on</li>
              </ul>
              <p><strong>Rule:</strong> Financial institutions handling real estate as lenders or owners exempt</p>
              <p><strong>Why:</strong> Regulated by banking/insurance laws, not real estate laws</p>
            </div>
          </div>

          <h4>❌ Who DOES Need a License:</h4>
          <div className="needs-license">
            <p className="warning">
              <strong>If you DON'T fall into one of the above exemptions, you NEED a license to:</strong>
            </p>
            <ul>
              <li>Sell, lease, or rent real estate for others</li>
              <li>Negotiate real estate transactions for others</li>
              <li>List properties for sale/lease</li>
              <li>Show properties to buyers/tenants</li>
              <li>Collect commissions on real estate transactions</li>
              <li>Advertise yourself as a real estate professional</li>
              <li>Perform any real estate services for compensation</li>
            </ul>
          </div>

          <h4>Common Misconceptions & Clarifications:</h4>
          <table>
            <thead>
              <tr>
                <th>Situation</th>
                <th>License Needed?</th>
                <th>Why/Why Not</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Selling your own home</td>
                <td>❌ NO</td>
                <td>Acting on your own behalf</td>
              </tr>
              <tr>
                <td>Helping friend sell their home for free</td>
                <td>⚠️ MAYBE</td>
                <td>If no compensation, likely OK. If "gift" = commission, need license</td>
              </tr>
              <tr>
                <td>Property manager collecting flat monthly fee</td>
                <td>❌ NO</td>
                <td>Not collecting commission on sales/leases</td>
              </tr>
              <tr>
                <td>Property manager getting % of rent collected</td>
                <td>✅ YES</td>
                <td>Commission-based = license required</td>
              </tr>
              <tr>
                <td>Attorney selling client's property</td>
                <td>❌ NO</td>
                <td>If POA or legal representation, exempt</td>
              </tr>
              <tr>
                <td>Executor selling estate property</td>
                <td>❌ NO</td>
                <td>Court-appointed fiduciary exempt</td>
              </tr>
              <tr>
                <td>Bank foreclosing and selling property</td>
                <td>❌ NO</td>
                <td>Financial institution acting for itself</td>
              </tr>
              <tr>
                <td>Auctioneer selling real estate</td>
                <td>❌ NO</td>
                <td>Licensed auctioneer exempt</td>
              </tr>
              <tr>
                <td>Bird-dogging (finding deals for fee)</td>
                <td>✅ YES</td>
                <td>Acting as middleman for compensation = license required</td>
              </tr>
              <tr>
                <td>Wholesaling real estate</td>
                <td>⚠️ GRAY AREA</td>
                <td>If assigning contracts = might need license. Consult attorney.</td>
              </tr>
            </tbody>
          </table>

          <h4>⚠️ Penalties for Practicing Without a License:</h4>
          <div className="unlicensed-penalties">
            <ul>
              <li><strong>Criminal Charges:</strong> Misdemeanor with fines and potential jail time</li>
              <li><strong>Cannot Collect Commission:</strong> Courts won't enforce your commission agreement</li>
              <li><strong>Cannot Sue for Fees:</strong> No legal recourse to collect payment</li>
              <li><strong>Client Can Sue You:</strong> For damages caused by unlicensed activity</li>
              <li><strong>Chapter 93A Violation:</strong> Unfair/deceptive practice (triple damages!)</li>
              <li><strong>Permanent Bar:</strong> May never be able to get license later</li>
            </ul>

            <p className="warning">
              <strong>⚠️ Important:</strong> If you engage in real estate activity requiring a license without 
              having one, you cannot enforce any contracts or collect any fees. All your work is void. You may 
              also face criminal prosecution.
            </p>
          </div>

          <h4>When in Doubt:</h4>
          <div className="doubt-guidance">
            <p className="highlight">
              <strong>If you're unsure whether your activity requires a license, ASK:</strong>
            </p>
            <ol>
              <li><strong>Am I acting for someone else's property?</strong> (If yes, likely need license)</li>
              <li><strong>Am I receiving compensation?</strong> (If yes, likely need license)</li>
              <li><strong>Am I in one of the exemption categories?</strong> (If no, likely need license)</li>
              <li><strong>Would a reasonable person think I'm acting as a real estate agent?</strong> (If yes, need license)</li>
            </ol>

            <p><strong>When in doubt:</strong></p>
            <ul>
              <li>Consult the MA Board of Registration of Real Estate Brokers and Salespersons</li>
              <li>Speak with a real estate attorney</li>
              <li>Get licensed if there's any question (better safe than sorry)</li>
            </ul>
          </div>

          <div className="exemption-summary">
            <h4>🎯 Exemption Summary:</h4>
            <p className="highlight">
              <strong>The Rule of Thumb:</strong> If you're getting paid to help others buy, sell, or lease 
              real estate, you need a license UNLESS you fall into one of the specific exemption categories 
              (POA, court-appointed fiduciary, financial institution, auctioneer, government official, or 
              managing for flat fee). When in doubt, get licensed. The penalties for practicing without a 
              license are severe and can end your real estate career before it starts.
            </p>
          </div>
        </div>

        <p className="highlight">
          <strong>Career Path:</strong> Salesperson (3+ years) → Broker → Brokerage Owner → Multi-State Broker.
          Continuous learning and professional certifications accelerate growth and income potential.
        </p>
      </>
    )
  };

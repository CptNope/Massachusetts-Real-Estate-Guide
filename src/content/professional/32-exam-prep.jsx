import React from 'react';

export const section = {
    id: 'exam-prep',
    icon: '📝',
    title: '32. PSI Exam Guide & Content Review',
    subtitle: 'Complete guide to the Massachusetts real estate licensing exam',
    body: (
      <>
        <h3>6.1 PSI Examination Overview</h3>
        
        <h4>Massachusetts Salesperson Examination</h4>
        <div className="exam-details">
          <p><strong>Testing Provider:</strong> PSI Services LLC (www.psiexams.com)</p>
          <p><strong>Total Questions:</strong> 110 questions</p>
          <ul>
            <li><strong>National Portion:</strong> 80 questions</li>
            <li><strong>Massachusetts State Portion:</strong> 30 questions</li>
          </ul>
          <p><strong>Passing Score:</strong></p>
          <ul>
            <li>National: 70% (56 out of 80 correct)</li>
            <li>State: 70% (21 out of 30 correct)</li>
            <li><em>Note: You must pass BOTH portions to receive your license</em></li>
          </ul>
          <p><strong>Time Limit:</strong> 3.5 hours (210 minutes)</p>
          <p><strong>Exam Fee:</strong> $85.00 (subject to change)</p>
          <p><strong>Format:</strong> Computer-based, multiple choice</p>
        </div>

        <h3>6.2 Eligibility Requirements</h3>
        <ul>
          <li>✅ Complete approved 40-hour Massachusetts real estate pre-licensing course</li>
          <li>✅ Be at least 18 years old</li>
          <li>✅ Have a high school diploma or equivalent</li>
          <li>✅ Submit fingerprints for background check</li>
          <li>✅ Receive exam authorization from Massachusetts Board of Registration of Real Estate Brokers & Salespersons</li>
        </ul>

        <h3>6.3 Scheduling Your Exam</h3>
        <h4>How to Schedule:</h4>
        <ol>
          <li><strong>Online:</strong> www.psiexams.com (24/7 scheduling)</li>
          <li><strong>Phone:</strong> 1-800-733-9267 (Monday-Friday, 7am-7pm CT)</li>
          <li>Select "Massachusetts Real Estate Salesperson" exam</li>
          <li>Choose your preferred test center and date/time</li>
          <li>Pay the $85 exam fee (credit card, debit card, or e-check)</li>
        </ol>

        <h4>Test Center Locations in Massachusetts:</h4>
        <ul>
          <li>Boston (Downtown)</li>
          <li>Springfield</li>
          <li>Worcester</li>
          <li>Brockton</li>
          <li>Additional locations available - check PSI website for current list</li>
        </ul>

        <p><strong>⏰ Scheduling Tip:</strong> Schedule at least 2-3 weeks in advance for best availability. Morning slots (8am-10am) tend to fill fastest.</p>

        <h3>6.4 Exam Day: What to Bring</h3>
        <h4>✅ Required Items:</h4>
        <ul>
          <li><strong>Two forms of ID:</strong>
            <ul>
              <li>Primary: Government-issued photo ID (driver's license, passport, state ID)</li>
              <li>Secondary: Credit card, social security card, or student ID</li>
              <li>Name on IDs must match exam registration</li>
            </ul>
          </li>
          <li><strong>Exam confirmation number</strong> (email confirmation from PSI)</li>
        </ul>

        <h4>❌ Prohibited Items:</h4>
        <ul>
          <li>Cell phones, smart watches, fitness trackers</li>
          <li>Calculators (one will be provided on-screen)</li>
          <li>Notes, books, or study materials</li>
          <li>Food or drinks (water may be allowed outside testing room)</li>
          <li>Purses, bags, or backpacks in testing room</li>
          <li>Hats or hoodies (religious headwear allowed with verification)</li>
        </ul>

        <h3>6.5 Exam Day Procedures</h3>
        <ol>
          <li><strong>Arrival:</strong> Arrive 30 minutes before scheduled time</li>
          <li><strong>Check-in:</strong> Present IDs, sign in, store personal items in locker</li>
          <li><strong>Photo:</strong> Digital photo taken for security</li>
          <li><strong>Rules Review:</strong> Review testing center rules and sign agreement</li>
          <li><strong>Tutorial:</strong> 15-minute computer tutorial (not counted in exam time)</li>
          <li><strong>Exam:</strong> 3.5 hours to complete 110 questions</li>
          <li><strong>Breaks:</strong> Unscheduled breaks allowed (time continues running)</li>
          <li><strong>Results:</strong> Preliminary pass/fail immediately upon completion</li>
        </ol>

        <h3>6.6 Score Reporting</h3>
        <ul>
          <li><strong>Immediate:</strong> Preliminary pass/fail shown on screen</li>
          <li><strong>Score Report:</strong> Printed at test center with section scores</li>
          <li><strong>Official Results:</strong> Sent to MA Board within 24-48 hours</li>
          <li><strong>Score Details:</strong> Shows national score, state score, and performance by content area</li>
          <li>❌ <strong>No appeals:</strong> Scores are final and cannot be challenged</li>
        </ul>

        <h3>6.7 If You Don't Pass</h3>
        <h4>Retake Policy:</h4>
        <ul>
          <li><strong>Waiting Period:</strong> No wait time required (can reschedule immediately)</li>
          <li><strong>Retake Fee:</strong> $85 per attempt</li>
          <li><strong>Validity:</strong> Exam authorization valid for 2 years from course completion</li>
          <li><strong>Partial Credit:</strong> If you pass one portion (national or state), you only retake the failed portion</li>
          <li><strong>Example:</strong> Pass national (80 questions) but fail state (30 questions) = only retake 30-question state portion</li>
        </ul>

        <h4>Study Tips for Retakers:</h4>
        <ul>
          <li>Review your score report - identify weak areas</li>
          <li>Focus on sections with lowest scores</li>
          <li>Use practice exams with focus on weak content</li>
          <li>Wait at least 1-2 weeks to allow for additional study</li>
          <li>Consider additional tutoring or review courses if failing multiple times</li>
        </ul>

        <h3>6.8 Special Accommodations</h3>
        <p>Candidates with disabilities may request:</p>
        <ul>
          <li>Extended testing time</li>
          <li>Separate testing room</li>
          <li>Screen magnification</li>
          <li>Reader or scribe assistance</li>
        </ul>
        <p><strong>Process:</strong> Submit Special Accommodations Request Form with documentation to PSI at least 30 days before desired test date.</p>

        <h3>6.9 Exam Content Breakdown</h3>
        
        <h4>NATIONAL PORTION (80 questions - 70% to pass)</h4>
        <table style={{width: '100%', marginBottom: '1rem'}}>
          <thead>
            <tr>
              <th>Content Area</th>
              <th>Questions</th>
              <th>Percentage</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Property Ownership & Land Use</td>
              <td>13</td>
              <td>16%</td>
            </tr>
            <tr>
              <td>Laws of Agency & Fiduciary Duties</td>
              <td>15</td>
              <td>19%</td>
            </tr>
            <tr>
              <td>Property Valuation & Appraisal</td>
              <td>10</td>
              <td>13%</td>
            </tr>
            <tr>
              <td>Financing & Credit</td>
              <td>12</td>
              <td>15%</td>
            </tr>
            <tr>
              <td>Laws, Regulations & Fair Housing</td>
              <td>11</td>
              <td>14%</td>
            </tr>
            <tr>
              <td>Property Condition & Disclosures</td>
              <td>9</td>
              <td>11%</td>
            </tr>
            <tr>
              <td>Contracts & Relationships</td>
              <td>10</td>
              <td>13%</td>
            </tr>
          </tbody>
        </table>

        <h4>MASSACHUSETTS STATE PORTION (30 questions - 70% to pass)</h4>
        <table style={{width: '100%', marginBottom: '1rem'}}>
          <thead>
            <tr>
              <th>Content Area</th>
              <th>Questions</th>
              <th>Percentage</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>MA License Law & Regulations</td>
              <td>10</td>
              <td>33%</td>
            </tr>
            <tr>
              <td>MA Real Estate Practice</td>
              <td>8</td>
              <td>27%</td>
            </tr>
            <tr>
              <td>MA Specific Laws & Disclosures</td>
              <td>7</td>
              <td>23%</td>
            </tr>
            <tr>
              <td>MA Contract Law & Forms</td>
              <td>5</td>
              <td>17%</td>
            </tr>
          </tbody>
        </table>

        <h3>6.10 High-Yield Exam Topics</h3>
        
        <h4>Massachusetts-Specific Topics (Study These!)</h4>
        <ul>
          <li>✅ <strong>2025 Law Changes:</strong> Inspection waiver disclosure, commission negotiation rules</li>
          <li>✅ <strong>License Law:</strong> Salesperson vs broker requirements, supervision, continuing education</li>
          <li>✅ <strong>Agency Relationships:</strong> Buyer agency, seller agency, dual agency, designated agency</li>
          <li>✅ <strong>Required Disclosures:</strong> Lead paint, property condition, agency disclosure</li>
          <li>✅ <strong>Fair Housing:</strong> Protected classes, steering, blockbusting, redlining</li>
          <li>✅ <strong>Contracts:</strong> Offer to Purchase, Purchase & Sale Agreement, contingencies</li>
          <li>✅ <strong>Escrow Accounts:</strong> Trust account management, deposits, record keeping</li>
        </ul>

        <h4>National Topics - Most Tested</h4>
        <ul>
          <li>✅ <strong>Agency Law:</strong> Fiduciary duties (OLD-CAR: Obedience, Loyalty, Disclosure, Confidentiality, Accounting, Reasonable Care)</li>
          <li>✅ <strong>Fair Housing Act:</strong> Protected classes, exemptions, penalties</li>
          <li>✅ <strong>Contract Law:</strong> Offer, acceptance, consideration, legal purpose, capacity</li>
          <li>✅ <strong>Property Rights:</strong> Fee simple, life estate, easements, encumbrances</li>
          <li>✅ <strong>Financing:</strong> Conventional, FHA, VA loans; PITI, LTV, qualifying ratios</li>
          <li>✅ <strong>Valuation:</strong> Three approaches (sales comparison, cost, income), CMA</li>
          <li>✅ <strong>Deeds & Title:</strong> Types of deeds, title insurance, recording</li>
        </ul>

        <h3>6.11 Quick Calculation Formulas</h3>
        <div className="highlight">
          <h4>Commission Calculations:</h4>
          <pre>
{`Sale Price × Commission Rate = Total Commission
$300,000 × 5% = $15,000

Commission Split:
Total Commission × Agent's % = Agent's Share
$15,000 × 60% = $9,000 to agent`}
          </pre>

          <h4>Proration (Property Taxes):</h4>
          <pre>
{`Annual Tax ÷ 365 = Daily Rate
Daily Rate × Number of Days = Prorated Amount

Example: $3,650 annual tax, close on day 100
$3,650 ÷ 365 = $10/day
$10 × 100 days = $1,000 (seller owes)`}
          </pre>

          <h4>Area Calculations:</h4>
          <pre>
{`Rectangle: Length × Width
Square Feet to Acres: SF ÷ 43,560
Acres to Square Feet: Acres × 43,560

Example: 10,000 SF lot
10,000 ÷ 43,560 = 0.23 acres`}
          </pre>

          <h4>Loan Qualifying:</h4>
          <pre>
{`Housing Ratio = (PITI ÷ Monthly Income) × 100
Debt Ratio = (Total Debt ÷ Monthly Income) × 100

Conventional Max: 28% housing, 36% total debt
FHA Max: 31% housing, 43% total debt`}
          </pre>
        </div>

        <h3>6.12 Exam Success Tips</h3>
        <ul>
          <li>🎯 <strong>Read carefully:</strong> Questions often include "EXCEPT" or "NOT" - circle these words</li>
          <li>🎯 <strong>Eliminate wrong answers:</strong> Cross out obviously incorrect options first</li>
          <li>🎯 <strong>Flag and return:</strong> If unsure, flag the question and come back later</li>
          <li>🎯 <strong>Time management:</strong> 110 questions in 210 minutes = ~2 minutes per question</li>
          <li>🎯 <strong>Calculator:</strong> On-screen calculator provided - practice with it in tutorial</li>
          <li>🎯 <strong>No penalty:</strong> No penalty for guessing - answer every question</li>
          <li>🎯 <strong>Review flagged:</strong> Use remaining time to review flagged questions</li>
          <li>🎯 <strong>Don't overthink:</strong> First instinct is usually correct</li>
        </ul>

        <h3>6.13 Study Resources</h3>
        <ul>
          <li>📚 <strong>Official PSI Practice Exam:</strong> Available at www.psiexams.com ($25)</li>
          <li>📚 <strong>MA Board Website:</strong> www.mass.gov/orgs/board-of-registration-of-real-estate-brokers-and-salespersons</li>
          <li>📚 <strong>This Guide:</strong> Use Study Mode, Quiz Mode, and Practice Exam features</li>
          <li>📚 <strong>School Materials:</strong> Review all course materials from your 40-hour program</li>
          <li>📚 <strong>Flashcards:</strong> Create flashcards for formulas and key terms</li>
          <li>📚 <strong>Study Groups:</strong> Join or form study groups with classmates</li>
        </ul>

        <h3>6.14 Common Exam Mistakes to Avoid</h3>
        <div className="law-change-banner" style={{marginTop: '1rem'}}>
          <div className="law-banner-content">
            <span className="law-banner-icon">⚠️</span>
            <div className="law-banner-text">
              <ul style={{margin: 0, paddingLeft: '1.5rem'}}>
                <li>❌ Not managing time - rushing through last 20 questions</li>
                <li>❌ Changing too many answers on review (stick with first instinct)</li>
                <li>❌ Missing "EXCEPT" or "NOT" keywords in questions</li>
                <li>❌ Confusing state vs national law requirements</li>
                <li>❌ Forgetting to bring required IDs</li>
                <li>❌ Cramming the night before (study 1-2 weeks before exam)</li>
                <li>❌ Not taking practice exams under timed conditions</li>
              </ul>
            </div>
          </div>
        </div>

        <h3>6.15 After You Pass</h3>
        <ol>
          <li><strong>Score Report:</strong> Keep your score report - you'll need it for license application</li>
          <li><strong>License Application:</strong> Apply online at MA Board website within 2 years</li>
          <li><strong>Find a Broker:</strong> Must be affiliated with licensed broker to activate license</li>
          <li><strong>Fingerprinting:</strong> Complete background check if not done already</li>
          <li><strong>License Fee:</strong> Pay $100 salesperson license fee (2-year term)</li>
          <li><strong>Continuing Education:</strong> 12 hours CE required every 2 years for renewal</li>
        </ol>

        <h3>6.16 Quick Exam Cheatsheet</h3>
        <pre>
{`📝 EXAM FORMAT
• 110 questions total (80 national + 30 state)
• 70% to pass BOTH portions
• 3.5 hours (210 minutes)
• $85 fee
• Computer-based at PSI test centers

📅 SCHEDULING
• www.psiexams.com or 1-800-733-9267
• Schedule 2-3 weeks in advance
• Bring 2 IDs (1 government photo ID)

✅ CONTENT FOCUS
• Agency Law (19% of national)
• MA License Law (33% of state)
• Fair Housing, Contracts, Financing
• Know calculations: commission, proration, area, LTV

🎯 TEST STRATEGY
• Read carefully - watch for "EXCEPT" and "NOT"
• 2 minutes per question average
• Flag uncertain questions, review later
• No penalty for guessing - answer all 110
• Trust first instinct when reviewing

🔄 RETAKES
• No waiting period
• $85 per retake
• Only retake failed portion
• Score report shows weak areas`}
        </pre>
      </>
    )
  };

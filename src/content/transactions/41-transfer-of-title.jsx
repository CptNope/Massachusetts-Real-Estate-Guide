export const section = {
  id: 'transfer-of-title',
  icon: '📝',
  title: '41. Transfer of Title & Recording',
  subtitle: 'Recording Requirements, Title Priority, and Adverse Possession',
  body: (
    <>
      <h3>📜 Recording System</h3>
      
      <h4>🔹 Purpose of Recording</h4>
      <ul>
        <li><strong>Public Notice:</strong> Provides constructive notice to the world of property ownership</li>
        <li><strong>Priority:</strong> Establishes priority of interests in property</li>
        <li><strong>Protection:</strong> Protects against fraud and conflicting claims</li>
        <li><strong>Where:</strong> Registry of Deeds in county where property located</li>
      </ul>

      <h4>🔹 What Can Be Recorded?</h4>
      <ul>
        <li><strong>Deeds:</strong> All types (warranty, quitclaim, etc.)</li>
        <li><strong>Mortgages:</strong> First, second, and subsequent mortgages</li>
        <li><strong>Liens:</strong> Mechanics, judgment, tax liens</li>
        <li><strong>Easements:</strong> Rights of way and other easements</li>
        <li><strong>Restrictions:</strong> Covenants, conditions, restrictions (CC&Rs)</li>
        <li><strong>Leases:</strong> Long-term leases (typically 7+ years)</li>
        <li><strong>Notices:</strong> Lis pendens (pending lawsuit), homestead declarations</li>
      </ul>

      <h4>🔹 Recording Requirements</h4>
      <ul>
        <li><strong>Legal Description:</strong> Must accurately describe property</li>
        <li><strong>Grantor/Grantee Names:</strong> Properly spelled</li>
        <li><strong>Signature:</strong> Grantor must sign (notarized in MA)</li>
        <li><strong>Acknowledgment:</strong> Notary public acknowledgment</li>
        <li><strong>Delivery:</strong> Must be delivered to and accepted by grantee</li>
        <li><strong>Recording Fee:</strong> Paid to Registry of Deeds</li>
      </ul>

      <hr/>

      <h3>⚖️ Priority of Interests ("First in Time, First in Right")</h3>
      
      <h4>🔹 General Priority Rule</h4>
      <ul>
        <li><strong>Basic Rule:</strong> First to record has priority (first in time, first in right)</li>
        <li><strong>Example:</strong>
          <ul>
            <li>Day 1: Bank A loans money, takes mortgage</li>
            <li>Day 2: Bank B loans money, takes mortgage</li>
            <li>Day 3: Bank B records their mortgage</li>
            <li>Day 4: Bank A records their mortgage</li>
            <li><strong>Result:</strong> Bank B has first priority (recorded first)</li>
          </ul>
        </li>
      </ul>

      <h4>🔹 Exception: Property Tax Liens</h4>
      <ul>
        <li><strong>ALWAYS First:</strong> Property tax liens have absolute priority</li>
        <li><strong>Beats All Others:</strong> Even mortgages recorded earlier</li>
        <li><strong>Why:</strong> Government's power to tax supersedes private interests</li>
      </ul>

      <h4>🔹 Typical Priority Order</h4>
      <ol>
        <li><strong>1st Priority:</strong> Property tax liens (always)</li>
        <li><strong>2nd Priority:</strong> Special assessment liens (water/sewer)</li>
        <li><strong>3rd Priority:</strong> First mortgage (if recorded first)</li>
        <li><strong>4th Priority:</strong> Second mortgage or HELOC</li>
        <li><strong>5th Priority:</strong> Judgment liens, mechanics liens</li>
      </ol>

      <hr/>

      <h3>🔍 Title Search & Chain of Title</h3>
      
      <h4>🔹 What is a Title Search?</h4>
      <ul>
        <li><strong>Process:</strong> Examining public records to trace property ownership history</li>
        <li><strong>Purpose:</strong> Verify seller owns property and identify any encumbrances</li>
        <li><strong>Period:</strong> Typically 40-60 years back (or to "good root of title")</li>
        <li><strong>Who Performs:</strong> Title company or attorney</li>
      </ul>

      <h4>🔹 Chain of Title</h4>
      <ul>
        <li><strong>Definition:</strong> History of all owners and transfers</li>
        <li><strong>Purpose:</strong> Prove unbroken line of ownership</li>
        <li><strong>Links:</strong> Each deed is a "link" in the chain</li>
        <li><strong>Broken Chain:</strong> Missing deed or gap creates cloud on title</li>
      </ul>

      <h4>🔹 What Title Search Reveals</h4>
      <ul>
        <li><strong>Current Owner:</strong> Who legally owns property</li>
        <li><strong>Mortgages:</strong> Any outstanding loans against property</li>
        <li><strong>Liens:</strong> Tax liens, judgment liens, mechanics liens</li>
        <li><strong>Easements:</strong> Rights of way or utility easements</li>
        <li><strong>Restrictions:</strong> Deed restrictions or covenants</li>
        <li><strong>Encroachments:</strong> Found through survey, not title search</li>
      </ul>

      <hr/>

      <h3>🛡️ Title Insurance</h3>
      
      <h4>🔹 What is Title Insurance?</h4>
      <ul>
        <li><strong>Protection:</strong> Insurance against title defects</li>
        <li><strong>One-Time Premium:</strong> Paid at closing (not annual)</li>
        <li><strong>Coverage Period:</strong> As long as you or heirs own property</li>
        <li><strong>Different from Other Insurance:</strong> Protects against past events, not future</li>
      </ul>

      <h4>🔹 Types of Title Insurance</h4>
      
      <h5>1. Owner's Policy</h5>
      <ul>
        <li><strong>Protects:</strong> Buyer/owner</li>
        <li><strong>Coverage Amount:</strong> Purchase price</li>
        <li><strong>Who Pays:</strong> Typically buyer (but negotiable)</li>
        <li><strong>Duration:</strong> As long as owner or heirs have interest</li>
        <li><strong>Protects Against:</strong> Forgery, unknown heirs, recording errors, fraud</li>
      </ul>

      <h5>2. Lender's Policy (Mortgagee Policy)</h5>
      <ul>
        <li><strong>Protects:</strong> Lender/mortgagee</li>
        <li><strong>Coverage Amount:</strong> Loan amount (decreases as loan paid off)</li>
        <li><strong>Who Pays:</strong> Buyer (required by lender)</li>
        <li><strong>Duration:</strong> Until loan paid off</li>
        <li><strong>Does NOT Protect Owner:</strong> Only protects lender</li>
      </ul>

      <h4>🔹 What Title Insurance Covers</h4>
      <ul>
        <li>✅ Forged deeds or documents</li>
        <li>✅ Unknown heirs claiming ownership</li>
        <li>✅ Recording errors or mistakes</li>
        <li>✅ Fraud or impersonation</li>
        <li>✅ Undisclosed liens</li>
        <li>✅ Survey errors (if endorsement purchased)</li>
      </ul>

      <h4>🔹 What Title Insurance Does NOT Cover</h4>
      <ul>
        <li>❌ Defects you create after purchase</li>
        <li>❌ Known defects disclosed before purchase</li>
        <li>❌ Zoning violations (unless endorsement)</li>
        <li>❌ Environmental issues</li>
        <li>❌ Eminent domain takings</li>
      </ul>

      <hr/>

      <h3>📊 Marketable Title vs. Insurable Title</h3>
      
      <h4>🔹 Marketable Title</h4>
      <ul>
        <li><strong>Definition:</strong> Title free from reasonable doubt (so clear that buyer must accept)</li>
        <li><strong>Standard:</strong> No defects that would cause reasonable buyer to reject</li>
        <li><strong>Contract Requirement:</strong> Seller typically promises marketable title</li>
        <li><strong>Example:</strong> Clear chain of title, no liens, no encumbrances</li>
      </ul>

      <h4>🔹 Insurable Title</h4>
      <ul>
        <li><strong>Definition:</strong> Title company willing to insure (may have minor defects)</li>
        <li><strong>Standard:</strong> Lower than marketable (some issues acceptable)</li>
        <li><strong>Example:</strong> Minor encroachments, old easements, technical defects</li>
        <li><strong>Can Close:</strong> Even if not perfectly "marketable"</li>
      </ul>

      <hr/>

      <h3>⚡ Adverse Possession</h3>
      
      <h4>🔹 What is Adverse Possession?</h4>
      <ul>
        <li><strong>Definition:</strong> Acquiring ownership by occupying someone else's property</li>
        <li><strong>Concept:</strong> "Squatter's rights" after long-term use</li>
        <li><strong>Purpose:</strong> Encourages productive use of land</li>
        <li><strong>Effect:</strong> Original owner loses title to adverse possessor</li>
      </ul>

      <h4>🔹 Requirements in Massachusetts (Remember: "OCEAN")</h4>
      <ul>
        <li><strong>O</strong>pen and Notorious
          <ul>
            <li>Use is visible and obvious to anyone</li>
            <li>Not hidden or secret</li>
          </ul>
        </li>
        <li><strong>C</strong>ontinuous
          <ul>
            <li>Uninterrupted use for entire statutory period</li>
            <li>Must use like true owner would</li>
          </ul>
        </li>
        <li><strong>E</strong>xclusive
          <ul>
            <li>Possessor uses alone, not sharing with owner</li>
            <li>Acting as sole owner</li>
          </ul>
        </li>
        <li><strong>A</strong>ctual
          <ul>
            <li>Physical possession and use of property</li>
            <li>Actually occupying or using the land</li>
          </ul>
        </li>
        <li><strong>N</strong>otorious (Hostile)
          <ul>
            <li>Without owner's permission</li>
            <li>Claiming as own (not acknowledging owner's rights)</li>
          </ul>
        </li>
      </ul>

      <h4>🔹 Time Period</h4>
      <ul>
        <li><strong>Massachusetts:</strong> 20 years of continuous adverse possession</li>
        <li><strong>Must Be Uninterrupted:</strong> If owner interrupts, clock resets</li>
        <li><strong>Tacking:</strong> Successive possessors can add their time together</li>
      </ul>

      <h4>🔹 How to Stop Adverse Possession</h4>
      <ul>
        <li><strong>File Lawsuit:</strong> Ejectment action to remove trespasser</li>
        <li><strong>Give Permission:</strong> Converts to license (no longer hostile)</li>
        <li><strong>Post Notice:</strong> "No Trespassing" signs</li>
        <li><strong>Regular Inspections:</strong> Show you haven't abandoned property</li>
      </ul>

      <hr/>

      <h3>🔑 Key Exam Points</h3>
      <ul>
        <li>✅ <strong>First in Time, First in Right:</strong> First to record has priority</li>
        <li>✅ <strong>Exception:</strong> Property tax liens ALWAYS have first priority</li>
        <li>✅ <strong>Recording Location:</strong> Registry of Deeds in county where property located</li>
        <li>✅ <strong>Title Insurance:</strong> One-time premium, protects against past defects</li>
        <li>✅ <strong>Owner's vs. Lender's Policy:</strong> Owner's protects buyer, lender's protects bank</li>
        <li>✅ <strong>Adverse Possession (OCEAN):</strong> Open, Continuous, Exclusive, Actual, Notorious (Hostile)</li>
        <li>✅ <strong>Time Period in MA:</strong> 20 years for adverse possession</li>
        <li>✅ <strong>Marketable Title:</strong> Free from reasonable doubt (seller's obligation)</li>
      </ul>

      <hr/>

      <h3>❓ Common Exam Scenarios</h3>

      <div style={{background: '#f0f9ff', padding: '1rem', borderRadius: '8px', marginBottom: '1rem'}}>
        <strong>Q: Property has first mortgage recorded on Jan 1, second mortgage recorded on Feb 1, and property taxes unpaid. What is priority order?</strong>
        <p><strong>A:</strong> (1) Property taxes (always first), (2) First mortgage (recorded Jan 1), (3) Second mortgage (recorded Feb 1). Tax liens beat all others.</p>
      </div>

      <div style={{background: '#f0f9ff', padding: '1rem', borderRadius: '8px', marginBottom: '1rem'}}>
        <strong>Q: Neighbor has been using 10 feet of your property for 22 years. They built a shed, mow the lawn, and treat it as their own. What can happen?</strong>
        <p><strong>A:</strong> Possible adverse possession claim! If use was Open, Continuous, Exclusive, Actual, and Hostile for 20+ years in MA, neighbor may have acquired ownership.</p>
      </div>

      <div style={{background: '#f0f9ff', padding: '1rem', borderRadius: '8px', marginBottom: '1rem'}}>
        <strong>Q: What's the difference between owner's title insurance and lender's title insurance?</strong>
        <p><strong>A:</strong> Owner's policy protects buyer for purchase price (lasts as long as you own). Lender's policy protects bank for loan amount (ends when loan paid off). Buyer typically pays for both.</p>
      </div>

      <div style={{background: '#f0f9ff', padding: '1rem', borderRadius: '8px'}}>
        <strong>Q: Two buyers submit offers on same property. First buyer's deed recorded yesterday, second buyer's deed recorded today. Who owns property?</strong>
        <p><strong>A:</strong> First buyer (recorded yesterday). "First in time, first in right" - priority based on recording order, not offer submission.</p>
      </div>
    </>
  )
};

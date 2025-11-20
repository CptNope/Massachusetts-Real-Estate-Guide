import React from 'react';

export const section = {
    id: 'buyer-representation-agreements',
    icon: '📝',
    title: '11. Buyer Client Representation Agreements',
    subtitle: 'Exclusive vs. Open agreements, success fees, upfront retainers, commission structures',
    body: (
      <>
        <h3>33.1 Understanding Buyer Representation Agreements</h3>
        <p className="highlight">
          <strong>Buyer Representation Agreements</strong> formalize the relationship between buyer and their agent, establishing 
          duties, compensation, duration, and exclusivity. There are TWO main types: Exclusive and Open.
        </p>

        <h3>33.2 Exclusive Buyer Representation Agreement</h3>
        <div className="agreement-type">
          <p><strong>Definition:</strong> A contract creating an exclusive agency relationship where the buyer commits to working 
          with one specific agent/brokerage for a defined period.</p>

          <h4>Key Characteristics:</h4>
          <ul>
            <li><strong>Buyer's Agent is Buyer's Exclusive Agent:</strong> Buyer works only with this agent during the agreement term</li>
            <li><strong>Specific Time Period:</strong> Contract is for a defined duration (e.g., 90 days, 6 months)</li>
            <li><strong>Mutual Commitment:</strong> Buyer is committed to agent AND agent is committed to buyer (vice versa)</li>
            <li><strong>Protected Commission:</strong> Agent earns commission if buyer purchases ANY property during term</li>
            <li><strong>Cannot Work with Others:</strong> Buyer cannot hire other agents during exclusive period</li>
          </ul>

          <h4>Commission Structure:</h4>
          <div className="commission-details">
            <h5>Success Fee - Most Common</h5>
            <ul>
              <li><strong>Definition:</strong> Commission charged as a percentage of purchase price</li>
              <li><strong>When Paid:</strong> At closing, typically from seller's proceeds or buyer pays</li>
              <li><strong>Minimum Due:</strong> Agent earns commission for successfully representing buyer</li>
              <li><strong>Typical Range:</strong> 2-3% of purchase price (negotiable)</li>
            </ul>

            <h5>Upfront Retainer (Sometimes Required)</h5>
            <ul>
              <li><strong>Definition:</strong> Fee paid at beginning of representation for incidental charges to agent</li>
              <li><strong>Purpose:</strong> Covers costs like showing properties, research, marketing materials</li>
              <li><strong>Reimbursement:</strong> May be reimbursed upon closing if stated in agreement</li>
              <li><strong>Not Always Required:</strong> Many buyer agreements don't have retainers</li>
            </ul>
          </div>

          <h4>Benefits to Buyer:</h4>
          <ul>
            <li>✅ Agent's full commitment and loyalty</li>
            <li>✅ Exclusive access to agent's time and resources</li>
            <li>✅ Agent will aggressively represent buyer's interests</li>
            <li>✅ Clear understanding of agent's duties and compensation</li>
            <li>✅ Legal protection through written contract</li>
          </ul>

          <h4>Benefits to Agent:</h4>
          <ul>
            <li>✅ Protected compensation for time and effort</li>
            <li>✅ Buyer cannot "jump" to another agent</li>
            <li>✅ Investment in relationship is protected</li>
            <li>✅ Clear expectations and boundaries</li>
          </ul>

          <h4>Important Terms:</h4>
          <div className="terms-box">
            <ul>
              <li><strong>Duration:</strong> How long the exclusive period lasts</li>
              <li><strong>Termination:</strong> How either party can end the agreement early</li>
              <li><strong>Commission Rate:</strong> Percentage or flat fee owed</li>
              <li><strong>Property Types:</strong> What types of properties agreement covers</li>
              <li><strong>Geographic Area:</strong> Where agent will help buyer search</li>
              <li><strong>Excluded Properties:</strong> Properties buyer already knew about before agreement</li>
            </ul>
          </div>
        </div>

        <h3>33.3 Open Buyer-Representation Agreements</h3>
        <div className="agreement-type">
          <p><strong>Definition:</strong> A non-exclusive agreement where buyer may employ services of multiple buyer brokers 
          without commitment to one particular agent.</p>

          <h4>Key Characteristics:</h4>
          <ul>
            <li><strong>Non-Exclusive:</strong> Buyer can work with multiple agents simultaneously</li>
            <li><strong>No Commitment:</strong> Buyer is not locked into one agent</li>
            <li><strong>Freedom to Choose:</strong> Buyer can shop around and use different agents</li>
            <li><strong>Commission Protection:</strong> Agent who procures the buyer (finds the property) earns commission</li>
            <li><strong>Other Agents Not Owed:</strong> Only the agent who successfully closes gets paid</li>
          </ul>

          <h4>How It Works:</h4>
          <ul>
            <li>Buyer signs open agreement with Agent A</li>
            <li>Buyer also works with Agent B and Agent C on different properties</li>
            <li>Agent B shows buyer a property that buyer ultimately purchases</li>
            <li><strong>Result:</strong> Agent B is due the commission; Agents A and C get nothing</li>
          </ul>

          <h4>Commission Structure:</h4>
          <div className="warning-box">
            <p><strong>⚠️ CRITICAL:</strong> The agent who <strong>sells Buyer a home</strong> is due a commission. All other 
            agents involved are not due anything.</p>
          </div>

          <h4>Benefits to Buyer:</h4>
          <ul>
            <li>✅ Flexibility to work with multiple agents</li>
            <li>✅ Can compare agent services and styles</li>
            <li>✅ No obligation if not satisfied with one agent</li>
            <li>✅ Can switch agents without penalty</li>
          </ul>

          <h4>Drawbacks to Buyer:</h4>
          <ul>
            <li>❌ Agents may not fully commit time/resources</li>
            <li>❌ Less loyalty from agents</li>
            <li>❌ Potential for confusion and miscommunication</li>
            <li>❌ Agents competing against each other, not cooperating</li>
          </ul>

          <h4>Benefits to Agent:</h4>
          <ul>
            <li>✅ Can sign up buyers without exclusive commitment</li>
            <li>✅ Easier to get buyers to sign agreement</li>
          </ul>

          <h4>Drawbacks to Agent:</h4>
          <ul>
            <li>❌ No protected commission - only paid if buyer purchases through you</li>
            <li>❌ Competing with other agents for same buyer</li>
            <li>❌ Risk of investing time with no compensation</li>
            <li>❌ Buyer may use your work to purchase with another agent</li>
          </ul>
        </div>

        <h3>33.4 Written vs. Verbal Agreements</h3>
        <p>
          Both exclusive and open buyer representation agreements can be written OR verbal, but written is STRONGLY recommended 
          and now REQUIRED in many situations (see Section 34).
        </p>

        <h4>Written Agreements (Recommended):</h4>
        <ul>
          <li>✅ Clear documentation of terms</li>
          <li>✅ Legal enforceability</li>
          <li>✅ Proof of agency relationship</li>
          <li>✅ Protection for both parties</li>
          <li>✅ Prevents misunderstandings</li>
          <li>✅ Required for MLS tours (Aug 2024 rule - see Section 34)</li>
        </ul>

        <h4>Verbal Agreements (Not Recommended):</h4>
        <ul>
          <li>❌ Hard to prove terms</li>
          <li>❌ Misunderstandings common</li>
          <li>❌ Difficult to enforce</li>
          <li>❌ No clear commission agreement</li>
          <li>❌ Can't tour MLS properties (new rule)</li>
        </ul>

        <h3>33.5 Comparison: Exclusive vs. Open</h3>
        <div className="comparison-table">
          <table>
            <thead>
              <tr>
                <th>Feature</th>
                <th>Exclusive Buyer Agreement</th>
                <th>Open Buyer Agreement</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Exclusivity</strong></td>
                <td>✅ Yes - One agent only</td>
                <td>❌ No - Multiple agents allowed</td>
              </tr>
              <tr>
                <td><strong>Buyer Commitment</strong></td>
                <td>✅ Committed to agent</td>
                <td>❌ Not committed</td>
              </tr>
              <tr>
                <td><strong>Agent Commitment</strong></td>
                <td>✅ Agent commits full service</td>
                <td>⚠️ Less commitment</td>
              </tr>
              <tr>
                <td><strong>Commission Protection</strong></td>
                <td>✅ Agent paid regardless of who finds property</td>
                <td>❌ Only if agent procures the sale</td>
              </tr>
              <tr>
                <td><strong>Duration</strong></td>
                <td>Specific time period</td>
                <td>Varies or ongoing</td>
              </tr>
              <tr>
                <td><strong>Other Agents Paid?</strong></td>
                <td>❌ No - exclusive agent only</td>
                <td>❌ No - only procuring agent</td>
              </tr>
              <tr>
                <td><strong>Buyer Flexibility</strong></td>
                <td>❌ Low - locked in</td>
                <td>✅ High - can shop around</td>
              </tr>
              <tr>
                <td><strong>Agent Investment</strong></td>
                <td>✅ High - protected</td>
                <td>❌ Low - risky</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h3>33.6 Negotiating Buyer Representation Agreements</h3>

        <h4>Everything is Negotiable:</h4>
        <ul>
          <li><strong>Commission Rate:</strong> Percentage or flat fee can be negotiated</li>
          <li><strong>Duration:</strong> Length of exclusive period is negotiable</li>
          <li><strong>Retainer:</strong> Whether upfront fee is required</li>
          <li><strong>Reimbursement:</strong> Whether retainer is credited at closing</li>
          <li><strong>Termination:</strong> How and when agreement can be cancelled</li>
          <li><strong>Geographic Scope:</strong> Where agent will help buyer search</li>
        </ul>

        <h4>What to Discuss with Buyer:</h4>
        <ol>
          <li><strong>Services Provided:</strong> Explain exactly what you'll do for buyer</li>
          <li><strong>Compensation:</strong> How you get paid and by whom (seller vs. buyer)</li>
          <li><strong>Duration:</strong> How long buyer will work exclusively with you</li>
          <li><strong>Termination:</strong> How either party can exit the agreement</li>
          <li><strong>Expectations:</strong> What buyer should expect and when</li>
          <li><strong>Communication:</strong> How often you'll update buyer</li>
        </ol>

        <h3>33.7 Best Practices</h3>
        <div className="best-practices">
          <ul>
            <li><strong>Always Use Written Agreements:</strong> Protects both parties and now required for tours</li>
            <li><strong>Explain Before Signing:</strong> Review entire agreement with buyer</li>
            <li><strong>Clarify Compensation:</strong> Make sure buyer understands how/when you're paid</li>
            <li><strong>Set Realistic Duration:</strong> 90-180 days is common for exclusive agreements</li>
            <li><strong>Include Termination Clause:</strong> Allow mutual termination with notice</li>
            <li><strong>Exclude Known Properties:</strong> List properties buyer already knows about</li>
            <li><strong>Document Everything:</strong> Keep signed copy in file</li>
            <li><strong>Follow New MLS Rules:</strong> Agreement required before tours (see Section 34)</li>
          </ul>
        </div>

        <p className="highlight">
          <strong>Remember:</strong> Buyer representation agreements formalize the agent-buyer relationship. Exclusive agreements 
          provide mutual commitment and protected compensation, while open agreements offer flexibility but less security. All 
          terms are negotiable, including commission rate, duration, and services. Written agreements are strongly recommended and 
          now REQUIRED before touring properties listed on MLS (August 2024 rule). Always explain the agreement thoroughly, clarify 
          compensation, and document the relationship. A clear, written agreement protects both buyer and agent.
        </p>
      </>
    )
  };

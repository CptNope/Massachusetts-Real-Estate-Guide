import React from 'react';

export const section = {
    id: 'home-inspection-law',
    icon: '🔍',
    title: '15. Home Inspection Law & Consumer Protection',
    subtitle: 'May 1, 2001 law - Facts for Consumers brochure, agent responsibilities, inspector recommendations',
    body: (
      <>
        <h3>31.1 Massachusetts Home Inspection Law</h3>
        <p className="highlight">
          <strong>Effective May 1, 2001:</strong> At time of signing the first written Contract to Purchase, licensees or Seller 
          (if no licensee involved) MUST provide the <strong>"Facts for Consumers"</strong> brochure educating consumers about 
          the home inspection process.
        </p>

        <div className="warning-box">
          <p><strong>⚠️ CRITICAL REQUIREMENT:</strong> This brochure must be provided when the FIRST written offer/contract is signed, 
          NOT at listing or first showing. Timing is important!</p>
        </div>

        <h4>When Must the Brochure Be Provided?</h4>
        <ul>
          <li><strong>Trigger Event:</strong> Signing the 1st written Contract to Purchase</li>
          <li><strong>Who Provides:</strong> Licensee involved in transaction, OR Seller if no licensee</li>
          <li><strong>Not Required At:</strong> Listing appointment, first showing, or verbal offers</li>
          <li><strong>Purpose:</strong> Educate consumers about their rights and the inspection process</li>
        </ul>

        <div className="info-box">
          <p><strong>Important Note:</strong> There is no space for buyer to acknowledge or sign the brochure, so it's recommended 
          that the buyer initial OR sign each page to document receipt.</p>
        </div>

        <h3>31.2 Agent Restrictions on Inspector Recommendations</h3>
        <p>
          The law places specific restrictions on which agents can recommend home inspectors, designed to prevent conflicts of 
          interest and ensure buyer protection.
        </p>

        <h4>Listing Agents & Dual Agents - CANNOT Recommend</h4>
        <div className="warning-box">
          <p><strong>❌ PROHIBITED:</strong> Listing Agents and Dual Agents <strong>cannot recommend a specific inspector or 
          inspection company</strong>.</p>
        </div>

        <h5>What Listing/Dual Agents CAN Do:</h5>
        <ul>
          <li>✅ Provide the state website with list of licensed inspectors</li>
          <li>✅ Explain the importance of home inspections</li>
          <li>✅ Encourage buyer to get an inspection</li>
          <li>✅ Answer general questions about the inspection process</li>
          <li>✅ Provide the "Facts for Consumers" brochure</li>
        </ul>

        <h5>What Listing/Dual Agents CANNOT Do:</h5>
        <ul>
          <li>❌ Recommend a specific inspector by name</li>
          <li>❌ Suggest a particular inspection company</li>
          <li>❌ Give buyer a list of "preferred" inspectors</li>
          <li>❌ Steer buyer toward any specific inspector</li>
        </ul>

        <h5>Why This Restriction Exists:</h5>
        <ul>
          <li>Listing agent represents seller - conflict of interest in choosing inspector</li>
          <li>Might recommend inspector who is "easy" on properties</li>
          <li>Could undermine buyer's ability to get thorough inspection</li>
          <li>Protects buyers from biased recommendations</li>
        </ul>

        <h4>Buyer Agents - CAN Recommend (with Disclosure)</h4>
        <div className="success-box">
          <p><strong>✅ PERMITTED:</strong> Buyer Agents <strong>can recommend</strong> specific inspectors IF they meet certain conditions.</p>
        </div>

        <h5>Requirements for Buyer Agent Recommendations:</h5>
        <ol>
          <li><strong>Written Agency Disclosure Required:</strong> Must have contractual agreement OR written agency disclosure form 
          between buyer and broker stating broker is acting exclusively for buyer as Buyer's Broker</li>
          <li><strong>Document the Relationship:</strong> Agency relationship must be clearly documented</li>
          <li><strong>Recommend Multiple Options:</strong> Best practice to give 3 home inspector names</li>
          <li><strong>Buyer Free to Choose:</strong> Always tell consumer they are free to choose ANY company they would like</li>
        </ol>

        <div className="best-practice">
          <h5>Best Practice for Buyer Agents:</h5>
          <ul>
            <li><strong>Give 3 Names:</strong> Recommend three home inspector names (not just one)</li>
            <li><strong>Explain Freedom:</strong> "You are free to choose any inspector you want, including ones not on this list"</li>
            <li><strong>No Pressure:</strong> Don't pressure buyer to use your recommended inspectors</li>
            <li><strong>Disclose Relationships:</strong> If you have any relationship with inspector (referral fees, etc.), disclose it</li>
            <li><strong>Provide State List:</strong> Also provide the state website with full list of licensed inspectors</li>
          </ul>
        </div>

        <h3>31.3 The "Rule of Three"</h3>
        <div className="key-concept">
          <p><strong>Recommend giving 3 home inspector names.</strong> This gives buyer options while still being helpful. 
          Always tell consumer they are free to choose any company they would like.</p>
        </div>

        <h4>Why Three Inspectors?</h4>
        <ul>
          <li>Provides buyer with choices</li>
          <li>Shows you're not steering to one specific company</li>
          <li>Allows buyer to compare prices and services</li>
          <li>Demonstrates you're acting in buyer's best interest</li>
          <li>Reduces appearance of kickback arrangements</li>
        </ul>

        <h3>31.4 State Resources</h3>
        <div className="info-box">
          <p><strong>Massachusetts Home Inspector Licensing:</strong> All home inspectors must be licensed by the state. The 
          state maintains a searchable database of licensed inspectors that agents can direct buyers to.</p>
        </div>

        <h4>What to Tell Buyers:</h4>
        <ul>
          <li>"I can provide you with the state website that lists all licensed home inspectors"</li>
          <li>"You should verify the inspector is licensed and insured"</li>
          <li>"You can choose any licensed inspector you prefer"</li>
          <li>"Feel free to get recommendations from friends, family, or your lender"</li>
          <li>"The inspection is for YOUR benefit - choose someone you're comfortable with"</li>
        </ul>

        <h3>31.5 Practical Scenarios</h3>

        <div className="scenario-box">
          <h4>Scenario 1: Listing Agent Asked for Inspector Recommendation</h4>
          <p><strong>Situation:</strong> You're the listing agent. Buyer asks: "Can you recommend a good home inspector?"</p>
          <p><strong>❌ Wrong Answer:</strong> "Sure, use ABC Inspections. They're great."</p>
          <p><strong>✅ Correct Answer:</strong> "As the listing agent, I cannot recommend a specific inspector. However, I can provide 
          you with the state website that lists all licensed inspectors. You're free to choose any inspector you'd like. You might 
          also ask your buyer's agent for recommendations."</p>
        </div>

        <div className="scenario-box">
          <h4>Scenario 2: Buyer Agent Providing Recommendations</h4>
          <p><strong>Situation:</strong> You're the buyer's agent with a signed buyer-broker agreement. Buyer asks for inspector recommendations.</p>
          <p><strong>✅ Correct Answer:</strong> "Since I'm your buyer's agent, I can provide some recommendations. Here are three 
          inspectors I've worked with who do thorough inspections: [Name 1], [Name 2], [Name 3]. However, you're absolutely free 
          to choose any licensed inspector you prefer. I can also give you the state website with the full list."</p>
        </div>

        <div className="scenario-box">
          <h4>Scenario 3: Dual Agent Situation</h4>
          <p><strong>Situation:</strong> You're acting as a dual agent. Buyer asks for inspector recommendations.</p>
          <p><strong>❌ Wrong Answer:</strong> "I know a great inspector..."</p>
          <p><strong>✅ Correct Answer:</strong> "As a dual agent representing both parties, I cannot recommend a specific inspector. 
          I can provide you with the state website listing all licensed inspectors. You have the right to choose any inspector you'd like."</p>
        </div>

        <h3>31.6 Liability Concerns</h3>

        <h4>Agent Can Be Liable For:</h4>
        <ul>
          <li>❌ Recommending unqualified or unlicensed inspector</li>
          <li>❌ Steering buyer to "easy" inspector who misses major defects</li>
          <li>❌ Receiving kickbacks from inspector without disclosure</li>
          <li>❌ Failing to provide "Facts for Consumers" brochure</li>
          <li>❌ Recommending inspector when acting as listing/dual agent</li>
        </ul>

        <h4>Agent is Protected When:</h4>
        <ul>
          <li>✅ Following the law's restrictions on recommendations</li>
          <li>✅ Providing multiple inspector names (if buyer's agent)</li>
          <li>✅ Disclosing any relationships with recommended inspectors</li>
          <li>✅ Giving buyer freedom to choose any inspector</li>
          <li>✅ Providing state resources and licensed inspector list</li>
          <li>✅ Documenting that "Facts for Consumers" brochure was provided</li>
        </ul>

        <h3>31.7 Key Takeaways</h3>
        <div className="summary-box">
          <ul>
            <li><strong>Brochure Required:</strong> "Facts for Consumers" at signing of 1st written Contract to Purchase</li>
            <li><strong>Have Buyer Initial:</strong> Get buyer to initial/sign each page for proof of receipt</li>
            <li><strong>Listing/Dual Agents:</strong> CANNOT recommend specific inspectors</li>
            <li><strong>Buyer Agents:</strong> CAN recommend IF proper agency disclosure exists</li>
            <li><strong>Rule of Three:</strong> Give three inspector names, not just one</li>
            <li><strong>Freedom of Choice:</strong> Always tell buyer they can choose ANY inspector</li>
            <li><strong>State Resources:</strong> Provide state website with licensed inspectors list</li>
            <li><strong>No Kickbacks:</strong> Disclose any financial relationships with inspectors</li>
          </ul>
        </div>

        <p className="highlight">
          <strong>Remember:</strong> The home inspection law is designed to protect consumers. Listing and dual agents cannot 
          recommend inspectors to avoid conflicts of interest. Buyer's agents can recommend IF they have proper written agency 
          disclosure. Always give buyers multiple options and remind them they're free to choose any inspector. Document that you 
          provided the "Facts for Consumers" brochure at the time of the first written offer. When in doubt, err on the side of 
          providing resources rather than specific recommendations.
        </p>
      </>
    )
  };

import React from 'react';

export const section = {
    id: 'fair-housing',
    icon: '⚖️',
    title: '13. Fair Housing Act - Complete Compliance Guide',
    subtitle: 'Protected classes, violations, penalties, advertising compliance, and your legal obligations',
    body: (
      <>
        <h3>21.1 Overview - Why Fair Housing Matters</h3>
        <p>
          The Fair Housing Act is <strong>FEDERAL LAW</strong> that prohibits discrimination in housing. 
          Violations can result in:
        </p>
        <ul>
          <li><strong>Criminal charges</strong> (if willful violation)</li>
          <li><strong>Civil lawsuits</strong> with unlimited damages</li>
          <li><strong>License suspension/revocation</strong></li>
          <li><strong>Fines up to $16,000 (first offense)</strong>, $37,500 (second), $65,000 (third+)</li>
          <li><strong>Attorney fees</strong> paid by violator</li>
          <li><strong>Reputation destruction</strong> - career ending</li>
        </ul>
        <p className="highlight">
          Fair Housing is <strong>NOT NEGOTIABLE</strong>. You cannot "accommodate" client requests that violate 
          Fair Housing, even if they ask you to. Refusing discriminatory requests is your legal and ethical duty.
        </p>

        <h3>21.2 Federal Protected Classes (Title VIII - Fair Housing Act of 1968 as amended)</h3>
        <div className="protected-classes">
          <h4>The 7 Federal Protected Classes:</h4>
          <ol>
            <li><strong>Race</strong> - Cannot discriminate based on race</li>
            <li><strong>Color</strong> - Cannot discriminate based on skin color</li>
            <li><strong>Religion</strong> - Cannot discriminate based on religious beliefs</li>
            <li><strong>National Origin</strong> - Cannot discriminate based on country of origin</li>
            <li><strong>Sex</strong> - Cannot discriminate based on gender (includes sexual harassment)</li>
            <li><strong>Familial Status</strong> - Cannot discriminate against families with children under 18, pregnant women, or those securing custody</li>
            <li><strong>Disability</strong> - Cannot discriminate against people with physical or mental disabilities</li>
          </ol>
        </div>

        <h3>21.3 Massachusetts Additional Protected Classes</h3>
        <p>Massachusetts law (Chapter 151B) provides <strong>ADDITIONAL</strong> protections beyond federal law:</p>
        <ul>
          <li><strong>Sexual Orientation</strong> - Gay, lesbian, bisexual protection</li>
          <li><strong>Gender Identity</strong> - Transgender protection</li>
          <li><strong>Age</strong> - Cannot discriminate based on age</li>
          <li><strong>Marital Status</strong> - Single, married, divorced</li>
          <li><strong>Military/Veteran Status</strong> - Cannot discriminate against veterans</li>
          <li><strong>Ancestry</strong> - Ethnic background</li>
          <li><strong>Public Assistance</strong> - Section 8, welfare recipients</li>
        </ul>
        <p className="highlight">
          <strong>Remember:</strong> Massachusetts law is BROADER than federal law. Always follow the law that 
          provides MORE protection to consumers.
        </p>

        <h3>21.4 What Constitutes Discrimination?</h3>
        
        <h4>Prohibited Actions:</h4>
        <div className="violation-examples">
          <h5>❌ Refusing to Show/Rent/Sell</h5>
          <ul>
            <li>"I don't have any properties available" (when you do)</li>
            <li>"That neighborhood isn't right for you"</li>
            <li>"The owner only wants [certain type] of tenant"</li>
            <li>Not returning calls from protected class members</li>
          </ul>

          <h5>❌ Different Terms or Conditions</h5>
          <ul>
            <li>Higher rent for families with children</li>
            <li>Larger security deposit for disabled persons</li>
            <li>Different lease terms based on race</li>
            <li>Requiring co-signers only for certain groups</li>
          </ul>

          <h5>❌ Steering</h5>
          <ul>
            <li>"You'd be happier in this neighborhood" (based on race/religion)</li>
            <li>"There are more people like you over there"</li>
            <li>Only showing certain areas to certain groups</li>
            <li>Channeling protected classes to/away from areas</li>
          </ul>

          <h5>❌ Blockbusting</h5>
          <ul>
            <li>"You should sell now before [protected class] moves in"</li>
            <li>"Property values are dropping because of [protected class]"</li>
            <li>Inducing panic selling based on protected class entry</li>
          </ul>

          <h5>❌ Discriminatory Advertising</h5>
          <ul>
            <li>"Perfect for traditional family"</li>
            <li>"No children"</li>
            <li>"Ideal for mature couple"</li>
            <li>"Christian community"</li>
            <li>"Walk to St. Mary's Church" (implies religion preference)</li>
            <li>Pictures showing only one race</li>
          </ul>

          <h5>❌ Disability Discrimination</h5>
          <ul>
            <li>Refusing reasonable accommodations (service animals)</li>
            <li>Refusing reasonable modifications (ramps, grab bars)</li>
            <li>Asking about nature/severity of disability</li>
            <li>"No wheelchairs" or "no disabled persons"</li>
          </ul>

          <h5>❌ Medical Condition Discrimination (CRITICAL!)</h5>
          <div className="medical-discrimination-warning">
            <p className="highlight">
              <strong>🚨 It's ILLEGAL to discriminate in the sale or rental of housing based on HIV or AIDS status.</strong>
            </p>
            <ul>
              <li><strong>HIPAA Laws:</strong> Cannot state anyone's current or past MEDICAL conditions</li>
              <li><strong>HIV/AIDS:</strong> Protected under disability discrimination laws</li>
              <li><strong>COVID-19:</strong> Medical condition - cannot discriminate based on COVID status or history</li>
              <li><strong>Privacy:</strong> Medical information is confidential and protected</li>
              <li><strong>Cannot Ask:</strong> You cannot inquire about applicant's medical history or conditions</li>
              <li><strong>Cannot Disclose:</strong> Even if you somehow know, you cannot share medical information</li>
            </ul>
            <p className="liability-warning">
              <strong>⚠️ Violations:</strong> HIPAA violations can result in criminal penalties up to $250,000 and 10 years in prison, 
              plus Fair Housing Act violations with fines up to $100,000+.
            </p>
          </div>

          <h5>❌ Familial Status Discrimination</h5>
          <ul>
            <li>"No children allowed"</li>
            <li>"Adults only" (except qualified senior housing 55+/62+)</li>
            <li>"Two-person maximum" (unless legitimate occupancy standard)</li>
            <li>Discouraging families with children</li>
          </ul>
        </div>

        <h3>21.5 Exemptions (Very Limited!)</h3>
        <div className="exemptions">
          <h4>Religious Organizations:</h4>
          <ul>
            <li>Can limit to members of own religion</li>
            <li>Only for non-commercial property</li>
            <li>Cannot discriminate on other bases (race, sex, etc.)</li>
          </ul>

          <h4>Private Clubs:</h4>
          <ul>
            <li>Can limit lodgings to members</li>
            <li>Must be truly private, not open to public</li>
            <li>Incidental income-producing purpose</li>
          </ul>

          <h4>Senior Housing (55+ or 62+):</h4>
          <ul>
            <li>62+ housing: All residents must be 62 or older</li>
            <li>55+ housing: 80% of units have at least one person 55+</li>
            <li>Must publish policies and procedures</li>
            <li>Must verify age</li>
            <li>Still cannot discriminate on other bases</li>
          </ul>

          <h4>Owner-Occupied Buildings (3 units or fewer):</h4>
          <ul>
            <li>Owner lives in one unit</li>
            <li>Building has 3 or fewer total units</li>
            <li>Cannot use discriminatory advertising</li>
            <li>Cannot use broker (loses exemption if you use agent!)</li>
          </ul>

          <p className="highlight">
            <strong>Critical:</strong> These exemptions are VERY NARROW. If you're involved as a real estate 
            professional, most exemptions DON'T APPLY. Always assume Fair Housing applies!
          </p>
        </div>

        <h3>21.6 Advertising Compliance</h3>
        <div className="advertising-rules">
          <h4>✅ SAFE - Use These Words:</h4>
          <ul>
            <li>Master bedroom, great room, family room</li>
            <li>Walk to schools, near parks</li>
            <li>Convenient to shopping, restaurants, highway</li>
            <li>Quiet neighborhood, tree-lined street</li>
            <li>Spacious, updated, modern, charming</li>
            <li>Pet-friendly (with landlord permission)</li>
          </ul>

          <h4>⚠️ USE WITH EXTREME CAUTION:</h4>
          <ul>
            <li>"Perfect for family" - Could imply no singles</li>
            <li>"Great for executives" - Could imply age/income discrimination</li>
            <li>"Near St. Joseph's Church" - Could imply religion preference</li>
            <li>"Mature landscaping" - Could imply age preference</li>
            <li>"Empty nester special" - Familial status discrimination</li>
          </ul>

          <h4>❌ NEVER USE - Prohibited Language:</h4>
          <ul>
            <li>"No children" - Familial status violation</li>
            <li>"Adults only" - Familial status violation (unless qualified senior)</li>
            <li>"Traditional family" - Familial status/marital status</li>
            <li>"Perfect for Christian family" - Religion violation</li>
            <li>"Integrated neighborhood" - Race violation</li>
            <li>"No wheelchairs" - Disability violation</li>
            <li>"English-speaking only" - National origin violation</li>
            <li>"Ideal for bachelor" - Familial status/sex discrimination</li>
          </ul>

          <h4>Photos and Images:</h4>
          <ul>
            <li>Use diverse representation in marketing materials</li>
            <li>Don't use only one race/age/family type in photos</li>
            <li>Be inclusive in visual representation</li>
            <li>Human models should represent diversity</li>
          </ul>
        </div>

        <h3>21.7 How to Handle Discriminatory Requests from Clients</h3>
        <div className="handling-discrimination">
          <h4>When Client Says: "I don't want to sell to [protected class]"</h4>
          <p className="proper-response">
            <strong>Your Response:</strong> "I understand you have preferences, but federal and state Fair 
            Housing laws prohibit me from discriminating against anyone based on [race, religion, etc.]. As a 
            licensed professional, I'm required to treat all potential buyers equally. I cannot and will not 
            honor that request. If you cannot comply with Fair Housing law, I will need to withdraw from 
            representing you."
          </p>

          <h4>When Client Says: "Don't show my property to families with kids"</h4>
          <p className="proper-response">
            <strong>Your Response:</strong> "That would be familial status discrimination, which is illegal 
            under the Fair Housing Act. I'm required by law to show your property to all qualified buyers 
            regardless of whether they have children. I cannot follow that instruction."
          </p>

          <h4>When Client Says: "I only want [protected class] tenants/buyers"</h4>
          <p className="proper-response">
            <strong>Your Response:</strong> "Even if you're trying to help a particular group, Fair Housing law 
            prohibits preferential treatment based on protected classes. We must treat all applicants equally 
            and select based on lawful criteria like credit, income, and rental history - not on race, religion, 
            or other protected characteristics."
          </p>

          <h4>Document Everything:</h4>
          <ul>
            <li>Keep records of discriminatory requests</li>
            <li>Document your refusal in writing</li>
            <li>Send follow-up email confirming your position</li>
            <li>Keep proof you did not discriminate</li>
            <li>Terminate relationship if client insists</li>
          </ul>
        </div>

        <h3>21.8 Reasonable Accommodations for Disabilities</h3>
        <div className="disability-rules">
          <h4>Reasonable Accommodations (Policy Changes):</h4>
          <p>Must allow disabled persons to request policy changes, such as:</p>
          <ul>
            <li><strong>Service animals</strong> - Even in "no pets" buildings</li>
            <li><strong>Assistance animals</strong> - Emotional support animals (with proper documentation)</li>
            <li><strong>Reserved parking</strong> - Closer to entrance</li>
            <li><strong>Modified payment schedules</strong> - If disability affects payment ability</li>
            <li><strong>Communication accommodations</strong> - Large print, electronic formats</li>
          </ul>

          <h4>Reasonable Modifications (Physical Changes):</h4>
          <p>Must allow disabled persons to make physical modifications at their expense:</p>
          <ul>
            <li>Installing grab bars in bathroom</li>
            <li>Widening doorways for wheelchairs</li>
            <li>Installing ramps</li>
            <li>Lowering countertops, cabinets</li>
            <li>Installing visual fire alarms for deaf tenants</li>
          </ul>
          <p><strong>Landlord's Rights:</strong></p>
          <ul>
            <li>Can require tenant to pay for modifications</li>
            <li>Can require restoration to original condition at lease end (if reasonable)</li>
            <li>Can require reasonable documentation of disability</li>
            <li>Cannot ask about nature/severity of disability</li>
          </ul>

          <h4>What You Can Ask:</h4>
          <ul>
            <li>✅ "Can you provide documentation from a healthcare provider that you have a disability?"</li>
            <li>✅ "Can you explain how the requested accommodation relates to your disability?"</li>
          </ul>

          <h4>What You CANNOT Ask:</h4>
          <ul>
            <li>❌ "What's wrong with you?"</li>
            <li>❌ "How severe is your disability?"</li>
            <li>❌ "Can you show me your medical records?"</li>
            <li>❌ "Are you taking medication?"</li>
          </ul>
        </div>

        <h3>21.9 Penalties and Enforcement</h3>
        <div className="penalties">
          <h4>HUD Administrative Complaints:</h4>
          <ul>
            <li><strong>First offense:</strong> Up to $16,000 fine</li>
            <li><strong>Second offense (within 5 years):</strong> Up to $37,500</li>
            <li><strong>Third+ offense (within 7 years):</strong> Up to $65,000</li>
            <li>Plus attorney fees and costs</li>
            <li>Plus actual damages to victim</li>
          </ul>

          <h4>Federal Lawsuit:</h4>
          <ul>
            <li><strong>Unlimited compensatory damages</strong> (emotional distress, humiliation)</li>
            <li><strong>Punitive damages</strong> (to punish and deter)</li>
            <li><strong>Injunctive relief</strong> (court orders to change practices)</li>
            <li><strong>Attorney fees</strong> paid by defendant</li>
            <li><strong>Criminal penalties</strong> if willful violation (fines and imprisonment)</li>
          </ul>

          <h4>State License Board:</h4>
          <ul>
            <li>License suspension</li>
            <li>License revocation</li>
            <li>Mandatory education</li>
            <li>Probation</li>
            <li>Public reprimand</li>
          </ul>

          <h4>NAR Professional Standards:</h4>
          <ul>
            <li>Article 10 violation</li>
            <li>Fines up to $15,000</li>
            <li>Suspension from association</li>
            <li>Expulsion from Realtor® membership</li>
          </ul>
        </div>

        <h3>21.10 Best Practices for Compliance</h3>
        <div className="best-practices">
          <h4>DO:</h4>
          <ul>
            <li>✅ Treat everyone equally regardless of protected class</li>
            <li>✅ Use the same criteria for all applicants</li>
            <li>✅ Document all decisions with legitimate business reasons</li>
            <li>✅ Refuse discriminatory requests from clients</li>
            <li>✅ Provide equal service to all</li>
            <li>✅ Show all available properties that meet stated criteria</li>
            <li>✅ Take Fair Housing training regularly</li>
            <li>✅ Display Equal Housing Opportunity logo</li>
            <li>✅ Keep records of all applicants and why each was accepted/rejected</li>
          </ul>

          <h4>DON'T:</h4>
          <ul>
            <li>❌ Steer based on protected class</li>
            <li>❌ Use discriminatory language in advertising</li>
            <li>❌ Ask about protected class status</li>
            <li>❌ Make assumptions about "fit" based on protected class</li>
            <li>❌ Accommodate client's discriminatory requests</li>
            <li>❌ Tell different stories to different people</li>
            <li>❌ Volunteer protected class information about neighborhoods</li>
            <li>❌ Ignore Fair Housing obligations because client insists</li>
          </ul>
        </div>

        <h3>21.11 Case Study Examples</h3>
        <div className="case-studies">
          <h4>Case 1: The Steering Violation</h4>
          <p><strong>Situation:</strong> Agent shows African American buyers only properties in predominantly 
          African American neighborhoods, despite buyers requesting diverse areas.</p>
          <p><strong>Violation:</strong> Steering based on race</p>
          <p><strong>Penalty:</strong> $65,000 HUD fine, license suspension, $100,000 civil judgment</p>
          
          <h4>Case 2: The "No Children" Ad</h4>
          <p><strong>Situation:</strong> Landlord instructs agent to advertise "Adults Only Building - 
          Perfect for Professionals"</p>
          <p><strong>Violation:</strong> Familial status discrimination in advertising</p>
          <p><strong>Penalty:</strong> $16,000 HUD fine to agent, $25,000 to landlord, mandatory training</p>
          
          <h4>Case 3: Service Animal Denial</h4>
          <p><strong>Situation:</strong> Landlord refuses to rent to blind tenant with service dog, citing 
          "no pets" policy</p>
          <p><strong>Violation:</strong> Failure to provide reasonable accommodation for disability</p>
          <p><strong>Penalty:</strong> $37,500 HUD fine, $50,000 emotional distress damages, attorney fees</p>
          
          <h4>Case 4: Religious Preference</h4>
          <p><strong>Situation:</strong> Seller tells agent "Only sell to Christian family"</p>
          <p><strong>Correct Response:</strong> Agent refuses, documents refusal, terminates listing if 
          seller insists</p>
          <p><strong>Outcome:</strong> Agent protected from liability by refusing to discriminate</p>
        </div>

        <p className="highlight">
          <strong>Remember:</strong> Fair Housing compliance is NON-NEGOTIABLE. Your license, your career, 
          and your freedom depend on it. When in doubt, treat everyone equally. You cannot "accommodate" 
          discriminatory requests even if clients insist. Refusing to discriminate is always the right choice!
        </p>

        <div className="critical-resources">
          <h4>Fair Housing Resources:</h4>
          <ul>
            <li><strong>HUD Fair Housing:</strong> 1-800-669-9777 | hud.gov/fairhousing</li>
            <li><strong>MA Commission Against Discrimination (MCAD):</strong> mass.gov/mcad</li>
            <li><strong>NAR Fair Housing Resources:</strong> nar.realtor/fairhousing</li>
            <li><strong>Equal Housing Opportunity Logo:</strong> Required in advertising</li>
          </ul>
        </div>
      </>
    )
  };

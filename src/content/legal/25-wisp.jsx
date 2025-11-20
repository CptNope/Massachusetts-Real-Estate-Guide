import React from 'react';

export const section = {
    id: 'wisp',
    icon: '🔒',
    title: '25. MA Privacy & Security Laws (WISP)',
    subtitle: 'Written Information Security Program - Protecting Client Data',
    body: (
      <>
        <h3>19.1 What is WISP?</h3>
        <p><strong>Written Information Security Program</strong> - Massachusetts law (201 CMR 17.00) requiring 
        businesses to implement and maintain a comprehensive written security program to protect personal 
        information of Massachusetts residents.</p>
        
        <p className="highlight">
          <strong>Applies to:</strong> ALL businesses that own or license personal information about Massachusetts 
          residents, including real estate brokerages, agents, and property managers.
        </p>

        <h3>19.2 What is "Personal Information"?</h3>
        <div className="personal-info-definition">
          <p><strong>Personal Information = Name + One or More of the Following:</strong></p>
          <ul>
            <li>✅ <strong>Social Security Number (SSN)</strong></li>
            <li>✅ <strong>Driver's License Number</strong> and state-issued identification card number</li>
            <li>✅ <strong>Financial Account Number</strong> or credit/debit card number, WITH OR WITHOUT 
            any required security code, access code, personal identification number, or passwords that would 
            permit access to a resident's financial account</li>
          </ul>

          <p><strong>Name Must Include:</strong></p>
          <ul>
            <li>First name and last name, OR</li>
            <li>First initial and last name</li>
          </ul>

          <p className="warning">
            ❌ <strong>Public Information is EXCLUDED</strong> - Information lawfully available to the general 
            public from federal, state, or local government records is not considered personal information under WISP.
          </p>
        </div>

        <h3>19.3 What Must Be Safeguarded?</h3>
        <div className="safeguarding-requirements">
          <p><strong>ALL of the following that contain personal information:</strong></p>
          <ul>
            <li>📄 <strong>Paper Records</strong> - Client files, applications, contracts</li>
            <li>💻 <strong>Electronic Records</strong> - Digital files, databases, emails</li>
            <li>🖥️ <strong>Computer Systems</strong> - Desktop computers, servers</li>
            <li>💼 <strong>Laptops</strong> - Mobile computers, notebooks</li>
            <li>💾 <strong>Portable Drive Devices</strong> - USB drives, external hard drives, smartphones, tablets</li>
          </ul>

          <h4>Real Estate Examples:</h4>
          <ul>
            <li>Purchase and sale agreements with financial info</li>
            <li>Loan applications and pre-approval letters</li>
            <li>Copies of driver's licenses or state IDs</li>
            <li>W-9 forms with SSNs</li>
            <li>Credit reports</li>
            <li>Wire transfer information</li>
            <li>Tenant applications with SSNs</li>
          </ul>
        </div>

        <h3>19.4 Data Breach Notification Requirements</h3>
        <div className="breach-notification">
          <p className="warning">
            <strong>⚠️ CRITICAL:</strong> Any person or business that knows of a breach in security laws 
            MUST file a notice with:
          </p>
          <ol>
            <li><strong>Massachusetts Attorney General</strong></li>
            <li><strong>Director of Office of Consumer Affairs</strong></li>
            <li><strong>Affected Residents</strong> (individuals whose information was breached)</li>
          </ol>

          <h4>What Constitutes a Breach?</h4>
          <ul>
            <li>Unauthorized access to personal information</li>
            <li>Lost or stolen laptop/device with unencrypted data</li>
            <li>Hacking or cyberattack</li>
            <li>Accidental disclosure to unauthorized parties</li>
            <li>Theft of paper files</li>
          </ul>

          <h4>Timeline for Notification:</h4>
          <ul>
            <li>As soon as possible</li>
            <li>No unreasonable delay</li>
            <li>Document when breach was discovered</li>
            <li>Consult attorney immediately</li>
          </ul>
        </div>

        <h3>19.5 Required Components of WISP Compliance</h3>
        <div className="wisp-components">
          <h4>1. Written Security Plan</h4>
          <ul>
            <li>Documented policies and procedures</li>
            <li>Must be in writing (not just verbal)</li>
            <li>Updated regularly</li>
            <li>Accessible to employees</li>
          </ul>

          <h4>2. Employee Training</h4>
          <ul>
            <li>Regular security training for all employees</li>
            <li>Onboarding training for new hires</li>
            <li>Annual refresher training</li>
            <li>Document training completion</li>
          </ul>

          <h4>3. Access Controls</h4>
          <ul>
            <li>Limit who can access personal information</li>
            <li>Use unique user IDs and passwords</li>
            <li>Terminate access when employee leaves</li>
            <li>Need-to-know basis only</li>
          </ul>

          <h4>4. Encryption</h4>
          <ul>
            <li>Encrypt electronic files containing personal information</li>
            <li>Use encrypted email for sensitive documents</li>
            <li>Encrypt laptops and portable devices</li>
            <li>Use secure file transfer methods</li>
          </ul>

          <h4>5. Secure Disposal</h4>
          <ul>
            <li>Shred paper documents with personal information</li>
            <li>Wipe or destroy electronic media before disposal</li>
            <li>Don't just delete - properly destroy</li>
            <li>Document disposal procedures</li>
          </ul>

          <h4>6. Regular Security Assessments</h4>
          <ul>
            <li>Periodically review security measures</li>
            <li>Test systems for vulnerabilities</li>
            <li>Update policies as needed</li>
            <li>Document assessments</li>
          </ul>

          <h4>7. Vendor Management</h4>
          <ul>
            <li>Ensure vendors protect personal information</li>
            <li>Written agreements with security requirements</li>
            <li>Verify vendor compliance</li>
            <li>Examples: cloud storage, CRM systems, transaction platforms</li>
          </ul>

          <h4>8. Incident Response Plan</h4>
          <ul>
            <li>Plan for responding to security breaches</li>
            <li>Designated person responsible</li>
            <li>Steps to contain and investigate breach</li>
            <li>Notification procedures</li>
          </ul>
        </div>

        <h3>19.6 Penalties for Non-Compliance</h3>
        <ul>
          <li><strong>Civil Penalties:</strong> Fines and damages</li>
          <li><strong>Attorney General Enforcement:</strong> State can take action</li>
          <li><strong>Private Right of Action:</strong> Affected individuals can sue</li>
          <li><strong>Reputational Damage:</strong> Loss of client trust</li>
          <li><strong>License Risk:</strong> Board of Registration can investigate</li>
        </ul>

        <h3>19.7 Practical Steps for Real Estate Professionals</h3>
        <div className="practical-steps">
          <h4>✅ DO:</h4>
          <ul>
            <li>Create and maintain a written WISP document</li>
            <li>Lock file cabinets with paper documents</li>
            <li>Encrypt laptops and mobile devices</li>
            <li>Use strong, unique passwords</li>
            <li>Shred documents before disposal</li>
            <li>Train all staff on security</li>
            <li>Use secure email for sensitive info</li>
            <li>Verify vendor security (DocuSign, CRMs, etc.)</li>
            <li>Report breaches immediately</li>
          </ul>

          <h4>❌ DON'T:</h4>
          <ul>
            <li>Email unencrypted SSNs or financial info</li>
            <li>Leave client files visible to others</li>
            <li>Use unsecured public Wi-Fi for client data</li>
            <li>Throw documents in regular trash</li>
            <li>Store passwords on sticky notes</li>
            <li>Give all employees access to everything</li>
            <li>Ignore security updates</li>
            <li>Assume vendors handle everything</li>
          </ul>
        </div>

        <p className="highlight">
          <strong>Bottom Line:</strong> WISP compliance is NOT optional for Massachusetts real estate professionals. 
          One data breach can result in significant fines, lawsuits, and career damage. Implement proper security 
          measures NOW, not after a breach occurs. When in doubt, consult with a cybersecurity professional or attorney.
        </p>
      </>
    )
  };

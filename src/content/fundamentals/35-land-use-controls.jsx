export const section = {
  id: 'land-use-controls',
  icon: '🏗️',
  title: '35. Land Use Controls & Zoning',
  subtitle: 'Public and Private Restrictions on Property Use',
  body: (
    <>
      <h3>🏛️ Public Land Use Controls (Government)</h3>

      <h4>🔹 1. Zoning Ordinances</h4>
      <ul>
        <li><strong>Authority:</strong> Local municipalities (cities/towns)</li>
        <li><strong>Purpose:</strong> Control land use for public health, safety, and welfare</li>
        <li><strong>Police Power:</strong> Government's right to regulate without compensation</li>
      </ul>

      <h5>Common Zoning Classifications:</h5>
      <ul>
        <li><strong>Residential:</strong> Single-family (R-1), multi-family (R-2, R-3)</li>
        <li><strong>Commercial:</strong> Retail, offices, services</li>
        <li><strong>Industrial:</strong> Manufacturing, warehouses</li>
        <li><strong>Agricultural:</strong> Farming, rural use</li>
        <li><strong>Mixed-Use:</strong> Combination of residential and commercial</li>
      </ul>

      <h5>Zoning Controls:</h5>
      <ul>
        <li><strong>Setback Requirements:</strong> Distance from property lines</li>
        <li><strong>Height Restrictions:</strong> Maximum building height</li>
        <li><strong>Lot Size Minimums:</strong> Minimum square footage required</li>
        <li><strong>Density:</strong> Number of units per acre</li>
        <li><strong>Use Restrictions:</strong> What activities are allowed</li>
        <li><strong>Parking Requirements:</strong> Minimum parking spaces required</li>
      </ul>

      <h4>🔹 2. Variance</h4>
      <ul>
        <li><strong>Definition:</strong> Permission to deviate from zoning requirements</li>
        <li><strong>Who Grants:</strong> Zoning Board of Appeals (ZBA)</li>
        <li><strong>Requirements to Get Variance:</strong>
          <ul>
            <li>Hardship exists (due to land shape, topography, etc.)</li>
            <li>Hardship not self-created</li>
            <li>Variance won't harm neighborhood character</li>
            <li>Minimum relief necessary</li>
          </ul>
        </li>
        <li><strong>Example:</strong> Odd-shaped lot needs setback variance to build</li>
      </ul>

      <h4>🔹 3. Special Permit (Conditional Use)</h4>
      <ul>
        <li><strong>Definition:</strong> Use allowed if specific conditions met</li>
        <li><strong>Who Grants:</strong> Planning Board or ZBA</li>
        <li><strong>Difference from Variance:</strong> Use is already allowed in zoning, just needs approval</li>
        <li><strong>Examples:</strong> Day care in residential zone, drive-through restaurant</li>
      </ul>

      <h4>🔹 4. Non-Conforming Use (Grandfathered)</h4>
      <ul>
        <li><strong>Definition:</strong> Property use predates current zoning (legally grandfathered)</li>
        <li><strong>Rights:</strong> Can continue existing use</li>
        <li><strong>Restrictions:</strong>
          <ul>
            <li>Cannot expand significantly</li>
            <li>If destroyed (&gt;50%), may not rebuild</li>
            <li>If abandoned, cannot restart</li>
          </ul>
        </li>
        <li><strong>Example:</strong> Commercial business in area later zoned residential</li>
      </ul>

      <h4>🔹 5. Building Codes</h4>
      <ul>
        <li><strong>Purpose:</strong> Ensure structural safety, sanitation, and fire protection</li>
        <li><strong>Covers:</strong> Construction standards, electrical, plumbing, HVAC</li>
        <li><strong>Enforcement:</strong> Building inspector issues permits and certificates of occupancy</li>
      </ul>

      <h4>🔹 6. Subdivision Regulations</h4>
      <ul>
        <li><strong>Purpose:</strong> Control division of land into lots</li>
        <li><strong>Requirements:</strong> Street layout, utilities, drainage, lot sizes</li>
        <li><strong>Approval:</strong> Planning Board reviews and approves subdivision plans</li>
      </ul>

      <h4>🔹 7. Environmental Controls</h4>
      <ul>
        <li><strong>Wetlands Protection (Chapter 131):</strong> Restricts building near wetlands</li>
        <li><strong>Septic Systems (Title V):</strong> Requires proper sewage disposal</li>
        <li><strong>Flood Zones:</strong> FEMA restrictions in flood-prone areas</li>
      </ul>

      <hr/>

      <h3>🏘️ Private Land Use Controls</h3>

      <h4>🔹 1. Deed Restrictions (Covenants, Conditions & Restrictions - CC&Rs)</h4>
      <ul>
        <li><strong>Definition:</strong> Limitations written into property deeds</li>
        <li><strong>Duration:</strong> Run with the land (bind future owners)</li>
        <li><strong>Enforcement:</strong> By property owners, not government</li>
        <li><strong>Examples:</strong>
          <ul>
            <li>Minimum house size requirements</li>
            <li>Architectural style restrictions</li>
            <li>No commercial use</li>
            <li>No fences over 6 feet</li>
            <li>Homeowner association rules</li>
          </ul>
        </li>
        <li><strong>⚠️ Supersedes Zoning:</strong> If deed says "no fences" but zoning allows 8-foot fences, deed restriction controls (more restrictive wins)</li>
      </ul>

      <h4>🔹 2. Easements</h4>
      <ul>
        <li><strong>Definition:</strong> Right to use someone else's land for specific purpose</li>
        <li><strong>Dominant Estate:</strong> Property that benefits from easement</li>
        <li><strong>Servient Estate:</strong> Property burdened by easement</li>
      </ul>

      <h5>Types of Easements:</h5>
      <ul>
        <li><strong>Easement Appurtenant:</strong> Benefits adjacent property (runs with the land)
          <ul>
            <li>Example: Driveway easement to landlocked lot</li>
          </ul>
        </li>
        <li><strong>Easement in Gross:</strong> Personal right (doesn't transfer)
          <ul>
            <li>Example: Utility company power lines</li>
          </ul>
        </li>
        <li><strong>Easement by Necessity:</strong> Created when property is landlocked
          <ul>
            <li>Example: No road access without crossing neighbor's land</li>
          </ul>
        </li>
        <li><strong>Easement by Prescription:</strong> Obtained through continuous, open use (like adverse possession)
          <ul>
            <li>Requires: 20 years of open, notorious, continuous use in MA</li>
          </ul>
        </li>
      </ul>

      <h4>🔹 3. Licenses</h4>
      <ul>
        <li><strong>Definition:</strong> Personal, revocable permission to use land</li>
        <li><strong>Difference from Easement:</strong> Can be revoked at any time, doesn't run with land</li>
        <li><strong>Example:</strong> Permission to park in neighbor's driveway</li>
      </ul>

      <h4>🔹 4. Encroachments</h4>
      <ul>
        <li><strong>Definition:</strong> Unauthorized intrusion onto another's property</li>
        <li><strong>Examples:</strong> Fence, building, driveway extends over property line</li>
        <li><strong>Discovery:</strong> Found during survey</li>
        <li><strong>Resolution:</strong> Remove encroachment, get easement, or purchase land</li>
      </ul>

      <hr/>

      <h3>🏛️ Government Powers Over Land</h3>

      <h4>🔹 1. Police Power</h4>
      <ul>
        <li><strong>Definition:</strong> Government's right to regulate for public health, safety, welfare</li>
        <li><strong>Compensation:</strong> NONE required</li>
        <li><strong>Examples:</strong> Zoning, building codes, environmental regulations</li>
      </ul>

      <h4>🔹 2. Eminent Domain (Condemnation)</h4>
      <ul>
        <li><strong>Definition:</strong> Government's right to take private property for public use</li>
        <li><strong>Requirement:</strong> MUST pay just compensation (fair market value)</li>
        <li><strong>Examples:</strong> Taking land for highways, schools, utilities</li>
        <li><strong>Process:</strong> Government makes offer → owner can challenge → court determines value</li>
      </ul>

      <h4>🔹 3. Taxation</h4>
      <ul>
        <li><strong>Definition:</strong> Government's right to levy property taxes</li>
        <li><strong>Priority:</strong> Tax liens are superior to all other liens</li>
        <li><strong>Enforcement:</strong> Can foreclose for unpaid taxes</li>
      </ul>

      <h4>🔹 4. Escheat</h4>
      <ul>
        <li><strong>Definition:</strong> Property reverts to state if owner dies with no will and no heirs</li>
        <li><strong>Rare:</strong> State becomes owner of last resort</li>
      </ul>

      <hr/>

      <h3>🔑 Key Exam Points</h3>
      <ul>
        <li>✅ <strong>Zoning:</strong> Local government control (police power, no compensation)</li>
        <li>✅ <strong>Variance:</strong> Exception to zoning due to hardship (ZBA approval)</li>
        <li>✅ <strong>Non-Conforming Use:</strong> Grandfathered use (can continue but not expand)</li>
        <li>✅ <strong>Deed Restrictions:</strong> More restrictive than zoning (controls)</li>
        <li>✅ <strong>Easement Appurtenant:</strong> Runs with land (benefits adjacent property)</li>
        <li>✅ <strong>Easement in Gross:</strong> Personal right (utility companies)</li>
        <li>✅ <strong>Police Power:</strong> Regulate without compensation</li>
        <li>✅ <strong>Eminent Domain:</strong> Take property WITH just compensation</li>
        <li>✅ <strong>Encroachment:</strong> Unauthorized intrusion (found in survey)</li>
      </ul>

      <hr/>

      <h3>❓ Common Exam Scenarios</h3>

      <div style={{background: '#f0f9ff', padding: '1rem', borderRadius: '8px', marginBottom: '1rem'}}>
        <strong>Q: Zoning allows 6-foot fences, but deed restriction says 4-foot maximum. Which controls?</strong>
        <p><strong>A:</strong> Deed restriction (4 feet). More restrictive control always applies. Owner must follow the stricter requirement.</p>
      </div>

      <div style={{background: '#f0f9ff', padding: '1rem', borderRadius: '8px', marginBottom: '1rem'}}>
        <strong>Q: Property owner wants to build closer to property line than setback allows. What do they need?</strong>
        <p><strong>A:</strong> Variance from Zoning Board of Appeals (ZBA). Must prove hardship not self-created.</p>
      </div>

      <div style={{background: '#f0f9ff', padding: '1rem', borderRadius: '8px', marginBottom: '1rem'}}>
        <strong>Q: Government takes property for new highway. Must they pay the owner?</strong>
        <p><strong>A:</strong> YES. Eminent domain requires just compensation (fair market value). This is NOT police power.</p>
      </div>

      <div style={{background: '#f0f9ff', padding: '1rem', borderRadius: '8px'}}>
        <strong>Q: Utility company has right to run power lines across property. What type of easement?</strong>
        <p><strong>A:</strong> Easement in gross (personal to utility company, doesn't run with land if property sells).</p>
      </div>
    </>
  )
};

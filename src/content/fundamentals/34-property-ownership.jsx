export const section = {
  id: 'property-ownership',
  icon: '🏠',
  title: '34. Property Ownership & Estates',
  subtitle: 'Types of Ownership, Deeds, and Estate Forms',
  body: (
    <>
      <h3>📋 Types of Property Ownership</h3>
      
      <h4>🔹 Sole Ownership (Severalty)</h4>
      <ul>
        <li><strong>Definition:</strong> One person owns the property alone</li>
        <li><strong>Rights:</strong> Complete control and decision-making authority</li>
        <li><strong>Transfer:</strong> Owner can sell, lease, or will the property freely</li>
        <li><strong>Example:</strong> Single person or corporation owning property</li>
      </ul>

      <h4>🔹 Concurrent Ownership (Co-Ownership)</h4>
      
      <h5>1. Joint Tenancy</h5>
      <ul>
        <li><strong>Key Feature:</strong> Right of Survivorship (property passes to surviving owner)</li>
        <li><strong>Four Unities Required:</strong>
          <ul>
            <li><strong>Time:</strong> All owners acquire interest at same time</li>
            <li><strong>Title:</strong> All owners acquire from same deed</li>
            <li><strong>Interest:</strong> All owners have equal shares</li>
            <li><strong>Possession:</strong> All owners have equal right to possess</li>
          </ul>
        </li>
        <li><strong>Breaking Joint Tenancy:</strong> One owner sells their interest → becomes tenancy in common</li>
        <li><strong>Estate Planning:</strong> Property bypasses probate (goes directly to survivor)</li>
      </ul>

      <h5>2. Tenancy in Common</h5>
      <ul>
        <li><strong>Key Feature:</strong> NO right of survivorship (interest passes to heirs)</li>
        <li><strong>Ownership:</strong> Can have unequal shares (50/30/20%)</li>
        <li><strong>Transfer:</strong> Each owner can sell/will their share independently</li>
        <li><strong>Unity:</strong> Only unity of possession required (all can use entire property)</li>
        <li><strong>Default:</strong> In MA, assumed unless "joint tenancy" explicitly stated</li>
      </ul>

      <h5>3. Tenancy by the Entirety</h5>
      <ul>
        <li><strong>Who Can Use:</strong> ONLY married couples in MA</li>
        <li><strong>Right of Survivorship:</strong> Yes (automatic to surviving spouse)</li>
        <li><strong>Protection:</strong> Creditor of ONE spouse cannot force sale</li>
        <li><strong>Termination:</strong> Divorce converts to tenancy in common</li>
        <li><strong>Sale:</strong> Both spouses MUST consent to sell</li>
      </ul>

      <h5>4. Community Property</h5>
      <p><strong>⚠️ NOT recognized in Massachusetts</strong> (only in 9 states like CA, TX, AZ)</p>

      <hr/>

      <h3>📜 Types of Estates (Duration of Ownership)</h3>

      <h4>🔹 Freehold Estates (Indefinite Duration)</h4>

      <h5>1. Fee Simple Absolute</h5>
      <ul>
        <li><strong>Highest Form of Ownership:</strong> Unlimited duration</li>
        <li><strong>Rights:</strong> Sell, lease, mortgage, will, or use as desired</li>
        <li><strong>Inheritance:</strong> Passes to heirs forever</li>
        <li><strong>Language:</strong> "To John Smith" or "To John Smith and his heirs"</li>
        <li><strong>Most Common:</strong> 95% of residential properties</li>
      </ul>

      <h5>2. Fee Simple Defeasible (Conditional)</h5>
      <ul>
        <li><strong>Condition:</strong> Ownership subject to a condition or limitation</li>
        <li><strong>Example:</strong> "To ABC School, as long as used for education"</li>
        <li><strong>If Violated:</strong> Property automatically or potentially reverts to grantor</li>
        <li><strong>Types:</strong> Fee simple determinable, fee simple subject to condition subsequent</li>
      </ul>

      <h5>3. Life Estate</h5>
      <ul>
        <li><strong>Duration:</strong> Lasts for lifetime of specified person (life tenant)</li>
        <li><strong>Example:</strong> "To Mary for her lifetime, then to John"</li>
        <li><strong>Life Tenant Rights:</strong> Use property, collect rent, sell life interest</li>
        <li><strong>Life Tenant Responsibilities:</strong> Pay taxes, maintain property, no waste</li>
        <li><strong>Remainderman:</strong> Person who gets property after life tenant dies</li>
        <li><strong>No Will Needed:</strong> Property automatically passes to remainderman</li>
      </ul>

      <h4>🔹 Leasehold Estates (Tenant Rights)</h4>

      <h5>1. Estate for Years</h5>
      <ul>
        <li><strong>Duration:</strong> Fixed period (1 month, 1 year, 5 years)</li>
        <li><strong>Termination:</strong> Automatically ends on specified date</li>
        <li><strong>Notice:</strong> No notice required to terminate</li>
      </ul>

      <h5>2. Periodic Tenancy (Estate from Period to Period)</h5>
      <ul>
        <li><strong>Duration:</strong> Month-to-month or year-to-year</li>
        <li><strong>Renewal:</strong> Automatically renews unless notice given</li>
        <li><strong>Notice Required:</strong> Usually 30 days for month-to-month</li>
      </ul>

      <h5>3. Estate at Will</h5>
      <ul>
        <li><strong>Duration:</strong> No fixed term</li>
        <li><strong>Termination:</strong> Either party can terminate with notice</li>
        <li><strong>MA Requirement:</strong> Usually 30 days notice</li>
      </ul>

      <h5>4. Estate at Sufferance</h5>
      <ul>
        <li><strong>Definition:</strong> Tenant stays after lease expires (holdover tenant)</li>
        <li><strong>No Permission:</strong> Tenant has no right to be there</li>
        <li><strong>Not Trespassing:</strong> But landlord can start eviction</li>
      </ul>

      <hr/>

      <h3>📄 Types of Deeds</h3>

      <h4>🔹 1. General Warranty Deed (Strongest Protection)</h4>
      <ul>
        <li><strong>Grantor Promises:</strong>
          <ul>
            <li><strong>Covenant of Seisin:</strong> Grantor owns the property</li>
            <li><strong>Covenant Against Encumbrances:</strong> No undisclosed liens/easements</li>
            <li><strong>Covenant of Quiet Enjoyment:</strong> No one will claim superior title</li>
            <li><strong>Covenant of Further Assurance:</strong> Will fix title defects if needed</li>
            <li><strong>Covenant of Warranty Forever:</strong> Will defend title against all claims</li>
          </ul>
        </li>
        <li><strong>Buyer Protection:</strong> Can sue grantor even years later if title problems arise</li>
        <li><strong>When Used:</strong> Most arm's-length sales in MA</li>
      </ul>

      <h4>🔹 2. Quitclaim Deed (No Warranties)</h4>
      <ul>
        <li><strong>Grantor Promise:</strong> "I give you whatever interest I have, if any"</li>
        <li><strong>NO Guarantees:</strong> Grantor may own nothing at all</li>
        <li><strong>Buyer Risk:</strong> No recourse if title problems appear</li>
        <li><strong>When Used:</strong>
          <ul>
            <li>Clearing title defects or clouds</li>
            <li>Transfers between family members</li>
            <li>Adding/removing spouse from title</li>
            <li>Divorce settlements</li>
          </ul>
        </li>
        <li><strong>⚠️ Buyer Beware:</strong> Get title insurance!</li>
      </ul>

      <h4>🔹 3. Bargain and Sale Deed (Limited Warranties)</h4>
      <ul>
        <li><strong>Grantor Promises:</strong> Grantor owns the property but makes no other warranties</li>
        <li><strong>Protection Level:</strong> Between warranty deed and quitclaim</li>
        <li><strong>When Used:</strong> Foreclosures, estate sales, tax sales</li>
        <li><strong>Buyer Protection:</strong> Limited – should get title insurance</li>
      </ul>

      <h4>🔹 4. Special Warranty Deed</h4>
      <ul>
        <li><strong>Limited Warranty:</strong> Only warrants against defects during grantor's ownership</li>
        <li><strong>Does NOT Cover:</strong> Problems from previous owners</li>
        <li><strong>When Used:</strong> Commercial transactions, REO properties</li>
      </ul>

      <h4>🔹 Essential Elements of a Valid Deed</h4>
      <ol>
        <li><strong>Competent Grantor:</strong> Seller must be of legal age and sound mind</li>
        <li><strong>Identifiable Grantee:</strong> Buyer must be named or identifiable</li>
        <li><strong>Consideration:</strong> Something of value exchanged (can be $1)</li>
        <li><strong>Granting Clause:</strong> Words of conveyance ("grant," "convey," "sell")</li>
        <li><strong>Legal Description:</strong> Property boundaries clearly described</li>
        <li><strong>Grantor's Signature:</strong> Seller must sign (notarized in MA)</li>
        <li><strong>Delivery and Acceptance:</strong> Deed must be delivered to and accepted by buyer</li>
      </ol>

      <hr/>

      <h3>🔑 Key Exam Points</h3>
      <ul>
        <li>✅ <strong>Joint Tenancy:</strong> Needs all 4 unities + right of survivorship</li>
        <li>✅ <strong>Tenancy in Common:</strong> Default in MA (no survivorship)</li>
        <li>✅ <strong>Tenancy by Entirety:</strong> Only for married couples + creditor protection</li>
        <li>✅ <strong>Fee Simple Absolute:</strong> Highest form of ownership (unlimited duration)</li>
        <li>✅ <strong>Life Estate:</strong> Lasts for someone's lifetime (life tenant + remainderman)</li>
        <li>✅ <strong>Warranty Deed:</strong> Strongest protection for buyer (5 covenants)</li>
        <li>✅ <strong>Quitclaim Deed:</strong> NO warranties (use for family transfers, clearing title)</li>
        <li>✅ <strong>Deed Requirements:</strong> Grantor signature, legal description, delivery & acceptance</li>
      </ul>

      <hr/>

      <h3>❓ Common Exam Scenarios</h3>

      <div style={{background: '#f0f9ff', padding: '1rem', borderRadius: '8px', marginBottom: '1rem'}}>
        <strong>Q: John and Mary own property as joint tenants. John sells his interest to Bob. What type of ownership do Mary and Bob have?</strong>
        <p><strong>A:</strong> Tenancy in common. Selling breaks the joint tenancy because the four unities are no longer met (Bob acquired at different time, from different deed).</p>
      </div>

      <div style={{background: '#f0f9ff', padding: '1rem', borderRadius: '8px', marginBottom: '1rem'}}>
        <strong>Q: Alice gives property "to Tom for his lifetime, remainder to Susan." Who owns what?</strong>
        <p><strong>A:</strong> Tom has a life estate (can use property during his life). Susan is the remainderman (gets fee simple when Tom dies). Tom cannot sell fee simple, only his life interest.</p>
      </div>

      <div style={{background: '#f0f9ff', padding: '1rem', borderRadius: '8px', marginBottom: '1rem'}}>
        <strong>Q: Should you use a quitclaim or warranty deed when buying from a stranger?</strong>
        <p><strong>A:</strong> Warranty deed! Quitclaim gives you NO protection. Only use quitclaim for family transfers or fixing title issues where you trust the grantor.</p>
      </div>

      <div style={{background: '#f0f9ff', padding: '1rem', borderRadius: '8px'}}>
        <strong>Q: Married couple in MA wants maximum creditor protection. What ownership type?</strong>
        <p><strong>A:</strong> Tenancy by the entirety. Creditor of ONE spouse cannot force sale or attach a lien. Both spouses must consent to any transfer.</p>
      </div>
    </>
  )
};

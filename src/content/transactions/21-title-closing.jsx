import React from 'react';

export const section = {
    id: 'title-closing',
    icon: '📄',
    title: '21. Title & Closing Process',
    subtitle: 'Title search, title insurance, closing documents, settlement statements - final transaction steps',
    body: (
      <>
        <h3>24.1 Title Search Process</h3>
        <p className="highlight">
          The title search verifies the seller has legal right to sell the property and uncovers any liens, 
          encumbrances, or defects that could affect ownership transfer.
        </p>

        <h4>What Title Search Reveals:</h4>
        <ul>
          <li><strong>Chain of Title:</strong> Complete ownership history</li>
          <li><strong>Outstanding Mortgages:</strong> Existing loans that must be paid off</li>
          <li><strong>Liens:</strong> Tax liens, mechanic's liens, judgment liens</li>
          <li><strong>Easements:</strong> Rights others have to use the property</li>
          <li><strong>Encroachments:</strong> Structures crossing property lines</li>
          <li><strong>Restrictions:</strong> Deed restrictions, covenants, HOA rules</li>
          <li><strong>Unpaid Taxes:</strong> Property tax arrears</li>
        </ul>

        <h4>Title Search Timeline:</h4>
        <div className="timeline">
          <ol>
            <li><strong>Ordered:</strong> Shortly after P&S signed (within 3-5 days)</li>
            <li><strong>Search Performed:</strong> Attorney or title company reviews public records (5-7 days)</li>
            <li><strong>Preliminary Report:</strong> Issues identified (if any) (day 7-10)</li>
            <li><strong>Cure Period:</strong> Seller resolves title defects (varies, can be 30+ days)</li>
            <li><strong>Final Title Commitment:</strong> Clear title confirmed before closing</li>
          </ol>
        </div>

        <h4>Common Title Issues:</h4>
        <div className="common-issues">
          <p><strong>Tax Liens:</strong> Unpaid federal/state/local taxes attached to property</p>
          <p><strong>Mechanic's Liens:</strong> Contractors/suppliers unpaid for work done</p>
          <p><strong>Judgment Liens:</strong> Court judgments against owner</p>
          <p><strong>Divorce/Estate Issues:</strong> Unclear ownership due to death or divorce</p>
          <p><strong>Survey Disputes:</strong> Boundary disagreements with neighbors</p>
          <p><strong>HOA Liens:</strong> Unpaid homeowners association fees</p>
        </div>

        <h3>24.2 Types of Title Insurance</h3>
        
        <h4>Owner's Title Insurance:</h4>
        <ul>
          <li><strong>Who it protects:</strong> Buyer/new owner</li>
          <li><strong>Coverage amount:</strong> Purchase price of property</li>
          <li><strong>Duration:</strong> As long as owner or heirs have interest in property</li>
          <li><strong>Cost:</strong> One-time premium at closing ($1,000-$3,000 typical)</li>
          <li><strong>Who pays:</strong> Usually buyer (negotiable)</li>
          <li><strong>What it covers:</strong>
            <ul>
              <li>Forged documents in chain of title</li>
              <li>Unknown heirs claiming ownership</li>
              <li>Undisclosed easements</li>
              <li>Errors in public records</li>
              <li>Fraud in prior transactions</li>
              <li>Liens not discovered in search</li>
            </ul>
          </li>
        </ul>

        <h4>Lender's Title Insurance:</h4>
        <ul>
          <li><strong>Who it protects:</strong> Mortgage lender</li>
          <li><strong>Coverage amount:</strong> Decreases as loan is paid down</li>
          <li><strong>Duration:</strong> Until loan is paid off</li>
          <li><strong>Cost:</strong> $500-$1,500 typical</li>
          <li><strong>Who pays:</strong> Buyer (required by lender if financing)</li>
          <li><strong>Required:</strong> YES, if obtaining mortgage</li>
          <li><strong>Note:</strong> Does NOT protect owner (only lender)</li>
        </ul>

        <h4>Why Both Policies?</h4>
        <div className="explanation">
          <p><strong>Lender's Policy:</strong> Required if you have a mortgage. Protects the lender's investment, 
          coverage decreases as you pay down loan. Expires when loan is paid off.</p>
          <p><strong>Owner's Policy:</strong> Optional but HIGHLY recommended. Protects your equity investment. 
          One-time premium covers you forever. Relatively inexpensive protection for major asset.</p>
        </div>

        <h3>24.3 Closing Documents</h3>
        
        <h4>Key Documents Buyer Signs:</h4>
        <ul>
          <li><strong>Closing Disclosure:</strong> Final costs breakdown (received 3 days before closing)</li>
          <li><strong>Promissory Note:</strong> Promise to repay loan</li>
          <li><strong>Mortgage/Deed of Trust:</strong> Pledges property as collateral</li>
          <li><strong>Truth in Lending Disclosure:</strong> APR, finance charges, payment schedule</li>
          <li><strong>Initial Escrow Disclosure:</strong> Estimated property tax and insurance payments</li>
          <li><strong>Affidavit of Title:</strong> Buyer swears no new liens since title search</li>
          <li><strong>Occupancy Affidavit:</strong> States buyer will occupy (primary residence)</li>
        </ul>

        <div className="important-note">
          <h4>⚠️ Critical Mortgage Terms to Understand:</h4>
          
          <h5>Acceleration Clause:</h5>
          <p><strong>What it is:</strong> Lender's right to declare the entire amount of the note payable in full 
          upon the happening of a certain event (such as payment default).</p>
          <p><strong>Impact:</strong> If borrower defaults, they would have to either refinance with a new lender 
          or sell the property to satisfy the full loan balance immediately.</p>
          
          <h5>Lender's Protection Rights:</h5>
          <p>If borrower doesn't fulfill its obligations, the lender can step in and make repairs, pay the real 
          estate taxes, insurance, condo fees, etc. in order to protect its investment.</p>
          <p className="warning"><strong>⚠️ Important:</strong> Money advanced by lender will be due immediately 
          from borrower or added to unpaid debt.</p>
        </div>

        <div className="important-note">
          <h4>💰 Usury & Prepayment</h4>
          
          <h5>USURY:</h5>
          <p><strong>Definition:</strong> Maximum interest rates that may be charged on loans are set by state laws.</p>
          <p className="warning"><strong>⚠️ Violation:</strong> Charging rates in excess of this rate is called 
          <strong> Usury</strong>. Lenders may be penalized for making these loans.</p>
          
          <h5>PREPAYMENT:</h5>
          <p>Lenders make their money over time by charging interest each year. The quicker the borrower pays off 
          the mortgage, the less amount of money they will pay in interest.</p>
          <p><strong>Prepayment Penalty:</strong> For this reason, some lenders charge a "prepayment penalty" for 
          paying off the loan before scheduled. Many states don't allow lenders to charge a prepayment penalty.</p>
          <p className="info"><strong>Federal Protection:</strong> Federal law prohibits penalties on FHA, VA and 
          Fannie Mae / Freddie Mac conforming loans.</p>
        </div>

        <div className="important-note">
          <h4>📝 Additional Mortgage Clauses</h4>
          
          <h5>Assignment Clause:</h5>
          <p><strong>Definition:</strong> Gives lender right to assign mortgage & note to a purchaser (typically 
          sold on the Secondary Market) to Fannie Mae or Freddie Mac in order to free up cash for giving future loans.</p>
          <p>In most assignments, the borrower is never notified and continues to make payments to the original 
          lender who services the note by collecting payments, handling payouts, releases and delinquencies.</p>
          
          <h5>Why This Matters:</h5>
          <ul>
            <li>🏦 <strong>Secondary Market:</strong> Most mortgages are sold after origination</li>
            <li>💰 <strong>Liquidity:</strong> Allows lenders to make more loans</li>
            <li>📧 <strong>Same Servicer:</strong> You often keep paying the same company</li>
            <li>📄 <strong>Terms Unchanged:</strong> Your loan terms remain the same</li>
          </ul>

          <h5>Estoppel Clause:</h5>
          <p><strong>Definition:</strong> Bars or prevents borrower from challenging the terms of the mortgage 
          amount due on principle & interest if mortgage & note are assigned to a 3rd party.</p>
          <p>Some mortgages contain an additional clause requiring the borrower to sign an Estoppel Certificate 
          when the mortgage is assigned.</p>
          <p className="info"><strong>A/k/a "Certificate of No Defense"</strong> - You agree not to dispute 
          the debt if the loan is sold.</p>
          
          <h5>Why This Matters:</h5>
          <ul>
            <li>⚖️ <strong>Waives Defense:</strong> Can't later claim loan terms were different</li>
            <li>🔒 <strong>Locked In:</strong> Protects the new lender/investor</li>
            <li>📋 <strong>May Require Signature:</strong> Some require Estoppel Certificate</li>
            <li>💼 <strong>Commercial Common:</strong> More common in commercial real estate</li>
          </ul>

          <h5>Partial Release Clause:</h5>
          <p><strong>Definition:</strong> Allows partial release of mortgagor to be released from a portion of 
          the security without releasing entire mortgage.</p>
          <p><strong>Example:</strong> A lender partially releases a mortgage on a lot in a subdivision to allow 
          developer to build a home on lot and sell it to a buyer.</p>
          
          <h5>Why This Matters:</h5>
          <ul>
            <li>🏗️ <strong>Development:</strong> Critical for subdivisions and land development</li>
            <li>📊 <strong>Phased Release:</strong> Sell individual lots while keeping blanket mortgage</li>
            <li>💵 <strong>Payment Required:</strong> Usually requires payment to release each parcel</li>
            <li>🔑 <strong>Developer Tool:</strong> Allows progressive sale of development parcels</li>
          </ul>

          <h5>Alienation Clause (Due-on-Sale Clause):</h5>
          <p><strong>Definition:</strong> When the property is sold, the lender will call the note due in full. 
          This prevents a buyer from taking over the old promissory note at more attractive terms.</p>
          
          <h5>Why This Matters:</h5>
          <ul>
            <li>💰 <strong>Protects Lender:</strong> Ensures current market interest rates apply</li>
            <li>🏠 <strong>No Assumption:</strong> Buyer can't take over seller's low-interest loan</li>
            <li>📈 <strong>Rate Protection:</strong> If rates increased, lender doesn't lose money</li>
            <li>⚠️ <strong>Must Pay Off:</strong> Seller must pay off loan at closing (from sale proceeds)</li>
            <li>🔄 <strong>Standard Today:</strong> Nearly all modern mortgages have this clause</li>
          </ul>

          <p className="info"><strong>Exception:</strong> FHA and VA loans are often assumable (buyer can take 
          over the loan with lender approval), but conventional loans typically are not.</p>
        </div>

        <div className="important-note">
          <h4>🏚️ Short Sale</h4>
          <p><strong>Definition:</strong> Homeowners who are having a legitimate financial hardship and are unable 
          to make mortgage payments may have to sell their home. However, if the home is worth less money than they 
          owe, a lender may consider a short-sale.</p>
          <p className="warning"><strong>⚠️ Requires:</strong> The note holder or "investors" approval.</p>
          
          <h5>How Short Sales Work:</h5>
          <ul>
            <li><strong>Seller Owes:</strong> $350,000 on mortgage</li>
            <li><strong>Home Worth:</strong> $300,000 (underwater)</li>
            <li><strong>Seller Can't:</strong> Bring $50,000+ to closing</li>
            <li><strong>Lender Agrees:</strong> To accept less than owed (takes a loss)</li>
            <li><strong>Sale Price:</strong> $300,000</li>
            <li><strong>Lender Gets:</strong> $300,000 (writes off $50,000 loss)</li>
          </ul>

          <h5>Short Sale Requirements:</h5>
          <ul>
            <li>📋 <strong>Financial Hardship:</strong> Job loss, medical bills, divorce, etc.</li>
            <li>💼 <strong>Lender Approval:</strong> Must approve both price and buyer</li>
            <li>📄 <strong>Documentation:</strong> Extensive financial paperwork required</li>
            <li>⏱️ <strong>Long Process:</strong> 3-6 months typical (lender review time)</li>
            <li>💰 <strong>No Proceeds:</strong> Seller gets nothing, just avoids foreclosure</li>
          </ul>

          <h5>Short Sale vs. Foreclosure:</h5>
          <div className="comparison">
            <p><strong>Short Sale (Better for Seller):</strong></p>
            <ul>
              <li>Less damage to credit (still significant, but better)</li>
              <li>Can buy again in 2-4 years typically</li>
              <li>More dignified exit</li>
              <li>May avoid deficiency judgment in some cases</li>
            </ul>

            <p><strong>Foreclosure (Worst Case):</strong></p>
            <ul>
              <li>Severe credit damage (7-10 years)</li>
              <li>Can't buy again for 5-7 years typically</li>
              <li>Public record</li>
              <li>Possible deficiency judgment (lender sues for loss)</li>
            </ul>
          </div>

          <h5>Agent's Role in Short Sales:</h5>
          <ul>
            <li>✅ <strong>Specialized Knowledge:</strong> Short sales require expertise</li>
            <li>✅ <strong>Lender Negotiation:</strong> Work with lender's loss mitigation department</li>
            <li>✅ <strong>Manage Expectations:</strong> Buyers must be patient (long process)</li>
            <li>✅ <strong>Documentation:</strong> Help seller gather financial hardship docs</li>
            <li>✅ <strong>Multiple Offers:</strong> Present strongest offer to lender</li>
            <li>⚠️ <strong>No Guarantee:</strong> Lender may reject even accepted offer</li>
          </ul>

          <p className="highlight">
            <strong>For Buyers:</strong> Short sales can be good deals, but require patience. Offer may be accepted 
            by seller but still need lender approval. Cash buyers or strong financing recommended.
          </p>
        </div>

        <div className="important-note">
          <h4>📋 Additional Financing Terms</h4>
          
          <h5>Balloon Payment:</h5>
          <p><strong>Definition:</strong> Larger final payment of loan, usually pays off the loan.</p>
          
          <h6>How Balloon Payments Work:</h6>
          <ul>
            <li><strong>Example:</strong> 30-year amortization, but loan due in 7 years</li>
            <li><strong>Payments 1-83:</strong> Normal monthly payments (as if 30-year loan)</li>
            <li><strong>Payment 84 (7 years):</strong> BALLOON - entire remaining balance due</li>
            <li><strong>Typical balloon:</strong> $300,000 loan → 7 years later owe $250,000+ in one payment</li>
          </ul>

          <h6>Why Balloon Payments Exist:</h6>
          <ul>
            <li>💰 <strong>Lower Payments:</strong> Monthly payments lower than fully amortized</li>
            <li>🏦 <strong>Seller Financing:</strong> Common in seller-financed deals</li>
            <li>💼 <strong>Commercial Loans:</strong> Standard in commercial real estate</li>
            <li>🔄 <strong>Assumption:</strong> Borrower expects to refinance or sell before balloon due</li>
          </ul>

          <h6>Balloon Payment Risks:</h6>
          <ul>
            <li>⚠️ <strong>Refinance Risk:</strong> What if rates are high when balloon due?</li>
            <li>📉 <strong>Value Risk:</strong> What if property value dropped? Can't refinance</li>
            <li>💵 <strong>Must Pay:</strong> If can't refinance or sell, lose property</li>
            <li>🏚️ <strong>Foreclosure Risk:</strong> Many foreclosures happen at balloon date</li>
          </ul>

          <h5>Default:</h5>
          <p><strong>Definition:</strong> Failure to pay or comply with terms of mortgage or promissory note.</p>
          
          <h6>What Constitutes Default:</h6>
          <ul>
            <li>❌ <strong>Missed Payments:</strong> Not paying monthly mortgage</li>
            <li>❌ <strong>Late Payments:</strong> Consistently paying after due date</li>
            <li>❌ <strong>Property Taxes:</strong> Not paying real estate taxes</li>
            <li>❌ <strong>Insurance:</strong> Letting homeowner's insurance lapse</li>
            <li>❌ <strong>Property Condition:</strong> Allowing property to deteriorate (waste)</li>
            <li>❌ <strong>HOA Fees:</strong> Not paying condo/HOA fees</li>
          </ul>

          <h6>Consequences of Default:</h6>
          <p className="warning"><strong>Late payment fees & grace period given.</strong></p>
          <ul>
            <li>💵 <strong>Late Fees:</strong> Typically 4-5% of payment amount</li>
            <li>📅 <strong>Grace Period:</strong> Usually 10-15 days after due date</li>
            <li>📞 <strong>Collection Calls:</strong> Lender begins calling after 30 days</li>
            <li>📋 <strong>Demand Letter:</strong> Formal notice to cure default (60-90 days)</li>
            <li>⚖️ <strong>Acceleration:</strong> Lender can call entire loan due</li>
            <li>🏚️ <strong>Foreclosure:</strong> Legal process to take property begins</li>
          </ul>

          <p className="info"><strong>FHA Loans:</strong> 3 months grace period before starting foreclosure process.</p>

          <h5>Foreclosure:</h5>
          <p><strong>Definition:</strong> Process of terminating borrower's equitable right of redemption.</p>
          
          <h6>What is "Equitable Right of Redemption"?</h6>
          <p>Borrower's right to reclaim property by paying off entire debt + costs before foreclosure sale. 
          This right exists even after default, giving borrower chance to save home.</p>

          <h6>2 Types of Foreclosure Proceedings:</h6>

          <div className="foreclosure-type">
            <h5>1️⃣ Judicial Foreclosure (Court Process):</h5>
            <p><strong>Process:</strong> Lender brings suit asking to cut off borrower's rights & sell property 
            at Auction.</p>
            
            <ul>
              <li><strong>Must go through courts:</strong> Lawsuit filed, court hearing required</li>
              <li><strong>Takes longer:</strong> 6-18 months typical (varies by state)</li>
              <li><strong>Borrower rights:</strong> May be allowed up to 1 year or more to bring payments up to date</li>
              <li><strong>Public auction:</strong> Property sold to highest bidder at courthouse steps</li>
              <li><strong>Redemption period:</strong> Some states allow time after sale to reclaim property</li>
              <li><strong>Deficiency judgment possible:</strong> Lender can sue for difference if sale price &lt; debt</li>
            </ul>

            <h6>Judicial Foreclosure Timeline:</h6>
            <ol>
              <li><strong>Day 1:</strong> Borrower defaults (misses payments)</li>
              <li><strong>90 days:</strong> Lender files lawsuit (lis pendens)</li>
              <li><strong>6-12 months:</strong> Court hearings, borrower can contest</li>
              <li><strong>12-18 months:</strong> Judgment entered, auction scheduled</li>
              <li><strong>Auction Day:</strong> Property sold to highest bidder</li>
              <li><strong>Post-Sale:</strong> Possible redemption period (if state allows)</li>
            </ol>
          </div>

          <div className="foreclosure-type">
            <h5>2️⃣ Statutory Foreclosure (Power of Sale):</h5>
            <p><strong>Process:</strong> Quicker method - permitted to enter & take possession without courts 
            permission.</p>
            
            <ul>
              <li><strong>No court required:</strong> Based on power of sale clause in mortgage</li>
              <li><strong>Much faster:</strong> 2-4 months typical</li>
              <li><strong>If payments not brought current:</strong> Right of redemption is terminated</li>
              <li><strong>Debt deemed paid:</strong> To extent of property value (sale proceeds satisfy debt)</li>
              <li><strong>Lender in possession:</strong> While lender is in possession, they have rights to collect 
              rents & must manage & maintain property for benefit of Borrower</li>
              <li><strong>Less expensive:</strong> No court costs, faster process</li>
            </ul>

            <h6>Statutory Foreclosure Timeline:</h6>
            <ol>
              <li><strong>Day 1:</strong> Borrower defaults</li>
              <li><strong>30-45 days:</strong> Notice of Default (NOD) filed & mailed</li>
              <li><strong>90 days:</strong> Notice of Sale published</li>
              <li><strong>21 days later:</strong> Auction held</li>
              <li><strong>Auction Day:</strong> Property sold, borrower must vacate</li>
              <li><strong>No redemption:</strong> Usually no post-sale redemption period</li>
            </ol>
          </div>

          <h6>Which States Use Which Method?</h6>
          <ul>
            <li><strong>Judicial States:</strong> Connecticut, Florida, Illinois, New Jersey, New York, Ohio, Pennsylvania</li>
            <li><strong>Non-Judicial States:</strong> California, Georgia, Texas, Virginia, Washington</li>
            <li><strong>Massachusetts:</strong> Uses non-judicial (statutory) foreclosure primarily</li>
            <li><strong>Hybrid States:</strong> Some allow both methods</li>
          </ul>

          <div className="ma-specific">
            <h5>🏛️ Massachusetts-Specific Foreclosure Rules</h5>

            <h6>Power of Sale Foreclosure in MA:</h6>
            <p className="highlight"><strong>⭐ Commonly used in MA.</strong> Right to sell property at Auction.</p>
            
            <ul>
              <li><strong>Notice of Sale:</strong> Must be given to Borrower by registered mail</li>
              <li><strong>Publication Required:</strong> Notice of sale must be publicized in local newspapers</li>
              <li><strong>Timeline:</strong> Typically 90-120 days from first notice to auction</li>
              <li><strong>Auction:</strong> Property sold to highest bidder at public auction</li>
            </ul>

            <h6>⚔️ Soldiers and Sailors Civil Relief Act (SCRA):</h6>
            <p className="warning"><strong>Protection for Military Members:</strong> Bars lenders from foreclosing 
            against person in military or until a person has been out of service for 3 months. Other limitations 
            also apply.</p>
            <ul>
              <li>Cannot foreclose on active duty service member</li>
              <li>Protection extends 3 months after leaving service</li>
              <li>Court approval required if attempting foreclosure</li>
              <li>Interest rate may be capped at 6% during active duty</li>
              <li>Applies to mortgages originated before active duty</li>
            </ul>

            <h6>Mortgagor's Equitable Right of Redemption in MA:</h6>
            <p>Allows borrower in default to redeem title prior to foreclosure.</p>
            <p className="warning"><strong>⚠️ CRITICAL MA RULE:</strong> In MA, right of redemption is terminated 
            at the moment of foreclosure sale; as with Sheriff's Sales or Tax Sales. <strong>MA has NO statutory 
            right of redemption.</strong></p>
            
            <ul>
              <li><strong>Before Sale:</strong> Borrower can pay off debt + costs to stop foreclosure</li>
              <li><strong>At Auction:</strong> Right terminates - no redemption after sale</li>
              <li><strong>Different from other states:</strong> Many states allow post-sale redemption (MA does not)</li>
              <li><strong>Sheriff's Sales:</strong> Same rule - no post-sale redemption</li>
              <li><strong>Tax Sales:</strong> Same rule - no post-sale redemption</li>
            </ul>

            <h6>Deficiency Due After the Sale:</h6>
            <p>Any excess proceeds after payment of all expenses related to foreclosure are returned to borrower.</p>
            <p><strong>If after sale there is still a deficiency, borrower is liable.</strong></p>
            
            <ul>
              <li><strong>Sale Price &gt; Debt:</strong> Borrower receives excess (rare)</li>
              <li><strong>Sale Price &lt; Debt:</strong> Borrower owes deficiency</li>
              <li><strong>Bank may forgive:</strong> In which case treated as taxable income to borrower</li>
              <li><strong>Bank may sue:</strong> Deficiency judgment for remaining balance</li>
              <li><strong>1099-C Form:</strong> Cancelled debt reported to IRS as income</li>
            </ul>

            <p className="example"><strong>Example:</strong></p>
            <ul>
              <li>Mortgage balance: $300,000</li>
              <li>Foreclosure costs: $10,000</li>
              <li>Auction sale price: $250,000</li>
              <li>Deficiency: $60,000 ($300K + $10K - $250K)</li>
              <li>Borrower liable for $60,000</li>
            </ul>

            <h6>Effect of Mortgage Foreclosure Sale Upon Other Liens:</h6>
            <p>Foreclosure sale concludes (eliminates) the rights of all other lienholders dated AFTER the 
            mortgage was recorded.</p>
            
            <ul>
              <li><strong>Senior Liens:</strong> Recorded BEFORE mortgage remain (property taxes, earlier mortgages)</li>
              <li><strong>Junior Liens:</strong> Recorded AFTER mortgage are wiped out (2nd mortgages, HOA liens, judgments)</li>
              <li><strong>Buyer Receives:</strong> Deed with no warranties and is subject to paying unpaid taxes and any labor liens</li>
              <li><strong>Tax Liens:</strong> Always survive foreclosure (property taxes have priority)</li>
              <li><strong>Mechanic's Liens:</strong> May survive depending on recording date</li>
            </ul>

            <p className="warning"><strong>⚠️ Buyer Beware:</strong> Buying foreclosed property means accepting 
            it "as-is" with potential tax and lien issues!</p>

            <h6>Deed in Lieu of Foreclosure:</h6>
            <p>In order to avoid expense of foreclosure sale, lender may accept a deed (friendly foreclosure - 
            "Jingle Mail") in full payment of debt.</p>
            
            <h5>How Deed in Lieu Works:</h5>
            <ul>
              <li><strong>Borrower surrenders:</strong> Voluntarily gives deed to lender</li>
              <li><strong>Avoids foreclosure:</strong> No public auction or legal proceedings</li>
              <li><strong>Faster process:</strong> Typically 30-90 days vs. 6+ months foreclosure</li>
              <li><strong>Less credit damage:</strong> Better than foreclosure on credit report</li>
              <li><strong>May avoid deficiency:</strong> Lender may agree to forgive remaining balance</li>
            </ul>

            <h5>Disadvantage of Deed in Lieu:</h5>
            <p className="warning"><strong>⚠️ MAJOR ISSUE:</strong> Conveyance is subject to ALL existing liens 
            by borrower, whereas they would be eliminated by a foreclosure sale.</p>
            
            <ul>
              <li><strong>Junior liens remain:</strong> 2nd mortgages, HOA liens, judgments stay attached</li>
              <li><strong>Lender gets messy title:</strong> Must deal with junior lienholders</li>
              <li><strong>Loses insurance guarantees:</strong> Lender loses rights to FHA, PMI or VA guarantees</li>
              <li><strong>Why lenders resist:</strong> Foreclosure gives cleaner title</li>
              <li><strong>Best when:</strong> No junior liens exist</li>
            </ul>

            <p className="example"><strong>Example:</strong></p>
            <ul>
              <li>1st Mortgage: $300,000</li>
              <li>2nd Mortgage: $50,000 (junior lien)</li>
              <li>HOA Lien: $5,000 (junior lien)</li>
              <li><strong>Foreclosure:</strong> Wipes out $50K + $5K = clean title</li>
              <li><strong>Deed in Lieu:</strong> All liens remain = lender inherits $55K in junior debt</li>
            </ul>
          </div>

          <h6>Avoiding Foreclosure - Options:</h6>
          <ul>
            <li>💰 <strong>Reinstatement:</strong> Pay all missed payments + fees to bring current</li>
            <li>📝 <strong>Forbearance:</strong> Temporary payment reduction/pause from lender</li>
            <li>🔄 <strong>Loan Modification:</strong> Permanently change loan terms</li>
            <li>🏠 <strong>Short Sale:</strong> Sell for less than owed (with lender approval)</li>
            <li>🤝 <strong>Deed in Lieu:</strong> Voluntarily give property back to lender</li>
            <li>⚖️ <strong>Bankruptcy:</strong> Chapter 13 can stop foreclosure temporarily</li>
          </ul>

          <h6>Impact on Credit:</h6>
          <ul>
            <li>📉 <strong>Foreclosure:</strong> Drops credit 200-300+ points, stays 7 years</li>
            <li>📉 <strong>Short Sale:</strong> Drops credit 100-200 points, stays 7 years</li>
            <li>📉 <strong>Deed in Lieu:</strong> Similar to short sale impact</li>
            <li>📉 <strong>Bankruptcy:</strong> Drops credit 150-250 points, stays 7-10 years</li>
            <li>⏱️ <strong>Recovery Time:</strong> 3-7 years before qualifying for new mortgage</li>
          </ul>
        </div>

        <div className="important-note">
          <h4>📚 More Financing Terms to Know</h4>
          
          <h5>Subordination Agreement:</h5>
          <p><strong>Definition:</strong> In the event that a second lien has a higher amount than the first, 
          the lender may require a subordination agreement, in which the first lender subordinates or lowers 
          its lien position to that of the second lender.</p>
          <p className="warning"><strong>⚠️ To be valid, both lenders must sign the agreement.</strong></p>
          
          <h6>When Subordination Agreements Are Used:</h6>
          <ul>
            <li><strong>Refinancing:</strong> Original mortgage was $400K, now worth $500K, refinancing to $450K</li>
            <li><strong>2nd mortgage stays:</strong> Want to keep 2nd mortgage in place</li>
            <li><strong>Problem:</strong> New refinance becomes 1st position, bumps 2nd mortgage to 3rd</li>
            <li><strong>Solution:</strong> Subordination agreement keeps 2nd mortgage in 2nd position</li>
          </ul>

          <h6>How Subordination Works:</h6>
          <ul>
            <li><strong>Original situation:</strong> 1st mortgage $400K, 2nd mortgage $50K</li>
            <li><strong>Refinance new 1st:</strong> $450K would normally become 1st position</li>
            <li><strong>Old 1st paid off:</strong> 2nd mortgage jumps to 1st position (bad for new lender!)</li>
            <li><strong>Subordination agreement:</strong> Old 2nd agrees to stay in 2nd position behind new loan</li>
            <li><strong>Result:</strong> New loan 1st position, old 2nd stays 2nd position</li>
          </ul>

          <h6>Why This Matters:</h6>
          <ul>
            <li>🏦 <strong>Lien Priority:</strong> Determines who gets paid first in foreclosure</li>
            <li>💰 <strong>Protects Lenders:</strong> New lender needs 1st position for better security</li>
            <li>📋 <strong>Both Must Sign:</strong> Subordinating lender must agree (may charge fee)</li>
            <li>💵 <strong>Subordination Fee:</strong> Typically $200-$500 for 2nd lender to agree</li>
            <li>⚠️ <strong>May Refuse:</strong> 2nd lender can refuse if new loan too large or risky</li>
          </ul>

          <h5>Straight Loan (Interest-Only Loan):</h5>
          <p><strong>Definition:</strong> Interest only loan followed by payment of the full principle at the 
          end of the term of the loan.</p>
          
          <h6>How Straight Loans Work:</h6>
          <ul>
            <li><strong>Example:</strong> $300,000 loan at 6% interest, 5-year term</li>
            <li><strong>Monthly payment:</strong> $1,500 (interest only: $300K × 6% ÷ 12)</li>
            <li><strong>Years 1-5:</strong> Pay $1,500/month, principal stays $300,000</li>
            <li><strong>End of Year 5:</strong> Pay entire $300,000 principal + final interest payment</li>
            <li><strong>Total due at end:</strong> $300,000 balloon payment</li>
          </ul>

          <h6>Advantages:</h6>
          <ul>
            <li>✅ <strong>Lower Payments:</strong> Much lower than fully amortized loan</li>
            <li>✅ <strong>Cash Flow:</strong> Frees up cash for other investments</li>
            <li>✅ <strong>Tax Deduction:</strong> All payment is tax-deductible interest</li>
            <li>✅ <strong>Short-Term:</strong> Good if planning to sell or refinance soon</li>
          </ul>

          <h6>Disadvantages:</h6>
          <ul>
            <li>❌ <strong>No Equity Building:</strong> Principal never decreases</li>
            <li>❌ <strong>Balloon Risk:</strong> Must pay entire principal at end</li>
            <li>❌ <strong>Refinance Risk:</strong> What if can't refinance when due?</li>
            <li>❌ <strong>Not Common:</strong> Few lenders offer for residential (more for commercial)</li>
          </ul>

          <p className="example"><strong>Comparison:</strong></p>
          <ul>
            <li><strong>Straight Loan:</strong> $300K at 6%, 30 years = $1,500/mo + $300K balloon</li>
            <li><strong>Amortized Loan:</strong> $300K at 6%, 30 years = $1,799/mo, no balloon</li>
            <li><strong>Savings:</strong> $299/month, but owe full principal at end</li>
          </ul>

          <h5>CLUE Report (Comprehensive Loss Underwriting Exchange):</h5>
          <p><strong>Definition:</strong> Database of insurance claims that have been made in past 5 years. 
          Insurance company can provide upon request.</p>
          
          <h6>What CLUE Reports Show:</h6>
          <ul>
            <li><strong>Property Claims:</strong> All insurance claims on property (last 5 years)</li>
            <li><strong>Personal Claims:</strong> Claims made by homeowner (follows the person)</li>
            <li><strong>Claim Details:</strong> Date, type of claim, amount paid</li>
            <li><strong>Claim Status:</strong> Paid, denied, or pending</li>
            <li><strong>Inquiries Only:</strong> Even inquiries (not just claims) may show</li>
          </ul>

          <h6>Why CLUE Reports Matter:</h6>
          <ul>
            <li>🏠 <strong>Buying a Home:</strong> Shows property's claim history (water damage, fire, etc.)</li>
            <li>💰 <strong>Insurance Rates:</strong> Multiple claims = higher rates or denied coverage</li>
            <li>🔍 <strong>Red Flags:</strong> Frequent claims may indicate property problems</li>
            <li>📋 <strong>Disclosure:</strong> Seller should disclose major issues, CLUE verifies</li>
            <li>⚠️ <strong>Denied Coverage:</strong> Too many claims can make property uninsurable</li>
          </ul>

          <h6>How to Get CLUE Report:</h6>
          <ul>
            <li><strong>Free Report:</strong> Once per year at PersonalReports.LexisNexis.com</li>
            <li><strong>Request from Seller:</strong> Buyer can ask seller to provide during due diligence</li>
            <li><strong>Through Insurance Agent:</strong> Agent can pull when quoting insurance</li>
            <li><strong>Review Before Listing:</strong> Sellers should check their report before selling</li>
          </ul>

          <h5>FORBEARANCE:</h5>
          <p><strong>Definition:</strong> Mortgage forbearance is a <strong>postponement of obligations</strong> 
          under a mortgage loan but not forgiveness of the debt.</p>
          
          <p className="warning"><strong>⚠️ CRITICAL:</strong> Payments postponed are not forgiven; rather, 
          the life of the loan is extended so that all regular payments are made over a longer loan term.</p>

          <h6>How Forbearance Works:</h6>
          <ul>
            <li><strong>Temporary Relief:</strong> Lender allows reduced or no payments for set period</li>
            <li><strong>Typical Duration:</strong> 3-12 months</li>
            <li><strong>Payments Resume:</strong> After forbearance period, resume normal payments</li>
            <li><strong>Missed Payments Due:</strong> Must repay skipped payments (various methods)</li>
            <li><strong>Not Free Money:</strong> All missed payments must eventually be repaid</li>
          </ul>

          <h6>COVID-19 Forbearance (Historical Context):</h6>
          <p>The COVID-19 virus pandemic that began in 2020 affected all parts of the U.S. and world economies. 
          With a large part of our economy shut down for months, many homeowners and renters found themselves 
          unable to meet financial obligations.</p>
          
          <ul>
            <li><strong>Federal Response:</strong> Government announced moratorium on foreclosures of government-backed mortgages</li>
            <li><strong>Extended Program:</strong> Was extended through September 30, 2021</li>
            <li><strong>Up to 3 Months:</strong> Up to three months of additional forbearance allowed for certain borrowers</li>
            <li><strong>Participation:</strong> As of July 2021, almost 7.2 million households had taken advantage</li>
            <li><strong>Widespread Impact:</strong> Largest forbearance program in U.S. history</li>
          </ul>

          <h6>Repayment Options After Forbearance:</h6>
          <ul>
            <li><strong>Lump Sum:</strong> Pay all missed payments at once when forbearance ends</li>
            <li><strong>Repayment Plan:</strong> Add extra amount to monthly payments (12-24 months)</li>
            <li><strong>Loan Modification:</strong> Extend loan term, add missed payments to principal</li>
            <li><strong>Partial Claim:</strong> FHA creates 2nd loan for missed payments (no payments, due at sale)</li>
            <li><strong>Deferral:</strong> Add missed payments to end of loan (due when house sold or refinanced)</li>
          </ul>

          <h6>Forbearance vs. Other Options:</h6>
          <div className="comparison">
            <p><strong>Forbearance:</strong></p>
            <ul>
              <li>Temporary pause or reduction</li>
              <li>All payments still owed</li>
              <li>Less credit impact than default</li>
              <li>Must be paid back</li>
            </ul>

            <p><strong>Loan Modification:</strong></p>
            <ul>
              <li>Permanent change to loan terms</li>
              <li>May reduce rate or extend term</li>
              <li>Harder to qualify for</li>
              <li>Long-term solution</li>
            </ul>

            <p><strong>Refinance:</strong></p>
            <ul>
              <li>New loan replaces old</li>
              <li>Must have good credit</li>
              <li>May get better rate</li>
              <li>Closing costs apply</li>
            </ul>
          </div>

          <h6>Who Qualifies for Forbearance?</h6>
          <ul>
            <li>✅ <strong>Financial Hardship:</strong> Job loss, medical emergency, natural disaster</li>
            <li>✅ <strong>Government-Backed:</strong> FHA, VA, USDA loans have protections</li>
            <li>✅ <strong>Conventional Loans:</strong> Fannie Mae/Freddie Mac also offer forbearance</li>
            <li>✅ <strong>Private Loans:</strong> Must negotiate with lender (not guaranteed)</li>
            <li>⏱️ <strong>Apply Early:</strong> Don't wait until in default</li>
          </ul>

          <p className="highlight">
            <strong>Remember:</strong> Forbearance is temporary relief, not loan forgiveness. All postponed 
            payments must eventually be repaid. It's better than defaulting but requires a repayment plan.
          </p>
        </div>

        <h4>Key Documents Seller Signs:</h4>
        <ul>
          <li><strong>Deed:</strong> Transfers ownership to buyer (recorded)</li>
          <li><strong>Closing Disclosure:</strong> Seller's version showing proceeds</li>
          <li><strong>Affidavit of Title:</strong> Confirms no new liens, unpaid bills</li>
          <li><strong>FIRPTA Affidavit:</strong> Confirms seller is U.S. citizen (tax withholding)</li>
          <li><strong>Payoff Authorization:</strong> Allows payoff of existing mortgage</li>
          <li><strong>Lead Paint Disclosure:</strong> For pre-1978 properties</li>
        </ul>

        <h4>The Deed (Most Important Document):</h4>
        <div className="deed-types">
          <p><strong>Warranty Deed:</strong> Seller guarantees clear title, defends against all claims (most protection)</p>
          <p><strong>Quitclaim Deed:</strong> Seller transfers only what they own, no guarantees (least protection)</p>
          <p><strong>Bargain and Sale Deed:</strong> Middle ground, some warranties but not full</p>
        </div>

        <h3>24.4 Release of Lien - Defeasance Clause & Recording</h3>
        
        <div className="important-note">
          <h4>Defeasance Clause:</h4>
          <p><strong>Definition:</strong> Defeats or cancels upon full repayment of debt.</p>
          <p>Mortgagee is required to execute a <strong>"satisfaction of mortgage"</strong> when the note is 
          paid in full. This document returns all interest in the real estate that was transferred to the lender 
          by recording the original mortgage document.</p>
          
          <h5>Why This Matters:</h5>
          <ul>
            <li>🔓 <strong>Clear Title:</strong> Removes the lender's claim from your property</li>
            <li>📄 <strong>Proves Ownership:</strong> Shows you own the property free and clear</li>
            <li>💼 <strong>Future Transactions:</strong> Required for refinancing or selling</li>
            <li>⚖️ <strong>Legal Requirement:</strong> Lender must provide this document</li>
          </ul>
        </div>

        <div className="recording-info">
          <h4>RECORDING - Registry of Deeds:</h4>
          <p className="highlight">
            <strong>Must be recorded at the county Registry of Deeds.</strong> Recordation gives 
            <strong> "Constructive Notice"</strong> to the public of the borrower's obligations and 
            establishes a priority of lien.
          </p>
          
          <h5>Recording Systems in Massachusetts:</h5>
          
          <h6>1. Registry System (Most Common):</h6>
          <ul>
            <li><strong>How it works:</strong> Documents recorded chronologically at Registry of Deeds</li>
            <li><strong>Title search:</strong> Must search all prior recorded documents</li>
            <li><strong>Priority:</strong> First to record has priority</li>
            <li><strong>Most MA counties:</strong> Use this system</li>
          </ul>

          <h6>2. Torrens System (Registered Land):</h6>
          <ul>
            <li><strong>How it works:</strong> Certificate of title system (land registration)</li>
            <li><strong>If registered land:</strong> Notice of the lien must be entered on the original 
            certificate of title on file at registrar's office</li>
            <li><strong>Benefit:</strong> State guarantees title, easier to verify ownership</li>
            <li><strong>Rare:</strong> Only some properties in MA (mostly older Boston/Cambridge properties)</li>
            <li><strong>Initial cost:</strong> Expensive to register, but cleaner title afterwards</li>
          </ul>

          <h5>Constructive Notice Explained:</h5>
          <p><strong>Constructive Notice:</strong> Legal presumption that everyone has knowledge of recorded 
          documents, whether they actually looked or not.</p>
          <ul>
            <li>📋 <strong>Public Record:</strong> Anyone can search and find your mortgage</li>
            <li>🏦 <strong>Lien Priority:</strong> First recorded = first priority (if multiple liens)</li>
            <li>⚠️ <strong>Buyer Beware:</strong> Buyers are assumed to know about recorded liens</li>
            <li>🔍 <strong>Title Search Purpose:</strong> Finds all recorded encumbrances</li>
          </ul>

          <h5>Recording Fees:</h5>
          <p>Typically $100-$300 depending on document type and county. Usually paid at closing.</p>
        </div>

        <h3>24.5 Closing Disclosure (CD) - Formerly HUD-1</h3>
        <p>
          The Closing Disclosure replaced the HUD-1 Settlement Statement in 2015 under TRID rules. 
          It's a 5-page standardized form showing all costs in the transaction.
        </p>

        <h4>Closing Disclosure Timeline:</h4>
        <ul>
          <li><strong>3 Business Days Before Closing:</strong> Lender must provide final CD</li>
          <li><strong>If Changes Occur:</strong> May require new 3-day waiting period</li>
          <li><strong>Changes Requiring Re-Disclosure:</strong>
            <ul>
              <li>APR changes by more than 0.125%</li>
              <li>Loan product changes</li>
              <li>Prepayment penalty added</li>
            </ul>
          </li>
        </ul>

        <h4>Closing Disclosure Pages Breakdown:</h4>
        <div className="cd-breakdown">
          <p><strong>Page 1:</strong> Loan terms, projected payments, costs at closing</p>
          <p><strong>Page 2:</strong> Closing cost details (origination, services, taxes, other costs)</p>
          <p><strong>Page 3:</strong> Calculating cash to close, summaries for borrower and seller</p>
          <p><strong>Page 4:</strong> Additional loan disclosures (liability, assumption, etc.)</p>
          <p><strong>Page 5:</strong> Loan calculations, other disclosures, contact information</p>
        </div>

        <h4>Common Closing Costs (Buyer):</h4>
        <ul>
          <li><strong>Origination Charges:</strong> Loan origination fee (0.5-1% of loan)</li>
          <li><strong>Appraisal:</strong> $400-$600</li>
          <li><strong>Credit Report:</strong> $25-$50</li>
          <li><strong>Title Insurance:</strong> $1,500-$4,000 (both policies)</li>
          <li><strong>Attorney Fees:</strong> $500-$1,500</li>
          <li><strong>Recording Fees:</strong> $100-$300</li>
          <li><strong>Survey:</strong> $300-$600 (if required)</li>
          <li><strong>Home Inspection:</strong> $300-$500 (paid pre-closing usually)</li>
          <li><strong>Prepaid Items:</strong> Property taxes, homeowners insurance, HOA</li>
          <li><strong>Escrow Deposit:</strong> 2-3 months taxes and insurance</li>
          <li><strong>HOA Transfer Fee:</strong> $200-$500 (if applicable)</li>
        </ul>

        <h4>Common Closing Costs (Seller):</h4>
        <ul>
          <li><strong>Agent Commissions:</strong> 5-6% of sale price (biggest cost)</li>
          <li><strong>Attorney Fees:</strong> $500-$1,500</li>
          <li><strong>Mortgage Payoff:</strong> Remaining balance + any prepayment penalty</li>
          <li><strong>Title Search:</strong> $200-$400</li>
          <li><strong>Property Tax Prorations:</strong> Pay through closing date</li>
          <li><strong>HOA Prorations:</strong> Pay through closing date</li>
          <li><strong>Transfer Taxes:</strong> $4.56 per $1,000 in MA (varies by municipality)</li>
          <li><strong>Home Warranty:</strong> $300-$600 (if providing to buyer)</li>
        </ul>

        <h3>24.5 Prorations and Credits</h3>
        <p>
          Prorations ensure buyer and seller each pay their fair share of ongoing expenses based on closing date.
        </p>

        <h4>Items Typically Prorated:</h4>
        <ul>
          <li><strong>Property Taxes:</strong> Calculated daily, seller pays through closing</li>
          <li><strong>HOA Fees:</strong> Monthly or quarterly dues split</li>
          <li><strong>Utilities:</strong> Usually handled directly (final reading), not on CD</li>
          <li><strong>Rent (Multi-Family):</strong> If closing mid-month, rent prorated</li>
          <li><strong>Prepaid Items:</strong> If seller prepaid taxes, buyer reimburses for future</li>
        </ul>

        <h4>Proration Example:</h4>
        <div className="example">
          <p><strong>Situation:</strong> Annual property tax = $7,300 (paid through Dec 31)</p>
          <p><strong>Closing Date:</strong> October 15</p>
          <p><strong>Calculation:</strong></p>
          <ul>
            <li>Oct 15 - Dec 31 = 77 days buyer will own property</li>
            <li>$7,300 ÷ 365 = $20/day</li>
            <li>$20 × 77 days = $1,540</li>
            <li><strong>Result:</strong> Buyer credits seller $1,540 for prepaid taxes</li>
          </ul>
        </div>

        <h3>24.6 The Closing Table</h3>
        
        <h4>Who Attends Closing?</h4>
        <ul>
          <li>Buyer(s)</li>
          <li>Seller(s)</li>
          <li>Buyer's attorney (in MA, typically required)</li>
          <li>Seller's attorney</li>
          <li>Closing agent (title company or attorney)</li>
          <li>Real estate agents (optional but common)</li>
          <li>Lender representative (rare, usually remote)</li>
        </ul>

        <h4>What Happens at Closing?</h4>
        <ol>
          <li><strong>Review Documents:</strong> Attorney explains each document before signing</li>
          <li><strong>Sign Documents:</strong> Buyer signs 50-100 pages, seller signs 10-20</li>
          <li><strong>Transfer Funds:</strong> Buyer's certified funds verified</li>
          <li><strong>Pay Off Existing Loan:</strong> Seller's mortgage satisfied</li>
          <li><strong>Disburse Proceeds:</strong> Seller receives net proceeds check</li>
          <li><strong>Record Deed:</strong> New deed filed with county (may happen after meeting)</li>
          <li><strong>Hand Over Keys:</strong> Buyer receives keys, garage openers, etc.</li>
          <li><strong>Final Walk-Through Issues:</strong> Resolve any last-minute concerns</li>
        </ol>

        <h4>What Buyer Brings:</h4>
        <ul>
          <li>✅ Government-issued photo ID</li>
          <li>✅ Certified check or wire confirmation (closing costs + down payment)</li>
          <li>✅ Proof of homeowner's insurance</li>
          <li>✅ Final walk-through checklist</li>
        </ul>

        <h4>What Seller Brings:</h4>
        <ul>
          <li>✅ Government-issued photo ID</li>
          <li>✅ All keys, garage openers, access codes</li>
          <li>✅ Appliance manuals and warranties</li>
          <li>✅ HOA documents and contacts</li>
          <li>✅ Mailbox key</li>
        </ul>

        <h3>24.7 Post-Closing</h3>
        
        <h4>Buyer's Post-Closing Checklist:</h4>
        <ul>
          <li>✅ Change locks (for security)</li>
          <li>✅ Set up utilities in your name</li>
          <li>✅ File deed with homestead exemption (MA property tax protection)</li>
          <li>✅ Update mailing address (USPS, DMV, voter registration)</li>
          <li>✅ Review first mortgage statement carefully</li>
          <li>✅ Keep closing documents in safe place (7+ years)</li>
          <li>✅ Save receipts for capital improvements (tax purposes)</li>
        </ul>

        <h4>Seller's Post-Closing Checklist:</h4>
        <ul>
          <li>✅ Confirm mortgage payoff received by lender</li>
          <li>✅ Cancel homeowner's insurance (after closing date)</li>
          <li>✅ Forward mail to new address</li>
          <li>✅ Transfer or cancel utilities</li>
          <li>✅ Keep closing documents (capital gains calculation)</li>
          <li>✅ Track moving expenses if relocating for work (may be deductible)</li>
        </ul>

        <h3>24.8 Common Closing Problems & Solutions</h3>
        <div className="problems-solutions">
          <h4>Problem: Lender Not Clear to Close</h4>
          <p><strong>Solution:</strong> Postpone closing, provide requested documentation immediately, 
          stay in close contact with lender and attorney</p>

          <h4>Problem: Title Issue Discovered Late</h4>
          <p><strong>Solution:</strong> Seller must cure defect (pay off lien, resolve dispute), 
          may delay closing, buyer can walk if not resolved in reasonable time</p>

          <h4>Problem: Seller Not Ready to Vacate</h4>
          <p><strong>Solution:</strong> Negotiate rent-back agreement, escrow funds for damage, 
          or delay closing if buyer agrees</p>

          <h4>Problem: Final Walk-Through Reveals Damage</h4>
          <p><strong>Solution:</strong> Escrow funds to cover repairs, reduce purchase price, 
          seller makes repairs before closing, or buyer walks if serious</p>

          <h4>Problem: Wiring Fraud Attempt</h4>
          <p><strong>Solution:</strong> ALWAYS verify wiring instructions by calling known phone number, 
          never trust email alone, confirm with attorney verbally</p>
        </div>

        <h3>24.9 Agent's Role at Closing</h3>
        <div className="agent-role">
          <h4>Before Closing:</h4>
          <ul>
            <li>✅ Coordinate with all parties</li>
            <li>✅ Remind clients what to bring</li>
            <li>✅ Confirm final walk-through completed</li>
            <li>✅ Verify closing funds wired/certified</li>
            <li>✅ Review Closing Disclosure with client</li>
          </ul>

          <h4>At Closing:</h4>
          <ul>
            <li>✅ Attend to support client (optional but appreciated)</li>
            <li>✅ Clarify any last questions</li>
            <li>✅ Collect commission check (if not wired)</li>
            <li>✅ Hand over keys and access items</li>
            <li>✅ Congratulate and thank everyone</li>
          </ul>

          <h4>After Closing:</h4>
          <ul>
            <li>✅ Send thank you notes</li>
            <li>✅ Request reviews/testimonials</li>
            <li>✅ Ask for referrals</li>
            <li>✅ Stay in touch (holiday cards, market updates)</li>
            <li>✅ Remind about homestead filing (MA)</li>
          </ul>
        </div>

        <p className="highlight">
          <strong>Remember:</strong> Closing is the culmination of weeks of work. Review the Closing Disclosure 
          carefully - errors happen! Attorney is there to protect you - ask questions. Wire fraud is REAL - 
          verify all instructions verbally. Keep all closing documents forever (IRS requires 7 years minimum, 
          but keep deed and title insurance permanently).
        </p>
      </>
    )
  };

import React from 'react';

export const section = {
    id: 'valuation',
    icon: '💰',
    title: '19. Property Valuation Methods',
    subtitle: 'CMA, cost approach, income approach, market approach - pricing properties accurately',
    body: (
      <>
        <h3>22.1 Comparative Market Analysis (CMA)</h3>
        <p className="highlight">
          The CMA is the most common valuation method used by agents. It compares the subject property 
          to similar recently sold properties (comparables or "comps") to estimate market value.
        </p>

        <h4>Components of a Strong CMA:</h4>
        <ul>
          <li><strong>Active Listings:</strong> Current competition (what buyers can choose instead)</li>
          <li><strong>Pending Sales:</strong> Properties under contract (market direction indicator)</li>
          <li><strong>Sold Properties:</strong> Actual market values (past 3-6 months, same area)</li>
          <li><strong>Expired/Withdrawn:</strong> Failed listings (what didn't work)</li>
        </ul>

        <h4>The 3 C's of Comparables:</h4>
        <div className="key-points">
          <p><strong>1. Condition:</strong> Similar physical condition and updates</p>
          <p><strong>2. Characteristics:</strong> Beds, baths, square footage, lot size, style</p>
          <p><strong>3. Close Proximity:</strong> Same neighborhood or comparable area</p>
        </div>

        <h4>Adjustments in CMA:</h4>
        <ul>
          <li><strong>If comp is better:</strong> SUBTRACT value from comp price</li>
          <li><strong>If comp is worse:</strong> ADD value to comp price</li>
          <li><strong>Common adjustments:</strong>
            <ul>
              <li>Extra bedroom: +$15k-$30k</li>
              <li>Extra bathroom: +$10k-$20k</li>
              <li>Garage: +$10k-$25k</li>
              <li>Finished basement: +$15k-$40k</li>
              <li>Pool: +$10k-$30k (seasonal)</li>
              <li>Updates (kitchen/bath): +$10k-$50k</li>
            </ul>
          </li>
        </ul>

        <h4>CMA Best Practices:</h4>
        <ul>
          <li>✅ Use 3-6 comparable sales minimum</li>
          <li>✅ Keep comps within 1 mile and 6 months when possible</li>
          <li>✅ Adjust for market conditions (appreciation/depreciation)</li>
          <li>✅ Weight the most similar comps more heavily</li>
          <li>✅ Consider days on market and list-to-sale price ratios</li>
          <li>❌ Don't use comps from different school districts unless necessary</li>
          <li>❌ Don't cherry-pick comps to support desired price</li>
        </ul>

        <h4>📊 CMA as "Opinion of Value" - Critical Understanding</h4>
        <div className="cma-opinion-section">
          <p className="warning">
            <strong>Real Estate Agents perform an analysis to list and sell residential property. This is their 
            "opinion of value" to determine a listing & likely sale price.</strong>
          </p>
          
          <p className="highlight">
            <strong>⚠️ Key Point:</strong> A CMA varies depending on the <strong>skill & experience of the agent</strong>. 
            Not all CMAs are created equal! An experienced agent with deep market knowledge will produce more accurate valuations.
          </p>
          
          <h5>🔍 The CMA Looks at the Following Data:</h5>
          <div className="cma-data-points">
            <div className="data-point">
              <h6>✅ Recent <em>comparable sales</em></h6>
              <ul>
                <li>Properties that have SOLD (closed) in past 3-6 months</li>
                <li>Similar size, style, condition, location</li>
                <li>These are the strongest indicators of actual market value</li>
                <li>Must be arm's length transactions (no family sales, short sales)</li>
              </ul>
            </div>
            
            <div className="data-point">
              <h6>✅ <em>Current Inventory</em></h6>
              <ul>
                <li>Active listings (what's available NOW)</li>
                <li>Shows current competition</li>
                <li>Indicates market supply</li>
                <li>High inventory = downward price pressure</li>
                <li>Low inventory = upward price pressure</li>
              </ul>
            </div>
            
            <div className="data-point">
              <h6>✅ <em>Expired or Withdrawn Inventory (homes that didn't sell)</em></h6>
              <ul>
                <li>Listings that failed to sell and expired</li>
                <li>Listings withdrawn by seller</li>
                <li>Shows what the market REJECTED</li>
                <li>Critical for understanding overpricing</li>
                <li>Helps avoid same mistakes</li>
                <li><strong>Why it matters:</strong> If similar homes didn't sell at $X, yours won't either</li>
              </ul>
            </div>
            
            <div className="data-point">
              <h6>✅ <em>Current & future market conditions</em></h6>
              <ul>
                <li>Market trend: appreciating or depreciating?</li>
                <li>Interest rate environment</li>
                <li>Seasonal factors (spring/summer = hot, winter = slow)</li>
                <li>Economic indicators (unemployment, job growth)</li>
                <li>Local development plans</li>
                <li>School district changes</li>
                <li><strong>Forward-looking:</strong> Where is market heading, not just where it's been</li>
              </ul>
            </div>
          </div>
          
          <h5>🔧 Making Adjustments - Negative / Positive</h5>
          <p className="highlight">
            <strong>Agents can make negative / positive adjustments for property differences to nail down a likely sale price.</strong>
          </p>
          <div className="adjustment-examples">
            <p><strong>Example Adjustment Scenario:</strong></p>
            <ul>
              <li><strong>Subject Property:</strong> 3 bed, 2 bath, no garage</li>
              <li><strong>Comparable:</strong> 3 bed, 2 bath, 2-car garage, sold for $450k</li>
              <li><strong>Adjustment:</strong> Garage worth $20k in this market</li>
              <li><strong>Adjusted Comp Value:</strong> $450k - $20k = $430k (what comp would've sold for without garage)</li>
              <li><strong>Therefore:</strong> Subject property worth approximately $430k</li>
            </ul>
            
            <p className="warning">
              <strong>Critical Rule:</strong> Adjustments must be based on market data, not guesses. Use recent sales 
              to determine the value of specific features in YOUR market.
            </p>
          </div>
          
          <h5>💻 CMA Software & Programs</h5>
          <div className="cma-software">
            <p className="highlight">
              <strong>CMA programs are available for FREE through MLS or agents can purchase a customized CMA software package.</strong>
            </p>
            <ul>
              <li><strong>Free MLS CMA Tools:</strong>
                <ul>
                  <li>Included with MLS membership</li>
                  <li>Basic CMA reports</li>
                  <li>Pull comps directly from MLS data</li>
                  <li>Generate PDF reports</li>
                  <li>Sufficient for most listings</li>
                </ul>
              </li>
              <li><strong>Premium CMA Software:</strong>
                <ul>
                  <li>Cloud CMA ($10-30/month)</li>
                  <li>HomeSpotter CMA</li>
                  <li>ShowingTime CMA</li>
                  <li><strong>Benefits:</strong> Better visuals, client presentations, marketing materials, mobile access</li>
                  <li><strong>Worth it?</strong> If you do many listings, yes. Better presentation = higher perceived value</li>
                </ul>
              </li>
            </ul>
          </div>
        </div>

        <h4>📋 Listing Presentation: Comparable Sales & Beyond</h4>
        <div className="listing-presentation">
          <p className="warning">
            <strong>Listing Presentation Components:</strong> Comparable Sales & Adjustments, Marketing Plan, 
            Resume, Professional References, Examples of Brochures, Postcards & other marketing materials.
          </p>
          
          <h5>Complete Listing Presentation Checklist:</h5>
          <ol>
            <li><strong>📊 Comparable Sales & Adjustments</strong>
              <ul>
                <li>Detailed CMA with at least 3-6 comps</li>
                <li>Show sold, active, and expired properties</li>
                <li>Explain each adjustment clearly</li>
                <li>Recommended list price range</li>
                <li>Market absorption rate (how quickly homes sell)</li>
              </ul>
            </li>
            
            <li><strong>📈 Marketing Plan</strong>
              <ul>
                <li>MLS listing strategy (photos, description, keywords)</li>
                <li>Online marketing (Zillow, Realtor.com, social media)</li>
                <li>Open house schedule</li>
                <li>Print advertising plan</li>
                <li>Agent/broker tour</li>
                <li>Professional photography/videography</li>
                <li>Virtual tours or 3D walkthroughs</li>
                <li>Email blast to agent database</li>
                <li>Direct mail to neighbors</li>
              </ul>
            </li>
            
            <li><strong>📄 Your Resume</strong>
              <ul>
                <li>Years of experience</li>
                <li>Relevant certifications (GRI, ABR, SRS, etc.)</li>
                <li>Recent sales in their neighborhood</li>
                <li>Average days on market for your listings</li>
                <li>Average list-to-sale price ratio</li>
                <li>Sales volume (if impressive)</li>
              </ul>
            </li>
            
            <li><strong>💬 Professional References</strong>
              <ul>
                <li>3-5 recent client testimonials</li>
                <li>Preferably from same neighborhood</li>
                <li>Specific success stories</li>
                <li>Contact info (with client permission)</li>
                <li>Online reviews (Google, Zillow, Realtor.com)</li>
              </ul>
            </li>
            
            <li><strong>📮 Examples of Marketing Materials</strong>
              <ul>
                <li>Sample brochures (your past listings)</li>
                <li>Postcards (Just Listed, Open House, Just Sold)</li>
                <li>Feature sheets</li>
                <li>Social media posts</li>
                <li>Email marketing examples</li>
                <li>Virtual tour links</li>
                <li>Video marketing samples</li>
              </ul>
            </li>
          </ol>
          
          <div className="presentation-tips">
            <h5>🎯 Listing Presentation Success Tips:</h5>
            <p className="warning">
              <strong>"What makes you different???? It's NOT WHAT YOU THINK THEY WANT TO HEAR! (DO AT HOME)"</strong>
            </p>
            <ul>
              <li><strong>❌ Don't:</strong> Tell them what you THINK they want to hear</li>
              <li><strong>❌ Don't:</strong> Overpromise on list price to win listing</li>
              <li><strong>❌ Don't:</strong> Use generic, templated presentations</li>
              <li><strong>❌ Don't:</strong> Focus only on YOUR accomplishments</li>
              <li><strong>✅ Do:</strong> Ask questions about THEIR goals and concerns</li>
              <li><strong>✅ Do:</strong> Listen more than you talk</li>
              <li><strong>✅ Do:</strong> Be honest about realistic pricing (even if it's lower than they hope)</li>
              <li><strong>✅ Do:</strong> Customize presentation to their specific property and situation</li>
              <li><strong>✅ Do:</strong> Show data, not opinions</li>
              <li><strong>✅ Do:</strong> Explain your strategy for THEIR home, not just your general approach</li>
            </ul>
            
            <p className="highlight">
              <strong>The Truth:</strong> Sellers want an agent who will be HONEST about pricing, PROACTIVE in marketing, 
              and RESPONSIVE during the process. They can smell BS from a mile away. Data-driven pricing and a solid 
              marketing plan win more listings than inflated price promises.
            </p>
          </div>
        </div>

        <h4>📸 BPO (Broker Price Opinion) - Different from CMA</h4>
        <div className="bpo-section">
          <p className="warning">
            <strong>BPO (Broker Price Opinion) - an informal market analysis usually conducted by doing a 
            drive-by and taking photos to verify property exists. Typically ordered by Banks or corporate 
            relocation companies.</strong>
          </p>
          
          <h5>BPO vs CMA - Key Differences:</h5>
          <div className="comparison-table">
            <table className="comparison">
              <thead>
                <tr>
                  <th>Feature</th>
                  <th>CMA (Comparative Market Analysis)</th>
                  <th>BPO (Broker Price Opinion)</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>Purpose</strong></td>
                  <td>Help sellers price property for sale</td>
                  <td>Verify property value for lender/bank</td>
                </tr>
                <tr>
                  <td><strong>Who Orders It</strong></td>
                  <td>Seller/buyer or their agent</td>
                  <td>Banks, lenders, relocation companies</td>
                </tr>
                <tr>
                  <td><strong>Interior Inspection</strong></td>
                  <td>Yes - full walkthrough</td>
                  <td>Usually NO - drive-by only (exterior BPO)<br/>Sometimes yes (interior BPO)</td>
                </tr>
                <tr>
                  <td><strong>Detail Level</strong></td>
                  <td>Comprehensive - detailed adjustments</td>
                  <td>Quick - less detailed</td>
                </tr>
                <tr>
                  <td><strong>Cost</strong></td>
                  <td>Usually free (part of listing service)</td>
                  <td>$50-150 paid to agent</td>
                </tr>
                <tr>
                  <td><strong>Presentation</strong></td>
                  <td>Professional, marketed to client</td>
                  <td>Standardized form for lender</td>
                </tr>
                <tr>
                  <td><strong>Time to Complete</strong></td>
                  <td>2-4 hours (thorough)</td>
                  <td>30-60 minutes (quick)</td>
                </tr>
              </tbody>
            </table>
          </div>
          
          <h5>When BPOs Are Used:</h5>
          <ul>
            <li><strong>Foreclosure valuation:</strong> Bank needs value estimate before foreclosure auction</li>
            <li><strong>Short sale evaluation:</strong> Lender determining if short sale price is acceptable</li>
            <li><strong>Loan modification:</strong> Bank re-assessing property value for loan restructure</li>
            <li><strong>Corporate relocation:</strong> Company helping transferred employee sell home</li>
            <li><strong>Estate planning:</strong> Quick value for estate settlement</li>
            <li><strong>Divorce proceedings:</strong> Fast property valuation</li>
            <li><strong>Loss mitigation:</strong> Bank determining options for distressed borrower</li>
          </ul>
          
          <h5>Types of BPOs:</h5>
          <ul>
            <li><strong>Exterior BPO (Drive-by):</strong>
              <ul>
                <li>Agent drives by property</li>
                <li>Takes exterior photos</li>
                <li>Verifies property exists and condition</li>
                <li>Pulls comps from MLS</li>
                <li>Provides value estimate</li>
                <li>Faster, less expensive</li>
              </ul>
            </li>
            <li><strong>Interior BPO:</strong>
              <ul>
                <li>Agent goes inside property</li>
                <li>Takes interior and exterior photos</li>
                <li>Notes condition of rooms, systems, updates</li>
                <li>More accurate than exterior-only</li>
                <li>Takes longer, costs more</li>
              </ul>
            </li>
          </ul>
          
          <h5>⚠️ BPO Important Notes:</h5>
          <ul>
            <li><strong>NOT an Appraisal:</strong> BPO is agent's opinion, NOT a licensed appraisal</li>
            <li><strong>Cannot be used for lending:</strong> Banks require actual appraisal for mortgage approval</li>
            <li><strong>Quick turnaround:</strong> Usually needed within 24-72 hours</li>
            <li><strong>E&O Insurance:</strong> Agents should have E&O coverage when doing BPOs (liability)</li>
            <li><strong>Pay is low:</strong> $50-150 for work that takes 1-2 hours (not very profitable)</li>
            <li><strong>Good for exposure:</strong> Can lead to REO listings if you do quality work</li>
          </ul>
          
          <p className="highlight">
            <strong>Pro Tip:</strong> BPOs can be a foot-in-the-door with banks and relocation companies. If you do 
            quality, timely BPOs, you may get referrals for REO (bank-owned) listings or relocation listings, 
            which can be lucrative.
          </p>
        </div>

        <h3>22.2 Cost Approach</h3>
        <p>
          Used primarily for new construction, unique properties, or insurance purposes. 
          Calculates what it would cost to rebuild the property from scratch.
        </p>

        <h4>Cost Approach Formula:</h4>
        <div className="formula">
          <p><strong>Land Value + Replacement Cost New - Depreciation = Property Value</strong></p>
        </div>

        <h4>Steps in Cost Approach:</h4>
        <ol>
          <li><strong>Estimate Land Value:</strong> Use recent land sales in area</li>
          <li><strong>Calculate Replacement Cost:</strong> Construction cost per square foot × size</li>
          <li><strong>Subtract Depreciation:</strong>
            <ul>
              <li>Physical deterioration (age, wear and tear)</li>
              <li>Functional obsolescence (outdated design, poor layout)</li>
              <li>External obsolescence (neighborhood decline, busy road)</li>
            </ul>
          </li>
          <li><strong>Add Land and Depreciated Building:</strong> Final value</li>
        </ol>

        <h4>When to Use Cost Approach:</h4>
        <ul>
          <li>✅ New construction (little to no depreciation)</li>
          <li>✅ Unique properties (churches, schools, special-use)</li>
          <li>✅ Insurance valuations</li>
          <li>✅ Properties with few comparables</li>
          <li>❌ NOT ideal for older properties (depreciation hard to quantify)</li>
          <li>❌ NOT ideal for standard residential (CMA is better)</li>
        </ul>

        <h3>22.3 Income Approach</h3>
        <p className="highlight">
          Used for investment properties. Values property based on income it generates. 
          Primary method for commercial and multi-family properties.
        </p>

        <h4>Income Approach Formula:</h4>
        <div className="formula">
          <p><strong>Net Operating Income (NOI) ÷ Capitalization Rate = Property Value</strong></p>
        </div>

        <h4>Calculating Net Operating Income (NOI):</h4>
        <div className="calculation-steps">
          <p>Gross Potential Rent (all units at market rent)</p>
          <p>− Vacancy Loss (5-10% typical)</p>
          <p>= Effective Gross Income</p>
          <p>− Operating Expenses (NOT including mortgage)</p>
          <p>= Net Operating Income (NOI)</p>
        </div>

        <h4>Operating Expenses Include:</h4>
        <ul>
          <li>Property taxes</li>
          <li>Insurance</li>
          <li>Utilities (if owner-paid)</li>
          <li>Maintenance and repairs</li>
          <li>Property management (if applicable)</li>
          <li>Landscaping/snow removal</li>
          <li>Common area utilities</li>
        </ul>

        <h4>Operating Expenses DO NOT Include:</h4>
        <ul>
          <li>❌ Mortgage payments (debt service)</li>
          <li>❌ Depreciation (accounting, not cash)</li>
          <li>❌ Income taxes (investor-specific)</li>
          <li>❌ Capital improvements (one-time, not recurring)</li>
        </ul>

        <h4>Capitalization Rate (Cap Rate):</h4>
        <ul>
          <li><strong>Definition:</strong> Rate of return investor expects</li>
          <li><strong>Market cap rates:</strong> 4-8% typical for residential, 5-12% for commercial</li>
          <li><strong>Higher cap rate:</strong> Higher risk, lower property value</li>
          <li><strong>Lower cap rate:</strong> Lower risk (better area), higher property value</li>
          <li><strong>Example:</strong> $50,000 NOI ÷ 6% cap rate = $833,333 value</li>
        </ul>

        <h4>When to Use Income Approach:</h4>
        <ul>
          <li>✅ Multi-family properties (3+ units)</li>
          <li>✅ Commercial real estate</li>
          <li>✅ Investment properties</li>
          <li>✅ Rent-producing properties</li>
          <li>❌ NOT for owner-occupied single-family (no income)</li>
        </ul>

        <h3>22.4 Market Approach (Sales Comparison)</h3>
        <p>
          The market approach is similar to CMA but more formal. It's used in professional appraisals 
          and relies on recent sales of comparable properties.
        </p>

        <h4>Market Approach Process:</h4>
        <ol>
          <li><strong>Identify Comparables:</strong> Recent sales, similar properties, same market</li>
          <li><strong>Make Adjustments:</strong> Account for differences in size, condition, features</li>
          <li><strong>Reconcile Values:</strong> Weight most similar comps more heavily</li>
          <li><strong>Arrive at Value:</strong> Final opinion of market value</li>
        </ol>

        <h4>Adjustment Grid Example:</h4>
        <div className="example-grid">
          <table>
            <thead>
              <tr>
                <th>Feature</th>
                <th>Subject</th>
                <th>Comp 1</th>
                <th>Adjustment</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Sale Price</td>
                <td>-</td>
                <td>$400,000</td>
                <td>-</td>
              </tr>
              <tr>
                <td>Bedrooms</td>
                <td>3</td>
                <td>4</td>
                <td>-$20,000</td>
              </tr>
              <tr>
                <td>Garage</td>
                <td>Yes</td>
                <td>No</td>
                <td>+$15,000</td>
              </tr>
              <tr>
                <td>Adjusted Price</td>
                <td>-</td>
                <td>$395,000</td>
                <td>-</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h4>Difference: CMA vs. Appraisal</h4>
        <div className="comparison">
          <h5>CMA (Agent-Prepared):</h5>
          <ul>
            <li>Marketing tool for pricing property</li>
            <li>Less formal, more flexible</li>
            <li>Free to client</li>
            <li>Uses agent's local market knowledge</li>
            <li>Not accepted by lenders</li>
          </ul>

          <h5>Appraisal (Certified Appraiser):</h5>
          <ul>
            <li>Required by lenders for financing</li>
            <li>Formal, standardized process (USPAP standards)</li>
            <li>Costs $300-$600+</li>
            <li>Independent third-party valuation</li>
            <li>Legally binding for loan purposes</li>
          </ul>
        </div>

        <h3>22.5 Valuation Red Flags</h3>
        <div className="warning-box">
          <h4>Signs of Overpricing:</h4>
          <ul>
            <li>⚠️ No showings after 2-3 weeks</li>
            <li>⚠️ Priced 10%+ above recent comps</li>
            <li>⚠️ Days on market exceeding area average</li>
            <li>⚠️ No offers on well-marketed property</li>
            <li>⚠️ Price reductions not generating activity</li>
          </ul>

          <h4>Signs of Underpricing:</h4>
          <ul>
            <li>⚠️ Multiple offers within first week</li>
            <li>⚠️ Showings booked solid immediately</li>
            <li>⚠️ Offers well above asking price</li>
            <li>⚠️ Priced below recent comparable sales</li>
          </ul>
        </div>

        <h3>22.6 Agent's Role in Valuation</h3>
        <div className="agent-role">
          <h4>What Agents SHOULD Do:</h4>
          <ul>
            <li>✅ Provide comprehensive CMA with multiple comps</li>
            <li>✅ Explain how you arrived at suggested price range</li>
            <li>✅ Discuss market conditions and trends</li>
            <li>✅ Set realistic expectations with data</li>
            <li>✅ Recommend pricing strategy (aggressive vs. conservative)</li>
            <li>✅ Update pricing recommendations as market shifts</li>
          </ul>

          <h4>What Agents CANNOT Do:</h4>
          <ul>
            <li>❌ Guarantee a specific sale price</li>
            <li>❌ Perform a formal appraisal (unless also licensed appraiser)</li>
            <li>❌ Guarantee property will appraise at list price</li>
            <li>❌ Overprice to "win" listing (unethical)</li>
            <li>❌ Lowball to create quick sale for commission</li>
          </ul>
        </div>

        <p className="highlight">
          <strong>Remember:</strong> Proper valuation protects both buyer and seller. Overpricing wastes 
          time and costs money. Underpricing leaves money on the table. Use data, not emotions. Your 
          credibility depends on accurate pricing guidance backed by solid market analysis.
        </p>
      </>
    )
  };

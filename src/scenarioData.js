// Interactive scenarios with decision trees
export const scenarios = [
  {
    id: 'scenario1',
    title: 'First-Time Buyer in Competitive Market',
    description: 'Your buyer client wants to make an offer on a hot property with multiple offers expected.',
    difficulty: 'medium',
    category: 'buyer',
    startNode: 'start',
    nodes: {
      start: {
        text: 'Your first-time buyer loves a property listed at $450k. The listing agent mentions "multiple offers expected." What\'s your first move?',
        choices: [
          { text: 'Submit offer at asking price immediately', nextNode: 'asking_price' },
          { text: 'Advise waiting to see other offers', nextNode: 'wait_and_see' },
          { text: 'Submit escalation clause offer', nextNode: 'escalation' },
          { text: 'Offer above asking with strong terms', nextNode: 'above_asking' }
        ]
      },
      asking_price: {
        text: 'You submit at asking price. Two days later, the listing agent says you\'re in second place. They ask for your "highest and best."',
        choices: [
          { text: 'Increase by $10k and waive inspection', nextNode: 'bad_ending' },
          { text: 'Increase by $15k, keep inspection contingency', nextNode: 'good_ending' },
          { text: 'Hold firm at asking price', nextNode: 'lose_deal' }
        ]
      },
      wait_and_see: {
        text: 'While you wait, another offer is accepted. The house goes under agreement.',
        isEnding: true,
        outcome: 'negative',
        feedback: 'In competitive markets, waiting can mean losing the property. First-time buyers often need guidance to act decisively while staying protected.',
        recommendations: [
          'In hot markets, advise clients to be ready to act quickly',
          'Pre-approval letters should be ready before showings',
          'Discuss offer strategies before finding "the one"'
        ]
      },
      escalation: {
        text: 'You submit an offer at $450k with an escalation clause up to $475k, keeping inspection contingency. Two other offers come in. Your escalation triggers at $465k.',
        choices: [
          { text: 'Accept the escalation amount', nextNode: 'good_ending' },
          { text: 'Try to negotiate back down', nextNode: 'lose_deal' }
        ]
      },
      above_asking: {
        text: 'You offer $465k with quick closing and strong financing terms, keeping inspection contingency. Seller accepts!',
        isEnding: true,
        outcome: 'positive',
        feedback: 'Strong initial offer with solid terms! Keeping the inspection contingency protects your buyer while showing seriousness.',
        recommendations: [
          'In competitive markets, strong initial offers often win',
          'Never sacrifice inspection rights for first-time buyers',
          'Quick closing timelines can be as valuable as extra money',
          'Pre-approval and proof of funds strengthen any offer'
        ]
      },
      good_ending: {
        text: 'Seller accepts your revised offer! During inspection, you find $5k in needed repairs. You negotiate a $3k credit. Deal closes successfully.',
        isEnding: true,
        outcome: 'positive',
        feedback: 'Great work! You balanced competitiveness with buyer protection. The inspection contingency saved your client from unexpected costs.',
        recommendations: [
          'Escalation clauses work well in competitive markets',
          'Always keep inspection contingency for first-time buyers',
          'Negotiating credits is often easier than price reductions',
          'Documentation of all repairs builds client trust'
        ]
      },
      bad_ending: {
        text: 'Seller accepts! But during your walkthrough, you find foundation cracks and old electrical. With no inspection contingency, your buyer is stuck with $25k in repairs.',
        isEnding: true,
        outcome: 'negative',
        feedback: 'Waiving inspection for a first-time buyer is risky. They could face serious financial strain from hidden issues.',
        recommendations: [
          'NEVER waive inspection for first-time buyers',
          'If pressured, offer shorter inspection period instead',
          'Educate clients on risks vs. rewards of waiving contingencies',
          'Consider "inspection for informational purposes only" as middle ground'
        ]
      },
      lose_deal: {
        text: 'The seller accepts another offer. Your clients are disappointed and the search continues.',
        isEnding: true,
        outcome: 'negative',
        feedback: 'In competitive markets, holding firm or negotiating back often means losing the deal.',
        recommendations: [
          'Set realistic expectations in hot markets',
          'Help clients prioritize: location, price, or terms',
          'Have backup properties ready to view',
          'Debrief after losses to refine strategy'
        ]
      }
    }
  },
  {
    id: 'scenario2',
    title: 'Seller Receiving Low Offer',
    description: 'Your seller receives an offer 10% below asking price with multiple contingencies.',
    difficulty: 'easy',
    category: 'seller',
    startNode: 'start',
    nodes: {
      start: {
        text: 'Your seller listed at $400k (market value). After 2 weeks, you receive an offer for $360k with inspection, financing, and home sale contingencies. What do you advise?',
        choices: [
          { text: 'Reject outright and wait for better offer', nextNode: 'reject' },
          { text: 'Counter at $390k with all contingencies', nextNode: 'counter_high' },
          { text: 'Counter at $380k, remove home sale contingency', nextNode: 'counter_strategic' },
          { text: 'Accept to avoid further delays', nextNode: 'accept_low' }
        ]
      },
      reject: {
        text: 'You reject the offer. Three weeks pass with no new offers. Price reduced to $385k. Finally get an offer at $370k.',
        isEnding: true,
        outcome: 'negative',
        feedback: 'Rejecting without countering signals inflexibility. The market may have been telling you something about the price.',
        recommendations: [
          'Always counter rather than outright reject (shows good faith)',
          'Low offers may indicate pricing issues',
          'Time on market costs carrying costs',
          'Educate sellers on market realities early'
        ]
      },
      counter_high: {
        text: 'You counter at $390k keeping all contingencies. Buyer responds at $365k.',
        choices: [
          { text: 'Accept the $365k offer', nextNode: 'settle_low' },
          { text: 'Counter at $380k, remove one contingency', nextNode: 'counter_strategic' },
          { text: 'Hold firm at $390k', nextNode: 'deal_dies' }
        ]
      },
      counter_strategic: {
        text: 'You counter at $380k and ask to remove the home sale contingency. Buyer agrees! But they need 60 days for closing.',
        choices: [
          { text: 'Accept - secured deal at good price', nextNode: 'good_ending' },
          { text: 'Counter for 45-day close', nextNode: 'risk_deal' }
        ]
      },
      accept_low: {
        text: 'You accept $360k. During inspection, buyer requests $8k in repairs. You\'re forced to negotiate from weak position.',
        isEnding: true,
        outcome: 'negative',
        feedback: 'Accepting too quickly sets a weak negotiating tone. Seller may have left money on the table.',
        recommendations: [
          'Always counter, even if accepting is likely',
          'Use counters to improve terms, not just price',
          'Show seller you\'re fighting for them',
          'Document your negotiation strategy'
        ]
      },
      settle_low: {
        text: 'Deal closes at $365k. Seller is disappointed but relieved to move on.',
        isEnding: true,
        outcome: 'neutral',
        feedback: 'Not the worst outcome, but likely could have gotten more with better strategy.',
        recommendations: [
          'Set realistic expectations from listing stage',
          'Use comparables to justify asking price',
          'Multiple offers strengthen negotiating position',
          'Consider price reductions strategically, not reactively'
        ]
      },
      deal_dies: {
        text: 'Buyer walks away. Listing sits another month before reducing price to $385k and getting $375k offer.',
        isEnding: true,
        outcome: 'negative',
        feedback: 'Holding too firm can backfire. Flexibility is key in negotiations.',
        recommendations: [
          'Know when to compromise vs. hold firm',
          'Every day on market costs money',
          'Use market data to guide decisions',
          'Help sellers understand opportunity cost'
        ]
      },
      risk_deal: {
        text: 'Buyer agrees to 45 days but seems hesitant. During inspection period, they back out citing timing concerns.',
        isEnding: true,
        outcome: 'negative',
        feedback: 'Pushing too hard on secondary terms can kill deals. The $380k price was a win.',
        recommendations: [
          'Pick your battles in negotiations',
          'Price matters more than closing date usually',
          'Buyer hesitation is a red flag',
          'Sometimes taking the deal is the smart play'
        ]
      },
      good_ending: {
        text: 'Deal closes smoothly at $380k. Seller nets more than they expected initially. Both parties satisfied!',
        isEnding: true,
        outcome: 'positive',
        feedback: 'Excellent negotiation! You improved price and terms while keeping the deal alive.',
        recommendations: [
          'Strategic counters improve both price and terms',
          'Removing home sale contingency reduced risk',
          'Flexibility on closing date shows good faith',
          'Win-win negotiations build referral business'
        ]
      }
    }
  },
  {
    id: 'scenario3',
    title: 'Investor Analyzing Multi-Unit Property',
    description: 'An investor client is considering a three-family property that needs work.',
    difficulty: 'hard',
    category: 'investor',
    startNode: 'start',
    nodes: {
      start: {
        text: 'Your investor client found a three-family for $550k. Current rents: $1,800/unit. Needs $50k in repairs. What\'s your analysis approach?',
        choices: [
          { text: 'Advise to offer asking price - good cash flow', nextNode: 'no_analysis' },
          { text: 'Run full analysis: cap rate, CoC return, ARV', nextNode: 'full_analysis' },
          { text: 'Suggest offering $500k without analysis', nextNode: 'lowball' },
          { text: 'Recommend partnering with property manager first', nextNode: 'pm_consult' }
        ]
      },
      no_analysis: {
        text: 'Client buys at $550k. After repairs, total investment is $600k. Annual expenses are higher than projected. Barely breaks even.',
        isEnding: true,
        outcome: 'negative',
        feedback: 'Always run the numbers! Investors need detailed analysis before committing.',
        recommendations: [
          'Calculate cap rate, cash-on-cash return, and ARV',
          'Factor in ALL expenses: taxes, insurance, maintenance, vacancies',
          'Compare to other investment opportunities',
          'Know local rent comparables thoroughly'
        ]
      },
      full_analysis: {
        text: 'Analysis shows: 6.5% cap rate at asking, 8% at $525k. After repairs, rents could hit $2,200/unit. What\'s your recommendation?',
        choices: [
          { text: 'Offer $525k with inspection', nextNode: 'strategic_offer' },
          { text: 'Offer $500k, waive inspection', nextNode: 'risky_investor' },
          { text: 'Offer $540k with seller credits', nextNode: 'creative_structure' }
        ]
      },
      lowball: {
        text: 'You offer $500k. Seller counters at $545k. You\'re now negotiating without knowing if the numbers work.',
        choices: [
          { text: 'Accept counter quickly', nextNode: 'no_analysis' },
          { text: 'Run analysis now', nextNode: 'late_analysis' }
        ]
      },
      pm_consult: {
        text: 'Property manager confirms $2,200/unit is achievable post-renovation. Suggests $500/month management fee. Now you have solid data.',
        choices: [
          { text: 'Run detailed financial analysis', nextNode: 'full_analysis' },
          { text: 'Offer asking price with confidence', nextNode: 'informed_offer' }
        ]
      },
      strategic_offer: {
        text: 'You offer $525k with inspection and 45-day close. During inspection, you find $65k in needed repairs (not $50k). Now what?',
        choices: [
          { text: 'Negotiate price to $510k', nextNode: 'excellent_ending' },
          { text: 'Request $15k seller credit', nextNode: 'good_ending' },
          { text: 'Walk away from deal', nextNode: 'walk_away' }
        ]
      },
      risky_investor: {
        text: 'Seller accepts $500k! But post-close, you discover outdated electrical ($20k) and roof issues ($25k). Total repairs now $95k.',
        isEnding: true,
        outcome: 'negative',
        feedback: 'Even for investors, inspection is crucial. The "discount" wasn\'t enough to cover hidden issues.',
        recommendations: [
          'Investors should ALWAYS inspect multi-family properties',
          'Budget 20-30% buffer for unexpected repairs',
          'Get multiple contractor estimates',
          'Consider professional property inspection AND scope of work'
        ]
      },
      creative_structure: {
        text: 'You offer $540k with $15k seller credit for repairs. Seller accepts! This covers the extra repairs found and keeps deal in budget.',
        isEnding: true,
        outcome: 'positive',
        feedback: 'Creative structuring! You got a price reduction through seller credits, which can help with closing costs.',
        recommendations: [
          'Seller credits can be easier to negotiate than price drops',
          'Credits help with cash flow at closing',
          'Document exactly what credits will cover',
          'Ensure lender allows requested credit amount'
        ]
      },
      late_analysis: {
        text: 'Numbers show $545k works if rents increase to $2,100/unit. Marginal deal. You accept counter but profit margins are thin.',
        isEnding: true,
        outcome: 'neutral',
        feedback: 'Better late than never, but starting with analysis gives stronger negotiating position.',
        recommendations: [
          'Always analyze BEFORE making offers',
          'Know your client\'s return requirements',
          'Build in safety margins for assumptions',
          'Consider exit strategies before entry'
        ]
      },
      informed_offer: {
        text: 'With PM data, you confidently offer $550k, knowing renovated value will be $650k+ with improved rents. Deal closes successfully!',
        isEnding: true,
        outcome: 'positive',
        feedback: 'Great work using professional input to make informed decisions!',
        recommendations: [
          'Property manager input adds credibility',
          'Know the after-repair value (ARV)',
          'Strong fundamentals support asking price',
          'Investors appreciate thorough due diligence'
        ]
      },
      excellent_ending: {
        text: 'Seller agrees to $510k. After repairs at $65k, total investment $575k. Property appraises at $650k. Rents hit $2,200/unit. Excellent deal!',
        isEnding: true,
        outcome: 'positive',
        feedback: 'Perfect! You used inspection findings to negotiate better terms, maximizing investor returns.',
        recommendations: [
          'Use inspection findings as negotiation leverage',
          'Document all repair estimates with contractor quotes',
          'Understand investor metrics: cap rate, CoC, IRR',
          'Build relationships with contractors for accurate estimates',
          'Always have exit strategy planned'
        ]
      },
      good_ending: {
        text: 'Seller provides $15k credit. Final price $525k + $50k repairs (credit applied) = $575k all-in. Solid investment!',
        isEnding: true,
        outcome: 'positive',
        feedback: 'Good negotiation! You protected investor while keeping the deal alive.',
        recommendations: [
          'Seller credits preserve working capital',
          'Document credit usage for lender',
          'Track actual vs. estimated repair costs',
          'Build reserve fund for future maintenance'
        ]
      },
      walk_away: {
        text: 'You walk away. Two months later, the property sells for $515k to another investor who saw the value you missed.',
        isEnding: true,
        outcome: 'negative',
        feedback: 'Sometimes walking away is right, but make sure you\'re not being overly cautious with someone else\'s investment.',
        recommendations: [
          'Know when to walk vs. negotiate',
          'Additional $15k in repairs may still leave good deal',
          'Help clients see the adjusted numbers',
          'Don\'t let perfect be the enemy of good'
        ]
      }
    }
  }
];

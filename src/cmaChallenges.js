// CMA Calculator Challenge Scenarios
export const cmaChallenges = [
  {
    id: 1,
    title: "Basic Residential CMA",
    difficulty: "beginner",
    description: "Complete your first CMA using 3 comparable properties. Learn the fundamentals of property valuation.",
    xpReward: 50,
    achievement: "first-cma",
    scenario: {
      subject: {
        address: "123 Maple Street, Boston, MA",
        beds: "3",
        baths: "2",
        sqft: "1800",
        garage: "yes",
        condition: "good",
        age: "10"
      },
      adjustments: {
        bed: "20000",
        bath: "15000",
        sqft: "100",
        garage: "15000",
        condition: "10000",
        age: "2000",
        dom: "500"
      },
      comps: [
        {
          active: true,
          price: "425000",
          beds: "3",
          baths: "2",
          sqft: "1750",
          garage: "yes",
          condition: "good",
          age: "12",
          dom: "30"
        },
        {
          active: true,
          price: "440000",
          beds: "3",
          baths: "2.5",
          sqft: "1900",
          garage: "yes",
          condition: "excellent",
          age: "8",
          dom: "15"
        },
        {
          active: true,
          price: "415000",
          beds: "3",
          baths: "1.5",
          sqft: "1650",
          garage: "no",
          condition: "fair",
          age: "15",
          dom: "45"
        }
      ],
      targetValue: {
        min: 420000,
        max: 435000
      }
    },
    instructions: [
      "Review the pre-loaded subject property details",
      "Examine all 3 comparable properties",
      "Note the adjustments already set (Massachusetts averages)",
      "Calculate and review the adjusted values",
      "Your goal: Average adjusted value should be around $427,000",
      "Generate a professional CMA report when done"
    ],
    learningPoints: [
      "Understanding how adjustments work",
      "Reading adjusted comparable values",
      "Interpreting average adjusted value",
      "Recognizing reasonable value ranges"
    ]
  },
  {
    id: 2,
    title: "Condition Matters",
    difficulty: "intermediate",
    description: "Master condition-based adjustments with properties ranging from poor to excellent condition.",
    xpReward: 75,
    achievement: "condition-expert",
    scenario: {
      subject: {
        address: "456 Oak Avenue, Cambridge, MA",
        beds: "4",
        baths: "2.5",
        sqft: "2200",
        garage: "yes",
        condition: "fair",
        age: "25"
      },
      adjustments: {
        bed: "25000",
        bath: "18000",
        sqft: "150",
        garage: "20000",
        condition: "15000",
        age: "2500",
        dom: "600"
      },
      comps: [
        {
          active: true,
          price: "520000",
          beds: "4",
          baths: "2.5",
          sqft: "2200",
          garage: "yes",
          condition: "excellent",
          age: "5",
          dom: "12"
        },
        {
          active: true,
          price: "410000",
          beds: "4",
          baths: "2.5",
          sqft: "2150",
          garage: "yes",
          condition: "poor",
          age: "30",
          dom: "75"
        },
        {
          active: true,
          price: "465000",
          beds: "4",
          baths: "2",
          sqft: "2250",
          garage: "yes",
          condition: "good",
          age: "20",
          dom: "28"
        }
      ],
      targetValue: {
        min: 445000,
        max: 465000
      }
    },
    instructions: [
      "Notice the subject property is in FAIR condition",
      "Comp 1 is EXCELLENT (+2 levels) - requires large downward adjustment",
      "Comp 2 is POOR (-1 level) - requires upward adjustment",
      "Comp 3 is GOOD (+1 level) - requires moderate downward adjustment",
      "Pay attention to how condition dramatically affects value",
      "Your target: Average around $455,000"
    ],
    learningPoints: [
      "Condition is a major value driver",
      "Each condition level = $15,000 in this market",
      "Poor condition properties need significant work",
      "Excellent condition commands premium pricing"
    ]
  },
  {
    id: 3,
    title: "Days on Market Analysis",
    difficulty: "intermediate",
    description: "Learn how market timing affects property values by analyzing Days on Market (DOM) penalties.",
    xpReward: 75,
    achievement: "market-timer",
    scenario: {
      subject: {
        address: "789 Pine Road, Worcester, MA",
        beds: "3",
        baths: "2",
        sqft: "1900",
        garage: "yes",
        condition: "good",
        age: "15"
      },
      adjustments: {
        bed: "18000",
        bath: "12000",
        sqft: "85",
        garage: "12000",
        condition: "8000",
        age: "1500",
        dom: "500"
      },
      comps: [
        {
          active: true,
          price: "335000",
          beds: "3",
          baths: "2",
          sqft: "1900",
          garage: "yes",
          condition: "good",
          age: "15",
          dom: "8"
        },
        {
          active: true,
          price: "342000",
          beds: "3",
          baths: "2",
          sqft: "1950",
          garage: "yes",
          condition: "good",
          age: "12",
          dom: "45"
        },
        {
          active: true,
          price: "328000",
          beds: "3",
          baths: "2",
          sqft: "1850",
          garage: "yes",
          condition: "good",
          age: "18",
          dom: "92"
        }
      ],
      targetValue: {
        min: 330000,
        max: 342000
      }
    },
    instructions: [
      "All 3 comps are very similar to subject property",
      "The KEY difference is Days on Market (DOM)",
      "Comp 1: 8 days (hot property!) - no penalty",
      "Comp 2: 45 days (normal) - small penalty applied",
      "Comp 3: 92 days (sat too long) - larger penalty applied",
      "Notice how DOM affects final adjusted values"
    ],
    learningPoints: [
      "Quick sales (< 30 days) indicate strong demand",
      "30-60 days = normal market time",
      "60+ days suggests overpricing or issues",
      "DOM penalties reflect buyer skepticism"
    ]
  },
  {
    id: 4,
    title: "Urban Premium Analysis",
    difficulty: "advanced",
    description: "Understand how location dramatically affects per-square-foot values in urban vs. suburban markets.",
    xpReward: 100,
    achievement: "market-specialist",
    scenario: {
      subject: {
        address: "321 Beacon Street, Boston (Back Bay), MA",
        beds: "2",
        baths: "2",
        sqft: "1200",
        garage: "no",
        condition: "excellent",
        age: "5"
      },
      adjustments: {
        bed: "35000",
        bath: "25000",
        sqft: "300",
        garage: "25000",
        condition: "20000",
        age: "3000",
        dom: "800"
      },
      comps: [
        {
          active: true,
          price: "725000",
          beds: "2",
          baths: "2",
          sqft: "1150",
          garage: "no",
          condition: "excellent",
          age: "3",
          dom: "6"
        },
        {
          active: true,
          price: "695000",
          beds: "2",
          baths: "1.5",
          sqft: "1250",
          garage: "no",
          condition: "good",
          age: "8",
          dom: "18"
        },
        {
          active: true,
          price: "745000",
          beds: "2",
          baths: "2",
          sqft: "1300",
          garage: "no",
          condition: "excellent",
          age: "2",
          dom: "4"
        }
      ],
      targetValue: {
        min: 710000,
        max: 735000
      }
    },
    instructions: [
      "Notice the MUCH HIGHER adjustment values ($300/sqft!)",
      "This is Boston's Back Bay - ultra-premium urban location",
      "Compare to suburban markets: ~$100/sqft vs. $300/sqft here",
      "Small square footage differences = large value changes",
      "Location premium means $600K+ for 1,200 sqft!",
      "No garages in urban condos - not a factor here"
    ],
    learningPoints: [
      "Urban markets: $200-$400+ per square foot",
      "Suburban markets: $100-$150 per square foot",
      "Location is the #1 value driver",
      "Adjust your adjustment values by market!",
      "Same property worth 2-3x more in premium locations"
    ]
  },
  {
    id: 5,
    title: "Complex Multi-Factor Challenge",
    difficulty: "advanced",
    description: "Handle a complex scenario where subject and all comps differ significantly across multiple factors.",
    xpReward: 150,
    achievement: "cma-master",
    scenario: {
      subject: {
        address: "555 Highland Avenue, Springfield, MA",
        beds: "4",
        baths: "3",
        sqft: "2400",
        garage: "yes",
        condition: "good",
        age: "12"
      },
      adjustments: {
        bed: "22000",
        bath: "16000",
        sqft: "95",
        garage: "14000",
        condition: "11000",
        age: "2000",
        dom: "550"
      },
      comps: [
        {
          active: true,
          price: "385000",
          beds: "5",
          baths: "2.5",
          sqft: "2800",
          garage: "yes",
          condition: "fair",
          age: "20",
          dom: "62"
        },
        {
          active: true,
          price: "425000",
          beds: "3",
          baths: "3.5",
          sqft: "2100",
          garage: "no",
          condition: "excellent",
          age: "3",
          dom: "14"
        },
        {
          active: true,
          price: "395000",
          beds: "4",
          baths: "2",
          sqft: "2650",
          garage: "yes",
          condition: "good",
          age: "18",
          dom: "45"
        }
      ],
      targetValue: {
        min: 395000,
        max: 415000
      }
    },
    instructions: [
      "This is COMPLEX - every comp differs in multiple ways",
      "Comp 1: More beds, less baths, much bigger, older, fair condition",
      "Comp 2: Less beds, more baths, smaller, newer, excellent, no garage",
      "Comp 3: Same beds, less baths, bigger, older, same condition",
      "You must balance ALL adjustment factors",
      "Think through each adjustment logically"
    ],
    learningPoints: [
      "Real CMAs rarely have perfect comps",
      "Multiple adjustments compound",
      "Add adjustments when comp is worse",
      "Subtract adjustments when comp is better",
      "Final values should converge to similar range"
    ]
  },
  {
    id: 6,
    title: "Real-World Data Challenge",
    difficulty: "expert",
    description: "Find a REAL property in Massachusetts, gather data from public sources, and complete a full CMA.",
    xpReward: 250,
    achievement: "real-estate-analyst",
    scenario: null, // No pre-loaded data - student gathers everything
    instructions: [
      "Choose ANY property in Massachusetts",
      "Use Local Assessor Database to get property details",
      "Search Zillow or Redfin for 3 comparable recent sales",
      "Verify at least one sale price with Registry of Deeds",
      "Enter ALL data into the calculator",
      "Research appropriate adjustment values for that market",
      "Complete the CMA and generate a professional report",
      "Compare your value to Zillow's Zestimate (if available)"
    ],
    learningPoints: [
      "Complete real-world workflow",
      "Data gathering from public sources",
      "Cross-referencing and verification",
      "Market research for adjustment values",
      "Professional report generation",
      "This is what real agents do!"
    ],
    realWorldChallenge: true,
    requirements: [
      "Use at least 3 different data sources",
      "All sales within 6 months",
      "All comps within 1 mile of subject",
      "Verify data accuracy",
      "Generate professional report"
    ]
  }
];

// CMA-specific achievements
export const cmaAchievements = [
  {
    id: "first-cma",
    title: "First CMA Complete",
    description: "Complete your first Comparative Market Analysis",
    icon: "🎯",
    xpReward: 50,
    requirement: (stats) => stats.cmasCompleted >= 1
  },
  {
    id: "data-gatherer",
    title: "Data Gatherer",
    description: "Use all 3 comparables in a CMA analysis",
    icon: "📊",
    xpReward: 25,
    requirement: (stats) => stats.threeCompsUsed >= 1
  },
  {
    id: "condition-expert",
    title: "Condition Expert",
    description: "Complete 5 CMAs with varying conditions",
    icon: "📈",
    xpReward: 75,
    requirement: (stats) => stats.cmasCompleted >= 5
  },
  {
    id: "market-timer",
    title: "Market Timer",
    description: "Successfully apply DOM adjustments in 10 CMAs",
    icon: "⏰",
    xpReward: 75,
    requirement: (stats) => stats.cmasCompleted >= 10
  },
  {
    id: "reporter",
    title: "Professional Reporter",
    description: "Generate your first printed CMA report",
    icon: "🖨️",
    xpReward: 50,
    requirement: (stats) => stats.reportsGenerated >= 1
  },
  {
    id: "market-specialist",
    title: "Market Specialist",
    description: "Complete CMAs in 3+ different Massachusetts cities",
    icon: "🏙️",
    xpReward: 100,
    requirement: (stats) => stats.citiesAnalyzed >= 3
  },
  {
    id: "cma-master",
    title: "CMA Master",
    description: "Complete all challenge scenarios",
    icon: "🎓",
    xpReward: 150,
    requirement: (stats) => stats.challengesCompleted >= 5
  },
  {
    id: "real-estate-analyst",
    title: "Real Estate Analyst",
    description: "Complete the Real-World Data Challenge",
    icon: "💼",
    xpReward: 250,
    requirement: (stats) => stats.realWorldCompleted >= 1
  },
  {
    id: "speed-analyzer",
    title: "Speed Analyzer",
    description: "Complete a CMA in under 3 minutes",
    icon: "⚡",
    xpReward: 100,
    requirement: (stats) => stats.fastestTime > 0 && stats.fastestTime < 180
  },
  {
    id: "accuracy-ace",
    title: "Accuracy Ace",
    description: "Complete 5 CMAs with values within target range",
    icon: "🎯",
    xpReward: 125,
    requirement: (stats) => stats.accurateCompleted >= 5
  }
];

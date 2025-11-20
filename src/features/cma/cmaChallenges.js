// CMA Calculator Challenge Scenarios - Progressive Learning Path
export const cmaChallenges = [
  // LEVEL 1: BEGINNER - Basics
  {
    id: 1,
    title: "🎓 Your First CMA",
    difficulty: "beginner",
    description: "Complete your first CMA using 3 comparable properties. Learn the fundamentals of property valuation and basic adjustments.",
    xpReward: 50,
    achievement: "first-cma",
    learningObjectives: [
      "Understand comparable property selection",
      "Learn adjustment calculations",
      "Interpret value range results"
    ],
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
  },
  // LEVEL 2: INTERMEDIATE - Templates & Efficiency
  {
    id: 7,
    title: "🎯 Market Template Master",
    difficulty: "intermediate",
    description: "Learn to use market templates for faster CMA creation. Apply a Boston Suburban template and complete a CMA in record time!",
    xpReward: 80,
    achievement: "template-user",
    instructions: [
      "Click '🎯 Market Templates' in the toolbar",
      "Select 'Boston Suburban' template",
      "Notice how adjustment values auto-populate!",
      "Enter your subject property and 3 comparables",
      "See how templates save time and ensure market accuracy",
      "Complete the CMA with template-provided values"
    ],
    learningObjectives: [
      "Use market templates for efficiency",
      "Understand regional adjustment values",
      "Save time with pre-configured settings"
    ],
    learningPoints: [
      "Templates provide market-accurate adjustment values",
      "9 Massachusetts markets available",
      "One-click setup saves 5+ minutes per CMA",
      "Professional agents use templates for consistency"
    ]
  },
  {
    id: 8,
    title: "📸 Visual Presentation Pro",
    difficulty: "intermediate",
    description: "Create a visually stunning CMA by adding property photos. Learn how images enhance client presentations!",
    xpReward: 90,
    achievement: "photographer",
    instructions: [
      "Click '📸' (Photos) button in toolbar",
      "Upload a photo for the subject property",
      "Upload photos for each comparable",
      "Review how photos appear in your CMA",
      "Notice the professional visual appeal",
      "Photos make CMAs more engaging for clients"
    ],
    learningObjectives: [
      "Upload and manage property photos",
      "Create visually appealing reports",
      "Enhance client presentations"
    ],
    learningPoints: [
      "Photos increase client engagement by 40%",
      "Max 2MB per photo for performance",
      "Images stored as base64 for portability",
      "Professional CMAs always include photos"
    ]
  },
  // LEVEL 3: ADVANCED - Professional Tools
  {
    id: 9,
    title: "🎨 Build Your Brand",
    difficulty: "advanced",
    description: "Customize the CMA tool with your personal branding. Add your logo, company info, and brand colors!",
    xpReward: 100,
    achievement: "brand-builder",
    instructions: [
      "Click '🎨' (Branding) button in toolbar",
      "Enter your company name",
      "Add your phone number and email",
      "Enter your license number",
      "Choose your brand color (try different colors!)",
      "Click 'Save Branding'",
      "Your CMAs now show YOUR brand on reports!"
    ],
    learningObjectives: [
      "Customize professional branding",
      "Create branded reports",
      "Build professional identity"
    ],
    learningPoints: [
      "Branded reports look more professional",
      "Builds name recognition with clients",
      "Logo appears on all printed/PDF reports",
      "Brand colors make reports memorable"
    ]
  },
  {
    id: 10,
    title: "📄 PDF Export Excellence",
    difficulty: "advanced",
    description: "Master professional PDF generation. Create a complete CMA and export it as a PDF for client delivery!",
    xpReward: 110,
    achievement: "pdf-master",
    instructions: [
      "Complete a full CMA with all data",
      "Add branding if you haven't already",
      "Click '📄 PDF' button in toolbar",
      "PDF exports instantly - no print dialog!",
      "Review the professional format",
      "This is what you'd send to clients"
    ],
    learningObjectives: [
      "Generate professional PDF reports",
      "Understand PDF export workflow",
      "Create client-ready deliverables"
    ],
    learningPoints: [
      "PDFs are portable and professional",
      "Clients can save and review at leisure",
      "Branded PDFs build credibility",
      "One-click export saves time"
    ]
  },
  {
    id: 11,
    title: "📧 Client Communication Master",
    difficulty: "advanced",
    description: "Learn to email CMA reports directly to clients. Complete the professional delivery workflow!",
    xpReward: 120,
    achievement: "communicator",
    instructions: [
      "Complete a CMA analysis",
      "Click '📧' (Email) button in toolbar",
      "Enter client email address",
      "Customize the subject line",
      "Add a personal message to your client",
      "Click 'Send Email'",
      "Professional delivery complete!"
    ],
    learningObjectives: [
      "Email reports to clients",
      "Personalize client communications",
      "Complete the professional workflow"
    ],
    learningPoints: [
      "Direct email saves time and looks professional",
      "Personal messages build client relationships",
      "Instant delivery impresses clients",
      "Track when clients receive reports"
    ]
  },
  // LEVEL 4: EXPERT - Advanced Analysis
  {
    id: 12,
    title: "📊 Data Visualization Expert",
    difficulty: "expert",
    description: "Master advanced charts and visual analytics. Use pie charts, line charts, and comparison tools!",
    xpReward: 130,
    achievement: "data-visualizer",
    instructions: [
      "Complete a CMA with 4+ comparables",
      "Click '📊' (Charts) button to view analytics",
      "Review the visual comparison charts",
      "See adjustment breakdowns visually",
      "Notice the Quick Stats Summary Bar",
      "Use Comparison Matrix for side-by-side analysis",
      "Visual data tells the story better!"
    ],
    learningObjectives: [
      "Interpret visual data analytics",
      "Use charts for client presentations",
      "Master comparison tools"
    ],
    learningPoints: [
      "Charts make complex data understandable",
      "Clients prefer visual over text-heavy reports",
      "Comparison matrix shows differences instantly",
      "Quick stats provide at-a-glance insights"
    ]
  },
  {
    id: 13,
    title: "⭐ Organization & Efficiency Pro",
    difficulty: "expert",
    description: "Master organizational tools: notes, favorites, bulk actions, and shortcuts. Work like a power user!",
    xpReward: 140,
    achievement: "organizer",
    instructions: [
      "Complete a CMA and add notes to 2+ comps",
      "Use '💾 Save/Load' to save your CMA",
      "Add your CMA to favorites (⭐ star icon)",
      "Try keyboard shortcut: Press 'M' to toggle modes",
      "Press 'Ctrl+S' to save quickly",
      "Click '⚡' for bulk actions menu",
      "Explore '⌨️' to see all shortcuts",
      "You're now a power user!"
    ],
    learningObjectives: [
      "Use organizational tools effectively",
      "Master keyboard shortcuts",
      "Work at professional speed"
    ],
    learningPoints: [
      "Notes document your reasoning",
      "Favorites organize important CMAs",
      "Keyboard shortcuts save hours",
      "Bulk actions handle repetitive tasks",
      "Power users are 10x more efficient"
    ]
  },
  // LEVEL 5: ULTIMATE - Complete Professional Workflow
  {
    id: 14,
    title: "🏆 Ultimate CMA Professional",
    difficulty: "ultimate",
    description: "The ULTIMATE challenge! Complete a full professional CMA using ALL advanced features: photos, branding, PDF, email, charts, notes, and maps!",
    xpReward: 500,
    achievement: "ultimate-pro",
    instructions: [
      "✅ STEP 1: Set up your branding (🎨)",
      "✅ STEP 2: Use a market template (🎯)",
      "✅ STEP 3: Enter subject property + 4 comparables",
      "✅ STEP 4: Upload photos for all properties (📸)",
      "✅ STEP 5: Add notes to each comparable (📝)",
      "✅ STEP 6: View property map (🗺️)",
      "✅ STEP 7: Check advanced charts (📊)",
      "✅ STEP 8: Review comparison matrix",
      "✅ STEP 9: Export to PDF (📄)",
      "✅ STEP 10: Email to client (📧)",
      "✅ STEP 11: Save and favorite the CMA (⭐)",
      "🎊 CONGRATULATIONS - You're a CMA MASTER!"
    ],
    learningObjectives: [
      "Execute complete professional workflow",
      "Use all 110+ features together",
      "Deliver enterprise-quality CMAs"
    ],
    learningPoints: [
      "This is the complete professional workflow",
      "You've mastered software worth $1,500/month",
      "You can now compete with licensed agents",
      "These skills are immediately marketable",
      "You're ready for real-world CMA work!"
    ],
    realWorldChallenge: false,
    requirements: [
      "Use branding",
      "Upload at least 3 photos",
      "Add notes to 2+ comps",
      "View map",
      "View charts",
      "Export PDF",
      "Send email",
      "Save and favorite"
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
  },
  // NEW ADVANCED FEATURE ACHIEVEMENTS
  {
    id: "photographer",
    title: "📸 Property Photographer",
    description: "Upload photos to 5 different CMAs",
    icon: "📸",
    xpReward: 75,
    requirement: (stats) => stats.photosUploaded >= 5
  },
  {
    id: "pdf-master",
    title: "📄 PDF Export Master",
    description: "Export 10 CMAs to PDF",
    icon: "📄",
    xpReward: 100,
    requirement: (stats) => stats.pdfExports >= 10
  },
  {
    id: "data-visualizer",
    title: "📊 Data Visualizer",
    description: "Use advanced charts 5 times",
    icon: "📊",
    xpReward: 85,
    requirement: (stats) => stats.chartsViewed >= 5
  },
  {
    id: "communicator",
    title: "📧 Professional Communicator",
    description: "Email 3 CMA reports to clients",
    icon: "📧",
    xpReward: 90,
    requirement: (stats) => stats.emailsSent >= 3
  },
  {
    id: "brand-builder",
    title: "🎨 Brand Builder",
    description: "Customize your branding settings",
    icon: "🎨",
    xpReward: 60,
    requirement: (stats) => stats.brandingSet === true
  },
  {
    id: "power-user",
    title: "⚡ Power User",
    description: "Use bulk actions 10 times",
    icon: "⚡",
    xpReward: 80,
    requirement: (stats) => stats.bulkActionsUsed >= 10
  },
  {
    id: "organizer",
    title: "⭐ Super Organizer",
    description: "Favorite 5 CMAs",
    icon: "⭐",
    xpReward: 50,
    requirement: (stats) => stats.favoritesAdded >= 5
  },
  {
    id: "note-taker",
    title: "📝 Detailed Analyst",
    description: "Add notes to 10 comparables",
    icon: "📝",
    xpReward: 70,
    requirement: (stats) => stats.notesAdded >= 10
  },
  {
    id: "map-explorer",
    title: "🗺️ Map Explorer",
    description: "View property map 5 times",
    icon: "🗺️",
    xpReward: 65,
    requirement: (stats) => stats.mapsViewed >= 5
  },
  {
    id: "keyboard-ninja",
    title: "⌨️ Keyboard Ninja",
    description: "Use keyboard shortcuts 20 times",
    icon: "⌨️",
    xpReward: 95,
    requirement: (stats) => stats.shortcutsUsed >= 20
  },
  {
    id: "template-master",
    title: "🎯 Template Master",
    description: "Use all 9 market templates",
    icon: "🎯",
    xpReward: 120,
    requirement: (stats) => stats.uniqueTemplatesUsed >= 9
  },
  {
    id: "ultimate-pro",
    title: "🏆 Ultimate CMA Professional",
    description: "Use all advanced features (photos, PDF, charts, email, branding)",
    icon: "🏆",
    xpReward: 500,
    requirement: (stats) => 
      stats.photosUploaded >= 1 && 
      stats.pdfExports >= 1 && 
      stats.chartsViewed >= 1 && 
      stats.emailsSent >= 1 && 
      stats.brandingSet === true
  }
];

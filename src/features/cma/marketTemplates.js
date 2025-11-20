// Massachusetts Market Templates for CMA Calculator
// Pre-configured adjustment values for different market types

export const marketTemplates = {
  bostonUrban: {
    id: 'bostonUrban',
    name: '🏙️ Boston Urban',
    description: 'Downtown Boston, Cambridge, Somerville - High-value urban markets',
    adjustments: {
      bed: '35000',
      bath: '25000',
      sqft: '150',
      garage: '25000',
      condition: '20000',
      age: '3000',
      dom: '1000',
      pool: '30000',
      lotSize: '10',
      location: '20000',
      view: '40000',
      upgrades: '25000'
    },
    notes: 'Urban markets command premium pricing. Location and views highly valued. Limited parking makes garages crucial.',
    avgPriceSqft: 350,
    marketType: 'urban'
  },
  
  bostonSuburban: {
    id: 'bostonSuburban',
    name: '🏡 Boston Suburban',
    description: 'Newton, Brookline, Lexington, Wellesley - Affluent suburbs',
    adjustments: {
      bed: '30000',
      bath: '20000',
      sqft: '125',
      garage: '20000',
      condition: '15000',
      age: '2500',
      dom: '750',
      pool: '25000',
      lotSize: '8',
      location: '15000',
      view: '30000',
      upgrades: '20000'
    },
    notes: 'Strong school districts drive values. Larger lots command premiums. Well-maintained properties essential.',
    avgPriceSqft: 275,
    marketType: 'suburban'
  },

  worcesterUrban: {
    id: 'worcesterUrban',
    name: '🌆 Worcester Urban',
    description: 'Worcester city center - Mid-tier urban market',
    adjustments: {
      bed: '20000',
      bath: '15000',
      sqft: '100',
      garage: '15000',
      condition: '12000',
      age: '2000',
      dom: '600',
      pool: '18000',
      lotSize: '5',
      location: '12000',
      view: '20000',
      upgrades: '15000'
    },
    notes: 'Growing market with revitalization. Condition matters significantly. Value-conscious buyers.',
    avgPriceSqft: 175,
    marketType: 'urban'
  },

  centralSuburban: {
    id: 'centralSuburban',
    name: '🏘️ Central MA Suburban',
    description: 'Shrewsbury, Westborough, Northborough - Mid-tier suburbs',
    adjustments: {
      bed: '18000',
      bath: '14000',
      sqft: '90',
      garage: '14000',
      condition: '10000',
      age: '1800',
      dom: '550',
      pool: '15000',
      lotSize: '4',
      location: '10000',
      view: '15000',
      upgrades: '12000'
    },
    notes: 'Family-oriented communities. Good schools important. Moderate appreciation rates.',
    avgPriceSqft: 150,
    marketType: 'suburban'
  },

  capeCoastal: {
    id: 'capeCoastal',
    name: '🏖️ Cape Cod Coastal',
    description: 'Cape Cod, Martha\'s Vineyard - Seasonal coastal markets',
    adjustments: {
      bed: '25000',
      bath: '18000',
      sqft: '110',
      garage: '12000',
      condition: '18000',
      age: '2200',
      dom: '800',
      pool: '20000',
      lotSize: '12',
      location: '25000',
      view: '50000',
      upgrades: '20000'
    },
    notes: 'Water views drive massive premiums. Seasonal market affects DOM. Beach access critical.',
    avgPriceSqft: 300,
    marketType: 'coastal'
  },

  westernRural: {
    id: 'westernRural',
    name: '🌲 Western MA Rural',
    description: 'Berkshires, Pioneer Valley - Rural/recreational markets',
    adjustments: {
      bed: '15000',
      bath: '12000',
      sqft: '75',
      garage: '10000',
      condition: '8000',
      age: '1500',
      dom: '500',
      pool: '12000',
      lotSize: '3',
      location: '8000',
      view: '25000',
      upgrades: '10000'
    },
    notes: 'Land size matters most. Mountain views valued. Longer market times normal. Seasonal buyers.',
    avgPriceSqft: 125,
    marketType: 'rural'
  },

  northShore: {
    id: 'northShore',
    name: '⛵ North Shore',
    description: 'Salem, Marblehead, Gloucester - Coastal communities',
    adjustments: {
      bed: '28000',
      bath: '22000',
      sqft: '130',
      garage: '18000',
      condition: '16000',
      age: '2500',
      dom: '700',
      pool: '22000',
      lotSize: '9',
      location: '18000',
      view: '45000',
      upgrades: '18000'
    },
    notes: 'Harbor and ocean views command top dollar. Historic character valued. Commuter proximity premium.',
    avgPriceSqft: 280,
    marketType: 'coastal'
  },

  southShore: {
    id: 'southShore',
    name: '🌊 South Shore',
    description: 'Quincy, Weymouth, Hingham, Cohasset - South coastal',
    adjustments: {
      bed: '26000',
      bath: '20000',
      sqft: '120',
      garage: '17000',
      condition: '14000',
      age: '2200',
      dom: '650',
      pool: '20000',
      lotSize: '7',
      location: '16000',
      view: '35000',
      upgrades: '17000'
    },
    notes: 'Growing market with Boston proximity. Water access valued. Family neighborhoods.',
    avgPriceSqft: 250,
    marketType: 'coastal'
  },

  custom: {
    id: 'custom',
    name: '⚙️ Custom Values',
    description: 'Use your own adjustment values',
    adjustments: {
      bed: '20000',
      bath: '15000',
      sqft: '100',
      garage: '15000',
      condition: '10000',
      age: '2000',
      dom: '500',
      pool: '20000',
      lotSize: '5',
      location: '10000',
      view: '25000',
      upgrades: '15000'
    },
    notes: 'Default values - customize based on your specific market analysis.',
    avgPriceSqft: 200,
    marketType: 'custom'
  }
};

// Helper to get template by ID
export const getTemplate = (templateId) => {
  return marketTemplates[templateId] || marketTemplates.custom;
};

// Get all template IDs
export const getTemplateIds = () => {
  return Object.keys(marketTemplates);
};

// Get templates by market type
export const getTemplatesByType = (marketType) => {
  return Object.values(marketTemplates).filter(t => t.marketType === marketType);
};

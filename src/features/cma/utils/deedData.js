/**
 * Deed Data and Property History Utilities
 * Integrates with public deed records and property databases
 * Uses free/public APIs and provides fallback mock data
 */

/**
 * Fetch deed information from public records
 * In production, this would integrate with:
 * - MassLandRecords.com for Massachusetts
 * - County Registry of Deeds APIs
 * - ATTOM Property API (requires API key)
 * 
 * @param {string} address - Property address
 * @param {string} state - State abbreviation (e.g., 'MA')
 * @returns {Promise<Object>} Deed information
 */
export const fetchDeedInformation = async (address, state = 'MA') => {
  try {
    // In production, make actual API call to deed records database
    // For demo, return mock data based on address
    
    console.log('Fetching deed data for:', address, state);
    
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // Generate realistic mock data
    const mockDeedData = {
      success: true,
      address: address,
      deedInfo: {
        bookPage: `Book ${Math.floor(Math.random() * 50000 + 10000)}, Page ${Math.floor(Math.random() * 500 + 1)}`,
        recordDate: generateRandomDate(2000, 2024),
        deedType: ['Warranty Deed', 'Quitclaim Deed', 'Trustee Deed', 'Executor\'s Deed'][Math.floor(Math.random() * 4)],
        documentNumber: `${Math.floor(Math.random() * 9000000 + 1000000)}`,
        recordingFee: `$${(Math.random() * 200 + 50).toFixed(2)}`,
        transferTax: `$${(Math.random() * 5000 + 1000).toFixed(2)}`
      },
      currentOwner: {
        name: 'Current Owner Name',
        ownershipType: ['Individual', 'Joint Tenancy', 'Tenancy in Common', 'Trust', 'LLC'][Math.floor(Math.random() * 5)],
        vestingDate: generateRandomDate(2010, 2024),
        mailingAddress: address
      },
      parcelInfo: {
        parcelNumber: `${Math.floor(Math.random() * 900 + 100)}-${Math.floor(Math.random() * 900 + 100)}-${Math.floor(Math.random() * 9000 + 1000)}`,
        legalDescription: `Lot ${Math.floor(Math.random() * 50 + 1)}, Block ${Math.floor(Math.random() * 20 + 1)}, ${['Highland', 'Oakwood', 'Riverside', 'Meadow'][Math.floor(Math.random() * 4)]} Subdivision`,
        lotSize: `${(Math.random() * 0.5 + 0.15).toFixed(2)} acres`,
        zoning: ['R-1', 'R-2', 'R-3', 'RM-1'][Math.floor(Math.random() * 4)]
      },
      encumbrances: [
        {
          type: 'Mortgage',
          holder: 'First National Bank',
          amount: `$${(Math.random() * 400000 + 200000).toFixed(0)}`,
          recordDate: generateRandomDate(2015, 2023)
        },
        {
          type: 'Property Tax Lien',
          status: 'Current',
          amount: '$0.00',
          note: 'No outstanding liens'
        }
      ],
      dataSource: 'Mock Data (Production: MassLandRecords / County Registry)'
    };
    
    return mockDeedData;
  } catch (error) {
    console.error('Error fetching deed data:', error);
    return {
      success: false,
      error: 'Unable to fetch deed information',
      message: 'Deed records temporarily unavailable'
    };
  }
};

/**
 * Fetch property sale history
 * @param {string} address - Property address
 * @returns {Promise<Array>} Array of historical sales
 */
export const fetchSaleHistory = async (address) => {
  try {
    console.log('Fetching sale history for:', address);
    
    await new Promise(resolve => setTimeout(resolve, 800));
    
    // Generate 2-5 historical sales
    const numSales = Math.floor(Math.random() * 4) + 2;
    const sales = [];
    
    let currentYear = new Date().getFullYear();
    let lastPrice = Math.floor(Math.random() * 200000 + 400000);
    
    for (let i = 0; i < numSales; i++) {
      const yearsAgo = Math.floor(Math.random() * 8 + 3) * (i + 1);
      const saleYear = currentYear - yearsAgo;
      
      // Appreciate by 3-8% per year going back
      const appreciation = Math.pow(0.95 + Math.random() * 0.03, yearsAgo);
      const salePrice = Math.floor(lastPrice * appreciation);
      
      sales.push({
        date: `${Math.floor(Math.random() * 12) + 1}/${Math.floor(Math.random() * 28) + 1}/${saleYear}`,
        price: salePrice,
        pricePerSqft: Math.floor(salePrice / (Math.random() * 500 + 1800)),
        saleType: ['MLS Sale', 'Private Sale', 'Bank Sale', 'Estate Sale', 'Short Sale'][Math.floor(Math.random() * 5)],
        buyer: 'Buyer Name',
        seller: 'Seller Name',
        daysOnMarket: Math.floor(Math.random() * 90 + 10),
        listPrice: Math.floor(salePrice * (1 + (Math.random() * 0.1 - 0.05)))
      });
      
      lastPrice = salePrice;
    }
    
    return {
      success: true,
      address: address,
      sales: sales.sort((a, b) => new Date(b.date) - new Date(a.date)),
      totalSales: sales.length,
      priceAppreciation: calculateAppreciation(sales),
      dataSource: 'Mock Data (Production: MLS / Public Records)'
    };
  } catch (error) {
    console.error('Error fetching sale history:', error);
    return {
      success: false,
      error: 'Unable to fetch sale history'
    };
  }
};

/**
 * Fetch tax assessment history
 * @param {string} address - Property address
 * @returns {Promise<Object>} Tax assessment data
 */
export const fetchTaxHistory = async (address) => {
  try {
    console.log('Fetching tax history for:', address);
    
    await new Promise(resolve => setTimeout(resolve, 600));
    
    const currentYear = new Date().getFullYear();
    const assessments = [];
    
    // Generate 5 years of tax data
    for (let i = 0; i < 5; i++) {
      const year = currentYear - i;
      const landValue = Math.floor(Math.random() * 100000 + 150000);
      const buildingValue = Math.floor(Math.random() * 200000 + 300000);
      const totalValue = landValue + buildingValue;
      const taxRate = 12.5 + Math.random() * 5; // per $1,000
      const annualTax = Math.floor((totalValue / 1000) * taxRate);
      
      assessments.push({
        year: year,
        landValue: landValue,
        buildingValue: buildingValue,
        totalValue: totalValue,
        taxRate: taxRate.toFixed(2),
        annualTax: annualTax,
        exemptions: i === 0 ? ['Homestead Exemption'] : []
      });
    }
    
    return {
      success: true,
      address: address,
      assessments: assessments,
      averageAnnualIncrease: '3.2%',
      dataSource: 'Mock Data (Production: County Assessor)'
    };
  } catch (error) {
    console.error('Error fetching tax history:', error);
    return {
      success: false,
      error: 'Unable to fetch tax history'
    };
  }
};

/**
 * Fetch property characteristics history
 * @param {string} address - Property address
 * @returns {Promise<Object>} Property details and modifications
 */
export const fetchPropertyHistory = async (address) => {
  try {
    console.log('Fetching property history for:', address);
    
    await new Promise(resolve => setTimeout(resolve, 700));
    
    return {
      success: true,
      address: address,
      buildHistory: {
        yearBuilt: Math.floor(Math.random() * 50 + 1970),
        originalOwner: 'Original Owner Name',
        builder: ['Smith Construction', 'Johnson Homes', 'Heritage Builders'][Math.floor(Math.random() * 3)],
        originalPrice: Math.floor(Math.random() * 100000 + 80000)
      },
      modifications: [
        {
          year: 2020,
          type: 'Kitchen Renovation',
          permitNumber: `P${Math.floor(Math.random() * 900000 + 100000)}`,
          value: '$45,000',
          contractor: 'ABC Remodeling'
        },
        {
          year: 2018,
          type: 'Roof Replacement',
          permitNumber: `P${Math.floor(Math.random() * 900000 + 100000)}`,
          value: '$12,500',
          contractor: 'Quality Roofing'
        },
        {
          year: 2015,
          type: 'HVAC System Upgrade',
          permitNumber: `P${Math.floor(Math.random() * 900000 + 100000)}`,
          value: '$8,000',
          contractor: 'Cool Air Systems'
        }
      ],
      characteristics: {
        bedrooms: 3,
        bathrooms: 2,
        sqft: Math.floor(Math.random() * 800 + 1800),
        lotSize: (Math.random() * 0.3 + 0.2).toFixed(2) + ' acres',
        stories: Math.floor(Math.random() * 2) + 1,
        garage: ['2-Car Attached', '1-Car Attached', '2-Car Detached', 'Carport'][Math.floor(Math.random() * 4)],
        basement: ['Full', 'Partial', 'None', 'Finished'][Math.floor(Math.random() * 4)],
        heating: ['Forced Air', 'Baseboard', 'Heat Pump'][Math.floor(Math.random() * 3)],
        cooling: ['Central AC', 'Window Units', 'None'][Math.floor(Math.random() * 3)]
      },
      dataSource: 'Mock Data (Production: Building Dept / Assessor)'
    };
  } catch (error) {
    console.error('Error fetching property history:', error);
    return {
      success: false,
      error: 'Unable to fetch property history'
    };
  }
};

/**
 * Fetch all property data (comprehensive)
 * @param {string} address - Property address
 * @param {string} state - State abbreviation
 * @returns {Promise<Object>} Complete property data package
 */
export const fetchCompletePropertyData = async (address, state = 'MA') => {
  try {
    // Fetch all data in parallel
    const [deedData, saleHistory, taxHistory, propertyHistory] = await Promise.all([
      fetchDeedInformation(address, state),
      fetchSaleHistory(address),
      fetchTaxHistory(address),
      fetchPropertyHistory(address)
    ]);
    
    return {
      success: true,
      address: address,
      deedData,
      saleHistory,
      taxHistory,
      propertyHistory,
      fetchedAt: new Date().toISOString(),
      note: 'This is demo data. Production version would use actual public records APIs.'
    };
  } catch (error) {
    console.error('Error fetching complete property data:', error);
    return {
      success: false,
      error: 'Unable to fetch complete property data'
    };
  }
};

/**
 * Helper: Generate random date
 */
const generateRandomDate = (startYear, endYear) => {
  const year = Math.floor(Math.random() * (endYear - startYear + 1)) + startYear;
  const month = Math.floor(Math.random() * 12) + 1;
  const day = Math.floor(Math.random() * 28) + 1;
  return `${month}/${day}/${year}`;
};

/**
 * Helper: Calculate price appreciation
 */
const calculateAppreciation = (sales) => {
  if (sales.length < 2) return 'N/A';
  
  const mostRecent = sales[0].price;
  const oldest = sales[sales.length - 1].price;
  const appreciation = ((mostRecent - oldest) / oldest * 100).toFixed(1);
  
  return `${appreciation}%`;
};

export default {
  fetchDeedInformation,
  fetchSaleHistory,
  fetchTaxHistory,
  fetchPropertyHistory,
  fetchCompletePropertyData
};

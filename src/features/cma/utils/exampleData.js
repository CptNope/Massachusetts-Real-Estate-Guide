/**
 * Example CMA Data
 * Pre-populated realistic property data for demonstration
 * Based on Massachusetts real estate market
 */

export const exampleCMAData = {
  // Client Information
  clientInfo: {
    clientName: 'Sarah & Michael Thompson',
    preparedBy: 'Jane Smith, Realtor®',
    brokerageName: 'Premier Realty Group',
    reportPurpose: 'listing'
  },

  // Subject Property
  subjectProperty: {
    address: '456 Maple Street, Newton, MA 02458',
    beds: '4',
    baths: '2.5',
    sqft: '2100',
    garage: 'yes',
    condition: 'good',
    age: '15',
    pool: 'no',
    lotSize: '8500',
    location: '4',
    view: 'none',
    upgrades: 'good'
  },

  // Comparable Properties
  comparables: [
    {
      active: true,
      address: '782 Oak Avenue, Newton, MA 02458',
      price: '625000',
      beds: '4',
      baths: '2.5',
      sqft: '2050',
      garage: 'yes',
      condition: 'good',
      age: '12',
      dom: '18',
      pool: 'no',
      lotSize: '8200',
      location: '4',
      view: 'none',
      upgrades: 'good'
    },
    {
      active: true,
      address: '159 Elm Street, Newton, MA 02459',
      price: '649000',
      beds: '4',
      baths: '3',
      sqft: '2250',
      garage: 'yes',
      condition: 'excellent',
      age: '8',
      dom: '12',
      pool: 'no',
      lotSize: '9000',
      location: '5',
      view: 'park',
      upgrades: 'excellent'
    },
    {
      active: true,
      address: '321 Pine Road, Newton, MA 02460',
      price: '595000',
      beds: '3',
      baths: '2',
      sqft: '1950',
      garage: 'yes',
      condition: 'fair',
      age: '20',
      dom: '35',
      pool: 'no',
      lotSize: '7500',
      location: '3',
      view: 'none',
      upgrades: 'average'
    },
    {
      active: true,
      address: '847 Birch Lane, Newton, MA 02461',
      price: '638000',
      beds: '4',
      baths: '2.5',
      sqft: '2150',
      garage: 'yes',
      condition: 'good',
      age: '10',
      dom: '22',
      pool: 'no',
      lotSize: '8800',
      location: '4',
      view: 'none',
      upgrades: 'good'
    },
    {
      active: false,
      address: '512 Cedar Court, Newton, MA 02462',
      price: '615000',
      beds: '4',
      baths: '2',
      sqft: '2000',
      garage: 'yes',
      condition: 'good',
      age: '14',
      dom: '28',
      pool: 'no',
      lotSize: '8000',
      location: '3',
      view: 'none',
      upgrades: 'average'
    },
    {
      active: false,
      address: '923 Willow Drive, Newton, MA 02458',
      price: '665000',
      beds: '4',
      baths: '3',
      sqft: '2300',
      garage: 'yes',
      condition: 'excellent',
      age: '5',
      dom: '8',
      pool: 'yes',
      lotSize: '9500',
      location: '5',
      view: 'park',
      upgrades: 'excellent'
    }
  ],

  // Adjustment Values
  adjustments: {
    bed: '25000',
    bath: '18000',
    sqft: '125',
    garage: '18000',
    condition: '12000',
    age: '2500',
    dom: '600',
    pool: '25000',
    lotSize: '6',
    location: '12000',
    view: '30000',
    upgrades: '18000'
  }
};

export default exampleCMAData;

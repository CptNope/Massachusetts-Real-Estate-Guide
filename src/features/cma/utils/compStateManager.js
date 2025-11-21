/**
 * Safe Comparable State Manager
 * Replaces dangerous eval() calls with type-safe state access
 * 
 * SECURITY: This module eliminates all eval() usage in EnhancedCMA.jsx
 */

/**
 * Create a state manager for comparable properties
 * @param {Object} compStates - Object containing all comp state setters
 * @returns {Object} Safe accessor methods
 */
export function createCompStateManager(compStates) {
  // Validate that we have all required states
  if (!compStates || typeof compStates !== 'object') {
    throw new Error('compStates must be an object');
  }

  return {
    /**
     * Get a state setter by comp number and field
     * @param {number} compNumber - Comp number (1-6)
     * @param {string} field - Field name (e.g., 'Price', 'Beds', 'Active')
     * @returns {Function} State setter function
     */
    getSetter: (compNumber, field) => {
      const key = `setComp${compNumber}${field}`;
      const setter = compStates[key];
      
      if (typeof setter !== 'function') {
        console.warn(`State setter not found: ${key}`);
        return () => {}; // Return noop function instead of throwing
      }
      
      return setter;
    },

    /**
     * Get a state value by comp number and field
     * @param {number} compNumber - Comp number (1-6)
     * @param {string} field - Field name (e.g., 'Price', 'Beds', 'Active')
     * @returns {any} State value
     */
    getValue: (compNumber, field) => {
      const key = `comp${compNumber}${field}`;
      return compStates[key];
    },

    /**
     * Set multiple fields for a comp at once
     * @param {number} compNumber - Comp number (1-6)
     * @param {Object} fields - Object with field names and values
     */
    setFields: (compNumber, fields) => {
      Object.entries(fields).forEach(([field, value]) => {
        const setter = compStates[`setComp${compNumber}${field}`];
        if (typeof setter === 'function') {
          setter(value);
        }
      });
    },

    /**
     * Clear all fields for a comp
     * @param {number} compNumber - Comp number (1-6)
     * @param {Object} defaults - Default values to set
     */
    clearComp: (compNumber, defaults = {}) => {
      const defaultValues = {
        Active: false,
        Price: '',
        Beds: '3',
        Baths: '2',
        Sqft: '1800',
        Garage: 'yes',
        Condition: 'good',
        Age: '10',
        DOM: '30',
        Pool: 'no',
        LotSize: '8000',
        Location: '3',
        View: 'none',
        Upgrades: 'average',
        ...defaults
      };

      Object.entries(defaultValues).forEach(([field, value]) => {
        const setter = compStates[`setComp${compNumber}${field}`];
        if (typeof setter === 'function') {
          setter(value);
        }
      });
    },

    /**
     * Import MLS property data to a comp
     * @param {number} compNumber - Comp number (1-6)
     * @param {Object} property - MLS property data
     */
    importMLSProperty: (compNumber, property) => {
      const currentYear = new Date().getFullYear();
      const age = property.yearBuilt ? currentYear - property.yearBuilt : 10;

      const fields = {
        Active: true,
        Price: property.price?.toString() || '',
        Beds: property.beds?.toString() || '3',
        Baths: property.baths?.toString() || '2',
        Sqft: property.sqft?.toString() || '',
        Age: age.toString(),
        DOM: property.dom?.toString() || '30'
      };

      Object.entries(fields).forEach(([field, value]) => {
        const setter = compStates[`setComp${compNumber}${field}`];
        if (typeof setter === 'function') {
          setter(value);
        }
      });
    },

    /**
     * Clear all comps at once
     * @param {Array<number>} compNumbers - Array of comp numbers to clear (default 1-6)
     */
    clearAllComps: (compNumbers = [1, 2, 3, 4, 5, 6]) => {
      compNumbers.forEach(num => {
        const activeKey = `setComp${num}Active`;
        const activeSetter = compStates[activeKey];
        if (typeof activeSetter === 'function') {
          activeSetter(false);
        }
      });

      // Reset basic fields to defaults
      compNumbers.forEach(num => {
        ['Price', 'Beds', 'Baths', 'Sqft'].forEach(field => {
          const setter = compStates[`setComp${num}${field}`];
          if (typeof setter === 'function') {
            const defaultVal = field === 'Price' ? '' : field === 'Beds' ? '3' : field === 'Baths' ? '2' : '1800';
            setter(defaultVal);
          }
        });
      });
    }
  };
}

/**
 * Get all comp photo states for iteration
 * @param {Object} compStates - Object containing all comp states
 * @returns {Array} Array of photo state objects
 */
export function getCompPhotoStates(compStates) {
  return [1, 2, 3, 4, 5, 6].map(i => ({
    number: i,
    photo: compStates[`comp${i}Photo`],
    setPhoto: compStates[`setComp${i}Photo`],
    active: compStates[`comp${i}Active`]
  })).filter(comp => comp.active); // Only return active comps
}

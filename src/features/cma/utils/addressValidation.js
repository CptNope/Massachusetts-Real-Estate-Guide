/**
 * Address Validation Utilities
 * Uses free public APIs for address validation and geocoding
 * - Census Geocoding API (no API key required)
 * - OpenStreetMap Nominatim (free, open source)
 */

/**
 * Validate and geocode address using Census Geocoding API
 * @param {string} address - Full address string
 * @returns {Promise<Object>} Validation result with coordinates and formatted address
 */
export const validateAddressWithCensus = async (address) => {
  if (!address || address.trim().length < 5) {
    return { valid: false, error: 'Address too short' };
  }

  try {
    // Census Geocoding API - Free, no API key needed
    const encodedAddress = encodeURIComponent(address);
    const url = `https://geocoding.geo.census.gov/geocoder/locations/onelineaddress?address=${encodedAddress}&benchmark=2020&format=json`;
    
    const response = await fetch(url);
    const data = await response.json();
    
    if (data.result && data.result.addressMatches && data.result.addressMatches.length > 0) {
      const match = data.result.addressMatches[0];
      
      return {
        valid: true,
        formatted: match.matchedAddress,
        coordinates: {
          lat: match.coordinates.y,
          lng: match.coordinates.x
        },
        components: {
          street: match.addressComponents.streetName,
          number: match.addressComponents.fromAddress,
          city: match.addressComponents.city,
          state: match.addressComponents.state,
          zip: match.addressComponents.zip
        },
        source: 'census'
      };
    }
    
    return { valid: false, error: 'Address not found in Census database' };
  } catch (error) {
    console.error('Census validation error:', error);
    return { valid: false, error: 'Census API unavailable' };
  }
};

/**
 * Validate and geocode address using OpenStreetMap Nominatim
 * @param {string} address - Full address string
 * @returns {Promise<Object>} Validation result with coordinates and formatted address
 */
export const validateAddressWithOSM = async (address) => {
  if (!address || address.trim().length < 5) {
    return { valid: false, error: 'Address too short' };
  }

  try {
    // OpenStreetMap Nominatim - Free, requires User-Agent
    const encodedAddress = encodeURIComponent(address);
    const url = `https://nominatim.openstreetmap.org/search?q=${encodedAddress}&format=json&addressdetails=1&countrycodes=us&limit=1`;
    
    const response = await fetch(url, {
      headers: {
        'User-Agent': 'Massachusetts-Real-Estate-Guide/1.0'
      }
    });
    
    const data = await response.json();
    
    if (data && data.length > 0) {
      const result = data[0];
      
      return {
        valid: true,
        formatted: result.display_name,
        coordinates: {
          lat: parseFloat(result.lat),
          lng: parseFloat(result.lon)
        },
        components: {
          street: result.address.road,
          number: result.address.house_number,
          city: result.address.city || result.address.town || result.address.village,
          state: result.address.state,
          zip: result.address.postcode,
          county: result.address.county
        },
        source: 'osm',
        importance: result.importance,
        type: result.type
      };
    }
    
    return { valid: false, error: 'Address not found in OpenStreetMap' };
  } catch (error) {
    console.error('OSM validation error:', error);
    return { valid: false, error: 'OSM API unavailable' };
  }
};

/**
 * Validate address with fallback (tries Census first, then OSM)
 * @param {string} address - Full address string
 * @returns {Promise<Object>} Best validation result
 */
export const validateAddress = async (address) => {
  // Try Census API first (more accurate for US addresses)
  const censusResult = await validateAddressWithCensus(address);
  
  if (censusResult.valid) {
    return censusResult;
  }
  
  // Fallback to OpenStreetMap
  const osmResult = await validateAddressWithOSM(address);
  
  if (osmResult.valid) {
    return osmResult;
  }
  
  // Both failed
  return {
    valid: false,
    error: 'Address could not be validated. Please check spelling and format.',
    attempted: ['census', 'osm']
  };
};

/**
 * Search for address suggestions (autocomplete)
 * @param {string} query - Partial address string
 * @param {string} state - State to limit results (default: 'Massachusetts')
 * @returns {Promise<Array>} Array of address suggestions
 */
export const searchAddresses = async (query, state = 'Massachusetts') => {
  if (!query || query.trim().length < 3) {
    return [];
  }

  try {
    const encodedQuery = encodeURIComponent(`${query}, ${state}`);
    const url = `https://nominatim.openstreetmap.org/search?q=${encodedQuery}&format=json&addressdetails=1&countrycodes=us&limit=5`;
    
    const response = await fetch(url, {
      headers: {
        'User-Agent': 'Massachusetts-Real-Estate-Guide/1.0'
      }
    });
    
    const data = await response.json();
    
    return data.map(result => ({
      display: result.display_name,
      formatted: `${result.address.house_number || ''} ${result.address.road || ''}, ${result.address.city || result.address.town || ''}, ${result.address.state || ''} ${result.address.postcode || ''}`.trim(),
      coordinates: {
        lat: parseFloat(result.lat),
        lng: parseFloat(result.lon)
      },
      components: {
        street: result.address.road,
        number: result.address.house_number,
        city: result.address.city || result.address.town || result.address.village,
        state: result.address.state,
        zip: result.address.postcode
      }
    }));
  } catch (error) {
    console.error('Address search error:', error);
    return [];
  }
};

/**
 * Check if address is in Massachusetts
 * @param {Object} validationResult - Result from validateAddress
 * @returns {boolean} True if in Massachusetts
 */
export const isInMassachusetts = (validationResult) => {
  if (!validationResult || !validationResult.valid) return false;
  
  const state = validationResult.components?.state;
  return state && (
    state.toLowerCase() === 'massachusetts' ||
    state.toLowerCase() === 'ma'
  );
};

/**
 * Format address for display
 * @param {Object} components - Address components
 * @returns {string} Formatted address
 */
export const formatAddress = (components) => {
  if (!components) return '';
  
  const parts = [];
  
  if (components.number) parts.push(components.number);
  if (components.street) parts.push(components.street);
  
  const line1 = parts.join(' ');
  const line2 = [
    components.city,
    components.state,
    components.zip
  ].filter(Boolean).join(', ');
  
  return `${line1}, ${line2}`.trim();
};

/**
 * Calculate distance between two coordinates (Haversine formula)
 * @param {Object} coord1 - {lat, lng}
 * @param {Object} coord2 - {lat, lng}
 * @returns {number} Distance in miles
 */
export const calculateDistance = (coord1, coord2) => {
  const R = 3959; // Earth's radius in miles
  
  const dLat = (coord2.lat - coord1.lat) * Math.PI / 180;
  const dLng = (coord2.lng - coord1.lng) * Math.PI / 180;
  
  const a = 
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(coord1.lat * Math.PI / 180) * Math.cos(coord2.lat * Math.PI / 180) *
    Math.sin(dLng / 2) * Math.sin(dLng / 2);
  
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  
  return R * c;
};

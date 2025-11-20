import { useState, useEffect } from 'react';

/**
 * Custom hook for MLS Integration
 * Handles MLS connection, search, and property import
 */
export const useMLSIntegration = (showNotification, gamification) => {
  const [mlsConnected, setMlsConnected] = useState(false);
  const [mlsProvider, setMlsProvider] = useState('');
  const [mlsUsername, setMlsUsername] = useState('');
  const [mlsPassword, setMlsPassword] = useState('');
  const [mlsSearchAddress, setMlsSearchAddress] = useState('');
  const [mlsSearchRadius, setMlsSearchRadius] = useState('1');
  const [mlsResults, setMlsResults] = useState([]);
  const [showMLSImport, setShowMLSImport] = useState(false);

  // Load saved MLS credentials on mount
  useEffect(() => {
    const savedCreds = localStorage.getItem('mls_credentials');
    if (savedCreds) {
      try {
        const creds = JSON.parse(savedCreds);
        setMlsProvider(creds.provider);
        setMlsUsername(creds.username);
        setMlsConnected(true);
      } catch (e) {
        console.error('Error loading MLS credentials:', e);
      }
    }
  }, []);

  const connectMLS = () => {
    if (!mlsProvider || !mlsUsername || !mlsPassword) {
      showNotification('⚠️ Please fill in all MLS credentials', 'error');
      return;
    }

    // In production, this would make an actual API call
    // For demo, simulate connection
    localStorage.setItem('mls_credentials', JSON.stringify({
      provider: mlsProvider,
      username: mlsUsername,
      // Never store passwords in localStorage in production!
      connected: true
    }));

    setMlsConnected(true);
    showNotification(`✅ Connected to ${mlsProvider} MLS! +25 XP`, 'success');
    
    if (gamification) {
      gamification.addXP(25, 'MLS connection');
      gamification.recordActivity('mls_connected');
    }
  };

  const disconnectMLS = () => {
    localStorage.removeItem('mls_credentials');
    setMlsConnected(false);
    setMlsProvider('');
    setMlsUsername('');
    setMlsPassword('');
    showNotification('Disconnected from MLS', 'info');
  };

  const searchMLS = () => {
    if (!mlsConnected) {
      showNotification('⚠️ Please connect to MLS first', 'error');
      return;
    }
    if (!mlsSearchAddress) {
      showNotification('⚠️ Please enter a search address', 'error');
      return;
    }

    // Mock MLS search results (in production, this would call actual MLS API)
    const mockResults = [
      {
        mlsNumber: 'MA12345678',
        address: '789 Commonwealth Ave, Boston, MA',
        price: 495000,
        beds: 3,
        baths: 2,
        sqft: 1800,
        yearBuilt: 2015,
        dom: 22,
        condition: 'good',
        garage: 'yes'
      },
      {
        mlsNumber: 'MA12345679',
        address: '321 Beacon St, Boston, MA',
        price: 515000,
        beds: 3,
        baths: 2.5,
        sqft: 1900,
        yearBuilt: 2018,
        dom: 18,
        condition: 'excellent',
        garage: 'yes'
      },
      {
        mlsNumber: 'MA12345680',
        address: '654 Mass Ave, Cambridge, MA',
        price: 475000,
        beds: 3,
        baths: 2,
        sqft: 1750,
        yearBuilt: 2012,
        dom: 28,
        condition: 'good',
        garage: 'no'
      }
    ];

    setMlsResults(mockResults);
    setShowMLSImport(true);
    showNotification(`🔍 Found ${mockResults.length} properties within ${mlsSearchRadius}mi`, 'success');
  };

  const importMLSProperty = (property, compNumber, setters) => {
    const currentYear = new Date().getFullYear();
    const age = currentYear - property.yearBuilt;
    
    // Map MLS data to comp fields using provided setters
    const {
      setAddress, setPrice, setBeds, setBaths, setSqft,
      setGarage, setCondition, setAge, setDOM, setActive
    } = setters;
    
    setAddress(property.address);
    setPrice(property.price.toString());
    setBeds(property.beds.toString());
    setBaths(property.baths.toString());
    setSqft(property.sqft.toString());
    setGarage(property.garage);
    setCondition(property.condition);
    setAge(age.toString());
    setDOM(property.dom.toString());
    setActive(true);

    showNotification(`✅ Imported ${property.address} to Comp #${compNumber}! +15 XP`, 'success');
    
    if (gamification) {
      gamification.addXP(15, 'MLS property imported');
    }
  };

  return {
    // State
    mlsConnected,
    mlsProvider,
    mlsUsername,
    mlsPassword,
    mlsSearchAddress,
    mlsSearchRadius,
    mlsResults,
    showMLSImport,
    
    // Setters
    setMlsProvider,
    setMlsUsername,
    setMlsPassword,
    setMlsSearchAddress,
    setMlsSearchRadius,
    setShowMLSImport,
    
    // Actions
    connectMLS,
    disconnectMLS,
    searchMLS,
    importMLSProperty
  };
};

export default useMLSIntegration;

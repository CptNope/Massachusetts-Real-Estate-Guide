import { useState } from 'react';

/**
 * Custom hook for Comparable Properties State
 * Manages all 6 comparable properties with their data, photos, notes, and adjustments
 */
export const useCompProperties = () => {
  // Comp 1 State
  const [comp1Active, setComp1Active] = useState(false);
  const [comp1Address, setComp1Address] = useState('');
  const [comp1Price, setComp1Price] = useState('');
  const [comp1Beds, setComp1Beds] = useState('');
  const [comp1Baths, setComp1Baths] = useState('');
  const [comp1Sqft, setComp1Sqft] = useState('');
  const [comp1Garage, setComp1Garage] = useState('yes');
  const [comp1Condition, setComp1Condition] = useState('good');
  const [comp1Age, setComp1Age] = useState('');
  const [comp1DOM, setComp1DOM] = useState('');
  const [comp1Photo, setComp1Photo] = useState('');
  const [comp1Notes, setComp1Notes] = useState('');

  // Comp 2 State
  const [comp2Active, setComp2Active] = useState(false);
  const [comp2Address, setComp2Address] = useState('');
  const [comp2Price, setComp2Price] = useState('');
  const [comp2Beds, setComp2Beds] = useState('');
  const [comp2Baths, setComp2Baths] = useState('');
  const [comp2Sqft, setComp2Sqft] = useState('');
  const [comp2Garage, setComp2Garage] = useState('yes');
  const [comp2Condition, setComp2Condition] = useState('good');
  const [comp2Age, setComp2Age] = useState('');
  const [comp2DOM, setComp2DOM] = useState('');
  const [comp2Photo, setComp2Photo] = useState('');
  const [comp2Notes, setComp2Notes] = useState('');

  // Comp 3 State
  const [comp3Active, setComp3Active] = useState(false);
  const [comp3Address, setComp3Address] = useState('');
  const [comp3Price, setComp3Price] = useState('');
  const [comp3Beds, setComp3Beds] = useState('');
  const [comp3Baths, setComp3Baths] = useState('');
  const [comp3Sqft, setComp3Sqft] = useState('');
  const [comp3Garage, setComp3Garage] = useState('yes');
  const [comp3Condition, setComp3Condition] = useState('good');
  const [comp3Age, setComp3Age] = useState('');
  const [comp3DOM, setComp3DOM] = useState('');
  const [comp3Photo, setComp3Photo] = useState('');
  const [comp3Notes, setComp3Notes] = useState('');

  // Comp 4 State
  const [comp4Active, setComp4Active] = useState(false);
  const [comp4Address, setComp4Address] = useState('');
  const [comp4Price, setComp4Price] = useState('');
  const [comp4Beds, setComp4Beds] = useState('');
  const [comp4Baths, setComp4Baths] = useState('');
  const [comp4Sqft, setComp4Sqft] = useState('');
  const [comp4Garage, setComp4Garage] = useState('yes');
  const [comp4Condition, setComp4Condition] = useState('good');
  const [comp4Age, setComp4Age] = useState('');
  const [comp4DOM, setComp4DOM] = useState('');
  const [comp4Photo, setComp4Photo] = useState('');
  const [comp4Notes, setComp4Notes] = useState('');

  // Comp 5 State
  const [comp5Active, setComp5Active] = useState(false);
  const [comp5Address, setComp5Address] = useState('');
  const [comp5Price, setComp5Price] = useState('');
  const [comp5Beds, setComp5Beds] = useState('');
  const [comp5Baths, setComp5Baths] = useState('');
  const [comp5Sqft, setComp5Sqft] = useState('');
  const [comp5Garage, setComp5Garage] = useState('yes');
  const [comp5Condition, setComp5Condition] = useState('good');
  const [comp5Age, setComp5Age] = useState('');
  const [comp5DOM, setComp5DOM] = useState('');
  const [comp5Photo, setComp5Photo] = useState('');
  const [comp5Notes, setComp5Notes] = useState('');

  // Comp 6 State
  const [comp6Active, setComp6Active] = useState(false);
  const [comp6Address, setComp6Address] = useState('');
  const [comp6Price, setComp6Price] = useState('');
  const [comp6Beds, setComp6Beds] = useState('');
  const [comp6Baths, setComp6Baths] = useState('');
  const [comp6Sqft, setComp6Sqft] = useState('');
  const [comp6Garage, setComp6Garage] = useState('yes');
  const [comp6Condition, setComp6Condition] = useState('good');
  const [comp6Age, setComp6Age] = useState('');
  const [comp6DOM, setComp6DOM] = useState('');
  const [comp6Photo, setComp6Photo] = useState('');
  const [comp6Notes, setComp6Notes] = useState('');

  // Adjustment values (shared across all comps)
  const [bedAdjustment, setBedAdjustment] = useState('5000');
  const [bathAdjustment, setBathAdjustment] = useState('3000');
  const [sqftAdjustment, setSqftAdjustment] = useState('50');
  const [garageAdjustment, setGarageAdjustment] = useState('8000');
  const [conditionAdjustment, setConditionAdjustment] = useState('10000');
  const [ageAdjustment, setAgeAdjustment] = useState('500');

  /**
   * Get all comparable setters for a specific comp number
   * @param {number} compNumber - Comp number (1-6)
   * @returns {Object} Setters for the comp
   */
  const getCompSetters = (compNumber) => {
    const settersMap = {
      1: {
        setActive: setComp1Active,
        setAddress: setComp1Address,
        setPrice: setComp1Price,
        setBeds: setComp1Beds,
        setBaths: setComp1Baths,
        setSqft: setComp1Sqft,
        setGarage: setComp1Garage,
        setCondition: setComp1Condition,
        setAge: setComp1Age,
        setDOM: setComp1DOM,
        setPhoto: setComp1Photo,
        setNotes: setComp1Notes
      },
      2: {
        setActive: setComp2Active,
        setAddress: setComp2Address,
        setPrice: setComp2Price,
        setBeds: setComp2Beds,
        setBaths: setComp2Baths,
        setSqft: setComp2Sqft,
        setGarage: setComp2Garage,
        setCondition: setComp2Condition,
        setAge: setComp2Age,
        setDOM: setComp2DOM,
        setPhoto: setComp2Photo,
        setNotes: setComp2Notes
      },
      3: {
        setActive: setComp3Active,
        setAddress: setComp3Address,
        setPrice: setComp3Price,
        setBeds: setComp3Beds,
        setBaths: setComp3Baths,
        setSqft: setComp3Sqft,
        setGarage: setComp3Garage,
        setCondition: setComp3Condition,
        setAge: setComp3Age,
        setDOM: setComp3DOM,
        setPhoto: setComp3Photo,
        setNotes: setComp3Notes
      },
      4: {
        setActive: setComp4Active,
        setAddress: setComp4Address,
        setPrice: setComp4Price,
        setBeds: setComp4Beds,
        setBaths: setComp4Baths,
        setSqft: setComp4Sqft,
        setGarage: setComp4Garage,
        setCondition: setComp4Condition,
        setAge: setComp4Age,
        setDOM: setComp4DOM,
        setPhoto: setComp4Photo,
        setNotes: setComp4Notes
      },
      5: {
        setActive: setComp5Active,
        setAddress: setComp5Address,
        setPrice: setComp5Price,
        setBeds: setComp5Beds,
        setBaths: setComp5Baths,
        setSqft: setComp5Sqft,
        setGarage: setComp5Garage,
        setCondition: setComp5Condition,
        setAge: setComp5Age,
        setDOM: setComp5DOM,
        setPhoto: setComp5Photo,
        setNotes: setComp5Notes
      },
      6: {
        setActive: setComp6Active,
        setAddress: setComp6Address,
        setPrice: setComp6Price,
        setBeds: setComp6Beds,
        setBaths: setComp6Baths,
        setSqft: setComp6Sqft,
        setGarage: setComp6Garage,
        setCondition: setComp6Condition,
        setAge: setComp6Age,
        setDOM: setComp6DOM,
        setPhoto: setComp6Photo,
        setNotes: setComp6Notes
      }
    };
    
    return settersMap[compNumber] || null;
  };

  /**
   * Get active comparables data
   * @returns {Array} Array of active comparable objects
   */
  const getActiveComps = () => {
    const comps = [
      { number: 1, active: comp1Active, address: comp1Address, price: comp1Price, beds: comp1Beds, baths: comp1Baths, sqft: comp1Sqft, garage: comp1Garage, condition: comp1Condition, age: comp1Age, dom: comp1DOM, photo: comp1Photo, notes: comp1Notes },
      { number: 2, active: comp2Active, address: comp2Address, price: comp2Price, beds: comp2Beds, baths: comp2Baths, sqft: comp2Sqft, garage: comp2Garage, condition: comp2Condition, age: comp2Age, dom: comp2DOM, photo: comp2Photo, notes: comp2Notes },
      { number: 3, active: comp3Active, address: comp3Address, price: comp3Price, beds: comp3Beds, baths: comp3Baths, sqft: comp3Sqft, garage: comp3Garage, condition: comp3Condition, age: comp3Age, dom: comp3DOM, photo: comp3Photo, notes: comp3Notes },
      { number: 4, active: comp4Active, address: comp4Address, price: comp4Price, beds: comp4Beds, baths: comp4Baths, sqft: comp4Sqft, garage: comp4Garage, condition: comp4Condition, age: comp4Age, dom: comp4DOM, photo: comp4Photo, notes: comp4Notes },
      { number: 5, active: comp5Active, address: comp5Address, price: comp5Price, beds: comp5Beds, baths: comp5Baths, sqft: comp5Sqft, garage: comp5Garage, condition: comp5Condition, age: comp5Age, dom: comp5DOM, photo: comp5Photo, notes: comp5Notes },
      { number: 6, active: comp6Active, address: comp6Address, price: comp6Price, beds: comp6Beds, baths: comp6Baths, sqft: comp6Sqft, garage: comp6Garage, condition: comp6Condition, age: comp6Age, dom: comp6DOM, photo: comp6Photo, notes: comp6Notes }
    ];
    
    return comps.filter(comp => comp.active);
  };

  /**
   * Clear all comparables
   */
  const clearAllComps = () => {
    if (!window.confirm('Clear all comparable data? This cannot be undone.')) return;
    
    // Reset all comp states
    setComp1Active(false); setComp1Address(''); setComp1Price(''); setComp1Beds(''); setComp1Baths(''); setComp1Sqft(''); setComp1Garage('yes'); setComp1Condition('good'); setComp1Age(''); setComp1DOM(''); setComp1Photo(''); setComp1Notes('');
    setComp2Active(false); setComp2Address(''); setComp2Price(''); setComp2Beds(''); setComp2Baths(''); setComp2Sqft(''); setComp2Garage('yes'); setComp2Condition('good'); setComp2Age(''); setComp2DOM(''); setComp2Photo(''); setComp2Notes('');
    setComp3Active(false); setComp3Address(''); setComp3Price(''); setComp3Beds(''); setComp3Baths(''); setComp3Sqft(''); setComp3Garage('yes'); setComp3Condition('good'); setComp3Age(''); setComp3DOM(''); setComp3Photo(''); setComp3Notes('');
    setComp4Active(false); setComp4Address(''); setComp4Price(''); setComp4Beds(''); setComp4Baths(''); setComp4Sqft(''); setComp4Garage('yes'); setComp4Condition('good'); setComp4Age(''); setComp4DOM(''); setComp4Photo(''); setComp4Notes('');
    setComp5Active(false); setComp5Address(''); setComp5Price(''); setComp5Beds(''); setComp5Baths(''); setComp5Sqft(''); setComp5Garage('yes'); setComp5Condition('good'); setComp5Age(''); setComp5DOM(''); setComp5Photo(''); setComp5Notes('');
    setComp6Active(false); setComp6Address(''); setComp6Price(''); setComp6Beds(''); setComp6Baths(''); setComp6Sqft(''); setComp6Garage('yes'); setComp6Condition('good'); setComp6Age(''); setComp6DOM(''); setComp6Photo(''); setComp6Notes('');
  };

  return {
    // Comp 1 State
    comp1Active, setComp1Active,
    comp1Address, setComp1Address,
    comp1Price, setComp1Price,
    comp1Beds, setComp1Beds,
    comp1Baths, setComp1Baths,
    comp1Sqft, setComp1Sqft,
    comp1Garage, setComp1Garage,
    comp1Condition, setComp1Condition,
    comp1Age, setComp1Age,
    comp1DOM, setComp1DOM,
    comp1Photo, setComp1Photo,
    comp1Notes, setComp1Notes,
    
    // Comp 2 State
    comp2Active, setComp2Active,
    comp2Address, setComp2Address,
    comp2Price, setComp2Price,
    comp2Beds, setComp2Beds,
    comp2Baths, setComp2Baths,
    comp2Sqft, setComp2Sqft,
    comp2Garage, setComp2Garage,
    comp2Condition, setComp2Condition,
    comp2Age, setComp2Age,
    comp2DOM, setComp2DOM,
    comp2Photo, setComp2Photo,
    comp2Notes, setComp2Notes,
    
    // Comp 3 State
    comp3Active, setComp3Active,
    comp3Address, setComp3Address,
    comp3Price, setComp3Price,
    comp3Beds, setComp3Beds,
    comp3Baths, setComp3Baths,
    comp3Sqft, setComp3Sqft,
    comp3Garage, setComp3Garage,
    comp3Condition, setComp3Condition,
    comp3Age, setComp3Age,
    comp3DOM, setComp3DOM,
    comp3Photo, setComp3Photo,
    comp3Notes, setComp3Notes,
    
    // Comp 4 State
    comp4Active, setComp4Active,
    comp4Address, setComp4Address,
    comp4Price, setComp4Price,
    comp4Beds, setComp4Beds,
    comp4Baths, setComp4Baths,
    comp4Sqft, setComp4Sqft,
    comp4Garage, setComp4Garage,
    comp4Condition, setComp4Condition,
    comp4Age, setComp4Age,
    comp4DOM, setComp4DOM,
    comp4Photo, setComp4Photo,
    comp4Notes, setComp4Notes,
    
    // Comp 5 State
    comp5Active, setComp5Active,
    comp5Address, setComp5Address,
    comp5Price, setComp5Price,
    comp5Beds, setComp5Beds,
    comp5Baths, setComp5Baths,
    comp5Sqft, setComp5Sqft,
    comp5Garage, setComp5Garage,
    comp5Condition, setComp5Condition,
    comp5Age, setComp5Age,
    comp5DOM, setComp5DOM,
    comp5Photo, setComp5Photo,
    comp5Notes, setComp5Notes,
    
    // Comp 6 State
    comp6Active, setComp6Active,
    comp6Address, setComp6Address,
    comp6Price, setComp6Price,
    comp6Beds, setComp6Beds,
    comp6Baths, setComp6Baths,
    comp6Sqft, setComp6Sqft,
    comp6Garage, setComp6Garage,
    comp6Condition, setComp6Condition,
    comp6Age, setComp6Age,
    comp6DOM, setComp6DOM,
    comp6Photo, setComp6Photo,
    comp6Notes, setComp6Notes,
    
    // Adjustment Values
    bedAdjustment, setBedAdjustment,
    bathAdjustment, setBathAdjustment,
    sqftAdjustment, setSqftAdjustment,
    garageAdjustment, setGarageAdjustment,
    conditionAdjustment, setConditionAdjustment,
    ageAdjustment, setAgeAdjustment,
    
    // Utilities
    getCompSetters,
    getActiveComps,
    clearAllComps
  };
};

export default useCompProperties;

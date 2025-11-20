import { useState } from 'react';

/**
 * Custom hook for Subject Property State
 * Manages all subject property data and photo
 */
export const useSubjectProperty = () => {
  // Subject property characteristics
  const [subjectBeds, setSubjectBeds] = useState('3');
  const [subjectBaths, setSubjectBaths] = useState('2');
  const [subjectSqft, setSubjectSqft] = useState('1800');
  const [subjectGarage, setSubjectGarage] = useState('yes');
  const [subjectCondition, setSubjectCondition] = useState('good');
  const [subjectAge, setSubjectAge] = useState('10');
  const [subjectAddress, setSubjectAddress] = useState('');
  
  // Subject property photo
  const [subjectPhoto, setSubjectPhoto] = useState('');
  
  /**
   * Reset subject property to defaults
   */
  const resetSubjectProperty = () => {
    setSubjectBeds('3');
    setSubjectBaths('2');
    setSubjectSqft('1800');
    setSubjectGarage('yes');
    setSubjectCondition('good');
    setSubjectAge('10');
    setSubjectAddress('');
    setSubjectPhoto('');
  };

  /**
   * Load subject property from data object
   * @param {Object} data - Subject property data
   */
  const loadSubjectProperty = (data) => {
    if (data.beds) setSubjectBeds(data.beds);
    if (data.baths) setSubjectBaths(data.baths);
    if (data.sqft) setSubjectSqft(data.sqft);
    if (data.garage) setSubjectGarage(data.garage);
    if (data.condition) setSubjectCondition(data.condition);
    if (data.age) setSubjectAge(data.age);
    if (data.address) setSubjectAddress(data.address);
    if (data.photo) setSubjectPhoto(data.photo);
  };

  /**
   * Get subject property as data object
   * @returns {Object}
   */
  const getSubjectPropertyData = () => {
    return {
      beds: subjectBeds,
      baths: subjectBaths,
      sqft: subjectSqft,
      garage: subjectGarage,
      condition: subjectCondition,
      age: subjectAge,
      address: subjectAddress,
      photo: subjectPhoto
    };
  };

  /**
   * Validate subject property
   * @returns {Object} Validation result
   */
  const validateSubjectProperty = () => {
    const errors = [];
    
    if (!subjectAddress || subjectAddress.trim() === '') {
      errors.push('Address is required');
    }
    if (!subjectBeds || parseInt(subjectBeds) < 0) {
      errors.push('Valid number of bedrooms required');
    }
    if (!subjectBaths || parseFloat(subjectBaths) < 0) {
      errors.push('Valid number of bathrooms required');
    }
    if (!subjectSqft || parseInt(subjectSqft) < 1) {
      errors.push('Valid square footage required');
    }
    if (!subjectAge || parseInt(subjectAge) < 0) {
      errors.push('Valid age required');
    }
    
    return {
      isValid: errors.length === 0,
      errors
    };
  };

  return {
    // State
    subjectBeds, setSubjectBeds,
    subjectBaths, setSubjectBaths,
    subjectSqft, setSubjectSqft,
    subjectGarage, setSubjectGarage,
    subjectCondition, setSubjectCondition,
    subjectAge, setSubjectAge,
    subjectAddress, setSubjectAddress,
    subjectPhoto, setSubjectPhoto,
    
    // Actions
    resetSubjectProperty,
    loadSubjectProperty,
    getSubjectPropertyData,
    validateSubjectProperty
  };
};

export default useSubjectProperty;

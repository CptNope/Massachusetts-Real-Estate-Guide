import { useState } from 'react';

/**
 * Custom hook for Client and Report Information
 * Manages client details, report purpose, and analysis notes
 */
export const useClientInfo = () => {
  // Client information
  const [clientName, setClientName] = useState('');
  const [preparedBy, setPreparedBy] = useState('');
  const [brokerageName, setBrokerageName] = useState('');
  const [reportPurpose, setReportPurpose] = useState('listing');
  
  // Analysis notes
  const [analysisNotes, setAnalysisNotes] = useState('');
  
  // Email information
  const [emailTo, setEmailTo] = useState('');
  const [emailSubject, setEmailSubject] = useState('');
  const [emailMessage, setEmailMessage] = useState('');
  
  // Misc metadata
  const [lastSaved, setLastSaved] = useState(null);
  const [currentTemplate, setCurrentTemplate] = useState('custom');
  const [validationErrors, setValidationErrors] = useState({});

  /**
   * Reset all client information
   */
  const resetClientInfo = () => {
    setClientName('');
    setPreparedBy('');
    setBrokerageName('');
    setReportPurpose('listing');
    setAnalysisNotes('');
    setEmailTo('');
    setEmailSubject('');
    setEmailMessage('');
    setValidationErrors({});
  };

  /**
   * Load client information from data object
   * @param {Object} data - Client information data
   */
  const loadClientInfo = (data) => {
    if (data.clientName) setClientName(data.clientName);
    if (data.preparedBy) setPreparedBy(data.preparedBy);
    if (data.brokerageName) setBrokerageName(data.brokerageName);
    if (data.reportPurpose) setReportPurpose(data.reportPurpose);
    if (data.analysisNotes) setAnalysisNotes(data.analysisNotes);
    if (data.emailTo) setEmailTo(data.emailTo);
    if (data.emailSubject) setEmailSubject(data.emailSubject);
    if (data.emailMessage) setEmailMessage(data.emailMessage);
    if (data.currentTemplate) setCurrentTemplate(data.currentTemplate);
  };

  /**
   * Get client information as data object
   * @returns {Object}
   */
  const getClientInfoData = () => {
    return {
      clientName,
      preparedBy,
      brokerageName,
      reportPurpose,
      analysisNotes,
      emailTo,
      emailSubject,
      emailMessage,
      currentTemplate,
      lastSaved
    };
  };

  /**
   * Validate client information
   * @returns {Object} Validation result
   */
  const validateClientInfo = () => {
    const errors = {};
    
    if (!clientName || clientName.trim() === '') {
      errors.clientName = 'Client name is required';
    }
    
    if (!preparedBy || preparedBy.trim() === '') {
      errors.preparedBy = 'Prepared by is required';
    }
    
    if (!brokerageName || brokerageName.trim() === '') {
      errors.brokerageName = 'Brokerage name is required';
    }
    
    if (emailTo && !isValidEmail(emailTo)) {
      errors.emailTo = 'Invalid email address';
    }
    
    setValidationErrors(errors);
    
    return {
      isValid: Object.keys(errors).length === 0,
      errors
    };
  };

  /**
   * Validate email address
   * @param {string} email
   * @returns {boolean}
   */
  const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  /**
   * Mark as saved
   */
  const markAsSaved = () => {
    setLastSaved(new Date().toISOString());
  };

  /**
   * Get time since last save
   * @returns {string|null}
   */
  const getTimeSinceLastSave = () => {
    if (!lastSaved) return null;
    
    const now = Date.now();
    const saved = new Date(lastSaved).getTime();
    const diffMs = now - saved;
    const diffMinutes = Math.floor(diffMs / 60000);
    
    if (diffMinutes < 1) return 'Just now';
    if (diffMinutes < 60) return `${diffMinutes} minute${diffMinutes > 1 ? 's' : ''} ago`;
    
    const diffHours = Math.floor(diffMinutes / 60);
    if (diffHours < 24) return `${diffHours} hour${diffHours > 1 ? 's' : ''} ago`;
    
    const diffDays = Math.floor(diffHours / 24);
    return `${diffDays} day${diffDays > 1 ? 's' : ''} ago`;
  };

  return {
    // Client State
    clientName, setClientName,
    preparedBy, setPreparedBy,
    brokerageName, setBrokerageName,
    reportPurpose, setReportPurpose,
    
    // Notes State
    analysisNotes, setAnalysisNotes,
    
    // Email State
    emailTo, setEmailTo,
    emailSubject, setEmailSubject,
    emailMessage, setEmailMessage,
    
    // Metadata State
    lastSaved, setLastSaved,
    currentTemplate, setCurrentTemplate,
    validationErrors, setValidationErrors,
    
    // Actions
    resetClientInfo,
    loadClientInfo,
    getClientInfoData,
    validateClientInfo,
    markAsSaved,
    getTimeSinceLastSave
  };
};

export default useClientInfo;

import { useState } from 'react';

/**
 * Custom hook for UI State Management
 * Manages all show/hide toggles and UI visibility states
 */
export const useUIState = () => {
  // Panel visibility states
  const [showHelp, setShowHelp] = useState(false);
  const [showDataSources, setShowDataSources] = useState(false);
  const [showChallenges, setShowChallenges] = useState(false);
  const [showSaveLoad, setShowSaveLoad] = useState(false);
  const [showTemplates, setShowTemplates] = useState(false);
  const [showShortcuts, setShowShortcuts] = useState(false);
  const [showBulkActions, setShowBulkActions] = useState(false);
  const [showBranding, setShowBranding] = useState(false);
  const [showMap, setShowMap] = useState(false);
  const [showPhotos, setShowPhotos] = useState(false);
  const [showEmail, setShowEmail] = useState(false);
  const [showCharts, setShowCharts] = useState(false);
  const [showMLS, setShowMLS] = useState(false);
  const [showAPI, setShowAPI] = useState(false);
  const [showAI, setShowAI] = useState(false);
  const [showChatGPT, setShowChatGPT] = useState(false);
  const [showAISettings, setShowAISettings] = useState(false);
  const [showEmailCRM, setShowEmailCRM] = useState(false);
  const [showEmailSettings, setShowEmailSettings] = useState(false);
  const [showContactForm, setShowContactForm] = useState(false);
  const [showTokenCreate, setShowTokenCreate] = useState(false);
  const [showMLSImport, setShowMLSImport] = useState(false);
  
  // Legal/Info panel states
  const [showLegalInfo, setShowLegalInfo] = useState(false);
  const [showContractInfo, setShowContractInfo] = useState(false);
  const [showContractEffects, setShowContractEffects] = useState(false);
  const [showContractPerformance, setShowContractPerformance] = useState(false);
  const [showSalesContracts, setShowSalesContracts] = useState(false);
  const [showMortgageTheory, setShowMortgageTheory] = useState(false);
  const [showLawBanner, setShowLawBanner] = useState(true);
  
  // Challenge completion states
  const [showChallengeComplete, setShowChallengeComplete] = useState(false);
  
  // View modes
  const [mode, setMode] = useState('learning'); // 'learning' or 'professional'
  const [libraryView, setLibraryView] = useState('list'); // 'list' or 'grid'
  
  // Search and filters
  const [searchTerm, setSearchTerm] = useState('');
  
  // Notification state
  const [notification, setNotification] = useState(null);
  
  /**
   * Close all panels
   */
  const closeAllPanels = () => {
    setShowHelp(false);
    setShowDataSources(false);
    setShowChallenges(false);
    setShowSaveLoad(false);
    setShowTemplates(false);
    setShowShortcuts(false);
    setShowBulkActions(false);
    setShowBranding(false);
    setShowMap(false);
    setShowPhotos(false);
    setShowEmail(false);
    setShowCharts(false);
    setShowMLS(false);
    setShowAPI(false);
    setShowAI(false);
    setShowChatGPT(false);
    setShowAISettings(false);
    setShowEmailCRM(false);
    setShowEmailSettings(false);
    setShowContactForm(false);
    setShowTokenCreate(false);
    setShowMLSImport(false);
    setShowLegalInfo(false);
    setShowContractInfo(false);
    setShowContractEffects(false);
    setShowContractPerformance(false);
    setShowSalesContracts(false);
    setShowMortgageTheory(false);
  };

  /**
   * Toggle specific panel
   * @param {string} panelName - Name of the panel to toggle
   */
  const togglePanel = (panelName) => {
    const setters = {
      help: setShowHelp,
      dataSources: setShowDataSources,
      challenges: setShowChallenges,
      saveLoad: setShowSaveLoad,
      templates: setShowTemplates,
      shortcuts: setShowShortcuts,
      bulkActions: setShowBulkActions,
      branding: setShowBranding,
      map: setShowMap,
      photos: setShowPhotos,
      email: setShowEmail,
      charts: setShowCharts,
      mls: setShowMLS,
      api: setShowAPI,
      ai: setShowAI,
      chatgpt: setShowChatGPT,
      aiSettings: setShowAISettings,
      emailCRM: setShowEmailCRM,
      emailSettings: setShowEmailSettings,
      contactForm: setShowContactForm,
      tokenCreate: setShowTokenCreate,
      mlsImport: setShowMLSImport
    };

    const setter = setters[panelName];
    if (setter) {
      setter(prev => !prev);
    }
  };

  /**
   * Show notification
   * @param {string} message - Notification message
   * @param {string} type - Notification type (success, error, warning, info)
   * @param {number} duration - Duration in ms
   */
  const showNotification = (message, type = 'info', duration = 3000) => {
    setNotification({ message, type });
    
    if (duration > 0) {
      setTimeout(() => {
        setNotification(null);
      }, duration);
    }
  };

  /**
   * Hide notification
   */
  const hideNotification = () => {
    setNotification(null);
  };

  return {
    // Panel States
    showHelp, setShowHelp,
    showDataSources, setShowDataSources,
    showChallenges, setShowChallenges,
    showSaveLoad, setShowSaveLoad,
    showTemplates, setShowTemplates,
    showShortcuts, setShowShortcuts,
    showBulkActions, setShowBulkActions,
    showBranding, setShowBranding,
    showMap, setShowMap,
    showPhotos, setShowPhotos,
    showEmail, setShowEmail,
    showCharts, setShowCharts,
    showMLS, setShowMLS,
    showAPI, setShowAPI,
    showAI, setShowAI,
    showChatGPT, setShowChatGPT,
    showAISettings, setShowAISettings,
    showEmailCRM, setShowEmailCRM,
    showEmailSettings, setShowEmailSettings,
    showContactForm, setShowContactForm,
    showTokenCreate, setShowTokenCreate,
    showMLSImport, setShowMLSImport,
    
    // Legal/Info States
    showLegalInfo, setShowLegalInfo,
    showContractInfo, setShowContractInfo,
    showContractEffects, setShowContractEffects,
    showContractPerformance, setShowContractPerformance,
    showSalesContracts, setShowSalesContracts,
    showMortgageTheory, setShowMortgageTheory,
    showLawBanner, setShowLawBanner,
    
    // Challenge States
    showChallengeComplete, setShowChallengeComplete,
    
    // View Modes
    mode, setMode,
    libraryView, setLibraryView,
    
    // Search
    searchTerm, setSearchTerm,
    
    // Notifications
    notification,
    showNotification,
    hideNotification,
    
    // Utilities
    closeAllPanels,
    togglePanel
  };
};

export default useUIState;

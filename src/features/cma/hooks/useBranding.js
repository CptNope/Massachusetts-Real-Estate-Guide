import { useState, useEffect } from 'react';

/**
 * Custom hook for Branding Management
 * Handles logo, company info, agent details, and color scheme
 */
export const useBranding = (showNotification, gamification) => {
  const [brandingLogo, setBrandingLogo] = useState('');
  const [brandingCompany, setBrandingCompany] = useState('');
  const [brandingPhone, setBrandingPhone] = useState('');
  const [brandingEmail, setBrandingEmail] = useState('');
  const [brandingWebsite, setBrandingWebsite] = useState('');
  const [brandingLicense, setBrandingLicense] = useState('');
  const [brandingColors, setBrandingColors] = useState({
    primary: '#4f9eff',
    secondary: '#6366f1',
    accent: '#f59e0b'
  });
  const [showBrandingPanel, setShowBrandingPanel] = useState(false);

  // Load branding from localStorage
  useEffect(() => {
    const savedBranding = localStorage.getItem('cma_branding');
    if (savedBranding) {
      try {
        const branding = JSON.parse(savedBranding);
        setBrandingLogo(branding.logo || '');
        setBrandingCompany(branding.company || '');
        setBrandingPhone(branding.phone || '');
        setBrandingEmail(branding.email || '');
        setBrandingWebsite(branding.website || '');
        setBrandingLicense(branding.license || '');
        if (branding.colors) {
          setBrandingColors(branding.colors);
        }
      } catch (e) {
        console.error('Error loading branding:', e);
      }
    }
  }, []);

  const saveBranding = () => {
    const brandingData = {
      logo: brandingLogo,
      company: brandingCompany,
      phone: brandingPhone,
      email: brandingEmail,
      website: brandingWebsite,
      license: brandingLicense,
      colors: brandingColors
    };

    localStorage.setItem('cma_branding', JSON.stringify(brandingData));
    showNotification('✅ Branding saved! +20 XP', 'success');
    
    if (gamification) {
      gamification.addXP(20, 'Branding configured');
      gamification.recordActivity('branding_configured');
    }
  };

  const updateBrandingColor = (colorKey, value) => {
    setBrandingColors(prev => ({
      ...prev,
      [colorKey]: value
    }));
  };

  const resetBranding = () => {
    if (!confirm('Reset all branding to defaults?')) return;
    
    setBrandingLogo('');
    setBrandingCompany('');
    setBrandingPhone('');
    setBrandingEmail('');
    setBrandingWebsite('');
    setBrandingLicense('');
    setBrandingColors({
      primary: '#4f9eff',
      secondary: '#6366f1',
      accent: '#f59e0b'
    });
    
    localStorage.removeItem('cma_branding');
    showNotification('Branding reset to defaults', 'info');
  };

  const exportBrandingConfig = () => {
    const brandingData = {
      logo: brandingLogo,
      company: brandingCompany,
      phone: brandingPhone,
      email: brandingEmail,
      website: brandingWebsite,
      license: brandingLicense,
      colors: brandingColors
    };

    const dataStr = JSON.stringify(brandingData, null, 2);
    const dataBlob = new Blob([dataStr], { type: 'application/json' });
    const url = URL.createObjectURL(dataBlob);
    
    const link = document.createElement('a');
    link.href = url;
    link.download = 'cma-branding-config.json';
    link.click();
    
    showNotification('📥 Branding configuration exported!', 'success');
  };

  const importBrandingConfig = (file) => {
    const reader = new FileReader();
    reader.onload = (e) => {
      try {
        const branding = JSON.parse(e.target.result);
        setBrandingLogo(branding.logo || '');
        setBrandingCompany(branding.company || '');
        setBrandingPhone(branding.phone || '');
        setBrandingEmail(branding.email || '');
        setBrandingWebsite(branding.website || '');
        setBrandingLicense(branding.license || '');
        if (branding.colors) {
          setBrandingColors(branding.colors);
        }
        
        showNotification('✅ Branding configuration imported!', 'success');
      } catch (error) {
        showNotification('⚠️ Invalid configuration file', 'error');
      }
    };
    reader.readAsText(file);
  };

  return {
    // State
    brandingLogo,
    brandingCompany,
    brandingPhone,
    brandingEmail,
    brandingWebsite,
    brandingLicense,
    brandingColors,
    showBrandingPanel,
    
    // Setters
    setBrandingLogo,
    setBrandingCompany,
    setBrandingPhone,
    setBrandingEmail,
    setBrandingWebsite,
    setBrandingLicense,
    setShowBrandingPanel,
    
    // Actions
    saveBranding,
    updateBrandingColor,
    resetBranding,
    exportBrandingConfig,
    importBrandingConfig
  };
};

export default useBranding;

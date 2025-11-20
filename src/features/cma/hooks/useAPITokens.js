import { useState, useEffect } from 'react';

/**
 * Custom hook for API Token Management
 * Handles generation, deletion, and storage of API access tokens
 */
export const useAPITokens = (showNotification, gamification) => {
  const [apiTokens, setApiTokens] = useState([]);
  const [newTokenName, setNewTokenName] = useState('');
  const [showAPIPanel, setShowAPIPanel] = useState(false);

  // Load API tokens from localStorage
  useEffect(() => {
    const savedTokens = localStorage.getItem('api_tokens');
    if (savedTokens) {
      try {
        setApiTokens(JSON.parse(savedTokens));
      } catch (e) {
        console.error('Error loading API tokens:', e);
      }
    }
  }, []);

  const generateRandomToken = () => {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let token = 'cma_';
    for (let i = 0; i < 32; i++) {
      token += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return token;
  };

  const generateAPIToken = () => {
    if (!newTokenName) {
      showNotification('⚠️ Please enter a token name', 'error');
      return;
    }

    const newToken = {
      id: Date.now().toString(),
      name: newTokenName,
      token: generateRandomToken(),
      created: new Date().toISOString(),
      lastUsed: null,
      usageCount: 0
    };

    const updatedTokens = [...apiTokens, newToken];
    setApiTokens(updatedTokens);
    localStorage.setItem('api_tokens', JSON.stringify(updatedTokens));

    setNewTokenName('');
    showNotification('✅ API token generated! +30 XP', 'success');
    
    if (gamification) {
      gamification.addXP(30, 'API token generated');
      gamification.recordActivity('api_token_generated');
    }
  };

  const deleteAPIToken = (tokenId) => {
    if (!confirm('Delete this API token? Applications using it will lose access.')) return;
    
    const updatedTokens = apiTokens.filter(t => t.id !== tokenId);
    setApiTokens(updatedTokens);
    localStorage.setItem('api_tokens', JSON.stringify(updatedTokens));
    
    showNotification('🗑️ API token deleted', 'info');
  };

  const copyTokenToClipboard = (token) => {
    navigator.clipboard.writeText(token);
    showNotification('📋 Token copied to clipboard!', 'success');
  };

  const updateTokenUsage = (tokenId) => {
    const updatedTokens = apiTokens.map(t => {
      if (t.id === tokenId) {
        return {
          ...t,
          lastUsed: new Date().toISOString(),
          usageCount: t.usageCount + 1
        };
      }
      return t;
    });
    
    setApiTokens(updatedTokens);
    localStorage.setItem('api_tokens', JSON.stringify(updatedTokens));
  };

  return {
    // State
    apiTokens,
    newTokenName,
    showAPIPanel,
    
    // Setters
    setNewTokenName,
    setShowAPIPanel,
    
    // Actions
    generateAPIToken,
    deleteAPIToken,
    copyTokenToClipboard,
    updateTokenUsage
  };
};

export default useAPITokens;

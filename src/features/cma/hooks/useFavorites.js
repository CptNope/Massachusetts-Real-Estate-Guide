import { useState, useEffect } from 'react';

/**
 * Custom hook for Favorites Management
 * Handles CMA favorites with localStorage persistence
 */
export const useFavorites = (showNotification) => {
  const [favorites, setFavorites] = useState([]);

  // Load favorites from localStorage on mount
  useEffect(() => {
    const savedFavorites = localStorage.getItem('cma_favorites');
    if (savedFavorites) {
      try {
        setFavorites(JSON.parse(savedFavorites));
      } catch (e) {
        console.error('Error loading favorites:', e);
      }
    }
  }, []);

  // Save favorites to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem('cma_favorites', JSON.stringify(favorites));
  }, [favorites]);

  /**
   * Toggle favorite status for a CMA
   * @param {string} cmaName - Name/ID of the CMA
   * @param {Object} cmaData - Optional CMA data to store
   */
  const toggleFavorite = (cmaName, cmaData = null) => {
    const isFavorited = favorites.some(fav => fav.name === cmaName || fav === cmaName);
    
    if (isFavorited) {
      // Remove from favorites
      setFavorites(prev => prev.filter(fav => 
        (typeof fav === 'string' ? fav : fav.name) !== cmaName
      ));
      showNotification('⭐ Removed from favorites', 'info');
    } else {
      // Add to favorites
      const newFavorite = cmaData ? {
        name: cmaName,
        data: cmaData,
        addedAt: new Date().toISOString()
      } : cmaName;
      
      setFavorites(prev => [...prev, newFavorite]);
      showNotification('⭐ Added to favorites!', 'success');
    }
  };

  /**
   * Check if a CMA is favorited
   * @param {string} cmaName - Name/ID of the CMA
   * @returns {boolean}
   */
  const isFavorite = (cmaName) => {
    return favorites.some(fav => 
      (typeof fav === 'string' ? fav : fav.name) === cmaName
    );
  };

  /**
   * Get all favorites
   * @returns {Array}
   */
  const getAllFavorites = () => {
    return favorites;
  };

  /**
   * Get favorite by name
   * @param {string} cmaName - Name/ID of the CMA
   * @returns {Object|string|null}
   */
  const getFavorite = (cmaName) => {
    return favorites.find(fav => 
      (typeof fav === 'string' ? fav : fav.name) === cmaName
    );
  };

  /**
   * Remove a favorite
   * @param {string} cmaName - Name/ID of the CMA
   */
  const removeFavorite = (cmaName) => {
    setFavorites(prev => prev.filter(fav => 
      (typeof fav === 'string' ? fav : fav.name) !== cmaName
    ));
    showNotification('Removed from favorites', 'info');
  };

  /**
   * Clear all favorites
   */
  const clearAllFavorites = () => {
    if (!window.confirm('Remove all favorites?')) return;
    
    setFavorites([]);
    localStorage.removeItem('cma_favorites');
    showNotification('All favorites cleared', 'info');
  };

  /**
   * Get favorites count
   * @returns {number}
   */
  const getFavoritesCount = () => {
    return favorites.length;
  };

  /**
   * Sort favorites by date added (newest first)
   * @returns {Array}
   */
  const getSortedFavorites = () => {
    return [...favorites].sort((a, b) => {
      const dateA = typeof a === 'object' ? new Date(a.addedAt) : new Date(0);
      const dateB = typeof b === 'object' ? new Date(b.addedAt) : new Date(0);
      return dateB - dateA;
    });
  };

  /**
   * Export favorites to JSON
   */
  const exportFavorites = () => {
    const dataStr = JSON.stringify(favorites, null, 2);
    const dataBlob = new Blob([dataStr], { type: 'application/json' });
    const url = URL.createObjectURL(dataBlob);
    
    const link = document.createElement('a');
    link.href = url;
    link.download = `cma-favorites-${Date.now()}.json`;
    link.click();
    
    URL.revokeObjectURL(url);
    showNotification('📥 Favorites exported!', 'success');
  };

  /**
   * Import favorites from JSON
   * @param {File} file - JSON file to import
   */
  const importFavorites = (file) => {
    if (!file) return;

    const reader = new FileReader();
    
    reader.onload = (e) => {
      try {
        const importedFavorites = JSON.parse(e.target.result);
        
        if (!Array.isArray(importedFavorites)) {
          throw new Error('Invalid format');
        }
        
        setFavorites(importedFavorites);
        showNotification('✅ Favorites imported!', 'success');
      } catch (error) {
        console.error('Import error:', error);
        showNotification('⚠️ Invalid favorites file', 'error');
      }
    };
    
    reader.onerror = () => {
      showNotification('⚠️ Error reading file', 'error');
    };
    
    reader.readAsText(file);
  };

  return {
    // State
    favorites,
    
    // Actions
    toggleFavorite,
    isFavorite,
    getAllFavorites,
    getFavorite,
    removeFavorite,
    clearAllFavorites,
    
    // Utilities
    getFavoritesCount,
    getSortedFavorites,
    exportFavorites,
    importFavorites
  };
};

export default useFavorites;

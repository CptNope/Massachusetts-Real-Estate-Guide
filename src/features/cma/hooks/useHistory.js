import { useState } from 'react';

/**
 * Custom hook for Undo/Redo History Management
 * Tracks state changes and allows navigation through history
 */
export const useHistory = (maxHistorySize = 50) => {
  const [history, setHistory] = useState([]);
  const [historyIndex, setHistoryIndex] = useState(-1);

  /**
   * Save a state change to history
   * @param {string} stateName - Name of the state being changed
   * @param {any} value - New value of the state
   */
  const saveToHistory = (stateName, value) => {
    // Remove any history after current index (for redo clearing)
    const newHistory = history.slice(0, historyIndex + 1);
    
    // Add new state
    newHistory.push({
      stateName,
      value,
      timestamp: Date.now()
    });
    
    // Keep only last N actions to prevent memory issues
    if (newHistory.length > maxHistorySize) {
      newHistory.shift();
    }
    
    setHistory(newHistory);
    setHistoryIndex(newHistory.length - 1);
  };

  /**
   * Undo last change
   * @returns {Object|null} Previous state or null if can't undo
   */
  const undo = () => {
    if (!canUndo()) {
      return null;
    }
    
    const prevIndex = historyIndex - 1;
    setHistoryIndex(prevIndex);
    
    return history[prevIndex];
  };

  /**
   * Redo previously undone change
   * @returns {Object|null} Next state or null if can't redo
   */
  const redo = () => {
    if (!canRedo()) {
      return null;
    }
    
    const nextIndex = historyIndex + 1;
    setHistoryIndex(nextIndex);
    
    return history[nextIndex];
  };

  /**
   * Check if undo is available
   * @returns {boolean}
   */
  const canUndo = () => {
    return historyIndex > 0;
  };

  /**
   * Check if redo is available
   * @returns {boolean}
   */
  const canRedo = () => {
    return historyIndex < history.length - 1;
  };

  /**
   * Get current history entry
   * @returns {Object|null}
   */
  const getCurrentState = () => {
    if (historyIndex >= 0 && historyIndex < history.length) {
      return history[historyIndex];
    }
    return null;
  };

  /**
   * Clear all history
   */
  const clearHistory = () => {
    setHistory([]);
    setHistoryIndex(-1);
  };

  /**
   * Get history statistics
   * @returns {Object}
   */
  const getHistoryStats = () => {
    return {
      totalActions: history.length,
      currentPosition: historyIndex + 1,
      canUndo: canUndo(),
      canRedo: canRedo(),
      undoAvailable: historyIndex,
      redoAvailable: history.length - historyIndex - 1
    };
  };

  /**
   * Get history summary for display
   * @param {number} count - Number of recent actions to show
   * @returns {Array}
   */
  const getRecentHistory = (count = 5) => {
    const start = Math.max(0, historyIndex - count + 1);
    const end = historyIndex + 1;
    
    return history.slice(start, end).map((entry, index) => ({
      ...entry,
      relativeIndex: start + index,
      isCurrent: start + index === historyIndex,
      timeAgo: formatTimeAgo(entry.timestamp)
    }));
  };

  /**
   * Format timestamp as relative time
   * @param {number} timestamp
   * @returns {string}
   */
  const formatTimeAgo = (timestamp) => {
    const seconds = Math.floor((Date.now() - timestamp) / 1000);
    
    if (seconds < 60) return `${seconds}s ago`;
    if (seconds < 3600) return `${Math.floor(seconds / 60)}m ago`;
    if (seconds < 86400) return `${Math.floor(seconds / 3600)}h ago`;
    return `${Math.floor(seconds / 86400)}d ago`;
  };

  /**
   * Jump to specific history index
   * @param {number} index - Target history index
   * @returns {Object|null}
   */
  const jumpToIndex = (index) => {
    if (index < 0 || index >= history.length) {
      return null;
    }
    
    setHistoryIndex(index);
    return history[index];
  };

  return {
    // State
    history,
    historyIndex,
    
    // Core Actions
    saveToHistory,
    undo,
    redo,
    
    // Query Functions
    canUndo,
    canRedo,
    getCurrentState,
    getHistoryStats,
    getRecentHistory,
    
    // Management
    clearHistory,
    jumpToIndex
  };
};

export default useHistory;

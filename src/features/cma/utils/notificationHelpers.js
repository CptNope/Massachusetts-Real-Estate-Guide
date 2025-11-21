/**
 * Notification Helper Utilities
 * Centralized notification management for CMA features
 */

/**
 * Create a notification manager with auto-dismiss
 * @param {Function} setNotification - State setter for notifications
 * @param {number} duration - Auto-dismiss duration in ms (default: 3000)
 * @returns {Function} showNotification function
 */
export function createNotificationManager(setNotification, duration = 3000) {
  return (message, type = 'info') => {
    setNotification({ message, type });
    setTimeout(() => setNotification(null), duration);
  };
}

/**
 * Standard notification messages for common CMA actions
 */
export const NOTIFICATION_MESSAGES = {
  // Success messages
  CMA_SAVED: '💾 CMA saved successfully! +10 XP',
  CMA_LOADED: '📂 CMA loaded successfully!',
  CMA_DUPLICATED: '📋 CMA duplicated!',
  CMA_EXPORTED: '📥 CMA exported successfully! +15 XP',
  MLS_CONNECTED: (provider) => `✅ Connected to ${provider} MLS! +25 XP`,
  MLS_IMPORT: (address, compNum) => `✅ Imported ${address} to Comp #${compNum}! +15 XP`,
  MLS_SEARCH: (count) => `Found ${count} comparables! +10 XP`,
  BRANDING_SAVED: '🎨 Branding settings saved! +10 XP',
  EMAIL_SENT: '📧 CMA report sent! +20 XP',
  TEMPLATE_APPLIED: (name) => `✅ Applied ${name} template! +5 XP`,
  BULK_ACTION: '🗑️ All comparables cleared. +5 XP',
  ADJUSTMENTS_COPIED: '📋 Adjustment values copied to clipboard',
  FAVORITE_ADDED: '⭐ Added to favorites! +3 XP',
  FAVORITE_REMOVED: '☆ Removed from favorites',
  AI_PREDICTION: '🤖 AI prediction generated! +15 XP',
  OPENAI_KEY_SAVED: '🔑 OpenAI API key saved!',
  EMAIL_CONFIG_SAVED: '✅ Email provider configured! +10 XP',
  API_TOKEN_CREATED: (name) => `🔑 API token "${name}" created! +10 XP`,
  CONTACT_ADDED: (name) => `✅ Contact ${name} added! +5 XP`,
  CAMPAIGN_SENT: (count) => `📨 Campaign sent to ${count} contacts! +25 XP`,
  
  // Warning messages
  NO_COMPS: '⚠️ Add comparables first to generate predictions',
  NO_COMPS_REPORT: '⚠️ Add comparables first',
  NO_TOKEN_NAME: '⚠️ Please enter a token name',
  NO_OPENAI_KEY: '⚠️ Please enter your OpenAI API key',
  NO_EMAIL_PROVIDER: '⚠️ Please select an email provider',
  NO_MLS_CREDENTIALS: '⚠️ Please fill in all MLS credentials',
  FILE_TOO_LARGE: '⚠️ File too large (max 2MB)',
  NO_EMAIL_RECIPIENT: '⚠️ Please enter recipient email',
  NO_EMAIL_SUBJECT: '⚠️ Please enter email subject',
  INVALID_EMAIL: '⚠️ Invalid email address',
  NO_CONTACTS_SELECTED: '⚠️ Please select at least one contact',
  
  // Error messages
  CMA_NOT_FOUND: '❌ CMA not found',
  LOAD_ERROR: '❌ Error loading CMA',
  SAVE_ERROR: '❌ Error saving CMA',
  EXPORT_ERROR: '❌ Error exporting CMA',
  MLS_ERROR: '❌ MLS connection failed',
  EMAIL_ERROR: '❌ Error sending email',
  API_ERROR: '❌ API request failed',
  
  // Info messages
  REPORT_GENERATING: '⏳ Generating report...',
  AI_THINKING: '🤖 AI is analyzing your data...',
  LOADING: '⏳ Loading...',
  PROCESSING: '⏳ Processing...'
};

/**
 * Validation helpers for common CMA inputs
 */
export const validators = {
  /**
   * Validate email address format
   */
  isValidEmail: (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  },

  /**
   * Validate required field is not empty
   */
  isNotEmpty: (value) => {
    return value && value.trim().length > 0;
  },

  /**
   * Validate file size
   */
  isValidFileSize: (file, maxSizeMB = 2) => {
    return file && file.size <= maxSizeMB * 1000000;
  },

  /**
   * Validate number in range
   */
  isInRange: (value, min, max) => {
    const num = parseFloat(value);
    return !isNaN(num) && num >= min && num <= max;
  },

  /**
   * Validate positive number
   */
  isPositiveNumber: (value) => {
    const num = parseFloat(value);
    return !isNaN(num) && num > 0;
  }
};

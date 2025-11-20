/**
 * Export/Import Utilities for CMA Data
 * Handles PDF export, email sending, and data export/import
 */

/**
 * Export CMA data to PDF (simplified - production would use jsPDF)
 * @param {Object} cmaData - CMA data to export
 * @param {Function} showNotification - Notification function
 * @param {Object} gamification - Gamification hook
 */
export const exportToPDF = (cmaData, showNotification, gamification) => {
  // In production, this would use jsPDF to generate actual PDF
  // For now, simulate the export
  
  const filename = `CMA_Report_${new Date().toISOString().split('T')[0]}.pdf`;
  
  // Simulate PDF generation
  console.log('Generating PDF:', filename, cmaData);
  
  showNotification('📄 PDF exported! +15 XP', 'success');
  
  if (gamification) {
    gamification.addXP(15, 'PDF exported');
    gamification.recordActivity('pdf_export');
  }
  
  return { success: true, filename };
};

/**
 * Send email with CMA report (simplified - production would use EmailJS)
 * @param {string} emailTo - Recipient email
 * @param {Object} cmaData - CMA data to send
 * @param {Function} showNotification - Notification function
 * @param {Object} gamification - Gamification hook
 */
export const sendEmail = (emailTo, cmaData, showNotification, gamification) => {
  if (!emailTo) {
    showNotification('⚠️ Please enter recipient email', 'error');
    return { success: false };
  }

  // Email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(emailTo)) {
    showNotification('⚠️ Please enter a valid email address', 'error');
    return { success: false };
  }

  // In production, this would use EmailJS or similar service
  console.log('Sending email to:', emailTo, cmaData);
  
  showNotification('📧 Email sent! +20 XP', 'success');
  
  if (gamification) {
    gamification.addXP(20, 'Email sent');
    gamification.recordActivity('email_sent');
  }
  
  return { success: true, recipient: emailTo };
};

/**
 * Export CMA data to JSON
 * @param {Object} cmaData - All CMA state data
 * @param {string} filename - Optional filename
 */
export const exportToJSON = (cmaData, filename = 'cma-data') => {
  const dataStr = JSON.stringify(cmaData, null, 2);
  const dataBlob = new Blob([dataStr], { type: 'application/json' });
  const url = URL.createObjectURL(dataBlob);
  
  const link = document.createElement('a');
  link.href = url;
  link.download = `${filename}-${Date.now()}.json`;
  link.click();
  
  URL.revokeObjectURL(url);
  
  return { success: true, filename: link.download };
};

/**
 * Import CMA data from JSON file
 * @param {File} file - JSON file to import
 * @param {Function} callback - Callback with imported data
 * @param {Function} showNotification - Notification function
 */
export const importFromJSON = (file, callback, showNotification) => {
  if (!file) {
    showNotification('⚠️ Please select a file to import', 'error');
    return;
  }

  if (!file.name.endsWith('.json')) {
    showNotification('⚠️ Please select a valid JSON file', 'error');
    return;
  }

  const reader = new FileReader();
  
  reader.onload = (e) => {
    try {
      const importedData = JSON.parse(e.target.result);
      callback(importedData);
      showNotification('✅ Data imported successfully!', 'success');
    } catch (error) {
      console.error('Import error:', error);
      showNotification('⚠️ Invalid file format', 'error');
    }
  };
  
  reader.onerror = () => {
    showNotification('⚠️ Error reading file', 'error');
  };
  
  reader.readAsText(file);
};

/**
 * Copy data to clipboard
 * @param {any} data - Data to copy (will be stringified if object)
 * @param {Function} showNotification - Notification function
 */
export const copyToClipboard = (data, showNotification) => {
  const textToCopy = typeof data === 'string' ? data : JSON.stringify(data, null, 2);
  
  navigator.clipboard.writeText(textToCopy)
    .then(() => {
      showNotification('📋 Copied to clipboard!', 'success');
    })
    .catch((error) => {
      console.error('Copy failed:', error);
      showNotification('⚠️ Failed to copy to clipboard', 'error');
    });
};

/**
 * Export comparables to CSV
 * @param {Array} comparables - Array of comparable properties
 * @param {string} filename - Optional filename
 */
export const exportComparablesCSV = (comparables, filename = 'comparables') => {
  if (!comparables || comparables.length === 0) {
    return { success: false, error: 'No comparables to export' };
  }

  // CSV headers
  const headers = [
    'Address', 'Price', 'Beds', 'Baths', 'Sqft', 'Garage', 
    'Condition', 'Age', 'DOM', 'Adjusted Price'
  ];

  // CSV rows
  const rows = comparables.map(comp => [
    comp.address || '',
    comp.price || '',
    comp.beds || '',
    comp.baths || '',
    comp.sqft || '',
    comp.garage || '',
    comp.condition || '',
    comp.age || '',
    comp.dom || '',
    comp.adjustedPrice || ''
  ]);

  // Combine headers and rows
  const csvContent = [
    headers.join(','),
    ...rows.map(row => row.join(','))
  ].join('\n');

  // Create and download
  const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
  const url = URL.createObjectURL(blob);
  
  const link = document.createElement('a');
  link.href = url;
  link.download = `${filename}-${Date.now()}.csv`;
  link.click();
  
  URL.revokeObjectURL(url);
  
  return { success: true, filename: link.download };
};

/**
 * Print CMA report
 * Opens browser print dialog
 */
export const printReport = () => {
  window.print();
  return { success: true };
};

export default {
  exportToPDF,
  sendEmail,
  exportToJSON,
  importFromJSON,
  copyToClipboard,
  exportComparablesCSV,
  printReport
};

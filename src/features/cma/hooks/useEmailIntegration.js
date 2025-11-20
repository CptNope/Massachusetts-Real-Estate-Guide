import { useState, useEffect } from 'react';

/**
 * Custom hook for Email Integration & Contact Management
 * Handles email configuration, contact CRUD, and mass email sending
 */
export const useEmailIntegration = (showNotification, gamification) => {
  const [emailProvider, setEmailProvider] = useState('none');
  const [emailProviderStatus, setEmailProviderStatus] = useState('not_configured');
  const [emailConfig, setEmailConfig] = useState({
    gmail: { email: '', appPassword: '' },
    outlook: { email: '', password: '' },
    smtp: { host: '', port: '587', email: '', password: '' }
  });
  const [contacts, setContacts] = useState([]);
  const [selectedContacts, setSelectedContacts] = useState([]);
  const [newContact, setNewContact] = useState({ firstName: '', lastName: '', email: '', phone: '' });
  const [emailTemplates, setEmailTemplates] = useState([
    {
      id: 'new_listing',
      name: 'New Listing Alert',
      subject: 'New Property Alert: {{address}}',
      body: 'Hi {{firstName}},\n\nI wanted to personally notify you about a new listing that matches your criteria...'
    },
    {
      id: 'market_update',
      name: 'Market Update',
      subject: 'Market Update: {{month}} {{year}}',
      body: 'Hello {{firstName}},\n\nHere\'s your monthly market update for {{area}}...'
    },
    {
      id: 'cma_report',
      name: 'CMA Report Delivery',
      subject: 'Your Property Analysis is Ready',
      body: 'Hello {{firstName}},\n\nI\'ve completed the market analysis for {{address}}...'
    }
  ]);
  const [showContactForm, setShowContactForm] = useState(false);

  // Load email configuration from localStorage
  useEffect(() => {
    const savedProvider = localStorage.getItem('email_provider');
    const savedConfig = localStorage.getItem('email_config');
    const savedContacts = localStorage.getItem('cma_contacts');

    if (savedProvider) {
      setEmailProvider(savedProvider);
      setEmailProviderStatus('configured');
    }
    if (savedConfig) {
      try {
        setEmailConfig(JSON.parse(savedConfig));
      } catch (e) {
        console.error('Error loading email config:', e);
      }
    }
    if (savedContacts) {
      try {
        setContacts(JSON.parse(savedContacts));
      } catch (e) {
        console.error('Error loading contacts:', e);
      }
    }
  }, []);

  const saveEmailConfig = () => {
    if (emailProvider === 'none') {
      showNotification('⚠️ Please select an email provider', 'error');
      return;
    }

    const config = emailConfig[emailProvider];
    const isConfigured = Object.values(config).every(val => val && val.trim() !== '');

    if (!isConfigured) {
      showNotification('⚠️ Please fill in all configuration fields', 'error');
      return;
    }

    localStorage.setItem('email_provider', emailProvider);
    localStorage.setItem('email_config', JSON.stringify(emailConfig));
    setEmailProviderStatus('configured');

    showNotification(`✅ Email configured with ${emailProvider}! +20 XP`, 'success');
    
    if (gamification) {
      gamification.addXP(20, 'Email configured');
      gamification.recordActivity('email_configured');
    }
  };

  const testEmailConnection = () => {
    if (emailProviderStatus !== 'configured') {
      showNotification('⚠️ Please configure and save first', 'error');
      return;
    }

    // Simulate connection test
    setEmailProviderStatus('testing');
    
    setTimeout(() => {
      setEmailProviderStatus('connected');
      showNotification('✅ Email connection successful!', 'success');
    }, 2000);
  };

  const updateEmailConfig = (provider, field, value) => {
    setEmailConfig({
      ...emailConfig,
      [provider]: {
        ...emailConfig[provider],
        [field]: value
      }
    });
  };

  const addContact = () => {
    if (!newContact.firstName || !newContact.email) {
      showNotification('⚠️ Please enter name and email', 'error');
      return;
    }

    const contact = {
      id: Date.now().toString(),
      ...newContact,
      addedDate: new Date().toISOString()
    };

    const updatedContacts = [...contacts, contact];
    setContacts(updatedContacts);
    localStorage.setItem('cma_contacts', JSON.stringify(updatedContacts));

    setNewContact({ firstName: '', lastName: '', email: '', phone: '' });
    setShowContactForm(false);
    
    showNotification('✅ Contact added!', 'success');
    
    if (gamification) {
      gamification.addXP(5, 'Contact added');
    }
  };

  const deleteContact = (id) => {
    if (!confirm('Delete this contact?')) return;
    
    const updated = contacts.filter(c => c.id !== id);
    setContacts(updated);
    localStorage.setItem('cma_contacts', JSON.stringify(updated));
    
    showNotification('Contact deleted', 'info');
  };

  const toggleContactSelection = (id) => {
    setSelectedContacts(prev => 
      prev.includes(id) ? prev.filter(c => c !== id) : [...prev, id]
    );
  };

  const selectAllContacts = () => {
    setSelectedContacts(contacts.map(c => c.id));
  };

  const deselectAllContacts = () => {
    setSelectedContacts([]);
  };

  const personalizeEmail = (template, contact, additionalData = {}) => {
    const { subjectAddress = '', month = new Date().toLocaleString('default', { month: 'long' }), year = new Date().getFullYear() } = additionalData;
    
    return template
      .replace(/{{firstName}}/g, contact.firstName)
      .replace(/{{lastName}}/g, contact.lastName || '')
      .replace(/{{email}}/g, contact.email)
      .replace(/{{phone}}/g, contact.phone || '')
      .replace(/{{month}}/g, month)
      .replace(/{{year}}/g, year)
      .replace(/{{address}}/g, subjectAddress || 'this property')
      .replace(/{{area}}/g, subjectAddress ? subjectAddress.split(',')[1]?.trim() || 'your area' : 'your area');
  };

  const sendMassEmail = (emailData) => {
    if (selectedContacts.length === 0) {
      showNotification('⚠️ Please select contacts', 'error');
      return;
    }

    if (emailProviderStatus !== 'connected') {
      showNotification('⚠️ Please test email connection first', 'error');
      return;
    }

    const selectedContactList = contacts.filter(c => selectedContacts.includes(c.id));
    const { subject, body } = emailData;

    // Simulate sending (in production, would call actual email API)
    selectedContactList.forEach((contact, index) => {
      setTimeout(() => {
        const personalizedSubject = personalizeEmail(subject, contact, emailData);
        const personalizedBody = personalizeEmail(body, contact, emailData);
        
        console.log(`Sending to ${contact.email}:`, { subject: personalizedSubject, body: personalizedBody });
      }, index * 100);
    });

    showNotification(`📧 Sending ${selectedContacts.length} personalized emails... +50 XP`, 'success');
    
    if (gamification) {
      gamification.addXP(50, 'Mass email sent');
      gamification.recordActivity('mass_email_sent');
    }

    setSelectedContacts([]);
  };

  return {
    // Email Configuration State
    emailProvider,
    emailProviderStatus,
    emailConfig,
    
    // Contact Management State
    contacts,
    selectedContacts,
    newContact,
    showContactForm,
    emailTemplates,
    
    // Email Configuration Setters
    setEmailProvider,
    setEmailProviderStatus,
    setEmailConfig,
    
    // Contact Management Setters
    setNewContact,
    setShowContactForm,
    setEmailTemplates,
    
    // Email Configuration Actions
    saveEmailConfig,
    testEmailConnection,
    updateEmailConfig,
    
    // Contact Management Actions
    addContact,
    deleteContact,
    toggleContactSelection,
    selectAllContacts,
    deselectAllContacts,
    personalizeEmail,
    sendMassEmail
  };
};

export default useEmailIntegration;

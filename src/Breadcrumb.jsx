import React from 'react';

export default function Breadcrumb({ activeSection, sections, onNavigate }) {
  // Define section categories for breadcrumb hierarchy
  const getSectionCategory = (sectionId) => {
    const categories = {
      // Contract & Legal Framework
      'law-changes': 'Contract & Legal Framework',
      'otp': 'Contract & Legal Framework',
      'ps-agreement': 'Contract & Legal Framework',
      'home-inspection': 'Contract & Legal Framework',
      
      // Commission & Negotiation
      'buyer-commission': 'Commission & Negotiation',
      'seller-commission': 'Commission & Negotiation',
      'investor-commission': 'Commission & Negotiation',
      'negotiation': 'Commission & Negotiation',
      
      // Agency & Representation
      'agency': 'Agency & Representation',
      'dual-agency': 'Agency & Representation',
      'buyer-broker': 'Agency & Representation',
      'agency-history': 'Agency & Representation',
      'old-car': 'Agency & Representation',
      
      // Broker-Agent Relationship
      'broker-agent': 'Broker-Agent Relationship',
      'ic-status': 'Broker-Agent Relationship',
      'splits': 'Broker-Agent Relationship',
      'caps': 'Broker-Agent Relationship',
      
      // Professional Development
      'licensing': 'Professional Development',
      'professional-dev': 'Professional Development',
      'insurance': 'Professional Development',
      'legal-protections': 'Professional Development',
      
      // Compliance & Ethics
      'consumer-protection': 'Compliance & Ethics',
      'wisp': 'Compliance & Ethics',
      'two-contract': 'Compliance & Ethics',
      'attorney': 'Compliance & Ethics',
      'digital-compliance': 'Compliance & Ethics',
      'nar-ethics': 'Compliance & Ethics',
      'antitrust': 'Compliance & Ethics',
      
      // Fair Housing & Discrimination
      'fair-housing': 'Fair Housing & Discrimination',
      
      // Property Valuation & Analysis
      'valuation': 'Property Valuation & Analysis',
      
      // Financing & Closing
      'financing': 'Financing & Closing',
      'title-closing': 'Financing & Closing',
      'transaction': 'Financing & Closing',
      
      // Tax & Financial
      'tax': 'Tax & Financial',
      'agent-taxes': 'Tax & Financial',
      
      // Business Development
      'referrals': 'Business Development',
      'multi-state': 'Business Development',
      'associations': 'Business Development',
      'open-house': 'Business Development',
      
      // Practice & Strategy
      'strategy': 'Practice & Strategy',
      'investor': 'Practice & Strategy',
      'competitive': 'Practice & Strategy',
    };
    
    return categories[sectionId] || 'Guide';
  };

  const category = getSectionCategory(activeSection.id);
  const isHome = !activeSection;

  return (
    <nav className="breadcrumb" aria-label="Breadcrumb">
      <ol className="breadcrumb-list">
        <li className="breadcrumb-item">
          <button
            onClick={() => onNavigate(sections[0].id)}
            className="breadcrumb-link"
            aria-label="Go to home"
          >
            🏠 Home
          </button>
        </li>
        
        {!isHome && (
          <>
            <li className="breadcrumb-separator" aria-hidden="true">›</li>
            <li className="breadcrumb-item">
              <span className="breadcrumb-category">{category}</span>
            </li>
            
            <li className="breadcrumb-separator" aria-hidden="true">›</li>
            <li className="breadcrumb-item breadcrumb-current">
              <span className="breadcrumb-current-page" aria-current="page">
                {activeSection.icon} {activeSection.title}
              </span>
            </li>
          </>
        )}
      </ol>
    </nav>
  );
}

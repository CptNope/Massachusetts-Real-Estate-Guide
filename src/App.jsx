import React, { useState, useMemo } from 'react';
import { sections } from './content.jsx';

export default function App() {
  const [activeId, setActiveId] = useState(sections[0].id);
  const [searchQuery, setSearchQuery] = useState('');
  const activeSection = sections.find((s) => s.id === activeId);

  // Filter sections based on search query
  const filteredSections = useMemo(() => {
    if (!searchQuery.trim()) return sections;
    
    const query = searchQuery.toLowerCase();
    return sections.filter(section => {
      // Search in title
      if (section.title.toLowerCase().includes(query)) return true;
      
      // Search in subtitle
      if (section.subtitle && section.subtitle.toLowerCase().includes(query)) return true;
      
      // Search in body text (convert JSX to string)
      const bodyText = getTextFromJSX(section.body);
      if (bodyText.toLowerCase().includes(query)) return true;
      
      return false;
    });
  }, [searchQuery]);

  // Helper function to extract text from JSX
  const getTextFromJSX = (jsx) => {
    if (typeof jsx === 'string') return jsx;
    if (typeof jsx === 'number') return String(jsx);
    if (!jsx) return '';
    
    if (Array.isArray(jsx)) {
      return jsx.map(getTextFromJSX).join(' ');
    }
    
    if (jsx.props && jsx.props.children) {
      return getTextFromJSX(jsx.props.children);
    }
    
    return '';
  };

  return (
    <div className="app-root">
      <header className="app-header">
        <h1>Massachusetts Real Estate Negotiation & Brokerage Guide (2025)</h1>
        <p className="app-subtitle">
          Contracts · Law Changes · Commissions · Broker Relationships · Exam Prep · Investor Strategy
        </p>
        <div className="search-container">
          <input
            type="text"
            className="search-input"
            placeholder="🔍 Search topics, keywords, or terms..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            aria-label="Search guide content"
          />
          {searchQuery && (
            <button
              className="search-clear"
              onClick={() => setSearchQuery('')}
              aria-label="Clear search"
            >
              ✕
            </button>
          )}
        </div>
      </header>

      <div className="app-layout">
        <nav className="sidebar">
          <h2 className="sidebar-title">
            Sections
            {searchQuery && (
              <span className="search-results-count">
                ({filteredSections.length} {filteredSections.length === 1 ? 'result' : 'results'})
              </span>
            )}
          </h2>
          <ul className="nav-list">
            {filteredSections.map((section) => (
              <li key={section.id}>
                <button
                  className={section.id === activeId ? 'nav-button nav-button-active' : 'nav-button'}
                  onClick={() => setActiveId(section.id)}
                >
                  {section.icon && <span className="nav-icon">{section.icon}</span>}
                  {section.title}
                </button>
              </li>
            ))}
          </ul>
        </nav>

        <main className="content">
          <article className="card">
            <h2 className="content-title">{activeSection.title}</h2>
            {activeSection.subtitle && (
              <p className="content-subtitle">{activeSection.subtitle}</p>
            )}
            <div className="content-body">{activeSection.body}</div>
          </article>
        </main>
      </div>

      <footer className="app-footer">
        <p>
          Study / reference tool – not legal advice. For specific transactions, consult a
          Massachusetts real-estate attorney, your broker, or instructor.
        </p>
      </footer>
    </div>
  );
}

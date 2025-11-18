import React, { useState, useMemo, useEffect } from 'react';
import { sections } from './content.jsx';
import FlashcardMode from './FlashcardMode';
import QuizMode from './QuizMode';
import PersonalDashboard from './PersonalDashboard';
import ScenarioMode from './ScenarioMode';
import CalculatorMode from './CalculatorMode';
import { useLocalStorage } from './useLocalStorage';

export default function App() {
  const [activeId, setActiveId] = useLocalStorage('lastActiveSection', sections[0].id);
  const [searchQuery, setSearchQuery] = useState('');
  const [studyMode, setStudyMode] = useState(null); // 'flashcards', 'quiz', 'dashboard', or null
  const [masteredSections, setMasteredSections] = useLocalStorage('masteredSections', []);
  const [reviewSections, setReviewSections] = useLocalStorage('reviewSections', []);
  const [theme, setTheme] = useState(() => {
    // Load theme from localStorage or default to 'dark'
    return localStorage.getItem('theme') || 'dark';
  });

  // Apply theme to document and save to localStorage
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prevTheme => prevTheme === 'dark' ? 'light' : 'dark');
  };

  const toggleMastered = (sectionId) => {
    if (masteredSections.includes(sectionId)) {
      setMasteredSections(masteredSections.filter(id => id !== sectionId));
    } else {
      setMasteredSections([...masteredSections, sectionId]);
    }
  };

  const toggleReview = (sectionId) => {
    if (reviewSections.includes(sectionId)) {
      setReviewSections(reviewSections.filter(id => id !== sectionId));
    } else {
      setReviewSections([...reviewSections, sectionId]);
    }
  };

  const clearAllProgress = () => {
    if (confirm('This will reset all your progress, notes, and study data. Are you sure?')) {
      setMasteredSections([]);
      setReviewSections([]);
      localStorage.removeItem('userNotes');
      localStorage.removeItem('masteredFlashcards');
      localStorage.removeItem('quizHistory');
      alert('All progress has been reset!');
    }
  };

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
        <div className="header-top">
          <div>
            <h1>Massachusetts Real Estate Negotiation & Brokerage Guide (2025)</h1>
            <p className="app-subtitle">
              Contracts · Law Changes · Commissions · Broker Relationships · Exam Prep · Investor Strategy
            </p>
          </div>
          <div className="header-actions">
            <button 
              className="theme-toggle" 
              onClick={toggleTheme}
              aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} theme`}
              title={`Switch to ${theme === 'dark' ? 'light' : 'dark'} theme`}
            >
              {theme === 'dark' ? '☀️' : '🌙'}
            </button>
          </div>
        </div>
        
        <div className="study-mode-toggle">
          <button 
            className={`mode-btn ${studyMode === null ? 'active' : ''}`}
            onClick={() => setStudyMode(null)}
          >
            📖 Guide
          </button>
          <button 
            className={`mode-btn ${studyMode === 'flashcards' ? 'active' : ''}`}
            onClick={() => setStudyMode('flashcards')}
          >
            📚 Flashcards
          </button>
          <button 
            className={`mode-btn ${studyMode === 'quiz' ? 'active' : ''}`}
            onClick={() => setStudyMode('quiz')}
          >
            🎯 Quiz
          </button>
          <button 
            className={`mode-btn ${studyMode === 'dashboard' ? 'active' : ''}`}
            onClick={() => setStudyMode('dashboard')}
          >
            📊 Dashboard
          </button>
          <button 
            className={`mode-btn ${studyMode === 'scenarios' ? 'active' : ''}`}
            onClick={() => setStudyMode('scenarios')}
          >
            🎭 Scenarios
          </button>
          <button 
            className={`mode-btn ${studyMode === 'calculators' ? 'active' : ''}`}
            onClick={() => setStudyMode('calculators')}
          >
            🧮 Calculators
          </button>
        </div>
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
        {studyMode === null && (
          <>
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
          </>
        )}

        {studyMode === 'flashcards' && (
          <main className="content content-full">
            <FlashcardMode />
          </main>
        )}

        {studyMode === 'quiz' && (
          <main className="content content-full">
            <QuizMode />
          </main>
        )}

        {studyMode === 'dashboard' && (
          <main className="content content-full">
            <PersonalDashboard
              masteredSections={masteredSections}
              reviewSections={reviewSections}
              onToggleMastered={toggleMastered}
              onToggleReview={toggleReview}
              onClearAll={clearAllProgress}
            />
          </main>
        )}

        {studyMode === 'scenarios' && (
          <main className="content content-full">
            <ScenarioMode />
          </main>
        )}

        {studyMode === 'calculators' && (
          <main className="content content-full">
            <CalculatorMode />
          </main>
        )}
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

import React, { useState, useMemo, useEffect } from 'react';
import { sections } from './content.jsx';
import FlashcardMode from './FlashcardMode';
import QuizMode from './QuizMode';
import PersonalDashboard from './PersonalDashboard';
import ScenarioMode from './ScenarioMode';
import CalculatorMode from './CalculatorMode';
import HelpModal from './HelpModal';
import GamificationPanel from './GamificationPanel';
import TableOfContents from './TableOfContents';
import Breadcrumb from './Breadcrumb';
import { useLocalStorage } from './useLocalStorage';
import { useGamification } from './useGamification';

export default function App() {
  const [activeId, setActiveId] = useLocalStorage('lastActiveSection', sections[0].id);
  const [searchQuery, setSearchQuery] = useState('');
  const [studyMode, setStudyMode] = useState(null); // 'flashcards', 'quiz', 'dashboard', or null
  const [masteredSections, setMasteredSections] = useLocalStorage('masteredSections', []);
  const [reviewSections, setReviewSections] = useLocalStorage('reviewSections', []);
  const [showHelp, setShowHelp] = useState(false);
  const [showGamification, setShowGamification] = useState(true);
  const gamification = useGamification();
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

  // Keyboard shortcuts
  useEffect(() => {
    const handleKeyPress = (e) => {
      // Ignore if user is typing in input/textarea
      if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') return;

      // Alt + number keys for mode switching
      if (e.altKey) {
        switch(e.key) {
          case '1':
            e.preventDefault();
            setStudyMode(null);
            break;
          case '2':
            e.preventDefault();
            setStudyMode('flashcards');
            break;
          case '3':
            e.preventDefault();
            setStudyMode('quiz');
            break;
          case '4':
            e.preventDefault();
            setStudyMode('dashboard');
            break;
          case '5':
            e.preventDefault();
            setStudyMode('scenarios');
            break;
          case '6':
            e.preventDefault();
            setStudyMode('calculators');
            break;
          case 't':
            e.preventDefault();
            toggleTheme();
            break;
          case '/':
            e.preventDefault();
            document.querySelector('.search-input')?.focus();
            break;
          default:
            break;
        }
      }

      // ? key for help
      if (e.key === '?' && !e.altKey && !e.ctrlKey && !e.metaKey) {
        e.preventDefault();
        setShowHelp(true);
      }

      // Escape to close help
      if (e.key === 'Escape' && showHelp) {
        setShowHelp(false);
      }

      // Arrow keys for section navigation (only in guide mode)
      if (!studyMode && !e.altKey && !e.ctrlKey && !e.metaKey) {
        if (e.key === 'ArrowDown') {
          e.preventDefault();
          const currentIndex = sections.findIndex(s => s.id === activeId);
          if (currentIndex < sections.length - 1) {
            setActiveId(sections[currentIndex + 1].id);
          }
        } else if (e.key === 'ArrowUp') {
          e.preventDefault();
          const currentIndex = sections.findIndex(s => s.id === activeId);
          if (currentIndex > 0) {
            setActiveId(sections[currentIndex - 1].id);
          }
        }
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [studyMode, activeId, sections]);

  const exportProgress = () => {
    const data = {
      version: '1.0',
      exportDate: new Date().toISOString(),
      theme,
      lastActiveSection: activeId,
      masteredSections,
      reviewSections,
      notes: localStorage.getItem('userNotes'),
      masteredFlashcards: localStorage.getItem('masteredFlashcards'),
      quizHistory: localStorage.getItem('quizHistory'),
      completedScenarios: localStorage.getItem('completedScenarios')
    };

    const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `ma-real-estate-progress-${new Date().toISOString().split('T')[0]}.json`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  const importProgress = (event) => {
    const file = event.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (e) => {
      try {
        const data = JSON.parse(e.target.result);
        
        if (confirm('This will overwrite your current progress. Are you sure?')) {
          setTheme(data.theme || 'dark');
          setActiveId(data.lastActiveSection || sections[0].id);
          setMasteredSections(data.masteredSections || []);
          setReviewSections(data.reviewSections || []);
          
          if (data.notes) localStorage.setItem('userNotes', data.notes);
          if (data.masteredFlashcards) localStorage.setItem('masteredFlashcards', data.masteredFlashcards);
          if (data.quizHistory) localStorage.setItem('quizHistory', data.quizHistory);
          if (data.completedScenarios) localStorage.setItem('completedScenarios', data.completedScenarios);
          
          alert('Progress imported successfully!');
          window.location.reload();
        }
      } catch (error) {
        alert('Error importing progress. Please check the file format.');
        console.error('Import error:', error);
      }
    };
    reader.readAsText(file);
  };

  const toggleMastered = (sectionId) => {
    if (masteredSections.includes(sectionId)) {
      setMasteredSections(masteredSections.filter(id => id !== sectionId));
    } else {
      const newMastered = [...masteredSections, sectionId];
      setMasteredSections(newMastered);
      // Record mastery in gamification
      gamification.recordActivity('MASTER_SECTION', { totalMastered: newMastered.length });
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
              className="icon-btn" 
              onClick={() => setShowHelp(true)}
              aria-label="Keyboard shortcuts"
              title="Keyboard shortcuts (Press ?)"
            >
              ⌨️
            </button>
            <button 
              className="icon-btn" 
              onClick={exportProgress}
              aria-label="Export progress"
              title="Export your progress"
            >
              ⬇️
            </button>
            <label className="icon-btn" title="Import progress">
              ⬆️
              <input 
                type="file" 
                accept=".json"
                onChange={importProgress}
                style={{ display: 'none' }}
              />
            </label>
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
              <Breadcrumb 
                activeSection={activeSection} 
                sections={sections}
                onNavigate={setActiveId}
              />
              <article className="card">
                <h2 className="content-title">{activeSection.title}</h2>
                {activeSection.subtitle && (
                  <p className="content-subtitle">{activeSection.subtitle}</p>
                )}
                <TableOfContents content={activeSection.body} key={activeSection.id} />
                <div className="content-body">{activeSection.body}</div>
              </article>
            </main>
          </>
        )}

        {studyMode === 'flashcards' && (
          <main className="content content-full">
            <FlashcardMode gamification={gamification} />
          </main>
        )}

        {studyMode === 'quiz' && (
          <main className="content content-full">
            <QuizMode gamification={gamification} />
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
              gamification={gamification}
            />
          </main>
        )}

        {studyMode === 'scenarios' && (
          <main className="content content-full">
            <ScenarioMode gamification={gamification} />
          </main>
        )}

        {studyMode === 'calculators' && (
          <main className="content content-full">
            <CalculatorMode gamification={gamification} />
          </main>
        )}

        {/* Gamification Panel - Floating on Right Side */}
        {showGamification && (
          <aside className="gamification-sidebar">
            <button 
              className="gamification-toggle"
              onClick={() => setShowGamification(false)}
              title="Hide Progress"
            >
              ×
            </button>
            <GamificationPanel gamification={gamification} />
          </aside>
        )}

        {/* Show Gamification Button when hidden */}
        {!showGamification && (
          <button 
            className="show-gamification-btn"
            onClick={() => setShowGamification(true)}
            title="Show Progress & Achievements"
          >
            🏆
          </button>
        )}
      </div>

      <footer className="app-footer">
        <p>
          Study / reference tool – not legal advice. For specific transactions, consult a
          Massachusetts real-estate attorney, your broker, or instructor.
        </p>
      </footer>

      <HelpModal isOpen={showHelp} onClose={() => setShowHelp(false)} />
    </div>
  );
}

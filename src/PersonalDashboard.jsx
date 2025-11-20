import React, { useState } from 'react';
import { sections as importedSections } from './content.jsx';
import { useLocalStorage } from './useLocalStorage';
import PerformanceAnalytics from './PerformanceAnalytics';

// Sort sections by the number in their title (1-33)
const sections = [...importedSections].sort((a, b) => {
  const numA = parseInt(a.title.match(/^(\d+)\./)?.[1] || '999');
  const numB = parseInt(b.title.match(/^(\d+)\./)?.[1] || '999');
  return numA - numB;
});

export default function PersonalDashboard({ 
  masteredSections, 
  reviewSections, 
  onToggleMastered, 
  onToggleReview,
  onClearAll,
  gamification
}) {
  const [notes, setNotes] = useLocalStorage('userNotes', {});
  const [activeNoteSection, setActiveNoteSection] = useState(null);
  const [activeTab, setActiveTab] = useState('overview'); // 'overview' or 'analytics'

  const totalSections = sections.length;
  const masteredCount = masteredSections.length;
  const reviewCount = reviewSections.length;
  const progressPercent = Math.round((masteredCount / totalSections) * 100);

  const handleSaveNote = (sectionId, noteText) => {
    setNotes({
      ...notes,
      [sectionId]: noteText
    });
  };

  const handleDeleteNote = (sectionId) => {
    const newNotes = { ...notes };
    delete newNotes[sectionId];
    setNotes(newNotes);
    if (activeNoteSection === sectionId) {
      setActiveNoteSection(null);
    }
  };

  return (
    <div className="study-mode-container">
      <div className="study-mode-header">
        <h2>📊 Personal Dashboard</h2>
        <p>Track your learning progress and take notes</p>
      </div>

      {/* Tab Switcher */}
      <div className="dashboard-tabs">
        <button
          className={`dashboard-tab ${activeTab === 'overview' ? 'active' : ''}`}
          onClick={() => setActiveTab('overview')}
        >
          📚 Overview
        </button>
        <button
          className={`dashboard-tab ${activeTab === 'analytics' ? 'active' : ''}`}
          onClick={() => setActiveTab('analytics')}
        >
          📊 Analytics
        </button>
      </div>

      {activeTab === 'analytics' && gamification && (
        <PerformanceAnalytics gamification={gamification} />
      )}

      {activeTab === 'overview' && (
        <>
      {/* Progress Stats */}
      <div className="dashboard-stats">
        <div className="stat-card">
          <div className="stat-icon">📚</div>
          <div className="stat-info">
            <div className="stat-number">{totalSections}</div>
            <div className="stat-label">Total Sections</div>
          </div>
        </div>

        <div className="stat-card accent">
          <div className="stat-icon">✓</div>
          <div className="stat-info">
            <div className="stat-number">{masteredCount}</div>
            <div className="stat-label">Mastered</div>
          </div>
        </div>

        <div className="stat-card review">
          <div className="stat-icon">🔖</div>
          <div className="stat-info">
            <div className="stat-number">{reviewCount}</div>
            <div className="stat-label">Review Later</div>
          </div>
        </div>

        <div className="stat-card progress">
          <div className="stat-icon">📈</div>
          <div className="stat-info">
            <div className="stat-number">{progressPercent}%</div>
            <div className="stat-label">Progress</div>
          </div>
        </div>
      </div>

      {/* Progress Bar */}
      <div className="progress-section">
        <h3>Overall Progress</h3>
        <div className="progress-bar-container large">
          <div 
            className="progress-bar-fill" 
            style={{ width: `${progressPercent}%` }}
          />
        </div>
        <p className="progress-description">
          You've mastered {masteredCount} out of {totalSections} sections
        </p>
      </div>

      {/* Section Management */}
      <div className="section-management">
        <h3>Section Status</h3>
        
        <div className="section-list">
          {sections.map(section => {
            const isMastered = masteredSections.includes(section.id);
            const isReview = reviewSections.includes(section.id);
            const hasNote = notes[section.id];

            return (
              <div key={section.id} className="section-item">
                <div className="section-item-header">
                  <div className="section-item-title">
                    <span className="section-icon">{section.icon}</span>
                    <span>{section.title}</span>
                  </div>
                  <div className="section-item-actions">
                    <button
                      className={`status-btn ${isMastered ? 'active' : ''}`}
                      onClick={() => onToggleMastered(section.id)}
                      title="Mark as mastered"
                    >
                      ✓ {isMastered ? 'Mastered' : 'Master'}
                    </button>
                    <button
                      className={`status-btn review ${isReview ? 'active' : ''}`}
                      onClick={() => onToggleReview(section.id)}
                      title="Mark for review"
                    >
                      🔖 {isReview ? 'In Review' : 'Review'}
                    </button>
                    <button
                      className={`status-btn note ${hasNote ? 'active' : ''}`}
                      onClick={() => setActiveNoteSection(
                        activeNoteSection === section.id ? null : section.id
                      )}
                      title="Add/view notes"
                    >
                      📝 Note
                    </button>
                  </div>
                </div>

                {activeNoteSection === section.id && (
                  <div className="note-editor">
                    <textarea
                      className="note-textarea"
                      placeholder="Add your notes here..."
                      value={notes[section.id] || ''}
                      onChange={(e) => handleSaveNote(section.id, e.target.value)}
                      rows={4}
                    />
                    {notes[section.id] && (
                      <button
                        className="note-delete-btn"
                        onClick={() => handleDeleteNote(section.id)}
                      >
                        Delete Note
                      </button>
                    )}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* Clear Progress Button */}
      <div className="dashboard-actions">
        <button
          className="btn-danger"
          onClick={onClearAll}
        >
          Reset All Progress
        </button>
      </div>
        </>
      )}
    </div>
  );
}

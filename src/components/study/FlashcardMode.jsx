import React, { useState, useEffect } from 'react';
import { flashcards } from './studyData';
import Flashcard from './Flashcard';

export default function FlashcardMode() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [masteredCards, setMasteredCards] = useState(() => {
    const saved = localStorage.getItem('masteredFlashcards');
    return saved ? JSON.parse(saved) : [];
  });
  const [filterCategory, setFilterCategory] = useState('all');

  // Save mastered cards to localStorage
  useEffect(() => {
    localStorage.setItem('masteredFlashcards', JSON.stringify(masteredCards));
  }, [masteredCards]);

  // Filter cards
  const filteredCards = flashcards.filter(card => {
    if (filterCategory === 'all') return true;
    if (filterCategory === 'mastered') return masteredCards.includes(card.id);
    if (filterCategory === 'unmastered') return !masteredCards.includes(card.id);
    return card.category === filterCategory;
  });

  const currentCard = filteredCards[currentIndex];
  
  // Get unique categories
  const categories = ['all', 'unmastered', 'mastered', ...new Set(flashcards.map(c => c.category))];

  const handleNext = () => {
    if (currentIndex < filteredCards.length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else {
      setCurrentIndex(0); // Loop back to start
    }
  };

  const handlePrevious = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    } else {
      setCurrentIndex(filteredCards.length - 1); // Loop to end
    }
  };

  const handleMastered = (cardId) => {
    if (masteredCards.includes(cardId)) {
      setMasteredCards(masteredCards.filter(id => id !== cardId));
    } else {
      setMasteredCards([...masteredCards, cardId]);
    }
  };

  const resetProgress = () => {
    if (confirm('Reset all flashcard progress? This cannot be undone.')) {
      setMasteredCards([]);
      setCurrentIndex(0);
    }
  };

  if (filteredCards.length === 0) {
    return (
      <div className="study-mode-container">
        <div className="study-mode-header">
          <h2>📚 Flashcard Mode</h2>
          <p>No cards match the current filter. Try selecting a different category.</p>
          <button onClick={() => setFilterCategory('all')} className="btn-primary">
            Show All Cards
          </button>
        </div>
      </div>
    );
  }

  const progress = masteredCards.length;
  const total = flashcards.length;
  const progressPercent = Math.round((progress / total) * 100);

  return (
    <div className="study-mode-container">
      <div className="study-mode-header">
        <h2>📚 Flashcard Mode</h2>
        <p>Review key concepts for the MA Real Estate exam</p>
      </div>

      <div className="flashcard-stats">
        <div className="stat-item">
          <span className="stat-label">Progress:</span>
          <span className="stat-value">{progress} / {total} mastered ({progressPercent}%)</span>
        </div>
        <div className="stat-item">
          <span className="stat-label">Current Card:</span>
          <span className="stat-value">{currentIndex + 1} / {filteredCards.length}</span>
        </div>
      </div>

      <div className="flashcard-filters">
        <label htmlFor="category-filter">Filter by:</label>
        <select 
          id="category-filter"
          value={filterCategory} 
          onChange={(e) => {
            setFilterCategory(e.target.value);
            setCurrentIndex(0);
          }}
          className="category-select"
        >
          {categories.map(cat => (
            <option key={cat} value={cat}>
              {cat === 'all' ? 'All Cards' : 
               cat === 'mastered' ? 'Mastered Only' :
               cat === 'unmastered' ? 'Not Mastered' :
               cat}
            </option>
          ))}
        </select>
      </div>

      <Flashcard 
        card={currentCard} 
        onMastered={handleMastered}
      />

      <div className="flashcard-navigation">
        <button onClick={handlePrevious} className="nav-btn">
          ← Previous
        </button>
        <button onClick={resetProgress} className="reset-btn">
          Reset Progress
        </button>
        <button onClick={handleNext} className="nav-btn">
          Next →
        </button>
      </div>

      <div className="flashcard-tips">
        <h4>Study Tips:</h4>
        <ul>
          <li>Review cards multiple times for better retention</li>
          <li>Focus on "Not Mastered" cards before the exam</li>
          <li>Click the card to flip between question and answer</li>
          <li>Use keyboard: ← → to navigate, Space to flip</li>
        </ul>
      </div>
    </div>
  );
}

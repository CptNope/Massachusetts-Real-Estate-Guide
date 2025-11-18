import React, { useState } from 'react';

export default function Flashcard({ card, onMastered, showMasteredButton = true }) {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div className="flashcard-container">
      <div className={`flashcard ${isFlipped ? 'flipped' : ''}`} onClick={handleFlip}>
        <div className="flashcard-front">
          <div className="flashcard-category">{card.category}</div>
          <div className="flashcard-content">
            <h3>Question:</h3>
            <p>{card.question}</p>
          </div>
          <div className="flashcard-hint">Click to reveal answer</div>
        </div>
        <div className="flashcard-back">
          <div className="flashcard-category">{card.category}</div>
          <div className="flashcard-content">
            <h3>Answer:</h3>
            <p>{card.answer}</p>
          </div>
          <div className="flashcard-hint">Click to flip back</div>
        </div>
      </div>
      {showMasteredButton && (
        <button 
          className="flashcard-mastered-btn"
          onClick={(e) => {
            e.stopPropagation();
            onMastered(card.id);
          }}
        >
          ✓ Mark as Mastered
        </button>
      )}
    </div>
  );
}

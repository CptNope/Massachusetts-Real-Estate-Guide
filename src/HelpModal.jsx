import React from 'react';

export default function HelpModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <h2>⌨️ Keyboard Shortcuts</h2>
          <button className="modal-close" onClick={onClose}>✕</button>
        </div>
        
        <div className="modal-body">
          <section className="shortcut-section">
            <h3>Navigation</h3>
            <div className="shortcut-list">
              <div className="shortcut-item">
                <kbd>Alt</kbd> + <kbd>1</kbd>
                <span>Guide Mode</span>
              </div>
              <div className="shortcut-item">
                <kbd>Alt</kbd> + <kbd>2</kbd>
                <span>Flashcards</span>
              </div>
              <div className="shortcut-item">
                <kbd>Alt</kbd> + <kbd>3</kbd>
                <span>Quiz</span>
              </div>
              <div className="shortcut-item">
                <kbd>Alt</kbd> + <kbd>4</kbd>
                <span>Dashboard</span>
              </div>
              <div className="shortcut-item">
                <kbd>Alt</kbd> + <kbd>5</kbd>
                <span>Scenarios</span>
              </div>
              <div className="shortcut-item">
                <kbd>Alt</kbd> + <kbd>6</kbd>
                <span>Calculators</span>
              </div>
            </div>
          </section>

          <section className="shortcut-section">
            <h3>Guide Mode</h3>
            <div className="shortcut-list">
              <div className="shortcut-item">
                <kbd>↑</kbd>
                <span>Previous Section</span>
              </div>
              <div className="shortcut-item">
                <kbd>↓</kbd>
                <span>Next Section</span>
              </div>
            </div>
          </section>

          <section className="shortcut-section">
            <h3>General</h3>
            <div className="shortcut-list">
              <div className="shortcut-item">
                <kbd>Alt</kbd> + <kbd>T</kbd>
                <span>Toggle Theme</span>
              </div>
              <div className="shortcut-item">
                <kbd>Alt</kbd> + <kbd>/</kbd>
                <span>Focus Search</span>
              </div>
              <div className="shortcut-item">
                <kbd>?</kbd>
                <span>Show This Help</span>
              </div>
            </div>
          </section>
        </div>

        <div className="modal-footer">
          <p className="modal-hint">💡 Shortcuts work when not typing in input fields</p>
        </div>
      </div>
    </div>
  );
}

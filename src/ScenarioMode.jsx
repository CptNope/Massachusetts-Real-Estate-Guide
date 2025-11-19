import React, { useState } from 'react';
import { scenarios } from './scenarioData';
import { useLocalStorage } from './useLocalStorage';

export default function ScenarioMode() {
  const [selectedScenario, setSelectedScenario] = useState(null);
  const [currentNode, setCurrentNode] = useState('start');
  const [history, setHistory] = useState([]);
  const [completedScenarios, setCompletedScenarios] = useLocalStorage('completedScenarios', []);
  const [difficultyFilter, setDifficultyFilter] = useState('all');

  const startScenario = (scenario) => {
    setSelectedScenario(scenario);
    setCurrentNode('start');
    setHistory([]);
  };

  const makeChoice = (choice) => {
    const newHistory = [...history, {
      node: currentNode,
      choice: choice.text,
      nodeText: selectedScenario.nodes[currentNode].text
    }];
    setHistory(newHistory);
    setCurrentNode(choice.nextNode);
  };

  const resetScenario = () => {
    setSelectedScenario(null);
    setCurrentNode('start');
    setHistory([]);
  };

  const completeScenario = (outcome) => {
    const completion = {
      scenarioId: selectedScenario.id,
      outcome,
      date: new Date().toISOString(),
      choices: history
    };

    const existing = completedScenarios.filter(c => c.scenarioId !== selectedScenario.id);
    setCompletedScenarios([completion, ...existing]);
  };

  const getDifficultyColor = (difficulty) => {
    if (difficulty === 'easy') return '#10b981';
    if (difficulty === 'medium') return '#f59e0b';
    return '#ef4444';
  };

  const getCategoryIcon = (category) => {
    if (category === 'buyer') return '🏠';
    if (category === 'seller') return '💰';
    return '📈';
  };
  
  const getDifficultyBadge = (difficulty) => {
    const badges = {
      easy: { icon: '⭐', label: 'Easy', class: 'easy' },
      medium: { icon: '⭐⭐', label: 'Medium', class: 'medium' },
      hard: { icon: '⭐⭐⭐', label: 'Hard', class: 'hard' }
    };
    return badges[difficulty] || badges.medium;
  };
  
  // Filter scenarios by difficulty
  const filteredScenarios = difficultyFilter === 'all' 
    ? scenarios 
    : scenarios.filter(s => s.difficulty === difficultyFilter);

  // Scenario Selection Screen
  if (!selectedScenario) {
    return (
      <div className="study-mode-container">
        <div className="study-mode-header">
          <h2>🎭 Interactive Scenarios</h2>
          <p>Practice real-world decision-making with branching scenarios</p>
        </div>

        {completedScenarios.length > 0 && (
          <div className="scenario-stats">
            <div className="stat-card">
              <div className="stat-icon">✓</div>
              <div className="stat-info">
                <div className="stat-number">{completedScenarios.length}</div>
                <div className="stat-label">Completed</div>
              </div>
            </div>
            <div className="stat-card accent">
              <div className="stat-icon">🎯</div>
              <div className="stat-info">
                <div className="stat-number">
                  {completedScenarios.filter(c => c.outcome === 'positive').length}
                </div>
                <div className="stat-label">Successes</div>
              </div>
            </div>
          </div>
        )}
        
        <div className="difficulty-filter">
          <button 
            className={`filter-btn ${difficultyFilter === 'all' ? 'active' : ''}`}
            onClick={() => setDifficultyFilter('all')}
          >
            All Scenarios ({scenarios.length})
          </button>
          <button 
            className={`filter-btn ${difficultyFilter === 'easy' ? 'active' : ''}`}
            onClick={() => setDifficultyFilter('easy')}
          >
            ⭐ Easy ({scenarios.filter(s => s.difficulty === 'easy').length})
          </button>
          <button 
            className={`filter-btn ${difficultyFilter === 'medium' ? 'active' : ''}`}
            onClick={() => setDifficultyFilter('medium')}
          >
            ⭐⭐ Medium ({scenarios.filter(s => s.difficulty === 'medium').length})
          </button>
          <button 
            className={`filter-btn ${difficultyFilter === 'hard' ? 'active' : ''}`}
            onClick={() => setDifficultyFilter('hard')}
          >
            ⭐⭐⭐ Hard ({scenarios.filter(s => s.difficulty === 'hard').length})
          </button>
        </div>

        <div className="scenario-grid">
          {filteredScenarios.map(scenario => {
            const isCompleted = completedScenarios.some(c => c.scenarioId === scenario.id);
            const lastCompletion = completedScenarios.find(c => c.scenarioId === scenario.id);

            return (
              <div key={scenario.id} className="scenario-card">
                <div className="scenario-header">
                  <span className="scenario-category-icon">
                    {getCategoryIcon(scenario.category)}
                  </span>
                  <span className={`scenario-difficulty-badge ${getDifficultyBadge(scenario.difficulty).class}`}>
                    {getDifficultyBadge(scenario.difficulty).icon} {getDifficultyBadge(scenario.difficulty).label}
                  </span>
                </div>
                <h3>{scenario.title}</h3>
                <p className="scenario-description">{scenario.description}</p>
                
                {isCompleted && lastCompletion && (
                  <div className={`scenario-badge ${lastCompletion.outcome}`}>
                    {lastCompletion.outcome === 'positive' ? '✓ Completed Successfully' :
                     lastCompletion.outcome === 'negative' ? '✗ Try Again' :
                     '→ Completed'}
                  </div>
                )}

                <button
                  className="btn-primary"
                  onClick={() => startScenario(scenario)}
                >
                  {isCompleted ? 'Play Again' : 'Start Scenario'}
                </button>
              </div>
            );
          })}
        </div>
      </div>
    );
  }

  // Active Scenario Screen
  const node = selectedScenario.nodes[currentNode];

  // Ending Screen
  if (node.isEnding) {
    if (!completedScenarios.some(c => 
      c.scenarioId === selectedScenario.id && 
      c.date === new Date().toISOString().split('T')[0]
    )) {
      completeScenario(node.outcome);
    }

    return (
      <div className="study-mode-container">
        <div className={`scenario-ending ${node.outcome}`}>
          <div className="ending-header">
            <h2>
              {node.outcome === 'positive' ? '🎉 Success!' :
               node.outcome === 'negative' ? '📉 Learning Opportunity' :
               '✓ Scenario Complete'}
            </h2>
          </div>

          <div className="ending-result">
            <h3>What Happened:</h3>
            <p>{node.text}</p>
          </div>

          <div className="ending-feedback">
            <h3>Expert Analysis:</h3>
            <p>{node.feedback}</p>
          </div>

          <div className="ending-recommendations">
            <h3>Key Takeaways:</h3>
            <ul>
              {node.recommendations.map((rec, index) => (
                <li key={index}>{rec}</li>
              ))}
            </ul>
          </div>

          <div className="scenario-path">
            <h3>Your Decision Path:</h3>
            <div className="path-list">
              {history.map((item, index) => (
                <div key={index} className="path-item">
                  <div className="path-number">{index + 1}</div>
                  <div className="path-content">
                    <div className="path-choice">→ {item.choice}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="ending-actions">
            <button className="btn-primary" onClick={resetScenario}>
              Try Another Scenario
            </button>
            <button
              className="btn-secondary"
              onClick={() => {
                setCurrentNode('start');
                setHistory([]);
              }}
            >
              Restart This Scenario
            </button>
          </div>
        </div>
      </div>
    );
  }

  // Active Decision Point
  return (
    <div className="study-mode-container">
      <div className="scenario-active">
        <div className="scenario-breadcrumb">
          <button className="back-btn" onClick={resetScenario}>
            ← Back to Scenarios
          </button>
          <span className="scenario-progress">
            Step {history.length + 1}
          </span>
        </div>

        <div className="scenario-context">
          <h2>{selectedScenario.title}</h2>
          <div className="scenario-tags">
            <span className="tag">{getCategoryIcon(selectedScenario.category)} {selectedScenario.category}</span>
            <span className="tag" style={{ color: getDifficultyColor(selectedScenario.difficulty) }}>
              {selectedScenario.difficulty}
            </span>
          </div>
        </div>

        <div className="scenario-situation">
          <h3>Situation:</h3>
          <p>{node.text}</p>
        </div>

        <div className="scenario-choices">
          <h3>What do you do?</h3>
          <div className="choice-grid">
            {node.choices.map((choice, index) => (
              <button
                key={index}
                className="choice-button"
                onClick={() => makeChoice(choice)}
              >
                <span className="choice-letter">{String.fromCharCode(65 + index)}</span>
                <span className="choice-text">{choice.text}</span>
              </button>
            ))}
          </div>
        </div>

        {history.length > 0 && (
          <div className="scenario-breadcrumb-trail">
            <p className="trail-label">Previous choices:</p>
            {history.map((item, index) => (
              <span key={index} className="trail-item">
                {item.choice}
                {index < history.length - 1 && ' → '}
              </span>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

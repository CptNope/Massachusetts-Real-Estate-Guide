import React, { useState, useEffect } from 'react';

export default function PracticeExamMode({ gamification }) {
  const [quizQuestions, setQuizQuestions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [examStarted, setExamStarted] = useState(false);
  const [examComplete, setExamComplete] = useState(false);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [examQuestions, setExamQuestions] = useState([]);
  const [timeRemaining, setTimeRemaining] = useState(10800); // 3 hours in seconds
  const [examHistory, setExamHistory] = useState(() => {
    const saved = localStorage.getItem('examHistory');
    return saved ? JSON.parse(saved) : [];
  });

  // Save exam history
  useEffect(() => {
    if (examHistory.length > 0) {
      localStorage.setItem('examHistory', JSON.stringify(examHistory));
    }
  }, [examHistory]);

  // Timer effect
  useEffect(() => {
    if (!examStarted || examComplete) return;

    const timer = setInterval(() => {
      setTimeRemaining(prev => {
        if (prev <= 1) {
          handleTimeUp();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [examStarted, examComplete]);

  const startExam = () => {
    // Randomly select 100 questions from all available questions
    const shuffled = [...quizQuestions].sort(() => Math.random() - 0.5);
    const selected = shuffled.slice(0, Math.min(100, quizQuestions.length));
    
    setExamQuestions(selected);
    setSelectedAnswers({});
    setCurrentQuestionIndex(0);
    setTimeRemaining(10800); // Reset to 3 hours
    setExamStarted(true);
    setExamComplete(false);
  };

  const handleTimeUp = () => {
    if (!examComplete) {
      finishExam();
    }
  };

  const selectAnswer = (questionId, answerIndex) => {
    setSelectedAnswers({
      ...selectedAnswers,
      [questionId]: answerIndex
    });
  };

  const goToQuestion = (index) => {
    setCurrentQuestionIndex(index);
  };

  const finishExam = () => {
    // Calculate results
    let correct = 0;
    const categoryScores = {};

    examQuestions.forEach((question, index) => {
      const answer = selectedAnswers[question.id];
      const isCorrect = answer === question.correctIndex;
      
      if (isCorrect) correct++;

      // Track by category
      if (!categoryScores[question.category]) {
        categoryScores[question.category] = { correct: 0, total: 0 };
      }
      categoryScores[question.category].total++;
      if (isCorrect) categoryScores[question.category].correct++;
    });

    const result = {
      date: new Date().toISOString(),
      score: correct,
      total: examQuestions.length,
      percentage: Math.round((correct / examQuestions.length) * 100),
      timeUsed: 10800 - timeRemaining,
      categoryScores
    };

    setExamHistory([result, ...examHistory.slice(0, 4)]); // Keep last 5 exams
    setExamComplete(true);

    // Record in gamification
    if (gamification) {
      gamification.recordActivity('COMPLETE_EXAM', { 
        passed: result.percentage >= 70,
        score: result.percentage 
      });
    }
  };

  const formatTime = (seconds) => {
    const hours = Math.floor(seconds / 3600);
    const mins = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
    return `${hours}:${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const getTimeColor = () => {
    if (timeRemaining > 7200) return '#10b981'; // Green (>2 hours)
    if (timeRemaining > 3600) return '#f59e0b'; // Yellow (>1 hour)
    return '#ef4444'; // Red (<1 hour)
  };

  const getAnsweredCount = () => {
    return Object.keys(selectedAnswers).length;
  };

  const isQuestionAnswered = (questionId) => {
    return selectedAnswers.hasOwnProperty(questionId);
  };

  // Show loading state while data is being loaded
  if (loading) {
    return (
      <div className="study-mode-container">
        <div className="study-mode-header">
          <h2>📝 Practice Exam Mode</h2>
          <p>Loading exam questions...</p>
        </div>
      </div>
    );
  }

  // Welcome screen
  if (!examStarted) {
    return (
      <div className="study-mode-container">
        <div className="study-mode-header">
          <h2>📝 Practice Exam Mode</h2>
          <p>Full-length simulated Massachusetts real estate exam</p>
        </div>

        <div className="exam-welcome">
          <div className="exam-info-card">
            <h3>Exam Information</h3>
            <div className="exam-details">
              <div className="exam-detail-item">
                <span className="detail-icon">📊</span>
                <div>
                  <strong>Questions:</strong> 100 random questions
                </div>
              </div>
              <div className="exam-detail-item">
                <span className="detail-icon">⏱️</span>
                <div>
                  <strong>Time Limit:</strong> 3 hours (180 minutes)
                </div>
              </div>
              <div className="exam-detail-item">
                <span className="detail-icon">✅</span>
                <div>
                  <strong>Passing Score:</strong> 70% (70 correct answers)
                </div>
              </div>
              <div className="exam-detail-item">
                <span className="detail-icon">📚</span>
                <div>
                  <strong>Topics:</strong> All MA real estate topics
                </div>
              </div>
              <div className="exam-detail-item">
                <span className="detail-icon">🔄</span>
                <div>
                  <strong>Navigation:</strong> Jump to any question, review before submitting
                </div>
              </div>
            </div>
          </div>

          <div className="exam-tips">
            <h3>Exam Tips</h3>
            <ul>
              <li>Set aside 3 hours of uninterrupted time</li>
              <li>Find a quiet place to take the exam</li>
              <li>Read each question carefully</li>
              <li>Answer all questions - no penalty for wrong answers</li>
              <li>Flag difficult questions and come back to them</li>
              <li>Review all answers before submitting</li>
              <li>Simulate real exam conditions for best practice</li>
            </ul>
          </div>

          {examHistory.length > 0 && (
            <div className="exam-history-preview">
              <h3>Your Recent Exams</h3>
              <div className="history-list">
                {examHistory.map((exam, index) => (
                  <div key={index} className="history-item">
                    <div className="history-date">
                      {new Date(exam.date).toLocaleDateString()}
                    </div>
                    <div className="history-score">
                      <span className={exam.percentage >= 70 ? 'pass' : 'fail'}>
                        {exam.score}/{exam.total} ({exam.percentage}%)
                      </span>
                      <span className="time-used">
                        ⏱️ {formatTime(exam.timeUsed)}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          <button onClick={startExam} className="btn-primary btn-large">
            🚀 Start Practice Exam
          </button>
        </div>
      </div>
    );
  }

  // Results screen
  if (examComplete) {
    const result = examHistory[0];
    const passed = result.percentage >= 70;

    return (
      <div className="study-mode-container">
        <div className="exam-results">
          <h2>{passed ? '🎉 Congratulations!' : '📚 Keep Studying!'}</h2>
          
          <div className={`exam-result-card ${passed ? 'pass' : 'fail'}`}>
            <div className="result-main">
              <div className="result-score-big">
                {result.percentage}%
              </div>
              <div className="result-status">
                {passed ? 'PASSED' : 'NOT PASSED'}
              </div>
              <div className="result-details">
                {result.score} out of {result.total} correct
              </div>
              <div className="result-time">
                Completed in {formatTime(result.timeUsed)}
              </div>
            </div>
          </div>

          {passed ? (
            <div className="result-message success">
              <p><strong>Excellent work!</strong> You scored {result.percentage}% and would pass the Massachusetts real estate exam.</p>
              <p>You're well-prepared for the actual exam. Keep reviewing any weak areas and you'll do great!</p>
            </div>
          ) : (
            <div className="result-message warning">
              <p><strong>Not quite there yet.</strong> You need 70% to pass, and you scored {result.percentage}%.</p>
              <p>Review the topic breakdown below to see where to focus your study efforts.</p>
            </div>
          )}

          <div className="category-breakdown">
            <h3>Performance by Topic</h3>
            <div className="category-scores">
              {Object.entries(result.categoryScores).map(([category, scores]) => {
                const percent = Math.round((scores.correct / scores.total) * 100);
                return (
                  <div key={category} className="category-score-item">
                    <div className="category-name">{category}</div>
                    <div className="category-bar-container">
                      <div 
                        className={`category-bar ${percent >= 70 ? 'good' : 'needs-work'}`}
                        style={{ width: `${percent}%` }}
                      />
                    </div>
                    <div className="category-percent">
                      {scores.correct}/{scores.total} ({percent}%)
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="exam-actions">
            <button onClick={() => {
              setExamStarted(false);
              setExamComplete(false);
            }} className="btn-primary">
              Take Another Practice Exam
            </button>
          </div>
        </div>
      </div>
    );
  }

  // Active exam
  const currentQuestion = examQuestions[currentQuestionIndex];
  const answeredCount = getAnsweredCount();
  const progress = (answeredCount / examQuestions.length) * 100;

  return (
    <div className="study-mode-container">
      <div className="exam-header">
        <div className="exam-progress-info">
          <div className="exam-timer" style={{ color: getTimeColor() }}>
            ⏱️ {formatTime(timeRemaining)}
          </div>
          <div className="exam-progress-text">
            Question {currentQuestionIndex + 1} of {examQuestions.length}
          </div>
          <div className="exam-answered">
            Answered: {answeredCount}/{examQuestions.length}
          </div>
        </div>
        <div className="exam-progress-bar">
          <div className="progress-bar-fill" style={{ width: `${progress}%` }} />
        </div>
      </div>

      <div className="exam-content">
        <div className="exam-question-panel">
          <div className="question-number">Question {currentQuestionIndex + 1}</div>
          <div className="question-category">{currentQuestion.category}</div>
          <h3 className="question-text">{currentQuestion.question}</h3>

          <div className="exam-options">
            {currentQuestion.options.map((option, index) => (
              <button
                key={index}
                className={`exam-option ${selectedAnswers[currentQuestion.id] === index ? 'selected' : ''}`}
                onClick={() => selectAnswer(currentQuestion.id, index)}
              >
                <span className="option-letter">{String.fromCharCode(65 + index)}</span>
                <span className="option-text">{option}</span>
                {selectedAnswers[currentQuestion.id] === index && (
                  <span className="selected-icon">✓</span>
                )}
              </button>
            ))}
          </div>

          <div className="exam-navigation">
            <button
              onClick={() => goToQuestion(currentQuestionIndex - 1)}
              disabled={currentQuestionIndex === 0}
              className="btn-secondary"
            >
              ← Previous
            </button>
            <button
              onClick={() => goToQuestion(currentQuestionIndex + 1)}
              disabled={currentQuestionIndex === examQuestions.length - 1}
              className="btn-secondary"
            >
              Next →
            </button>
          </div>
        </div>

        <div className="exam-question-grid">
          <h4>Question Navigator</h4>
          <div className="question-grid">
            {examQuestions.map((q, index) => (
              <button
                key={q.id}
                className={`question-grid-btn ${
                  index === currentQuestionIndex ? 'current' : ''
                } ${isQuestionAnswered(q.id) ? 'answered' : ''}`}
                onClick={() => goToQuestion(index)}
              >
                {index + 1}
              </button>
            ))}
          </div>
          <div className="grid-legend">
            <div className="legend-item">
              <span className="legend-box current"></span> Current
            </div>
            <div className="legend-item">
              <span className="legend-box answered"></span> Answered
            </div>
            <div className="legend-item">
              <span className="legend-box"></span> Unanswered
            </div>
          </div>
          <button onClick={finishExam} className="btn-primary btn-large">
            Submit Exam
          </button>
        </div>
      </div>
    </div>
  );
}

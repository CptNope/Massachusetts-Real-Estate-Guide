import React, { useState, useEffect } from 'react';
import { quizQuestions } from './studyData';

export default function QuizMode({ gamification }) {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [showExplanation, setShowExplanation] = useState(false);
  const [score, setScore] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [quizComplete, setQuizComplete] = useState(false);
  const [quizHistory, setQuizHistory] = useState(() => {
    const saved = localStorage.getItem('quizHistory');
    return saved ? JSON.parse(saved) : [];
  });
  
  // Timed mode state
  const [isTimedMode, setIsTimedMode] = useState(() => {
    const saved = localStorage.getItem('quizTimedMode');
    return saved === 'true';
  });
  const [timeLimit] = useState(120); // 120 seconds (2 minutes) per question
  const [timeRemaining, setTimeRemaining] = useState(timeLimit);
  const [questionStartTime, setQuestionStartTime] = useState(Date.now());
  const [questionTimes, setQuestionTimes] = useState([]);

  const currentQuestion = quizQuestions[currentQuestionIndex];
  const isLastQuestion = currentQuestionIndex === quizQuestions.length - 1;
  
  // Save timed mode preference
  useEffect(() => {
    localStorage.setItem('quizTimedMode', isTimedMode.toString());
  }, [isTimedMode]);
  
  // Timer effect for timed mode
  useEffect(() => {
    if (!isTimedMode || selectedAnswer !== null || quizComplete) return;
    
    const timer = setInterval(() => {
      setTimeRemaining(prev => {
        if (prev <= 1) {
          // Time's up! Auto-submit as wrong answer
          handleTimeUp();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
    
    return () => clearInterval(timer);
  }, [isTimedMode, currentQuestionIndex, selectedAnswer, quizComplete]);
  
  // Reset timer when question changes
  useEffect(() => {
    setTimeRemaining(timeLimit);
    setQuestionStartTime(Date.now());
  }, [currentQuestionIndex]);
  
  const handleTimeUp = () => {
    if (selectedAnswer !== null) return; // Already answered
    
    // Record time taken (full time limit)
    const timeTaken = Math.floor((Date.now() - questionStartTime) / 1000);
    setQuestionTimes([...questionTimes, timeTaken]);
    
    // Mark as wrong (no answer selected)
    const newAnswer = {
      questionId: currentQuestion.id,
      selectedIndex: -1, // -1 means time ran out
      correct: false,
      timeTaken
    };
    
    setAnswers([...answers, newAnswer]);
    setSelectedAnswer(-1); // Use -1 to indicate timeout
    setShowExplanation(true);
  };

  // Save quiz history
  useEffect(() => {
    if (quizHistory.length > 0) {
      localStorage.setItem('quizHistory', JSON.stringify(quizHistory));
    }
  }, [quizHistory]);

  const handleAnswerSelect = (index) => {
    if (selectedAnswer === null) {
      // Record time taken
      const timeTaken = isTimedMode ? Math.floor((Date.now() - questionStartTime) / 1000) : null;
      if (isTimedMode) {
        setQuestionTimes([...questionTimes, timeTaken]);
      }
      
      setSelectedAnswer(index);
      setShowExplanation(true);
      
      const isCorrect = index === currentQuestion.correctIndex;
      const newAnswer = {
        questionId: currentQuestion.id,
        selectedIndex: index,
        correct: isCorrect,
        timeTaken: isTimedMode ? timeTaken : null
      };
      
      setAnswers([...answers, newAnswer]);
      if (isCorrect) {
        setScore(score + 1);
      }
    }
  };

  const handleNext = () => {
    if (isLastQuestion) {
      completeQuiz();
    } else {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setSelectedAnswer(null);
      setShowExplanation(false);
      setTimeRemaining(timeLimit);
    }
  };

  const completeQuiz = () => {
    const finalScoreValue = score + (selectedAnswer === currentQuestion.correctIndex ? 1 : 0);
    const avgTime = isTimedMode && questionTimes.length > 0
      ? Math.round(questionTimes.reduce((a, b) => a + b, 0) / questionTimes.length)
      : null;
    
    const finalScore = {
      date: new Date().toISOString(),
      score: finalScoreValue,
      total: quizQuestions.length,
      percentage: Math.round((finalScoreValue / quizQuestions.length) * 100),
      timed: isTimedMode,
      avgTimePerQuestion: avgTime
    };
    
    setQuizHistory([finalScore, ...quizHistory.slice(0, 9)]); // Keep last 10 scores
    setQuizComplete(true);

    // Record quiz completion in gamification system
    if (gamification) {
      const isPerfect = finalScore.percentage === 100;
      gamification.recordActivity('COMPLETE_QUIZ', { isPerfect });
    }
  };

  const restartQuiz = () => {
    setCurrentQuestionIndex(0);
    setSelectedAnswer(null);
    setShowExplanation(false);
    setScore(0);
    setAnswers([]);
    setQuizComplete(false);
    setTimeRemaining(timeLimit);
    setQuestionTimes([]);
    setQuestionStartTime(Date.now());
  };
  
  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };
  
  const getTimeColor = () => {
    if (timeRemaining > 60) return '#10b981'; // Green
    if (timeRemaining > 30) return '#f59e0b'; // Yellow
    return '#ef4444'; // Red
  };

  const getAnswerClass = (index) => {
    if (selectedAnswer === null) return 'quiz-option';
    
    if (index === currentQuestion.correctIndex) {
      return 'quiz-option correct';
    }
    
    if (index === selectedAnswer && index !== currentQuestion.correctIndex) {
      return 'quiz-option incorrect';
    }
    
    return 'quiz-option';
  };

  const getScoreGrade = (percentage) => {
    if (percentage >= 90) return { grade: 'A', message: 'Excellent! You\'re ready for the exam!' };
    if (percentage >= 80) return { grade: 'B', message: 'Great job! Review the missed questions.' };
    if (percentage >= 70) return { grade: 'C', message: 'Good effort. Keep studying!' };
    if (percentage >= 60) return { grade: 'D', message: 'You\'re getting there. More practice needed.' };
    return { grade: 'F', message: 'Keep studying. Review the material and try again.' };
  };

  if (quizComplete) {
    const finalScoreValue = score;
    const percentage = Math.round((finalScoreValue / quizQuestions.length) * 100);
    const { grade, message } = getScoreGrade(percentage);

    return (
      <div className="study-mode-container">
        <div className="quiz-results">
          <h2>🎓 Quiz Complete!</h2>
          
          <div className="score-display">
            <div className="score-circle">
              <div className="grade">{grade}</div>
              <div className="percentage">{percentage}%</div>
            </div>
            <div className="score-details">
              <p className="score-text">{finalScoreValue} out of {quizQuestions.length} correct</p>
              <p className="score-message">{message}</p>
              {isTimedMode && questionTimes.length > 0 && (
                <p className="score-time">⏱️ Avg: {Math.round(questionTimes.reduce((a,b)=>a+b,0)/questionTimes.length)}s per question</p>
              )}
            </div>
          </div>

          <div className="quiz-actions">
            <button onClick={restartQuiz} className="btn-primary">
              Take Quiz Again
            </button>
          </div>

          {quizHistory.length > 1 && (
            <div className="quiz-history">
              <h3>Previous Attempts</h3>
              <div className="history-list">
                {quizHistory.slice(1).map((attempt, index) => (
                  <div key={index} className="history-item">
                    <span className="history-date">
                      {new Date(attempt.date).toLocaleDateString()}
                      {attempt.timed && ' ⏱️'}
                    </span>
                    <span className="history-score">
                      {attempt.score}/{attempt.total} ({attempt.percentage}%)
                      {attempt.avgTimePerQuestion && ` · ${attempt.avgTimePerQuestion}s avg`}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    );
  }

  return (
    <div className="study-mode-container">
      <div className="study-mode-header">
        <h2>🎯 Quiz Mode</h2>
        <p>Test your knowledge of MA Real Estate</p>
        <div className="quiz-mode-toggle">
          <label className="toggle-switch">
            <input
              type="checkbox"
              checked={isTimedMode}
              onChange={(e) => setIsTimedMode(e.target.checked)}
            />
            <span className="toggle-slider"></span>
          </label>
          <span className="toggle-label">
            {isTimedMode ? '⏱️ Timed Mode (2 min/question)' : '🕐 Untimed Mode'}
          </span>
        </div>
      </div>

      <div className="quiz-progress">
        <div className="progress-bar-container">
          <div 
            className="progress-bar-fill" 
            style={{ width: `${((currentQuestionIndex + 1) / quizQuestions.length) * 100}%` }}
          />
        </div>
        <div className="progress-text">
          Question {currentQuestionIndex + 1} of {quizQuestions.length} | Score: {score}/{currentQuestionIndex}
          {isTimedMode && selectedAnswer === null && (
            <span className="timer-display" style={{ color: getTimeColor() }}>
              {' '}| ⏱️ {formatTime(timeRemaining)}
            </span>
          )}
        </div>
      </div>

      <div className="quiz-question-card">
        <div className="question-category">{currentQuestion.category}</div>
        <h3 className="question-text">{currentQuestion.question}</h3>

        <div className="quiz-options">
          {currentQuestion.options.map((option, index) => (
            <button
              key={index}
              className={getAnswerClass(index)}
              onClick={() => handleAnswerSelect(index)}
              disabled={selectedAnswer !== null}
            >
              <span className="option-letter">{String.fromCharCode(65 + index)}</span>
              <span className="option-text">{option}</span>
              {selectedAnswer !== null && index === currentQuestion.correctIndex && (
                <span className="option-icon">✓</span>
              )}
              {selectedAnswer === index && index !== currentQuestion.correctIndex && (
                <span className="option-icon">✗</span>
              )}
              {selectedAnswer === -1 && index === currentQuestion.correctIndex && (
                <span className="option-icon">✓</span>
              )}
            </button>
          ))}
        </div>

        {showExplanation && (
          <div className="quiz-explanation">
            {selectedAnswer === -1 && (
              <div className="timeout-notice">
                <strong>⏱️ Time's Up!</strong> You ran out of time on this question.
              </div>
            )}
            <h4>Explanation:</h4>
            <p>{currentQuestion.explanation}</p>
          </div>
        )}
      </div>

      {selectedAnswer !== null && (
        <div className="quiz-navigation">
          <button onClick={handleNext} className="btn-primary">
            {isLastQuestion ? 'Finish Quiz' : 'Next Question →'}
          </button>
        </div>
      )}
    </div>
  );
}

import React, { useState, useEffect } from 'react';
import { quizQuestions } from './studyData';

export default function QuizMode() {
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

  const currentQuestion = quizQuestions[currentQuestionIndex];
  const isLastQuestion = currentQuestionIndex === quizQuestions.length - 1;

  // Save quiz history
  useEffect(() => {
    if (quizHistory.length > 0) {
      localStorage.setItem('quizHistory', JSON.stringify(quizHistory));
    }
  }, [quizHistory]);

  const handleAnswerSelect = (index) => {
    if (selectedAnswer === null) {
      setSelectedAnswer(index);
      setShowExplanation(true);
      
      const isCorrect = index === currentQuestion.correctIndex;
      const newAnswer = {
        questionId: currentQuestion.id,
        selectedIndex: index,
        correct: isCorrect
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
    }
  };

  const completeQuiz = () => {
    const finalScore = {
      date: new Date().toISOString(),
      score: score + (selectedAnswer === currentQuestion.correctIndex ? 1 : 0),
      total: quizQuestions.length,
      percentage: Math.round(((score + (selectedAnswer === currentQuestion.correctIndex ? 1 : 0)) / quizQuestions.length) * 100)
    };
    
    setQuizHistory([finalScore, ...quizHistory.slice(0, 9)]); // Keep last 10 scores
    setQuizComplete(true);
  };

  const restartQuiz = () => {
    setCurrentQuestionIndex(0);
    setSelectedAnswer(null);
    setShowExplanation(false);
    setScore(0);
    setAnswers([]);
    setQuizComplete(false);
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
                    </span>
                    <span className="history-score">
                      {attempt.score}/{attempt.total} ({attempt.percentage}%)
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
            </button>
          ))}
        </div>

        {showExplanation && (
          <div className="quiz-explanation">
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

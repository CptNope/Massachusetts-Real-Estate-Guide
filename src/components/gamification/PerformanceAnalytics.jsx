import React, { useState, useMemo } from 'react';
import { quizQuestions } from '../study/studyData';

export default function PerformanceAnalytics({ gamification }) {
  const [timeRange, setTimeRange] = useState('all'); // all, week, month
  
  // Get quiz history from localStorage
  const quizHistory = useMemo(() => {
    const saved = localStorage.getItem('quizHistory');
    return saved ? JSON.parse(saved) : [];
  }, []);

  // Get completed scenarios
  const completedScenarios = useMemo(() => {
    const saved = localStorage.getItem('completedScenarios');
    return saved ? JSON.parse(saved) : [];
  }, []);

  // Calculate category performance from quiz history
  const categoryPerformance = useMemo(() => {
    const categories = {};
    
    quizHistory.forEach(quiz => {
      quiz.answers?.forEach(answer => {
        const question = quizQuestions.find(q => q.id === answer.questionId);
        if (question) {
          if (!categories[question.category]) {
            categories[question.category] = { correct: 0, total: 0 };
          }
          categories[question.category].total++;
          if (answer.isCorrect) {
            categories[question.category].correct++;
          }
        }
      });
    });

    return Object.entries(categories).map(([name, stats]) => ({
      name,
      correct: stats.correct,
      total: stats.total,
      percentage: Math.round((stats.correct / stats.total) * 100)
    })).sort((a, b) => b.percentage - a.percentage);
  }, [quizHistory]);

  // Calculate quiz performance trend (last 10 quizzes)
  const quizTrend = useMemo(() => {
    return quizHistory.slice(-10).map((quiz, index) => ({
      quiz: index + 1,
      score: quiz.score,
      total: quiz.total,
      percentage: Math.round((quiz.score / quiz.total) * 100),
      date: new Date(quiz.date).toLocaleDateString()
    }));
  }, [quizHistory]);

  // Calculate study insights
  const insights = useMemo(() => {
    const totalQuizzes = quizHistory.length;
    const avgScore = totalQuizzes > 0
      ? Math.round(quizHistory.reduce((sum, q) => sum + (q.score / q.total) * 100, 0) / totalQuizzes)
      : 0;
    
    const recentAvg = quizTrend.length > 0
      ? Math.round(quizTrend.reduce((sum, q) => sum + q.percentage, 0) / quizTrend.length)
      : 0;

    const improvement = recentAvg - avgScore;

    const strongCategories = categoryPerformance.filter(c => c.percentage >= 80);
    const weakCategories = categoryPerformance.filter(c => c.percentage < 70);

    return {
      totalQuizzes,
      avgScore,
      recentAvg,
      improvement,
      strongCategories,
      weakCategories,
      passRate: quizHistory.filter(q => (q.score / q.total) >= 0.7).length / totalQuizzes * 100 || 0
    };
  }, [quizHistory, quizTrend, categoryPerformance]);

  // Get weak areas recommendations
  const recommendations = useMemo(() => {
    const recs = [];
    
    insights.weakCategories.forEach(cat => {
      recs.push({
        type: 'weak-category',
        category: cat.name,
        message: `Focus on ${cat.name} - currently at ${cat.percentage}%`,
        action: 'Review flashcards and take practice quizzes'
      });
    });

    if (gamification.streak.data.currentStreak === 0) {
      recs.push({
        type: 'streak',
        message: 'Start a study streak today!',
        action: 'Study for just 10 minutes to begin'
      });
    }

    if (insights.totalQuizzes < 5) {
      recs.push({
        type: 'practice',
        message: 'Take more practice quizzes',
        action: 'Aim for at least 10 quizzes to identify patterns'
      });
    }

    if (insights.improvement < 0) {
      recs.push({
        type: 'performance',
        message: 'Recent scores are lower than average',
        action: 'Take a break or review fundamentals'
      });
    }

    return recs;
  }, [insights, gamification.streak.data.currentStreak]);

  return (
    <div className="analytics-container">
      <div className="analytics-header">
        <h2>📊 Performance Analytics</h2>
        <p>Track your progress and identify areas for improvement</p>
      </div>

      {/* Summary Cards */}
      <div className="analytics-summary">
        <div className="summary-card">
          <div className="summary-icon">🎯</div>
          <div className="summary-content">
            <div className="summary-value">{insights.avgScore}%</div>
            <div className="summary-label">Average Score</div>
          </div>
        </div>

        <div className="summary-card">
          <div className="summary-icon">📈</div>
          <div className="summary-content">
            <div className="summary-value" style={{ color: insights.improvement >= 0 ? '#10b981' : '#ef4444' }}>
              {insights.improvement >= 0 ? '+' : ''}{insights.improvement}%
            </div>
            <div className="summary-label">Recent Trend</div>
          </div>
        </div>

        <div className="summary-card">
          <div className="summary-icon">✅</div>
          <div className="summary-content">
            <div className="summary-value">{Math.round(insights.passRate)}%</div>
            <div className="summary-label">Pass Rate</div>
          </div>
        </div>

        <div className="summary-card">
          <div className="summary-icon">📚</div>
          <div className="summary-content">
            <div className="summary-value">{insights.totalQuizzes}</div>
            <div className="summary-label">Total Quizzes</div>
          </div>
        </div>
      </div>

      {/* Quiz Performance Trend */}
      {quizTrend.length > 0 && (
        <div className="analytics-section">
          <h3>Quiz Performance Trend</h3>
          <div className="chart-container">
            <div className="line-chart">
              {quizTrend.map((quiz, index) => (
                <div key={index} className="chart-bar-wrapper">
                  <div className="chart-bar-container">
                    <div 
                      className="chart-bar"
                      style={{ 
                        height: `${quiz.percentage}%`,
                        backgroundColor: quiz.percentage >= 70 ? '#10b981' : '#ef4444'
                      }}
                    />
                  </div>
                  <div className="chart-label">{quiz.percentage}%</div>
                  <div className="chart-sublabel">Quiz {quiz.quiz}</div>
                </div>
              ))}
            </div>
            <div className="chart-threshold">
              <span className="threshold-line"></span>
              <span className="threshold-label">Pass Line (70%)</span>
            </div>
          </div>
        </div>
      )}

      {/* Topic Strength Analysis */}
      {categoryPerformance.length > 0 && (
        <div className="analytics-section">
          <h3>Topic Strength Analysis</h3>
          <div className="strength-chart">
            {categoryPerformance.map((category, index) => (
              <div key={index} className="strength-item">
                <div className="strength-header">
                  <span className="strength-name">{category.name}</span>
                  <span className="strength-score">
                    {category.correct}/{category.total} ({category.percentage}%)
                  </span>
                </div>
                <div className="strength-bar-container">
                  <div 
                    className="strength-bar"
                    style={{ 
                      width: `${category.percentage}%`,
                      backgroundColor: 
                        category.percentage >= 80 ? '#10b981' :
                        category.percentage >= 70 ? '#f59e0b' :
                        '#ef4444'
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Strengths & Weaknesses */}
      <div className="analytics-grid">
        <div className="analytics-section strengths">
          <h3>💪 Strong Areas</h3>
          {insights.strongCategories.length > 0 ? (
            <div className="category-list">
              {insights.strongCategories.map((cat, index) => (
                <div key={index} className="category-item strong">
                  <span className="category-icon">✓</span>
                  <span className="category-name">{cat.name}</span>
                  <span className="category-score">{cat.percentage}%</span>
                </div>
              ))}
            </div>
          ) : (
            <p className="empty-state">Take more quizzes to identify strong areas</p>
          )}
        </div>

        <div className="analytics-section weaknesses">
          <h3>📖 Areas to Improve</h3>
          {insights.weakCategories.length > 0 ? (
            <div className="category-list">
              {insights.weakCategories.map((cat, index) => (
                <div key={index} className="category-item weak">
                  <span className="category-icon">!</span>
                  <span className="category-name">{cat.name}</span>
                  <span className="category-score">{cat.percentage}%</span>
                </div>
              ))}
            </div>
          ) : (
            <p className="empty-state">Great job! No weak areas identified</p>
          )}
        </div>
      </div>

      {/* Recommendations */}
      {recommendations.length > 0 && (
        <div className="analytics-section recommendations">
          <h3>💡 Personalized Recommendations</h3>
          <div className="recommendation-list">
            {recommendations.map((rec, index) => (
              <div key={index} className="recommendation-item">
                <div className="rec-icon">
                  {rec.type === 'weak-category' && '📚'}
                  {rec.type === 'streak' && '🔥'}
                  {rec.type === 'practice' && '🎯'}
                  {rec.type === 'performance' && '📈'}
                </div>
                <div className="rec-content">
                  <div className="rec-message">{rec.message}</div>
                  <div className="rec-action">{rec.action}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Study Activity Summary */}
      <div className="analytics-section activity-summary">
        <h3>📅 Study Activity Summary</h3>
        <div className="activity-stats">
          <div className="activity-stat">
            <div className="activity-label">Current Streak</div>
            <div className="activity-value">{gamification.streak.data.currentStreak} days</div>
          </div>
          <div className="activity-stat">
            <div className="activity-label">Total Study Days</div>
            <div className="activity-value">{gamification.streak.data.studyDates.length} days</div>
          </div>
          <div className="activity-stat">
            <div className="activity-label">Scenarios Completed</div>
            <div className="activity-value">{completedScenarios.length}/15</div>
          </div>
          <div className="activity-stat">
            <div className="activity-label">Total XP Earned</div>
            <div className="activity-value">{gamification.stats.totalXP} XP</div>
          </div>
        </div>
      </div>

      {/* Empty State */}
      {quizHistory.length === 0 && (
        <div className="analytics-empty">
          <div className="empty-icon">📊</div>
          <h3>No Data Yet</h3>
          <p>Take some quizzes to see your performance analytics!</p>
          <button className="btn-primary">Start Quiz Mode</button>
        </div>
      )}
    </div>
  );
}

import React, { useState, useEffect } from 'react';

// Dashboard Analytics Component
export default function Dashboard({ gamification }) {
  const [timeFilter, setTimeFilter] = useState('all'); // 'week', 'month', 'all'
  const [stats, setStats] = useState(null);

  useEffect(() => {
    if (gamification) {
      setStats(gamification.stats);
    }
  }, [gamification]);

  if (!stats) {
    return (
      <div className="dashboard-loading">
        <div className="spinner-premium"></div>
        <p>Loading dashboard...</p>
      </div>
    );
  }

  // Calculate additional stats
  const quizHistory = JSON.parse(localStorage.getItem('quizHistory') || '[]');
  const savedCMAs = JSON.parse(localStorage.getItem('savedCMAs') || '{}');
  const cmaCount = Object.keys(savedCMAs).length;
  const level = Math.floor(stats.totalXP / 500) + 1;
  const xpForNextLevel = level * 500;
  const xpProgress = ((stats.totalXP % 500) / 500) * 100;

  // Calculate quiz stats
  const quizScores = quizHistory.map(q => q.percentage);
  const avgQuizScore = quizScores.length > 0 
    ? Math.round(quizScores.reduce((a, b) => a + b, 0) / quizScores.length)
    : 0;
  const recentQuizzes = quizHistory.slice(0, 10);

  // Study streak data
  const streakData = gamification?.streak?.data || { currentStreak: 0, longestStreak: 0 };

  // Achievement progress
  const totalAchievements = gamification?.achievements?.total || 0;
  const unlockedAchievements = gamification?.achievements?.unlocked?.length || 0;
  const achievementProgress = totalAchievements > 0 
    ? Math.round((unlockedAchievements / totalAchievements) * 100)
    : 0;

  return (
    <div className="dashboard-container">
      {/* Header */}
      <div className="dashboard-header">
        <h2>📊 Your Learning Dashboard</h2>
        <div className="time-filter">
          <button 
            className={`filter-btn ${timeFilter === 'week' ? 'active' : ''}`}
            onClick={() => setTimeFilter('week')}
          >
            This Week
          </button>
          <button 
            className={`filter-btn ${timeFilter === 'month' ? 'active' : ''}`}
            onClick={() => setTimeFilter('month')}
          >
            This Month
          </button>
          <button 
            className={`filter-btn ${timeFilter === 'all' ? 'active' : ''}`}
            onClick={() => setTimeFilter('all')}
          >
            All Time
          </button>
        </div>
      </div>

      {/* Key Stats Grid */}
      <div className="dashboard-grid">
        {/* Level & XP */}
        <div className="dashboard-stat premium-card">
          <span className="stat-icon">⭐</span>
          <div className="stat-value">{level}</div>
          <div className="stat-label">Level</div>
          <div className="progress-bar-premium" style={{ marginTop: '1rem' }}>
            <div className="progress-fill-premium" style={{ width: `${xpProgress}%` }}></div>
          </div>
          <small style={{ marginTop: '0.5rem', display: 'block', color: 'var(--text-secondary)' }}>
            {stats.totalXP} / {xpForNextLevel} XP
          </small>
        </div>

        {/* Quiz Performance */}
        <div className="dashboard-stat premium-card">
          <span className="stat-icon">🎯</span>
          <div className="stat-value">{avgQuizScore}%</div>
          <div className="stat-label">Avg Quiz Score</div>
          <div style={{ marginTop: '0.5rem', fontSize: '0.875rem', color: 'var(--text-secondary)' }}>
            {stats.quizzesCompleted} quizzes completed
          </div>
        </div>

        {/* Study Streak */}
        <div className="dashboard-stat premium-card">
          <span className="stat-icon">🔥</span>
          <div className="stat-value">{streakData.currentStreak}</div>
          <div className="stat-label">Day Streak</div>
          <div style={{ marginTop: '0.5rem', fontSize: '0.875rem', color: 'var(--text-secondary)' }}>
            Longest: {streakData.longestStreak} days
          </div>
        </div>

        {/* Achievements */}
        <div className="dashboard-stat premium-card">
          <span className="stat-icon">🏆</span>
          <div className="stat-value">{unlockedAchievements}/{totalAchievements}</div>
          <div className="stat-label">Achievements</div>
          <div className="progress-bar-premium" style={{ marginTop: '1rem' }}>
            <div className="progress-fill-premium" style={{ width: `${achievementProgress}%` }}></div>
          </div>
        </div>

        {/* CMAs Generated */}
        <div className="dashboard-stat premium-card">
          <span className="stat-icon">📊</span>
          <div className="stat-value">{cmaCount}</div>
          <div className="stat-label">CMAs Created</div>
          <div style={{ marginTop: '0.5rem', fontSize: '0.875rem', color: 'var(--text-secondary)' }}>
            {stats.cmasGenerated || 0} total generated
          </div>
        </div>

        {/* Flashcards Mastered */}
        <div className="dashboard-stat premium-card">
          <span className="stat-icon">📚</span>
          <div className="stat-value">{stats.masteredFlashcards}</div>
          <div className="stat-label">Cards Mastered</div>
          <div style={{ marginTop: '0.5rem', fontSize: '0.875rem', color: 'var(--text-secondary)' }}>
            of 278 total
          </div>
        </div>

        {/* Perfect Quizzes */}
        <div className="dashboard-stat premium-card">
          <span className="stat-icon">💯</span>
          <div className="stat-value">{stats.perfectQuizzes}</div>
          <div className="stat-label">Perfect Scores</div>
          <div style={{ marginTop: '0.5rem', fontSize: '0.875rem', color: 'var(--text-secondary)' }}>
            Streak: {stats.perfectStreakMax || 0}
          </div>
        </div>

        {/* Sections Mastered */}
        <div className="dashboard-stat premium-card">
          <span className="stat-icon">📖</span>
          <div className="stat-value">{stats.masteredSections}</div>
          <div className="stat-label">Sections Complete</div>
          <div style={{ marginTop: '0.5rem', fontSize: '0.875rem', color: 'var(--text-secondary)' }}>
            of 24 sections
          </div>
        </div>
      </div>

      {/* Recent Quiz Performance Chart */}
      <div className="dashboard-section glass-card" style={{ marginTop: '2rem' }}>
        <h3>📈 Recent Quiz Performance</h3>
        {recentQuizzes.length > 0 ? (
          <div className="quiz-chart">
            <div className="chart-bars">
              {recentQuizzes.reverse().map((quiz, index) => (
                <div key={index} className="chart-bar-wrapper">
                  <div className="chart-bar-container">
                    <div 
                      className="chart-bar"
                      style={{ 
                        height: `${quiz.percentage}%`,
                        background: quiz.percentage === 100 ? 'linear-gradient(135deg, #10b981, #059669)' :
                                  quiz.percentage >= 80 ? 'linear-gradient(135deg, #38bdf8, #0ea5e9)' :
                                  quiz.percentage >= 60 ? 'linear-gradient(135deg, #f59e0b, #d97706)' :
                                  'linear-gradient(135deg, #ef4444, #dc2626)'
                      }}
                    >
                      <span className="bar-value">{quiz.percentage}%</span>
                    </div>
                  </div>
                  <div className="chart-label">
                    {new Date(quiz.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
                  </div>
                </div>
              ))}
            </div>
            <div className="chart-legend">
              <div className="legend-item">
                <span className="legend-color" style={{ background: '#10b981' }}></span>
                <span>Perfect (100%)</span>
              </div>
              <div className="legend-item">
                <span className="legend-color" style={{ background: '#38bdf8' }}></span>
                <span>Great (80-99%)</span>
              </div>
              <div className="legend-item">
                <span className="legend-color" style={{ background: '#f59e0b' }}></span>
                <span>Good (60-79%)</span>
              </div>
              <div className="legend-item">
                <span className="legend-color" style={{ background: '#ef4444' }}></span>
                <span>Needs Work (&lt;60%)</span>
              </div>
            </div>
          </div>
        ) : (
          <p style={{ textAlign: 'center', color: 'var(--text-secondary)', padding: '2rem' }}>
            Complete some quizzes to see your performance chart!
          </p>
        )}
      </div>

      {/* Category Performance */}
      <div className="dashboard-section glass-card" style={{ marginTop: '2rem' }}>
        <h3>📚 Category Breakdown</h3>
        <div className="category-grid">
          {[
            { name: 'Financing', correct: stats.financingQuestionsCorrect || 0, icon: '💰' },
            { name: 'ARMs', correct: stats.armQuestionsCorrect || 0, icon: '📊' },
            { name: 'Foreclosure', correct: stats.foreclosureQuestionsCorrect || 0, icon: '🏚️' },
            { name: 'Federal Reserve', correct: stats.fedQuestionsCorrect || 0, icon: '🏛️' },
            { name: 'Dodd-Frank', correct: stats.doddFrankQuestionsCorrect || 0, icon: '⚖️' },
            { name: 'Clauses', correct: stats.clauseQuestionsCorrect || 0, icon: '📜' },
            { name: 'Amortization', correct: stats.amortizationQuestionsCorrect || 0, icon: '📈' },
            { name: 'MA Foreclosure', correct: stats.maForeclosureQuestionsCorrect || 0, icon: '🏛️' }
          ].map((category, index) => (
            <div key={index} className="category-card premium-card">
              <span className="category-icon">{category.icon}</span>
              <div className="category-name">{category.name}</div>
              <div className="category-score">{category.correct} correct</div>
            </div>
          ))}
        </div>
      </div>

      {/* Recent Achievements */}
      <div className="dashboard-section glass-card" style={{ marginTop: '2rem' }}>
        <h3>🏆 Recent Achievements</h3>
        <div className="achievement-list">
          {gamification?.achievements?.unlocked?.slice(-5).reverse().map((achievement, index) => (
            <div key={index} className="achievement-item achievement-badge unlocked">
              <span style={{ fontSize: '2rem' }}>{achievement.icon}</span>
              <div>
                <div style={{ fontWeight: 600 }}>{achievement.title}</div>
                <div style={{ fontSize: '0.875rem', color: 'var(--text-secondary)' }}>
                  {achievement.description}
                </div>
              </div>
            </div>
          ))}
          {(!gamification?.achievements?.unlocked || gamification.achievements.unlocked.length === 0) && (
            <p style={{ textAlign: 'center', color: 'var(--text-secondary)', padding: '2rem' }}>
              Complete activities to unlock achievements!
            </p>
          )}
        </div>
      </div>

      {/* Study Streak Calendar */}
      <div className="dashboard-section glass-card" style={{ marginTop: '2rem' }}>
        <h3>📅 Study Streak Calendar</h3>
        <div className="streak-calendar">
          {Array.from({ length: 28 }, (_, i) => {
            const date = new Date();
            date.setDate(date.getDate() - (27 - i));
            const dateStr = date.toDateString();
            const isActive = streakData.studyDates?.some(d => new Date(d).toDateString() === dateStr);
            return (
              <div 
                key={i} 
                className={`streak-day ${isActive ? 'active' : ''}`}
                title={dateStr}
              ></div>
            );
          })}
        </div>
        <p style={{ textAlign: 'center', color: 'var(--text-secondary)', marginTop: '1rem', fontSize: '0.875rem' }}>
          Last 4 weeks of study activity
        </p>
      </div>

      {/* Quick Stats Summary */}
      <div className="dashboard-section gradient-border" style={{ marginTop: '2rem', padding: '2rem' }}>
        <h3 style={{ marginTop: 0 }}>💡 Quick Summary</h3>
        <div className="summary-grid">
          <div className="summary-item">
            <strong>Total Study Time:</strong>
            <span>{stats.totalStudyDays || 0} days</span>
          </div>
          <div className="summary-item">
            <strong>Completion Rate:</strong>
            <span>{Math.round((stats.masteredSections / 24) * 100)}%</span>
          </div>
          <div className="summary-item">
            <strong>Quizzes Above 80%:</strong>
            <span>{stats.quizzesAbove80 || 0}</span>
          </div>
          <div className="summary-item">
            <strong>CMA Comps Added:</strong>
            <span>{stats.totalCompsAdded || 0}</span>
          </div>
          <div className="summary-item">
            <strong>Adjustments Made:</strong>
            <span>{stats.totalAdjustments || 0}</span>
          </div>
          <div className="summary-item">
            <strong>PDFs Generated:</strong>
            <span>{stats.pdfReportsGenerated || 0}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

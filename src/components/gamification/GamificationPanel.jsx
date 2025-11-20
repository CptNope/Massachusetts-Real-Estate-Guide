import React from 'react';
import StreakDisplay from './StreakDisplay';

export default function GamificationPanel({ gamification }) {
  const { stats, progress, achievements, newAchievements, streak } = gamification;

  return (
    <div className="gamification-container">
      {/* New Achievement Notifications */}
      {newAchievements.length > 0 && (
        <div className="achievement-notifications">
          {newAchievements.map(achievement => (
            <div key={achievement.id} className="achievement-notification">
              <span className="achievement-icon-large">{achievement.icon}</span>
              <div>
                <h4>Achievement Unlocked!</h4>
                <p><strong>{achievement.title}</strong></p>
                <p className="achievement-desc">{achievement.description}</p>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Level & XP Progress */}
      <div className="gamification-header">
        <div className="level-badge">
          <div className="level-number">Lv. {progress.level}</div>
          <div className="level-label">Level</div>
        </div>

        <div className="xp-progress-container">
          <div className="xp-info">
            <span className="xp-current">{progress.currentXP} XP</span>
            <span className="xp-next">{progress.xpNeeded} XP to Level {progress.level + 1}</span>
          </div>
          <div className="xp-bar">
            <div 
              className="xp-bar-fill" 
              style={{ width: `${progress.progress}%` }}
            ></div>
          </div>
        </div>
      </div>

      {/* Enhanced Streak Display */}
      {streak && <StreakDisplay streakInfo={streak} />}

      {/* Quick Stats */}
      <div className="quick-stats">
        <div className="quick-stat">
          <span className="stat-icon">🎯</span>
          <span className="stat-value">{stats.quizzesCompleted}</span>
          <span className="stat-label">Quizzes</span>
        </div>
        <div className="quick-stat">
          <span className="stat-icon">📚</span>
          <span className="stat-value">{stats.masteredFlashcards}/278</span>
          <span className="stat-label">Flashcards</span>
        </div>
        <div className="quick-stat">
          <span className="stat-icon">🎭</span>
          <span className="stat-value">{stats.scenariosCompleted}/15</span>
          <span className="stat-label">Scenarios</span>
        </div>
        <div className="quick-stat">
          <span className="stat-icon">📖</span>
          <span className="stat-value">{stats.masteredSections}/29</span>
          <span className="stat-label">Sections</span>
        </div>
      </div>

      {/* Achievements Preview - Link to Full Page */}
      <div className="achievements-preview">
        <h3>🏆 Achievements</h3>
        <div className="achievement-summary">
          <div className="achievement-progress">
            <span className="progress-text">{achievements.unlocked.length} of {achievements.total} unlocked</span>
            <div className="progress-bar-small">
              <div 
                className="progress-fill" 
                style={{ width: `${(achievements.unlocked.length / achievements.total) * 100}%` }}
              />
            </div>
          </div>
          <p className="achievement-hint">Click the 🏆 Achievements button above to view all achievements!</p>
        </div>
      </div>

      {/* Motivational Message */}
      <div className="motivation-box">
        {stats.currentStreak === 0 && (
          <p>💪 Start your study streak today! Come back tomorrow to keep it going.</p>
        )}
        {stats.currentStreak >= 1 && stats.currentStreak < 7 && (
          <p>🔥 Great start! Keep studying to build your streak!</p>
        )}
        {stats.currentStreak >= 7 && stats.currentStreak < 30 && (
          <p>⚡ Amazing streak! You're building a strong habit!</p>
        )}
        {stats.currentStreak >= 30 && (
          <p>👑 Incredible! You're a dedicated master of real estate!</p>
        )}
      </div>
    </div>
  );
}

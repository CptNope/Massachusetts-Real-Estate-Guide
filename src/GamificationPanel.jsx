import React from 'react';

export default function GamificationPanel({ gamification }) {
  const { stats, progress, achievements, newAchievements } = gamification;

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

      {/* Streak Information */}
      <div className="streak-container">
        <div className="streak-current">
          <span className="streak-icon">🔥</span>
          <div>
            <div className="streak-number">{stats.currentStreak}</div>
            <div className="streak-label">Day Streak</div>
          </div>
        </div>
        
        <div className="streak-stats">
          <div className="streak-stat">
            <span className="stat-value">{stats.longestStreak}</span>
            <span className="stat-label">Longest</span>
          </div>
          <div className="streak-stat">
            <span className="stat-value">{stats.totalStudyDays}</span>
            <span className="stat-label">Total Days</span>
          </div>
        </div>
      </div>

      {/* Quick Stats */}
      <div className="quick-stats">
        <div className="quick-stat">
          <span className="stat-icon">🎯</span>
          <span className="stat-value">{stats.quizzesCompleted}</span>
          <span className="stat-label">Quizzes</span>
        </div>
        <div className="quick-stat">
          <span className="stat-icon">📚</span>
          <span className="stat-value">{stats.masteredFlashcards}/222</span>
          <span className="stat-label">Flashcards</span>
        </div>
        <div className="quick-stat">
          <span className="stat-icon">🎭</span>
          <span className="stat-value">{stats.scenariosCompleted}/3</span>
          <span className="stat-label">Scenarios</span>
        </div>
        <div className="quick-stat">
          <span className="stat-icon">📖</span>
          <span className="stat-value">{stats.masteredSections}/21</span>
          <span className="stat-label">Sections</span>
        </div>
      </div>

      {/* Achievements */}
      <div className="achievements-section">
        <h3>🏆 Achievements ({achievements.unlocked.length}/{achievements.total})</h3>
        
        <div className="achievements-grid">
          {achievements.unlocked.map(achievement => (
            <div key={achievement.id} className="achievement-item unlocked" title={achievement.description}>
              <span className="achievement-icon">{achievement.icon}</span>
              <span className="achievement-title">{achievement.title}</span>
            </div>
          ))}
          
          {achievements.locked.map(achievement => (
            <div key={achievement.id} className="achievement-item locked" title={achievement.description}>
              <span className="achievement-icon">🔒</span>
              <span className="achievement-title">{achievement.title}</span>
            </div>
          ))}
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

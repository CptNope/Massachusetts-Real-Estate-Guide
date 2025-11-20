import React, { useState } from 'react';
import { useGamification } from '../../hooks/useGamification';

export default function AchievementsPage() {
  const gamification = useGamification();
  const [filter, setFilter] = useState('all'); // all, unlocked, locked
  
  if (!gamification) {
    return (
      <div className="achievements-page">
        <div className="page-header">
          <h1>🏆 Achievements</h1>
          <p>Gamification system not available</p>
        </div>
      </div>
    );
  }

  const { achievements, stats, progress } = gamification;
  
  // Filter achievements
  const getFilteredAchievements = () => {
    if (filter === 'unlocked') return achievements.unlocked;
    if (filter === 'locked') return achievements.locked;
    return [...achievements.unlocked, ...achievements.locked];
  };

  const filteredAchievements = getFilteredAchievements();

  return (
    <div className="achievements-page">
      {/* Page Header */}
      <div className="page-header">
        <div className="header-content">
          <h1>🏆 Achievements</h1>
          <p className="page-subtitle">
            Track your progress and unlock rewards as you master Massachusetts real estate
          </p>
        </div>
        
        <div className="achievements-stats">
          <div className="stat-card">
            <div className="stat-icon">🎯</div>
            <div className="stat-info">
              <div className="stat-value">{achievements.unlocked.length}/{achievements.total}</div>
              <div className="stat-label">Unlocked</div>
            </div>
          </div>
          
          <div className="stat-card">
            <div className="stat-icon">⭐</div>
            <div className="stat-info">
              <div className="stat-value">{progress.currentXP.toLocaleString()}</div>
              <div className="stat-label">Total XP</div>
            </div>
          </div>
          
          <div className="stat-card">
            <div className="stat-icon">🎖️</div>
            <div className="stat-info">
              <div className="stat-value">Level {progress.level}</div>
              <div className="stat-label">Current Level</div>
            </div>
          </div>
          
          <div className="stat-card">
            <div className="stat-icon">🔥</div>
            <div className="stat-info">
              <div className="stat-value">{stats.currentStreak} days</div>
              <div className="stat-label">Streak</div>
            </div>
          </div>
        </div>
      </div>

      {/* Filter Tabs */}
      <div className="achievements-filters">
        <button 
          className={`filter-btn ${filter === 'all' ? 'active' : ''}`}
          onClick={() => setFilter('all')}
        >
          All ({achievements.total})
        </button>
        <button 
          className={`filter-btn ${filter === 'unlocked' ? 'active' : ''}`}
          onClick={() => setFilter('unlocked')}
        >
          Unlocked ({achievements.unlocked.length})
        </button>
        <button 
          className={`filter-btn ${filter === 'locked' ? 'active' : ''}`}
          onClick={() => setFilter('locked')}
        >
          Locked ({achievements.locked.length})
        </button>
      </div>

      {/* Achievements Grid */}
      <div className="achievements-page-grid">
        {filteredAchievements.map(achievement => {
          const isUnlocked = achievements.unlocked.some(a => a.id === achievement.id);
          
          return (
            <div 
              key={achievement.id} 
              className={`achievement-card ${isUnlocked ? 'unlocked' : 'locked'}`}
            >
              <div className="achievement-card-icon">
                {isUnlocked ? achievement.icon : '🔒'}
              </div>
              
              <div className="achievement-card-content">
                <h3 className="achievement-card-title">{achievement.title}</h3>
                <p className="achievement-card-description">{achievement.description}</p>
                
                {achievement.xpReward && (
                  <div className="achievement-reward">
                    <span className="xp-badge">+{achievement.xpReward} XP</span>
                  </div>
                )}
                
                {!isUnlocked && achievement.requirement && (
                  <div className="achievement-requirement">
                    <span className="requirement-label">Requirement:</span>
                    <span className="requirement-text">{achievement.requirement}</span>
                  </div>
                )}
                
                {isUnlocked && achievement.unlockedAt && (
                  <div className="achievement-unlocked-date">
                    <span>✅ Unlocked {new Date(achievement.unlockedAt).toLocaleDateString()}</span>
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>

      {/* Empty State */}
      {filteredAchievements.length === 0 && (
        <div className="empty-state">
          <span className="empty-icon">🎯</span>
          <h3>No achievements found</h3>
          <p>Complete activities to unlock achievements!</p>
        </div>
      )}

      {/* Progress Message */}
      <div className="progress-message">
        <div className="progress-icon">
          {achievements.unlocked.length === achievements.total ? '🎉' : '💪'}
        </div>
        <div className="progress-text">
          {achievements.unlocked.length === achievements.total ? (
            <>
              <h3>Congratulations! 🎉</h3>
              <p>You've unlocked all achievements! You're a true Massachusetts real estate expert!</p>
            </>
          ) : (
            <>
              <h3>Keep Going! 💪</h3>
              <p>
                You have {achievements.locked.length} more achievement{achievements.locked.length !== 1 ? 's' : ''} to unlock. 
                Complete quizzes, master flashcards, and explore scenarios to earn them!
              </p>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

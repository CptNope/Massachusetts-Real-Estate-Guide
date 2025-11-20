import React from 'react';

export default function StreakDisplay({ streakInfo }) {
  const { data, milestone, message, isAtRisk, hasFreeze } = streakInfo;
  const { currentStreak, longestStreak, studyDates } = data;

  // Get last 7 days for mini calendar
  const getLast7Days = () => {
    const days = [];
    for (let i = 6; i >= 0; i--) {
      const date = new Date();
      date.setDate(date.getDate() - i);
      const dateString = date.toDateString();
      const dayName = date.toLocaleDateString('en-US', { weekday: 'short' });
      const isStudied = studyDates.includes(dateString);
      const isToday = i === 0;
      days.push({ dateString, dayName, isStudied, isToday });
    }
    return days;
  };

  return (
    <div className="streak-display">
      <div className="streak-header">
        <h3>🔥 Study Streak</h3>
      </div>

      <div className="streak-stats">
        <div className="streak-stat-card current">
          <div className="streak-number" style={{ color: milestone.color }}>
            {milestone.emoji} {currentStreak}
          </div>
          <div className="streak-label">{milestone.label}</div>
        </div>

        <div className="streak-stat-card longest">
          <div className="streak-number">{longestStreak}</div>
          <div className="streak-label">Longest</div>
        </div>

        <div className="streak-stat-card total-days">
          <div className="streak-number">{studyDates.length}</div>
          <div className="streak-label">Total Days</div>
        </div>
      </div>

      <div className="streak-message">
        {message}
      </div>

      {isAtRisk && (
        <div className="streak-warning">
          ⚠️ Streak at risk! Study today to keep it alive!
          {hasFreeze && <span className="freeze-available"> (🛡️ Freeze available)</span>}
        </div>
      )}

      {hasFreeze && !isAtRisk && (
        <div className="streak-freeze">
          🛡️ Streak Freeze available (miss 1 day without losing streak)
        </div>
      )}

      <div className="streak-calendar">
        <div className="calendar-title">Last 7 Days</div>
        <div className="calendar-days">
          {getLast7Days().map((day, index) => (
            <div key={index} className="calendar-day">
              <div className="calendar-day-name">{day.dayName}</div>
              <div 
                className={`calendar-day-dot ${
                  day.isStudied ? 'studied' : ''
                } ${day.isToday ? 'today' : ''}`}
              >
                {day.isStudied ? '✓' : '·'}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="streak-milestones">
        <div className="milestones-title">Upcoming Milestones</div>
        <div className="milestone-list">
          {currentStreak < 3 && (
            <div className="milestone-item">
              <span className="milestone-icon">🌟</span>
              <span className="milestone-text">{3 - currentStreak} days to Rising Star</span>
            </div>
          )}
          {currentStreak >= 3 && currentStreak < 7 && (
            <div className="milestone-item">
              <span className="milestone-icon">✨</span>
              <span className="milestone-text">{7 - currentStreak} days to Shining</span>
            </div>
          )}
          {currentStreak >= 7 && currentStreak < 14 && (
            <div className="milestone-item">
              <span className="milestone-icon">⚡</span>
              <span className="milestone-text">{14 - currentStreak} days to Charged Up</span>
            </div>
          )}
          {currentStreak >= 14 && currentStreak < 30 && (
            <div className="milestone-item">
              <span className="milestone-icon">🔥</span>
              <span className="milestone-text">{30 - currentStreak} days to On Fire</span>
            </div>
          )}
          {currentStreak >= 30 && currentStreak < 90 && (
            <div className="milestone-item">
              <span className="milestone-icon">👑</span>
              <span className="milestone-text">{90 - currentStreak} days to Master</span>
            </div>
          )}
          {currentStreak >= 90 && currentStreak < 365 && (
            <div className="milestone-item">
              <span className="milestone-icon">🏆</span>
              <span className="milestone-text">{365 - currentStreak} days to Legend</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

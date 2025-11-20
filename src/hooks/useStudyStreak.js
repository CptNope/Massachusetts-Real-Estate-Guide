import { useState, useEffect } from 'react';

export function useStudyStreak() {
  const [streakData, setStreakData] = useState(() => {
    const saved = localStorage.getItem('studyStreak');
    return saved ? JSON.parse(saved) : {
      currentStreak: 0,
      longestStreak: 0,
      lastStudyDate: null,
      studyDates: [],
      streakFreezeUsed: false
    };
  });

  useEffect(() => {
    localStorage.setItem('studyStreak', JSON.stringify(streakData));
  }, [streakData]);

  const recordStudyActivity = () => {
    const today = new Date().toDateString();
    
    // Already studied today
    if (streakData.lastStudyDate === today) {
      return streakData;
    }

    const yesterday = new Date(Date.now() - 86400000).toDateString();
    const twoDaysAgo = new Date(Date.now() - 172800000).toDateString();
    
    let newStreak = streakData.currentStreak;
    let streakFreezeUsed = streakData.streakFreezeUsed;

    // Continuing streak from yesterday
    if (streakData.lastStudyDate === yesterday) {
      newStreak += 1;
      streakFreezeUsed = false; // Reset freeze after successful day
    }
    // Missed yesterday but studied 2 days ago and have freeze available
    else if (streakData.lastStudyDate === twoDaysAgo && !streakData.streakFreezeUsed) {
      newStreak += 1;
      streakFreezeUsed = true; // Use the freeze
    }
    // Streak broken
    else {
      newStreak = 1;
      streakFreezeUsed = false;
    }

    const newData = {
      currentStreak: newStreak,
      longestStreak: Math.max(newStreak, streakData.longestStreak),
      lastStudyDate: today,
      studyDates: [...new Set([...streakData.studyDates, today])].slice(-90), // Keep last 90 days
      streakFreezeUsed
    };

    setStreakData(newData);
    return newData;
  };

  const getStreakBonus = (streak) => {
    if (streak >= 30) return 100; // 30-day milestone
    if (streak >= 14) return 50;  // 2-week milestone
    if (streak >= 7) return 25;   // 1-week milestone
    if (streak >= 3) return 10;   // 3-day milestone
    return 0;
  };

  const getStreakMilestone = (streak) => {
    if (streak >= 365) return { emoji: '🏆', label: 'LEGEND', color: '#FFD700' };
    if (streak >= 180) return { emoji: '💎', label: 'DIAMOND', color: '#B9F2FF' };
    if (streak >= 90) return { emoji: '👑', label: 'MASTER', color: '#9333EA' };
    if (streak >= 30) return { emoji: '🔥', label: 'ON FIRE', color: '#EF4444' };
    if (streak >= 14) return { emoji: '⚡', label: 'CHARGED UP', color: '#F59E0B' };
    if (streak >= 7) return { emoji: '✨', label: 'SHINING', color: '#10B981' };
    if (streak >= 3) return { emoji: '🌟', label: 'RISING', color: '#3B82F6' };
    return { emoji: '🔰', label: 'STARTING', color: '#6B7280' };
  };

  const getMotivationalMessage = (streak) => {
    if (streak === 0) return "Start your streak today! 🚀";
    if (streak === 1) return "Great start! Come back tomorrow! 📚";
    if (streak === 2) return "Two days strong! Keep it going! 💪";
    if (streak === 3) return "3-day streak! You're building momentum! ⭐";
    if (streak >= 7 && streak < 14) return "One week streak! Incredible dedication! 🎯";
    if (streak >= 14 && streak < 30) return "Two weeks! You're unstoppable! 🚀";
    if (streak >= 30 && streak < 60) return "30+ days! This is a lifestyle now! 🏆";
    if (streak >= 60 && streak < 90) return "60+ days! You're a study machine! 💎";
    if (streak >= 90) return "90+ days! Absolute LEGEND! 👑";
    return "Keep the streak alive! 🔥";
  };

  const isStreakAtRisk = () => {
    if (!streakData.lastStudyDate) return false;
    const yesterday = new Date(Date.now() - 86400000).toDateString();
    return streakData.lastStudyDate !== new Date().toDateString() && 
           streakData.lastStudyDate !== yesterday;
  };

  const hasStreakFreeze = () => {
    return !streakData.streakFreezeUsed && streakData.currentStreak >= 3;
  };

  return {
    streakData,
    recordStudyActivity,
    getStreakBonus,
    getStreakMilestone,
    getMotivationalMessage,
    isStreakAtRisk,
    hasStreakFreeze
  };
}

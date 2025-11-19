import { useState, useEffect } from 'react';
import { useStudyStreak } from './useStudyStreak';

// XP values for different activities
const XP_VALUES = {
  COMPLETE_QUIZ: 50,
  MASTER_FLASHCARD: 20,
  COMPLETE_SCENARIO: 100,
  MASTER_SECTION: 30,
  STUDY_SESSION: 10,
  PERFECT_QUIZ: 100,
  DAILY_STREAK: 25,
  STREAK_BONUS_3DAY: 10,
  STREAK_BONUS_7DAY: 25,
  STREAK_BONUS_14DAY: 50,
  STREAK_BONUS_30DAY: 100
};

// Achievement definitions
const ACHIEVEMENTS = [
  {
    id: 'first-quiz',
    title: 'Quiz Novice',
    description: 'Complete your first quiz',
    icon: '🎯',
    requirement: (stats) => stats.quizzesCompleted >= 1
  },
  {
    id: 'quiz-master',
    title: 'Quiz Master',
    description: 'Complete 10 quizzes',
    icon: '🏆',
    requirement: (stats) => stats.quizzesCompleted >= 10
  },
  {
    id: 'perfect-score',
    title: 'Perfect Score',
    description: 'Get 100% on a quiz',
    icon: '💯',
    requirement: (stats) => stats.perfectQuizzes >= 1
  },
  {
    id: 'flashcard-fan',
    title: 'Flashcard Fan',
    description: 'Master 10 flashcards',
    icon: '📚',
    requirement: (stats) => stats.masteredFlashcards >= 10
  },
  {
    id: 'flashcard-guru',
    title: 'Flashcard Guru',
    description: 'Master all 278 flashcards',
    icon: '🧙',
    requirement: (stats) => stats.masteredFlashcards >= 278
  },
  {
    id: 'scenario-solver',
    title: 'Scenario Solver',
    description: 'Complete all 3 scenarios',
    icon: '🎭',
    requirement: (stats) => stats.scenariosCompleted >= 3
  },
  {
    id: 'section-explorer',
    title: 'Section Explorer',
    description: 'Master 5 guide sections',
    icon: '🗺️',
    requirement: (stats) => stats.masteredSections >= 5
  },
  {
    id: 'section-champion',
    title: 'Section Champion',
    description: 'Master all 21 guide sections',
    icon: '👑',
    requirement: (stats) => stats.masteredSections >= 21
  },
  {
    id: 'week-streak',
    title: 'Week Warrior',
    description: 'Study for 7 days in a row',
    icon: '🔥',
    requirement: (stats) => stats.currentStreak >= 7
  },
  {
    id: 'month-streak',
    title: 'Month Master',
    description: 'Study for 30 days in a row',
    icon: '⚡',
    requirement: (stats) => stats.currentStreak >= 30
  },
  {
    id: 'xp-1000',
    title: 'Rising Star',
    description: 'Earn 1,000 XP',
    icon: '⭐',
    requirement: (stats) => stats.totalXP >= 1000
  },
  {
    id: 'xp-5000',
    title: 'Expert Learner',
    description: 'Earn 5,000 XP',
    icon: '💎',
    requirement: (stats) => stats.totalXP >= 5000
  },
  {
    id: 'calculator-pro',
    title: 'Calculator Pro',
    description: 'Use both calculators',
    icon: '🧮',
    requirement: (stats) => stats.calculatorsUsed >= 2
  },
  {
    id: 'note-taker',
    title: 'Note Taker',
    description: 'Add notes to 5 sections',
    icon: '📝',
    requirement: (stats) => stats.notesAdded >= 5
  },
  {
    id: 'dedicated-student',
    title: 'Dedicated Student',
    description: 'Study 10 different days',
    icon: '📖',
    requirement: (stats) => stats.totalStudyDays >= 10
  }
];

// Calculate level from XP
const calculateLevel = (xp) => {
  return Math.floor(xp / 500) + 1;
};

// Calculate XP needed for next level
const xpForNextLevel = (currentXP) => {
  const currentLevel = calculateLevel(currentXP);
  const nextLevelXP = currentLevel * 500;
  return nextLevelXP - currentXP;
};

export const useGamification = () => {
  const streak = useStudyStreak();
  
  const [stats, setStats] = useState(() => {
    const saved = localStorage.getItem('gamificationStats');
    if (saved) {
      return JSON.parse(saved);
    }
    return {
      totalXP: 0,
      quizzesCompleted: 0,
      perfectQuizzes: 0,
      masteredFlashcards: 0,
      scenariosCompleted: 0,
      masteredSections: 0,
      calculatorsUsed: 0,
      notesAdded: 0,
      totalStudyDays: 0,
      unlockedAchievements: []
    };
  });

  const [newAchievements, setNewAchievements] = useState([]);

  // Save stats to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem('gamificationStats', JSON.stringify(stats));
  }, [stats]);

  const updateStreak = () => {
    const updatedStreak = streak.recordStudyActivity();
    const streakBonus = streak.getStreakBonus(updatedStreak.currentStreak);
    
    // Award daily streak XP
    addXP(XP_VALUES.DAILY_STREAK, 'Daily Study Streak');
    
    // Award milestone bonus if any
    if (streakBonus > 0) {
      addXP(streakBonus, `${updatedStreak.currentStreak}-Day Streak Bonus`);
    }
    
    return updatedStreak;
  };

  const addXP = (amount, reason) => {
    setStats(prev => {
      const newXP = prev.totalXP + amount;
      const oldLevel = calculateLevel(prev.totalXP);
      const newLevel = calculateLevel(newXP);

      // Check for level up
      if (newLevel > oldLevel) {
        setTimeout(() => {
          alert(`🎉 Level Up! You're now level ${newLevel}!`);
        }, 100);
      }

      return {
        ...prev,
        totalXP: newXP
      };
    });

    // Check for new achievements
    checkAchievements();
  };

  const recordActivity = (activityType, data = {}) => {
    updateStreak();

    let xpAmount = 0;
    let updates = {};

    switch (activityType) {
      case 'COMPLETE_QUIZ':
        xpAmount = XP_VALUES.COMPLETE_QUIZ;
        updates.quizzesCompleted = stats.quizzesCompleted + 1;
        
        if (data.isPerfect) {
          xpAmount += XP_VALUES.PERFECT_QUIZ;
          updates.perfectQuizzes = stats.perfectQuizzes + 1;
        }
        break;

      case 'MASTER_FLASHCARD':
        xpAmount = XP_VALUES.MASTER_FLASHCARD;
        updates.masteredFlashcards = data.totalMastered || stats.masteredFlashcards + 1;
        break;

      case 'COMPLETE_SCENARIO':
        xpAmount = XP_VALUES.COMPLETE_SCENARIO;
        updates.scenariosCompleted = data.totalCompleted || stats.scenariosCompleted + 1;
        break;

      case 'MASTER_SECTION':
        xpAmount = XP_VALUES.MASTER_SECTION;
        updates.masteredSections = data.totalMastered || stats.masteredSections + 1;
        break;

      case 'USE_CALCULATOR':
        xpAmount = XP_VALUES.STUDY_SESSION;
        updates.calculatorsUsed = Math.min(2, stats.calculatorsUsed + 1);
        break;

      case 'ADD_NOTE':
        xpAmount = XP_VALUES.STUDY_SESSION;
        updates.notesAdded = stats.notesAdded + 1;
        break;

      default:
        xpAmount = XP_VALUES.STUDY_SESSION;
    }

    setStats(prev => ({
      ...prev,
      ...updates
    }));

    addXP(xpAmount, activityType.replace(/_/g, ' '));
  };

  const checkAchievements = () => {
    const newUnlocked = [];
    
    // Combine stats with streak data for achievement checking
    const combinedStats = {
      ...stats,
      currentStreak: streak.streakData.currentStreak,
      longestStreak: streak.streakData.longestStreak,
      totalStudyDays: streak.streakData.studyDates.length
    };

    ACHIEVEMENTS.forEach(achievement => {
      if (!stats.unlockedAchievements.includes(achievement.id)) {
        if (achievement.requirement(combinedStats)) {
          newUnlocked.push(achievement);
          setStats(prev => ({
            ...prev,
            unlockedAchievements: [...prev.unlockedAchievements, achievement.id]
          }));
        }
      }
    });

    if (newUnlocked.length > 0) {
      setNewAchievements(newUnlocked);
      // Clear after showing
      setTimeout(() => setNewAchievements([]), 5000);
    }
  };

  const getProgress = () => {
    const currentLevel = calculateLevel(stats.totalXP);
    const xpInCurrentLevel = stats.totalXP - ((currentLevel - 1) * 500);
    const xpNeededForLevel = 500;
    const progress = (xpInCurrentLevel / xpNeededForLevel) * 100;

    return {
      level: currentLevel,
      currentXP: stats.totalXP,
      xpInLevel: xpInCurrentLevel,
      xpNeeded: xpForNextLevel(stats.totalXP),
      progress: Math.min(100, progress)
    };
  };

  const getUnlockedAchievements = () => {
    return ACHIEVEMENTS.filter(a => stats.unlockedAchievements.includes(a.id));
  };

  const getLockedAchievements = () => {
    return ACHIEVEMENTS.filter(a => !stats.unlockedAchievements.includes(a.id));
  };

  return {
    stats,
    progress: getProgress(),
    achievements: {
      unlocked: getUnlockedAchievements(),
      locked: getLockedAchievements(),
      total: ACHIEVEMENTS.length
    },
    newAchievements,
    recordActivity,
    addXP,
    updateStreak,
    streak: {
      data: streak.streakData,
      bonus: streak.getStreakBonus(streak.streakData.currentStreak),
      milestone: streak.getStreakMilestone(streak.streakData.currentStreak),
      message: streak.getMotivationalMessage(streak.streakData.currentStreak),
      isAtRisk: streak.isStreakAtRisk(),
      hasFreeze: streak.hasStreakFreeze()
    }
  };
};

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
  STREAK_BONUS_30DAY: 100,
  GENERATE_CMA: 75,
  ADD_COMP: 5,
  MAKE_ADJUSTMENT: 3,
  GENERATE_PDF: 25,
  USE_MAP: 10,
  GENERATE_CHART: 15,
  SAVE_CMA: 20
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
  },
  {
    id: 'financing-novice',
    title: 'Financing Novice',
    description: 'Complete 5 quiz questions on financing topics',
    icon: '💰',
    requirement: (stats) => stats.financingQuestionsCorrect >= 5
  },
  {
    id: 'financing-expert',
    title: 'Financing Expert',
    description: 'Master 20 financing quiz questions',
    icon: '🏦',
    requirement: (stats) => stats.financingQuestionsCorrect >= 20
  },
  {
    id: 'arm-specialist',
    title: 'ARM Specialist',
    description: 'Answer all 5 ARM questions correctly',
    icon: '📊',
    requirement: (stats) => stats.armQuestionsCorrect >= 5
  },
  {
    id: 'foreclosure-pro',
    title: 'Foreclosure Pro',
    description: 'Master foreclosure & default questions',
    icon: '🏚️',
    requirement: (stats) => stats.foreclosureQuestionsCorrect >= 5
  },
  {
    id: 'fed-master',
    title: 'Federal Reserve Master',
    description: 'Answer all Federal Reserve questions correctly',
    icon: '🏛️',
    requirement: (stats) => stats.fedQuestionsCorrect >= 7
  },
  {
    id: 'dodd-frank-scholar',
    title: 'Dodd-Frank Scholar',
    description: 'Master all Dodd-Frank Act questions',
    icon: '⚖️',
    requirement: (stats) => stats.doddFrankQuestionsCorrect >= 4
  },
  {
    id: 'mortgage-clause-master',
    title: 'Mortgage Clause Master',
    description: 'Know all mortgage clauses (Assignment, Estoppel, etc.)',
    icon: '📜',
    requirement: (stats) => stats.clauseQuestionsCorrect >= 4
  },
  {
    id: 'amortization-ace',
    title: 'Amortization Ace',
    description: 'Understand the 50/50 milestone & payment breakdown',
    icon: '📈',
    requirement: (stats) => stats.amortizationQuestionsCorrect >= 2
  },
  {
    id: 'ma-foreclosure-expert',
    title: 'MA Foreclosure Expert',
    description: 'Master Massachusetts-specific foreclosure rules',
    icon: '🏛️',
    requirement: (stats) => stats.maForeclosureQuestionsCorrect >= 2
  },
  {
    id: 'comprehensive-quiz-10',
    title: 'Quiz Marathon',
    description: 'Complete 10 quizzes with 80%+ score',
    icon: '🏃',
    requirement: (stats) => stats.quizzesAbove80 >= 10
  },
  {
    id: 'comprehensive-quiz-25',
    title: 'Quiz Legend',
    description: 'Complete 25 quizzes with 80%+ score',
    icon: '👑',
    requirement: (stats) => stats.quizzesAbove80 >= 25
  },
  {
    id: 'perfect-streak-3',
    title: 'Triple Perfect',
    description: 'Get 3 perfect scores in a row',
    icon: '🔥',
    requirement: (stats) => stats.perfectStreakMax >= 3
  },
  {
    id: 'speed-demon',
    title: 'Speed Demon',
    description: 'Complete a timed quiz in under 30 minutes',
    icon: '⚡',
    requirement: (stats) => stats.fastestQuizTime > 0 && stats.fastestQuizTime <= 1800
  },
  {
    id: 'financing-mastery',
    title: 'Financing Mastery',
    description: 'Get 90%+ on all new financing questions',
    icon: '💎',
    requirement: (stats) => stats.financingMasteryScore >= 90
  },
  {
    id: 'xp-10000',
    title: 'Master Learner',
    description: 'Earn 10,000 XP',
    icon: '🌟',
    requirement: (stats) => stats.totalXP >= 10000
  },
  {
    id: 'section-master-24',
    title: 'Complete Guide Master',
    description: 'Master all 24 guide sections (updated)',
    icon: '🎓',
    requirement: (stats) => stats.masteredSections >= 24
  },
  {
    id: 'first-cma',
    title: 'First Analysis',
    description: 'Generate your first CMA report',
    icon: '📊',
    requirement: (stats) => stats.cmasGenerated >= 1
  },
  {
    id: 'cma-expert',
    title: 'CMA Expert',
    description: 'Generate 10 CMA reports',
    icon: '📈',
    requirement: (stats) => stats.cmasGenerated >= 10
  },
  {
    id: 'market-analyst',
    title: 'Market Analyst',
    description: 'Generate 25 CMA reports',
    icon: '💼',
    requirement: (stats) => stats.cmasGenerated >= 25
  },
  {
    id: 'property-evaluator',
    title: 'Property Evaluator',
    description: 'Analyze properties worth over $10M total',
    icon: '🏘️',
    requirement: (stats) => stats.totalPropertyValue >= 10000000
  },
  {
    id: 'comp-master',
    title: 'Comp Master',
    description: 'Add 50 comparable properties across all CMAs',
    icon: '🔍',
    requirement: (stats) => stats.totalCompsAdded >= 50
  },
  {
    id: 'adjustment-pro',
    title: 'Adjustment Pro',
    description: 'Make 100 property adjustments',
    icon: '⚖️',
    requirement: (stats) => stats.totalAdjustments >= 100
  },
  {
    id: 'report-generator',
    title: 'Report Generator',
    description: 'Download 5 professional PDF reports',
    icon: '📄',
    requirement: (stats) => stats.pdfReportsGenerated >= 5
  },
  {
    id: 'map-navigator',
    title: 'Map Navigator',
    description: 'Use interactive map feature 10 times',
    icon: '🗺️',
    requirement: (stats) => stats.mapViewsUsed >= 10
  },
  {
    id: 'chart-visualizer',
    title: 'Chart Visualizer',
    description: 'Generate 15 market analysis charts',
    icon: '📉',
    requirement: (stats) => stats.chartsGenerated >= 15
  },
  {
    id: 'market-trends-analyst',
    title: 'Market Trends Analyst',
    description: 'Analyze market trends for 5 different areas',
    icon: '📍',
    requirement: (stats) => stats.uniqueAreasAnalyzed >= 5
  },
  {
    id: 'detailed-analyst',
    title: 'Detailed Analyst',
    description: 'Add detailed notes to 10 CMAs',
    icon: '📝',
    requirement: (stats) => stats.cmasWithNotes >= 10
  },
  {
    id: 'presentation-ready',
    title: 'Presentation Ready',
    description: 'Save 3 CMAs for client presentations',
    icon: '💾',
    requirement: (stats) => stats.cmasSaved >= 3
  },
  {
    id: 'advanced-cma-user',
    title: 'Advanced CMA User',
    description: 'Use all CMA features (comps, adjustments, maps, charts, PDF)',
    icon: '🎯',
    requirement: (stats) => stats.cmasGenerated >= 1 && stats.totalCompsAdded >= 3 && 
                            stats.totalAdjustments >= 5 && stats.mapViewsUsed >= 1 && 
                            stats.chartsGenerated >= 1 && stats.pdfReportsGenerated >= 1
  },
  {
    id: 'valuation-master',
    title: 'Valuation Master',
    description: 'Generate 5 CMAs with accurate price ranges (within 10%)',
    icon: '🎖️',
    requirement: (stats) => stats.accurateCMAs >= 5
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
      unlockedAchievements: [],
      // New financing-related stats
      financingQuestionsCorrect: 0,
      armQuestionsCorrect: 0,
      foreclosureQuestionsCorrect: 0,
      fedQuestionsCorrect: 0,
      doddFrankQuestionsCorrect: 0,
      clauseQuestionsCorrect: 0,
      amortizationQuestionsCorrect: 0,
      maForeclosureQuestionsCorrect: 0,
      quizzesAbove80: 0,
      perfectStreakMax: 0,
      perfectStreakCurrent: 0,
      fastestQuizTime: 0,
      financingMasteryScore: 0,
      // CMA-related stats
      cmasGenerated: 0,
      totalPropertyValue: 0,
      totalCompsAdded: 0,
      totalAdjustments: 0,
      pdfReportsGenerated: 0,
      mapViewsUsed: 0,
      chartsGenerated: 0,
      uniqueAreasAnalyzed: 0,
      cmasWithNotes: 0,
      cmasSaved: 0,
      accurateCMAs: 0,
      analyzedAreas: []
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
          updates.perfectStreakCurrent = stats.perfectStreakCurrent + 1;
          updates.perfectStreakMax = Math.max(stats.perfectStreakMax, updates.perfectStreakCurrent);
        } else {
          updates.perfectStreakCurrent = 0;
        }
        
        if (data.above80) {
          updates.quizzesAbove80 = stats.quizzesAbove80 + 1;
        }
        
        if (data.totalTime > 0) {
          if (stats.fastestQuizTime === 0 || data.totalTime < stats.fastestQuizTime) {
            updates.fastestQuizTime = data.totalTime;
          }
        }
        
        // Track category-specific correct answers
        if (data.categoryStats) {
          updates.financingQuestionsCorrect = stats.financingQuestionsCorrect + data.categoryStats.financing;
          updates.armQuestionsCorrect = stats.armQuestionsCorrect + data.categoryStats.arm;
          updates.foreclosureQuestionsCorrect = stats.foreclosureQuestionsCorrect + data.categoryStats.foreclosure;
          updates.fedQuestionsCorrect = stats.fedQuestionsCorrect + data.categoryStats.fed;
          updates.doddFrankQuestionsCorrect = stats.doddFrankQuestionsCorrect + data.categoryStats.doddFrank;
          updates.clauseQuestionsCorrect = stats.clauseQuestionsCorrect + data.categoryStats.clause;
          updates.amortizationQuestionsCorrect = stats.amortizationQuestionsCorrect + data.categoryStats.amortization;
          updates.maForeclosureQuestionsCorrect = stats.maForeclosureQuestionsCorrect + data.categoryStats.maForeclosure;
          
          // Calculate financing mastery score
          const totalFinancingQuestions = data.categoryStats.financing + data.categoryStats.arm + 
                                          data.categoryStats.foreclosure + data.categoryStats.fed +
                                          data.categoryStats.doddFrank + data.categoryStats.clause +
                                          data.categoryStats.amortization + data.categoryStats.maForeclosure;
          if (totalFinancingQuestions > 0) {
            const correctFinancing = Object.values(data.categoryStats).reduce((sum, val) => sum + val, 0);
            updates.financingMasteryScore = Math.round((correctFinancing / totalFinancingQuestions) * 100);
          }
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

      case 'GENERATE_CMA':
        xpAmount = XP_VALUES.GENERATE_CMA;
        updates.cmasGenerated = stats.cmasGenerated + 1;
        
        if (data.propertyValue) {
          updates.totalPropertyValue = stats.totalPropertyValue + data.propertyValue;
        }
        
        if (data.hasNotes) {
          updates.cmasWithNotes = stats.cmasWithNotes + 1;
        }
        
        if (data.isAccurate) {
          updates.accurateCMAs = stats.accurateCMAs + 1;
        }
        
        if (data.area) {
          const areas = stats.analyzedAreas || [];
          if (!areas.includes(data.area)) {
            updates.analyzedAreas = [...areas, data.area];
            updates.uniqueAreasAnalyzed = (stats.uniqueAreasAnalyzed || 0) + 1;
          }
        }
        break;

      case 'ADD_COMP':
        xpAmount = XP_VALUES.ADD_COMP;
        updates.totalCompsAdded = stats.totalCompsAdded + 1;
        break;

      case 'MAKE_ADJUSTMENT':
        xpAmount = XP_VALUES.MAKE_ADJUSTMENT;
        updates.totalAdjustments = stats.totalAdjustments + 1;
        break;

      case 'GENERATE_PDF':
        xpAmount = XP_VALUES.GENERATE_PDF;
        updates.pdfReportsGenerated = stats.pdfReportsGenerated + 1;
        break;

      case 'USE_MAP':
        xpAmount = XP_VALUES.USE_MAP;
        updates.mapViewsUsed = stats.mapViewsUsed + 1;
        break;

      case 'GENERATE_CHART':
        xpAmount = XP_VALUES.GENERATE_CHART;
        updates.chartsGenerated = stats.chartsGenerated + 1;
        break;

      case 'SAVE_CMA':
        xpAmount = XP_VALUES.SAVE_CMA;
        updates.cmasSaved = stats.cmasSaved + 1;
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

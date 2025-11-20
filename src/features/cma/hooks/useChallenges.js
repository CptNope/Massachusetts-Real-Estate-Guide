import { useState } from 'react';

/**
 * Custom hook for Challenge Management
 * Manages CMA challenges, progress, and completion
 */
export const useChallenges = (gamification) => {
  const [activeChallenge, setActiveChallenge] = useState(null);
  const [challengeStartTime, setChallengeStartTime] = useState(null);
  const [challengeProgress, setChallengeProgress] = useState({});
  
  /**
   * Start a challenge
   * @param {Object} challenge - Challenge object from cmaChallenges
   */
  const startChallenge = (challenge) => {
    setActiveChallenge(challenge);
    setChallengeStartTime(Date.now());
    setChallengeProgress({});
    
    // Track with gamification
    if (gamification) {
      gamification.recordActivity('challenge_started');
    }
  };

  /**
   * Complete current challenge
   * @param {boolean} success - Whether challenge was completed successfully
   */
  const completeChallenge = (success = true) => {
    if (!activeChallenge) return;

    const timeElapsed = Date.now() - challengeStartTime;
    const timeMinutes = Math.floor(timeElapsed / 60000);
    
    if (success && gamification) {
      // Award XP based on difficulty
      const xpReward = activeChallenge.difficulty === 'hard' ? 100 :
                       activeChallenge.difficulty === 'medium' ? 75 : 50;
      
      gamification.addXP(xpReward, `Challenge: ${activeChallenge.title}`);
      gamification.recordActivity('challenge_completed');
      
      // Bonus for fast completion
      if (timeMinutes < 10) {
        gamification.addXP(25, 'Speed bonus');
      }
    }

    return {
      challenge: activeChallenge,
      success,
      timeElapsed,
      timeMinutes
    };
  };

  /**
   * Abort current challenge
   */
  const abortChallenge = () => {
    setActiveChallenge(null);
    setChallengeStartTime(null);
    setChallengeProgress({});
  };

  /**
   * Update challenge progress
   * @param {string} step - Progress step
   * @param {any} value - Progress value
   */
  const updateProgress = (step, value) => {
    setChallengeProgress(prev => ({
      ...prev,
      [step]: value
    }));
  };

  /**
   * Check if challenge requirement is met
   * @param {string} requirement - Requirement key
   * @param {any} currentValue - Current value to check
   * @returns {boolean}
   */
  const checkRequirement = (requirement, currentValue) => {
    if (!activeChallenge || !activeChallenge.requirements) return false;
    
    const req = activeChallenge.requirements[requirement];
    if (!req) return false;
    
    return currentValue >= req;
  };

  /**
   * Get challenge progress percentage
   * @param {Object} currentState - Current CMA state
   * @returns {number} Progress percentage (0-100)
   */
  const getProgressPercentage = (currentState) => {
    if (!activeChallenge || !activeChallenge.requirements) return 0;
    
    const requirements = activeChallenge.requirements;
    const totalReqs = Object.keys(requirements).length;
    let metReqs = 0;
    
    if (requirements.comps && currentState.activeComps >= requirements.comps) metReqs++;
    if (requirements.analysis && currentState.hasAnalysis) metReqs++;
    if (requirements.notes && currentState.notesLength >= requirements.notes) metReqs++;
    if (requirements.branding && currentState.hasBranding) metReqs++;
    
    return Math.round((metReqs / totalReqs) * 100);
  };

  /**
   * Get time remaining (for timed challenges)
   * @returns {number|null} Minutes remaining or null if no time limit
   */
  const getTimeRemaining = () => {
    if (!activeChallenge || !activeChallenge.timeLimit || !challengeStartTime) {
      return null;
    }
    
    const elapsed = Date.now() - challengeStartTime;
    const remaining = (activeChallenge.timeLimit * 60000) - elapsed;
    
    return Math.max(0, Math.floor(remaining / 60000));
  };

  return {
    // State
    activeChallenge,
    challengeStartTime,
    challengeProgress,
    
    // Actions
    startChallenge,
    completeChallenge,
    abortChallenge,
    updateProgress,
    
    // Queries
    checkRequirement,
    getProgressPercentage,
    getTimeRemaining
  };
};

export default useChallenges;

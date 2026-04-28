// useProgress.js — スコア・レベル管理フック

import { useState, useCallback } from 'react';
import { getLevelFromXP, didLevelUp, XP_PER_CORRECT, XP_PER_EXPLANATION_READ } from '../utils/levelSystem';

const STORAGE_KEY = 'photo_eye_progress';

const DEFAULT_PROGRESS = {
  level: 1,
  xp: 0,
  totalCorrect: 0,
  totalAnswered: 0,
  history: [],
};

const loadProgress = () => {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    return saved ? { ...DEFAULT_PROGRESS, ...JSON.parse(saved) } : { ...DEFAULT_PROGRESS };
  } catch {
    return { ...DEFAULT_PROGRESS };
  }
};

const saveProgress = (progress) => {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
  } catch {
    // localStorage unavailable
  }
};

export const useProgress = () => {
  const [progress, setProgress] = useState(loadProgress);
  const [levelUpEvent, setLevelUpEvent] = useState(null); // { from, to }

  const updateProgress = useCallback((updater) => {
    setProgress((prev) => {
      const next = updater(prev);
      saveProgress(next);
      return next;
    });
  }, []);

  /**
   * XPを加算し、レベルアップ判定を行う
   */
  const addXP = useCallback((amount) => {
    setProgress((prev) => {
      const oldXP = prev.xp;
      const newXP = prev.xp + amount;
      const newLevel = getLevelFromXP(newXP);

      if (didLevelUp(oldXP, newXP)) {
        const oldLevel = getLevelFromXP(oldXP);
        setLevelUpEvent({ from: oldLevel.level, to: newLevel.level });
      }

      const next = {
        ...prev,
        xp: newXP,
        level: newLevel.level,
      };
      saveProgress(next);
      return next;
    });
  }, []);

  /**
   * 問題回答を記録する
   */
  const recordAnswer = useCallback((questionId, correct, axisLabel) => {
    updateProgress((prev) => ({
      ...prev,
      totalCorrect: prev.totalCorrect + (correct ? 1 : 0),
      totalAnswered: prev.totalAnswered + 1,
      history: [
        ...prev.history,
        { questionId, correct, axisLabel, timestamp: Date.now() },
      ].slice(-200), // 最新200件のみ保持
    }));

    if (correct) {
      addXP(XP_PER_CORRECT);
    }
  }, [updateProgress, addXP]);

  /**
   * 解説を読んだときのXP加算
   */
  const addExplanationXP = useCallback(() => {
    addXP(XP_PER_EXPLANATION_READ);
  }, [addXP]);

  /**
   * 進捗リセット
   */
  const resetProgress = useCallback(() => {
    const fresh = { ...DEFAULT_PROGRESS };
    setProgress(fresh);
    saveProgress(fresh);
    setLevelUpEvent(null);
  }, []);

  /**
   * 正答率（%）
   */
  const getAccuracyRate = useCallback(() => {
    if (progress.totalAnswered === 0) return 0;
    return Math.round((progress.totalCorrect / progress.totalAnswered) * 100);
  }, [progress.totalCorrect, progress.totalAnswered]);

  /**
   * レベルアップイベントをクリア
   */
  const clearLevelUpEvent = useCallback(() => {
    setLevelUpEvent(null);
  }, []);

  return {
    progress,
    levelUpEvent,
    addXP,
    recordAnswer,
    addExplanationXP,
    resetProgress,
    getAccuracyRate,
    clearLevelUpEvent,
  };
};

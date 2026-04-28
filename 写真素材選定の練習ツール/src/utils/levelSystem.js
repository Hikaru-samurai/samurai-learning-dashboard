// levelSystem.js — レベルアップロジック

export const LEVELS = [
  {
    level: 1,
    name: "見習い",
    axis: "露出・ピント（技術的品質）",
    choices: 2,
    requiredXP: 0,
    color: "#9CA3AF",
    emoji: "📷",
  },
  {
    level: 2,
    name: "見習い+",
    axis: "構図・トリミング余地",
    choices: 2,
    requiredXP: 100,
    color: "#60A5FA",
    emoji: "🔍",
  },
  {
    level: 3,
    name: "中級者",
    axis: "素材感（リアル vs. ストック臭）",
    choices: 3,
    requiredXP: 250,
    color: "#34D399",
    emoji: "🎯",
  },
  {
    level: 4,
    name: "上級者",
    axis: "文脈への合致（業種・シーン）",
    choices: 3,
    requiredXP: 450,
    color: "#F5C842",
    emoji: "🌟",
  },
  {
    level: 5,
    name: "プロの目",
    axis: "ターゲット共感度・総合判断",
    choices: 4,
    requiredXP: 700,
    color: "#F87171",
    emoji: "👁",
  },
];

export const MAX_LEVEL = 5;
export const XP_PER_CORRECT = 20;
export const XP_PER_EXPLANATION_READ = 5;
export const QUESTIONS_PER_SESSION = 10;

/**
 * XPから現在のレベルを計算する
 */
export const getLevelFromXP = (xp) => {
  let currentLevel = LEVELS[0];
  for (const lvl of LEVELS) {
    if (xp >= lvl.requiredXP) {
      currentLevel = lvl;
    } else {
      break;
    }
  }
  return currentLevel;
};

/**
 * 次のレベルの情報を返す（最大レベルならnull）
 */
export const getNextLevel = (currentLevel) => {
  const idx = LEVELS.findIndex((l) => l.level === currentLevel);
  return idx < LEVELS.length - 1 ? LEVELS[idx + 1] : null;
};

/**
 * 現在のXPに対するレベル内の進捗率（0〜1）
 */
export const getLevelProgress = (xp) => {
  const current = getLevelFromXP(xp);
  const next = getNextLevel(current.level);
  if (!next) return 1; // 最大レベルは100%
  const range = next.requiredXP - current.requiredXP;
  const progress = xp - current.requiredXP;
  return Math.min(progress / range, 1);
};

/**
 * 次のレベルまで必要なXP
 */
export const getXPToNextLevel = (xp) => {
  const next = getNextLevel(getLevelFromXP(xp).level);
  if (!next) return 0;
  return next.requiredXP - xp;
};

/**
 * レベルアップが発生するか判定
 * oldXP → newXP でレベルが変わったらtrueを返す
 */
export const didLevelUp = (oldXP, newXP) => {
  const oldLevel = getLevelFromXP(oldXP);
  const newLevel = getLevelFromXP(newXP);
  return newLevel.level > oldLevel.level;
};

/**
 * セッション結果の弱点評価軸を返す
 */
export const getWeakAxis = (sessionResults) => {
  const axisCounts = {};
  const axisCorrect = {};

  for (const r of sessionResults) {
    const axis = r.axisLabel || r.axis;
    axisCounts[axis] = (axisCounts[axis] || 0) + 1;
    axisCorrect[axis] = (axisCorrect[axis] || 0) + (r.correct ? 1 : 0);
  }

  let weakAxis = null;
  let lowestRate = 1;

  for (const axis of Object.keys(axisCounts)) {
    const rate = axisCorrect[axis] / axisCounts[axis];
    if (rate < lowestRate) {
      lowestRate = rate;
      weakAxis = axis;
    }
  }

  return weakAxis;
};

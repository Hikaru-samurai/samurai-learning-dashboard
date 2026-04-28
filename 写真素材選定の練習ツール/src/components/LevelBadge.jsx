// LevelBadge.jsx — レベルバッジ + XPバー表示

import { LEVELS, getLevelFromXP, getNextLevel, getLevelProgress, getXPToNextLevel } from '../utils/levelSystem';

const LevelBadge = ({ xp, compact = false }) => {
  const current = getLevelFromXP(xp);
  const next = getNextLevel(current.level);
  const progress = getLevelProgress(xp);
  const xpToNext = getXPToNextLevel(xp);

  if (compact) {
    return (
      <span
        className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-sm font-medium font-sans"
        style={{ backgroundColor: `${current.color}22`, color: current.color, border: `1px solid ${current.color}44` }}
      >
        <span>{current.emoji}</span>
        <span>Lv.{current.level} {current.name}</span>
      </span>
    );
  }

  return (
    <div className="w-full">
      {/* レベルバッジ */}
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center gap-2">
          <span className="text-2xl">{current.emoji}</span>
          <div>
            <div className="flex items-center gap-2">
              <span
                className="text-xs font-sans font-medium px-2 py-0.5 rounded-full"
                style={{ backgroundColor: `${current.color}22`, color: current.color }}
              >
                Lv.{current.level}
              </span>
              <span className="font-sans font-semibold text-white text-sm">{current.name}</span>
            </div>
            <p className="text-xs text-gray-500 font-sans mt-0.5">{current.axis}</p>
          </div>
        </div>
        <div className="text-right">
          <span className="text-accent font-sans font-bold text-lg">{xp}</span>
          <span className="text-gray-500 text-xs font-sans"> XP</span>
        </div>
      </div>

      {/* XPプログレスバー */}
      <div className="relative">
        <div className="w-full h-2 bg-surface rounded-full overflow-hidden">
          <div
            className="h-full rounded-full transition-all duration-700 ease-out"
            style={{
              width: `${progress * 100}%`,
              background: `linear-gradient(90deg, ${current.color}88, ${current.color})`,
            }}
          />
        </div>
        {next && (
          <div className="flex justify-between mt-1">
            <span className="text-xs text-gray-600 font-sans">{current.name}</span>
            <span className="text-xs font-sans" style={{ color: current.color }}>
              次のレベルまで {xpToNext} XP
            </span>
          </div>
        )}
        {!next && (
          <p className="text-xs text-accent font-sans mt-1 text-center">最高レベル到達！</p>
        )}
      </div>
    </div>
  );
};

export default LevelBadge;

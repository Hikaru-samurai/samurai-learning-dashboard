// ResultScreen.jsx — セッション終了後のスコア表示

import { motion } from 'framer-motion';
import LevelBadge from './LevelBadge';
import { getLevelFromXP, getWeakAxis, QUESTIONS_PER_SESSION, XP_PER_CORRECT } from '../utils/levelSystem';

const ResultScreen = ({ sessionResults, xpGained, progress, prevXP, onRestart }) => {
  const correctCount = sessionResults.filter((r) => r.correct).length;
  const total = sessionResults.length;
  const percentage = Math.round((correctCount / total) * 100);
  const weakAxis = getWeakAxis(sessionResults);
  const currentLevel = getLevelFromXP(progress.xp);
  const prevLevel = getLevelFromXP(prevXP);
  const leveledUp = currentLevel.level > prevLevel.level;

  const getGrade = () => {
    if (percentage >= 90) return { grade: 'S', color: '#F5C842', msg: '完璧！プロの審美眼です！' };
    if (percentage >= 70) return { grade: 'A', color: '#4ADE80', msg: '素晴らしい！着実に成長しています。' };
    if (percentage >= 50) return { grade: 'B', color: '#60A5FA', msg: 'まずまずの出来。もう少しで上達できます！' };
    return { grade: 'C', color: '#F87171', msg: '繰り返し練習で必ず上達します！' };
  };

  const { grade, color, msg } = getGrade();

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen flex flex-col items-center justify-center px-4 py-12 font-sans"
    >
      {/* グレードサークル */}
      <motion.div
        initial={{ scale: 0.5, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.1, duration: 0.6, ease: [0.34, 1.56, 0.64, 1] }}
        className="relative mb-8"
      >
        <div
          className="w-32 h-32 rounded-full flex items-center justify-center"
          style={{
            background: `radial-gradient(circle, ${color}22 0%, ${color}08 100%)`,
            border: `3px solid ${color}`,
          }}
        >
          <span className="font-serif text-6xl font-bold" style={{ color }}>{grade}</span>
        </div>
      </motion.div>

      {/* スコア */}
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="text-center mb-8"
      >
        <h2 className="font-serif text-4xl text-white mb-2">
          {correctCount} / {total} 正解
        </h2>
        <p className="text-gray-400 text-sm">{msg}</p>
      </motion.div>

      {/* 詳細カード */}
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="w-full max-w-md space-y-4 mb-8"
      >
        {/* XP獲得 */}
        <div
          className="rounded-2xl p-5"
          style={{ background: '#1A1A1A', border: '1px solid #2E2E2E' }}
        >
          <div className="flex items-center justify-between mb-4">
            <span className="text-gray-400 text-sm">獲得XP</span>
            <span className="text-accent font-bold text-xl">+{xpGained} XP</span>
          </div>
          <LevelBadge xp={progress.xp} />
        </div>

        {/* 弱点フィードバック */}
        {weakAxis && (
          <div
            className="rounded-2xl p-5"
            style={{ background: '#1A1A1A', border: '1px solid #F5C84230' }}
          >
            <p className="text-xs text-accent font-semibold mb-2">弱点フィードバック</p>
            <p className="text-white text-sm leading-relaxed">
              <span className="font-semibold text-accent">「{weakAxis}」</span>
              の問題が苦手なようです。意識して練習しましょう！
            </p>
          </div>
        )}

        {/* 問題別結果 */}
        <div
          className="rounded-2xl p-5"
          style={{ background: '#1A1A1A', border: '1px solid #2E2E2E' }}
        >
          <p className="text-xs text-gray-500 mb-3">問題別結果</p>
          <div className="flex gap-1.5 flex-wrap">
            {sessionResults.map((r, i) => (
              <div
                key={i}
                className="w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold"
                style={{
                  background: r.correct ? '#4ADE8020' : '#F8717120',
                  color: r.correct ? '#4ADE80' : '#F87171',
                  border: `1px solid ${r.correct ? '#4ADE8040' : '#F8717140'}`,
                }}
                title={`問題 ${i + 1}: ${r.correct ? '正解' : '不正解'}`}
              >
                {i + 1}
              </div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* レスタートボタン */}
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.4 }}
        className="w-full max-w-md"
      >
        <motion.button
          onClick={onRestart}
          className="w-full py-4 rounded-2xl font-bold text-bg text-lg transition-all"
          style={{ background: '#F5C842' }}
          whileHover={{ scale: 1.02, backgroundColor: '#F0BE30' }}
          whileTap={{ scale: 0.97 }}
        >
          {percentage <= 60 ? 'もう一度やる' : 'もう1セット'}
        </motion.button>
      </motion.div>
    </motion.div>
  );
};

export default ResultScreen;

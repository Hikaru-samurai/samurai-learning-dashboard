// StartScreen.jsx — タイトル・レベル表示・スタートボタン

import { useState } from 'react';
import { motion } from 'framer-motion';
import LevelBadge from './LevelBadge';
import { getLevelFromXP } from '../utils/levelSystem';

const StartScreen = ({ progress, getAccuracyRate, onStart, onReset }) => {
  const [showConfirm, setShowConfirm] = useState(false);
  const level = getLevelFromXP(progress.xp);

  const handleReset = () => {
    onReset();
    setShowConfirm(false);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen flex flex-col items-center justify-center px-4 py-12 font-sans"
    >
      {/* ヘッダー */}
      <div className="text-center mb-10">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.1, duration: 0.5 }}
          className="text-6xl mb-4"
        >
          👁
        </motion.div>
        <h1 className="font-serif text-5xl sm:text-6xl font-bold text-white mb-3">
          Photo Eye
        </h1>
        <p className="text-gray-400 text-base">
          デザイナーの審美眼を鍛えるトレーニング
        </p>
      </div>

      {/* ステータスカード */}
      <div
        className="w-full max-w-md rounded-2xl p-6 mb-6 space-y-5"
        style={{ background: '#1A1A1A', border: '1px solid #2E2E2E' }}
      >
        {/* レベルバッジ */}
        <LevelBadge xp={progress.xp} />

        {/* ステータスライン */}
        <div
          className="h-px w-full"
          style={{ background: '#2E2E2E' }}
        />

        {/* スタッツ */}
        <div className="grid grid-cols-3 gap-4 text-center">
          <div>
            <p className="text-accent font-bold text-2xl">{progress.totalAnswered}</p>
            <p className="text-gray-500 text-xs mt-0.5">総回答数</p>
          </div>
          <div>
            <p className="text-correct font-bold text-2xl">{progress.totalCorrect}</p>
            <p className="text-gray-500 text-xs mt-0.5">正解数</p>
          </div>
          <div>
            <p className="text-white font-bold text-2xl">{getAccuracyRate()}%</p>
            <p className="text-gray-500 text-xs mt-0.5">正答率</p>
          </div>
        </div>

        {/* 現在のレベル説明 */}
        <div
          className="rounded-xl p-4"
          style={{ background: '#242424' }}
        >
          <p className="text-xs text-gray-500 mb-1">今回のトレーニング評価軸</p>
          <p className="text-white text-sm font-medium">
            {level.emoji} {level.axis}
          </p>
          <p className="text-gray-500 text-xs mt-1">
            {level.choices}択問題 × 10問
          </p>
        </div>
      </div>

      {/* ボタン群 */}
      <div className="w-full max-w-md space-y-3">
        <motion.button
          onClick={onStart}
          className="w-full py-4 rounded-2xl font-bold text-bg text-lg transition-all"
          style={{ background: '#F5C842' }}
          whileHover={{ scale: 1.02, backgroundColor: '#F0BE30' }}
          whileTap={{ scale: 0.97 }}
        >
          トレーニング開始
        </motion.button>

        {progress.totalAnswered > 0 && (
          <>
            {!showConfirm ? (
              <button
                onClick={() => setShowConfirm(true)}
                className="w-full py-3 rounded-xl text-gray-600 text-sm font-medium transition-colors hover:text-gray-400"
              >
                進捗をリセット
              </button>
            ) : (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="rounded-xl p-4 text-center space-y-3"
                style={{ background: '#1A1A1A', border: '1px solid #F8717140' }}
              >
                <p className="text-sm text-gray-300">本当にリセットしますか？XPと進捗がすべて失われます。</p>
                <div className="flex gap-3">
                  <button
                    onClick={() => setShowConfirm(false)}
                    className="flex-1 py-2 rounded-lg text-sm font-medium text-gray-400 transition-colors hover:text-white"
                    style={{ border: '1px solid #2E2E2E' }}
                  >
                    キャンセル
                  </button>
                  <button
                    onClick={handleReset}
                    className="flex-1 py-2 rounded-lg text-sm font-semibold transition-colors"
                    style={{ background: '#F8717120', color: '#F87171', border: '1px solid #F8717140' }}
                  >
                    リセットする
                  </button>
                </div>
              </motion.div>
            )}
          </>
        )}
      </div>

      {/* フッター */}
      <p className="text-gray-700 text-xs mt-8 font-sans text-center">
        Photos by{' '}
        <a
          href="https://unsplash.com"
          target="_blank"
          rel="noopener noreferrer"
          className="underline hover:text-gray-500 transition-colors"
        >
          Unsplash
        </a>
      </p>
    </motion.div>
  );
};

export default StartScreen;

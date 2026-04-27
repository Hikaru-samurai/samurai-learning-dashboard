// FeedbackPanel.jsx — 正誤フィードバック + 解説パネル

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { XP_PER_EXPLANATION_READ } from '../utils/levelSystem';

const FeedbackPanel = ({ question, selectedIndex, shuffledCorrectIndex, onNext, onExplanationRead }) => {
  const isCorrect = selectedIndex === shuffledCorrectIndex;
  const [explanationRead, setExplanationRead] = useState(false);

  const handleReadExplanation = () => {
    if (!explanationRead) {
      setExplanationRead(true);
      onExplanationRead?.();
    }
  };

  return (
    <motion.div
      initial={{ y: 60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
      className="w-full rounded-2xl overflow-hidden font-sans"
      style={{ background: '#1A1A1A', border: `1px solid ${isCorrect ? '#4ADE8040' : '#F8717140'}` }}
    >
      {/* 正誤ヘッダー */}
      <div
        className="px-6 py-4 flex items-center gap-3"
        style={{ background: isCorrect ? '#4ADE8015' : '#F8717115' }}
      >
        <span className="text-2xl">{isCorrect ? '✓' : '✗'}</span>
        <div>
          <p
            className="font-semibold text-lg"
            style={{ color: isCorrect ? '#4ADE80' : '#F87171' }}
          >
            {isCorrect ? '正解！' : '不正解…'}
          </p>
          <p className="text-xs text-gray-400">
            {isCorrect ? '素晴らしい審美眼です！' : '解説を読んで次に活かしましょう。'}
          </p>
        </div>
        {isCorrect && (
          <span className="ml-auto text-accent font-bold text-sm">+{20} XP</span>
        )}
      </div>

      {/* 解説エリア */}
      <div className="px-6 py-5 space-y-4">
        {/* サマリー */}
        <p className="text-white text-sm leading-relaxed font-medium">
          {question.explanation.summary}
        </p>

        {/* 詳細解説ボタン */}
        <AnimatePresence>
          {!explanationRead ? (
            <motion.button
              onClick={handleReadExplanation}
              className="w-full py-2.5 rounded-xl text-sm font-medium transition-colors"
              style={{ background: '#242424', color: '#9CA3AF', border: '1px solid #2E2E2E' }}
              whileHover={{ backgroundColor: '#2E2E2E' }}
              exit={{ opacity: 0, height: 0 }}
            >
              詳細解説を読む (+{XP_PER_EXPLANATION_READ} XP)
            </motion.button>
          ) : (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              transition={{ duration: 0.3 }}
              className="space-y-3"
            >
              {/* 正解の解説 */}
              <div className="rounded-xl p-4" style={{ background: '#4ADE8010', border: '1px solid #4ADE8030' }}>
                <p className="text-xs text-correct font-semibold mb-1">正解の理由</p>
                <p className="text-sm text-gray-300 leading-relaxed">{question.explanation.correct}</p>
              </div>

              {/* 不正解の解説 */}
              {question.explanation.wrong.map((w, i) => (
                <div key={i} className="rounded-xl p-4" style={{ background: '#F8717110', border: '1px solid #F8717130' }}>
                  <p className="text-xs text-wrong font-semibold mb-1">選択肢 {i + 2} の問題点</p>
                  <p className="text-sm text-gray-300 leading-relaxed">{w}</p>
                </div>
              ))}

              {/* プロTip */}
              <div className="rounded-xl p-4" style={{ background: '#F5C84210', border: '1px solid #F5C84230' }}>
                <p className="text-sm text-accent leading-relaxed">{question.explanation.tip}</p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* 次へボタン */}
      <div className="px-6 pb-5">
        <motion.button
          onClick={onNext}
          className="w-full py-3.5 rounded-xl font-semibold text-sm text-bg transition-all"
          style={{ background: '#F5C842' }}
          whileHover={{ scale: 1.02, backgroundColor: '#F0BE30' }}
          whileTap={{ scale: 0.98 }}
        >
          次の問題へ →
        </motion.button>
      </div>
    </motion.div>
  );
};

export default FeedbackPanel;

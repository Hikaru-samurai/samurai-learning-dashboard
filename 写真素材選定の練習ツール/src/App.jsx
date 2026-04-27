// App.jsx — メインアプリケーション

import { useState, useCallback, useRef } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { useProgress } from './hooks/useProgress';
import { getLevelFromXP, QUESTIONS_PER_SESSION, XP_PER_EXPLANATION_READ } from './utils/levelSystem';
import { questions as allQuestions, shuffleArray as shuffleQuestions } from './data/questions';
import StartScreen from './components/StartScreen';
import QuizCard from './components/QuizCard';
import ProgressBar from './components/ProgressBar';
import ResultScreen from './components/ResultScreen';
import LevelBadge from './components/LevelBadge';

// 画面の状態
const SCREEN = {
  START: 'start',
  QUIZ: 'quiz',
  RESULT: 'result',
};

// レベルアップオーバーレイ
const LevelUpOverlay = ({ levelUpEvent, onClose }) => {
  if (!levelUpEvent) return null;
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center"
      style={{ background: 'rgba(0,0,0,0.85)' }}
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.5, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ type: 'spring', bounce: 0.5, duration: 0.7 }}
        className="text-center px-8 py-10 rounded-3xl"
        style={{ background: '#1A1A1A', border: '2px solid #F5C842' }}
      >
        <div className="text-6xl mb-4">🎉</div>
        <h2 className="font-serif text-4xl text-white mb-2">Level Up!</h2>
        <p className="text-accent font-sans text-lg font-semibold mb-1">
          Lv.{levelUpEvent.from} → Lv.{levelUpEvent.to}
        </p>
        <p className="text-gray-400 font-sans text-sm mt-3">タップして続ける</p>
      </motion.div>
    </motion.div>
  );
};

const buildSession = (level) => {
  const levelQuestions = allQuestions.filter((q) => q.level === level);
  const shuffled = shuffleQuestions(levelQuestions);
  return shuffled.slice(0, Math.min(QUESTIONS_PER_SESSION, shuffled.length));
};

export default function App() {
  const { progress, levelUpEvent, recordAnswer, addExplanationXP, resetProgress, getAccuracyRate, clearLevelUpEvent } = useProgress();

  const [screen, setScreen] = useState(SCREEN.START);
  const [sessionQuestions, setSessionQuestions] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [sessionResults, setSessionResults] = useState([]);
  const [sessionCorrect, setSessionCorrect] = useState(0);
  const [xpGained, setXpGained] = useState(0);
  const [waitingForNext, setWaitingForNext] = useState(false);
  const prevXPRef = useRef(0);

  const handleStart = useCallback(() => {
    const level = getLevelFromXP(progress.xp).level;
    const session = buildSession(level);
    setSessionQuestions(session);
    setCurrentIndex(0);
    setSessionResults([]);
    setSessionCorrect(0);
    setXpGained(0);
    setWaitingForNext(false);
    prevXPRef.current = progress.xp;
    setScreen(SCREEN.QUIZ);
  }, [progress.xp]);

  // QuizCardから呼ばれる: 回答時(goNext=false)と次へボタン時(goNext=true)
  const handleAnswer = useCallback((isCorrect, goNext = false) => {
    if (goNext) {
      // 次の問題 or 結果画面へ
      const nextIndex = currentIndex + 1;
      if (nextIndex >= sessionQuestions.length) {
        setScreen(SCREEN.RESULT);
      } else {
        setCurrentIndex(nextIndex);
        setWaitingForNext(false);
      }
      return;
    }

    // 初回回答
    const question = sessionQuestions[currentIndex];
    recordAnswer(question.id, isCorrect, question.axisLabel);
    setSessionResults((prev) => [
      ...prev,
      { correct: isCorrect, axis: question.axis, axisLabel: question.axisLabel },
    ]);
    if (isCorrect) {
      setSessionCorrect((c) => c + 1);
      setXpGained((x) => x + 20);
    }
    setWaitingForNext(true);
  }, [currentIndex, sessionQuestions, recordAnswer]);

  const handleExplanationRead = useCallback(() => {
    addExplanationXP();
    setXpGained((x) => x + XP_PER_EXPLANATION_READ);
  }, [addExplanationXP]);

  const currentQuestion = sessionQuestions[currentIndex];

  return (
    <div className="min-h-screen font-sans" style={{ background: '#0D0D0D' }}>
      <AnimatePresence mode="wait">
        {screen === SCREEN.START && (
          <motion.div key="start" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            <StartScreen
              progress={progress}
              getAccuracyRate={getAccuracyRate}
              onStart={handleStart}
              onReset={resetProgress}
            />
          </motion.div>
        )}

        {screen === SCREEN.QUIZ && currentQuestion && (
          <motion.div
            key={`quiz-${currentQuestion.id}`}
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -30 }}
            transition={{ duration: 0.3 }}
            className="max-w-2xl mx-auto px-4 py-8 space-y-6"
          >
            {/* クイズヘッダー */}
            <div className="flex items-center justify-between gap-4">
              <LevelBadge xp={progress.xp} compact />
              <button
                onClick={() => setScreen(SCREEN.START)}
                className="text-gray-600 hover:text-gray-400 transition-colors text-sm font-sans"
              >
                ← 終了
              </button>
            </div>

            <ProgressBar
              current={currentIndex + 1}
              total={sessionQuestions.length}
              correct={sessionCorrect}
            />

            <QuizCard
              key={currentQuestion.id}
              question={currentQuestion}
              onAnswer={handleAnswer}
              onExplanationRead={handleExplanationRead}
            />
          </motion.div>
        )}

        {screen === SCREEN.RESULT && (
          <motion.div key="result" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            <ResultScreen
              sessionResults={sessionResults}
              xpGained={xpGained}
              progress={progress}
              prevXP={prevXPRef.current}
              onRestart={handleStart}
            />
          </motion.div>
        )}
      </AnimatePresence>

      {/* レベルアップオーバーレイ */}
      <AnimatePresence>
        {levelUpEvent && (
          <LevelUpOverlay levelUpEvent={levelUpEvent} onClose={clearLevelUpEvent} />
        )}
      </AnimatePresence>
    </div>
  );
}

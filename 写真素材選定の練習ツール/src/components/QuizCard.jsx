// QuizCard.jsx — 写真クイズ本体（2〜4択）

import { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { useUnsplash } from '../hooks/useUnsplash';
import FeedbackPanel from './FeedbackPanel';

// スケルトンローディング
const PhotoSkeleton = () => (
  <div
    className="w-full aspect-video rounded-xl bg-surface relative overflow-hidden"
    style={{
      background: 'linear-gradient(90deg, #1A1A1A 25%, #242424 50%, #1A1A1A 75%)',
      backgroundSize: '1000px 100%',
      animation: 'shimmer 2s infinite linear',
    }}
  />
);

// プレースホルダー（取得失敗時）
const PhotoPlaceholder = ({ index }) => (
  <div className="w-full aspect-video rounded-xl bg-surface flex flex-col items-center justify-center gap-2 text-gray-600">
    <span className="text-3xl">🖼</span>
    <span className="text-xs font-sans">画像を読み込めませんでした</span>
  </div>
);

// 写真カード（1枚）
const PhotoOption = ({ photo, index, label, selected, correctIndex, shuffledCorrectIndex, onSelect, answered }) => {
  const isSelected = selected === index;
  const isCorrect = index === shuffledCorrectIndex;
  const showResult = answered;

  let borderColor = '#2E2E2E';
  let overlayColor = 'transparent';
  if (showResult && isSelected && isCorrect) borderColor = '#4ADE80';
  else if (showResult && isSelected && !isCorrect) borderColor = '#F87171';
  else if (showResult && isCorrect) borderColor = '#4ADE8066';

  return (
    <motion.button
      onClick={() => !answered && onSelect(index)}
      className="relative w-full rounded-xl overflow-hidden focus:outline-none focus-visible:ring-2 focus-visible:ring-accent"
      style={{ border: `2px solid ${borderColor}`, cursor: answered ? 'default' : 'pointer' }}
      whileHover={!answered ? { scale: 1.02 } : {}}
      whileTap={!answered ? { scale: 0.98 } : {}}
      transition={{ duration: 0.15 }}
      aria-label={`選択肢 ${label}`}
      disabled={answered}
    >
      {/* 写真 */}
      {photo ? (
        <img
          src={photo.url}
          alt={photo.alt || `選択肢 ${label}`}
          className="w-full aspect-video object-cover"
          loading="lazy"
        />
      ) : (
        <PhotoPlaceholder index={index} />
      )}

      {/* 選択ラベル */}
      <div
        className="absolute top-2 left-2 w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold font-sans"
        style={{
          background: showResult && isCorrect ? '#4ADE80' : showResult && isSelected ? '#F87171' : '#0D0D0DCC',
          color: showResult && (isCorrect || isSelected) ? '#0D0D0D' : '#fff',
        }}
      >
        {label}
      </div>

      {/* 正誤オーバーレイ */}
      {showResult && (
        <div
          className="absolute inset-0 flex items-center justify-center"
          style={{
            background: isCorrect ? '#4ADE8018' : isSelected ? '#F8717118' : 'transparent',
          }}
        >
          {isCorrect && (
            <span className="text-3xl drop-shadow-lg">✓</span>
          )}
          {isSelected && !isCorrect && (
            <span className="text-3xl drop-shadow-lg">✗</span>
          )}
        </div>
      )}

      {/* 著作者クレジット */}
      {photo?.author && (
        <div className="absolute bottom-0 right-0 px-2 py-1 text-xs text-white/50 font-sans"
          style={{ background: '#0D0D0D88' }}>
          📷 {photo.author}
        </div>
      )}
    </motion.button>
  );
};

const LABELS = ['A', 'B', 'C', 'D'];

const QuizCard = ({ question, onAnswer, onExplanationRead }) => {
  // 選択肢の順番をランダムシャッフル（マウント時に一度だけ確定）
  const shuffledOrder = useMemo(() => {
    const indices = question.unsplashQueries.map((_, i) => i);
    for (let i = indices.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [indices[i], indices[j]] = [indices[j], indices[i]];
    }
    return indices;
  }, [question.id]);

  // シャッフル後の正解位置
  const shuffledCorrectIndex = shuffledOrder.indexOf(question.correctIndex);

  // シャッフル後のクエリ順
  const shuffledQueries = shuffledOrder.map((i) => question.unsplashQueries[i]);

  const { photos, loading } = useUnsplash(shuffledQueries);

  const [selected, setSelected] = useState(null);
  const answered = selected !== null;

  const handleSelect = (idx) => {
    if (answered) return;
    setSelected(idx);
    onAnswer(idx === shuffledCorrectIndex);
  };

  const gridCols = question.unsplashQueries.length === 2
    ? 'grid-cols-1 sm:grid-cols-2'
    : question.unsplashQueries.length === 3
    ? 'grid-cols-1 sm:grid-cols-3'
    : 'grid-cols-2';

  return (
    <div className="w-full space-y-5 font-sans">
      {/* 問題ヘッダー */}
      <div className="space-y-2">
        <div className="flex items-center gap-2 flex-wrap">
          <span
            className="text-xs px-2 py-1 rounded-full font-medium"
            style={{ background: '#F5C84220', color: '#F5C842' }}
          >
            評価軸: {question.axisLabel}
          </span>
        </div>
        <p className="text-white text-base leading-relaxed">{question.scenario}</p>
      </div>

      {/* 写真グリッド */}
      <div className={`grid ${gridCols} gap-3`}>
        {shuffledQueries.map((_, displayIdx) => {
          const originalIdx = shuffledOrder[displayIdx];
          return loading ? (
            <PhotoSkeleton key={displayIdx} />
          ) : (
            <PhotoOption
              key={displayIdx}
              photo={photos[displayIdx]}
              index={displayIdx}
              label={LABELS[displayIdx]}
              selected={selected}
              shuffledCorrectIndex={shuffledCorrectIndex}
              onSelect={handleSelect}
              answered={answered}
            />
          );
        })}
      </div>

      {/* フィードバックパネル */}
      {answered && (
        <FeedbackPanel
          question={question}
          selectedIndex={selected}
          shuffledCorrectIndex={shuffledCorrectIndex}
          onNext={() => onAnswer(selected === shuffledCorrectIndex, true)}
          onExplanationRead={onExplanationRead}
        />
      )}
    </div>
  );
};

export default QuizCard;

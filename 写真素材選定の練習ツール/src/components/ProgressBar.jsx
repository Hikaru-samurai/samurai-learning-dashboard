// ProgressBar.jsx — 問題進捗バー

const ProgressBar = ({ current, total, correct }) => {
  const pct = (current / total) * 100;

  return (
    <div className="w-full font-sans">
      <div className="flex justify-between items-center mb-1.5 text-xs text-gray-500">
        <span>問題 {current} / {total}</span>
        <span className="text-correct">正解 {correct}問</span>
      </div>
      <div className="w-full h-1.5 bg-surface rounded-full overflow-hidden">
        <div
          className="h-full bg-accent rounded-full transition-all duration-500 ease-out"
          style={{ width: `${pct}%` }}
        />
      </div>
    </div>
  );
};

export default ProgressBar;

// src/components/ScoreGauge.jsx
import React from 'react';

export default function ScoreGauge({ score }) {
  const r = 86;
  const c = 2 * Math.PI * r;
  const dash = (score / 100) * c;
  const isLow = score < 50;
  return (
    <div className={`gauge ${isLow ? 'low' : ''}`}>
      <svg viewBox="0 0 200 200">
        <circle className="gauge-track" cx="100" cy="100" r={r} />
        <circle
          className="gauge-fill"
          cx="100" cy="100" r={r}
          strokeDasharray={`${dash} ${c}`}
        />
      </svg>
      <div className="gauge-num">
        <b>{score}</b>
        <i>EVIDENCE SCORE</i>
      </div>
    </div>
  );
}

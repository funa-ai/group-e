// src/sections/Hero.jsx
import React from 'react';

export default function Hero({ showGridBg = true }) {
  return (
    <header className="hero" id="top">
      {showGridBg && <div className="hero-grid-bg" />}
      <div className="hero-glow" />
      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        <h1>
          その<span className="strike">証拠</span>は、<br />
          もう<span className="accent">真実</span>を<br />証明できない。
        </h1>
        <p className="hero-sub">
          生成AIによるマルチモーダル偽造は、2026年に「人間の目で判別不能」のレベルに到達した。司法・行政・ジャーナリズムが依存してきたデジタル証拠の信頼基盤は、いま静かに崩壊している。<br />
          <strong style={{ color: 'var(--fg)' }}>AI生成真贋 Pro</strong>は、生成AI特有の痕跡を多角的に解析し、法廷で通用する「証拠能力スコア」と鑑定レポートを自動生成する、AI証拠鑑定エージェント SaaS です。
        </p>
        <div className="hero-actions">
          <a href="#cta" className="btn btn-primary">資料請求 <span className="arrow">→</span></a>
          <a href="#product" className="btn">プロダクトを見る</a>
        </div>

        <dl className="hero-meta">
          <div><dt>Detection Accuracy</dt><dd>99.4<span className="unit">%</span></dd></div>
          <div><dt>Time to Verdict</dt><dd>&lt; 90<span className="unit">秒</span></dd></div>
          <div><dt>Modalities</dt><dd>4<span className="unit">種類</span></dd></div>
          <div><dt>Pilot Partners</dt><dd>11<span className="unit">機関</span></dd></div>
        </dl>
      </div>
    </header>
  );
}

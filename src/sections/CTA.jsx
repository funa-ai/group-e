// src/sections/CTA.jsx
import React from 'react';

export default function CTA() {
  return (
    <section className="cta" id="cta">
      <div className="container">
        <div className="eyebrow"><span className="dot" /> SERIES A · ¥1.2B 調達中</div>
        <h2>「真実」を、<br />もう一度証明可能にする。</h2>
        <p>
          2026年は、デジタル証拠の信頼が再定義される最初の年です。私たちと共に AI 司法インフラを構築する投資家・パートナーを募集しています。
        </p>
        <div className="actions">
          <a href="#" className="btn btn-primary">投資家向け資料を請求 <span className="arrow">→</span></a>
          <a href="#" className="btn">技術ホワイトペーパー</a>
          <a href="#" className="btn btn-ghost">パイロット参加申込</a>
        </div>
        <div className="cta-meta">CONTACT · partners@ai-veritas.jp · 東京都千代田区丸の内</div>
      </div>
    </section>
  );
}

// src/sections/Market.jsx
import React from 'react';

export default function Market() {
  return (
    <section className="market" id="market">
      <div className="container">
        <div className="section-head">
          <div>
            <div className="section-tag"><span className="num">05</span> MARKET</div>
            <h2 className="section-title">信用コストは、<br />新しい巨大市場になる。</h2>
          </div>
          <p className="section-lead">
            「真実を証明する」需要は、司法・報道・金融・保険・採用など、信用が前提のあらゆる領域に広がります。日本市場だけで早期 SOM 820億円、グローバル TAM は 6.4兆円。
          </p>
        </div>

        <div className="market-highlight">
          <div className="market-highlight-label">EARLY SOM · 2030</div>
          <div className="market-highlight-value">820億円</div>
          <div className="market-highlight-sub">5年後の現実的獲得シェア</div>
        </div>

        <div className="market-list">
          <div className="market-item">
            <div className="key">TAM</div>
            <div className="label">グローバル AI 信用検証市場
              <small>司法 + 金融 + 報道 + 保険の合算。2030 年に 6.4兆円規模へ。</small>
            </div>
            <div className="val">6.4兆円</div>
          </div>
          <div className="market-item">
            <div className="key">SAM</div>
            <div className="label">国内司法・行政・大手法務SaaS
              <small>裁判所 / 検察 / 弁護士法人 / 企業法務 / 監査法人。</small>
            </div>
            <div className="val">4,200億円</div>
          </div>
          <div className="market-item">
            <div className="key">SOM</div>
            <div className="label">5年後の現実的獲得シェア
              <small>大規模法務SaaSとの統合 + 政府調達枠による加速を前提。</small>
            </div>
            <div className="val">820億円</div>
          </div>
          <div className="market-item">
            <div className="key">CAGR</div>
            <div className="label">分野別年平均成長率（2026–2031）
              <small>ディープフェイク被害件数の成長率に正の相関。</small>
            </div>
            <div className="val">+47%</div>
          </div>
        </div>
      </div>
    </section>
  );
}

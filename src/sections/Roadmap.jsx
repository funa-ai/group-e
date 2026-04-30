// src/sections/Roadmap.jsx
import React from 'react';

export default function Roadmap() {
  return (
    <section>
      <div className="container">
        <div className="section-head">
          <div>
            <div className="section-tag"><span className="num">07</span> ROADMAP</div>
            <h2 className="section-title">司法 → 行政 → グローバルへ。</h2>
          </div>
          <p className="section-lead">
            国内法務領域から始まり、行政・国際機関、最終的には民間プラットフォーム向け API として、「真実の認証層」を提供します。
          </p>
        </div>

        <div className="roadmap-track">
          <div className="rm done">
            <div className="when">2025 / DONE</div>
            <h4>R&amp;D + パイロット</h4>
            <p>大手法律事務所3社・地方検察1機関と PoC 完了。検出精度 99% 達成。</p>
          </div>
          <div className="rm now">
            <div className="when">2026 / NOW</div>
            <h4>Series A · GA ローンチ</h4>
            <p>日本国内向け SaaS 一般提供。法務SaaSとの API 統合と、政府調達認証を取得。</p>
          </div>
          <div className="rm">
            <div className="when">2027–28</div>
            <h4>司法インフラ拡大</h4>
            <p>裁判所内オンプレ展開・最高裁データセンター連携。判例DB双方向統合。</p>
          </div>
          <div className="rm">
            <div className="when">2029+</div>
            <h4>グローバル / 認証層</h4>
            <p>APAC 進出。SNS・配信プラットフォーム向け真贋認証 API として開放。</p>
          </div>
        </div>
      </div>
    </section>
  );
}

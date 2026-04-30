// src/sections/Product.jsx
import React from 'react';
import ScoringFrame from '../components/ScoringFrame.jsx';

export default function Product() {
  return (
    <section className="product" id="product">
      <div className="container">
        <div className="section-head">
          <div>
            <div className="section-tag"><span className="num">02</span> PRODUCT</div>
            <h2 className="section-title">AI証拠鑑定エージェント、<br />ブラウザで完結する。</h2>
          </div>
          <p className="section-lead">
            証拠ファイルをドロップするだけで、4つのモダリティ（画像・動画・音声・文書）に対し、最新の生成AI痕跡解析を多角的に実行。「証拠能力スコア」と法廷で提出可能な鑑定レポートを自動生成します。
          </p>
        </div>
        <ScoringFrame />
      </div>
    </section>
  );
}

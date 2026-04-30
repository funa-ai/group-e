// src/sections/Moat.jsx
import React from 'react';

export default function Moat() {
  return (
    <section>
      <div className="container">
        <div className="section-head">
          <div>
            <div className="section-tag"><span className="num">06</span> MOAT</div>
            <h2 className="section-title">後発が追いつけない<br />3つの構造的優位性。</h2>
          </div>
          <p className="section-lead">
            データ・規制・運用の3軸で参入障壁を構築。汎用LLMでは代替できない、専門特化型のAI司法インフラを目指します。
          </p>
        </div>

        <div className="moat-grid">
          <div className="moat-item">
            <div className="moat-num">MOAT / 01</div>
            <h3>判例連動データセット</h3>
            <p>確定判決と紐付いた偽造証拠コーパスを、提携法律事務所と共同で継続収集。汎用基盤モデルでは到達できない法廷ドメインに最適化。</p>
            <div className="stat-line"><span>累積コーパス</span><b>2.4M sample</b></div>
          </div>
          <div className="moat-item">
            <div className="moat-num">MOAT / 02</div>
            <h3>規制・標準化への先行</h3>
            <p>日弁連・最高裁IT化推進・C2PA 国内ワーキングへ参画。「証拠能力スコア」を業界標準として制定するロビー活動を主導。</p>
            <div className="stat-line"><span>標準化提案</span><b>3 件採択</b></div>
          </div>
          <div className="moat-item">
            <div className="moat-num">MOAT / 03</div>
            <h3>監査可能な運用基盤</h3>
            <p>すべての鑑定プロセスは改ざん不能なログとして記録。第三者監査・法廷での反対尋問にも耐える設計。オンプレ・ガバメントクラウド対応。</p>
            <div className="stat-line"><span>監査適合</span><b>ISO 27001 / FedRAMP-J</b></div>
          </div>
        </div>
      </div>
    </section>
  );
}

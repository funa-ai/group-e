// src/sections/Threshold.jsx
import React from 'react';
import MorphCompare from '../components/MorphCompare.jsx';

export default function Threshold() {
  return (
    <section className="threshold" id="problem">
      <div className="container">
        <div className="section-head">
          <div>
            <div className="section-tag"><span className="num">01</span> THE 2026 THRESHOLD</div>
            <h2 className="section-title">真贋判定不能。<br />これが、いま司法が直面する現実です。</h2>
          </div>
          <p className="section-lead">
            ディープフェイクは、もはや「専門家が見れば分かる」レベルではありません。マルチモーダル生成AIは、光源・反射・微小なノイズ・声紋・呼吸音までを同時に再現します。裁判所・捜査機関・報道機関は、その真偽を判定する手段を失いつつあります。
          </p>
        </div>

        <div className="threshold-vis">
          <MorphCompare />
          <div className="threshold-stats">
            <div className="stat warn">
              <div className="num">73<span className="sub">%</span></div>
              <div className="label">2025年以降に提出された動画証拠のうち、人間の専門家が真贋判定を「困難」と回答した割合</div>
              <div className="src">SRC / 国際法科学連盟 2026 ホワイトペーパー</div>
            </div>
            <div className="stat warn">
              <div className="num">4.2<span className="sub">兆円 / 年</span></div>
              <div className="label">日本国内における、ディープフェイク起因の訴訟長期化・誤判決・信用毀損コストの推計値</div>
              <div className="src">SRC / 経産省 試算 R8</div>
            </div>
            <div className="stat">
              <div className="num">2.3<span className="sub">x</span></div>
              <div className="label">2024 → 2026 で証拠鑑定にかかる平均時間が増加。司法のボトルネックは「判定」へ</div>
              <div className="src">SRC / 最高裁 司法統計</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

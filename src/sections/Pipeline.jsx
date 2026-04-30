// src/sections/Pipeline.jsx
import React from 'react';

export default function Pipeline() {
  return (
    <section className="pipeline" id="pipeline">
      <div className="container">
        <div className="section-head">
          <div>
            <div className="section-tag"><span className="num">03</span> HOW IT WORKS</div>
            <h2 className="section-title">5層の解析パイプライン。<br />1つの矛盾も見逃さない。</h2>
          </div>
          <p className="section-lead">
            単一モデルでは見抜けない巧妙な偽造を、独立した5系統のフォレンジック解析でクロスチェック。各層のスコアを統合して、最終的な証拠能力スコアを算出します。
          </p>
        </div>

        <div className="pipeline-grid">
          <div className="pipe-step">
            <div className="icon" />
            <div className="step-num">LAYER / 01</div>
            <h3>ピクセル・周波数解析</h3>
            <p>JPEG圧縮ヒストグラム、PRNUセンサー指紋、DCT係数の統計異常を検出。撮影機器との物理的整合を検証します。</p>
          </div>
          <div className="pipe-step">
            <div className="icon alt" />
            <div className="step-num">LAYER / 02</div>
            <h3>光学・物理整合</h3>
            <p>影方向・反射・3D空間の幾何整合をモデル化。生成AIが構造的に再現困難な物理法則の破綻を検出します。</p>
          </div>
          <div className="pipe-step">
            <div className="icon alt2" />
            <div className="step-num">LAYER / 03</div>
            <h3>生成モデル指紋</h3>
            <p>Stable Diffusion・Sora・GAN系列など、主要モデルの周波数指紋を継続学習で蓄積。出所モデルまで推定します。</p>
          </div>
          <div className="pipe-step">
            <div className="icon alt3" />
            <div className="step-num">LAYER / 04</div>
            <h3>来歴・C2PA検証</h3>
            <p>撮影機器の電子署名、メタデータ連鎖、C2PA Provenance Chain を検証し、改ざんの形跡を時系列で可視化します。</p>
          </div>
        </div>
      </div>
    </section>
  );
}

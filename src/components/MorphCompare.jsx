// src/components/MorphCompare.jsx
import React, { useEffect, useState } from 'react';

export default function MorphCompare() {
  const [reveal, setReveal] = useState(false);
  useEffect(() => {
    const t = setInterval(() => setReveal((v) => !v), 3200);
    return () => clearInterval(t);
  }, []);
  return (
    <div className="morph">
      <div className="side-h" style={{ marginBottom: 16 }}>真贋判定 / 人間の目では判別不能</div>
      <div className="morph-frame">
        <div className="morph-pane real">
          <span className="label">REAL</span>
          <div className="placeholder">
            <span className="ph-text">[ 実写 · CMOS センサー ]</span>
          </div>
        </div>
        <div className="morph-pane fake">
          <span className="label">{reveal ? 'AI_GEN' : '?'}</span>
          <div className="placeholder">
            <span className="ph-text">[ {reveal ? 'Diffusion v9.2' : '出所不明'} ]</span>
          </div>
        </div>
      </div>
      <dl className="morph-readout">
        <div>
          <dt>人間の正答率</dt>
          <dd style={{ color: 'var(--warn)' }}>49.2%</dd>
        </div>
        <div>
          <dt>当社モデル</dt>
          <dd style={{ color: 'var(--accent)' }}>99.4%</dd>
        </div>
        <div>
          <dt>判定時間</dt>
          <dd>1.8s</dd>
        </div>
      </dl>
    </div>
  );
}

// src/components/ScoringFrame.jsx
import React, { useEffect, useState } from 'react';
import ScoreGauge from './ScoreGauge.jsx';
import { EVIDENCE_SAMPLES } from '../data/evidence.js';

export default function ScoringFrame() {
  const [activeId, setActiveId] = useState('e1');
  const active = EVIDENCE_SAMPLES.find((e) => e.id === activeId);
  const [animScore, setAnimScore] = useState(active.score);

  useEffect(() => {
    const target = active.score;
    let raf;
    const start = performance.now();
    const dur = 700;
    const tick = (t) => {
      const p = Math.min(1, (t - start) / dur);
      const eased = 1 - Math.pow(1 - p, 3);
      setAnimScore(Math.round(target * eased));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [activeId, active.score]);

  return (
    <div className="scoring-frame">
      <div className="scoring-toolbar">
        <div className="dots"><span /><span /><span /></div>
        <div className="path">~/cases/2026-04-21/evidence_review.session</div>
        <div className="badge">LIVE_ANALYSIS</div>
      </div>
      <div className="scoring-body">
        <aside className="scoring-side">
          <div className="side-h">EVIDENCE QUEUE / 3</div>
          <div className="evidence-list">
            {EVIDENCE_SAMPLES.map((e) => (
              <div
                key={e.id}
                className={`evidence-item ${activeId === e.id ? 'active' : ''}`}
                onClick={() => setActiveId(e.id)}
              >
                <div className="top">
                  <div className="name">{e.name}</div>
                  <div className="type">{e.type}</div>
                </div>
                <div className="meta">{e.meta} · {e.timestamp.slice(0, 10)}</div>
              </div>
            ))}
          </div>
          <div className="side-h" style={{ marginTop: 'auto' }}>SESSION</div>
          <div style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: 11, color: 'var(--fg-dim)', lineHeight: 1.7 }}>
            検事補 #4821<br />
            事件番号 R8-第412号<br />
            <span style={{ color: 'var(--accent)' }}>● 監査ログ記録中</span>
          </div>
        </aside>

        <main className="scoring-main">
          <div className="preview-pane">
            <div className="grid-overlay" />
            <div className="pane-content">
              <span className="pane-tag">[ {active.type} PREVIEW · {active.name} ]</span>
            </div>
            <div className="timestamp">{active.timestamp}</div>
            <div className="scan" />
            <div className="crosshair" style={{ top: '40%', left: '52%' }} />
          </div>

          <div className="signal-row">
            {active.signals.map((s, i) => (
              <div key={i} className={`signal ${s.warn ? 'warn' : ''}`}>
                <div className="sig-name">{s.name}</div>
                <div className="sig-val">
                  {(s.val * 100).toFixed(0)}
                  <span style={{ fontSize: 11, color: 'var(--fg-mute)', marginLeft: 2 }}>%</span>
                </div>
                <div className="sig-bar"><i style={{ width: `${s.val * 100}%` }} /></div>
              </div>
            ))}
          </div>
        </main>

        <aside className="scoring-side right">
          <div className="side-h">EVIDENCE SCORE</div>
          <div className="gauge-wrap">
            <ScoreGauge score={animScore} />
          </div>
          <div className={`verdict ${active.score < 50 ? 'low' : ''}`}>
            <span className="badge">{active.verdict.replace('_', ' ')}</span>
          </div>

          <div className="side-h" style={{ marginTop: 8 }}>FORENSIC FINDINGS</div>
          <div className="findings">
            {active.findings.map((f, i) => (
              <div key={i} className={`finding ${f.kind}`}>
                <b>{f.title}</b>
                {f.body}
              </div>
            ))}
          </div>
        </aside>
      </div>
    </div>
  );
}

// src/sections/UseCases.jsx
import React from 'react';

export default function UseCases() {
  return (
    <section>
      <div className="container">
        <div className="section-head">
          <div>
            <div className="section-tag"><span className="num">04</span> USE CASES</div>
            <h2 className="section-title">プロフェッショナルが、<br />裁判で実際に使う。</h2>
          </div>
          <p className="section-lead">
            法廷で「証拠能力」が問われる現場のために設計。鑑定レポートはそのまま準備書面に添付できる形式で出力されます。
          </p>
        </div>

        <div className="usecases-grid">
          <div className="uc">
            <div className="uc-tag">FOR / 裁判官</div>
            <h3>証拠採否の意思決定支援</h3>
            <p>提出されたデジタル証拠の真贋を、客観的な数値スコアと根拠付きで提示。心証形成のプロセスを透明化します。</p>
            <ul>
              <li>証拠能力スコア 0–100</li>
              <li>ロックされた鑑定ログ</li>
              <li>裁判所内オンプレ運用可</li>
            </ul>
          </div>
          <div className="uc">
            <div className="uc-tag">FOR / 弁護士</div>
            <h3>反証材料の高速生成</h3>
            <p>相手方の証拠に潜むディープフェイク痕跡を、数分で発見。準備書面に添付できる鑑定レポートを自動出力します。</p>
            <ul>
              <li>1ファイル 90秒で初動鑑定</li>
              <li>PDF / Word 鑑定書出力</li>
              <li>専門家証人としての引用可</li>
            </ul>
          </div>
          <div className="uc">
            <div className="uc-tag">FOR / 企業法務</div>
            <h3>コンプライアンス・調査</h3>
            <p>内部通報や訴訟リスクのある映像・音声・文書を、社内で安全に鑑定。生成AI起因のなりすましリスクを統制します。</p>
            <ul>
              <li>API / SAML SSO 統合</li>
              <li>監査ログ完全保持</li>
              <li>ISO/IEC 27001 準拠</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

// src/sections/Team.jsx
import React from 'react';

export default function Team() {
  return (
    <section id="team">
      <div className="container">
        <div className="section-head">
          <div>
            <div className="section-tag"><span className="num">08</span> TEAM</div>
            <h2 className="section-title">司法 × AI × インフラ。<br />3領域の専門家が結集。</h2>
          </div>
          <p className="section-lead">
            この事業は、単一領域の知見では成立しません。法廷経験・AIフォレンジック研究・大規模クラウド運用、それぞれの当事者でチームを構成しています。
          </p>
        </div>

        <div className="team-grid">
          <div className="member">
            <div className="avatar" />
            <div className="info">
              <div className="name">代表 / 仮名 K. Aoyama</div>
              <div className="role">CEO · 元 検事 / 法務博士</div>
              <p className="bio">特捜部にて電子証拠の取扱いを担当。退官後、リーガルテック領域で 2 度の起業経験。</p>
            </div>
          </div>
          <div className="member">
            <div className="avatar" />
            <div className="info">
              <div className="name">CTO / 仮名 R. Mori</div>
              <div className="role">CTO · 元 NICT 主任研究員</div>
              <p className="bio">マルチモーダルディープフェイク検出の論文 12 本。CVPR / NeurIPS 採択 5 本。</p>
            </div>
          </div>
          <div className="member">
            <div className="avatar" />
            <div className="info">
              <div className="name">COO / 仮名 M. Tanaka</div>
              <div className="role">COO · 元 大手SI 公共事業</div>
              <p className="bio">官公庁向け大規模クラウド調達の経験 12 年。FedRAMP-J 認証取得を主導。</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// src/sections/Footer.jsx
import React from 'react';

export default function Footer() {
  return (
    <footer>
      <div className="container footer-inner">
        <div>
          <div className="brand">
            <div className="brand-mark" />
            <div className="brand-name">AI生成真贋 Pro</div>
          </div>
          <div className="footer-meta" style={{ marginTop: 14 }}>
            © 2026 Veritas Engine, Inc.<br />
            All forensic logs cryptographically sealed.
          </div>
        </div>
        <div className="footer-links">
          <a href="#">プライバシー</a>
          <a href="#">特定商取引法</a>
          <a href="#">セキュリティ</a>
          <a href="#">採用</a>
        </div>
      </div>
    </footer>
  );
}

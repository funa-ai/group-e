// src/sections/CTA.jsx
import React, { useState } from 'react';

export default function CTA() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('https://formspree.io/f/xvgzwqvz', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        setSubmitted(true);
        setFormData({ name: '', email: '', company: '', message: '' });
        setTimeout(() => setSubmitted(false), 5000);
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <section className="cta" id="cta">
      <div className="container">
        <h2>資料請求</h2>
        <p>
          AI生成真贋 Proに関するお問い合わせ、資料請求は以下のフォームからお願いします。
        </p>

        {submitted && (
          <div className="form-success" style={{
            padding: '16px 20px',
            background: 'rgba(76, 175, 80, 0.1)',
            border: '1px solid rgba(76, 175, 80, 0.3)',
            borderRadius: '4px',
            marginBottom: '24px',
            color: '#4CAF50'
          }}>
            ✓ 送信完了。ありがとうございます。確認メールをお送りします。
          </div>
        )}

        <form onSubmit={handleSubmit} className="contact-form">
          <div className="form-group">
            <label htmlFor="name">お名前 *</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              placeholder="山田太郎"
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">メールアドレス *</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="your@example.com"
            />
          </div>

          <div className="form-group">
            <label htmlFor="company">会社名</label>
            <input
              type="text"
              id="company"
              name="company"
              value={formData.company}
              onChange={handleChange}
              placeholder="株式会社 〇〇"
            />
          </div>

          <div className="form-group">
            <label htmlFor="message">お問い合わせ内容</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="ご質問やご要望をお知らせください"
              rows="5"
            />
          </div>

          <button type="submit" className="btn btn-primary">
            送信 <span className="arrow">→</span>
          </button>
        </form>
      </div>
    </section>
  );
}

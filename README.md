# AI生成真贋 Pro — Vite + React プロジェクト

既存のBabel UMD形式LPコードを Vite + React (ESM) 形式に再構成したものです。

## ディレクトリ構成

```
vite-project/
├── index.html              # Vite エントリ HTML（src/main.jsx を読み込む）
├── package.json
├── vite.config.js
└── src/
    ├── main.jsx            # ReactDOM.createRoot 起動
    ├── App.jsx             # ルートコンポーネント（Tweaks + 全セクション）
    ├── styles.css          # グローバルスタイル（オリジナルから流用）
    ├── components/
    │   ├── TweaksPanel.jsx    # Tweaks シェル + 各種コントロール（ESM 化）
    │   ├── ScoreGauge.jsx     # 円形 SVG ゲージ
    │   ├── MorphCompare.jsx   # Real / AI 比較ビジュアル
    │   └── ScoringFrame.jsx   # 証拠鑑定 UI（証拠リスト + プレビュー + ゲージ）
    ├── data/
    │   └── evidence.js        # サンプル証拠データ
    └── sections/
        ├── Nav.jsx
        ├── Hero.jsx
        ├── Threshold.jsx
        ├── Product.jsx
        ├── Pipeline.jsx
        ├── UseCases.jsx
        ├── Market.jsx
        ├── Moat.jsx
        ├── Roadmap.jsx
        ├── Team.jsx
        ├── CTA.jsx
        └── Footer.jsx
```

## 実行方法

ローカル PC で：

```bash
cd vite-project
npm install
npm run dev      # http://localhost:5173 で開発サーバ起動
npm run build    # dist/ に本番ビルド
npm run preview  # 本番ビルドのローカル確認
```

## 変換のポイント（UMD / Babel → ESM / Vite）

1. **モジュール化**
   - `<script type="text/babel" src="...">` をやめ、`import` / `export` ベースに。
   - すべての `.jsx` ファイルが ES Modules として独立。
   - React は `import React from 'react'` / `import ReactDOM from 'react-dom/client'` でロード。

2. **`window.parent.postMessage` のセーフガード**
   - `vite dev` でトップレベル実行時に `window.parent === window` となり一部メッセージは無視されるため、host (iframe) 内かどうかを判定して post を分岐。
   - スタンドアロン実行時は Tweaks パネルをデフォルトで開くように変更。

3. **CSS のロード**
   - 旧 `<link rel="stylesheet" href="styles.css">` の代わりに、`main.jsx` から `import './styles.css'` で取り込み。Vite が自動でバンドルします。

4. **Tweaks の `EDITMODE` ブロック**
   - host 連携ロジックは `App.jsx` 内に保持。スタンドアロン実行時は単に in-memory state として動作。

5. **`Object.assign(window, …)` の削除**
   - グローバル経由でコンポーネント共有していた箇所を、各ファイルでの import に置換。

6. **コンポーネント分割**
   - 元の単一 `app.jsx` を `sections/` と `components/` に分割し、メンテしやすい構造に。

## フォントについて

`index.html` の `<link>` で Google Fonts (Noto Sans JP / JetBrains Mono / Instrument Serif) を読み込み続けます。プロダクション化する場合は、`@fontsource/*` への置換やセルフホストを検討してください。

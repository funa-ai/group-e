// src/data/evidence.js
// Sample evidence data used by the Product / scoring frame.

export const EVIDENCE_SAMPLES = [
  {
    id: 'e1',
    name: '監視カメラ_005.mp4',
    type: 'VIDEO',
    meta: '00:14 · H.264 · 1920×1080',
    timestamp: '2026.04.21 03:14:22 JST',
    score: 12,
    verdict: 'AI_GENERATED',
    signals: [
      { name: '光源整合', val: 0.18, warn: true },
      { name: 'GAN残差', val: 0.91, warn: true },
      { name: 'メタ完整', val: 0.42, warn: true },
      { name: '音声同期', val: 0.31, warn: true },
    ],
    findings: [
      { kind: 'flag', title: '拡散モデル特有のノイズ分布', body: '周波数領域 8.2kHz 帯にStableVid系の指紋を検出（信頼度 94.1%）' },
      { kind: 'flag', title: '光源ベクトルの矛盾', body: '被写体の影方向と環境光が物理的に整合せず（角度差 23.4°）' },
      { kind: 'flag', title: 'C2PA署名なし', body: '撮影機器の電子署名・改ざん検出ハッシュが付与されていません' },
    ],
  },
  {
    id: 'e2',
    name: '通話録音_witness.wav',
    type: 'AUDIO',
    meta: '02:38 · 44.1kHz · 16bit',
    timestamp: '2026.03.08 19:42:11 JST',
    score: 87,
    verdict: 'LIKELY_AUTHENTIC',
    signals: [
      { name: '声紋一致', val: 0.94 },
      { name: '周波数連続性', val: 0.88 },
      { name: '環境ノイズ', val: 0.82 },
      { name: 'メタ完整', val: 0.79 },
    ],
    findings: [
      { kind: 'ok', title: '声紋フィンガープリント一致', body: '登録された参照声紋と高い一致率（KL-div 0.06）' },
      { kind: 'ok', title: '環境音の自然な連続性', body: '屋内反響パターンが空間音響モデルと整合' },
      { kind: 'flag', title: '編集境界 1 件', body: '01:12 付近にクロスフェード痕跡。意図的な切除の可能性' },
    ],
  },
  {
    id: 'e3',
    name: 'ドラレコ_交差点.jpg',
    type: 'IMAGE',
    meta: 'Exif付 · 4032×3024',
    timestamp: '2026.04.02 17:09:55 JST',
    score: 96,
    verdict: 'AUTHENTIC',
    signals: [
      { name: 'PRNU整合', val: 0.97 },
      { name: 'JPEG圧縮', val: 0.95 },
      { name: 'GPS整合', val: 0.99 },
      { name: 'C2PA署名', val: 1.0 },
    ],
    findings: [
      { kind: 'ok', title: '撮影機器センサー指紋一致', body: 'PRNU パターンが登録ドラレコ筐体と完全一致' },
      { kind: 'ok', title: 'C2PA 署名検証成功', body: '撮影 → 保存 → 提出までの改ざんなし。チェーン完全' },
      { kind: 'ok', title: 'GPS / 時刻 / 道路網 整合', body: '撮影位置・時刻・実在交差点の三点が論理的に整合' },
    ],
  },
];

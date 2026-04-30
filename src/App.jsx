// src/App.jsx — AI生成真贋 Pro LP root component
import React, { useEffect } from 'react';

import { TweaksPanel, TweakSection, TweakSlider, TweakToggle, useTweaks }
  from './components/TweaksPanel.jsx';

import Nav from './sections/Nav.jsx';
import Hero from './sections/Hero.jsx';
import Threshold from './sections/Threshold.jsx';
import Product from './sections/Product.jsx';
import Pipeline from './sections/Pipeline.jsx';
import UseCases from './sections/UseCases.jsx';
import Market from './sections/Market.jsx';
import Moat from './sections/Moat.jsx';
import Roadmap from './sections/Roadmap.jsx';
import Team from './sections/Team.jsx';
import CTA from './sections/CTA.jsx';
import Footer from './sections/Footer.jsx';

const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "accentHue": 152,
  "fontSize": 16,
  "showGridBg": true
}/*EDITMODE-END*/;

export default function App() {
  const [t, setTweak] = useTweaks(TWEAK_DEFAULTS);

  useEffect(() => {
    document.documentElement.style.setProperty('--accent', `oklch(78% 0.18 ${t.accentHue})`);
    document.documentElement.style.setProperty('--accent-soft', `oklch(78% 0.18 ${t.accentHue} / 0.12)`);
    document.documentElement.style.setProperty('--accent-line', `oklch(78% 0.18 ${t.accentHue} / 0.32)`);
    document.body.style.fontSize = `${t.fontSize}px`;
  }, [t.accentHue, t.fontSize]);

  return (
    <>
      <div className="noise" />
      <Nav />
      <Hero showGridBg={t.showGridBg} />
      <Threshold />
      <Product />
      <Pipeline />
      <UseCases />
      <Market />
      <Moat />
      <Roadmap />
      <Team />
      <CTA />
      <Footer />

      <TweaksPanel>
        <TweakSection label="アクセントカラー" />
        <TweakSlider
          label="Hue"
          value={t.accentHue}
          min={0} max={360} step={1} unit="°"
          onChange={(v) => setTweak('accentHue', v)}
        />
        <TweakSection label="タイポグラフィ" />
        <TweakSlider
          label="Base font size"
          value={t.fontSize}
          min={14} max={20} unit="px"
          onChange={(v) => setTweak('fontSize', v)}
        />
        <TweakSection label="背景" />
        <TweakToggle
          label="Hero グリッド"
          value={t.showGridBg}
          onChange={(v) => setTweak('showGridBg', v)}
        />
      </TweaksPanel>
    </>
  );
}

// src/App.jsx — AI生成真贋 Pro LP root component
import React from 'react';

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

export default function App() {
  return (
    <>
      <div className="noise" />
      <Nav />
      <Hero />
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
    </>
  );
}

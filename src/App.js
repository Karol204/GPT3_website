import React from 'react';
import './App.css';
import { Footer, Blog, Possibility, Features, WhatGPT3, Header } from './containers/index';
import { CTA, Brand, Navbar } from './components/index';

const App = () => {
  return (
    <div className="app">
      <div className="gradient__bg">
        <Navbar />
        <Header />
      </div>
      <Brand />
      <WhatGPT3 />
      <Features />
      <Possibility />
      <CTA />
      <Blog />
      <Footer />
    </div>
  );
};

export default App;

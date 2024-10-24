import React from 'react';
import {Navbar } from './components'
import {Hero, Hero2, Hero3, Feat, Footer, Partners } from './sections'

import './App.css';

const App = () => (
  <div>

    <Navbar />
    <Hero />
    <Hero2 />
    <Hero3 />
    <Partners/> 
    <Feat />
    <Footer />
  </div>
);

export default App;

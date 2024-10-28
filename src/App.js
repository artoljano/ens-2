import React from 'react';
import {Navbar, Navbar1 } from './components'
import {Hero, Hero2, Hero3, Feat, Footer, Partners, Partners1, Solutions, Projects } from './sections'

import './App.css';

const App = () => (
  <div>

    {/* <Navbar /> */}
    <Navbar1 />
    <Hero />
    <Hero2 />
    <Hero3 />
    <Partners1 />
    <Projects />
    {/* <Solutions /> */}
    {/* <Partners/>  */}
    {/* <Feat /> */}
    <Footer />
  </div>
);

export default App;

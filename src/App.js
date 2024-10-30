import React from 'react';
import {Navbar, Navbar1 } from './components'
import {Hero, Hero2, Hero3, Feat, Footer, Partners, Partners1, Solutions, Projects } from './sections'

import './App.css';

const App = () => (
  <div>

    {/* <Navbar /> */}
    <Navbar1 />
    <Hero />
    <div  className='container'>
    <Hero2 className='one'/>
    <Hero3 className='two'/>
    </div>
    
    <Partners1 />
    <Projects />
    {/* <Solutions /> */}
    {/* <Partners/>  */}
    {/* <Feat /> */}
    <Footer />
  </div>
);

export default App;

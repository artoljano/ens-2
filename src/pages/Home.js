import React from 'react';
import {Navbar, Navbar1 } from '../components'
import {Hero, Hero2, Hero3,  Footer,  Partners1, Projects, About } from '../homeSections'

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";


const Home = () => (
  <div>

    {/* <Navbar /> */}
    
    <Hero />
   
    <Hero2 />
    <Hero3 />
    <About />
    
    <Partners1 />
    <Projects />
    {/* <Solutions /> */}
    {/* <Partners/>  */}
    {/* <Feat /> */}
    <Footer />
  </div>
);

export default Home;

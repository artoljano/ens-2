import React from 'react';
import {Navbar, Navbar1 } from '../components'
import {Hero, Hero2, Hero3, Feat, Footer, Partners, Partners1, Solutions, Projects } from '../homeSections'

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";


const Home = () => (
  <div>

    {/* <Navbar /> */}
    
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

export default Home;

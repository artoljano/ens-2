import React, { useEffect } from 'react';

import {Hero, Team, Header} from '../aboutSections'
import History  from '../aboutSections/history/History.tsx';



const AboutUs = () => (
  
  <div>
    <Hero />
    <Header />
    <Team />
    <History />
  </div>
);

export default AboutUs;

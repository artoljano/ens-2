import React from 'react';
import {Navbar, Navbar1 } from './components'
import {Hero, Hero2, Hero3, Feat, Footer, Partners, Partners1, Solutions, Projects } from './homeSections'

import {
  BrowserRouter as Router,
  Routes,
  Route,
  HashRouter,
} from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/AboutUs";
import Products from "./pages/Products";
import Services from "./pages/Services";
import Work from "./pages/Work";
import Contact from './pages/Contact';

import './App.css';


const App = () => (
//   <HashRouter>
<div>
            <Navbar1 />
            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route
                    path="/services"
                    element={<Services />}
                />
                <Route path="/products" element={<Products />} />
                <Route
                    path="/projects"
                    element={<Work />}
                />
                <Route
                    path="/contact"
                    element={<Contact />}
                />
            </Routes>
            <Footer />
            </div>
        /* </HashRouter> */
);

export default App;

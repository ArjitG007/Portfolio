import React from 'react'
import { Route, Switch } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import Home from "./Home";
import Navbar from "./Navbar";
import About from "./About";
import Work from "./Work";
import Skills from "./Skills";
import Project from "./Project";
import Contact from "./Contact";
import Footer from "./Footer";

const Full = () => {
    return (
        <>
        <BrowserRouter>
      
        {/* <Navbar /> */}
        <Home />
        <About />
        <Work />
        <Skills />
        <Project />
        <Contact />
        {/* <Footer /> */}
    
      </BrowserRouter>
        </>
    )
}

export default Full

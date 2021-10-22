import React from "react";
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
import Full from "./Full";
// import Portfolio from "./Portfolio";

const Portfolio = () => {
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Full}/>
        <Route exact path="/home" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/experience" component={Work} />
        <Route exact path="/skills" component={Skills} />
        <Route exact path="/project" component={Project} />
        <Route exact path="/contact" component={Contact} />
      </Switch>
      <Footer />
    </>
  );
};

export default Portfolio;

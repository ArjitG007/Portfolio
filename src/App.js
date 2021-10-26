import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter } from "react-router-dom";
import { Route,Switch } from 'react-router-dom';
import Home from "./Home";
import Navbar from "./Navbar";
import About from "./About";
import Work from "./Work";
import Skills from "./Skills";
import Project from "./Project";
import Contact from "./Contact";
import Footer from "./Footer";
import Portfolio from "./Portfolio";
import Full from "./Full";


function App() {
  return (
    <>
      {/* <BrowserRouter>npm
      <Switch>
      <Portfolio />
        <Navbar />
        <Home />
        <Route path="/about" component={About}/>
        <Work />
        <Skills />
        <Project />
      </Switch>
        <Contact />
        <Footer />
      </BrowserRouter> */}
      <BrowserRouter>
      {/* <Full /> */}
      <Portfolio />
      </BrowserRouter>
       
    </>
  );
}

export default App;

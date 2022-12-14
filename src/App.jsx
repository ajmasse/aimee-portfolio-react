import React from "react";
import Nav from "./Components/nav/Nav";
import Header from "./Components/header/Header";
import About from "./Components/about/About";
import Skills from "./Components/skills/Skills";
import Projects from "./Components/projects/Projects";
import Contact from "./Components/contact/Contact";
import Footer from "./Components/footer/Footer";
import ReactGA from "react-ga";

const TRACKING_ID = "G-QP21NNGEC8";
ReactGA.initialize(TRACKING_ID);

export const App = () => {
  return (
    <>
      <Nav />
      <Header />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
};

export default App;

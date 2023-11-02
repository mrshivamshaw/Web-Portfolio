import React from "react";
import NavBar from "./components/NavBar";
import About from "./components/About";
import Home from "./components/Home/Home";
import Skills from "./components/Skills/Skills";
import Education from "./components/Education/Education";
import Projects from "./components/Project/Projects";
import Contact from "./components/Contact/Contact";

function App() {
  return (
    <div className="min-h-[100vh] w-[100vw] relative box-border scroll-smooth overflow-x-hidden">
      <NavBar/>
      <Home/>
      <About/>
      <Skills/>
      <Education/>
      <Projects/>
      <Contact/>
    </div>
  );
}

export default App;

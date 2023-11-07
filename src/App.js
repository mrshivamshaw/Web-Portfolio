import React from "react";
import NavBar from "./components/NavBar/NavBar.jsx";
import About from "./components/pages/About/About";
import Home from "./components/pages/Home/Home.jsx";
import Skills from "./components/pages/Skills/Skills.jsx";
import Education from "./components/pages/Education/Education.jsx";
import Projects from "./components/pages/Project/Projects.jsx";
import Contact from "./components/pages/Contact/Contact.jsx";

function App() {
  return (
    <div className="min-h-[100vh] max-w-[100vw] relative box-border overflow-x-hidden">
      
      <NavBar/>
      <section id="Home"><Home/></section>
      <section id="About"><About/></section>
       <section id="Skills"><Skills/></section>
     <section id="Education"><Education/></section>
      <section id="Projects"><Projects/></section>
      <section id="Contact"><Contact/></section> 
    </div>
  );
}

export default App;

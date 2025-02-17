import React, { useEffect } from "react";
import NavBar from "./components/NavBar/NavBar.jsx";
import About from "./components/pages/About/About";
import Home from "./components/pages/Home/Home.jsx";
import Skills from "./components/pages/Skills/Skills.jsx";
import Education from "./components/pages/Education/Education.jsx";
import Projects from "./components/pages/Project/Projects.jsx";
import Experience from "./components/pages/Experience/Experience.jsx";
import Contact from "./components/pages/Contact/Contact.jsx";
import Footer from "./components/Footer/Footer.jsx";

import Shery from "sheryjs";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

function App() {
  useEffect(() => {
    const handleVisibilityChange = () => {
      document.title = document.hidden ? 'Come back👋' : 'Shivam | Portfolio';
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);

    // Clean up the event listener
    return () => {
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, []); // Empty dependency array ensures effect runs only on mount
  Shery.mouseFollower({
    
  })
  return (
    <div className="container min-h-screen max-w-[100vw] relative box-border overflow-x-hidden">
      <NavBar/>
      <section id="Home"><Home/></section>
      <section id="About"><About/></section>
      <section id="Skills"><Skills/></section>
      <section id="Education"><Education/></section>
      <section id="Experience"><Experience/></section>
      <section id="Projects"><Projects/></section>
      <section id="Contact"><Contact/></section> 
      <Footer/>
      <ToastContainer/>
    </div>
  );
}

export default App;

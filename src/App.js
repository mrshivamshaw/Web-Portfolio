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
import "react-toastify/dist/ReactToastify.css";
import { Helmet } from "react-helmet-async";

function App() {
  useEffect(() => {
    const handleVisibilityChange = () => {
      document.title = document.hidden ? "Come back👋" : "Shivam | Portfolio";
    };

    document.addEventListener("visibilitychange", handleVisibilityChange);

    // Clean up the event listener
    return () => {
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, []); // Empty dependency array ensures effect runs only on mount
  Shery.mouseFollower({});
  return (
    <>
      <Helmet prioritizeSeoTags>
        <title>Shivam Kumar Shaw | Full Stack Developer</title>
        <meta
          name="description"
          content="Shivam Kumar Shaw's portfolio showcasing expertise in full stack development, including React, Node.js, and MongoDB."
        />
        <meta
          name="keywords"
          content="Shivam Kumar Shaw, Full Stack Developer, React, Node.js, MongoDB, Portfolio"
        />
        <meta
          property="og:title"
          content="Shivam Kumar Shaw - Full Stack Developer"
        />
        <meta
          property="og:description"
          content="Explore the projects and skills of Shivam Kumar Shaw, a proficient full stack developer."
        />
        <meta property="og:image" content="%PUBLIC_URL%/images/profile.jpg" />
        <meta property="og:url" content="https://mrshivamshaw.vercel.app/" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Shivam Kumar Shaw - Full Stack Developer"
        />
        <meta
          name="twitter:description"
          content="Discover the portfolio of Shivam Kumar Shaw, specializing in modern web applications."
        />
        <meta name="twitter:image" content="%PUBLIC_URL%/images/profile.jpg" />
        <script type="application/ld+json">
        {`
        {
          "@context": "https://schema.org",
          "@type": "Person",
          "name": "Shivam Kumar Shaw",
          "jobTitle": "Full Stack Developer",
          "url": "https://mrshivamshaw.vercel.app/",
          "sameAs": [
            "https://github.com/mrshivamshaw",
            "https://linkedin.com/in/shivam-shaw",
            "https://twitter.com/mrshivamshaw"
          ]
        }
        `}
      </script>
      </Helmet>
      <div className="container min-h-screen max-w-[100vw] relative box-border overflow-x-hidden">
        <NavBar />
        <section id="Home">
          <Home />
        </section>
        <section id="About">
          <About />
        </section>
        <section id="Skills">
          <Skills />
        </section>
        <section id="Education">
          <Education />
        </section>
        <section id="Experience">
          <Experience />
        </section>
        <section id="Projects">
          <Projects />
        </section>
        <section id="Contact">
          <Contact />
        </section>
        <Footer />
        <ToastContainer />
      </div>
    </>
  );
}

export default App;

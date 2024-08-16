import React from "react";
import razorpay from "../../../Assests/project/razorpay.png";
import codegyaan from "../../../Assests/project/codegyaan.png";
import protfolio from "../../../Assests/project/webPortfolio.png";
import ezservice from "../../../Assests/project/ezservice.png";
import ProjectCard from "./ProjectCard";
import project from "../../../Assests/project-management.png";
import protube from "../../../Assests/protube.png";
import chatApp from '../../../Assests/project/chatApp.png'

const cardDetails = [
  {
    imgSrc: codegyaan,
    heading: "CodeGyaan",
    description:
      "EdTech platform enabling instructors to sell courses, empowering students to access and learn from a variety of educational materials.",
    link: "https://code-gyaan2.vercel.app/",
    gitLink : "https://github.com/mrshivamshaw/skill-safari"
  },
  {
    imgSrc: chatApp,
    heading: "ChatApp",
    description:
      "Real-Time Chat Application Built with PERN Stack, Prisma, TypeScript, and Socket.IO",
    link: "https://pern-chat-app.vercel.app/",
    gitLink : "https://github.com/gdsc-aec-india/gdsc-aec-react"
  },
  {
    imgSrc: protube,
    heading: "ProTube",
    description:
      "Created a YouTube clone project focused on mastering API integration. Learn API skills through practical application and tutorials",
    link: "https://protube-one.vercel.app/",
    gitLink: "https://github.com/mrshivamshaw/ProTube",
  },
  {
    imgSrc: ezservice,
    heading: "EZ-Service Hub",
    description:
      "EZ-Service Hub: Your Personalized Connection to Reliable and Trusted Local Services, Simplifying Access for All Your Needs",
    link: "https://ez-service-hub.vercel.app/",
    gitLink : "https://github.com/mrshivamshaw/EZService-Hub"
  },
  {
    imgSrc: protfolio,
    heading: "My Portfolio Website",
    description:
      "Welcome to my personal portfolio website! Explore by scrolling down – you're in the right place to discover more about me and my work.",
    link: "https://shivam-eng.vercel.app/",
    gitLink: "https://github.com/mrshivamshaw/Web-Portfolio"
  },
  {
    imgSrc: razorpay,
    heading: "Razorpay clone",
    description:"Developed a Razorpay frontend clone using HTML and Tailwind CSS, featuring a responsive design and key components for a seamless user experience.",
    link: "https://shivamshaw07.github.io/Razropay-clone/",
    gitLink : "https://github.com/mrshivamshaw/Razropay-clone"
  },
];

const Projects = () => {
  return (
    <div className="mainBg w-[100vw] h-auto py-16">
      <div className="z-30 flex flex-col justify-center items-center gap-2 text-5xl font-bold mx-auto mb-10">
        <div className="flex items-center gap-2 heading rounded-lg">
          <img src={project} alt="admi" className="h-[7vh] w-auto" />
          <h1 className=" lg:text-[7vh] text-[#fff] md:text-[7vh] text-2xl font-bold tracking-wide mb-2">
            My <span className="text-[#fff]">Projects</span>
          </h1>
        </div>
      </div>
      <h1 className="text-center xl:text-6xl lg:text-6xl md:text-6xl text-4xl text-white font-semibold -mt-9 mb-7">
        Crafting solutions, one project at a{" "}
        <span className="text-gradient text-center">Time</span>.
      </h1>
      <div className="xl:w-[85vw] lg:w-[85vw] md:w-[85vw] w-[95vw] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 justify-center items-center gap-x-4 gap-y-7">
        {cardDetails.map((project) => (
          <ProjectCard
            imgSrc={project.imgSrc}
            description={project.description}
            heading={project.heading}
            link={project.link}
            gitLink={project.gitLink}
          />
        ))}
      </div>
    </div>
  );
};

export default Projects;

import React from 'react'
import gdsc from '../../../Assests/project/gdscwebsite.png'
import healthyme from '../../../Assests/project/healthyme.png'
import skillsafari from '../../../Assests/project/skillSafariImg.png'
import protfolio from '../../../Assests/project/webPortfolio.png'
import ezservice from '../../../Assests/project/ezservice.png'
import ProjectCard from './ProjectCard'

const cardDetails = [
  {
      imgSrc:healthyme,
      heading : 'Healthy-Me',
      description: "Creating a symptom-based chatbot for quick doctor and medicine recommendations, simplifying healthcare access. Be Healthy and Wealthy!",
      link : "https://healthy-me-me.vercel.app/"
  },
  {
      imgSrc: skillsafari,
      heading : 'Skill safari',
      description: "EdTech platform enabling instructors to sell coding projects, empowering students to easily access and learn from a variety of educational materials.",
      link : "https://healthy-me-me.vercel.app/"
  },
  {
      imgSrc: gdsc,
      heading : 'GDSC AEC Web-React',
      description: "GDSC AEC team project: showcasing our team, past successful events, and upcoming initiatives to foster community engagement and innovation.",
      link : "https://gdscaec.club/"
  },
  {
      imgSrc: protfolio,
      heading : 'My Portfolio Website',
      description: "Welcome to my personal portfolio website! Explore by scrolling down – you're in the right place to discover more about me and my work.",
      link : "https://healthy-me-me.vercel.app/"
  },
  {
      imgSrc:ezservice,
      heading : 'EZ-Service Hub',
      description: "EZ-Service Hub: Your Personalized Connection to Reliable and Trusted Local Services, Simplifying Access for All Your Needs",
      link : "https://ez-service-hub.vercel.app/"
  },
  {
      imgSrc:healthyme,
      heading : 'Healthy-Me',
      description: "Creating a symptom-based chatbot for quick doctor and medicine recommendations, simplifying healthcare access.  Be Healthy and Wealthy!",
      link : "https://healthy-me-me.vercel.app/"
  },
]

const Projects = () => {
  return (
    <div className='mainBg w-[100vw] h-auto py-16'>
      <div className="z-30 flex flex-col justify-center items-center gap-2 text-5xl font-bold mx-auto mb-10">
        <div className="flex items-center gap-2 heading rounded-lg">
          {/* <img src={student} alt="admi" className="h-[7vh] w-auto" /> */}
          <h1 className=" lg:text-[7vh] text-[#fff] md:text-[7vh] text-2xl font-bold tracking-wide mb-2">
          My <span className="text-[#fff]">Projects</span>
        </h1>
        </div>
      </div>
      <h1 className="text-center xl:text-6xl lg:text-6xl md:text-6xl text-4xl text-white font-semibold -mt-9 mb-7">Crafting solutions, one project at a <span className="text-gradient text-center">Time</span>.</h1>
      <div className='xl:w-[85vw] lg:w-[85vw] md:w-[85vw] w-[95vw] mx-auto flex flex-wrap justify-center items-center gap-x-4 gap-y-7'>
        {
          cardDetails.map(project => (
            <ProjectCard imgSrc={project.imgSrc} description={project.description} heading={project.heading} link={project.link}/>
          ))
        }
      </div>
    </div>
  )
}

export default Projects

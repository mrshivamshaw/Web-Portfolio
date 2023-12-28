import React from "react";
import "./skills.css";
import "../../pages/About/about.css";
// import reactIcon from "../../../Assests/icons/react-svgrepo-com.svg";
// import node from "../../../Assests/icons/node-js-svgrepo-com.svg";
// import express from "../../../Assests/icons/node-js-svgrepo-com (1).svg";
// import redux from "../../../Assests/icons/redux-svgrepo-com.svg";
// import DSA from "../../../Assests/icons/code-svgrepo-com.svg";
// import Mongo from "../../../Assests/icons/mongo-svgrepo-com.svg";
// import html from "../../../Assests/icons/html-5-svgrepo-com.svg";
// import css from "../../../Assests/icons/css-3-svgrepo-com.svg";
// import python from "../../../Assests/icons/python-svgrepo-com.svg";
// import js from "../../../Assests/icons/js-official-svgrepo-com.svg";
// import cpp from "../../../Assests/icons/c-.png";
// import c from "../../../Assests/icons/letter-c.png";
// import net from "../../../Assests/icons/netlify-svgrepo-com.svg";
// import git from "../../../Assests/icons/git-svgrepo-com.svg";
// import github from "../../../Assests/icons/github-142-svgrepo-com.svg";
// import team from "../../../Assests/icons/team-work-svgrepo-com.svg";
import skill from "../../../Assests/skill-svgrepo-com.svg";
import { motion } from "framer-motion";
import SkillLevel from "./SkillLevel";

// const skills = [
//   {
//     imgSrc : reactIcon,
//     text: "ReactJs"
//   },
//   {
//     imgSrc : express,
//     text: "NodeJs"
//   },
//   {
//     imgSrc : node,
//     text: "ExpressJs"
//   },
//   {
//     imgSrc : redux,
//     text: "Redux"
//   },
//   {
//     imgSrc : DSA,
//     text: "DSA"
//   },
//   {
//     imgSrc : Mongo,
//     text: "MongoDb"
//   },
//   {
//     imgSrc : html,
//     text: "HTML"
//   },
//   {
//     imgSrc : css,
//     text: "CSS3"
//   },
//   {
//     imgSrc : python,
//     text: "Python"
//   },
//   {
//     imgSrc : js,
//     text: "JavaScript"
//   },
//   {
//     imgSrc : cpp,
//     text: "CPP"
//   },
//   {
//     imgSrc : c,
//     text: "JavaScript"
//   },
//   {
//     imgSrc : net,
//     text: "Netlify"
//   },
//   {
//     imgSrc : git,
//     text: "git"
//   },
//   {
//     imgSrc : github,
//     text: "GitHub"
//   },
//   {
//     imgSrc : team,
//     text: "Team work"
//   },
// ]

const Skills = () => {
  return (
    <div
      id="Skill"
      className="mainBg border-b-2 border-white/20 overflow-x-hidden h-[auto] py-20 w-[100vw] flex flex-col gap-6 mx-auto items-center"
    >
      <motion.div 
      initial={{opacity:0,x:-100}}
      whileInView={{opacity:1,x:0,transition:{delay:.2,duration:1}}}
      // transition={{duration:2}}
       className="sideCircle absolute -left-[55vh] w-[40vw] h-[75.5vh] rounded-full z-0 bg-[#ff014f] transition-all duration-500 ease-linear"></motion.div>
      <div className="flex flex-col items-center gap-1 z-30 ">
        <div className="flex items-center justify-center gap-2 heading rounded-lg">
          <img src={skill} alt="skill" className=" h-[7vh] w-auto" />
          <h1 className="xl:text-5xl lg:text-[5xl] md:text-[2xl] text-2xl font-bold tracking-wide mb-2 text-white">
            Professional Skills
          </h1>
        </div>
      </div>
      <h1 className="text-center xl:text-6xl lg:text-6xl md:text-4xl text-4xl text-white font-semibold -mt-3">Innovative Solution to <span className="text-gradient text-center">Enhance</span>.</h1>
      {/* <div className="flex md:flex-row lg:flex-row flex-col items-center justify-center lg:gap-20 gap-8 w-[100vw] md:w-[85vw] lg:w-[85vw] xl:w-[85vw] relative z-10">
        <div className="grid xl:grid-cols-4 lg:grid-cols-4 md:grid-cols-3 grid-cols-3 lg:w-auto xl:w-auto md:w-auto w-screen justify-center place-content-center py-6 px-4 md:px-4 lg:px-0 xl:px-0 gap-4">
          {
            skills.map((item,index) => (
            <motion.div key={index} initial={{opacity:0,y:-20}} whileInView={{opacity:1,y:0,transition:{duration:1}}} className="animate flex mx-auto flex-col mt-4 text-[1.4vh] font-semibold justify-center items-center py-2 px-6 h-[82px] w-[82px] md:h-[87px] md:w-[87px] lg:h-[87px] lg:w-[87px] xl:h-[87px] xl:w-[87px] rounded-full bg-[#d4e3ea6d] hover:scale-105 hover:shadow-2xl transition-all duration-300">
              <img src={item.imgSrc} alt="react" />
              <div>{item.text}</div>
            </motion.div>

            ))
          }
          
        </div>
        <div className="right w-auto flex flex-col text-sm gap-16 justify-evenly h-full py-12 px-8 md:px-8 lg:px-0 xl:px-0">
          <motion.div
          initial={{opacity:0,x:100}}
          whileInView={{opacity:1,x:0}}
          transition={{duration:1.2}}
          className="flex gap-4 items-baseline">
            <div>2023</div>
            <div>
              <p>Selected as a Compititive Progarmming Facilator</p>
              <p>GDSC AEC</p>
            </div>
          </motion.div>
          <motion.div
          initial={{opacity:0,x:200}}
          whileInView={{opacity:1,x:0}}
          transition={{duration:1.9}} className="flex gap-4 items-baseline">
            <div>2023</div>
            <div>
              <p>Collaborated with GDSC AEC team to develop a website for our team.</p>
              <p>GDSC AEC</p>
            </div>
          </motion.div>
          <motion.div
          initial={{opacity:0,x:300}}
          whileInView={{opacity:1,x:0}}
          transition={{duration:2.3}} className="flex gap-4 items-baseline">
            <div>2022</div>
            <div>
              <p>Lorem ipsum dolor sit amet consectetur</p>
              <p>Lorem, ipsum.</p>
            </div>
          </motion.div>
        </div> 
      </div>*/}
      <SkillLevel/>
    </div>
  );
};

export default Skills;

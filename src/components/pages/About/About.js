import React from "react";
import pic from "../../../Assests/pic.jpeg";
import person from "../../../Assests/man.png";
import Tilt from "react-vanilla-tilt";
import { motion } from "framer-motion";
import "./about.css";
import { FaChevronCircleRight } from "react-icons/fa";
import pdfFile from '../../../Assests/project/shivamshawpdf.pdf'


const About = () => {
  return (
    <div className="mainBg border-b-2 border-white/20 overflow-x-hidden h-auto py-20  w-full mx-auto flex flex-col justify-center items-center gap-[5vh]">
      <motion.div
        initial={{ opacity: 0, x: 100 }}
        whileInView={{
          opacity: 1,
          x: 0,
          transition: { delay: 0.2, duration: 1 },
        }}
        // transition={{duration:2}}
        className="absolute -right-[55vh] w-[40vw] h-[75.5vh] rounded-full z-0 bg-[#ff014f] duration-500 ease-linear"
      ></motion.div>
      <div className="flex flex-col justify-center relative z-10 items-center gap-2 text-5xl font-bold">
        <div className="flex items-center gap-2 xl:text-5xl lg:text-5xl md:text-2xl text-2xl text-white heading rounded-lg">
          <img src={person} alt="admi" className="h-[7vh] w-auto" />
          About Me
        </div>
        
      </div>
      <div className="flex lg:flex-row flex-col  relative z-10  w-[92vw] justify-center items-center xl:gap-[6vw] lg:gap-[6vw] md:gap-0 gap-0">
        <motion.div
          initial={{ opacity: 0, x: -200 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: .6 }}
        >
          <Tilt style={{ borderRadius: "5%", padding: "20px", zIndex: 0 }}>
            <img src={pic} alt="bdj" className="rounded-full h-[40vh] w-auto" />
          </Tilt>
        </motion.div>

        <div className="flex flex-col justify-start lg:w-[50%] w-auto gap-5">
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5 }}
            className="text-4xl font-extrabold text-white"
          >
            I'm <span className="text-[#ff014f]">shivam</span>
          </motion.h1>
          <h2 className="text-xl font-semibold text-white">
            Passionate Full Stack Developer | Compititive Programmer
          </h2>
          <motion.p
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2 }}
            className="font-normal text-white/90 text-[2vh]"
          >
            I’m a third-year CSE student at Asansol Engineering College and an SDE Intern at GrowthPurple Technologies. I build full-stack apps using React, Node.js, Django, and Laravel, ranging from GenAI platforms to real-time chat systems.
          </motion.p>
          <motion.p
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.4 }}
            className="font-normal text-white/90 text-[2vh]"
          >
            I love turning ideas into scalable systems. From event-driven workflows and AI schedulers to Razorpay integrations and SQL-generating voice bots, I focus on building products that actually do something meaningful.
          </motion.p>
          <motion.p
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.6 }}
            className="font-normal text-white/90 text-[2vh]"
          >
            As a CP lead at GDGC AEC, I’ve solved 300+ DSA problems and love the logic behind the code. I’m all about clean builds, smart teamwork, and pushing limits, so I can do one deploy at a time.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: -160 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="flex flex-wrap text-sm gap-1"
          >
            <div className="w-[48%] mb-2">
              <span className="text-[#ff014f]">Age</span><span className="text-white/90"> : 20</span>
            </div>
            <div className="w-[48%] mb-2">
              <span className="text-[#ff014f]">Email</span><span className="text-white/90"> : shivamshaw9005@gamil.com</span>
            </div>
            <div className="w-[48%] mb-2">
              <span className="text-[#ff014f]">College</span><span className="text-white/90"> : Asansol Engineering College</span>
            </div>
            <div className="w-[48%] mb-2">
              <span className="text-[#ff014f]">Place</span><span className="text-white/90"> : Dhanbad, Jharkhand, India</span>
            </div>
          </motion.div>
        </div>
      </div>
      <a href={pdfFile} target="_blank" rel="noopener noreferrer">
        <motion.button
          initial={{ opacity: 0.5, y: -30 }}
          animate={{
            opacity: 1,
            y: 0,
            transition: { duration: 1 },
          }}
          className="text-white px-8 py-3 rounded-full text-xl font-semibold hover:font-bold hover:scale-90 shadow-xl hover:shadow-2xl transition-all duration-500"
        >
          Resume{" "}
          <span>
            <FaChevronCircleRight className="inline " />
          </span>
        </motion.button>
      </a>
    </div>
  );
};

export default About;

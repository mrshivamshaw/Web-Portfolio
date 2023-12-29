import React from "react";
import student from '../../../Assests/teacher-svgrepo-com.svg'
import Aec from '../../../Assests/aec.png'
import jkrr from '../../../Assests/Govt-High-School-No.3-Abbottabad-1.png'
import svs from '../../../Assests/svs.png'
import {motion} from "framer-motion";

const Education = () => {
  
  return (
    <div id="Education" className="mainBg border-b-2 border-white/20 py-10 overflow-x-hidden h-auto  relative z-30 gap-6 flex flex-col justify-center items-center px-3">
      <motion.div 
      initial={{ opacity: 0, x: 100 }}
      whileInView={{
        opacity: 1,
        x: 0,
        transition: { delay: 0.2, duration: 1 },
      }}
      className="sideCircle absolute -right-[55vh] top-[8vh] w-[40vw] h-[75.5vh] rounded-full z-30 bg-[#ff014f] duration-500 ease-linear"></motion.div>

      <div className="z-30 flex flex-col justify-center items-center gap-2 text-5xl font-bold">
        <div className="flex items-center gap-2 heading rounded-lg">
          <img src={student} alt="admi" className="h-[7vh] w-auto" />
          <h1 className=" lg:text-[7vh] text-[#fff] md:text-[7vh] text-2xl font-bold tracking-wide mb-2">
          My <span className="text-[#fff]">Education</span>
        </h1>
        </div>
      </div>
      <h1 className="text-center xl:text-6xl lg:text-6xl md:text-6xl text-4xl text-white font-semibold -mt-3">My History of <span className="text-gradient text-center">Success</span>.</h1>
      <div
        className="flex flex-col gap-7 relative z-30 xl:w-auto lg:w-auto md:w-full w-full">
        <motion.div initial={{x:-200}} whileInView={{x:0,transition:{duration:.5}}}  className="flex flex-col lg:flex-row md:flex-row gap-5 bg-[#242323] shadow-2xl shadow-black" >
          <img src={Aec} alt="college"  className="h-[25vh] w-full lg:w-[22vw] md:w-[22vw]"/>
          <div className="pr-10 p-3 flex flex-col justify-evenly bg-[#242323]">
            <h1 className="lg:text-[4vh] md:text-[4vh] text-[2.4vh] font-bold text-white">Bachelor of Enginnering in Computer Science</h1>
            <h3 className="text-[2vh] font-semibold text-[#ff014f]">Asansol Engineering college (AEC)</h3>
            <h2 className="text-[3vh] font-semibold text-white">2022 - 2026 | Pursuing</h2>
          </div>
        </motion.div>
        <motion.div initial={{x:200}} whileInView={{x:0,transition:{duration:.5}}}  className="flex flex-col  lg:flex-row md:flex-row gap-5 z-10 bg-[#242323] shadow-2xl shadow-black" >
          <img src={jkrr} alt="college"  className="h-[25vh] w-full lg:w-[22vw] md:w-[22vw]"/>
          <div className="pr-10 p-3 flex flex-col justify-evenly">
            <h1 className="lg:text-[4vh] md:text-[4vh] text-[2.4vh] font-bold text-white">High School | Science</h1>
            <h3 className="text-[2vh] font-semibold text-[#ff014f]">J.K.R.R Hindi +2 High school</h3>
            <h2 className="text-[3vh] font-semibold text-white">2020 - 2022 | Completed</h2>
          </div>
        </motion.div>
        <motion.div initial={{x:-200}} whileInView={{x:0,transition:{duration:.5}}}  className="flex flex-col lg:flex-row md:flex-row gap-5 bg-[#242323] shadow-2xl shadow-black" >
          <img src={svs} alt="college"  className="h-[25vh] w-full lg:w-[22vw] md:w-[22vw]"/>
          <div className="pr-10 p-3 flex flex-col justify-evenly">
            <h1 className="lg:text-[4vh] md:text-[4vh] text-[2.4vh] font-bold text-white">School</h1>
            <h3 className="text-[2vh] font-semibold text-[#ff014f]">Swami Vivekananda School</h3>
            <h2 className="text-[3vh] font-semibold text-white">2010 - 2020 | Completed</h2>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Education;

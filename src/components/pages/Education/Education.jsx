import React from "react";
import student from '../../../Assests/teacher-svgrepo-com.svg'
import Aec from '../../../Assests/aec.png'
import jkrr from '../../../Assests/Govt-High-School-No.3-Abbottabad-1.png'
import svs from '../../../Assests/svs.png'
import { motion,Variants } from "framer-motion";

const containerVariants: Variants = {
  initial: {},
  animate: {
    transition: {
      staggerChildren: 0.2, // Adjust the delay between each child element
    },
  },
};
const childVariants: Variants = {
  initial: {
    opacity: 0,
    y: 80, // You can adjust the initial position as well
  },
  animate: {
    opacity: 1,
    y: 0,
  },
  whileInView: {
    // Define the animation properties for "whileInView" state
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 }, // Adjust the duration as needed
  },
};
const Education = () => {
  
  return (
    <div id="Education" className="h-auto mb-20 pt-[10vh] relative z-30 gap-6 flex flex-col justify-center items-center px-6">
      <div className="sideCircle absolute -right-[60vh] top-[13vh] w-[600px] h-[600px] rounded-full z-0 bg-[#FFD9D9]"></div>

      <div className="z-30 flex flex-col justify-center items-center gap-2 text-5xl font-bold">
        <div className="flex items-center gap-2">
          <img src={student} alt="admi" className="h-[7vh] w-auto" />
          <h1 className=" lg:text-[7vh] md:text-[7vh] text-3xl font-bold tracking-wide mb-2">
          My <span className="text-[#68a9e4]">Education</span>
        </h1>
        </div>
        <div className="w-[110%] h-[4px] bg-[#aacded] rounded-2xl">
          <div id="moving-div" className=" w-[8px] h-full rounded-full "></div>
        </div>
      </div>
      <h1 className="-mt-2 z-30 text-[2vh] font-semibold text-[#7b7777]">"Education is the passport to the future, for tomorrow belongs to those who prepare for it today." - Malcolm X</h1>
      <motion.div
      variants={containerVariants}
      initial="initial"
      animate="animate"
      whileInView="whileInView"
      className="flex flex-col gap-7 relative z-30">
        <motion.div variants={childVariants} className="flex flex-col lg:flex-row md:flex-row gap-5" style={{backgroundColor: "#fff",boxShadow: "0 0 10px rgba(0, 0, 0, 0.2)", }}>
          <img src={Aec} alt="college"  className="h-[20vh] w-full lg:w-[22vw] md:w-[22vw]"/>
          <div className="pr-10 p-3 flex flex-col justify-evenly">
            <h1 className="lg:text-[4vh] md:text-[4vh] text-[2.4vh] font-bold">Bachelor of Enginnering in Computer Science</h1>
            <h3 className="text-[2vh] font-semibold text-[#70ade6]">Asansol Engineering college (AEC)</h3>
            <h2 className="text-[3vh] font-semibold text-green-500">2022 - 2026 | Pursuing</h2>
          </div>
        </motion.div>
        <motion.div variants={childVariants} className="flex flex-col lg:flex-row md:flex-row gap-5" style={{backgroundColor: "#fff",boxShadow: "0 0 10px rgba(0, 0, 0, 0.2)", }}>
          <img src={jkrr} alt="college"  className="h-[20vh] w-full lg:w-[22vw] md:w-[22vw]"/>
          <div variants={childVariants} className="pr-10 p-3 flex flex-col justify-evenly">
            <h1 className="lg:text-[4vh] md:text-[4vh] text-[2.4vh] font-bold">High School | Science</h1>
            <h3 className="text-[2vh] font-semibold text-[#70ade6]">J.K.R.R Hindi +2 High school</h3>
            <h2 className="text-[3vh] font-semibold text-green-500">2020 - 2022 | Completed</h2>
          </div>
        </motion.div>
        <motion.div variants={childVariants} variants={childVariants} className="flex flex-col lg:flex-row md:flex-row gap-5" style={{backgroundColor: "#fff",boxShadow: "0 0 10px rgba(0, 0, 0, 0.2)", }}>
          <img src={svs} alt="college"  className="h-[20vh] w-full lg:w-[22vw] md:w-[22vw]"/>
          <div className="pr-10 p-3 flex flex-col justify-evenly">
            <h1 className="lg:text-[4vh] md:text-[4vh] text-[2.4vh] font-bold">School</h1>
            <h3 className="text-[2vh] font-semibold text-[#70ade6]">Swami Vivekananda School</h3>
            <h2 className="text-[3vh] font-semibold text-green-500">2010 - 2020 | Completed</h2>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Education;

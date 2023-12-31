import React from "react";
import { BsEye, BsGithub, BsViewList } from "react-icons/bs";
import { FaLink } from "react-icons/fa";
import { motion } from "framer-motion";
import Tilt from "react-vanilla-tilt";

const ProjectCard = ({ imgSrc, heading, description, link ,gitLink }) => {
  return (
    <Tilt style={{zIndex:0}}> 
        <motion.div initial={{rotate : -20,x:-300}} whileInView={{rotate : 0, x: 0, transition :{duration:.5,delay:.1}}} className="w-auto h-[270px] group relative flex flex-col items-end justify-end z-30 overflow-y-hidden rounded-md shadow-md shadow-white">
        <img src={imgSrc} alt={imgSrc} className="w-full h-full absolute z-10" />
        <div className="flex flex-col items-center justify-start  text-white absolute z-20 top-[230px] group-hover:top-[30px] transition-all h-full duration-500 bg-[#242323ef]">
            <div className="w-full pl-2 bg-[#000] font-bold text-2xl py-1">
            {heading}
            </div>
            <div className="px-5 pt-4 font-semibold">{description}</div>
            <div className="flex w-full justify-between items-center px-5 pb-7 mt-3">
            <button className="flex justify-center items-center px-3 py-1 rounded-lg">
                <a href={link} target="_blank" className="flex justify-center items-center gap-3">
                    <p className="text-center">view</p>
                    <BsEye className="text-center"/>
                </a>
            </button>
            <button className="flex justify-center items-center px-3 py-1 rounded-lg">
                <a href={gitLink} target="_blank" className="flex justify-center items-center gap-3">
                    <p className="text-center">code</p>
                    <FaLink className="text-center"/>
                </a>
            </button>
            </div>
        </div>
        </motion.div>
    </Tilt>
  );
};

export default ProjectCard;

import React from "react";
import reactIcon from "../../../Assests/icons/react-svgrepo-com.svg";
import node from "../../../Assests/icons/node-js-svgrepo-com.svg";
import express from "../../../Assests/icons/node-js-svgrepo-com (1).svg";
import Typescript from "../../../Assests/icons/Typescript.png";
import NextJs from "../../../Assests/icons/next-js.svg";
import python from "../../../Assests/icons/python-svgrepo-com.svg";
import js from "../../../Assests/icons/js-official-svgrepo-com.svg";
import cpp from "../../../Assests/icons/c-.png";
import { motion } from "framer-motion";

const skills = [
  {
    imgSrc: reactIcon,
    text: "ReactJs",
    level: 80,
  },
  {
    imgSrc: express,
    text: "NodeJs",
    level: 80,
  },
  {
    imgSrc: node,
    text: "ExpressJs",
    level: 90,
  },

  {
    imgSrc: Typescript,
    text: "Typescript",
    level: 85,
  },
  {
    imgSrc: NextJs,
    text: "NextJs",
    level: 85,
  },
  {
    imgSrc: python,
    text: "Python",
    level: 70,
  },
  {
    imgSrc: js,
    text: "JavaScript",
    level: 75,
  },
  {
    imgSrc: cpp,
    text: "CPP",
    level: 90,
  },
];

const SkillLevel = () => {
  return (
    <div className="xl:w-[70vw] lg:w-[70vw] md:w-[95vw] w-[93vw] px-4 mx-auto border-2 bg-[#242323] shadow-2xl shadow-black border-white/60 rounded-xl flex flex-wrap justify-center items-center gap-x-9 gap-y-4 py-8">
      {skills.map((item, index) => (
        <div
          key={index}
          className="xl:w-[400px] lg:w-[400px] md:w-[300px] w-[300px] flex flex-col gap-1"
        >
          <div className="flex items-center justify-start gap-2">
            <img src={item.imgSrc} alt={item.text} className={`${item.text === "NextJs" ? "bg-white" : ""} rounded-full`}/>
            <div className="text-white text-lg font-medium">{item.text}</div>
          </div>
          <div className="flex justify-between items-center gap-3">
            <div className="w-full bg-white/50 h-[2px] relative z-10">
              {/* Progress bar */}
              <motion.div
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: item.level / 100 }}
                transition={{ duration: 2 }}
                className="absolute z-20 w-full h-[2px] bg-[#ff014f] origin-left top-0 flex justify-end items-end"
              >
                <div className="absolute block z-30 w-[20px] h-[20px] border-[1px] border-[#ff014f] -top-2 bg-[#fff] rounded-full">
                  <div className="w-[12px] h-[12px] bg-[#ff014f] mx-auto mt-[3.5px] rounded-full"></div>
                </div>
              </motion.div>
              {/* Progress bar thumb */}

              {/* <motion.div
                initial={{ x: 0 }}
                whileInView={{ x: `${item.level * 10}%` }}
                transition={{ duration: 2 }}
                className="absolute xl:hidden lg:hidden md:block block z-30 w-[20px] h-[20px] border-[1px] border-[#ff014f] -top-2 bg-[#fff] rounded-full"
              >
                <div className="w-[12px] h-[12px] bg-[#ff014f] mx-auto mt-[3.5px] rounded-full"></div>
              </motion.div> */}
            </div>
            <div className="text-white/90">{item.level}%</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SkillLevel;

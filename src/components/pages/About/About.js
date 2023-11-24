import React from "react";
import pic from "../../../Assests/pic.jpeg";
import person from "../../../Assests/man.png";
import Tilt from "react-vanilla-tilt";
import { motion } from "framer-motion";
import "./about.css";
import { FaChevronCircleRight } from "react-icons/fa";

const About = () => {
  return (
    <div className="overflow-x-hidden h-auto py-20  w-full mx-auto flex flex-col justify-center items-center gap-[9vh]">
      <motion.div
        initial={{ opacity: 0, x: 100 }}
        whileInView={{ opacity: 1, x: 0 }}
        // transition={{duration:2}}
        className="absolute -right-[55vh] w-[40vw] h-[75.5vh] rounded-full z-0 bg-[#FFD9D9] duration-500 ease-linear"
      ></motion.div>
      <div className="flex flex-col justify-center relative z-10 items-center gap-2 text-5xl font-bold">
        <div className="flex items-center gap-2">
          <img src={person} alt="admi" className="h-[7vh] w-auto" />
          About <span className="text-[#94c1eb]">Me</span>
        </div>
        <div className="w-[110%] h-[4px] bg-[#aacded] rounded-2xl">
          <div id="moving-div" className=" w-[8px] h-full rounded-full "></div>
        </div>
      </div>
      <div className="flex lg:flex-row flex-col  relative z-10  w-[85vw] justify-center items-center gap-[6vw]">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.5 }}
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
            className="text-4xl font-extrabold"
          >
            I'm shivam
          </motion.h1>
          <h2 className="text-[2.2vh] font-bold">
            Passionate Full Stack Developer | Compititive Programmer
          </h2>
          <motion.p
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2 }}
            className="font-medium text-[#625f5f] text-[2vh]"
          >
            I'm a second-year Computer Science student at Asansol Engineering
            College, deeply passionate about tech. At GDSC AEC, I'm a
            Competitive Programming Facilitator, working on our club's website
            and diving into web development challenges with my team.
          </motion.p>
          <motion.p
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.4 }}
            className="font-medium text-[#625f5f] text-[2vh]"
          >
            My tech journey is hands-on—I love solving problems and coding. I
            learn best by doing, exploring software development beyond the
            classroom.
          </motion.p>
          <motion.p
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.6 }}
            className="font-medium text-[#625f5f] text-[2vh]"
          >
            Absolutely, how about this? Beyond personal growth, I'm all about
            community. While I don't create content online, I'm dedicated to
            learning with my peers and contributing to the advancement of our
            tech circle.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: -160 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="flex flex-wrap text-sm gap-1"
          >
            <div className="w-[48%] mb-2">
              <span className="text-[#1c7cdb]">Age</span> : 19
            </div>
            <div className="w-[48%] mb-2">
              <span className="text-[#1c7cdb]">Email</span> :
              shivamshaw9005@gamil.com
            </div>
            <div className="w-[48%] mb-2">
              <span className="text-[#1c7cdb]">College</span>: Asansol
              Engineering College
            </div>
            <div className="w-[48%] mb-2">
              <span className="text-[#1c7cdb]">Place</span> : Dhanbad,
              Jharkhand, India
            </div>
          </motion.div>
        </div>
      </div>
      <a
        href="https://drive.google.com/file/d/1yRtEVB0iWZ90joIf8oiVaGaeoXSrFthj/view?usp=drive_link"
        download="https://drive.google.com/file/d/1yRtEVB0iWZ90joIf8oiVaGaeoXSrFthj/view?usp=drive_link"
      >
        <button className="px-8 py-3 bg-[#4b97dd] rounded-full text-xl font-semibold hover:font-bold hover:scale-90 shadow-xl hover:shadow-2xl transition-all duration-500">
          Resume{" "}
          <span>
            <FaChevronCircleRight className="inline " />
          </span>
        </button>
      </a>
    </div>
  );
};

export default About;

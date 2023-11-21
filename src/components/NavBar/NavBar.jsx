import React, { useState, useRef } from "react";
import Logo from "../../Assests/e81f2a50-f965-4a1b-b4ce-19d1c8256623.png";
import "./navBar.css";
import bar from "../../Assests/bars-right-svgrepo-com.svg";
import times from "../../Assests/times-svgrepo-com.svg";
import { motion, stagger } from "framer-motion";
import { Link} from 'react-scroll';


const section = ["Home", "About", "Skill", "Education", "Projects", "Contact"];

const NavBar = () => {
  const topNavRef = useRef();
  // animate(".item", { x: 300 }, { delay: stagger(0.1) })
  // animate(section, {duration:10})
  const variants = {
    visible:(i)=>({
      opacity:1,
      x:0,
      transition:{delay:i*0.06},
    }),
    hidden:{opacity:0,x:290}
  }
  const [navActive, setNavtActive] = useState(false);
  const navHandler = () => {
    setNavtActive((prev) => !prev);
  };
  return (
    <motion.nav
      initial={{ opacity: 0, top: -10 }}
      transition={{ duration: 2 }}
      animate={{ opacity: 1, top: 0 }}
      id="nav"
      className="h-[7vh] w-[100%]  z-50 py-2 lg:px-[8rem] md:px-[8rem] px-[5vw] flex justify-between  fixed top-0 items-center shadow-md"
    >
      <div className="flex justify-center items-center">
        <img src={Logo} alt="" className="h-6" />
        <h1 className="font-bold text-[#545454]">SHIVAM</h1>
      </div>
      <motion.div className="lg:block md:block hidden">
        <ul className="flex justify-center items-center gap-6 text-[.82em]">
          {section.map((item, index) => (
            <li
              key={index}
              className="topNav text-[#8a8585] hover:text-[#9bcdff] text-sm font-semibold hover:font-bold hover:border-b-[3px] hover:border-b-[#9bcdff] transition-all duration-300 "
              ref={topNavRef}
            >
              <Link className="cursor-pointer" to={item} spy={true} smooth={true} offset={-70} duration={800}><a href={`#${item}`}>{item}</a></Link>
            </li>
          ))}
        </ul>
      </motion.div>
      <div className=" lg:hidden md:hidden block p-3 ">
        {navActive ? (
          <div className="flex flex-col justify-center items-center absolute top-[0vh] right-0">
            <div className="flex items-center justify-center  rounded-full">
              <img
                onClick={navHandler}
                src={times}
                alt="bar"
                className="lg:hidden md:hidden block h-[7vh] absolute right-[7vw] top-[.1vh]"
              />
            </div>
            {navActive && (
              <motion.ul
                // initial={{ opacity: 0,sacle:0, x: 50 }}
                // transition={{ duration: 0.5 }}
                // animate={{ opacity: 1, scale: 1, x: 0 }}
                initial="hidden" animate="visible" variants={variants}
                className="flex flex-col justify-center bg-[#e6f0fa] items-center gap-12 shadow-2xl rounded-b-xl  mt-[7.01vh]  p-3 w-[100vw] h-[93vh] text-[.82em]"
              >
                {section.map((item, index) => (
                  <motion.li
                    key={index}
                    className=".item text-3xl text-[#8a8585] hover:text-[#9bcdff] font-semibold hover:font-bold hover:border-b-[3px] hover:border-b-[#9bcdff] transition-all duration-300 "
                    onClick={navHandler}
                    variants={variants}
                    custom={index}
                  >
                    <a href={`#${item}`}>{item}</a>
                  </motion.li>
                ))}
              </motion.ul>
            )}
          </div>
        ) : (
          <img
            onClick={navHandler}
            src={bar}
            alt="bar"
            className="lg:hidden md:hidden block h-[4vh]"
          />
        )}
      </div>
    </motion.nav>
  );
};

export default NavBar;

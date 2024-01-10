import React, { useState, useRef } from "react";
import Logo from "../../Assests/e81f2a50-f965-4a1b-b4ce-19d1c8256623.png";
import "./navBar.css";
import bar from "../../Assests/bars-right-svgrepo-com.svg";
import { FaTimes } from "react-icons/fa";
import { motion } from "framer-motion";
import { Link } from "react-scroll";

const section = ["Home", "About", "Skill", "Education", "Projects", "Contact"];

const NavBar = () => {
  const topNavRef = useRef();
  const variants = {
    visible: (i) => ({
      opacity: 1,
      x: 0,
      transition: { delay: i * 0.06 },
    }),
    hidden: { opacity: 0, x: 90 },
  };
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
      className="h-[7vh] w-[100%]  z-50 py-2 lg:px-[8rem] md:px-[8rem] px-[5vw] flex justify-between  fixed top-0 items-center shadow-md rounded-b-xl"
    >
      <div className="flex justify-center items-center">
        <h1 className="font-bold text-[#fff]">SHIVAM.</h1>
        <img src={Logo} alt="" className="h-6"style={{filter:"grayscale(100%)"}} />
      </div>
      <motion.div className=" xl:block lg:block md:block hidden">
        <ul className="flex justify-center items-center gap-6 text-[.82em]">
          {section.map((item, index) => (
            <li
              key={index}
              className="topNav text-[#fff] hover:text-[#ff014f] text-sm font-semibold hover:font-bold hover:border-b-[3px] hover:border-b-[#ff014f] transition-all duration-300 "
              ref={topNavRef}
            >
              <Link
                className="cursor-pointer"
                to={item}
                spy={true}
                smooth={true}
                offset={-70}
                duration={800}
              >
                <a href={`#${item}`}>{item}</a>
              </Link>
            </li>
          ))}
        </ul>
      </motion.div>
      <div className=" lg:hidden md:hidden block p-3 ">
        {navActive ? (
          <div className="flex flex-col justify-center items-center absolute top-[0vh] right-0">
            <div className="flex items-center justify-center  rounded-full">
              <FaTimes
                className="lg:hidden md:hidden block h-[7vh] absolute right-[10vw] top-[.1vh]"
                onClick={navHandler}
              />
            </div>
            {navActive && (
              <div className="w-[100vw] flex h-[90vh] mt-[7vh] relative">
                <motion.ul
                  initial="hidden"
                  animate="visible"
                  variants={variants}
                  className="w-[80vw] flex flex-col justify-start bg-[#212121] items-start px-4 shadow-2xl rounded-b-xl  h-[100vh] text-[.82em]"
                >
                  {section.map((item, index) => (
                    <a href={`#${item}`} className=" text-xl w-full text-white hover:text-[#ff014f] font-medium hover:font-bold border-b-[.5px] border-b-[#fff] transition-all duration-300">
                      <motion.li
                        key={index}
                        className=" .item text-xl w-full text-white py-6 hover:text-[#ff014f] font-medium hover:font-bold transition-all duration-300"
                        onClick={navHandler}
                        custom={index}
                      >
                        {item}
                      </motion.li>
                    </a>
                  ))}
                </motion.ul>
                <div className="w-[20vw] bg-black/20  h-[100vh]"></div>
              </div>
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

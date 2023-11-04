import React, { useState } from "react";
import Logo from "../Assests/e81f2a50-f965-4a1b-b4ce-19d1c8256623.png";
import "../navBar.css";
import bar from "../Assests/bars-right-svgrepo-com.svg";
import times from "../Assests/times-svgrepo-com.svg";

const NavBar = () => {
  const [navActive, setNavtActive] = useState(false);
  return (
    <nav
      id="nav"
      className="h-[4rem] w-[100%]  z-50 py-2 lg:px-[8rem] md:px-[8rem] px-[5vw] flex justify-between  fixed top-0 items-center shadow-md"
    >
      <div className="flex justify-center items-center">
        <img src={Logo} alt="" className="h-6" />
        <h1 className="font-bold text-[#545454]">SHIVAM</h1>
      </div>
      <div className="lg:block md:block hidden">
        <ul className="flex justify-center items-center gap-6 text-[.82em]">
          <li className="text-[#8a8585] hover:text-[#9bcdff] text-sm font-semibold hover:font-bold hover:border-b-[3px] hover:border-b-[#9bcdff] transition-all duration-300">
            <a href="#Home">Home</a>
          </li>
          <li className="text-[#8a8585] hover:text-[#9bcdff] text-sm font-semibold hover:font-bold hover:border-b-[3px] hover:border-b-[#9bcdff] transition-all duration-300">
            <a href="#About">About</a>
          </li>
          <li className="text-[#8a8585] hover:text-[#9bcdff] text-sm font-semibold hover:font-bold hover:border-b-[3px] hover:border-b-[#9bcdff] transition-all duration-300">
            <a href="#Skill">Skill</a>
          </li>
          <li className="text-[#8a8585] hover:text-[#9bcdff] text-sm font-semibold hover:font-bold hover:border-b-[3px] hover:border-b-[#9bcdff] transition-all duration-300">
            <a href="#Education">Education</a>
          </li>
          <li className="text-[#8a8585] hover:text-[#9bcdff] text-sm font-semibold hover:font-bold hover:border-b-[3px] hover:border-b-[#9bcdff] transition-all duration-300">
            <a href="#Projects">Projects</a>
          </li>
          <li className="text-[#8a8585] hover:text-[#9bcdff] text-sm font-semibold hover:font-bold hover:border-b-[3px] hover:border-b-[#9bcdff] transition-all duration-300">
            <a href="#Contact">Contact</a>
          </li>
        </ul>
      </div>
      <div className=" lg:hidden md:hidden block p-3 rounded-full">
        {navActive ? (
          <div className="flex flex-col justify-center items-centermt-[30vh] absolute top-1 right-2">
            <div className="flex items-center justify-center  rounded-full">
            <img
              onClick={() => setNavtActive((prev) => !prev)}
              src={times}
              alt="bar"
              className="lg:hidden md:hidden block h-[7vh]"
            />
            </div>
            {navActive && <ul className="flex flex-col justify-center shadow-2xl rounded-b-xl items-center  gap-3 p-3 bg-white text-[.82em]">
              <li className="text-[#8a8585] hover:text-[#9bcdff] text-sm font-semibold hover:font-bold hover:border-b-[3px] hover:border-b-[#9bcdff] transition-all duration-300">
                <a href="#Home">Home</a>
              </li>
              <li className="text-[#8a8585] hover:text-[#9bcdff] text-sm font-semibold hover:font-bold hover:border-b-[3px] hover:border-b-[#9bcdff] transition-all duration-300">
                <a href="#About">About</a>
              </li>
              <li className="text-[#8a8585] hover:text-[#9bcdff] text-sm font-semibold hover:font-bold hover:border-b-[3px] hover:border-b-[#9bcdff] transition-all duration-300">
                <a href="#Skill">Skill</a>
              </li>
              <li className="text-[#8a8585] hover:text-[#9bcdff] text-sm font-semibold hover:font-bold hover:border-b-[3px] hover:border-b-[#9bcdff] transition-all duration-300">
                <a href="#Education">Education</a>
              </li>
              <li className="text-[#8a8585] hover:text-[#9bcdff] text-sm font-semibold hover:font-bold hover:border-b-[3px] hover:border-b-[#9bcdff] transition-all duration-300">
                <a href="#Projects">Projects</a>
              </li>
              <li className="text-[#8a8585] hover:text-[#9bcdff] text-sm font-semibold hover:font-bold hover:border-b-[3px] hover:border-b-[#9bcdff] transition-all duration-300">
                <a href="#Contact">Contact</a>
              </li>
            </ul>}
          </div>
        ) : (
          <img
            onClick={() => setNavtActive((prev) => !prev)}
            src={bar}
            alt="bar"
            className="lg:hidden md:hidden block h-[4vh]"
          />
        )}
      </div>
    </nav>
  );
};

export default NavBar;

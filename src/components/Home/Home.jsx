import React from "react";
import Typewriter from "typewriter-effect";
import pic from '../../Assests/pic.jpeg'
import {AiOutlineArrowUp} from 'react-icons/ai'
import Links from "../Links/Links";

const Home = () => {
  return (
    <div id="Home" className="h-[91vh]  w-[85vw] mx-auto flex justify-center items-center">
      <div className="w-[60%] pl-[8vw] flex flex-col gap-4">
        <h1 className="text-5xl text-[#294f7a] font-bold">Hi There,</h1>
        <h1 className="text-5xl font-bold">I'm Shivam <span className="text-[#68a9e4]">Shaw</span></h1>
        <div className="text-3xl font-bold flex">
          <h1>I'm into&nbsp;</h1>
          <span className=" text-[#68a9e4] flex">&lt;
            <Typewriter
              options={{
                strings: [
                  "Full-Stack Development",
                  "Tech Communities",
                  "Compititive Programming",
                ],
                autoStart: true,
                loop: true,
                delay: 60,
              }}
            />&gt;
          </span>
        </div>
        <a href=""><button className="flex items-center bg-[#4b97dd] px-6 py-2 text-sm font-semibold rounded-3xl cursor-pointer"><span>Visit All Links&nbsp;</span> <span><AiOutlineArrowUp/></span></button></a>
        <Links/>
      </div>
      <div className="w-[40%] flex items-center ">
        <img src={pic} alt="pic" className="rounded-full h-[60vh]"/>
      </div>
    </div>
  );
};

export default Home;

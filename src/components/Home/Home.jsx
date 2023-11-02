import React, { useEffect } from "react";
import Typewriter from "typewriter-effect";
import pic from "../../Assests/pic.jpeg";
import { AiOutlineArrowUp } from "react-icons/ai";
import Links from "../Links/Links";
import ParticleBackGround from "./ParticleBackGround";
import "./home.css";
import Tilt from "react-vanilla-tilt";
const Home = () => {
  return (
    <>
      <ParticleBackGround />
      <div
        id="Home"
        className="h-[100vh] w-full mx-auto flex justify-center items-center"
      >
        <div className="w-[60%] pl-[14vw] flex flex-col gap-4">
          <h1 className="text-5xl text-[#294f7a] font-bold">Hi There,</h1>
          <h1 className="text-5xl font-bold">
            I'm Shivam <span className="text-[#68a9e4]">Shaw</span>
          </h1>
          <div className="text-3xl font-bold flex">
            <h1>I'm into&nbsp;</h1>
            <span className=" text-[#68a9e4] flex">
              &lt;
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
              />
              &gt;
            </span>
          </div>
          <a href="">
            <button className="flex items-center bg-[#4b97dd] px-6 py-2 text-sm  rounded-3xl cursor-pointer font-semibold hover:font-bold hover:scale-95 shadow-xl hover:shadow-2xl transition-all duration-500">
              <span>Visit All Links&nbsp;</span>{" "}
              <span>
                <AiOutlineArrowUp />
              </span>
            </button>
          </a>
          <Links />
        </div>
        <div className="w-[40%] h-auto flex items-center rounded-full ">
          <Tilt style={{ borderRadius: "50%" }}>
            <img
              src={pic}
              alt="pic"
              className="w-[33vw] h-[60vh] shadow-2xl"
              style={{ borderRadius: "50%" }}
            />
          </Tilt>
        </div>
      </div>
    </>
  );
};

export default Home;

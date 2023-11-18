import Typewriter from "typewriter-effect";
import pic from "../../../Assests/pic.jpeg";
import { AiOutlineArrowUp } from "react-icons/ai";
import Links from "../Links/Links";
import "./home.css";
import Tilt from "react-vanilla-tilt";
import {motion, spring,} from 'framer-motion'

const Home = () => {
  return (
    <>
      <div
        
        className="overflow-x-hidden h-[100vh] w-full mx-auto flex lg:flex-row flex-col justify-center items-center pt-[8vh] lg:pt-[22vh] md:pt-[80vh] lg:pb-[10vh] md:pb-[70vh] pb-[2vh] gap-8"
      >
        <motion.div 
          initial={{opacity:0,y:-100}}
          whileInView={{opacity:1,y:0}}
          transition={{duration:2}}
          className="w-auto flex items-start flex-col gap-4 px-8">
          <div className="flex flex-col items-center">
            <motion.h1
              // initial={{opacity:0,x:-30}}
              // transition={{duration:1.5,type:spring, stiffness:100}}
              
              // animate={{opacity:1,x:0}}
              // whileInView={{opacity:1}}
             className="text-5xl text-[#294f7a] font-bold mb-2">
              Hi There,
            </motion.h1>
            <motion.div
              // initial={{opacity:0,x:-30}}
              // transition={{duration:1}}
              // animate={{opacity:1,x:0}}
              // whileInView={{opacity:1}} 
              className="w-[110%] h-[4px] bg-[#aacded] rounded-2xl">
              <div
                id="moving-div"
                className=" w-[8px] h-full rounded-full "
              ></div>
            </motion.div>
          </div>

          <h1 className="lg:text-6xl md:text-6xl text-[4.7vh] font-bold">
            I'm Shivam <span className="text-[#68a9e4]">Shaw</span>
          </h1>
          <div className="lg:text-2xl md:text-2xl text-[2vh]  font-bold flex">
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
        </motion.div>
        <motion.div 
         initial={{opacity:0,scale:0.3}}
         transition={{duration:1.5}}
         whileInView={{opacity:1,scale:1}}
        className="w-auto h-auto flex items-center rounded-full ">
          <Tilt
           style={{ borderRadius: "50%" }}>
            <img
              src={pic}
              alt="pic"
              className="lg:w-[30vw] md:w-[45vw] w-[80vw] h-auto  shadow-2xl"
              style={{ borderRadius: "50%" }}
            />
          </Tilt>
        </motion.div>
      </div>
    </>
  );
};

export default Home;

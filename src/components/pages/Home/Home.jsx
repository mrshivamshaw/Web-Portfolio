import Typewriter from "typewriter-effect";
import pic from "../../../Assests/IMG_20231224_094829_777-removebg-preview.png";
import Links from "../Links/Links";
import "./home.css";
import Tilt from "react-vanilla-tilt";
import { motion, spring } from "framer-motion";
import { FiPhoneCall } from "react-icons/fi";

const Home = () => {
  return (
    <div className="mainBg w-full h-auto pb-16 xl:pt-28 lg:pt-28 md:pt-16 pt-16 relative z-10 mainBg border-b-2 border-white/20 shadow-xl ">
      <div className="home overflow-x-hidden h-auto md:h-auto xl:mt-0 lg:mt-0 md:mt-8 mt-2 lg:h-[80vh] xl:h-[80vh] border-2 py-5 border-white/20 shadow-2xl shadow-black rounded-lg overflow-y-hidden w-[95%] mx-auto flex lg:flex-row flex-col justify-between items-center xl:gap-16 lg:gap-16 md:gap-16 gap-0 xl:px-10 lg:px-10 md:px-5 px-5">
        <motion.div
        
          className="w-auto flex xl:items-start lg:items-start md:items-center items-center flex-col xl:gap-6 lg:gap-6 md:gap-4 gap-4"
        >
          <motion.div
            initial={{opacity:0,y:-40}}
            whileInView={{opacity:1,y:0}}
            transition = {{duration:.4}} 
            className="flex flex-col items-center">
            <motion.div 
              
              className="xl:text-5xl lg:text-5xl md:text-xl text-xl text-[#fff] font-bold mb-2 heading rounded-lg" >
              WELCOME TO MY WORLD
            </motion.div>
          </motion.div>

          <motion.h1 
          initial={{opacity:0,y:-40}}
          whileInView={{opacity:1,y:0}}
          transition = {{duration:.4}} className="xl:text-7xl lg:text-7xl md:text-6xl text-6xl text-center font-bold text-[#fff]">
            Hello I'm <span className="text-gradient">Shivam</span>
          </motion.h1>
          <div className="xl:text-3xl lg:text-3xl md:text-2xl text-[1.1rem]  font-bold flex">
            <h1 className="text-[#fff]">I'm into&nbsp;</h1>
            <span className=" text-gradient flex">
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
          <p className="text-white/70 xl:text-2xl lg:text-2xl md:text-lg text-lg font-normal text-center">I am Gifted for experience with Better Service & Faster. I was able to help <br /> the client and successfully created with an identity.</p>
          <div className="text-[#ff014f] flex xl:flow-row lg:flex-row md:flex-col flex-col items-start justify-center gap-9">
            <Links />
            <div className="flex justify-center items-center gap-2 w-full">
              <div className='p-2 rounded-md border-[1px] border-black/20 bg-white/10 hover:bg-black/40 '><FiPhoneCall className=' h-[25px] w-[25px] text-white '/></div>
              <span className="text-white text-xl font-medium">+91 9142574541</span>
            </div>
          </div>
        </motion.div>
        <div
          className="w-auto h-full xl:absolute lg:absolute md:static static z-20 right-12 flex items-center "
        >
            <img
              src={pic}
              alt="pic"
              className=" h-[708px]  w-auto"
            />
          {/* <Tilt style={{ borderRadius: "0%" }}>
          </Tilt> */}
        </div>
      </div>
    </div>
  );
};

export default Home;

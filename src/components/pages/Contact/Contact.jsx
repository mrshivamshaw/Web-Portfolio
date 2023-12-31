import React, { useState } from "react";
import contact from "../../../Assests/contact-book-svgrepo-com.svg";
import "./contact.css";
import { MdMail, MdMessage, MdPerson, MdPhone } from "react-icons/md";
import Links from "../Links/Links";
import { motion } from "framer-motion";
import axios from "axios";
import 'react-toastify/dist/ReactToastify.css';
import { toast } from "react-toastify";


const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMeassage] = useState("");

  const formSubmitHandler = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "https://web-portfolio-backend-xi.vercel.app/send-email",
        {
          name,
          phone,
          email,
          message,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      if(response.status >= 200 && response.status < 300) {
        toast.success("Thanks for contacting 😊")
      }
      else{
        toast.error("Unable to contact")
      }
    } catch (error) {
      console.log(error);
    }

    setName("");
    setEmail("");
    setPhone("");
    setMeassage("");
  };

  return (
    <div
      id="Contact"
      className="mainBg border-b-2 border-white/20 overflow-x-hidden h-auto  overflow-y-hidden relative z-30 gap-6 flex flex-col justify-center items-center  bg-[#f2f9f9]"
    >
      <div className="contact-bg py-20 flex flex-col justify-center items-center gap-2 font-bold w-full">
        <div className="flex  rounded-lg items-center gap-2">
          <img src={contact} alt="admi" className="h-[7vh] w-auto" />
          <h1 className="xl:text-7xl lg:text-7xl md:text-3xl text-4xl font-bold tracking-wide text-white mb-2">
            Contact Me
          </h1>
        </div>
      </div>

      <div className="z-20 w-full pb-10 pt-5  flex flex-col xl:flex-row lg:flex-row md:flex-row justify-between xl:px-10 lg:px-10 md:px-4 px-4 items-center gap-6">
        <div className=" flex xl:w-[50%] lg:w-[50%] md:w-full w-full flex-col items-start justify-start gap-7">
          <div className=" flex justify-center items-center xl:w-auto lg:w-auto md:w-full w-full">
            <h1
              className="heading text-center  text-white lg:text-[7vh] md:text-[7vh] text-3xl rounded-lg tracking-widest"
              style={{ paddingBottom: "20px" }}
            >
              CONTACT ME
            </h1>
          </div>
          <div className="text-white xl:text-6xl lg:text-6xl md:text-6xl text-4xl font-semibold">
            How can I <span className="text-gradient">Help</span> you?
          </div>
          <div className="text-white/70 text-xl font-medium">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Qui,
            ipsam.
          </div>
          <div className="text-white/40 text-base ">
            Lorem ipsum dolor sit amet consectetur, Lorem ipsum dolor sit amet
            consectetur, adipisicing elit. Culpa, repudiandae. adipisicing elit.
            Qui, ipsam.
          </div>
          <div>
            <div className="text-white/40 flex justify-start items-center  border-b border-white/40 w-full pb-2 xl:text-lg lg:text-lg md:text-lg text-base">
              <div className="">ADDRESS</div>
              <div className="text-white/90">
                {" "}
                :&nbsp;&nbsp; DHANBAD, JHARKHAND
              </div>
            </div>
            <div className="text-white/40 flex justify-start items-center  border-b border-white/40 w-full pb-2 xl:text-lg lg:text-lg md:text-lg text-base">
              <div className="">PHONE</div>
              <div className="text-white/90"> :&nbsp; +91 9142574541</div>
            </div>
            <div className="text-white/40 flex justify-start  items-center border-b border-white/40 w-full pb-2 xl:text-lg lg:text-lg md:text-lg text-base">
              <div className="">EMAIL</div>
              <div className="text-white/90">
                {" "}
                :&nbsp;&nbsp; shivamshaw9005@gmail.com
              </div>
            </div>
          </div>
          <Links />
        </div>
        <motion.div
          initial={{ x: 200 }}
          whileInView={{ x: 0, transition: { duration: 0.5 } }}
          className=" xl:px-8 lg:px-8 md:px-4 px-4 py-4 border-2 xl:w-[50%] lg:w-[50%] md:w-full w-full border-black/70 bg-[#242323] shadow-2xl shadow-black rounded-lg "
        >
          <form className=" flex flex-col gap-3">
            <div className="text-3xl font-semibold pb-8 text-white">
              GET FREE QOUTE NOW!
            </div>
            <div className="flex justify-start gap-2 items-center border-1 w-full border-black rounded-lg px-4 bg-[#f1efef]">
              <MdPerson className="text-black" />
              <input
                type="text"
                className="border-none bg-[#f1efef] py-2 font-semibold"
                placeholder="First name"
                onChange={(e) => {
                  setName(e.target.value);
                }}
                value={name}
              />
            </div>
            <div className="flex justify-start gap-2 items-center border-1 w-full border-black rounded-lg px-4 bg-[#f1efef]">
              <MdPhone className="text-black" />
              <input
                type="text"
                className="border-none bg-[#f1efef] py-2 font-semibold"
                placeholder="Phone"
                onChange={(e) => {
                  setPhone(e.target.value);
                }}
                value={phone}
              />
            </div>
            <div className="flex justify-start gap-2 items-center border-1 w-full border-black rounded-lg px-4 bg-[#f1efef]">
              <MdMail className="text-black" />
              <input
                type="text"
                className="border-none bg-[#f1efef] py-2 font-semibold"
                placeholder="Mail"
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                value={email}
              />
            </div>
            <div className="flex justify-strat gap-2 items-start border-1  border-black rounded-lg px-4 py-1 bg-[#f1efef]">
              <MdMessage className="text-black/40 mt-2" />
              <textarea
                type="text"
                className="border-none bg-[#f1efef] h-28 md:w-[13vw] xl:w-[13vw] lg:w-[13vw] w-full pl-2 font-semibold "
                placeholder="message..."
                height={10}
                onChange={(e) => {
                  setMeassage(e.target.value);
                }}
                value={message}
              />
            </div>
            <button
              onClick={formSubmitHandler}
              className="w-full py-2 rounded-lg font-semibold hover:font-bold transition-all duration-500 hover:opacity-80"
            >
              SEND MESSAGE{" "}
            </button>
            <p className="line-clamp-2 text-sm text-white/80 font-semibold">
              Contact details: the smallest print that holds the biggest
              connections.
            </p>
          </form>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;

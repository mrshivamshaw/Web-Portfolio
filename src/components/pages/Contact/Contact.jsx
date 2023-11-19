import React from "react";
import contact from "../../../Assests/contact-book-svgrepo-com.svg";
import "./contact.css";
import ContactGif from "../../../Assests/output-onlinegiftools.gif";
import icon from "../../../Assests/times-svgrepo-com.svg";
import { PiPhoneCallBold } from "react-icons/pi";
import { FiMail } from "react-icons/fi";
import { IoPersonSharp } from "react-icons/io5";
import shape from '../../../Assests/graph.png'
import {MdOutlineLocationOn,MdMessage} from 'react-icons/md'

const Contact = () => {
  return (
    <div
      id="Contact"
      className="overflow-x-hidden max-h-[100vh] overflow-y-hidden mb-20 relative z-30 gap-6 flex flex-col justify-center items-center px-6 bg-[#f2f9f9]"
    >
      <div className="triangle absolute bottom-12 right-12"></div>
      <img src={shape} alt="shape" className="h-[70vh] w-auto absolute shape top-[38vh] left-[-8vw]"/>
      <div className="flex flex-col justify-center items-center gap-2 text-5xl font-bold">
        <div className="flex items-center gap-2">
          <img src={contact} alt="admi" className="h-[7vh] w-auto" />
          <h1 className=" lg:text-[7vh] md:text-[7vh] text-3xl font-bold tracking-wide mb-2">
            Contact <span className="text-[#3d82c4]">Me</span>
          </h1>
        </div>
        <div className="w-[110%] h-[4px] bg-[#aacded] rounded-2xl">
          <div id="moving-div" className=" w-[8px] h-full rounded-full "></div>
        </div>
      </div>
      <h1 className="text-[2vh] font-semibold text-white/90 w-[63vw]">
        "Connect with Me! Whether it's about potential collaborations,
        discussing projects, or any inquiries, I'm excited to engage. Your
        message matters, so please don't hesitate to reach out using the contact
        details provided below. Looking forward to connecting!"
      </h1>
      <div className="w-[100%] flex justify-center items-center gap-6">
        <div className="w-auto flex flex-col items-center justify-center gap-3">
          <img src={ContactGif} className="w-[25vw] h-auto" />
          <div className="flex flex-col justify-center items-start gap-2">
          <h1 className="text-2xl font-bold mb-1 border-b-2 b ">Get in <span className="text-[#68a9e4]">Touch</span></h1>
          <div className="flex justify-center items-center gap-2  ">
            <PiPhoneCallBold className="text-[#68a9e4] text-[3.5vh] w-auto font-bold border border-[#68a9e4] rounded-full p-1"/>
            <span className="text-[#424141] font-semibold">+91 91-425-74541</span>
          </div>
          <div className="flex justify-center items-center gap-2">
              <FiMail className="text-[#68a9e4] text-[3.5vh] w-auto font-bold border border-[#68a9e4] rounded-full p-1"/>
               <span className="text-[#424141] font-semibold">shivamshaw9005@gmail.com</span>
          </div>
          <div className="flex justify-center items-center gap-2 ">
          <MdOutlineLocationOn className="text-[#68a9e4] text-[3.5vh] w-auto font-bold border border-[#68a9e4] rounded-full p-1"/><div className="text-[#424141] font-semibold">Chirkunda Dhanbad, India</div>
          </div>
          </div>
        </div>
        <div className=" px-2 py-2 border-2 bg-white rounded-lg w-[18vw] shadow-xl">
          <form className=" flex flex-col gap-3">
            <div className="flex justify-center gap-2 items-center border-1  border-black rounded-xl px-4 bg-[#f1efef]">
              <IoPersonSharp className="text-[#68a9e4]"/>
              <input type="text" className="border-none bg-[#f1efef] py-2 font-semibold" placeholder="First name" />
            </div>
            <div className="flex justify-center gap-2 items-center border-1  border-black rounded-xl px-4 bg-[#f1efef]">
              <IoPersonSharp className="text-[#68a9e4]"/>
              <input type="text" className="border-none bg-[#f1efef] py-2 font-semibold" placeholder="Last name" />
            </div>
            <div className="flex justify-center gap-2 items-center border-1  border-black rounded-xl px-4 bg-[#f1efef]">
              <PiPhoneCallBold className="text-[#68a9e4]"/>
              <input type="text" className="border-none bg-[#f1efef] py-2 font-semibold" placeholder="Phone" />
            </div>
            <div className="flex justify-center gap-2 items-center border-1  border-black rounded-xl px-4 bg-[#f1efef]">
              <FiMail className="text-[#68a9e4]"/>
              <input type="text" className="border-none bg-[#f1efef] py-2 font-semibold" placeholder="Mail" />
            </div>
            <div className="flex justify-center gap-2 items-start border-1  border-black rounded-xl px-4 py-1 bg-[#f1efef]">
              <MdMessage className="text-[#68a9e4] mt-2"/>
              <textarea type='text' className="border-none bg-[#f1efef] h-28 w-[13vw] line-clamp-5 pl-2 font-semibold " placeholder="message..." height={10}/>
            </div>
            <button className="w-full py-2 bg-[#68a9e4] rounded-2xl font-semibold hover:font-bold transition-all duration-500">SEND MESSAGE </button>
            <p className="line-clamp-2 text-xs text-[#969494] font-semibold">Contact details: the smallest print that holds the biggest connections.</p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;

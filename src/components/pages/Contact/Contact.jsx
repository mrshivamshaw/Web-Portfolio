import React from 'react'
import contact from '../../../Assests/contact-book-svgrepo-com.svg'
import './contact.css'

const Contact = () => {
  return (
    <div id="Contact" className="h-[100vh] mb-20 pt-[10vh] relative z-30 gap-6 flex flex-col justify-center items-center px-6" >
      <div className="flex flex-col justify-center items-center gap-2 text-5xl font-bold">
        <div className="flex items-center gap-2">
          <img src={contact} alt="admi" className="h-[7vh] w-auto" />
          <h1 className=" lg:text-[7vh] md:text-[7vh] text-3xl font-bold tracking-wide mb-2">
          Contact <span className="text-[#68a9e4]">Me</span>
        </h1>
        </div>
        <div className="w-[110%] h-[4px] bg-[#aacded] rounded-2xl">
          <div id="moving-div" className=" w-[8px] h-full rounded-full "></div>
        </div>
      </div>
    </div>
  )
}

export default Contact

import React from 'react'
import contact from '../../../Assests/contact-book-svgrepo-com.svg'
import './contact.css'
import ContactGif from '../../../Assests/output-onlinegiftools.gif'
import icon from '../../../Assests/times-svgrepo-com.svg'

const Contact = () => {
  return (
    <div id="Contact" className="overflow-x-hidden h-[100vh] mb-20 pt-[10vh] relative z-30 gap-6 flex flex-col justify-center items-center px-6" >
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
      <div className='w-[100%] flex justify-center items-center'>
        <div className='w-auto flex flex-col items-start justify-center'>
          <img src={ContactGif} className='w-[25vw] h-auto' />
          <h1 className='text-2xl font-semibold'>Get in touch</h1>
          <div className='flex border-t-2'><img src={icon} alt=""/><div></div> <span>+91 91-425-74541</span></div>
          <div className='flex'><img src={icon} alt="" /> <span>shivamshaw9005@gmail.com</span></div>
          <div className='flex'><img src={icon} alt="" /> <div>chirkunda dhanbad</div></div>
        </div>
        <div className='w-auto bg-black'>
          <form >

          </form>
        </div>
      </div>
    </div>
  )
}

export default Contact

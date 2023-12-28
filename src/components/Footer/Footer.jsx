import React from 'react'
import { MdMail, MdPhone } from 'react-icons/md'
import {FaChevronCircleRight} from 'react-icons/fa'
import Links from '../pages/Links/Links'

const Footer = () => {
  return (
    <div className='flex flex-col justify-center items-center w-screen h-auto bg-[#242323] text-white py-3 overflow-x-hidden'>
        <div className='w-screen h-auto flex flex-wrap lg:justify-evenly xl:justify-evenly md:justify-start justify-start items-baseline overflow-hidden px-5 md:pl-5 lg:pl-0 xl:pl-0 gap-10 pb-3'>
            <div className='flex flex-col justify-start items-start w-[21rem] '>
                <h1 className='text-3xl font-semibold mb-2 text-gradient'>Shivam's Portfolio</h1>
                <p className='text-white/75 text-base font-semibold'>Thank you for visiting my portfolio! Your interest means a lot. If you'd like to connect or discuss potential collaborations, feel free to reach out. I'm excited about the possibility of working together. Wishing you a fantastic day!</p>
            </div>
            <div className='flex flex-col justify-start items-start w-[21rem]r'>
                <h1 className='text-3xl font-semibold mb-2 text-gradient'>Quick Links</h1>
                <a className='font-semibold text-base ml-2 flex items-center gap-1' href="#Home" ><FaChevronCircleRight/>Home</a>
                <a className='font-semibold text-base ml-2 flex items-center gap-1' href="#About"><FaChevronCircleRight/>About</a>
                <a className='font-semibold text-base ml-2 flex items-center gap-1' href="#Skill"><FaChevronCircleRight/>Skill</a>
                <a className='font-semibold text-base ml-2 flex items-center gap-1' href="#Education"><FaChevronCircleRight/>Education</a>
                <a className='font-semibold text-base ml-2 flex items-center gap-1' href="#Projects"><FaChevronCircleRight/>Projects</a>
                <a className='font-semibold text-base ml-2 flex items-center gap-1' href="#Contact"><FaChevronCircleRight/>Contact</a>
            </div>
            <div className='flex flex-col justify-start items-start w-[21rem] gap-2'>
                <h1 className='text-3xl font-semibold text-gradient'>Contact</h1>
                <div className='flex justify-start items-center gap-2'>
                    <MdMail/>
                    <span><a href="mailto:shivamshaw9005@gmail.com">shivamshaw9005@gmail.com</a></span>
                </div>
                <div className='flex justify-start items-center gap-2'>
                    <MdPhone/>
                    <span>+91-91425-74541</span>
                </div>
                <div className='flex justify-start text-white'>
                    <Links />
                </div>
            </div>
        </div>
        <div className='w-screen flex justify-center items-center text-black text-2xl font-bold psx-8'>
            <p className=' border-t-[1px] border-white/20 w-full text-center py-3 text-white'>Made by <span className='text-gradient'>SHIVAM</span> with ❤️ <span className='text-gradient'>Love</span></p>
        </div>
    </div>
  )
}

export default Footer
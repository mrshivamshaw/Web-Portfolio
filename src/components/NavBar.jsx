import React from 'react'
import Logo from '../Assests/e81f2a50-f965-4a1b-b4ce-19d1c8256623.png'

const NavBar = () => {
  return (
    <nav className='h-[4rem] w-[100%] z-50 py-2 px-[8rem] flex justify-between bg-white fixed top-0 items-center shadow-md'>
        <div className='flex justify-center items-center'>
            <img src={Logo} alt="" className='h-6'/>
            <h1 className='font-bold text-[#545454]'>SHIVAM</h1>
        </div>
        <div>
            <ul className='flex justify-center items-center gap-6 text-[.82em]'>
                <li className='text-[#8a8585] hover:text-[#9bcdff] text-sm font-semibold hover:font-bold hover:border-b-[3px] hover:border-b-[#9bcdff] transition-all duration-300' ><a href="#Home">Home</a></li>
                <li className='text-[#8a8585] hover:text-[#9bcdff] text-sm font-semibold hover:font-bold hover:border-b-[3px] hover:border-b-[#9bcdff] transition-all duration-300'><a href="#About">About</a></li>
                <li className='text-[#8a8585] hover:text-[#9bcdff] text-sm font-semibold hover:font-bold hover:border-b-[3px] hover:border-b-[#9bcdff] transition-all duration-300'><a href="#Skill">Skill</a></li>
                <li className='text-[#8a8585] hover:text-[#9bcdff] text-sm font-semibold hover:font-bold hover:border-b-[3px] hover:border-b-[#9bcdff] transition-all duration-300'><a href="#Education">Education</a></li>
                <li className='text-[#8a8585] hover:text-[#9bcdff] text-sm font-semibold hover:font-bold hover:border-b-[3px] hover:border-b-[#9bcdff] transition-all duration-300'><a href="#Projects">Projects</a></li>
                <li className='text-[#8a8585] hover:text-[#9bcdff] text-sm font-semibold hover:font-bold hover:border-b-[3px] hover:border-b-[#9bcdff] transition-all duration-300'><a href="#Experience">Experience</a></li>
                <li className='text-[#8a8585] hover:text-[#9bcdff] text-sm font-semibold hover:font-bold hover:border-b-[3px] hover:border-b-[#9bcdff] transition-all duration-300'><a href="#Contact">Contact</a></li>
            </ul>
        </div>
    </nav>
  )
}

export default NavBar
import React from 'react'
import Logo from '../Assests/e81f2a50-f965-4a1b-b4ce-19d1c8256623.png'

const NavBar = () => {
  return (
    <nav className='h-[3rem] py-2 px-[8rem] flex justify-between items-center shadow-md'>
        <div className='flex justify-center items-center'>
            <img src={Logo} alt="image" className='h-6'/>
            <h1 className='font-bold text-[#545454]'>SHIVAM</h1>
        </div>
        <div>
            <ul className='flex justify-center items-center gap-6 text-[.82em]'>
                <li className='text-[#8a8585] hover:text-[#5d5d5d] hover:border-b-2 hover:border-b-[#8a8585]'>Home</li>
                <li className='text-[#8a8585] hover:text-[#5d5d5d] hover:border-b-2 hover:border-b-[#8a8585]'>About</li>
                <li className='text-[#8a8585] hover:text-[#5d5d5d] hover:border-b-2 hover:border-b-[#8a8585]'>Skill</li>
                <li className='text-[#8a8585] hover:text-[#5d5d5d] hover:border-b-2 hover:border-b-[#8a8585]'>Education</li>
                <li className='text-[#8a8585] hover:text-[#5d5d5d] hover:border-b-2 hover:border-b-[#8a8585]'>Projects</li>
                <li className='text-[#8a8585] hover:text-[#5d5d5d] hover:border-b-2 hover:border-b-[#8a8585]'>Experience</li>
                <li className='text-[#8a8585] hover:text-[#5d5d5d] hover:border-b-2 hover:border-b-[#8a8585]'>Contact</li>
            </ul>
        </div>
    </nav>
  )
}

export default NavBar
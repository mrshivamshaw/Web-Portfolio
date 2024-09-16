import React from 'react'
import {RxLinkedinLogo} from 'react-icons/rx'
import {BsGithub} from 'react-icons/bs'
import {FiTwitter,FiMail} from 'react-icons/fi'
import {BsInstagram} from 'react-icons/bs'

const Links = () => {
  return (
    <ul className='flex justify-center items-center gap-4'>
      <li className='p-2 rounded-md border-[1px] border-black/20 bg-white/10 hover:bg-black/40'><a  target="_blank" href="https://www.linkedin.com/in/shivam-shaw-1b3690252/"><RxLinkedinLogo className=' h-[25px] text-white w-auto'/></a></li>
      <li className='p-2 rounded-md border-[1px] border-black/20 bg-white/10 hover:bg-black/40' ><a target="_blank" href="https://github.com/mrshivamshaw"><BsGithub className=' h-[25px] w-auto text-white'/></a></li>
      <li className='p-2 rounded-md border-[1px] border-black/20 bg-white/10 hover:bg-black/40' ><a target="_blank" href="https://twitter.com/mrshivamshaw"><FiTwitter className=' h-[25px] w-auto text-white'/></a></li>
      <li className='p-2 rounded-md border-[1px] border-black/20 bg-white/10 hover:bg-black/40'><a  target="_blank" href="https://www.instagram.com/_mrshivamshaw/"><BsInstagram className=' h-[25px] w-auto text-white'/></a></li>
      <li className='p-2 rounded-md border-[1px] border-black/20 bg-white/10 hover:bg-black/40'><a  target="_blank" href="mailto:shivamshaw9005@gmail.com"><FiMail className='h-[25px] w-auto text-white'/></a></li>
    </ul>
  )
}

export default Links

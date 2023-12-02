import React from 'react'
import {RxLinkedinLogo} from 'react-icons/rx'
import {BsGithub} from 'react-icons/bs'
import {FiTwitter,FiMail} from 'react-icons/fi'
import {BsInstagram} from 'react-icons/bs'

const Links = ({border}) => {
  console.log(border);
  return (
    <ul className='flex justify-center items-center gap-2'>
      <li className={` p-2 rounded-full border-[2px]`} style={{borderColor:`${border}`}}><a href="https://www.linkedin.com/in/shivam-shaw-1b3690252/"><RxLinkedinLogo className=' h-[30px] w-[30px]'/></a></li>
      <li className={` p-2 rounded-full border-[2px]`} style={{borderColor:`${border}`}}><a href="https://github.com/shivamshaw07"><BsGithub className=' h-[30px] w-[30px]'/></a></li>
      <li className={` p-2 rounded-full border-[2px]`} style={{borderColor:`${border}`}}><a href="https://twitter.com/shivamshaw007"><FiTwitter className=' h-[30px] w-[30px]'/></a></li>
      <li className={` p-2 rounded-full border-[2px]`} style={{borderColor:`${border}`}}><a href="https://www.instagram.com/_shivam.js/"><BsInstagram className=' h-[30px] w-[30px] '/></a></li>
      <li className={` p-2 rounded-full border-[2px]`} style={{borderColor:`${border}`}}><a href="mailto:shivamshaw9005@gmail.com"><FiMail className='h-[33px] w-auto'/></a></li>
    </ul>
  )
}

export default Links

import React from 'react'
import {RxLinkedinLogo} from 'react-icons/rx'
import {BsGithub} from 'react-icons/bs'
import {FiTwitter} from 'react-icons/fi'
import {BsInstagram} from 'react-icons/bs'
import {GrMailOption} from 'react-icons/gr'

const Links = () => {
  return (
    <ul className='flex gap-2'>
      <li className='bg-[#3882cd] rounded-full'><a href="https://www.linkedin.com/in/shivam-shaw-1b3690252/"><RxLinkedinLogo className=' h-[30px] w-[30px] rounded-full '/></a></li>
      <li className='bg-[#3882cd] rounded-full'><a href="https://github.com/shivamshaw07"><BsGithub className=' h-[30px] w-[30px] rounded-full '/></a></li>
      <li className='bg-[#3882cd] rounded-full'><a href="https://twitter.com/shivamshaw007"></a><FiTwitter className=' h-[30px] w-[30px] rounded-full '/></li>
      <li className='bg-[#3882cd] rounded-full'><a href="https://www.instagram.com/_shivam.js/"></a><BsInstagram className=' h-[30px] w-[30px] rounded-full '/></li>
      <li className='bg-[#3882cd] rounded-full'><a href="mailto:shivamshaw9005@gmail.com"></a><GrMailOption className=' h-[30px] w-[30px] rounded-full '/></li>
    </ul>
  )
}

export default Links

"use client"

import Image from 'next/image'
import React from 'react'
import Logo from "/public/Logo.svg"
import Container from './Container'
import Flex from './Flex'
import Link from 'next/link'
const Header = () => {
   
  return (
    <div className='text-[#181818] text-[18px] font-medium py-5'>
      <Container>
        <Flex className={"justify-between"}>
        <Link href={"/"}><Image quality={100} src={Logo} alt='Logo'/></Link>  

          <ul className='flex items-center gap-x-12.5'>
           <li className='text-[#181818] text-[18px] font-medium'><Link href={"/"}>Home</Link></li> 
           <li className='text-[#181818] text-[18px] font-medium'><Link href={"/about"}>About</Link></li> 
           <li className='text-[#181818] text-[18px] font-medium'><Link href={"/service"}>Service</Link></li> 
           <li className='text-[#181818] text-[18px] font-medium'><Link href={"/blog"}>Blog</Link></li> 
           <li className='text-[#181818] text-[18px] font-medium'><Link href={"/faq"}>Faq</Link></li> 
          </ul>

          <button className='py-3 px-6 bg-[#5956E8] rounded-[10px] text-white text-[18px] font-medium'> <Link href={"/contact"}>Contact</Link></button>
        </Flex>
      </Container>
           
    </div>
  )
}

export default Header
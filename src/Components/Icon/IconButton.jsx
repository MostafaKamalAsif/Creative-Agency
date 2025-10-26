"use client"
import React from 'react'
import { FaFacebookF } from "react-icons/fa6";
import { IoLogoTwitter } from "react-icons/io";
import Flex from '../Flex';
const IconButton = () => {
  return (
    <Flex className='gap-x-5'>
    <div className=" p-4 rounded-full text-center bg-white"><FaFacebookF className='text-[#337FFF] text-xl'/></div>
    <div className=" p-4 rounded-full text-center bg-white"><IoLogoTwitter className='text-[#337FFF] text-xl'/></div>
    
</Flex>
  )
}

export default IconButton
import Image from 'next/image'
import React from 'react'
import { FaRegUser } from "react-icons/fa6";
import { MdOutlineCalendarMonth } from "react-icons/md";
import Flex from './Flex';
import Button from './Button';
const BlogCard = ({imgsrc,alt}) => {
  return (
    <>
     <div className='w-[370px]  rounded-[10px] shadow-[0px_6px_35px_rgba(0,0,0,0.08)] ' >
        <div className="pt-4.5 pb-11.5 px-5  ">
             
            <Image src={imgsrc} alt={alt}  />
            <Flex className={'gap-x-7.5 pt-4.5 pb-6'}>
                <div className="flex items-center gap-x-2.5"><FaRegUser/> <p>Admin</p></div>
                <div className="flex items-center gap-x-2.5"><MdOutlineCalendarMonth/> <p>7/11/2021</p></div>
                
            </Flex>
            <h3 className='w-[271px] text-xl font-semibold pb-4 pt-2.5'>Business Plans That Fit Your Best Blog</h3>
            <p className='text-[16px] leading-[27px]  pb-2.5'>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.</p>
             
               <Button href={"/"} text={"Learn More"} className={"text-[#5956E8] font-semibold"}/> 
        </div>
       
         
    </div>
    </>
  )
}

export default BlogCard
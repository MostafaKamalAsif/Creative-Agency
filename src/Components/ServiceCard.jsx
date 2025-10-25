 import Image from 'next/image'
import React from 'react'
import ServiceIcon from './Icon/ServiceIcon'
 
 const ServiceCard = ({ icon = "ui", title, }) => {
   return (
     <div className='group w-[370px] py-[63px] px-12 bg-white  shadow stroke-[#E3E3E3] rounded-[10px] hover:shadow-[0px_6px_35px_rgba(0,0,0,0.08)] duration-300'>
             <ServiceIcon icon={icon}/>
             <h3 className={`text-[25px] font-bold pt-7.5 pb-5`}>{title}</h3>
<p className='text-[#181818]/70 w-[274px]'>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.</p>

     </div>
   )
 }
 
 export default ServiceCard
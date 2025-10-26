import Image from 'next/image'
import React from 'react'
import Avater from '/public/avater.svg'
import { FaStar } from "react-icons/fa";
import Flex from './Flex';
import Cottation from '/public/cottation.svg'
const TestomomonialCard = () => {
  return (
    <div id='about' className='w-[370px]  rounded-[10px] shadow-[0px_6px_35px_rgba(0,0,0,0.08)] ' >
        <div className="pt-12 pb-6 pl-12 pr-6">
            <Image src={Avater} alt='Avater'/>
            <Flex className={'gap-x-2 py-7.5'}>
                <FaStar className='text-[#FBBF25] w-5 h-5'/>
                <FaStar className='text-[#FBBF25] w-5 h-5'/>
                <FaStar className='text-[#FBBF25] w-5 h-5'/>
                <FaStar className='text-[#FBBF25] w-5 h-5'/>
                <FaStar className='text-[#FBBF25] w-5 h-5'/>
            </Flex>
            <p className='text-[16px] leading-[27px] pb-4 pr-6'>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.</p>
             <Flex className={'justify-between'}>
                <div className="">
<h3 className='text-2xl font-semibold '>Mahid Ahmed</h3>
<p className='text-[16px] '>UX Designer</p>
                </div>
            <Image src={Cottation} alt='Cottation' className='mt-10 '/>
        </Flex>
        </div>
       
         
    </div>
  )
}

export default TestomomonialCard
import React from 'react'
import Container from '../Container'
import Flex from '../Flex'
import Image from 'next/image'
import Logo from '/public/Logo.svg'

import IconButton from '../Icon/IconButton'
const Footer = () => {
  return (
    <>
    <div id='contact' className="py-20 md:[100px]  bg-[#5956E8]/10">
<Container>
    <Flex className={'md:justify-between justify-center flex-wrap gap-5 lg:gap-0'}>
        <div className="">
<Image src={Logo} alt='Logo'/>
<p className='pt-4 pb-5 w-[200px] lg:w-[300px]'>There are many variations of passages of Lorem Ipsum , but the majority have suffered alteration in some form.</p>
<IconButton/>
        </div>
        <div className="text-start">
            <h3 className='text-xl font-semibold'>Company</h3>
            <div className="pt-4">
                <ul className='space-y-3 text-[16px] text-[#5D5D5D] text-start'>
                    <li>About</li>
                    <li>Work</li>
                    <li>Latest News</li>
                    <li>Careers</li>
                    

                </ul>
            </div>
        </div>
        <div className="text-start">

            <h3 className='text-xl font-semibold'>Company</h3>
            <div className="pt-4">
                <ul className='space-y-3 text-[16px] text-[#5D5D5D] text-start'>
                    <li>Prototype</li>
                    <li>Plans & Pricing</li>
                    <li>Customers</li>
                    <li>Integrations</li>
                    

                </ul>
            </div>
        
        </div>
        
        <div className="text-start">
            <h3 className='text-xl font-semibold'>Company</h3>
            <div className="pt-4">
                <ul className='space-y-3 text-[16px] text-[#5D5D5D] text-start'>
                    <li>Help Desk</li>
                    <li>Sales</li>
                    <li>Become a Partner</li>
                    <li>Developers</li>

                </ul>
            </div>
        </div>

        <div className=" lg:-mt-18">
            <h3 className='text-xl font-semibold'>Company</h3>
            <p className='text-[#5D5D5D] lg:w-[157px] pt-4  text-[16px] leading-[27px]'>524 Broadway , NYC
+1 777 - 978 - 5570</p>

        </div>
    </Flex>
</Container>
    </div>
    </>
  )
}

export default Footer
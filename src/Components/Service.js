import React from 'react'
import Container from './Container'
import Image from 'next/image'
import UI from "/public/UI.svg"
const Service = () => {
  return (
    <>
    <div className='py-[100px]'>
        <Container>
            <div>
<h3 className='font-bold text-[40px] text-center'>
            Our Services
          </h3>
          <p className='w-[542px] m-auto text-center pt-5 pb-12.5'>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.</p>
            </div>
            <Image src={UI}  alt='UI' />
          
        </Container>
    </div>
    </>
    
  )
}

export default Service
import Image from 'next/image'
import Button from '../Button'
import Container from '../Container'
import Flex from '../Flex'
import banner from "/public/Banner.svg"
const Banner = () => {
  return (
    <>
    <div id='home' className='bg-[#5956E8] py-20 md:[100px] lg:py-[182px]'>
        <Container>
            <Flex className={"justify-between"}>
<div className='w-[49%]'>
    <h1 className='text-[25px] md:text-[35px] lg:text-[65px] text-white  font-bold  lg:w-[501px] leading-[37px] lg:leading-20'>We Are Digital Product Design Agency</h1>
    <p className='text-[14px] md:text-[16px] leading-5 md:leading-[27px] text-white  lg:w-[542px] pt-[25px] pb-7.5'>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.</p>
    <Button className={"bg-white text-[#5956E8] w-fit py-3 px-6  rounded-[10px]  text-[14px] md:text-[18px] font-medium "} href={"/contact"} text={"Get Started"}/>
</div>
<div className="w-[49%]">
<Image src={banner} alt='Banner.svg' /></div>
            </Flex>
        </Container>
    </div>
    </>
  )
}

export default Banner
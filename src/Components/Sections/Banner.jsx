import Image from 'next/image'
import Button from '../Button'
import Container from '../Container'
import Flex from '../Flex'
import banner from "/public/Banner.svg"
const Banner = () => {
  return (
    <>
    <div id='home' className='bg-[#5956E8] py-[182px]'>
        <Container>
            <Flex className={"justify-between"}>
<div>
    <h1 className='text-[65px] text-white font-bold w-[501px] leading-20'>We Are Digital Product Design Agency</h1>
    <p className='text-[16px] leading-[27px] text-white w-[542px] pt-[25px] pb-7.5'>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.</p>
    <Button className={"bg-white text-[#5956E8] w-fit py-3 px-6  rounded-[10px]  text-[18px] font-medium "} href={"/contact"} text={"Get Started"}/>
</div>
<Image src={banner} alt='Banner.svg' />
            </Flex>
        </Container>
    </div>
    </>
  )
}

export default Banner
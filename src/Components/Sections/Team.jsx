import React from "react";
import Container from "../Container";
import Flex from "../Flex";
import Image from "next/image";
import UX from '/public/UX_Designer.svg'
import UI from '/public/UI_Designer.svg'
import Marketor from '/public/Digital_Marketor.svg'
const Team = () => {
  return (
    <>
      <div id="about" className="pb-20 md::pb-[100px]">
        <Container>
          <div className="pl-3 md:p-0">
            <h3 className="font-bold text-[30px] md:text-[40px] text-center">
              Our Expert Team Member
            </h3>
            <p className="w-[420px] md:w-[542px] m-auto text-center pt-5 pb-12.5">
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form.
            </p>
          </div>
          <Flex className={'lg:justify-between justify-center flex-wrap lg:flex-nowrap gap-y-7.5 lg:gap-0'}>
            <Image src={UX} alt="UX Team Member"/>
            <Image src={UI} alt="UI Team Member"/>
            <Image src={Marketor} alt="Digital Marketor Team Member"/>
          </Flex>
        </Container>
      </div>
    </>
  );
};

export default Team;

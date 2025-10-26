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
      <div id="about" className="pb-[100px]">
        <Container>
          <div>
            <h3 className="font-bold text-[40px] text-center">
              Our Expert Team Member
            </h3>
            <p className="w-[542px] m-auto text-center pt-5 pb-12.5">
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form.
            </p>
          </div>
          <Flex className={'justify-between'}>
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

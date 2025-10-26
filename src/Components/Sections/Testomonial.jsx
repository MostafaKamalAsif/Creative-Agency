import React from "react";
import Container from "../Container";
import TestomomonialCard from "../TestomomonialCard";
import Flex from "../Flex";

const Testomonial = () => {
  return (
    <>
      <div className="pb-[100px]">
        <Container>
          <div>
            <h3 className="font-bold text-[40px] w-[603px]">
              We Care About Our Customer Experience Too
            </h3>
            <p className="w-[542px]   pt-5 pb-12.5">
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form.
            </p>
            <Flex className={'justify-between'}>
              <TestomomonialCard />
              <TestomomonialCard />
              <TestomomonialCard />
            </Flex>
          </div>
        </Container>
      </div>
    </>
  );
};

export default Testomonial;

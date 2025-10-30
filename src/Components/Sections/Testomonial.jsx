import React from "react";
import Container from "../Container";
import TestomomonialCard from "../TestomomonialCard";
import Flex from "../Flex";

const Testomonial = () => {
  return (
    <>
      <div className="pb-20 md::pb-[100px]">
        <Container>
          <div className="pl-2 md:p-0">
            <h3 className="font-bold text-[30px] md:text-[40px]   md:w-[603px]">
              We Care About Our Customer Experience Too
            </h3>
            <p className="w-[420px] md:w-[542px]   pt-5 pb-12.5">
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form.
            </p>
            <Flex className={'lg:justify-between justify-center flex-wrap lg:flex-nowrap gap-y-7.5 lg:gap-0'}>
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

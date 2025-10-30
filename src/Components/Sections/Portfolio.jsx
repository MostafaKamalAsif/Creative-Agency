import React from "react";
import Container from "../Container";
import Flex from "../Flex";
import PortfolioCard from "../PortfolioCard";
import Grapic from "/public/Grapic.png";
import Motion from "/public/Motion.png";
import Development from "/public/Development.png";
import Digital from "/public/Digital.png";
import UL from "/public/UI.png";
import Web from "/public/web.png";
const Portfolio = () => {
  return (
    <>
      <div id="service" className="pb-20 md::pb-[100px]">
        <Container>
          <div className="pl-3 md:p-0">
            <h3 className="font-bold text-[30px] md:text-[40px] text-center">
              Our Work Portfolio
            </h3>
            <p className="w-[420px] md:w-[542px] m-auto text-center pt-5 pb-12.5">
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form.
            </p>
          </div>
          <Flex className={"flex-wrap justify-center md:justify-between gap-y-7.5"}>
            <PortfolioCard
              imgsrc={Grapic}
              alt={"Graphic"}
              title={"Graphic Design"}
            />

            <PortfolioCard imgsrc={Web} alt={"web"} title={"Desgin Design"} />
            <PortfolioCard
              imgsrc={Development}
              alt={"Development"}
              title={"Web Development"}
            />
            <PortfolioCard
              imgsrc={Grapic}
              alt={"Graphic"}
              title={"Graphic Design"}
            />
            <PortfolioCard
              imgsrc={Motion}
              alt={"Motion"}
              title={"Motion Design"}
            />
            <PortfolioCard
              imgsrc={Digital}
              alt={"Digital"}
              title={"Digital Design"}
            />
            <PortfolioCard
              imgsrc={Grapic}
              alt={"Graphic"}
              title={"Graphic Design"}
            />
            <PortfolioCard imgsrc={UL} alt={"Ul"} title={"UI/UX Design"} />
          </Flex>
        </Container>
      </div>
    </>
  );
};

export default Portfolio;

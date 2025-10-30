import Container from "../Container";
import Flex from "../Flex";
import ServiceCard from "../ServiceCard";
const Service = () => {
  return (
    <>
      <div id="service" className=" py-20 md::py-[100px]">
        <Container>
          <div className="pl-2 md:p-0">
            <h3 className="font-bold text-[30px] md:text-[40px] text-center">Our Services</h3>
            <p className="w-[420px] md:w-[542px] m-auto text-center pt-5 pb-12.5">
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form.
            </p>
          </div>
          <Flex className={"justify-center lg:justify-between  md:m-auto lg:m-0 flex-wrap gap-y-7.5"}>
            <ServiceCard icon="ui" title={"UI/UX Design"} />
            <ServiceCard icon="web" title={"Web Development"} />
            <ServiceCard icon="Digital" title={"Digital Marketing"} />
            <ServiceCard icon="Grapic" title={"Graphic Design"} />
            <ServiceCard icon="Motion" title={"Web Design"} />
            <ServiceCard icon="Design" title={"Motion Design"} />
          </Flex>
        </Container>
      </div>
    </>
  );
};

export default Service;

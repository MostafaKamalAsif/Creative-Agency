import Container from "../Container";
import Flex from "../Flex";
import ServiceCard from "../ServiceCard";
const Service = () => {
  return (
    <>
      <div id="service" className="py-[100px]">
        <Container>
          <div>
            <h3 className="font-bold text-[40px] text-center">Our Services</h3>
            <p className="w-[542px] m-auto text-center pt-5 pb-12.5">
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form.
            </p>
          </div>
          <Flex className={"justify-between flex-wrap gap-y-7.5"}>
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

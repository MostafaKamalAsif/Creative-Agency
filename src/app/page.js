import Banner from "@/Components/Sections/Banner";
import Blog from "@/Components/Sections/Blog";
import Portfolio from "@/Components/Sections/Portfolio";
import Service from "@/Components/Sections/Service";
import Team from "@/Components/Sections/Team";
import Testomonial from "@/Components/Sections/Testomonial";

export default function Home() {
  return (
    <>
    <Banner/>
    <Service/>
    <Portfolio/>
    <Team/>
    <Testomonial/>
    <Blog/>
    </>
  );
}

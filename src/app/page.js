import Banner from "@/Components/Sections/Banner";
import Blog from "@/Components/Sections/Blog";
import Footer from "@/Components/Sections/Footer";
import Portfolio from "@/Components/Sections/Portfolio";
import Service from "@/Components/Sections/Service";
import Team from "@/Components/Sections/Team";
import Testomonial from "@/Components/Sections/Testomonial";

export default function Home() {
  return (
    <>
   
      <div id="home"><Banner /></div>
      <div id="service"><Service />
      <Portfolio /></div>
<div id="about">
  
  <Team />
  <Testomonial />
</div>

<div id="blog"><Blog /></div>
<div id="contact"><Footer/></div>
    </>
  );
}

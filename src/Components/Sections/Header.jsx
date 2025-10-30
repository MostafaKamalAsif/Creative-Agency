"use client";

import { useState } from "react";
import Image from "next/image";
import Button from "../Button";
import Container from "../Container";
import Flex from "../Flex";
import Logo from "/public/Logo.svg";
import Link from "next/link";
import { Menu, X } from "lucide-react"; // icons

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
     <Container>
    <div className=" w-full  bg-white   text-[#181818] text-[18px] font-medium py-4">
     
        <Flex className="md:justify-between justify-evenly  items-center">
          {/* Logo */}
          <Link href="#home">
            <Image quality={100} src={Logo} alt="Logo" className=" w-full" />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-x-10">
            <Link href="#home" className="hover:text-[#5956E8] duration-300">
              Home
            </Link>
            <Link href="#about" className="hover:text-[#5956E8] duration-300">
              About
            </Link>
            <Link href="#service" className="hover:text-[#5956E8] duration-300">
              Service
            </Link>
            <Link href="#blog" className="hover:text-[#5956E8] duration-300">
              Blog
            </Link>
            <Link href="#contact" className="hover:text-[#5956E8] duration-300">
              Contact
            </Link>
          </nav>

          {/* Desktop Button */}
          <div className="hidden lg:block">
            <Button
              href="#contact"
              text="Contact Us"
              className="bg-[#5956E8] text-white py-3 px-6 rounded-[10px] text-[18px] font-medium hover:bg-[#4a49d1] duration-300"
            />
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={toggleMenu}
            className="block lg:hidden  text-[#181818]"
          >
            {menuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </Flex>

        {/* Mobile Navigation */}
        <div
          className={`lg:hidden bg-white transition-all m-auto duration-300 overflow-hidden ${
            menuOpen ? "w-fit max-h-[400px] mt-4" : "w-fit max-h-0"
          }`}
        >
          <ul className="flex flex-col gap-4 text-center  py-4">
            {["home", "about", "service", "blog", "contact"].map((item) => (
              <li key={item}>
                <Link
                  href={`#${item}`}
                  onClick={toggleMenu}
                  className="hover:text-[#5956E8] duration-300"
                >
                  {item.charAt(0).toUpperCase() + item.slice(1)}
                </Link>
              </li>
            ))}
          </ul>

          <div className="text-center pb-4">
            <Button
              href="#contact"
              text="Contact Us"
              className="bg-[#5956E8] text-white py-3 px-6 rounded-[10px] text-[18px] font-medium hover:bg-[#4a49d1] duration-300"
            />
          </div>
        </div>
        </div>
      </Container>
    
  );
};

export default Header;

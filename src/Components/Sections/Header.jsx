"use client";

import Image from "next/image";
import Button from "../Button";
import Container from "../Container";
import Flex from "../Flex";
import Logo from "/public/Logo.svg";
import Link from "next/link";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 w-full bg-white shadow-md z-50 text-[#181818] text-[18px] font-medium py-5">
      <Container>
        <Flex className="justify-between items-center">
          {/* Logo */}
          <Link  href="#home">
            <Image quality={100} src={Logo} alt="Logo" />
          </Link>

          {/* Navigation Menu */}
          <ul className="flex items-center gap-x-12.5">
            <li>
              <Link 
                href="#home"
                className="text-[18px] font-medium text-[#181818] hover:text-[#5956E8] duration-300"
              >
                Home
              </Link>
            </li>
            <li>
              <Link 
                href="#about"
                className="text-[18px] font-medium text-[#181818] hover:text-[#5956E8] duration-300"
              >
                About
              </Link>
            </li>
            <li>
              <Link 
                href="#service"
                className="text-[18px] font-medium text-[#181818] hover:text-[#5956E8] duration-300"
              >
                Service
              </Link>
            </li>
            <li>
              <a
                href="#blog"
                className="text-[18px] font-medium text-[#181818] hover:text-[#5956E8] duration-300"
              >
                Blog
              </a>
            </li>
            <li>
              <Link
                href="#contact"
                className="text-[18px] font-medium text-[#181818] hover:text-[#5956E8] duration-300"
              >
                Contact
              </Link>
            </li>
          </ul>

          {/* Contact Button */}
          <Button
            className={
              "bg-[#5956E8] text-white py-3 px-6 rounded-[10px] text-[18px] font-medium"
            }
            href="#contact"
            text="Contact Us"
          />
        </Flex>
      </Container>
    </header>
  );
};

export default Header;

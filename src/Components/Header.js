"use client";

import Image from "next/image";
import React from "react";
import Logo from "/public/Logo.svg";
import Container from "./Container";
import Flex from "./Flex";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Button from "./Button";
const Header = () => {
  const path = usePathname();
  return (
    <div className="text-[#181818] text-[18px] font-medium py-5">
      <Container>
        <Flex className={"justify-between"}>
          <Link href={"/"}>
            <Image quality={100} src={Logo} alt="Logo" />
          </Link>

          <ul className="flex items-center gap-x-12.5">
            <li
              className={` text-[18px] font-medium ${
                path === "/"
                  ? "text-[#5956E8] "
                  : "text-[#181818] hover:text-[#5956E8] duration-300 "
              }`}
            >
              <Link href={"/"}>Home</Link>
            </li>
            <li
              className={` text-[18px]font-medium  ${
                path === "/about"
                  ? "text-[#5956E8] font-bold"
                  : "text-[#181818] hover:text-[#5956E8] duration-300 font-medium"
              }`}
            >
              <Link href={"/about"}>About</Link>
            </li>
            <li
              className={` text-[18px] font-medium ${
                path === "/service"
                  ? "text-[#5956E8] "
                  : "text-[#181818] hover:text-[#5956E8] duration-300 "
              }`}
            >
              <Link href={"/service"}>Service</Link>
            </li>
            <li
              className={` text-[18px] font-medium ${
                path === "/blog"
                  ? "text-[#5956E8] "
                  : "text-[#181818] hover:text-[#5956E8] duration-300 "
              }`}
            >
              <Link href={"/blog"}>Blog</Link>
            </li>
            <li
              className={` text-[18px]  font-medium${
                path === "/contact"
                  ? "text-[#5956E8] "
                  : "text-[#181818] hover:text-[#5956E8] duration-300 "
              }`}
            >
              <Link href={"/contact"}>Contact</Link>
            </li>
          </ul>

          
          <Button className={" bg-[#5956E8]  text-white"} href={"/contact"} text={"Contact Us"}/>
        </Flex>
      </Container>
    </div>
  );
};

export default Header;

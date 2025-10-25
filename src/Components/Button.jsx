"use client";
import Link from "next/link";
import React from "react";

const Button = ({href,text,className}) => {
  return (
    <>
      <div className={`py-3 px-6  rounded-[10px]  text-[18px] font-medium ${className}`}>
        
        <Link href={href}>{text}</Link>
      </div>
    </>
  );
};

export default Button;

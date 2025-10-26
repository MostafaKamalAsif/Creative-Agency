"use client";
import Link from "next/link";
import React from "react";

const Button = ({href,text,className}) => {
  return (
    <>
      <div className={`${className}`}>
        
        <Link href={href}>{text}</Link>
      </div>
    </>
  );
};

export default Button;

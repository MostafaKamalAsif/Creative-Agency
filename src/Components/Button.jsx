"use client";
import Link from "next/link";
import React from "react";

const Button = ({href,text,className}) => {
  return (
    <><Link href={href}>
      <div className={`${className}`}>
        
        {text}
      </div></Link>
    </>
  );
};

export default Button;

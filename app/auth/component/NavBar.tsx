"use client";
import Login from "./Login";
import SignUp from "./SignUp";
import React, { useEffect } from "react";
import authPath from "@/zustand/auth/authValues";

const NavBar = () => {
  const { AuthPath, isLoading, setAuthPath} = authPath();
  const pathName = AuthPath?.type.name
  
  useEffect(() =>{
    setAuthPath(<Login />)
  },[])

  return (
    <nav className="flex gap-3 flex-col w-full justify-center items-center max-md:gap-2">
      <section className="flex justify-between w-[60%] font-medium max-md:text-[14px] max-sm:w-[90%]">
        <button className="outline-none border-none" disabled={isLoading} onClick={() => setAuthPath(<Login />)}>Log In</button>
        <button className="outline-none border-none" disabled={isLoading} onClick={() => setAuthPath(<SignUp />)}>Sign Up</button>
      </section>
      
      <div className="flex w-[60%] h-1 transition-all bg-[#D9D9D9] max-sm:w-[90%] max-sm:h-[3px]">
        <span className={`w-1/2 h-full bg-[#543EE0] ${ pathName === "SignUp" ? "right" : "left" }`}></span>
      </div>
    </nav>
  );
};

export default NavBar;

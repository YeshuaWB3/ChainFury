import { Button, CircularProgress } from "@mui/material";
import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const navigate = useNavigate();

  return (
    <div
      className={`flex relative flex-col prose-nbx items-center justify-center h-screen w-full`}
    >
      <div className=" w-full flex flex-col max-w-[500px] border border-light-neutral-grey-200 shadow-lg rounded-md p-[16px] gap-[8px]">
        <div className="mb-[8px] flex flex-col items-center text-center w-full">
          <div className="rounded-md w-[64px] h-[64px] bg-slate-300 mb-[8px]"></div>
          <span className="semiBold700 text-light-neutral-grey-700 ">
            Create an account on ChainFury
          </span>
          <span className="text-light-neutral-grey-400 medium300">
            Some text here to describe the app
          </span>
        </div>
        <input className="w-full h-[40px]" placeholder="Full name" />
        <input className="w-full h-[40px]" placeholder="Username" />
        <input className="w-full h-[40px]" placeholder="Email" />
        <input
          className="w-full h-[40px]"
          placeholder="Password"
          type={"password"}
        />
        <Button
          className="h-[40px] mt-[8px!important] block"
          variant="contained"
          color="primary"
        >
          Create Account
        </Button>
      </div>
      <span
        onClick={() => {
          navigate("/login");
        }}
        className="cursor-pointer z-10 relative text-light-primary-blue-600 semiBold300 mt-[8px]"
      >
        Already have an account? Sign in
      </span>
      <div
        style={{
          transform: "matrix(1, 0, 0, -1, 0, 0)",
          background:
            "conic-gradient(from 180deg at 50% 50%, rgba(169, 151, 239, 0.7) -93.79deg, #FFFFFF 0.33deg, #69F6FF 114.74deg, #45B1FF 193.8deg, rgba(169, 151, 239, 0.7) 266.21deg, #FFFFFF 360.33deg)",
        }}
        className="blur-[50px] absolute w-screen h-[240px] bottom-0 right-0 opacity-[0.3]"
      ></div>
    </div>
  );
};

export default SignUp;
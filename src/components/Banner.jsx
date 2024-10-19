import React from "react";
import { ReactTyped } from "react-typed";

const Banner = () => {
  return (
    <div className="bg-[#2699fb] w-full py-[100px]">
      <div className="max-w-[1240px] my-[20px] mx-auto text-center font-bold">
        <div className="md:text-3xl text-xl md:p-[15px]">
          Learn With Us
        </div>
        <h2 className="text-white mt-4 md:text-[50px] text-3xl md:p-[15px]">Grow With Us.</h2>
        <div className="text-[25px] mt-4 md:text-[50px] text-white md:p-[15px]">
          <h2>Learn <ReactTyped strings={["Web Developement", "Cyber Security", "Data Science", "Data Analytics"]}typeSpeed={100} backSpeed={70} loop/></h2>
          <button className="text-xl bg-black p-3 rounded-xl mt-2 font-thin md:w-[20%]">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default Banner;

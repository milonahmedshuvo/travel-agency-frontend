import React from "react";
import LandBanner from "../../../assets/header/landTour.jpg";
import { Component1Props } from "@/components/lib/types";



const LandtourBanner = ({onButtonClick}:Component1Props) => {


  return (
    <div
      style={{ backgroundImage: `url('${LandBanner.src}')` }}
      className="w-full h-[700px] bg-cover bg-center relative"
    >
      {/* Transparent Overlay */}
      <div className="absolute inset-0 bg-black/40 bg-opacity-50"></div>

      {/* Text Content */}
      <div className="relative z-10 flex items-center justify-center h-full  text-center ">
        <div>
          <h2 className="text-[56px] text-white font-[600] vollkorn leading-16">
            <span className="text-[#FF914D]">Tours & Experiences,</span>
             Land Tours <br/>
          </h2>

          <p className="text-[#ffffff] mt-5">
            Explore the worlds most exciting experiences, from thrilling
            adventures to cultural discoveries.
            <br /> Book your perfect tour and create memories that last a
            lifetime.
          </p>

          <div className="flex flex-col md:flex-row justify-center items-center gap-3.5 md:gap-5 mt-6">
            <button onClick={onButtonClick} className="text-[#156CF0] text-[16px] bg-[#FFFFFF]  px-[36px] py-[12px] rounded-sm transition duration-300 font-semibold cursor-pointer"> View All Recommendations </button>
            {/* <button className="bg-gradient-to-t from-20% from-[#156CF0] to-[#38B6FF] text-[16px] text-[#FFFFFF]  px-[36px] py-[12px] rounded-sm transition duration-300 font-semibold w-[185px] cursor-pointer"> Book  Now! </button> */}
            </div>
        </div>
      </div>
    </div>
  );
};

export default LandtourBanner;

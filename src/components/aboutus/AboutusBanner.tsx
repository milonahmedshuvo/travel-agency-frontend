import React from "react";
import bookingBanner from "../../assets/header/bookingbanner.png";



const AboutusBanner = () => {


  return (
    <div
      style={{ backgroundImage: `url('${bookingBanner.src}')` }}
      className="w-full h-[160px] bg-cover bg-center relative shadow-xs"
    >
      {/* Transparent Overlay */}
      <div className="absolute inset-0 bg-white/40 bg-opacity-50"></div>

      {/* Text Content */}
      <div className="relative z-10 flex items-center justify-center h-full  text-center ">
        <div>
          <h2 className="text-[56px] text-black font-[600] vollkorn leading-16">
             About 
            <span className="text-[#FF914D] ml-4">US</span>
          </h2>
          

          
        </div>
      </div>


    </div>
  );
};

export default AboutusBanner;

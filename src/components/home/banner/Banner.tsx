import React from "react";
import banner from "../../../assets/header/header.jpg";


const Banner = () => {
  return (
    <div
      className="w-full relative h-[700px] bg-no-repeat bg-cover bg-center"
      style={{ backgroundImage: `url('${banner.src}')` }}
    >
      <div className="absolute inset-0 bg-black/10 backdrop-brightness-50"></div>

      {/* Content */}
      <div className="relative z-10 flex justify-center items-center h-full">
        <div>
          <h1 className="text-white text-5xl md:text-5xl lg:text-6xl xl:text-7xl font-bold vollkorn text-center">
            Travel, <span className="text-[#FF914D]">enjoy and live a</span> 
          </h1>
          <h1 className="text-white text-5xl md:text-5xl lg:text-6xl xl:text-7xl font-bold vollkorn text-center mt-1.5 ">
            <span className="text-[#FF914D]">new</span> and full life
          </h1>

          <p className="text-[#ffffff] text-[16px] font-normal text-center mt-6">Explore breathtaking tours and unforgettable experiences </p>
          <p className="text-[#ffffff] text-[16px] font-normal text-center px-10 md:px-0 mt-0.5">across stunning destinations. Built Wicket longer admire do barton vanity itself do in it. Preferred to </p>
          <p className="text-[#ffffff] text-[16px] font-normal text-center px-10 md:px-0 mt-0.5">sportsmen it engrossed listening.</p>

            <div className="flex flex-col md:flex-row justify-center items-center gap-3.5 md:gap-5 mt-5">
            <button className="text-[#156CF0] text-[16px] bg-[#FFFFFF]  px-[36px] py-[12px] rounded-sm transition duration-300 font-semibold"> Explore Tours </button>
            <button className="bg-gradient-to-t from-20% from-[#156CF0] to-[#38B6FF] text-[16px] text-[#FFFFFF]  px-[36px] py-[12px] rounded-sm transition duration-300 font-semibold w-[185px]"> Book Now </button>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;

import React from "react";
import accomBanner from "../../../assets/header/accommodationBanner.jpg";

const AccommodationBanner = () => {
  return (
    <section
      style={{ backgroundImage: `url('${accomBanner.src}')` }}
      className="w-full h-[700px] bg-cover bg-center relative"
    >
      {/* Transparent Overlay */}
      <div className="absolute inset-0 bg-black/40 bg-opacity-50"></div>

      {/* Text Content */}
      <div className="relative z-10 flex items-center justify-center h-full  text-center ">
        <div>
          <h2 className="text-[56px] text-white font-[600] vollkorn leading-16"> Find Your
            <span className="text-[#FF914D]">Perfect Stay</span>
            
          </h2>
          <p className="text-[#ffffff] mt-5">
            Explore the worlds most exciting experiences, from thrilling
            adventures to cultural discoveries.
            <br /> Book your perfect tour and create memories that last a
            lifetime.
          </p>

          <div className="flex justify-center  mt-6">
            <button className="bg-gradient-to-t from-20% from-[#156CF0] to-[#38B6FF] text-[16px] text-[#FFFFFF]  px-[36px] py-[12px] rounded-sm transition duration-300 font-semibold  cursor-pointer"> View All Accommodations </button>
            </div>


        </div>
      </div>
    </section>
  );
};

export default AccommodationBanner;

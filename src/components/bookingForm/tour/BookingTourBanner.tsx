import React from "react";
import bookingBanner from "../../../assets/header/bookingbanner.png";



const BookingTourBanner = () => {


  return (
    <div
      style={{ backgroundImage: `url('${bookingBanner.src}')` }}
      className="w-full h-[300px] bg-cover bg-center relative shadow-xs"
    >
      {/* Transparent Overlay */}
      <div className="absolute inset-0 bg-white/40 bg-opacity-50"></div>

      {/* Text Content */}
      <div className="relative z-10 flex  justify-center h-full mt-[70px] text-center">

        <div>
          <h2 className="text-[56px] text-black font-[600] vollkorn leading-16">
          Easy & Secure Booking – Your <br/>
            <span className="text-[#FF914D]">Adventure Starts Here!</span>
           
          </h2>   

          {/* <div className="flex justify-center items-center mt-6">
            <button  className="bg-gradient-to-t from-20% from-[#156CF0] to-[#38B6FF] text-[16px] text-[#FFFFFF]  px-[36px] py-[12px] rounded-sm transition duration-300 font-semibold  cursor-pointer"> Check Availability & Book Now!</button>
            </div> */}
        </div>


      </div>


    </div>
  );
};

export default BookingTourBanner;

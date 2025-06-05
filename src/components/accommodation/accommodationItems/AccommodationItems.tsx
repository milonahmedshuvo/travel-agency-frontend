"use client"

import React from "react";
import Pagination from "@/components/others/pagination/Pagination";
// import img1 from '../../../assets/card/accommodation/img1.jpg'
import AccommodationSecoundCard from "@/components/card/accommodationCard/AccommoSecoundCard";
import { useGetAllHotelPackagesQuery } from "@/redux/api/hotelPackages/hotelPackegesApi";
import Loading from "@/components/shared/loading/Loading";
import { THotelPackage } from "@/components/lib/types";



const AccommodationItems = () => {
   const {data, isLoading } = useGetAllHotelPackagesQuery("")
    // console.log("hotel", data?.data)
    
    if(isLoading){
      return <Loading/>
    }
  




  return (
    <section className="custom-container">
      <h1 className="font-semibold text-[48px] text-center">
      Top Picks for <span className="text-[#FF914D]">Your Stay</span>
      </h1>
      <p className="text-[#333333] text-[16px] text-center font-normal mt-1.5">
        Hit the open road and explore in style with the perfect bike, scooter,
        car, boat tour for your needs.
      </p>

      

      <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 lg:gap-5 xl:gap-6 ">
          {
            data?.data?.map((product:THotelPackage, index:number) =><div key={index}>
                <AccommodationSecoundCard 
                id={product.id} 
                imageUrl={product?.images[1]?.url} 
                title={product.title} 
                address={product.location} 
                price={product.price} 
                ratting={'5.0'}
                kitchenValue={product.kitchen}
                bedRoomValue={product.bedRoom}
                bathroomValue={product.bathRoom}
                livingRoomValue={product.livingRoom}
                 ></AccommodationSecoundCard>
            </div>)
          }
          </div>



      {/* Handle Pagination here  */}
      {/* total means all product  */}
      <Pagination total={50} defaultCurrent={1} className="mt-10"/>
    </section>
  );
};

export default AccommodationItems;

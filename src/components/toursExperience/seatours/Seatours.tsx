"use client"
import React, { useEffect, useState } from "react";
// import img1 from "../../../assets/card/tourexperience/img1.jpg";
// import img2 from "../../../assets/card/tourexperience/img2.jpg";
// import img3 from "../../../assets/card/tourexperience/img3.jpg";
// import img4 from "../../../assets/card/tourexperience/img4.jpg";
import TourExperienceCard from "@/components/card/tourExCard/TourExCard";
import Link from "next/link";
// import { useGetSeaTourQuery } from "@/redux/api/tourPackages/tourPackagesApi";
import { TTourPackage } from "@/components/lib/types";
import Loading from "@/components/shared/loading/Loading";


const SeaTour = () => {
    //  const {data, isLoading} = useGetSeaTourQuery("")
    //  console.log('sea tour', data?.data)
     const [tours, setTours] = useState([]);
     const [loading, setLoading] = useState(true);
       
         useEffect(() => {
           const fetchTours = async () => {
             try {
               const token = localStorage.getItem('token')
               const response = await fetch(
                 "https://supermariobos-api.code-commando.com/api/v1/tour-packages?category=SEA_TOUR",
                 {
                   method: "GET",
                   headers: {
                     "Content-Type": "application/json",
                     Authorization: `Bearer ${token}`, // optional
                   },
                 }
               );
       
               const data = await response.json();
               setTours(data?.data || []);
             } catch (error) {
               console.error("Error fetching tours:", error);
             } finally {
               setLoading(false);
             }
           };
       
           fetchTours();
         }, []);
     
         if(loading){
           return <Loading/>
         }
     
     
     
     
        //  console.log('Seatour:',  tours)


  
 

  return (
    <section className="custom-container">
      <h1 className="font-semibold text-[48px] text-center">
        Find Your perfect <span className="text-[#FF914D]">Sea Tours</span>
      </h1>
      <p className="text-[#333333] text-[16px] text-center font-normal mt-1.5">
        Explore our curated selection of unique and captivating properties.
      </p>

      <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 lg:gap-5 xl:gap-6 mb-10">
        {tours?.slice(0, 4).map((product:TTourPackage, index:number) => (
          <div key={index}>
             <TourExperienceCard
               id={product.id}
              imageUrl={product.images?.[1]?.url  }
              title={product.title}
              price={`$${product.price}`}
              day={`${product.duration} Days Trip`}
              ratting={'5.0'}
            ></TourExperienceCard>
          </div>
        ))}
      </div>

      <Link href="/seatours"> 
      <div  className="flex justify-center items-center"> 
          <button className="bg-gradient-to-t from-20% from-[#156CF0] to-[#38B6FF] text-white font-medium py-2 px-7 rounded-md transition-colors cursor-pointer ">
            See all
          </button>
      </div>
      </Link>


    </section>
  );
};

export default SeaTour;

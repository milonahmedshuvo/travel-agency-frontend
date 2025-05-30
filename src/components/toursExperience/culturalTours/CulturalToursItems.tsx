"use client"

import React from "react";
import TourExperienceCard from "@/components/card/tourExCard/TourExCard";
import Pagination from "@/components/others/pagination/Pagination";
import { useGetCurturalTourQuery } from "@/redux/api/tourPackages/tourPackagesApi";
import { TTourPackage } from "@/components/lib/types";

const CulturalTourItems = () => {
const {data} = useGetCurturalTourQuery("")


  
  

  return (
    <section className="custom-container">
      <h1 className="font-semibold text-[48px] text-center">
      Find Your  <span className="text-[#FF914D]">Perfect Experience</span>
      </h1>
      <p className="text-[#333333] text-[16px] text-center font-normal mt-1.5">
      Explore our curated selection of unique and captivating properties.
      </p>


      <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 lg:gap-5 xl:gap-6 mb-10">
        {data?.data?.map((product:TTourPackage, index:number) => (
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

      {/* Handle Pagination here  */}
      {/* total means all product  */}
      <Pagination total={50} defaultCurrent={1} />
    </section>
  );
};

export default CulturalTourItems;

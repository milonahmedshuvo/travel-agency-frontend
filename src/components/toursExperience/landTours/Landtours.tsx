"use client"


// import img1 from "../../../assets/landTour/img1.jpg";
// import img2 from "../../../assets/landTour/img2.jpg";
// import img3 from "../../../assets/landTour/img3.jpg";
// import img4 from "../../../assets/landTour/img4.jpg";

import TourExperienceCard from "@/components/card/tourExCard/TourExCard";
import Link from "next/link";
import { useGetLandTourQuery } from "@/redux/api/tourPackages/tourPackagesApi";
import Loading from "@/components/shared/loading/Loading";
import { TTourPackage } from "@/components/lib/types";


const LandTours = () => {
      const {data, isLoading } = useGetLandTourQuery("")
      console.log("land tour", data?.data)
     
      if(isLoading){
        return <Loading/>
      }
    
      





  

  return (
    <section className="custom-container">
      <h1 className="font-semibold text-[48px] text-center">
        Find Your perfect <span className="text-[#FF914D]">Land Tours</span>
      </h1>
      <p className="text-[#333333] text-[16px] text-center font-normal mt-1.5">
        Explore our curated selection of unique and captivating properties.
      </p>

      <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 lg:gap-5 xl:gap-6 mb-10">
        {data?.data?.slice(0, 4)?.map((product:TTourPackage, index:number) => (
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

      <Link href="/landtours"> 
      <div  className="flex justify-center items-center"> 
          <button className="bg-gradient-to-t from-20% from-[#156CF0] to-[#38B6FF] text-white font-medium py-2 px-7 rounded-md transition-colors cursor-pointer ">
            See all
          </button>
      </div>
      </Link>
      
    </section>
  );
};

export default LandTours;

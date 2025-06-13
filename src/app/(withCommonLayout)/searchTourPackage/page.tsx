"use client"

import TourExperienceCard from "@/components/card/tourExCard/TourExCard";
import { TTourPackage } from "@/components/lib/types";
import { useAppSelector } from "@/redux/hook";
import Link from "next/link";


const TourPackageSearchQuery = () => {
      const tourpackages = useAppSelector((state) => state.searchQuery.tourPackageStore)
     
  return (
    <div className="custom-container !mb-20 mt-14"> 
    
    {/* Tour Package Content */}
        {
          tourpackages? <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 lg:gap-5 xl:gap-6 ">
        {tourpackages?.map((product:TTourPackage, index:number) => (
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
        
      </div> : <div className='flex flex-col justify-center items-center h-screen gap-6'> 
                <p className="text-5xl">Tour Package Not Avaiable</p>
                <p className='text-xl text-white bg-blue-500  px-6 py-1 rounded-3xl '>
                    <Link href="/" > GO Back To Home Page </Link>
                </p>
          </div>
        }
    
    
    </div>
  )
}

export default TourPackageSearchQuery;
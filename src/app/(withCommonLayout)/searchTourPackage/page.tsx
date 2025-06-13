"use client"

import TourExperienceCard from "@/components/card/tourExCard/TourExCard";
import { TTourPackage } from "@/components/lib/types";
import { useAppSelector } from "@/redux/hook";


const TourPackageSearchQuery = () => {
      const tourpackages = useAppSelector((state) => state.searchQuery.tourPackageStore)
      console.log("secdddddddddddddddd", tourpackages?.length)





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
        
      </div> : <p className="mt-10">Tour package not avaiable</p>
        }
    
    
    </div>
  )
}

export default TourPackageSearchQuery;
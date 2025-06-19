/* eslint-disable @next/next/no-img-element */
"use client";

import ActivityCard from "@/components/common/activityCard/ActivityCard";
import Checklist from "@/components/common/checklist/Checklist";
import Highlights from "@/components/common/highlights/Highlights";
import ImportantInfo from "@/components/common/importantInfo/ImportantInfo";
import { IncludedExcludedCard } from "@/components/common/includedExcludedCard/IncludedExcludedCard/IncludedExcludedCard";
import KnowBeforeYouGo from "@/components/common/knowBeforeYouGo/KnowBeforeYouGo";


import TravelItinerary, {
} from "@/components/common/travelItinerary/TravelItinerary";
import WineTourFeatures from "@/components/common/wineTourFeatures/WineTourFeatures";
import WineTourItinerary from "@/components/common/wineTourItinerary/WineTourItinerary";

import { TravelCard } from "@/components/common/travelCard/TravelCard";
import { useGetSingleTourQuery } from "@/redux/api/tourPackages/tourPackagesApi";
import { useParams,  } from "next/navigation";
import { TPackageImage } from "@/components/lib/types";
import {  useAppSelector } from "@/redux/hook";
import Loading from "@/components/shared/loading/Loading";
import Header from "@/components/dashboard/Header/Header";


export default function Page() {
  const params = useParams()
  const id = params.id 
  const {data, isLoading} = useGetSingleTourQuery(id)
  
  const isAuthenticated = useAppSelector((state)=>state.auth.user?.email)

  console.log({isAuthenticated})



 

  if(isLoading){
    return <Loading/>
  }


  



  return (
    <div>      
   <Header/>
       
    <div className="bg-[#F4F4F4] px-4 pb-10 md:pb-16">

      <div className="px-4 py-8 ">

    
        {/* exarsize it  */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {data?.data?.images?.map((image:TPackageImage, index:number) => (
            <div
              key={index}
              className={`
              overflow-hidden rounded-lg  transition-transform duration-300  hover:-translate-y-1
              ${  [1, 3].includes(index)  ? "sm:col-span-1 sm:row-span-2" : "" }
              relative cursor-pointer
            `}
            >
              <div className="relative h-full">
                <img 
                  src={image.url || "/placeholder.svg"}
                  alt='dkdd'
                  className="object-cover w-full h-full"
                  loading="eager" 
                  decoding="async"
                />
              </div>
            </div>
          ))}
        </div>



      


{/* travel card  */}
           <div className="mt-10">

             <TravelCard title ={data?.data?.title}
                        location={data?.data?.location}
                        duration={`${data?.data?.duration}Days Trip`}
                        rating={4}
                        reviewCount={2000}
                        href=''
                        className = ""
                         />
           </div>




        {/* image datails component  */}
        <div className="flex flex-col md:flex-row mt-5 gap-6">


    
            {/* First colum  */}
          <div className="w-full md:w-[50%] lg:w-[50%]">
            
            {/* <TourOverviewWithCalender /> */}


            <div className=" mb-1  bg-white py-5 px-4 rounded-lg ">
              <div className="text-gray-600 mb-4 text-sm" dangerouslySetInnerHTML={{ __html: data?.data?.description }} ></div>
            </div>



           


            {/* WineTourItinerary */}
            <WineTourItinerary detailedItineraries={data?.data?.detailedItineraries}  />

            {/* ActivityCard */}
            <ActivityCard activity={data?.data?.activity} />


            {/* Highlights */}
            <Highlights title="Highlights" highlights={data?.data?.highlights} />
            
              {/* Checklist */}
             <Checklist items={data?.data?.brings} />



          </div>




         {/* secound colum  */}
          <div className="w-full md:w-[50%] lg:w-[50%]">
             {/* {includedExcludedCard} */}
            <IncludedExcludedCard includedItems={data?.data?.includes} excludedItems={data?.data?.includes}  />

             {/* WineTourFeatures */}
            <WineTourFeatures
              heading="Why You'll Love This Tour"
              features={data?.data?.tourLovingReasons}
            />

             {/* travel Itinerary  and drescription */}
            <TravelItinerary  items={data?.data?.descriptions} />
            
            {/* ImportantInfo  */}
             <ImportantInfo importantInfo={data?.data?.importantInfo}  />
            
             {/* KnowBeforeYouGo */}
             <KnowBeforeYouGo items={data?.data?.knowBeforeYouGoes}/>   


            
          </div>

        </div>



      </div>
    </div>

    
         

    </div>
  );
}

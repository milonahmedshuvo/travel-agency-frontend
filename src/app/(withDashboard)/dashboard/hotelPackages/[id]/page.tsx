/* eslint-disable @next/next/no-img-element */
"use client";
import { TravelCard } from "@/components/common/travelCard/TravelCard";
import WineTourFeatures from "@/components/common/wineTourFeatures/WineTourFeatures";
import { useParams } from "next/navigation";
import { useGetSingleHotelPackagesQuery } from "@/redux/api/hotelPackages/hotelPackegesApi";
import { THotelImage } from "@/components/lib/types";
import Loading from "@/components/shared/loading/Loading";
import BestPlaces from "@/components/common/roomCard/bestPlaces/BestPlaces";
import ActivityCard from "@/components/common/activityCard/ActivityCard";
import Highlights from "@/components/common/highlights/Highlights";
import Header from "@/components/dashboard/Header/Header";

export default function HotelDatailsAdmin() {
  const params = useParams();
  const id = params.id;
  const { data, isLoading } = useGetSingleHotelPackagesQuery(id);

  if (isLoading) {
    return <Loading />;
  }

  // console.log('ROOM Datails Page', data?.data)

  return (
    <div className="bg-[#F4F4F4] pb-10 md:pb-16">
      <Header />

      <div className="px-4 md:px-6 py-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {data?.data?.images?.map((image: THotelImage, index: number) => (
            <div
              key={index}
              className={`
                        overflow-hidden rounded-lg  transition-transform duration-300  hover:-translate-y-1
                        ${
                          [1, 3].includes(index)
                            ? "sm:col-span-1 sm:row-span-2"
                            : ""
                        }
                        relative cursor-pointer
                      `}
            >
              <div className="relative h-full">
                <img
                  src={image.url || "/placeholder.svg"}
                  alt="dkdd"
                  className="object-cover w-full h-full"
                  loading="eager"
                  decoding="async"
                />
              </div>
            </div>
          ))}
        </div>



         <div className="mt-10 flex justify-between bg-white" >

            <TravelCard
              title={data?.data?.title}
              location={data?.data?.location}
              duration={`${data?.data?.duration} Hours`}
              rating={4}
              reviewCount={2000}
              href=""
              className=""
            />

            <div className="flex flex-col justify-between p-4 sm:p-5 ">
                             <h1 className="bg-gradient-to-t from-20% from-[#156CF0] to-[#38B6FF] hover:from-[#4f88df] hover:to-[#0096FF] text-white py-1.5 px-3 rounded-lg cursor-pointer">Edit Package</h1>
                             <h2 className="text-2xl text-orange-400" >${data?.data?.price}</h2>
             </div>
         </div>





        {/* add without image component  */}
        <div className="flex flex-col md:flex-row mt-10 gap-6">
          <div className="w-full md:w-[50%] lg:w-[50%]">
            {/* travel card  */}
            

            <div className=" mb-5 bg-white py-6 px-4">
              <div
                className="text-gray-600 mb-4 text-sm"
                dangerouslySetInnerHTML={{ __html: data?.data?.description }}
              ></div>
            </div>


            {/* WineTourFeatures */}
            <WineTourFeatures
              heading="About This Stay"
              features={data?.data?.aboutStays}
            />

            <ActivityCard activity={data?.data?.activity} />
            <Highlights
              title="Amenities & Services"
              highlights={data?.data?.amenities}
            />
          </div>

          <div className="w-full md:w-[50%] lg:w-[50%]">
            <Highlights
              title="Distance from the property"
              highlights={data?.data?.distances}
            />

            <div className="bg-white my-6">
              <h1 className="text-base md:text-lg lg:text-3xl font-medium text-slate-800 py-4">
                Gallery – Visual Storytelling
              </h1>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {data?.data?.images?.map(
                  (image: THotelImage, index: number) => (
                    <div
                      key={index}
                      className={`
                        overflow-hidden rounded-lg  transition-transform duration-300  hover:-translate-y-1
                        ${
                          [1, 3].includes(index)
                            ? "sm:col-span-1 sm:row-span-2"
                            : ""
                        }
                        relative cursor-pointer
                      `}
                    >
                      <div className="relative h-full">
                        <img
                          src={image.url || "/placeholder.svg"}
                          alt="dkdd"
                          className="object-cover w-full h-full"
                          loading="eager"
                          decoding="async"
                        />
                      </div>
                    </div>
                  )
                )}
              </div>
            </div>

            <BestPlaces
              title="Best places to visit in Croatia"
              detailedItineraries={data?.data?.bestPlaces}
            ></BestPlaces>
          </div>
        </div>
      </div>
    </div>
  );
}

/* eslint-disable @next/next/no-img-element */
"use client";

import { BookingConfirmationData } from "@/components/bookingForm/tour/BookingConfirmationData";
import Header from "@/components/dashboard/Header/Header";
import { THotelImage, } from "@/components/lib/types";
import Loading from "@/components/shared/loading/Loading";
import { useGetSingleRoomBookingQuery } from "@/redux/api/hotelPackages/hotelPackegesApi";
import { useParams } from "next/navigation";



type TourCustomerInfo = {
  id: string;
  fullName: string;
  email: string;
  isAdult: boolean;
  age: number;
  contactNo: string;
  requestMessage: string;
  tourBookingId: string;
  roomBookingId: string | null;
  createdAt: string; // or Date, depending on how you use it
  updatedAt: string; // or Date
};

const MyHotelBookingDatailsPage = () => {
  const params = useParams();
  const id = params.id;
  const { data, isLoading } = useGetSingleRoomBookingQuery(id)

  

  // console.log(data?.data?.tourPackage?.title)
 
  if (isLoading) {
    return <Loading />;
  }





 
  



  










  const dateFormate = (dates:string) => {
     const date = new Date(dates)
     const update = date.toLocaleDateString()
     return update
  }


  



  return (
  <div className="pb-20 !bg-white">
       <Header/>
    <div className="px-3 md:px-6 mt-8 space-y-6 bg-white">

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {data?.data?.hotelPackage?.images?.map(
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


      <div className="bg-[#F1F5F9] py-5 px-5 my-7 rounded-xl">
        <h1 className="text-2xl"> {data?.data?.hotelPackage.title} </h1>
        <h2 className="mt-1 text-[#333333]">
          {`${data?.data?.hotelPackage.location}  `}
        </h2>
      </div>




      <div className="grid grid-cols-2 gap-7 ">
        {/* First div  */}
        <div className="col-span-1">
          <div className="bg-[#F1F5F9] py-5 px-5  rounded-xl">
            <h1 className="text-[28px] text-[#15202E]">Hotel Information </h1>

            <h3 className="text-[#333333] text-[20px] mt-2.5 font-medium">
              Check In Date
            </h3>
            <p className="text-[16px] text-[#676767] mt-2">
              {dateFormate(data?.data?.checkInDate)}
            </p>
            <h3 className="text-[#333333] text-[20px] mt-2.5 font-medium">
              Check Out Date
            </h3>
            <p className="text-[16px] text-[#676767] mt-2 ">
              {dateFormate(data?.data?.checkOutDate)}
            </p>
            <h3 className="text-[#333333] text-[20px] mt-2.5 font-medium">
              Room Type
            </h3>
            <p className="text-[16px] text-[#676767] mt-2">
              {data?.data?.roomType} 
            </p>
          </div>




          <div className="bg-[#F1F5F9] py-5 px-5 mt-7 rounded-xl">
            <h1 className="text-[28px] text-[#15202E]">Package Cost</h1>
            <h3 className="text-[#333333] text-[20px] mt-1.5 font-medium">
              Total cost
            </h3>

            <div className="flex gap-2 mt-3 items-center ">
              <h3 className="text-[#333333] text-[18px]  ">Trip Cost: </h3>
              <p className="text-[16px] text-orange-400 ">
                ${data?.data?.hotelPackage?.price}
              </p>
            </div>

        
          </div>
        </div>

        {/* secound div  */}
        <div className="col-span-1  bg-[#F1F5F9] py-5 px-5  rounded-xl">
          <h1 className="text-[28px] text-[#15202E]"> Traveler Information </h1>



          {data?.data?.guests?.map((guest: TourCustomerInfo) => (
            <BookingConfirmationData
              key={guest.id}
              email={guest?.email as string}
              age={Number(guest?.age)}
              phone={guest?.contactNo as string}
              specialRequests={guest?.requestMessage || "N/A"}
            />
          ))}
        </div>
      </div>







     
    </div>

     <div className="flex justify-end mt-10 mr-6">
        <button
            
              className="text-black bg-gray-200 py-4  rounded-xl cursor-pointer w-[130px] text-xl"
            >
              cencel
            </button>
    </div>

    </div>
  );
};

export default MyHotelBookingDatailsPage;

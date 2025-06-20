/* eslint-disable @next/next/no-img-element */
"use client";

import { BookingConfirmationData } from "@/components/bookingForm/tour/BookingConfirmationData";
import Header from "@/components/dashboard/Header/Header";
import TourCencelModal from "@/components/dashboard/modal/TourCencelModal";
import { TPackageImage } from "@/components/lib/types";
import Loading from "@/components/shared/loading/Loading";
import { useGetSingleTourBookingQuery } from "@/redux/api/tourPackages/tourPackagesApi";
import { useParams } from "next/navigation";
import { useState } from "react";


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

const MyTourBookingDatailsPage = () => {
  const [showModal, setShowModal] = useState(false);
  const params = useParams();
  const id = params.id;
  const { data, isLoading } = useGetSingleTourBookingQuery(id);
 
  


  const handleTourCencel = () => {
     console.log("celcel")
     setShowModal(true)
  }

  const closeModal = () => {
    setShowModal(false);

  };






  if (isLoading) {
    return <Loading />;
  }

  return (
    <div className="pb-20 !bg-white">
      <Header />

      <div className="px-3 md:px-6 mt-8 space-y-6 bg-white">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {data?.data?.tourPackage?.images?.map(
            (image: TPackageImage, index: number) => (
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

        <div className="bg-[#F1F5F9] py-5 px-5 my-6 rounded-xl">
          <h1 className="text-2xl"> {data?.data?.tourPackage.title} </h1>
          <h2 className="mt-1 text-[#333333]">
            {`${data?.data?.tourPackage.location} - ${data?.data?.tourPackage?.duration}  Days Trip`}{" "}
          </h2>
        </div>

        <div className="grid grid-cols-2 gap-7 ">
          {/* First div  */}
          <div className="col-span-1">
            <div className="!bg-[#F1F5F9] py-5 px-5  rounded">
              <h1 className="text-[28px] text-[#15202E]">Tour Information </h1>

              <h3 className="text-[#333333] text-[20px] mt-2.5 font-medium">
                Date
              </h3>
              <p className="text-[16px] text-[#676767] mt-2">
                {data?.data?.availableDate}
              </p>
              <h3 className="text-[#333333] text-[20px] mt-2.5 font-medium">
                Duration:
              </h3>
              <p className="text-[16px] text-[#676767] mt-2 ">
                {data?.data?.duration} Hours
              </p>
              <h3 className="text-[#333333] text-[20px] mt-2.5 font-medium">
                Group Size:
              </h3>
              <p className="text-[16px] text-[#676767] mt-2">
                {data?.data?.groupSize} Person
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
                  {" "}
                  ${data?.data?.tourPackage?.price}
                </p>
              </div>

              {data?.data?.vehicleBooking && (
                <div>
                  <div className="flex gap-2 items-center mt-2">
                    <h3 className="text-[#333333] text-[18px]  ">
                      Vehicle Cost:{" "}
                    </h3>
                    <p className="text-[16px]  text-orange-400">
                      {" "}
                      ${data?.data?.vehicleBooking?.price}
                    </p>
                  </div>

                  <div className="flex gap-2 items-center mt-2">
                    <h3 className="text-[#333333] text-[18px]  ">
                      Vehicle price Per Hours Cost:{" "}
                    </h3>
                    <p className="text-[16px] text-orange-400">
                      {" "}
                      $
                      {
                        data?.data?.vehicleBooking?.tourPackageVehicle?.vehicle
                          ?.pricePerHR
                      }
                    </p>
                  </div>
                </div>
              )}

              <div className="flex gap-2 items-center mt-2">
                <h3 className="text-[#333333] text-[18px]  ">Total Cost: </h3>
                <p className="text-[16px] text-orange-400">
                  {" "}
                  $
                  {data?.data?.vehicleBooking
                    ? data?.data?.tourPackage?.price +
                      data?.data?.vehicleBooking?.price
                    : data?.data?.tourPackage?.price}
                </p>
              </div>
            </div>
          </div>

          {/* secound div  */}
          <div className="col-span-1  bg-[#F1F5F9] py-5 px-5 rounded-xl">
            <h1 className="text-[28px] text-[#15202E]">
              {" "}
              Traveler Information{" "}
            </h1>

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

        {data?.data?.vehicleBooking && (
          <div className="bg-[#F1F5F9] py-5 px-5 my-7 rounded-xl">
            <h1 className="text-[28px] text-[#15202E]">
              Pick-Up & Return Preferences
            </h1>
            <div className="flex gap-2 mt-3 items-center ">
              <h3 className="text-[#333333] text-[18px]  ">
                {" "}
                Pick-up Location:{" "}
              </h3>
              <p className="text-[16px] text-[#676767] ">
                {" "}
                {data?.data?.vehicleBooking?.pickUpAddr}
              </p>
            </div>
            <div className="flex gap-2 mt-3 items-center ">
              <h3 className="text-[#333333] text-[18px]  ">
                {" "}
                Expected Time of Stay:{" "}
              </h3>
              <p className="text-[16px] text-[#676767] ">
                {" "}
                {data?.data?.vehicleBooking?.expTimeSty}
              </p>
            </div>
            <div className="flex gap-2 mt-3 items-center ">
              <h3 className="text-[#333333] text-[18px]  ">
                {" "}
                Drop-up Location:{" "}
              </h3>
              <p className="text-[16px] text-[#676767] ">
                {" "}
                {data?.data?.vehicleBooking?.dropOffAddr}
              </p>
            </div>
          </div>
        )}
      </div>

      <div className="flex justify-end mt-10 mr-6">
        <button onClick={handleTourCencel} className="text-black bg-gray-200 py-4  rounded-xl cursor-pointer w-[130px] text-xl hover:text-red-500 opacity-85">
          Cencel
        </button>
      </div>


        {
           showModal && <TourCencelModal closeModal={closeModal} />
        }
    </div>
  );
};

export default MyTourBookingDatailsPage;

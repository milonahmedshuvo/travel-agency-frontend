/* eslint-disable @next/next/no-img-element */
"use client";

import { BookingConfirmationData } from "@/components/bookingForm/tour/BookingConfirmationData";
import { TPackageImage } from "@/components/lib/types";
import OrderCancellationModal from "@/components/others/OrderCancellationModal/OrderCancellationModal";
import Loading from "@/components/shared/loading/Loading";
import { useGetSingleTourBookingQuery } from "@/redux/api/tourPackages/tourPackagesApi";
import { useAppDispatch } from "@/redux/hook";
import { setTourBookingId } from "@/redux/slice/booking/booking";
import { useParams, useRouter } from "next/navigation";
import { useState } from "react";
import toast from "react-hot-toast";

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
  const params = useParams();
  const id = params.id;
  const { data, isLoading } = useGetSingleTourBookingQuery(id);
  const router = useRouter();
  const dispatch = useAppDispatch();
  const [isModalOpen, setIsModalOpen] = useState(false);




  const handleCancellationSubmit = async (reason: string, customReason?: string) => {

   let modifyReason = reason  

    // console.log("Cancellation reason:", reason);
    if (customReason) {
      modifyReason  = customReason
    }

       console.log("Custom reason:ssssssssssss", modifyReason);

    // Here you would typically send the data to your API
     try {
      const token = localStorage.getItem('token')
    const response = await fetch(`https://supermariobos-api.code-commando.com/api/v1/tour-bookings/cancel/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`
      },
      body: JSON.stringify({ reason: modifyReason }),
    });
    const data = await response.json();
    // console.log("Cancel Success:", data);
    if(data?.success){
       toast.success("Cancel Success!!")   
    }else{
        toast.error( data?.message || "Cancel Filed!!")
    }
   
  } catch (error) {
    console.error("Error cancelling booking:", error);
     toast.error("Error cancelling booking")
  }


    setIsModalOpen(false);
  };

  // console.log(data?.data?.tourPackage?.title)
 
  if (isLoading) {
    return <Loading />;
  }

  const fullPaymentWithVehicle = () => {
    dispatch(setTourBookingId(id));
    router.push("/booking/payment");
  };









  // console.log("ffffffffffff", data?.data?.splitPayment?.finalPaymentTransaction?.paymentMethodType ==="PAYPAL")

  

  const handleEightyPayment = () => {
    dispatch(setTourBookingId(id));
    router.push("/tourBookingEightyPayment");
  };




  const handlePaymentPaypal = () => {
     dispatch(setTourBookingId(id));

     console.log("paypal payment")
     const link = data?.data?.splitPayment?.finalPaymentTransaction?.clientSecret

            if (link) {
              window.location.href = link;
            } else {
              toast.error("Payment link not found!");
            }
  }



  


  // 20% payment 
  const initial20PaypalPayment = () => {

    const makeStripePayment = async () => {
        const token = localStorage.getItem("token");
        const url = `https://supermariobos-api.code-commando.com/api/v1/tour-bookings/${id}/split-pay`;

        try {
          const response = await fetch(url, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${token}`,
            },
            body: JSON.stringify( {initialPaymentMethod : "PAYPAL", finalPaymentMethod: "STRIPE" } ),
          });

          const data = await response.json();

          console.log("20% payment paypal Success:", data);

          if (data?.initial) {
            // go to payment final page
            console.log("clientSecret paypal", data?.initial?.clientSecret);
            const link = data?.initial?.clientSecret;

            if (link) {
              window.location.href = link;
            } else {
              toast.error("Payment link not found!");
            }
          }
        } catch (error) {
          console.error("Room payment requst error:", error);
        }
      };

      // Call the function
      makeStripePayment();
  }




  return (
    <div className="custom-container">
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

      <div className="bg-[#F1F5F9] py-5 px-5 my-10 rounded">
        <h1 className="text-2xl"> {data?.data?.tourPackage.title} </h1>
        <h2 className="mt-1 text-[#333333]">
          {`${data?.data?.tourPackage.location} - ${data?.data?.tourPackage?.duration}  Days Trip`}{" "}
        </h2>
      </div>

      <div className="grid grid-cols-3 gap-7 ">
        {/* First div  */}
        <div className="col-span-2">
          <div className="bg-[#F1F5F9] py-5 px-5  rounded">
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

          <div className="bg-[#F1F5F9] py-5 px-5 mt-7 rounded">
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
        <div className="col-span-1  bg-[#F1F5F9] py-5 px-5  rounded">
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

      {data?.data?.vehicleBooking && (
        <div className="bg-[#F1F5F9] py-5 px-5 my-7 rounded">
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





      <div className="bg-[#F1F5F9] py-5 px-5 my-7 rounded flex justify-between items-center ">
        {/* payment if you pay 20% then show 80 or full payment  */}




        <div className="">
          {!data?.data?.splitPayment && !data?.data?.isPaid && (
            <button
              onClick={fullPaymentWithVehicle}
              className="bg-gradient-to-t from-20% from-[#156CF0] to-[#38B6FF] hover:from-[#4f88df] hover:to-[#0096FF] px-3 rounded text-white text-sm py-2.5 cursor-pointer "
            >
              {" "}
              payment & Confirmed {" "}
            </button>
          )}










        
          {
            //  data?.data?.splitPayment?.initialPaymentTransaction
            data?.data?.splitPayment?.initialPaymentTransaction && (
              <div>
                <h1 className="text-[28px] text-[#15202E]">Initial Payment </h1>

                <div className="flex gap-2 mt-3 items-center ">
                  <h3 className="text-[#333333] text-[18px]  ">
                    Payment Method :{" "}
                  </h3>
                  <p className="text-[16px] text-[#676767] ">
                    {
                      data?.data?.splitPayment?.initialPaymentTransaction
                        ?.paymentMethodType
                    }
                  </p>
                </div>


                <div className="flex gap-2 mt-3 items-center ">
                  <h3 className="text-[#333333] text-[18px]  ">Amount : </h3>
                  <p className="text-[16px] text-[#676767] "> ${ data?.data?.splitPayment?.initialPaymentTransaction?.amount} </p>
                </div>

                 <div className="flex gap-2 mt-3 items-center ">
                  <h3 className="text-[#333333] text-[18px]  ">Status : </h3>
                  <p className="text-[16px] text-[#676767] "> { data?.data?.splitPayment?.initialPaymentTransaction?.status} </p>
                </div>

                {/* Paypal 20% button  SUCCEEDED */}
                {
                   data?.data?.splitPayment?.initialPaymentTransaction?.status === "PROCESSING" && <div>
                     {
                    data?.data?.splitPayment?.initialPaymentTransaction?.paymentMethodType ==="PAYPAL" && <button
                    onClick={initial20PaypalPayment}
                  className="bg-gradient-to-t from-20% from-[#156CF0] to-[#38B6FF] hover:from-[#4f88df] hover:to-[#0096FF] px-3 rounded text-white text-sm py-1.5 cursor-pointer mt-6 "
                >
                  pay now 20% Paypal
                </button>
                 }
                   </div>
                   
                   
                   
                   
                   
                   
                   
                //    <button
                //   className="bg-gradient-to-t from-20% from-[#156CF0] to-[#38B6FF] hover:from-[#4f88df] hover:to-[#0096FF] px-3 rounded text-white text-sm py-1.5 cursor-pointer mt-6 "
                // >
                //   pay now 20%
                // </button>
                }

              </div>
            )
          }




          {/* payment stripe and paypal 80 % */}

          {
             data?.data?.splitPayment?.finalPaymentTransaction && (  <div className="mt-6">
                <h1 className="text-[28px] text-[#15202E]">Final Payment</h1>
                <div className="flex gap-2 mt-3 items-center ">
                  <h3 className="text-[#333333] text-[18px]  ">
                    Payment Method :
                  </h3>
                  <p className="text-[16px] text-[#676767] ">
                    {
                      data?.data?.splitPayment?.finalPaymentTransaction
                        ?.paymentMethodType
                    }
                  </p>
                </div>
               
               <div className="flex gap-2 mt-3 items-center ">
                  <h3 className="text-[#333333] text-[18px]  ">Amount : </h3>
                  <p className="text-[16px] text-[#676767] "> ${ data?.data?.splitPayment?.finalPaymentTransaction?.amount} </p>
                </div>

                 <div className="flex gap-2 mt-3 items-center ">
                  <h3 className="text-[#333333] text-[18px]  ">Status : </h3>
                  <p className="text-[16px] text-[#676767] "> { data?.data?.splitPayment?.finalPaymentTransaction?.status} </p>
                </div>




                 {
                   data?.data?.splitPayment?.finalPaymentTransaction?.status === "PROCESSING" && <div>
                     {
                    data?.data?.splitPayment?.finalPaymentTransaction?.paymentMethodType ==="PAYPAL" ? <button
                   onClick={handlePaymentPaypal}
                  className="bg-gradient-to-t from-20% from-[#156CF0] to-[#38B6FF] hover:from-[#4f88df] hover:to-[#0096FF] px-3 rounded text-white text-sm py-1.5 cursor-pointer mt-6 "
                >
                  payment & Confirmed (80%) PAYPAL
                </button> : <button
                  onClick={handleEightyPayment}
                  className="bg-gradient-to-t from-20% from-[#156CF0] to-[#38B6FF] hover:from-[#4f88df] hover:to-[#0096FF] px-3 rounded text-white text-sm py-1.5 cursor-pointer mt-6 "
                >
                  payment & Confirmed (80%) STRIPE
                </button>
                 }
                   </div>


                 }

 
                 
             </div> )
             

            
          }






        </div>

        <div>
          <button
            onClick={() => setIsModalOpen(true)}
            className="bg-orange-500  px-3 rounded text-white text-sm py-2.5 cursor-pointer "
          >
            {" "}
            Cencel Trip{" "}
          </button>

          <OrderCancellationModal
            title={data?.data?.tourPackage?.title}
            category={data?.data?.tourPackage?.category}
            isOpen={isModalOpen}
            onClose={() => setIsModalOpen(false)}
            onSubmit={handleCancellationSubmit}
          />
        </div>
      </div>
    </div>
  );
};

export default MyTourBookingDatailsPage;

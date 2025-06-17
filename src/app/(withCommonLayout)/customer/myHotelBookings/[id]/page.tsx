/* eslint-disable @next/next/no-img-element */
"use client";

import { BookingConfirmationData } from "@/components/bookingForm/tour/BookingConfirmationData";
import { THotelImage, } from "@/components/lib/types";
import OrderCancellationModal from "@/components/others/OrderCancellationModal/OrderCancellationModal";
import Loading from "@/components/shared/loading/Loading";
import { useGetSingleRoomBookingQuery } from "@/redux/api/hotelPackages/hotelPackegesApi";
import { useAppDispatch } from "@/redux/hook";
import { setRoomBookingId, } from "@/redux/slice/booking/booking";
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

const MyHotelBookingDatailsPage = () => {
  const params = useParams();
  const id = params.id;
  const { data, isLoading } = useGetSingleRoomBookingQuery(id)
  const router = useRouter();
  const dispatch = useAppDispatch();
  const [isModalOpen, setIsModalOpen] = useState(false);



  const handleCancellationSubmit = async (reason: string, customReason?: string) => {

   let modifyReason = reason  

    // console.log("Cancellation reason:", reason);
    if (customReason) {
      modifyReason  = customReason
    }

       console.log("Custom hotel reason", modifyReason);

    // Here you would typically send the data to your API
     try {
      const token = localStorage.getItem('token')
    const response = await fetch(`https://supermariobos-api.code-commando.com/api/v1/room-bookings/cancel/${id}`, {
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
       console.log(data)
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

  // Full payment Stripe and Paypal 
  const fullPaymentWithVehicle = () => {
    dispatch(setRoomBookingId(id));
    router.push("/booking/accommodation/paymentCard");
  };





  // Hanlde payment 80 % STRIPE 
  // console.log(data?.data?.splitPayment?.finalPaymentTransaction?.paymentMethodType ==="PAYPAL")
  const handleEightyPayment = () => {
    dispatch(setRoomBookingId(id));
    router.push("/roomBookingEightyPayment");
  };


  



  // Hanlde payment 80 % PAYPAL  
  const handlePaymentPaypal = () => {
     dispatch(setRoomBookingId(id));

     console.log("paypal payment")
     const link = data?.data?.splitPayment?.finalPaymentTransaction?.clientSecret

            if (link) {
              window.location.href = link;
            } else {
              toast.error("Payment link not found!");
            }
  }

  
// 20% payment Stripe 
  const initial20PaypalPaymentStripe = () => {
     dispatch(setRoomBookingId(id));
    console.log("20% Stripe")
    router.push("/roomTwentyPaymentStripe");
  }




//   console.log("paypal link 20%", data?.data?.splitPayment?.initialPaymentTransaction?.clientSecret )
  // 20% payment PAYPAL 
  const initial20PaypalPaymentPaypal = () => {
   console.log("20% PAYPAL")
   const link = data?.data?.splitPayment?.initialPaymentTransaction?.clientSecret

            if (link) {
              window.location.href = link;
            } else {
              toast.error("Payment link not found!");
            }
  }







  const dateFormate = (dates:string) => {
     const date = new Date(dates)
     const update = date.toLocaleDateString()
     return update
  }


  



  return (
    <div className="custom-container">


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


      <div className="bg-[#F1F5F9] py-5 px-5 my-10 rounded">
        <h1 className="text-2xl"> {data?.data?.hotelPackage.title} </h1>
        <h2 className="mt-1 text-[#333333]">
          {`${data?.data?.hotelPackage.location} - ${data?.data?.hotelPackage?.duration}  Days Trip`}{" "}
        </h2>
      </div>




      <div className="grid grid-cols-3 gap-7 ">
        {/* First div  */}
        <div className="col-span-2">
          <div className="bg-[#F1F5F9] py-5 px-5  rounded">
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




          <div className="bg-[#F1F5F9] py-5 px-5 mt-7 rounded">
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







      <div className="bg-[#F1F5F9] py-5 px-5 my-7 rounded flex justify-between items-center ">

        {/* YOU BOOKING BUT NOT PAYMENT METHOD SELECTED  */}

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
                    data?.data?.splitPayment?.initialPaymentTransaction?.paymentMethodType ==="PAYPAL" ? <button
                    onClick={initial20PaypalPaymentPaypal}
                  className="bg-gradient-to-t from-20% from-[#156CF0] to-[#38B6FF] hover:from-[#4f88df] hover:to-[#0096FF] px-3 rounded text-white text-sm py-1.5 cursor-pointer mt-6 "
                >
                  pay now 20% Paypal
                </button> : <button
                    onClick={initial20PaypalPaymentStripe}
                  className="bg-gradient-to-t from-20% from-[#156CF0] to-[#38B6FF] hover:from-[#4f88df] hover:to-[#0096FF] px-3 rounded text-white text-sm py-1.5 cursor-pointer mt-6 "
                >
                  pay now 20% Stripe 
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
            Cencel Hotel{" "}
          </button>

          <OrderCancellationModal
            title={data?.data?.hotelPackage?.title}
            category={data?.data?.hotelPackage?.roomCategory}
            isOpen={isModalOpen}
            onClose={() => setIsModalOpen(false)}
            onSubmit={handleCancellationSubmit}
          />
        </div>
      </div>
    </div>
  );
};

export default MyHotelBookingDatailsPage;

"use client"

import { useGetSingleRoomBookingQuery } from "@/redux/api/hotelPackages/hotelPackegesApi";
import { useAppSelector } from "@/redux/hook";
import Link from "next/link";


const RoomTwentypage = () => {
    const roomBookingId = useAppSelector((state) => state.booking.roomBookingId)
    console.log({roomBookingId})
    const {data} = useGetSingleRoomBookingQuery(roomBookingId)

    // console.log(data?.data)

    

    const dateFormate = (dates:string) => {
      const date = new Date(dates)
      const update = date.toLocaleDateString()
      return (update)
    }




  return (
    <div className="custom-container  h-screen flex justify-center items-center "> 
    
      <div className="max-w-md mx-auto">
         {/* <p>{data?.data?.splitPayment?.initialPaymentTransaction?.paymentMethodType}</p> */}
           
      <div>
            <h1 className="text-4xl md:text-5xl font-semibold mb-5 ">
          Booking 
            <span className="text-[#F78C41] ml-2.5">
            Confirmed!
            </span>
          </h1>

          <h1 className="text-2xl  font-semibold mb-5 ">
            {data?.data?.hotelPackage?.title}</h1>


            {/* checkInDate */}
            <div  className="flex flex-col sm:flex-row sm:items-center gap-2  pb-1 mt-4">
            <div className="flex items-center gap-2 ">
              <span className="font-medium text-gray-700">Check In Date : </span>
            </div>
            <span className="text-gray-600"> { dateFormate(data?.data?.checkInDate)}  </span>

          </div>

          <div  className="flex flex-col sm:flex-row sm:items-center gap-2  pb-1 mt-4">
            <div className="flex items-center gap-2 ">
              <span className="font-medium text-gray-700">Check Out Date : </span>
            </div>
            <span className="text-gray-600"> {dateFormate(data?.data?.checkOutDate)}  </span>

          </div>
            



            <div  className="flex flex-col sm:flex-row sm:items-center gap-2  pb-4 mt-4">
            <div  className="flex items-center gap-2 ">
              <span className="font-medium text-gray-700">Payment Method : </span>
            </div>
 
            {/* full payment method type  */} 
            {
               data?.data?.isPaid && <span className="text-gray-600"> {data?.data?.transactions?.paymentMethodType} <span className="text-green-500">(Paid)</span> </span>
            }


            {
              data?.data?.splitPayment?.initialPaymentTransaction?.status === "SUCCEEDED" &&  <div>
                <span className="text-gray-600"> {data?.data?.splitPayment?.initialPaymentTransaction?.paymentMethodType} </span>
              </div>
            }
            

            {/* // transactions paymentMethodType */}
          </div>
          {
               data?.data?.splitPayment?.initialPaymentTransaction?.status === "SUCCEEDED"     &&<div className="flex flex-col sm:flex-row sm:items-center gap-2  pb-1">
                   <span className="font-medium text-gray-700">Payment Amout : </span>
                  <span className="text-gray-600"> ${data?.data?.splitPayment?.initialPaymentTransaction?.amount}  <span className="text-green-500">(Paid)</span> </span>
                </div>
            }


            {
               data?.data?.splitPayment?.finalPaymentTransaction?.status === "SUCCEEDED"  &&<div className="flex flex-col sm:flex-row sm:items-center gap-2  pb-1">
                   <span className="font-medium text-gray-700">Payment Amout : </span>
                  <span className="text-gray-600"> ${data?.data?.splitPayment?.finalPaymentTransaction?.amount}  <span className="text-green-500">(Paid)</span> </span>
                </div>
            }

          





          <Link href="/customer/myHotelBookings">
                    <button
                      type="submit"
                      className="w-full py-3 px-4 bg-gradient-to-t from-20% from-[#156CF0] to-[#38B6FF] rounded-lg flex items-center justify-center text-white cursor-pointer mt-4"
                    >
                      View my bookings
                      <svg
                        className="w-5 h-5 ml-2"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M9 5l7 7-7 7"
                        ></path>
                      </svg>
                    </button>
                  </Link>

            
         </div>
    
    </div>
     </div>
  )
}

export default RoomTwentypage;
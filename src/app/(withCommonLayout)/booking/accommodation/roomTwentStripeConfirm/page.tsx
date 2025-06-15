"use client"

import { useGetSingleRoomBookingQuery } from "@/redux/api/hotelPackages/hotelPackegesApi";
import { useAppSelector } from "@/redux/hook";
import Link from "next/link";


const RoomTwentypage = () => {
    const roomBookingId = useAppSelector((state) => state.booking.roomBookingId)
    console.log({roomBookingId})
    const {data} = useGetSingleRoomBookingQuery(roomBookingId)

    console.log(data?.data)

    




  return (
    <div className="custom-container"> 
    
      <div className="max-w-md mx-auto  ">
         {/* <p>{data?.data?.splitPayment?.initialPaymentTransaction?.paymentMethodType}</p> */}



      

           
      <div>
            <p className="font-medium text-gray-700 ">Payment successs!!</p>
            <div  className="flex flex-col sm:flex-row sm:items-center gap-2  pb-1 mt-4">
            <div className="flex items-center gap-2 ">
              <span className="font-medium text-gray-700">Payment Method : </span>
            </div>
            <span className="text-gray-600"> {data?.data?.splitPayment?.initialPaymentTransaction?.paymentMethodType} <span className="text-green-500">(Pain)</span> </span>

          </div>


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
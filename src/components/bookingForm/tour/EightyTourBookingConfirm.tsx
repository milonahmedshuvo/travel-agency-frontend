"use client";
// import Link from "next/link";
import { ConfirmedSize } from "./ConfirmedSize";
import { useAppSelector } from "@/redux/hook";
import { useGetSingleTourBookingQuery } from "@/redux/api/tourPackages/tourPackagesApi";
import Link from "next/link";



export default function EightyTourBookingConfirmed () {

      const tourBookingId = useAppSelector((state) => state.booking.tourBookingId)
      const {data} = useGetSingleTourBookingQuery(tourBookingId)



      console.log("tour booking data", data?.data?.vehicleBooking?.pickUpDate) // isVehicleBooking, splitPayment 
      console.log("tourBookingId", tourBookingId)


      // console.log('20 % persen ',  data?.data?.transactions?.splitPaymentType) for pass component 20%



    // date formate 


// const formattedDate = new Intl.DateTimeFormat('en-US', options).format(date);


const formattedDate = new Date(data?.data?.vehicleBooking?.pickUpDate).toLocaleDateString()















  return (
    <section className="space-y-6 bg-[#F4F4F4] ">
      <div className="space-y-6 max-w-[780px] mx-auto p-4 md:p-12  shadow bg-[#ffffff]">
        <div className="mb-3">
          {/* <p className="text-lg font-medium mb-5">Step 05</p> */}
          <h1 className="text-4xl md:text-5xl font-semibold mb-5 ">
          Booking 
            <span className="text-[#F78C41] ml-2.5">
            Confirmed!
            </span>
          </h1>

          <p className="text-gray-600 mb-5"> A confirmation email has been sent to ux.saifur.info@gmail.com with your booking details, itinerary, and payment receipt.</p>
        </div>



        <div className=" mt-6">

          <h1 className="text-2xl sm:text-3xl  font-medium mb-6  mt-12">
             {data?.data?.tourPackage?.title}
          </h1>
           
           


           {/* <BookingSize date=" March 12, 2025" duration="6 Hours" groupSize="3 Parson" /> */}
           <ConfirmedSize date={data?.data?.availableDate} duration={data?.data?.duration} groupSize={data?.data?.groupSize} paymentMethod={ data?.data?.transactions?.splitPaymentType ? ( <> {data?.data?.transactions?.paymentMethodType}{' '} <span className="text-green-600">80% (PAID)</span> </> ) : ( <> {data?.data?.transactions?.paymentMethodType} {' '} <span className="text-green-600"> (PAID)</span>  </>)    }/>



           {/* if vehicle booking  */}
          <div className="space-y-4 mt-5" > 
           {
              data?.data?.isVehicleBooking &&   <div>
            <div  className="flex flex-col sm:flex-row sm:items-center gap-2  pb-1">
            <div className="flex items-center gap-2 ">
              <span className="font-medium text-gray-700">pick up Address</span>
            </div>
            <span className="text-gray-600">{data?.data?.vehicleBooking.pickUpAddr} </span>
          </div>
         </div> 
           }
           {
              data?.data?.isVehicleBooking &&   <div>
            <div  className="flex flex-col sm:flex-row sm:items-center gap-2  pb-1">
            <div className="flex items-center gap-2 ">
              <span className="font-medium text-gray-700">pick up Date</span>
            </div>
            <span className="text-gray-600">{formattedDate} </span>
          </div>
         </div> 
           }

           {/* paddding amout :  */}

           {/* {
             data?.data?.splitPayment && <div>
            <div  className="flex flex-col sm:flex-row sm:items-center gap-2  pb-1">
            <div className="flex items-center gap-2 ">
              <span className="font-medium text-gray-700">Pandding Amount : </span>
            </div>
            <span className="text-gray-600">{`${data?.data?.splitPayment?.finalPaymentTransaction?.amount} ${data?.data?.transactions?.currency}`   } </span>
          </div>
         </div> 
           } */}



         </div>
        </div>






        <Link href="/customer/myTripBookings">
          <button
            type="submit"
            className="w-full py-3 px-4 bg-gradient-to-t from-20% from-[#156CF0] to-[#38B6FF] rounded-lg flex items-center justify-center text-white cursor-pointer"
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
    </section>
  );
}

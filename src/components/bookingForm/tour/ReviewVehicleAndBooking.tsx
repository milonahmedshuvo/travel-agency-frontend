/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";
import { useCreateTourBookingMutation, useGetSingleTourQuery } from "@/redux/api/tourPackages/tourPackagesApi";
import { BookingConfirmationData } from "./BookingConfirmationData";
import { BookingSize } from "./ReviewSize";
import { useAppDispatch, useAppSelector } from "@/redux/hook";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import { useGetMeQuery } from "@/redux/api/auth/authApi";
import { setTourBookingId } from "@/redux/slice/booking/booking";
import Link from "next/link";
import { useState } from "react";


export default function BookingAndVehicleReview() {
   const [loading, setLoading] = useState(false);
  const router = useRouter()
  const pickupLocation = useAppSelector((state) => state.vehicleBooking.pickUpAddr)
  const pickUpDate = useAppSelector((state) => state.vehicleBooking.pickUpDate)
  const pickupTime = useAppSelector((state) => state.vehicleBooking.pickUpTime)
  const vehicleType = useAppSelector((state) => state.vehicleBooking.vehicleType)
  // const duration = useAppSelector((state)=> state.vehicleBooking.duration)
  const pickupRestaurant = useAppSelector((state) => state.vehicleBooking.restaurant)
  const tourPackagesId = useAppSelector((state) => state.vehicleBooking.tourPackageId)
  const address = useAppSelector((state) => state.vehicleBooking.address)
  const expTimeSty = useAppSelector((state) => state.vehicleBooking.expTimeSty)
  const sameCarReturn = useAppSelector((state) => state.vehicleBooking.sameCarReturn)
  const dropOffAddr = useAppSelector((state) => state.vehicleBooking.dropOffAddr)
  const needsAdditionalStops = useAppSelector((state) => state.vehicleBooking.needsAdditionalStops)
  const tourPackageVehicleId = useAppSelector((state) => state.vehicleBooking.tourPackageVehicleId)
  
  const gustDatailsOne = useAppSelector((state) => state.booking.gustDatailsOne)
  const gustDatailsTwo = useAppSelector((state) => state.booking.gustDatailsTwo)
  const gustDatailsThree = useAppSelector((state) => state.booking.gustDatailsThree)

  const selectTourDateDatails = useAppSelector((state) => state.booking.bookingSelectTourDate)

  const {data} = useGetMeQuery("")
  const dispatch = useAppDispatch()
  // console.log("get me customer : ",   data?.data?.customer?.id )

  
  // customer datails 
  const user = useAppSelector((state) => state.auth.user)
  const [createTourBooking] = useCreateTourBookingMutation()

  const {data:currentTourPakages} = useGetSingleTourQuery(tourPackagesId)
  // console.log(currentTourPakages?.data?.title) 
 






const guests = [gustDatailsOne, gustDatailsTwo, gustDatailsThree];
  
const handleBookingDataSend = async () => {
   setLoading(true);

  if (!selectTourDateDatails || !selectTourDateDatails.date) {
  throw new Error("Tour date is required.");
}

   const payload = {
  tourPackageId: tourPackagesId,
  availableDate: new Date(selectTourDateDatails?.date).toISOString(),
  duration: selectTourDateDatails?.duration,
  groupSize: selectTourDateDatails?.groupSize,
  customerId: data?.data?.customer?.id,
  isVehicleBooking: true,
  guests: guests,

  vehicleBooking: {
    pickUpAddr: pickupLocation,
    pickUpDate: new Date(pickUpDate).toISOString(),
    pickUpTime: pickupTime,
    vehicleType: vehicleType ,
    duration: 6,
    restaurant:  pickupRestaurant,
    address: address,
    expTimeSty: expTimeSty,
    sameCarReturn: sameCarReturn,
    dropOffAddr: dropOffAddr,
    needsAdditionalStops: needsAdditionalStops,
    tourPackageVehicleId: tourPackageVehicleId,
    customerId: data?.data?.customer?.id,
  }
};
console.log('vehicle booking payload..', payload)


  //  router.push('/booking/payment')

 try{
  const result = await createTourBooking(payload).unwrap()
  console.log('result tour booking', result)
  toast.success( result.message || "Tour Bookings success!!")

 const tourBookingId = result?.data?.id      
//dispatch(setTourBookingId(tourBookingId))
 console.log("Tour booking id :", tourBookingId)
 dispatch(setTourBookingId(tourBookingId))

  setLoading(false);
  router.push('/booking/payment')
 

 }catch(err){
  console.log('error tour booking', err)
  toast.error("bookings error")
  setLoading(false);
 }
}


  



  return (
    <section className="space-y-6 bg-[#F4F4F4] ">
      <div className="space-y-6 max-w-[780px] mx-auto p-4 md:p-12  shadow bg-[#ffffff]">
        <div className="mb-3">
          {/* <p className="text-lg font-medium mb-5">Send data in backend </p> */}
          <h1 className="text-4xl md:text-5xl font-semibold mb-5 ">
              Review{" "}
            <span className="text-[#F78C41]">
              & Confirm <br /> Booking
            </span>
          </h1>

          <p className="text-gray-600 mb-5">
            We respect your privacy! Your details are securely stored and never
            shared.
          </p>
        </div>

        <div className=" mt-6">
          <h1 className="text-2xl sm:text-3xl  font-medium mb-6  mt-12">
              {currentTourPakages?.data?.title}
          </h1>
           
           <BookingSize date={selectTourDateDatails?.date as string } duration={selectTourDateDatails?.duration as number } groupSize={selectTourDateDatails?.groupSize as number} />

          <div className="grid grid-cols-1 md:grid-cols-2">
          <BookingConfirmationData
            email={gustDatailsOne?.email as string}
            age={Number(gustDatailsOne?.age)}
            phone={gustDatailsOne?.contactNo as string}
             specialRequests={gustDatailsOne?.requestMessage || "N/A" }
        />


          <BookingConfirmationData
            email={gustDatailsTwo?.email as string}
            age={Number(gustDatailsTwo?.age)}
            phone={gustDatailsTwo?.contactNo as string}
            specialRequests={gustDatailsTwo?.requestMessage || "N/A"}
          />

          <BookingConfirmationData
            email={gustDatailsThree?.email as string}
            age={gustDatailsThree?.age as number}
            phone={gustDatailsThree?.contactNo as string}
            specialRequests={gustDatailsThree?.requestMessage || "N/A"}
          />
          </div>
        </div>

        <h1  className="!text-2xl sm:text-3xl  font-medium mb-6  mt-12" >Vehicle booking information</h1>

              <div className="flex gap-1">
                 <h1 className="font-medium">Pick up location :</h1>
                 <h1>{pickupLocation}</h1>
              </div>
              <div className="flex gap-3">
                 <h1 className="font-medium">Pick up time :</h1>
                 <h1>{pickupTime}</h1>
              </div>
              <div className="flex gap-3">
                 <h1 className="font-medium">Pick up rastaurant :</h1>
                 <h1>{pickupRestaurant}</h1>
              </div>        
        
          <button
            onClick={() => handleBookingDataSend()}
            type="submit"
            className="w-full py-3 px-4 bg-gradient-to-t from-20% from-[#156CF0] to-[#38B6FF] rounded-lg flex items-center justify-center text-white cursor-pointer"
          >

            {
           loading? <span className="">Processing...</span> : <span>Confirm & Pay Now</span>
         }

          {
             !loading && <svg
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
          }


          </button>
           
            <div className="flex justify-center items-center cursor-pointer">
             <Link href="/inquiry" >
                <button className="text-orange-400 font-semibold text-center cursor-pointer" >Inquiry</button>
             </Link>
        </div>


      </div>
    </section>
  );
}

"use client";
import { useAppDispatch, useAppSelector } from "@/redux/hook";
import toast from "react-hot-toast";
import { ReviewItems } from "./ReviewItems";
import { BookingConfirmationData } from "../tour/BookingConfirmationData";
import { useCreateRoomBookingMutation } from "@/redux/api/hotelPackages/hotelPackegesApi";
import { useRouter } from "next/navigation";
import { setRoomBookingId } from "@/redux/slice/booking/booking";


export default function BookingReview() {
    const router = useRouter()
    const dispatch = useAppDispatch()
    const acommodationStayBooking = useAppSelector((state) => state.accommodationBooking.acommodationStayBooking)

     const accommodationGustDatailsOne = useAppSelector((state) => state.accommodationBooking.accommodationGustDatailsOne)
     const accommodationGustDatailsTwo = useAppSelector((state) => state.accommodationBooking.accommodationGustDatailsTwo)
     const accommodationGustDatailsThree = useAppSelector((state) => state.accommodationBooking.accommodationGustDatailsThree)
   
    // const hotelPackageId = useAppSelector((state) => state.accommodationBooking.hotelPackageId)


    // customer datails 
      const user = useAppSelector((state) => state.auth.user)
      const [createRoomBooking] = useCreateRoomBookingMutation()

      

      // console.log('current user id',  user?.id)


const guests = [accommodationGustDatailsOne, accommodationGustDatailsTwo, accommodationGustDatailsThree];  
const handleBookingDataSend = async () => {

if (!acommodationStayBooking || !acommodationStayBooking.checkOutDate) {
  throw new Error("Hotel date is required.");
}


 const payload = {
    checkInDate: new Date(acommodationStayBooking.checkInDate).toISOString(),
    checkOutDate: new Date(acommodationStayBooking.checkOutDate).toISOString(),
    numberOfGuests: acommodationStayBooking.numberOfGuests,
    roomType: acommodationStayBooking.roomType,
    hotelPackageId: "68359870981abc53052aa9cf",
    customerId: user?.id,
    guests: guests
  }


 try{
  const result = await createRoomBooking(payload).unwrap()
  console.log('Result Room booking', result)

  console.log(result?.data)
  // store clientSecret and amount in redux 
  //  dispatch(setRoomBookingPayment({clientSecret: "", amount: 10 }))
    
    dispatch(setRoomBookingId(result?.data.id))

  toast.success( result.message || "Room Bookings success!!")
  router.push("/booking/accommodation/paymentCard")
 }catch(err){
  console.log('error Room booking', err)
  toast.error("Room bookings Filed")
 }
}




  return (
    <section className="space-y-6 bg-[#F4F4F4] ">
      <div className="space-y-6 max-w-[780px] mx-auto p-4 md:p-12  shadow bg-[#ffffff]">
        <div className="mb-3">
          {/* <p className="text-lg font-medium mb-5">Step 05</p> */}
          <h1 className="text-4xl md:text-5xl font-semibold mb-5 ">
              Review{" "}
            <span className="text-[#F78C41]">
              & Confirm <br /> Bookings
            </span>
          </h1>

          <p className="text-gray-600 mb-5">
            We respect your privacy! Your details are securely stored and never
            shared.
          </p>
        </div>

        <div className=" mt-6">
          <h1 className="text-2xl sm:text-3xl  font-medium mb-6  mt-12">
            Santorini Sunset Catamaran Cruise
          </h1>
        
           <ReviewItems checkIn={acommodationStayBooking?.checkInDate as string}  checkOut={acommodationStayBooking?.checkOutDate as string} numberGuests={acommodationStayBooking?.numberOfGuests as number} ></ReviewItems>


          <div className="grid grid-cols-1 md:grid-cols-2">
          <BookingConfirmationData
            email={accommodationGustDatailsOne?.email as string}
            age={Number(accommodationGustDatailsOne?.age)}
            phone={accommodationGustDatailsOne?.contactNo as string}
             specialRequests={accommodationGustDatailsOne?.requestMessage || "N/A" }
        />

          <BookingConfirmationData
            email={accommodationGustDatailsTwo?.email as string}
            age={Number(accommodationGustDatailsTwo?.age)}
            phone={accommodationGustDatailsTwo?.contactNo as string}
            specialRequests={accommodationGustDatailsTwo?.requestMessage || "N/A"}
          />

          <BookingConfirmationData
            email={accommodationGustDatailsThree?.email as string}
            age={accommodationGustDatailsThree?.age as number}
            phone={accommodationGustDatailsThree?.contactNo as string}
            specialRequests={accommodationGustDatailsThree?.requestMessage || "N/A"}
          />
          </div>
        </div>

        {/* <Link href="/booking/payment"> */}
          <button
            onClick={() => handleBookingDataSend()}
            type="submit"
            className="w-full py-3 px-4 bg-gradient-to-t from-20% from-[#156CF0] to-[#38B6FF]  hover:bg-blue-600 rounded-lg flex items-center justify-center text-white cursor-pointer"
          >
            Confirm & Pay Now
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
        {/* </Link> */}

      </div>
    </section>
  );
}

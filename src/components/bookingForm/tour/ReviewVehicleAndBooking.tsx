/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";
import { BookingConfirmationData } from "./BookingConfirmationData";
import { BookingSize } from "./ReviewSize";
import { useAppSelector } from "@/redux/hook";
import { useRouter } from "next/navigation";




export default function BookingAndVehicleReview() {
  const router = useRouter()
  const pickupLocation = useAppSelector((state) => state.vehicleBooking.pickUpAddr)
  const pickupTime = useAppSelector((state) => state.vehicleBooking.pickUpTime)
  const pickupRestaurant = useAppSelector((state) => state.vehicleBooking.restaurant)

  const gustDatailsOne = useAppSelector((state) => state.booking.gustDatailsOne)
  const gustDatailsTwo = useAppSelector((state) => state.booking.gustDatailsTwo)
  const gustDatailsThree = useAppSelector((state) => state.booking.gustDatailsThree)

  const selectTourDateDatails = useAppSelector((state) => state.booking.bookingSelectTourDate)
  







  const guests = [gustDatailsOne, gustDatailsTwo, gustDatailsThree];
  
const handleBookingDataSend = () => {
   const payload = {
  tourPackageId: "682bb0330f1cc49088ec767c",
  availableDate: "2025-05-25T00:42:55.105Z",
  duration: 3,
  groupSize: 5,
  customerId: "682bcfba4f18aa937f95a66f",
  isVehicleBooking: true,
  guests: guests,

  vehicleBooking: {
    pickUpAddr: "123 Main Street",
    pickUpDate: "2025-05-25T00:42:55.105Z",
    pickUpTime: "08:00 AM",
    vehicleType: "Sedan",
    duration: 3,
    restaurant: "Ocean View Restaurant",
    address: "456 Ocean Road",
    expTimeSty: "10:00 AM",
    sameCarReturn: true,
    dropOffAddr: "123 Main Street",
    needsAdditionalStops: false,
    tourPackageVehicleId: "682bb0340f1cc49088ec7687",
    customerId: "682bcfba4f18aa937f95a66f"
  }
};



   router.push('/booking/payment')
}

  



  return (
    <section className="space-y-6 bg-[#F4F4F4] ">
      <div className="space-y-6 max-w-[780px] mx-auto p-4 md:p-12  shadow bg-[#ffffff]">
        <div className="mb-3">
          <p className="text-lg font-medium mb-5">Step 05</p>
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
            Santorini Sunset Catamaran Cruise
          </h1>
           
           <BookingSize date={selectTourDateDatails?.date as string } duration={selectTourDateDatails?.duration as string} groupSize={selectTourDateDatails?.groupSize as string} />

          <div className="grid grid-cols-1 md:grid-cols-2">
          <BookingConfirmationData
            email={gustDatailsOne?.email as string}
            age={gustDatailsOne?.age as string}
            phone={gustDatailsOne?.phoneNumber as string}
            specialRequests={gustDatailsOne?.specialRequests || "N/A"}
          />

          <BookingConfirmationData
            email={gustDatailsTwo?.email as string}
            age={gustDatailsTwo?.age as string}
            phone={gustDatailsTwo?.phoneNumber as string}
            specialRequests={gustDatailsTwo?.specialRequests || "N/A"}
          />

          <BookingConfirmationData
            email={gustDatailsThree?.email as string}
            age={gustDatailsThree?.age as string}
            phone={gustDatailsThree?.phoneNumber as string}
            specialRequests={gustDatailsThree?.specialRequests || "N/A"}
          />
          </div>
        </div>

        <h1  className="!text-2xl sm:text-3xl  font-medium mb-6  mt-12" >Vehicle booking information</h1>

              <div className="flex gap-3">
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
        






        {/* <Link href="/booking/payment"> */}
          <button
            onClick={() => handleBookingDataSend}
            type="submit"
            className="w-full py-3 px-4 bg-gradient-to-t from-20% from-[#156CF0] to-[#38B6FF] rounded-lg flex items-center justify-center text-white cursor-pointer"
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

"use client";
import { BookingConfirmationData } from "./BookingConfirmationData";
import { BookingSize } from "./ReviewSize";
import { useAppDispatch, useAppSelector } from "@/redux/hook";
import toast from "react-hot-toast";
import { useCreateTourBookingMutation, useGetSingleTourQuery } from "@/redux/api/tourPackages/tourPackagesApi";
import { useRouter } from "next/navigation";
import { setTourBookingId } from "@/redux/slice/booking/booking";
import { useGetMeQuery } from "@/redux/api/auth/authApi";


export default function BookingReview() {
  const router = useRouter()
  const dispatch = useAppDispatch()
  const booktourPackagesId = useAppSelector((state) => state.vehicleBooking.tourPackageId)
  // console.log("booktourPackagesId", booktourPackagesId)
  const {data:bookTourPacakages} = useGetSingleTourQuery(booktourPackagesId)
  console.log("dataaaaaaaaaaaa", bookTourPacakages?.data?.title)








  // const bookTourPackages = 


  const selectTourDateDatails = useAppSelector(
    (state) => state.booking.bookingSelectTourDate
  );
  const gustDatailsOne = useAppSelector(
    (state) => state.booking.gustDatailsOne
  );
  const gustDatailsTwo = useAppSelector(
    (state) => state.booking.gustDatailsTwo
  );
  const gustDatailsThree = useAppSelector(
    (state) => state.booking.gustDatailsThree
  );

  const tourPackagesId = useAppSelector(
    (state) => state.vehicleBooking.tourPackageId
  );

  // customer datails
  const user = useAppSelector((state) => state.auth.user);  
  const [createTourBooking] = useCreateTourBookingMutation();
  const {data} = useGetMeQuery("")

  console.log("get me", data?.data)
  console.log("current user id", user);





  const guests = [gustDatailsOne, gustDatailsTwo, gustDatailsThree];

  const handleBookingDataSend = async () => {
    if (!selectTourDateDatails || !selectTourDateDatails.date) {
      throw new Error("Tour date is required.");
    }

    const payload = {
      tourPackageId: tourPackagesId,
      availableDate: new Date(selectTourDateDatails?.date).toISOString(),
      duration: selectTourDateDatails?.duration,
      groupSize: selectTourDateDatails?.groupSize,
      customerId: data?.data?.customer?.id, 
      isVehicleBooking: false,
      guests: guests,
    };





    // console.log("vehicle booking payload..", payload);
    //  router.push('/booking/payment')

    try {
      const result = await createTourBooking(payload).unwrap();
      console.log("result tourbooking", result);

      const tourBookingId = result?.data?.id
      
      dispatch(setTourBookingId(tourBookingId))
      // console.log('tourBookingId', tourBookingId)



      toast.success(result.message || "Tour Bookings success!!");

      router.push('/booking/payment')
      // next page 
      // /booking/ConfirmedBooking

    } catch (err) {
      console.log("error tour booking", err);
      toast.error("bookings Filed");
    }
  };



  
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
             {bookTourPacakages?.data?.title}
          </h1>

          <BookingSize
            date={selectTourDateDatails?.date as string}
            duration={selectTourDateDatails?.duration as number}
            groupSize={selectTourDateDatails?.groupSize as number}
          />

          <div className="grid grid-cols-1 md:grid-cols-2">
            <BookingConfirmationData
              email={gustDatailsOne?.email as string}
              age={Number(gustDatailsOne?.age)}
              phone={gustDatailsOne?.contactNo as string}
              specialRequests={gustDatailsOne?.requestMessage || "N/A"}
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

        {/* <Link href="/booking/payment"> */}
        <button
          onClick={() => handleBookingDataSend()}
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

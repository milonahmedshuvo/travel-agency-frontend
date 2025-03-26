import BookingConfirmed from "@/components/bookingForm/tour/BookingConfirmed"
import BookingTourBanner from "@/components/bookingForm/tour/BookingTourBanner"


const page = () => {
  return (
    <div>
        <BookingTourBanner/>
        <BookingConfirmed/>
    </div>
  )
}

export default page
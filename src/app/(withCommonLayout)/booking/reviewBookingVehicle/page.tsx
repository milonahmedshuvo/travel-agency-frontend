import BookingTourBanner from '@/components/bookingForm/tour/BookingTourBanner'
import BookingAndVehicleReview from '@/components/bookingForm/tour/ReviewVehicleAndBooking'
import React from 'react'

const page = () => {
  return (
    <div>
        <BookingTourBanner/>
        <BookingAndVehicleReview/>
    </div>
  )
}


export default page
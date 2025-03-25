import TourBookingForm from '@/components/bookingForm/tour/BookingFormOne';
import BookingTourBanner from '@/components/bookingForm/tour/BookingTourBanner';
import React from 'react'

const page = () => {

  return (
    <div> 
       <BookingTourBanner/>  
       <TourBookingForm/>  
    </div>
  )
}

export default page;
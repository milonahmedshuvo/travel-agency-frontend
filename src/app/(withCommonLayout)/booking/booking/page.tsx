'use client'
import TourBookingForm from '@/components/bookingForm/tour/BookingFormOne';
import BookingTourBanner from '@/components/bookingForm/tour/BookingTourBanner';
import React from 'react'

const TourBookingStep1 = () => {

  return (
    <div> 
       <BookingTourBanner/>  
       <TourBookingForm/>  
    </div>
  )
}

export default TourBookingStep1;
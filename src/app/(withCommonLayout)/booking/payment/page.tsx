import BookingTourBanner from '@/components/bookingForm/tour/BookingTourBanner';
import PaymentCard from '@/components/bookingForm/tour/Payment';
import React from 'react'

const page = () => {

  return (
    <div> 
        <BookingTourBanner/>
        <PaymentCard/>
    </div>
  )
}

export default page;
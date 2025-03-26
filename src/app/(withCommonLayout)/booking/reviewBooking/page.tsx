import BookingReview from '@/components/bookingForm/tour/BookingReview'
import BookingTourBanner from '@/components/bookingForm/tour/BookingTourBanner'
import React from 'react'

const page = () => {
  return (
    <div>
        <BookingTourBanner/>
        <BookingReview/>
    </div>
  )
}


export default page
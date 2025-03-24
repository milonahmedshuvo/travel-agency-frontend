import AccommodationBanner from '@/components/accommodation/accommodationBanner/AccommodationBanner'
import AccommodationBookingForm from '@/components/accommodation/accommodationBookingForm/AccommodationBookingForm'
import AccommodationItems from '@/components/accommodation/accommodationItems/AccommodationItems'
import React from 'react'

const page = () => {
  return (
    <div className=''>
      <AccommodationBanner/>
      <AccommodationBookingForm/>
      <AccommodationItems/>

    </div>
  )
}

export default page
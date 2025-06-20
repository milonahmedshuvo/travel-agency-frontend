import AccommodationBanner from '@/components/accommodation/accommodationBanner/AccommodationBanner'
// import AccommodationBookingForm from '@/components/accommodation/accommodationBookingForm/AccommodationBookingForm'
import AccommodationItems from '@/components/accommodation/accommodationItems/AccommodationItems'
import RoomFilterOptionInputFiled from '@/components/others/RoomFilterOptions/RoomFilterOptions'
import TravelLove from '@/components/others/travelLove/TravelLove'
import RecentBlog from '@/components/toursExperience/recentBlog/RecentBlog'
import TestimonialSlider from '@/components/toursExperience/testimonialSlider/TestimonialSlider'
import React from 'react'

const page = () => {
  return (
    <div className=''>
      <AccommodationBanner/>
      {/* <AccommodationBookingForm/> */}
      <RoomFilterOptionInputFiled/>
      <AccommodationItems/>
       
      <TravelLove/>
      <TestimonialSlider/>
        <RecentBlog/>
    </div>
  )
}

export default page
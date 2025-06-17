"use client"
import TourPackageFilterFiled from '@/components/others/tourPackageFilter/page'
import TravelLove from '@/components/others/travelLove/TravelLove'

import RecentBlog from '@/components/toursExperience/recentBlog/RecentBlog'
import SeatourBanner from '@/components/toursExperience/seatours/SeatourBanner'
import SeaTourItems from '@/components/toursExperience/seatours/SeatourItems'


import TestimonialSlider from '@/components/toursExperience/testimonialSlider/TestimonialSlider'
// import TravelBookingForm from '@/components/toursExperience/travelBookingForm/TravelBookingForm'
import React from 'react'


const page = () => {
  return (
    <div>
      <SeatourBanner/>
      {/* <TravelBookingForm/> */}
      <TourPackageFilterFiled/>
      <SeaTourItems/>
      <TravelLove frist="Why Travelers Love" secound="Our Sea Tours" thrid="" />
      <TestimonialSlider/>
      <RecentBlog/>
    </div>
  )
}


export default page
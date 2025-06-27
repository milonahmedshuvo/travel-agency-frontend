"use client"
import TourPackageFilterFiled from '@/components/others/tourPackageFilter/page'
import TravelLove from '@/components/others/travelLove/TravelLove'

import RecentBlog from '@/components/toursExperience/recentBlog/RecentBlog'
import SeatourBanner from '@/components/toursExperience/seatours/SeatourBanner'
import SeaTourItems from '@/components/toursExperience/seatours/SeatourItems'


import TestimonialSlider from '@/components/toursExperience/testimonialSlider/TestimonialSlider'
// import TravelBookingForm from '@/components/toursExperience/travelBookingForm/TravelBookingForm'
import React, { useRef } from 'react'


const SeaTourPage = () => {

  const scrollToRef = useRef<HTMLDivElement | null>(null);
  
    const handleScroll = () => {
      scrollToRef.current?.scrollIntoView({ behavior: "smooth" });
    };


  return (
    <div>
      <SeatourBanner onButtonClick={handleScroll} />
      {/* <TravelBookingForm/> */}
      <TourPackageFilterFiled/>
      <SeaTourItems scrollRef={scrollToRef} />
      <TravelLove frist="Why Travelers Love" secound="Our Sea Tours" thrid="" />
      <TestimonialSlider/>
      <RecentBlog/>
    </div>
  )
}


export default SeaTourPage;
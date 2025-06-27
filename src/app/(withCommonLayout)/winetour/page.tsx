"use client"
import TourPackageFilterFiled from '@/components/others/tourPackageFilter/page'
import TravelLove from '@/components/others/travelLove/TravelLove'
import RecentBlog from '@/components/toursExperience/recentBlog/RecentBlog'
import TestimonialSlider from '@/components/toursExperience/testimonialSlider/TestimonialSlider'
import WineTourBanner from '@/components/toursExperience/wineTours/wineTourBanner'
import WineTourItems from '@/components/toursExperience/wineTours/WineTourItems'
import React, { useRef } from 'react'





const WineTourPage = () => {

  const scrollToRef = useRef<HTMLDivElement | null>(null);
  
    const handleScroll = () => {
      scrollToRef.current?.scrollIntoView({ behavior: "smooth" });
    };


  return (
    <div>
      <WineTourBanner onButtonClick={handleScroll} />
      {/* <TravelBookingForm/> */}
      <TourPackageFilterFiled/>
      <WineTourItems scrollRef={scrollToRef} />
      <TravelLove frist="Experience History" secound="Never Before" thrid="Like" />
      <TestimonialSlider/>
      <RecentBlog/>
    </div>
  )
}

export default WineTourPage;
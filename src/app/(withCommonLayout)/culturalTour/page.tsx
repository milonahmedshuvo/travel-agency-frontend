"use client"

import TourPackageFilterFiled from '@/components/others/tourPackageFilter/page'
import TravelLove from '@/components/others/travelLove/TravelLove'
import CultularTourBanner from '@/components/toursExperience/culturalTours/CulturalTourBanner'
import CulturalTourItems from '@/components/toursExperience/culturalTours/CulturalToursItems'
import RecentBlog from '@/components/toursExperience/recentBlog/RecentBlog'
import TestimonialSlider from '@/components/toursExperience/testimonialSlider/TestimonialSlider'
// import TravelBookingForm from '@/components/toursExperience/travelBookingForm/TravelBookingForm'
import React, { useRef } from 'react'



const CulturalTourPage = () => {
const scrollToRef = useRef<HTMLDivElement | null>(null);

const handleScroll = () => {
    scrollToRef.current?.scrollIntoView({ behavior: "smooth" });
};

  return (
    <div>
     <CultularTourBanner onButtonClick={handleScroll} />
      {/* <TravelBookingForm/> */}
      <TourPackageFilterFiled/>
       <CulturalTourItems scrollRef={scrollToRef} />
      <TravelLove frist="Experience History" secound="Never Before" thrid="Like" />
      <TestimonialSlider/>
      <RecentBlog/>
    </div>
  )
}

export default CulturalTourPage;
"use client"

import TourPackageFilterFiled from '@/components/others/tourPackageFilter/page';
import TravelLove from '@/components/others/travelLove/TravelLove';
import LandtourBanner from '@/components/toursExperience/landTours/Landtourbanner';
import LandTourItems from '@/components/toursExperience/landTours/LandTourItems';
import RecentBlog from '@/components/toursExperience/recentBlog/RecentBlog';
import TestimonialSlider from '@/components/toursExperience/testimonialSlider/TestimonialSlider';
import React, { useRef } from 'react'


const LandTourPage = () => {
    const scrollToRef = useRef<HTMLDivElement | null>(null);
    
      const handleScroll = () => {
        scrollToRef.current?.scrollIntoView({ behavior: "smooth" });
      };

  return (
    <div>
      <LandtourBanner onButtonClick={handleScroll} />
      {/* <TravelBookingForm/> */}
      <TourPackageFilterFiled/>
      <LandTourItems scrollRef={scrollToRef} />
      <TravelLove frist="Experience the Ultimate" secound="Outdoor Adventure" thrid="" />
      <TestimonialSlider/>
      <RecentBlog/>
      </div>
  )
}

export default LandTourPage;
import TourPackageFilterFiled from '@/components/others/tourPackageFilter/page';
import TravelLove from '@/components/others/travelLove/TravelLove';
import LandtourBanner from '@/components/toursExperience/landTours/Landtourbanner';
import LandTourItems from '@/components/toursExperience/landTours/LandTourItems';
import RecentBlog from '@/components/toursExperience/recentBlog/RecentBlog';
import TestimonialSlider from '@/components/toursExperience/testimonialSlider/TestimonialSlider';
import React from 'react'


const page = () => {
    
  return (
    <div>
      <LandtourBanner/>
      {/* <TravelBookingForm/> */}
      <TourPackageFilterFiled/>
      <LandTourItems/>
      <TravelLove frist="Experience the Ultimate" secound="Outdoor Adventure" thrid="" />
      <TestimonialSlider/>
      <RecentBlog/>
      </div>
  )
}

export default page;
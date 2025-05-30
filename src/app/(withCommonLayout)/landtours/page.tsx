import TravelLove from '@/components/others/travelLove/TravelLove';
import LandtourBanner from '@/components/toursExperience/landTours/Landtourbanner';
// import LandTourItems from '@/components/toursExperience/landTours/LandTourItems';
import RecentBlog from '@/components/toursExperience/recentBlog/RecentBlog';
import TestimonialSlider from '@/components/toursExperience/testimonialSlider/TestimonialSlider';
import TravelBookingForm from '@/components/toursExperience/travelBookingForm/TravelBookingForm';
import React from 'react'

const page = () => {
    
  return (
    <div>
      <LandtourBanner/>
      <TravelBookingForm/>
      {/* <LandTourItems/> */}
      <TravelLove/>
      <TestimonialSlider/>
      <RecentBlog/>
      </div>
  )
}

export default page;
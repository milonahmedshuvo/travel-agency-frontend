import TourPackageFilterFiled from '@/components/others/tourPackageFilter/page'
import TravelLove from '@/components/others/travelLove/TravelLove'
import CultularTourBanner from '@/components/toursExperience/culturalTours/CulturalTourBanner'
import CulturalTourItems from '@/components/toursExperience/culturalTours/CulturalToursItems'
import RecentBlog from '@/components/toursExperience/recentBlog/RecentBlog'
import TestimonialSlider from '@/components/toursExperience/testimonialSlider/TestimonialSlider'
// import TravelBookingForm from '@/components/toursExperience/travelBookingForm/TravelBookingForm'
import React from 'react'

const page = () => {
  return (
    <div>
     <CultularTourBanner/>
      {/* <TravelBookingForm/> */}
      <TourPackageFilterFiled/>
       <CulturalTourItems/>
      <TravelLove/>
      <TestimonialSlider/>
      <RecentBlog/>
    </div>
  )
}

export default page
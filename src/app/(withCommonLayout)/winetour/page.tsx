import TravelLove from '@/components/others/travelLove/TravelLove'
import RecentBlog from '@/components/toursExperience/recentBlog/RecentBlog'
import TestimonialSlider from '@/components/toursExperience/testimonialSlider/TestimonialSlider'
import TravelBookingForm from '@/components/toursExperience/travelBookingForm/TravelBookingForm'
import WineTourBanner from '@/components/toursExperience/wineTours/wineTourBanner'
import WineTourItems from '@/components/toursExperience/wineTours/WineTourItems'
import React from 'react'

const page = () => {

  return (
    <div>
      <WineTourBanner/>
      <TravelBookingForm/>
      <WineTourItems/>
      <TravelLove/>
      <TestimonialSlider/>
      <RecentBlog/>
    </div>
  )
}

export default page
import TravelLove from '@/components/others/travelLove/TravelLove'
// import TourAllExperience from '@/components/toursExperience/allExperience/AllExperience'
import RecentBlog from '@/components/toursExperience/recentBlog/RecentBlog'
import SeaTour from '@/components/toursExperience/seatours/Seatours'
import LandToours from '@/components/toursExperience/landTours/Landtours'

import TestimonialSlider from '@/components/toursExperience/testimonialSlider/TestimonialSlider'
import ToursExperiBanner from '@/components/toursExperience/ToursExperiBanner/ToursExperiBanner'
import TravelBookingForm from '@/components/toursExperience/travelBookingForm/TravelBookingForm'
import React from 'react'
import CulturalTours from '@/components/toursExperience/culturalTours/CulturalTours'
import WineTours from '@/components/toursExperience/wineTours/WineTours'


const page = () => {
  return (
    <div>
      <ToursExperiBanner/>
      <TravelBookingForm/>

      {/* show all tour  */}
      <SeaTour/>
      <LandToours/>
      <CulturalTours/>
      <WineTours/>      

      <TravelLove/>
      <TestimonialSlider/>
      <RecentBlog/>
    </div>
  )
}

export default page
import TravelLove from '@/components/others/travelLove/TravelLove'
import TourAllExperience from '@/components/toursExperience/allExperience/AllExperience'
import TestimonialSlider from '@/components/toursExperience/testimonialSlider/TestimonialSlider'
import ToursExperiBanner from '@/components/toursExperience/ToursExperiBanner/ToursExperiBanner'
import TravelBookingForm from '@/components/toursExperience/travelBookingForm/TravelBookingForm'
import React from 'react'


const page = () => {
  return (
    <div>
      <ToursExperiBanner/>
      <TravelBookingForm/>
      <TourAllExperience/>
      <TravelLove/>
      <TestimonialSlider/>
    </div>
  )
}

export default page
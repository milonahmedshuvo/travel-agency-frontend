import TourAllExperience from '@/components/toursExperience/allExperience/AllExperience'
import ToursExperiBanner from '@/components/toursExperience/ToursExperiBanner/ToursExperiBanner'
import TravelBookingForm from '@/components/toursExperience/travelBookingForm/TravelBookingForm'
import React from 'react'


const page = () => {
  return (
    <div>
      <ToursExperiBanner/>
      <TravelBookingForm/>
      <TourAllExperience/>
    </div>
  )
}

export default page
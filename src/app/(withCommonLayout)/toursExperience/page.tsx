"use client"

import RecentBlog from '@/components/toursExperience/recentBlog/RecentBlog'
import SeaTour from '@/components/toursExperience/seatours/Seatours'


import TestimonialSlider from '@/components/toursExperience/testimonialSlider/TestimonialSlider'
import ToursExperiBanner from '@/components/toursExperience/ToursExperiBanner/ToursExperiBanner'
import React from 'react'
import CulturalTours from '@/components/toursExperience/culturalTours/CulturalTours'
import WineTours from '@/components/toursExperience/wineTours/WineTours'
import LandTours from '@/components/toursExperience/landTours/Landtours'
import TourPackageFilterFiled from '@/components/others/tourPackageFilter/page'


const page = () => {

  
  return (
    <div>
      <ToursExperiBanner/>
      {/* <TravelBookingForm/> */}
      <TourPackageFilterFiled/>


      {/*show all tour*/}
      <SeaTour/>
       <LandTours/>
      <CulturalTours/>
      <WineTours/>  

      <TestimonialSlider/>
      <RecentBlog/>
    </div>
  )
}

export default page
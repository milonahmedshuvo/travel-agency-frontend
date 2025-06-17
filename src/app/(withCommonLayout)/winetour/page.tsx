import TourPackageFilterFiled from '@/components/others/tourPackageFilter/page'
import TravelLove from '@/components/others/travelLove/TravelLove'
import RecentBlog from '@/components/toursExperience/recentBlog/RecentBlog'
import TestimonialSlider from '@/components/toursExperience/testimonialSlider/TestimonialSlider'
import WineTourBanner from '@/components/toursExperience/wineTours/wineTourBanner'
import WineTourItems from '@/components/toursExperience/wineTours/WineTourItems'
import React from 'react'





const page = () => {

  return (
    <div>
      <WineTourBanner/>
      {/* <TravelBookingForm/> */}
      <TourPackageFilterFiled/>
      <WineTourItems/>
      <TravelLove frist="Experience History" secound="Never Before" thrid="Like" />
      <TestimonialSlider/>
      <RecentBlog/>
    </div>
  )
}

export default page
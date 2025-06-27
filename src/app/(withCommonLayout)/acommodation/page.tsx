"use client"
import AccommodationBanner from '@/components/accommodation/accommodationBanner/AccommodationBanner'
// import AccommodationBookingForm from '@/components/accommodation/accommodationBookingForm/AccommodationBookingForm'
import AccommodationItems from '@/components/accommodation/accommodationItems/AccommodationItems'
import RoomFilterOptionInputFiled from '@/components/others/RoomFilterOptions/RoomFilterOptions'
import AccommodationLove from '@/components/others/travelLove/AccommodationLove'
// import TravelLove from '@/components/others/travelLove/TravelLove'
import RecentBlog from '@/components/toursExperience/recentBlog/RecentBlog'
import TestimonialSlider from '@/components/toursExperience/testimonialSlider/TestimonialSlider'
import { useRef } from 'react'




const AccommodationPage = () => {

  const scrollToRef = useRef<HTMLDivElement | null>(null);

  const handleScroll = () => {
    scrollToRef.current?.scrollIntoView({ behavior: "smooth" });
  };


  return (
    <div className=''>
      <AccommodationBanner onButtonClick={handleScroll}  />
      {/* <AccommodationBookingForm/> */}
      <RoomFilterOptionInputFiled/>

      <AccommodationItems scrollRef={scrollToRef} />
       
      {/* <TravelLove/> */}
      <AccommodationLove frist="Experience History" secound="Never Before" thrid="Like" ></AccommodationLove>
      <TestimonialSlider/>
        <RecentBlog/>
    </div>
  )
}

export default AccommodationPage;
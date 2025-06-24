import AccommodationBanner from '@/components/accommodation/accommodationBanner/AccommodationBanner'
// import AccommodationBookingForm from '@/components/accommodation/accommodationBookingForm/AccommodationBookingForm'
import AccommodationItems from '@/components/accommodation/accommodationItems/AccommodationItems'
import RoomFilterOptionInputFiled from '@/components/others/RoomFilterOptions/RoomFilterOptions'
import AccommodationLove from '@/components/others/travelLove/AccommodationLove'
// import TravelLove from '@/components/others/travelLove/TravelLove'
import RecentBlog from '@/components/toursExperience/recentBlog/RecentBlog'
import TestimonialSlider from '@/components/toursExperience/testimonialSlider/TestimonialSlider'




const page = () => {
  return (
    <div className=''>
      <AccommodationBanner/>
      {/* <AccommodationBookingForm/> */}
      <RoomFilterOptionInputFiled/>
      <AccommodationItems/>
       
      {/* <TravelLove/> */}
      <AccommodationLove frist="Experience History" secound="Never Before" thrid="Like" ></AccommodationLove>
      <TestimonialSlider/>
        <RecentBlog/>
    </div>
  )
}

export default page
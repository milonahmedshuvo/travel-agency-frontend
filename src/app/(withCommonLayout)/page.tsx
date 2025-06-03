
import Accommodation from '@/components/home/accommodation/Accommodation';
import Banner from '@/components/home/banner/Banner';
import ProductCarousel from '@/components/home/carousel/Carousel';
import TestimonialSection from '@/components/home/testimonial/testimonial';
// import TourExperience from '@/components/home/tourExperience/Tour';
// import TourExperience from '@/components/home/tourExperience/Tour';
import TourExperienceAllCategory from '@/components/home/tourExperience/TourExperienceAllCategory';
// import AllVehicleTourCards from '@/components/home/vehicle/AllVehicleTourCards';
// import Vehicle from '@/components/home/vehicle/Vehicle';
import RecentBlog from '@/components/toursExperience/recentBlog/RecentBlog';
import TravelBookingForm from '@/components/toursExperience/travelBookingForm/TravelBookingForm';




const page = () => {


  return (
    <div>
       <Banner></Banner>
       <TravelBookingForm/>
       <ProductCarousel/>
       {/* <TourExperience/>   */}
       <TourExperienceAllCategory/>


       <Accommodation/>
       {/* All Vehicle cards */}
       {/* <AllVehicleTourCards/> */}


       <TestimonialSection/>
      <RecentBlog/>
      
     

    </div>
  )
}

export default page;
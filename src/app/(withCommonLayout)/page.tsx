
import Accommodation from '@/components/home/accommodation/Accommodation';
import Banner from '@/components/home/banner/Banner';
import ProductCarousel from '@/components/home/carousel/Carousel';
import TestimonialSection from '@/components/home/testimonial/testimonial';
import TourExperience from '@/components/home/tourExperience/Tour';
import Vehicle from '@/components/home/vehicle/Vehicle';
import RecentBlog from '@/components/toursExperience/recentBlog/RecentBlog';
import TravelBookingForm from '@/components/toursExperience/travelBookingForm/TravelBookingForm';





const page = () => {

  
  return (
    <div>
       <Banner></Banner>
       <TravelBookingForm/>
       <ProductCarousel/>
       <TourExperience/>
       <Accommodation/>
       <Vehicle/>
       <TestimonialSection/>
      <RecentBlog/>
    </div>
  )
}

export default page;